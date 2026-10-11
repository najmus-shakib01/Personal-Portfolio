const CACHE_NAME = 'najmus-shakib-portfolio-v1';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/image/logos.png',
  '/image/shakib.jpg',
  '/image/Certificate.png',
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);

  // Exclude non-http/https requests
  if (!requestUrl.protocol.startsWith('http')) return;

  // Handle static assets & navigation
  const isStaticAsset =
    requestUrl.origin === location.origin &&
    (
      requestUrl.pathname === '/' ||
      requestUrl.pathname === '/index.html' ||
      requestUrl.pathname.startsWith('/assets/') ||
      requestUrl.pathname.startsWith('/image/') ||
      requestUrl.pathname.endsWith('.png') ||
      requestUrl.pathname.endsWith('.jpg') ||
      requestUrl.pathname.endsWith('.jpeg') ||
      requestUrl.pathname.endsWith('.svg') ||
      requestUrl.pathname.endsWith('.webp') ||
      requestUrl.pathname.endsWith('.json') ||
      requestUrl.pathname.endsWith('.css') ||
      requestUrl.pathname.endsWith('.js')
    );

  if (isStaticAsset) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);

        if (cachedResponse) return cachedResponse;

        try {
          const networkResponse = await fetch(event.request);

          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }

          return networkResponse;
        } catch {
          const fallback = await cache.match('/index.html');
          if (fallback) return fallback;
        }
      })
    );
  } else if (event.request.mode === 'navigate') {
    // For SPA page navigations, return network or fallback to index.html from cache
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedIndex = await cache.match('/index.html');
        return cachedIndex;
      })
    );
  }
});
