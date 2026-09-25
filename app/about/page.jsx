import "../services/services.css";

export const metadata = {
  title: "About TENZO STUDIO | A Digital Studio Based in Jodhpur",
  description: "Meet TENZO STUDIO, founded by Piyush in Jodhpur. We connect visual precision, engineering, and AI thinking across websites, products, and brand systems.",
  alternates: { canonical: "/about/" },
  openGraph: { title: "About TENZO STUDIO", url: "/about/", type: "website" },
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="seo-header">
        <div className="container seo-header__inner">
          <a className="seo-header__logo" href="/" aria-label="TENZO STUDIO home">TENZO</a>
          <nav className="seo-header__nav" aria-label="Main navigation">
            <a href="/#work">Work</a>
            <a href="/#capabilities">Services</a>
            <a href="/about/" aria-current="page">Studio</a>
            <a href="/#start-project">Start a Project <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>
      <main id="main-content" className="seo-page">
        <section className="seo-hero container">
          <p className="seo-kicker">TENZO STUDIO / JODHPUR, INDIA</p>
          <h1>Clarity. Craft. Speed. In that order.</h1>
          <p className="seo-hero__summary">TENZO is a premium digital studio founded by Piyush in Jodhpur. We build digital presence and intelligent systems for businesses that refuse to look average.</p>
          <div className="seo-actions"><a className="button button--primary" href="/#start-project">Start a Project <span aria-hidden="true">↗</span></a></div>
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
              <h2>Founded by Piyush.</h2>
              <p>TENZO operates from Jodhpur, Rajasthan, and works with local businesses, professionals, founders, and growing brands. Its work spans websites and automations, product design and AI MVPs, brand systems, visual and motion design, and growth and social systems.</p>
              <p>What connects those disciplines is a standard for precise thinking and execution. We define the right scope, remove what does not serve it, and build what the business actually needs.</p>
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
        <section className="seo-section seo-section--cta">
          <div className="container seo-section__grid">
            <p className="seo-kicker">WORK WITH TENZO / 04</p>
            <div className="seo-section__body">
              <h2>Bring the real problem.</h2>
              <p>Tell us what is changing, where the current system falls short, and what the next phase needs to achieve. We will define the right starting point.</p>
              <a className="button button--primary" href="/#start-project">Define a Project <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="seo-footer"><div className="container seo-footer__inner"><p>TENZO STUDIO <span>/</span> JODHPUR, INDIA</p><a href="/">Cut the Noise. Set the Standard.</a></div></footer>
    </>
  );
}
