# Scoop Manager — Progressive Web App (PWA)

Offline business management tool for homemade ice cream businesses.

## Files

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Main app (single-page) |
| `manifest.json` | PWA manifest (name, icons, theme, display mode) |
| `service-worker.js` | Offline caching & install support |
| `icons/` | App icons generated from your ice-cream logo |

## How to install / run as a PWA

1. **Serve over HTTPS** (required for install & service worker).  
   Local options:
   - `npx serve .` (from this folder)
   - `python3 -m http.server 8080`
   - Any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.)

2. Open the site in Chrome / Edge / Safari / Samsung Internet.

3. Install:
   - **Desktop (Chrome/Edge):** click the install icon in the address bar, or use the in-app **Install App** button.
   - **Android:** browser menu → “Install app” / “Add to Home screen”, or the in-app button.
   - **iOS Safari:** Share → **Add to Home Screen**.

Once installed it runs in standalone mode (no browser chrome) and works offline after the first visit.

## Logo

All icons in `icons/` are generated from the ice-cream cone logo you provided.
