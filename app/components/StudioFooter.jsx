import { siteConfig } from "../site-config";
import SocialLinks from "./SocialLinks";

const serviceLinks = [
  ["/services/website-design-jodhpur/", "Website Design & Development"],
  ["/services/product-design-ai-mvps/", "Product Design & AI MVPs"],
  ["/services/brand-identity-jodhpur/", "Brand Identity & Systems"],
  ["/services/visual-motion-design/", "Visual & Motion Design"],
  ["/services/social-media-jodhpur/", "Social Media & Growth"],
];

export default function StudioFooter({ showWordmark = true }) {
  return (
    <footer className="site-footer studio-footer" id="footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__statement">
            <p className="type-overline text-muted">{siteConfig.name} / JODHPUR, INDIA</p>
            <p className="type-heading-lg mt-5">Cut the Noise.<br />Set the Standard.</p>
            <p className="studio-footer__identity">An independent digital design and development studio, founded and operated by {siteConfig.founderName}.</p>
          </div>
          <nav className="site-footer__column site-footer__column--navigate" aria-label="Footer navigation">
            <h2 className="site-footer__heading type-overline">Navigate</h2>
            <ul className="site-footer__links">
              <li><a className="site-footer__link" href="/">Home</a></li>
              <li><a className="site-footer__link" href="/about/">About</a></li>
              <li><a className="site-footer__link" href="/#work">Work</a></li>
              <li><a className="site-footer__link" href="/#capabilities">Services</a></li>
              <li><a className="site-footer__link" href="/contact/">Contact</a></li>
              <li><a className="site-footer__link" href="/privacy/">Privacy</a></li>
            </ul>
          </nav>
          <nav className="site-footer__column site-footer__column--build" aria-label="Service navigation">
            <h2 className="site-footer__heading type-overline">Build</h2>
            <ul className="site-footer__links">
              {serviceLinks.map(([href, label]) => (
                <li key={href}><a className="site-footer__link" href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="site-footer__column site-footer__column--markets studio-footer__contact">
            <h2 className="site-footer__heading type-overline">Get in touch</h2>
            <a className="studio-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p className="studio-footer__location">{siteConfig.location}</p>
            <SocialLinks />
          </div>
        </div>
        {showWordmark && <div className="site-footer__wordmark" aria-hidden="true">TENZO</div>}
        <div className="site-footer__base type-caption">
          <p>© {new Date().getFullYear()} {siteConfig.name}. ALL RIGHTS RESERVED.</p>
          <div className="site-footer__base-links">
            <a className="site-footer__link" href="#top">Back to Top</a>
            <a className="site-footer__link" href="/privacy/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
