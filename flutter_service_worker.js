'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "99d5625f1d7729f656b884973a2ae262",
"assets/assets/fonts/volte.ttf": "b29ee2bb9efbf72ebb0cf79b5cb9f2e4",
"assets/assets/icons/app.png": "e3939db3490f87ee4a9acf372365e926",
"assets/assets/icons/back_arrow.png": "226c7a1c3204db9d24c3ad3e14fcdb53",
"assets/assets/icons/cancel.png": "28ee99e188ed9aeccd6621e2b111633d",
"assets/assets/icons/Facebook.png": "4a613c1b72590009db89884a174720ae",
"assets/assets/icons/fi-thumb-down.png": "4dbb3f170a710d4eec6fc4b7f6859ba8",
"assets/assets/icons/fi-thumbs-up.png": "a2431d94b2beb24fc666ee6b5a897b46",
"assets/assets/icons/invite_a_friend.png": "e8ff6f688f2914200cbe8b2b8fd5f0fc",
"assets/assets/icons/puser.png": "f20d79c12dfaa350338e6779ed2ec263",
"assets/assets/icons/referral_gift.png": "5a5cef86aecee3233a693bd1052da6db",
"assets/assets/icons/Stack.png": "847bb8e3149b3adba3fe037cf9eda3d6",
"assets/assets/icons/subscription_icon.png": "68284c282692a3a59b560bdc0a94f35b",
"assets/assets/icons/trophy_icon.png": "3429052c19b3e42945a1732a89a60713",
"assets/assets/icons/twitter.png": "97cac94410ba565749057c0cf4798d4c",
"assets/assets/icons/user.png": "84d0f74f0ac5e1bd601565c3dd0532a4",
"assets/assets/icons/Vector.png": "daae59471a12d8c9e20e0cebea22dfb6",
"assets/assets/icons/verified_check.png": "01b2f24cdd3fe2d0eda2a75ac658bcca",
"assets/assets/icons/whatsapp.png": "41fcf586dd929f7a933dd15e1c0902e3",
"assets/assets/icons/yellow_mark.png": "a33585b6c7a42e827b77cb20ff1375b6",
"assets/assets/icons/youtube.png": "1b3a976c41c7c076984002dcfc4d2d20",
"assets/assets/images/Afcon%2520call.png": "22bf485f89301b5e4588ed8c1adbf542",
"assets/assets/images/Afcon.png": "5163656122160fe8dc4480750d7c9424",
"assets/assets/images/appAds.png": "8e2cb5593df4765a7b2ff2015b479c1b",
"assets/assets/images/ball.png": "37d71c8e6af004a68131cb479e6de730",
"assets/assets/images/Burkina%2520Faso.png": "2aaab12bbde8a6bd91cb9524ca7f19de",
"assets/assets/images/Cameroon%2520flag%25201.png": "15c168d39eea535f87e1ac22b1a46aee",
"assets/assets/images/Cape%2520verde.png": "b3093d093fce3d992ce48543c106d51e",
"assets/assets/images/challengeLock.png": "bd6ad797bb3511aa50966c0df888b3ec",
"assets/assets/images/Champ%2520league.png": "dab008bb71f1d19667531314f0e426d0",
"assets/assets/images/CheckCircle.png": "c6ee9ee61ff860f45a40870645479520",
"assets/assets/images/cupp.png": "fbab5bd9b43f94b59c1cdf39e60da8cb",
"assets/assets/images/endofquiz.png": "85ad464d8c1ae25f702f0ecf519b642b",
"assets/assets/images/Ethopia.png": "afdb858d347e11fc534bf106f1a694c1",
"assets/assets/images/footer.png": "3da774231ff1b6cc4c4b05246069ab9a",
"assets/assets/images/funfacts.png": "49b32a57683af39e54da2337c148fc0b",
"assets/assets/images/fun_fact.png": "e30840a64d8a8bacc100d1b2bd5eeb75",
"assets/assets/images/Gift.png": "48c515b6acdfe4291e11c5bdd772dc50",
"assets/assets/images/Group%252011.png": "3004188b7567f1c744967d30bc3685f8",
"assets/assets/images/Guinea.png": "5fa54d89ba5ef189bcacfbed22b5a4a9",
"assets/assets/images/happy_woman.png": "0f7970346ae402e0c04beb14af8ce8e4",
"assets/assets/images/img.png": "89a04a174f94241a2c7f3e8a9991a9a6",
"assets/assets/images/img_1.png": "7686036f251190b0c3639356627c09c6",
"assets/assets/images/lionel-messi-psg.png": "09e4e25857a8ad415560402c076fb1ed",
"assets/assets/images/littleOnboarding.png": "c329177d6e5a5ced20d41ad1aa387847",
"assets/assets/images/livedata.png": "1ef22d7018025c5bbb0415e0b474108e",
"assets/assets/images/livedraw.png": "60260b3bbd15aaba6e5bb44311c04341",
"assets/assets/images/Make%2520Predictions.png": "e8a3b43793108a5bbba64341c062f6ac",
"assets/assets/images/Malawi.png": "0276d0e4ebff2098c1fc72381995fa2d",
"assets/assets/images/Predict%2520and%2520win.png": "5a2ab5ca4f838d161dbf3f34fedd1b7f",
"assets/assets/images/Premier%2520League.png": "5e1dfa2f21fc24a7a765bf0341c31383",
"assets/assets/images/qP.png": "81aca5153131b15dd5734f8f0ef5e9e4",
"assets/assets/images/refree.png": "f13eeef6788344b0df03377906f06d19",
"assets/assets/images/Senegal.png": "8d90f330a4940006654b4f271506b4ac",
"assets/assets/images/sir.png": "4c09105c3d510bb12f39233dbf3ee640",
"assets/assets/images/team%2520players.png": "06284df0aa85364d3d6f731f46522dcb",
"assets/assets/images/team%2520players2.png": "f9a254a90a4429646d9d134f7bf3da0d",
"assets/assets/images/todaytrivia.png": "b29c554de905e22b2421d9aff8798c79",
"assets/assets/images/video%2520frame.png": "9a0a5a2baf0fc7d5a6cd5bc156ac4044",
"assets/assets/images/View%2520Predictions.png": "5dd605448ee23bdf5399501d2571c9f8",
"assets/assets/images/welcome.png": "153ff583c88633614f96c3a8051302ad",
"assets/assets/images/whistle.png": "1e130cb491c1972768916957a97d8c15",
"assets/assets/images/young%2520fair%2520man%25201.png": "ad80a8b90b8f802f7473b01b38fe6655",
"assets/assets/images/Zimbabwe.png": "6885059699ca7cf3921e3c8430ae0378",
"assets/assets/images/zombieing.png": "3beb6c4fc12f211e7dcc0c1bfd060021",
"assets/assets/json/fun_fact.json": "0055307c31d3dbad6e2b36d5b614dfd4",
"assets/FontManifest.json": "0aa84b7fce674c88153b6674baa96c2e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2b1baafeed54fc662a68227e194fd8f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c16d92cc44e2e5b080a5ff81c8ac228",
"/": "6c16d92cc44e2e5b080a5ff81c8ac228",
"main.dart.js": "14f8aed0acae0f7e770f02dc8d905d89",
"manifest.json": "20a34f52300b3f4e762e489fd4753f9d",
"version.json": "7446c54add4918550e1ab937ee26bddf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
