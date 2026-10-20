import { siteConfig } from "../../site-config.js";
import { createHmac, randomBytes } from "node:crypto";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16000;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const rateLimitSalt = randomBytes(32);
// A per-instance safeguard, not a distributed rate limiter. Production edge
// rules remain useful when a site receives sustained automated traffic.
const attempts = new Map();

function json(message, status, extraHeaders = {}) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex", ...extraHeaders } });
}

function allowAttempt(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const clientKey = createHmac("sha256", rateLimitSalt).update(ip).digest("hex");
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const current = attempts.get(clientKey) || { count: 0, expires: now + WINDOW_MS };
  if (current.count >= MAX_ATTEMPTS) return false;
  // Bound memory even if many clients reach one serverless instance.
  if (attempts.size >= 1000 && !attempts.has(clientKey)) return false;
  attempts.set(clientKey, { ...current, count: current.count + 1 });
  return true;
}

async function readJson(request) {
  if (!request.body) throw new Error("invalid");
  const declaredSize = Number(request.headers.get("content-length"));
  if (declaredSize > MAX_BODY_BYTES) throw new Error("large");
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("large");
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

function validate(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
  const limits = { name: 120, email: 254, company: 160, budget: 120, "project-gap": 6000, "target-launch": 120, "relevant-link": 2048 };
  const fields = {};
  for (const [name, maxLength] of Object.entries(limits)) {
    if (typeof payload[name] !== "string") return null;
    const value = payload[name].trim();
    if (value.length > maxLength || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) return null;
    if (name !== "relevant-link" && !value) return null;
    if (name !== "project-gap" && /[\r\n]/.test(value)) return null;
    fields[name] = value;
  }
  if (fields["project-gap"].length < 40 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return null;
  if (!["final", "joining", "defining"].includes(payload.authority) || payload.consent !== true) return null;
  if (payload["contact-check"] !== "") return null;
  if (fields["relevant-link"]) {
    try {
      const link = new URL(fields["relevant-link"]);
      if (!["https:", "http:"].includes(link.protocol) || link.username || link.password) return null;
    } catch { return null; }
  }
  return { ...fields, authority: payload.authority };
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  const allowedOrigins = new Set([siteConfig.url, requestUrl.origin]);
  // Next's local server can normalize a loopback URL to localhost. Treat its
  // two loopback names as equivalent at the same port, without allowing remote origins.
  if (["localhost", "127.0.0.1"].includes(requestUrl.hostname)) {
    for (const hostname of ["localhost", "127.0.0.1"]) {
      const local = new URL(requestUrl.origin);
      local.hostname = hostname;
      allowedOrigins.add(local.origin);
    }
  }
  if (origin && !allowedOrigins.has(origin)) return json("This request could not be accepted. Please use the contact form on our website.", 403);
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") return json("Please submit the project form again.", 415);
  if (!allowAttempt(request)) return json(`Too many attempts. Please wait before trying again, or email ${siteConfig.email}.`, 429, { "Retry-After": "900" });
  let payload;
  try { payload = await readJson(request); }
  catch (error) { return json(error.message === "large" ? "This brief is too long. Please shorten it or email us." : "Please check the form and submit it again.", error.message === "large" ? 413 : 400); }
  const data = validate(payload);
  if (!data) return json("Please check all required fields, use a valid email and website URL, and confirm permission to respond.", 400);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return json(`The form is temporarily unavailable. Your brief has not been sent. Please email ${siteConfig.email}.`, 503);

  const text = [
    "New TENZO STUDIO project brief",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Budget: ${data.budget}`,
    `Target launch: ${data["target-launch"]}`,
    `Decision authority: ${data.authority}`,
    `Relevant link: ${data["relevant-link"] || "Not provided"}`,
    "Permission to review and respond: confirmed",
    "", "Project brief:", data["project-gap"],
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [siteConfig.email], reply_to: data.email, subject: "New TENZO STUDIO project brief", text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return json(`The email service could not accept your brief. Please email ${siteConfig.email}.`, 502);
    const result = await response.json();
    if (typeof result.id !== "string" || !result.id) return json(`Delivery could not be confirmed. Please email ${siteConfig.email}.`, 502);
    return json("Your brief has been accepted by our email service. TENZO will review it and reply to the email you provided.", 200);
  } catch {
    return json(`Delivery could not be confirmed. Your details remain in the form. Please email ${siteConfig.email}.`, 502);
  }
}
