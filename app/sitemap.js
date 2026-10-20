import { serviceSlugs } from "./services/service-data";
import { siteConfig } from "./site-config";

export default function sitemap() {
  return ["/", "/about/", "/contact/", "/privacy/", ...serviceSlugs.map((slug) => `/services/${slug}/`)]
    .map((path) => ({ url: new URL(path, siteConfig.url).href }));
}
