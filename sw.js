const CACHE_NAME = 'inflatagift-v1';
const urlsToCache = [
  '/',
  'index.html',
  'assets/style.css',
  'assets/app.js',
  'assets/day-house-presents.png',
  'assets/night-house-inflatables.png',
  'assets/how-it-works.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

console.log('InflataGift PWA Service Worker registered');
