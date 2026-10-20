import { siteConfig } from "../site-config";

export default function ProjectForm({ collapsed = false }) {
  return (
    <div className="project-form-wrap" id="project-brief" data-form-wrap data-collapsed={String(collapsed)}>
      <div className="project-form-wrap__inner">
        <form className="project-form" action="/api/contact" method="post" data-project-form data-endpoint="/api/contact" aria-label="Start a project with TENZO">
          <p className="type-caption form-field--full">All fields are required unless marked optional. You can also email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <div hidden aria-hidden="true">
            <label>Leave this field blank<input type="text" name="contact-check" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <label className="form-field">
            <span className="form-label">Name</span>
            <input className="form-control" type="text" name="name" autoComplete="name" maxLength={120} required />
          </label>
          <label className="form-field">
            <span className="form-label">Work email</span>
            <input className="form-control" type="email" name="email" autoComplete="email" maxLength={254} required />
          </label>
          <label className="form-field">
            <span className="form-label">Company or business</span>
            <input className="form-control" type="text" name="company" autoComplete="organization" maxLength={160} required />
          </label>
          <label className="form-field">
            <span className="form-label">Available budget</span>
            <input className="form-control" type="text" name="budget" aria-describedby="budget-help" maxLength={120} required />
            <span className="form-support" id="budget-help">Include the amount and currency. Scope is defined after discovery.</span>
          </label>
          <label className="form-field form-field--full">
            <span className="form-label">What needs to change?</span>
            <textarea className="form-control" name="project-gap" minLength={40} maxLength={6000} aria-describedby="gap-help" required />
            <span className="form-support" id="gap-help">Describe the current gap, the outcome you need, and anything already in motion.</span>
          </label>
          <label className="form-field">
            <span className="form-label">Target launch</span>
            <input className="form-control" type="text" name="target-launch" aria-describedby="launch-help" maxLength={120} required />
            <span className="form-support" id="launch-help">Use a date or a realistic window. A date is confirmed after scope and capacity are reviewed.</span>
          </label>
          <label className="form-field">
            <span className="form-label">Relevant link (optional)</span>
            <input className="form-control" type="url" name="relevant-link" placeholder="https://" aria-describedby="link-help" maxLength={2048} />
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
            <span>By submitting, you allow TENZO to use these details to review and respond to this project. Read the <a href="/privacy/">privacy notice</a>.</span>
          </label>
          <div className="form-submit">
            <p className="form-submit__note type-body-sm">We review every brief before recommending a call.</p>
            <button className="button button--primary" type="submit"><span>Send Project Brief</span><svg className="button__icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg></button>
          </div>
          <p className="form-status" data-form-status role="status" aria-live="polite" tabIndex={-1} />
          <noscript><p className="form-field--full">The form needs JavaScript to send. Please email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with your project details.</p></noscript>
        </form>
      </div>
    </div>
  );
}
