importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
);

workbox.routing.registerRoute("/", workbox.strategies.networkFirst());

workbox.routing.registerRoute(
  new RegExp(".*\.js"),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp(".*\.json"),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.cacheFirst()
);
