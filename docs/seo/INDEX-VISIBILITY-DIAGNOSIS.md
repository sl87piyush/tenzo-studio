# Why TENZO is not appearing for Jodhpur service searches

**Checked:** 26 September 2026 IST, Google desktop 1280 × 720, India (`gl=in`, `hl=en`), Jodhpur localization shown on the results page. One sample is not a stable ranking report.

## Confirmed observations

1. Google returned the TENZO homepage for `site:tenzostudio.com`. The homepage is in Google's visible index. This does **not** reveal the full index inventory or Google-selected canonical.
2. TENZO did not appear in the sampled Google results for `website design company in jodhpur` (a representative version of the user's website query) or `social media marketing agency jodhpur` in this check. The website query showed Jodhpur business listings plus service pages and directories; the social query showed directories, agency/social pages, and a local pack.
3. The live production website still has only one indexable content page, its homepage. Its live title is `TENZO STUDIO — Premium Digital Products, Websites, Brand Systems & AI`, H1 is the tagline, and services are sections on that page. The live sitemap lists only the homepage. Dedicated Jodhpur website, brand, and social pages exist **locally in this repository** but have not been deployed, crawled, or indexed.
4. The live homepage uses an apex canonical even though the final host is `www`, and its sitemap URL also points to the redirecting apex. The local changes align these signals to `www`. This is a fixable consistency issue; evidence does not show it caused the missing non-brand rankings.
5. Live robots allows crawling, the homepage returns 200, has `index, follow`, and contains 1,256 words in raw HTML according to the installed SEO tool. There is no observed site-wide crawl block on the correct domain.
6. Search Console access is unavailable. We cannot yet see indexed URL status, Google-selected canonical, query impressions, average position, or whether Google has discovered future pages.

## Diagnosis

The strongest observed explanation is **intent mismatch and limited search footprint**: Google can find the broad homepage, but the live site has no dedicated pages for the two service/local intents the user searched. Competitors in those results present service-specific pages, local business details, directory profiles, and in some cases established reviews or work examples. This is an evidence-based inference, not proof of Google's exact ranking decision. The site's actual authority and GSC query data are still unknown.

## Ordered fix

| Step | Action | Verification |
|---|---|---|
| 1 | Connect and test the project form so any gained traffic can enquire. The current endpoint is empty; TENZO must provide an email or approved service endpoint. | Submit a test brief and confirm receipt. |
| 2 | Review and deploy the prepared Jodhpur website, brand, and social pages; align final-host canonicals, internal links, robots, and sitemap. | Each page responds 200, is linked from home, has self-canonical `www` URL, and appears in the live sitemap. |
| 3 | In verified Google Search Console, inspect the homepage and each new service URL; submit the updated sitemap and request indexing for the few priority URLs once. | Record Google-selected canonical, indexing decision, last crawl, and any exclusion reason. Google says a request or sitemap does not guarantee indexing or ranking. |
| 4 | Add approved real work, founder expertise, useful answers to buyer questions, and a working contact route. Avoid fabricated results or city pages. | Page evidence is visible to users and supports the service claims. |
| 5 | Track non-brand impressions/clicks and qualified leads for 28-day periods; compare Jodhpur desktop and mobile separately. | GSC Performance and lead records show whether visibility becomes meaningful. |

Google's [technical requirements](https://developers.google.com/search/docs/essentials/technical) explain why crawlable 200 pages are eligible but not guaranteed to appear. Its [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) says submission is a discovery hint, and its [URL Inspection guide](https://support.google.com/webmasters/answer/9012289?hl=en) identifies the owner-only tool for confirming indexed status. Repeated recrawl requests will not make a page rank faster; see [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
