'use strict';

var CACHE_NAME = 'emergency-v1';
var urlsToCache = [
  'assets/help.gif',
  'assets/beer.jpg',
  'js/main.js',
  'styles/main.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// cache falling back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});