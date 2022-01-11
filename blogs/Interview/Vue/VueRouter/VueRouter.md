---
title: VueRouter 面试题
date: 2022-01-02
tags:
  - VueRouter
categories:
  - VueRouter
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
- 客户端路由的实现方式。
- location.hash 的值实际就是 URL 中#后面的东西,Hash模式是基于锚点，以及onhashchange事件。
- history 实际采用了 HTML5 中提供的 API 来实现，主要有 history.pushState()和 history.replaceState()。
- hash 模式
  - location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
  - 可以为 hash 的改变添加监听事件（onhashchange）
  - `window.addEventListener("hashchange", funcRef, false);`
  - 每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了
- history 模式
  - 需要服务器的支持，一刷新就要去服务端去请求，不然就会找不到页面，需要服务端配合
  - 利用了 HTML5 History Interface 中新增的 pushState()（客户端） 和 replaceState() 方法。
  - 这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。
  - 这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。
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
## 手写VueRouter
### VueRouter实现原理
#### hash模式
hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，改变 URL 中的 hash 部分不会引起页面刷新

通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：
- 通过浏览器前进后退改变 URL
- 通过`<a>`标签改变 URL
- 通过window.location改变URL

根据当前路由地址找到对应组件重新渲染。
#### history模式
history 提供了 pushState 和 replaceState 两个方法，这两个方法改变 URL 的 path 部分不会引起页面刷新。

history 提供类似 hashchange 事件的 popstate 事件，但 popstate 事件(浏览器历史操作的变化)有些不同：
- 通过浏览器前进、后退改变 URL 时会触发 popstate 事件
- 通过js调用history的back，go，forward方法课触发该事件
- 通过pushState/replaceState或`<a>`标签改变 URL 不会触发 popstate 事件。
- 好在我们可以拦截 pushState/replaceState的调用和`<a>`标签的点击事件来检测 URL 变化
### 原生js实现前端路由
#### 基于 hash 实现
```html
<!DOCTYPE html>
<html lang="en">
<body>
<ul>
    <ul>
        <!-- 定义路由 -->
        <li><a href="#/home">home</a></li>
        <li><a href="#/about">about</a></li>

        <!-- 渲染路由对应的 UI -->
        <div id="routeView"></div>
    </ul>
</ul>
</body>
<script>
    let routerView = routeView
    window.addEventListener('hashchange', ()=>{
        let hash = location.hash;
        routerView.innerHTML = hash
    })
    window.addEventListener('DOMContentLoaded', ()=>{
        if(!location.hash){//如果不存在hash值，那么重定向到#/
            location.hash="/"
        }else{//如果存在hash值，那就渲染对应UI
            let hash = location.hash;
            routerView.innerHTML = hash
        }
    })
</script>
</html>
```
- 我们通过a标签的href属性来改变URL的hash值（当然，你触发浏览器的前进后退按钮也可以，或者在控制台输入window.location赋值来改变hash）
- 我们监听hashchange事件。一旦事件触发，就改变routerView的内容，若是在vue中，这改变的应当是router-view这个组件的内容
- 为何又监听了load事件？这时应为页面第一次加载完不会触发 hashchange，因而用load事件来监听hash值，再将视图渲染成对应的内容。
#### 基于 history 实现
```html
<!DOCTYPE html>
<html lang="en">
<body>
<ul>
    <ul>
        <li><a href='/home'>home</a></li>
        <li><a href='/about'>about</a></li>

        <div id="routeView"></div>
    </ul>
</ul>
</body>
<script>
    let routerView = routeView
    window.addEventListener('DOMContentLoaded', onLoad)
    window.addEventListener('popstate', ()=>{
        routerView.innerHTML = location.pathname
    })
    function onLoad () {
        routerView.innerHTML = location.pathname
        var linkList = document.querySelectorAll('a[href]')
        linkList.forEach(el => el.addEventListener('click', function (e) {
            e.preventDefault()
            history.pushState(null, '', el.getAttribute('href'))
            routerView.innerHTML = location.pathname
        }))
    }

</script>
</html>
```
- 我们通过a标签的href属性来改变URL的path值（当然，你触发浏览器的前进后退按钮也可以，或者在控制台输入history.go,back,forward赋值来触发popState事件）。这里需要注意的就是，当改变path值时，默认会触发页面的跳转，所以需要拦截 `<a>` 标签点击事件默认行为， 点击时使用 pushState 修改 URL并更新手动 UI，从而实现点击链接更新 URL 和 UI 的效果。
- 我们监听popState事件。一旦事件触发，就改变routerView的内容。
- load事件则是一样的
### VueRouter本质
1. 安装VueRouter，再通过`import VueRouter from 'vue-router'`引入
2. 先 `const router = new VueRouter({...})`,再把`router`作为参数的一个属性值，`new Vue({router})`
3. 通过`Vue.use(VueRouter) `使得每个组件都可以拥有`router`实例。而Vue.use的一个原则就是执行对象的install这个方法
### Vue.use
`Vue.use(plugin);`

1. 参数
```js
{ Object | Function } plugin
```
2. 用法
安装Vue.js插件。如果插件是一个对象，必须提供install方法。如果插件是一个函数，它会被作为install方法。调用install方法时，会将Vue作为参数传入。install方法被同一个插件多次调用时，插件也只会被安装一次。
3. 作用
注册插件，此时只需要调用install方法并将Vue作为参数传入即可。但在细节上有两部分逻辑要处理：
- 插件的类型，可以是install方法，也可以是一个包含install方法的对象。
- 插件只能被安装一次，保证插件列表中不能有重复的插件。
4. 实现
```js
Vue.use = function(plugin){
	const installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
	if(installedPlugins.indexOf(plugin)>-1){
		return this;
	}
	<!-- 其他参数 -->
	const args = toArray(arguments,1);
	args.unshift(this);
	if(typeof plugin.install === 'function'){
		plugin.install.apply(plugin,args);
	}else if(typeof plugin === 'function'){
		plugin.apply(null,plugin,args);
	}
	installedPlugins.push(plugin);
	return this;
}
```
- 在Vue.js上新增了use方法，并接收一个参数plugin。
- 首先判断插件是不是已经别注册过，如果被注册过，则直接终止方法执行，此时只需要使用indexOf方法即可。
- toArray方法我们在就是将类数组转成真正的数组。使用toArray方法得到arguments。除了第一个参数之外，剩余的所有参数将得到的列表赋值给args，然后将Vue添加到args列表的最前面。这样做的目的是保证install方法被执行时第一个参数是Vue，其余参数是注册插件时传入的参数。
- 最后，将插件添加到installedPlugins中，保证相同的插件不会反复被注册。
### VueRouter模拟实现
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220111114010.png)

#### 回顾核心代码
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220111091816.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220111094735.png)

### install方法
![](media/16418735154488.jpg)

```js
let _Vue = null;
export default class VueRouter {
  constructor(options) {
    this.options = options;
    this.mode = options.mode || "hash";
    // 存储路由规则
    this.routeMap = {};
    // 响应式的
    this.data = _Vue.observable({ current: "/" });
  }
  // 给每个组件添加$route和$router。
  // $route和$router有什么区别。$router是VueRouter的实例对象，$route是当前路由对象，也就是说$route是$router的一个属性。
  static install(Vue) {
    /**
     * 1.判断当前插件是否已经被安装，如果已经安装了，就不需要重复安装了。
     * 2.Vue的构造函数记录到全局变量上，VueRouter的实例方法还是需要Vue构造函数
     * 3.把创建Vue实例时候传入的router对象注入到Vue实例上
     */
    if (VueRouter.install.installed) {
      return;
    }
    // 就是通过它防止插件多次注册安装，因为插件安装方法 install 里我们给此方法添加了一个 installed 属性当此属性存在且为 true 且 _Vue 已被赋值为构造函数 Vue 时 return，代表已经注册过该插件，无需重复注册。
    VueRouter.install.installed = true;
    _Vue = Vue;
    // _Vue.prototype.$router = this.$options.router;
    // 混入处理,所有的Vue的实例都会有
    _Vue.mixin({
      // 为什么是beforeCreate而不是created呢？因为如果是在created操作的话，$options已经初始化好了。
      beforeCreate() {
        // 组件不执行，Vue实例需要执行
        if (this.$options.router) {
          this._routerRoot = this;
          this._router = this.$options.router;
          this._route = {};
          // 插件安装时 install 方法会在 Vue 全局挂载两个组件，router-view 和 router-link
          this.$options.router.init();
        } else {
          this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
        }
      },
    });
    // 首先 $router 是 VueRouter 的实例对象，$route 是当前路由对象，$route 其实也是 $router 的一个属性，这两个对象在 Vue 所有的组件中都可以使用。
    Object.defineProperty(Vue.prototype, "$router", {
      get() {
        return this._routerRoot._router;
      },
    });
    Object.defineProperty(Vue.prototype, "$route", {
      get() {
        return this._routerRoot._route;
      },
    });
  }
}
```
### 构造函数
```js
let _Vue = null;
export default class VueRouter {
  constructor(options) {
    this.options = options;
    // 存储路由规则
    this.routeMap = {};
    // 响应式的
    this.data = _Vue.observable({ current: "/" });
  }
  static install(Vue) {
    /**
     * 1.判断当前插件是否已经被安装，如果已经安装了，就不需要重复安装了。
     * 2.Vue的构造函数记录到全局变量上，VueRouter的实例方法还是需要Vue构造函数
     * 3.把创建Vue实例时候传入的router对象注入到Vue实例上
     */
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    _Vue = Vue;
    // _Vue.prototype.$router = this.$options.router;
    // 混入处理,所有的Vue的实例都会有
    _Vue.mixin({
      beforeCreate() {
        // 组件不执行，Vue实例需要执行
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
        }
      },
    });
  }
}
```
### createRouteMap
把构造函数中选项中的routes，转换成键值对的形式存储到this.routeMap中。
```js
let _Vue = null;
export default class VueRouter {
  constructor(options) {
    this.options = options;
    // 存储路由规则
    this.routeMap = {};
    // 响应式的
    this.data = _Vue.observable({ current: "/" });
  }
  static install(Vue) {
    /**
     * 1.判断当前插件是否已经被安装，如果已经安装了，就不需要重复安装了。
     * 2.Vue的构造函数记录到全局变量上，VueRouter的实例方法还是需要Vue构造函数
     * 3.把创建Vue实例时候传入的router对象注入到Vue实例上
     */
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    _Vue = Vue;
    // _Vue.prototype.$router = this.$options.router;
    // 混入处理,所有的Vue的实例都会有
    _Vue.mixin({
      beforeCreate() {
        // 组件不执行，Vue实例需要执行
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
        }
      },
    });
  }
  createRouteMap() {
    // 遍历所有的路由规则，把路由规则解析成键值对的形式，存储到routeMap中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }
}
```
### initComponents(router-link)
```js
let _Vue = null
export default class VueRouter {
  constructor (options) {
    this.options = options
    // 存储路由规则
    this.routeMap = {}
    // 响应式的
    this.data = _Vue.observable({ current: '/' })
  }

  static install (Vue) {
    /**
     * 1.判断当前插件是否已经被安装，如果已经安装了，就不需要重复安装了。
     * 2.Vue的构造函数记录到全局变量上，VueRouter的实例方法还是需要Vue构造函数
     * 3.把创建Vue实例时候传入的router对象注入到Vue实例上
     */
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    _Vue = Vue
    // _Vue.prototype.$router = this.$options.router;
    // 混入处理,所有的Vue的实例都会有
    _Vue.mixin({
      beforeCreate () {
        // 组件不执行，Vue实例需要执行
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  init () {
    this.createRouteMap()
    this.initComponents(_Vue)
  }

  createRouteMap () {
    // 遍历所有的路由规则，把路由规则解析成键值对的形式，存储到routeMap中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component
    })
  }

  initComponents (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      template: '<a :href="to"><slot></slot></a>'
    })
  }
}
```
### 相关错误1
现在可以替换相关自己的写的VueRouter插件了。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220111103131.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220111103202.png)

Vue-CLI创建的项目，默认使用Vue运行时版本
#### 解决方案1:使用完整版Vue
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220111103532.png)

#### 解决方案1:使用运行时Vue
```js
let _Vue = null;
export default class VueRouter {
  constructor(options) {
    this.options = options;
    // 存储路由规则
    this.routeMap = {};
    // 响应式的
    this.data = _Vue.observable({ current: "/" });
  }

  static install(Vue) {
    /**
     * 1.判断当前插件是否已经被安装，如果已经安装了，就不需要重复安装了。
     * 2.Vue的构造函数记录到全局变量上，VueRouter的实例方法还是需要Vue构造函数
     * 3.把创建Vue实例时候传入的router对象注入到Vue实例上
     */
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    _Vue = Vue;
    // _Vue.prototype.$router = this.$options.router;
    // 混入处理,所有的Vue的实例都会有
    _Vue.mixin({
      beforeCreate() {
        // 组件不执行，Vue实例需要执行
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      },
    });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
  }

  createRouteMap() {
    // 遍历所有的路由规则，把路由规则解析成键值对的形式，存储到routeMap中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents(Vue) {
    Vue.component("router-link", {
      props: {
        to: String,
      },
      // 转化为运行时的Vue的render
      // template: '<a :href="to"><slot></slot></a>',
      render(h) {
        return h(
          "a",
          {
            attrs: {
              href: this.to,
            },
          },
          [this.$slots.default]
        );
      },
    });
  }
}
```
### initComponents(router-view)
```js
let _Vue = null;
export default class VueRouter {
  constructor(options) {
    this.options = options;
    // 存储路由规则
    this.routeMap = {};
    // 响应式的
    this.data = _Vue.observable({ current: "/" });
  }

  static install(Vue) {
    /**
     * 1.判断当前插件是否已经被安装，如果已经安装了，就不需要重复安装了。
     * 2.Vue的构造函数记录到全局变量上，VueRouter的实例方法还是需要Vue构造函数
     * 3.把创建Vue实例时候传入的router对象注入到Vue实例上
     */
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    _Vue = Vue;
    // _Vue.prototype.$router = this.$options.router;
    // 混入处理,所有的Vue的实例都会有
    _Vue.mixin({
      beforeCreate() {
        // 组件不执行，Vue实例需要执行
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      },
    });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
  }

  createRouteMap() {
    // 遍历所有的路由规则，把路由规则解析成键值对的形式，存储到routeMap中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents(Vue) {
    Vue.component("router-link", {
      props: {
        to: String,
      },
      // 转化为运行时的Vue的render
      // template: '<a :href="to"><slot></slot></a>',
      render(h) {
        return h(
          "a",
          {
            attrs: {
              href: this.to,
            },
            on: {
              click: this.clickHandler,
            },
          },
          [this.$slots.default]
        );
      },
      methods: {
        clickHandler(e) {
          history.pushState({}, "", this.to);
          // 所有的Vue实例都会拿到
          this.$router.data.current = this.to;
          // 阻止a标签的默认行为，跳转
          e.preventDefault();
        },
      },
    });
    const self = this;
    Vue.component("router-view", {
      // 转化为运行时的Vue的render
      render(h) {
        const component = self.routeMap[self.data.current];
        return h(component);
      },
    });
  }
}
```
### initEvent
解决后退和前进（历史发生变化），没有重新加载相关路由地址的组件。
```js
let _Vue = null;
export default class VueRouter {
  constructor(options) {
    this.options = options;
    // 存储路由规则
    this.routeMap = {};
    // 响应式的
    this.data = _Vue.observable({ current: "/" });
  }

  static install(Vue) {
    /**
     * 1.判断当前插件是否已经被安装，如果已经安装了，就不需要重复安装了。
     * 2.Vue的构造函数记录到全局变量上，VueRouter的实例方法还是需要Vue构造函数
     * 3.把创建Vue实例时候传入的router对象注入到Vue实例上
     */
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    _Vue = Vue;
    // _Vue.prototype.$router = this.$options.router;
    // 混入处理,所有的Vue的实例都会有
    _Vue.mixin({
      beforeCreate() {
        // 组件不执行，Vue实例需要执行
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      },
    });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
    this.initEvent();
  }

  createRouteMap() {
    // 遍历所有的路由规则，把路由规则解析成键值对的形式，存储到routeMap中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents(Vue) {
    Vue.component("router-link", {
      props: {
        to: String,
      },
      // 转化为运行时的Vue的render
      // template: '<a :href="to"><slot></slot></a>',
      render(h) {
        return h(
          "a",
          {
            attrs: {
              href: this.to,
            },
            on: {
              click: this.clickHandler,
            },
          },
          [this.$slots.default]
        );
      },
      methods: {
        clickHandler(e) {
          history.pushState({}, "", this.to);
          // 所有的Vue实例都会拿到
          this.$router.data.current = this.to;
          // 阻止a标签的默认行为，跳转
          e.preventDefault();
        },
      },
    });
    const self = this;
    Vue.component("router-view", {
      // 转化为运行时的Vue的render
      render(h) {
        const component = self.routeMap[self.data.current];
        return h(component);
      },
    });
  }
  initEvent() {
    window.addEventListener("popstate", () => {
      this.data.current = window.location.pathname;
    });
  }
}
```