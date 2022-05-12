const cache_NAME = 'v1OsloBS';
const cache_ASSETS = [
    './index.html',
    './js/app.js',
    './js/mapbox.js',
    './css/stylesheet.css',
]


//install event
self.addEventListener('install', (e) => {
    console.log('service worker installed');
    e.waitUntill(
        caches
            .open(cache_NAME)
            .then(cache => {
                console.log('SW is caching');
                cache.addAll(cache_ASSETS);
            })
            .then(() => self.skipWaiting())
            .catch(err => console.log(err))
    );
});

// ta ut cache files fraa cache om det ikke er internett
self.addEventListener('fetch', (e) => {
    e.respondWith(
        //Neste linje feiler om det ikke er internett
        // vi fanger det med catch
        fetch(e.request).catch(() =>{
            return caches.match(e.request)
        })
    )
});
