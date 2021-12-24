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
    "revision": "d7408e3fd2d9a9d2d33ce1291b7c448e"
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
    "url": "assets/js/11.01ee4ea5.js",
    "revision": "79e2bf468862867d25d3f8be0af1db81"
  },
  {
    "url": "assets/js/12.0fa3cdb3.js",
    "revision": "64740842eca5124eebc16598c0cdae9e"
  },
  {
    "url": "assets/js/13.ddf8220d.js",
    "revision": "1ec00e02e67ce811ade95f93d6e9e803"
  },
  {
    "url": "assets/js/14.8f21ac80.js",
    "revision": "8b26a6d52edd169df2b91da30998b871"
  },
  {
    "url": "assets/js/15.3b749241.js",
    "revision": "ea85029ca764bb17a4bd22ce27403f04"
  },
  {
    "url": "assets/js/16.c4933f8a.js",
    "revision": "8676ca0b0e34b19e445e8e84c8a81a47"
  },
  {
    "url": "assets/js/17.da453ea4.js",
    "revision": "a55915d92c643696340a629e1e33d5c8"
  },
  {
    "url": "assets/js/18.4c23d5e7.js",
    "revision": "24abd7547ac8e6e24e013f7cc7769b7e"
  },
  {
    "url": "assets/js/19.26435990.js",
    "revision": "2158af7494d95c07d6a14a51190314e0"
  },
  {
    "url": "assets/js/20.c7e6b8dd.js",
    "revision": "434ed382428327d7a8a4d7287013766c"
  },
  {
    "url": "assets/js/21.9656c392.js",
    "revision": "0599ee88a850e17e154003ce9a8fcc2e"
  },
  {
    "url": "assets/js/22.3f8c6a28.js",
    "revision": "f2842dc8c989aa1d47d40557644d3c79"
  },
  {
    "url": "assets/js/23.b1b8a8f0.js",
    "revision": "9ad5d1345b9e6169334deb712c0f2570"
  },
  {
    "url": "assets/js/24.dbbe3bda.js",
    "revision": "c3acbe238b45a2e2e89c78dd6c3c1338"
  },
  {
    "url": "assets/js/25.70f54078.js",
    "revision": "93037387c63a2f6413b887b947c0e2b8"
  },
  {
    "url": "assets/js/26.9556c162.js",
    "revision": "3a8b5f53b8ef24488729946bde6d10ab"
  },
  {
    "url": "assets/js/27.fd947800.js",
    "revision": "3ee2ef3045a51e1ac475ce10a2ae02f2"
  },
  {
    "url": "assets/js/28.57ee477d.js",
    "revision": "fd37bb4603051b39ca4a023a9fdcff9f"
  },
  {
    "url": "assets/js/29.2502a7f8.js",
    "revision": "ccc6b4b48e650a705e80978e66989920"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.5ce93433.js",
    "revision": "f87718462d5dd1d866b4dab7a0ba6a3e"
  },
  {
    "url": "assets/js/31.9ef57bf8.js",
    "revision": "4edd56e4324c26c997e779cb2f7468c5"
  },
  {
    "url": "assets/js/32.be4ba247.js",
    "revision": "869eb1bb0432ad4a972d3a9730fa8c4e"
  },
  {
    "url": "assets/js/33.29ae632f.js",
    "revision": "2ba892e1aff5be3156132091e93790b2"
  },
  {
    "url": "assets/js/34.d82708fb.js",
    "revision": "54e89b36da543d89b2f711b1ee89d3c4"
  },
  {
    "url": "assets/js/35.ba663db6.js",
    "revision": "e3be34a2ad568092fc5d41cabd46224b"
  },
  {
    "url": "assets/js/36.3a278789.js",
    "revision": "d847595d7889166b03766efa31ec8460"
  },
  {
    "url": "assets/js/37.d276428c.js",
    "revision": "8249ed94270fb5881c5123d5f331d528"
  },
  {
    "url": "assets/js/38.903e9f39.js",
    "revision": "55c375ad4f108f40777172fc2a201391"
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
    "url": "assets/js/40.eee8b036.js",
    "revision": "c030761002b733494d7b5c670b3a4ee4"
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
    "url": "assets/js/app.76d7a1f3.js",
    "revision": "f973026dc66ef88d2dc03091ac54d8f0"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "03de3d0ead9b1898498eb4dcf0bd2dae"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "a276ea881233b35bd67ab92b2a06cfa8"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "faa991b216f75e9cb9f8eef0251dc994"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "bac3f578cfa43ea5e2943cce3590a678"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "50c6bae82976b6ef6a641215b80bbaaa"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "260f5650ba24c57fc5b9843d81f1af6a"
  },
  {
    "url": "blogs/Interview/Vue/Vue.html",
    "revision": "ab02f95872e672438c85287ba1f70c5e"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "ed1b420ffd6edea1303e9a2d36485670"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "559bf426713fe3e9e3a36a1419d94518"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "062404caf9a8c49099483cbb2276bd3b"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "cd0c29ff9aa54ddb40e2bc23d77df4d0"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "6e29771789d44280e160f561f204cbf7"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "768e6da91c69d579d7475d90b7a44ae9"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "3448afa9f19e2fba0d625c8643433cae"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "dcc821fe82412f262a04d899cdded6e8"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "6d4871b04fc4f9359778728a8b62e60e"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "7463a8042644b6078c323a89e73098d1"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "de0c0e08f3cc813b9ce970ea7c34bc0a"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "2a5e9f2c3bcd89798ac94286614c48c8"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "d0687820ff6fb4856ca567cf57595fd6"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "058e17b9c5cde508032b15639df80770"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "988f059c2a3ce2e7822292362fe3ead3"
  },
  {
    "url": "categories/HTMLCSS知识要点/index.html",
    "revision": "5ba7f861c7c99afe37272fa949a9493f"
  },
  {
    "url": "categories/HTMLCSS面经/index.html",
    "revision": "7dfa1f9db71233cd0b49711c3e3ba440"
  },
  {
    "url": "categories/index.html",
    "revision": "a81bc02d05a752f42460bf3d5df152ea"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "740980fec807c81e8c468a3f9c935c01"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "9a9fe4da653885cbaf61588dbbe8de87"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "5053e432555e856cdcb7d791582c0e92"
  },
  {
    "url": "categories/React/index.html",
    "revision": "9cd04dc91c03cac058f4d040363b7568"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "9310c0419934d133e7463219720e9d0a"
  },
  {
    "url": "categories/Vue 面经/index.html",
    "revision": "db8166131887b4ec90ced4e8e38f51a0"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "0508769728aec875ec572d256ac4308c"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "0ad5523406e9fb56754b6a9c149fa127"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "c93f290b1acd67001a932ebe424232d5"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "1eba26052ea9c36c5f7c8a2a96acf590"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "ff10c55dff32d75d5b0dac6582138848"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "1db984107b623afb5cd44c5913ec5bc4"
  },
  {
    "url": "css/style.css",
    "revision": "2c0da462209a604aa96abd01d1e62eb4"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "313a01384463a9a1a241c09175d003a4"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "54c5c5776aac368d4df73dcefd518d95"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "df4c861102d3c1cd43d067357fd2d493"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "0c50cf386cad1d015ed6480b12a140cf"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "b956aabbfe86effd8b01c519e2bcd73d"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "d76eca4f53be739b66323c351f3e1f04"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "0e4b369d5e2ffa2e1bf5489fe3d6e45f"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "3b21022f3778fbe4ad2def50fe0936da"
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
    "revision": "2ff2aec0c0c582fd80dac521d6b8d99a"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "007519e091ceee8c64af231330250f3d"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "e473afc10ecbddd3f785d832ba0fb042"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "1db35712236537db519db240d2b2973c"
  },
  {
    "url": "tag/index.html",
    "revision": "f5f9c47d790562453512d2ed712d2722"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "92ea9075460eea15a9e756d380e6cdb8"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "61e88beb266319ee1309f3290cf21cdc"
  },
  {
    "url": "tag/React/index.html",
    "revision": "983fcf77244471184211ca2fed98b596"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "16a26cea0cd38e38244d699678de18aa"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "b6191e5ad89844bd77b7740dcbb97810"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "8590142ffc2142c137134f90f4117e3f"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e80a4ab9865ec7912bbeeea71c2139e1"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "9ef91a977ded01f0097250b17167bbc4"
  },
  {
    "url": "tag/Webpack 基础/index.html",
    "revision": "397ee12c43e4dfcdc6184bf903f689ea"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "e667623c11c5787774827822f85f9626"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "1b6abdc2170ff37f826cce444d7b43d7"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "80ef6866ccd22fdf280a10e5bdc6bb86"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2d6894402f33ea89ffef9cf0c3323042"
  },
  {
    "url": "timeline/index.html",
    "revision": "d441a7add1e06ad88f8cc6aa4f4fcde8"
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
