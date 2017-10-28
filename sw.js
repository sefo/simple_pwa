'use strict';

var CACHE_NAME = 'emergency-v1';
var urlsToCache = [
  '/simple_pwa',
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

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request));
});