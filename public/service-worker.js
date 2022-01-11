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
    "revision": "f146d1a1a21712b105268e1e38c966b6"
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
    "url": "assets/js/10.229005e6.js",
    "revision": "a3f51ce5649ce0871221f606963380f3"
  },
  {
    "url": "assets/js/11.52336685.js",
    "revision": "886ba366b66784a4ecdec9c9330de220"
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
    "url": "assets/js/15.3e6aa701.js",
    "revision": "30fc8d11faeceb064bf4d3d766d6bcbb"
  },
  {
    "url": "assets/js/16.ec95c6d6.js",
    "revision": "3d2d95b53ccd857e5cf39d3ae92d564a"
  },
  {
    "url": "assets/js/17.78bf8005.js",
    "revision": "15af2a32b496c45bd8741fe5fb918aad"
  },
  {
    "url": "assets/js/18.797d30b9.js",
    "revision": "5e55e038c2f5437391eef811f0f3b4d8"
  },
  {
    "url": "assets/js/19.ee72e67a.js",
    "revision": "6f8eb20e65145f3158fc75bf498b1119"
  },
  {
    "url": "assets/js/20.af52b6a9.js",
    "revision": "c04a7168432521bc5837c3bb149bead2"
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
    "url": "assets/js/23.38e9ca59.js",
    "revision": "9ae3965550316d30bc52d5fbf4d6e256"
  },
  {
    "url": "assets/js/24.eeeae3bc.js",
    "revision": "e108eb19a3064174feb8833de1bb3492"
  },
  {
    "url": "assets/js/25.0e83c58b.js",
    "revision": "42d153adbfab356e8c0854fd5051d45d"
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
    "url": "assets/js/28.5be4ce5d.js",
    "revision": "ff8fa26d8e483ce12387a5519308527e"
  },
  {
    "url": "assets/js/29.97f8f70f.js",
    "revision": "cf9f21ac0e74ef5d787f57787dfa29cb"
  },
  {
    "url": "assets/js/3.cb90e6dd.js",
    "revision": "d3b0c048759701a27bf2c51855a55227"
  },
  {
    "url": "assets/js/30.a31a609b.js",
    "revision": "8314125c5a0b02d1681117045a6f1a9c"
  },
  {
    "url": "assets/js/31.eff59b04.js",
    "revision": "27bc0391ec2304e4471b20972a6788ff"
  },
  {
    "url": "assets/js/32.6b372d85.js",
    "revision": "a8c506e56744879fca276c650979789e"
  },
  {
    "url": "assets/js/33.d8d95e49.js",
    "revision": "588a9f5243adbb51895acffec2fb6a82"
  },
  {
    "url": "assets/js/34.8a6a1e14.js",
    "revision": "7ebf879b0774cf37131828dd50ad3a4c"
  },
  {
    "url": "assets/js/35.4a4a46e6.js",
    "revision": "b56233a1013fd74856693ae644005827"
  },
  {
    "url": "assets/js/36.b812e447.js",
    "revision": "06d93485aaf0e9d97841084cac1dbcc2"
  },
  {
    "url": "assets/js/37.68934c3d.js",
    "revision": "e5be3bc0188884acc3d593c2ffb2581a"
  },
  {
    "url": "assets/js/38.dfa5321f.js",
    "revision": "a0036ef0181e02b521a16035ca7618d6"
  },
  {
    "url": "assets/js/39.cfdf0881.js",
    "revision": "fc4c2322717b2885be6c5ea84f8f9a56"
  },
  {
    "url": "assets/js/4.db65a195.js",
    "revision": "6b6f191bf96af3f49728a94604707143"
  },
  {
    "url": "assets/js/40.f9252561.js",
    "revision": "6d1ed83d61a8218d0c25e39da782c374"
  },
  {
    "url": "assets/js/41.58a1b36e.js",
    "revision": "a590ecaf703699030fa77290ccfec80a"
  },
  {
    "url": "assets/js/42.36603ff9.js",
    "revision": "eaab21b5f7387970c4bd0daf6e133f67"
  },
  {
    "url": "assets/js/43.2494efc3.js",
    "revision": "d798dbae1a55e69b886499431f3d8bbb"
  },
  {
    "url": "assets/js/44.d2632a43.js",
    "revision": "0bba78cc27c6109147be4b29da5842d0"
  },
  {
    "url": "assets/js/45.96e627da.js",
    "revision": "5cc5d9dfe354a720546c6e7eec938ab4"
  },
  {
    "url": "assets/js/46.7766f84f.js",
    "revision": "7b5530768fe325a74632980405a8f332"
  },
  {
    "url": "assets/js/47.cdc447e0.js",
    "revision": "66c2a264bac6872914b332f0b238a819"
  },
  {
    "url": "assets/js/48.6827ea98.js",
    "revision": "5618576dbdb09b3e46dc7908afe32c21"
  },
  {
    "url": "assets/js/49.60744e1f.js",
    "revision": "9ba4808c4e1e66d0823883893a2824f5"
  },
  {
    "url": "assets/js/5.205cc2e2.js",
    "revision": "41c8f0869aecccb94c2ddad68791837f"
  },
  {
    "url": "assets/js/50.f260715a.js",
    "revision": "f0c8467a59594e16653abd11caf205be"
  },
  {
    "url": "assets/js/51.f6517070.js",
    "revision": "333c99fe10ffe3970d1ddd8dcadcb1ce"
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
    "url": "assets/js/app.3ac7227b.js",
    "revision": "c84b54ff553ccbd0a6bc9414c375e5c2"
  },
  {
    "url": "avatar.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "blogs/Algorithm/basic-data-structure.html",
    "revision": "5e95707a83af611e60fa3a787ffbd85d"
  },
  {
    "url": "blogs/Algorithm/design-pattern.html",
    "revision": "29bc4bd8b1b9a3fae60eae8255e9207b"
  },
  {
    "url": "blogs/HTMLCSS/daily-summary.html",
    "revision": "334fab71cb87a827a4b74aa6f90c915d"
  },
  {
    "url": "blogs/Interview/HandwrittenCode/HandwrittenCode.html",
    "revision": "6619643c33fd20544113d38e925071bd"
  },
  {
    "url": "blogs/Interview/HTMLCSS/HTMLCSS.html",
    "revision": "37ec4a85763891d711cce30bf35c7f47"
  },
  {
    "url": "blogs/Interview/HTTP/Http.html",
    "revision": "6f7b513cbfe99e08b91780e9301e5738"
  },
  {
    "url": "blogs/Interview/JavaScript/JavaScript.html",
    "revision": "366b1cdf6bdf89c279b6ea76bf2eae52"
  },
  {
    "url": "blogs/Interview/Vue/Vue/Vue.html",
    "revision": "12233513baeeef35820c7636dbf7849b"
  },
  {
    "url": "blogs/Interview/Vue/VueRouter/VueRouter.html",
    "revision": "f985d5b53a599c2c5918bd3173c56e01"
  },
  {
    "url": "blogs/Interview/Vue/Vuex/Vuex.html",
    "revision": "9e8811ac521faebfb6ef8cec7e32fba2"
  },
  {
    "url": "blogs/Interview/Webpack/Webpack.html",
    "revision": "d5ea7a475a8fd0567b0bf3e5762b71d1"
  },
  {
    "url": "blogs/JavaScript/built-in-object.html",
    "revision": "17aa12bd9937a47e95d92b510d5f0fa6"
  },
  {
    "url": "blogs/JavaScript/daily-summary.html",
    "revision": "d9b11471772d8f8a6084343aa42c01f3"
  },
  {
    "url": "blogs/JavaScript/skills.html",
    "revision": "8d64123c48c4cd6f3fbeb6e152511ee9"
  },
  {
    "url": "blogs/Node/node-foundation.html",
    "revision": "bcd46ffa7de417ef26591214ed126fd3"
  },
  {
    "url": "blogs/Node/node-framework.html",
    "revision": "7adbb6462ef8514f7f5642ccbbf7eb55"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "e5252c5afd152870601542de5f09d532"
  },
  {
    "url": "blogs/PackagingModule/Engineering/Front-end-engineering.html",
    "revision": "1f7c5e1a951b9cd3248b667a498286cd"
  },
  {
    "url": "blogs/PackagingModule/Gulp/gulp-base.html",
    "revision": "b9899d1b9ff73ee19a52b22595dafe91"
  },
  {
    "url": "blogs/PackagingModule/Rollup/rollup-base.html",
    "revision": "d3b52d3e27d595df90c259c4f27499d3"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-base.html",
    "revision": "877ed4d04a09c207dca5cadab7f298a3"
  },
  {
    "url": "blogs/PackagingModule/Vite/vite-foundation.html",
    "revision": "983d1ee93120814b7709ba1938e8cbb3"
  },
  {
    "url": "blogs/PackagingModule/Webpack/webpack-basics.html",
    "revision": "5d5f5383d4b4ce4e5c78570dc5d7125c"
  },
  {
    "url": "blogs/Project/Vue3-background-management.html",
    "revision": "194bf806d97cc1218f79d1985aa1971f"
  },
  {
    "url": "blogs/React/react-code/react-source-code.html",
    "revision": "7fa14ef4a8da5d8c986ade0e66bbb509"
  },
  {
    "url": "blogs/React/react-summary.html",
    "revision": "b05f700df57bd0a3f6fb2ff081d86b90"
  },
  {
    "url": "blogs/React/react-wheel.html",
    "revision": "996b280218a9e59419d5fcaf73231e87"
  },
  {
    "url": "blogs/TypeScript/typescript-base.html",
    "revision": "23858185fff72c5d0b1308598e01640d"
  },
  {
    "url": "blogs/Vue/vue-code/vue-source-code.html",
    "revision": "f61ce660da55b2d4cd733f602d72b3cd"
  },
  {
    "url": "blogs/Vue/vue-summary.html",
    "revision": "54081b2e41dfca91993d864fcfcddf23"
  },
  {
    "url": "blogs/Vue/vue-wheel.html",
    "revision": "2a1d4d974ba54c698c19fa6ac50c7bec"
  },
  {
    "url": "categories/Gulp/index.html",
    "revision": "a20beade17ca5e9dd886e1763215468c"
  },
  {
    "url": "categories/HTMLCSS/index.html",
    "revision": "9be5c271d70e09b8812b5f409fac10bf"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "028b2cca28ab991dfd5a7b1d65a53c70"
  },
  {
    "url": "categories/index.html",
    "revision": "a1c32cadb039b965ace0dc1629cca62f"
  },
  {
    "url": "categories/JavaScript 面试/index.html",
    "revision": "a98068a8ff94aafd5e85afb6fcf0b0d0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a7fba2a364593510f0ebedf2bc5e549e"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "f149ea0a94abb5d6308276f70a3de168"
  },
  {
    "url": "categories/React/index.html",
    "revision": "3b2531df5b729bdb6b09eb3fdbbb8e85"
  },
  {
    "url": "categories/Rollup/index.html",
    "revision": "8b67f497fed951f3c5b00888b2d5a675"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "81e6d74375471ef3d1e4f552b256f88d"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "8c41203e4fdf4598773d697130605ae5"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "1667274dedb777a0e73eaca57c367c6d"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "891ab6ff1595f136caf66538213f7b7a"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "356888fe59a373fcefab6984239c6455"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "304f56082c3aa512c267105e350ab258"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "7d2052ceb17a216be5d92b9ed19eabe6"
  },
  {
    "url": "categories/手撕代码/index.html",
    "revision": "5273d18c9e1809692dafdebbff8cd83f"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "3659dea24c3f66e0b5f5ad32514ab622"
  },
  {
    "url": "categories/源码/index.html",
    "revision": "746451a5ba3c7fca68170116b6165e5e"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "ed6883b9d9001a6344553684cd91c812"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "1ea292bee1d4d5e91593798dfeb95528"
  },
  {
    "url": "css/style.css",
    "revision": "056ae41af5f8a78fe1185bf3c2ea9bbf"
  },
  {
    "url": "docs/daily-blog/api.html",
    "revision": "d28b6ff7b3fb85746828a0081e963473"
  },
  {
    "url": "docs/daily-blog/index.html",
    "revision": "06da97b0133c957e7b7a834ba89ec4e8"
  },
  {
    "url": "docs/daily-blog/plugin.html",
    "revision": "72a4f66702e5c2b2db42c06f33f3ecd4"
  },
  {
    "url": "docs/daily-blog/theme.html",
    "revision": "28aa6377c3b6fcef3e62dae9c8b553fd"
  },
  {
    "url": "docs/personal-life/api.html",
    "revision": "8530de8c5221f652ce414dc20cc967cb"
  },
  {
    "url": "docs/personal-life/index.html",
    "revision": "506983b5ab0c955bddd58c36e78a92bc"
  },
  {
    "url": "docs/personal-life/plugin.html",
    "revision": "69e69d3c9e5511222a2eeda89e3c0913"
  },
  {
    "url": "docs/personal-life/theme.html",
    "revision": "f21af59ce3bfa540c9640de91c9f9c6b"
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
    "revision": "374ea56b4f61a33364f9baf5d3693e05"
  },
  {
    "url": "logo.png",
    "revision": "60abc289dcbae411c0852985331d8380"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "48c61aae7d2298d8a1afd21e4782a293"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "e25b248c69dfa0ecd7ab3688bb75d58b"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "3b31ab12d4cfaeafff6a383cadb76ea2"
  },
  {
    "url": "tag/HTMLCSS/index.html",
    "revision": "f41cc2f790da57df63d1c1ee65cc5f42"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "cfb53db13d0066b4fe7cc33fea7ad3ce"
  },
  {
    "url": "tag/index.html",
    "revision": "99d164fe459f7bf19ab26dfc5e4b57d1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "5fca0316a12b7ccf3b0cc47136f004b8"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "cf8d7940f48cca67127fa34c7859e059"
  },
  {
    "url": "tag/React/index.html",
    "revision": "e425f3dbcd8d98dc5235803eb6a7eddd"
  },
  {
    "url": "tag/React源码/index.html",
    "revision": "2da1c956275924544937971726e88d98"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "e747a98107c23c292521ed6d2530f2d4"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "3d9519f24c43b51e9f2f06c9c76a8f3f"
  },
  {
    "url": "tag/Vite 基础/index.html",
    "revision": "8784a989b14f0958b52e2dc19d901781"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "6d5d176e94bbb00bb70a9f4c3e847417"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "1738f4600234cbf3d0dbcbe993ffee94"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "b374ed09227f78dc5fa1fedc36516813"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "bc6e127350dabb3500dc58ab0a202f31"
  },
  {
    "url": "tag/Vue源码/index.html",
    "revision": "1dfc5fa6e04640c50fefafe4ad5bdd29"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "b2ef3a2adec5e9806b24837cc1e14fb5"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "80efb0f548e1df205b0ff29c6a2ebce9"
  },
  {
    "url": "tag/手撕代码/index.html",
    "revision": "b553bde6321335d7c6c465dc0f5d1584"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "b6f35f4b72e1c3cb7f55a067bd60f384"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ef5799b4aa8792ac37766a0d3578a218"
  },
  {
    "url": "timeline/index.html",
    "revision": "0afcd07586f9d68f85313c4a8a8a6d4e"
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
