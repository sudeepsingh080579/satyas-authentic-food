# Satya's — Progressive Web App

Authentic Home-Style Food menu published as an installable, offline-capable PWA.

## Features
- **All 7 categories, 52 items** with Per Plate + Small/Medium/Large Tray pricing exactly as printed menu
- Responsive, warm design matching original poster (maroon/gold/cream)
- Search, category chips, tray-size selector
- Cart → WhatsApp order + Call to confirm (+1 609-480-8234)
- Installable (Add to Home Screen), offline via Service Worker
- Works as static site — deploy anywhere

## Run locally
Any static server:
```bash
# python
python -m http.server --directory satyas-pwa 8000
# or
npx serve satyas-pwa
```
Open http://localhost:8000 — requires HTTPS (or localhost) for install prompt.

## Deploy
- **GitHub Pages / Netlify / Vercel / Firebase Hosting**: upload `satyas-pwa/` contents. Must be served over HTTPS.
- Icons at `icons/icon-192.png` and `icons/icon-512.png`
- `manifest.json` + `sw.js` already wired in `index.html`

## Integrate into existing Android app (optional)
Copy `satyas-pwa` to `app/src/main/assets/satyas/` and load via WebView:
```kotlin
webView.loadUrl("file:///android_asset/satyas/index.html")
```

## Menu source
Parsed from the printed poster image 2026-09-26. Prices: `–` means not available in that tray size. Confirm large/custom orders by phone.

## Files
- `index.html` — structure & hero
- `styles.css` — theme
- `app.js` — data + cart + filter
- `manifest.json` — PWA metadata
- `sw.js` — cache-first / network-first strategy
- `icons/*` — 192 & 512 maskable icons
