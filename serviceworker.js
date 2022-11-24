if('serviceWorker' in navigator){
window.addEventListener('load',() => {
    navigator.serviceWorker
    .register('serviceworker.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log(`service worker : error: ${err}`))
} )
}

self.addEventListener('install', event => {
    console.log("[SW] installed");
})
self.addEventListener('activate', event => {
    console.log("[SW] activated");
})
self.addEventListener('fetch', event => {
    console.log("[SW] fetched");
})





