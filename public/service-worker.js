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
    "revision": "ece7a629130af3e78ba4b8b9eccc1a0e"
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
    "url": "assets/js/11.52336685.js",
    "revision": "886ba366b66784a4ecdec9c9330de220"
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
    "url": "assets/js/15.e4353cae.js",
    "revision": "2a63e1eece39e53b3150ef729243cfa5"
  },
  {
    "url": "assets/js/16.625670c9.js",
    "revision": "6d7b40d3dba62072dadc303ed597cb37"
  },
  {
    "url": "assets/js/17.46a0aa72.js",
    "revision": "94b5d2d2f7431f4c86c5046a068a5183"
  },
  {
    "url": "assets/js/18.a16a4818.js",
    "revision": "174bf69b46096ebdb1d32b5b84447d8e"
  },
  {
    "url": "assets/js/19.89f5af21.js",
    "revision": "b42953ab50a65458af97a8643f356b71"
  },
  {
    "url": "assets/js/20.43e5ed0f.js",
    "revision": "78a539469a8b40389666fb55aad7e3fd"
  },
  {
    "url": "assets/js/21.e32b45c9.js",
    "revision": "802a72ba3461b60aeaa7dfc84bbdc979"
  },
  {
    "url": "assets/js/22.242d0e56.js",
    "revision": "3c8de847efcfb0ce01be10df30522700"
  },
  {
    "url": "assets/js/23.b77a6634.js",
    "revision": "438fff83182b5aa1f757fee3f383ccd3"
  },
  {
    "url": "assets/js/24.bcd6f4de.js",
    "revision": "3372b50a0d02b0770a80a6f25fb750f6"
  },
  {
    "url": "assets/js/25.8fd72330.js",
    "revision": "9058c35483f21af21819fab67018204b"
  },
  {
    "url": "assets/js/26.939e0d82.js",
    "revision": "a90a78ef733715eb1222cf0ebe45e1bb"
  },
  {
    "url": "assets/js/27.ef135e53.js",
    "revision": "36e36f2d728dffa5200bb95052d103d5"
  },
  {
    "url": "assets/js/28.84b667ae.js",
    "revision": "ef0da662c30827651dc88834739f6af3"
  },
  {
    "url": "assets/js/29.2c16ba56.js",
    "revision": "1c1989d2214cbc00c1cc60309f0b97d5"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.b483e8f4.js",
    "revision": "a614e2584ce37713a49a37a9da2303b6"
  },
  {
    "url": "assets/js/31.186f40ec.js",
    "revision": "e93a541c29cf122b3d83ce9c5e68b037"
  },
  {
    "url": "assets/js/32.3acccc12.js",
    "revision": "cce7411bd05db5f22c98d61bddc7909a"
  },
  {
    "url": "assets/js/33.b083c583.js",
    "revision": "7f4e10146256aa547854b51b0c0fbef0"
  },
  {
    "url": "assets/js/34.c3c720e3.js",
    "revision": "a3e4f7a54306fe757d327329966029c2"
  },
  {
    "url": "assets/js/35.17b21bad.js",
    "revision": "5e2ad624e40a26e08cdb29c525709e8f"
  },
  {
    "url": "assets/js/36.33ed7206.js",
    "revision": "621785aa7c067248fd207d3b6c9addc2"
  },
  {
    "url": "assets/js/37.84f66573.js",
    "revision": "6ee924913f2b6fd168afa1c6de1221c7"
  },
  {
    "url": "assets/js/38.1a3502b4.js",
    "revision": "35adb6d21c5e1971e9a00634a266fa26"
  },
  {
    "url": "assets/js/39.df9d9e9b.js",
    "revision": "add22ad468d19a584b17e66c5c6773f1"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.df3b21e2.js",
    "revision": "f212e0d5e835411d016c4b810cc586d8"
  },
  {
    "url": "assets/js/41.edb6d1cf.js",
    "revision": "dac8385599a5ea90e43b2aeb9638491f"
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
    "url": "assets/js/44.cac96795.js",
    "revision": "e3dc73f5ea97a98395984d75320fc945"
  },
  {
    "url": "assets/js/45.14f1eb9b.js",
    "revision": "c27123930ff0b19dd1d7bdf94a301f87"
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
    "url": "assets/js/app.bd9435b6.js",
    "revision": "bbf405de2cd04ec0e656063d40cece8f"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "43d47e76969e3d5d513950b9015a07e6"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "10879d59c52bd8269c66de0f0099c553"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "a94ddc5c16b15b6136c8bcb712d4ab24"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "2fb5e98cf06c2c11d5e3b8ab97c6567b"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "8ae2477818f32c4bd2cfc88b8791ac65"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "9932fbaebbcfb2c71e7d3cf0a455a63b"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "f292f710eb845017eb2bf9a4693db4a9"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "8b6852cdf6a46b91bc602df057d54ef8"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "a2b128a2b8c7c1008b5d454637ad7fc9"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "998a645e39399ca627b5b328a037c0a1"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "6463d52205a77d07c4222654a8e63ed5"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "7fe992a73e8ec23063d44853b3445066"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "2188180281c16ecf155aeb80e6569a4e"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "901f7c9c77dadb60f68674b55c4bb514"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "03452ab246bedf72bf2b59602d6b7994"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "e155bc18543019179d5fb0a61d0322aa"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "65792036028bee44f5f44e57617c3eac"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "10d6abc3ee17ecaf5072d89108772d63"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "63caeaa398bdf4b1c26b22b8e22fc3cc"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "21e80067eec750083187893a1849f105"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "683d04e9e7ee037f9d88c08920739717"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "6d0e3d5aaa27d5e9bba46378c55f02a7"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "1be9c98a3153444bb1846d90b40fe376"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "2289c72d80629a3b893088d002444125"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "5b3f60c8e0c5f307f995f3e3af5503a6"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "6028268eccfd642b0fd3f899b34cb857"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "b16704fc1ea7127c2297fbfc67938e31"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "1044f2855cfcda7b7e6cc1ef90204104"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "da3bbcf80b803175dc8ce120385948fe"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "c832b5882e567634d4878b88d5866ebc"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "45ae4ce42333a93e81dce63497727014"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "2b930d61e15fa10a31131b7b8b3ef711"
  },
  {
    "url": "categories/HTMLCSS知识要点/index.html",
    "revision": "4f8172b398ec2d57bfafc31bc0794398"
  },
  {
    "url": "categories/HTMLCSS面经/index.html",
    "revision": "3cb453f29cc8505a58bbf1e5f96d2349"
  },
  {
    "url": "categories/HTTP 面试/index.html",
    "revision": "51c2f2a4402cbc966ab2c66a76ce018d"
  },
  {
    "url": "categories/index.html",
    "revision": "6f78d55512eb9d68c8dd33a88b18325a"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "a3162c2369e2d6acfa8a66faa2b3de5d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8cdfd6c1f529092790a647d25aaf64c5"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "bc50f28c7df991f60a177f91fe00a235"
  },
  {
    "url": "categories/React/index.html",
    "revision": "39eb05fe7da6c43fad30a6db9a3c0757"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "2a1dfb79d9588b2d39ca645a01631e04"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "78d855b7d1d8bd3c834f37eb076c68d3"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "53053211a6f99ae8b4c3a49b815ddae3"
  },
  {
    "url": "categories/Vue 知识点/index.html",
    "revision": "93b885cc4850b890c859a18dd2145293"
  },
  {
    "url": "categories/Vue 面经/index.html",
    "revision": "e987fba862fdde62ecd9134433780576"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "4e0b375946f7a02bb7dbec6fb99cb218"
  },
  {
    "url": "categories/VueRouter 知识点/index.html",
    "revision": "9fe9bcb0278bed0e2ec61bed51b5d984"
  },
  {
    "url": "categories/VueRouter 面经/index.html",
    "revision": "7be4c6ccd7f52d9f647decdb1113a5c8"
  },
  {
    "url": "categories/Vuex 知识点/index.html",
    "revision": "da852d8d936054dd20a102829376ea62"
  },
  {
    "url": "categories/Vuex 面经/index.html",
    "revision": "e1ccdbe1529976d4fb3d1758d061d86d"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "b138b0e183d0995b885e98749e623cc4"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "faca1324f752ca032ec8fcbaf58fb778"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "9ca9aabfa8d452410b2f2096ca84acb8"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "55845bf88776c1aee3a859caa641bb48"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "cf989c902b8ac6bb9ddf01bc8611637b"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "39385e81b01e6f2c3f0b3027f3d6908d"
  },
  {
    "url": "css/style.css",
    "revision": "2c0da462209a604aa96abd01d1e62eb4"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "b45210a39367b1f1b0a2f00141543e29"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "ab55c173117be1b0a88795f5f0125853"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "5d31fc5859d2f9e22fe87297593099d9"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "63c0bc700f8fcc807f7017af3630025b"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "37a11bac8e35a9a17e7855bdf9f13fbc"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "7f0fb7121f18df88dba078b30ac12368"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "c293461c578fefc54717066198c0f53c"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "a0a8207ab610531cbb230d2a406bf765"
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
    "revision": "68ea44aaf64d206d019b38abeed01924"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a4e61ca2532de7a92d3fddaa66857712"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "38e4fea86a9f657087dc135fd35fcd65"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "d2c9e0124d84bf3b26260a17abec0677"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "eb5cee0fd02918f0854c2d7a239c364e"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "b0858cbe530f5af5ec5fe45ecd38d7cc"
  },
  {
    "url": "tag/index.html",
    "revision": "a149e3a0c4e7764507c8d80fc513da1d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "03a11eb0790e1818826fd3e52378384f"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "c189b2aec2a5a9b7d4605b4d2990374a"
  },
  {
    "url": "tag/React/index.html",
    "revision": "f815d702d49047a2aacea4f88e12f1c7"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "33c3b862651a52d86f429b7d68497253"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "7b68883233d7a85e90093904119ea1a1"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "27c644f6db3cb8165770ed73745911f5"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "a362ed08430ac1eb334d7423d5766023"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "51cd36985b3453969a00d6877d6f8017"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "cda8bfcbc0755828e0d44500360d2c5a"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "9eb554fc1b8870bae6df66462f4696f0"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "e0af02cd3456e775b1f2b1f2ad55acb3"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "1721f9bc3cf9d78334af915d7cc8cd95"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "8a33458e7f8c5ae96ba9977c8ae9f02e"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "211818baaba270a7cd12aaae81776e79"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "c2952d16729eba5c410d573a20c1efbf"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "60333117b50b93c47aa502bc755b99f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "e17402864038c1cee961a6bbd523c842"
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
