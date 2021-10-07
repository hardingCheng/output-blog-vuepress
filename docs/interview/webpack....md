# Webpack
## webpack初见
### vue-cli-service 运行过程
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210916134828.png)
### 前端开发的复杂化
前端开发目前我们面临哪些复杂的问题呢？
    ロ比如开发过程中我们需要通过**模块化的方式**来开发；
    ロ比如也会使用一些**高级的特性**来加快我们的**开发效率或者安全性**，比如通过 ES6+、Typescript：开发脚本逻辑，通过** sass、less **等方式来编写 css 样式代码；
    ロ比如开发过程中，我们还希望试试的监听文件的变化来并且**反映到浏览器**上，提高开发的效率 
    ロ比如开发完成后我们还需要将代码进行**压缩、合并以及其他相关的优化**

### 前端是三大框架脚手架
目前前端流行的三大框架：Vue、React、Angular
    口但是事实上，这三大框架的创建过程我们都是借助于脚手架（C）的；
    口事实上 vue-cli、create-react-app、angular-cli 都是基于 webpack 来帮助我们支持模块化、sass、TypeScript、打包优化等的.
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210916105653.png)

### Webpack是什么？
Webpack 是一个静态的模块化打包工具，为现代的 JavaScript 应用程序我们来对上面的解释进行拆解：
    口打包bundler: webpack 可以将帮助我们进行打包，所以它是一个打包工具。
    口静态的static：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）
    口模块化module: webpack 默认支持各种模块化开发，ES Module、CommonJS、AMD 等。
    口现代的modern：我们前端说过，正是因为现代前端开发面临各种各样的问题，才催生了Webpack的出现和发展；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210916110723.png)

### Webpack安装
webpack 的安装目前分为两个：**webpack**、**webpack-cli** 
那么它们是什么关系呢？
    口执行 webpack 命令，会执行 node_ modules 下的 bin 目录下的 webpack  
    口webpack 在执行时是依赖 webpack-cli 的，如果没有安装就会报错
    口而webpack-cli 中代码执行时，才是真正利用 webpack 进行编译和打包的过程；
    口所以在安装 webpack 时，我们需要同时安装 webpack-ci（第三方的脚手架事实上是没有使用 webpack-cli 的，而是类似于自己的 vue-service-cli 的东西）
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210916153607.png)

 ## webpack配置
 ### webpack文件配置
 - 在通常情况下，webpack需要打包的项目是非常复杂的，并且我们需要一系列的配置来满足要求，默认配置必然是不可以的。
 - 我们可以在根目录下创建一个webpack.config.js文件，来作为webpack的配置文件
```js
const path = require('path')

//导出配置信息
module.exports = {
    //入口文件
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        //必须是一个绝对路径
        path:path.resolve(__dirname, './dist')
    }
}
```
- 继续执行webpack命令，依然可以正常打包

#### 指定配置文件
- 但是如果我们的配置文件并不是webpack.config.js的名字，而是其他的名字呢？
    - 比如我们将webpack.config.js修改成了 wk.config.js；
    - 这个时候我们可以通过 --config 来指定对应的配置文件；
```js
webpack --config wk.config.js
```

### webpack依赖图（其实就是流程）
- webpack到底是如何对我们的项目进行打包的呢？
    - 事实上webpack在处理应用程序时，它会根据命令或者配置文件找到入口文件；
    - 从入口开始，会生成一个  依赖关系图，这个依赖关系图会包含应用程序中所需的所有模块（比如.js文件、css文件、图片、 字体等）；
    - 然后遍历图结构，打包一个个模块（根据文件的不同使用不同的loader来解析）；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210916110723.png)

### 不同文件进行配置不同的loader
### css-loader
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917120637.png)
- 需要一个loader来加载这个css文件，但是loader是什么呢？
    - loader 可以用于对模块的源代码进行转换；
    - 我们可以将css文件也看成是一个模块，我们是通过import来加载这个模块的；
    - 在加载这个模块时，webpack其实并不知道如何对其进行加载，我们必须制定对应的loader来完成这个功能；
    - 对于加载css文件来说，我们需要一个可以读取css文件的loader；
    - 这个loader最常用的是css-loader；
```js
npm install css-loader -D
```
- 如何使用这个loader来加载css文件呢？有三种方式：
    - 内联方式
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917121352.png)
    - CLI方式（webpack5中不再使用）；
        - 在webpack5的文档中已经没有了`--module-bind`；
        - 实际应用中也比较少使用，因为不方便管理；
    - 配置方式

#### loader配置方式
- 配置方式表示的意思是在我们的webpack.config.js文件中写明配置信息：
    - module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载）；
    - 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览；

- module.rules的配置如下：
    - rules属性对应的值是一个数组：[Rule]
    - 数组中存放的是一个个的Rule，Rule是一个对象，对象中可以设置多个属性：
        - **test属性**：用于对 resource（资源）进行匹配的，通常会设置成正则表达式； 
        - **use属性**：对应的值时一个数组：[UseEntry]
            - UseEntry是一个对象，可以通过对象的属性来设置一些其他属性
                - loader：必须有一个 loader属性，对应的值是一个字符串；
                - options：可选的属性，值是一个字符串或者对象，值会被传入到loader中；
                - query：目前已经使用options来替代；
            - 传递字符串（如：use: [ 'style-loader' ]）是 loader 属性的简写方式（如：use: [ { loader: 'style-loader'} ]）；
        - **loader属性**： Rule.use: [ { loader } ] 的简写。
```js
const path = require('path')

//导出配置信息
module.exports = {
    //入口文件
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname, './build')
    },

    //loader配置
    module: {
        rules:[
            {
                test: /\.css$/,
                // loader:'css-loader',
                // use: ['css-loader'],
                // 写法三
                use: [
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    }
}
```
### style-loader
- 我们已经可以通过css-loader来加载css文件了
    - 但是你会发现这个css在我们的**代码中并没有生效（页面没有效果）。**
    - 因为css-loader只是**负责将.css文件进行解析**，并**不会将解析之后的css插入到页面中；**
    - 如果我们希望再完成**插入style的操作**，那么我们还需要另外一个loader，就是**style-loader**；
```js
npm install style-loader -D
```

- 那么我们应该如何使用style-loader：
    - 在配置文件中，添加style-loader；
    - 注意：因为loader的执行顺序是**从右向左（或者说从下到上，或者说从后到前的）**，所以我们需要将**style-loader写到css-loader**的前面；
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917141623.png)
```js
const path = require('path')

//导出配置信息
module.exports = {
    //入口文件
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname, './build')
    },
    //loader配置
    module: {
        rules:[
            {
                test: /\.css$/,
                // loader:'css-loader',
                // use: ['css-loader'],
                // 写法三
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                ]
            },
        ]
    }
}
```
### less(sass和这个差不多)
会使用less、sass、stylus的预处理器来编写css样式，效率会更高。
- 那么，如何可以让我们的环境支持这些预处理器呢？
    - 首先我们需要确定，less、sass等编写的css需要通过工具转换成普通的css；
    ```css
    @fontSize: 50px;
    @fontWeight: 700;

    .content {
        font-size: @fontSize;
        font-weight: @fontWeight;
    } 
    ```
- Less处理工具
    - less工具来完成它的编译转换
    ```js
    npm install less -D
    
    npx less ./src/css/title.less > title.css
    ```
- less-loader
    - 但是在项目中我们会编写大量的css，它们如何可以自动转换呢？
        - 这个时候我们就可以使用less-loader，来自动使用less工具转换less到css；
        ```js
        npm install less-loader -D
        ```
        - 配置
        ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917142914.png)
        ```js
        const path = require('path')

        //导出配置信息
        module.exports = {
            //入口文件
            entry: './src/main.js',
            output: {
                filename: 'bundle.js',
                path:path.resolve(__dirname, './build')
            },
            //loader配置
            module: {
                rules:[
                    {
                        test: /\.css$/,
                        // loader:'css-loader',
                        // use: ['css-loader'],
                        // 写法三
                        use: [
                            { loader: 'style-loader'},
                            { loader: 'css-loader'},
                        ]
                    },
                    {
                        test: /\.less$/,
                        // loader:'css-loader',
                        // use: ['css-loader'],
                        // 写法三
                        use: [
                            { loader: 'style-loader'},
                            { loader: 'css-loader'},
                            { loader: 'less-loader'},
                        ]
                    }
                ]
            }
        }
        ```
### 浏览器兼容性
**开发中，浏览器的兼容性问题**，我们应该如何去解决和处理？
这里指的兼容性是**针对不同的浏览器支持的特性**：比如css特性、js语法，之间的兼容性；

- 它们的市场占率是多少？我们要不要兼容它们呢？
    - 其实在很多的脚手架配置中，都能看到类似于这样的配置信息：
        - 这里的百分之一，就是指市场占有率
        ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917143343.png)

- 认识browserslist工具
    - 如何可以在css兼容性和js兼容性下共享我们配置的兼容性条件呢？
    - 就是当我们**设置了一个条件： > 1%**；
    - **css要兼容市场占有率大于1%的浏览器，js也要兼容市场占有率大于1%的浏览器；**
    - 通过工具来达到这种兼容性的，比如后面ostcss-prest-env、babel、autoprefixer等
- 如何可以让他们共享我们的配置呢？
    - 这个问题的答案就是Browserslist；
- Browserslist是什么？Browserslist是一个在不同的前端工具之间，共享目标浏览器和Node.js版本的配置：
    - Autoprefixer
    - Babel
    - postcss-preset-env
    - eslint-plugin-compat
    - stylelint-no-unsupported-browser-features
    - postcss-normalize
    - obsolete-webpack-plugin
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917144705.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917144744.png)

- 命令行使用browserslist
    ```js
    npx browserslist ">1%, last 2 version, not dead"
    ```
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917144957.png)

- 配置browserslist
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917145026.png)
    
