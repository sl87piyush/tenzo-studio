# Search and lead measurement plan

## Baseline before targets

Record a dated baseline after deployment and account connection. No Search Console, GA4, Business Profile, verified rank tracker, or CrUX field dataset was accessible during this audit. No traffic, conversion, ranking, or CWV number is assumed. Use the first complete 28-day period as the initial reporting window, with the deployment date and any tracking changes annotated.

| Surface | Metric and segment | Source and cadence | Definition / guardrail |
|---|---|---|---|
| Organic web | Non-brand impressions, clicks, CTR, average position | Google Search Console, weekly review and monthly export | Exclude TENZO name/domain misspellings from non-brand set; report page and query, desktop/mobile, India and relevant country separately; average position is not a fixed rank |
| Organic web | Indexed pages and Google-selected canonical | GSC Pages and URL Inspection, after each release and monthly | Compare published canonical URLs with indexed URLs; investigate excluded and duplicate classifications |
| Organic web | Fixed query visibility | Consistent Jodhpur location + device; monthly | Track website design, brand identity, social marketing and broad agency queries separately. Note result features and volatility; no fabricated “rank 1” baseline |
| Business outcomes | Qualified enquiries, source, service requested, city, and enquiry-to-discovery conversion | Working form/CRM plus privacy-conscious analytics, weekly | “Qualified” means real project need, indicative scope/budget, timing, and decision authority; count spam separately |
| Business outcomes | Lead-to-client and revenue contribution | CRM, monthly/quarterly | Attribute conservatively; organic can assist rather than be the last click |
| Maps/local pack | Profile calls, website clicks, direction requests, and fixed-location Maps visibility | Google Business Profile Performance and repeatable local checks, monthly, **only if eligible and verified** | Report separately from organic web rankings; local pack varies strongly by searcher location |
| Experience | Mobile LCP, INP, CLS at p75; lab diagnostics | CrUX when available, PSI/Lighthouse for repeatable lab checks | Distinguish field from lab; do not report a Lighthouse score as a real-user CWV result |

## Fixed query set (first version)

Use one Jodhpur desktop and one Jodhpur mobile location/device configuration per run: `website design company in jodhpur`, `web development jodhpur`, `branding agency in jodhpur`, `brand identity design jodhpur`, `social media marketing agency in jodhpur`, `social media management jodhpur`, `digital marketing agency in jodhpur`. Store date, coordinates or stated localization, device, browser language, result URL, and whether the observation was organic, Maps, AI Overview, or directory. TENZO's URL/rank is “unverified” until a repeatable measurement captures it.

Add Hindi/English mixed variants only after Search Console queries or sampled SERPs show meaningful use. For any new location query set, establish its own baseline; never compare Jaipur Maps rank with Jodhpur web rank.

## Decision loop

1. Keep a release log with canonical, sitemap, content, and form changes.
2. Compare 28-day windows while noting indexing lag and seasonality. Use impressions for discovery, clicks for attraction, and qualified enquiries for business value.
3. If impressions rise without qualified enquiries, inspect intent match, page proof, CTA function, and lead quality before adding more pages.
4. If a page receives the wrong queries, revise its title/intro/internal anchors or consolidate overlapping pages. If no impressions appear, check indexing and canonical selection first.
5. Set numeric 90-day and 12-month targets only after the first stable baseline. A #1 position may be a strategic aspiration; it is never a guarantee.
