import localFont from "next/font/local";
import TenzoScripts from "./tenzo-scripts";

import "../css/tokens.css";
import "../css/reset.css";
import "../css/global.css";
import "../css/animations.css";
import "../css/components.css";
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

const title =
  "TENZO STUDIO — Premium Digital Products, Websites, Brand Systems & AI";
const description =
  "TENZO builds premium digital presence and intelligent systems for businesses that refuse to look average.";

export const metadata = {
  metadataBase: new URL("https://tenzostudio.com"),
  title,
  description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  referrer: "strict-origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/assets/icons/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "TENZO STUDIO",
    title,
    description,
    url: "/",
    images: [
      {
        url: "/assets/images/og-home.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "TENZO STUDIO — Cut the Noise. Set the Standard.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/assets/images/og-home.png",
        alt: "TENZO STUDIO — Cut the Noise. Set the Standard.",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: "#0A0A0B",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TENZO STUDIO",
  url: "https://tenzostudio.com/",
  description,
  slogan: "Cut the Noise. Set the Standard.",
  founder: {
    "@type": "Person",
    name: "Piyush",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jodhpur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js">
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
      <body id="top" className={`${tenzoStudio.variable} ${tenzoStudio.className}`}>
        {children}
        <TenzoScripts />
      </body>
    </html>
  );
}
