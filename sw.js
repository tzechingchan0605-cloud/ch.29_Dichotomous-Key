const CACHE='keylab-v6';
const ASSETS=['./','./index.html','./style.css','./app.js','./engine.js','./photo-data.js','./assets/金裳鳳蝶.jpeg','./assets/羅非魚.jpeg','./manifest.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('keylab-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==location.origin)return;
 const request=event.request;
 // Refresh application files while online; use the complete cached version offline.
 // Photographs are immutable repository assets and can be served directly from the cache.
 if(request.mode==='navigate'||/\.(?:js|css|webmanifest)$/.test(new URL(request.url).pathname)){
  event.respondWith((async()=>{
   try{const response=await fetch(request,{cache:'no-cache'});if(response.ok){const cache=await caches.open(CACHE);await cache.put(request,response.clone());return response;}const saved=await caches.match(request);return saved||response;}
   catch(error){const saved=await caches.match(request);if(saved)return saved;throw error;}
  })());
 }else event.respondWith(caches.match(request).then(hit=>hit||fetch(request)));
});
