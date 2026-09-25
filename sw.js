const CACHE = 'wasteland-v172';
const AUDIO_CACHE = 'wasteland-audio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];
const AUDIO_ASSETS = [
  './audio/RadioWasteland1.mp3',
  './audio/RadioWasteland2.mp3',
  './audio/RadioWasteland3.mp3',
  './audio/RadioNewVegas1.mp3',
  './audio/RadioNewVegas2.mp3',
  './audio/RadioNewVegas3.mp3',
  './audio/EnclaveRadio1.mp3',
  './audio/EnclaveRadio2.mp3',
  './audio/EnclaveRadio3.mp3',
  './audio/EnclaveRadio4.mp3',
  './audio/EnclaveRadio5.mp3',
  './audio/EnclaveRadio6.mp3',
  './audio/EnclaveRadio7.mp3',
  './audio/EnclaveRadio8.mp3',
  './audio/AmbientMap.mp3',
  './audio/CasinoStrip.mp3',
  './audio/Buy.mp3'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of ASSETS) {
      try { await cache.add(url); } catch (e) {}
    }
    const ac = await caches.open(AUDIO_CACHE);
    for (const url of AUDIO_ASSETS) {
      try { await ac.add(url); } catch (e) {}
    }
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE && k !== AUDIO_CACHE) ? caches.delete(k) : null))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isAudio = /\.(mp3|ogg|wav|m4a)(\?|$)/i.test(url.pathname) || url.pathname.indexOf('/audio/') !== -1;
  const isHTML = req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/') || url.pathname.endsWith('index.html', 'nuka-cap.png', 'ticket-nuka.png', 'nuka-token.png', 'ticket-cz.png', 'other/comandos.txt', 'other/id.txt');

  if (isAudio) {
    event.respondWith((async () => {
      const cache = await caches.open(AUDIO_CACHE);
      const cached = await cache.match(req) || await cache.match(url.pathname) || await cache.match('./audio/' + url.pathname.split('/').pop());
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res && res.ok) {
          try { await cache.put(req, res.clone()); } catch (e) {}
        }
        return res;
      } catch (e) {
        return cached || Response.error();
      }
    })());
    return;
  }

  if (isHTML) {
    event.respondWith(
      fetch(req, { cache: 'no-store' }).then((res) => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then((c) => c || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req).then((res) => {
        if (res && res.ok && req.url.startsWith(self.location.origin)) {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
