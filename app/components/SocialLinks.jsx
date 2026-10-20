import { siteConfig } from "../site-config";

function SocialIcon({ platform }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 24,
    height: 24,
    "aria-hidden": true,
    focusable: "false",
  };

  if (platform === "instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "x") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M18.9 2.5h2.6l-7 8 8.2 11h-6.4l-5-6.6-5.8 6.6H2.9l7.2-8.3L2.3 2.5h6.6l4.5 6 5.5-6Zm-1 17.1h1.4L8.1 4.3H6.6l11.3 15.3Z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M12 2v10M5 5l7 7 7-7M3 12h18M5 19l7-7 7 7M12 16v6" />
    </svg>
  );
}

export default function SocialLinks({ mode = "compact", className = "" }) {
  const full = mode === "full";

  return (
    <ul className={`social-links social-links--${full ? "full" : "compact"} ${className}`.trim()} aria-label="TENZO STUDIO official social profiles">
      {siteConfig.socialProfiles.map((profile) => (
        <li key={profile.id}>
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.label} — TENZO STUDIO (opens in a new tab)`}
          >
            <span className="social-links__icon"><SocialIcon platform={profile.id} /></span>
            <span className="social-links__copy">
              <span className="social-links__name">{profile.label}</span>
              {full && <span className="social-links__description">{profile.description}</span>}
            </span>
            {full && <span className="social-links__arrow" aria-hidden="true">↗</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
