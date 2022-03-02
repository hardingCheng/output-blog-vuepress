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
    "revision": "4b97b0007cc9de925339892b7bff6755"
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
    "url": "assets/js/10.74bbb18b.js",
    "revision": "c8cbd85f41ac303498c1663bc1aa1f95"
  },
  {
    "url": "assets/js/11.bb835069.js",
    "revision": "16681a44a6ab489ca819a534399fef3e"
  },
  {
    "url": "assets/js/12.9c6d9a2a.js",
    "revision": "c8a61e2c59a7197210ff4a543fca5a2e"
  },
  {
    "url": "assets/js/13.c87a301b.js",
    "revision": "2b155172526f4e517811129a18c9fd9f"
  },
  {
    "url": "assets/js/14.c3978888.js",
    "revision": "2555f7ccabd375cf81c11ea95d802152"
  },
  {
    "url": "assets/js/15.9f330093.js",
    "revision": "3dbe33fd9dea3cfc212d5dd3a5e77f5a"
  },
  {
    "url": "assets/js/16.bb7632d9.js",
    "revision": "2a06762fb33f199cf0befa7199ecbd85"
  },
  {
    "url": "assets/js/17.cfe8eac1.js",
    "revision": "35e8578f0a9e1ea79a18f2e75efcb732"
  },
  {
    "url": "assets/js/18.27872bed.js",
    "revision": "efd1b097c0952dc7cbcfc03e96d1cf38"
  },
  {
    "url": "assets/js/19.5298e65a.js",
    "revision": "e99b8f05760e6f81a21d6bf200bf66ab"
  },
  {
    "url": "assets/js/20.42e2456e.js",
    "revision": "db539893601bf089cd360342a523d5f4"
  },
  {
    "url": "assets/js/21.5c091f88.js",
    "revision": "38a0a94cc32bb93c927af0bb28532811"
  },
  {
    "url": "assets/js/22.a1e9e770.js",
    "revision": "b203110025a6a6d9646eab576f8fae69"
  },
  {
    "url": "assets/js/23.d4fe942a.js",
    "revision": "9cdabc324c9a4650d2ec81e2a5a1397f"
  },
  {
    "url": "assets/js/24.905aeeac.js",
    "revision": "3f7a5dded3c47cb4d2301acd11c73774"
  },
  {
    "url": "assets/js/25.33e9a55f.js",
    "revision": "d2cc6f6056d84e818c3c7432d316516f"
  },
  {
    "url": "assets/js/26.28965bde.js",
    "revision": "eead3ff66172e8e6fe5e6f4000812bb6"
  },
  {
    "url": "assets/js/27.2b2a8155.js",
    "revision": "be409d23d0e85dd9812675e783f71a48"
  },
  {
    "url": "assets/js/28.08bc8817.js",
    "revision": "61cf4e677d6ab4be08c6b086d10fbb63"
  },
  {
    "url": "assets/js/29.3ac31523.js",
    "revision": "431e61b4283109c943d30754d54b2de6"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.5f817171.js",
    "revision": "c611a2144c804d88623c056a4f390f3d"
  },
  {
    "url": "assets/js/31.c15b5e5a.js",
    "revision": "7cfb99af19c308650383538b5b4f2d28"
  },
  {
    "url": "assets/js/32.fe95af29.js",
    "revision": "4876d501ab605e8f2607487f262d64b2"
  },
  {
    "url": "assets/js/33.18195305.js",
    "revision": "ad19935b6a5411ced45419a612da67c3"
  },
  {
    "url": "assets/js/34.ce5284d3.js",
    "revision": "8458a492143ee841cfa3498e62947fad"
  },
  {
    "url": "assets/js/35.4f86efe5.js",
    "revision": "df44da8d3758402144ab5a421fec1eb9"
  },
  {
    "url": "assets/js/36.ce1db42e.js",
    "revision": "39a3d18ec8111fe60dd979d9b060d0a2"
  },
  {
    "url": "assets/js/37.23f50209.js",
    "revision": "411f06b5001c08dbc5735920f63df3e6"
  },
  {
    "url": "assets/js/38.d7ac2a2a.js",
    "revision": "83ff1c23443dff33075f3f86669c2d3d"
  },
  {
    "url": "assets/js/39.91368ce8.js",
    "revision": "6220c8b9ae675f052c424ade29b396b0"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.76a27492.js",
    "revision": "020be712907e8e2cd9a11e9ba8f66a36"
  },
  {
    "url": "assets/js/41.55c3fcc3.js",
    "revision": "05db3b1f02a328f8056183c88047467d"
  },
  {
    "url": "assets/js/42.ecad7ea4.js",
    "revision": "df9c488afc1c8fa9fea595610f98740b"
  },
  {
    "url": "assets/js/43.191ef0d3.js",
    "revision": "748456e98c1efbdb731c4daf83b7b746"
  },
  {
    "url": "assets/js/44.25b607cc.js",
    "revision": "fa98938531e70f76068acf76c77e4efa"
  },
  {
    "url": "assets/js/45.0f702eea.js",
    "revision": "89bfa05307991779c0783e378f6bc06f"
  },
  {
    "url": "assets/js/46.0e2b462c.js",
    "revision": "0b21bb90c998c411f4b8008c57b23956"
  },
  {
    "url": "assets/js/47.b24a4a6d.js",
    "revision": "99d00ccda334c1e2e1eb8dfcfccde2fe"
  },
  {
    "url": "assets/js/48.e0e2969c.js",
    "revision": "b9b35cb2e601105ff049a8bc2174cd33"
  },
  {
    "url": "assets/js/49.ea0bef37.js",
    "revision": "08c174d4f51108592b1e3f707fc8713c"
  },
  {
    "url": "assets/js/5.205cc2e2.js",
    "revision": "41c8f0869aecccb94c2ddad68791837f"
  },
  {
    "url": "assets/js/50.cb8f1d5b.js",
    "revision": "7c03f39dbb42fc1b520ac10d2700c344"
  },
  {
    "url": "assets/js/51.318e01a6.js",
    "revision": "19cffc4d8a01cc347aed53cc92fd825f"
  },
  {
    "url": "assets/js/52.91714983.js",
    "revision": "50c0737aec6e34a0c50fb5b6d9e20212"
  },
  {
    "url": "assets/js/53.aeea60e8.js",
    "revision": "5feceebd44488129197f0e025550a0ba"
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
    "url": "assets/js/app.8e28c9fd.js",
    "revision": "5747d04588d044bba0be426d13cf2d1f"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "6c7c3de536d38fbc9f87333b315e5be1"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "e60e6a1d96f9a9fc7d14767940ce8ab9"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "e85cb661b543214eb558b525e653262a"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "3dd52efc781f322dc1f3bc67557f6ce6"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "675245cdb1e47ff9fd66cc91166978a8"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "9d811f84ca3e22a37ed6ced7c23f0bfb"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "fb7520da16868ff2dec48d0c34c89e25"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "b0b5fc81e6767c70151a4f7ee8c013a8"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "49d68559ee991c355f4282e02e332aee"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "ffefe90467f32421df573b98c0af1fc7"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "01f1e9b2a3e81e3929d5fb22d02be5b7"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "b8ce2f9ed02d750a7c4c7f891a229ab7"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "19234858b9ff2f6e566b2935f7cb5170"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "096cab873a503a85f71dd63320021e0a"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "628d3f6f62c7c3b6647879f43ca61fda"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "86229fcaf111cd33f4dcb34ccbf6ea26"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "96515068baac9ddd328f2e51ca2f10ce"
  },
  {
    "url": "blogs/PackagingModule/Engineering/Front-end-engineering.html",
    "revision": "f943bacd5d337cb11c6cc0c44b28401f"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "ab547b4b06d027b48aeabea6a85826c8"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "d573e81b9f53608532497a3c4467d891"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "3faecccf175051c3bfcc4e94a69be1e1"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "6ff47087e7cff265b9151caa85320ff1"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "c7243f814e273b421a5828454abc351e"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "2cdc4f143c7b6d01d8d9ad178f4b580a"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "5ace616d6a49b980c6437de966ce351b"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "6aff08aad04d4b90ce752085d0c79fa8"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "2d8a027b59fe609b0d0c558356a7b17d"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "cf01cfec13aa5b1bf0f17e8890ea41b7"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "0ef02b0f69a349227e511c1adcf0bdef"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "6448cf22c0758be938f7bca947b89c33"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "eb2a5dabe47e04712527aad2808f3020"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "a4528be6e12f3f0d01031aa09de5ef46"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "601dc907135a6da6802dd5bf59b0bc65"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "960fb4f267435394728039fbdd7f3fbb"
  },
  {
    "url": "categories/index.html",
    "revision": "2e1fdfa20dba4f02abd3b537101225f9"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "c2cdcd69b6d99297f7e3e4d7f1022bfa"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "9c88b4ce08805b405fc8359576b6c900"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "b5a16c86571a4af5ece25dc374e5b507"
  },
  {
    "url": "categories/React/index.html",
    "revision": "d5f721f700d521cdead6dfc268a60242"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "733fe024029b029a5a7a4e7662b9cf22"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "d0e00ebe4aef2ff376a2a599b0713608"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "d499d528919f6faa7a97810871ed396e"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "5c6f42b0d626cb1807043addc833f9fb"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "bc30482bbf777cd524e3f67b095d3ea3"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "79e91cbdd0971b52c56c3bd47f166d19"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "e46a9731b2ac6a7bf16e2d643e677810"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "b23c4a8021b2e641f1a4f484a62f7883"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "6201e2c315b95410a63909de8eca2f36"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "ca93415e49fb0d9987fc8fe967856233"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "1825e715bfff644bf81c77643c4fc5a6"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "0022df25b7a1cf70d24e24fae3cd0107"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "62d48b04c87b54e89bf9a676faeab91c"
  },
  {
    "url": "components/iframeVideo.html",
    "revision": "579befdcc1979f6f516d450cefc92b49"
  },
  {
    "url": "css/style.css",
    "revision": "d9a9e1caf64620c13250541b896cb433"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "fda4395e717f633005fb24ac919ba095"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "2c126981a6bfa647cb7a15f271eef94e"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "2ebf050895dac7c3030b22171ca40b3a"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "9bcd78d67c87857ce06135219a6ecef8"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "123048b8383d9bd7506d2875db38bbb9"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "bd2f6aafe5699a1e171a8c306ce3ff7d"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "b6d8bf55a6f46f5b7f934bc3ee3fd48c"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "b2a74caaf50320f54f06ebc4973df758"
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
    "revision": "efd9cbe240e5147fe86071f68dc7d922"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "9c4e4ae354d37ba9e1f54099a2aa260b"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "d28985284dd35126e685496d7363608e"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "77e3c762421db7e47878ce3d4d3eb153"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "6703af5f4f10aa88b9e356ef856a4987"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "42644b62c49bf6213cd4ba72042053fb"
  },
  {
    "url": "tag/index.html",
    "revision": "c1c63f342de0d20b036b632bdf6b6314"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d33515dbfed151c70aedaa3b583f3f45"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "f9c16a84829601bc0d8afe06de642c8b"
  },
  {
    "url": "tag/React/index.html",
    "revision": "adb05952676bd60210bd284c67381e54"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "c0a5951b19fae4e51b6c38e48ccb4579"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "0692714ee59fbecb621799504acc1a88"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "db290cbfad85e71c5e7cb01f9af4f2a7"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "3b52555c76952550b20cf346a40fbb2d"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "267bf8ad51d4bda60722a7e711d60bb8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "b73b0ebbcec80ae2be7695061886e35c"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "84b8f09f79bc0d793620ea2c7b535f71"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "d3ea95e5cc383e4969a8fa7db8e745e9"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "24a3506e5d0c64925927f00e8932f48a"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "bc7a7d65b63318aa59ff23d0bfd72e35"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "711ca5f0ea62677602e0b278296a232d"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "9c330438e13dcabe64cb923951fc24f4"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "827f3d65c11699fa4c801fa3ed2f3dd1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "66448e1aa2540ffffe410bcf1698979d"
  },
  {
    "url": "timeline/index.html",
    "revision": "88a59582de737c2a57ea5602ffd575e0"
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
