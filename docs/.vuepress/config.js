module.exports = {
  title: "前端学习总结和技巧",
  description: "一个前端的学习小白",
  base: '/', // 这是部署到github相关的配置
  dest: './dist',  // 设置输出目录
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: './logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  port: 8099,
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },                     
        { text: 'JavaScript', link: '/javascript/index' },
        { text: 'HTMLCSS', link: '/htmlcss/index' }, 
        { text: 'Vue', link: '/vue/index' }, 
        { text: 'React', link: '/react/index' }, 
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
        { text: '面试', link: '/interview/index' }, 
        { text: '工具技巧', link: '/tool-skills/index' }, 
      ],
    sidebar: 'auto',// 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
    logo: '/logo.png',
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "/static",
      },
    },
  },
};
