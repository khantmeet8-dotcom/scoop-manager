SCOOP MANAGER - PWA (deploy on GitHub Pages)

1. Create a new GitHub repository (e.g. scoop-manager).
2. Upload EVERYTHING in this folder (index.html, manifest.json, service-worker.js and the icons folder) to the repository root.
3. Repository Settings -> Pages -> Source: "Deploy from a branch" -> Branch: main, folder: / (root) -> Save.
4. After a minute open https://YOUR-USERNAME.github.io/scoop-manager/
5. Tap "Install App" (top bar) or use the browser's install option. The button disappears once installed.

Updating later: replace index.html in the repository. To force devices to refresh, change CACHE='scoop-manager-v1' in service-worker.js to v2, v3...
Note: data is stored per device/browser (no sync between devices).
