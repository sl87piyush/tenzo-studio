# TENZO STUDIO trust, social and technical implementation

**20 October 2026. Status: implemented locally; not deployed.** This report supersedes the earlier contact-email and missing-social blockers in the September SEO notes. The business email and social destinations were explicitly confirmed in the two October implementation briefs.

## Audit and fixes

| Original evidence | Implemented change | Verification / limit |
|---|---|---|
| About/home named only Piyush; no public email or social links; no dedicated Contact page | Consistent Piyush Choudhary, independent founder-operated studio, Jodhpur, business email; new Contact page | Visible on home, About, Contact and shared footer; no founding date, legal registration or invented office |
| Homepage form had an empty delivery endpoint | Shared form, server-only Resend route, validation, honeypot, body cap, bounded per-instance rate counters, email fallback | Mocked-handler tests and local browser error recovery passed; actual inbox delivery is **not** verified without credentials |
| Empty submission left custom radio-group errors behind after an option was selected | Clear validity for the entire radio group on change/input | Browser empty-submit → fill → select → submit regression reached the honest HTTP 503 state and retained entered values |
| Static privacy label was not a link | Factual `/privacy/` notice prepared, linked from footer/form/contact | Draft for founder review before production; hosting/inbox retention and proposed Resend processor require review |
| Child pages replaced Open Graph metadata without retaining the image | Shared page metadata with full Open Graph and Twitter cards | All nine local public pages have distinct titles/descriptions, self-canonicals and social image metadata |
| Existing Organization lacked confirmed email/socials/full founder name | One Organization linked to Person and WebSite in one JSON-LD graph; Service retained; visible breadcrumbs matched by BreadcrumbList | All local JSON-LD parsed; one Organization per page; exact three official `sameAs` links. No Google rich-result eligibility or knowledge-panel guarantee |
| Initial `js` class could conceal content when scripts failed | Server starts in `no-js`; existing script enables enhancement; corrected specificity in hero fallback; storage denial cannot stop preloader | JavaScript-disabled mobile browser: hero opacity 1, preloader hidden, navigation visible, no horizontal overflow |
| Root typography variables referenced a font variable defined only on body | Font variable moved to root; safe token fallbacks | Inner-page computed display type and rendered layouts checked after build |
| Full-size JPEGs served without responsive alternatives | Existing images now use Next Image sizes/srcset; hero preloaded; below-fold images remain lazy | Local 640px WebP hero response was 10,148 bytes versus 359,175-byte source JPEG; this compares one delivered size, not field CWV |
| Next 16.2.10 predates October security fixes | Pinned official patched Next 16.4.1, updated transitive baseline-browser-mapping | Production build passed; npm update/audit reported zero known advisories. See official [October advisory](https://nextjs.org/blog/nextjs-security-update-october-14-2026) |
| Live response lacked baseline browser security headers | nosniff, frame protection, referrer/permissions policies and limited CSP | Verified on local HTTP responses; CSP intentionally does not claim comprehensive script/XSS protection |
| Hand-maintained sitemap/robots could drift as pages are added | Next metadata routes derive service URLs from source and include About/Contact/Privacy | Nine canonical `www` URLs; public robots references sitemap and excludes API crawling |

## Already working and preserved

- Next.js App Router static page content, valid live sitemap and crawlable primary text.
- Existing preferred `www` host. No hostname migration performed. Live HTTPS apex redirects permanently to `www`; HTTP apex still takes two hosting redirects. This requires hosting-level review if a one-hop redirect is desired.
- Existing brand colors, fonts, images, animations, service routes and homepage sections.
- Three portfolio system studies are conceptual. Each now has a visible concept label, and the section still explains the classification. No actual client work, testimonials or outcomes were invented.
- All three founder-confirmed social URLs resolved with HTTP 200 during the public check. URL reachability is not an independent ownership verification. No external profiles were modified.

## Files and routes

- Shared identity and UI: `app/site-config.js`, `app/components/{SocialLinks,StudioFooter,PageHeader,Breadcrumbs,ProjectForm}.jsx`, `css/studio-identity.css`.
- Existing pages updated: `app/page.jsx`, `app/about/page.jsx`, `app/services/[slug]/page.jsx`, `app/services/service-data.js`, `app/services/services.css`.
- New public routes: `/contact/`, `/privacy/`. New server endpoint: `/api/contact/` (non-indexed, no-store responses).
- Metadata and rendering: `app/seo.js`, `app/layout.jsx`, `app/sitemap.js`, `app/robots.js`; removed competing `public/sitemap.xml` and `public/robots.txt`.
- Quality/security: `css/hero.css`, `css/global.css`, `css/tokens.css`, `public/js/main.js`, `next.config.mjs`, `package.json`, `package-lock.json`, `.env.example`, `tests/contact.test.mjs`.

## Executed QA

- Production build passed on Next 16.4.1. No dedicated lint or type-check script exists; none is claimed. Next's build completed its own checks.
- `npm test`: 23 tests passed against the real contact handler, with all email-provider requests mocked. Includes origin validation, loopback regression, injection/URL validation, consent, honeypot, body limits, missing configuration, provider failures, accepted payload, rate limit and expiry. No real email sent.
- Local crawl: all nine public routes 200; unique titles/descriptions; one H1; correct canonical, OG/Twitter image and parsed structured data; internal destinations reachable; unknown page 404; nine-URL XML sitemap; robots and security headers checked.
- Contact/About mobile, tablet and desktop layouts inspected; 390/768/1280 px reflow checked with no horizontal overflow. A fresh 1280px browser context confirmed the About display heading at 99.84px after the root font fix. Social icon links have accessible names, safe new-tab attributes and at least 44×44 px targets.
- Keyboard mobile menu opened with `aria-expanded=true`, focused inside the menu, closed on Escape and restored focus to its toggle. Reduced-motion browser context confirmed social transitions at 0s. A global important transition rule initially overrode the component's reduction; this was corrected.
- Form browser check: blank submission blocked; after completing fields the API returned an honest unavailable message when delivery secrets were absent; entered data remained in the form. No real delivery claim.
- No full assistive-technology conformance audit, penetration test, CrUX field result or measured live Google index status is claimed.

Preview artifacts are saved outside the repository: `/Users/tarunchoudhary/ai/output/playwright/tenzo-trust-about-desktop.png`, `tenzo-trust-contact-mobile.png`, and `tenzo-trust-home-nojs-mobile.png` in the same directory.

## Founder decisions and external dependencies

1. **Email delivery:** choose/approve Resend, verify its sender, and configure `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in server-side hosting secrets. Never place them in `NEXT_PUBLIC_*`. Then approve publishing and confirm a test brief reaches the inbox. See `CONTACT-DELIVERY.md`.
2. **Privacy review:** confirm hosting dashboard integrations, actual email provider, processor choice, handling/retention of enquiries and deletion-request workflow. The notice states observed code behavior and does not invent a retention period or compliance certification. Update the notice if production integrations differ.
3. **Client work:** no DDHORA evidence or authorized case-study assets were found in this repository. Provide project status, approved name/public link, real screenshots, stack/scope and permission before replacing concept work.
4. **Attemply:** no public site reference added. The brief describes a founder-developed product, while ownership/operating relationship and publication permission still need confirmation. Proposed copy for review: “Attemply is an early-stage adaptive learning product being developed by TENZO STUDIO's founder. In development.” This does not imply studio ownership, incorporation, launched users or production Claude usage. No private product details published.
5. **Founder LinkedIn/date:** no confirmed founder LinkedIn URL, photo or launch date was supplied. These were omitted. Provide them only if they should appear publicly.
6. **Search Console:** login alone does not establish property verification. In a verified property, submit the updated sitemap after release and inspect Home/About/priority service pages. Record Google-selected canonical and exclusion reason. No account-changing action was performed.

## Cross-platform consistency checklist (manual review)

| Channel | Suggested public consistency checks |
|---|---|
| Instagram `tenzo.studio` | TENZO STUDIO name; current brand image; independent Jodhpur studio description; direct canonical website and business email |
| X `tenzostudio` | Same brand name and visual identity; real development/design services; canonical site; no unsupported team/registration/partnership claims |
| Linktree `tenzostudio` | Canonical website first, then direct Instagram/X/email; remove stale or duplicate destinations; no invented founder LinkedIn |
| Founder LinkedIn, if supplied | Piyush Choudhary, accurate role and business history; link to the same canonical website; only verified start date |

## Readiness assessment

| Area | Assessment |
|---|---|
| Technical quality | Local build, routes and substantive regressions verified; deployment and real email delivery pending |
| Public identity consistency | Confirmed name/founder/location/email/socials integrated in local pages and schema |
| Portfolio credibility | Concepts clearly labeled; commercial case-study proof remains unavailable |
| Crawlability | Local metadata/sitemap/robots/statuses verified; Google indexing and query performance require Search Console |
| Legal/registration representation | Independent studio wording; no invented company/GST/LLP/Pvt Ltd/date/award/team claims; privacy handling needs founder review |
| Third-party startup verification | Better public identity and contact evidence prepared; product/client evidence still depends on founder confirmation. Technical changes do not guarantee program acceptance |

The next review should verify the approved live release, inbox delivery, final privacy accuracy and Search Console's actual indexing decisions before attributing any search or lead change to this work.
