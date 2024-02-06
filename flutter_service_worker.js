'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "0104970703aba23aad4510ac0f81bed1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9f62f5ea7bb17776d56873c8b0d40c29",
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
".git/index": "7c766fe14eb8aaa50ea20bcf33cee108",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3018972d6797edeba6664bfd211ab979",
".git/logs/refs/heads/main": "78b96ea494fdbbeed655162aa5bee501",
".git/logs/refs/heads/master": "0d94c7e513f551858b4fad73532519a1",
".git/logs/refs/remotes/origin/main": "f528b445675ac7e39c9b15eaf2af2b68",
".git/objects/04/09ba46ee0f7db5fcd1cc2f6bf477e2f3137d23": "f20d473252874ab8374c8a97bc5bf741",
".git/objects/0a/dea59e4ebdc37f87bfdf08457899ca222d5570": "3a8d1e4615b631b5788570b9ad051599",
".git/objects/2e/d90d82638612d2a0d9f8859e4fb581a58c2837": "ca876169b84c3de1398c03df9c048464",
".git/objects/35/2f1c86beba974f0936a24af2e39e0d16ef1c27": "3d3f1b694ca6101bec643da441403154",
".git/objects/38/f2467b4a842d786d9ec7a2e79b457c82e936af": "fa8ff451ce65db7cb24d74186e9dba6e",
".git/objects/4e/18278363aa64d384941e5bf600a28214a3b94b": "4994da37a075f955f558e4ed84fe8991",
".git/objects/57/b21354892f3764cc6ba17845a5692284089219": "703d5b37d7f43640130023433f4c1778",
".git/objects/58/4bff4b93acc732cf48ba27fae7ce8513eada62": "4bf80dfd7154fa9644b710862e4a9294",
".git/objects/5a/11f6bbb23d2f7f5201f298837ae2d4d55e6caa": "72c779da88dbfdeec93bbf15312d7c3d",
".git/objects/65/f7f7f16b8c392d8fffac3b4f588304305670df": "58f2f320d5ddbda7d377705abc335ef2",
".git/objects/74/0d625b79944a6d6b0b067734bf306991f04e43": "9af1cd818fb0836a4030e7c1fe00d87f",
".git/objects/79/f0ff10f58a4b20bd8be7fa30f2d1156c17bf77": "59687d82ee4041dc443424c3f33798e4",
".git/objects/80/fb6bb3f9283d34d2e4c93d23892c1f1cf8b070": "d3d78d6086efcc5fd21b06e9a7ae80c1",
".git/objects/8f/3497a9b0f45163b61ad705aafab8a5518ac797": "fb91b8121bfc46469f561f74267a40b5",
".git/objects/90/6e6281d7fc4d3584125273ef1d9f73031fc41e": "3daa9a8fbcb8a3d5402aad13a4e3033b",
".git/objects/94/2f5f127ac36563cc0420c5c2b01356858cbdcd": "06a8619d7c74eacd09197f70784618db",
".git/objects/9a/557bed1c5fd81c13f9520ea8a30daa480b20ab": "191d58d95d73b5298d7e02d0a46da142",
".git/objects/a4/bbeb75a67105d1046d4089500ad26b58cefda8": "796c11c599afc57ed7e1dc4f57d4e807",
".git/objects/a7/4fbd7e15eebbe6be500e90c49adb949d42eeb5": "c9071dc6b6df8b472796a8c1b29f5469",
".git/objects/a8/dc8393f68b02a525ea46acf40cc41bde13b978": "83332adc7dae68f52c88887b2f34f30f",
".git/objects/bb/4998eb732c755bb3f2be375227fc66ef821911": "4f88c696d2a12b1f261c17c58e1820f2",
".git/objects/d3/841e4dbe73bdb420101948443a16e0dd1a398a": "4d02090d6b16ccf625215d75ca8bf479",
".git/objects/d3/9a4035ee72c5c0568dc0cd23b2434ba04cc091": "0fccfd56d1c08a16ffea0d6ca0f49a15",
".git/objects/d6/6435bf49a4b40b83d8d166299d3c025a94631d": "d5454d7575f215b1d4281a41e1501223",
".git/objects/e2/9111c1e069270bfe8d850818b93f361d1d359a": "2414448720d1f17cd4c6e69fb092afee",
".git/objects/e5/92ed935155c75f15677b34adb50586de4ad0d0": "d15409c057ab02a101a6dc6d28390b92",
".git/objects/ee/046748ce59266d9c81460ad5b944fc650620e2": "bf418a4ca55e4c78e6869773adb007ee",
".git/objects/fa/e2ba042246eac62f8fb0d0a715166f541a989c": "3f06436de25661c3495a389f94c2b40f",
".git/objects/pack/pack-9651bb70645e70cbdc80b1d8ce60f6f0ae4ef3eb.idx": "515ff8e5a8a0dbf984a5565be2df4760",
".git/objects/pack/pack-9651bb70645e70cbdc80b1d8ce60f6f0ae4ef3eb.pack": "1ec894c45399d95eb96c5ba8591d5737",
".git/refs/heads/main": "1f88d74c88cf901763eb39a5f1e77ca6",
".git/refs/heads/master": "d08678884448c0990375bf1f6f9b6108",
".git/refs/remotes/origin/main": "1f88d74c88cf901763eb39a5f1e77ca6",
"appopener.ico": "2c93df07c2ebd8bb67c9589c9d07778d",
"assets/AssetManifest.bin": "0fd2a55f5ef24f981d336ff741a849d1",
"assets/AssetManifest.bin.json": "00f28b9a06a2fb486b85c5a46b57b5a8",
"assets/AssetManifest.json": "3ac6153c1742a3f9c6de731d90dd332b",
"assets/assets/fonts/utendo/Utendo-Bold.ttf": "04c96ef499e29b83eef7e27fb36b3121",
"assets/assets/images/Background.jpg": "5646ac4d507f403508a64e33405a49c8",
"assets/assets/images/Background2.png": "69c758e2970144d67f16b9c4d0f31c6a",
"assets/assets/images/Chocolate%2520Day%25202.png": "de7a76b7a4d7e6d959959350f1c348f7",
"assets/assets/images/Chocolate%2520Day.png": "d417b17499216463e455fa09b23beb22",
"assets/assets/images/Committed_Icon.png": "7cf5428ece43c28b82796cc0fc9192ad",
"assets/assets/images/Crush_Icon.png": "5e69f00c4f8097f3b14de68a8375509a",
"assets/assets/images/Cupid_Icon.png": "9e78086103719d71a77a368a12dffb6a",
"assets/assets/images/Friend_Icon.png": "8994fe38f0be2e8a8fee8ebe5e8e363c",
"assets/assets/images/Gender_Man.png": "366343040c924bba92958616a7925096",
"assets/assets/images/Gender_Woman.png": "624be3466067f2ab1f73b26a19bff70c",
"assets/assets/images/Hug%2520Day%25202.png": "091aad8eae1b9523446055ef0fdd139b",
"assets/assets/images/Hug%2520Day.png": "c2703372d4629e3d17ef8e72c7dc8eb8",
"assets/assets/images/Icon%25203.png": "0583fe12760160012f189b29e2240bbf",
"assets/assets/images/Icon_Page-05.png": "28c425e7948409ebd5160ee477041180",
"assets/assets/images/Icon_page-3.1.png": "16af986c4b4442a9fea68ee3f521267f",
"assets/assets/images/Kiss%2520Day%25202.png": "9b9661ea982849825b78be84fb2c7163",
"assets/assets/images/Kiss%2520Day.png": "45edfbed9e577572b0fc9b6ff1d7d20c",
"assets/assets/images/Last-page-check-heart.png": "f15079e34bf90201d7295c125b7e1d04",
"assets/assets/images/Promise%2520Day%25202.png": "1d9efa09c09d6928b9a8951cb91a793b",
"assets/assets/images/Promise%2520Day.png": "92e81f4d4181622734b23a7a1b7c6615",
"assets/assets/images/Propose%2520Day%25202.png": "bb4ee0867f82baea05a5dfb2f2975d54",
"assets/assets/images/Propose%2520Day.png": "8bbf26e84a2e29e600ddb4dc94e9229b",
"assets/assets/images/Rose%2520Day%25202.png": "909a6f36e702d71e3d3b8f33fd97a6a4",
"assets/assets/images/Rose%2520Day.png": "5b309753851d1ef01c5a5da1b0837f3e",
"assets/assets/images/Teddy%2520Day%25202.png": "44e37045404f6aa73514b455ce36c4c1",
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
"index.html": "212174bbab4fbd4fe8bed9c56e683679",
"/": "212174bbab4fbd4fe8bed9c56e683679",
"main.dart.js": "5b999405c646e17351c1d6a760c6e17f",
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
