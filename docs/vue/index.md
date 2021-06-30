# Vue使用技巧
## Vue技巧
#### 路由参数解耦
```js
// 一般在组件内使用路由参数，大多数人会这样做：
export default {
    methods: {
        getParamsId() {
            return this.$route.params.id
        }
    }
}
// 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
//
// 正确的做法是正确的做法是通过 props 解耦
const router = new VueRouter({
    routes: [{
        path:  /user/:id ,
        component: User,
        props: true,//开启props
    }]
})
// 将路由的 props 属性设置为 true 后，组件内可通过 props 接收到 params 参数
export default {
    props: [ id ],
    methods: {
        getParamsId() {
            return this.id
        }
    }
}
```

#### 函数式组件
:::tip 提示
函数式组件是无状态，它无法实例化，没有任何的生命周期和方法。创建函数式组件也很简单，只需要在模板添加 `functional` 声明即可。**一般适合只依赖于外部数据的变化而变化的组件，因其轻量，渲染性能也会有所提高。**
组件需要的一切都是通过 `context` 参数传递。它是一个上下文对象，具体属性查看文档。这里 `props` 是一个包含所有绑定属性的对象。
:::

```js
//函数式组件
<template functional>
    <div class="list">
        <div class="item" v-for="item in props.list" :key="item.id" @click="props.itemClick(item)">
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>
        </div>
    </div>
</template>
```
```js
//父组件调用
<template>
    <div>
        <List :list="list" :itemClick="item => (currentItem = item)" />
    </div>
</template>

import List from  @/components/List.vue
export default {
    components: {
        List
    },
    data() {
        return {
            list: [{
                title:  title ,
                content:  content
            }],
            currentItem:
        }
    }
}
```
#### 样式穿透
:::tip 提示
在开发中修改第三方组件样式是很常见，但由于 `scoped` 属性的样式隔离，可能需要去除 scoped 或是另起一个 `style` 。这些做法都会带来副作用（组件样式污染、不够优雅），样式穿透在css预处理器中使用才生效。
我们可以使用 `>>>` 或 `/deep/` 解决这一问题。
:::
```css
<style scoped>
外层 >>> .el-checkbox {
  display: block;
  font-size: 26px;

  .el-checkbox__label {
    font-size: 16px;
  }
}
</style>

<style scoped>
/deep/ .el-checkbox {
  display: block;
  font-size: 26px;
  .el-checkbox__label {
    font-size: 16px;
  }
}
</style>
```
#### watch高阶使用
组件创建后watch能够立即执行。立即执行。
```js
export default {
    data() {
        return {
            name:  Joe
        }
    },
    watch: {
        name: {
            handler:  sayName ,
            immediate: true  //立即执行
        }
    },
    methods: {
        sayName() {
            console.log(this.name)
        }
    }
}
```
在监听对象时，对象内部的属性被改变时无法触发 watch ，我们可以为其设置深度监听。深度监听。
```js
export default {
    data: {
        studen: {
            name:  Joe ,
            skill: {
                run: {
                    speed:  fast
                }
            }
        }
    },
    watch: {
        studen: {
            handler:  sayName ,
            deep: true //对于对象设置为深度 监听
        }
    },
    methods: {
        sayName() {
            console.log(this.studen)
        }
    }
}
```
使用数组可以设置多项，形式包括字符串、函数、对象。触发监听执行多个方法。
```js
export default {
    data: {
        name:  Joe
    },
    watch: {
        name: [
             sayName1 ,
            function(newVal, oldVal) {
                this.sayName2()
            },
            {
                handler:  sayName3 ,
                immaediate: true
            }
        ]
    },
    methods: {
        sayName1() {
            console.log( sayName1==> , this.name)
        },
        sayName2() {
            console.log( sayName2==> , this.name)
        },
        sayName3() {
            console.log( sayName3==> , this.name)
        }
    }
}
```
watch本身无法监听多个变量。但我们可以将需要监听的多个变量通过计算属性返回对象，再监听这个对象来实现“监听多个变量”。
```js
export default {
    data() {
        return {
            msg1:  apple ,
            msg2:  banana
        }
    },
    compouted: {
        msgObj() {
            const { msg1, msg2 } = this
            return {
                msg1,
                msg2
            }
        }
    },
    watch: {
        msgObj: {
            handler(newVal, oldVal) {
                if (newVal.msg1 != oldVal.msg1) {
                    console.log( msg1 is change )
                }
                if (newVal.msg2 != oldVal.msg2) {
                    console.log( msg2 is change )
                }
            },
            deep: true
        }
    }
}
```
#### 自定义组件双向绑定
修改组件的 `model` 选项，自定义绑定的变量和事件。
```js
<my-switch v-model="num" value="some value"></my-switch>
export default {
    model: {
        prop:  num ,
        event:  update
    },
    props: {
        value: {
            type: String,
            default:''
        },
        num: {
            type: Number,
            default: 0
        }
    },
    methods: {
        numChange() {
            this.$emit( update , this.num++)
        }
    }
}
```
#### 监听组件生命周期
使用 `@hook `即可监听组件生命周期，组件内无需做任何改变。同样的， created 、 updated 等也可以使用此方法
```js
<template>
    <List @hook:mounted="listenMounted" />
</template>
```
#### 程序化的事件侦听器
可以通过 `$on` 或 `$once` 监听页面生命周期销毁来解决这个问题。
```js
export default {
    mounted() {
        this.creatInterval( hello )
        this.creatInterval( world )
    },
    creatInterval(msg) {
        let timer = setInterval(() => {
            console.log(msg)
        }, 1000)
        this.$once( hook:beforeDestroy , function() {
            clearInterval(timer)
        })
    }
}
```
#### 超级难点 手动挂载组件

```js
// Message/index.js

import Vue from  vue
import Index from  ./index.vue

let messageInstance = null
let MessageConstructor = Vue.extend(Index)

let init = () => {
    messageInstance = new MessageConstructor()
    messageInstance.$mount()
    document.body.appendChild(messageInstance.$el)
}

let caller = (options) => {
    if (!messageInstance) {
        init(options)
    }
    messageInstance.add(options)
}

export default {
    // 返回 install 函数 用于 Vue.use 注册
    install(vue) {
        vue.prototype.$message = caller
    }
}
```
```js
// main.js
import Message from  @/components/Message/index.js
Vue.use(Message)


this.$message({
    type:  success ,
    content:  成功信息提示 ,
    duration: 3000
})
```




## Vue涉及的一些知识
### Vite
#### Vite的特点
- 快速的冷启动，不需要等待打包。
- 即时的热模块更新。
- 真正的按需编译，不用等待整个项目编译完成。

Vue 的代码都是基于 ES Module 规范去写的。一个巨大的依赖图能够通过import 和 export的桥梁在文件之间被完美搭建起来。这些工具在进行本地调试的时候会把模块预先打包成浏览器可读的js bundle格式，为了进行这一过程的优化，就出现了懒加载这种方式，但懒加载并不能解决构建的问题，Webpack依旧需要提前构建异步路由需要的模块。

Vite能够直接利用浏览器本机的ES模块进行开发环境搭建，并且直接放弃捆绑步骤。

无论我们的应用程序大小如何，HMR都能稳定的快速更新。捆绑生产时，Vite附带了一个预配置的构建命令，该命令可以立即进行许多性能优化。此外，Vite还能提供热模块替换，这意味着我们在开发过程中，可以在浏览器中看到代码刷新，甚至可以使用它来编译项目的精简版本，并直接用于生产。通过使用它，我们可以快速启动Vue或React项目，而无需再使用Vue CLI或Create React App。高效、快速就是它的代名词。

#### Vite的作用
1. 去掉打包步骤

打包的概念是开发者利用打包工具将应用各个模块集合在一起形成 bundle，以一定规则读取模块的代码——以便在不支持模块化的浏览器里使用。

为了在浏览器里加载各模块，打包工具会借助胶水代码用来组装各模块，比如 webpack 使用 map 存放模块 id 和路径，使用 webpack_require 方法获取模块导出。

vite 利用浏览器原生支持模块化导入这一特性，省略了对模块的组装，也就不需要生成 bundle，所以打包这一步就可以省略了。

2. 实现按需打包

webpack 之类的打包工具会将各模块提前打包进 bundle 里，但打包的过程是静态的——不管某个模块的代码是否执行到，这个模块都要打包到 bundle 里，这样的坏处就是随着项目越来越大打包后的 bundle 也越来越大。

开发者为了减少 bundle 大小，会使用动态引入 import() 的方式异步的加载模块（ 被引入模块依然需要提前打包)，又或者使用 tree shaking 等方式尽力的去掉未引用的模块，然而这些方式都不如 vite 的优雅，vite 可以只在需要某个模块的时候动态（借助 import() ）的引入它，而不需要提前打包，虽然只能用在开发环境，不过这就够了。

3. 我们有特定的需求，Vite允许我们自行设置，可以覆盖Rollup和各种Rollup插件的配置。
#### vite 如何处理 ESM
vite 在浏览器里使用 ES module 是使用 http 请求拿到模块，所以 vite 必须提供一个 web server 去代理这些模块，上文中提到的 koa 就是负责这个事情，vite 通过对请求路径的劫持获取资源的内容返回给浏览器，不过 vite 对于模块导入做了特殊处理。