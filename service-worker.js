/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "97044015f1c89d223f4ff9712ac2ada7"
  },
  {
    "url": "about-me/index.html",
    "revision": "1e6f7eb8495d74369a0751273fa998d5"
  },
  {
    "url": "assets/css/0.styles.dfe29fcc.css",
    "revision": "d11c19f89937e6ff1fdea80be1e138ed"
  },
  {
    "url": "assets/img/5492A464-3AD5-46AD-8317-1A09C66A9D97.951aa89e.png",
    "revision": "951aa89eea9d4e983f67ede89d6aa8ed"
  },
  {
    "url": "assets/img/F12AB1AC-76F1-4756-ACB8-B8FD8C166E8E.d85ce0c7.png",
    "revision": "d85ce0c7702f96fa1813e0725e465bd9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f2c7538c.js",
    "revision": "bac5a2d73a585e00e8da9ad074c35e7b"
  },
  {
    "url": "assets/js/11.2c52dfbc.js",
    "revision": "b5463b64794767118749f8581a4dec6d"
  },
  {
    "url": "assets/js/12.da1d8927.js",
    "revision": "4318965194a041d57ffd0120be9d6ce0"
  },
  {
    "url": "assets/js/13.fb08a3ad.js",
    "revision": "31b52fdb8045083addc1e8df1088a829"
  },
  {
    "url": "assets/js/2.87af0fba.js",
    "revision": "c9e7c37ec5a8f65e792ba9e3f16cd6ac"
  },
  {
    "url": "assets/js/3.3f382377.js",
    "revision": "c4be0aa89593cdee0c0dd6fa96279247"
  },
  {
    "url": "assets/js/4.825baa81.js",
    "revision": "54f60268f05570be0cc316dd9bf063d0"
  },
  {
    "url": "assets/js/5.03eb4a47.js",
    "revision": "6386c5fd0172b6cc3197250f4bb6ef9a"
  },
  {
    "url": "assets/js/6.a9ca9445.js",
    "revision": "fc488ab08b702816a3a6a13a3dcd43b5"
  },
  {
    "url": "assets/js/7.2191717b.js",
    "revision": "556d577eba6d316754df9b330e86d426"
  },
  {
    "url": "assets/js/8.3f6fc25f.js",
    "revision": "bd43aa437ed49134fc6a9443966f8ac1"
  },
  {
    "url": "assets/js/9.17d78137.js",
    "revision": "fe370792f004e334b22c24cdd6a53418"
  },
  {
    "url": "assets/js/app.21f8b362.js",
    "revision": "a66818f5ac62df6f31177fd18162ecb0"
  },
  {
    "url": "blog/index.html",
    "revision": "ae35c5cde381287b5f3e8064500b13a0"
  },
  {
    "url": "frontend/css/flex-overflow.html",
    "revision": "210e289c2ac9c1e78a19927bfc84afa7"
  },
  {
    "url": "frontend/css/link-import-css.html",
    "revision": "a9f3cae34933a5deccddcccec7d1e7af"
  },
  {
    "url": "frontend/index.html",
    "revision": "85237b728667b890f3ac743786349786"
  },
  {
    "url": "index.html",
    "revision": "cccd51295a329081172de4449602fb64"
  },
  {
    "url": "nuxt/extends-router.html",
    "revision": "23349a7eeb2eb59229b02c9acb524958"
  },
  {
    "url": "nuxt/index.html",
    "revision": "34bdb045fdad43d7bf79bacd2f2d3b2b"
  },
  {
    "url": "vuepress/index.html",
    "revision": "7be8ac341bf90cb1cba8675fc4974599"
  },
  {
    "url": "vuepress/sitemap.html",
    "revision": "da098f993ad25960c521dfe2a843eddc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
