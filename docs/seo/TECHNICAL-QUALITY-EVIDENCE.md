# Technical quality evidence — 20 October 2026

This is a bounded audit of the pre-change repository and current production response. Concurrent implementation work may resolve the source findings below; the final QA report should record those results separately. No production deployment or account changes were made for this audit.

## Verified observations

- Stack: Next.js App Router, `next` 16.2.10, React/React DOM 19.2.7 from the lockfile. Package commands are `dev`, `build`, and `start`; no lint, type-check, or test command is configured.
- Production `https://www.tenzostudio.com/` returned HTTP 200 from Vercel with HSTS. `render_page.py --mode never` classified the page as non-SPA, with approximately 133 KB of raw HTML and valid Organization JSON-LD. This demonstrates server-delivered content; it is not a rendering or indexing guarantee.
- The sitemap discovery helper validated the robots-declared `https://www.tenzostudio.com/sitemap.xml` as a 200 XML urlset, with no discovery warnings. Fallback sitemap URLs correctly returned 404.
- `https://tenzostudio.com/` permanently redirects once to `www`; `http://www.tenzostudio.com/` permanently redirects once to HTTPS. `http://tenzostudio.com/` uses two 308 hops, first upgrading the apex to HTTPS and then moving to `www`.
- All founder-provided social URLs returned HTTP 200 to a HEAD request: X, Instagram, and Linktree. This verifies reachability only. Social platforms can serve login/interstitial responses, so profile content and ownership were not independently established. The founder-provided destinations must be retained unchanged.
- Existing home artwork is explicitly labeled as three conceptual system studies, not client case studies. No DDHORA or Attemply references or approved case-study evidence were found in this repository. That does not establish whether such work exists elsewhere.
- Source already includes image dimensions, lazy loading for lower-page imagery, a high-priority hero image, visible focus styles, reduced-motion CSS/JavaScript, and a mobile-menu focus trap with Escape handling. These are source checks; keyboard and viewport behavior still need rendered QA.

## Five actionable findings

| Priority | Evidence and impact | Minimal change | Verification and failure check |
|---|---|---|---|
| High | `app/layout.jsx` initially renders `<html className="js">`. `css/hero.css` hides an unentered hero and covers the page with the preloader, while its fallback rules require `.no-js`. With JavaScript disabled or a failed script chain, the static page can remain covered or visually hidden. | Start from accessible, visible HTML. Only activate the preloader and hidden animation states after the relevant script is ready; retain a no-script fallback. Handle loader failures without covering content. | Open the production build with JavaScript disabled and with one enhancement script blocked. The hero, contact email, links, and service copy must remain visible and usable. If they do not, the fix failed. |
| High | Lockfile Next 16.2.10 predates the official 14 October security release. The current source does not use Server Actions, Cache Components, `next/og`, or remote image allowlists, so this audit does not claim those application-specific exploit paths are exposed. The development-server advisory remains relevant to local development. | Upgrade to a supported patched Next release, test compatible React packages, and rebuild. Next's current advisory names 16.4.1 as a patched release. | Confirm the installed/locked version, perform production build and route/form QA, then inspect dependency advisories. Do not treat a successful build alone as proof of security. |
| Medium | Live headers include HSTS but omit Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, and HTTP Referrer-Policy. `next.config.mjs` has no application headers. | Add nonbreaking baseline headers and a tested CSP compatible with Next scripts/styles and required assets. Avoid adding a strict policy without testing inline Next output. | Fetch production-build responses and inspect browser console. Headers must appear without breaking fonts, scripts, form delivery, images, or navigation. |
| Medium | The homepage serves full-sized JPEG files without responsive sources. Repository images are roughly 5.5 MB together; the hero JPEG is about 352 KiB and the largest JPEG about 540 KiB. This is a transfer-cost observation, not measured LCP failure. | Serve appropriately sized modern image variants or a tested Next image component while preserving layout, aspect ratios, high-priority hero loading, and lower-page lazy loading. | Compare actual transferred bytes and visual quality at mobile/desktop widths. Verify dimensions remain reserved and no new layout shift is introduced. Field LCP/INP/CLS remain unmeasured. |
| Low | HTTP apex takes two permanent redirects before the final HTTPS `www` response. | At the hosting/domain layer, redirect HTTP apex directly to the existing HTTPS `www` canonical if supported. Preserve the current preferred host. | Repeat the four domain checks. Every alternate should reach the canonical without loops, preferably in one hop. This does not require changing on-page canonicals. |

## Privacy and security facts for implementation

The inspected layout loads Google Fonts stylesheet requests and preconnects to Google font hosts. `main.js` stores `tenzo-preloader-seen` in browser session storage. No analytics or advertising tracker integration was found in the inspected `app` and `public/js` source. This is a code inventory, not proof of all hosting-side logging or account configuration. Retention, email processors, and hosting access arrangements need founder review.

The pre-change contact form has an empty delivery endpoint and sends FormData. Its success copy promises a one-business-day response. New implementation must match the client payload to its server parser and avoid promising delivery when configuration is missing. Contact delivery is being handled separately.

## Coverage and limitations

| Category | Result |
|---|---|
| Crawlability | Live robots-declared sitemap validated; no observed domain-wide crawl block |
| Indexability | Server-delivered content confirmed; Google-selected canonicals/index status require Search Console |
| Security | HTTPS/HSTS verified; headers and dependency release need work |
| URL structure | Existing canonical `www` redirect works; HTTP apex has extra hop |
| Mobile/accessibility | Source safeguards present; complete rendered checks pending |
| Core Web Vitals | Not measured; no field dataset or lab result assigned |
| Structured data | Existing live Organization JSON-LD parsed successfully; updated identity/schema needs post-change validation |
| JavaScript rendering | Raw HTML contains content; visual no-script fallback is defective at baseline |
| IndexNow | Not observed; optional for non-Google discovery, not a Google indexing mechanism |

An aggregate technical score is not assigned because rendered mobile behavior, field performance, and private indexing data were not measured. Scoring unknowns as failures or passes would obscure the limits of this bounded check.

## Official dependency sources

- [Next.js security update, 14 October 2026](https://nextjs.org/blog/nextjs-security-update-october-14-2026): patched release guidance and feature-dependent impact.
- [September 2026 security release](https://nextjs.org/blog/september-2026-security-release): development-server and other scoped advisories.

The next verification should confirm the new business identity and social links in rendered pages, disabled-JavaScript usability, response headers, dependency versions, and honest contact-form behavior. Search Console and real-user performance remain separate follow-up evidence.
