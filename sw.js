const CACHE_NAME = 'savong-store-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './00_anitu.png',
  './00_bagani.png',
  './00_halimao.png',
  './01_luzon.png',
  './01_visayas.png',
  './01_mindanao.png',
  './02_hiwaga.png',
  './02_kisig.png',
  './02_sindak.png',
  './02_tabak_choice.png',
  './02_tabang.png',
  './02_taglay.png',
  './03_high.png',
  './03_low.png',
  './03_high_kalasag.png',
  './03_high_tabak.png',
  './03_low_kalasag.png',
  './03_low_tabak.png'
];

// Install Service Worker and cache everything
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercept network requests and serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
