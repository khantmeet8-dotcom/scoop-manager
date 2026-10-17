/* Scoop Manager PWA service worker */
const CACHE_NAME = 'scoop-manager-v84';
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './favicon-32.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
      }
      return response;
    } catch (_) {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const fallback = await caches.match('./index.html');
        if (fallback) return fallback;
      }
      return new Response('', { status: 503, statusText: 'Offline' });
    }
  })());
});

/* Best-effort daily backup while app is closed (Chrome installed PWA only).
   Not exact midnight — browser chooses a time ~once per day when device is on. */
self.addEventListener('periodicsync', (event) => {
  if (event.tag !== 'scoop-daily-backup') return;
  event.waitUntil((async () => {
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (clients && clients.length) {
      clients.forEach((c) => {
        try { c.postMessage({ type: 'SCOOP_RUN_BACKUP', reason: 'periodicsync' }); } catch (_) {}
      });
      return;
    }
    /* No open window — try to open the app so backup can write the file */
    try {
      if (self.clients.openWindow) await self.clients.openWindow('./');
    } catch (_) {}
  })());
});
