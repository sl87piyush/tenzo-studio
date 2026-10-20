# SEO baseline and prioritized audit — 26 September 2026 (IST)

## Scope and evidence level

Public live checks covered the correct-domain homepage, robots, sitemap, redirects, and raw/rendered content. Repository review covered the current Next.js source. Google Search Console, GA4, Business Profile, CrUX field data, and a verified rank tracker were not connected. All numerical traffic, impressions, rankings, conversion rates, and Core Web Vitals are **not measured**. Do not interpret an absent number as zero.

The site was a single statically rendered homepage at baseline. The public HTML contained a title, description, index/follow directive, one H1 with the brand tagline, content for five service disciplines, and Organization-like details in `ProfessionalService` JSON-LD. Raw HTML had substantial visible content; the SEO renderer classified it as server rendered. The site is not Shopify.

## URL inventory before changes

| URL | Live status | Indexing signals | Content role |
|---|---|---|---|
| `https://www.tenzostudio.com/` | 200 | `index, follow`; canonical pointed to redirecting apex | Home, services, founder, conceptual system studies, contact form |
| `https://www.tenzostudio.com/robots.txt` | 200 | Allows all; sitemap declaration pointed to apex | Crawler instructions |
| `https://www.tenzostudio.com/sitemap.xml` | 200 | One `<loc>` pointing to apex | URL discovery |

No other published content URLs were found at the pre-release baseline. Private Search Console indexing was not available for confirmation. The new pages were subsequently deployed; see the live follow-up below.

**Public Google check, 26 September IST:** a `site:tenzostudio.com` search returned the TENZO homepage. This is positive evidence that the homepage is indexed. It does not show the full index inventory or Google-selected canonical; Search Console URL Inspection is still needed. In a Jodhpur desktop Google sample (`gl=in`, `hl=en`, 1280 × 720), TENZO did not appear in the visible result pages for `website design company in jodhpur` or `social media marketing agency jodhpur`. These are observations for that time/location/device, not permanent rank positions.

**Live follow-up, 26 September 2026 around 02:10 IST:** the revised site is now deployed. Home, About, and all five service URLs return 200 on `www`; apex redirects to `www`. Live robots allows crawling and declares the valid `www` sitemap with seven URLs. Parsed live homepage and priority service pages have `index, follow`, unique titles/H1s, self-canonical `www` URLs, and crawlable internal links. A public Google `site:tenzostudio.com/services/` query returned no results at that moment. This is an early public observation, not a Search Console index verdict or evidence of an indexing error. The live project form still has an empty endpoint.

## Findings, fixes, ownership, and checks

| Priority | Observation and affected URL | Business effect | Fix / current state | Owner or dependency | Verification |
|---|---|---|---|---|---|
| P0 | Homepage project form has `data-endpoint=""` in `app/page.jsx`; client script prevents submission and displays an error | Qualified enquiries cannot be sent through the primary CTA | Connect a verified receiving email/form endpoint and test a real delivery; exact recipient pending from TENZO | Piyush: recipient or approved form service; developer: integration | Submit a valid test brief, confirm receipt and success state |
| P1 | Pre-release canonical, robots sitemap declaration, and sitemap `<loc>` used apex although final host is `www` | Mixed canonical signals and extra redirect | Fixed and verified live on `www`; Google-selected canonical remains unknown | GSC property owner | Inspect Google-selected canonical after recrawl |
| P1 | At baseline only homepage offered crawlable service content; five disciplines lived in sections and hash links | Weak match to specific service/local queries | Five distinct service pages and internal links are now live; indexing and query visibility pending | GSC property owner; Piyush for approved proof | Inspect each URL in GSC and monitor non-brand impressions |
| P1 | Homepage “three examples” could be read as client case studies, while artwork and copy are conceptual | Trust and factual accuracy risk | Labeled them conceptual system studies in source | Developer | Render the Work section and confirm language |
| P2 | `ProfessionalService` JSON-LD included only a city-level PostalAddress; no verified customer-facing office, full address, or GBP | LocalBusiness eligibility and address semantics unverified | Changed to Organization with verified name, founder, URL, and Jodhpur location | Piyush for in-person model and approved public details | Validate JSON-LD; review visible facts and GBP eligibility |
| P2 | No distinct About page | Founder/entity context difficult to find | Added `/about/` using Brand OS facts | Developer; Piyush for founder credentials or photos | Render and crawl page; validate facts |
| P2 | Images total about 5.5 MB in repository; largest source JPEG about 540 KB; hero JPEG about 352 KB | Potential mobile load cost, but no measured CWV failure | Audit image delivery and consider right-sized formats after field/lab measurement | Developer; hosting/device test | Mobile Lighthouse + CrUX if eligible; check LCP element and transfer |
| P2 | External Google font CSS and many homepage animations | Potential rendering or interaction cost, unmeasured | Keep design; measure first, then optimize demonstrated bottlenecks | Developer | Mobile lab run and CrUX LCP/INP/CLS when available |
| P2 | No privacy policy linked; footer says pending approval | Trust and form data-handling gap | Draft factual policy only after data flow and legal owner are known | Piyush / legal review | Published policy matches actual processor and retention |
| P3 | HTTP apex takes two redirect hops to `www` | Small latency and crawl inefficiency | Configure one-hop host-level redirect if hosting permits | Hosting owner | `curl -IL http://tenzostudio.com/` shows one hop to final host |

## Unmeasured checks

- **Core Web Vitals:** no CrUX field values or PageSpeed API credentials. Do not claim LCP, INP, or CLS pass/fail. The thresholds to monitor at the 75th percentile are LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1.
- **Mobile/accessibility:** a post-change local desktop and 390 px Playwright render was inspected, but no complete live assistive-technology audit or Lighthouse score was run. Treat as a visual smoke check only.
- **Indexing and rankings:** the homepage appeared in a public Google `site:` result. The newly deployed service path returned no `site:` results in an immediate follow-up, but Search Console URL Inspection, Google-selected canonical, and impressions/clicks were unavailable. Neither public search sample gives a permanent rank or complete index inventory.
- **Structured-data rich results:** Organization and Service markup are factual entity descriptions; neither guarantees a rich result.
- **Backlinks:** no connected backlink dataset; no authority metric or toxic-link conclusion assigned.

## Initial technical verification after code changes

`npm run build` completed successfully with static `/`, `/about/`, and five `/services/*` routes. Local production server and Playwright opened the website design page at desktop and 390 px. The accessibility snapshot exposed one H1, ordered H2/H3 sections, links, and the full service copy. After deployment, public fetches verified 200 responses, live canonical/metadata, robots, and sitemap. Form delivery and private Google indexing data remain unverified.
