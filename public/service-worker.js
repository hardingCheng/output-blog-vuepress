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
    "revision": "09af623faae9937ea9d791062c76a244"
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
    "url": "assets/js/10.6ae5d76a.js",
    "revision": "9ec1fe7872a5031d033da8671e3521fc"
  },
  {
    "url": "assets/js/11.b00614cf.js",
    "revision": "819cf8611c4cd5b3354c5d4538c91320"
  },
  {
    "url": "assets/js/12.0fa3cdb3.js",
    "revision": "64740842eca5124eebc16598c0cdae9e"
  },
  {
    "url": "assets/js/13.462e5f27.js",
    "revision": "a49e6425be80f5d8081bc9759b9b6c37"
  },
  {
    "url": "assets/js/14.8202a92b.js",
    "revision": "d9791cf707e1fa1aec67a9a92c4e1ef6"
  },
  {
    "url": "assets/js/15.0f3ee3f6.js",
    "revision": "682674cfca959c9e3a119ec14b45cfeb"
  },
  {
    "url": "assets/js/16.53d99bea.js",
    "revision": "7273f4ec179654d254f4a51d49e6e121"
  },
  {
    "url": "assets/js/17.29f7bb21.js",
    "revision": "3f414bead0db9bec1f2963a7e69c25a4"
  },
  {
    "url": "assets/js/18.3e451c02.js",
    "revision": "f762ef932f085a0daefdd3c8ad558a13"
  },
  {
    "url": "assets/js/19.2ffc9a4b.js",
    "revision": "deaf66d73c876edb61e12ec2221e958b"
  },
  {
    "url": "assets/js/20.a3d46dbf.js",
    "revision": "58a83de52dd40261e91d37999e856127"
  },
  {
    "url": "assets/js/21.8156d804.js",
    "revision": "ba9a04905927467b6529eb2252d5ea84"
  },
  {
    "url": "assets/js/22.e4b8714c.js",
    "revision": "c23926c75acabce9302b7234b58ddae6"
  },
  {
    "url": "assets/js/23.2634ef00.js",
    "revision": "80631094957e2d4f6e9979020aaa70ff"
  },
  {
    "url": "assets/js/24.4d4e384f.js",
    "revision": "3f611e3e7d94c45d1e1f9bc3b20a9760"
  },
  {
    "url": "assets/js/25.b35c9e5d.js",
    "revision": "f4338d7a464ce2cbaf6e57f8355ed592"
  },
  {
    "url": "assets/js/26.20d9de7f.js",
    "revision": "0d70e2990629cd4b98de35e89df1098c"
  },
  {
    "url": "assets/js/27.0a19389e.js",
    "revision": "d6bbca38a9496bb60bef62f1c56d98b3"
  },
  {
    "url": "assets/js/28.c9323bec.js",
    "revision": "87185122a0b5fd8223eccf7304736f16"
  },
  {
    "url": "assets/js/29.ee3bb9b8.js",
    "revision": "2033ab837adca3e2e77a1b8653a5128c"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.84ffc578.js",
    "revision": "0191ca18b34e89a374848a5c36784c26"
  },
  {
    "url": "assets/js/31.02873899.js",
    "revision": "665e9079f2763baee197ab128a2e215e"
  },
  {
    "url": "assets/js/32.bd6496df.js",
    "revision": "597d86cc5b6dcf70652a1946b2f29d96"
  },
  {
    "url": "assets/js/33.29ae632f.js",
    "revision": "2ba892e1aff5be3156132091e93790b2"
  },
  {
    "url": "assets/js/34.196e3257.js",
    "revision": "068243fd7f64f4b880d76c69f033da1a"
  },
  {
    "url": "assets/js/35.2245d83b.js",
    "revision": "7300f6c481f48b4d5e103abde4ce83b6"
  },
  {
    "url": "assets/js/36.018cc0a4.js",
    "revision": "74e8353eb2e6964a60a03713f8f3bb4d"
  },
  {
    "url": "assets/js/37.848ffb5f.js",
    "revision": "1258cace0b7b474028aeb39a477eee93"
  },
  {
    "url": "assets/js/38.c8975dfc.js",
    "revision": "1946c0f08890a9ca274880383c4eda3a"
  },
  {
    "url": "assets/js/39.218b2c0f.js",
    "revision": "8f394c895c70a873bcb81efc0e0f540a"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.72845258.js",
    "revision": "ae2ab6c3495f2aa88463a5c4f99e3338"
  },
  {
    "url": "assets/js/41.6f29b996.js",
    "revision": "32555b752ed11002af64436d65bc9f15"
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
    "url": "assets/js/app.6bc062c8.js",
    "revision": "eba76f754424c100e9fa29a7ba4c997e"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "f9c0db8ac8fb52517defd6d2b11abe04"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "f8c50593d2063a5af5594990b4453836"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "2320064efa0c036158943645422d635d"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "b3b319836ec832800392c4fb78007d83"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "e1ed8b40c0a72920d2dfb9052badd388"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "8d5dc00647abf9484be99ecf52b1c6e4"
  },
  {
    "url": "blogs/Interview/Vue/Vue.html",
    "revision": "c13cc5566cdcabd4a3bbde77cc7812a6"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "481e4adf83d81923a214d6e2965ebf23"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "67ded8de690087bbd16986c5e4f602f5"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "32640fd13ee7e2cb28db08280de36984"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "53fb8b7aa5ccb61bbba94ddfaaa4fb83"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "719d16d8a424a1fcc51899ea035b31fc"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "4aef9abae987bef9bff8e81eb37270df"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "f43f56ccfadfa2e7191ba1db36d8cba3"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "06dc3ab4346e8ffa9997f1acdfb3797d"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "95ebe9721f605b72bec5fbcda40b66f4"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "add9220f37e3e0d2e8d6085ac2ffeddc"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "9602b593b1bc798d2c3d121a3bd92ff4"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "faf71f5d4df773a99fc63c8d11990949"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "3d7be728a891dbe13e32ff28b8dab51f"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "87018c85b3780dad6495c4420774463c"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "dd6d67498f2ca03ac6aa403d88ea4b2d"
  },
  {
    "url": "categories/index.html",
    "revision": "2eed8c06e7468f77a0b0f19f0939077a"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "8947c73a1a3dcfdc6811fbcb4113c163"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "332815e7dce5139281f0e91ebaf0be98"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "b5bc912261d445f7cdb67bd811945d54"
  },
  {
    "url": "categories/React/index.html",
    "revision": "fb14eed53c41d158e301817818d1ca49"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "73a5bfb413852e3cfb0837d8c0a3d03c"
  },
  {
    "url": "categories/Vue 面经/index.html",
    "revision": "87c18be7bb79b93b41ff11c745e9b489"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "290dab83cfa8a881c3b9627b37dc055b"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "b8d07f3b157ddeb90d0961c44d5b471b"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "420b8e0469f87d8b2dc435e2928f025e"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "36c43f08d069761d95eac906036ae302"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "bc122db643ee3e8826d27748c15ecb7e"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "0253095fee27069750413925a28ff684"
  },
  {
    "url": "css/style.css",
    "revision": "bb6bec074019ee05cc66877865e47c6d"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "efecad1c22a906276c6b25406f0cc4a7"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "c940926ad82e6cd31605f7a675f0dde8"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "98f8a7a9a0be711121c381f8f18efad0"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "84b97028fbeeab0935115de0597def63"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "255e734da00a8f36a0e8e99f474068b3"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "56551147c3b190672c00862e15a2fd24"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "75263dd499c20535ff0b0790ebc28609"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "00f2af449ccf0fa3c831f9ead0173fb5"
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
    "revision": "fb72162c4332b5f84604dbd7424fd16e"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "42a0f20b63215b3f8f4a2d9374746424"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "6ead038080780a0c8fc3bbecc9afa720"
  },
  {
    "url": "tag/index.html",
    "revision": "68b4962c79ef7842ca1dc08fbf0d7b1f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "614d77f7c7d32d0fff854c01a68428ae"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "d111c73a50f26166f226ed73e4342f36"
  },
  {
    "url": "tag/React/index.html",
    "revision": "29e0d91cf8768ec51a015340a53bd098"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "3888de4b06e5e587ca746aeba315bbc2"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "c332f021fb1c37df19a2a418bcc63b82"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "92b2653c6a5363c5b4e711449d9db606"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ba62197b46a2e5f75820ac1acc1aaf65"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "2f1e79b5bc4e9c040c73923209243719"
  },
  {
    "url": "tag/Webpack 基础/index.html",
    "revision": "92930e48f7187b7a9ec7884c99a73778"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "6f2c4a7177e640ae09be8c99c44c1fe2"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "1e1d1b2df5b09f6dc26efb89ece320ae"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "e998380998ca87eb8efb30a0b7a46f8d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2554495b0135b45bc1159394faec33b5"
  },
  {
    "url": "timeline/index.html",
    "revision": "232e4ebfc07cf005e6ec03eff74960a3"
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
