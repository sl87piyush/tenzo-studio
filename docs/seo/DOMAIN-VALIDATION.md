# TENZO STUDIO domain identity — 26 September 2026 (IST)

## Verdict

**Production site:** `https://www.tenzostudio.com/`. The Brand OS calls `tenzostudio.com` the primary domain; its HTTPS apex redirects permanently (308) to `www`, where the TENZO Next.js site responds 200. This repository's homepage title, copy, assets, and Next.js output match the live page. The Git remote is `https://github.com/sl87piyush/tenzo-studio.git`.

**Earlier audit:** Reject its Shopify, HTTP 402, site-wide robots block, and missing-sitemap conclusions for TENZO's documented domain. Those observations apply to the distinct spelling `tenzstudio.com` (missing the “o” after “tenz”). Ownership of that domain and any migration relationship remain unverified.

| Check | `tenzostudio.com` / `www` | `tenzstudio.com` |
|---|---|---|
| DNS | Apex A `216.198.79.1`; `www` CNAME to a Vercel DNS host | Apex A `23.227.38.65`; `www` CNAME `shops.myshopify.com` |
| HTTPS | Valid Let's Encrypt certificate observed for apex and `www`; HTTP apex redirects to HTTPS, then `www` | Valid Let's Encrypt certificate observed; `www` redirects to apex |
| Homepage | HTTPS apex 308 → `https://www.tenzostudio.com/`, then 200; Vercel/Next.js | HTTPS apex 402; Shopify store reactivation response |
| Robots | `www/robots.txt` 200, `User-agent: *`, `Allow: /` | `robots.txt` 200, `Disallow: /` |
| Sitemap | `www/sitemap.xml` 200, valid XML urlset with one homepage URL | Common sitemap paths unavailable/402 |
| Current canonical | Live homepage declares `https://tenzostudio.com` while final response is `www` | No TENZO production canonical established |
| Current sitemap URL | `https://tenzostudio.com/`, which redirects to `www` | No TENZO URL mapping established |

The live canonical, robots sitemap declaration, and sitemap `<loc>` were internally inconsistent with the final `www` host. The repository now aligns all three to `www`; verify the deployed responses after approval and deployment. HTTP apex currently takes two hops to final `www` (HTTP → HTTPS apex → HTTPS `www`). Hosting can reduce that to one hop, but canonical consistency is the immediate priority.

## Evidence and verification

- Public endpoints: [TENZO homepage](https://www.tenzostudio.com/), [robots.txt](https://www.tenzostudio.com/robots.txt), [sitemap.xml](https://www.tenzostudio.com/sitemap.xml), and the [different-spelling domain](https://tenzstudio.com/).
- Checks run: `dig +short` for both apex and `www` names; `curl -sSIL` for both domains; `curl` of both robots files; the SEO launcher's `render_page.py` and `sitemap_discovery.py` on the correct domain; and comparison of live homepage title, canonical, and server headers with this repository.
- The read-only SEO launcher `doctor --json` reported `ready: true`, Python `3.14`, browser `true`, mode `plugin-fallback` on 26 September IST. No setup or global Python package install was needed.
- Search Console properties and DNS/hosting ownership were **not** accessible. A public crawl cannot confirm property ownership, indexing decisions, or a domain migration. Do not redirect `tenzstudio.com` or create a migration map without confirming TENZO owns it and obtaining its old URL inventory.

## Post-deployment validation

1. Request every published URL and confirm a single final `www` HTTPS 200 with a self-referencing canonical.
2. Confirm `robots.txt` declares `https://www.tenzostudio.com/sitemap.xml`; fetch and parse the sitemap; every `<loc>` must return the intended page, without a canonical conflict.
3. In the verified Search Console domain property, inspect representative URLs and submit the `www` sitemap. Check Google-selected canonical and coverage after recrawl.
4. If TENZO owns `tenzstudio.com`, first export its old URL inventory and traffic/backlink evidence. Only then decide whether a URL-by-URL 301 mapping is justified. Never redirect unrelated Shopify pages blindly.
