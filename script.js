if('serviceWorker' in navigator){
    window.addEventListener('load',() => {
        navigator.serviceWorker
        .register('serviceworker.js')
        .then(reg => console.log('service worker registered'))
        .catch(err => console.log(`service worker : error: ${err}`))
    } )
    }
    
    