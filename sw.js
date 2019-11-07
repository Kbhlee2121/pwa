const CACHE = 'myCache';

const cachedFiles = [
    '/pwa/',
    '/pwa/index.html',
    '/pwa/app.js',
    '/pwa/style.css',
];


this.addEventListener('install', async (event) => {
    await event.waitUntil(async () => {
        const cache = await caches.open(CACHE);
        return cache.addAll(cachedFiles)
    });
    this.skipWaiting();
});

this.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        if (response) {
            return response;
        }
        return fetch(event.request);
    }));
});
