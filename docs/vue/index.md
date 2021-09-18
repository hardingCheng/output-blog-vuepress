# Vue使用技巧
## Vue
### Vue.js 响应式原理
#### 准备工作
1. **数据驱动**
- 数据响应式、双向绑定、数据驱动
    - 数据响应式
        - 数据模型仅仅是普通的 Javascript 对象，而当我们修改数据时，视图会进行更新，避免了繁琐的 DOM 操作，提高开发效率
    - 双向绑定
        - 数据改变，视图改变；视图改变，数据也随之改变
        - 我们可以使用 v-model 在表单元素上创建双向数据绑定
    - 数据驱动是 Vue 最独特的特性之一
        - 开发过程中仅需要关注数据本身，不需要关心数据是如何渲染到视图

2. 响应式原理原理
**Vue2.x**
普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

**Vue3.x**
data 函数中返回一个普通的 JavaScript 对象时，Vue 会将该对象包裹在一个带有 get 和 set 处理程序的 Proxy 中。


3. 发布订阅模式
我们假定，存在一个“信号中心“某个任务执行完成。就向信号中心发布“(publish）个信号，其他任务可以向信号中心“订阅“(subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做发布订阅模" (Publish-subscribe pattern)
- 发布/订阅模式
    - 订阅者
    - 发布者
    - 信号中心
```js
 // 事件触发器
    class EventEmitter {
      constructor () {
        // { 'click': [fn1, fn2], 'change': [fn] }
        this.subs = Object.create(null)
      }

      // 注册事件
      $on (eventType, handler) {
        this.subs[eventType] = this.subs[eventType] || []
        this.subs[eventType].push(handler)
      }

      // 触发事件
      $emit (eventType) {
        if (this.subs[eventType]) {
          this.subs[eventType].forEach(handler => {
            handler()
          })
        }
      }
    }

    // 测试
    let em = new EventEmitter()
    em.$on('click', () => {
      console.log('click1')
    })
    em.$on('click', () => {
      console.log('click2')
    })

    em.$emit('click')
```

2. 观察者模式(Vue使用的)
- 观察者（订阅者）- Watcher
    - update (）：当事件发生时，具体要做的事情
- 目标（发布者）-Dep
    - subs 数组：存储所有的观察者
    - addsub：添加观察者
    - notify：当事件发生，调用所有观察者的 update（）方法
没有事件中心
```js
// 发布者-目标
    class Dep {
      constructor () {
        // 记录所有的订阅者
        this.subs = []
      }
      // 添加订阅者
      addSub (sub) {
        if (sub && sub.update) {
          this.subs.push(sub)
        }
      }
      // 发布通知
      notify () {
        this.subs.forEach(sub => {
          sub.update()
        })
      }
    }
    // 订阅者-观察者
    class Watcher {
      update () {
        console.log('update')
      }
    }

    // 测试
    let dep = new Dep()
    let watcher = new Watcher()

    dep.addSub(watcher)

    dep.notify()
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210918085541.png)


#### 模拟Vue响应式
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210918085942.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210918215643.png)
1. Vue
```js
class Vue {
  constructor (options) {
    // 1. 通过属性保存选项的数据
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    // 2. 把data中的成员转换成getter和setter，注入到vue实例中
    this._proxyData(this.$data)
    // 3. 调用observer对象，监听数据的变化
    new Observer(this.$data)
    // 4. 调用compiler对象，解析指令和差值表达式
    new Compiler(this)
  }
  _proxyData (data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach(key => {
      // 把data的属性注入到vue实例中
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
          return data[key]
        },
        set (newValue) {
          if (newValue === data[key]) {
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}
```
2. Observer
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210918090750.png)
- 功能
    - 负责把 data 选项中的属性转换成响应式数据
    - data 中的某个属性也是对象，把该属性转换成响应式数据
    - 数据变化发送通知
```js
class Observer {
  constructor (data) {
    this.walk(data)
  }
  walk (data) {
    // 1. 判断data是否是对象
    if (!data || typeof data !== 'object') {
      return
    }
    // 2. 遍历data对象的所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive (obj, key, val) {
    let that = this
    // 负责收集依赖，并发送通知
    let dep = new Dep()
    // 如果val是对象，把val内部的属性转换成响应式数据
    this.walk(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        // 收集依赖
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set (newValue) {
        if (newValue === val) {
          return
        }
        val = newValue
        that.walk(newValue)
        // 发送通知
        dep.notify()
      }
    })
  }
}
```

3. Compiler
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210918093554.png)
- 功能
    - 负责编译模板，解析指令差值表达式
    - 负责页面的首次染
    - 当数据变化后重新渲染视图
```js
class Compiler {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
    this.compile(this.el);
  }
  // 编译模板，处理文本节点和元素节点
  // el 模板
  compile(el) {
    // el 所有的子节点
    let childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      // 处理文本节点 差值表达式也是的
      if (this.isTextNode(node)) {
        this.compileText(node);
      } else if (this.isElementNode(node)) {
        // 处理元素节点
        this.compileElement(node);
      }
      // 判断node节点，是否有子节点，如果有子节点，要递归调用compile
      if (node.childNodes && node.childNodes.length) {
        this.compile(node);
      }
    });
  }
  // 编译元素节点，处理指令
  compileElement(node) {
    // 遍历所有的属性节点
    Array.from(node.attributes).forEach((attr) => {
      // 判断是否是指令
      let attrName = attr.name;
      if (this.isDirective(attrName)) {
        // v-text --> text
        // 属性的名字
        attrName = attrName.substr(2);
        // 属性的值
        let key = attr.value;
        this.update(node, key, attrName);
      }
    });
  }

  update(node, key, attrName) {
    //动态的选取方法   根据我们的属性名字attrName
    let updateFn = this[attrName + "Updater"];
    updateFn && updateFn.call(this, node, this.vm[key], key);
  }

  // 处理 v-text 指令
  textUpdater(node, value, key) {
    node.textContent = value;
  }
  // v-model
  modelUpdater(node, value, key) {
    node.value = value;
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue;
    });
    // 双向绑定
    node.addEventListener("input", () => {
      this.vm[key] = node.value;
    });
  }

  // 编译文本节点，处理差值表达式
  compileText(node) {
    let reg = /\{\{(.+?)\}\}/;
    let value = node.textContent;
    if (reg.test(value)) {
      let key = RegExp.$1.trim();
      node.textContent = value.replace(reg, this.vm[key]);

      // 创建watcher对象，当数据改变更新视图
      new Watcher(this.vm, key, (newValue) => {
        node.textContent = newValue;
      });
    }
  }
  // 判断元素属性是否是指令
  isDirective(attrName) {
    return attrName.startsWith("v-");
  }
  // 判断节点是否是文本节点
  isTextNode(node) {
    return node.nodeType === 3;
  }
  // 判断节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
}
```
4. Dep(发布者)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210918215847.png)
```js
class Dep {
  constructor () {
    // 存储所有的观察者
    this.subs = []
  }
  // 添加观察者
  addSub (sub) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }
  }
  // 发送通知
  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
```
5.Watcher(观察者)
```js
class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    // data中的属性名称
    this.key = key
    // 回调函数负责更新视图
    this.cb = cb

    // 把watcher对象记录到Dep类的静态属性target
    Dep.target = this
    // 触发get方法，在get方法中会调用addSub
    this.oldValue = vm[key]
    Dep.target = null
  }
  // 当数据发生变化的时候更新视图
  update () {
    let newValue = this.vm[this.key]
    if (this.oldValue === newValue) {
      return
    }
    this.cb(newValue)
  }
}
```
## Vue Router
### Hash 和 History 模式区别
- Hash 模式
    - https://music.163.com/#/playlist?id=3102961863 
- History 模式
    - https://music.163.com/playlist/3102961863

**原理及其区别**
- `Hash`模式是基于锚点，以及` onhashchange `事件 
    - URL中排后面的内容作为路径地址
    - 监听` hashchange `事件
    - 根据当前路由地址找到对应组件重新渲染 

- `History`模式是基于` HTML5 `中的` History Api`
    - `history.pushState`IE10 以后才支持
    - `history.replaceState()`

    - 通过` history.pushState（）`方法改变地址栏
    - 监听` popstate `事件
    - 根据当前路由地址找到对应组件重新渲染

#### History模式的使用
- History 需要服务器的支持
    - 单页应用中，服务端不存在http://www.testurl.com/login这样的地址会返回找不到该页面
    - 在服务端应该除了静态资源外都返回单页应用的 index.html

### Vue Router实现原理
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917223715.png)

- Vue 的构建版本
    - 运行时版：不支持 template 模板，需要打包的时候提前编译
    ```js
    //自己写render函数
    ```
    - 完整版：包含运行时和编译器，体积比运行时版大 10K 左右，程序运行的时候把模板转换成 render 函数 
    ```js
    //在vue.config.js中开启
    //runtimeCompiler
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    module.exports = {
        runtimeCompiler:true
    }
    ```

```js
let _Vue = null
export default class VueRouter {
    constructor(options) {
        this.options = options
        //根据地址找组件
        this.routeMap = {}
        //要是响应式的对象
        this.data = _Vue.observable({
            //当前路由地址
            current:'/'
        })
        this.init()
    }


    // 传入Vue的构造函数和可配置的选项
    static install (Vue){
        // 1. 判断当前插件是否已经安装
        if(VueRouter.install.installed){
            return;
        }
        VueRouter.install.installed = true
        // 2. 把Vue构造函数记录到全局变量(要在VueRouter实例方法中使用这个构造函数)
        _Vue = Vue
        // 3. 把Vue实例时候传入的router对象注入到所有Vue实例上
        // 挂载到原型上，所有的实例都是可以访问到的
        // _Vue.prototype.$router = this.$options.router (this -> VueRouter,而不是 Vue)
        // 混入
        _Vue.mixin({
            beforeCreate(){
                //只有为Vue构造函数的时候才执行，其他的组件不执行
                if(this.$options.router){
                    //混入使这个this指向Vue
                    _Vue.prototype.$router = this.$options.router
                }
            }
        })
    }

    init() {
        this.createRouteMap()
        this.initComponents(_Vue)
        this.initEvent()
    }

    // 遍历所有的路由规则，把路由规则解析成键值对的形式，存储到routeMap
    createRouteMap() {
        this.options.routes.forEach(route => {
            this.routeMap[route.path] = route.component
        });
    }

    //创建router-link  router-view组件
    initComponents(Vue){
        Vue.component('router-link',{
            props:{
                to:String
            },
            // template:'<a :href="to"><slot></slot></a>'
            render(h){
                return h('a',{
                    attrs: {
                        href:this.to
                    },
                    on:{
                        click:this.clickhander
                    }
                },[
                    this.$slots.default
                ])
            },
            methods:{
                clickhander(e){
                    history.pushState({},"",this.to)
                    this.$router.data.current=this.to
                    e.preventDefault()
                }
            }
        })

        //让this 指向  vuerouter
        const self = this
        Vue.component('router-view',{
            render(h){
                const component =  self.routeMap[self.data.current]
                return h(component)
            }
        })
    }

    initEvent(){
        //history popstate,只改变  地址  不发送请求
        window.addEventListener("popstate",()=>{
            // 处理前进和后退   来改变当前地址，去获取相应组件 来进行渲染
            this.data.current = window.location.pathname
        })
    }
    
}
```  