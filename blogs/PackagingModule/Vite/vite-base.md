---
title: Vite 基础2
date: 2021-12-20
tags:
  - Vite
  - Vite 基础
categories:
  - Vite
---
## 认识Vite
- 什么是vite呢？
    - 官网的定位：下一代前端开发与构建工具
- 如何定义下一代开发和构建工具呢？
    - 我们知道在实际开发中，我们编写的代码往往是不能被浏览器识别的，比如ES6、TypeScript、Vue文件等等
    - 我们必须通过构建工具来对代码进行转换、编译，类似的工具有webpack、rollup、parcel
    - 但是随着项目越来越大，需要处理的JavaScript呈指数级别增长，模块越来越多
    - 构建工具需要很长的时间才能开启服务器，HMR也需要几秒钟才能在浏览器反应过来
- Vite是一种新型前端构建工具，能够显著提升前端开发体验。
## Vite构造
- 它主要由两部分组成
    - 一个开发服务器，它基于原生ES模块提供了丰富的内建功能，HMR的速度非常快读
        - Vite1.x : koa
        - Vite2.x : connect
    - 一套构建指令，它使用rollup打开我们的代码，并且他是预配置的，可以输出生成环境的优化过的静态资源
- 目前是否要大力学习Vite？vite的未来是怎样的？
    - 我个人非常看好vite的未来，也希望它可以有更好的发展
    - 但是，目前vite虽然已经更新到2.x,依旧不算非常的稳定
    - vite社区插件不完善
    - 包括vue脚手架本身，目前也还没有打算迁移到vite,而依旧使用webpack
    - 所有vite看起来非常的火热，在面试也可能被问到，但是实际项目中应用的还是比较少的
## 浏览器原生支持模块化
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211225153819.png)
- 我们如果不借助其他工具，直接使用ES Module来开发有什么问题呢？
    - 首先，我们会发现在使用loadash时，加载了上百个模块的js代码，对于浏览器发送请求时巨大的消耗
    - 其次，我们的代码中如果有TS，less，vue等代码时，浏览器并不能直接识别
## Vite安装
- 安装vite工具：`npm install vite`
- 通过vite来启动项目：`npx vite`
## Vite对于css的支持
- vite可以直接支持css的处理
    - 直接导入css既可
- vite可以直接支持css预处理器，比如less
    - 直接导入less
    - 之后安装less编译器
- vite直接支持postcss的转换
    - 只需要安装postcss，并且配置postcss.config.js的配置文件既可以了
## Vite对TS的支持
- vite对TS是原生支持的，它直接使用ESBuild来完成编译
    - 只需要直接导入就可以
- 如果我们查看浏览器中的请求，会发现请求的依然是ts的代码
    - 这是因为vite中的服务器Connect会对我们的请求进行转发
    - 获取ts编译后的代码，给浏览器返回，浏览器可以直接进行解析
## Vite对于vue支持
- vite对vue提供第一优先级的支持
    - 一些相关插件
    - 配置相关插件
## Vite对于react支持
## Vite脚手架工具
- 在开发中，我们不可能所有的项目都使用vite从零去搭建，比如一个react项目、Vue项目
    - 使用Vite脚手架
- 所以Vite实际上是有两个工具的：
    - vite:相当于一个构建工具，类似于webpack、rollup
    - @vite/create-app:类似vue-cli、create-react-app
- 如何使用脚手架工具呢？
    - `npm init @vite/app`
## ESBuild解析
- ESBuild的特点
    - 超快的构建速度，并且不需要缓存
    - 支持ES6和CommonJS的模块化
    - 支持ES6的Tree Shaking
    - 支持Go,JavaScript的API
    - 支持TypeScript，JSX等语法编译
    - 支持SourceMap
    - 支持代码压缩
    - 支持扩展其他的插件
## ESBuild构建速度
- 打包速度对比
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211225162028.png)
- ESBuild为什么这么快呢？
    - 使用Go语言编写的，可以直接转换成机器代码，而无需经过字节码
    - ESBuild可以充分利用CPU的多内核，尽可能让它们饱和运行
    - ESBuild的所有内容都是从零开始编写的，而不是使用第三方，所以一开始就可以考虑各种性能问题