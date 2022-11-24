if('serviceWorker' in navigator){
window.addEventListener('load',() => {
    navigator.serviceWorker
    .register('serviceworker.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log(`service worker : error: ${err}`))
} )
}


const CACHE_NAME = "static_cache"
const STATIC_ASSETS = [

    'index.html',
    'style.css',
    'Prophecy-Tattoos.app/'

]

async function preCache(){

    const cache = await caches.open(CACHE_NAME)
        return  cache.addAll(STATIC_ASSETS)
}

self.addEventListener('install', event => {
    console.log("[SW] installed");
    event.waitUntil(preCache())
})
self.addEventListener('activate', event => {
    console.log("[SW] activated");
})
self.addEventListener('fetch', event => {
    console.log("[SW] fetched");
})





