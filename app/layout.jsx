import localFont from "next/font/local";
import TenzoScripts from "./tenzo-scripts";
import { siteConfig } from "./site-config";
import { pageMetadata } from "./seo";

import "../css/tokens.css";
import "../css/reset.css";
import "../css/global.css";
import "../css/animations.css";
import "../css/components.css";
import "../css/studio-identity.css";
import "../css/navigation.css";
import "../css/hero.css";
import "../css/sections.css";
import "../css/print.css";

const tenzoStudio = localFont({
  src: "../assets/fonts/TenzoStudio_Perfect.woff2",
  variable: "--font-tenzo-studio",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
});

const title = "TENZO STUDIO | Website Design, Brand Systems & AI in Jodhpur";
const description =
  "TENZO STUDIO is an independent digital design and development studio in Jodhpur, operated by Piyush Choudhary. Websites, web applications, UI/UX and digital experiences.";

export const metadata = {
  ...pageMetadata({ title, description, path: "/" }),
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  referrer: "strict-origin-when-cross-origin",
  icons: { icon: [{ url: "/assets/icons/favicon.svg", type: "image/svg+xml" }] },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: "#0A0A0B",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [{
  "@type": "Organization",
  "@id": "https://www.tenzostudio.com/#organization",
  name: "TENZO STUDIO",
  url: "https://www.tenzostudio.com/",
  description,
  slogan: "Cut the Noise. Set the Standard.",
  email: siteConfig.email,
  sameAs: siteConfig.socialProfiles.map((profile) => profile.url),
  founder: { "@id": `${siteConfig.url}/#founder` },
  location: {
    "@type": "Place",
    name: "Jodhpur, Rajasthan, India",
  },
  }, {
    "@type": "Person", "@id": `${siteConfig.url}/#founder`,
    name: siteConfig.founderName, url: `${siteConfig.url}/about/`,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  }, {
    "@type": "WebSite", "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name, url: `${siteConfig.url}/`,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tenzoStudio.variable} no-js`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body id="top" className={tenzoStudio.className}>
        {children}
        <TenzoScripts />
      </body>
    </html>
  );
}
