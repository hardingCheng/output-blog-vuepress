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
