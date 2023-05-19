import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, NavigationRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";
import { setCacheNameDetails } from "workbox-core";
import { skipWaiting, clientsClaim } from "workbox-core";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("NekotasticRecipeCache").then((cache) => {
      self.__WB_MANIFEST.forEach((e) => {
        cache.add(e);
      });
    })
  );
});

setCacheNameDetails({
  prefix: "Nekotastic",
});

registerRoute(
  new RegExp("/recipes"),
  new NetworkFirst({
    cacheName: "NekotasticRecipeCache",
  })
);

self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body.message,
    icon: "img/icons/android-chrome-192x192.png",
  });
});

// This route will handle all navigations that do not match
// any of the other registered routes, e.g., the URLs that
// your SPA (Single Page App) should handle.
const navigationRoute = new NavigationRoute(({ event }) => {
  // Your logic to return the appropriate response
  // for navigations in your SPA.
});
registerRoute(navigationRoute);
skipWaiting();
clientsClaim();
