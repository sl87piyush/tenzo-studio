export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <div className="preloader" data-preloader role="status" aria-label="Preparing the TENZO experience">
        <div className="preloader__field" aria-hidden="true">
          <div className="preloader__resolver">
            <i className="preloader__segment"></i>
            <i className="preloader__segment"></i>
            <i className="preloader__segment"></i>
            <i className="preloader__segment"></i>
            <i className="preloader__segment"></i>
            <i className="preloader__segment"></i>
          </div>
          <span className="preloader__wordmark">TENZO</span>
        </div>
      
        <div className="preloader__meta">
          <span className="type-overline" data-preloader-status>TENZO / SYSTEM ALIGNING</span>
          <span className="preloader__counter type-caption" aria-hidden="true">
            <span data-preloader-counter>00</span><span>/100</span>
          </span>
        </div>
      </div>
      
      <a className="skip-link" href="#main-content">Skip to content</a>
      
      <header className="site-header" data-site-header>
        <div className="site-header__inner container">
          <a className="site-header__brand" href="#hero" aria-label="TENZO STUDIO — Home">TENZO</a>
      
          <nav className="site-header__desktop-nav" aria-label="Primary navigation">
            <ul className="site-header__nav-list">
              <li><a className="site-header__link" data-nav-link data-nav-priority="primary" href="#work">Work</a></li>
              <li><a className="site-header__link" data-nav-link data-nav-priority="primary" href="#capabilities">Capabilities</a></li>
              <li><a className="site-header__link" data-nav-link href="#method">Method</a></li>
              <li><a className="site-header__link" data-nav-link href="#studio">Studio</a></li>
            </ul>
          </nav>
      
          <a className="site-header__cta" href="#start-project">
            <span>Start a Project</span>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-button-signal><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
          </a>
      
          <button className="site-header__menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-menu" aria-label="Open menu">
            <span data-menu-label>MENU</span>
            <span className="site-header__menu-icon" aria-hidden="true">
              <span className="site-header__menu-line"></span>
              <span className="site-header__menu-line"></span>
            </span>
          </button>
        </div>
      
        <div className="site-menu" id="site-menu" data-menu aria-hidden="true" inert={true}>
          <div className="site-menu__inner container">
            <p className="site-menu__index">TENZO / NAVIGATION</p>
            <nav className="site-menu__nav" aria-label="Mobile navigation">
              <ul className="site-menu__list">
                <li className="site-menu__item"><a className="site-menu__link" data-nav-link href="#work">Work</a></li>
                <li className="site-menu__item"><a className="site-menu__link" data-nav-link href="#capabilities">Capabilities</a></li>
                <li className="site-menu__item"><a className="site-menu__link" data-nav-link href="#method">Method</a></li>
                <li className="site-menu__item"><a className="site-menu__link" data-nav-link href="#studio">Studio</a></li>
                <li className="site-menu__item"><a className="site-menu__link" data-nav-link href="#start-project">Start a Project</a></li>
              </ul>
            </nav>
            <div className="site-menu__footer">
              <p className="site-menu__location">JODHPUR, INDIA / OPERATING GLOBALLY</p>
              <a className="site-menu__cta" href="#start-project">
                <span>Start a Project</span>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-button-signal><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main id="main-content">
      <section className="hero" id="hero" aria-labelledby="hero-title" data-hero>
        <div className="hero__grid" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>
      
        <div className="hero__inner container">
          <div className="hero__meta-row">
            <p className="hero__overline type-overline">TENZO STUDIO</p>
            <p className="hero__mode type-overline">MOTION-FIRST DIGITAL SYSTEMS</p>
          </div>
      
          <div className="hero__stage" role="group" aria-label="TENZO cinematic motion stage prepared for scroll-controlled frames.">
            <p className="hero__wordmark" aria-hidden="true">TENZO</p>
      
            <figure className="hero__frame" data-hero-media>
              <img
                src="assets/images/tenzo-story-hero.jpg"
                alt="A cinematic architectural field of obsidian monoliths and warm Jodhpur light, used as TENZO's hero motion stage."
                width="1536"
                height="1024"
                decoding="async"
                fetchPriority="high" />
              <figcaption className="hero__frame-caption type-overline">
                <span>FRAME 001</span>
                <span>NOISE → STANDARD</span>
              </figcaption>
            </figure>
      
            <div className="hero__scanner" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
      
          </div>
      
          <div className="hero__content">
            <h1 className="hero__title type-display-xl" id="hero-title">
              <span>Cut the Noise.</span>
              <span>Set the Standard.</span>
            </h1>
      
            <div className="hero__copy">
              <p className="hero__summary type-body-lg" id="hero-summary">
                TENZO builds premium digital presence and intelligent systems for businesses that refuse to look average.
              </p>
      
              <div className="hero__actions" aria-label="Hero actions">
                <a className="button button--primary hero__primary" href="#start-project">
                  <span>Start a Project</span>
                  <svg className="hero__button-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                </a>
                <a className="hero__secondary" href="#work">
                  <span>View Systems</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v11M3 9l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                </a>
              </div>
            </div>
          </div>
      
          <div className="hero__footer">
            <p className="hero__capabilities type-overline">PRODUCT / WEB / BRAND / MOTION / AI</p>
            <p className="hero__scroll-cue type-overline" aria-hidden="true">
              <span className="hero__scroll-track"><span></span></span>
              <span data-hero-scroll-label>SCROLL TO RESOLVE</span>
            </p>
          </div>
        </div>
      </section>
      
      
      <section className="positioning section section--inverse" id="standard" aria-labelledby="standard-title" data-section="standard">
        <div className="container grid positioning__grid">
          <p className="positioning__label type-overline" data-reveal>THE STANDARD / 01</p>
      
          <h2 className="positioning__title type-display-lg text-reveal" id="standard-title">
            <span>Your digital presence is already saying something. We make sure it says the right thing.</span>
          </h2>
      
          <div className="positioning__copy">
            <p className="type-body-lg" data-reveal>
              TENZO works at the intersection of visual precision, engineering depth, and AI integration. Strategy is not separated from execution. The system is considered as one.
            </p>
            <p className="type-body-lg" data-reveal>
              We define the right scope, remove what does not serve it, and build what the business actually needs.
            </p>
          </div>
      
          <div
            className="positioning__axis"
            role="img"
            aria-label="The system moves from noise to a defined standard."
            data-standard-indicator
            data-reveal="fade"
          >
            <span className="positioning__axis-label type-overline">NOISE</span>
            <span className="positioning__axis-track" aria-hidden="true">
              <span className="positioning__axis-progress"></span>
              <span className="positioning__axis-marker"></span>
            </span>
            <span className="positioning__axis-label type-overline">STANDARD</span>
          </div>
      
          <figure className="positioning__evidence media-reveal" data-reveal>
            <img
              src="assets/images/tenzo-positioning-signal.jpg"
              alt="Two obsidian structures resolving around one ivory axis and a precise chartreuse signal."
              width="1672"
              height="941"
              loading="lazy"
              decoding="async" />
            <figcaption><span className="type-overline">FIELD STUDY / 01</span><span className="type-caption">NOISE → STANDARD</span></figcaption>
          </figure>
        </div>
      </section>
      
      
      <section className="systems section" id="work" aria-labelledby="systems-title" data-section="work">
        <div className="container">
          <header className="systems__header grid">
            <p className="systems__label type-overline text-accent" data-reveal>SELECTED SYSTEMS / 02</p>
            <h2 className="systems__title type-display-lg text-reveal" id="systems-title">
              <span>Built for clarity.<br />Engineered for consequence.</span>
            </h2>
            <p className="systems__intro type-body-lg text-secondary" data-reveal>
              Three examples of how TENZO connects strategy, visual systems, engineering, and AI. Each begins with the problem—not the deliverable.
            </p>
          </header>
      
          <div className="systems__list">
            <article className="system-card system-card--product" data-reveal>
              <a
                className="system-card__visual system-card__visual--photo media-reveal"
                href="#capabilities"
                data-capability-link="0"
                data-cursor-label="VIEW SYSTEM"
                aria-label="Explore Product Architecture"
              >
                <img
                  src="assets/images/tenzo-system-product.jpg"
                  alt="An editorial product architecture study with black interface tiles, journey maps, and a chartreuse routing thread."
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async" />
                <svg className="system-card__photo-diagram" viewBox="0 0 800 500" role="img" aria-labelledby="system-product-title">
                  <title id="system-product-title">A precise product architecture connecting user journeys, interface states, and an AI layer.</title>
                  <g className="system-visual__grid" aria-hidden="true">
                    <path d="M80 64V436M240 64V436M400 64V436M560 64V436M720 64V436" />
                    <path d="M48 124H752M48 250H752M48 376H752" />
                  </g>
                  <g className="system-visual__path" aria-hidden="true">
                    <path d="M112 326C184 326 176 174 250 174S326 326 400 326 476 174 550 174 624 250 688 250" />
                  </g>
                  <g className="system-visual__nodes" aria-hidden="true">
                    <rect x="72" y="286" width="112" height="80" />
                    <rect x="216" y="134" width="112" height="80" />
                    <rect x="360" y="286" width="112" height="80" />
                    <rect x="504" y="134" width="112" height="80" />
                    <circle cx="688" cy="250" r="40" />
                  </g>
                  <g className="system-visual__signal" aria-hidden="true">
                    <circle cx="112" cy="326" r="7" />
                    <circle cx="256" cy="174" r="7" />
                    <circle cx="400" cy="326" r="7" />
                    <circle cx="544" cy="174" r="7" />
                    <circle cx="688" cy="250" r="7" />
                  </g>
                </svg>
                <span className="system-card__photo-index type-overline" aria-hidden="true">SYSTEM STUDY / 01</span>
              </a>
      
              <div className="system-card__content">
                <p className="system-card__meta type-overline text-muted">PRODUCT / UX / AI</p>
                <h3 className="system-card__title type-heading-lg">From raw hypothesis to deployable product.</h3>
                <p className="system-card__description type-body-md text-secondary">
                  Product strategy, complex journeys, interface systems, prototyping, and AI integration are defined as one scalable architecture.
                </p>
                <ul className="system-card__evidence type-caption" aria-label="PRODUCT / UX / AI">
                  <li>FEATURE ARCHITECTURE</li>
                  <li>INTERACTIVE PROTOTYPE</li>
                  <li>AI INTEGRATION</li>
                </ul>
                <a className="system-card__link type-caption" href="#capabilities" data-capability-link="0">
                  <span>Explore Product Architecture</span><span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
      
            <article className="system-card system-card--infrastructure" data-reveal>
              <a
                className="system-card__visual system-card__visual--photo system-card__visual--infrastructure media-reveal"
                href="#capabilities"
                data-capability-link="1"
                data-cursor-label="VIEW SYSTEM"
                aria-label="Explore Digital Infrastructure"
              >
                <img
                  src="assets/images/tenzo-system-infrastructure.jpg"
                  alt="A sculptural digital infrastructure installation with black glass system portals connected by a chartreuse signal line."
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async" />
                <svg className="system-card__photo-diagram" viewBox="0 0 800 500" role="img" aria-labelledby="system-infrastructure-title">
                  <title id="system-infrastructure-title">A website system connecting content modules, responsive layouts, lead capture, and backend automation.</title>
                  <g className="system-visual__grid" aria-hidden="true">
                    <path d="M56 88H744M56 250H744M56 412H744" />
                    <path d="M196 56V444M400 56V444M604 56V444" />
                  </g>
                  <g className="system-visual__nodes" aria-hidden="true">
                    <rect x="78" y="122" width="206" height="256" />
                    <rect x="316" y="122" width="168" height="112" />
                    <rect x="316" y="266" width="168" height="112" />
                    <rect x="516" y="122" width="206" height="256" />
                    <path d="M102 154H258M102 178H214M102 310H258M102 334H234" />
                    <path d="M542 154H696M542 178H650M542 310H696M542 334H670" />
                  </g>
                  <g className="system-visual__path" aria-hidden="true">
                    <path d="M284 250H316M484 178H516M484 322H516" />
                  </g>
                  <g className="system-visual__signal" aria-hidden="true">
                    <rect x="374" y="152" width="52" height="52" />
                    <circle cx="400" cy="322" r="26" />
                  </g>
                </svg>
                <span className="system-card__photo-index type-overline" aria-hidden="true">INFRASTRUCTURE STUDY / 02</span>
              </a>
      
              <div className="system-card__content">
                <p className="system-card__meta type-overline text-muted">WEB / ENGINEERING / AUTOMATION</p>
                <h3 className="system-card__title type-heading-lg">A website should carry more than appearance.</h3>
                <p className="system-card__description type-body-md text-secondary">
                  Content, responsive experience, performance, lead flow, and backend automation are built as one piece of digital infrastructure.
                </p>
                <ul className="system-card__evidence type-caption" aria-label="WEB / ENGINEERING / AUTOMATION">
                  <li>CONTENT SYSTEM</li>
                  <li>RESPONSIVE BUILD</li>
                  <li>AUTOMATED FLOW</li>
                </ul>
                <a className="system-card__link type-caption" href="#capabilities" data-capability-link="1">
                  <span>Explore Digital Infrastructure</span><span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
      
            <article className="system-card system-card--brand" data-reveal>
              <a
                className="system-card__visual system-card__visual--photo system-card__visual--brand-photo media-reveal"
                href="#capabilities"
                data-capability-link="3"
                data-cursor-label="VIEW SYSTEM"
                aria-label="Explore Brand Ecosystems"
              >
                <img
                  src="assets/images/tenzo-system-brand.jpg"
                  alt="A tactile brand ecosystem sculpture of ivory, smoked glass, and blackened metal planes orbiting a chartreuse core."
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async" />
                <svg className="system-card__photo-diagram system-card__photo-diagram--brand" viewBox="0 0 800 500" role="img" aria-labelledby="system-brand-title">
                  <title id="system-brand-title">A brand system connecting identity rules, motion behavior, campaign assets, and content infrastructure.</title>
                  <g className="system-visual__grid" aria-hidden="true">
                    <circle cx="400" cy="250" r="170" />
                    <circle cx="400" cy="250" r="108" />
                    <path d="M400 48V452M198 250H602M257 107L543 393M543 107L257 393" />
                  </g>
                  <g className="system-visual__nodes" aria-hidden="true">
                    <rect x="350" y="200" width="100" height="100" />
                    <circle cx="400" cy="80" r="28" />
                    <circle cx="570" cy="250" r="28" />
                    <circle cx="400" cy="420" r="28" />
                    <circle cx="230" cy="250" r="28" />
                  </g>
                  <g className="system-visual__path" aria-hidden="true">
                    <path d="M400 108V200M450 250H542M400 300V392M350 250H258" />
                  </g>
                  <g className="system-visual__signal" aria-hidden="true">
                    <path d="M384 230H416V270H384Z" />
                    <circle cx="400" cy="250" r="8" />
                  </g>
                </svg>
                <span className="system-card__photo-index type-overline" aria-hidden="true">BRAND FIELD / 03</span>
              </a>
      
              <div className="system-card__content">
                <p className="system-card__meta type-overline text-muted">BRAND / MOTION / GROWTH</p>
                <h3 className="system-card__title type-heading-lg">Authority has to hold across every surface.</h3>
                <p className="system-card__description type-body-md text-secondary">
                  Positioning, identity, motion, campaigns, and content infrastructure are governed by one brand ecosystem—not a collection of disconnected assets.
                </p>
                <ul className="system-card__evidence type-caption" aria-label="BRAND / MOTION / GROWTH">
                  <li>IDENTITY LOGIC</li>
                  <li>MOTION LANGUAGE</li>
                  <li>CONTENT INFRASTRUCTURE</li>
                </ul>
                <a className="system-card__link type-caption" href="#capabilities" data-capability-link="3">
                  <span>Explore Brand Ecosystems</span><span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
      
          <a className="systems__cta section-link type-caption" href="#capabilities" data-reveal>
            <span>See the Full Capability System</span><span aria-hidden="true">↘</span>
          </a>
        </div>
      </section>
      
      
      <section className="capabilities section" id="capabilities" aria-labelledby="capabilities-title" data-section="capabilities" data-capabilities>
        <header className="capabilities__header container grid">
          <p className="capabilities__label type-overline text-accent" data-reveal>CAPABILITY ARCHITECTURE / 03</p>
          <h2 className="capabilities__title type-display-lg text-reveal" id="capabilities-title">
            <span>Five disciplines.<br />One operating system.</span>
          </h2>
          <p className="capabilities__intro type-body-lg text-secondary" data-reveal>
            TENZO connects the decisions that are usually separated. The result is sharper strategy, cleaner execution, and a system that can move without losing coherence.
          </p>
        </header>
      
        <div className="capability-stage" data-capability-stage>
          <div className="capability-stage__sticky">
            <div className="capability-frame container">
              <span className="capability-frame__edge capability-frame__edge--top" aria-hidden="true"></span>
              <span className="capability-frame__edge capability-frame__edge--right" aria-hidden="true"></span>
              <span className="capability-frame__edge capability-frame__edge--bottom" aria-hidden="true"></span>
              <span className="capability-frame__edge capability-frame__edge--left" aria-hidden="true"></span>
      
              <nav className="capability-index" aria-label="Capability chapter 1 of 5">
                <span className="capability-index__progress" aria-hidden="true"><span></span></span>
                <a className="capability-index__item type-overline is-active" href="#capability-01" data-capability-jump="0" aria-current="step">01</a>
                <a className="capability-index__item type-overline" href="#capability-02" data-capability-jump="1">02</a>
                <a className="capability-index__item type-overline" href="#capability-03" data-capability-jump="2">03</a>
                <a className="capability-index__item type-overline" href="#capability-04" data-capability-jump="3">04</a>
                <a className="capability-index__item type-overline" href="#capability-05" data-capability-jump="4">05</a>
              </nav>
      
              <div className="capability-orbit" data-capability-orbit aria-hidden="true">
                <p className="capability-orbit__eyebrow type-overline">LIVE SYSTEM / SCROLL TO ROTATE</p>
                <div className="capability-orbit__camera">
                  <figure className="capability-orbit__panel is-current" data-capability-orbit-panel="0">
                    <img src="assets/images/tenzo-system-product.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
                    <figcaption><span className="type-overline">01 / PRODUCT</span><strong>Architecture + AI</strong></figcaption>
                  </figure>
                  <figure className="capability-orbit__panel" data-capability-orbit-panel="1">
                    <img src="assets/images/tenzo-system-infrastructure.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
                    <figcaption><span className="type-overline">02 / WEB</span><strong>Digital Infrastructure</strong></figcaption>
                  </figure>
                  <figure className="capability-orbit__panel" data-capability-orbit-panel="2">
                    <img src="assets/images/tenzo-capability-motion.jpg" alt="" width="1672" height="941" loading="lazy" decoding="async" />
                    <figcaption><span className="type-overline">03 / MOTION</span><strong>Visual Engineering</strong></figcaption>
                  </figure>
                  <figure className="capability-orbit__panel" data-capability-orbit-panel="3">
                    <img src="assets/images/tenzo-system-brand.jpg" alt="" width="1672" height="941" loading="lazy" decoding="async" />
                    <figcaption><span className="type-overline">04 / BRAND</span><strong>Identity Ecosystem</strong></figcaption>
                  </figure>
                  <figure className="capability-orbit__panel" data-capability-orbit-panel="4">
                    <img src="assets/images/tenzo-capability-growth.jpg" alt="" width="1672" height="941" loading="lazy" decoding="async" />
                    <figcaption><span className="type-overline">05 / GROWTH</span><strong>Compounding Systems</strong></figcaption>
                  </figure>
                </div>
                <div className="capability-orbit__coordinates type-overline"><span>Y / 00.000</span><span>DEPTH / 05</span></div>
              </div>
      
              <div className="capability-chapters">
                <article className="capability-chapter is-active" id="capability-01" data-capability-chapter="0">
                  <div className="capability-chapter__copy">
                    <p className="capability-chapter__number type-overline text-accent">01</p>
                    <h3 className="capability-chapter__title type-heading-lg">Product Architecture &amp; AI MVPs</h3>
                    <p className="capability-chapter__description type-body-md text-secondary">
                      We turn raw hypotheses into scalable, pitch-ready products. Strategy, journeys, interface systems, prototyping, and AI integration are designed as one architecture.
                    </p>
                    <ul className="capability-chapter__tags type-caption">
                      <li>PRODUCT STRATEGY</li><li>UX SYSTEMS</li><li>INTERACTIVE PROTOTYPES</li><li>AI INTEGRATION</li>
                    </ul>
                  </div>
                  <figure className="capability-diagram">
                    <svg viewBox="0 0 720 480" role="img" aria-labelledby="capability-product-title">
                      <title id="capability-product-title">From hypothesis to a product system ready for deployment and stakeholder scrutiny.</title>
                      <g className="diagram-grid" aria-hidden="true"><path d="M64 96H656M64 240H656M64 384H656M120 56V424M360 56V424M600 56V424" /></g>
                      <g className="diagram-path" aria-hidden="true"><path d="M104 312L232 168 360 312 488 168 616 312" /></g>
                      <g className="diagram-node" aria-hidden="true"><circle cx="104" cy="312" r="32"/><rect x="200" y="136" width="64" height="64"/><circle cx="360" cy="312" r="32"/><rect x="456" y="136" width="64" height="64"/><circle cx="616" cy="312" r="32"/></g>
                      <g className="diagram-signal" aria-hidden="true"><circle cx="104" cy="312" r="7"/><circle cx="232" cy="168" r="7"/><circle cx="360" cy="312" r="7"/><circle cx="488" cy="168" r="7"/><circle cx="616" cy="312" r="7"/></g>
                    </svg>
                    <figcaption className="type-caption text-muted">From hypothesis to a product system ready for deployment and stakeholder scrutiny.</figcaption>
                  </figure>
                </article>
      
                <article className="capability-chapter" id="capability-02" data-capability-chapter="1">
                  <div className="capability-chapter__copy">
                    <p className="capability-chapter__number type-overline text-accent">02</p>
                    <h3 className="capability-chapter__title type-heading-lg">Digital Infrastructure</h3>
                    <p className="capability-chapter__description type-body-md text-secondary">
                      We build high-performance websites and autonomous backend systems that sharpen credibility, generate demand, and remove operational drag.
                    </p>
                    <ul className="capability-chapter__tags type-caption">
                      <li>WEB EXPERIENCE</li><li>FULL-STACK BUILD</li><li>AUTOMATIONS</li><li>SEO STRUCTURE</li>
                    </ul>
                  </div>
                  <figure className="capability-diagram">
                    <svg viewBox="0 0 720 480" role="img" aria-labelledby="capability-infrastructure-title">
                      <title id="capability-infrastructure-title">Content, interface, performance, and operations connected in one digital system.</title>
                      <g className="diagram-grid" aria-hidden="true"><path d="M80 96H640M80 192H640M80 288H640M80 384H640M160 56V424M360 56V424M560 56V424" /></g>
                      <g className="diagram-node" aria-hidden="true"><rect x="112" y="72" width="496" height="56"/><rect x="112" y="168" width="496" height="56"/><rect x="112" y="264" width="496" height="56"/><rect x="112" y="360" width="496" height="56"/></g>
                      <g className="diagram-path" aria-hidden="true"><path d="M360 128V168M360 224V264M360 320V360" /></g>
                      <g className="diagram-signal" aria-hidden="true"><rect x="344" y="84" width="32" height="32"/><circle cx="360" cy="196" r="9"/><circle cx="360" cy="292" r="9"/><circle cx="360" cy="388" r="9"/></g>
                    </svg>
                    <figcaption className="type-caption text-muted">Content, interface, performance, and operations connected in one digital system.</figcaption>
                  </figure>
                </article>
      
                <article className="capability-chapter" id="capability-03" data-capability-chapter="2">
                  <div className="capability-chapter__copy">
                    <p className="capability-chapter__number type-overline text-accent">03</p>
                    <h3 className="capability-chapter__title type-heading-lg">Visual &amp; Motion Engineering</h3>
                    <p className="capability-chapter__description type-body-md text-secondary">
                      We design kinetic typography, 2D and 3D systems, custom illustration, and interface motion that make the right idea impossible to ignore.
                    </p>
                    <ul className="capability-chapter__tags type-caption">
                      <li>MOTION SYSTEMS</li><li>2D + 3D</li><li>ICONOGRAPHY</li><li>CAMPAIGN VISUALS</li>
                    </ul>
                  </div>
                  <figure className="capability-diagram">
                    <svg viewBox="0 0 720 480" role="img" aria-labelledby="capability-motion-title">
                      <title id="capability-motion-title">A controlled motion language built from hierarchy, timing, and repeatable visual rules.</title>
                      <g className="diagram-grid" aria-hidden="true"><path d="M80 80H640M80 160H640M80 240H640M80 320H640M80 400H640M120 56V424M360 56V424M600 56V424" /></g>
                      <g className="diagram-node" aria-hidden="true"><circle cx="168" cy="240" r="76"/><rect x="300" y="164" width="152" height="152"/><path d="M552 164L628 240 552 316 476 240Z"/></g>
                      <g className="diagram-path" aria-hidden="true"><path d="M244 240H300M452 240H476" /></g>
                      <g className="diagram-signal" aria-hidden="true"><path d="M144 240H192M168 216V264"/><circle cx="376" cy="240" r="12"/><circle cx="552" cy="240" r="12"/></g>
                    </svg>
                    <figcaption className="type-caption text-muted">A controlled motion language built from hierarchy, timing, and repeatable visual rules.</figcaption>
                  </figure>
                </article>
      
                <article className="capability-chapter" id="capability-04" data-capability-chapter="3">
                  <div className="capability-chapter__copy">
                    <p className="capability-chapter__number type-overline text-accent">04</p>
                    <h3 className="capability-chapter__title type-heading-lg">Brand Ecosystems</h3>
                    <p className="capability-chapter__description type-body-md text-secondary">
                      We do not stop at a logo. We define the positioning, identity, visual language, and governance required to build lasting authority.
                    </p>
                    <ul className="capability-chapter__tags type-caption">
                      <li>BRAND STRATEGY</li><li>VISUAL IDENTITY</li><li>GUIDELINES</li><li>MOTION IDENTITY</li>
                    </ul>
                  </div>
                  <figure className="capability-diagram">
                    <svg viewBox="0 0 720 480" role="img" aria-labelledby="capability-brand-title">
                      <title id="capability-brand-title">A brand core translated into consistent decisions across every public surface.</title>
                      <g className="diagram-grid" aria-hidden="true"><circle cx="360" cy="240" r="184"/><circle cx="360" cy="240" r="112"/><path d="M360 40V440M160 240H560M219 99L501 381M501 99L219 381"/></g>
                      <g className="diagram-node" aria-hidden="true"><rect x="312" y="192" width="96" height="96"/><circle cx="360" cy="56" r="26"/><circle cx="544" cy="240" r="26"/><circle cx="360" cy="424" r="26"/><circle cx="176" cy="240" r="26"/></g>
                      <g className="diagram-signal" aria-hidden="true"><circle cx="360" cy="240" r="12"/><path d="M336 240H384M360 216V264"/></g>
                    </svg>
                    <figcaption className="type-caption text-muted">A brand core translated into consistent decisions across every public surface.</figcaption>
                  </figure>
                </article>
      
                <article className="capability-chapter" id="capability-05" data-capability-chapter="4">
                  <div className="capability-chapter__copy">
                    <p className="capability-chapter__number type-overline text-accent">05</p>
                    <h3 className="capability-chapter__title type-heading-lg">Growth Architecture</h3>
                    <p className="capability-chapter__description type-body-md text-secondary">
                      We connect performance, content infrastructure, automation, community, and analytics so attention can compound instead of being chased.
                    </p>
                    <ul className="capability-chapter__tags type-caption">
                      <li>PERFORMANCE</li><li>CONTENT SYSTEMS</li><li>AUTOMATION</li><li>ANALYTICS</li>
                    </ul>
                  </div>
                  <figure className="capability-diagram">
                    <svg viewBox="0 0 720 480" role="img" aria-labelledby="capability-growth-title">
                      <title id="capability-growth-title">A measurable loop connecting attention, action, learning, and the next decision.</title>
                      <g className="diagram-grid" aria-hidden="true"><circle cx="360" cy="240" r="172"/><circle cx="360" cy="240" r="96"/><path d="M360 68V412M188 240H532"/></g>
                      <g className="diagram-path" aria-hidden="true"><path d="M360 68C455 68 532 145 532 240S455 412 360 412 188 335 188 240 265 68 360 68Z"/></g>
                      <g className="diagram-node" aria-hidden="true"><rect x="328" y="36" width="64" height="64"/><rect x="500" y="208" width="64" height="64"/><rect x="328" y="380" width="64" height="64"/><rect x="156" y="208" width="64" height="64"/></g>
                      <g className="diagram-signal" aria-hidden="true"><circle cx="360" cy="68" r="9"/><circle cx="532" cy="240" r="9"/><circle cx="360" cy="412" r="9"/><circle cx="188" cy="240" r="9"/></g>
                    </svg>
                    <figcaption className="type-caption text-muted">A measurable loop connecting attention, action, learning, and the next decision.</figcaption>
                  </figure>
                </article>
              </div>
      
              <div className="capability-frame__close">
                <p className="type-heading-md">The scope changes. The standard does not.</p>
                <a className="section-link type-caption" href="#start-project"><span>Define the Right Scope</span><span aria-hidden="true">↘</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="method section section--inverse" id="method" aria-labelledby="method-title" data-section="method" data-method>
        <div className="container">
          <header className="method__header grid">
            <p className="method__label type-overline" data-reveal>HOW WE WORK / 04</p>
            <h2 className="method__title type-display-lg text-reveal" id="method-title">
              <span>Clarity before velocity.<br />Systems before screens.</span>
            </h2>
            <p className="method__lead type-body-lg" data-reveal>
              Every engagement is scoped around the problem, the outcome, and the constraints that can change the work.
            </p>
          </header>
      
          <div className="method__system">
            <div className="method__diagram" role="img" aria-label="CURRENT STATE / GAP / PRIORITY">
              <span className="method__diagram-line" aria-hidden="true"></span>
              <span className="method__diagram-progress" aria-hidden="true"></span>
              <span className="method__diagram-node is-active" data-method-node="0"><span>01</span></span>
              <span className="method__diagram-node" data-method-node="1"><span>02</span></span>
              <span className="method__diagram-node" data-method-node="2"><span>03</span></span>
              <span className="method__diagram-node" data-method-node="3"><span>04</span></span>
            </div>
      
            <ol className="method__steps">
              <li>
                <button className="method-step is-active" type="button" data-method-step="0" aria-pressed="true">
                  <span className="method-step__media" aria-hidden="true"><img src="assets/images/tenzo-method-discover.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" /></span>
                  <span className="method-step__number type-overline">01</span>
                  <span className="method-step__name type-heading-md">Diagnose</span>
                  <span className="method-step__description type-body-md">We audit the product, market, message, and technical reality. The goal is to find the gap worth closing.</span>
                  <span className="method-step__note type-caption">CURRENT STATE / GAP / PRIORITY</span>
                </button>
              </li>
              <li>
                <button className="method-step" type="button" data-method-step="1" aria-pressed="false">
                  <span className="method-step__media" aria-hidden="true"><img src="assets/images/tenzo-method-define.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" /></span>
                  <span className="method-step__number type-overline">02</span>
                  <span className="method-step__name type-heading-md">Architect</span>
                  <span className="method-step__description type-body-md">We define the narrative, experience, system boundaries, and success criteria before production begins.</span>
                  <span className="method-step__note type-caption">SCOPE / STRUCTURE / DECISION SYSTEM</span>
                </button>
              </li>
              <li>
                <button className="method-step" type="button" data-method-step="2" aria-pressed="false">
                  <span className="method-step__media" aria-hidden="true"><img src="assets/images/tenzo-method-build.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" /></span>
                  <span className="method-step__number type-overline">03</span>
                  <span className="method-step__name type-heading-md">Build</span>
                  <span className="method-step__description type-body-md">Design and engineering move together. Every decision is tested against the same standard: does this improve the outcome?</span>
                  <span className="method-step__note type-caption">DESIGN / ENGINEERING / VALIDATION</span>
                </button>
              </li>
              <li>
                <button className="method-step" type="button" data-method-step="3" aria-pressed="false">
                  <span className="method-step__media" aria-hidden="true"><img src="assets/images/tenzo-method-deliver.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" /></span>
                  <span className="method-step__number type-overline">04</span>
                  <span className="method-step__name type-heading-md">Deploy</span>
                  <span className="method-step__description type-body-md">We ship a production-ready system, document it, and define what should scale next.</span>
                  <span className="method-step__note type-caption">LAUNCH / DOCUMENTATION / NEXT SYSTEM</span>
                </button>
              </li>
            </ol>
          </div>
      
          <footer className="method__footer">
            <p className="method__rule type-heading-md">Written scope. Two revision rounds. No speculative work.</p>
            <a className="section-link type-caption" href="#start-project"><span>Start with Discovery</span><span aria-hidden="true">↘</span></a>
          </footer>
        </div>
      </section>
      
      
      <section className="principles section" id="principles" aria-labelledby="principles-title" data-section="principles">
        <div className="container">
          <header className="principles__header grid">
            <p className="principles__label type-overline text-accent" data-reveal>OPERATING PRINCIPLES / 05</p>
            <h2 className="principles__title type-display-lg text-reveal" id="principles-title">
              <span>Premium is not a visual effect.<br />It is a way of working.</span>
            </h2>
            <p className="principles__lead type-body-lg text-secondary" data-reveal>
              The standard is visible in what gets included, what gets removed, and what never gets compromised to make a pitch easier.
            </p>
          </header>
      
          <ol className="principles__list" data-principles-list>
            <li className="principle" data-principle-index="0" data-reveal>
              <span className="principle__number type-overline">01</span>
              <h3 className="principle__title type-heading-lg">Every element earns its place.</h3>
              <p className="principle__body type-body-md text-secondary">Decoration does not replace hierarchy. Features do not replace purpose. If an element does not clarify, prove, or enable something, it leaves.</p>
            </li>
            <li className="principle" data-principle-index="1" data-reveal>
              <span className="principle__number type-overline">02</span>
              <h3 className="principle__title type-heading-lg">Design and engineering share the same brief.</h3>
              <p className="principle__body type-body-md text-secondary">The interface, content, motion, performance, and backend behavior are decisions inside one system.</p>
            </li>
            <li className="principle" data-principle-index="2" data-reveal>
              <span className="principle__number type-overline">03</span>
              <h3 className="principle__title type-heading-lg">Speed is useful only when the standard survives it.</h3>
              <p className="principle__body type-body-md text-secondary">We move quickly after the problem is clear. We do not overpromise a timeline to win the work.</p>
            </li>
            <li className="principle" data-principle-index="3" data-reveal>
              <span className="principle__number type-overline">04</span>
              <h3 className="principle__title type-heading-lg">Scope protects the outcome.</h3>
              <p className="principle__body type-body-md text-secondary">Every engagement begins with written boundaries, accountable decisions, and a clear process for change.</p>
            </li>
          </ol>
      
          <div className="principles-preview" data-principles-preview aria-hidden="true">
            <div className="principles-preview__frame">
              <div className="principles-preview__track" data-principles-preview-track>
                <figure className="principles-preview__image">
                  <img src="assets/images/tenzo-principle-hierarchy.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
                </figure>
                <figure className="principles-preview__image">
                  <img src="assets/images/tenzo-system-infrastructure.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
                </figure>
                <figure className="principles-preview__image">
                  <img src="assets/images/tenzo-principle-speed.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
                </figure>
                <figure className="principles-preview__image principles-preview__image--portrait">
                  <img src="assets/images/tenzo-studio-threshold.jpg" alt="" width="1122" height="1402" loading="lazy" decoding="async" />
                </figure>
              </div>
              <p className="principles-preview__meta type-overline"><span>PRINCIPLE</span><span data-principles-preview-index>01 / 04</span></p>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="studio section section--secondary" id="studio" aria-labelledby="studio-title" data-section="studio" data-studio>
        <div className="container">
          <header className="studio__header grid">
            <p className="studio__label type-overline text-accent" data-reveal>THE STUDIO / 06</p>
            <h2 className="studio__title type-display-lg text-reveal" id="studio-title">
              <span>Built in Jodhpur.<br />Operating without borders.</span>
            </h2>
          </header>
      
          <div className="studio__body grid">
            <figure className="studio__field media-reveal" data-studio-field>
              <img
                className="studio__field-image"
                src="assets/images/tenzo-studio-threshold.jpg"
                alt="A conceptual sandstone threshold opening onto a precise obsidian courtyard in Jodhpur light."
                width="1122"
                height="1402"
                loading="lazy"
                decoding="async" />
              <svg className="studio__field-overlay" viewBox="0 0 720 860" aria-hidden="true" focusable="false">
                <g className="studio-field__grid"><path d="M72 72H648M72 216H648M72 360H648M72 504H648M72 648H648M72 792H648M72 72V792M216 72V792M360 72V792M504 72V792M648 72V792" /></g>
                <g className="studio-field__axes"><circle cx="360" cy="432" r="176"/><circle cx="360" cy="432" r="88"/><path d="M360 160V704M88 432H632"/></g>
                <g className="studio-field__signal"><circle cx="360" cy="432" r="14"/><path d="M360 344V376M360 488V520M272 432H304M416 432H448"/></g>
              </svg>
              <figcaption className="studio__field-caption">
                <span className="type-overline">SYSTEM ORIGIN / JODHPUR</span>
                <span className="type-caption">PIYUSH / FOUNDER — TENZO STUDIO</span>
              </figcaption>
            </figure>
      
            <div className="studio__copy" data-reveal>
              <p className="type-body-lg">TENZO is a lean digital studio founded by Piyush. We partner with serious businesses, founders, and operators across India and international markets.</p>
              <p className="type-body-lg text-secondary">The studio stays deliberately lean. Senior thinking remains close to the work, communication stays direct, and every engagement is scoped around the outcome.</p>
            </div>
          </div>
      
          <div className="studio__markets grid" data-reveal>
            <p className="studio__markets-label type-overline">PRIMARY MARKETS</p>
            <ul className="studio__markets-list type-caption">
              <li>UNITED STATES</li>
              <li>UNITED KINGDOM</li>
              <li>DUBAI + UAE</li>
              <li>SPAIN</li>
              <li>FRANCE</li>
              <li>NEW ZEALAND</li>
              <li>CANADA</li>
              <li>INDIA</li>
            </ul>
          </div>
      
          <footer className="studio__footer">
            <p className="type-heading-lg">Clarity. Craft. Speed. In that order.</p>
            <a className="section-link type-caption" href="#principles"><span>Read the Studio Standard</span><span aria-hidden="true">↗</span></a>
          </footer>
        </div>
      </section>
      
      <section className="project-contact section" id="start-project" aria-labelledby="contact-title">
        <div className="container">
          <div className="project-contact__intro">
            <p className="project-contact__label type-overline" data-reveal>Start a project / 07</p>
            <h2 className="project-contact__title type-display-lg text-reveal" id="contact-title"><span>If the ambition is real,<br />the scope can be defined.</span></h2>
            <div className="project-contact__copy" data-reveal>
              <p className="type-body-lg">Tell us what is changing, what is not working, and what the business needs to achieve. We will respond with the right next step—not a generic pitch.</p>
              <p className="type-caption mt-5">We review every brief before recommending a call.<br />Expect a response within one business day.</p>
            </div>
            <div className="project-contact__actions" data-reveal>
              <button className="button button--primary" type="button" data-form-toggle aria-expanded="false" aria-controls="project-brief">
                <span>Start a Project</span>
                <svg className="button__icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>
            </div>
          </div>
      
          <figure className="project-contact__visual media-reveal" data-reveal>
            <img
              src="assets/images/tenzo-contact-threshold.jpg"
              alt="A monumental stone threshold opening toward an obsidian horizon marked by one chartreuse beacon."
              width="1672"
              height="941"
              loading="lazy"
              decoding="async" />
            <figcaption><span className="type-overline">ENTRY POINT / 07</span><span className="type-caption">AMBITION → DEFINED SCOPE</span></figcaption>
          </figure>
      
          <div className="project-form-wrap" id="project-brief" data-form-wrap data-collapsed="true">
            <div className="project-form-wrap__inner">
              <form className="project-form" data-project-form data-endpoint="" aria-label="Start a project with TENZO">
                <p className="type-caption form-field--full">All fields are required unless marked optional.</p>
      
                <label className="form-field">
                  <span className="form-label">Name</span>
                  <input className="form-control" type="text" name="name" autoComplete="name" required />
                </label>
                <label className="form-field">
                  <span className="form-label">Work email</span>
                  <input className="form-control" type="email" name="email" autoComplete="email" required />
                </label>
                <label className="form-field">
                  <span className="form-label">Company or business</span>
                  <input className="form-control" type="text" name="company" autoComplete="organization" required />
                </label>
                <label className="form-field">
                  <span className="form-label">Available budget</span>
                  <input className="form-control" type="text" name="budget" aria-describedby="budget-help" required />
                  <span className="form-support" id="budget-help">Include the amount and currency. Scope is defined after discovery.</span>
                </label>
                <label className="form-field form-field--full">
                  <span className="form-label">What needs to change?</span>
                  <textarea className="form-control" name="project-gap" minLength="40" aria-describedby="gap-help" required></textarea>
                  <span className="form-support" id="gap-help">Describe the current gap, the outcome you need, and anything already in motion.</span>
                </label>
                <label className="form-field">
                  <span className="form-label">Target launch</span>
                  <input className="form-control" type="text" name="target-launch" aria-describedby="launch-help" required />
                  <span className="form-support" id="launch-help">Use a date or a realistic window. A date is not confirmed until scope and capacity are reviewed.</span>
                </label>
                <label className="form-field">
                  <span className="form-label">Relevant link (optional)</span>
                  <input className="form-control" type="url" name="relevant-link" placeholder="https://" aria-describedby="link-help" />
                  <span className="form-support" id="link-help">Share an existing website, product, brief, or reference document.</span>
                </label>
      
                <fieldset className="form-choice">
                  <legend className="form-legend">Decision authority</legend>
                  <div className="form-options">
                    <label className="form-option"><input type="radio" name="authority" value="final" required /><span>I am the final decision-maker.</span></label>
                    <label className="form-option"><input type="radio" name="authority" value="joining" /><span>A final decision-maker will join discovery.</span></label>
                    <label className="form-option"><input type="radio" name="authority" value="defining" /><span>Decision authority is still being defined.</span></label>
                  </div>
                </fieldset>
      
                <label className="form-consent">
                  <input type="checkbox" name="consent" required />
                  <span>By submitting, you allow TENZO to use these details to review and respond to this project. Your information is not added to a marketing list.</span>
                </label>
      
                <div className="form-submit">
                  <p className="form-submit__note type-body-sm">We review every brief before recommending a call.</p>
                  <button className="button button--primary" type="submit">
                    <span>Send Project Brief</span>
                    <svg className="button__icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </button>
                </div>
                <p className="form-status" data-form-status role="status" aria-live="polite" tabIndex="-1"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      </main>
      
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="site-footer__top">
            <div className="site-footer__statement" data-reveal>
              <p className="type-overline text-muted">TENZO STUDIO / JODHPUR — GLOBAL</p>
              <p className="type-heading-lg mt-5">Cut the Noise.<br />Set the Standard.</p>
            </div>
            <nav className="site-footer__column site-footer__column--navigate" aria-label="Footer navigation" data-reveal>
              <h2 className="site-footer__heading type-overline">Navigate</h2>
              <ul className="site-footer__links">
                <li><a className="site-footer__link" href="#work">Work</a></li>
                <li><a className="site-footer__link" href="#capabilities">Capabilities</a></li>
                <li><a className="site-footer__link" href="#method">Method</a></li>
                <li><a className="site-footer__link" href="#studio">Studio</a></li>
                <li><a className="site-footer__link" href="#start-project">Start a Project</a></li>
              </ul>
            </nav>
            <div className="site-footer__column site-footer__column--build" data-reveal>
              <h2 className="site-footer__heading type-overline">Build</h2>
              <ul className="site-footer__links">
                <li>Product Architecture &amp; AI MVPs</li>
                <li>Digital Infrastructure</li>
                <li>Visual &amp; Motion Engineering</li>
                <li>Brand Ecosystems</li>
                <li>Growth Architecture</li>
              </ul>
            </div>
            <div className="site-footer__column site-footer__column--markets" data-reveal>
              <h2 className="site-footer__heading type-overline">Operating across</h2>
              <p>US / UK / UAE / SPAIN / FRANCE / NEW ZEALAND / CANADA / INDIA</p>
              <a className="text-link" href="https://tenzostudio.com" rel="home">TENZOSTUDIO.COM</a>
            </div>
          </div>
      
          <div className="site-footer__wordmark" aria-label="TENZO STUDIO" data-reveal="fade">TENZO</div>
      
          <div className="site-footer__base type-caption">
            <p>© 2026 TENZO STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="site-footer__base-links">
              <a className="site-footer__link" href="#top">Back to Top</a>
              <span aria-label="Privacy policy pending client approval">Privacy</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
