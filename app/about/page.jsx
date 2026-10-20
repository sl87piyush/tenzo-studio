import { pageMetadata } from "../seo";
import { siteConfig } from "../site-config";
import PageHeader from "../components/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import StudioFooter from "../components/StudioFooter";
import SocialLinks from "../components/SocialLinks";
import "../services/services.css";

export const metadata = pageMetadata({
  title: "About TENZO STUDIO | Piyush Choudhary, Jodhpur",
  description: "Meet Piyush Choudhary, founder and operator of TENZO STUDIO, an independent design and development studio in Jodhpur. Explore the work and official channels.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader current="about" />
      <main id="main-content" className="seo-page">
        <Breadcrumbs name="About the studio" path="/about/" />
        <section className="seo-hero container">
          <p className="seo-kicker">TENZO STUDIO / JODHPUR, INDIA</p>
          <h1>Independent studio. Direct connection.</h1>
          <p className="seo-hero__summary">TENZO STUDIO is an independent digital design and development studio based in Jodhpur, Rajasthan, India. Founded and operated by Piyush Choudhary, the studio helps businesses and founders build thoughtful websites, digital products, and web experiences.</p>
          <div className="seo-actions"><a className="button button--primary" href="/contact/">Start a Project <span aria-hidden="true">↗</span></a></div>
        </section>
        <section className="seo-section seo-section--light">
          <div className="container seo-section__grid">
            <p className="seo-kicker">THE STUDIO / 01</p>
            <div className="seo-section__body">
              <h2>One brief. Connected decisions.</h2>
              <p>Good work loses force when strategy, design, engineering, and delivery are treated as separate conversations. TENZO connects them from the start. The result is a clearer system, whether the work is a focused website, a new identity, a product prototype, or an automation layer.</p>
              <p>We stay deliberately lean. The person shaping the direction remains close to the work. Each engagement begins with the problem, the audience, and the outcome that matters, then moves into a written scope.</p>
            </div>
          </div>
        </section>
        <section className="seo-section">
          <div className="container seo-section__grid">
            <p className="seo-kicker">FOUNDER / 02</p>
            <div className="seo-section__body">
              <h2>Founded and operated by Piyush Choudhary.</h2>
              <p>TENZO is founder-operated and early-stage. Piyush is the direct point of contact for project enquiries and the work. The studio focuses on website development, web applications, UI/UX design, digital experiences, and related technical services. Existing brand, visual, motion and social service scopes are described on their individual pages.</p>
              <p>Each engagement starts with the problem to solve, the people using the result, and the scope needed to deliver it. The website currently presents conceptual system studies as examples of approach; these are labeled separately from commercial client work.</p>
            </div>
          </div>
        </section>
        <section className="seo-section seo-section--light">
          <div className="container seo-section__grid">
            <p className="seo-kicker">OPERATING PRINCIPLES / 03</p>
            <div className="seo-section__body">
              <h2>The work has to hold up after launch.</h2>
              <ol className="seo-steps">
                <li><span>01</span><div><h3>Every element earns its place.</h3><p>Decoration does not replace hierarchy. Features do not replace purpose.</p></div></li>
                <li><span>02</span><div><h3>Design and engineering share the brief.</h3><p>Content, interface, performance, and backend behavior are decisions inside one system.</p></div></li>
                <li><span>03</span><div><h3>Scope protects the outcome.</h3><p>Written boundaries and accountable decisions create room for quality work.</p></div></li>
              </ol>
            </div>
          </div>
        </section>
        <section className="seo-section" aria-labelledby="social-title">
          <div className="container seo-section__grid">
            <p className="seo-kicker">OFFICIAL CHANNELS</p>
            <div className="seo-section__body">
              <h2 id="social-title">Find TENZO elsewhere.</h2>
              <p>Explore our design work, development projects, and studio updates across our official channels.</p>
              <SocialLinks mode="full" />
              <p>Project enquiries go directly to <a className="identity-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
            </div>
          </div>
        </section>
        <section className="seo-section seo-section--cta">
          <div className="container seo-section__grid">
            <p className="seo-kicker">WORK WITH TENZO / 04</p>
            <div className="seo-section__body">
              <h2>Bring the real problem.</h2>
              <p>Tell us what is changing, where the current system falls short, and what the next phase needs to achieve. We will define the right starting point.</p>
              <a className="button button--primary" href="/contact/">Define a Project <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <StudioFooter showWordmark={false} />
    </>
  );
}
