# Implementation record — 26 September 2026 (IST)

**20 October follow-up:** the founder has now supplied the exact email and official socials. Identity, contact, social integration and technical changes are recorded in `TRUST-IMPLEMENTATION-2026-10-20.md`. This September record describes the earlier state; the October changes are local pending review and deployment approval.

## Completed in this repository

- Verified the correct production domain and separated it from the misspelled Shopify domain.
- Aligned homepage metadata base, Organization `@id`/URL, robots sitemap declaration, and sitemap locations with the live final `www` host.
- Replaced `ProfessionalService` markup with factual Organization markup while Google Business Profile eligibility and a public physical address remain unverified. Added factual Service markup on service pages.
- Added five statically generated service pages with distinct Jodhpur web, brand, and social intent plus general product and motion intent. Each has unique title, description, H1, sections, self-canonical URL, CTA, and related links.
- Added an About page based on verified Brand OS facts. Added crawlable homepage/footer links to the service pages and labeled existing system art as conceptual rather than client case studies.
- Updated the sitemap to include all implemented content URLs and configured trailing-slash URLs consistently.
- Saved the domain verdict, technical baseline, SERP comparison, keyword matrix, architecture, draft copy, local plan, measurement plan, and roadmap in `docs/seo/`.

## Checks performed

- SEO launcher `doctor --json`: `ready: true`, Python 3.14, browser ready; no setup necessary.
- Baseline and post-change `npm run build`: successful static generation. Repeat the build after any future contact integration before publishing that change.
- Local Playwright production render of the website design page at 1280 px and 390 px. The accessibility snapshot exposed the page's H1, H2/H3 outline, visible service copy, and crawlable links. A light-section label contrast issue found in screenshots was corrected in CSS.
- `KEYWORD-MATRIX.csv` parsed successfully as 20 rows with 15 columns.
- A public Google `site:tenzostudio.com` query returned the homepage, while sampled Jodhpur website/social service queries did not show TENZO. The diagnosis and ordered fix are in `INDEX-VISIBILITY-DIAGNOSIS.md`.
- The final local `npm run build` after adding buyer questions and page-specific social metadata succeeded. Built priority pages have unique titles, headings, descriptions, and self-canonical `www` URLs.
- Live follow-up on 26 September around 02:10 IST: home, About, and all five service pages returned 200; apex redirected to `www`; the valid live sitemap listed seven `www` URLs; robots allowed crawling. Parsed live home, website, brand, and social pages had `index, follow`, self-canonicals, unique titles/H1s, and internal links. A public Google `site:tenzostudio.com/services/` query showed no results immediately after deployment; this is not a Search Console index verdict.

## Unverified or blocked

- **Form delivery:** the homepage form has an empty endpoint. Piyush said a contact email will be provided; the exact address is still needed. No real brief can be delivered until integration and end-to-end test.
- **Deployment:** the SEO pages and crawl signals have appeared on production since the earlier local check. Exact deployment mechanism and release owner were not observed. Any further publishing or account change requires the user approval specified in the SEO brief.
- **GSC/GA4/GBP:** private property status, indexing, traffic, conversions, and Business Profile ownership were not accessible.
- **Offline eligibility:** “remote and offline” does not say where in-person customer contact occurs. A storefront/service-area decision needs that fact.
- **Proof:** no approved client portfolio, testimonials, reviews, address, phone, case-study outcomes, or prices were supplied. None were invented.
- **Performance:** no field CWV values; the public PageSpeed Insights request was rate-limited. Mobile visual inspection is not a full performance or accessibility audit.
- **Old domain:** ownership and relationship of `tenzstudio.com` remain unproven. Do not migrate it without verification.

## Exact next actions

1. Piyush provides the exact public contact email or approved form endpoint, and clarifies whether clients visit a staffed Jodhpur location or TENZO visits clients. Then connect and test the lead path, and finalize GBP eligibility.
2. Piyush reviews service scope/copy and supplies any approved project proof to replace the factual slots in `PAGE-DRAFTS.md`.
3. In the verified Search Console property, submit `https://www.tenzostudio.com/sitemap.xml` and inspect the new priority service URLs. Record Google-selected canonical, crawl/index status, and query impressions. Only form delivery remains unverified among the live release checks above.
