importScripts("http://localhost:5000/precache-manifest.c4077c4e9f864e2bd1c5f9a7ca9b57e6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('install', function(event) {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();
  window.location.reload();
  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});

self.addEventListener('message', function handleSkipWaiting(event) {
  if (event.data === 'skipWaiting') { self.skipWaiting(); window.location.reload();}
});

workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js|html)'),
  workbox.strategies.networkFirst({
      cacheName: 'CDN'
    }),
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.networkFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 24 * 60 * 60,
        maxEntries: 30,
      }),
    ],
 
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);


