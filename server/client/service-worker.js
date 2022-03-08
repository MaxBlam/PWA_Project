importScripts("/precache-manifest.2588ce0990e6e0ff2cea28ff846f590f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */
if (workbox) {
  self.skipWaiting();
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    new RegExp('/images/.*.jpg'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'maxs-image-cache',
    }),
  );
  self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body.message,
      icon: 'img/icons/android-chrome-192x192.png',
    });
  });
} else {
  console.log(`Workbox didn't load`);
}

