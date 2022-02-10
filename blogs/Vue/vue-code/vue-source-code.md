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
#### 通过查看源码解决下面问题
- vm.msg = { count: 0 }，重新给属性赋值，是否是响应式的？是的
- vm.arr[0] = 4 给数组元素赋值，视图是否会更新？不会
- vm.arr.length = 0，修改数组的length，视图是否会更新？不会
- vm.arr.push(4)，视图是否会更新？会
#### 响应式处理的入口
整个响应式处理的过程是比较复杂的，下面我们先从。
- `src\core\instance\init.js`
    - `initState(vm)`初始化vue实例状态的初始化
    - 初始化了_props/methods/_data/computed/watch等
- `src\core\instance\state.js`
```js
// 数据的初始化
if (opts.data) {
  // 把data成员注入vue实例，并且转为响应式
  initData(vm);
} else {
  // 响应式处理的入口
  observe((vm._data = {}), true /* asRootData */);
}
```
- `initData(vm)`vm 数据的初始化
```js
function initData (vm: Component) { 
let data = vm.$options.data
 // 初始化    _data，组件中    data 是函数，调用函数返回结果 
 // 否则直接返回    data
 data = vm._data = typeof data === 'function' 
   ? getData(data, vm)
   : data || {}
……
 // proxy data on instance
 // 获取 data 中的所有属性
 const keys = Object.keys(data)
 // 获取    props / methods
 const props = vm.$options.props
 const methods = vm.$options.methods
 let i = keys.length
 // 判断 data 上的成员是否和   props/methods 重名
 ……
 // observe data
 // 数据的响应式处理
 observe(data, true /* asRootData */) 
}
```
- `src\core\observer\index.js`
    - observe(value, asRootData) 
    - 负责为每一个 Object 类型的 value 创建一个 observer 实例
```js
export function observe(value: any, asRootData: ?boolean): Observer | void {
  // 判断    value 是否是对象
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  let ob: Observer | void; // 如果    value 有    __ob__(observer对象) 属性    结束
  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    // 创建一个    Observer 对象
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}
```
#### Observer
- `src\core\observer\index.js`
    - 对对象做响应化处理
    - 对数组做响应化处理
```js
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
*/
export class Observer {
  // 观察对象
  value: any;
  // 依赖对象
  dep: Dep;
  // 实例计数器
  vmCount: number; // number of vms that have this object as root $data

  constructor(value: any) {
    this.value = value;
    this.dep = new Dep();
    // 初始化实例的vmCount为0
    this.vmCount = 0;
    // 将实例挂载到观察对象的__ob__属性
    def(value, "__ob__", this);
    // 数组的响应式处理
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      // 为数组中的每一个对象创建一个 observer 实例
      this.observeArray(value);
    } else {
      // 遍历对象中的每一个属性，转换成setter/getter
      this.walk(value);
    }
  }

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk(obj: Object) {
    // 获取观察对象的每一个属性
    const keys = Object.keys(obj);
    // 遍历每一个属性，设置为响应式数据
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }

  /**
   * Observe a list of Array items.
   */
  observeArray(items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
```
- walk(obj) 
    - 遍历 obj 的所有属性，为每一个属性调用 deﬁneReactive() 方法，设置 getter/setter
#### deﬁneReactive() + 收集依赖
- `src\core\observer\index.js`
- `deﬁneReactive(obj, key, val, customSetter, shallow)`
    - 为一个对象定义一个响应式的属性，每一个属性对应一个 dep 对象
    - 如果该属性的值是对象，继续调用 observe
    - 如果给属性赋新值，继续调用 observe
    - 如果数据更新发送通知
```js
// 为一个对象定义响应式对象
/**
 * Define a reactive property on an Object.
 */
export function defineReactive(
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  // 1. 为每一个属性，创建依赖对象实例  收集所有的watcher
  const dep = new Dep();
  // 获取 obj 的属性描述符对象
  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }
  // 提供预定义的存取器函数
  // cater for pre-defined getter/setters
  const getter = property && property.get;
  const setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }
  // 2. 判断是否递归观察子对象，并将子对象属性都转换成    getter/setter，返回子观察对象
  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      // 如果预定义的    getter 存在则    value 等于getter 调用的返回值
      // 否则直接赋予属性值
      const value = getter ? getter.call(obj) : val;
      // 如果存在当前依赖目标，即    watcher 对象，则建立依赖
      if (Dep.target) {
        // dep() 添加相互的依赖
        // 1个组件对应一个    watcher 对象
        // 1个watcher会对应多个dep（要观察的属性很多）
        // 我们可以手动创建多个 watcher 监听1个属性的变化，1个dep可以对应多个watcher
        dep.depend();
        if (childOb) {
          // 为子对象添加依赖
          childOb.dep.depend();
          // 如果属性是数组，则特殊处理收集数组对象依赖
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      // 返回属性值
      return value;
    },
    set: function reactiveSetter(newVal) {
      // 如果预定义的    getter 存在则    value 等于getter 调用的返回值
      // 否则直接赋予属性值  获取旧值
      const value = getter ? getter.call(obj) : val;
      // 如果新值等于旧值或者新值旧值为NaN则不执行
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== "production" && customSetter) {
        customSetter();
      }
      // 如果没有 setter 直接返回,属性只读
      // #7981: for accessor properties without setter
      if (getter && !setter) return;
      // 如果预定义setter存在则调用，否则直接更新新值
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      // 3. 如果新值是对象，观察子对象并返回    子的    observer 对象
      childOb = !shallow && observe(newVal);
      // 4. 发布更改通知
      dep.notify();
    },
  });
}
```
#### 数组的响应式处理
- Observer 的构造函数中
```js
// 数组的响应式处理
if (Array.isArray(value)) { 
 if (hasProto) {
   protoAugment(value, arrayMethods) 
} else {
   copyAugment(value, arrayMethods, arrayKeys) 
}
 // 为数组中的每一个对象创建一个    observer 实例 
 this.observeArray(value)
} else {
 // 编译对象中的每一个属性，转换成    setter/getter 
 this.walk(value)
}
function protoAugment (target, src: Object) { 
 /* eslint-disable no-proto */
 target.__proto__ = src
 /* eslint-enable no-proto */ 
}
/* istanbul ignore next */
function copyAugment (target: Object, src: Object, keys: Array<string>) { 
 for (let i = 0, l = keys.length; i < l; i++) {
   const key = keys[i]
   def(target, key, src[key]) 
}
}
```
- 处理数组修改数据的方法
    - `src\core\observer\array.js`
```js
const arrayProto = Array.prototype;
// 克隆数组的原型
export const arrayMethods = Object.create(arrayProto);
// 修改数组元素的方法
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  // 保存数组原方法
  const original = arrayProto[method];
  // 调用    Object.defineProperty() 重新定义修改数组的方法
  def(arrayMethods, method, function mutator(...args) {
    // 执行数组的原始方法
    const result = original.apply(this, args);
    // 获取数组对象的    ob 对象
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    // 对插入的新元素，重新遍历数组元素设置为响应式数据
    if (inserted) ob.observeArray(inserted);
    // notify change
    // 调用了修改数组的方法，调用数组的ob对象发送通知
    ob.dep.notify();
    return result;
  });
});
```
#### Dep
- `src\core\observer\dep.js`
- 依赖对象
- 记录 watcher 对象
- depend() -- watcher 记录对应的 dep
- 发布通知
```md
1. 在 defineReactive() 的 getter 中创建 dep 对象，并判断 Dep.target 是否有值（一会再来看有什么时候有值得）, 调用 dep.depend()
2. dep.depend() 内部调用 Dep.target.addDep(this)，也就是 watcher 的 addDep() 方法，它内部最调用 dep.addSub(this)，把 watcher 对象，添加到 dep.subs.push(watcher) 中，也就是把订阅者添加到 dep 的 subs 数组中，当数据变化的时候调用 watcher 对象的 update() 方法
3. 什么时候设置的 Dep.target? 通过简单的案例调试观察。调用 mountComponent() 方法的时候，创建了渲染 watcher 对象，执行 watcher 中的 get() 方法
4. get() 方法内部调用 pushTarget(this)，把当前 Dep.target = watcher，同时把当前watcher 入栈，因为有父子组件嵌套的时候先把父组件对应的 watcher 入栈，再去处理子组件的 watcher，子组件的处理完毕后，再把父组件对应的 watcher 出栈，继续操作
5. Dep.target 用来存放目前正在使用的 watcher。全局唯一，并且一次也只能有一个 watcher被使用
```
```js
// dep 是个可观察对象，可以有多个指令订阅它
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {
  // 静态属性，watcher 对象
  static target: ?Watcher;
  // dep 实例    Id
  id: number; // dep 实例对应的    watcher 对象/订阅者数组
  subs: Array<Watcher>;
  constructor() {
    this.id = uid++;
    this.subs = [];
  } // 添加新的订阅者    watcher 对象
  addSub(sub: Watcher) {
    this.subs.push(sub);
  } // 移除订阅者
  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  } // 将观察对象和    watcher 建立依赖
  depend() {
    if (Dep.target) {
      // 如果    target 存在，把    dep 对象添加到    watcher 的依赖中
      Dep.target.addDep(this);
    }
  } // 发布通知
  notify() {
    // stabilize the subscriber list first
    const subs = this.subs.slice();
    if (process.env.NODE_ENV !== "production" && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id);
    } // 调用每个订阅者的update方法实现更新
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
// Dep.target 用来存放目前正在使用的watcher
// 全局唯一，并且一次也只能有一个watcher被使用
// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
const targetStack = [];
// 入栈并将当前    watcher 赋值给Dep.target
// 每一个组件对应一个Watcher
// 入栈并将当前 watcher 赋值给Dep.target
// 父子组件嵌套的时候先把父组件对应的watcher入栈
// 再去处理子组件的watcher,子组件的处理完毕后，在把父组件对应的watcher出栈，继续操作
export function pushTarget(target: ?Watcher) {
  targetStack.push(target);
  Dep.target = target;
}
export function popTarget() {
  // 出栈操作
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
```
#### Watcher类
- Watcher 分为三种，Computed Watcher、用户 Watcher (侦听器)、渲染 Watcher
- 渲染 Watcher 的创建时机
    - `/src/core/instance/lifecycle.js`
```js
export function mountComponent(
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el;
  // ……
  callHook(vm, "beforeMount");
  let updateComponent; /* istanbul ignore if */
  if (process.env.NODE_ENV !== "production" && config.performance && mark) {
    // ……
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating);
    };
  }
  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  // 创建渲染    Watcher，expOrFn 为    updateComponent
  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, "beforeUpdate");
        }
      },
    },
    true /* isRenderWatcher */
  );
  hydrating = false;
  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook;
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, "mounted");
  }
  return vm;
}
```
- 渲染 wacher 创建的位置 lifecycle.js 的 mountComponent 函数中
- Wacher 的构造函数初始化，处理 expOrFn （渲染 watcher 和侦听器处理不同）
- 调用 this.get() ，它里面调用 pushTarget()  然后 this.getter.call(vm, vm) （对于渲染 wacher 调用 updateComponent），如果是用户 wacher 会获取属性的值（触发get操作）
- 当数据更新的时候，dep 中调用 notify() 方法，notify() 中调用 wacher 的 update() 方法
- update() 中调用 queueWatcher()
- queueWatcher() 是一个核心方法，去除重复操作，调用 ﬂushSchedulerQueue() 刷新队列并执行 watcher
- ﬂushSchedulerQueue() 中对 wacher 排序，遍历所有 wacher ，如果有 before，触发生命周期的钩子函数 beforeUpdate，执行 wacher.run()，它内部调用 this.get()，然后调用 this.cb() (渲染wacher 的 cb 是 noop)
- 整个流程结束
```js
/* @flow */

import {
  warn,
  remove,
  isObject,
  parsePath,
  _Set as Set,
  handleError,
  invokeWithErrorHandling,
  noop,
} from "../util/index";

import { traverse } from "./traverse";
import { queueWatcher } from "./scheduler";
import Dep, { pushTarget, popTarget } from "./dep";

import type { SimpleSet } from "../util/index";

let uid = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
export default class Watcher {
  vm: Component;
  expression: string;
  cb: Function;
  id: number;
  deep: boolean;
  user: boolean;
  lazy: boolean;
  sync: boolean;
  dirty: boolean;
  active: boolean;
  deps: Array<Dep>;
  newDeps: Array<Dep>;
  depIds: SimpleSet;
  newDepIds: SimpleSet;
  before: ?Function;
  getter: Function;
  value: any;

  constructor(
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new Set();
    this.newDepIds = new Set();
    this.expression =
      process.env.NODE_ENV !== "production" ? expOrFn.toString() : "";
    // parse expression for getter
    if (typeof expOrFn === "function") {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        process.env.NODE_ENV !== "production" &&
          warn(
            `Failed watching path: "${expOrFn}" ` +
              "Watcher only accepts simple dot-delimited paths. " +
              "For full control, use a function instead.",
            vm
          );
      }
    }
    this.value = this.lazy ? undefined : this.get();
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  get() {
    pushTarget(this);
    let value;
    const vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`);
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  }

  /**
   * Add a dependency to this directive.
   */
  addDep(dep: Dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  }

  /**
   * Clean up for dependency collection.
   */
  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    let tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  }

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  }

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  run() {
    if (this.active) {
      const value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        const oldValue = this.value;
        this.value = value;
        if (this.user) {
          const info = `callback for watcher "${this.expression}"`;
          invokeWithErrorHandling(
            this.cb,
            this.vm,
            [value, oldValue],
            this.vm,
            info
          );
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  }

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  evaluate() {
    this.value = this.get();
    this.dirty = false;
  }

  /**
   * Depend on all deps collected by this watcher.
   */
  depend() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  }

  /**
   * Remove self from all dependencies' subscriber list.
   */
  teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      let i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  }
}
```
#### 总结
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220119115804.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220119115819.png)

 ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220119115932.png)
 
 ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220119120132.png)
 
 ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220119120154.png)
 
 #### set-源码
 **vm.$set**
 - 功能
     - 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如this.myObject.newProperty = 'hi')注意：对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
     - 示例
         - `vm.$set(obj, 'foo', 'test')`
- 定义位置
- Vue.set()
    - `global-api/index.js`
```js
// 静态方法    set/delete/nextTick 
 Vue.set = set
 Vue.delete = del
 Vue.nextTick = nextTick
```
- vm.$set()
    - `instance/index.js`
- 源码
    - set() 方法
        - `observer/index.js`
```js
/**
* Set a property on an object. Adds the new property and 
* triggers change notification if the property doesn't 
* already exist.
*/
export function set (target: Array<any> | Object, key: any, val: any): any 
{
 if (process.env.NODE_ENV !== 'production' && 
   (isUndef(target) || isPrimitive(target)) 
){
   warn(`Cannot set reactive property on undefined, null, or primitive 
value: ${(target: any)}`)
}
 // 判断    target 是否是对象，key 是否是合法的索引
 if (Array.isArray(target) && isValidArrayIndex(key)) { 
   target.length = Math.max(target.length, key)
   // 通过    splice 对key位置的元素进行替换 
   // splice 在    array.js进行了响应化的处理 
   target.splice(key, 1, val)
   return val 
}
 // 如果    key 在对象中已经存在直接赋值
 if (key in target && !(key in Object.prototype)) { 
   target[key] = val
   return val 
}
 // 获取    target 中的    observer 对象
 const ob = (target: any).__ob__
 // 如果    target 是    vue 实例或者$data 直接返回
 if (target._isVue || (ob && ob.vmCount)) {
   process.env.NODE_ENV !== 'production' && warn(
     'Avoid adding reactive properties to a Vue instance or its root $data 
'+
     'at runtime - declare it upfront in the data option.' 
 )
   return val 
}
 // 如果    ob 不存在，target 不是响应式对象直接赋值 
 if (!ob) {
   target[key] = val 
   return val
}
 // 把    key 设置为响应式属性
 defineReactive(ob.value, key, val) 
 // 发送通知
 ob.dep.notify() 
 return val
}
```
#### delete-源码
- 功能
    - 删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue不能检测到属性被删除的限制，但是你应该很少会使用它。
- 示例
    - `vm.$delete(vm.obj, 'msg')`
- 定义位置
- Vue.delete()
    - `global-api/index.js`
```js
// 静态方法    set/delete/nextTick 
 Vue.set = set
 Vue.delete = del
 Vue.nextTick = nextTick
```
- vm.$delete()
    - `instance/index.js`
```js
// 注册    vm 的    $data/$props/$set/$delete/$watch 
stateMixin(Vue)
// instance/state.js
Vue.prototype.$set = set 
Vue.prototype.$delete = del
```
- 源码
    - `src\core\observer\index.js`
```js
/**
 * Delete a property and trigger change if necessary.
 */
export function del(target: Array<any> | Object, key: any) {
  if (
    process.env.NODE_ENV !== "production" &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot delete reactive property on undefined, null, or primitive 
  value: ${(target: any)}`);
  } // 判断是否是数组，以及    key 是否合法
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 如果是数组通过    splice 删除
    // splice 做过响应式处理
    target.splice(key, 1);
    return;
  } // 获取    target 的    ob 对象
  const ob = (target: any).__ob__; 
  // target 如果是    Vue 实例或者    $data 对象，直接返回
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== "production" &&
      warn(
        "Avoid deleting properties on a Vue instance or its root $data " +
          "- just set it to null."
      );
    return;
  } // 如果    target 对象没有    key 属性直接返回
  if (!hasOwn(target, key)) {
    return;
  } // 删除属性
  delete target[key];
  if (!ob) {
    return;
  } // 通过    ob 发送通知
  ob.dep.notify();
}
```
#### watch-源码
vm.$watch( expOrFn, callback, [options] )
- 功能
    - 观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代。
- 参数
    - expOrFn：要监视的 $data 中的属性，可以是表达式或函数
    - callback：数据变化后执行的函数
        - 函数：回调函数
        - 对象：具有 handler 属性(字符串或者函数)，如果该属性为字符串则 methods 中相应的定义
    - options：可选的选项
        - deep：布尔类型，深度监听
        - immediate：布尔类型，是否立即执行一次回调函数
```js
const vm = new Vue({
 el: '#app',
 data: {
   a: '1',
   b: '2',
   msg: 'Hello Vue',
   user: {
     firstName: '诸葛',
     lastName: '亮'
 } 
}
})
// expOrFn 是表达式
vm.$watch('msg', function (newVal, oldVal) { 
 console.log(newVal, oldVal)
})
vm.$watch('user.firstName', function (newVal, oldVal) { 
 console.log(newVal)
})
// expOrFn 是函数
vm.$watch(function () { 
 return this.a + this.b
}, function (newVal, oldVal) { 
 console.log(newVal)
})
// deep 是    true，消耗性能
vm.$watch('user', function (newVal, oldVal) { 
 // 此时的    newVal 是    user 对象
 console.log(newVal === vm.user) 
}, {
 deep: true 
})
// immediate 是    true
vm.$watch('msg', function (newVal, oldVal) { 
 console.log(newVal)
}, {
 immediate: true 
})
```
#### 三种类型的 Watcher 对象
- 没有静态方法，因为 $watch 方法中要使用 Vue 的实例
- Watcher 分三种：计算属性 Watcher、用户 Watcher (侦听器)、渲染 Watcher
- 创建顺序：计算属性 Watcher、用户 Watcher (侦听器)、渲染 Watcher
- vm.$watch()
    - `src\core\instance\state.js`
```js
Vue.prototype.$watch = function ( 
 expOrFn: string | Function,
 cb: any,
 options?: Object
): Function {
 // 获取    Vue 实例    this
 const vm: Component = this 
 if (isPlainObject(cb)) {
   // 判断如果    cb 是对象执行    createWatcher
   return createWatcher(vm, expOrFn, cb, options) 
}
 options = options || {}
 // 标记为用户    watcher
 options.user = true
 // 创建用户    watcher 对象
 const watcher = new Watcher(vm, expOrFn, cb, options)
 // 判断    immediate 如果为    true
 if (options.immediate) {
   // 立即执行一次    cb 回调，并且把当前值传入
   try {
     cb.call(vm, watcher.value)
   } catch (error) {
     handleError(error, vm, `callback for immediate watcher 
"${watcher.expression}"`)
 } 
}
 // 返回取消监听的方法
 return function unwatchFn () { 
   watcher.teardown()
} 
}
```
- 查看渲染 watcher 的执行过程
    - 当数据更新，deﬁneReactive 的 set 方法中调用 dep.notify()
    - 调用 watcher 的 update()
    - 调用 queueWatcher()，把 wacher 存入队列，如果已经存入，不重复添加
    - 循环调用 ﬂushSchedulerQueue()
        - 通过 nextTick()，在消息循环结束之前时候调用  ﬂushSchedulerQueue()
    - 调用 wacher.run()
        - 调用 wacher.get() 获取最新值
        - 如果是渲染 wacher 结束
        - 如果是用户 watcher，调用 this.cb()
#### 异步更新队列-nextTick()
- Vue 更新 DOM 是异步执行的，批量的
    - 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
- `vm.$nextTick(function () {   /* 操作 DOM */  })  /  Vue.nextTick(function () {})`
- vm.$nextTick() 代码演示
```js
<div id="app">
 <p ref="p1">{{ msg }}</p> 
</div>
<script src="../../dist/vue.js"></script> 
<script>
 const vm = new Vue({
   el: '#app',
   data: {
     msg: 'Hello nextTick',
     name: 'Vue.js',
     title: 'Title'
   },
   mounted() {
     this.msg = 'Hello World'
     this.name = 'Hello snabbdom'
     this.title = 'Vue.js'
     this.$nextTick(() => {
       console.log(this.$refs.p1.textContent)
     })
 } 
})
</script>
```
- 定义位置
    - `src\core\instance\render.js`
```js
Vue.prototype.$nextTick = function (fn: Function) { 
 return nextTick(fn, this)
}
```
- 源码
    - 手动调用 vm.$nextTick()
    - 在 Watcher 的 queueWatcher 中执行 nextTick()
    - `src\core\util\next-tick.js`
```js
let timerFunc;
// The nextTick behavior leverages the microtask queue, which can be
accessed;
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== "undefined" && isNative(Promise)) {
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break,
    but; // it can get stuck in a weird state where callbacks are pushed into
    the; // microtask queue but the queue isn't being flushed, until the browser // needs to do some other work, e.g. handle a timer. Therefore we can // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) setTimeout(noop);
  };
  isUsingMicroTask = true;
} else if (
  !isIE &&
  typeof MutationObserver !== "undefined" &&
  (isNative(MutationObserver) || // PhantomJS and iOS 7.x
    MutationObserver.toString() === "[object MutationObserverConstructor]")
) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}
export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve; // 把    cb 加上异常处理存入    callbacks 数组中
  callbacks.push(() => {
    if (cb) {
      try {
        // 调用    cb()
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line
  if (!cb && typeof Promise !== "undefined") {
    // 返回    promise 对象
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```
### Vue 源码剖析-模板编译和组件化
#### 模板编译
- 模板编译的主要目的是将模板 (template) 转换为渲染函数 (render)
```js
<div>
 <h1 @click="handler">title</h1> 
 <p>some content</p>
</div>
```
- 渲染函数 render
```js
render (h) {
 return h('div', [
   h('h1', { on: { click: this.handler} }, 'title'), 
   h('p', 'some content')
]) 
}
```
- 模板编译的作用
    - Vue 2.x 使用 VNode 描述视图以及各种交互，用户自己编写 VNode 比较复杂
    - 用户只需要编写类似 HTML 的代码 - Vue 模板，通过编译器将模板转换为返回 VNode 的 render 函数
    - .vue 文件会被 webpack 在构建的过程中转换成 render 函数
#### 体验模板编译的结果
- 带编译器版本的 Vue.js 中，使用 template 或 el 的方式设置模板
```js
<div id="app">
 <h1>Vue<span>模板编译过程</span></h1> 
 <p>{{ msg }}</p>
 <comp @myclick="handler"></comp> 
</div>
<script src="../../dist/vue.js"></script> 
<script>
 Vue.component('comp', {
   template: '<div>I am a comp</div>' 
})
 const vm = new Vue({
   el: '#app',
   data: {
     msg: 'Hello compiler'
   },
   methods: {
     handler () {
       console.log('test')
     }
    } 
})
 console.log(vm.$options.render) 
</script>
```
- 编译后 render 输出的结果
```js
(function anonymous() {
 with (this) {
   return _c(
     "div",
     { attrs: { id: "app" } },
    [
       _m(0),
       _v(" "),
       _c("p", [_v(_s(msg))]),
       _v(" "),
       _c("comp", { on: { myclick: handler } }),
     ],
     1
   ); 
}
});
```
- _c 是 createElement() 方法，定义的位置 `instance/render.js` 中
- 相关的渲染函数(_开头的方法定义)，在 instance/render-helps/index.js 中
```js
// instance/render-helps/index.js 
target._v = createTextVNode 
target._m = renderStatic
// core/vdom/vnode.js
export function createTextVNode (val: string | number) {
 return new VNode(undefined, undefined, undefined, String(val)) 
}
// 在    instance/render-helps/render-static.js 
export function renderStatic (
 index: number, 
 isInFor: boolean
): VNode | Array<VNode> {
 const cached = this._staticTrees || (this._staticTrees = []) 
 let tree = cached[index]
 // if has already-rendered static tree and not inside v-for, 
 // we can reuse the same tree.
 if (tree && !isInFor) { 
   return tree
}
 // otherwise, render a fresh tree.
 tree = cached[index] = this.$options.staticRenderFns[index].call( 
   this._renderProxy,
   null,
   this // for render fns generated for functional component templates 
)
 markStatic(tree, `__static__${index}`, false) 
 return tree

}
```
- `把 template 转换成 render 的入口 src\platforms\web\entry-runtime-with-compiler.js`
#### Vue Template Explorer
- vue-template-explorer
    - Vue 2.6 把模板编译成 render 函数的工具
- vue-next-template-explorer
    - Vue 3.0 beta 把模板编译成 render 函数的工具
#### 模板编译过程
- 解析
- 优化
- 生成
#### 编译的入口
- `src\platforms\web\entry-runtime-with-compiler.js`
```js
Vue.prototype.$mount = function (
……
 // 把    template 转换成    render 函数
 const { render, staticRenderFns } = compileToFunctions(template, { 
   outputSourceRange: process.env.NODE_ENV !== 'production',
   shouldDecodeNewlines,
   shouldDecodeNewlinesForHref, 
   delimiters: options.delimiters, 
   comments: options.comments
}, this)
 options.render = render
 options.staticRenderFns = staticRenderFns
……
)
```
- 调试 compileToFunctions() 执行过程，生成渲染函数的过程
    - compileToFunctions: `src\compiler\to-function.js`
    - complie(template, options)：`src\compiler\create-compiler.js`
    - baseCompile(template.trim(), ﬁnalOptions)：`src\compiler\index.js`
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220119133659.png)
#### 模板编译过程-compileToFunctions
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220119134657.png)
先去找缓存中编译的结果，没有的话，开始编译，然后缓存返回。
```js
/* @flow */

import { noop, extend } from "shared/util";
import { warn as baseWarn, tip } from "core/util/debug";
import { generateCodeFrame } from "./codeframe";

type CompiledFunctionResult = {
  render: Function,
  staticRenderFns: Array<Function>,
};

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err, code });
    return noop;
  }
}

export function createCompileToFunctionFn(compile: Function): Function {
  const cache = Object.create(null);

  return function compileToFunctions(
    template: string,
    options?: CompilerOptions,
    vm?: Component
  ): CompiledFunctionResult {
    options = extend({}, options);
    const warn = options.warn || baseWarn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== "production") {
      // detect possible CSP restriction
      try {
        new Function("return 1");
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            "It seems you are using the standalone build of Vue.js in an " +
              "environment with Content Security Policy that prohibits unsafe-eval. " +
              "The template compiler cannot work in this environment. Consider " +
              "relaxing the policy to allow unsafe-eval or pre-compiling your " +
              "templates into render functions."
          );
        }
      }
    }

    // check cache
    // 1. 读取缓存中的 CompiledFunctionResult 对象，如果有直接返回
    const key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key];
    }

    // compile
    // 2. 把模板编译为编译对象(render, staticRenderFns)，字符串形式的js代码
    const compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== "production") {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach((e) => {
            warn(
              `Error compiling template:\n\n${e.msg}\n\n` +
                generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn(
            `Error compiling template:\n\n${template}\n\n` +
              compiled.errors.map((e) => `- ${e}`).join("\n") +
              "\n",
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach((e) => tip(e.msg, vm));
        } else {
          compiled.tips.forEach((msg) => tip(msg, vm));
        }
      }
    }

    // turn code into functions
    const res = {};
    const fnGenErrors = [];

    // 3. 把字符串形式的js代码转换成js方法
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map((code) => {
      return createFunction(code, fnGenErrors);
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== "production") {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          `Failed to generate render function:\n\n` +
            fnGenErrors
              .map(({ err, code }) => `${err.toString()} in\n\n${code}\n`)
              .join("\n"),
          vm
        );
      }
    }
    // 4. 缓存并返回res对象(render, staticRenderFns方法)
    return (cache[key] = res);
  };
}
```
#### 模板编译过程-compile
合并选项，调用baseCompile进行编译。
```js
function compile(
      template: string,
      options?: CompilerOptions
    ): CompiledResult {
      const finalOptions = Object.create(baseOptions);
      const errors = [];
      const tips = [];

      let warn = (msg, range, tip) => {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (
          process.env.NODE_ENV !== "production" &&
          options.outputSourceRange
        ) {
          // $flow-disable-line
          const leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = (msg, range, tip) => {
            const data: WarningMessage = { msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(
            options.modules
          );
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (const key in options) {
          if (key !== "modules" && key !== "directives") {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      const compiled = baseCompile(template.trim(), finalOptions);
      if (process.env.NODE_ENV !== "production") {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }
```
#### 模板编译过程-baseCompile
`src/compiler/index.js`
```js
/* @flow */

import { parse } from "./parser/index";
import { optimize } from "./optimizer";
import { generate } from "./codegen/index";
import { createCompilerCreator } from "./create-compiler";

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 把模板转换成 ast 抽象语法树
  // 抽象语法树，用来以树形的方式描述代码结构
  const ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    // 优化抽象语法树
    optimize(ast, options);
  }
  // 把抽象语法树生成字符串形式的 js 代码
  const code = generate(ast, options);
  return {
    ast,
    // 渲染函数
    render: code.render,
    // 静态渲染函数，生成静态 VNode 树
    staticRenderFns: code.staticRenderFns,
  };
});
```
#### 模板编译过程-baseCompile-AST
- 什么是抽象语法树
    - 抽象语法树简称AST
    - 使用对象的形式描述树形的代码结构
    - 此处的抽象语法树是用来描述树形结构的HTML字符串
- 为什么要使用抽象语法树
    - 模板字符串转化成AST后，可以通过AST对模板做优化处理
    - 标记模板中的静态内容，在patch的时候直接跳过静态内容
    - 在patch的过程中静态内容不需要对比和重新渲染
#### 模板编译过程-baseCompile-parse
- 解析器将模板解析为抽象语树 AST，只有将模板解析成 AST 后，才能基于它做优化或者生成代码 
字符串。
    - `src\compiler\index.js`
```js
const ast = parse(template.trim(), options) 
//src\compiler\parser\index.js
parse()
```
- 查看得到的 AST tree
    - astexplorer
- 结构化指令的处理
    - v-if 最终生成单元表达式
```js
// src\compiler\parser\index.js 
// structural directives
// 结构化的指令 
// v-for
processFor(element)
processIf(element)
processOnce(element)
// src\compiler\codegen\index.js 
export function genIf (
 el: any,
 state: CodegenState, 
 altGen?: Function, 
 altEmpty?: string 
): string {
 el.ifProcessed = true // avoid recursion
 return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty) 
}
// 最终调用    genIfConditions 生成三元表达式
```
- v-if 最终编译的结果
```js
ƒ anonymous( 
){
with(this){
   return _c('div',{attrs:{"id":"app"}},[ 
     _m(0),
     _v(" "),
     (msg)?_c('p',[_v(_s(msg))]):_e(),_v(" "), 
     _c('comp',{on:{"myclick":onMyClick}}) 
   ],1)
} 
}
```
- v-if/v-for 结构化指令只能在编译阶段处理，如果我们要在 render 函数处理条件或循环只能使用 js 中的 if 和 for
```js
Vue.component('comp', { 
data: () {
return {
msg: 'my comp' 
}
},
 render (h) {
 if (this.msg) {
return h('div', this.msg) 
 }
return h('div', 'bar') 
}
})
```
#### 模板编译过程-baseCompile-optimize
- 优化抽象语法树，检测子节点中是否是纯静态节点
- 一旦检测到纯静态节点，例如：
    - 永远不会更改的节点
        - 提升为常量，重新渲染的时候不在重新创建节点
        - 在 patch 的时候直接跳过静态子树
```js
// src\compiler\index.js
if (options.optimize !== false) { 
 optimize(ast, options)
}
// src\compiler\optimizer.js 
/**
* Goal of the optimizer: walk the generated template AST tree 
* and detect sub-trees that are purely static, i.e. parts of 
* the DOM that never needs to change.
*
* Once we detect these sub-trees, we can: 
*
* 1. Hoist them into constants, so that we no longer need to 
*    create fresh nodes for them on each re-render;
* 2. Completely skip them in the patching process. 
*/
export function optimize (root: ?ASTElement, options: CompilerOptions) {
 if (!root) return
 isStaticKey = genStaticKeysCached(options.staticKeys || '')
 isPlatformReservedTag = options.isReservedTag || no
 // first pass: mark all non-static nodes.
 // 标记非静态节点
 markStatic(root)
 // second pass: mark static roots.
 // 标记静态根节点
 markStaticRoots(root, false) 
}
```
#### 模板编译过程-baseCompile-generate
```js
// src\compiler\index.js
const code = generate(ast, options) 
// src\compiler\codegen\index.js
export function generate ( 
 ast: ASTElement | void, 
 options: CompilerOptions 
): CodegenResult {
 const state = new CodegenState(options)
 const code = ast ? genElement(ast, state) : '_c("div")' 
 return {
   render: `with(this){return ${code}}`, 
   staticRenderFns: state.staticRenderFns
} 
}
// 把字符串转换成函数
// src\compiler\to-function.js 
function createFunction (code, errors) { 
 try {
   return new Function(code) 
} catch (err) {
   errors.push({ err, code }) 
   return noop
} 
}
```
#### 组件化机制
- 组件化可以让我们方便的把页面拆分成多个可重用的组件
- 组件是独立的，系统内可重用，组件之间可以嵌套
- 有了组件可以像搭积木一样开发网页
    - 下面我们将从源码的角度来分析 Vue 组件内部如何工作
        - 组件实例的创建过程是从上而下
        - 组件实例的挂载过程是从下而上
- 组件声明
    - 复习全局组件的定义方式
```js
Vue.component('comp', { 
template: '<h1>hello</h1>'
})
```
- Vue.component() 入口
    - 创建组件的构造函数，挂载到 Vue 实例的 vm.options.component.componentName = Ctor
```js
// src\core\global-api\index.js
// 注册    Vue.directive()、    Vue.component()、Vue.filter() 
initAssetRegisters(Vue)
// src\core\global-api\assets.js
if (type === 'component' && isPlainObject(definition)) { 
 definition.name = definition.name || id
 definition = this.options._base.extend(definition) 
}
……
// 全局注册，存储资源并赋值
// this.options['components']['comp'] = Ctor 
this.options[type + 's'][id] = definition
// src\core\global-api\index.js
// this is used to identify the "base" constructor to extend all plain- 
object
// components with in Weex's multi-instance scenarios. 
Vue.options._base = Vue
// src\core\global-api\extend.js 
Vue.extend()
```
- 组件构造函数的创建
```js
const Sub = function VueComponent (options) { 
 this._init(options)
}
Sub.prototype = Object.create(Super.prototype)
Sub.prototype.constructor = Sub
Sub.cid = cid++
Sub.options = mergeOptions( 
 Super.options,
 extendOptions 
)
Sub['super'] = Super
// For props and computed properties, we define the proxy getters on 
// the Vue instances at extension time, on the extended prototype. This 
// avoids Object.defineProperty calls for each instance created.
if (Sub.options.props) { 
 initProps(Sub)
 }
if (Sub.options.computed) { 
 initComputed(Sub)
}
// allow further extension/mixin/plugin usage
Sub.extend = Super.extend
Sub.mixin = Super.mixin
Sub.use = Super.use
// create asset registers, so extended classes 
// can have their private assets too.
ASSET_TYPES.forEach(function (type) { 
 Sub[type] = Super[type]
})
// enable recursive self-lookup 
if (name) {
 Sub.options.components[name] = Sub 
}
```
- 调试 Vue.component() 调用的过程
```js
<div id="app"> 
</div>
<script src="../../dist/vue.js"></script> 
<script>
 const Comp = Vue.component('comp', { 
   template: '<h2>I am a comp</h2>'
})
 const vm = new Vue({ 
   el: '#app',
   render (h) {
     return h(Comp) 
 }
})
</script>
```
#### 组件创建和挂载
- 组件 VNode 的创建过程
    - 创建根组件，首次 _render() 时，会得到整棵树的 VNode 结构
    - 整体流程：new Vue() --> $mount() --> vm._render() --> createElement() --> createComponent()
    - 创建组件的 VNode，初始化组件的 hook 钩子函数
```js
// 1. _createElement() 中调用    createComponent() 
// src\core\vdom\create-element.js
else if ((!data || !data.pre) &&
        isDef(Ctor = resolveAsset(context.$options, 'components', tag))) 
{
 // 查找自定义组件构造函数的声明 
 // 根据 Ctor 创建组件的 VNode 
 // component
 vnode = createComponent(Ctor, data, context, children, tag)
// 2. createComponent() 中调用创建自定义组件对应的    VNode 
// src\core\vdom\create-component.js
export function createComponent (
 Ctor: Class<Component> | Function | Object | void, 
 data: ?VNodeData,
 context: Component,
 children: ?Array<VNode>, 
 tag?: string
): VNode | Array<VNode> | void { 
 if (isUndef(Ctor)) {
   return 
}
 ……
 // install component management hooks onto the placeholder node
 // 安装组件的钩子函数    init/prepatch/insert/destroy
 // 初始化了组件的    data.hooks 中的钩子函数
 installComponentHooks(data)
 // return a placeholder vnode
 const name = Ctor.options.name || tag
 // 创建自定义组件的    VNode，设置自定义组件的名字
 // 记录this.componentOptions = componentOptions
 const vnode = new VNode(
   `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
   data, undefined, undefined, undefined, context,
   { Ctor, propsData, listeners, tag, children },
   asyncFactory 
)
 return vnode 
}
// 3. installComponentHooks() 初始化组件的 data.hook 
function installComponentHooks (data: VNodeData) {
 const hooks = data.hook || (data.hook = {})
 // 用户可以传递自定义钩子函数
 // 把用户传入的自定义钩子函数和    componentVNodeHooks 中预定义的钩子函数合并
 for (let i = 0; i < hooksToMerge.length; i++) {
   const key = hooksToMerge[i]
   const existing = hooks[key]
   const toMerge = componentVNodeHooks[key]
   if (existing !== toMerge && !(existing && existing._merged)) {
     hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
 } 
}
}
// 4. 钩子函数定义的位置（init()钩子中创建组件的实例）
// inline hooks to be invoked on component VNodes during patch 
const componentVNodeHooks = {
 init (vnode: VNodeWithData, hydrating: boolean): ?boolean {
   if (
     vnode.componentInstance &&
     !vnode.componentInstance._isDestroyed &&
     vnode.data.keepAlive
   ){
     // kept-alive components, treat as a patch
     const mountedNode: any = vnode // work around flow
   componentVNodeHooks.prepatch(mountedNode, mountedNode) 
   } else {
     // 创建组件实例挂载到    vnode.componentInstance 
     const child = vnode.componentInstance = 
createComponentInstanceForVnode(
       vnode,
       activeInstance 
    )
     // 调用组件对象的    $mount()，把组件挂载到页面
     child.$mount(hydrating ? vnode.elm : undefined, hydrating) 
 }
},
 prepatch (oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) 
{
   …… 
},
 insert (vnode: MountedComponentVNode) {
……
},
 destroy (vnode: MountedComponentVNode) {
……
} 
}
//5 .创建组件实例的位置，由自定义组件的    init() 钩子方法调用 
export function createComponentInstanceForVnode (
 vnode: any, // we know it's MountedComponentVNode but flow doesn't 
 parent: any, // activeInstance in lifecycle state
): Component {
 const options: InternalComponentOptions = { 
   _isComponent: true,
   _parentVnode: vnode, 
   parent
}
 // check inline-template render functions
 const inlineTemplate = vnode.data.inlineTemplate 
 if (isDef(inlineTemplate)) {
   options.render = inlineTemplate.render
   options.staticRenderFns = inlineTemplate.staticRenderFns 
}
 // 创建组件实例
 return new vnode.componentOptions.Ctor(options) 
}
```
#### 组件实例的创建和挂载过程
- Vue._update() --> patch() --> createElm() --> createComponent()
```js
// src\core\vdom\patch.js
// 1. 创建组件实例，挂载到真实    DOM
function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) { 
 let i = vnode.data
if (isDef(i)) {
   const isReactivated = isDef(vnode.componentInstance) && i.keepAlive
   if (isDef(i = i.hook) && isDef(i = i.init)) {
     // 调用    init() 方法，创建和挂载组件实例
     // init() 的过程中创建好了组件的真实    DOM,挂载到了    vnode.elm 上
     i(vnode, false /* hydrating */)
 }
   // after calling the init hook, if the vnode is a child component
   // it should've created a child instance and mounted it. the child
   // component also has set the placeholder vnode's elm.
   // in that case we can just return the element and be done.
   if (isDef(vnode.componentInstance)) {
     // 调用钩子函数（VNode的钩子函数初始化属性/事件/样式等，组件的钩子函数）
     initComponent(vnode, insertedVnodeQueue)
     // 把组件对应的    DOM 插入到父元素中
     insert(parentElm, vnode.elm, refElm)
     if (isTrue(isReactivated)) {
       reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
    }
     return true
 } 
}
}
// 2. 调用钩子函数，设置局部作用于样式
function initComponent (vnode, insertedVnodeQueue) { 
 if (isDef(vnode.data.pendingInsert)) {
   insertedVnodeQueue.push.apply(insertedVnodeQueue, 
vnode.data.pendingInsert)
   vnode.data.pendingInsert = null 
}
 vnode.elm = vnode.componentInstance.$el 
 if (isPatchable(vnode)) {
   // 调用钩子函数
   invokeCreateHooks(vnode, insertedVnodeQueue) 
   // 设置局部作用于样式
   setScope(vnode) 
} else {
   // empty component root.
   // skip all element-related modules except for ref (#3455) 
   registerRef(vnode)
   // make sure to invoke the insert hook 
   insertedVnodeQueue.push(vnode)
} 
}
// 3. 调用钩子函数
function invokeCreateHooks (vnode, insertedVnodeQueue) { 
 // 调用    VNode 的钩子函数，初始化属性/样式/事件等
 for (let i = 0; i < cbs.create.length; ++i) { 
   cbs.create[i](emptyNode, vnode)
}
 i = vnode.data.hook // Reuse variable 
 // 调用组件的钩子函数
 if (isDef(i)) {
   if (isDef(i.create)) i.create(emptyNode, vnode)
   if (isDef(i.insert)) insertedVnodeQueue.push(vnode) 
 }
}
```
## 其他
### Vue.set方法的原理？
```js
function set(target, key, val) {
    // 判断是否是数组
    if (Array.isArray(target)) {
        // 判断谁大谁小
        target.length = Math.max(target.length, key)
        // 执行splice
        target.splice(key, 1, val)
        return val
    }

    const ob = target.__ob__

    // 如果此对象没有不是响应式对象，直接设置并返回
    if (key in target && !(key in target.prototype) || !ob) {
        target[key] = val
        return val
    }

    // 否则，新增属性，并响应式处理
    defineReactive(target, key, val)
    return val
}
```
### Vue.delete方法的原理？
```js
function del (target, key) {
    // 判断是否为数组
    if (Array.isArray(target)) {
        // 执行splice
        target.splice(key, 1)
        return
    }

    const ob = target.__ob__

    // 对象本身就没有这个属性，直接返回
    if (!(key in target)) return


    // 否则，删除这个属性
    delete target[key]

    // 判断是否是响应式对象，不是的话，直接返回
    if (!ob) return
    // 是的话，删除后要通知视图更新
    ob.dep.notify()
}
```
### nextTick的原理？
```js
let callbacks = []; //回调函数
let pending = false;
function flushCallbacks() {
  pending = false; //把标志还原为false
  // 依次执行回调
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}
let timerFunc; //先采用微任务并按照优先级优雅降级的方式实现异步刷新
if (typeof Promise !== "undefined") {
  // 如果支持promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== "undefined") {
  // MutationObserver 主要是监听dom变化 也是一个异步方法
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== "undefined") {
  // 如果前面都不支持 判断setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 最后降级采用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    timerFunc();
  }
}
```
