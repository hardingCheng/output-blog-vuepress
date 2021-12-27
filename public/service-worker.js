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
    "revision": "bb817a5b1c7037246d17f19639b78d9f"
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
    "url": "assets/js/10.baf9a1fb.js",
    "revision": "1353b50dc9589b8c5c00d3d8f9116392"
  },
  {
    "url": "assets/js/11.3c25fa72.js",
    "revision": "0d99822fad849312b76bcda480c99ace"
  },
  {
    "url": "assets/js/12.60a1598d.js",
    "revision": "9fd69b4041e15a478fdd4cb63aeb79a0"
  },
  {
    "url": "assets/js/13.bace4fcf.js",
    "revision": "f7891ea47b229275a341f7988ddeca37"
  },
  {
    "url": "assets/js/14.b96547a3.js",
    "revision": "26ab047a7d44a8d081e47056d65d729f"
  },
  {
    "url": "assets/js/15.6db21969.js",
    "revision": "b901d6e896d3b2a20ebbda81898e33c3"
  },
  {
    "url": "assets/js/16.1de46e97.js",
    "revision": "d98497f2520517063c27efe60f4a19e5"
  },
  {
    "url": "assets/js/17.e9566c41.js",
    "revision": "bef40cfc3307d10bc4f2804e42a5186e"
  },
  {
    "url": "assets/js/18.77b30ff2.js",
    "revision": "4967444f8708e4ac1b240ccae620fe09"
  },
  {
    "url": "assets/js/19.9763392d.js",
    "revision": "af72f44902168365aef1cb06b2e9ee18"
  },
  {
    "url": "assets/js/20.9c54412b.js",
    "revision": "9efed4b8a95a0ce2d39f06c297013065"
  },
  {
    "url": "assets/js/21.8156d804.js",
    "revision": "ba9a04905927467b6529eb2252d5ea84"
  },
  {
    "url": "assets/js/22.f195a007.js",
    "revision": "f046050ec371718ac9f395502af9461e"
  },
  {
    "url": "assets/js/23.7a2aa2b7.js",
    "revision": "ccf155b117a2da29fdd6529bb6d0aa34"
  },
  {
    "url": "assets/js/24.6fb1e180.js",
    "revision": "a56beba16dc5272acdb809191b2f8bdb"
  },
  {
    "url": "assets/js/25.8698b860.js",
    "revision": "2297d32d4b37fef0af4523a3631da97c"
  },
  {
    "url": "assets/js/26.b9fbb864.js",
    "revision": "ec793f1bd8f9d02d5686704ac65c7ce5"
  },
  {
    "url": "assets/js/27.c8beb7d1.js",
    "revision": "fdb8e31960520d7318ca9b2a9a5b8739"
  },
  {
    "url": "assets/js/28.6505d8a9.js",
    "revision": "748f305da582c8597abb8f62bf58c6dc"
  },
  {
    "url": "assets/js/29.69d3c9ad.js",
    "revision": "20ca0506db982cfd1d70ddb987fb160e"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.f3ece7fa.js",
    "revision": "f912ad7c55278d099d8e749269073cf6"
  },
  {
    "url": "assets/js/31.cef1d3ca.js",
    "revision": "6f4666f5f90cead029e3b56e57af7cdc"
  },
  {
    "url": "assets/js/32.559499fc.js",
    "revision": "9789864541a1228e69dfa6ee19b603fa"
  },
  {
    "url": "assets/js/33.1f74f7b5.js",
    "revision": "d029d2899cd6134729fb0d8489c4cad2"
  },
  {
    "url": "assets/js/34.4a1c1fc9.js",
    "revision": "cda9c1f4cd9f7d36c784e8d7907006eb"
  },
  {
    "url": "assets/js/35.3e90ec30.js",
    "revision": "e0f3fb68330203925843c3ddeef42ecb"
  },
  {
    "url": "assets/js/36.1cb4b662.js",
    "revision": "a9b0ef05943108e0158099151c13c77e"
  },
  {
    "url": "assets/js/37.c382b03a.js",
    "revision": "c0cce80ae695a6e2f62a460f517a5367"
  },
  {
    "url": "assets/js/38.d3b35e13.js",
    "revision": "111cc13dc22ecc150a87ed7a5176408a"
  },
  {
    "url": "assets/js/39.ea45324d.js",
    "revision": "8f394c895c70a873bcb81efc0e0f540a"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.1eee1a97.js",
    "revision": "c030761002b733494d7b5c670b3a4ee4"
  },
  {
    "url": "assets/js/41.1449f415.js",
    "revision": "bb5add7c377cc9d6aa781609cdfc3107"
  },
  {
    "url": "assets/js/42.0379465d.js",
    "revision": "580f87c32a33d84244e80852b03ea081"
  },
  {
    "url": "assets/js/43.fe80ff9b.js",
    "revision": "91f445020fcd7a11b2c44d7ac4522d8f"
  },
  {
    "url": "assets/js/44.0621a5db.js",
    "revision": "330235639b672c594830322fe4d5fcd8"
  },
  {
    "url": "assets/js/45.32f41ebb.js",
    "revision": "5048d01b8fd44714a25299348d4bd731"
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
    "url": "assets/js/app.18220fda.js",
    "revision": "739fcb7a36f9abb3742877ba2aac56e3"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "b97c6c2aefab99f256a7a8b7fca17f21"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "fbbc4eae600f54e066913bca7b6a265c"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "bc61b44ffe03b423b518f8671228e005"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "032c54632760fa73fe2642f92a60f0e1"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "1bbeba12dde3083d6cf6ebf388465118"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "cf6fe65f37bd770a7d5e266c29fdfc71"
  },
  {
    "url": "blogs/Interview/Vue/Vue.html",
    "revision": "0e7152080675e6cca879145491f63e63"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "7c18e1dd8918feb9d355d08d95fc5f1d"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "2f7a0f0aa9a5df8625db2b1fc01c120d"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "63e7f84830a55e88f2f28ada3d00ccca"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "03b185df5553d79ad1f921333322a386"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "74cf23ff819e5e1491470a91cfb71a2d"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "410797b678478de1f829dad33287c7b4"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "88672071a37adfe9fa4d70463acba120"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "250a34bd1bc3af0b8912ceb19060f10b"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "36d8680b2cd1473666a604af4cb196d9"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "b7503eb091974f8f237d927f21d6a334"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "09df092e195c1f95ed53156fcf968bc4"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "7ab821d9165f0fd6c4f5d6860a135fae"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "2bdd4ab3b63d799ef31aaa394fafd1ec"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "11fcbe9cf6cf45410290035eae3745cb"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "e670ddc0b3a6a7204004173dc5a1994e"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "eecc55dee38c4c6e220922adf2aae31c"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "1c172cbf6b558b9229c524967c6f0935"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "4ca83742e82f45a3bd1de285217192de"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "04654732bf809b605064d40a61e648ec"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "08c2655e1a73491fbf2c8a4b95b9bf52"
  },
  {
    "url": "categories/HTMLCSS知识要点/index.html",
    "revision": "0922040c1a53be48eee73009873bf559"
  },
  {
    "url": "categories/HTMLCSS面经/index.html",
    "revision": "b1779305a58048e7beb7c6c96d8a9325"
  },
  {
    "url": "categories/index.html",
    "revision": "87fce06db06ec46e08d8b4c6bdc16289"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "b9771051a0b574ba5f4896f5b5cf82a2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "13d1d8e7f1572466c5175c79e69180f9"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "c395cb787eaf4961767ad63d3e05d54d"
  },
  {
    "url": "categories/React/index.html",
    "revision": "94439634ec4d1628dfbee0dd91445edc"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "0ebb14305a14787865439dcc9fa3b529"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "b14a7a6d9e96dd096629a22988ac53b9"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "66fa25c7a9be4dfa04fb9950e57cf022"
  },
  {
    "url": "categories/Vue 面经/index.html",
    "revision": "35d56db267aa2768fd51cf6c9f199e28"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "f63991f20a2257c9ef9af2641587695b"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "ca1fba7973ce88f661bbf084a89a2920"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "af3b5b498a7ab4c72951565e232b91b7"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "4437d528e4bc3a4ba007cde9234bf851"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "904edd36819e92528a9a86645faaa269"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "5294b62c639f83f7987c4b8e8f682d42"
  },
  {
    "url": "css/style.css",
    "revision": "2c0da462209a604aa96abd01d1e62eb4"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "8666354cf672672a177f7ceec39e7b3d"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "84312a5201412f1026b161f8f6432d71"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "52c7445873e39d7a4f2f7fb79ed350d3"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "c1266ab98158b3f451e068ef02e473c0"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "a86a3488d861039a2295a72c4948e0a2"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "7927eaf9f44533725a4115b714fdaece"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "2fb77885dbe1d68d3f7b67c3ed21e499"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "cde8b6da0c42063da3297c16a1051c03"
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
    "revision": "9ae1c6575129235df76c8911ff538c18"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "cf67969aed5a7aab6d062ffb332a71a7"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "926292af215dd4fee5114af6f219874d"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "d18d1dfc8b2d4dbf9ec605a4d64b1284"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "0ee3d04fab238156ee26d2fc62211b13"
  },
  {
    "url": "tag/index.html",
    "revision": "c598a81d111acc73da57decbdd514f14"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "59ad5b0b26ed911ee53bd061b8254905"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "073942cc383df31a84599cb3fb193904"
  },
  {
    "url": "tag/React/index.html",
    "revision": "967bb78e01d1b8278016e68d65927141"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "a2910920ae2ac971589485f677e8a8dd"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "d7fc65858a85389a22452afdffd475aa"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "fe5d1abb18f4d76d53caac68578ed299"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "50df3b974fef1b74b1514877f09dd93d"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "7182b7abdcf075631cbce080c733f784"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "195f772cd13d7c0853e357889925a0e0"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "e8707e86011e13981ab24f8d77b0169d"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "b32aa7ae6ca0790766a1beeafbfb4592"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "a5e95aacb3924710c2cc6c773a219e84"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "29efe8584e87f3d463fb5529d1542634"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d8ffd237d4b08c8264432f0aab140723"
  },
  {
    "url": "timeline/index.html",
    "revision": "86f4c2bb77e46946daca018c1948bc3d"
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
