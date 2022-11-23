if('service worker') in navigator={

    navigator.serviceWorker.register('serviceworker.js')
        .then(( ) console.log(service worker registered))
}

