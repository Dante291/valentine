'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "0104970703aba23aad4510ac0f81bed1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5c64d8f6abc238c9dc3ef1117f4804c7",
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
".git/index": "73341be95921904812598dd477bcc078",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d088a2637bae6c675002c78c3d42839",
".git/logs/refs/heads/main": "4eb26aa4ca8c0f01a3bbe56ee795b61a",
".git/logs/refs/heads/master": "0d94c7e513f551858b4fad73532519a1",
".git/logs/refs/remotes/origin/main": "bfc89a96b6d0b32dcce3b1d91ce6bb94",
".git/objects/pack/pack-9651bb70645e70cbdc80b1d8ce60f6f0ae4ef3eb.idx": "515ff8e5a8a0dbf984a5565be2df4760",
".git/objects/pack/pack-9651bb70645e70cbdc80b1d8ce60f6f0ae4ef3eb.pack": "1ec894c45399d95eb96c5ba8591d5737",
".git/refs/heads/main": "d08678884448c0990375bf1f6f9b6108",
".git/refs/heads/master": "d08678884448c0990375bf1f6f9b6108",
".git/refs/remotes/origin/main": "d08678884448c0990375bf1f6f9b6108",
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
"index.html": "d86a5758f87506e0dacdfc8fa70c44c4",
"/": "d86a5758f87506e0dacdfc8fa70c44c4",
"main.dart.js": "b6073e67eab018ae750191820280ea11",
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
