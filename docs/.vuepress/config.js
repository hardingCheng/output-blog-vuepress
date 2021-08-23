module.exports = {
  title: "前端学习总结和技巧",
  description: "一个前端的学习小白",
  base: '/', // 这是部署到github相关的配置
  dest: './dist',  // 设置输出目录
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: './logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'baidu-site-verification', content: 'code-8TFGBSAqmw' }]
  ],
  port: 8099,
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'JavaScript',
          items: [
            { text: 'javaScript日常总结', link: '/javascript/index' },
            { text: 'javaScript内置对象', link: '/javascript/built-in-objects' },
            { text: 'javaScript技巧', link: '/javascript/js-skill.md' },
          ]
        },
        { text: 'HTMLCSS', link: '/htmlcss/index' },
        {
          text: 'Vue',
          items:[
            { text: 'Vue技巧', link: '/vue/index' },
            { text: 'Vue源码', link: '/vue/vue-source-code' },
          ]
        },
        { text: 'React',
          items:[
            { text: 'React技巧', link: '/react/index' },
            { text: 'React源码', link: '/react/react-source-code' },
          ]
        },
        {
          text: 'Node',
          items: [
            { text: '基础技巧', link: '/node/basic-skills/index' },
            { text: 'Koa', link: '/node/koa/index' },
            { text: 'Express', link: '/node/express/index' },
            { text: 'Egg', link: '/node/egg/index' }
          ]
        },
        {
          text: '算法',
          items: [
            {
              text: 'js数据结构',
              items: [
                { text: '基础数据结构', link: '/algorithm/js-data-structure/index' },
              ]
            },
            {
              text: 'LeetCode',
              items: [
                { text: '初级', link: '/algorithm/leetcode/primary' },
                { text: '中级', link: '/algorithm/leetcode/intermediate' },
                { text: '高级', link: '/algorithm/leetcode/senior' }
              ]
            },
            {
              text: '设计模式',
              items: [
                { text: '工厂', link: '/algorithm/design-pattern/single-case' },
                { text: '单例', link: '/algorithm/design-pattern/factory'},
              ]
            },
          ]
        },
        { text: '面试',
          items: [
            {
              text: 'js',
              items: [
                { text: 'JavaScript', link: '/interview/js' },
                { text: '大厂面经总结', link: '/interview/interviewq' },
              ]
            },
            {
              text: 'css',
              items: [
                { text: 'css', link: '/interview/css' },
              ]
            },
            {
              text: 'Vue',
              items: [
                { text: 'Vue', link: '/interview/vue' },
              ]
            },
            {
              text: 'React',
              items: [
                { text: 'React', link: '/interview/react' },
              ]
            },
            {
              text: '其他',
              items: [
                { text: '其他', link: '/interview/other' },
              ]
            },
          ]
        },
        { text: '工具技巧', link: '/tool-skills/index' },
        { text: '前端训练营', link: '/zijie/index' },
      ],
    sidebar: 'auto',// 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    logo: '/logo.png',
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true // 默认值：false
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "/static",
      },
    },
  },
};
