import { siteConfig } from "./site-config";

export function pageMetadata({ title, description, path }) {
  const image = {
    url: "/assets/images/og-home.png", width: 1200, height: 630,
    alt: "TENZO STUDIO — Cut the Noise. Set the Standard.",
  };
  return {
    title, description, alternates: { canonical: path },
    openGraph: {
      title, description, url: path, type: "website", locale: "en_IN",
      siteName: siteConfig.name, images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name,
      item: new URL(item.path, siteConfig.url).href,
    })),
  };
}
