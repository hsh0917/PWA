importScripts("http://localhost:5000/precache-manifest.92ff8a9746467ecc686301200f6e2118.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js|html)'),
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'CDN'
    }),
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.networkFirst({
    cacheName: "images"
  })
);

  workbox.routing.registerRoute(
  /\.(?:js|jsx)$/,
  workbox.strategies.networkFirst({
    cacheName: "javascripts"
  })
);

workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.networkFirst({
    cacheName: "css-cache"
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
