const CACHE_NAME = 'savong-store-v2';
const APP_PREFIX = '/dice-app'; // Your GitHub subfolder

const ASSETS = [
  `${APP_PREFIX}/`,
  `${APP_PREFIX}/index.html`,
  `${APP_PREFIX}/manifest.json`,
  `${APP_PREFIX}/icon-192.png`,
  `${APP_PREFIX}/icon-512.png`,
  `${APP_PREFIX}/00_anitu.png`,
  `${APP_PREFIX}/00_bagani.png`,
  `${APP_PREFIX}/00_halimao.png`,
  `${APP_PREFIX}/01_luzon.png`,
  `${APP_PREFIX}/01_visayas.png`,
  `${APP_PREFIX}/01_mindanao.png`,
  `${APP_PREFIX}/02_hiwaga.png`,
  `${APP_PREFIX}/02_kisig.png`,
  `${APP_PREFIX}/02_sindak.png`,
  `${APP_PREFIX}/02_tabak_choice.png`,
  `${APP_PREFIX}/02_tabang.png`,
  `${APP_PREFIX}/02_taglay.png`,
  `${APP_PREFIX}/03_high.png`,
  `${APP_PREFIX}/03_low.png`,
  `${APP_PREFIX}/03_high_kalasag.png`,
  `${APP_PREFIX}/03_high_tabak.png`,
  `${APP_PREFIX}/03_low_kalasag.png`,
  `${APP_PREFIX}/03_low_tabak.png`
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting()) // Forces immediate activation
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim()); // Takes control of the page immediately
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
