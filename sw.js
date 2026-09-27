const CACHE = 'satyas-v2';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=> self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=> self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  // Network first for html, cache first for assets
  if(req.headers.get('accept') && req.headers.get('accept').includes('text/html')){
    e.respondWith(fetch(req).then(r=>{
      const clone = r.clone();
      caches.open(CACHE).then(c=>c.put(req, clone));
      return r;
    }).catch(()=> caches.match(req).then(c=> c || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(cached => cached || fetch(req).then(r=>{
    return caches.open(CACHE).then(c=>{ c.put(req, r.clone()); return r; });
  }).catch(()=> cached)));
});
