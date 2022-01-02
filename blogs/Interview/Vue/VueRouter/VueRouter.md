---
title: VueRouter 面试题
date: 2022-01-02
tags:
  - VueRouter
categories:
  - VueRouter 知识点
  - VueRouter 面经
---
## VueRouter
### VueRouter 路由钩子函数
```js
路由的钩子函数总结有 6 个

全局的路由钩子函数：beforeEach、afterEach

单个的路由钩子函数：beforeEnter

组件内的路由钩子函数：beforeRouteEnter、beforeRouteLeave、beforeRouteUpdate
```
### VueRouter 的 router 和 route 的区别?
- $route 对象
  - $route 对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query 对象等。
  - $route.path 字符串，对应当前路由的路径，总是解析为绝对路径，如"/foo/bar"。
  - $route.params 一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。
  - $route.query 一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有$route.query.user == 1,如果没有查询参数，则是个空对象。
  - $route.hash 当前路由的 hash 值 (不带#) ，如果没有 hash 值，则为空字符串。锚点\*
  - $route.fullPath 完成解析后的 URL，包含查询参数和 hash 的完整路径。
  - $route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
  - $route.name 当前路径名字
  - $route.meta 路由元信息
  - 路由钩子函数
- $router 对象
  - $router 对象是全局路由的实例，是 router 构造方法的实例。
  - 路由实例方法：
    - push
      - 字符串 this.$router.push('home')
      - 对象 this.$router.push({path:'home'})
      - 命名的路由 this\$router.push({name:'user',params:{userId:123}})
      - 带查询参数，变成 register?plan=123this.$router.push({path:'register',query:{plan:'123'}})
    - go
      - 页面路由跳转
      - 前进或者后退 this.$router.go(-1) // 后退
    - replace
      - push 方法会向 history 栈添加一个新的记录，而 replace 方法是替换当前的页面，
      - 不会向 history 栈添加一个新的记录
      - 一般使用 replace 来做 404 页面
### hash 路由和 history 路由实现原理说一下 (history 模式和 hash 模式的区别)
- location.hash 的值实际就是 URL 中#后面的东西。
- history 实际采用了 HTML5 中提供的 API 来实现，主要有 history.pushState()和 history.replaceState()。
- hash 模式
  - location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
  - 可以为 hash 的改变添加监听事件
  - `window.addEventListener("hashchange", funcRef, false);`
  - 每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了
- history 模式
  - 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。
  - 这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。
### VueRouter 中路由方法 pushState 和 replaceState 能否触发 popSate 事件
- 不能
- HTML5 新接口，可以改变网址(存在跨域限制)而不刷新页面，这个强大的特性后来用到了单页面应用
- 仅改变网址,网页不会真的跳转,也不会获取到新的内容,本质上网页还停留在原页面
```js
window.history.pushState(state, title, targetURL);
@状态对象：传给目标路由的信息,可为空
@页面标题：目前所有浏览器都不支持,填空字符串即可
@可选url：目标url，不会检查url是否存在，且不能跨域。如不传该项,即给当前url添加data

window.history.replaceState(state, title, targetURL);
@类似于pushState,但是会直接替换掉当前url,而不会在history中留下记录
```
- popstate 事件会在点击后退、前进按钮(或调用 history.back()、history.forward()、history.go()方法)时触发
### VueRouter路由钩子函数是什么 执行顺序是什么
路由钩子的执行流程, 钩子函数种类有:全局守卫、路由守卫、组件守卫。
- 完整的导航解析流程:
  - 导航被触发。
  - 在失活的组件里调用 beforeRouteLeave 守卫。
  - 调用全局的 beforeEach 守卫。
  - 在重用的组件里调用 beforeRouteUpdate 守卫。重用的组件。
  - 在路由配置里调用 beforeEnter。
  - 解析异步路由组件。
  - 在被激活的组件里调用 beforeRouteEnter。
  - 调用全局的 beforeResolve 守卫。
  - 导航被确认。
  - 调用全局的 afterEach 钩子。
  - 触发 DOM 更新。
  - 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
### VueRouter跳转方式有哪些
- router.push(location, onComplete?, onAbort?)
  - 想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
- router.replace(location, onComplete?, onAbort?)
  - 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
- router.go(n)
  - 这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
### VueRouter 添加参数
- VueRouter 传递参数
  - 编程式的导航 router.push
    - this.$router.push({ name: 'news', params: { userId: 123 }})
      - 命名路由搭配 params，刷新页面参数会丢失
    - this.\$router.push({ path: '/news', query: { userId: 123 }});
      - 查询参数搭配 query，刷新页面数据不会丢失
  - 声明式的导航 `<router-link>`
    - `<router-link :to="{ name: 'news', params: { userId: 1111}}">click to news page</router-link>`
```js
有两种:
query 和 params

query 和 params 的区别：

params 传参只能由 name 引入路由，如果写成 path 页面会显示 undefined 报错。
query 传参的话可以使用 path 也可以使用 name 引入路由，不过建议使用 path 引入路由。
```
### location.href 和 VueRouter 的区别
- vue-router 使用 pushState 进行路由更新，静态跳转，页面不会重新加载；location.href 会触发浏览器，页面重新加载一次
- vue-router 使用 diff 算法，实现按需加载，减少 dom 操作
- vue-router 是路由跳转或同一个页面跳转；location.href 是不同页面间跳转；
- vue-router 是异步加载 this.\$nextTick(()=>{获取 url})；location.href 是同步加载