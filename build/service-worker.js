importScripts("http://localhost:5000/precache-manifest.4b1b111d78b14063abbd82810f089e79.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");




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
