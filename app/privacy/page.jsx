import { pageMetadata } from "../seo";
import { siteConfig } from "../site-config";
import PageHeader from "../components/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import StudioFooter from "../components/StudioFooter";
import "../services/services.css";

export const metadata = pageMetadata({
  title: "Privacy Notice | TENZO STUDIO",
  description: "How TENZO STUDIO handles project enquiries, website storage and third-party services. Contact Piyush Choudhary for questions about your information.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return <>
    <PageHeader />
    <main id="main-content" className="seo-page">
      <Breadcrumbs name="Privacy notice" path="/privacy/" />
      <section className="seo-hero container"><p className="seo-kicker">TENZO STUDIO / TRANSPARENCY</p><h1>Privacy notice.</h1><p className="seo-hero__summary">This notice describes information used by this website and its project enquiry process. For questions, contact Piyush Choudhary at <a className="identity-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></section>
      <section className="seo-section seo-section--light">
        <div className="container seo-section__grid"><p className="seo-kicker">PROJECT ENQUIRIES</p><div className="seo-section__body">
          <h2>What you choose to share.</h2>
          <p>The project form asks for your name, email, company or business, budget, project description, target launch, and decision-making role. A relevant website or brief link is optional. Please avoid sending passwords, payment details, or confidential client material in an initial enquiry.</p>
          <p>Enquiry details are used to understand the proposed work and respond to you. Submitting a project brief does not subscribe you to a marketing list. If you contact the studio by email instead, your email provider and the studio's email provider process that correspondence.</p>
          <h3 className="seo-question">Form delivery and abuse prevention.</h3>
          <p>The website checks submitted fields and limits repeated requests. When email delivery is configured, the server sends accepted briefs to the studio using Resend. If delivery is unavailable or fails, the form reports an error and offers direct email. It does not report a successful submission unless the delivery service accepts the message.</p>
          <p>To limit repeated submissions, the server temporarily keeps a keyed hash of a network address and an attempt counter in memory. These counters have a 15-minute window and reset when the server process restarts. They do not contain the project brief.</p>
          <p>The application does not write project briefs to a website database. Accepted messages are delivered into the studio's email workflow. For questions about a specific enquiry, its storage, or deletion, email the studio using the address above.</p>
        </div></div>
      </section>
      <section className="seo-section"><div className="container seo-section__grid"><p className="seo-kicker">WEBSITE SERVICES</p><div className="seo-section__body">
        <h2>Loading the website.</h2>
        <p>The website is hosted on Vercel. Hosting and email delivery services process technical request information needed to provide their services, such as network requests and responses. Their own privacy notices describe how they handle that information.</p>
        <p>A browser session-storage entry called <code>tenzo-preloader-seen</code> remembers whether the opening animation has played during the current browser session. It contains an animation flag, rather than your enquiry details. The site continues to work when that storage is unavailable.</p>
        <p>The current website code does not install advertising cookies or include an analytics tracking script. It loads IBM Plex Mono through Google Fonts, which requires a request to Google's font servers. The studio's display font is served with the site.</p>
        <h3 className="seo-question">Links to other platforms.</h3>
        <p>Instagram, X and Linktree links take you to those services. No live social feed is embedded. Those platforms apply their own privacy practices when you visit them.</p>
        <h3 className="seo-question">Questions and corrections.</h3>
        <p>Contact <a className="identity-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> to ask about information you have shared or request a correction or deletion. Include enough context to locate the enquiry without sending sensitive documents in your first message.</p>
      </div></div></section>
    </main>
    <StudioFooter showWordmark={false} />
  </>;
}
