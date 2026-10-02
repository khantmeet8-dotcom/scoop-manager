Scoop Manager PWA

Files:
- index.html: updated application with PWA setup
- manifest.webmanifest: app name, launch mode, theme and icons
- service-worker.js: app-shell caching for supported offline use
- icons/: generated from the supplied Scoop Manager logo

To install:
1. Upload/extract this entire folder to an HTTPS website or localhost.
2. Open the deployed app in Chrome.
3. Use the browser menu and choose "Install app" or "Add to Home screen".

Important:
- A PWA generally needs HTTPS (localhost is allowed for testing).
- Offline behavior depends on the app's external libraries/data sources and browser storage.
- Keep all files together in the same folder.
