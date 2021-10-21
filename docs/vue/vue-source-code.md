# Vue源码
## 准备工作
### 目录结构
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211006110605.png)
#### Flow 
- JavaScript的**静态类型检查器**
- Flow的静态类型检查错误是通过静态类型推断实现的
    - 文件开头通过 `// @flow`或者`/*@flow*/`
```js
/*@flow*/
function square(n:number):number{
    return n*n
}
```
### 打包和调试
#### 打包
- 打包工具Rollup
    - Vue.js源码打包使用的是Rollup，比Webpack轻量
    - Webpack把所有文件当做模块，Rollup只处理js文件更适合在Vue.js这样的库中使用
    - Rollup打包不会生成冗余的代码
- 安装依赖
```js
npm i
``
- 设置sourcemap
    - package.json 文件中的dev脚本中添加参数`--sourcemap`
```json
"dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
```
- 执行dev
    - `npm run dev`执行打包，用的是Rollup，-w参数是监听文件的变化，文件变化自动重新打包
#### Vue的不同构建版本
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211006114811.png)
- 术语
    - 完整版：同时包含编译器和运行时的版本。
    - 编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。template -> render函数
    - 运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。
    - UMD：UMD 版本可以通过 <script> 标签直接用在浏览器中。
    - CommonJS：CommonJS 版本用来配合老的打包工具比如 Browserify 或 webpack 1。这些打包工具的默认文件 (pkg.main) 是只包含运行时的 CommonJS 版本 (vue.runtime.common.js)。
    - ES Module：从 2.6 开始 Vue 会提供两个 ES Modules (ESM) 构建文件：
        - 为打包工具提供的 ESM：为诸如 webpack 2 或 Rollup 提供的现代打包工具。ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并将用不到的代码排除出最终的包。为这些打包工具提供的默认文件 (pkg.module) 是只有运行时的 ES Module 构建 (vue.runtime.esm.js)。
        - 为浏览器提供的 ESM (2.6+)：用于在现代浏览器中通过 <script type="module"> 直接导入。
    
    - 运行时 + 编译器 vs. 只包含运行时
        - 当使用 vue-loader 或 vueify 的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript。你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。
        - 因为运行时版本相比完整版体积要小大约 30%，所以应该尽可能使用这个版本。
    ```js
    // Compiler
    // 需要编译器，把 template 转换成 render 函数
    const vm = new Vue({
      el: '#app',
      template: '<h1>{{ msg }}</h1>',
      data: {
        msg: 'Hello Vue'
      }
    })
    // Runtime
    // 不需要编译器
    const vm = new Vue({  el: '#app',
     render (h) {
       return h('h1', this.msg) },
     data: {
       msg: 'Hello Vue' }
    })
    ``` 
    - 开发环境 vs. 生产环境模式
        - 对于 UMD 版本来说，开发环境/生产环境模式是硬编码好的：开发环境下用未压缩的代码，生产环境下使用压缩后的代码。

### 入口文件
 
