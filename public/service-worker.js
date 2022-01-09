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
    "revision": "61f4d64b7c5a5c6a2083f4e10fdf8d01"
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
    "url": "assets/js/16.36845604.js",
    "revision": "3ff3699e019e3cecafa1fdbeed6f8abe"
  },
  {
    "url": "assets/js/17.93beed10.js",
    "revision": "158d231bca586c7c5d6a4b9ab111305a"
  },
  {
    "url": "assets/js/18.4e705915.js",
    "revision": "7ae232e9d2dc2d0e7341c4456d92f2eb"
  },
  {
    "url": "assets/js/19.6f3f28f9.js",
    "revision": "9b58fd229402af803b9816934a9df6dc"
  },
  {
    "url": "assets/js/20.08ca6e3c.js",
    "revision": "2f2edea5e482bb96ef9854e070e4ab0c"
  },
  {
    "url": "assets/js/21.0bb936bc.js",
    "revision": "6e2292127fea3e10a3fbcfcf9136231b"
  },
  {
    "url": "assets/js/22.242d0e56.js",
    "revision": "3c8de847efcfb0ce01be10df30522700"
  },
  {
    "url": "assets/js/23.45398548.js",
    "revision": "45842d98c88b9b39a5e3120ee1e16f30"
  },
  {
    "url": "assets/js/24.8ad18d38.js",
    "revision": "7b35bd5b807523efd3c964fa2099e639"
  },
  {
    "url": "assets/js/25.a8c270d7.js",
    "revision": "11bb8aa4f422e7a56ca6c70e45170f55"
  },
  {
    "url": "assets/js/26.8a7821ca.js",
    "revision": "4e01e06fc46ea0420b3660df0c841494"
  },
  {
    "url": "assets/js/27.03162d1f.js",
    "revision": "5a9ff7e9074cb8b819d1b2378480e48d"
  },
  {
    "url": "assets/js/28.ffa759d1.js",
    "revision": "dec08fbe76bcd5978a09667604055aa8"
  },
  {
    "url": "assets/js/29.f41f2895.js",
    "revision": "eb7583546e19c98f42eeea1da56af948"
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
    "url": "assets/js/32.5522e050.js",
    "revision": "6ed7cca22d3ab4983d40ba4498a6a391"
  },
  {
    "url": "assets/js/33.b083c583.js",
    "revision": "7f4e10146256aa547854b51b0c0fbef0"
  },
  {
    "url": "assets/js/34.6463d6ef.js",
    "revision": "5c0ee390247389fae1b2334e0d52a99d"
  },
  {
    "url": "assets/js/35.62a58b52.js",
    "revision": "adc5f517891227c253af7a9001893140"
  },
  {
    "url": "assets/js/36.b3537712.js",
    "revision": "0da5081bf901263337940f44b67bbd78"
  },
  {
    "url": "assets/js/37.a880f1ef.js",
    "revision": "908f52505b1ee1bd147351668939957b"
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
    "url": "assets/js/40.ce385432.js",
    "revision": "fd660bb0443c3aeffa8d80d49dce0300"
  },
  {
    "url": "assets/js/41.8271795c.js",
    "revision": "e112fc035af99267c2afc410df340a13"
  },
  {
    "url": "assets/js/42.2197af1d.js",
    "revision": "68e3c139715ec59656cd599ba621e333"
  },
  {
    "url": "assets/js/43.db8880f7.js",
    "revision": "e36ff01d177f5c3a46f0670a82c7d8bc"
  },
  {
    "url": "assets/js/44.a76ab6a2.js",
    "revision": "1e61d8c8881f07c9056837b5b526a084"
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
    "url": "assets/js/app.80f010c3.js",
    "revision": "bf146e9b6dab0fd8b2ae70c704281a98"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "2a31e9cab440c57b9208327ae64bc415"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "e9188104cb77015fb0670fc00f64a1ef"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "d3ae02f24d1b586585bd1939d177d61a"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "f28ee93db5ba4f6a6078beea3d80a40f"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "c3f056490e6d75fa78a075e9255cd14f"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "aee647485e7f4de03e7cd96c02c820a1"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "118fbd625457e1184245f48e41ee5f86"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "2f35a018b1b945edee8255683605fc14"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "893aa32a518089d72e70b1f7d2754e20"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "3f00283450c39e75174e8c4cc730c334"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "c7a244106ece4c4d1ef0f94936c164cf"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "00761adb3ba9342054eb5d8c46182ad7"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "08b8cae28d58c28b66fbc12f4c142a64"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "e12356f6e4d4e939e2749f5d3f2337a9"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "7858f0f219c3db89013f1683a14b93d0"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "c510cb1b59dbad958e7d9fdbff50d53c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "d71fdee9c1b94584473c879a493c8c07"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "7e7e94103f79ec01efd9226c85d6a97f"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "66ef889b95189ed2bd9bfdb9fdfd1ef8"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "56ae9ef6930d69597e19438871d2a8c2"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "e3d8da1d2d6d3295fbfc69d172162895"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "7b65abfd592e7542649561eb744f4018"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "12ac8421c20be8ade03c9963eeaa3c40"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "d5b0693f4ca41335aeb8c4bf4e069273"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "a29f4bbb46357fac41e32c2d8d376ffb"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "cecfcf5adf76c05e26afab9576ea475f"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "83cb6bf2f0b2fe21d55c0078b262155a"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "5c41766986c6b62776a8c00bacc90639"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "4383885c7feaa4af361dafa2119a0e6c"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "5de5bdb66ebd41fc048d79dd8cb6ecea"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "663c409db6a369d11e880d91626f3662"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "2fa82559100abb99df62e77a8058c9ae"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "a6b4ee3a1d3a68801eda53e9835ba3d2"
  },
  {
    "url": "categories/index.html",
    "revision": "94f60d8134f724e6d69a7bded02e5ca2"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "1bfdb8c271b6df53573c60c7c0922d3a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "480aa21b86fd5139e5ebe779cdf44e0d"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "a4d78815dec694408fc5c5cd4bc8af6e"
  },
  {
    "url": "categories/React/index.html",
    "revision": "b2c076cc8ec69699b33d8ac30e65e224"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "59b7e1ff4c0418a0548b101059e113d4"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "d1eda87a30c628a938c4222d42b585bf"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "55f9c93cf3079cac597d999e1efdb67d"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "99bce7fd44ea374d26f2c70fa9b48e66"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "5dad6ad87415286f9fa6d8918b0ee9e4"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "3524f4ec1a31125aa5c9f62ee0671bf3"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "9ead1341d048e085b39cae37992113f6"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "a1bc43d649e49abbe252bfb7399d5162"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "91f037a5f9ed92728e5bfb34b6a2804d"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "82b3851c24b566bb8d69c6450e6c53c5"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "009bf412e2f06a3e0b3f1255b8e0e0ff"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "261a90fcf61a11cdf5af32cf245ae802"
  },
  {
    "url": "css/style.css",
    "revision": "056ae41af5f8a78fe1185bf3c2ea9bbf"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "27ec6b1d133b39a76a96ef2aa9797c66"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "e8aba3cb5398b52726230ece5fd0d5f6"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "317156252dba0d31303cd351bd8d9905"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "969a63ed93da9b341d1c30151500f224"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "09c55ca5b51e23507fa47dab4ea01704"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "753ab665658bb18a0aaf5f8d529b2212"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "eb8696f03e6ecf277121851830bb9ba0"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "98f03e0eaee951023bf80fb6f76f4de5"
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
    "revision": "4443df2a54873d8ef5ed39b6f0519b5c"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "fa83a643b48032e8c13c9b2371b377d9"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "eccda075942597b4095c00d7e825997c"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "496eb32ec04cfe965cb390cbdba36b04"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "8fa5d19d5366f39716cabf4e3c3d5407"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "a0801e26d2a2b2984d8c2e7301bbb9c1"
  },
  {
    "url": "tag/index.html",
    "revision": "9961a0fc18a3046b4bbdb221e14009c2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "74ff511e2cd4a502a3a217acf69b76cc"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "652e3fa0deaf92dd97da776f7fd43765"
  },
  {
    "url": "tag/React/index.html",
    "revision": "4d8a3e1a843ab7ea333f297ee344a328"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "5d356d89435937e85cf2729edf03e5a0"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "c699f01541b7f192cf697502afc92a12"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "04a5e5ad177708061aba2c46b7e53593"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "f43ab09d854c7745f3528cb143bed9f1"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "73bd463f15d5a8e0113afd50f96486c1"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a4e17e812ebf0f91676f8800a9b06b0b"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "dd0cdd863d94196761091171a5fb1fe3"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "e27bc5b9202156c7b249b684accffedb"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "296338f502c866ea610f8d4493afeba1"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "7125d09220bd3418f0e4bbdaed2d98a6"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "85c8ddbf0f72df6462762c5a508fc5b7"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "97edd217ce1c8cf756f07d2fae40995f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "509de3bfae5eed33f3132ee8a0042a72"
  },
  {
    "url": "timeline/index.html",
    "revision": "a7e55ba7247e5d43e5c3191f370b5879"
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
