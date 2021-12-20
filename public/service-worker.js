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
    "revision": "a25daf4ff0bb4c76139f697165a8af64"
  },
  {
    "url": "assets/css/0.styles.509c9822.css",
    "revision": "5176d63ca5aa9fdee379d4b556126811"
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
    "url": "assets/js/1.90a9a656.js",
    "revision": "0cfab839a70c61352cc4539313ad5956"
  },
  {
    "url": "assets/js/10.6afe8597.js",
    "revision": "30bde1a3348764f390845b9040620974"
  },
  {
    "url": "assets/js/11.1c3e66d0.js",
    "revision": "6cafa40773991f88d0458ccb799aae17"
  },
  {
    "url": "assets/js/12.48175f4c.js",
    "revision": "9c05aa7d2e23d92d8711adb3d3645e98"
  },
  {
    "url": "assets/js/13.d8ec1e2f.js",
    "revision": "8f72d4185474bcdca4e86e5e16f37315"
  },
  {
    "url": "assets/js/14.acbad16c.js",
    "revision": "26ab047a7d44a8d081e47056d65d729f"
  },
  {
    "url": "assets/js/15.e110b3b0.js",
    "revision": "621c73f4280bf31480499861298be465"
  },
  {
    "url": "assets/js/16.191592d2.js",
    "revision": "e040812b9779ad5b014f940b0df8f384"
  },
  {
    "url": "assets/js/17.06cdf082.js",
    "revision": "c02ed9ed653bcd7d46ec8c99a7aea874"
  },
  {
    "url": "assets/js/18.6c3c69bc.js",
    "revision": "d830dfc4987cc84590c0ab3ab9c00470"
  },
  {
    "url": "assets/js/19.26a20ae9.js",
    "revision": "af72f44902168365aef1cb06b2e9ee18"
  },
  {
    "url": "assets/js/20.75bdb9ed.js",
    "revision": "9efed4b8a95a0ce2d39f06c297013065"
  },
  {
    "url": "assets/js/21.8e6e9516.js",
    "revision": "d693fcd3e219bf051907fe6882d29d4f"
  },
  {
    "url": "assets/js/22.d01b16b2.js",
    "revision": "4c67d21915e364faa4b095a40d13f03a"
  },
  {
    "url": "assets/js/23.8fb9e9dd.js",
    "revision": "f444bf904d18ec63243179117c738dce"
  },
  {
    "url": "assets/js/24.4a0a1e98.js",
    "revision": "dfd7495cbd82d42cad871c42d301b506"
  },
  {
    "url": "assets/js/25.cfa95dd7.js",
    "revision": "81caea1d5ac0b27ff4c2b1a74e1f53af"
  },
  {
    "url": "assets/js/26.0939845a.js",
    "revision": "de3527e878ec42882eb9617dba7eb352"
  },
  {
    "url": "assets/js/27.9140dca3.js",
    "revision": "b55ad6696ee447de9ea8b86ca2219c5a"
  },
  {
    "url": "assets/js/28.f967ed22.js",
    "revision": "35c035d6cf29916fea0ddc32e9784260"
  },
  {
    "url": "assets/js/29.c9d5a2de.js",
    "revision": "60904f9b7054ae0d29be19f9cb684ef2"
  },
  {
    "url": "assets/js/3.d9b7ec42.js",
    "revision": "99f08d7c6873ec5949a22c7bcc022a07"
  },
  {
    "url": "assets/js/30.48a81797.js",
    "revision": "dcdacb9a6414b6d518dabf99deb831c5"
  },
  {
    "url": "assets/js/31.8d10a6a7.js",
    "revision": "1ce8e9e4d7cec716836e835a6faa84d0"
  },
  {
    "url": "assets/js/32.871894e7.js",
    "revision": "267ee1bc147871d4e148f194075dce98"
  },
  {
    "url": "assets/js/33.2edddc92.js",
    "revision": "1cba0eeaeeee036f97f17fa2c9d7f7a4"
  },
  {
    "url": "assets/js/34.3577284f.js",
    "revision": "5918662f6c02481470142e2353676ec9"
  },
  {
    "url": "assets/js/35.e5ae7143.js",
    "revision": "0c3b17d18994315e2557f7df35c5d93c"
  },
  {
    "url": "assets/js/36.c34b8587.js",
    "revision": "54649d4b2df002d2b7cc8bd31ea6767a"
  },
  {
    "url": "assets/js/37.60ae11fd.js",
    "revision": "f147ee3e8d3bd11a57753bf56646ceda"
  },
  {
    "url": "assets/js/38.691d4347.js",
    "revision": "111513592730fc812e58e1acac86d2dd"
  },
  {
    "url": "assets/js/39.a5a49688.js",
    "revision": "abd4bf717fabf08ec527e0b047f55a37"
  },
  {
    "url": "assets/js/4.4fa2ba70.js",
    "revision": "bf6b624cdeda157d6a25d3cf330084a0"
  },
  {
    "url": "assets/js/5.cfcef1b0.js",
    "revision": "d7b4c851776462323764735341b0936a"
  },
  {
    "url": "assets/js/6.4762507c.js",
    "revision": "c3344d8e1804a502e1254c2fe6cbe4cc"
  },
  {
    "url": "assets/js/7.c455bcb9.js",
    "revision": "55336033049cf5030fe9c906374def11"
  },
  {
    "url": "assets/js/8.992a43df.js",
    "revision": "2611e4631ba49fad07a2310845a7291d"
  },
  {
    "url": "assets/js/9.b5f972bd.js",
    "revision": "ef1b8ad2a503786242747e9d930bb9c0"
  },
  {
    "url": "assets/js/app.22fbb967.js",
    "revision": "638570344b91a115fd2cd4825c4400a2"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "1e438bb9c338de3382aaf43da16ae827"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "48562fa8bdac7c78572c275358dc2d4d"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "a2a0a3b8aa6d74cde2c6298ecff571db"
  },
  {
    "url": "blogs/Interview/HandwrittenCode.html",
    "revision": "5eb32aee5a550f5d23662edbf7cfaabc"
  },
  {
    "url": "blogs/Interview/HTMLCSS.html",
    "revision": "6f0be64986eaf6e8d1e1751c21517535"
  },
  {
    "url": "blogs/Interview/JavaScript.html",
    "revision": "e9199ac3fb06e32574967e89e8b1f24e"
  },
  {
    "url": "blogs/Interview/Vue.html",
    "revision": "e786e8bf3639e96216773cc47c1e4dad"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "914887b1986905de07fcd86128a990cf"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "2f78375bc50b5b57c5ce7f89ec925f2c"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "c941aae24384fe6693493dab7056053a"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "057b7f807325a9cf37708204dac3fd1c"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "bee0de3276e6bb2543fb8fb1849290e3"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "b833450f51358495a8ef0c1ee97fab94"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "0684966c61ed914f6d7a9750f51c4ca1"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "1441f226948cd273a3c3baaf2b54f347"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "b8f6db128b9625301a327d0971cc1feb"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "5a3083656ec1c66b8624cfafb7dc3568"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "2371d2ac60324a9f856b6d0195fa0ad8"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "6b757463e9de78b2b6598133beda36a6"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "55ddaa7a1d3458df61b4c966b44fefa1"
  },
  {
    "url": "categories/index.html",
    "revision": "0e060837665f9ab231cb961121b3b86c"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "c21fca2ea43b6862e9641e7f00b6bb4b"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "9a1f6af3fb4989b475cddfca1804e50e"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "e56299845b85f3d16c538b35ed58123a"
  },
  {
    "url": "categories/React/index.html",
    "revision": "1dcca33b9c810055d9480375ab9fcf79"
  },
  {
    "url": "categories/Vue 面经/index.html",
    "revision": "a943dabcce11c3399295bd209f169b3e"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "ffe62efc3833819dc9735d0f450c19e9"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "2e1a176c4166d29f2e7ea49a884a6c71"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "af63833c39299160798a48daaea46ab0"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "d16dc911fb21ca579db39abf4366507e"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "fabdce4aade3a87c04aa69e0f2d7fb2e"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "5f9a0261a8e88b7dabfa0ab93d32e9cd"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "b289846d277e993ef5cb4e7383209694"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "707a7f400ab5ebbdff0bfe0d6a1e7233"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "e3497d87c8ad2ead057a3b95a2af5502"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "09c96cd839b5c891187c32817a639e9c"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "6340ae26ebd52d3abf540026ea9717e0"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "8f501521e7de0d94c307ce117717b0b7"
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
    "revision": "e0f8b7fa0d75795b65c45c44db66f866"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "6dca5a1ac4b4e4abb52812f516eb73b3"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "b1a8fffd80417dac94890dd3cd356f7a"
  },
  {
    "url": "tag/index.html",
    "revision": "753245ad886156f863d90b82a89089c6"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c3d2a8bb96975043251b4b023c6f3997"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "462da10992d79c4f74c896f6d68bac7a"
  },
  {
    "url": "tag/React/index.html",
    "revision": "7e2066b9378781f5d78987154a0715ff"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "d0845820cded65e9620709a5deb56037"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e15fd3f8fe4b20bfd9e862cda0baaf81"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "a29cf4dde459038655df99adb8f2844c"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "0376e1ed49dc2041a0492cc8cfe87324"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "b345363aa97aa2dcc6d786d5d29f6175"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e48da43f9e35a43d7f5e18789fafa4e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "67e1eac0e359796061b7e90177c523ad"
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
