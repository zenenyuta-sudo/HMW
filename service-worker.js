const V="hmu-v6",
SHELL=["./","./index.html","./manifest.json","./assets/logo.png","./assets/jinwoo.png","./assets/appworld-logo.png","./assets/icons/icon.svg","./assets/icons/icon-192.png","./assets/icons/icon-512.png","./assets/icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
if(r.mode==="navigate"){e.respondWith(fetch(r).then(n=>{const cp=n.clone();caches.open(V).then(c=>c.put("./index.html",cp));return n}).catch(()=>caches.match("./index.html")));return}
e.respondWith(caches.match(r).then(h=>h||fetch(r).then(n=>{if(n&&n.ok){const cp=n.clone();caches.open(V).then(c=>c.put(r,cp))}return n}).catch(()=>undefined)))});
