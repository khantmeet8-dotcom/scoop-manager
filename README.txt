SCOOP MANAGER — INSTALL APP FIX

Upload ALL files/folders in this package to the SAME folder on GitHub Pages.
Do not upload only index.html.

Required:
- index.html
- manifest.json
- service-worker.js
- icons/ folder

The Install App button uses Chrome's native PWA installation prompt when Chrome makes the site installable.
The package is configured as a standalone PWA, not as a bookmark/shortcut.

IMPORTANT:
The browser controls whether its native Install App prompt is available. A web page cannot force Chrome to show that native dialog when Chrome has not approved the site for installation.

If an old Scoop Manager shortcut/app already exists, remove the old one before testing the new package.
Open the GitHub Pages HTTPS address in Chrome, refresh once, and tap Install App.
