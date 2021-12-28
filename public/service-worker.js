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
    "revision": "d59cecf180a88dd37484bf2a2bda454f"
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
    "url": "assets/js/10.59eb1a64.js",
    "revision": "7eb1090756679f8ed1c5bb73f780e038"
  },
  {
    "url": "assets/js/11.729a60f7.js",
    "revision": "f4989c25c2350eec0caa74cfaa228b83"
  },
  {
    "url": "assets/js/12.ee8c95d2.js",
    "revision": "0661c23cb913fcadeec9a3d2f3cf0b13"
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
    "url": "assets/js/15.d042c981.js",
    "revision": "92fb1a5b273159b976293b6a8d5d39a2"
  },
  {
    "url": "assets/js/16.d66e3474.js",
    "revision": "e104bf36696ca329c1893148b516b2d4"
  },
  {
    "url": "assets/js/17.ef1c333a.js",
    "revision": "5b9827a8b1d3dfdaccce0bc6c47f887c"
  },
  {
    "url": "assets/js/18.d3b5738a.js",
    "revision": "6b6ff3bfe1228dedcb522bbad2207379"
  },
  {
    "url": "assets/js/19.f11f2b54.js",
    "revision": "93dc36152067314232a9c590cf4dd989"
  },
  {
    "url": "assets/js/20.ac36f6a1.js",
    "revision": "f28799c38dd4888183751309988eb360"
  },
  {
    "url": "assets/js/21.bc5547d9.js",
    "revision": "7a4394da078223fc9ea1fc9707043a7b"
  },
  {
    "url": "assets/js/22.f0b9bb69.js",
    "revision": "7acff96bf240371eb23a80b5fafa33b6"
  },
  {
    "url": "assets/js/23.53f21b3b.js",
    "revision": "2bfb63ff45e73a414d32c013824d3476"
  },
  {
    "url": "assets/js/24.50df087c.js",
    "revision": "fba6d3c197e98d594ef0af3938c3eea2"
  },
  {
    "url": "assets/js/25.ce13e615.js",
    "revision": "09e163809370e35e598610cdf4648d79"
  },
  {
    "url": "assets/js/26.2cf6cf6d.js",
    "revision": "d2f802dc40c046a6fc3442f3ddf69ae1"
  },
  {
    "url": "assets/js/27.a4b1d27a.js",
    "revision": "8b044d9854c4bb5b80c549234bdb798d"
  },
  {
    "url": "assets/js/28.59b4286b.js",
    "revision": "dc6e4b697006c600203c47b1b74fda13"
  },
  {
    "url": "assets/js/29.7cc3b56c.js",
    "revision": "dd7f2743471010dbe52db2a0042f3e93"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.029afbf7.js",
    "revision": "11e9d5b83ce360f3c84a5a1242e1238b"
  },
  {
    "url": "assets/js/31.5a3cb166.js",
    "revision": "fccf5c88fd11b4c76609cbc81ac2d751"
  },
  {
    "url": "assets/js/32.9b2476a9.js",
    "revision": "54af090b053de8f19b75a165fa0faf08"
  },
  {
    "url": "assets/js/33.e7bed9c1.js",
    "revision": "9a4addfab4fb8e50a2231e0c50309d46"
  },
  {
    "url": "assets/js/34.204281ca.js",
    "revision": "7e4c26e44881119605d1a066848a7d13"
  },
  {
    "url": "assets/js/35.dd0b5ac9.js",
    "revision": "8a569b0e467f623f2718c0b469376be1"
  },
  {
    "url": "assets/js/36.1f49f415.js",
    "revision": "69502a1c6812f1330496c3af24884f85"
  },
  {
    "url": "assets/js/37.2ea72e91.js",
    "revision": "dd48ccb385d1bd236c02e68b319250fa"
  },
  {
    "url": "assets/js/38.d0ea2d82.js",
    "revision": "b1964e6e9e73669deb71b67f07c3429d"
  },
  {
    "url": "assets/js/39.2eeaaa70.js",
    "revision": "850d804f773ba857ce768892767c4768"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.6620df51.js",
    "revision": "df78c68bce0f29c40d71ed47d7780c05"
  },
  {
    "url": "assets/js/41.c1fa9444.js",
    "revision": "3d8351cd9cd22c5fd747c6bfc3b595fa"
  },
  {
    "url": "assets/js/42.ce246a99.js",
    "revision": "4f29377395bba3ee4a3e54a8af24002d"
  },
  {
    "url": "assets/js/43.9e91f97d.js",
    "revision": "623d2257a46f41e7f6dcae484420ae73"
  },
  {
    "url": "assets/js/44.3dd464c3.js",
    "revision": "e7ee6775b5aeb2ca5a9b422df858d8d9"
  },
  {
    "url": "assets/js/45.1d2eff8c.js",
    "revision": "d57612b2de1308dd4b8a63f18ee215ac"
  },
  {
    "url": "assets/js/46.11a353c8.js",
    "revision": "7a9a5bb1ebb7ce0fe6dae9e2ab036754"
  },
  {
    "url": "assets/js/47.e7371acb.js",
    "revision": "195a1f68934bd317db471fec33131764"
  },
  {
    "url": "assets/js/48.b2c3a1cb.js",
    "revision": "3b0862b6fbfce55e84db6f2b4ae515b8"
  },
  {
    "url": "assets/js/5.205cc2e2.js",
    "revision": "41c8f0869aecccb94c2ddad68791837f"
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
    "url": "assets/js/app.779f07f6.js",
    "revision": "8e32a115cd3250cd2e21a97a525b7706"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "a8b5ca2b65acc2e7cd9e7f6017464041"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "ca5030ef96477d53ee52b47e5ddf381a"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "ae3e66b0572beee4d6d8a8c3a3acbea3"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "e069ac2f3503be4618bc8a02b940537f"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "df74dfb7ba1c3c3ca44879cb3b00626c"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "010c24a489d5e6993360085b76c07c6b"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "bc153dcf26bd6db337b8c8a53d4f2f8b"
  },
  {
    "url": "blogs/Interview/Vue/Vue.html",
    "revision": "c75bda48db5b1acfb942612984f3c856"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "bb5ec619a723c882118023c9a91c1726"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "fc1663e99961597e32fb8f4df2a59745"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "06e7c715d86e77603630913e2bf1f00c"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "312fd53c7fe504430f79346b05aff8a1"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "bd70b130b00158e2566964c2e1165432"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "1f4db5fba22d6922c13297ccc665ea87"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "9fa42c96db818443eaf6ade8d2b0752e"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "ff132eb79f58b5fbf34478e3cf8a304e"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "ab65a20d3658e03410435594d029c298"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "687e7edc75f1515c7f70dd173a891b6f"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "1f85aadc6d2ef0f7f6981193d6428699"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "51e2c7ce987093e3c204c5d4b87a079c"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "f6bd49259017433c8f67d48dbd538f90"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "82c57797d88f71671165d3bcd7b4ade0"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "867743fcd65c52198b9ec4585b811fc0"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "141d7fb39aa9180ebdc2f3eeef6c83b6"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "c536434df70af94e317dc06c69311504"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "04c8cb287cb7d66d38754b31bcdd5387"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "d8ba7c0174dbfe6d1fb19dff6b215719"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "237897b5fe3674509948f9764e42e6c5"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "5479fe9053fb81d5971ef740ef67aeae"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "f9bdbd99c60a22e4ddbaeb920ba1da11"
  },
  {
    "url": "categories/HTMLCSS知识要点/index.html",
    "revision": "7c371f52b0fff7901a13685a3665ca3e"
  },
  {
    "url": "categories/HTMLCSS面经/index.html",
    "revision": "c0d9fa069782b62ca1eb7fc66fa91767"
  },
  {
    "url": "categories/HTTP 面试/index.html",
    "revision": "d52d0e112b00796c5886b6657f3e5402"
  },
  {
    "url": "categories/index.html",
    "revision": "c71e2f0a53c74fbfecc16aafffb1f693"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "7887a2091ce4f81cc6d4307091aaef58"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5614abfd326e54d30e1c0b745cb4e0ef"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "67c3afd4feb9c1f8f13b0fe69b773709"
  },
  {
    "url": "categories/React/index.html",
    "revision": "6d4e8185994c8bf27379c64a2c144dd0"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "10632982f43b4e4e9acb6201fcaa36c5"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "9f267865c5097a02c3e3a53319df0d60"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "e01e3968e9a7bba6bd2289b79485cb67"
  },
  {
    "url": "categories/Vue 面经/index.html",
    "revision": "8827b9db0bfa6f9d1c730a66d2db11d1"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "426cc9b670334ccd87baa30913a76cc9"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "05901cd100af13be7409fdc918f6acff"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "cc8686396278906ba6e2918a289d7a13"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "b0b3061aea4c098d6443668efa3033f7"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "561c1c72b424636eefc289a4226caeb2"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "ebf02b0610cf5ef267008f41aa53c92d"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "0c00f332f3d8fc2822d3cfc4803add58"
  },
  {
    "url": "css/style.css",
    "revision": "2c0da462209a604aa96abd01d1e62eb4"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "ab3e1ac24dfca31083d96382f904db1e"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "58af1b38b886327d34c043c7d669653c"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "60982443473d9f4ff24d4cc61709cbfe"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "4d47c4273cbf7e97e48808376d6e47c1"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "1addaf994ccc6b3c6f6715290f721824"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "0b779edbb8506e0555818e215475a8b4"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "c23f0224b3e1c809d96f86a5ad29397d"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "bb358d691831cea63214a84af6ab7402"
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
    "revision": "b655356901b281ae7952d9899d8f931b"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "76a1a721296d3c1b69350f67af445b60"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "caf8cb3d8d3f1b69b95877eebedba782"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "766724c9ec113c630668d950ae5f6d73"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "aeee2c95bd95950c12e3fa24352d29bd"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "7d4df3206ec0b9f2407da90615373a88"
  },
  {
    "url": "tag/index.html",
    "revision": "b99920e4a0ca32759094591fa8bbf732"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a95c0647b2f3acbbd987fcc20bf873e3"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "7fdf24a1701acdb5bb9ab6c0f1b69c58"
  },
  {
    "url": "tag/React/index.html",
    "revision": "63d11854ec91f2ced06ed81179bd3668"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "c0c8f5db7e2198f6c1a3bbad7158ce59"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "138868b9a4dc529743be8009f0b36fef"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "d61c4faf6aa8ce736b56d9d22224f081"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "df864744326aaccbc49717a45c2521bb"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "254468ea60a447a8ba47e225094c7ce2"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "863829bae30058e259f60383904b4274"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "12cf8b5dcd07ce493741aa74e008c1ad"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "2790d07634ff994630e8e715b820235a"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "18410e1afdf8eacf026a6ec4fec2ee23"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "09a98c64c172d2adb36e2bc58b95751d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6fb64defbfe5b87e56f145ab9c308aa3"
  },
  {
    "url": "timeline/index.html",
    "revision": "66f4d0c21c3b8f618bb96b2a03583398"
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
