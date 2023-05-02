// Import necessary Workbox modules
const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// Precache all files listed in the precache manifest
precacheAndRoute(self.__WB_MANIFEST);

// Create a CacheFirst strategy for caching pages
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    // Only cache responses with a status of 0 or 200
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    // Expire cached responses after 30 days
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// Warm the pageCache with the specified URLs
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// Register a route that matches all navigation requests (i.e. requests for pages)
// and use the pageCache strategy to respond to those requests
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Register a route that matches requests for style, script, and worker assets
// and use a StaleWhileRevalidate strategy to respond to those requests
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      // Only cache responses with a status of 0 or 200
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
