'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "0104970703aba23aad4510ac0f81bed1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b8b759e9db413e3df438b1fc07c1019f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "84abfe03f922401ee7cecc5e39bcc0e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17d856beb1e05baac7b1b18dd9022c23",
".git/logs/refs/heads/main": "8db849eecd2797fbb394a17e6042dcea",
".git/logs/refs/heads/master": "58e410ee7651b32016e8c28e48f9b758",
".git/logs/refs/remotes/origin/main": "68e925500b9732363b048be3afdf8c82",
".git/objects/00/a0ba47899ce419e70a0208729e5f76ccf01a12": "85457dea157ab9429631acb485f9a48a",
".git/objects/00/b7b0cf23d5bbad4badfa6930cf0c2ee7d9e5ac": "18879c185537fdbef12841bc38cea79e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/a06e7389144ace083ab750f103135a85de7d47": "485d0f8d366dff9e069f4c7e8a3d238e",
".git/objects/08/939b41299067cdcc25771183eed26b06267af1": "4373d99c8adcbeb41f03f02230d5cbe0",
".git/objects/0a/6cdb0490183ff9cc913d4c9b7f71778037245f": "d1274e0d4e346dcebded9e56dc81659a",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/0ce6355fdb072f99e086b4f202504e97e9a17e": "0c5c61659609418c1c7f7132fb6676e6",
".git/objects/14/c378b84a341197cc6f10061d914cdf8c52cb5c": "b78e190e228b717d028329460574db5f",
".git/objects/1a/a33d5f8f452bc386302767bc0ba62c97a99312": "351a896f40a8679e6026dbbf09b3a7a7",
".git/objects/1d/7bb9c55e904c55ed0e708262eb37d0b5efeea3": "f2c2e11d259b967ad188ab0b182f6088",
".git/objects/1f/32ca28613057aae7f0a9b950e2812fb5559dfc": "8676005fb6ba8962a3f30e99f777e27e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/3308e93e700c78fefa31b5195c6032e906cab5": "cf06b8a74047871f554b486df12bdc71",
".git/objects/34/3574d07cec98885325c58a96cbf23fb9a24fd9": "92c5f59c102f79ed13089a9362a5a5e0",
".git/objects/35/fd90f237f9155a0ec46630091100fd4ed652f7": "df3b93e49a3cb003640350335c61b23c",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/245839151a327a641f210e290cf4ff5abf895e": "46d521e08d825ebf408ad8b2578d2666",
".git/objects/3a/217b17885fcb86ac93de97a7f12eb2cda6f410": "8f5f21ffc73b854d0d09a6d23f993e59",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/46e58e3a140dcac51b629e4265c886d692c2dd": "1e5fe09d9b93a7da97b77caa7f21cf1e",
".git/objects/3f/4270bae0e3b2b15e6265323b667f5df7c5c09b": "52167702c901b24118bdb5e458f8ef25",
".git/objects/43/3f28351c78c121be91fa85e881439adb7f3dcd": "c08305f75005b3642e1be37e807c5573",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/b82a736bccb346b80f37eb814c2bd6f5edf799": "c5cad140f29c5964fef8b6465ef96887",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/dcdfc79c46529b7678696ce7045bc3f1bf66b5": "41a9336fdd7a6b185df3c091f64bf204",
".git/objects/4c/63048f601b0d50ee8247ec16eb1ea7a3d7b081": "2c253503213abd081d2b7cf357c6ea9d",
".git/objects/4c/7a3c50c8e6921a16e0bb7487ed8c21740f4c28": "cd88a7fc4d73e630fb8a20317b166576",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/d11c6443f9c9663a1e2ff80bf3b7089b8cdc64": "1204ba698cdef5cc2f80d3281b550e85",
".git/objects/59/f51905709ca36a2fd885d7e8dc1ee204a501cf": "af48c5d85c92d263f376d17a34b719f7",
".git/objects/5b/f74130b21b84bc92db7d0ff1855c1c7500fa3f": "1bc1ab8012876d75986b4a1eaf1e36d9",
".git/objects/5e/d8f23977c9e8d79f3e21063674eb0a1e7aafdd": "73739d1e26b8a3b1e809c4d83f9aa410",
".git/objects/65/346533788a2e3ca6e6c3384559ee49af97dac0": "e9c50845e349c2e3d805267090bfa45a",
".git/objects/65/d12a585d546cf247be88bbbadb766bd20b7969": "5cbe82213702a55c7d4ac9e859326038",
".git/objects/6b/325eaef63127b1ba2b86b3b99ae9f380424413": "ded1b82a6ab3d221ed1a9dd24e30a6ec",
".git/objects/6e/82737261bd4010b6ff3bc4f33ca87331cd49eb": "e72eacd52b10d00f1c1761c91bb91d04",
".git/objects/70/3734dc02a920c0bd11610c3240adacbe059930": "cfb264c451c5cc8110ffe017d5de5fd0",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/7f/043c3bdd0e49bcc3e0bb5f4ae09923491de77e": "04fd24ad1380f414440e380d27f9c4e9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/93/3f88291242d758494654326e1109a607c8382e": "2c4bb585154d415316b5e995c3acb16e",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9a/f3f4f6a711b34107181dd4895271c2e3c16d85": "6673680cf28fd17d565e8911bee07414",
".git/objects/a1/2df225ff0058bf1ef50fa3d60447f4f46c1f0b": "9a8376f8583464be6b34f196f86273a2",
".git/objects/a5/8baa5ee415b9427fc555deea600b631c1afad1": "2641dfc1242477c18b2880eb6b4e1fd2",
".git/objects/a7/3e747624e77d780748fa8c6fbe079a605efc35": "05ecd3db5be040600ffc3fc5610698e2",
".git/objects/ad/80452729a852e94fc27a5d15837a44a613b0c3": "a40f0c007e8fde9016b40f11e398d988",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c8/ed4051df9892993e5fd6d89b07e7145cea8aef": "a4ee4f6590bc3961079104e6e93db839",
".git/objects/ce/5664d20919d22e8eb200eb99724468687eb6e3": "71d3a4cda50c8b5ff1905c80bfed4338",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/70a5d60ea3f34734dbf5bab58b59dafa1d587a": "ee3c3b93bf76fdb50c9691387bec7138",
".git/objects/da/857cf65f086681b70b60e1f79a183dc191c8a7": "44756b7f078e77500995c061b48498f5",
".git/objects/dd/da2ef05590d7bfae69fc715ca52c9cf87bb059": "4eb178b69eae6f995b469eefd7e09c52",
".git/objects/de/6839b6c20e605c6f6766b21f9e4e00b68eafc1": "b85fa9f721b64c6c01ae66827852b0c0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/b3e6e0c06acfdea234acfafc7a64846f023eef": "ce2e9a0211d729ebcbf362d6abf00697",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/47b69d09be75373d0a66da7cbd4a0ce50d8cff": "e07fdcc035a6c986af565d1f6bc5362c",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fd/26df017ba7e7b180a7bb66cf8ede789203e1fb": "52aca7622a31879f3252a2388435387d",
".git/objects/pack/pack-6480f23f9f77e40e4b7eb22ae383ea86b8442fc6.idx": "c472dda2778f40d3246a152364609c94",
".git/objects/pack/pack-6480f23f9f77e40e4b7eb22ae383ea86b8442fc6.pack": "4c3a2c59d68460d96fd79163f2a74b3a",
".git/ORIG_HEAD": "91d7fd6f597ade53a5718b2707bd8a0c",
".git/refs/heads/main": "481d434566636608f4df15eabd3172bc",
".git/refs/heads/master": "91d7fd6f597ade53a5718b2707bd8a0c",
".git/refs/remotes/origin/main": "481d434566636608f4df15eabd3172bc",
"appopener.ico": "2c93df07c2ebd8bb67c9589c9d07778d",
"assets/AssetManifest.bin": "2caa4fcc78d031be005ecbdbd5dfdec3",
"assets/AssetManifest.bin.json": "18c47b981028ccded9471891e1970400",
"assets/AssetManifest.json": "eca95fb0eeec71832a39153482e818e9",
"assets/assets/fonts/utendo/Utendo-Bold.ttf": "04c96ef499e29b83eef7e27fb36b3121",
"assets/assets/images/Background.jpg": "5646ac4d507f403508a64e33405a49c8",
"assets/assets/images/Background2.png": "69c758e2970144d67f16b9c4d0f31c6a",
"assets/assets/images/Chocolate%2520Day.png": "d417b17499216463e455fa09b23beb22",
"assets/assets/images/Committed_Icon.png": "7cf5428ece43c28b82796cc0fc9192ad",
"assets/assets/images/Crush_Icon.png": "5e69f00c4f8097f3b14de68a8375509a",
"assets/assets/images/Cupid_Icon.png": "9e78086103719d71a77a368a12dffb6a",
"assets/assets/images/Friend_Icon.png": "8994fe38f0be2e8a8fee8ebe5e8e363c",
"assets/assets/images/Gender_Man.png": "366343040c924bba92958616a7925096",
"assets/assets/images/Gender_Woman.png": "624be3466067f2ab1f73b26a19bff70c",
"assets/assets/images/Hug%2520Day.png": "c2703372d4629e3d17ef8e72c7dc8eb8",
"assets/assets/images/Icon%25203.png": "0583fe12760160012f189b29e2240bbf",
"assets/assets/images/Icon_Page-05.png": "28c425e7948409ebd5160ee477041180",
"assets/assets/images/Icon_page-3.1.png": "16af986c4b4442a9fea68ee3f521267f",
"assets/assets/images/Kiss%2520Day.png": "45edfbed9e577572b0fc9b6ff1d7d20c",
"assets/assets/images/Last-page-check-heart.png": "f15079e34bf90201d7295c125b7e1d04",
"assets/assets/images/Promise%2520Day.png": "92e81f4d4181622734b23a7a1b7c6615",
"assets/assets/images/Propose%2520Day.png": "8bbf26e84a2e29e600ddb4dc94e9229b",
"assets/assets/images/Rose%2520Day.png": "5b309753851d1ef01c5a5da1b0837f3e",
"assets/assets/images/Teddy%2520Day.png": "d67c0a22543c64b5e52afabbe73f567a",
"assets/FontManifest.json": "20254340b2b0b6acc11c5beb261f56f1",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "f6b50031b3220adef76198ea8c1652f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc3ff1e7dba97e6e5081f9814978bf0c",
"/": "cc3ff1e7dba97e6e5081f9814978bf0c",
"main.dart.js": "9a89edf4d6ea187b71f2d30e935d1cfb",
"manifest.json": "ef83278511e3037311bc68c0eb409c2e",
"version.json": "ff6ac57128c2eeed94cd801244441182"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
