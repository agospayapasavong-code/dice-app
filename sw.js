self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('savong-store').then((cache) => cache.addAll([
      'index.html',
      'manifest.json',
      '00_anitu.png',
      '00_bagani.png',
      '00_halimao.png',
      // Add other image names here if you want them to work offline
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});