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
 ```js
 const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const TerserPlugin = require("terser-webpack-plugin");

// 合并配置文件
const { merge } = require("webpack-merge");

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const commonConfig = {
  entry: {
    main: { import: "./src/main.js", dependOn: "shared" },
    index: { import: "./src/index.js", dependOn: "shared" },
    lodash: "lodash",
    dayjs: "dayjs",
    shared: ["lodash", "dayjs"]
  },
  output: {
    path: resolveApp("./build"),
    filename: "[name].bundle.js",
    chunkFilename: "chunk_[id]_[name].js"
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
    alias: {
      "@": resolveApp("./src"),
      pages: resolveApp("./src/pages"),
    },
  },
  optimization: {
    // 对代码进行压缩相关的操作
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    // natural: 使用自然数(不推荐),
    // named: 使用包所在目录作为name(在开发环境推荐)
    // deterministic: 生成id, 针对相同文件生成的id是不变
    // chunkIds: "deterministic",
    splitChunks: {
      // async异步导入
      // initial同步导入
      // all 异步/同步导入
      chunks: "all",
      // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
      minSize: 20000,
      // 将大于maxSize的包, 拆分成不小于minSize的包
      maxSize: 20000,
      // minChunks表示引入的包, 至少被导入了几次
      minChunks: 1,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: "[id]_vendors.js",
          // name: "vendor-chunks.js",
          priority: -10
        },
        // bar: {
        //   test: /bar_/,
        //   filename: "[id]_bar.js"
        // }
        default: {
          minChunks: 2,
          filename: "common_[id].js",
          priority: -20
        }
      }
    },
    // true/multiple
    // single
    // object: name
    runtimeChunk: {
      name: function(entrypoint) {
        return `why-${entrypoint.name}`
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
      {
        test: /\.vue$/i,
        use: "vue-loader",
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = function(env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig, config);

  return mergeConfig;
};
 ```
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
#### MiniCssExtractPlugin
- MiniCssExtractPlugin可以帮助我们将css提取到一个独立的css文件中，该插件需要在webpack4+才可以使用。
- 首先，我们需要安装mini-css-extract-plugin：`npm install mini-css-extract-plugin -D`
    - 配置rules和plugins：
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104181915.png)

### Hash、ContentHash、ChunkHash
- 在我们给打包的文件进行命名的时候，会使用placeholder，placeholder中有几个属性比较相似：
    - hash、chunkhash、contenthash
    - hash本身是通过MD4的散列函数处理后，生成一个128位的hash值（32个十六进制）；
- hash值的生成和整个项目有关系：
    - 比如我们现在有两个入口index.js和main.js；
    - 它们分别会输出到不同的bundle文件中，并且在文件名称中我们有使用hash；
    - 这个时候，如果修改了index.js文件中的内容，那么hash会发生变化；
    - 那就意味着两个文件的名称都会发生变化；
    - 如果都使用hash的话，因为这是工程级别的，即每次修改任何一个文件，所有文件名的hash至都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104182914.png)
- chunkhash可以有效的解决上面的问题，它会根据不同的入口进行借来解析来生成hash值：
    - 比如我们修改了index.js，那么main.js的chunkhash是不会发生改变的；
    - chunkhash根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104183111.png)
    - 可以清晰地看见每个chunk模块的hash是不一样的了。
    - 因为我们是将样式作为模块import到JavaScript文件中的，所以它们的chunkhash是一致的，如test1.js和test1.css：
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104183248.png)
    - 这样就会有个问题，只要对应css或则js改变，与其关联的文件hash值也会改变，但其内容并没有改变呢，所以没有达到缓存意义。固contenthash的用途随之而来。
- contenthash表示生成的文件hash名称，只和内容有关系：
    - 比如我们的index.js，引入了一个style.css，style.css有被抽取到一个独立的css文件中；
    - 这个css文件在命名时，如果我们使用的是chunkhash；
    - 那么当index.js文件的内容发生变化时，css文件的命名也会发生变化；
    - 这个时候我们可以使用contenthash；
    - contenthash是针对文件内容级别的，只有你自己模块的内容变了，那么hash值才改变，所以我们可以通过contenthash解决上诉问题。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104183430.png)


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
    - 使用babel-loader
        - 可以使用TypeScript Compiler来编译TypeScript之外，我们也可以使用Babel
        - Babel是有对TypeScript进行支持；
        - 可以使用插件：`@babel/tranform-typescript`
        - 更推荐直接使用`preset：@babel/preset-typescript`
        - `npm install @babel/preset-typescript -D`
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031083853.png)
    - ts-loader和babel-loader选择
        - ts-loader（TypeScript Compiler）
            - 来直接编译TypeScript，那么只能将ts转换成js；
            - 如果我们还希望在这个过程中添加对应的polyfill，那么ts-loader是无能为力的；
            - 需要借助于babel来完成polyfill的填充功能；
        - babel-loader（Babel）
            - 来直接编译TypeScript，也可以将ts转换成js，并且可以实现polyfill的功能；
            - 但是babel-loader在编译的过程中，不会对类型错误进行检测；
        ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031101800.png)
        - 同时保证两个情况都没有问题呢？
            - 先使用Babel来完成代码的转换，使用tsc来进行类型的检查。
                - 在scripts中添加了两个脚本，用于类型检查；
                - 执行`npm run type-check`可以对`ts`代码的类型进行检测；
                - 执行`npm run type-check-watch`可以实时的检测类型错误
### ESLint
#### 认识ESLint
- 什么是ESLint
    - ESLint是一个静态代码分析工具，在没有任何程序执行的情况下，对代码进行分析
    - ESLint可以帮助我们在项目中建立统一的团队代码规范，保持正确、统一的代码风格，提高代码的可读性、可维护性；
    - 并且ESLint的规则是可配置的，我们可以自定义属于自己的规则；
    - 早期还有一些其他的工具，比如JSLint、JSHint、JSCS等，目前使用最多的是ESLint。
#### 使用ESLint
- 安装ESLint:`npm install eslint -D`
- 创建ESLint的配置文件:`npx eslint --init`
- 执行检测命令:`npx eslint ./src/main.js`
#### ESLint的文件解析
- 默认创建的环境如下
    - env：运行的环境，比如是浏览器，并且我们会使用es2021（对应的ecmaVersion是12）的语法；
    - extends：可以扩展当前的配置，让其继承自其他的配置信息，可以跟字符串或者数组（多个）；
    - parserOptions：这里可以指定ESMAScript的版本、sourceType的类型
        - parser：默认情况下是espree（也是一个JS Parser，用于ESLint），但是因为我们需要编译TypeScript，所以需要指定对应的解释器；
    - plugins：指定我们用到的插件；
    - rules：自定义的一些规则；
        - 配置的规则名称：对应的值值可以是数字、字符串、数组：
        - 字符串对应有三个值： off、warn、error；
        - 数字对应有三个值： 0、1、2（分别对应上面的值）;
        - 数组我们可以告知对应的提示以及希望获取到的值：比如 ['error','double']
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031105452.png)
### Webpack中配置vue加载
- 相关的依赖
    - `npm install vue-loader -D`
    - `npm install vue-template-compiler -D`
- 配置webpack
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031102515.png)
### 为什么要搭建本地服务器?
- 目前我们开发的代码，为了运行需要有两个操作
    - 操作一：npm run build，编译相关的代码；
    - 操作二：通过live server或者直接通过浏览器，打开index.html代码，查看效果；
- 这个过程经常操作会影响我们的开发效率，我们希望可以做到，当文件发生变化时，可以自动的完成 编译和 展示；
- 为了完成自动编译，webpack提供了几种可选的方式：
    - webpack watch mode；
    - webpack-dev-server；
    - webpack-dev-middleware
#### Webpack watch
- webpack给我们提供了watch模式：
    - 在该模式下，webpack依赖图中的所有文件，只要有一个发生了更新，那么代码将被重新编译；
    - 我们不需要手动去运行 npm run build指令了；
- 如何开启watch呢？两种方式：
    - 方式一：在导出的配置中，添加watch: true；
    - 方式二：在启动webpack的命令中，添加--watch的标识；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031104537.png)
- 效率并不是特别高:
    - 对所有的源代码都重新进行编译
    - 编译成功后,都会生成新的文件(文件操作 file system)
    - live-server属于VSCode插件(vim/webstorm) -> 不属于webpack给我们的解决方案
    - live-server每次都会重新刷新整个页面
#### webpack-dev-server
- Webpack watch可以监听到文件的变化，但是事实上它本身是没有自动刷新浏览器的功能的：
    - 当然，目前我们可以在VSCode中使用live-server来完成这样的功能；
    - 但是，我们希望在不适用live-server的情况下，可以具备live reloading（实时重新加载）的功能；
- 安装webpack-dev-server：`npm install --save-dev webpack-dev-server`
    - 不会生成新的文件，例如打包后的文件。
- 修改配置文件，告知 dev server，从什么位置查找文件：
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031104724.png)
- 事实上webpack-dev-server使用了一个库叫memfs（memory-fs webpack自己写的）


- devServer(为开发过程服务的)的publicPath
    - devServer中也有一个publicPath的属性，该属性是指定本地服务所在的文件夹：
        - 它的默认值是 /，也就是我们直接访问端口即可访问其中的资源http://localhost:8080；
        - 如果我们将其设置为了 /abc，那么我们需要通过 http://localhost:8080/abc才能访问到对应的打包后的资源；
        - 并且这个时候，我们其中的bundle.js通过 http://localhost:8080/bundle.js也是无法访问的：
            - 所以必须将output.publicPath也设置为 /abc；
            - 官方其实有提到，建议devServer.publicPath 与output.publicPath相同；
- devServer的contentBase
    - devServer中contentBase对于我们直接访问打包后的资源其实并没有太大的作用，它的主要作用是如果我们打包后的资源，又依赖于其他的一些资源，那么就需要指定从哪里来查找这个内容：
        - 比如在index.html中，我们需要依赖一个 abc.js 文件，这个文件我们存放在 public文件 中；
        - 在index.html中，我们应该如何去引入这个文件呢？
            - 比如代码是这样的：`<script src="./public/abc.js"></script>`；
            - 但是这样打包后浏览器是无法通过相对路径去找到这个文件夹的；
            - 所以代码是这样的：`<script src="/abc.js"></script>`;
            - 但是我们如何让它去查找到这个文件的存在呢？ 设置contentBase即可；
        - 当然在devServer中还有一个可以监听contentBase发生变化后重新编译的一个属性：watchContentBase。
- devServer的hotOnly、host配置
    - hotOnly是当代码编译失败时，是否刷新整个页面：
        - 默认情况下当代码编译失败修复后，我们会重新刷新整个页面；
        - 如果不希望重新刷新整个页面，可以设置hotOnly为true；
    - host设置主机地址：
        - 默认值是localhost；
        - 如果希望其他地方也可以访问，可以设置为 0.0.0.0；
        - localhost 和 0.0.0.0 的区别：
            - localhost：本质上是一个域名，通常情况下会被解析成127.0.0.1;
            - 127.0.0.1：回环地址(Loop Back Address)，表达的意思其实是我们主机自己发出去的包，直接被自己接收;
                - 正常的数据库包经常 应用层 - 传输层 - 网络层 - 数据链路层 - 物理层 ;
                - 而回环地址，是在网络层直接就被获取到了，是不会经常数据链路层和物理层的; 
                - 比如我们监听 127.0.0.1时，在同一个网段下的主机中，通过ip地址是不能访问的;
            - 0.0.0.0：监听IPV4上所有的地址，再根据端口找到不同的应用程序;
                - 比如我们监听 0.0.0.0时，在同一个网段下的主机中，通过ip地址是可以访问的;
- devServer的port、open、compress
    - port设置监听的端口，默认情况下是8080
    - open是否打开浏览器：
        - 默认值是false，设置为true会打开浏览器；
        - 也可以设置为类似于Google Chrome等值；
    - compress是否为静态文件开启gzip compression：
        - 默认值是false，可以设置为true；
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031161737.png)
- devServer的Proxy代理
    - proxy是我们开发中非常常用的一个配置选项，它的目的设置代理来解决跨域访问的问题：
        - 比如我们的一个api请求是 http://localhost:8888，但是本地启动服务器的域名是 http://localhost:8000，这个时候发送网络请求就会出现跨域的问题；
        - 那么我们可以将请求先发送到一个代理服务器，代理服务器和API服务器没有跨域的问题，就可以解决我们的跨域问题了；
    - 我们可以进行如下的设置：
        - target：表示的是代理到的目标地址，比如 /api-hy/moment会被代理到 http://localhost:8888/api-hymoment；
        - pathRewrite：默认情况下，我们的 /api-hy 也会被写入到URL中，如果希望删除，可以使用pathRewrite；
        - secure：默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false；
        - changeOrigin：它表示是否更新代理后请求的headers中host地址；
            - changeOrigin的解析
                - 这个 changeOrigin官方说的非常模糊，通过查看源码我发现其实是要修改代理请求中的headers中的host性：
                    - 因为我们真实的请求，其实是需要通过 http://localhost:8888来请求的；
                    - 但是因为使用了代码，默认情况下它的值时 http://localhost:8000；
                    - 如果我们需要修改，那么可以将changeOrigin设置为true即可；
                    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031162044.png)
- devServer的historyApiFallback
    - historyApiFallback是开发中一个非常常见的属性，它主要的作用是解决SPA页面在路由跳转之后，进行页面刷新时，返回404的错误。
    - boolean值：默认是false
        - 如果设置为true，那么在刷新时，返回404错误时，会自动返回index.html 的内容；
    - object类型的值，可以配置rewrites属性：
        - 可以配置from来匹配路径，决定要跳转到哪一个页面；
    - 事实上devServer中实现historyApiFallback功能是通过connect-history-api-fallback库的
- devServer的resolve模块解析
    - resolve用于设置模块如何被解析：
        - 在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库；
        - resolve可以帮助webpack从每个 require/import 语句中，找到需要引入到合适的模块代码；
        - webpack 使用 enhanced-resolve 来解析文件路径；
    - webpack能解析三种文件路径：
        - 绝对路径
            - 由于已经获得文件的绝对路径，因此不需要再做进一步解析。
        - 相对路径
            - 在这种情况下，使用 import 或 require 的资源文件所处的目录，被认为是上下文目录；
            -  在 import/require 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径；
        - 模块路径
            - 在 resolve.modules中指定的所有目录检索模块；
                - 默认值是 ['node_modules']，所以默认会从node_modules中查找文件；
            - 我们可以通过设置别名的方式来替换初识模块路径，具体后面讲解alias的配置；
    - 确实是文件还是文件夹
        - 如果是一个文件：
            - 如果文件具有扩展名，则直接打包文件；
            - 否则，将使用 resolve.extensions选项作为文件扩展名解析；
        - 如果是一个文件夹：
            - 会在文件夹中根据resolve.mainFiles配置选项中指定的文件顺序查找；
                - resolve.mainFiles的默认值是 ['index']；
                - 再根据resolve.extensions来解析扩展名；
    - extensions和alias配置
        - extensions是解析到文件时自动添加扩展名：
            - 默认值是 ['.wasm','.mjs','.js','.json']；
            - 所以如果我们代码中想要添加加载 .vue 或者 jsx 或者 ts 等文件时，我们必须自己写上扩展名；
        - 另一个非常好用的功能是配置别名alias：
            - 特别是当我们项目的目录结构比较深的时候，或者一个文件的路径可能需要 ../../../这种路径片段；
            - 我们可以给某些常见的路径起一个别名；
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031163511.png)
```js
// webpack.config.js
module.exports = {
  // watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // 打包后的文件的输出目录
    path: path.resolve(__dirname, "./build"),
    // 在打包之后的静态资源前面进行一个路径的拼接
    // js/bundle -> ./js/bundle.js
    // publicPath: "/abc"
  },
  // 专门为webpack-dev-server
  // devServer为开发过程中, 开启一个本地服务
  devServer: {
    hot: true,
    hotOnly: true,
    // host: "0.0.0.0",
    // port: 7777,
    // open: true,
    compress: true,
    contentBase: path.resolve(__dirname, "./why"),
    watchContentBase: true,
    // publicPath: "/abc",
    proxy: {
      // "/why": "http://localhost:8888"
      "/why": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/why": ""
        },
        secure: false,
        changeOrigin: true
      }
    },
    // historyApiFallback: true
    historyApiFallback: {
      rewrites: [
        {from: /abc/, to: "/index.html"}
      ]
    }
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "pages": path.resolve(__dirname, "./src/pages")
    }
  },
}
```
#### webpack-dev-middleware
- 默认情况下，webpack-dev-server已经帮助我们做好了一切
    - 比如通过express启动一个服务，比如HMR（热模块替换）；
    - 如果我们想要有更好的自由度，可以使用webpack-dev-middleware；
- webpack-dev-middleware 是一个封装器(wrapper)，它可以把webpack 处理过的文件发送到一个 server。
    - webpack-dev-server 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置；
    - 我们可以搭配一个服务器来使用它，比如express；`npm install --save-dev express webpack-dev-middleware`
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031105804.png)
```js
// server.js
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const config = require("./webpack.config");

// 传入配置信息, webpack根据配置信息进行编译
const compiler =  webpack(config);

const middleware = webpackDevMiddleware(compiler);
app.use(middleware);

app.listen(3000, () => {
  console.log("服务已经开启在3000端口上~");
});
```
### Output 配置
- Output 配置
    - Output中有两个很重要的属性：path和publicPath
        - path：用于指定文件的输出路径（比如打包的html、css、js等），是一个绝对路径；
        - publicPath：默认是一个空字符串，它为我们项目中的资源指定一个公共的路径（publicPath）；
    - 这个publicPath很不容易理解，其实就是给我们打包的资源，给它一个路径：
        - 它的默认值是一个空字符串，所以我们打包后引入js文件时，路径是 bundle.js；
        - 在开发中，我们也将其设置为 /，路径是 /bundle.js，那么浏览器会根据所在的域名+路径去请求对应的资源
        - 如果我们希望在本地直接打开html文件来运行，会将其设置为 ./，路径时 ./bundle.js，可以根据相对路径去查找资源；
        - `资源的路径 = output.publicPath + 打包资源的路径（比如"js/[name].bundle.js"）`
    - 比较常设置的是两个值：
        - `./`：本地环境下可以使用这个相对路径，本地直接打开`index.html`；
        - `/`：服务器部署时使用，服务器地址+ `/js/[name].bundle.js`；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031152339.png)
### HMR（模块热替换）
#### 认识模块热替换（HMR）
- 什么是HMR呢？
    - HMR的全称是Hot Module Replacement，翻译为模块热替换；
    - 模块热替换是指在 应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面；
- HMR通过如下几种方式，来提高开发的速度：
    - 不重新加载整个页面，这样可以保留某些应用程序的状态不丢失；
    - 只更新需要变化的内容，节省开发的时间；
    - 修改了css、js源代码，会立即在浏览器更新，相当于直接在浏览器的devtools中直接修改样式；
- 如何使用HMR呢？
    - 默认情况下，webpack-dev-server已经支持HMR，我们只需要开启即可；
    - 在不开启HMR的情况下，当我们修改了源代码之后，整个页面会自动刷新，使用的是live reloading；
#### 开启HMR
- 修改webpack的配置：
```js
// webpack.config.js
devServer:{
    hot:true
}
```
- 浏览器可以看到如下效果：
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031142940.png)
- 但是你会发现，当我们修改了某一个模块的代码时，依然是刷新的整个页面：
    - 这是因为我们需要去指定哪些模块发生更新时，进行HMR；
```js
if(module.hot){
  module.hot.accept("./utile.js",() => {
    console.log("util更新了");
  })
}
```
#### 框架的HMR
- 在开发其他项目时，我们是否需要经常手动去写入 module.hot.accpet相关的API呢？
    - 比如开发Vue、React项目，我们修改了组件，希望进行热更新，这个时候应该如何去操作呢？
    - 事实上社区已经针对这些有很成熟的解决方案了：
    - 比如vue开发中，我们使用vue-loader，此loader支持vue组件的HMR，提供开箱即用的体验；
    - 比如react开发中，有React Hot Loader，实时调整react组件（目前React官方已经弃用了，改成使用react-refresh）；
- React的HMR
    - React是借助于React Hot Loader来实现的HMR，目前已经改成使用react-refresh来实现了。
    - 安装实现HMR相关的依赖：
        - `npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh`
    - 修改webpack.config.js和babel.config.js文件：
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031144549.png)
- Vue的HMR
    - Vue的加载我们需要使用vue-loader，而vue-loader加载的组件默认会帮助我们进行HMR的处理。
    - 安装加载vue所需要的依赖：`npm install vue-loader vue-template-compiler -D`
    - 配置webpack.config.js：
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031144656.png)
#### HMR的原理
- 那么HMR的原理是什么呢？如何可以做到只更新一个模块中的内容呢？
    - webpack-dev-server会创建两个服务：提供静态资源的服务（express）和Socket服务（net.Socket）；
    - express server负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）；
- HMR Socket Server，是一个socket的长连接：
    - 长连接有一个最好的好处是建立连接后双方可以通信（服务器可以直接发送文件到客户端）；
    - 当服务器监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）
    - 通过长连接，可以直接将这两个文件主动发送给客户端（浏览器）；
    - 浏览器拿到两个新的文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031145143.png)
### 环境分离
#### 如何区分开发环境
- 目前我们所有的webpack配置信息都是放到一个配置文件中的：webpack.config.js
    - 当配置越来越多时，这个文件会变得越来越不容易维护；
    - 并且某些配置是在开发环境需要使用的，某些配置是在生成环境需要使用的，当然某些配置是在开发和生成环境都会使用的；
    - 所以，我们最好对配置进行划分，方便我们维护和管理；
- 那么，在启动时如何可以区分不同的配置呢？
    - 方案一：编写两个不同的配置文件，开发和生成时，分别加载不同的配置文件即可；
    - 方式二：使用相同的一个入口配置文件，通过设置参数来区分它们；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031165332.png)
#### 入口文件解析
- 我们之前编写入口文件的规则是这样的：./src/index.js，但是如果我们的配置文件所在的位置变成了 config 目录，我们是否应该变成 ../src/index.js呢？
    - 如果我们这样编写，会发现是报错的，依然要写成 ./src/index.js；
    - 这是因为入口文件其实是和另一个属性时有关的 context；
- context的作用是用于解析入口（entry point）和加载器（loader）：
    - 官方说法：默认是当前路径（但是经过我测试，默认应该是webpack的启动目录）
    - 另外推荐在配置中传入一个值；
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211031165658.png)
#### 配置文件的分离
- 这里我们创建三个文件：
    - webpack.comm.conf.js
    - webpack.dev.conf.js
    - webpack.prod.conf.js
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103111249.png)
#### 认识代码分离
- 代码分离（Code Splitting）是webpack一个非常重要的特性：
    - 它主要的目的是将代码分离到不同的bundle中，之后我们可以按需加载，或者并行加载这些文件；
    - 比如默认情况下，所有的JavaScript代码（业务代码、第三方依赖、暂时没有用到的模块）在首页全部都加载，就会影响首页的加载速度；
    - 代码分离可以分出出更小的bundle，以及控制资源加载优先级，提供代码的加载性能；
    - 只要是异步导入的代码，webpack都会进行代码分离
- webpack中常用的代码分离有三种：
    - 入口起点：使用entry配置手动分离代码；
        - 入口起点的含义非常简单，就是配置多入口：
            - 比如配置一个index.js和main.js的入口；
            - 他们分别有自己的代码逻辑；
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103120714.png)
    - 防止重复：使用Entry Dependencies或者SplitChunksPlugin去重和分离代码；
        - 假如我们的index.js和main.js都依赖两个库：lodash、dayjs
            - 如果我们单纯的进行入口分离，那么打包后的两个bunlde都有会有一份lodash和dayjs；
            - 事实上我们可以对他们进行共享；
                - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103121033.png)
                - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103121523.png)
        -  另外一种分包的模式是splitChunk，它是使用SplitChunksPlugin来实现的：
            -  因为该插件webpack已经默认安装和集成，所以我们并不需要单独安装和直接使用该插件；
            -  只需要提供SplitChunksPlugin相关的配置信息即可；
            -  Webpack提供了SplitChunksPlugin默认的配置，我们也可以手动来修改它的配置：
                -  比如默认配置中，chunks仅仅针对于异步（async）请求，我们可以设置为initial或者all；
            - SplitChunks自定义配置解析
                - Chunks:
                    - 默认值是async
                    - 另一个值是initial，表示对通过的代码进行处理
                    - all表示对同步和异步代码都进行处理
                - minSize
                    - 拆分包的大小, 至少为minSize；
                    - 如果一个包拆分出来达不到minSize,那么这个包就不会拆分；
                - maxSize
                    - 将大于maxSize的包，拆分为不小于minSize的包；
                - minChunks
                    - 至少被引入的次数，默认是1；
                    - 如果我们写一个2，但是引入了一次，那么不会被单独拆分；
                - name：设置拆包的名称
                    - 可以设置一个名称，也可以设置为false；
                    - 设置为false后，需要在cacheGroups中设置名称；
                - cacheGroups
                    - 用于对拆分的包就行分组，比如一个lodash在拆分之后，并不会立即打包，而是会等到有没有其他符合规包一起来打包；
                    - test属性：匹配符合规则的包；
                    - name属性：拆分包的name属性；
                    - filename属性：拆分包的名称，可以自己使用placeholder属性；
                - chunkIds
                    - optimization.chunkIds配置用于告知webpack模块的id采用什么算法生成。
                    - 在 output 输出的时候 `filename: "[name].bundle.js"` 也相关,
                    - 有三个比较常见的值：
                        - natural：按照数字的顺序使用id；
                        - named：development下的默认值，一个可读的名称的id；
                        - deterministic：确定性的，在不同的编译中不变的短数字id
                            - 在webpack4中是没有这个值的；
                            - 那个时候如果使用natural，那么在一些编译发生变化时，就会有问题；
                    - 最佳实践：
                        - 开发过程中，我们推荐使用named；
                        - 打包过程中，我们推荐使用deterministic；
                - runtimeChunk
                    - 配置runtime相关的代码是否抽取到一个单独的chunk中：
                        - runtime相关的代码指的是在运行环境中，对模块进行解析、加载、模块信息相关的代码；
                        - 比如我们的component、bar两个通过import函数相关的代码加载，就是通过runtime代码完成的；
                    - 抽离出来后，有利于浏览器缓存的策略：
                        - 比如我们修改了业务代码（main），那么runtime和component、bar的chunk是不需要重新加载的；
                        - 比如我们修改了component、bar的代码，那么main中的代码是不需要重新加载的；
                    - 设置的值：
                        - true/multiple：针对每个入口打包一个runtime文件；
                        - single：打包一个runtime文件；
                        - 对象：name属性决定runtimeChunk的名称；
                        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103134003.png)
      ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103121329.png)
    - 动态导入：通过模块的内联函数调用来分离代码；
        - 另外一个代码拆分的方式是动态导入时，webpack提供了两种实现动态导入的方式：
            - 第一种，使用ECMAScript中的 import()语法来完成，也是目前推荐的方式；
            - 第二种，使用webpack遗留的 require.ensure，目前已经不推荐使用；
        - 比如我们有一个模块 bar.js：
            - 该模块我们希望在代码运行过程中来加载它（比如判断一个条件成立时加载）；
            - 因为我们并不确定这个模块中的代码一定会用到，所以最好拆分成一个独立的js文件；
            - 这样可以保证不用到该内容时，浏览器不需要加载和处理该文件的js代码；
            - 这个时候我们就可以使用动态导入；
        - 注意：使用动态导入bar.js：
            - 在webpack中，通过动态导入获取到一个对象；
            - 真正导出的内容，在改对象的default属性中，所以我们需要做一个简单的解构；
        - 动态导入的文件命名
            - 因为动态导入通常是一定会打包成独立的文件的，所以并不会再cacheGroups中进行配置；
            - 那么它的命名我们通常会在output中，通过 chunkFilename 属性来命名；
                - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103123555.png)
            - 但是，你会发现默认情况下我们获取到的 [name]是和id的名称保持一致的
                - 如果我们希望修改name的值，可以通过magic comments（魔法注释）的方式；
                    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103123706.png)
            - 代码的懒加载
                - 动态import使用最多的一个场景是懒加载（比如路由懒加载）：
                    - 封装一个component.js，返回一个component对象；
                    - 我们可以在一个按钮点击时，加载这个对象；
                        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103124249.png)
#### Prefetch和Preload
- webpack v4.6.0+增加了对预获取和预加载的支持。
- 在声明import 时，使用下面这些内置指令，来告知浏览器：
    - prefetch(预获取)：将来某些导航下可能需要的资源
    - preload(预加载)：当前导航下可能需要资源
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103134243.png)
    - 与prefetch 指令相比，preload 指令有许多不同之处：
        - preload chunk 会在父chunk 加载时，以并行方式开始加载。prefetch chunk 会在父chunk 加载结束后开始加载。
        - preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。
        - preload chunk 会在父chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻。       
### CDN
#### 什么是CDN？
- CDN称之为内容分发网络（Content Delivery Network或Content Distribution Network，缩写：CDN）
    - 它是指通过相互连接的网络系统，利用最靠近每个用户的服务器；
    - 更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户；
    - 来提供高性能、可扩展性及低成本的网络内容传递给用户；
- 在开发中，我们使用CDN主要是两种方式：
    - 方式一：打包的所有静态资源，放到CDN服务器，用户所有资源都是通过CDN服务器加载的；
    - 方式二：一些第三方资源放到CDN服务器上；
#### 购买CDN服务器
- 如果所有的静态资源都想要放到CDN服务器上，我们需要购买自己的CDN服务器；
    - 目前阿里、腾讯、亚马逊、Google等都可以购买CDN服务器；
    - 我们可以直接修改publicPath，在打包时添加上自己的CDN地址； 
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104170437.png)
#### 第三方库的CDN服务器
- 通常一些比较出名的开源框架都会将打包后的源码放到一些比较出名的、免费的CDN服务器上：
    - 国际上使用比较多的是unpkg、JSDelivr、cdnjs；
    - 国内也有一个比较好用的CDN是bootcdn；
- 在项目中，我们如何去引入这些CDN呢？
    - 第一，在打包的时候我们不再需要对类似于lodash或者dayjs这些库进行打包；
    - 第二，在html模块中，我们需要自己加入对应的CDN服务器地址；
- 第一步，我们可以通过webpack配置，来排除一些库的打包：
- 第二步，在html模块中，加入CDN服务器地址：
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104171138.png)
    - 手工在index.html模板代码中，需要引用的CDN的库 
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104172154.png)
### shimming
#### 认识shimming
- shimming是一个概念，是某一类功能的统称：
    - shimming翻译过来我们称之为 垫片，相当于给我们的代码填充一些垫片来处理一些问题；
    - 比如我们现在依赖一个第三方的库，这个第三方的库本身依赖lodash，但是默认没有对lodash进行导入（认为全局存在lodash），那么我们就可以通过ProvidePlugin来实现shimming的效果；
- 注意：webpack并不推荐随意的使用shimming
    - Webpack背后的整个理念是使前端开发更加模块化；
    - 也就是说，需要编写具有封闭性的、不存在隐含依赖（比如全局变量）的彼此隔离的模块；
#### Shimming预支全局变量
- 目前我们的lodash、dayjs都使用了CDN进行引入，所以相当于在全局是可以使用_和dayjs的
    - 假如一个文件中我们使用了axios，但是没有对它进行引入，那么下面的代码是会报错的；
- 我们可以通过使用ProvidePlugin来实现shimming的效果：
    - ProvidePlugin能够帮助我们在每个模块中，通过一个变量来获取一个package；
    - 如果webpack看到这个模块，它将在最终的bundle中引入这个模块；
    - 另外ProvidePlugin是webpack默认的一个插件，所以不需要专门导入；
    - ![](media/16360204530486.jpg)
