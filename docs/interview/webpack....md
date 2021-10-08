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
