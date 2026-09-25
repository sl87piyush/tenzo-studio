import { notFound } from "next/navigation";
import { services, serviceSlugs } from "../service-data";
import "../services.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  const path = `/services/${slug}/`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: "/assets/images/og-home.png", alt: "TENZO STUDIO — Cut the Noise. Set the Standard." }],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.tenzostudio.com/services/${slug}/#service`,
    name: service.name,
    description: service.summary,
    url: `https://www.tenzostudio.com/services/${slug}/`,
    provider: { "@id": "https://www.tenzostudio.com/#organization" },
    ...(service.localService ? { areaServed: { "@type": "City", name: "Jodhpur" } } : {}),
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="seo-header">
        <div className="container seo-header__inner">
          <a className="seo-header__logo" href="/" aria-label="TENZO STUDIO home">TENZO</a>
          <nav className="seo-header__nav" aria-label="Main navigation">
            <a href="/#work">Work</a>
            <a href="/#capabilities">Services</a>
            <a href="/about/">Studio</a>
            <a href="/#start-project">Start a Project <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="seo-page">
        <section className="seo-hero container" aria-labelledby="service-title">
          <p className="seo-kicker">TENZO STUDIO / {service.eyebrow}</p>
          <h1 id="service-title">{service.title}</h1>
          <p className="seo-hero__summary">{service.summary}</p>
          <div className="seo-actions">
            <a className="button button--primary" href="/#start-project">Define a Project <span aria-hidden="true">↗</span></a>
            <a className="seo-text-link" href="#scope">Explore the Scope <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="seo-section seo-section--light" aria-labelledby="intro-title">
          <div className="container seo-section__grid">
            <p className="seo-kicker">THE DECISION / 01</p>
            <div className="seo-section__body">
              <h2 id="intro-title">Start with the problem worth solving.</h2>
              {service.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="seo-section" aria-labelledby="needs-title">
          <div className="container seo-section__grid">
            <p className="seo-kicker">WHEN THIS WORK MATTERS / 02</p>
            <div className="seo-section__body">
              <h2 id="needs-title">Recognize the gap before choosing the deliverable.</h2>
              <div className="seo-card-grid">
                {service.needs.map((item, index) => (
                  <article className="seo-card" key={item.title}>
                    <span className="seo-card__number">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--dark-panel" id="scope" aria-labelledby="scope-title">
          <div className="container seo-section__grid">
            <p className="seo-kicker">SCOPE / 03</p>
            <div className="seo-section__body">
              <h2 id="scope-title">What the engagement can include.</h2>
              <p>The final scope is defined after discovery. These are the components we select from when they serve the brief.</p>
              <ul className="seo-scope-list">
                {service.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--light" aria-labelledby="approach-title">
          <div className="container seo-section__grid">
            <p className="seo-kicker">METHOD / 04</p>
            <div className="seo-section__body">
              <h2 id="approach-title">A clear path from brief to useful work.</h2>
              <ol className="seo-steps">
                {service.approach.map((step, index) => (
                  <li key={step.title}>
                    <span>0{index + 1}</span>
                    <div><h3>{step.title}</h3><p>{step.body}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="seo-section" aria-labelledby="fit-title">
          <div className="container seo-section__grid">
            <p className="seo-kicker">FIT / 05</p>
            <div className="seo-section__body">
              <h2 id="fit-title">Who this is for.</h2>
              <p>{service.fit}</p>
              {service.local && <p>{service.local}</p>}
              <h3 className="seo-question">{service.question}</h3>
              <p>{service.answer}</p>
              {service.moreQuestions?.map((item) => (
                <div key={item.question}>
                  <h3 className="seo-question">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--cta" aria-labelledby="next-title">
          <div className="container seo-section__grid">
            <p className="seo-kicker">NEXT STEP / 06</p>
            <div className="seo-section__body">
              <h2 id="next-title">Define the right scope.</h2>
              <p>Tell us what needs to change, the outcome you need, and the constraints already in view. We will review the brief before recommending a next step.</p>
              <a className="button button--primary" href="/#start-project">Start a Project <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <nav className="seo-related container" aria-label="Related services">
          <p className="seo-kicker">CONNECTED DISCIPLINES</p>
          <div>
            {service.related.map((relatedSlug) => (
              <a key={relatedSlug} href={`/services/${relatedSlug}/`}>{services[relatedSlug].name} <span aria-hidden="true">↗</span></a>
            ))}
          </div>
        </nav>
      </main>

      <footer className="seo-footer">
        <div className="container seo-footer__inner">
          <p>TENZO STUDIO <span>/</span> JODHPUR, INDIA</p>
          <a href="/">Cut the Noise. Set the Standard.</a>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
