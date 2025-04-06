/** @format */

const CACHE_NAME = "schedule-app-cache-v1";
const CACHE_NAME = "schedule-app-cache-v2"; // Increment the version
const BASE_PATH = "/nc-rr-schedule-saturday/"; // Adjust this to match your GitHub repository name
const urlsToCache = [
  `${BASE_PATH}index.html`,
  `${BASE_PATH}styles/style.css`,
  `${BASE_PATH}scripts/app.js`,
  `${BASE_PATH}manifest.json`,
  `${BASE_PATH}pages/tracker.html`,
  `${BASE_PATH}pages/history.html`,
  `${BASE_PATH}icons/icon-192x192.png`,
  `${BASE_PATH}icons/icon-512x512.png`,
];

// Install event: Cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: Serve cached files if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found, else fetch from network
      return response || fetch(event.request);
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
