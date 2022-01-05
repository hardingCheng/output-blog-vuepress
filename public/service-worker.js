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
    "revision": "5db6bbb8cdaece7240f1790959b74439"
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
    "url": "assets/js/11.729a60f7.js",
    "revision": "f4989c25c2350eec0caa74cfaa228b83"
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
    "url": "assets/js/15.9d6311c3.js",
    "revision": "ab89596c6d18ed6617b7b94dddae96cd"
  },
  {
    "url": "assets/js/16.0a736e7c.js",
    "revision": "ce2c1bf8a96e720f62c38b6b6b60222a"
  },
  {
    "url": "assets/js/17.970c9353.js",
    "revision": "5b03f6da50725b70eaf624569c53ee4a"
  },
  {
    "url": "assets/js/18.c38c67be.js",
    "revision": "dc48645dad085c682d56089e0c8bf69b"
  },
  {
    "url": "assets/js/19.4bdaa9f0.js",
    "revision": "855f193ec3ac9b70fb853e761a68f4d6"
  },
  {
    "url": "assets/js/20.54e82d2a.js",
    "revision": "e058679b6ee772fb3d8ecfa0a5c4caa5"
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
    "url": "assets/js/24.eeeae3bc.js",
    "revision": "e108eb19a3064174feb8833de1bb3492"
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
    "url": "assets/js/27.1fd1f5b1.js",
    "revision": "8713944b4111fde2ac416633f3af754c"
  },
  {
    "url": "assets/js/28.84b667ae.js",
    "revision": "ef0da662c30827651dc88834739f6af3"
  },
  {
    "url": "assets/js/29.6069a1cf.js",
    "revision": "c14dff8334a16a2eec262440004d907e"
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
    "url": "assets/js/32.5522e050.js",
    "revision": "6ed7cca22d3ab4983d40ba4498a6a391"
  },
  {
    "url": "assets/js/33.1a4a0db6.js",
    "revision": "7f181031bd3360e7f40c2d1c205f3f1f"
  },
  {
    "url": "assets/js/34.c3c720e3.js",
    "revision": "a3e4f7a54306fe757d327329966029c2"
  },
  {
    "url": "assets/js/35.43790c94.js",
    "revision": "40d673370d6a19f8dabbb128db69b5fd"
  },
  {
    "url": "assets/js/36.b3537712.js",
    "revision": "0da5081bf901263337940f44b67bbd78"
  },
  {
    "url": "assets/js/37.1a01e49a.js",
    "revision": "e0d21778bb20f93f5b23f0e0fa8872c4"
  },
  {
    "url": "assets/js/38.16da4de7.js",
    "revision": "f85ea52b6ebda0d76aac570f184fb6be"
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
    "url": "assets/js/40.a1253d19.js",
    "revision": "a99c070d28ec5bf8da9cd0351129223a"
  },
  {
    "url": "assets/js/41.72d41f3f.js",
    "revision": "e598e0cd1e6aabe75d1e191636220857"
  },
  {
    "url": "assets/js/42.2197af1d.js",
    "revision": "68e3c139715ec59656cd599ba621e333"
  },
  {
    "url": "assets/js/43.7026a6f0.js",
    "revision": "0a7f72a998ec86f2132ff11d623c8416"
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
    "url": "assets/js/47.ec12cccb.js",
    "revision": "9775cd0152a6d83bb70a2b1e7b1ebef3"
  },
  {
    "url": "assets/js/48.340a182d.js",
    "revision": "2a52040c07a5f7df163ce44d8e0c449e"
  },
  {
    "url": "assets/js/49.bcaef62e.js",
    "revision": "e810cfe0e9182fed4b236e50ef83f51c"
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
    "url": "assets/js/app.0d5623ec.js",
    "revision": "a56ff5eae8176bd0a459ce878e0f5ddf"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "a24653e9ed90551c28b1e7129f9e55f7"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "8bf29fa9c6566d4a35814fafeffcc3bb"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "af26d9af36413894be63aaea1b1c0281"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "9ff50fc455f24c3e44f1659e3aa6a2a8"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "e13c0503ea5573622a2cabff6abb99c1"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "c3affed5a53598d55bb5278918aafdd5"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "7113db045bfdd5b765719b71ade27063"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "f86ad6a367baa099dc76c3eab8947028"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "761795d0e6a410ecce02bcf766d47519"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "895b93431bc732cc69f9c1f45718b762"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "5f6ffb680307ca03e3c0720d9d0408ff"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "7164253d796a156c1c2a70f4d1c6a5d9"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "64f8bb19b084228043ac834fd377ff46"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "b906c122416b7f640d15e9070633af94"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "945159c9fe458fe983b0d90b8adbd506"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "76ea3bfd0f9c3b263d63941d08b5f8c6"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "af89faa5c89200dbfef68bb79f37d415"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "f19e74455b23ea767ac37c14138ab778"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "44cbdeac0efdefa9117f900342ad39cd"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "833ea89caa421de00bbd856a901e59be"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "c5fbad629180047f2a52b38209a3b3f1"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "41d81fba6b6a1d8a8fd695da401fa911"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "21669d0916b535b881caeeb364c76d52"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "a2cbd5d2d67396c898ea127dbbdb7436"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "027eb49cd9d0a1a455616527ecab630b"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "7160f07c33ff1be5669ee5e270777b28"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "0331ecb8672fdedbcfe38407a706b6de"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "93d359e85ce2b3678463ae73f8c9caec"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "2c153e15d5d3585b9d9d4ae27afa9437"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "e34e13f275cafeab693054e60605e6ae"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "31396e2b406ea23c52d3d8f3dc66bb37"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "2a40c069207284713dbde40323d71183"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "35340416c6cd56d535ba31ce9ea37b63"
  },
  {
    "url": "categories/index.html",
    "revision": "be402462f65675adbb944b1cd10d0256"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "c8ae003baedd59ae044831cbcde41ffb"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b6fbc81bbd3da3491b69f186c5f11d65"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "c210fe5b113016570ccd68046e4ce846"
  },
  {
    "url": "categories/React/index.html",
    "revision": "f6d10370126db75554d5dfaa90f5f6df"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "a611e56a2f0c2207f119e23ba58c7136"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "2e3f0ac150da2a9990be946d01b5e025"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "8830787f4e79ecf5513b7f29d7559b38"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c862f19ebbf8042ab602b95e79b4247c"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "bd4709a7611c168ba17e72a66ec94857"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "72af637026319a0ce002dfee5d857dab"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "fde590405cf797933cf8cc205a7a5c14"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "6ad5baed657c284a192dc4c9210bf49b"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "5a5376fc2f9d82e2f189da9e65f1b791"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "ed5e11374d0cabb08577d6dcd3caf110"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "26bd7d8daa7b361d3d5052d4acc14e0c"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "e283a34665416ecec53c8d0460a6272d"
  },
  {
    "url": "css/style.css",
    "revision": "056ae41af5f8a78fe1185bf3c2ea9bbf"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "52671dd0a9a56460ad10f2988c697fee"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "cbf30991d064dde9a0542f931c054202"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "4f0f48856cbd54b1cef5e1d2339b28ee"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "7713ca3d01959369ecce20ca094393bf"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "6181711e74077e381bccebdcb51707d5"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "c71426d33076dcdc63dadd51cefec5a2"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "0728f9ccf2a9e27cc6af9921b2fa20e8"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "3a4d43b45193d1f95dbef384fedeee3f"
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
    "revision": "fde517597f4d90d1c5066d631c84330e"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "e2304a9ec66f52b68952d97592288d8e"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "a59e70a249e47d4f4bd9aca2f758355c"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "f5e0426ac562db1b44eac3b6e4be35c0"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "4b47f57ea51882a4b10d0e72e3319f7d"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "90fad3fc5df4065426353b1996c49e14"
  },
  {
    "url": "tag/index.html",
    "revision": "017891ed25845c2b8e34f9d2e5ce9ca1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "cfa979bb35c34602b3ca73ee9d10b9ed"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "942134ebfeef8a94b588ef67f95f5c52"
  },
  {
    "url": "tag/React/index.html",
    "revision": "f5d32f94ad1c6a14aadbd1e5520ea85f"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "080efee7a2b7617e8faec49403a5144f"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "c2d693df5a50751de79b302a75915fe8"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "deff8c9cdf5c5ba259f6570903c1e929"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "3416114f59799623733960f4ca866155"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "5e2c3dd052375e507f4cd2cf3ece90c5"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ddc589cd834533b773041c49240321e8"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "bea32b456e2d5615a04b3f7d7a55e7ff"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "e9ed215e6676868b46f22ef4d3466436"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "7ccec32a2fcd60093ddae4fb3eaa7ea5"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "5271f2f846c5d6fabee45c504ef8c287"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "1593ab29ae030201827f4a2924593570"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "dcca830cd929560918ac35ca1991fed1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9edc6a93db114b16801105e1a6481632"
  },
  {
    "url": "timeline/index.html",
    "revision": "d43a946e371d4df662510cc5cc30b93f"
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
