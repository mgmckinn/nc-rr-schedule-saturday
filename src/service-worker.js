/** @format */

const CACHE_NAME = "schedule-app-cache-v1";
const urlsToCache = [
  "./index.html",
  "./styles/style.css",
  "./scripts/app.js",
  "./manifest.json",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
const CACHE_NAME = "schedule-app-cache-v1";
const urlsToCache = [
  "/nc-rr-schedule-saturday/index.html",
  "/nc-rr-schedule-saturday/styles/style.css",
  "/nc-rr-schedule-saturday/scripts/app.js",
  "/nc-rr-schedule-saturday/manifest.json",
  "/nc-rr-schedule-saturday/icons/icon-192x192.png",
  "/nc-rr-schedule-saturday/icons/icon-512x512.png",
];

const BASE_PATH = self.location.pathname.replace(/service-worker\.js$/, "");
const CACHE_NAME = "schedule-app-cache-v1";
const urlsToCache = [
  `${BASE_PATH}index.html`,
  `${BASE_PATH}styles/style.css`,
  `${BASE_PATH}scripts/app.js`,
  `${BASE_PATH}manifest.json`,
  `${BASE_PATH}icons/icon-192x192.png`,
  `${BASE_PATH}icons/icon-512x512.png`,
];