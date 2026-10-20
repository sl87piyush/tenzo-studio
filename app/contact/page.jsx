import { pageMetadata } from "../seo";
import { siteConfig } from "../site-config";
import PageHeader from "../components/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import StudioFooter from "../components/StudioFooter";
import SocialLinks from "../components/SocialLinks";
import ProjectForm from "../components/ProjectForm";
import "../services/services.css";

export const metadata = pageMetadata({
  title: "Contact TENZO STUDIO | Discuss a Website or Product",
  description: "Contact Piyush Choudhary at TENZO STUDIO in Jodhpur for websites, web applications and UI/UX. Email piyush@tenzostudio.com or send a project brief.",
  path: "/contact/",
});

export default function ContactPage() {
  return <>
    <PageHeader current="contact" />
    <main id="main-content" className="seo-page">
      <Breadcrumbs name="Contact" path="/contact/" />
      <section className="seo-hero container" aria-labelledby="contact-title">
        <p className="seo-kicker">TENZO STUDIO / JODHPUR, INDIA</p>
        <h1 id="contact-title">Bring the real problem.</h1>
        <p className="seo-hero__summary">Tell Piyush what you are building, what needs to change, and what a useful result looks like. We can define the right scope from there.</p>
        <div className="seo-actions"><a className="identity-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a className="seo-text-link" href="#project-brief">Send a brief ↓</a></div>
      </section>
      <section className="seo-section seo-section--light contact-brief-section" aria-labelledby="brief-title">
        <div className="container">
          <p className="seo-kicker">PROJECT ENQUIRIES</p>
          <h2 className="type-heading-lg mt-5" id="brief-title">Define the starting point.</h2>
          <p className="type-body-lg text-secondary mt-5">Website development, web applications, UI/UX and related digital experiences. Include the current situation, likely scope, budget and timing. No date or scope is confirmed until reviewed.</p>
          <ProjectForm />
        </div>
      </section>
      <section className="seo-section" aria-labelledby="channels-title">
        <div className="container seo-section__grid">
          <p className="seo-kicker">STUDIO DETAILS</p>
          <div className="seo-section__body">
            <h2 id="channels-title">A direct connection.</h2>
            <p>{siteConfig.founderName} operates TENZO STUDIO independently from {siteConfig.location}. Email is the primary contact route. The official social channels offer another way to explore the studio.</p>
            <SocialLinks mode="full" />
            <p>Read <a className="identity-email" href="/about/">about the studio</a> and how <a className="identity-email" href="/privacy/">project enquiry details are handled</a>.</p>
          </div>
        </div>
      </section>
    </main>
    <StudioFooter showWordmark={false} />
  </>;
}
