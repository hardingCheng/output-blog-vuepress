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
    "revision": "eca6c0cf3559a10a8390bdae275209c0"
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
    "url": "assets/js/10.229005e6.js",
    "revision": "a3f51ce5649ce0871221f606963380f3"
  },
  {
    "url": "assets/js/11.52336685.js",
    "revision": "886ba366b66784a4ecdec9c9330de220"
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
    "url": "assets/js/15.3e6aa701.js",
    "revision": "30fc8d11faeceb064bf4d3d766d6bcbb"
  },
  {
    "url": "assets/js/16.f107eef4.js",
    "revision": "0dbdd59b519335d1437733c38185c8e4"
  },
  {
    "url": "assets/js/17.821a6c89.js",
    "revision": "7ef2734841f9ba3dccb24da0ed1aaae3"
  },
  {
    "url": "assets/js/18.797d30b9.js",
    "revision": "5e55e038c2f5437391eef811f0f3b4d8"
  },
  {
    "url": "assets/js/19.1cb08bf0.js",
    "revision": "c637c8977f2f9afd415ed723682399b3"
  },
  {
    "url": "assets/js/20.af52b6a9.js",
    "revision": "c04a7168432521bc5837c3bb149bead2"
  },
  {
    "url": "assets/js/21.9bea8631.js",
    "revision": "7784582ed6ac158742f79c333dc5e5dc"
  },
  {
    "url": "assets/js/22.242d0e56.js",
    "revision": "3c8de847efcfb0ce01be10df30522700"
  },
  {
    "url": "assets/js/23.7803a07e.js",
    "revision": "308fa596c42651d0f03164a12d8e8917"
  },
  {
    "url": "assets/js/24.bcd6f4de.js",
    "revision": "3372b50a0d02b0770a80a6f25fb750f6"
  },
  {
    "url": "assets/js/25.190cef53.js",
    "revision": "01123e500bd2daa54ce554c773d03342"
  },
  {
    "url": "assets/js/26.9fd566bf.js",
    "revision": "4c59c4af60a4214fffc3eaa2979c40f7"
  },
  {
    "url": "assets/js/27.3acdd3e3.js",
    "revision": "d476633fc59ead705ccb786bbd513fcf"
  },
  {
    "url": "assets/js/28.aed17bfe.js",
    "revision": "f045f10a84dc329b7ef53c408155ffdb"
  },
  {
    "url": "assets/js/29.97f8f70f.js",
    "revision": "cf9f21ac0e74ef5d787f57787dfa29cb"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.a31a609b.js",
    "revision": "8314125c5a0b02d1681117045a6f1a9c"
  },
  {
    "url": "assets/js/31.da0d17e6.js",
    "revision": "c60de1fc28f0c524adaf36368c46323e"
  },
  {
    "url": "assets/js/32.c06b10b4.js",
    "revision": "cbb996d0b355c5f3088d62a3b3860068"
  },
  {
    "url": "assets/js/33.d8d95e49.js",
    "revision": "588a9f5243adbb51895acffec2fb6a82"
  },
  {
    "url": "assets/js/34.30b50ab8.js",
    "revision": "901908e9ff4cd0c3d562e80eb8ce201c"
  },
  {
    "url": "assets/js/35.e9d51648.js",
    "revision": "5ddf150f39045cbdc75c1c0b1bf87372"
  },
  {
    "url": "assets/js/36.3b5fb7d7.js",
    "revision": "851ae01eaa3326f48aaa3c2413beb2fb"
  },
  {
    "url": "assets/js/37.af0a01d4.js",
    "revision": "04ead178684e1e21768ce8f907e2e534"
  },
  {
    "url": "assets/js/38.5b67c13d.js",
    "revision": "076ea4435b416af2d03989d1243ca502"
  },
  {
    "url": "assets/js/39.c53f8265.js",
    "revision": "f276e67ae3414766568bc29b9ce92524"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.433aa735.js",
    "revision": "d136ca42ec8e54091f506871da6ef996"
  },
  {
    "url": "assets/js/41.dd12a892.js",
    "revision": "41990fbd790a75163333ab389dfb85be"
  },
  {
    "url": "assets/js/42.cfd0f802.js",
    "revision": "362c3d73776aef9b3efae5f6210fee51"
  },
  {
    "url": "assets/js/43.3846bc30.js",
    "revision": "cee91623a4f7811973a64641206b0d42"
  },
  {
    "url": "assets/js/44.d2632a43.js",
    "revision": "0bba78cc27c6109147be4b29da5842d0"
  },
  {
    "url": "assets/js/45.a6466a4e.js",
    "revision": "d0c5feddcedb5924abceb158030c2652"
  },
  {
    "url": "assets/js/46.7766f84f.js",
    "revision": "7b5530768fe325a74632980405a8f332"
  },
  {
    "url": "assets/js/47.cdc447e0.js",
    "revision": "66c2a264bac6872914b332f0b238a819"
  },
  {
    "url": "assets/js/48.c9790f5d.js",
    "revision": "7867b292e22764601e5c5fc2016389c1"
  },
  {
    "url": "assets/js/49.fd5ff114.js",
    "revision": "18c1e250d236be575a802da9e695334c"
  },
  {
    "url": "assets/js/5.205cc2e2.js",
    "revision": "41c8f0869aecccb94c2ddad68791837f"
  },
  {
    "url": "assets/js/50.9860b6c5.js",
    "revision": "d1450d12632fe0c168867a18589d358d"
  },
  {
    "url": "assets/js/51.f6517070.js",
    "revision": "333c99fe10ffe3970d1ddd8dcadcb1ce"
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
    "url": "assets/js/app.8e670aae.js",
    "revision": "b5a75c1344354bd11d0341bc4c75db1f"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "646dff7b73b933f1af47222a2b611b78"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "dfde8a6a05b092a2047752a135ce482e"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "2242e5f6079ae8471d3ae27891dd8503"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "44ce865f55fc54a0a62447bab5acae82"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "9c06cee378ae16b06ba5d372f10ae2b4"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "02e36475be8f56fc256f34d07128fde7"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "7079a74033c5887fbbfcf970912465ce"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "6eb0c86fcaa530ea653744a89d64e56f"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "c1449055e002dbb56298fa61e164a692"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "7ff0cff255ce5c51a39842a285db33a2"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "dde97a769c4bd46928111ca6856742b2"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "dc53f6115a1a4045569b62561a361f6f"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "013713f3e04e46c5d4645feadc4f45b9"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "ec37cf679da399867b10de5918722c80"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "d4c62f101fc8e33b342756fbd0f0e84a"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "1ea92127a7d053581863ba54cde3439a"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "9450288af9b7be4ac687bdde83cf88b0"
  },
  {
    "url": "blogs/PackagingModule/Engineering/Front-end-engineering.html",
    "revision": "f09cdc393a286b4caa34da67092fbf42"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "a2ad753cb23bb62fe19715e65356a7db"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "1193149e1a856d48890f1d6ae0ce2b9d"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "2a992867919ff20e845a4483ccb5c9e8"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "7aade8f7b1f8c59d979ff58aaf13766b"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "543ed886a922375457f57f4834e8e49e"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "d65b20eb3736b0152fd34445191a5cf6"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "5a1af94bcb2cf66a608d2b1b31911027"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "6e4f0d3f89287a6fce843162ee53592b"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "da0d23dac7bc2e2ffe6eaa801213ad83"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "16da997f026c0437e601ca90d450631b"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "416d417b72cffe10b800475ee0a7a0ef"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "bb0d6bf6f7198378b414ae65b690dadc"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "81b580e3cbf25229db70e63c6ff5e1b7"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "e244f6e01a368a4cf5d684968362e19d"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "6e3e0bfed2eae396a133fa50f1ed5f32"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "2a7f8f829b29be8d5eaf7b6ab4b7df5f"
  },
  {
    "url": "categories/index.html",
    "revision": "d4b1642bda9726f29f0284a1c2559bfb"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "02bc54b54f8428315722e0078c8a965c"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "59851a6ee5f7c2b4e0d828d1e30334e0"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "7b779601e625c1c0f7625ea5a379c7ed"
  },
  {
    "url": "categories/React/index.html",
    "revision": "4ff7b9c38a3d69e612390327f50713f8"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "3d3407f5913b1d4bee4aee77d32e91a8"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "ce60f5c4dbdcbd6ef201b440032f38dd"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "8c9d547666849841c706274db786a068"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "4fe67d0966ecc77cb13f4faadaec4e39"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "6a545aa14586f2910a32b55f26644f87"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "68f753a090a2b30d3b141f7b07a54810"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "624e23c8e8162c24e5a322ad4fe88ab4"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "3d973faa7b0a44f0932867b303416903"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "5a40e0f6f161153647d16d09adb87d1f"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "8401f16b6701e33a994cbe3bb30e015f"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "419d6c6f9e032e7c06062575d213868d"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "1d372589c27747b41a8ca5943bf99a2f"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "be3f82c12b83d4bad713077bef855b3d"
  },
  {
    "url": "css/style.css",
    "revision": "056ae41af5f8a78fe1185bf3c2ea9bbf"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "0d7dd63db218f8b1feaf10671c3aff1b"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "7a4293c5c72bf5ef5b67871fb9b3842f"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "8604368197aa87f1706d34d72dd5e118"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "b614e0824ec99732f02ff3a55dd9553e"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "a413369745ba9ba40ffcaf802bc361ce"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "48cc7bb9e9acb187f0f88cbc5e2328aa"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "84d89d12e7e8e3307843905387cc8b07"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "6c4a801679aae8eb0a485c13dfc37a86"
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
    "revision": "8a2a96ce7f780883387c4de60a6528ef"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "97f80ed0244f5c6b7c44e81b559d5fbd"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "3fcddf83cd9ebf232cbd9e00e131ca3c"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "755e3e79e56dfa481afe9192a79f03eb"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "4e11ab1912b455eb8bc23e60b3426a95"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "e5d64136a1a18e09fa57eea3bdd7095f"
  },
  {
    "url": "tag/index.html",
    "revision": "e2234f2fc0a973612f9790e6933f7777"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d671641ebd6c8552ed6e68b198d6fa2a"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "8e7e1455c06ebf5f46bf5b48a4f8d157"
  },
  {
    "url": "tag/React/index.html",
    "revision": "134a26cce9b1e661ba3b12ebb5f44034"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "6a23782b13f1af6481a0b4d3f752b6f9"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "d1c4a6d901e61bb21c9bf30c150225bb"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "6d1b86ad8716a1917a50d5fd89940cce"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "d051816d4cf92540413ab30dd5c1a681"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "f9a6cfd5d323ff0b8cb66570e085def4"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9379c8b67d86b1e2ee3669ce6d68ea8c"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "62a8e37075a6dabb4d8187a8220d754e"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "40ec42fde33bd2a0afc1eeab7c873180"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "77123adf104f1076716bce171ca8d62d"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "6589ae665c1200275ffffa3dc4160a2a"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "5433a763ca6bd992ba274797cba86e9e"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "9e9277c641303e7a2be89fd5d2380813"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "154c6825a9f88902459b0f704f7a27a2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "cb6b4cd39ecaf2f909f4af956be21dda"
  },
  {
    "url": "timeline/index.html",
    "revision": "33932f45a9bb1b3eba11b5b79226572f"
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
