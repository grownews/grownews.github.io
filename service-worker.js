"use strict";var precacheConfig=[["/grownews/index.html","8d050c32558f0ca494d7d43266d25aa4"],["/grownews/static/css/main.af57f35f.css","c08a3f53c4b44436c3e2e4f96f79de81"],["/grownews/static/js/main.dbd22980.js","63c5bd6778bc662fdfe4f5309f6a6f99"],["/grownews/static/media/GothamPro-Bold.a3d7d652.woff","a3d7d652af07c3610c453b4a51c788c7"],["/grownews/static/media/GothamPro-Bold.c15ee62b.ttf","c15ee62b232cedc240947b6d814fb750"],["/grownews/static/media/GothamPro-Bold.ee9b8c53.eot","ee9b8c537d217fef51d4bca8cf436d7d"],["/grownews/static/media/GothamPro-Medium.6fe466da.eot","6fe466da15644ccc370d3b2ce3a19f6f"],["/grownews/static/media/GothamPro-Medium.b86e995a.woff","b86e995a10856a8b8e222fe8ff00a74f"],["/grownews/static/media/GothamPro-Medium.c1613691.ttf","c161369173f822acd66d2ff8eea64c52"],["/grownews/static/media/GothamPro.3100f91b.ttf","3100f91bbd9e9ca9ecd00255cac7d11c"],["/grownews/static/media/GothamPro.3cb46b37.woff","3cb46b372ab77d032576b9f70c83d1ff"],["/grownews/static/media/GothamPro.c31a8e09.eot","c31a8e097cb6c2901857d8c686f0063d"],["/grownews/static/media/close-icon.019d31d5.svg","019d31d5ba153c0e625ff768b5c83d16"],["/grownews/static/media/up-arrow.306a1952.svg","306a1952839a1303492668667170b1d8"],["/grownews/static/media/wall-clock-active.d80d52e8.svg","d80d52e84563322e99c6705480a3a66d"],["/grownews/static/media/wall-clock.8772dcd0.svg","8772dcd00f1cdbf5288c69e347ae7db1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/grownews/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});