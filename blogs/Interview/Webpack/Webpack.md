## 全局需要的函数
```js
const path = require('path');

// node中的api
const appDir = process.cwd();
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);
console.log(appDir);
module.exports = resolveApp;
```
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
                    - 用于对拆分的包就行分组，比如一个lodash在拆分之后，并不会立即打包，而是会等到有没有其他符合规包-起来打包；
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
### Tree Shaking
#### 什么是Tree Shaking
- 什么是Tree Shaking呢？
    - Tree Shaking是一个术语，在计算机中表示消除死代码（dead_code）；
    - 最早的想法起源于LISP，用于消除未调用的代码（纯函数无副作用，可以放心的消除，这也是为什么要求我们在进行函数式编程时，尽量使用纯函数的原因之一）；
    - 后来Tree Shaking也被应用于其他的语言，比如JavaScript、Dart；
- JavaScript的Tree Shaking：
    - 对JavaScript进行Tree Shaking是源自打包工具rollup；
    - 这是因为Tree Shaking依赖于ES Module的静态语法分析（不执行任何的代码，可以明确知道模块的依赖关系）
    - webpack2正式内置支持了ES2015模块，和检测未使用模块的能力；
    - 在webpack4正式扩展了这个能力，并且通过 package.json的 sideEffects属性作为标记，告知webpack在编译时，哪里文件可以安全的删除掉；
    - webpack5中，也提供了对部分CommonJS的tree shaking的支持；
        - https://github.com/webpack/changelog-v5#commonis-tree-shaking
#### webpack实现Tree Shaking
- 事实上webpack实现Tree Shaking采用了两种不同的方案：
    - usedExports：通过标记某些函数是否被使用，之后通过Terser来进行优化的；
        - 将mode设置为development模式：
            - 为了可以看到 usedExports带来的效果，我们需要设置为 development 模式，production自动开启
            - 因为在 production 模式下，webpack默认的一些优化会带来很大额影响。
        - 设置usedExports为true和false对比打包后的代码：
            - 在usedExports设置为true时，会有一段注释：unused harmony export mul；
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107155816.png)
            - 这段注释的意义是什么呢？告知Terser在优化时，可以删除掉这段代码；
        - 这个时候，我们讲 minimize设置true：
            - usedExports设置为false时，mul函数没有被移除掉；
            - usedExports设置为true时，mul函数有被移除掉；
        - 所以，usedExports实现Tree Shaking是结合Terser来完成的。
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107160122.png)
    - sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用；
        - sideEffects用于告知webpack compiler哪些模块时有副作用的：
            - 副作用的意思是这里面的代码有执行一些特殊的任务，不能仅仅通过export来判断这段代码的意义；
            - 副作用的问题，在讲React的纯函数时是有讲过的；
        - 在package.json中设置sideEffects的值：
            - 如果我们将sideEffects设置为false，就是告知webpack可以安全的删除未用到的exports；
            - 如果有一些我们希望保留，可以设置为数组；
        - 比如我们有一个format.js、style.css文件：
            - 该文件在导入时没有使用任何的变量来接受；
            - 那么打包后的文件，不会保留format.js、style.css相关的任何代码；
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107161053.png)
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107160712.png)
#### Webpack中treeshaking的设置
- 所以，如何在项目中对JavaScript的代码进行TreeShaking呢（生成环境）？
    - 在optimization中配置usedExports为true，来帮助Terser进行优化；
    - 在package.json中配置sideEffects，直接对模块进行优化；
#### CSS实现Tree Shaking
- 上面我们学习的都是关于JavaScript的Tree Shaking，那么CSS是否也可以进行Tree Shaking操作呢？
    - CSS的Tree Shaking需要借助于一些其他的插件；
        - 在早期的时候，我们会使用PurifyCss插件来完成CSS的tree shaking，但是目前该库已经不再维护了（最新更新也是在4年前了）；
            - 目前我们可以使用另外一个库来完成CSS的Tree Shaking：PurgeCSS，也是一个帮助我们删除未使用的CSS的工具；
            - 安装PurgeCss的webpack插件：`npm install purgecss-webpack-plugin -D`
        - 配置PurgeCss
            - 配置这个插件（生成环境）：
                - paths：表示要检测哪些目录下的内容需要被分析，这里我们可以使用glob；
                - 默认情况下，Purgecss会将我们的html标签的样式移除掉，如果我们希望保留，可以添加一个safelist的属性；
                - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107162056.png)
                - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107162230.png)
            - purgecss也可以对less文件进行处理（所以它是对打包后的css进行tree shaking操作）；
### HTTP压缩
#### 什么是HTTP压缩？
- HTTP压缩是一种内置在 服务器和 客户端之间的，以改进传输速度和带宽利用率的方式；
    - HTTP压缩的流程什么呢？
        - 第一步：HTTP数据在服务器发送前就已经被压缩了；（可以在webpack中完成）
        - 第二步：兼容的浏览器在向服务器发送请求时，会告知服务器自己支持哪些压缩格式；
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107165302.png)
        - 第三步：服务器在浏览器支持的压缩格式下，直接返回对应的压缩后的文件，并且在响应头中告知浏览器；
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107165319.png)
#### 目前的压缩格式
- 目前的压缩格式非常的多：
     - compress –UNIX的“compress”程序的方法（历史性原因，不推荐大多数应用使用，应该使用gzip或deflate）；
    - deflate –基于deflate算法（定义于RFC 1951）的压缩，使用zlib数据格式封装；
    - gzip –GNU zip格式（定义于RFC 1952），是目前使用比较广泛的压缩算法；
    - br –一种新的开源压缩算法，专为HTTP内容的编码而设计；
#### Webpack对文件压缩
- webpack中相当于是实现了HTTP压缩的第一步操作，我们可以使用CompressionPlugin。
- 第一步，安装CompressionPlugin：`npm install compression-webpack-plugin -D`
- 第二步，使用CompressionPlugin即可
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107170010.png)
#### HTML文件中代码的压缩
- 我们之前使用了HtmlWebpackPlugin插件来生成HTML的模板，事实上它还有一些其他的配置：
-  inject：设置打包的资源插入的位置
    -  true、false 、body、head
- cache：设置为true，只有当文件改变时，才会生成新的文件（默认值也是true）
- minify：默认会使用一个插件html-minifier-terser
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107170238.png)
#### InlineChunkHtmlPlugin
- 另外有一个插件，可以辅助将一些chunk出来的模块，内联到html中：
        - 比如runtime的代码，代码量不大，但是是必须加载的；
        - 那么我们可以直接内联到html中；
    - 这个插件是在react-dev-utils中实现的，所以我们可以安装一下它：`npm install react-dev-utils -D`
    - 在production的plugins中进行配置：
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107170435.png)
    
### 封装Library
webpack可以帮助我们打包自己的库文件，比如我们需要打包一个coderwhy_utils的一个库。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107170737.png)
#### 打包Library
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107171007.png)
## Webpack打包
### 打包分析
#### 打包的时间分析
-  如果我们希望看到每一个loader、每一个Plugin消耗的打包时间，可以借助于一个插件：speed-measure-webpack-plugin
    - 注意：该插件在最新的webpack版本中存在一些兼容性的问题（和部分Plugin不兼容）
    - 暂时的做法是把不兼容的插件先删除掉，也就是不兼容的插件不显示它的打包时间就可以了；
- 第一步，安装speed-measure-webpack-plugin插件
    - `npm install speed-measure-webpack-plugin -D`
- 第二步，使用speed-measure-webpack-plugin插件
    - 创建插件导出的对象SpeedMeasurePlugin；
    - 使用smp.wrap包裹我们导出的webpack配置；

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211220141725.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211220141622.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211220141917.png)

## Webpack Vite Rollup
### Webpack相关的基础信息
#### 工作模式
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302150634.png)
#### 配置文件
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302150719.png)
#### Loader
Loader 就是将 Webpack 不认识的内容转化为认识的内容。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302150947.png)
#### 插件（plugin）
与 Loader 用于转换特定类型的文件不同，插件（Plugin）可以贯穿 Webpack 打包的生命周期，执行不同的任务。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302151106.png)
#### 区分环境
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302151324.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302151359.png)
#### 启动 devServer
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302151903.png)
#### 引入css
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152118.png)

#### 引入 Less 或者 Sass
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152156.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152218.png)
#### 分离样式文件
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152343.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152408.png)

#### 图片和字体文件
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152453.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152606.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152622.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152655.png)

#### 资源模块的使用
webpack5 新增资源模块(asset module)，允许使用资源文件（字体，图标等）而无需配置额外的 loader。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152828.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302152920.png)

#### JS 兼容性（Babel）
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302153034.png)

#### SourceMap 配置选择
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302162653.png)
 

SourceMap 是一种映射关系，当项目运行后，如果出现错误，我们可以利用 SourceMap 反向定位到源码位置。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302153951.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302154011.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302154308.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302154357.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302154443.png)

#### 三种 hash 值
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302163140.png)


![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302154654.png)

### Webpack相关进阶
#### 优化构建速度
构建费时分析。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302155427.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302155444.png)

优化 resolve 配置。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302155534.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302155629.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302155704.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160000.png)

多进程配置。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160044.png)

 利用缓存。
 ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160213.png)
 
 ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160252.png)
 
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160317.png)

#### 优化构建结果
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160456.png)

压缩 CSS。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160610.png)

压缩JS
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160641.png)

清除无用的CSS
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302160724.png)

Tree-shaking
Scope Hoisting
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302161038.png)
#### 优化运行时体验
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302161121.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302161528.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302161700.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302161758.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302161818.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302161932.png)



 





### package.json

从我们接触前端开始，每个项目的根目录下一般都会有一个 package.json 文件，这个文件定义了当前项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等）。

当运行 npm install 命令的时候，会根据 package.json 文件中的配置自动下载所需的模块，也就是配置项目所需的运行和开发环境。

package.json 文件是一个 JSON 对象，这从他的后缀名.json 就可以看出来，该对象的每一个成员就是当前项目的一项设置。比如 name 就是项目名称，version 是版本号。

当然很多人其实并不关心 package.json 的配置，他们应用的更多的是 dependencies 或 devDependencies 配置。

```json
{
  "name": "hardingcheng",
  "version": "0.0.1",
  "description": "antd-theme",
  "keywords": ["node.js", "antd", "theme"],
  "homepage": "https://zhiqianduan.com",
  "bugs": { "url": "http://path/to/bug", "email": "yindong@xxxx.com" },
  "license": "ISC",
  "author": "yindong",
  "contributors": [{ "name": "yindong", "email": "yindong@xxxx.com" }],
  "files": "",
  "main": "./dist/default.js",
  "bin": "",
  "man": "",
  "directories": "",
  "repository": {
    "type": "git",
    "url": "https://path/to/url"
  },
  "scripts": {
    "start": "webpack serve --config webpack.config.dev.js --progress"
  },
  "config": { "port": "8080" },
  "dependencies": {},
  "devDependencies": {
    "@babel/core": "^7.14.3",
    "@babel/preset-env": "^7.14.4",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2",
    "babel-plugin-import": "^1.13.3",
    "glob": "^7.1.7",
    "less": "^3.9.0",
    "less-loader": "^9.0.0",
    "style-loader": "^2.0.0",
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.0",
    "webpack-dev-server": "^3.11.2"
  },
  "peerDependencies": {
    "tea": "2.x"
  },
  "bundledDependencies": ["renderized", "super-streams"],
  "engines": { "node": "0.10.x" },
  "os": ["win32", "darwin", "linux"],
  "cpu": ["x64", "ia32"],
  "private": false,
  "publishConfig": {}
}
```

- 必须属性
- name 字段
  - package.json 文件中最重要的就是 name 和 version 字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。对包的更改应该与对版本的更改一起进行。
  - package.json 文件中最重要的就是 name 和 version 字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。对包的更改应该与对版本的更改一起进行。
  - name 必须小于等于 214 个字符，不能以.或\_开头，不能有大写字母，因为名称最终成为 URL 的一部分因此不能包含任何非 URL 安全字符。npm 官方建议我们不要使用与核心节点模块相同的名称。不要在名称中加 js 或 node。如果需要可以使用 engines 来指定运行环境。
  - 该名称会作为参数传递给 require，因此它应该是简短的，但也需要具有合理的描述性。
- version 字段
  - version 一般的格式是 x.x.x, 并且需要遵循该规则。
  - package.json 文件中最重要的就是 name 和 version 字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。每次发布时 version 不能与已存在的一致。

* 描述信息
* description 字段
  - description 是一个字符串，用于编写描述信息。有助于人们在 npm 库中搜索的时候发现你的模块。
* keywords 字段
  - keywords 是一个字符串组成的数组，有助于人们在 npm 库中搜索的时候发现你的模块。
* homepage 字段
  - homepage 项目的主页地址。
* bugs 字段
  - bugs 用于项目问题的反馈 issue 地址或者一个邮箱。
  ```json
  "bugs": {
    "url" : "https://github.com/owner/project/issues",
    "email" : "project@hostname.com"
  }
  ```
* license 字段
  - license 是当前项目的协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。
  - `"license" : "BSD-3-Clause"`
* author 字段 contributors 字段
  - author 是具体一个人，contributors 表示一群人，他们都表示当前项目的共享者。同时每个人都是一个对象。具有 name 字段和可选的 url 及 email 字段。
  - contributors 表示该项目包的贡献者，和 author 不同的是，该字段是一个数组，包含所有的贡献者
  ```json
  "author": {
    "name" : "hardingcheng",
    "email" : "hardingcheng@xx.com",
    "url" : "https://hardingcheng.com/"
  }
  ```
* 文件&目录
* files 字段
  - files 属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）
  - 可以在模块根目录下创建一个.npmignore 文件，写在这个文件里边的文件即便被写在 files 属性里边也会被排除在外，这个文件的写法与.gitignore 类似。
* main 字段
  - main 字段指定了加载的入口文件，require 导入的时候就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
* bin 字段
  - bin 项用来指定每个内部命令对应的可执行文件的位置。如果你编写的是一个 node 工具的时候一定会用到 bin 字段。
  - 当我们编写一个 cli 工具的时候，需要指定工具的运行命令，比如常用的 webpack 模块，他的运行命令就是 webpack。
  - 当我们执行 webpack 命令的时候就会执行 bin/index.js 文件中的代码。
  - 在模块以依赖的方式被安装，如果存在 bin 选项。在 node_modules/.bin/生成对应的文件，Npm 会寻找这个文件，在 node_modules/.bin/目录下建立符号链接。由于 node_modules/.bin/目录会在运行时加入系统的 PATH 变量，因此在运行 npm 时，就可以不带路径，直接通过命令来调用这些脚本。
  - 所有 node_modules/.bin/目录下的命令，都可以用 npm run [命令]的格式运行。在命令行下，键入 npm run，然后按 tab 键，就会显示所有可以使用的命令。
  ```json
      "bin": {
    "webpack": "bin/index.js",
  }
  ```
* man 字段
  - man 用来指定当前模块的 man 文档的位置。
  - `"man" :[ "./doc/calc.1" ]`
* directories 字段
  - directories 制定一些方法来描述模块的结构, 用于告诉用户每个目录在什么位置。
* repository 字段
  - 指定一个代码存放地址，对想要为你的项目贡献代码的人有帮助
  ```json
  "repository" : {
    "type" : "git",
    "url" : "https://github.com/npm/npm.git"
  }
  ```

- 脚本配置
- scripts 字段
  - scripts 指定了运行脚本命令的 npm 命令行缩写，比如 start 指定了运行 npm run start 时，所要执行的命令。
  ```json
  "scripts": {
    "start": "node ./start.js"
  }
  ```
  - 使用 scripts 字段可以快速的执行 shell 命令，可以理解为 alias。
  - scripts 可以直接使用 node_modules 中安装的模块，这区别于直接运行需要使用 npx 命令。
- config 字段
  - config 字段用于添加命令行的环境变量。
  ```json
  {
    "name": "hardingcheng",
    "config": { "port": "8080" },
    "scripts": { "start": "node server.js" }
  }
  ```
  - 然后，在 server.js 脚本就可以引用 config 字段的值。`console.log(process.env.npm_package_config_port); //8080`

* 依赖配置
* dependencies 字段, devDependencies 字段
  - dependencies 字段指定了项目运行所依赖的模块，devDependencies 指定项目开发所需要的模块。
  - 它们的值都是一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。
  - 当安装依赖的时候使用--save 参数表示将该模块写入 dependencies 属性，--save-dev 表示将该模块写入 devDependencies 属性。
  - 对象的每一项通过一个键值对表示，前面是模块名称，后面是对应模块的版本号。版本号遵循“大版本.次要版本.小版本”的格式规定。
  - 固定版本: 比如 5.38.1，安装时只安装指定版本。
  - 波浪号: 比如~5.38.1, 表示安装 5.38.x 的最新版本（不低于 5.38.1），但是不安装 5.39.x，也就是说安装时不改变大版本号和次要版本号。
  - 插入号: 比如 ˆ5.38.1, ，表示安装 5.x.x 的最新版本（不低于 5.38.1），但是不安装 6.x.x，也就是说安装时不改变大版本号。
  - 需要注意的是，如果大版本号为 0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
  - latest: 安装最新版本。
* peerDependencies 字段
  - 当我们开发一个模块的时候，如果当前模块与所依赖的模块同时依赖一个第三方模块，并且依赖的是两个不兼容的版本时就会出现问题。
  - 比如，你的项目依赖 A 模块和 B 模块的 1.0 版，而 A 模块本身又依赖 B 模块的 2.0 版。大多数情况下，这不构成问题，B 模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。最典型的场景就是插件，比如 A 模块是 B 模块的插件。用户安装的 B 模块是 1.0 版本，但是 A 插件只能和 2.0 版本的 B 模块一起使用。这时，用户要是将 1.0 版本的 B 的实例传给 A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果 A 和 B 一起安装，那么 B 必须是 2.0 模块。
  - peerDependencies 字段，就是用来供插件指定其所需要的主工具的版本。可以通过 peerDependencies 字段来限制。
  ```json
  {
    "name": "myless",
    "peerDependencies": {
      "less": "3.9.x"
    }
  }
  ```
* bundledDependencies 字段
  - bundledDependencies 指定发布的时候会被一起打包的模块.
* optionalDependencies 字段
  - 如果一个依赖模块可以被使用， 同时你也希望在该模块找不到或无法获取时 npm 继续运行，你可以把这个模块依赖放到 optionalDependencies 配置中。这个配置的写法和 dependencies 的写法一样，不同的是这里边写的模块安装失败不会导致 npm install 失败。
* engines 字段
  - engines 字段指明了该模块运行的平台，比如 Node 或者 npm 的某个版本或者浏览器。
  - `{ "engines" : { "node" : ">=0.10.3 <0.12", "npm" : "~1.0.20" } }`

- 发布配置
- os 字段
  - 可以指定你的模块只能在哪个操作系统上运行
  - `"os" : [ "darwin", "linux", "win32" ]`
- cpu 字段
  - 限制模块只能在某种架构的 cpu 下运行
  - `"cpu" : [ "x64", "ia32" ]`
- private 字段
  - 如果这个属性被设置为 true，npm 将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。
  - `"private": true`
- publishConfig 字段
  - 这个配置是会在模块发布时生效，用于设置发布用到的一些值的集合。如果你不想模块被默认标记为最新的，或者默认发布到公共仓库，可以在这里配置 tag 或仓库地址。
  - 通常 publishConfig 会配合 private 来使用，如果你只想让模块被发布到一个特定的 npm 仓库，如一个内部的仓库。
  ```json
  "private": true,
  "publishConfig": {
    "tag": "1.0.0",
    "registry": "https://registry.npmjs.org/",
    "access": "public"
  }
  ```
- preferGlobal 字段
  - preferGlobal 的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global 参数），要不要显示警告，表示该模块的本意就是安装为全局模块。
  - `"preferGlobal": false`
- browser 字段

  - browser 指定该模板供浏览器使用的版本。Browserify 这样的浏览器打包工具，通过它就知道该打包那个文件。

  ```json
  "browser": {
    "tipso": "./node_modules/tipso/src/tipso.js"
  },s
  ```

- 第三方配置
- typings
  - typings 字段用来指定 TypeScript 的入口文件：
  - `"typings": "types/index.d.ts",`
- eslintConfig
  - eslint 的配置可以写在单独的配置文件.eslintrc.json 中，也可以写在 package.json 文件的 eslintConfig 配置项中。
- babel
  - babel 用来指定 Babel 的编译配置
- unpkg
  - 使用该字段可以让 npm 上所有的文件都开启 cdn 服务，该 CND 服务由 unpkg 提供：`"unpkg": "dist/vue.js"`
- lint-staged
  - lint-staged 是一个在 Git 暂存文件上运行 linters 的工具，配置后每次修改一个文件即可给所有文件执行一次 lint 检查，通常配合 gitHooks 一起使用。
  - 使用 lint-staged 时，每次提交代码只会检查当前改动的文件。
- gitHooks
  - itHooks 用来定义一个钩子，在提交（commit）之前执行 ESlint 检查。在执行 lint 命令后，会自动修复暂存区的文件。修复之后的文件并不会存储在暂存区，所以需要用 git add 命令将修复后的文件重新加入暂存区。在执行 pre-commit 命令之后，如果没有错误，就会执行 git commit 命令
  - 这里就是配合上面的 lint-staged 来进行代码的检查操作。
- browserslist
  - browserslist 字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。

### browserslist

browserslist 字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。比如最上面的例子中的该字段值：

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

这里指定了一个对象，里面定义了生产环境和开发环境的浏览器要求。上面的 development 就是指定开发环境中支持最后一个版本的 chrome、Firefox、safari 浏览器。这个属性是不同的前端工具之间共用目标浏览器和 node 版本的配置工具，被很多前端工具使用，比如 Babel、Autoprefixer 等。

### Webpack 流程

- webpack 到底是如何对我们的项目进行打包的呢？
  - 事实上 webpack 在处理应用程序时，它会根据命令或者配置文件找到入口文件；
  - 从入口开始，会生成一个 依赖关系图，这个依赖关系图会包含应用程序中所需的所有模块（比如.js 文件、css 文件、图片、 字体等）；
  - 然后遍历图结构，打包一个个模块（根据文件的不同使用不同的 loader 来解析）生成 AST 语法树，；
  - 找出每个文件的依赖项（遍历）。
  - 根据 AST 语法树，生成浏览器能够运行的代码

Webpack 的运行流程是一个串行的过程：

- 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
- 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
- 确定入口：根据配置中的 entry 找出所有的入口文件
- 编译模块：从入口文件开始，调用所有配置的 loader 对模块进行翻译成 compliation，然后递归所有依赖的模块，然后重复编译。得到每个模块翻译后的最终内容以及它们之间的依赖关系。
- 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
- 输出资源：根据入口和模块的依赖关系，组装成一个个包含多个模块的 chunk，然后将 chunk 转换成一个单独的文件加入输出列表，这是可以修改输出内容的最后机会
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

### webpack 打包构建 AST 以后做了什么??????????
### webpack打包出来的体积太大，如何优化体积?
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302165348.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302165433.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302165540.png)




### webpack 打包的生命周期?

首先，我们需要读到入口文件里的内容（也就是 index.js 的内容）

其次，分析入口文件，递归的去读取模块所依赖的文件内容，生成依赖图

最后，根据依赖图，生成浏览器能够运行的最终代码

- 初始化参数 从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
- 开始编译 用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
- 确定入口 根据配置中的 entry 找出所有的入口文件
- 编译模块 从入口文件出发，调用所有配置的 Loader 对模块进行编译，再找出该模块被编译后的最终内容以及它们之间的依赖关系
- 完成模块编译 在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
- 输出资源 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
- 输出完成 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

### Webpack 特点

- 代码分割
  - Webpack 有两种组织模块依赖的方式，同步和异步。异步依赖作为分割点，形成一个新的块。在优化了依赖树后，每一个异步区块都作为一个文件被打包。
- Loader(加载器)
  - Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。
- 智能解析
  - Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。
- 插件系统
  - Webpack 还有一个功能丰富的插件系统。大多数内容功能都是基于这个插件系统运行的，还可以开发和使用开源的 Webpack 插件，来满足各式各样的需求。
- 支持热模块替换(HMR)
- 在开发应用时使用 Webpack，开发库时使用 Rollup。

### webpack 里面的插件是如何实现的？
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302164239.png)





### plugin?

plugin 完成的是 loader 不能完成的功能。plugin 也是为了扩展 webpack 的功能，但是 plugin 是作用于 webpack 本身上的。而且 plugin 不仅只局限在打包，资源的加载上，它的功能要更加丰富。从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack 提供了很多开箱即用的插件：CommonChunkPlugin 主要用于提取第三方库和公共模块，避免首屏加载的 bundle 文件，或者按需加载的 bundle 文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建 bundle。插件可以携带参数，所以在 plugins 属性传入 new 实例。

plugins 在整个编译周期都起作用。

插件是 webpack 的 支柱 功能。webpack 自身也是构建于你在 webpack 配置中用到的相同的插件系统之上。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。

### plugin 的执行顺序?

webpack 本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable。

Webpack 的 Tapable 事件流机制保证了插件的有序性，将各个插件串联起来， Webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条 webapck 机制中，去改变 webapck 的运作，使得整个系统扩展性良好。

Tapable 也是一个小型的 library，是 Webpack 的一个核心工具。类似于 node 中的 events 库，核心原理就是一个订阅发布模式。作用是提供类似的插件接口。

webpack 中最核心的负责编译的 Compiler 和负责创建 bundles 的 Compilation 都是 Tapable 的实例，可以直接在 Compiler 和 Compilation 对象上广播和监听事件

```js
/**
 * 广播事件
 * event-name 为事件名称，注意不要和现有的事件重名
 */
compiler.apply("event-name", params);
compilation.apply("event-name", params);
/**
 * 监听事件
 */
compiler.plugin("event-name", function(params) {});
compilation.plugin("event-name", function(params) {});
```

Tapable 类暴露了 tap、tapAsync 和 tapPromise 方法，可以根据钩子的同步/异步方式来选择一个函数注入逻辑。

```js
// Tabable用法

const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook,
} = require("tapable");
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211126092932.png)

### 有哪些常见的 Plugin？你用过哪些 Plugin？

- define-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
- ignore-plugin：忽略部分文件
- html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
- web-webpack-plugin：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用
- uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)
- terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
- webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
- mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代 extract-text-webpack-plugin)
- serviceworker-webpack-plugin：为网页应用增加离线缓存功能
- clean-webpack-plugin: 目录清理，每次打包的时候，打包目录都会遗留上次打包的文件，为了保持打包目录的纯净
- ModuleConcatenationPlugin: 开启 Scope Hoisting
- speed-measure-webpack-plugin: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)
- webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)

### 是否写过 Plugin？简单描述一下编写 Plugin 的思路？

webpack 在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。

- compiler 暴露了和 Webpack 整个生命周期相关的钩子
- compilation 暴露了与模块和依赖有关的粒度更小的事件钩子
- 插件需要在其原型上绑定 apply 方法，才能访问 compiler 实例
- 传给每个插件的 compiler 和 compilation 对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件
- 找出合适的事件点去完成想要的功能

  - emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)
  - watch-run 当依赖的文件发生变化时会触发

- 异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住

### 手写一个 plugins？

```js
/**
 * 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过Webpack提供的API改变输出结果。
 */
// plugin的本质是类；我们在定义plugin时，其实是在定义一个类；定义好plugin后就可以在webpack配置中使用这个插件
// plugins/MyPlugin.js
class MyPlugin {
    constructor(options) {
        console.log("Plugin被创建了");
        console.log(options);
        this.options = options;
    }
    apply(compiler) {}
}
//webpack.config.js
module.exports = {
    plugins: [
        // 通过实例化插件传入参数
        new MyPlugin({
            title: 'MyPlugin'
        })
    ],
}
// 在构建插件时就能通过options获取配置信息，对插件做一些初始化的工作。在构造函数中我们发现多了一个apply函数，它会在webpack运行时被调用，并且注入compiler对象
/**
 * webpack启动，执行new myPlugin(options)，初始化插件并获取实例
 * 初始化complier对象，调用myPlugin.apply(complier)给插件传入complier对象
 * 插件实例获取complier，通过complier监听webpack广播的事件，通过complier对象操作webpack
 *
 *
 * 这里又有一个compilation对象，它和上面提到的compiler对象都是Plugin和webpack之间的桥梁
 * compiler对象包含了 Webpack 环境所有的的配置信息。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。
 * compilation对象包含了当前的模块资源、编译生成资源、变化的文件等。当运行webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。
 *
 *
 * compiler和compilation的区别在于：
 * compiler代表了整个webpack从启动到关闭的生命周期，而compilation只是代表了一次新的编译过程
 * compiler和compilation暴露出许多钩子，我们可以根据实际需求的场景进行自定义处理
 */


// plugins/MyPlugin.js
class MyPlugin {
    constructor(options) {
        console.log("Plugin被创建了");
        this.options = options;
    }
    apply(compiler) {
        // 不推荐使用，plugin函数被废弃了
        //  compiler.plugin("compile", (compilation) => {
        //    console.log("compile");
        // });
        // apply函数中注入的compiler对象进行注册事件,注册完成的钩子
        // compiler不仅有同步的钩子，通过tap函数来注册
        compiler.hooks.done.tap("MyPlugin", (compilation) => {
            console.log("compilation done");
        });
        // 还有异步的钩子，通过tapAsync和tapPromise来注册
        compiler.hooks.run.tapAsync("MyPlugin", (compilation, callback) => {
            setTimeout(() => {
                console.log("compilation run");
                callback()
            }, 1000)
        });
        compiler.hooks.emit.tapPromise("MyPlugin", (compilation) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("compilation emit");
                    resolve();
                }, 1000)
            });
        });

    }
}
//webpack.config.js
module.exports = {
    plugins: [
        // 通过实例化插件传入参数
        new MyPlugin({
            title: 'MyPlugin'
        })
    ],
}



// 手写FileListPlugin
class FileListPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            var filelist = 'In this build:\n\n';
            // 遍历所有编译过的资源文件，
            // 对于每个文件名称，都添加一行内容。
            for (var filename in compilation.assets) {
                filelist += '- ' + filename + '\n';
            }
            // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
            compilation.assets['filelist.md'] = {
                source: function () {
                    return filelist;
                },
                size: function () {
                    return filelist.length;
                }
            };
            callback();
        })
    }
}
module.exports = FileListPlugin
// 我们这里用到了assets对象，它是所有构建文件的一个输出对象，打印出来大概长这样：
{
    'main.bundle.js': {
        source: [Function: source],
        size: [Function: size]
    },
    'index.html': {
        source: [Function: source],
        size: [Function: size]
    }
}
// 我们手动加入一个filelist.md文件的输出；打包后我们在dist文件夹中会发现多了这个文件：
In this build:

- main.bundle.js
- index.html






class DelConsole {
    constructor(options) {
        this.deleteConsole = options.deleteConsole;
    }
    apply(compiler) {
        let that = this;
        compiler.hooks.emit.tap('DelConsole',compilation=>{
            // 探索每个块（构建后的输出）
            compilation.chunks.forEach(function(chunk) {
              // 探索块生成的每个资源文件名
              chunk.files.forEach(function(filename) {
                var source = compilation.assets[filename].source();
                // 删除console语句
                if(that.deleteConsole){
                    source = source.replace(/console\.(log|dir|info)\(.*?\);?/g, '');
                }
                // 返回
                compilation.assets[filename]={
                    source() {
                        return source;
                    },
                    size() {
                        return source.length;
                    }
                }
              });
            });
        });
    }
}
module.exports = DelConsole;

```

### loader?

loader 从字面的意思理解，是   加载   的意思。
由于 webpack 本身只能打包 commonjs 规范的 js 文件，所以，针对 css，图片等格式的文件没法打包，就需要引入第三方的模块进行打包。loader 虽然是扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域，完成压缩，打包，语言翻译。loader 是运行在 NodeJS 中。仅仅只是为了打包。
loader 运行在打包文件之前（loader 为在模块加载时的预处理文件）

- loader 支持链式调用。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的
- loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 所期望的 JavaScript。
- loader 可以是同步的，也可以是异步的。
- loader 运行在 Node.js 中，并且能够执行任何操作。
- loader 可以通过 options 对象配置（仍然支持使用 query 参数来设置选项，但是这种方式已被废弃）。
- 除了常见的通过 package.json 的 main 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 loader 字段直接引用一个模块。
- 除了常见的通过 package.json 的 main 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 loader 字段直接引用一个模块。
- loader 能够产生额外的任意文件。
- 可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译和 更多其他特性。

### loader 的执行顺序

默认情况下是：从右往左，从下往上。

### 有哪些常见的 Loader？你用过哪些 Loader？

- raw-loader：加载文件原始内容（utf-8）
- file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
- url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
- source-map-loader：加载额外的 Source Map 文件，以方便断点调试
- svg-inline-loader：将压缩后的 SVG 内容注入代码中
- image-loader：加载并且压缩图片文件
- json-loader 加载 JSON 文件（默认包含）
- handlebars-loader: 将 Handlebars 模版编译成函数并返回
- babel-loader：把 ES6 转换成 ES5
- ts-loader: 将 TypeScript 转换成 JavaScript
- awesome-typescript-loader：将 TypeScript 转换成 JavaScript，性能优于 ts-loader
- sass-loader：将 SCSS/SASS 代码转换成 CSS
- css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
- style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
- postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
- eslint-loader：通过 ESLint 检查 JavaScript 代码
- tslint-loader：通过 TSLint 检查 TypeScript 代码
- mocha-loader：加载 Mocha 测试用例的代码
- coverjs-loader：计算测试的覆盖率
- vue-loader：加载 Vue.js 单文件组件
- i18n-loader: 国际化
- cache-loader: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里

### 是否写过 Loader？简单描述一下编写 loader 的思路？

Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。

- Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用
- Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据
- 尽可能的异步化 Loader，如果计算量很小，同步也可以
- Loader 是无状态的，我们不应该在 Loader 中保留状态
- 使用 loader-utils 和 schema-utils 为我们提供的实用工具
- 加载本地 Loader 方法
  - Npm link
  - ResolveLoader

### 手写一个 loader？

```js
/**
 * 单一原则: 每个Loader只做一件事，简单易用，便于维护；
 * 链式调用: Webpack 会按顺序链式调用每个Loader；
 * 统一原则: 遵循Webpack制定的设计规则和结构，输入与输出均为字符串，各个Loader完全独立，即插即用；
 * 无状态原则：在转换不同模块时，不应该在loader中保留状态；
 */

// 同步loader
// loader默认导出一个函数，接受匹配到的文件资源字符串和SourceMap，我们可以修改文件内容字符串后再返回给下一个loader进行处理
// 导出的loader函数不能使用箭头函数，很多loader内部的属性和方法都需要通过this进行调用，比如this.cacheable()来进行缓存、this.sourceMap判断是否需要生成sourceMap等。
module.exports = function (source, map) {
    return source
}

// style-loader
// 这里的source就可以看做是处理后的css文件字符串，我们把它通过style标签的形式插入到head中；同时我们也发现最后返回的是一个JS代码的字符串，webpack最后会将返回的字符串打包进模块中。
function loader(source, map) {
    let style = `
      let style = document.createElement('style');
      style.innerHTML = ${JSON.stringify(source)};
      document.head.appendChild(style)
    `;
    return style;
}
module.exports = loader;

// 异步loader
// 我们在处理source时，有时候会进行异步操作，一种方法是通过async/await，阻塞操作执行；另一种方法可以通过loader本身提供的回调函数callback。
// callback({
//     //当无法转换原内容时，给 Webpack 返回一个 Error
//     error: Error | Null,
//     //转换后的内容
//     content: String | Buffer,
//     //转换后的内容得出原内容的Source Map（可选）
//     sourceMap?: SourceMap,
//     //原内容生成 AST语法树（可选）
//     abstractSyntaxTree?: AST
// })
// Source Map生成很耗时，通常在开发环境下才会生成Source Map，其它环境下不用生成。Webpack为loader提供了this.sourceMap这个属性来告诉loader当前构建环境用户是否需要生成Source Map。
//loader/less-loader
const less = require("less");

function loader(source) {
    const callback = this.async();
    less.render(source, function (err, res) {
        let {
            css,
            map
        } = res;
        callback(null, css, map);
    });
}
module.exports = loader;

// 加载本地loader
// loader文件准备好了之后，我们需要将它们加载到webpack配置中去；在基础篇中，我们加载第三方的loader只需要安装后在loader属性中写loader名称即可，现在加载本地loader需要把loader的路径配置上。
module.exports = {
    module: {
        rules: [{
            test: /\.less/,
            use: [{
                    loader: './loader/style-loader.js',
                },
                {
                    loader: path.resolve(__dirname, "loader", "less-loader"),
                },
            ],
        }]
    }
}
// 们可以在loader中配置本地loader的相对路径或者绝对路径，但是这样写起来比较繁琐，我们可以利用webpack提供的resolveLoader属性，来告诉webpack应该去哪里解析本地loader。
module.exports = {
    module: {
        rules: [{
            test: /\.less/,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'less-loader',
                },
            ],
        }]
    },
    resolveLoader: {
        // 这样webpack会先去loader文件夹下找loader，没有找到才去node_modules；因此我们写的loader尽量不要和第三方loader重名，否则会导致第三方loader被覆盖加载。
        modules: [path.resolve(__dirname, 'loader'), 'node_modules']
    }
}

// 处理参数
// 我们在配置loader时，经常会给loader传递参数进行配置，一般是通过options属性来传递的，也有像url-loader通过字符串来传参：
{
    test: /\.(jpg|png|gif|bmp|jpeg)$/,
    use: 'url-loader?limt=1024&name=[hash:8].[ext]'
}
// webpack也提供了query属性来获取传参；但是query属性很不稳定，如果像上面的通过字符串来传参，query就返回字符串格式，通过options方式就会返回对象格式，这样不利于我们处理。因此我们借助一个官方的包loader-utils帮助处理，它还提供了很多有用的工具。
const {
    getOptions,
    parseQuery,
    stringifyRequest,
} = require("loader-utils");

module.exports = function (source, map) {
    //获取options参数
    const options = getOptions(this);
    //解析字符串为对象
    parseQuery("?param1=foo")
    //将绝对路由转换成相对路径
    //以便能在require或者import中使用以避免绝对路径
    stringifyRequest(this, "test/lib/index.js")
}
// 　获取到参数后，我们还需要对获取到的options参数进行完整性校验，避免有些参数漏传，如果一个个判断校验比较繁琐，这就用到另一个官方包schema-utils：
const {
    getOptions
} = require("loader-utils");
const {
    validate
} = require("schema-utils");
const schema = require("./schema.json");
module.exports = function (source, map) {
    const options = getOptions(this);
    const configuration = {
        name: "Loader Name"
    };
    validate(schema, options, configuration);
    //省略其他代码
}

// less-loader源码分析
import less from 'less';
import {
    getOptions
} from 'loader-utils';
import {
    validate
} from 'schema-utils';
import schema from './options.json';
async function lessLoader(source) {
    const options = getOptions(this);
    //校验参数
    validate(schema, options, {
        name: 'Less Loader',
        baseDataPath: 'options',
    });
    const callback = this.async();
    //对options进一步处理，生成less渲染的参数
    const lessOptions = getLessOptions(this, options);
    //是否使用sourceMap，默认取options中的参数
    const useSourceMap =
        typeof options.sourceMap === 'boolean' ?
        options.sourceMap : this.sourceMap;
    //如果使用sourceMap，就在渲染参数加入
    if (useSourceMap) {
        lessOptions.sourceMap = {
            outputSourceFiles: true,
        };
    }
    let data = source;
    let result;
    try {
        result = await less.render(data, lessOptions);
    } catch (error) {}
    const {
        css,
        imports
    } = result;
    //有sourceMap就进行处理
    let map =
        typeof result.map === 'string' ?
        JSON.parse(result.map) : result.map;

    callback(null, css, map);
}
export default lessLoader;


// 缓存加速
// 　在有些情况下，loader处理需要大量的计算非常耗性能（比如babel-loader），如果每次构建都重新执行相同的转换操作每次构建都会非常慢。
// 因此webpack默认会将loader的处理结果标记为可缓存，也就是说在需要被处理的文件或者其依赖的文件没有发生变化时，它的输出结果必然是相同的；如果不想让webpack缓存该loader，可以禁用缓存：
module.exports = function (source) {
    // 强制不缓存
    this.cacheable(false);
    return source;
};









var loaderUtils = require('loader-utils');

module.exports = function(source) {
    var options = loaderUtils.getOptions(this) || {};
    // 删除console语句
    if(options.deleteConsole) {
        source = source.replace(/console\.(log|dir|info)\(.*?\);?/g, '');
    }
    return source;
};

```

### Webpack 的 loader 和 plugins 的区别

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302170401.png)


Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。

Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

对于 loader，它就是一个转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，比如将 A.scss 或 A.less 转变为 B.css，单纯的文件转换过程；
对于 plugin，它就是一个扩展器，它丰富了 wepack 本身，针对是 webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，例如：

```md
run：开始编译
make：从 entry 开始递归分析依赖并对依赖进行 build
build-moodule：使用 loader 加载文件并 build 模块
normal-module-loader：对 loader 加载的文件用 acorn 编译，生成抽象语法树 AST
program：开始对 AST 进行遍历，当遇到 require 时触发 call
require:事件
seal：所有依赖 build 完成，开始对 chunk 进行优化（抽取公共模块、加 hash 等）
optimize-chunk-assets：压缩代码
emit：把各个 chunk 输出到结果文件
```

通过对节点的监听，从而找到合适的节点对文件做适当的处理。

### source map 是什么？生产环境怎么用？

source map 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。map 文件只要不打开开发者工具，浏览器是不会加载的。

线上环境一般有三种处理方案：

- hidden-source-map：借助第三方错误监控平台 Sentry 使用
- nosources-source-map：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高
- sourcemap：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)
  注意：避免在生产中使用 inline- 和 eval-，因为它们会增加 bundle 体积大小，并降低整体性能。

### 文件监听原理呢？

在发现源码发生变化时，自动重新构建出新的输出文件。
Webpack 开启监听模式，有两种方式：

- 启动 webpack 命令时，带上 --watch 参数
- 在配置 webpack.config.js 中设置 watch:true
  缺点：每次需要手动刷新浏览器。
  原理：轮询判断文件的最后编辑时间是否变化，如果某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等 aggregateTimeout 后再执行。

```js
module.export = {
  // 默认false,也就是不开启
  watch: true,
  // 只有开启监听模式时，watchOptions才有意义
  watchOptions: {
    // 默认为空，不监听的文件或者文件夹，支持正则匹配
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行，默认300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
    poll: 1000,
  },
};
```

### 文件指纹是什么？怎么用？

文件指纹是打包后输出的文件名的后缀。

- Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
- Chunkhash：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash
- Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变
- JS 的文件指纹设置

  - 设置 output 的 filename，用 chunkhash。
    ```js
    module.exports = {
      entry: {
        app: "./scr/app.js",
        search: "./src/search.js",
      },
      output: {
        filename: "[name][chunkhash:8].js",
        path: __dirname + "/dist",
      },
    };
    ```

- CSS 的文件指纹设置
  - 设置 MiniCssExtractPlugin 的 filename，使用 contenthash。
    ```js
    module.exports = {
      entry: {
        app: "./scr/app.js",
        search: "./src/search.js",
      },
      output: {
        filename: "[name][chunkhash:8].js",
        path: __dirname + "/dist",
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: `[name][contenthash:8].css`,
        }),
      ],
    };
    ```
- 图片的文件指纹设置

  - 设置 file-loader 的 name，使用 hash。

    - 占位符名称及含义

      - ext 资源后缀名
      - name 文件名称
      - path 文件的相对路径
      - folder 文件所在的文件夹
      - contenthash 文件的内容 hash，默认是 md5 生成
      - hash 文件内容的 hash，默认是 md5 生成
      - emoji 一个随机的指代文件内容的 emoj

        ```js
        const path = require("path");
        module.exports = {
          entry: "./src/index.js",
          output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
          },
          module: {
            rules: [
              {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                      name: "img/[name][hash:8].[ext]",
                    },
                  },
                ],
              },
            ],
          },
        };
        ```

### Webpack 的热更新（HMR）原理

HMR 即 Hot Module Replacement 是指当你对代码修改并保存后，webpack 将会对代码进行重新打包，并将改动的模块发送到浏览器端，浏览器用新的模块替换掉旧的模块，去实现局部更新页面而非整体刷新页面。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008171751.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008172241.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008171851.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008173220.png)


![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302164739.png)



右侧 Server 端使用 webpack-dev-server 去启动本地服务，内部实现主要使用了 webpack、express、websocket。
- 用 express 启动本地服务，当浏览器访问资源时对此做响应。
- 服务端和客户端使用 websocket 实现长连接
- webpack 监听源文件的变化，即当开发者保存文件时触发 webpack 的重新编译。
  - 每次编译都会生成 hash 值、已改动模块的 json 文件、已改动模块代码的 js 文件
  - 编译完成后通过 socket 向客户端推送当前编译的 hash 戳
- 客户端的 websocket 监听到有文件改动推送过来的 hash 戳，会和上一次对比
  - 一致则走缓存
  - 不一致则通过 ajax 和 jsonp 向服务端获取最新资源
- 使用内存文件系统去替换有修改的内容实现局部刷新

### webpack 打包构建 AST 以后做了什么

### 如何对 bundle 体积进行监控和分析？

VSCode 中有一个插件 Import Cost 可以帮助我们对引入模块的大小进行实时监测，还可以使用 webpack-bundle-analyzer 生成 bundle 的模块组成图，显示所占体积。

### 如何优化 Webpack 的构建速度？

- 使用高版本的 Webpack 和 Node.js。
- 多进程/多实例构建：thread-loader
- 压缩代码
  - 多进程并行压缩
    - webpack-paralle-uglify-plugin
  - 通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。
- 图片压缩
  - 使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)
  - 配置 image-webpack-loader
- 缩小打包作用域
  - exclude/include (确定 loader 规则范围)
  - resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
  - resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
  - resolve.extensions 尽可能减少后缀尝试的可能性
  - noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
  - IgnorePlugin (完全排除模块)
  - 合理使用 alias
- 提取页面公共资源
  - 基础包分离：
    - 使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中
    - 使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4 内置) ，替代了 CommonsChunkPlugin 插件
- DLL
  - 使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。
- 充分利用缓存提升二次构建速度
  - babel-loader 开启缓存
  - terser-webpack-plugin 开启缓存
  - 使用 cache-loader 或者 hard-source-webpack-plugin
- Tree shaking
  - 打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的 bundle 中去掉(只能对 ES6 Modlue 生效) 开发中尽可能使用 ES6 Module 的模块，提高 tree shaking 效率
  - 禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking
  - 去除无用 CSS 代码
- Scope hoisting
  - 构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
  - 必须是 ES6 的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法
- Code Splitting: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存
- 动态 Polyfill
  - 建议采用 polyfill-service 只给用户返回需要的 polyfill，社区维护。

### 代码分割，那代码分割的本质是什么？有什么意义呢

代码分割的本质其实就是在源代码直接上线和打包成唯一脚本 main.bundle.js 这两种极端方案之间的一种更适合实际场景的中间状态。

代码分割：用可接受的服务器性能压力增加来换取更好的用户体验。
源代码直接上线：虽然过程可控，但是 http 请求多，性能开销大。
打包成唯一脚本：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。

### 聊一聊 Babel 原理吧
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220302140719.png)


大多数 JavaScript Parser 遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器) 。
Babel 是一个 JavaScript 编译器。他把最新版的 javascript 编译成当下可以执行的版本，简言之，利用 babel 就可以让我们在当前的项目中随意的使用这些新最新的 es6，甚至 es7 的语法。

Babel 大概分为三大部分：解析（parse），转换（transform），生成（generate）。

- 解析：将代码转换成 AST
  - 将代码解析成抽象语法树（AST），每个 js 引擎（比如 Chrome 浏览器中的 V8 引擎）都有自己的 AST 解析器，而 Babel 是通过 Babylon 实现的。在解析过程中有两个阶段：词法分析和语法分析，词法分析阶段把字符串形式的代码转换为令牌（tokens）流，令牌类似于 AST 中节点；而语法分析阶段则会把一个令牌流转换成 AST 的形式，同时这个阶段会把令牌中的信息转换成 AST 的表述结构。
- 转换：访问 AST 的节点进行变换操作生产新的 AST
  - 在这个阶段，Babel 接受得到 AST 并通过 babel-traverse 对其进行深度优先遍历，在此过程中对节点进行添加、更新及移除操作。这部分也是 Babel 插件介入工作的部分。
- 生成：以新的 AST 为基础生成代码
  - 将经过转换的 AST 通过 babel-generator 再转换成 js 代码，过程就是深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

### webpack5 和 webpack4 的区别

1. Tree Shaking

- webpack4.0
  tree-shaking 就可以把没有用的那些东西剔除掉，来减少最终的 bundle 体积。
  ```js
  // webpack.config.js中
  module.exports = {
    optimization: {
      //usedExports : true, 标记没有用的叶子
      usedExports: true, //只导出被使用的模块
      //minimize: true, 摇掉那些没有用的叶子
      minimize: true, // 启动压缩
    },
  };
  ```
- webpack5.0
  webpack5 的 `mode=“production”` 自动开启 `tree-shaking`。

2. 压缩代码

- webpack4
  - `webpack4 上需要下载安装 terser-webpack-plugin 插件，并且需要以下配置`

```js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
// ...other config
optimization: {
  minimize: !isDev,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        compress: {
          pure_funcs: ['console.log']
        }
      }
    }) ]
 }

```

- webpack5
  内部本身就自带 js 压缩功能，他内置了 terser-webpack-plugin 插件，我们不用再下载安装。而且在 mode=“production” 的时候会自动开启 js 压缩功能。
  开发环境下：

```js
// webpack.config.js中
module.exports = {
  optimization: {
    usedExports: true, //只导出被使用的模块
    minimize: true, // 启动压缩
  },
};
```

3. webpack 缓存

- webpack4.0
  - `npm install hard-source-webpack-plugin -D`

```js
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  plugins: [
    // 其它 plugin...
    new HardSourceWebpackPlugin(),
  ],
};
```

- webpack5 缓存配置
  - webpack5 内部内置了 cache 缓存机制。直接配置即可。
  - cache 会在开发模式下被设置成 type： memory 而且会在生产模式把 cache 给禁用掉。

```js
// webpack.config.js
module.exports= {
  // 使用持久化缓存
  cache: {
    // type 的可选值为： memory 使用内容缓存，filesystem 使用文件缓存。
    type: 'filesystem'，
    cacheDirectory: path.join(__dirname, 'node_modules/.cac/webpack')
  }
}
```

4. 对 loader 的优化

- webpack 4 加载资源需要用不同的 loader
  - raw-loader 将文件导入为字符串
  - url-loader 将文件作为 data url 内联到 bundle 文件中
  - file-loader 将文件发送到输出目录中
- webpack5 的资源模块类型替换 loader
  - asset/resource 替换 file-loader(发送单独文件)
  - asset/inline 替换 url-loader （导出 url）
  - asset/source 替换 raw-loader（导出源代码）
  - asset

5. 启动服务的差别

- webpack4 启动服务
  - 通过 webpack-dev-server 启动服务
- webpack5 启动服务
  - 内置使用 webpack serve 启动，但是他的日志不是很好，所以一般都加都喜欢用 webpack-dev-server 优化。

6. devtool 的差别
   sourceMap 需要在 webpack.config.js 里面直接配置 devtool 就可以实现了。而 devtool 有很多个选项值，不同的选项值，不同的选项产生的 .map 文件不同，打包速度不同。
   一般情况下，我们一般在开发环境配置用“cheap-eval-module-source-map”，在生产环境用‘none’。

```js
v4: devtool: "cheap-eval-module-source-map";
v5: devtool: "eval-cheap-module-source-map";
```

### Webpack 打包加速的方法

- devtool 的 sourceMap 较为耗时
- 开发环境不做无意义的操作：代码压缩、目录内容清理、计算文件 hash、提取 CSS 文件等
- 第三方依赖外链 script 引入：vue、ui 组件、JQuery 等
- HotModuleReplacementPlugin：热更新增量构建
- DllPlugin& DllReferencePlugin：动态链接库，提高打包效率，仅打包一次第三方模块，每次构建只重新打包业务代码。
- thread-loader,happypack：多线程编译，加快编译速度
- noParse：不需要解析某些模块的依赖
- babel-loader 开启缓存 cache
- splitChunks（老版本用 CommonsChunkPlugin）：提取公共模块，将符合引用次数(minChunks)的模块打包到一起，利用浏览器缓存
- Tree Shaking 摇树：基于 ES6 提供的模块系统对代码进行静态分析, 并在压缩阶段将代码中的死代码（dead code)移除，减少代码体积。

### Webpack 打包体积优化思路

- webpack-bundle-analyzer 插件可以可视化的查看 webpack 打包出来的各个文件体积大小，以便我们定位大文件，进行体积优化
- 提取第三方库或通过引用外部文件的方式引入第三方库
- 代码压缩插件 UglifyJsPlugin
- 服务器启用 gzip 压缩
- 按需加载资源文件 require.ensure
- 剥离 css 文件，单独打包
- 去除不必要插件，开发环境与生产环境用不同配置文件
- SpritesmithPlugin 雪碧图，将多个小图片打包成一张，用 background-image，backgroud-pisition，width，height 控制显示部分
- url-loader 文件大小小于设置的尺寸变成 base-64 编码文本，大与尺寸由 file-loader 拷贝到目标目录

### happyPack ： 多线程打包

```js
// @file: webpack.config.js
const HappyPack = require('happypack');

{
    module：{
        rules: [{
          test: /.js$/,
          // 1) replace your original list of loaders with "happypack/loader":
          // loaders: [ 'babel-loader' ],
          // 1） 替换原先的loader为  happypack/loader
          use: 'happypack/loader',
          include: [ /* ... */ ],
          exclude: [ /* ... */ ]
        }
      ]
    },
  plugins :[
      // 2) create the plugin:
      // 2) 创建插件
      new HappyPack({
          // 3) re-add the loaders you replaced above in #1:
        // 3) 重新添加刚才被替换的loader
        loaders: [ 'babel-loader' ]
      })
  ]
}
// 项目比较小的时候启用多线程反而会拖慢打包速度，因为多线程之前开启、销毁、通信都需要额外的性能支出
```

### ParallelUglifyPlugin： 多线程压缩 JS 代码

webpack 有默认的代码压缩功能，如果项目比较大、文件比较多，则引入多线程压缩能节省时间。

```js
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
{
  plugins: [
    // window.ENV = "production"
    new webpack.DefinePlugin({ ENV: JSON.stringify("production") }),
    // 打包之前清空文件夹
    new CleanWebpackPlugin(),
    // 压缩css
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:8].css",
    }),
    new HappyPack({
      loaders: ["babel-loader?cacheDirectory=true"],
    }),
    new ParallelUglifyPlugin({}),
  ];
}
```

### Tree Shaking 摇树

虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。基于 ES6 提供的模块系统对代码进行静态分析,并将代码中的死代码（dead code)移除的一种技术。因此，利用 Tree Shaking 技术可以很方便地实现我们代码上的优化，减少代码体积。
- 摇树删除代码的原理
  - webpack 基于 ES6 提供的模块系统，对代码的依赖树进行静态分析，把 import & export 标记为 3 类：
    - 所有 import 标记为/_ harmony import _/
    - 被使用过的 export 标记为/harmony export([type])/，其中[type]和 webpack 内部有关，可能是 binding，immutable 等；
    - 没有被使用的 export 标记为/_ unused harmony export [FuncName] _/，其中[FuncName]为 export 的方法名，之后使用 Uglifyjs（或者其他类似的工具）进行代码精简，把没用的都删除。
- 为何基于 es6 模块实现（ES6 module 特点：）：
  - 只能作为模块顶层的语句出现
  - import 的模块名只能是字符串常量
  - import binding 是 immutable 的
- 条件：
  - 首先源码必须遵循 ES6 的模块规范 (import & export)，如果是 CommonJS 规范 (require) 则无法使用。
  - 编写的模块代码不能有副作用，如果在代码内部改变了外部的变量则不会被移除。
  ```js
    // 在开发模式下，设置 usedExports: true ，打包时只会标记出哪些模块没有被使用，不会删除，因为可能会影响 source-map的标记位置的准确性。
    {
    mode: 'develpoment',
    optimization: {
      // 优化导出的模块
      usedExports: true
    },
    }
    // 在生产模式下默认开启 usedExports: true ，打包压缩时就会将没用到的代码移除
    {
    mode: 'production',
    //  这个属性的作用就是集中配置webpack内部的优化功能
    optimizition: {
      // 只导出外部使用的模块成员 负责标记枯树叶
      usedExports: true,
      minimize: true, // 自动压缩代码 负责摇掉枯树叶
      /**
       * webpack打包默认会将一个模块单独打包到一个闭包中
       * webpack3中新增的API 将所有模块都放在一个函数中 ，尽可能将所有模块合并在一起，
       * 提升效率，减少体积  达到作用域提升的效果
       */
      concatenateModules: true,
    },
  }
  ```
- 使用摇树的注意事项：
  - 使用 ES6 模块语法编写代码
  - 工具类函数尽量以单独的形式输出，不要集中成一个对象或者类
  - 声明 sideEffects
  - 自己在重构代码时也要注意副作用
- tree-shaking & babel 使用 babel-loader 处理 js 代码会导致 tree-shaking 失效的原因
  - treeshaking 使用的前提必须是 ES module 组织的代码，也就是说交给 ESMOdule 处理的代码必须是 ESM。当我们使用 babel-loader 处理 js 代码之后就有可能将 ESM 转换 成 commonjs 规范（preset-env 插件工作的时候就会将 esm => coommonjs）
  - 收到配置 preset-env 的 modules：false,确保不会开启自动转换的插件(在最新版本的 babel-loader 中自动帮我们关闭了转换成 commonjs 规范的功能)

```js
presets: [["@babel/preset-env", { module: "commonjs" }]];
```

### Tree Shaking 原理

Tree-Shaking 是一种基于 ES Module 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化。

Tree Shaking 已经成为一种应用广泛的性能优化手段。

```js
// webpack.config.js
module.exports = {
  entry: "./src/index",
  mode: "production",
  devtool: false,
  optimization: {
    usedExports: true,
  },
};
```

#### 理论基础

在 CommonJs、AMD、CMD 等旧版本的 JavaScript 模块化方案中，导入导出行为是高度动态，难以预测的。

```js
if (process.env.NODE_ENV === "development") {
  require("./bar");
  exports.foo = "foo";
}
```

而 ESM 方案则从规范层面规避这一行为，它要求所有的导入导出语句只能出现在模块顶层，且导入导出的模块名必须为字符串常量。ESM 下模块之间的依赖关系是高度确定的，与运行状态无关，编译工具只需要对 ESM 模块做静态分析，就可以从代码字面量中推断出哪些模块值未曾被其它模块使用，这是实现 Tree Shaking 技术的必要条件。

```js
// index.js
import { bar } from "./bar";
console.log(bar);

// bar.js
export const bar = "bar";
export const foo = "foo";
//bar.js 模块导出了 bar 、foo ，但只有 bar 导出值被其它模块使用，经过 Tree Shaking 处理后，foo 变量会被视作无用代码删除。
```

#### 实现原理

Tree Shaking 是先找出 已使用 的代码，自然剩下的则是 未使用 的代码，最后通过注释的方式分别标注。区分 已使用 和 未使用 的代码后，通过 压缩器 将 未使用 的代码删除。

由于 Tree Shaking 是通过 ES6 Import 和 Export 实现找出 已使用 和 未使用 的代码， 所以 Tree Shaking 使用前提： 是源码必须遵循 ES6 的模块规范 (import & export)，如果是 CommonJS 规范 (require) 则无法使用。

- Webpack 中，Tree-shaking 的实现一是先标记出模块导出值中哪些没有被用过(标记的效果就是删除没有被其它模块使用的导出语句)，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤： - Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中 - Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用 - 生成产物时，若变量没有被其它模块使用则删除对应的导出语句
  真正执行“Shaking”操作的是 Terser 插件。未使用的变量和模块经过标记后，已经变成一段 Dead Code —— 不可能被执行到的代码，这个时候只需要用 Terser 提供的 DCE 功能就可以删除这一段定义语句，以此实现完整的 Tree Shaking 效果。 - 收集模块导出 - 标记模块导出 - 生成代码 - 删除 Dead Code - 结束
- Dead Code 一般具有以下几个特征
  - 代码不会被执行，不可到达
  - 代码执行的结果不会被用到
  - 代码只会影响死变量（只写不读）

### Rollup 原理

Rollup 中，一个文件就是一个模块。每一个模块都会根据文件的代码生成一个 AST 语法抽象树，Rollup 需要对每一个 AST 节点进行分析。

分析 AST 节点，就是看看这个节点有没有调用函数或方法。如果有，就查看所调用的函数或方法是否在当前作用域，如果不在就往上找，直到找到模块顶级作用域为止。（rollup 不看你引入了什么函数，而是看你调用了什么函数。如果调用的函数不在此模块中，就从其它模块引入。）

如果本模块都没找到，说明这个函数、方法依赖于其他模块，需要从其他模块引入。

最后将所有引入的代码打包在一起。生成代码。

### Rollup 特点

- Tree-shaking
  - 这个特点，是 Rollup 最初推出时的一大特点。Rollup 通过对代码的静态分析，分析出冗余代码，在最终的打包文件中将这些冗余代码删除掉，进一步缩小代码体积。
- ES2015 模块打包支持
  - Rollup 直接不需要通过 babel 将 import 转化成 Commonjs 的 require 方式，极大地利用 ES2015 模块的优势。
- 在开发应用时使用 Webpack，开发库时使用 Rollup。

### Vite

Vite(读音类似于[weɪt]，法语，快的意思) 是一个由原生 ES Module 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，在生产环境下基于 Rollup 打包。

### Vite 的特点

- 闪电般的冷启动速度
- 即时热模块更换（热更新）
- 真正的按需编译
  Vite 要求项目完全由 ES Module 模块组成，common.js 模块不能直接在 Vite 上使用。因此不能直接在生产环境使用。在打包上依旧还是使用 rollup 等传统打包工具。因此 Vite 目前更像是一个类似于 webpack-dev-server 的开发工具.

### Vite 为什么这么快?

Webpacp 先打包构建再启动开发服务器。
Vite 巧妙地利用了浏览器对 ESM 的支持，先启动开发服务器,首次启动时会执行依赖预构建，当代码执行到模块加载时再请求对应模块的文件。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211120205244.png)

- 利用原生的 ESM，不用自己实现一套兼容各种模块标准的模块化方案，开发服务器启动后用到什么资源请求什么资源，天然的按需加载。
- 利用 esbuild 把耗时的构建过程变成更轻量的依赖预构建，构建速度几十上百倍的提升
- 预构建依赖时会缓存文件，浏览器请求过的依赖也会设置强缓存，其它资源开发服务器也会根据是否变动协商缓存。

### Vite 的基本实现原理

Vite 的基本实现原理，就是启动一个 koa 服务器拦截浏览器请求 ES Module 的请求。通过 path 找到目录下对应的文件做一定的处理最终以 ES Modules 格式返回给客户端
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008174614.png)

浏览器对 import 的模块发起请求时的一些局限了，平时我们写代码，如果不是引用相对路径的模块，而是引用 node_modules 的模块，都是直接 import xxx from 'xxx'，由 Webpack 等工具来帮我们找这个模块的具体路径。但是浏览器不知道你项目里有 node_modules，它只能通过相对路径去寻找模块。

因此 Vite 在拦截的请求里，对直接引用 node_modules 的模块都做了路径的替换，换成了 /@modules/ 并返回回去。而后浏览器收到后，会发起对 /@modules/xxx 的请求，然后被 Vite 再次拦截，并由 Vite 内部去访问真正的模块，并将得到的内容再次做同样的处理后，返回给浏览器。

### Vite 热更新(Hot Module Reload)原理

Vite 的热加载原理，其实就是在客户端与服务端建立了一个 websocket 链接，当代码被修改时，服务端发送消息通知客户端去请求修改模块的代码，完成热更新。

### Webpack & Vite 原理对比

Webpack 之所以慢，是因为 Webpack 会将许多资源构成一个或者多个 bundle 。当我们修改模块中的一个子模块 b.js，整个 bundle.js 都需要重新打包，随着项目规模的扩大，重新打包(热更新)的时间越来越长。

跳过打包的过程，当需要某个模块时再通过请求去获取。Vite 一个由原生 ES Module（esbuild 是一个全新的 js 打包工具，支持如 babel, 压缩等的功能）驱动的 Web 开发构建工具，完全做到按需加载。

### Javascript 中的 CJS, AMD, UMD 和 ESM 是什么？

Javascript 添加模块化。其中就有 CJS、AMD、UMD 和 ESM。

#### CJS(CommonJS)

Node.js 无疑对前端的发展具有极大的促进作用，其中 CommonJS 模块化规范更是颠覆了人们对于模块化的认知：
Node.js 应用由模块（采用的 CommonJS 模块规范）组成。即一个文件就是一个模块，拥有自己独立的作用域，变量和方法都是存在独立作用域内。

Node.js 中的 CommonJS 规范在浏览器端实现依靠的就是 module.exports 和 require 方法。
CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。
加载某个模块，其实是加载该模块的 module.exports 属性。使用 require 方法加载模块。

CJS 是 CommonJS 的缩写。经常我们这么使用：

```JS
// importing
const doSomething = require('./doSomething.js');

// exporting
module.exports = function doSomething(n) {
  // do something
}
```

- 所有代码都运行在模块作用域内，不会污染全局作用域；
- 模块加载的顺序，按照其在代码中引入的顺序；
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果会被缓存，之后不论加载几次，都会直接读取缓存。清除缓存后方可再次运行；
- module.exports 属性输出的是值的拷贝，一旦输出操作完成，模块内发生的任何变化不会影响到已输出的值；
- 注意 module.exports 和 exports 的用法以及区别；

#### AMD

AMD 规范，全称为：Asynchronous Module Definition。这还要从 Node.js 自身说起，Node.js 运行于服务器端，文件都存在本地磁盘中，不需要去发起网络请求异步加载，所以 CommonJS 规范加载模块是同步的，对于 Node.js 来说自然没有问题，但是应用到浏览器环境中就显然不太合适了。 AMD 规范就是解决这一问题的。

AMD 不同于 CommonJS 规范，是异步的，可以说是专为浏览器环境定制的。AMD 规范中定义了如何创建模块、如何输出、如何导入依赖。
更加友好的是，require.js 库为我们准备好了一切，我们只需要通过 define 方法，定义为模块；再通过 require 方法，加载模块。
因为是异步的，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
AMD 代表异步模块定义。下面是一个示例代码

```js
define(["dep1", "dep2"], function(dep1, dep2) {
  //Define the module value by returning a value.
  return function() {};
});

// "simplified CommonJS wrapping" https://requirejs.org/docs/whyamd.html
define(function(require) {
  var dep1 = require("dep1"),
    dep2 = require("dep2");
  return function() {};
});
```

- AMD 是异步(asynchronously)导入模块的(因此得名)
- 一开始被提议的时候，AMD 是为前端而做的(而 CJS 是后端)
- AMD 的语法不如 CJS 直观。AMD 和 CJS 完全相反

#### CMD

CMD 规范全称为：Common Module Definition，综合了 CommonJS 和 AMD 规范的特点，推崇 as lazy as possible。

CMD 规范和 CMD 规范不同之处：

- AMD 需要异步加载模块，而 CMD 可以同步可以异步；
- CMD 推崇依赖就近，AMD 推崇依赖前置。

#### UMD

UMD 叫做通用模块定义规范（Universal Module Definition）。
它可以通过运行编译时让同一个代码模块在使用 CommonJs、CMD 甚至是 AMD 的项目中运行。
这样就使得 JavaScript 包运行在浏览器端、服务区端甚至是 APP 端都只需要遵守同一个写法就行了。

UMD 代表通用模块定义（Universal Module Definition）。

```js
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));
```

在定义模块得时候会检测当前得环境，将不同的模块定义方式转换为同一种写法。

- 在前端和后端都适用（“通用”因此得名）
- 与 CJS 或 AMD 不同，UMD 更像是一种配置多个模块系统的模式。
- 当使用 Rollup/Webpack 之类的打包器时，UMD 通常用作备用模块

#### ESM

ES 模块化最大的两个特点是：

- ES 模块化规范中模块输出的是值的引用
  - 由于 ES 模块化规范中导出的值是引用，所以不论何时修改模块中的变量，在外部都会有体现。
  - 因为 CommonJS 规范下，输出的值只是拷贝，通过 updateData 方法改变了模块内的 data 的值，但是 data 和 myData 并没有任何关联，只是一份拷贝，所以模块内的变量值修改，也就不会影响到修改之前就已经拷贝过来的 myData 啦。
- 静态化，编译时就确定模块之间的关系，每个模块的输入和输出变量也是确定的
  - ES 模块化设计成静态的目的何在？ 首要目的就是为了实现 tree shaking 提升运行性能（下面会简单说 tree shaking）。 ES 模块化的静态特性也带来了局限：
    - import 依赖必须在文件顶部；
    - export 导出的变量类型严格限制；
    - 依赖不可以动态确定。
- ES 的 export 和 export default 要用谁？ ES 模块化导出有 export 和 export default 两种。这里我们建议减少使用 export default 导出！
  - 其一 export default 导出整体对象，不利于 tree shaking；
  - 其二 export default 导出的结果可以随意命名，不利于代码管理；

ESM 代表 ES 模块。这是 Javascript 提出的实现一个标准模块系统的方案。我相信你们很多人都看到过这个:

```js
import React from 'react';



import {foo, bar} from './myLib';
...
export default function() {
  // your Function
};
export const function1() {...};
export const function2() {...};
```

- 在很多现代浏览器可以使用
- 它兼具两方面的优点：具有 CJS 的简单语法和 AMD 的异步
- 得益于 ES6 的静态模块结构，可以进行 Tree Shaking
- ESM 允许像 Rollup 这样的打包器，删除不必要的代码，减少代码包可以获得更快的加载

#### ES6 Module 和 Commonjs 区别

1. 使用

```js
// ESM使用
// ESM是ESModule，是ECMAScript自己的模块体系，于ES6引入
// 导出：export命令
export const obj = {name: 'E1e'}；
// 默认导出 export default命令
export default {name: 'E1e'};
// 引入接口：import命令
// 引入普通导出
import { obj } from './test.js';
// 引入默认导出
import obj from './test.js';



// CJS使用
// CJSCommonJS，主要用于服务器端
// 导出
const obj = {a: 1};
module.exports = obj;
// 引入
const obj = require('./test.js');
```

2. ESM 输出的是值的引用，而 CJS 输出的是值的拷贝；

```js
// a.mjs(Node环境中进行测试，必须修改后缀名为mjs，这是Node的强制规定)
export let age = 18;
export function addAge() {
  age++;
}
// b.mjs
import { age, addAge } from "./a.mjs";
addAge();
console.log(age); // 19

// a.js(Node环境中进行测试，必须修改后缀名为mjs，这是Node的强制规定)
let age = 18;
module.exports = {
  age,
  addAge: function() {
    age++;
  },
};
// b.js
const { age, addAge } = require("./a.js");
addAge();
console.log(age); // 18
```

3. CJS 的输出是运行时加载，而 ESM 是编译时输出接口；
   因为 CJS 输出的是一个对象，该对象需要在脚本运行完成后才生成，而 ESM 的输出是静态的，在编译时就能生成。

4. CJS 是同步加载，ESM 是异步加载；
   由于 CJS 是用于服务器端的模块体系，需要加载的模块都在本地，所以采用同步加载也不会出问题，但是 ESM 用于浏览器端时，可能涉及到一些异步请求，所以需要采用异步加载。

- CommonJs
  - CommonJs 可以动态加载语句，代码发生在运行时
  - CommonJs 混合导出，还是一种语法，只不过不用声明前面对象而已，当我导出引用对象时之前的导出就被覆盖了
    - 如果使用 exports 导出单个值之后，就不能在导出一个对象值，这只会修改 exports 的对象改变，然而修改无效，最终导出还是 name，和 sex，因为最终的导出是由 module.exports 决定的。
  - CommonJs 导出值是拷贝，可以修改导出的值，这在代码出错时，不好排查引起变量污染
- Es Module
  - Es Module 是静态的，不可以动态加载语句，只能声明在该文件的最顶部，代码发生在编译时
  - Es Module 混合导 s 出，单个导出，默认导出，完全互不影响
  - Es Module 导出是引用值之前都存在映射关系，并且值都是可读的，不能修改

### ES6 Module 和 Commonjs 区别

#### commonjs 使用与原理

在使用 规范下，有几个显著的特点。

- 在 `commonjs` 中每一个 js 文件都是一个单独的模块，我们可以称之为 module；
- 该模块中，包含 CommonJS 规范的核心变量: exports、module.exports、require；
- exports 和 module.exports 可以负责对模块中的内容进行导出；
- require 函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；

- 在当前目录下的 `node_modules` 目录查找。
- 如果没有，在父级目录的 `node_modules` 查找，如果没有在父级目录的父级目录的 `node_modules` 中查找。
- 沿着路径向上递归，直到根目录下的 `node_modules` 目录。
- 在查找过程中，会找 `package.json` 下 main 属性指向的文件，如果没有 `package.json` ，在 node 环境下会以此查找 `index.js` ，`index.json` ，`index.node`。
  <img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210831134529.png" style="zoom:33%;" />

#### common.js 和 es6 中模块

CommonJS 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范 (例如: AMD)，用来对前端模块进行管理。自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。

1. `ES6 Module`静态引入，编译时引入
2. `Commonjs`动态引入，执行时引入
3. 只有`ES6 Module`才能静态分析，实现`Tree-Shaking`
4. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
5. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口（静态编译）。
6. CommonJs 是单个值导出，ES6 Module 可以导出多个
7. CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
8. CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined

```js
//Commonjs
let apiList = require('../config/api.js')
if(isDev) {
 // 动态也引入执行时引入
 apiList = require('../config/api.js')
}

//ES6 Module
import apiList form '../config/api.js'
if(isDev) {
 // 编译时报错，只能静态引入
 import apiList from '../config/api_dev.js'
}
```

`Scope Hosting`:(作用域托管)

```js
// hello.js
export default "hello";

// main.js
import str from "./hello.js";
console.log(str);
```
## Git/规范

### CI/CD？

CI/CD 是一种通过在应用开发阶段引入自动化来频繁向客户交付应用的方法。

CI/CD 的核心概念是持续集成、持续交付和持续部署。它是作为一个面向开发和运营团队的解决方案，主要针对在集成新代码时所引发的问题（也称为：“集成地狱”）。

CI/CD 可让持续自动化和持续监控贯穿于应用的整个生命周期（从集成和测试阶段，到交付和部署）。

这里提供一些常用的 CI/CD 工具：Jenkins、GitHub Actions、GitLab CI、Travis CI

#### CI 全名是 Continuous Integration —— 持续集成；

协同开发是目前主流的开发方式，也就是多位开发人员可以同时处理同一个应用的不同模块或者功能。将所有开发分支代码集成在一起，最终可能会花费很多时间和进行很多重复劳动，费事费力。因为代码冲突是难以避免的。持续集成（CI）可以帮助开发者更加方便地将代码更改合并到主分支。一旦开发人员将改动的代码合并到主分支，系统就会通过自动构建应用，并运行不同级别的自动化测试（通常是单元测试和集成测试）来验证这些更改，确保这些更改没有对应用造成破坏。如果自动化测试发现新代码和现有代码之间存在冲突，CI 可以更加轻松地快速修复这些错误。

CI 持续集成 描述了存储库变更过程。

- 我们可以协同工作，最后的更改都会应用到 master（main） 分支上；但这样一个简单的模型也隐藏着一些问题：
  - 如何知道 master 分支的代码部署成功了？
    - 每次推送更改时，Git 服务器都会向 CI 服务器发送一个通知；
    - CI 服务器克隆存储库，检出分支，并与主分支合并；
    - 然后启动构建脚本；
    - 如果返回 Code 为 0，则表示构建成功。否则，被视为失败；
    - CI 服务器将带有构建结果的请求发送到 Git 服务器；
    - 如果构建成功，则允许合并请求。否则，合并被阻止；
    - 这个过程保证合并到主分支的代码不会破坏构建！
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211119085910.png)
  - 如何验证单元测试的覆盖率？
    - 在任何时候，master 分支的测试覆盖率都不应低于 50%；我们可以借助 Jacoco plugin 插件来实现这一检测；
    - 借助 SonarCloud ，可以实现只检查新增代码的测试覆盖率！
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211119090351.png)
  - 如何判断团队成员是否按统一的代码规范来编码？
    - 可以借助 Checkstyle 插件！比如代码中有一个未使用的 import ，则直接返回构建失败；当然，这个可以根据项目需求来个性配置；
  - 这些问题也可以手动验证，但就是麻烦、低效、易出错；不如交给自动化的 CI ，它就是来干这个的！

#### CD 全名是 Continuous Delivery —— 持续交付；

CD 持续交付 描述了项目新版本自动部署的过程。
CD 持续交付（Continuous Delivery）:
CI 在完成了构建、单元测试和集成测试这些自动化流程后，持续交付可以自动把已验证的代码发布到企业自己的存储库。
持续交付旨在建立一个可随时将开发环境的功能部署到生产环境的代码库。在持续交付过程中，每个步骤都涉及到了测试自动化和代码发布自动化。在流程结束时，运维团队可以快速、轻松地将应用部署到生产环境中。

CD 持续部署（Continuous Deployment）:
对于一个完整、成熟的 CI/CD 管道来说，最后的阶段是持续部署。它是作为持续交付的延伸，持续部署可以自动将应用发布到生产环境。实际上，持续部署意味着开发人员对应用的改动，在编写完成后的几分钟内就能及时生效（前提是它通过了自动化测试）。这更加便于运营团队持续接收和整合用户反馈。总而言之，所有这些 CI/CD 的关联步骤，都极大地降低了应用的部署风险。不过，由于还需要编写自动化测试以适应 CI/CD 管道中的各种测试和发布阶段，因此前期工作量还是很大的。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211119090459.png)
之前的 CI 服务器演变成了现在的 CI/CD 服务器，你可以将 CI 作业委派给 GitLab CI，将 CD 作业委派给 Jenkins。

- CD
  - 请求合并时部署；
  - 定时器部署；
  - Pull Request 合到特定分支时进行部署；
  - 还可组合以上选项；

#### CI 和 CD 有什么区别？

- CI/CD 中的“CI”始终指持续集成
  - 它属于开发人员的自动化流程。成功的 CI 意味着应用代码的新更改会定期构建、测试并合并到共享存储库中。该解决方案可以解决在一次开发中有太多应用分支，从而导致相互冲突的问题。
- CI/CD 中的“CD”指的是持续交付和/或持续部署，
  - 这些相关概念有时会交叉使用。两者都事关管道后续阶段的自动化，但它们有时也会单独使用，用于说明自动化程度。
  - 持续交付（第一种 CD）通常是指开发人员对应用的更改会自动进行错误测试并上传到存储库（如 GitHub 或容器注册表），然后由运维团队将其部署到实时生产环境中。这旨在解决开发和运维团队之间可见性及沟通较差的问题。因此，持续交付的目的就是确保尽可能减少部署新代码时所需的工作量。
  - 持续部署（另一种“CD”）指的是自动将开发人员的更改从存储库发布到生产环境，以供客户使用。它主要为了解决因手动流程降低应用交付速度，从而使运维团队超负荷的问题。持续部署以持续交付的优势为根基，实现了管道后续阶段的自动化。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211119092205.png)

### Git

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211119094900.png)

### Git 命令 1

- 初始化本地仓库
  - git init 将当前目录初始化为 git 的本地仓库
- 查看是否有文件被追踪(只能追踪到暂存区和工作目录中的文件)
  - git status 红色没有追踪,绿色被追踪,他只能看暂存区和工作目录里面的文件,commit 之后到未修改\添加任何文件之前,没有区别,将不会打印任何东西
- 暂存区操作
  - 添加到暂存区
    - git add . 将所有文件提交到暂存区
    - git add <文件名字> 将指定文件提交到暂存区
  - 从暂存区移除文件
    - git rm --cached <文件名字> 从暂存区移除文件
    - git restore --staged <文件名字> 从暂存区移除文件(只能移除暂存区的文件)
    - git reset head <文件名字> 取消上一次的操作(commit 也能用 reset head 取消) 注意:git 所有的操作都是修改操作,所以也可以直接删除工作区文件 然后 git add . 提交到暂存区,也能删除
- 本地仓库操作
  - 提交到本地仓库
    - git commit -m "初始化项目" 这里写本次提交的日志,(如:git commit -m "初始化项目") 一定要写日志,否则会报错.
    - git commit 如果只写了 git commit 会进入编辑模式,按 i 进入编辑状态,输入日志后按 esc 退出编辑模式 在输入 :wq 保存并提交
    - git commit -am "初始化项目" am 是 git add. 和 git commit -m "初始化项目" 的缩写, 代表将文件添加到暂存区并提交, 省去写 git add .命令
  - 查看提交日志
    - git log 查看所有日志的详细信息(id, 日期,作者,日志)
    - git log --pretty=oneline 查看简略日志(id,日志)
  - 对比文本地仓库文件和暂存区文件的不同 git diff head -- <文件名称> 查看本地库和工作区的文件的不同
  ```md
  代码说明:
  |参数|说明|
  |:-:|:-:|
  |--|变动之前的文件|
  |++|变动之后的文件|
  |-1,2|变动之前的文件,从第一行开始,连续两行|
  |+1,4|变动之前的文件,从第一行开始,连续三行|
  ```
  - 查看本地仓库文件
    - git ls-files 查看本地仓库中的文件,没有被添加到仓库中的将不会显示
- 版本回退
  - git reset --hard head^ 退回上一个版本,head 后面的^ 有多少个代表多少个版本,如 git reset --hard head^^^^代表回退四个版本
  - git reset --hard head~2 想要回退多少个版本就在~ 后面写多少,如 git reset --hard head~200 代表回退 200 个版本
  - git reset --hard <id> 回退到指定版本,id 是通过 git log 或者 git reflog 查询的,保证 id 不唯一即可,一般 8 位左右,如 git reset --hard 69feb20ed1
  - git reflog 查看所有的日志 包括退回的日志,git log 回退之后就无法显示最新的版本
- 远程仓库操作
  - 建立远程仓库连接
    - git remote rm origin 删除远程仓库连接(针对已经连接过仓库),
    - git remote add origin <仓库地址> 如 git remote add origin https://github.com/QIXIUQX/teset.git
    - git remote -v 查看连接的远程仓库
  - 推送到远程仓库
    - git push origin main 推送到远程仓库的 main 分支
- 分支操作
  - 本地分支操作
    - git branch <本地分支名称> 创建一个分支 如 git branch dev
    - git checkout -b <本地分支名称> 创建一个分支并且直接切换到该分支 如 git checkout -b feature_search 将会创建分支 feature_search 并且切到 feature_search 分支
    - git branch 查看当前所有分支,\*代表当前所在分支
    - git branch -d <本地分支名称> 删除本地分支,如 git branch -d dev
    - git checkout <本地分支名称> 切换到某个分支,如 git checkout dev 切换到 dev 分支
    - git branch -m <本地分支名称> [本地分支名称] 修改分支名字,如 git branch -m test dev 将名称为 test 的分支重命名为 dev git branch -m demo 将当前分支名字重命名为 demo
    - git merge dev 将 dev 分支合并到 master(输入命令时在 master 分支) 分支合并只能是主干合并分支, 不能是分支合并主干
  - 远程分支操作
    - git branch -a 查看当前所有分支(本地分支和远程分支),\*代表当前所在分支
    - git push origin <本地分支名称> 将分支推送到远程仓库 如 git push origin dev
    - git push origin :<远程分支名称> 将删除远程分支,不会影响本地分支 如 git push origin :dev
    - git checkout -b <本地分支名称> origin/<远程分支名称> 将远程分支拉取到本地并且创建分支 如 git checkout -b dev origin/dev
    - git fetch 获取远程仓库最新的分支状态,(一般用于拉取远程分支到本地之前)
  - 拉取远程最新内容到本地
    - git pull origin <远程分支名称>拉取远程最新内容到本地 如 git pull origin master 拉取远程分支最新内容到本地(ps:每次推送到远程时候优先拉取一次,有冲突直接处理,然后在 push 到远程仓库)
- 标签操作
  - 本地标签操作
    - git tag 查询所有本地标签
    - git tag -d <本地标签名称> 删除本地指定标签
    - git tag <本地标签名称> 创建一个标签 如 git tag v1.0 注意标签是给最后一次提交成功的记录打的
    - git tag <本地标签名称> <id> 指定某一个版本打标签 如 git tag v0.5 8acf0ab39 给 id 为 8acf0ab39 的提交记录打标签
    - git tag <本地标签名称> -m "标签说明" <id> 指定某一个版本打标签并加说明 如 git tag 初始化项目 -m "在给 id3580d4180 打标签" 3580d4180 给 id 为 3580d4180 的提交记录打标签并且标签的说明是:在给 id3580d4180 打标签" 3580d4180,这时候 push 到远程仓库点 tag 就可以看
  - 远程标签操作
    - git push origin <本地标签名称> 推送本地标签到远程仓库 如 git push origin v1.0 将本地仓库 v1.0 推送到远程仓库, 此时远程仓库就能看到 tag
    - git push origin --tag 本地所有没有推送到远程的标签将会全部推送到远程
    - git push origin :refs/tags/<远程标签名称> 删除指定远程仓库中的标签 如 git push origin :refs/tags/v1.0

### Git 命令 2

#### git config

配置 Git 的相关参数。

```md
# 查看配置信息

# --local：仓库级，--global：全局级，--system：系统级

\$ git config <--local | --global | --system> -l

# 查看当前生效的配置信息

\$ git config -l

# 编辑配置文件

# --local：仓库级，--global：全局级，--system：系统级

\$ git config <--local | --global | --system> -e

# 添加配置项

# --local：仓库级，--global：全局级，--system：系统级

\$ git config <--local | --global | --system> --add <name> <value>

# 获取配置项

\$ git config <--local | --global | --system> --get <name>

# 删除配置项

\$ git config <--local | --global | --system> --unset <name>

# 配置提交记录中的用户信息

$ git config --global user.name <用户名>
$ git config --global user.email <邮箱地址>

# 更改 Git 缓存区的大小

# 如果提交的内容较大，默认缓存较小，提交会失败

# 缓存大小单位：B，例如：524288000（500MB）

\$ git config --global http.postBuffer <缓存大小>

# 调用 git status/git diff 命令时以高亮或彩色方式显示改动状态

\$ git config --global color.ui true

# 配置可以缓存密码，默认缓存时间 15 分钟

\$ git config --global credential.helper cache

# 配置密码的缓存时间

# 缓存时间单位：秒

\$ git config --global credential.helper 'cache --timeout=<缓存时间>'

# 配置长期存储密码

\$ git config --global credential.helper store
```

#### git clone

从远程仓库克隆一个版本库到本地。

```md
# 默认在当前目录下创建和版本库名相同的文件夹并下载版本到该文件夹下

\$ git clone <远程仓库的网址>

# 指定本地仓库的目录

\$ git clone <远程仓库的网址> <本地目录>

# -b 指定要克隆的分支，默认是 master 分支

\$ git clone <远程仓库的网址> -b <分支名称> <本地目录>
```

#### git init

初始化项目所在目录，初始化后会在当前目录下出现一个名为 .git 的目录。

```md
# 初始化本地仓库，在当前目录下生成 .git 文件夹

\$ git init
```

#### git status

查看本地仓库的状态。

```md
# 查看本地仓库的状态

\$ git status

# 以简短模式查看本地仓库的状态

# 会显示两列，第一列是文件的状态，第二列是对应的文件

# 文件状态：A 新增，M 修改，D 删除，?? 未添加到 Git 中

\$ git status -s
```

#### git remote

操作远程库。

```md
# 列出已经存在的远程仓库

\$ git remote

# 列出远程仓库的详细信息，在别名后面列出 URL 地址

$ git remote -v
$ git remote --verbose

# 添加远程仓库

\$ git remote add <远程仓库的别名> <远程仓库的 URL 地址>

# 修改远程仓库的别名

\$ git remote rename <原远程仓库的别名> <新的别名>

# 删除指定名称的远程仓库

\$ git remote remove <远程仓库的别名>

# 修改远程仓库的 URL 地址

\$ git remote set-url <远程仓库的别名> <新的远程仓库 URL 地址>
```

#### git branch

操作 Git 的分支命令。

```md
# 列出本地的所有分支，当前所在分支以 "\*" 标出

\$ git branch

# 列出本地的所有分支并显示最后一次提交，当前所在分支以 "\*" 标出

\$ git branch -v

# 创建新分支，新的分支基于上一次提交建立

\$ git branch <分支名>

# 修改分支名称

# 如果不指定原分支名称则为当前所在分支

\$ git branch -m [<原分支名称>] <新的分支名称>

# 强制修改分支名称

\$ git branch -M [<原分支名称>] <新的分支名称>

# 删除指定的本地分支

\$ git branch -d <分支名称>

# 强制删除指定的本地分支

\$ git branch -D <分支名称>
```

#### git checkout

检出命令，用于创建、切换分支等。

```md
# 切换到已存在的指定分支

\$ git checkout <分支名称>

# 创建并切换到指定的分支，保留所有的提交记录

# 等同于 "git branch" 和 "git checkout" 两个命令合并

\$ git checkout -b <分支名称>

# 创建并切换到指定的分支，删除所有的提交记录

\$ git checkout --orphan <分支名称>

# 替换掉本地的改动，新增的文件和已经添加到暂存区的内容不受影响

\$ git checkout <文件路径>
```

#### git cherry-pick

把已经提交的记录合并到当前分支。

```md
# 把已经提交的记录合并到当前分支

\$ git cherry-pick <commit ID>
```

#### git add

把要提交的文件的信息添加到暂存区中。当使用 git commit 时，将依据暂存区中的内容来进行文件的提交。

```md
# 把指定的文件添加到暂存区中

\$ git add <文件路径>

# 添加所有修改、已删除的文件到暂存区中

$ git add -u [<文件路径>]
$ git add --update [<文件路径>]

# 添加所有修改、已删除、新增的文件到暂存区中，省略 <文件路径> 即为当前目录

$ git add -A [<文件路径>]
$ git add --all [<文件路径>]

# 查看所有修改、已删除但没有提交的文件，进入一个子命令系统

$ git add -i [<文件路径>]
$ git add --interactive [<文件路径>]
```

#### git commit

将暂存区中的文件提交到本地仓库中。

```md
# 把暂存区中的文件提交到本地仓库，调用文本编辑器输入该次提交的描述信息

\$ git commit

# 把暂存区中的文件提交到本地仓库中并添加描述信息

\$ git commit -m "<提交的描述信息>"

# 把所有修改、已删除的文件提交到本地仓库中

# 不包括未被版本库跟踪的文件，等同于先调用了 "git add -u"

\$ git commit -a -m "<提交的描述信息>"

# 修改上次提交的描述信息

\$ git commit --amend
```

#### git fetch

从远程仓库获取最新的版本到本地的 tmp 分支上。

```md
# 将远程仓库所有分支的最新版本全部取回到本地

\$ git fetch <远程仓库的别名>

# 将远程仓库指定分支的最新版本取回到本地

\$ git fetch <远程主机名> <分支名>
```

#### git merge

合并分支。

```md
# 把指定的分支合并到当前所在的分支下

\$ git merge <分支名称>
```

#### git diff

比较版本之间的差异。

```md
# 比较当前文件和暂存区中文件的差异，显示没有暂存起来的更改

\$ git diff

# 比较暂存区中的文件和上次提交时的差异

$ git diff --cached
$ git diff --staged

# 比较当前文件和上次提交时的差异

\$ git diff HEAD

# 查看从指定的版本之后改动的内容

\$ git diff <commit ID>

# 比较两个分支之间的差异

\$ git diff <分支名称> <分支名称>

# 查看两个分支分开后各自的改动内容

\$ git diff <分支名称>...<分支名称>
```

#### git pull

从远程仓库获取最新版本并合并到本地。
首先会执行 git fetch，然后执行 git merge，把获取的分支的 HEAD 合并到当前分支。

```md
# 从远程仓库获取最新版本。

\$ git pull
```

#### git push

把本地仓库的提交推送到远程仓库。

```md
# 把本地仓库的分支推送到远程仓库的指定分支

\$ git push <远程仓库的别名> <本地分支名>:<远程分支名>

# 删除指定的远程仓库的分支

$ git push <远程仓库的别名> :<远程分支名>
$ git push <远程仓库的别名> --delete <远程分支名>
```

#### git log

显示提交的记录。

```md
# 打印所有的提交记录

\$ git log

# 打印从第一次提交到指定的提交的记录

\$ git log <commit ID>

# 打印指定数量的最新提交的记录

\$ git log -<指定的数量>
```

#### git reset

还原提交记录。

```md
# 重置暂存区，但文件不受影响

# 相当于将用 "git add" 命令更新到暂存区的内容撤出暂存区，可以指定文件

# 没有指定 commit ID 则默认为当前 HEAD

$ git reset [<文件路径>]
$ git reset --mixed [<文件路径>]

# 将 HEAD 的指向改变，撤销到指定的提交记录，文件未修改

$ git reset <commit ID>
$ git reset --mixed <commit ID>

# 将 HEAD 的指向改变，撤销到指定的提交记录，文件未修改

# 相当于调用 "git reset --mixed" 命令后又做了一次 "git add"

\$ git reset --soft <commit ID>

# 将 HEAD 的指向改变，撤销到指定的提交记录，文件也修改了

\$ git reset --hard <commit ID>
```

#### git revert

生成一个新的提交来撤销某次提交，此次提交之前的所有提交都会被保留。

```md
# 生成一个新的提交来撤销某次提交

\$ git revert <commit ID>
```

#### git tag

操作标签的命令。

```md
# 打印所有的标签

\$ git tag

# 添加轻量标签，指向提交对象的引用，可以指定之前的提交记录

\$ git tag <标签名称> [<commit ID>]

# 添加带有描述信息的附注标签，可以指定之前的提交记录

\$ git tag -a <标签名称> -m <标签描述信息> [<commit ID>]

# 切换到指定的标签

\$ git checkout <标签名称>

# 查看标签的信息

\$ git show <标签名称>

# 删除指定的标签

\$ git tag -d <标签名称>

# 将指定的标签提交到远程仓库

\$ git push <远程仓库的别名> <标签名称>

# 将本地所有的标签全部提交到远程仓库

\$ git push <远程仓库的别名> –tags
```

#### git mv

重命名文件或者文件夹。

```md
# 重命名指定的文件或者文件夹

\$ git mv <源文件/文件夹> <目标文件/文件夹>
```

#### git rm

删除文件或者文件夹。

```md
# 移除跟踪指定的文件，并从本地仓库的文件夹中删除

\$ git rm <文件路径>

# 移除跟踪指定的文件夹，并从本地仓库的文件夹中删除

\$ git rm -r <文件夹路径>

# 移除跟踪指定的文件，在本地仓库的文件夹中保留该文件

\$ git rm --cached
```

### git 操作 git revert 和 git reset 区别？

时常会因为代码及文件的修改提交，导致各种各样的冲突，还有产品需求的频繁变更，致使我们不得不做出回退版本，撤回提交这样的决定，那么此时，reset 和 revert 命令，就派上了用场！

reset，revert 都有撤销、回退的意思，但却各有千秋，区别还是很大的，所以该使用哪种命令一定要结合实际情况来决定。

#### git reset

reset，使用方法：`git reset --hard commit` ，commit 是提交后产生的 SHA1，执行该命令后，代码会完全回退到本次提交时的状态，工作暂存区以及本次提交后面的提交内容将会被完全清除，包括提交记录！

```md
# 8cbf16c0821d20fe42c361f4e3d75a0493dc5fc2 后面的提交都消除了

git reset --hard 8cbf16c0821d20fe42c361f4e3d75a0493dc5fc2
```

HEAD 已经指向了 t1，但你刷新后台时，发现并没有什么变化，这是因为我们还需要执行一下 push，但这里需要注意的是，因为本地代码回到了旧版本，但远程仓库是新版本和本地不一致，所以你在用 git push 时会报错，这里我们需要使用强制提交，git push -f

- 优点：
  - 彻底回退到指定版本，干净清爽；
  - 提交时间线清晰，没有冗杂；
- 缺点：
  - 记录彻底清除，无法再次恢复；

#### git revert

revert 执行后会产生新的 commit 记录，是通过一次新的 commit 来恢复到之前旧的 commit，但 revert 会保留恢复的该次提交后面的其它提交内容，假如后面的提交与要恢复的提交更改了同一地方，此时用 revert 就会产生冲突!

```md
git revert 8cbf16c0821d20fe42c361f4e3d75a0493dc5fc2
```

revert 是撤销/撤回/反提交的意思，我们不能按 reset 的思路理解，我们执行 git revert t1，这么做其实结果是要撤销 t1 的提交，注意，仅仅是撤销 t1 的提交，把 t1 的修改恢复到 t1 之前也就是初始的状态，而不会影响 t2，t3 的提交。但如果 t2，t3 中修改了 t1 修改的同一地方，那么就会产生冲突，因为 revert 意图撤销 t1 的修改，但发现 t2 和 t3 把 t1 的修改再次修改了，此时，revert 意图变得不清晰，因为它无法确定到底是应用你最新的修改，

#### 总结

- reset 是彻底回退到指定的 commit 版本，该 commit 后的所有 commit 都将被清除，包括提交历史记录；
- revert 仅仅是撤销指定 commit 的修改，并不影响后续的 commit，但所撤销的 commit 被后续的 commit 修改了同一地方则会产生冲突；
- reset 执行后不会产生记录，revert 执行后会产生记录；
- reset 执行后无法再次恢复，revert 执行后因为不会清除记录，并且会产生新纪录，所以文件不会丢失，你可以多次执行 revert 恢复到某次改变之前的状态；
- reset 执行后 HEAD 会后移，而 revert 的 HEAD 则一直是向前的；

### 合并多个 commit

使用 git rebase 合并 commit。

#### 待合并的 commit 没有提交到远程

```md
git rebase -i
在弹出的文件里面第一行保持不动，
后面的 pick 改为 s
然后保存文件
git push 即可
```

#### 待合并的 commit 已经提交到远程

```md
git reset commit_id
git add .
git commit -am "Here's the bug fix that closes #28"
git push --force
```

### 一个业务场景：a，b，c，d，要删除 c 的提交，git 怎么操作（git revert）？？？？？？？

### 如何确保你的代码规范？？？？？？
