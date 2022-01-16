---
title: Vue 源码
date: 2021-12-19
tags:
  - Vue
  - Vue源码
categories:
  - Vue
  - 源码
---
## Vue.js源码剖析
### 前期准备
#### 源码目录结构
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220114183549.png)
#### Flow
- JavaScript的**静态类型检查器**
- Flow的静态类型检查错误是通过静态类型推断实现的
    - 文件开头通过`//@flow`或者`/*@flow*/`声明
```js
/*@flow*/
function square(n:number):number{
    return n * n
}
square("2") // Error
```
#### 打包
- 打包工具Rollup，比Webpack轻量
    - Webpack把所有文档当做模块，Rollup只处理js文件更合适Vue.js这样的库中使用
    - Rollup打包不会生成冗余的代码
- 安装依赖
```js
yarn
```
- 设置sourcemap
    - `package.json`文件中的dev脚本添加参数`--sourcemap`
```js
 "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
```
- 执行dev
    - `npm run dev`执行打包，用的是rollup，`-w`参数是监听文件的变化，文件变化自动重新打包。
#### 调试
- examples的示例中引入的vue.min.js改为vue.js
- 打包chrome的调试工具中的source
#### Vue的不同构建版本
[相关链接：](https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220114185905.png)
### 寻找入口文件
- 查看dist/vue.js的构建过程，就可以找到入口文件
#### 执行构建
```js
npm run dev

"dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",

//  --environment TARGET:web-full-dev" 设置换将变量 TARGET
```
- 文件`script/config.js`的执行过程
    - 作用：生成rollup构建配置文件
    - 使用环境变量 `TARGET:web-full-dev`
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220114192113.png)
```js
 // 判断环境变量是否有process.env.TARGET
 // 如果有的话，使用genConfig（）生成rollup配置文件
 if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET);
} else {
  // 否则获取全部配置
  exports.getBuild = genConfig;
  exports.getAllBuilds = () => Object.keys(builds).map(genConfig);
}
```
- `genConﬁg(name)`
    - 根据环境变量TARGET获取配置信息
    - `builds[name]`获取生成配置信息
```json
// Runtime+compiler development build (Browser)
  "web-full-dev": {
    entry: resolve("web/entry-runtime-with-compiler.js"),
    dest: resolve("dist/vue.js"),
    format: "umd",
    env: "development",
    alias: { he: "./entity-decoder" },
    banner,
  },
```
- `resolve`
    - 获取入口和出口文件的绝对路径
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220114193007.png)
```js
const aliases = require("./alias");
const resolve = (p) => {
  const base = p.split("/")[0];
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1));
  } else {
    return path.resolve(__dirname, "../", p);
  }
};
```
#### 结果
- 把`src/platforms/web/entry-runtime-with-compiler.js`构成`dist/vue.js`,如果设置`--sourcemap`会生成`vue.js.map`
- `src/platform`文件夹下`Vue`可以构建成不同平台下使用的库，目前有`weex`和`web`,还有服务器端渲染的库
### 从入口开始
- `src/platform/web/entry-runtime-with-compiler.js`
#### 通过查看源码解决下面问题
- 观察一下代码，通过阅读源码，回答在页面上输出的结果
```js
const vm = new Vue({ 
     el: '#app',
     template: '<h3>Hello template</h3>', 
     render (h) {
    return h('h4', 'Hello render') 
    }
})
```
- 阅读源码记录
- 入口文件
    - `/src/platforms/web/entry-runtime-with-compiler.js`
    - el 不能是 body 或者 html 标签
    - 如果没有 render，把 template 转换成 render 函数
    - 如果有 render 方法，直接调用 mount 挂载 DOM
```js
  // 1.el 不能是 body 或者 html
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== "production" &&
      warn(
        `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
      );
    return this;
  }

  const options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    // 2. 把template/el 转换成 render函数
    ...
  }
  // 调用 mount 方法，挂载DOM
  return mount.call(this, el, hydrating);
};

```
- 调试代码
    - 调试方法
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220114205726.png)
#### Vue 的构造函数在哪里？Vue 实例的成员/Vue 的静态成员从哪里来的？
- `src/platform/web/entry-runtime-with-compiler.js` 中引用了  `'./runtime/index'`
- `src/platform/web/runtime/index.js`
    - 设置 Vue.conﬁg
    - 设置平台相关的指令和组件
        - 指令 v-model、v-show
        - 组件 transition、transition-group
    - 置平台相关的`__patch__` 方法（打补丁方法，对比新旧的 VNode）
    - 设置`$mount`方法，挂载 DOM
```js
import platformDirectives from "./directives/index";
import platformComponents from "./components/index";

// install platform specific utils
// 判断是否是关键属性(表单元素的 input/checked/selected/muted)
// 如果是这些属性，设置el.props属性(属性不设置到标签上)
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
// 注册了全局的方法和组件
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
// 把虚拟DOM转化为真实的DOM
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220115100613.png)


- `src/platform/web/runtime/index.js` 中引用了`'core/index'`
- `src/core/index.js`
    - `initGlobalAPI(Vue)`
        - 定义了 Vue 的静态方法
- `src/core/index.js 中引用了 './instance/index'`
- `src/core/instance/index.js`
    - 定义了 Vue 的构造函数
    - 创建Vue实例成员
```js
// 此处不用 class 的原因是因为方便后续给 Vue 实例混入实例成员
function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  // 调用 _init() 方法
  this._init(options);
}
// 注册 vm 的 _init() 方法，初始化 vm
initMixin(Vue);
// 注册 vm 的 $data/$props/$set/$delete/$watch
stateMixin(Vue);
// 初始化事件相关方法
// $on/$once/$off/$emit
eventsMixin(Vue);
// 初始化生命周期相关的混入方法
// _update/$forceUpdate/$destroy
lifecycleMixin(Vue);
// 混入 render
// $nextTick/_render
renderMixin(Vue);

export default Vue;
```
#### 四个导出 Vue 的模块
- `src/platforms/web/entry-runtime-with-compiler.js`
    - web 平台相关的入口
    - 重写了平台相关的 $mount() 方法
    - 注册了` Vue.compile() `方法，传递一个 HTML 字符串返回 render 函数
- `src/platforms/web/runtime/index.js`
    - web 平台相关
    - 注册和平台相关的全局指令：v-model、v-show
    - 注册和平台相关的全局组件： v-transition、v-transition-group
    - 全局方法：
        - `__patch__`：把虚拟 DOM 转换成真实 DOM
        - `$mount`：挂载方法,在入口的地方重写了，具备编译的能力
- `src/core/index.js`
    - 与平台无关
    - 设置了 Vue 的静态方法，`initGlobalAPI(Vue)`
- `src/core/instance/index.js`
    - 与平台无关
    - 定义了构造函数，调用了`this._init(options)`方法
    - 给 Vue 中混入了常用的实例成员
### Vue 的初始化
#### Vue 的初始化-静态成员
- `src/core/global-api/index.js`
    - 初始化 Vue 的静态方法
```js
// 注册Vue的静态属性/方法 
initGlobalAPI(Vue)

// src/core/global-api/index.js
export function initGlobalAPI(Vue: GlobalAPI) {
  // config
  const configDef = {};
  configDef.get = () => config;
  if (process.env.NODE_ENV !== "production") {
    configDef.set = () => {
      warn(
        "Do not replace the Vue.config object, set individual fields instead."
      );
    };
  }
  // 初始化 Vue.config 对象
  Object.defineProperty(Vue, "config", configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  // 这些工具方法不视作全局API的一部分，除非你已经意识到某些风险，否则不要去依赖他们
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive,
  };
  // 静态方法 set/delete/nextTick
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  // 让一个对象可响应
  Vue.observable = <T>(obj: T): T => {
    observe(obj);
    return obj;
  };
  // 初始化 Vue.options 对象，并给其扩展
  // components/directives/filters
  Vue.options = Object.create(null);
  // ASSET_TYPES一些定义的常量
  ASSET_TYPES.forEach((type) => {
    Vue.options[type + "s"] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  // 设置 keep-alive 组件
  extend(Vue.options.components, builtInComponents);

  // 注册 Vue.use() 用来注册插件
  initUse(Vue);
  // 注册 Vue.mixin() 实现混入
  initMixin(Vue);
  // 注册 Vue.extend() 基于传入的options返回一个组件的构造函数
  initExtend(Vue);
  // 注册 Vue.directive()、 Vue.component()、Vue.filter()
  initAssetRegisters(Vue);
}
```
#### Vue 的初始化-构造函数、实例成员
- `src/core/instance/index.js`
    - 定义 Vue 的构造函数
    - 初始化 Vue 的实例成员
```js
// 此处不用 class 的原因是因为方便后续给 Vue 实例混入实例成员
function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  // 调用 _init() 方法
  this._init(options);
}
// 注册 vm 的 _init() 方法，初始化 vm
initMixin(Vue);
// 注册 vm 的 $data/$props/$set/$delete/$watch
stateMixin(Vue);
// 初始化事件相关方法
// $on/$once/$off/$emit
eventsMixin(Vue);
// 初始化生命周期相关的混入方法
// _update/$forceUpdate/$destroy
// _update中调用了patch方法，转化DOM
lifecycleMixin(Vue);
// 混入 render
// $nextTick/_render
renderMixin(Vue);

export default Vue;
```



- `initMixin(Vue)`
    - 初始化 _init() 方法
```js
// src\core\instance\init.js


export function initMixin(Vue: Class<Component>) {
  // 给 Vue 实例增加 _init() 方法
  // 合并 options / 初始化操作
  Vue.prototype._init = function (options?: Object) {
    // 记录了当前Vue的实例
    const vm: Component = this;
    // a uid
    vm._uid = uid++;

    let startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== "production" && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`;
      endTag = `vue-perf-end:${vm._uid}`;
      mark(startTag);
    }

    // a flag to avoid this being observed
    // 如果是 Vue 实例不需要被 observe
    vm._isVue = true;
    // merge options
    // 合并 options（Vue构造函数的options和用户自定义的options合并）
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      initProxy(vm);
    } else {
      // 渲染之后的代理代理对象
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    // vm 的生命周期相关变量初始化
    // $children/$parent/$root/$refs
    initLifecycle(vm);
    // vm 的事件监听初始化, 父组件绑定在当前组件上的事件
    initEvents(vm);
    // vm 的编译render初始化
    // $slots/$scopedSlots/_c/$createElement/$attrs/$listeners
    // h函数
    initRender(vm);
    // beforeCreate 生命钩子的回调
    callHook(vm, "beforeCreate");
    // 把 inject 的成员注入到 vm 上
    initInjections(vm); // resolve injections before data/props
    // 初始化 vm 的 _props/methods/_data/computed/watch
    initState(vm);
    // 初始化 provide
    initProvide(vm); // resolve provide after data/props
    // created 生命钩子的回调
    callHook(vm, "created");

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== "production" && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(`vue ${vm._name} init`, startTag, endTag);
    }
    // 调用 $mount() 挂载
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}
```
### 首次渲染
- Vue 初始化完毕，开始真正的执行
- 调用 new Vue() 之前，已经初始化完毕，一些方法，实例成员，静态成员
- 通过调试代码，记录首次渲染过程
### Vue.js源码剖析-响应式原理
