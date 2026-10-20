export default function PageHeader({ current }) {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="seo-header">
      <div className="container seo-header__inner">
        <a className="seo-header__logo" href="/" aria-label="TENZO STUDIO home">TENZO</a>
        <nav className="seo-header__nav" aria-label="Main navigation">
          <a href="/#work">Work</a>
          <a href="/#capabilities">Services</a>
          <a href="/about/" aria-current={current === "about" ? "page" : undefined}>Studio</a>
          <a href="/contact/" aria-current={current === "contact" ? "page" : undefined}>Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  </>;
}
