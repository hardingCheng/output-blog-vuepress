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
    "revision": "2424c751ad068c910368cc8619b9c4b5"
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
    "url": "assets/js/14.02d3294e.js",
    "revision": "b73e20a4fa911455f02cf9d135ae25d4"
  },
  {
    "url": "assets/js/15.4b77c61d.js",
    "revision": "3b139db503c60966bb856958a862608a"
  },
  {
    "url": "assets/js/16.83b058e1.js",
    "revision": "75d533d77f75ab25f39ca6c9f6617319"
  },
  {
    "url": "assets/js/17.cad5a787.js",
    "revision": "73640f98367a06c8779254640d6ea4de"
  },
  {
    "url": "assets/js/18.4a7a6b6e.js",
    "revision": "605b154610827f9cef188f1864c70f8f"
  },
  {
    "url": "assets/js/19.f0e14bf1.js",
    "revision": "27ebdb631941136c55b8c372bff2caaf"
  },
  {
    "url": "assets/js/20.63edee58.js",
    "revision": "0ca425eac68cac5d8cd843f7da3bdf1d"
  },
  {
    "url": "assets/js/21.862d496a.js",
    "revision": "d2aa4bf9aefb081a9611bb3cd9a388e3"
  },
  {
    "url": "assets/js/22.7bc956e5.js",
    "revision": "5829f156746ba565b2f6aa384b187caf"
  },
  {
    "url": "assets/js/23.551bfafa.js",
    "revision": "f455ed3df7a2b6958fa11d78b3fffaab"
  },
  {
    "url": "assets/js/24.905aeeac.js",
    "revision": "3f7a5dded3c47cb4d2301acd11c73774"
  },
  {
    "url": "assets/js/25.73a92440.js",
    "revision": "c5360b2db04150b10185b55ca8adbf36"
  },
  {
    "url": "assets/js/26.28965bde.js",
    "revision": "eead3ff66172e8e6fe5e6f4000812bb6"
  },
  {
    "url": "assets/js/27.de844e1a.js",
    "revision": "ce59f185c333d6b73f7395b41b4e5716"
  },
  {
    "url": "assets/js/28.aa56adee.js",
    "revision": "ff74f0dae7c822944adee554f9ec3e1f"
  },
  {
    "url": "assets/js/29.cff47ed7.js",
    "revision": "fc15a97df4e82cf1d08535a1d5328941"
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
    "url": "assets/js/31.6ea8bccd.js",
    "revision": "dfc1ef3bd45ea1d7550389f0f3b0c734"
  },
  {
    "url": "assets/js/32.3e455869.js",
    "revision": "e8a0fa078e667a635b4e5d5461126adb"
  },
  {
    "url": "assets/js/33.1ec4a2ab.js",
    "revision": "ab511a77a0781031abdab4c91ece36e8"
  },
  {
    "url": "assets/js/34.fc7e5544.js",
    "revision": "e5a957225a5bf0b2f5a7212319dc649e"
  },
  {
    "url": "assets/js/35.c4365755.js",
    "revision": "93b064a75ec5190e6244c4c5f3fa16f4"
  },
  {
    "url": "assets/js/36.9b204a31.js",
    "revision": "f3bc7a44f18963d3cd1ed90687c48cf8"
  },
  {
    "url": "assets/js/37.13735bed.js",
    "revision": "54cd472a32d196ac1307e7e983a50143"
  },
  {
    "url": "assets/js/38.339415aa.js",
    "revision": "a03ea04d77875cf07d61308ddfdeeeae"
  },
  {
    "url": "assets/js/39.528e85d7.js",
    "revision": "9cbf6bc0fcab695b5af84047007c7d82"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.310e3c90.js",
    "revision": "a56e45bf8f00cf649ace576f30621166"
  },
  {
    "url": "assets/js/41.b05fbbe4.js",
    "revision": "db9bd419ae60e48ddd0eb9e79dc7be7e"
  },
  {
    "url": "assets/js/42.ecad7ea4.js",
    "revision": "df9c488afc1c8fa9fea595610f98740b"
  },
  {
    "url": "assets/js/43.f7e1f385.js",
    "revision": "8fd0fa9d8045f5e40cd69a48a9413e83"
  },
  {
    "url": "assets/js/44.25b607cc.js",
    "revision": "fa98938531e70f76068acf76c77e4efa"
  },
  {
    "url": "assets/js/45.89653d5e.js",
    "revision": "482f72581c88ee06e2d9dbc96265d0db"
  },
  {
    "url": "assets/js/46.3716b8b9.js",
    "revision": "827d5d8a2105d586f2c1ab12aa766894"
  },
  {
    "url": "assets/js/47.3b9c7204.js",
    "revision": "4e5209a760884bcfeb06ded824ccb3eb"
  },
  {
    "url": "assets/js/48.e0e2969c.js",
    "revision": "b9b35cb2e601105ff049a8bc2174cd33"
  },
  {
    "url": "assets/js/49.f628ed83.js",
    "revision": "a1a5f8ece8da8d8b5cd640ac2c58c7dd"
  },
  {
    "url": "assets/js/5.205cc2e2.js",
    "revision": "41c8f0869aecccb94c2ddad68791837f"
  },
  {
    "url": "assets/js/50.3cd4a492.js",
    "revision": "2d4b0c88979928876c8365ee41c5a7a4"
  },
  {
    "url": "assets/js/51.ca01bbf3.js",
    "revision": "99c28b910ae39d732497c17621e6422f"
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
    "url": "assets/js/app.60d1a20c.js",
    "revision": "c8417ae804e85bbd5455ecb2d695eddc"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "130fa3e9ece0245787bbd192aaa5b510"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "348d63f8c40f5dab834ba903e9668675"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "23748d8eb9338d8a06813e4e64bb42f7"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "3a183d8226d460c0c6ea93d4723a9004"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "abad1c5e74b0c59f363115253ac0350d"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "8b8942d910c50f9d9b7e701e7fc732d4"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "1c09ebb6f42c798fa51e5e29b58244e6"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "9cd081c421bb350fb3a572ff7ba942cd"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "909736753a640689a7a81df3f980776b"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "69ad04588c4b548915030b4b539d842b"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "fd1d4b39439336c4f88a5cba67606396"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "c6ed1c14f6a582e9265e4417fd5e3a54"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "cc96f70baebff55d1ea0377f761c80b9"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "65ba7c31e8c7e139c24c86764a85d8e3"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "6964b5ebd350b736ddfa63d4e67d6a36"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "492ca9033ab730a28992fa98d78e53bb"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "46a6f313568c2b675665143c7f6c0a5a"
  },
  {
    "url": "blogs/PackagingModule/Engineering/Front-end-engineering.html",
    "revision": "9471dc08183b70bffe8f1e050b0e8646"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "9b24d58f80a30d6c6866ac3a65799000"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "8c4420a23860a7c0fb2c132ed7d3898c"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "9a9411cda159508ae19354b425c8add5"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "bb260c998b44d518ba2f13beecefb362"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "3bc84a8e884f00f7a1699925b7af7979"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "14d446326585071a8a03249783daf02d"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "42247920759aa1c4d90c796be7aec93d"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "a44f7540fa87481a51051107a3a2fd6f"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "881a401dad8ce5cf249834275911afac"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "fdf85299a2fc3865af7056dfe9aed4a7"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "3e128a29efbaf3fa8f0b113a5f7a7aa0"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "c106394444bc2cf7a170025b54ad4550"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "ede739c843d5b6b0ed1b0779909e57e9"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "072d37b339fb63616d8dd78cde55be2d"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "c9ae18f8de4eff78276947be88d4f15d"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "6abb4542911afd756bba108a9d149181"
  },
  {
    "url": "categories/index.html",
    "revision": "af10e59c2ed84c524483260b09becac6"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "376705012b6d3fee903b3ddd5abf61db"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "6489e0341912b172b552771bc2a1b3d5"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "4bb962cea13a40c176fddf979cf0bdf8"
  },
  {
    "url": "categories/React/index.html",
    "revision": "604c62c52ca3cddf1e6717159775f102"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "8f9dc5baab03972fd131f6fd56f3e354"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "c088c07c6db31be1a5d61ddc585c84f5"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "38b07c629e89447f5c36fd294c6dc011"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "7e128956e208d4ef65d9e88aaa0184ce"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "910225620f8fb8224fb1ac97609b0314"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "b1fa6dcd34c09c6fa69028fb000de3a1"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "65d75aa75fb6ba3b096dbc050dd073ec"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "a4532750a18393fe98ccaa9d9c619c12"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "4fa6ff6e3a511fd3147541f8b1770d3d"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "fad0a92790a6f5a4d8e161926d34a2d1"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "35106e9765fe63f018484db44c8ec2fa"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "7b057322082f45f1f7a240d639c26a5f"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "3d38e5ce08dac820d679c2251e770b04"
  },
  {
    "url": "components/iframeVideo.html",
    "revision": "2f78ab765c1075fe4d38efcf83907331"
  },
  {
    "url": "css/style.css",
    "revision": "d9a9e1caf64620c13250541b896cb433"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "25a20245d63ad5dbbe5d3994d1d4b43e"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "482d80c1dea1c33d86b4b98ceca5b829"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "fc4ed1d02f9223ec7a8ebdbe60cb89f3"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "1f7f51a256555e359a3c481e3faabf51"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "ba28dc11aaaa89c95fa9949d4f53ac6b"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "697a922f0dda3c52bffe131add07aee8"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "4cf02c151a33ec54b2a3f00dbaed368d"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "2a0858526ea239a0594ae1a59517c540"
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
    "revision": "b756829463ae1ff71b8d1ad9c96f5fc3"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0d6cb89d129e5337c641d564b77b9637"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "c27a484ea0a1a3595cd1cd64ee2e8f68"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "21a200613c43b8ae8a65d4c505257345"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "77e0049d94fd0840b2dd1e6ef1a78101"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "fc03757420ef521efa4351f8656e9a6a"
  },
  {
    "url": "tag/index.html",
    "revision": "30a698ac2a44ed43cc4312618419b579"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "25f89e7ebef66ed7852b5a4e43347553"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "68c444926e83b041bb3bace9444b0d84"
  },
  {
    "url": "tag/React/index.html",
    "revision": "70da9f9db945fa8e8813a329b6ef932c"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "07fda4705c542eb944d27098b035bfc2"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "974c2ce840fa32cd11fc579883afc1ae"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "26127403018372c7e80b3fa5ef341cf5"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "a052c4e72dba057290df65354b0a5762"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "722629c585efc07962d57a6300173f7e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "b5924bd7ca4499945b210ef64aa0afa0"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "1851ae3f97fc080148fda5def05f53c3"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "808369a7535eec4f1e4c24b532ea960e"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "2788cf6b20830bf8139389ff1c17d55c"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "894388bcb088fbbe2a6a9ad0742a3467"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "0057ad44aeb489f115ce7c346579276d"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "d042d437c697ce1addad214b4522a598"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "78b51b4bd613903417a165f5a5051278"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d9db45ecc786dc36e709861f68293f99"
  },
  {
    "url": "timeline/index.html",
    "revision": "f16e2c397643b7c6954a3817790c60b9"
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
