// the cache name is also the version number
let cacheName = 'clarrotcapstoneproject';
// let caches;
let filesToCache = [
  'index.html'
  'assets/fonts/CircularStd-Bold.eot',
  'assets/fonts/CircularStd-Bold.otf',
  'assets/fonts/CircularStd-Bold.svg',
  'assets/fonts/CircularStd-Bold.ttf',
  'assets/fonts/CircularStd-Bold.woff',
  'assets/img/work/GDBD/gdbd.gif',
  'assets/img/work/niuyou/niuyou.gif',
  'assets/img/work/wegood/wegood.jpg'
  'code.txt',
  'contact.gif',
  'TV.gif',
  'js/app.js',
  '.replit',
  'contact.html',
  'legal.html',
  'starry.jpg',
  'manifest.json',
  'registerServiceWorker.js',
  'script.js',
  'style.css',
  'work.html'
]

/* 
start the service worker, when the user access
the website online. This will add the all the files 
listed in filesToCache to the browser cache.

*/
self.addEventListener('install', function(e){
  console.log("on install")
    console.log(cacheName);
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("Adding files to cache")
      return cache.addAll(filesToCache)
    })
  )
})

/*
If offline or if the file exists in the cache, then it will fetch the files from cache
*/
self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request,{
        cacheName: cacheName
    }).then(function(response){
        console.log(response);
        console.log("Fetching "+e.request.url);
      return response || fetch (e.request)
    })
  )
})

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});