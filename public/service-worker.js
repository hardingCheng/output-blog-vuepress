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
    "revision": "2bf5875d6290429aec0f20a1e44df16b"
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
    "url": "assets/js/11.d0f52921.js",
    "revision": "0ac87d3507effb8b5637f436449a464b"
  },
  {
    "url": "assets/js/12.bf967512.js",
    "revision": "f57afae7179be7a9163f726624f10db6"
  },
  {
    "url": "assets/js/13.ddf8220d.js",
    "revision": "1ec00e02e67ce811ade95f93d6e9e803"
  },
  {
    "url": "assets/js/14.b96547a3.js",
    "revision": "26ab047a7d44a8d081e47056d65d729f"
  },
  {
    "url": "assets/js/15.9fa984b2.js",
    "revision": "04453345502813cc7d59bf753b448efb"
  },
  {
    "url": "assets/js/16.08754178.js",
    "revision": "065b7f8fac3e584895746ab84deda065"
  },
  {
    "url": "assets/js/17.65d9f9ac.js",
    "revision": "8ac907bfef158b19cbe58690d111e0b1"
  },
  {
    "url": "assets/js/18.1a964c52.js",
    "revision": "0c03856f968bd6a9722058caee09824c"
  },
  {
    "url": "assets/js/19.4888d414.js",
    "revision": "40a805ce7444b0385fc492c838a13dc3"
  },
  {
    "url": "assets/js/20.08ca6e3c.js",
    "revision": "2f2edea5e482bb96ef9854e070e4ab0c"
  },
  {
    "url": "assets/js/21.fb00f199.js",
    "revision": "ed5f6f0a589b9874924abe4e634676e0"
  },
  {
    "url": "assets/js/22.db7291f2.js",
    "revision": "a48c4191bb957a20bbd825054c3b0d97"
  },
  {
    "url": "assets/js/23.27e7018f.js",
    "revision": "4e2a59d46c2c9ec79ec833d260906d16"
  },
  {
    "url": "assets/js/24.8ad18d38.js",
    "revision": "7b35bd5b807523efd3c964fa2099e639"
  },
  {
    "url": "assets/js/25.5010f40f.js",
    "revision": "d79d9bf24714f3826ef51c9fb0b92ce4"
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
    "url": "assets/js/28.84b667ae.js",
    "revision": "ef0da662c30827651dc88834739f6af3"
  },
  {
    "url": "assets/js/29.764c8977.js",
    "revision": "fc1c4a45240f1e0d4ec3aad9d60182d3"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.b122cac2.js",
    "revision": "95f264469cd41a2d089c89e69b8e20fa"
  },
  {
    "url": "assets/js/31.cdb7755e.js",
    "revision": "05b41aa6ccb2b57626d36616c1e5a739"
  },
  {
    "url": "assets/js/32.30328f1c.js",
    "revision": "c1671cf3f01338c39fe3ccd9223f07f3"
  },
  {
    "url": "assets/js/33.0c1e3791.js",
    "revision": "16905798ae433af61ab7f03cde6fcfd1"
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
    "url": "assets/js/36.f5324114.js",
    "revision": "ca4d9fbae6119752cc5b1ba9a294b19c"
  },
  {
    "url": "assets/js/37.108bf5f7.js",
    "revision": "5ab6d47a4f2da8148c673443fe52c09c"
  },
  {
    "url": "assets/js/38.c5f97983.js",
    "revision": "bf45dcca143d61bf35b5f10839938306"
  },
  {
    "url": "assets/js/39.36c2915a.js",
    "revision": "2aaa723223a3af373e3d6ff6c323bb03"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.a43b6ddf.js",
    "revision": "52e529008755032066c3123f84f59571"
  },
  {
    "url": "assets/js/41.b9cd2eba.js",
    "revision": "b44854183a592d668bbb619f276b2011"
  },
  {
    "url": "assets/js/42.e4b84e5f.js",
    "revision": "f2674494420f64382944d6a12f56ee87"
  },
  {
    "url": "assets/js/43.6c8382b0.js",
    "revision": "2d7d9329cda9843d1ce9c3e23fc705b0"
  },
  {
    "url": "assets/js/44.cac96795.js",
    "revision": "e3dc73f5ea97a98395984d75320fc945"
  },
  {
    "url": "assets/js/45.cd8c69d5.js",
    "revision": "e9204dff84538f035577f8d0101aa735"
  },
  {
    "url": "assets/js/46.cfca38b9.js",
    "revision": "f55251d28e043da2bb6264be71c12000"
  },
  {
    "url": "assets/js/47.ec12cccb.js",
    "revision": "9775cd0152a6d83bb70a2b1e7b1ebef3"
  },
  {
    "url": "assets/js/48.c5f574eb.js",
    "revision": "f8491a138627959c1dcf210609b06562"
  },
  {
    "url": "assets/js/49.6e28f3cf.js",
    "revision": "90bfd350106ada5aa1dbb34072d8daf0"
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
    "url": "assets/js/app.ec4e3ada.js",
    "revision": "25f6004499db78aa6afc8ac0fb249e7f"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "84f24ae6119b1033df2136d361958ef0"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "9851697d1c47575202eb6a6078225233"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "3a49475052e9ff09b70acfb3240e5d3e"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "c3dcc54b5d719fe5747af3f47e349840"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "3650ebb186891ca2db96f538ebd8d94a"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "22787aef8867efeae0e243f0ae91097a"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "2e066802fede224e5eb445a06f929e19"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "662ec1876e9795f058a6ac9ed4661a1b"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "a15d8bf4bdbea0c9e11448d4b60fc6f5"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "906550307159797086d2050cfaa40927"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "bd361bd00788b9b89857929088056dee"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "a4ec775bd97f461e9ae524332fd6d752"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "d46df88116e0d8dfcb7398c27ec79538"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "c2d16e922311b4d6153181f37d3e747e"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "819f25e13a6f5739346a86991878837d"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "18a533417032de78b0c6086413026907"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "5d1df7680913b8bad38a6f5b66194249"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "15d9f1e0a4b81265817962b5195d8473"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "503fe8335aa8f31b775ace3bd8d9e2ac"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "10b4c6b8ea666ab2dfc101c8230f7952"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "9275cdb24d89b5e9abfda665d2f83277"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "a1e6baf363ddbdeaec7f3bc472c40279"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "98951d8f2c80568a5758ed9889d5b330"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "93691926445eaa5145b64fc291f7727d"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "ebec4ea1e1a6f39ae2a0a9273ed46c16"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "d3ff22a13d16da580259659f9ea92a80"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "fa7823b934e7f222a448ce6326ab42f9"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "ef60dba4f02cb05c5edda98d5aa311cf"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "639ab98f73b2844d92e9a05dc5cbc31b"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "a97b8dd9dff2bfa40b8fd4c815ca9323"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "a439187493e7769be03e21ed0c16ce6a"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "22222c6ca5ab0ffa6ec1e67a2e7285b3"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "a4e97a05459a76b8b683913af88e7a9d"
  },
  {
    "url": "categories/index.html",
    "revision": "3ea2538ff72f9cb52f6f2a026dafbcb7"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "edf6fe481db905dd83f2e9c1c6c7fbe0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "18420e583f93b37f1adeddaefcc54306"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "36c1b3734a0415c35eab461f77e6e998"
  },
  {
    "url": "categories/React/index.html",
    "revision": "42260bc1f6fb8443ebe063f95e7ecf97"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "63a65d2369d5ca37a5f193bdd5d9da26"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "e2884476e2b8b8f77014d87b5bf75069"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "c7cae47bac532d0b818845d285d9a27f"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "2ab14920c37ea56791a076a94c177afa"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "5629bdc85751b78412f65b0b441bbb8f"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "864f1de4e500869a5b30bb0a906fafa1"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "169e9ad1d62b261949d61d0c5526c0ba"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "869cdeca33e46862ecaae0580b714708"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "a2a4bf36ccb0e94e3e91a82ec8fb142f"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "3a12777c348eb19535e1a103010aafa3"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "9685a5b1437589c65b82cd572ce9dd68"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "6073c81fec81b8f808e498c8fcd75299"
  },
  {
    "url": "css/style.css",
    "revision": "056ae41af5f8a78fe1185bf3c2ea9bbf"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "a8bafc3d39c3562561be7ae7caba8b3e"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "35bc5f747e0f1e4bf0dccb767bd9071f"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "76cb2de2f8467e1aab6e60b65c49dec6"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "3eed83a844188b505782c0d2ab784800"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "59372a0fe96b6d13332b0077e27e8861"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "e022c13bfb03849745f266ca37cfed83"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "1ea5c8c6f0397eb1de2f71511c8f2147"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "4aedbf1c3fc19f52d585e04f1887a592"
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
    "revision": "d84f42c2d79360b58dcd0e303dc65e9f"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b682280b3e1e098e975c0ba1fec9fca5"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "5ae683f8349e696a00c1748b733588bf"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "d752538199a7e5afa2e0c3ae0bd8f3a6"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "767bd63b24283f705a2d86049d5077ce"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "d011298451d87f2fda1a2e87403ef2c5"
  },
  {
    "url": "tag/index.html",
    "revision": "557fffc70cba2338823846a3e8644393"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d988d0ce17e2244572a82f170b92dc86"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "cf3add9abe1b9b42489393e8d61d0603"
  },
  {
    "url": "tag/React/index.html",
    "revision": "8a6fb74c761e497102e1dd26f13f57ba"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "6f283743e6a9ed36d741f1fbe2b5525c"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "c3d1b4cce3e0c3b8da9b49cae7578aca"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "1db9cf6ef18d7ed6db0eb0d70b03ad1e"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "033dfbc6ca8a445fba85567460c0bfa7"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "800b8e8aa63fa10c8771587744a9868e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3d9500028020a0e3092290f55423a65c"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "cd00003888e316d1b610703012e32bad"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "fbc84efb757085cc66bdb2dc29d2ba74"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "6e3fbc44a15bfff747b4ff85a9f925bf"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "6ac4186a4c9bb168de445dc93e011d60"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "7c6564ce10104595b2930ad0973df966"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "723cedee926f00ed97967bf33268eed0"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ceebbf0fd7d036548e19d01c503d3600"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb95b923612508bffab4f98a8dac804b"
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
