const CACHE_NAME = "midosis-v1";

const urlsToCache = [

"/",

"/index.html",

"/login.html",

"/registro.html",

"/dashboard.html",

"/medicamentos.html",

"/agregar-medicamento.html",

"/recordatorios.html",

"/historial.html",

"/perfil.html",

"/configuracion.html",

"/soporte.html",

"/css/style.css",

"/js/script.js"

];

self.addEventListener("install", event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(urlsToCache);

})

);

});

self.addEventListener("activate",event=>{

event.waitUntil(

caches.keys().then(cacheNames=>{

return Promise.all(

cacheNames.map(cache=>{

if(cache!==CACHE_NAME){

return caches.delete(cache);

}

})

);

})

);

});

self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});