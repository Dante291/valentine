'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "9a24cf6d362ca6e446967964ccee1f4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "42397a427ee8f55cfd224ef57c60ecce",
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
".git/index": "335bdd13e6ce7b3be6e8002b9793696e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "26fe6cb8fb2683c439ee45d0a98a4ea7",
".git/logs/refs/heads/main": "26fe6cb8fb2683c439ee45d0a98a4ea7",
".git/logs/refs/remotes/origin/main": "6af6c141d604989c0c8d19d657e1ecca",
".git/objects/00/a0ba47899ce419e70a0208729e5f76ccf01a12": "85457dea157ab9429631acb485f9a48a",
".git/objects/00/b7b0cf23d5bbad4badfa6930cf0c2ee7d9e5ac": "18879c185537fdbef12841bc38cea79e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/a06e7389144ace083ab750f103135a85de7d47": "485d0f8d366dff9e069f4c7e8a3d238e",
".git/objects/06/368695e061cc35e54fbb315a5b6bc031fac44b": "6965ab5d70101ee433da0e513e77b9f8",
".git/objects/07/836a118674a3b1e002b36e100dd9db8740be5c": "5164a6d7e10f41a7f7d2606b8e0ef8b0",
".git/objects/08/939b41299067cdcc25771183eed26b06267af1": "4373d99c8adcbeb41f03f02230d5cbe0",
".git/objects/0a/6cdb0490183ff9cc913d4c9b7f71778037245f": "d1274e0d4e346dcebded9e56dc81659a",
".git/objects/0b/cfd16ee24c6ef19b8e5ee427d15048d3dd5e6c": "b0061d2680ff81754974386df3f48706",
".git/objects/0c/458d779350d3d04bc4cc73e4196e31f0e7d96e": "4440e7085428cb2bd935ea989744f6de",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/14/c378b84a341197cc6f10061d914cdf8c52cb5c": "b78e190e228b717d028329460574db5f",
".git/objects/1d/7bb9c55e904c55ed0e708262eb37d0b5efeea3": "f2c2e11d259b967ad188ab0b182f6088",
".git/objects/1d/f5224307c42069add044b151a9c45bc8cc65d8": "3ff219a14672f17133a26fb2f9fbaffc",
".git/objects/1f/32ca28613057aae7f0a9b950e2812fb5559dfc": "8676005fb6ba8962a3f30e99f777e27e",
".git/objects/1f/bf593c8f2d6f78fe58a27aff26d2f065170301": "400b32c442072348c491494b8157826a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/076eba456f746d3213fa73367413166af16e2d": "ee6911e1ea304a0a92f2476b63de370c",
".git/objects/23/f4eb63313065257a735a85fa67947a0c61ba52": "9371cdeea3b372da40b70c0c3c846cc9",
".git/objects/25/1aab0253456ec5468715483afb060da1229886": "0242ffe12f3421c6d303687c054fd4f1",
".git/objects/29/79abd3dcc052bd4a827ff65882ffafec1e7cc3": "7ce409dac917abb765a9426e8d251193",
".git/objects/29/c9d3ddd3e4cb22bffbec41bee0da07c869ffbf": "58783b9da9f4fd08e67ce8451a56b359",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/f1537163e8913f1d78005ea1553542f4e8e394": "938ff9914228a0689d21195184a2605b",
".git/objects/2f/e12f6255bd0de414f675bd3ed19c2e3aa918f0": "61e7e96822531174e13cc9b3aea8e7a4",
".git/objects/33/d86906126e7039833ada119c7f30e4459b48ce": "d38290f35117bceec9c851e1322c4c88",
".git/objects/34/3574d07cec98885325c58a96cbf23fb9a24fd9": "92c5f59c102f79ed13089a9362a5a5e0",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/245839151a327a641f210e290cf4ff5abf895e": "46d521e08d825ebf408ad8b2578d2666",
".git/objects/3a/217b17885fcb86ac93de97a7f12eb2cda6f410": "8f5f21ffc73b854d0d09a6d23f993e59",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/46e58e3a140dcac51b629e4265c886d692c2dd": "1e5fe09d9b93a7da97b77caa7f21cf1e",
".git/objects/3e/09eed2d96491d3f3d2213a6d883d6993858624": "f07688e122c9287a2ec8f1fe4d712627",
".git/objects/3e/7cdc53c3d285f861de7b30ec8ed0ea50c53cc0": "007f1481c92a743af84f46d6afe8311a",
".git/objects/3e/e99c805353485e59997404b0e060f8ee166262": "61cf3562c4aba6f4a25db4e1b1fb7c5a",
".git/objects/41/e25a15377b391fbf14bb7485a8daa80009f0e4": "d0d86ae17042415ab6c864116a0d8581",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/b82a736bccb346b80f37eb814c2bd6f5edf799": "c5cad140f29c5964fef8b6465ef96887",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/dcdfc79c46529b7678696ce7045bc3f1bf66b5": "41a9336fdd7a6b185df3c091f64bf204",
".git/objects/4c/63048f601b0d50ee8247ec16eb1ea7a3d7b081": "2c253503213abd081d2b7cf357c6ea9d",
".git/objects/52/90a8917aef8096aeaa9429bd3c6750f9f85a0f": "9b34430e5f07b6cf652df800961d8031",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/d11c6443f9c9663a1e2ff80bf3b7089b8cdc64": "1204ba698cdef5cc2f80d3281b550e85",
".git/objects/59/f51905709ca36a2fd885d7e8dc1ee204a501cf": "af48c5d85c92d263f376d17a34b719f7",
".git/objects/5a/fadd495b7caa319d1f23a15b7cd9255483bf7f": "da357b4ef3a480fdd2dba63012e27ecc",
".git/objects/5b/f74130b21b84bc92db7d0ff1855c1c7500fa3f": "1bc1ab8012876d75986b4a1eaf1e36d9",
".git/objects/5d/f1ba3c272a198bdf8c113e1ef76840f0578b96": "40e630f437c84c4e33b4e6b4c68ee8fd",
".git/objects/5f/4bdf395beb212c2d41047933db18c11bfc7afb": "06a55ebdea54f1ea411839fdb1ec790e",
".git/objects/5f/aa02f0cb3895dc04ea9c5327c90afabc48f798": "665aade9dfa7f3098c12af1249d16c57",
".git/objects/61/ee4c9c4ec011e1caa1c9904c36e87c83ce2ef2": "83090dab2c6f726e1758e3482d304e9f",
".git/objects/6b/0bca3eee00581f17ff1cc50ff92ba79574a627": "c83a20338f132a89d8b25929983f4192",
".git/objects/6b/325eaef63127b1ba2b86b3b99ae9f380424413": "ded1b82a6ab3d221ed1a9dd24e30a6ec",
".git/objects/6e/82737261bd4010b6ff3bc4f33ca87331cd49eb": "e72eacd52b10d00f1c1761c91bb91d04",
".git/objects/6e/82c4786722f2c53cef7d586c14e3dec69ee1cd": "51dba6b44c611e1fafe04cb9f8344d9f",
".git/objects/71/7f5a67ee0598a45ad5cc5503527c5e26482141": "8e16b4c85049ade89584d0881c3c39fd",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/73/5352f0185ee4796fbe34a14603528da5b30e23": "54ee6a908041e2a25412cf2052f656cc",
".git/objects/7f/043c3bdd0e49bcc3e0bb5f4ae09923491de77e": "04fd24ad1380f414440e380d27f9c4e9",
".git/objects/82/0bfcd8f0e3951786f9988e584072f973938f45": "3bf95f0dd2e19a58da71501812e12b56",
".git/objects/88/ba00f820e711cdcdafc59c4338a3f1287e21e0": "85cc1d2b087c066b7920f5ae9b5f92b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/07525eac552a8fbe0860f7ffc439a1f78fa2eb": "82ae82ba8abbf12fa8f9610bfa001a5d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/94/108f74dcc99b124a7b86c77eaa98bde2b18b5b": "3b52ea7e7b9e26b0792c2a9432f439c0",
".git/objects/94/469eab6a96b613e7553d98e9233d43a18b6e9c": "ffdff91835953e4e51e104cb21a23ef6",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/ea890462155f22f48ced7f3522aca51f850df4": "7cf03641a159f03d3399b00bc9f8d127",
".git/objects/96/15bd02a9dc315b0928edef24fc8a8ed878555c": "439bc71507418097e99ff187e5b636a3",
".git/objects/96/2053f89213d726d81b7420f91951aa4a64b440": "8ab80ee5b58578f73e8f9b8fee7970fe",
".git/objects/9a/f3f4f6a711b34107181dd4895271c2e3c16d85": "6673680cf28fd17d565e8911bee07414",
".git/objects/9e/74c8aed874667bfb54909058f35bd699634dc5": "e5ee10ca1300c15aa775fced073f0a3e",
".git/objects/a1/2df225ff0058bf1ef50fa3d60447f4f46c1f0b": "9a8376f8583464be6b34f196f86273a2",
".git/objects/a1/af95895c1625a1a00ccf4e782a7bbd06a31f6d": "49318dfa22c6ebe13e1b07ecc05f1d11",
".git/objects/a2/def14421128a621a520efa0975696473c66c10": "a3ae00aae083a2cf18b11824d789bb63",
".git/objects/a3/aa9896284f288b03b516771a4fcbef227d02a4": "3fe54e710035d384c9e2f0889758ad08",
".git/objects/a5/8baa5ee415b9427fc555deea600b631c1afad1": "2641dfc1242477c18b2880eb6b4e1fd2",
".git/objects/a7/3e747624e77d780748fa8c6fbe079a605efc35": "05ecd3db5be040600ffc3fc5610698e2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c8/ed4051df9892993e5fd6d89b07e7145cea8aef": "a4ee4f6590bc3961079104e6e93db839",
".git/objects/cd/baf7dd3dd44aec1f9d8144838a12bce9d889bb": "e7e05d3b5d8916c7f6a9b6bc2b6af75b",
".git/objects/cf/d6579b6060ebd9c0e9ceaf702bddddb725d58f": "93dc72051eb58d85951d56d57c8cc6f6",
".git/objects/cf/f161e8c674641ad0f4b7e52c2c216cff47f6fe": "9b4a2ae2cd07fd8cc2fdb8dd24a32468",
".git/objects/d1/078c0820041146eead3b46ec84f8abb4d36eb8": "94db96ee4818f96c9ed715c4e3f55fe9",
".git/objects/d3/718d9507ff74274f55470861c1bea36dffbc7b": "295c19be1c8978f69ec5b23d8081f58e",
".git/objects/d4/d45debbcc60da88776481ec2b0c54781c4cf33": "0c9bd2eea1b643c8b77469fa490469ec",
".git/objects/d5/a1a2a8fada2a1334e9d6ccc47844bf1667ed72": "3b8c28dcef2e23da86b36831d4a45474",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/70a5d60ea3f34734dbf5bab58b59dafa1d587a": "ee3c3b93bf76fdb50c9691387bec7138",
".git/objects/da/857cf65f086681b70b60e1f79a183dc191c8a7": "44756b7f078e77500995c061b48498f5",
".git/objects/db/5026dd1a0e06e4eaca1ea06004cb61a50587b3": "fccddd982f245cfad8acf533725aabf2",
".git/objects/db/6e3d64b8cb33ea255b03c35e5dc0c6e7cc386c": "84b830ff4cbba1cbd79795aea4d62027",
".git/objects/db/fde9e444a94a5559b1e465887b644c8ebd4097": "6d9ff96e0c1c516f4f8a716f88440785",
".git/objects/dc/b66ecb45d89f9c20ba9443c58849ba037bbd1c": "34f11acf651d18eddb5b7fa852c5d32f",
".git/objects/dc/ed417636ba943152214a44639daa9c3d3530ab": "40ec50238f49f8ab07a0c28c3ac73470",
".git/objects/dd/da2ef05590d7bfae69fc715ca52c9cf87bb059": "4eb178b69eae6f995b469eefd7e09c52",
".git/objects/de/6839b6c20e605c6f6766b21f9e4e00b68eafc1": "b85fa9f721b64c6c01ae66827852b0c0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/460e443f59c7233509049e5c4112bfa0e19279": "58827e829457c7ce0715d38418daf9b7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/47b69d09be75373d0a66da7cbd4a0ce50d8cff": "e07fdcc035a6c986af565d1f6bc5362c",
".git/objects/f3/d180831621d4ae0756d2ec62fd40ab31e6f109": "84497c0b8bdb2cd55d772680f20907ac",
".git/objects/f8/9214d6216ce231d9d92cfe820d6a6cb4057afa": "4983555eec3c4a710e7a0b9236bbdb86",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/b06253b7b4333320376977374951062f75bec2": "d6d0c56710b97da0cf021da7b24ff058",
".git/objects/fd/26df017ba7e7b180a7bb66cf8ede789203e1fb": "52aca7622a31879f3252a2388435387d",
".git/refs/heads/main": "98134c6d5fbaf6be80f20c399fcf270b",
".git/refs/remotes/origin/main": "98134c6d5fbaf6be80f20c399fcf270b",
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
"assets/NOTICES": "f3c5ae5dacfbb1f616c4632cb5de767d",
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
"index.html": "bfa1458c65c3bbf9100909171ac88ae7",
"/": "bfa1458c65c3bbf9100909171ac88ae7",
"main.dart.js": "8065a58a5904bccc98e395d81abee9a8",
"manifest.json": "26d144ea172aca9e1de1c2954210e217",
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
