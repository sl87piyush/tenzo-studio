# Contact delivery implementation — 20 October 2026

The shared `ProjectForm` preserves the existing form classes, input names, and collapsed homepage behavior. It posts JSON to `/api/contact` through the existing browser script. Name, work email, business, budget, project description, target launch, decision authority, and permission to respond are required; the relevant website link is optional. The form also displays the founder-confirmed `piyush@tenzostudio.com` mailto link.

## Actual delivery configuration

The server route uses the Resend email API through server-side `fetch`; no new dependency was added. It always sends to `siteConfig.email` (`piyush@tenzostudio.com`) and uses the visitor's validated email only as the reply address. The subject is fixed and the body is plain text.

Both server environment variables are required:

- `RESEND_API_KEY`: a key for the studio's Resend account.
- `CONTACT_FROM_EMAIL`: a sender address authorized by that account after domain verification, optionally with the studio display name.

`.env.example` documents the variable names without secrets. Do not use `NEXT_PUBLIC_` for either setting. Configure them in the deployment environment as well as local development, then rebuild/redeploy with founder approval.

**Current blocker:** neither variable was set in the local process inspected during implementation. Production secret configuration was not inspected. Real inbox receipt, domain verification, and live delivery have not been tested. Without configuration the endpoint returns HTTP 503, retains the visitor's inputs in the browser, and clearly directs them to email. It does not claim the brief was sent.

After a successful API response, the UI says that the email service accepted the brief. Provider acceptance is not the same as confirmed inbox delivery. A timeout or ambiguous provider response says delivery could not be confirmed; it does not claim nothing was sent.

## Validation and abuse controls

- Server validation covers required fields, field lengths, email format, no newline injection in single-line fields, allowed authority values, explicit consent, and HTTP/HTTPS URLs without embedded credentials.
- The request body is read with a 16,000-byte limit, including when no Content-Length is supplied.
- A hidden, non-focusable honeypot must remain empty.
- Cross-origin browser requests are rejected; the endpoint accepts JSON only.
- Per-instance rate limiting permits five attempts per 15 minutes. It stores keyed hashes of network addresses and counters in memory, with a fresh random salt per process. Expired entries are removed on subsequent requests; the map is bounded at 1,000 entries.
- This in-memory limit is a basic safeguard. Different serverless instances do not share counters, and process restarts reset them. It does not replace persistent edge rate limits if sustained abuse becomes a problem.
- No request content or provider response body is logged by this handler. Hosting and email-provider data practices still need founder review for the privacy notice.

The HTML form declares `method="post"` and `action="/api/contact"`, so a JavaScript failure does not put project details in a URL query. Without JavaScript, the page instructs visitors to email. A native non-JSON submission fails safely with HTTP 415 rather than pretending delivery succeeded.

## Executed checks

- `node --check public/js/main.js`: passed.
- `git diff --check`: passed at the time of the check.
- One-off Node assertions imported the actual API handler and mocked every email-provider call. **20 assertions passed:** malformed JSON, invalid email, consent, short brief, honeypot, unsupported URL scheme, newline injection, origin rejection, non-JSON/no-JavaScript submission, excessive body, absent configuration, accepted provider request, provider error, network failure, five allowed attempts, and the subsequent rate-limit rejection.
- The successful mock verified the recipient, reply address, plain-text message, and fixed provider endpoint. No real email was sent.
- Full production build, rendered form/mobile checks, and route integration are verified by the parent implementation after wiring `ProjectForm` into the pages.

**Final integration update:** `npm test` now runs persistent tests in `tests/contact.test.mjs`; 23 tests passed, including a regression for Next's equivalent loopback hostnames at the same port. Local browser testing also exposed and fixed sticky custom validity on unselected radio options. Empty submit → complete fields → select an option → submit now reaches the honest unavailable response and retains the entered details. The production build and local route checks passed. The server was not configured to send real messages during testing.

## Founder completion steps

1. Choose/confirm Resend as the form email processor and verify the sending domain in the studio's own account.
2. Add the server secrets using the hosting provider's secret settings; do not paste keys into public source or client code.
3. Review the privacy notice against the actual hosting, inbox, email-provider, and retention arrangements.
4. After the approved deployment, submit a real brief and confirm receipt at the business inbox, reply address behavior, failure feedback, and spam handling.
