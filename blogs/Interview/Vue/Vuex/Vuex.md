---
title: Vuex 面试题
date: 2022-01-02
tags:
  - Vuex
categories:
  - Vuex
---
## Vuex
### Vuex理解
- vue 一般是单项数据流，当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：
    - 多个视图依赖于同一状态、来自不同视图的行为需要变更同一状态。
    - 作用：多个组件共享数据或者是跨组件传递数据
- vuex 是专门为 vue 提供的全局状态管理系统，用于多个组件中数据共享、数据缓存等。（无法持久化、内部核心原理是通过创造一个全局实例 new Vue）
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015154102.png)
### Vuex数据流向？
1. Components 收集用户反馈触发 Actions,Actions 是负责处理从 Vue Components 接收到的用户行为的模块。
   1. 调用其他 action
   2. 发送异步请求以及提交（commit） mutations
2. Actions 提交（commit）Mutations，请求修改 State
3. Mutation 同步修改 State
4. State 改变后重新渲染（Render）Components
### 为什么 Vuex 的 mutation 中不能做异步操作？
Vuex 中所有的状态更新的唯一途径都是 mutation，异步操作通过 Action 来提交 mutation 实现，这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。 每个 mutation 执行完成后都会对应到一个新的状态变更，这样 devtools 就可以打个快照存下来，然后就可以实现 time-travel 了。如果 mutation 支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。
### Vuex 页面刷新数据丢失怎么解决
需要做 vuex 数据持久化 一般使用本地存储的方案来保存数据 可以自己设计存储方案 也可以使用第三方插件。
### vuex 中如何组合使用多个 action。
业务逻辑场景：存在 2 个 action，actionA 和 actionB，先执行完 actionA 才能执行 actionB。
```js
actions:{
    actionA({commit}){
        return new Promise((reslove,reject)=>{
            commit('someMutationA')
            reslove()
        })
    }
}
// 第一种 在组件里派发action
this.$store.dispatch('actionA').then(()=>{
    // ...派发其他的action或者写其他的逻辑
})
// 第二种 在actions里派发另一个action
actions:{
    actionB({dispatch, commit}){
        return dispatch('actionA').then(()=>{
            commit('someOtherMutation')
        })
    }
}
// 使用async/await的写法
actions:{
    async actionA({commit}){
        commit('someMutationA', await someMutationA())
    },
    async actionB({dispatch,commit}){
        await dispatch('actionA') // 等待actionA完成
        commit('someMutationB', await someMutationB)
    }
}
```
### Vuex 是怎么实现的？

install 函数：用来注册插件到 vue 里（说白了就是在 vue 中执行这个函数，并把 vue 当作参数传入此函数，使用 vue 的方法和绑定 store 到各个组件上）

store 类：state、getters、mutations、actions、modules、plugins
辅助函数：mapState、mapActions、mapMutations

#### 怎么让每个 vue 组件都能拿到\$store？
给每个实例注入$store。

在 install 方法里面，用 vue.mixin 混入，在 beforeCreate 的生命周期的钩子函数，使得当每个组件实例化的时候都会调用这个函数，给自己赋值一个 store 属性

```js
let Vue;
const install = (_Vue) => {
  Vue = _Vue;
  // 使用vue的混入方法，在创建之前，给每个组件都增加$store属性
  Vue.mixin({
    // 创建之前会被执行
    beforeCreate() {
      // 根实例有store属性
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        // 根实例上没有的store属性，往父亲节点找
        // new Vue({store}) 这里已经在根组件挂载有store属性
        this.$store = this.$parent && this.$parent.$store;
      }
    },
  });
};
export default {
  install, // 给用户提供一个install方法，默认会被调用
};
```

#### 怎么实现 state 数据响应式？
利用 vue 的响应式原理，让 state 的修改都可以更新回视图，而不是单纯获取 state 数据。

```js
class Store {
  constructor(options) {
    // this.vm  = options.state   只是单纯获取state数据，但是数据修改不会更新界面
    /** 借用Vue的双向绑定机制让Vuex中data变化实时更新界面 */
    this.vm = new _Vue({
      data: {
        state: options.state,
      },
    });
  }
  /* 类的属性访问器
    访问state对象时候，就直接返回响应式的数据
    Object.defineProperty get 同理
  */
  get state() {
    return this.vm.state;
  }
}
```

#### getters 怎么实现？
getters 从根本上就是 computed，给你返回一些派生的状态（对数据进行过滤操作）。

遍历用户传入的参数获取属性名，利用 Object.defineProperty 的 get 获取方法执行的结果，赋值到 getters 对象对应的属性名上，用户通过 this.getters.myName 就可以调用对应的值

```js
// 简化代码，封装遍历方法
const forEach = (obj, callback) => {
  Object.keys(obj).forEach((key) => {
    callback(key, obj[key]);
  });
};
forEach(getters, (getterName, fn) => {
  Object.defineProperty(store.getters, getterName, {
    get() {
      // 让getter执行自己的状态 传入
      return fn(state);
    },
  });
});
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106190231.png)
#### commit 怎么去触发 mutation
1）不能直接改变 store 中的状态。改变 store 中的状态的唯一方法是提交 (commit) mutation。
2）每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。调用 store.commit(type, payload) 方法来触发 mutations 中的相关方法。

```js
forEach(mutations, (mutationName, fn) => {
  store.mutations[mutationName] || (store.mutations[mutationName] = []);
  store.mutations[mutationName].push((payload) => {
    // 先把用户传入的mutations参数的属性和方法保存到store实例上的this.mutations对象里面
    fn(state, payload); // 参数是state数据
  });
});

// 用户通过this.$store.commit('syncAdd', 10) 传入属性名和荷载，找到对应的函数，遍历执行
commit = (type, payload) => {
  this.mutations[type].forEach((fn) => fn(payload));
};
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106190533.png)
#### dispatch 怎么触发 actions？
actions 和 mutations 的区别：
①action 提交的是 mutation，而不是直接变更状态
②actions 用于处理一些异步事件，而 mutations 一般用于处理同步事件
③ 通过 store.dispatch 触发 action，参数是 vuex.store 实例（因为 modules 需要获取上下文）
通过 store.commit 触发 mutation，参数是 state,payload。actions 也可以实现同步函数，但是 vuex 要求必须遵从原则

```js
forEach(actions, (actionName, fn) => {
  store.actions[actionName] || (store.actions[actionName] = []);
  store.actions[actionName].push((payload) => {
    fn(store, payload); // 参数是vuex.store实例
  });
});

// 用户通过this.$store.dispatch('syncAdd', 10) 传入属性名和荷载，找到对应的函数，遍历执行
dispatch = (type, payload) => {
  this.actions[type].forEach((fn) => fn(payload));
};
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106190646.png)
#### plugins 是怎么实现？(持久化插件 plugins)
作用是：把 state 都存储在 localStorage 里面，刷新不会丢失数据
原理：发布订阅模式
实例 store 的时候，遍历 plugins 里面的函数，并执行 this.subscribe() 订阅到 sote.\_subscribe 数组上
当监测到 mutation 有变化的时候，依次执行所有的订阅

```js
// store.js
const persits = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem("vuex-state", JSON.stringify(state));
  });
};
export default new Vuex.Store({
  // 导出一个store实例
  plugins: [
    persits, // 发布，通知所有的订阅
  ],
});

/** 安装模块 */
const installModule = (store, state, path, rootModule) => {
  let mutations = rootModule._raw.mutations;
  if (mutations) {
    forEach(mutations, (mutationName, fn) => {
      store.mutations[mutationName] || (store.mutations[mutationName] = []);
      store.mutations[mutationName].push((payload) => {
        fn(state, payload);
        console.log(state);
        // 发布 让所有订阅依次执行
        store._subscribes.forEach((fn) =>
          fn({ type: mutationName, payload }, store.state)
        );
      });
    });
  }
};

class Store {
  constructor(options) {
    // 将用户的状态放到store中
    // this.state = options.state
    /** 借用Vue的双向绑定机制让Vuex中data变化实时更新界面 */
    this.vm = new _Vue({
      data: {
        state: options.state,
      },
    });
    // 只循环一次，现在需要把子modules里面的getters、mutations、actions都放到对应的对象里
    /** 保存一份到本身实例 */
    this._options = options;
    this._subscribes = [];
    // 实例store的时候，遍历plugins里面的函数，并执行 this.subscribe() 订阅
    options.plugins.forEach((plugin) => plugin(this));
  }
  subscribe(fn) {
    this._subscribes.push(fn); // 订阅
  }
}
```
#### mapState 怎么实现？
抽象形容：mapState 是 state 的语法糖。

```js
import { mapState } from 'vuex';
 // computed只有mapState的情况下
  computed: mapState({
    counts: 'counts', // 第一种写法
    add: (state) => this.str + ':' + state.add, // 第二种写法
})

// 还有其他的情况下
computed: {
  /*
  ...mapState({
    counts: state => state.counts,
    add: state => state.add
  })
  */
  ...mapState([  // 第三种写法：通过数组来赋值
    'counts',
     'add'
  ])
},
```

…mapState 相当于解构赋值给 computed，浅拷贝。

```js
let mapState = {
  name: "ccc",
  age: 1,
  child: {
    count: 2,
  },
};

let computed = { ...mapState };
computed.age = 18;
computed.child.count = 3;
console.log(computed); // {name: "ccc", age: 18, child :{count:3}}
console.log(mapState); // {name: "ccc", age: 1, child :{count:3}}
```

1）…mapState([ ‘age’]) 会执行一个函数，返回一个对象，通过…解构到 computed 上
2）执行函数时会判断传入的是字符串，还是对象或数组？
① 如果是对象或数组，都去根实例的 state 上找（所有 module.state 都挂载在 store.state 上）
对象{ age: state => state.age }：执行函数并传入根 state 作为参数，让它返回对应 value
数组[ ‘age’ ]：通过 key 找到根 state 上的对应的 value
② 如果是字符串，说明是用命名空间来获取值，则通过第一个参数（命名空间名）去根实例 store.\_modulesNamespaceMap 上找到对应的 module 模块，再通过第二个参数（key）找到 state 上对应的 value 返回

总结：都是通过 key 值在 state 上找到 value 值，组装成对象返回，然后再解构赋值到 computed 上
#### 命名空间
namespaced：vuex 中的 store 分模块管理，需要在 store 的 index.js 中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的 namespaced:true，之后在不同页面中引入 getter、actions、mutations 时，需要加上所属的模块名

当使用 mapState, mapGetters, mapActions 和 mapMutations 这些函数来绑定带命名空间的模块时，写起来可能比较繁琐：

```js
// store.js
const moduleE = {
  namespaced: true,
  state: {
    name: 'xiaoming',
    age: 1
  }
}
export default new Vuex.Store({
  modules: {
    // 将模块挂载到根store
    moduleE, // 等同于moduleE : 等同于moduleE, 上面模块的命名空间是moduleE
    // eee: moduleE, // 下面模块的命名空间是 eee
 }
});



// 带命名空间的绑定函数
computed: {
  // ...mapState('命名空间名', ["name"])   在辅助函数mapState的第一参数上，填写上模块的命名空间名
 // ...mapState('moduleE', {
 //   name: 'name'
// })
  ...mapState('moduleE', ['name'])
}


// 实现原理
 computed: {
    // ...mapState('moduleE', { // 命名空间名用法1
    //   name: 'name'
    // })
   // ...mapState('moduleE', ['name']) // 命名空间名用法2
    // ...mapState({ // 用法1
    //   age: state => state.age
    // })
     ...mapState([ // 用法2
       'age'
     ])
  },
```

命名空间原理：
1）安装每一个模块的时候，判断有没有 namespaced，为否时，则给他设置 false，为 true 则找到 moduleName 和对应 module，挂载到根_modulesNamespaceMap={}对象上

2）当通过 mapState 取值的时候就可以通过命名空间名到根\_modulesNamespaceMap 上找到对应的值
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106191310.png)
### 手写 Vuex？
```js
/* my-vuex/index.js */
// 保存一个全局的 Vue 之后会用到
let _Vue = null;

// Store 类
class Store {
  // 先完成构造方法,构造方法接收一个对象
  constructor(options) {
    // 赋初值
    const state = options.state || {};
    const mutations = options.mutations || {};
    const actions = options.actions || {};
    const getters = options.getters || {};
    // 1.实现state 把 state 中的数据转为 响应式,直接用 Vue 中的 observable
    this.state = _Vue.observable(state);

    // 2.实现 getters 这里为什么不知直接 把this.getters 赋值 {} 而是 Object.create(null)
    // 好处是不用考虑会和原型链上的属性重名问题
    this.getters = Object.create(null);
    // 我们要为 getters 添加一个 get 方法，这里就要使用 数据劫持
    // 先拿到 getters 中每一个 方法
    Object.keys(getters).forEach((key) => {
      // 第一个参数是给谁添加 ，第二个是添加的属性名，第三个对象里面可以设置很多参数
      // 比如 可枚举，可配置，get，set
      Object.defineProperty(this.getters, key, {
        // 为 this.getters 每一项都添加 一个 get 方法
        get: () => {
          // 还记得吧，getters 中的方法 默认把 state传入进去,改变this指向
          return getters[key].call(this, this.state);
        },
      });
    });

    // 3.实现 mutations
    // 先遍历 mutaions 中的对象进行改变 this指向
    this.mutations = {};
    Object.keys(mutations).forEach((key) => {
      this.mutations[key] = (params) => {
        // 改变this指向 ，默认是要传入 state
        mutations[key].call(this, this.state, params);
      };
    });

    // 4.实现 actions
    // 和 mutations 一样我们需要重新改变 this 指向
    this.actions = {};
    Object.keys(actions).forEach((key) => {
      this.actions[key] = (params) => {
        // 改变this指向 ，默认是要传入 store也就是 this
        actions[key].call(this, this, params);
      };
    });
  }

  // 5.实现commit 方法
  // 用于 触发mutations中的方法
  // 第一个参数是事件名 ，第二个是参数
  commit = (eventName, params) => {
    this.mutations[eventName](params);
  };

  // 6.实现 dispatch 方法
  // 用于 触发actions中的异步方法
  // 第一个参数是事件名 ，第二个是参数
  dispatch = (eventName, params) => {
    this.actions[eventName](params);
  };
}

// 因为Vuex 需要 Vue.use() 安装，所以我们必须要有个 install 方法 传入 Vue
// 第二个参数是一个可选对象
function install(Vue) {
  // 保存到全局 _Vue
  _Vue = Vue;
  // 全局注册混入 这样在所有的组件都能使用 $store
  _Vue.mixin({
    // beforeCreate vue初始化阶段
    // 在 beforeCreate 这个时候把 $store 挂载到 Vue 上
    beforeCreate() {
      // 判断 Vue 传递的对象是否有 store 需要挂载
      // this.$options  是new Vue() 传递的对象
      if (this.$options.store) {
        // 把 store 挂载到 Vue 原型上
        _Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

// mapState
const mapState = (params) => {
  // 这里我只写个数组的 起别名的就没弄哈
  if (!Array.isArray(params))
    throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数");
  // 第一步就是要初始 obj ,不然[item] 会报错
  let obj = {};
  // 实现逻辑很简单，就是接收传递的的参数
  // 去this.$store寻找
  params.forEach((item) => {
    obj[item] = function() {
      return this.$store.state[item];
    };
  });
  return obj;
};

// mapMutations
const mapMutations = (params) => {
  // 这里我只写个数组的 起别名的就没弄哈
  if (!Array.isArray(params))
    throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数");
  // 第一步就是要初始 obj ,不然[item] 会报错
  let obj = {};
  // 实现逻辑很简单，就是接收传递的的参数
  // 去this.$store寻找
  params.forEach((item) => {
    obj[item] = function(params) {
      return this.$store.commit(item, params);
    };
  });
  return obj;
};

// mapActions
const mapActions = (params) => {
  // 这里我只写个数组的 起别名的就没弄哈
  if (!Array.isArray(params))
    throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数");
  // 第一步就是要初始 obj ,不然[item] 会报错
  let obj = {};
  // 实现逻辑很简单，就是接收传递的的参数
  // 去this.$store寻找
  params.forEach((item) => {
    obj[item] = function(params) {
      return this.$store.dispatch(item, params);
    };
  });
  return obj;
};

// mapGetters
const mapGetters = (params) => {
  // 这里我只写个数组的 起别名的就没弄哈
  if (!Array.isArray(params))
    throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数");
  // 第一步就是要初始 obj ,不然[item] 会报错
  let obj = {};
  // 实现逻辑很简单，就是接收传递的的参数
  // 去this.$store寻找
  params.forEach((item) => {
    obj[item] = function() {
      return this.$store.getters[item];
    };
  });
  return obj;
};
// 导出
export { mapState, mapMutations, mapActions, mapGetters };

// 导出 install 和 store
export default {
  install,
  Store,
};
```
