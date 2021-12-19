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
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    noFoundPageByTencent: false,
    valineConfig: {
      appId: 'vLLJkggojtircPXLrCt8zpk4-gzGzoHsz',// your appId
      appKey: 'TY6a9YjO8dWVQjfHssgGOvBe', // your appKey
    },
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
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
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
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
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
    "lastUpdated": "Last Updated",
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
    "lineNumbers": true
  }
}