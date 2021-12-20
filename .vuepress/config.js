module.exports = {
  "title": "前端学习总结和技巧",
  "description": "一个前端的学习小白",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "关键字"
      }
    ],
    [
      "meta",
      {
        "name": "robots",
        "content": "all"
      }
    ],
    [
      "meta",
      {
        "name": "author",
        "content": "hardingcheng"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "/css/style.css"
      }
    ],
  ],
  "theme": "reco",
  "themeConfig": {
    noFoundPageByTencent: false,
    valineConfig: {
      appId: 'vLLJkggojtircPXLrCt8zpk4-gzGzoHsz',// your appId
      appKey: 'TY6a9YjO8dWVQjfHssgGOvBe', // your appKey
      recordIP:true,
      placeholder: '来都来了，留下点什么在走呗....',
      visitor: true
    },
    "lastUpdated": "上次更新时间",
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "博文",
        "icon": "reco-message",
        "items": [
          {
            "text": "日常博文",
            "link": "/docs/daily-blog/"
          },
          {
            "text": "个人生活",
            "link": "/docs/personal-life/"
          },
        ]
      },
      {
        "text": "资源",
        "link": "/docs/tool-resources/",
        "icon": "reco-category"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/hardingcheng",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      '/blogs/Interview/HandwrittenCode/': [
        {
          title:'手写代码',
          collapsable: true,
          children:[
          '/blogs/Interview/HandwrittenCode',
          ]
        },
      ]
    },
    "subSidebar": 'auto',
    "sidebar":"auto",
    "sidebarDepth": 3,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "author": "hardingcheng",
    "authorAvatar": "/avatar.png",
    // 备案
    "record": '冀ICP备17014188号-4',
    "recordLink": 'https://icp.chinaz.com/home/info?host=flyinto.cn',
    // "cyberSecurityRecord": '公安部备案文案',
    // "cyberSecurityLink": '公安部备案指向链接',
    // 项目开始时间，只填写年份
    "startYear": '2020-2021'
  },
  "markdown": {
    "lineNumbers": true,
    "toc": {
      includeLevel:[1, 2, 3, 4]
    }
  },
  "plugins": {
    'reading-progress': {

    },
    '@vuepress/active-header-links':{
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/last-updated':{
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
          message: "有新的内容更新",
          buttonText: "刷新"
      }
    },
    'copyright': {
      noCopy: true,
      minLength: 100
    },
    "@vuepress/medium-zoom": {
      selector: 'img',
      options: {
        margin: 16
      }
    },
    "social-share": {
        networks: ['qq', 'email'],
        email: 'hardingcheng@163.com',
        twitterUser: 'hardingcheng',
        autoQuote: true,
        isPlain: true,
      },
      // 'ribbon': {

      // }
      "ribbon-animation": {
        size: 90,   // 默认数据
        opacity: 0.3,  //  透明度
        zIndex: -1,   //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      },
      "vuepress-plugin-code-copy": true,
  }
}