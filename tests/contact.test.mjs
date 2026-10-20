import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../app/api/contact/route.js";

const brief = {
  name: "Test Person",
  email: "visitor@example.com",
  company: "Example Business",
  budget: "INR 50000",
  "project-gap": "We need an accessible website with clear service pages and a reliable enquiry path.",
  "target-launch": "November 2026",
  "relevant-link": "https://example.com/",
  authority: "final",
  consent: true,
  "contact-check": "",
};

let requestNumber = 0;
function request(payload = brief, headers = {}) {
  return new Request("https://www.tenzostudio.com/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://www.tenzostudio.com",
      "x-forwarded-for": `contact-test-${++requestNumber}`,
      ...headers,
    },
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  });
}

async function expectResponse(payload, status, headers) {
  const response = await POST(request(payload, headers));
  assert.equal(response.status, status);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("x-robots-tag"), "noindex");
  const result = await response.json();
  assert.equal(typeof result.message, "string");
  return { response, message: result.message };
}

// Keep subtests sequential: they intentionally exercise the real handler's
// in-memory limiter and temporarily replace process-only delivery settings.
test("contact endpoint validation and delivery safeguards", async (t) => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.RESEND_API_KEY;
  const originalSender = process.env.CONTACT_FROM_EMAIL;
  const originalNow = Date.now;
  globalThis.fetch = async () => { throw new Error("Unexpected provider call in test"); };
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM_EMAIL;

  try {
    await t.test("rejects cross-origin browser submission", async () => {
      await expectResponse(brief, 403, { origin: "https://other.example" });
    });

    await t.test("accepts equivalent loopback hosts only at the same local port", async () => {
      const localRequest = (origin) => new Request("http://localhost:3100/api/contact/", {
        method: "POST", headers: { "content-type": "application/json", origin }, body: JSON.stringify(brief),
      });
      assert.equal((await POST(localRequest("http://127.0.0.1:3100"))).status, 503);
      assert.equal((await POST(localRequest("http://127.0.0.1:4000"))).status, 403);
      assert.equal((await POST(localRequest("http://other.example:3100"))).status, 403);
    });

    await t.test("rejects native non-JSON submission without claiming delivery", async () => {
      const { message } = await expectResponse("name=Test", 415, { "content-type": "application/x-www-form-urlencoded" });
      assert.doesNotMatch(message, /accepted|received|sent successfully/i);
    });

    await t.test("rejects malformed JSON and non-object payloads", async () => {
      await expectResponse("{", 400);
      await expectResponse("null", 400);
      await expectResponse("[]", 400);
    });

    const invalidInputs = [
      ["missing name", { ...brief, name: " " }],
      ["invalid email", { ...brief, email: "invalid" }],
      ["email header injection", { ...brief, email: "visitor@example.com\r\nBcc: other@example.com" }],
      ["short project description", { ...brief, "project-gap": "short" }],
      ["oversized field", { ...brief, company: "x".repeat(161) }],
      ["missing consent", { ...brief, consent: false }],
      ["non-boolean consent", { ...brief, consent: "on" }],
      ["unknown decision authority", { ...brief, authority: "other" }],
      ["unsupported website scheme", { ...brief, "relevant-link": "ftp://example.com/" }],
      ["URL with embedded credentials", { ...brief, "relevant-link": "https://user:password@example.com/" }],
      ["filled honeypot", { ...brief, "contact-check": "automated content" }],
    ];
    for (const [name, payload] of invalidInputs) {
      await t.test(`rejects ${name}`, async () => { await expectResponse(payload, 400); });
    }

    await t.test("enforces declared and streamed body limits", async () => {
      await expectResponse(brief, 413, { "content-length": "17000" });
      await expectResponse("x".repeat(17000), 413);
    });

    await t.test("returns an honest error with the business email when unconfigured", async () => {
      const { message } = await expectResponse(brief, 503);
      assert.match(message, /has not been sent/);
      assert.match(message, /piyush@tenzostudio\.com/);
      process.env.RESEND_API_KEY = "mock-contact-key";
      await expectResponse(brief, 503); // A key alone does not authorize a sender.
    });

    process.env.CONTACT_FROM_EMAIL = "TENZO Test <test@verified.invalid>";
    await t.test("sends plain text only to the configured studio with visitor reply address", async () => {
      let providerCalls = 0;
      globalThis.fetch = async (url, options) => {
        providerCalls++;
        assert.equal(url, "https://api.resend.com/emails");
        assert.equal(options.method, "POST");
        assert.equal(options.headers.Authorization, "Bearer mock-contact-key");
        const body = JSON.parse(options.body);
        assert.deepEqual(body.to, ["piyush@tenzostudio.com"]);
        assert.equal(body.from, "TENZO Test <test@verified.invalid>");
        assert.equal(body.reply_to, brief.email);
        assert.equal(body.subject, "New TENZO STUDIO project brief");
        assert.equal(body.html, undefined);
        assert.match(body.text, /<script>example<\/script>/);
        assert.match(body.text, /Not provided/);
        assert.ok(options.signal instanceof AbortSignal);
        return Response.json({ id: "mock-message-id" });
      };
      const { message } = await expectResponse({ ...brief, "relevant-link": "", "project-gap": `${brief["project-gap"]}\n<script>example</script>` }, 200, { "content-type": "application/json; charset=utf-8" });
      assert.equal(providerCalls, 1);
      assert.match(message, /accepted by our email service/);
      assert.doesNotMatch(message, /one business day|inbox delivery/i);
    });

    await t.test("handles provider refusal without exposing its response", async () => {
      globalThis.fetch = async () => Response.json({ detail: "private upstream detail" }, { status: 500 });
      const { message } = await expectResponse(brief, 502);
      assert.doesNotMatch(message, /private upstream detail/);
    });

    await t.test("does not claim success for an ambiguous provider response", async () => {
      globalThis.fetch = async () => Response.json({});
      const { message } = await expectResponse(brief, 502);
      assert.match(message, /could not be confirmed/);
    });

    await t.test("handles network or timeout failure without leaking error details", async () => {
      globalThis.fetch = async () => { throw new Error("private network diagnostic"); };
      const { message } = await expectResponse(brief, 502);
      assert.match(message, /could not be confirmed/);
      assert.doesNotMatch(message, /private network diagnostic/);
    });

    await t.test("rate limits repeated attempts and releases the expired window", async () => {
      delete process.env.RESEND_API_KEY;
      delete process.env.CONTACT_FROM_EMAIL;
      const headers = { "x-forwarded-for": "contact-rate-test" };
      for (let i = 0; i < 5; i++) await expectResponse(brief, 503, headers);
      const { response } = await expectResponse(brief, 429, headers);
      assert.equal(response.headers.get("retry-after"), "900");
      const later = originalNow() + 16 * 60 * 1000;
      Date.now = () => later;
      await expectResponse(brief, 503, headers);
    });
  } finally {
    globalThis.fetch = originalFetch;
    Date.now = originalNow;
    if (originalKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalKey;
    if (originalSender === undefined) delete process.env.CONTACT_FROM_EMAIL;
    else process.env.CONTACT_FROM_EMAIL = originalSender;
  }
});
