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
    "revision": "3e583e9d250e15f08068865edc00e933"
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
    "url": "assets/js/11.b7067d6b.js",
    "revision": "60459eb502a796ddba6617318363d612"
  },
  {
    "url": "assets/js/12.bf967512.js",
    "revision": "f57afae7179be7a9163f726624f10db6"
  },
  {
    "url": "assets/js/13.b8acfb06.js",
    "revision": "1e8631fcfea6c93aad9daf4ba87c70c7"
  },
  {
    "url": "assets/js/14.8f21ac80.js",
    "revision": "8b26a6d52edd169df2b91da30998b871"
  },
  {
    "url": "assets/js/15.14131a36.js",
    "revision": "c4a31bcdaf2f0ce43082f9d2f9363bbe"
  },
  {
    "url": "assets/js/16.3beb47ed.js",
    "revision": "9aca7df259ce07342770f90aa287704d"
  },
  {
    "url": "assets/js/17.0223d7b1.js",
    "revision": "ccf4389d13d4099d94eef41ac25698cc"
  },
  {
    "url": "assets/js/18.7592d066.js",
    "revision": "94ed057a46b614be8aa820277049e9c4"
  },
  {
    "url": "assets/js/19.e5f04b68.js",
    "revision": "f2d9f995f0808f34ab2174ddab671c4a"
  },
  {
    "url": "assets/js/20.6b4df944.js",
    "revision": "a47bf74f470fd8c25d009877380a428e"
  },
  {
    "url": "assets/js/21.d40eeb86.js",
    "revision": "c1b0bf768d463575804079ec2cdb355e"
  },
  {
    "url": "assets/js/22.da26c99a.js",
    "revision": "018844f60036ef53987f716ebd607dd4"
  },
  {
    "url": "assets/js/23.38e9ca59.js",
    "revision": "9ae3965550316d30bc52d5fbf4d6e256"
  },
  {
    "url": "assets/js/24.8ad18d38.js",
    "revision": "7b35bd5b807523efd3c964fa2099e639"
  },
  {
    "url": "assets/js/25.72bcf39a.js",
    "revision": "12c784c9daf301ff26fb32f508ecd9fc"
  },
  {
    "url": "assets/js/26.8a7821ca.js",
    "revision": "4e01e06fc46ea0420b3660df0c841494"
  },
  {
    "url": "assets/js/27.c1671e2b.js",
    "revision": "1e4488338fd3c17878042b0c4b1733aa"
  },
  {
    "url": "assets/js/28.ffa759d1.js",
    "revision": "dec08fbe76bcd5978a09667604055aa8"
  },
  {
    "url": "assets/js/29.98e4dcad.js",
    "revision": "0e9f16b2493d27dd5f557d6ddbc99c4b"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.61a89a6e.js",
    "revision": "c3bedb3974d73855f9b10078c9d3a40a"
  },
  {
    "url": "assets/js/31.cdb7755e.js",
    "revision": "05b41aa6ccb2b57626d36616c1e5a739"
  },
  {
    "url": "assets/js/32.1bc93a26.js",
    "revision": "66bc9def2a24a1202ba488fd3ed4033f"
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
    "url": "assets/js/35.6078dc01.js",
    "revision": "a8de6a2336be9cd039db154a1585f573"
  },
  {
    "url": "assets/js/36.0ac1fbd1.js",
    "revision": "8103c72048ff1da727cd69a59d4c0870"
  },
  {
    "url": "assets/js/37.1a01e49a.js",
    "revision": "e0d21778bb20f93f5b23f0e0fa8872c4"
  },
  {
    "url": "assets/js/38.1a3502b4.js",
    "revision": "35adb6d21c5e1971e9a00634a266fa26"
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
    "url": "assets/js/42.ac5d5e90.js",
    "revision": "5f8b5f8a9ca4670e584545c9f0aef38d"
  },
  {
    "url": "assets/js/43.6c8382b0.js",
    "revision": "2d7d9329cda9843d1ce9c3e23fc705b0"
  },
  {
    "url": "assets/js/44.4660a0fe.js",
    "revision": "0007c0ba715627b7db6464d744eb8657"
  },
  {
    "url": "assets/js/45.bd066118.js",
    "revision": "d459570050b627907cf67b775cc2a873"
  },
  {
    "url": "assets/js/46.147a7ce4.js",
    "revision": "f998516f8feb8af43d0b06f136812d9e"
  },
  {
    "url": "assets/js/47.d25f4c27.js",
    "revision": "2751d3874209783841371982035f6362"
  },
  {
    "url": "assets/js/48.642ad078.js",
    "revision": "5ac68b22ea08bedeeb137c1673c78e69"
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
    "url": "assets/js/app.ad3cedd0.js",
    "revision": "a30a78c706d772fd01617adc0a8e9d3f"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "9c00e9acb874053210a7f0bf781ff67c"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "b510fc954fa16e792bd211a930374934"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "e1ae7c437d05f8776e37a425c4a9f49e"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "14b3e5bf3a5b9e541f6d59607816e14e"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "d4836c9df49aa173d70bca71461ac05c"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "8297caa7664d84e49c1061aa884c8808"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "831e6929988080e9c3d2c0e9209581a8"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "362d4878fcc492c865c20aa03dc51a5c"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "bfc108590d8ccb2ef4615b2938c516cc"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "3e6c545d791675c790c756a740e55424"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "b6987a3d676f7d853805395f87b1d438"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "8f40ad6f9c1538f0640ac3f208f40bfe"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "332efc172657063ff6175a28ad007c02"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "35a19b5ac96b96d76bd1a95a71912105"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "8b2af7555b889f533fd16796ecc04ba0"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "5464801076c3ab11c3c07bc63ea8e118"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "79e94a5a4634b5b3e1dd90a0e6e3fe21"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "89593e79b1abbfdc7d9bba6fc24153f4"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "9b11bf54925269d45c5c1c8ddbf40521"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "95b7b087a87e1f15a3d5cce1c961fb8c"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "d09ff505ee06cf7c90584c30b9f8bccc"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "6d705c4f63088d375dcee71073f9e0ff"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "15601588563b898caa278a6f9bb561ad"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "d7e38dac5f3f46a5b80fbdccd2c14ce5"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "2678342273fdd320355bd7b640741ef7"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "e51943256038707a6bf12b80f77deded"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "724bb53ab8f46931bf567f57f138a01d"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "129c6123c271683f6b896ce0955669c1"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "a82e4df46ebad11df8be7b5214bebff9"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "92f4305ba52ece66674585738c181abd"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "5109d6d6cc9c96888ec4906b643a51b8"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "83ad1aa85af245da1f66b0ad7ff3c113"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "9378ac97f5f978b9a370bf3ae1f06aee"
  },
  {
    "url": "categories/index.html",
    "revision": "1e9883f8ffff487ecb27552e377a1a8e"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "dd79dc3cc99240845ca16438f5e44cce"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "147ad5843afa8f67b9f893bcc345279a"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "4f9e6ccdf63130a493b3ca85a53edad7"
  },
  {
    "url": "categories/React/index.html",
    "revision": "d43f65d4f5461d5c2593bc895a613c47"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "c3ba2b5b8040a7c193594fd78d99f6b3"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "22e819c64875340c01928742e67ce949"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "3e195347aca80d8775500633036f8b2b"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "9cc69f19ad34b71230c20c566df846a5"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "8be3354dd5f84229387e0e75549df30b"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "d0feb8e35927073534579c6f73f44222"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "c4882fb30e8893b067ef72aab5414978"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "79cd4e691c3ae95f65e07fffb3f205f0"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "d19c6b6d6fc610241c34244922c5e064"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "b51d41382fe73e0ec73e62eaeca81341"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "c121ace153fba1b8969f328ea85b7c27"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "e6f176d33e12bfe43c7bff3b542e406e"
  },
  {
    "url": "css/style.css",
    "revision": "056ae41af5f8a78fe1185bf3c2ea9bbf"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "a08b172233efc1153c10369cc4d776af"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "af47fe240382f1df4b87dff50a697b1c"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "57d2070b3c090ab622fb5998029948eb"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "bc3f51742ab09a265ad8a406d4eb10c6"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "489e4c2fc5f4c4958b8e87ede0a8cb15"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "9b18f6be36f0b33fad1ab8a8dee8495a"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "a1f81fa061d2043bd430c3fd370c5dce"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "438b697a390cf56b1e07415e30f02d95"
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
    "revision": "4bfebe98d57b1c6292e4094a532dace2"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "5e705828ccda9d23b575107d9c8f412a"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "11aa224082bc830084774e3ced5ecf5b"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "e2a5f0bc4f8d80d59cb2f22fb576fb49"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "39a8fc48660d1479db522ddc1da4be57"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "8416b6dd8a00b34ce97eb6f7074c2a17"
  },
  {
    "url": "tag/index.html",
    "revision": "0c1cae40b3c0e3cd2e5ead3e7f34b47b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "84a4eef11353563b235264fba3e9a3b3"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "8cb31dde75680bef8507f7418034777b"
  },
  {
    "url": "tag/React/index.html",
    "revision": "3b6688b0db9cfa82c1464374d7904fb5"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "99bbb328c8d80b1d2b14d43104ab9c0d"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "d388254e9f54c48f461f500dad4ff63a"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "29f8f713e0f089cc04de361820e8a1fa"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "ec09517d603daec36c166f30c0f8068a"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "93f1c8bad5d086d54e5ab915a01bde3a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7c07f9663a6624a3d109889fc1a6333c"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "184f4401c17e68b2f117271b1399e781"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "b0522c98ba1a2eb37227f1b0e721db5f"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "6d65b382724d5fd07738f88dd65943ab"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "0dd355b4325548bf575e6379afa14d4a"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "8ceb308239cdf284252a8ecaff691fc1"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "829ac9370d5df92ae1e9e01fa4e20547"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "81647db9fa6e6bcbc56fac3cbd384c9e"
  },
  {
    "url": "timeline/index.html",
    "revision": "66f4fbd0ed2848c7220487d75d13f028"
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
