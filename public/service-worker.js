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
    "revision": "e76b910733bfb3d191ce283b76514e62"
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
    "url": "assets/js/13.b8acfb06.js",
    "revision": "1e8631fcfea6c93aad9daf4ba87c70c7"
  },
  {
    "url": "assets/js/14.25941f80.js",
    "revision": "95c0a652b6297430e7640f3429ff5d94"
  },
  {
    "url": "assets/js/15.9fa984b2.js",
    "revision": "04453345502813cc7d59bf753b448efb"
  },
  {
    "url": "assets/js/16.3beb47ed.js",
    "revision": "9aca7df259ce07342770f90aa287704d"
  },
  {
    "url": "assets/js/17.53ce4261.js",
    "revision": "007458f845756d1ea7e51cd18fafdaa5"
  },
  {
    "url": "assets/js/18.b540f1c9.js",
    "revision": "7da0c2029aba8dba4728253001083e54"
  },
  {
    "url": "assets/js/19.ca2689a8.js",
    "revision": "b2a9ae5d417e9672e88bef336cb55ed0"
  },
  {
    "url": "assets/js/20.43e5ed0f.js",
    "revision": "78a539469a8b40389666fb55aad7e3fd"
  },
  {
    "url": "assets/js/21.fb00f199.js",
    "revision": "ed5f6f0a589b9874924abe4e634676e0"
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
    "url": "assets/js/24.eeeae3bc.js",
    "revision": "e108eb19a3064174feb8833de1bb3492"
  },
  {
    "url": "assets/js/25.4bd2886e.js",
    "revision": "512a8829b2c5e5f0004363fe9a694d28"
  },
  {
    "url": "assets/js/26.191fb9df.js",
    "revision": "5bab4892c42580ec7c94fa21dc01811d"
  },
  {
    "url": "assets/js/27.ef135e53.js",
    "revision": "36e36f2d728dffa5200bb95052d103d5"
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
    "url": "assets/js/32.30328f1c.js",
    "revision": "c1671cf3f01338c39fe3ccd9223f07f3"
  },
  {
    "url": "assets/js/33.0c1e3791.js",
    "revision": "16905798ae433af61ab7f03cde6fcfd1"
  },
  {
    "url": "assets/js/34.bab90840.js",
    "revision": "9a0385be61811aa1a9e569a26fbdf526"
  },
  {
    "url": "assets/js/35.17b21bad.js",
    "revision": "5e2ad624e40a26e08cdb29c525709e8f"
  },
  {
    "url": "assets/js/36.f5324114.js",
    "revision": "ca4d9fbae6119752cc5b1ba9a294b19c"
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
    "url": "assets/js/41.39d5392f.js",
    "revision": "9d2424d5fa4a7fbb65399566d4fabe4f"
  },
  {
    "url": "assets/js/42.4104c5ba.js",
    "revision": "6e8e685cde9d14444da12901791b8202"
  },
  {
    "url": "assets/js/43.7026a6f0.js",
    "revision": "0a7f72a998ec86f2132ff11d623c8416"
  },
  {
    "url": "assets/js/44.44864a5e.js",
    "revision": "e57c3b11135f06a1dd6d8a7459d7d104"
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
    "url": "assets/js/app.6b8d69f7.js",
    "revision": "3e739286ee6417242ef97a37e84b72ac"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "4faf29de5f8df70d2cb2ad3ca2641bd0"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "70fb000c1d3698c47782b9305ab3181e"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "5f17d5d82c41d04e9c00f344c7087fa9"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "934c8379c33358b4e99a3e6f3c61e130"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "34908bfbb21ce8025b45f08ba5232c0b"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "0cc0a63d0dad4774b0ea2719c0de7249"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "1f7a2fb328dab922561224d05795674c"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "ef668e8846b4ab8d85e893f1873071ac"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "5e8306c9a10a1e6fb4ec9e2f1f95cc78"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "fdd5a76335e3ffd504b89eaa0d7ab7c5"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "90042df2199b816eee65afb5c2ab214a"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "9a924b56621fc526f53db33a08d9454e"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "53ea92bfad899c87c4b9530afe74fdd7"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "fbeb8bc4e78e46d9b3a0a0467e20717c"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "55ec4effb4ea49b8ad8d494f425e656a"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "d3c98879209ab588c7b57382e9a29cc0"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "ad831474c2b9c73f5a78ffb600a8f5f5"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "52854d93546c146549337db1f1752edb"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "a667e96fb55fa7dca2a42daa1060c299"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "bb55ae8167ddc170496e353a5c2a3d12"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "e3d38961d29b97ae39fc45c6c34e2d78"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "cd91006c064396f2aabbcded0b77a682"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "1379a06986edbd00117844ad1fed5fb7"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "4fefaad4bc90bceade3e7e4b98306cc5"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "8a9d614bef1b31ad47f5f0355822114c"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "2dea74f7e2fd6aa43dfba643b089907d"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "3091b5b36dbf5b1f64188d74caa91dfb"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "78b2a61df8d3543d67b475b61cca6f57"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "c041b5558ac023b29ebd3ee1db95a241"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "74108da8bfa2b45361a1ad16ba156847"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "b0f8de8be4053530bc6a9a4fe6c5f230"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "56e817d50fa2c45f80de1c126b98c1b8"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "56b98765167f86b77111a49f3f3f3cba"
  },
  {
    "url": "categories/index.html",
    "revision": "e276589d7a673ac76612eecea6038580"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "2a9cb6bbaad28e0a212b7e365110b14d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "6d2ff7a161505298b7c25da81fc83a5b"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "77681a4549c2c73184d914b0bd754a4f"
  },
  {
    "url": "categories/React/index.html",
    "revision": "ff747f4475d475966630d9304a6db41b"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "b84564565df8f35ba7c2979a1113726e"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "2c44b85991d35e75ee930faa4d7714a9"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "17fe578ff78ac91f15fce091490849f6"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "a80bef8b8231a574f2645c470f5a7a65"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "26f1bbe0e12141d87e74bab23cffdf0b"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "7230494238fa25400c8444e7c7a9f324"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "556b31af66d208610d6a2156c8852334"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "1f9adb7c9cceda68a8d6cae7c8a3dc1e"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "ef0265fa15585c32b78db6c942afc9fb"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "f88d51b04830c2e060ce9b07ff408ec0"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "0b3e1aa9fa804f6dd1fd995cfa22035e"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "7a65d19ae531989a59bb96bdf44d1535"
  },
  {
    "url": "css/style.css",
    "revision": "056ae41af5f8a78fe1185bf3c2ea9bbf"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "4017028b86dcb14ceaba148619b9f002"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "be3f0cee5a7ddb08202e2ca01b40192a"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "be1e7ceed13f597884b36768879c674f"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "24ff6592178689ec5484934c74b8d624"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "24d4a9929fb3782d53a26af0aec7bfa5"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "9281efce813e75dcbb8262d7299f7fcf"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "5afcf3d139e45cf5d0af274e2e5367e0"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "821aaaa1683bd12823472ffab3f42517"
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
    "revision": "43e51981006eed9fbe3d580f5a320833"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c3e8f7b011ad503e1a9280a8d02a7d0e"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "e79f648cc3a0d860f1bd8e1719dec9a5"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "f872fa548ed4d9b2c282356a5a3088be"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "0c2adfc80b811e2ad6f29685f9dd9f3b"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "0ab907372fd01cb404bd3873a33d2968"
  },
  {
    "url": "tag/index.html",
    "revision": "c713a70416a091c5333c2661bf88af31"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1ed75a08ffa1065623194c4bdfb21497"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "40c3c432830858b12f6b84a5b2230ba4"
  },
  {
    "url": "tag/React/index.html",
    "revision": "2e943697a53200f5073b5381e9226ce9"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "255f06fea0ad7f445d71243b0091b9f4"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "ae9b74e40fe45c3f487020436497b255"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "4e653cda9ce8d640ad5ff4358697e86a"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "c73283ac3e851fbe057eaf644b8e7cb3"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "d58a6808ad77875c413494b8ece574b9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c8456be305f6193b6d15487a74e83ad0"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "ffe70ec9af9d128dd268b9b2ff9a18ae"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "7f55e511fb918cb0a1b9e55b539da9a2"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "316266bb91355a75f894dd49a1d1d0db"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "81fc84d7852bd2025495826b2cf947cf"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "3b3991c75f622b2379384f3daeea3c00"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "9b5933b04e656cb16fbf95f1bf8e1959"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ffc1c7a412b682806cc2b2dbcd286fd3"
  },
  {
    "url": "timeline/index.html",
    "revision": "89be19dbec204e585b5c94bec087b04a"
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
