const CALIBRACIONPWA = "CAL2024@v3-cache";
const assets = [
  "/cal2024/",
  "/cal2024/index.html",
  "/cal2024/src/index-EXT.html",
  "/cal2024/src/index-GO.html",
  "/cal2024/src/index-INS.html",
  "/cal2024/src/images/Layout_010221_01.png.webp",
  "/cal2024/src/script/captura.js",
  "/cal2024/src/script/generar-tablaGO.js",
  "/cal2024/src/script/generar-tablaINS.js",
  "/cal2024/src/script/jszip.js",
  "/cal2024/src/script/leaflet.js",
  "/cal2024/src/script/leaflet.js.map",
  "/cal2024/src/script/leer-reporte-ext.js",
  "/cal2024/src/script/leer-reporte-go.js",
  "/cal2024/src/script/leer-reporte-ins.js",
  "/cal2024/src/script/mapa.js",
  "/cal2024/src/script/xlsx.js",
  "/cal2024/src/style/images/icon-cal.png",
  "/cal2024/src/style/images/sol.png",
  "/cal2024/src/style/images/layers-2x.png",
  "/cal2024/src/style/images/layers.png",
  "/cal2024/src/style/images/loader.gif",
  "/cal2024/src/style/images/marker-icon-2x.png",
  "/cal2024/src/style/images/marker-shadow.png",
  "/cal2024/src/style/images/search-icon.png",
  "/cal2024/src/style/leaflet.css",
  "/cal2024/src/style/style-2024.css",
  "/cal2024/src/UBICACIONES.json"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CALIBRACIONPWA).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('activate',(e)=>{
   e.waitUntil(
       caches.keys().then(cacheList=>{
          return Promise.all(
              cacheList.map(cache=>{
                  if(!CALIBRACIONPWA.includes(cache)){
                      return caches.delete(cache);
                  }
          
              }));

       })

   );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
