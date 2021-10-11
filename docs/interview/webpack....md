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

### Loader
#### css-loader
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
#### style-loader
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
#### less(sass和这个差不多)
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
#### PostCSS
- 什么是PostCSS呢？
    - PostCSS是一个通过JavaScript来转换样式的工具；
    - 这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置；
    - 但是实现这些工具，我们需要借助于PostCSS对应的插件；
- 如何使用PostCSS呢？主要就是两个步骤：
    - 第一步：查找PostCSS在构建工具中的扩展，比如webpack中的postcss-loader；
    - 第二步：选择可以添加你需要的PostCSS相关的插件；
- 在webpack中使用postcss就是使用postcss-loader来处理的；
    - `npm install postcss-loader -D`
    - 因为postcss需要有对应的插件才会起效果，所以我们需要配置它的plugin；
```js
{
        // 规则使用正则表达式
        test: /\.css$/, // 匹配资源
        use: [
          // { loader: "css-loader" },
          // 注意: 编写顺序(从下往上, 从右往做, 从后往前)
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          }
        ],
        // loader: "css-loader"
      },
```
- 单独的postcss配置文件
    - 将这些配置信息放到一个单独的文件中进行管理：
        - 根目录下创建postcss.config.js
```js
// postcss.config.js

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```
##### postcss-preset-env
- 事实上，在配置postcss-loader时，我们配置插件并不需要使用autoprefixer。
- 我们可以使用另外一个插件：postcss-preset-env
    -  postcss-preset-env也是一个postcss的插件；
    -  它可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环 境添加所需的polyfill；
    -  也包括会自动帮助我们添加autoprefixer（所以相当于已经内置了autoprefixer）；
- `npm install postcss-preset-env -D`
```js
// webpack.config.js
{
   loader: "postcss-loader",
   options: {
     postcssOptions:{
     plugins:[
       require('postcss-preset-env')
     ]
   }
 }
}


// postcss.config.js
module.exports = {
  plugins: [
    'postcss-preset-env'
  ]
}
```
#### file-loader
- 要处理jpg、png等格式的图片，我们也需要有对应的loader：file-loader
    - file-loader的作用就是帮助我们处理import/require()方式引入的一个文件资源，并且会将它放到我们输出的 文件夹中；
- `npm install file-loader -D`
- 配置处理图片的Rule：
```js
// webpack.config.js
{
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
```
- 文件的名称规则
    - 有时候我们处理后的文件名称按照一定的规则进行显示：
        - 比如保留原来的文件名、扩展名，同时为了防止重复，包含一个hash值等；
    - 这个时候我们可以使用PlaceHolders来完成，webpack给我们提供了大量的PlaceHolders来显示不同的内容
    - 我们这里介绍几个最常用的placeholder：
        -   [ext]：  处理文件的扩展名；
        -   [name]：处理文件的名称；
        -  [hash]：文件的内容，使用MD4的散列函数处理，生成的一个128位的hash值（32个十六进制）；
        -  [contentHash]：在file-loader中和[hash]结果是一致的（在webpack的一些其他地方不一样，后面会讲到）；
        -  [hash:<length>]：截图hash的长度，默认32个字符太长了；
        -  [path]：文件相对于webpack配置文件的路径；
    - 设置文件名称
        - 这个也是vue的写法
        ```js
            // webpack.config.js
            {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: "img/[name].[hash:6].[ext]",
                }
              }
            ]
          }
        ```
    - 设置文件的存放路径
        - 通过 img/ 已经设置了文件夹，这个也是vue、react脚手架中常见的设置方式：
            - 其实按照这种设置方式就可以了；
            - 当然我们也可以通过outputPath来设置输出的文件夹；
        ```js
            {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: "[name].[hash:6].[ext]",
                  outputPath:'img'
                }
              }
            ]
          }
        ```
#### url-loader
- url-loader和file-loader的工作方式是相似的，但是可以将较小的文件，转成base64的URI。
- `npm install url-loader -D`
- 默认情况下url-loader会将所有的图片文件转成base64编码
```js
//webpack.config.js
{
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
        name: "img/[name].[hash:6].[ext]",
      }
    }
  ]
}
```
- url-loader的limit
    - 但是开发中我们往往是小的图片需要转换，但是大的图片直接使用图片即可
        - 这是因为小的图片转换base64之后可以和页面一起被请求，减少不必要的请求过程；
        -  而大的图片也进行转换，反而会影响页面的请求速度；
    - 我们如何可以限制哪些大小的图片转换和不转换呢？
        - url-loader有一个options属性limit，可以用于设置转换的限制；
        - 下面的代码38kb的图片会进行base64编码，而295kb的不会；
```js
{
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "[name].[hash:6].[ext]",
              outputPath:"img",
              limit: 100 * 1024
            }
          }
        ]
      }
```
### asset  module  type
- 当前使用的webpack版本是webpack5
    - 在webpack5之前，加载这些资源我们需要使用一些loader，比如raw-loader 、url-loader、file-loader；
    - 在webpack5之后，我们可以直接使用资源模块类型（asset module type），来替代上面的这些loader；
- 资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：
    -  asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现；
    -  asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现；
    -  asset/source 导出资源的源代码。之前通过使用 raw-loader 实现；
    -  asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源 体积限制实现；
```js
// webpack.config.js

{
    test: /\.(png|jpe?g|gif|svg)$/,
    type:'asset/resource'
}
```
- 可以自定义文件的输出路径和文件名
    - 方式一：修改output，添加assetModuleFilename属性
    - 方式二：在Rule中，添加一个generator属性，并且设置filename
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008204218.png)
- url-loader的limit效果
    - 步骤一：将type修改为asset；
    - 步骤二：添加一个parser属性，并且制定dataUrl的条件，添加maxSize属性；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008211107.png)
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
### Plugin
- Webpack的另一个核心是Plugin
    - Loader是用于特定的模块类型进行转换；
    - Plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量注入等；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008200025.png)
#### CleanWebpackPlugin
- 每次修改了一些配置，重新打包时，都需要手动删除dist文件夹：
    - 借助于一个插件来帮助我们完成，这个插件就是CleanWebpackPlugin；
    - `npm install clean-webpack-plugin -D` 
```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//导出配置信息
module.exports = {
    plugins:[
        new CleanWebpackPlugin()
    ]
}
```
#### HtmlWebpackPlugin
- 不太规范的地方
    - HTML文件是编写在根目录下的，而最终打包的dist文件夹中是没有index.html文件的
    - 在进行项目部署的时，必然也是需要有对应的入口文件index.html；
    - 也需要对index.html进行打包处理；
- 对HTML进行打包处理我们可以使用另外一个插件：HtmlWebpackPlugin；
- `npm install html-webpack-plugin -D`
```js
const HtmlWebpackPlugin = require("html-webpack-plugin")
//导出配置信息
module.exports = {
    plugins:[
        new HtmlWebpackPlugin({
            title: "Html Webpack Plugin"
        })
    ]
}
```
- 生成的index.html分析
    - 现在自动在dist文件夹中，生成了一个index.html的文件：
        - 该文件中也自动添加了我们打包的bundle.js文件；
    - 这个文件是如何生成的呢？
        - 默认情况下是根据ejs的一个模板来生成的；
        - 在html-webpack-plugin的源码中，有一个default_index.ejs模块；
- 自定义HTML模板
    - 想在自己的模块中加入一些比较特别的内容
        - 比如添加一个noscript标签，在用户的JavaScript被关闭时，给予响应的提示；
        - 比如在开发vue或者react项目时，我们需要一个可以挂载后续组件的根标签  <div id="app"></div>；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008212633.png)
- 自定义模板数据填充
    - 会有一些类似这样的语法<% 变量 %>，这个是EJS模块填充数据的方式。
    - 配置HtmlWebpackPlugin时，我们可以添加如下配置：
        - template：指定我们要使用的模块所在的路径；
        - title：在进行htmlWebpackPlugin.options.title读取时，就会读到该信息；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008212745.png)

#### DefinePlugin
- DefinePlugin
    - 这个时候编译还是会报错，因为在我们的模块中还使用到一个BASE_URL的常量
    - 因为在编译template模块时，有一个BASE_URL：
        - `<link rel="icon"  href="<%=  BASE_URL %>favicon.ico">；`
        - 但是我们并没有设置过这个常量值，所以会出现没有定义的错误；
    - 可以使用DefinePlugin插件；
    - DefinePlugin允许在编译时创建配置的全局常量，是一个webpack内置的插件（不需要单独安装）：
        - 编译template就可以正确的编译了，会读取到BASE_URL的值；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008213039.png)
#### CopyWebpackPlugin
- CopyWebpackPlugin
    - 在vue的打包过程中，如果我们将一些文件放到public的目录下，那么这个目录会被复制到dist文件夹中。
        - 这个复制的功能，我们可以使用CopyWebpackPlugin来完成；
    - `npm install copy-webpack-plugin -D`
    - 接下来配置CopyWebpackPlugin即可
        - 复制的规则在patterns中设置；
        -  from：设置从哪一个源中开始复制；
        -  to：复制到的位置，可以省略，会默认复制到打包的目录下；
        -  globOptions：设置一些额外的选项，其中可以编写需要忽略的文件：
            -  .DS_Store：mac目录下回自动生成的一个文件；
            -  index.html：也不需要复制，因为我们已经通过HtmlWebpackPlugin完成了index.html的生成；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008213322.png)
### 模块化原理
#### Mode配置
- Mode配置选项，可以告知webpack使用响应模式的内置优化：
    -  默认值是production（什么都不设置的情况下）；
    -  可选值有：'none' | 'development' | 'production'；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009112007.png)
#### Webpack的模块化
- Webpack打包的代码，允许我们使用各种各样的模块化，但是最常用的是CommonJS、ES Module。
- CommonJS模块化实现原理；
```js
// 定义了一个对象
// 模块的路径(key): 函数(value)
var __webpack_modules__ = {
  "./src/js/format.js":
    (function (module) {
      const dateFormat = (date) => {
        return "2020-12-12";
      }
      const priceFormat = (price) => {
        return "100.00";
      }

      // 将我们要导出的变量, 放入到module对象中的exports对象
      module.exports = {
        dateFormat,
        priceFormat
      }
    })
}
// 定义一个对象, 作为加载模块的缓存
var __webpack_module_cache__ = {};
// 是一个函数, 当我们加载一个模块时, 都会通过这个函数来加载
function __webpack_require__(moduleId) {
  // 1.判断缓存中是否已经加载过
  if (__webpack_module_cache__[moduleId]) {
    return __webpack_module_cache__[moduleId].exports;
  }

  // 2.给module变量和__webpack_module_cache__[moduleId]赋值了同一个对象
  var module = __webpack_module_cache__[moduleId] = { exports: {} };

  // 3.加载执行模块
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // 4.导出module.exports {dateFormat: function, priceForamt: function}
  return module.exports;
}
// 具体开始执行代码逻辑
!function () {
  // 1.加载./src/js/format.js
  const { dateFormat, priceFormat } = __webpack_require__("./src/js/format.js");
  console.log(dateFormat("abc"));
  console.log(priceFormat("abc"));
}();
```
- ES Module实现原理；
```js
// 1.定义了一个对象, 对象里面放的是我们的模块映射
var __webpack_modules__ = {
  "./src/es_index.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      // 调用r的目的是记录时一个__esModule -> true
      __webpack_require__.r(__webpack_exports__);
      // _js_math__WEBPACK_IMPORTED_MODULE_0__ == exports
      var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");
      console.log(_js_math__WEBPACK_IMPORTED_MODULE_0__.mul(20, 30));
      console.log(_js_math__WEBPACK_IMPORTED_MODULE_0__.sum(20, 30));
    }), 
  "./src/js/math.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      // 调用了d函数: 给exports设置了一个代理definition
      // exports对象中本身是没有对应的函数
      __webpack_require__.d(__webpack_exports__, {
        "sum": function () { return sum; },
        "mul": function () { return mul; }
      });

      const sum = (num1, num2) => {
        return num1 + num2;
      }
      const mul = (num1, num2) => {
        return num1 * num2;
      }
    })
};
// 2.模块的缓存
var __webpack_module_cache__ = {};
// 3.require函数的实现(加载模块)
function __webpack_require__(moduleId) {
  if (__webpack_module_cache__[moduleId]) {
    return __webpack_module_cache__[moduleId].exports;
  }
  var module = __webpack_module_cache__[moduleId] = {
    exports: {}
  };
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}
// 做代理
!function () {
  // __webpack_require__这个函数对象添加了一个属性: d -> 值function
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
}();
!function () {
  // __webpack_require__这个函数对象添加了一个属性: o -> 值function
  __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();
!function () {
  // __webpack_require__这个函数对象添加了一个属性: r -> 值function
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
}();
__webpack_require__("./src/es_index.js");
```
- CommonJS加载ES Module的原理；
- ES Module加载CommonJS的原理；
```js
var __webpack_modules__ = ({
  "./src/index.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var _js_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/format.js");
      var _js_format__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_js_format__WEBPACK_IMPORTED_MODULE_0__);
      // es module导出内容, CommonJS导入内容
      const math = __webpack_require__("./src/js/math.js");

      // CommonJS导出内容, es module导入内容
      console.log(math.sum(20, 30));
      console.log(math.mul(20, 30));
      console.log(_js_format__WEBPACK_IMPORTED_MODULE_0___default().dateFormat("aaa"));
      console.log(_js_format__WEBPACK_IMPORTED_MODULE_0___default().priceFormat("bbb"));
    }),
  "./src/js/format.js":
    (function (module) {
      const dateFormat = (date) => {
        return "2020-12-12";
      }
      const priceFormat = (price) => {
        return "100.00";
      }
      module.exports = {
        dateFormat,
        priceFormat
      }
    }),

  "./src/js/math.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        "sum": function () { return sum; },
        "mul": function () { return mul; }
      });
      const sum = (num1, num2) => {
        return num1 + num2;
      }

      const mul = (num1, num2) => {
        return num1 * num2;
      }
    })
});

var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {
  // Check if module is in cache
  if (__webpack_module_cache__[moduleId]) {
    return __webpack_module_cache__[moduleId].exports;
  }
  // Create a new module (and put it into the cache)
  var module = __webpack_module_cache__[moduleId] = {
    // no module.id needed
    // no module.loaded needed
    exports: {}
  };

  // Execute the module function
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // Return the exports of the module
  return module.exports;
}

!function () {
  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function () { return module['default']; } :
      function () { return module; };
    __webpack_require__.d(getter, { a: getter });
    return getter;
  };
}();

/* webpack/runtime/define property getters */
!function () {
  // define getter functions for harmony exports
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
}();

/* webpack/runtime/hasOwnProperty shorthand */
!function () {
  __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();

/* webpack/runtime/make namespace object */
!function () {
  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
}();

__webpack_require__("./src/index.js");
```
### source-map
#### 认识source-map
- 我们的代码通常运行在浏览器上时，是通过打包压缩的：
    - 也就是真实跑在浏览器上的代码，和我们编写的代码其实是有差异的；
    - 比如ES6的代码可能被转换成ES5；
    - 比如对应的代码行号、列号在经过编译后肯定会不一致；
    - 比如代码进行丑化压缩时，会将编码名称等修改；
    - 比如我们使用了TypeScript等方式编写的代码，最终转换成JavaScript；
- 但是，当代码报错需要调试时（debug），调试转换后的代码是很困难的
- 如何可以调试这种转换后不一致的代码呢？答案就是source-map
    - source-map是从已转换的代码，映射到原始的源文件；
    - 使浏览器可以重构原始源并在调试器中显示重建的原始源；
#### 使用source-map
- 如何可以使用source-map呢？两个步骤：
    - 第一步：根据源文件，生成source-map文件，webpack在打包时，可以通过配置生成source-map
    - 第二步：在转换后的代码，最后添加一个注释，它指向sourcemap；
    - `//# sourceMappingURL=common.bundle.js.map`
- 浏览器会根据我们的注释，查找响应的source-map，并且根据source-map还原我们的代码，方便进行调试。
- 在Chrome中，我们可以按照如下的方式打开source-map：
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009125923.png)
#### 分析source-map
- 最初source-map生成的文件带下是原始文件的10倍，第二版减少了约50%，第三版又减少了50%，所以目前一个 133kb的文件，最终的source-map的大小大概在300kb。
- 目前的source-map长什么样子呢？
    - version：当前使用的版本，也就是最新的第三版；
    - sources：从哪些文件转换过来的source-map和打包的代码（最初始的文件）；
    - names：转换前的变量和属性名称（因为我目前使用的是development模式，所以不需要保留转换前的名称）
    - mappings：source-map用来和源文件映射的信息（比如位置信息等），一串base64  VLQ（veriable- length quantity可变长度值）编码；
    - file：打包后的文件（浏览器加载的文件）；
    - sourceContent：转换前的具体代码信息（和sources是对应的关系）；
    - sourceRoot：所有的sources相对的根目录；
#### 生成source-map
- 使用webpack打包的时候，生成对应的source-map呢？
    - webpack为我们提供了非常多的选项（目前是26个），来处理source-map；
    - https://webpack.docschina.org/configuration/devtool/
    -  选择不同的值，生成的source-map会稍微有差异，打包的过程也会有**性能的差异**，可以根据不同的情况进行 选择；
- 下面几个值不会生成source-map
    - false：不使用source-map，也就是没有任何和source-map相关的内容。
    - none：production模式下的默认值，不生成source-map。
    - eval：development模式下的默认值，不生成source-map
        - 但是它会在eval执行的代码中，添加 `//#  sourceURL=`；
        - 它会被浏览器在执行时解析，并且在调试面板中生成对应的一些文件目录，方便我们调试代码；
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009193042.png)
#### source-map值
- source-map值：
    - 生成一个独立的source-map文件，并且在bundle文件中有一个注释，指向source-map文件；
    - bundle文件中有如下的注释
        - 开发工具会根据这个注释找到source-map文件，并且解析；
            - `//# sourceMappingURL=bundle.js.map`
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009193206.png)  
- eval-source-map值
    - 会生成sourcemap，但是source-map是以DataUrl添加到eval函数的后面
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009193314.png)
- inline-source-map值
    - 会生成sourcemap，但是source-map是以DataUrl添加到bundle文件的后面
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009193432.png)
- cheap-source-map
    - 会生成sourcemap，但是会更加高效一些（cheap低开销），因为它没有生成列映射（Column Mapping）
    - 因为在开发中，我们只需要行信息通常就可以定位到错误了
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009193717.png)
    - 能找到是哪行出错，不能精确到这行的那个地方
- cheap-module-source-map
    - 会生成sourcemap，类似于cheap-source-map，但是对源自loader的sourcemap处理会更好。
        - 其实是如果loader对我们的源码进行了特殊的处理，比如babel；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009195216.png)
- hidden-source-map值
    - 会生成sourcemap，但是不会对source-map文件进行引用；
    - 相当于删除了打包文件中对sourcemap的引用注释；
    - `// 被删除掉的  //# sourceMappingURL=bundle.js.map`
    - 如果我们手动添加进来，那么sourcemap就会生效了
- nosources-source-map值
    - 会生成sourcemap，但是生成的sourcemap只有错误信息的提示，不会生成源代码文件；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009195502.png)

- 多个值的组合
    - webpack提供给我们的26个值，是可以进行多组合的。
    - 组合的规则如下：
        - inline-|hidden-|eval：三个值时三选一；
        - nosources：可选值；
        - cheap可选值，并且可以跟随module的值；
    - `[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map` 
    - 那么在开发中，最佳的实践是什么呢？
        - 开发阶段：推荐使用  source-map或者cheap-module-source-map
            - 这分别是vue和react使用的值，可以获取调试信息，方便快速开发；
        - 测试阶段：推荐使用  source-map或者cheap-module-source-map
            - 测试阶段我们也希望在浏览器下看到正确的错误提示；
        - 发布阶段：false、缺省值（不写）
### Babel的深入解析
#### 为什么需要babel？
- 事实上，在开发中我们很少直接去接触babel，但是babel对于前端开发来说，目前是不可缺少的一部分：
    - 开发中，我们想要使用ES6+的语法，想要使用TypeScript，开发React项目，它们都是离不开Babel的；
    - 所以，学习Babel对于我们理解代码从编写到线上的转变过程直观重要；
- Babel到底是什么呢？
    - Babel是一个工具链，主要用于旧浏览器或者缓解中将ECMAScript 2015+代码转换为向后兼容版本的 JavaScript；
    - 包括：语法转换、源代码转换、Polyfill实现目标缓解缺少的功能等；
    ```js
    [1,2,3].map(n => n+1)
    [1,2,3].map(function(n) {
        return n
    })
    ```
- Babel命令行使用
    - babel本身可以作为一个独立的工具（和postcss一样），不和webpack等构建工具配置来单独使用。
    - 如果我们希望在命令行尝试使用babel，需要安装如下库：
        - @babel/core：babel的核心代码，必须安装；
        - @babel/cli：可以让我们在命令行使用babel；
        - `npm install @babel/cli @babel/core`
    - 使用babel来处理我们的源代码：
        - src：是源文件的目录；
        - --out-dir：指定要输出的文件夹dist；
        - `npx babel src --out-dir dist`
    - 插件的使用
        - 比如我们需要转换箭头函数，那么我们就可以使用箭头函数转换相关的插件：
            - `npm install @babel/plugin-transform-arrow-functions -D`
            - `npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions`
        - 查看转换后的结果：我们会发现 const 并没有转成 var
            -  这是因为 plugin-transform-arrow-functions，并没有提供这样的功能；
            -  我们需要使用 plugin-transform-block-scoping 来完成这样的功能；
            -  `npm install @babel/plugin-transform-block-scoping -D `
            -  `npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions`
    - Babel的预设preset
        - 但是如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）
            - 后面我们再具体来讲预设代表的含义
        - 安装@babel/preset-env预设:
            - `npm install @babel/preset-env -D`
        - 执行如下命令
            - `npx babel src --out-dir dist --presets=@babel/preset-env`
#### Babel的底层原理
- babel是如何做到将我们的一段代码（ES6、TypeScript、React）转成另外一段代码（ES5）的呢
    - 从一种源代码（原生语言）转换成另一种源代码（目标语言），这是什么的工作呢？
    - 就是编译器，事实上我们可以将babel看成就是一个编译器。
    - Babel编译器的作用就是将我们的源代码，转换成浏览器可以直接识别的另外一段源代码；
- Babel也拥有编译器的工作流程：
    - 解析阶段（Parsing）
    - 转换阶段（Transformation）
    - 生成阶段（Code Generation）
    - https://github.com/jamiebuilds/the-super-tiny-compiler
#### babel编译器执行原理
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009204321.png)
- 源代码
```js
const name = "coderwhy";
const foo = (name) => console.log(name);
foo(name);
```
- 词法分析
```json
// tokens.js
[
  {
      "type": "Keyword",
      "value": "const"
  },
  {
      "type": "Identifier",
      "value": "foo"
  },
  {
      "type": "Punctuator",
      "value": "="
  },
  {
      "type": "Punctuator",
      "value": "("
  },
  {
      "type": "Identifier",
      "value": "name"
  },
  {
      "type": "Punctuator",
      "value": ")"
  },
  {
      "type": "Punctuator",
      "value": "=>"
  },
  {
      "type": "Identifier",
      "value": "console"
  },
  {
      "type": "Punctuator",
      "value": "."
  },
  {
      "type": "Identifier",
      "value": "log"
  },
  {
      "type": "Punctuator",
      "value": "("
  },
  {
      "type": "Identifier",
      "value": "name"
  },
  {
      "type": "Punctuator",
      "value": ")"
  },
  {
      "type": "Punctuator",
      "value": ";"
  },
  {
      "type": "Identifier",
      "value": "foo"
  },
  {
      "type": "Punctuator",
      "value": "("
  },
  {
      "type": "String",
      "value": "\"coderwhy\""
  },
  {
      "type": "Punctuator",
      "value": ")"
  },
  {
      "type": "Punctuator",
      "value": ";"
  }
]
```
- 语法分析 生成AST
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "foo"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "name"
              }
            ],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "name": "log"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "name"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "foo"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "coderwhy",
            "raw": "\"coderwhy\""
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
- 一系列操作后  生成新的AST
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "foo"
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "name": "foo"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "name"
              }
            ],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "console"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "log"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "name"
                      }
                    ]
                  }
                }
              ]
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "foo"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "coderwhy",
            "raw": "\"coderwhy\""
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
#### babel-loader
- `npm install babel-loader @babel/core`
```js
//webpack.config.js
{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     ["@babel/preset-env", {
          //       // targets: ["chrome 88"]
          //       // enmodules: true
          //     }]
          //   ]
          //   // plugins: [
          //   //   "@babel/plugin-transform-arrow-functions",
          //   //   "@babel/plugin-transform-block-scoping"
          //   // ]
          // }
        }
}
```
#### babel-preset
一个个去安装使用插件，那么需要手动来管理大量的babel插件，我们可以直接给webpack提供一个 preset，webpack会根据我们的预设来加载对应的插件列表，并且将其传递给babel。
- 常见的预设有三个
    -  env
    -  react
    -  TypeScript
- `npm install @babel/preset-env`
```js
// webpack.config.js
{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env",]
            ]
          }
        }
}
```
#### 设置目标浏览器  browserslist
- 最终打包的JavaScript代码，是需要跑在目标浏览器上的，那么如何告知babel我们的目标浏览器呢？
    - browserslist工具
    - target属性
- 之前我们项目中已经使用了browserslist工具，我们可以对比一下不同的配置，打包的区别：
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211011161757.png)

- 设置目标浏览器  targets
    - 也可以通过targets来进行配置
    ```js
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", {
                targets: ["chrome 88"]
              }]
            ]
          }
        }
      }
    ```
    ```js
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", {
                targets: "last 2 versions"
              }]
            ]
          }
        }
      }
    ```
    - 如果两个同时配置了，哪一个会生效呢？
        - 配置的targets属性会覆盖browserslist；
        - 但是在开发中，更推荐通过browserslist来配置，因为类似于postcss工具，也会使用browserslist，进行统一浏览器 的适配；
#### Stage-X的preset
- 新流程涉及四个不同的 Stage
    - Stage 0：strawman（稻草人），任何尚未提交作为正式提案的讨论、想法变更或者补充都被认为是第 0 阶段的" 稻草人"；
    - Stage 1：proposal（提议），提案已经被正式化，并期望解决此问题，还需要观察与其他提案的相互影响；
    - Stage 2：draft（草稿），Stage 2 的提案应提供规范初稿、草稿。此时，语言的实现者开始观察 runtime 的具体 实现是否合理；
    - Stage 3：candidate（候补），Stage 3 提案是建议的候选提案。在这个高级阶段，规范的编辑人员和评审人员必 须在最终规范上签字。Stage 3 的提案不会有太大的改变，在对外发布之前只是修正一些问题；
    - Stage 4：finished（完成），进入 Stage 4  的提案将包含在 ECMAScript 的下一个修订版中；
#### Babel的Stage-X设置
- 在babel7之前（比如babel6中），我们会经常看到这种设置方式：
    - 它表达的含义是使用对应的 babel-preset-stage-x  预设；
    - 但是从babel7开始，已经不建议使用了，建议使用preset-env来设置；
```js
{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "preset-env","preset-react","stage-3"
            ]
          }
        }
}
```
#### Babel的配置文件
- 可以将babel的配置信息放到一个独立的文件中，babel给我们提供了两种配置文件的编写：
    - babel.config.json（或者.js，.cjs，.mjs）文件；
    - .babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件；
- 它们两个有什么区别呢？目前很多的项目都采用了多包管理的方式（babel本身、element-plus、umi等）；
    - .babelrc.json：早期使用较多的配置方式，但是对于配置Monorepos项目是比较麻烦的；、 babel.config.json（babel7）：可以直接作用于Monorepos项目的子包，更加推荐；
```js
// babel.config.json 
{
        "presets": ["@babel/preset-react"],
        "plugins": [...],
}
```
#### polyfill
- Polyfill是什么呢？
    - 翻译：一种用于衣物、床具等的聚酯填充材料,  使这些物品更加温暖舒适；
    - 理解：更像是应该填充物（垫片），一个补丁，可以帮助我们更好的使用JavaScript；
- 为什么时候会用到polyfill呢？
    - 比如我们使用了一些语法特性（例如：Promise,  Generator,  Symbol等以及实例方法例如 Array.prototype.includes等）
    - 但是某些浏览器压根不认识这些特性，必然会报错；
    - 我们可以使用polyfill来填充或者说打一个补丁，那么就会包含该特性了；
- 如何使用polyfill？
    - babel7.4.0之前，可以使用 @babel/polyfill的包，但是该包现在已经不推荐使用了：
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211011181126.png)
    -babel7.4.0之后，可以通过单独引入core-js和regenerator-runtime来完成polyfill的使用：
```js
npm install core-js regenerator-runtime --save

// 使用core-js regenerator-runtime的时候  我们要为webpack.config.js要排除一些内容
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211011181250.png)
#### 配置babel.config.js
- 在babel.config.js文件中进行配置，给preset-env配置一些属性
    - useBuiltIns：设置以什么样的方式来使用polyfill；
        - 第一个值：false
            - 打包后的文件不使用polyfill来进行适配；
            - 并且这个时候是不需要设置corejs属性的；
        - 第二个值：usage
            -  会根据源代码中出现的语言特性，自动检测所需要的polyfill；
            -  这样可以确保最终包里的polyfill数量的最小化，打包的包相对会小一些；
            -  可以设置corejs属性来确定使用的corejs的版本；
        - 第三个值：entry
            - 如果我们依赖的某一个库本身使用了某些polyfill的特性，但是因为我们使用的是usage，所以之后用户浏览器 可能会报错；
            - 所以，如果你担心出现这种情况，可以使用 entry；
            - *并且需要在入口文件中添加  `import 'core-js/stable'; import 'regenerator-runtime/runtime'`;
            - 这样做会根据  browserslist 目标导入所有的polyfill，但是对应的包也会变大；
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211011182831.png)
    
    - corejs：设置corejs的版本，目前使用较多的是3.x的版本，比如我使用的是3.8.x的版本；
        -  另外corejs可以设置是否对提议阶段的特性进行支持；
        -  设置 proposals属性为true即可；
    - Plugin-transform-runtime(编写第三方库的时候)
        - 认识Plugin-transform-runtime
            - 使用的polyfill，默认情况是添加的所有特性都是全局的
                - 如果我们正在编写一个工具库，这个工具库需要使用polyfill；
                - 别人在使用我们工具时，工具库通过polyfill添加的特性，可能会污染它们的代码；
                - 所以，当编写工具时，babel更推荐我们使用一个插件： @babel/plugin-transform-runtime来完成polyfill 的功能；
        - 使用Plugin-transform-runtime
            - `npm install @babel/plugin-transform-runtime -D`
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211011183309.png)
    ```js
    module.exports = {
      presets: [
        ["@babel/preset-env", {
          // false: 不用任何的polyfill相关的代码
          // usage: 代码中需要哪些polyfill, 就引用相关的api
          // entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
          // useBuiltIns: "entry",
          // corejs: 3
        }],
        ["@babel/preset-react"]
      ],
      plugins: [
        //用这个上面的 useBuiltIns就不需要了
        ["@babel/plugin-transform-runtime", {
          corejs: 3
        }]
      ]
    }
    ```
    #### React的jsx支持
    - 编写react代码时，react使用的语法是jsx，jsx是可以直接使用babel来转换的。
    - react jsx代码进行处理需要如下的插件：
        -  @babel/plugin-syntax-jsx
        -  @babel/plugin-transform-react-jsx
        -  @babel/plugin-transform-react-display-name
    - `npm install @babel/preset-react -D`
    ```js
    //babel.config,js
    module.exports = {
      presets: [
        ["@babel/preset-env", {
          // false: 不用任何的polyfill相关的代码
          // usage: 代码中需要哪些polyfill, 就引用相关的api
          // entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
          // useBuiltIns: "entry",
          // corejs: 3
        }],
        ["@babel/preset-react"]
      ],
    }
    ```
    #### TypeScript的编译
    - 使用TypeScript来开发，那么TypeScript代码是需要转换成JavaScript代码。
    - 可以通过TypeScript的compiler来转换成JavaScript：
        - `npm install typescript -D`
    - 另外TypeScript的编译配置信息我们通常会编写一个tsconfig.json文件：
        - `tsc --init`
        - 生成配置文件如下：
        ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211011185803.png)
        - `npx tsc`
    - 使用ts-loader
        - 在webpack中使用TypeScript，那么我们可以使用ts-loader来处理ts文件：
            - `npm install ts-loader -D`
            - 使用之前需要有`tsconfig.json`文件
        - 问题：
            - **不支持Polyfill**
            - 需要
     ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211011185803.png)
    ```js
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      }
    ```
    
    