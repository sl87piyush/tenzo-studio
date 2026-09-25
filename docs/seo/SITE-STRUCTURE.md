# TENZO site structure and page specifications

## Architecture decision

Use one canonical page per distinct buyer job. Jodhpur has the first local service pages because the sampled web, brand, and social SERPs show service-specific pages. The homepage represents the studio and broader offer; it should not compete with a second generic Jodhpur “digital agency” overview. Product and motion pages remain general because local SERP demand for them was not established. Jaipur, Udaipur, Delhi, and Mumbai pages are deferred until TENZO has a distinct, useful reason for each and can prove real service delivery. No city-swapped pages or extra Business Profiles.

The current branch implements home, About, and five service pages. `/work/` and `/contact/` remain in the roadmap: Work needs approved client evidence, and Contact needs a verified delivery method. The homepage currently contains a conceptual Work section and a project brief form; the form has no endpoint and is a P0 lead blocker.

| URL / status | Primary and secondary intent | Title / H1 | H2 outline | Evidence needed | Conversion / internal links | Schema eligibility |
|---|---|---|---|---|---|---|
| `/` implemented | Studio identity; secondary website/brand/product discovery | **Title:** `TENZO STUDIO \| Website Design, Brand Systems & AI in Jodhpur` **H1:** `Cut the Noise. Set the Standard.` | Existing: positioning, conceptual systems, capabilities, method, principles, studio, contact | Approved project examples and verified lead channel | Start a Project; link to About and all services | Organization only |
| `/about/` implemented | Founder/studio due diligence | **Title:** `About TENZO STUDIO \| A Digital Studio Based in Jodhpur` **H1:** `Clarity. Craft. Speed. In that order.` | One brief, founder, operating principles, work with TENZO | Founder surname/photo, experience and credentials only if approved | Project brief; links home and service overview | Organization inherited; Person page markup only after fuller verified bio |
| `/services/website-design-jodhpur/` implemented | Website designer/developer Jodhpur; landing page design secondary | **Title:** `Website Design in Jodhpur \| TENZO STUDIO` **H1:** `Website design in Jodhpur, built around the business behind it.` | Problem, buyer gaps, scope, method, fit/Jodhpur, next step | Approved screenshots, exact stack/delivery examples, client outcomes; no unsupported price | Project brief; links brand and product | Service with Jodhpur areaServed |
| `/services/brand-identity-jodhpur/` implemented | Brand identity/branding studio Jodhpur; logo as part of system | **Title:** `Brand Identity Design in Jodhpur \| TENZO STUDIO` **H1:** `Brand identity in Jodhpur with a system behind every decision.` | Problem, buyer gaps, scope, method, fit/Jodhpur, next step | Approved identity work, application examples, testimonials with consent | Project brief; links web and motion | Service with Jodhpur areaServed |
| `/services/social-media-jodhpur/` implemented | Social marketing systems Jodhpur; management/campaign scope secondary | **Title:** `Social Media Marketing in Jodhpur \| TENZO STUDIO` **H1:** `Social media systems for Jodhpur brands with something to say.` | Problem, buyer gaps, scope, method, fit/Jodhpur, next step | Confirm ongoing management capacity, approved campaigns, measurable results | Project brief; links brand and motion | Service with Jodhpur areaServed |
| `/services/product-design-ai-mvps/` implemented | Product design and AI MVP partner | **Title:** `Product Design & AI MVPs \| TENZO STUDIO` **H1:** `Turn a product hypothesis into a system you can test.` | Problem, buyer gaps, scope, method, fit, next step | Approved prototypes, shipped products, AI governance details | Project brief; links web and brand | Service |
| `/services/visual-motion-design/` implemented | Motion/visual design system | **Title:** `Visual & Motion Design \| TENZO STUDIO` **H1:** `Motion and visual systems with a clear purpose.` | Problem, buyer gaps, scope, method, fit, next step | Approved motion reel and asset examples | Project brief; links brand and web | Service |
| `/work/` planned | Evaluate real experience and outcomes | Proposed **title:** `Selected Work \| TENZO STUDIO`; **H1:** `Work that holds up after launch.` | Client problem, scope, decisions, deliverables, outcome | At least one approved case study with client permission and artifacts. Do not relabel concept art as client work | Enquire; link to relevant service | CreativeWork only for real, visible work |
| `/contact/` planned | Qualified enquiry and practical contact | Proposed **title:** `Start a Project \| TENZO STUDIO`; **H1:** `Define the right scope.` | What to share, process, contact route, privacy | Exact recipient/endpoint, confirmed response policy, privacy/data processor facts | Deliverable form or mailto; service links | ContactPoint only with verified contact details |

All implemented service pages have unique descriptions and body copy in [`app/services/service-data.js`](../../app/services/service-data.js). The page renderer in [`app/services/[slug]/page.jsx`](../../app/services/%5Bslug%5D/page.jsx) emits a self-canonical URL and factual Service JSON-LD. The selected copy is the publishable first draft, subject to founder review and a working lead path.

### Meta descriptions by page

| URL | Description |
|---|---|
| `/` | TENZO STUDIO is a Jodhpur-based digital studio building websites, brand systems, product experiences, and intelligent workflows for ambitious businesses. |
| `/about/` | Meet TENZO STUDIO, founded by Piyush in Jodhpur. We connect visual precision, engineering, and AI thinking across websites, products, and brand systems. |
| `/services/website-design-jodhpur/` | TENZO STUDIO designs and builds websites for Jodhpur businesses. Clear structure, considered design, responsive development, and a route from visit to enquiry. |
| `/services/brand-identity-jodhpur/` | TENZO STUDIO develops brand identity systems for Jodhpur businesses: positioning, visual language, guidelines, and applications that work together. |
| `/services/social-media-jodhpur/` | TENZO STUDIO connects social content, campaigns, creative systems, and measurement for Jodhpur brands. Define the audience and the outcome before posting. |
| `/services/product-design-ai-mvps/` | TENZO STUDIO shapes product strategy, user journeys, interface systems, prototypes, and AI integration plans for founders building an MVP. |
| `/services/visual-motion-design/` | TENZO STUDIO creates visual assets, motion language, 2D/3D illustration, and campaign visuals that support a consistent brand or product experience. |
| `/work/` planned | A considered look at approved TENZO projects: the problem, the decisions, the delivered system, and what changed. Publish after real case-study approval. |
| `/contact/` planned | Tell TENZO STUDIO what needs to change. Share the outcome, timeline, and scope to start a focused project conversation. Publish with a working contact path. |

## Internal linking and cannibalization rules

1. Homepage capability section and footer link to each service page; every service page links to two adjacent services and back to home/About.
2. Keep website design, web development, and landing page variants on the single Jodhpur website URL until SERP overlap or buyer behavior proves they need distinct pages.
3. Keep branding agency, brand identity, and logo-related searches on the brand systems page. Do not position TENZO as a commodity logo shop.
4. Keep social marketing and management variants on one page while delivery scope is confirmed. Paid media gets a separate page only with actual campaign proof and distinct intent.
5. Use descriptive anchors and real `<a href>` links. Avoid orphan pages, duplicate city pages, and near-identical title templates.
6. Every published canonical content URL belongs in the `www` sitemap and must be reachable in at most a few clicks from home.

## City expansion gate

For each new city, verify: (a) TENZO can genuinely deliver there; (b) distinct SERP demand and buyer questions; (c) at least one local-specific process, partnership, project, or other truthful value that improves the page beyond replacing a city name; (d) enough approved proof to support it. Jaipur and Udaipur are next to research, then Delhi and Mumbai. If any gate fails, use the general service page and a truthful service-area statement. Jodhpur proximity does not create Maps proximity in another city.
