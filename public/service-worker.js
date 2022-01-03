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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fbac93c634d71609acd7a0b291d26a40"
  },
  {
    "url": "assets/css/0.styles.ae78a777.css",
    "revision": "29d8e206ec06e187dbb68de0402f5766"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.e749a552.js",
    "revision": "86315c0b14d21dab64474981cd053f36"
  },
  {
    "url": "assets/js/10.f019507e.js",
    "revision": "ed6dc0182bf01431df059be3320fb24c"
  },
  {
    "url": "assets/js/11.7d91c4cf.js",
    "revision": "f0c76377c93ee75010e824a0f223979c"
  },
  {
    "url": "assets/js/12.29ecceda.js",
    "revision": "ac132bde42c6d4b1d28246b6c17c2804"
  },
  {
    "url": "assets/js/13.462e5f27.js",
    "revision": "a49e6425be80f5d8081bc9759b9b6c37"
  },
  {
    "url": "assets/js/14.b96547a3.js",
    "revision": "26ab047a7d44a8d081e47056d65d729f"
  },
  {
    "url": "assets/js/15.e4353cae.js",
    "revision": "2a63e1eece39e53b3150ef729243cfa5"
  },
  {
    "url": "assets/js/16.a68f259d.js",
    "revision": "611e65fdc36a92b00aa49fc7070fa28c"
  },
  {
    "url": "assets/js/17.1784fa59.js",
    "revision": "81989b3100c69508ad9cf9c0f7eba7d4"
  },
  {
    "url": "assets/js/18.d3b5738a.js",
    "revision": "6b6ff3bfe1228dedcb522bbad2207379"
  },
  {
    "url": "assets/js/19.c6b222b1.js",
    "revision": "620082e014b53d057476f8e010198ff9"
  },
  {
    "url": "assets/js/20.509dd0dc.js",
    "revision": "b33eac666fed65c339ff89719c5fc953"
  },
  {
    "url": "assets/js/21.9f79dfb0.js",
    "revision": "ebff6e7c6d0e01cda7ad6985beb657c6"
  },
  {
    "url": "assets/js/22.da26c99a.js",
    "revision": "018844f60036ef53987f716ebd607dd4"
  },
  {
    "url": "assets/js/23.45398548.js",
    "revision": "45842d98c88b9b39a5e3120ee1e16f30"
  },
  {
    "url": "assets/js/24.44bab077.js",
    "revision": "ef69797ad7e1d8ef76583a336a19486c"
  },
  {
    "url": "assets/js/25.4bd2886e.js",
    "revision": "512a8829b2c5e5f0004363fe9a694d28"
  },
  {
    "url": "assets/js/26.9fd566bf.js",
    "revision": "4c59c4af60a4214fffc3eaa2979c40f7"
  },
  {
    "url": "assets/js/27.1fd1f5b1.js",
    "revision": "8713944b4111fde2ac416633f3af754c"
  },
  {
    "url": "assets/js/28.ffa759d1.js",
    "revision": "dec08fbe76bcd5978a09667604055aa8"
  },
  {
    "url": "assets/js/29.6887f2fb.js",
    "revision": "e0813a6049450e76677786a85abc325a"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.9a7799fb.js",
    "revision": "631f16f39f968b97ff16a8748896178f"
  },
  {
    "url": "assets/js/31.cf751455.js",
    "revision": "8a82723880e66f99d75a1b31df21e625"
  },
  {
    "url": "assets/js/32.57e8bc2f.js",
    "revision": "4e989ddcaceac4728eb641e5598a6bbf"
  },
  {
    "url": "assets/js/33.8e66a638.js",
    "revision": "410b0871459e1b495b5e24b4de77cd39"
  },
  {
    "url": "assets/js/34.c3c720e3.js",
    "revision": "a3e4f7a54306fe757d327329966029c2"
  },
  {
    "url": "assets/js/35.6078dc01.js",
    "revision": "a8de6a2336be9cd039db154a1585f573"
  },
  {
    "url": "assets/js/36.0ac1fbd1.js",
    "revision": "8103c72048ff1da727cd69a59d4c0870"
  },
  {
    "url": "assets/js/37.51e84e33.js",
    "revision": "1984f6737d348de26bc1a4f76fb4d071"
  },
  {
    "url": "assets/js/38.c5f97983.js",
    "revision": "bf45dcca143d61bf35b5f10839938306"
  },
  {
    "url": "assets/js/39.ad70967a.js",
    "revision": "2bf3c725712c40b82056b65eef2a61c3"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.dfb28638.js",
    "revision": "492b6eac161a95b8eb38d2ec3c6dac06"
  },
  {
    "url": "assets/js/41.a816d2c8.js",
    "revision": "4950a115760a93d59ba686943a98f7e7"
  },
  {
    "url": "assets/js/42.f89ab5e1.js",
    "revision": "9d071b742d1168b1af7266ea16cd2daf"
  },
  {
    "url": "assets/js/43.6c8382b0.js",
    "revision": "2d7d9329cda9843d1ce9c3e23fc705b0"
  },
  {
    "url": "assets/js/44.4660a0fe.js",
    "revision": "0007c0ba715627b7db6464d744eb8657"
  },
  {
    "url": "assets/js/45.e7f37ac1.js",
    "revision": "f6e1d66c5050ac3729e5d12a8595731a"
  },
  {
    "url": "assets/js/46.487e04bf.js",
    "revision": "ec97537c653f9d8df6bf17bd4d5d96cf"
  },
  {
    "url": "assets/js/47.b9a024ba.js",
    "revision": "979959ab2130ee55efcad858d386e672"
  },
  {
    "url": "assets/js/48.c5f574eb.js",
    "revision": "f8491a138627959c1dcf210609b06562"
  },
  {
    "url": "assets/js/49.3e205e0f.js",
    "revision": "df7281a42a477f94ef07e292e5670d71"
  },
  {
    "url": "assets/js/5.205cc2e2.js",
    "revision": "41c8f0869aecccb94c2ddad68791837f"
  },
  {
    "url": "assets/js/50.249ea85e.js",
    "revision": "786023f28b4d39d92f4eec40f6c1c959"
  },
  {
    "url": "assets/js/6.a85ed7ae.js",
    "revision": "ab2fecea01920ec7e177e74b864a14da"
  },
  {
    "url": "assets/js/7.3163c07b.js",
    "revision": "cef9b134b4366c704f1ad0cb48ac9276"
  },
  {
    "url": "assets/js/8.5fb0cf18.js",
    "revision": "ec367ff60a4a42431fa6a94208fac24a"
  },
  {
    "url": "assets/js/9.912710f6.js",
    "revision": "0ee5757829da1d85d0db58cded00afad"
  },
  {
    "url": "assets/js/app.576fb13e.js",
    "revision": "da81ea0ee2dbb53d457bf5566bea04f9"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "e6575d9dfe90c2f8d6d36788610457c0"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "e0f77a20e54fedb57a79af8f3c30d793"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "3abb51e96babddf628e6ea88682ecb18"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "8b6dcb0d91b3388e5976cb00bdeea238"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "e6d7190c0a66b630feb9826483176213"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "3dc283a06919f55c7ce03e2a73c84aad"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "5449db8a4610d7da43f690fa04709db5"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "3893f2bd1bf9557ce928d281cea6c48a"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "5f3a5f5a7eb497b88c16b5d3d8466ffb"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "9673123df47d5d1cb030faab5b805658"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "4088db638e663601b1a8061b3a8414df"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "26280016f9aa4e32b1e92992ace8a87b"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "7ae1a8c8ad69c1e4961590cd4c2cd824"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "33ae28092372d976b75d7720736cc88d"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "d0e2b186f6fc8c4d0810f8600a1da3f7"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "fc131a14cfa75f4fe820cb4a8322b056"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "1b245bbb77f06d97f533b9d42c9384ea"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "82322369fdf1cc1975b8fe189ba31309"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "4007bfc8f9980fdbbcf20e85be761b76"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "7cb18dce651d3a23f0d162bd7c5b58c4"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "ab8eb84f1d00e2aa6bc11da8dd935221"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "e4762ae25c33537dd9c85d15c5a55d58"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "a7cafceff25af9e506800e3459e0bf6c"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "a4531b404a316d43ebe24483357da22f"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "aa26a2d9a4090ddf643432aad88ed3b5"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "8eaa6b4983884df97225ba4646667bab"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "0afcdf090fbf487bb7c7042de02f5af3"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "b3492a9f71c6fe5342bad1e8a58e513a"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "680fe82bb3a970dd9bef3b9198c628c2"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "bc1827868021b0859df31acf8f4b57e5"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "201191748c0945c6cca81bc391f74055"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "6376a51e1ddf4304e2a9e30cc5de94b2"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "193895c6f47c8423c5a210c89d128057"
  },
  {
    "url": "categories/index.html",
    "revision": "1232ea38d2dca5b0192dab0ce7540f14"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "b4757d2cccdcc187568b0dae207f3656"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "6c24883905942098e224ec7cc9b7676d"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "56b1717c6d2c869edf15d8bdcd0fde94"
  },
  {
    "url": "categories/React/index.html",
    "revision": "930007a59fb6db1322df2f4ce74dbb5c"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "fe5867d7ccf8bdcd924ccde8a29a89f1"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "47fc9493665506958286162e59cc6f4b"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "de9088bc7b1c9b72087c52d0d64bfabf"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "cd596ab67401364c68fa19e6ddec1d89"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "0655a96fbc9f88cd80b9b4348c1095e8"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "581113053d34ca9da1a872d3636a816b"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "8651efa927faaa43ecc90a7f6f0c1438"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "b272bbfedcd084b2aaf240bfca61b2c2"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "0441e67ef664cc2787204d80c4a6684a"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "6b069f41bbf314c2031d3f27e4ab495b"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "c2b90dc8de146b53263e88dc6c126103"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "a0770a6da7e66bbd4bd8f926942c2021"
  },
  {
    "url": "css/style.css",
    "revision": "2c0da462209a604aa96abd01d1e62eb4"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "463a02157bda297f50ed31c9323d7f67"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "8b97d2ee13fdc3ba1fbf686ad3e2d085"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "bf4f3ef787122e1e1678bbacbc50423d"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "5bd87ed5dfd92dfa814a34572fd4a95d"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "03e8fe83afba522741ca09379279345c"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "e869e75330f8041902b0335ea02d35aa"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "6d7eeaf2cc8e312a67e0d522ed7820e1"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "190337286968616c6527ce39461df76f"
  },
  {
    "url": "hero.jpg",
    "revision": "4f71782c8de841b5c7da9fa4a435cc17"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "10374b250fd2950d3572f026171e45c0"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "e75055956b88b0515e654efc3f9537c4"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "5b6dcd02bf8e9e75a97a535cabe611b1"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "bcb8c8389a0488ebc76239b8fd155d13"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "bcb13c4c8945b459dfe6f60660b6843c"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "68d7e0f4192c3f9ab165664e0f9ab1b4"
  },
  {
    "url": "tag/index.html",
    "revision": "b5a5ababac6c15a23c6d75d971bec0a5"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2d0dc4fbbfd483f45ee85d51c8378750"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "6646372edd5050cd4fefcdb15a5bd398"
  },
  {
    "url": "tag/React/index.html",
    "revision": "e4a1cd0a564fd88cfa40ff9848af600a"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "0163872fa7c614490f2524737e16663f"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "e91291e7ad68c73a7104290f7fe79fbd"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "ea80bbf827c56f04ea792ce3035ee94b"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "71f6c296b17a359536e0398e07640633"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "fe16f32f18c576b885ef471276bc7141"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "680fc01cee763e76760b0b978225bbac"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "f459a60cc2173d5700612f114e1dc4c6"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "4f4398c02b343841f81ee7133e2d2670"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "31eb327109d826f7eac27ec7ef8cfbab"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "5b400c329e6c828118fb27ecef4e4b2d"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "e4323e1f92fe982418995708fed2c59f"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "94829a9d4ffb3a1e5d17e936b71c3f3e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "293c69109456f1b58c216f42bd7ad0d6"
  },
  {
    "url": "timeline/index.html",
    "revision": "d231e5e37870ef0eedfced937aa6225e"
  }
].concat(self.__precacheManifest || []);
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
