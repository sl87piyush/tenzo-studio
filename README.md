# TENZO STUDIO — Next.js

The TENZO landing page now runs on the Next.js App Router while preserving the
existing visual design, responsive behavior, and animation system.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

## Structure

- `app/layout.jsx` — global metadata, local font, styles, and animation scripts
- `app/page.jsx` — native JSX homepage rendered by the App Router
- `css/` — TENZO design system and page styles
- `assets/fonts/` — local font source used by `next/font/local`
- `public/assets/` — public images, fonts, icons, and video assets
- `public/js/` — interaction and animation modules

The local TENZO WOFF2 font is loaded with `next/font/local`. IBM Plex Mono is
kept as the supporting UI/metadata typeface.
