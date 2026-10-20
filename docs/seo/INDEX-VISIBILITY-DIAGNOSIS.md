# Why TENZO is not appearing for Jodhpur service searches

**Checked:** 26 September 2026 IST. Initial Google desktop sample at 1280 × 720, India (`gl=in`, `hl=en`), with Jodhpur localization shown; live deployment follow-up around 02:10 IST. One sample is not a stable ranking report.

## Confirmed observations

1. Google returned the TENZO homepage for `site:tenzostudio.com`. The homepage is in Google's visible index. This does **not** reveal the full index inventory or Google-selected canonical.
2. TENZO did not appear in the sampled Google results for `website design company in jodhpur` (a representative version of the user's website query) or `social media marketing agency jodhpur` in this check. The website query showed Jodhpur business listings plus service pages and directories; the social query showed directories, agency/social pages, and a local pack.
3. At the initial check, production had only the broad homepage, its sitemap listed only that page, and its canonical pointed to the redirecting apex. That explained a limited footprint for specific Jodhpur service intents, but did not prove Google's ranking logic.
4. In the follow-up, the SEO release had appeared live: the homepage, About page, and five service pages returned 200; robots allowed crawling; the valid sitemap listed seven `www` URLs; and parsed priority pages had `index, follow`, self-canonical `www` URLs, unique titles/H1s, and internal links. The homepage form still has an empty delivery endpoint.
5. A public Google `site:tenzostudio.com/services/` query returned no results in that immediate follow-up. Because the pages had only just appeared live, this is a timing observation, not a confirmed indexing fault. Search Console URL Inspection is needed for each URL's actual Google status and selected canonical.
6. Search Console access is unavailable. We cannot yet see indexed URL status, query impressions, average position, or crawl decisions for the new pages.

## Diagnosis

At the initial check, **intent mismatch and limited search footprint** were the strongest observed explanation: Google could find the broad homepage, but the site had no dedicated pages for the service/local intents. The new pages now address that on-site gap. Their next hurdle is Google discovery/indexing and then evidence of real query visibility. Competitors present service-specific pages, local business details, directory profiles, and sometimes established reviews or work examples. The site's actual authority and GSC query data are still unknown, so no ranking cause or outcome is proven.

## Ordered fix

| Step | Action | Verification |
|---|---|---|
| 1 | Connect and test the project form so any gained traffic can enquire. The current endpoint is empty; TENZO must provide an email or approved service endpoint. | Submit a test brief and confirm receipt. |
| 2 — live check complete | Jodhpur website, brand, and social pages, final-host canonicals, internal links, robots, and sitemap are now live. | 200 responses, homepage links, self-canonical `www` URLs, valid seven-URL sitemap. Piyush should still review service claims and supply approved proof. |
| 3 | In verified Google Search Console, inspect the homepage and each new service URL; submit the updated sitemap and request indexing for the few priority URLs once. | Record Google-selected canonical, indexing decision, last crawl, and any exclusion reason. Google says a request or sitemap does not guarantee indexing or ranking. |
| 4 | Add approved real work, founder expertise, useful answers to buyer questions, and a working contact route. Avoid fabricated results or city pages. | Page evidence is visible to users and supports the service claims. |
| 5 | Track non-brand impressions/clicks and qualified leads for 28-day periods; compare Jodhpur desktop and mobile separately. | GSC Performance and lead records show whether visibility becomes meaningful. |

Google's [technical requirements](https://developers.google.com/search/docs/essentials/technical) explain why crawlable 200 pages are eligible but not guaranteed to appear. Its [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) says submission is a discovery hint, and its [URL Inspection guide](https://support.google.com/webmasters/answer/9012289?hl=en) identifies the owner-only tool for confirming indexed status. Repeated recrawl requests will not make a page rank faster; see [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
