---
title: HTMLCSS 面试题
date: 2021-12-19
tags:
  - HTMLCSS
categories:
  - HTMLCSS
---
## HTML
### HTML5 新增接口
- H5 新特性
  - 新增选择器 document.querySelector、document.querySelectorAll
  - 拖拽释放(Drag and drop) API
  - 媒体播放的 video 和 audio
  - 本地存储 localStorage 和 sessionStorage
  - 离线应用 manifest
  - 桌面通知 Notifications
  - 语意化标签 article、footer、header、nav、section
  - 增强表单控件 calendar、date、time、email、url、search
  - 地理位置 Geolocation
  - 多任务 webworker
  - 全双工通信协议 websocket
  - 历史管理 history
  - 跨域资源共享(CORS) Access-Control-Allow-Origin
  - 页面可见性改变事件 visibilitychange
  - 跨窗口通信 PostMessage
  - Form Data 对象
  - 绘画 canvas
### HTML5的新特性，除了语义化标签还有什么？
- 语义化标签
    - 在 HTML5 出来之前，我们习惯于用 div 来表示页面的章节或者不同模块，但是 div 本身是没有语义的。但是现在，HTML5 中加入了一些语义化标签，来更清晰的表达文档结构。
- 语义化优点：
    - 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
    - 有利于 SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
    - 方便其他设备解析，如盲人阅读器根据语义渲染网页
    - 有利于开发和维护，语义化更具可读性，代码更好维护，与 CSS3 关系更和谐。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912105010.png)

```html
<title>      <!--：页面主体内容。-->
<hn>         <!--：h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。-->
<ul>         <!--：无序列表。-->
<li>         <!--：有序列表。-->
<header>     <!--：页眉通常包括网站标志、主导航、全站链接以及搜索框。-->
<nav>         <!--：标记导航，仅对文档中重要的链接群使用。-->
<main>         <!--：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。-->
<article>    <!--：定义外部的内容，其中的内容独立于文档的其余部分。-->
<section>    <!--：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。-->
<aside>         <!--：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。-->
<footer>     <!--：页脚，只有当父级是body时，才是整个页面的页脚。-->
<small>      <!--：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。-->
<strong>     <!--：和 em 标签一样，用于强调文本，但它强调的程度更强一些。-->
<em>         <!--：将其中的文本表示为强调的内容，表现为斜体。-->
<mark>       <!--：使用黄色突出显示部分文本。-->
<figure>     <!--：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。-->
<figcaption><!--：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。-->
<cite>       <!--：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。-->
<blockquoto><!--：定义块引用，块引用拥有它们自己的空间。-->
<q>          <!--：短的引述（跨浏览器问题，尽量避免使用）。-->
<time>       <!--：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。-->
<abbr>       <!--：简称或缩写。-->
<dfn>       <!--：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。-->
<address>    <!--：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。-->
<del>        <!--：移除的内容。-->
<ins>        <!--：添加的内容。-->
<code>       <!--：标记代码。-->
<meter>      <!--：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）-->
<progress>    <!--：定义运行中的进度（进程）。-->
```
- H5 新特性
  - 新增选择器 document.querySelector、document.querySelectorAll
  - 拖拽释放(Drag and drop) API
  - 媒体播放的 video 和 audio
  - 本地存储 localStorage 和 sessionStorage
  - 离线应用 manifest
  - 桌面通知 Notifications
  - 语意化标签 article、footer、header、nav、section
  - 增强表单控件 calendar、date、time、email、url、search
  - 地理位置 Geolocation
  - 多任务 webworker
  - 全双工通信协议 websocket
  - 历史管理 history
  - 跨域资源共享(CORS) Access-Control-Allow-Origin
  - 页面可见性改变事件 visibilitychange
  - 跨窗口通信 PostMessage
  - Form Data 对象
  - 绘画 canvas
- 移除的元素
  - 纯表现的元素：basefont、big、center、font、 s、strike、tt、u
  - 对可用性产生负面影响的元素：frame、frameset、noframes
### 如何理解HTML语义化
- 就是用正确的标签做正确的事
  - 头部：header
  - 导航：nav
  - 主体内容：main
  - 标题：h1 ~ h6
  - 段落：p
  - 侧边栏：aside
  - 页脚：footer
- HTML 语义化有什么好处呢？
  - 网页加载慢导致 CSS 文件还未加载时（没有 CSS），页面仍然清晰、可读、好看。
  - 提升用户体验，例如 title、alt 可用于解释名词或解释图片信息。
  - 有利于 SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息。
  - 方便其他设备（如屏幕阅读器、盲人阅读器、移动设备）更好的解析页面。
  - 使代码更具可读性，便于团队开发和维护。
### DOCTYPE 及作用
`<!DOCTYPE html>`
- 概念
  - DTD（document type definition，文档类型定义）声明于文档最前面，用来定义 XML 或（X）HTML 的文件类型。浏览器会使用它来判断文档类型，并根据这个判断决定用什么引擎来解析和渲染他们。
- 解析引擎的两种模式
  - 解析引擎有严格模式和混杂模式。严格模式的排版和JS运作模式是以该浏览器支持的最高标准运行。混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。
- DOCTYPE 的作用
  - DOCTYPE 是用来声明文档类型和 DTD 规范的，其作用一是文件的合法性验证。如果文件代码不合法，那么浏览器解析时会出一些错误。二是浏览器会使用它来判断文档类型，并根据这个判断决定用什么引擎来解析和渲染他们。
### HTML标签的一些共有的属性有哪些？
- id 属性
  - id 属性是标签的唯一标识，每个标签的 id 属性的值必须是唯一的。
- class 属性
  - 常用来使用 class 属性值给标签设置样式，样式一样的标签可以设置同样的 class。
- name 属性
  - 设置标签的名字，可以有同样的名字
- style 属性
  - 设置标签样式
### script标签defer与async差异
- defer
  - 如果 script 标签设置了该属性，则浏览器会异步的下载该文件并且不会影响到后续 DOM 的渲染；如果有多个设置了 defer 的script 标签存在，则会按照顺序执行所有的 script；
  - defer 脚本会在文档渲染完毕后，DOMContentLoaded 事件调用前执行。
  - 载入 JavaScript 文件时不阻塞 HTML 的解析，执行阶段被放到 HTML 标签解析完成之后。
  - 在加载多个 JS 脚本的时候，async 是无顺序的加载，而 defer 是有顺序的加载。
- async
  - async 的设置，会使得 script 脚本异步的加载并在允许的情况下执行
  - async 的执行，并不会按着 script 在页面中的顺序来执行，而是谁先加载完谁执行。
  - 这种方式加载的 JavaScript 依然会阻塞 load 事件
  - async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行。
### viewport
```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
/>
<!-- 
  width    设置viewport宽度，为一个正整数，或字符串‘device-width’
  device-width  设备宽度
  height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
  initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
  minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
  maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
  user-scalable    是否允许手动缩放
  -->
```
## CSS
### float 在什么时候不生效？
1. display：none
设置成 display：none 了之后，float 失效这一点自然不用说。因为此时元素已经不在 dom 树里了，float 当然起不了作用。

2. position：absolute、fixed。
无论是 fixed（相对窗口定位）或者 absolute（相对最近的 position 属性不为 static 的祖先元素）。都会使 float 失效。
### 如果给你一个 div，让你实现多层边框?
#### box-shadow 实现
`box-shadow：x-shadow y-shadow blur spread color inset;`
- x-shadow：设置对象的阴影水平偏移值，单位可以是 px、em 或百分比等，允许负值。
- y-shadow：设置对象的阴影垂直偏移值，单位可以是 px、em 或百分比等，允许负值。
- blur：用于设置边框阴影半径大小。
- spread：扩展半径，设置阴影的尺寸；这个参数可选，缺省时值为 0。
- color：设置阴影的颜色；
- inset：这个参数默认不设置。默认情况下为外阴影，inset 表示内阴影。
```css
div {
  box-shadow: 0 0 0 10px red, 　　　　　　　 0 0 0 16px green,
    　　　　　　　 0 2px 5px 16px rgba(0, 0, 0, 0.5);
  background: yellowgreen;
}
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211129215800.png)
#### outline 实现
如果我们只需要 2 层边框，那么使用 outline 是不错的选择，先设置常规的 border 边框，再加上 outline（描边）。而且 outline 比上面的 box-shadow 还有一大优点就是，可以生成虚线等边框。通常 outline 属性需要和对应的描边偏移 outline-offset 来实现。
```css
div {
  width: 200px;
  height: 100px;
  background: #ffffff;
  border: 5px solid #53cfa2;
  outline: #736e21 dashed 1px;
  outline-offset: -20px;
}
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211129215847.png)
### DIV 拖拽？

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211122221738.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211122221809.png)

```js
    drag () {
      // 拖拽功能(主要是触发三个事件：onmousedown\onmousemove\onmouseup)
      var drag = document.getElementById('drag')

      // 点击某物体时，用drag对象即可，move和up是全局区域，也就是整个文档通用，应该使用document对象而不是drag对象(否则，采用drag对象时物体只能往右方或下方移动)
      drag.onmousedown = function (e) {
        var e = e || window.event // 兼容ie浏览器
        var diffX = e.clientX - drag.offsetLeft // 鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
        var diffY = e.clientY - drag.offsetTop

        /* 低版本ie bug:物体被拖出浏览器可是窗口外部时，还会出现滚动条，
                解决方法是采用ie浏览器独有的2个方法setCapture()\releaseCapture(),这两个方法，
                可以让鼠标滑动到浏览器外部也可以捕获到事件，而我们的bug就是当鼠标移出浏览器的时候，
                限制超过的功能就失效了。用这个方法，即可解决这个问题。注：这两个方法用于onmousedown和onmouseup中 */
        if (typeof drag.setCapture !== 'undefined') {
          drag.setCapture()
        }

        document.onmousemove = function (e) {
          var e = e || window.event // 兼容ie浏览器
          var left = e.clientX - diffX
          var top = e.clientY - diffY

          // 控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条
          if (left < 0) {
            left = 0
          } else if (left > window.innerWidth - drag.offsetWidth) {
            left = window.innerWidth - drag.offsetWidth
          }
          if (top < 0) {
            top = 0
          } else if (top > window.innerHeight - drag.offsetHeight) {
            top = window.innerHeight - drag.offsetHeight
          }

          // 移动时重新得到物体的距离，解决拖动时出现晃动的现象
          drag.style.left = left + 'px'
          drag.style.top = top + 'px'
        }
        document.onmouseup = function (e) { // 当鼠标弹起来的时候不再移动
          console.log('this', this)
          this.onmousemove = null
          this.onmouseup = null // 预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）

          // 修复低版本ie bug
          if (typeof drag.releaseCapture !== 'undefined') {
            drag.releaseCapture()
          }
        }
      }
    }
```

- 我们要确定怎样实现偏移效果，这里无非就两种：
  - 一种是利用绝对定位，拖拽时调整 top 和 left 值，但是这种方案依赖父组件的定位方式
  - 另一种是利用 transform，拖拽时调整元素的偏移向量，这种方案不依赖父组件的定位方式
- 确定怎么计算偏移向量，这里我们监听 mouse 事件来实现：
  - 监听元素的 mousedown 事件，记录元素初始偏移位置；
  - 监听文档的 mousemove 事件，根据鼠标位移向量修改元素的偏移位置；
  - 监听文档的 mouseup 事件，重置数据。

### 线性渐变?

线性渐变`linear-gradient()` 第一个参数: 可不写, 默认值为`to bottom`(即 180%), 用来指定渐变的方向, 可是是具体的角度值, 也可以直接指定方位`to left`/ `to right`/`to top`/ `to bottom`。

为实现渐变, 还需要至少定义两个颜色结点, 每个颜色节点可由两个参数组成, [颜色值 位置值, 颜色值 位置值, ...], 其中颜色值为必填项, 位置值可为长度, 也可以是百分比, 非必填项。

如: `linear-gradient(red 30%, blue 80%);` 表示: 容器顶部 30%的区域被填充为红色实色, 容器中间 50%的高度区域被填充为从红色到蓝色的渐变色, 容器底部 20%区域被填充为蓝色实色。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>线性渐变实验一</title>
    <style>
      div {
        margin: 50px 20px;
        width: 180px;
        height: 100px;
        float: left;
        text-align: center;
        line-height: 100px;
        color: white;
      }
      .gradient_1 {
        background: linear-gradient(red, blue);
      }
      .gradient_2 {
        background: linear-gradient(to top, red, blue);
      }
      .gradient_3 {
        background: linear-gradient(to right, red, blue);
      }
      .gradient_4 {
        background: linear-gradient(to left, red, blue);
        /* 只写一个right表示起始位置是右边，也就是从右到左 */
        /* background: -webkit-linear-gradient(right, red, blue); */
        /* background: -moz-linear-gradient(right, red, blue); */
        /* background: -o-linear-gradient(right, red, blue); */
      }
      .gradient_5 {
        background: linear-gradient(to right bottom, red, blue);
      }
      .gradient_6 {
        background: linear-gradient(to left top, red, blue);
      }
    </style>
  </head>
  <body>
    <div class="gradient_1">
      从上到下
    </div>
    <div class="gradient_2">
      从下到上
    </div>
    <div class="gradient_3">
      从左到右
    </div>
    <div class="gradient_4">
      从右到左
    </div>
    <div class="gradient_5">
      从左上角到右下角
    </div>
    <div class="gradient_6">
      从右下角到左上角
    </div>
  </body>
</html>
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211121222414.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>线性渐变实验二</title>
    <style>
      div {
        margin: 50px 20px;
        width: 200px;
        height: 100px;
        float: left;
        text-align: center;
        line-height: 100px;
        color: white;
      }
      .gradient_1 {
        background: linear-gradient(0deg, red, blue);
      }
      .gradient_2 {
        background: linear-gradient(45deg, red, blue);
      }
      .gradient_3 {
        background: linear-gradient(90deg, red, blue);
      }
      .gradient_4 {
        background: linear-gradient(135deg, red, blue);
      }
      .gradient_5 {
        background: linear-gradient(180deg, red, blue);
      }
      .gradient_6 {
        background: linear-gradient(225deg, red, blue);
      }
      .gradient_7 {
        background: linear-gradient(270deg, red, blue);
      }
      .gradient_8 {
        background: linear-gradient(315deg, red, blue);
      }
      .gradient_9 {
        background: linear-gradient(360deg, red, blue);
      }
    </style>
  </head>
  <body>
    <div class="gradient_1">
      0edeg
    </div>
    <div class="gradient_2">
      45deg
    </div>
    <div class="gradient_3">
      90deg
    </div>
    <div class="gradient_4">
      135deg
    </div>
    <div class="gradient_5">
      180deg
    </div>
    <div class="gradient_6">
      225deg
    </div>
    <div class="gradient_7">
      270deg
    </div>
    <div class="gradient_8">
      315deg
    </div>
    <div class="gradient_9">
      360deg
    </div>
  </body>
</html>
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211121222443.png)
已经实现了简单的条纹效果, 接下来实现简单的条纹背景, 这里需要借助 background-size 来控制每一块条纹背景的大小, 并且 background-repeat 应该设置为 repeat。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>线性渐变实验三</title>
    <style>
      div {
        margin: 50px 20px;
        width: 180px;
        height: 180px;
        float: left;
        text-align: center;
        line-height: 180px;
        color: white;
      }
      .gradient_1 {
        background: linear-gradient(red 20%, blue 80%);
        /* 渐变填充区域为容器中间40%的高度区域, 其他区域填充的颜色为实色。 */
      }
      .gradient_2 {
        background: linear-gradient(red 50%, blue 50%);
      }
      .gradient_3 {
        background: linear-gradient(red 33%, blue 33%, blue 66%, green 66%);
      }
      .gradient_4 {
        background: linear-gradient(red 40%, blue 0);
        /* CSS图像(第三版)规范: 如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小, 则该色标的位置值会被设置为它前面所有色标位置值的最大值。 */
      }
      .gradient_5 {
        background: linear-gradient(red 50%, blue 0);
        background-size: 100% 40px;
      }
      .gradient_6 {
        background: linear-gradient(45deg, red 50%, blue 0);
      }
      .gradient_7 {
        background: linear-gradient(45deg, red 50%, blue 0);
        background-size: 50px 50px;
      }
      .gradient_8 {
        background: linear-gradient(
          45deg,
          red 25%,
          blue 0,
          blue 50%,
          red 0,
          red 75%,
          blue 0
        );
      }
      .gradient_9 {
        background: linear-gradient(
          45deg,
          red 25%,
          blue 0,
          blue 50%,
          red 0,
          red 75%,
          blue 0
        );
        background-size: 50px 50px;
      }
    </style>
  </head>
  <body>
    <div class="gradient_1">
      有渐变颜色
    </div>
    <div class="gradient_2">
      颜色分明
    </div>
    <div class="gradient_3">
      三种颜色
    </div>
    <div class="gradient_4">
      占比不一样
    </div>
    <div class="gradient_5">
      条纹1
    </div>
    <div class="gradient_6">
      条纹2
    </div>
    <div class="gradient_7">
      条纹3
    </div>
    <div class="gradient_8">
      条纹4
    </div>
    <div class="gradient_9">
      条纹5
    </div>
  </body>
</html>
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211121222644.png)
边框缺角。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>线性渐变实验三</title>
    <style>
      div {
        margin: 50px 20px;
        width: 180px;
        height: 180px;
        float: left;
        text-align: center;
        line-height: 180px;
        color: white;
      }
      .gradient_1 {
        background: linear-gradient(-125deg, #fff 15px, #58a 0);
      }
      .gradient_2 {
        background: linear-gradient(125deg, #fff 15px, #58a 0), linear-gradient(-125deg, #fff
              15px, #58a 0);
        background-size: 50% 100%;
        background-position: left, right;
        background-repeat: no-repeat;
      }
      .gradient_3 {
        background: linear-gradient(125deg, #fff 15px, #58a 0), linear-gradient(
            -125deg,
            #fff 15px,
            #58a 0
          ), linear-gradient(45deg, #58a 15px, #58a 0), linear-gradient(-45deg, #fff
              15px, #58a 0);
        background-size: 50% 50%;
        background-position: top left, top right, bottom left, bottom right;
        background-repeat: no-repeat;
      }

      .gradient_4 {
        background: linear-gradient(125deg, #fff 15px, #58a 0), linear-gradient(
            -125deg,
            #fff 15px,
            #58a 0
          ), linear-gradient(45deg, #fff 15px, #58a 0), linear-gradient(-45deg, #fff
              15px, #58a 0);
        background-size: 50% 50%;
        background-position: top left, top right, bottom left, bottom right;
        background-repeat: no-repeat;
      }
    </style>
  </head>
  <body>
    <div class="gradient_1">
      缺一个角
    </div>
    <div class="gradient_2">
      缺两个角
    </div>
    <div class="gradient_3">
      缺三个角
    </div>
    <div class="gradient_4">
      缺四个角
    </div>
  </body>
</html>
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211121222735.png)

### CSS3 有哪些新特性？

- 新特性

  - 新增各种 CSS 选择器 （: not(.input)：所有 class 不是“input”的节点）
  - 圆角 （border-radius:8px）
  - 多列布局 （column）
  - 阴影和反射 （Shadow\Reflect）
  - 文字特效 （text-shadow）
  - 线性渐变 （gradient）
  - 旋转，缩放,定位,倾斜 （transform）
  - 动画 （Animation）
  - 多背景，背景裁剪
  - 颜色
    - rgba()函数
    - hsl()及 hsla()函数
    - opacity 属性，用于设置透明度
  - 弹性布局 flex
  - 盒子模型: box-sizing

- 新增伪类 - 伪元素
  - p:first-of-type 选择属于其父元素的首个 元素的每个 元素。
  - p:last-of-type 选择属于其父元素的最后 元素的每个 元素。
  - p:only-of-type 选择属于其父元素唯一的 元素的每个元素。
  - p:only-child 选择属于其父元素的唯一子元素的每个 元素。
  - p:nth-child(2) 选择属于其父元素的第二个子元素的每个 元素。
  - :enabled 已启用的表单元素。
  - :disabled 已禁用的表单元素。
  - :checked 单选框或复选框被选中。
  - ::before 在元素之前添加内容。
  - ::after 在元素之后添加内容,也可以用来做清除浮动。
  - ::first-line 添加一行特殊样式到首行。
  - ::first-letter 添加一个特殊的样式到文本的首字母。
  - 伪类语法一个：，它是为了弥补 css 常规类选择器的不足
  - 伪元素语法两个：，它是凭空创建的一个虚拟容器生成的元素

### CSS3 动画性能比较好？

#### JS 动画

JS 动画是逐帧动画，在时间帧上绘制内容，一帧一帧的，所以他的可再造性很高，几乎可以完成任何你想要的动画形式。但是由于逐帧动画的内容不一样，会增加制作的负担，占用比较大的资源空间。

- 缺点：
  - (1)JavaScript 在浏览器的主线程中运行，而主线程中还有其它需要运行的 JavaScript 脚本、样式计算、布局、绘制任务等,对其干扰导致线程可能出现阻塞，从而造成丢帧的情况。
  - (2)代码的复杂度高于 CSS 动画
- 优点：
  - (1)JavaScript 动画控制能力很强, 可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的。
  - (2)动画效果比 css3 动画丰富,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有 JavaScript 动画才能完成
  - (3)CSS3 有兼容性问题，而 JS 大多时候没有兼容性问题

#### CSS 动画

CSS3 动画也被称为补间动画，原因是只需要添加关键帧的位置，其他的未定义的帧会被自动生成。

因为我们只设置了几个关键帧的位置，所以在进行动画控制的时候比较困难，不能再半路暂停动画，或者在动画过程中添加一些其他操作，都不大容易。

- 缺点：
  - (1)运行过程控制较弱,无法附加事件绑定回调函数。CSS 动画只能暂停,不能在动画中寻找一个特定的时间点，不能在半路反转动画，不能变换时间尺度，不能在特定的位置添加回调函数或是绑定回放事件,无进度报告。
  - (2)代码冗长。想用 CSS 实现稍微复杂一点动画,最后 CSS 代码都会变得非常笨重。
- 优点：
  - (1)浏览器可以对动画进行优化。
  - (2)代码相对简单,性能调优方向固定
  - (3)对于帧速表现不好的低版本浏览器，CSS3 可以做到自然降级，而 JS 则需要撰写额外代码

#### CSS 动画流畅的原因

从实现动画的复杂度来看，CSS 动画大多数都是补间动画，而 JS 动画是逐帧动画。当然这里我们不谈论实现的效果

渲染线程分为 main thread(主线程)和 compositor thread(合成器线程)。

如果 CSS 动画只是改变 transform 和 opacity，这时整个 CSS 动画得以在 compositor thread 完成（而 JS 动画则会在 main thread 执行，然后触发 compositor 进行下一步操作）。

在 JS 执行一些昂贵的任务时，main thread 繁忙，CSS 动画由于使用了 compositor thread 可以保持流畅。

#### CSS 动画比 JS 流畅的前提

- JS 在执行一些昂贵的任务
- 同时 CSS 动画不触发 layout 或 paint，在 CSS 动画或 JS 动画触发了 paint 或 layout 时，需要 main thread 进行 Layer 树的重计算，这时 CSS 动画或 JS 动画都会阻塞后续操作。
- 只有如下属性的修改才符合“仅触发 Composite，不触发 layout 或 paint”：
  - backface-visibility
  - opacity
  - transfrom
  - perspective-origin
  - perspective
- 所以只有用上了 3D 加速或修改 opacity 时，css3 动画的优势才会体现出来。

### min-width、max-width、width 的包含(优先级关系)关系?

min-width 和 max-width 分别限制了元素的最小宽度和最大宽度，当浏览器缩小导致元素宽度小于 min-width 时，元素的 width 就会被 min-width 的值取代.

如果 min-width 和 max-width 的权重比 width 要大，即时在 width 后面加了!important 也是如此。如果 min-width 的值比 max-width 大，那么元素的最终宽度会取 min-width 的值。


### 哪些 CSS 属性是不被 IE 兼容的?

- border-radius
- background-size
- @font-face
- transform
- transition
- animation
### 实现瀑布流的方法？

#### 什么是瀑布流布局

瀑布流又称瀑布流式布局，是一种比较流行的页面布局方式，专业的英文名称为[Masonry Layouts]。与传统的分页显示不同，视觉表现为参差不齐的多栏布局。

#### 瀑布流布局的优点

- 节省空间，外表美观，更有艺术性。
- 对于触屏设备非常友好，通过向上滑动浏览
- 用户浏览时的观赏和思维不容易被打断，留存更容易。

#### 瀑布流布局的缺点

- 用户无法了解内容总长度，对内容没有宏观掌控。
- 用户无法了解现在所处的具体位置，不知道离终点还有多远。
- 回溯时不容易定位到之前看到的内容。
- 容易造成页面加载的负荷。
- 容易造成用户浏览的疲劳，没有短暂的休息时间。

#### 瀑布流布局适用场景

- 内容以图片为主的时候。图片占用空间比较大，并且大脑理解的速度相比理解文字要快，短时间内可以扫过的内容很多，所以如果用分页显示的话用户务必会频繁的翻页，影响沉浸式的体验，而瀑布流可以解决这个问题。
- 信息与信息之间相对独立时。如果信息关联性强，用户务必会进行大量的回溯操作去查看之前或者之后的信息，相反，如果信息相对独立的话，可以使用瀑布流，让用户同时接受来自不同地方的信息。
- 信息与搜索匹配比较模糊时。瀑布流给人的直观印象，就是同时显示的信息与用户搜索的匹配度大致一样，而分页显示的直观印象则是越靠上的信息被认为与用户的搜索越匹配。因此，当信息与搜索匹配度没有明显区分度时，可以采用瀑布流。
- 用户目的性不强的时候。如果用户有特定需要查找的信息，分页查找定位更方便，而当目的性较弱的时候，瀑布流可以增加用户停留的时间和意想不到的收获。

#### 瀑布流布局前端技术方案

- css
- 1.1 multi-column 多栏布局
  - multi-column 实现瀑布流主要依赖以下几个属性：
    - column-count: 设置共有几列
    - column-width: 设置每列宽度，列数由总宽度与每列宽度计算得出
    - column-gap: 设置列与列之间的间距
  - column-count 和 column-width 都可以用来定义分栏的数目，而且并没有明确的优先级之分。优先级的计算取决与具体的场景。
  - 计算 column-count 和 column-width 转换后具体的列数，哪个小就用哪个。
  - 我们希望的是每个元素都是独立的，前后不断开，此时我们需要使用 break-inside 来实现。
    - break-inside: auto | avoid
      - auto: 元素可以中断
      - avoid: 元素不能中断
  - 但由于 multi-column 布局中子元素的排列顺序是先从上往下再从左至右，所以这种方式仅适用于数据固定不变的情况，对于滚动加载更多等可动态添加数据的情况就并不适用了。

```css
.masonry {
  column-count: 3;
  column-gap: 10px;
}
.masonry .item {
  border: 1px solid #999;
  margin-bottom: 10px;
  break-inside: avoid;
}
.masonry .item img {
  width: 100%;
}
```

- grid 布局实现瀑布流
  - 网格布局（Grid）是最强大的 CSS 布局方案。
  - 它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

```css
.wrap-waterfall--grid img {
  vertical-align: top;
  width: 100px;
}
.wrap-waterfall--grid .list {
  display: grid;
  grid-gap: 10px;
  /* 可以看到，网格大小，占据位置是需要提前设定的 */
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
```

- Flexbox 实现瀑布流
  - flex 布局默认情况下是水平排列，可以修改为垂直排列并且允许换行达到纵向瀑布流的效果。
  - 局限性：必须用固定高度使内容换行，填充比较难以控制；不固定高度的话要结合 js 才能实现

```html
<template>
  <div class="masonry">
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data1" />
    </div>
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data2" />
    </div>
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data3" />
    </div>
  </div>
</template>

<script>
  import data from "./data.json";

  export default {
    data() {
      let data1 = [], //第一列
        data2 = [], //第二列
        data3 = [], //第三列
        i = 0;

      while (i < data.length) {
        data1.push(data[i++]);
        if (i < data.length) {
          data2.push(data[i++]);
        }
        if (i < data.length) {
          data3.push(data[i++]);
        }
      }
      return {
        //第一列
        data1,
        //第二列
        data2,
        //第三列
        data3,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .masonry {
    display: flex;
    flex-direction: row;
    .colmun {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 2px;
      .item {
        margin-bottom: 5px;
        width: 100%;
      }
    }
  }
</style>
```

- grid-template-rows: masonry
  - 看了以上的各种 css 方案，都有各自的弊端，实际使用场景一般也不会通过纯 css 做瀑布流布局。
  - CSS 新属性 grid-template-rows: masonry 轻松实现瀑布流布局，一行代码即可搞定。
  - 看了 caniuse，兼容性感人。

* js
* 原生 js
  - 确定每行放几张图片， 每行的个数（column）=页面宽度（pageWidth）/（图片盒子宽度+图片间距）
  - 确定一行多少个之后首先需要将第一行排列好 （绝对定位的方式，使用 js 排列好）
  - 找出每一行的最小高度，排列完每一张图片之后更新最小高度

- 第三方库
- 第三方库
  - vue-waterfall
  - @egjs/vue-infinitegrid，

### 伪类与伪元素列举一下？

#### 伪类

##### 条件伪类

- `:lang()`：基于元素语言来匹配页面元素；
- `:dir()`：匹配特定文字书写方向的元素；
- `:has()`：匹配包含指定元素的元素；
- `:is()`：匹配指定选择器列表里的元素
- `:not()`：用来匹配不符合一组选择器的元素（只能写一中选择符）；

##### 行为伪类

- `:active`：鼠标激活的元素；
- `:hover`： 鼠标悬浮的元素；
- `::selection`：鼠标选中的元素；

##### 状态伪类

- `:target`：当前锚点的元素；
- `:link`：未访问的链接元素；
- `:visited`：已访问的链接元素；
- `:focus`：输入聚焦的表单元素；
- `:required`：输入必填的表单元素；
- `:valid`：输入合法的表单元素；
- `:invalid`：输入非法的表单元素；
- `:in-range`：输入范围以内的表单元素；
- `:out-of-range`：输入范围以外的表单元素；
- `:checked`：选项选中的表单元素；
- `:optional`：选项可选的表单元素；
- `:enabled`：事件启用的表单元素；
- `:disabled`：事件禁用的表单元素；
- `:read-only`：只读的表单元素；
- `:read-write`：可读可写的表单元素；
- `:blank`：输入为空的表单元素；
- `:current()`：浏览中的元素；
- `:past()`：已浏览的元素；
- `:future()`：未浏览的元素；
  推荐的顺序：link-visited-focus-hover-active

##### 结构伪类

- `:root`：文档的根元素；
- `:empty`：无子元素的元素(没有任何子元素，甚至连文本节点都没有)；
- `:first-letter`：元素的首字母；
- `:first-line`：元素的首行；
- `:nth-child(n)`：元素中指定顺序索引的元素；
- `:nth-last-child(n)`：元素中指定逆序索引的元素；；
- `:nth-of-type(n)`：标签中指定顺序索引的标签；
- `:nth-last-of-type(n)`：标签中指定逆序索引的标签；
- `:first-of-type` ：标签中为首的标签（选择一个元素中某种元素的第一个，同一个父元素的元素是一组，从这样的一组元素中选择某种元素的第一个）；
- `:last-of-type`：标签中为尾标签（选择一个元素中某种元素的最后一个，同一个父元素的元素是一组，从这样的一组元素中选择某种元素的最后一个）；
- `:only-of-type`：父元素仅有该标签的标签（匹配同胞中唯一的那种元素）；
- `:first-child`：元素中为首的元素（选择一个元素中的第一个子元素）；
- `:last-child` ：元素中为尾的元素（选择一个元素中的最后一个子元素）；
- `:only-child`：父元素仅有该元素的元素（选择的元素是另一个元素的唯一子元素，只匹配完全没有同胞的元素）；

#### 伪元素

- `::before`：在元素前插入内容；
- `::after`：在元素后插入内容；
- `::first-letter:`选择伪元素用于装饰任何`非行内元素`的首字母。只能应用到块级元素。
- `::first-line:`装饰`非行内元素`的首行文本。只能应用到块级元素。

#### 伪类和伪元素有什么区别

区分伪元素和伪类，记住两点：

1. 伪类表示被选择元素的某种状态，例如:hover
2. 伪元素表示的是被选择元素的某个部分，这个部分看起来像一个独立的元素，但是是"假元素"，只存在于 css 中，所以叫"伪"的元素，例如:before 和:after
3. 核心区别在于，是否创造了“新的元素”

### CSS 动画属性有哪些?

transition、animation 和 transform 是 CSS3 中三个制作动画的重要属性。

#### transition

transition 允许 css 的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变 CSS 的属性值。

```css
transition ：transition-property || transition-duration || transition-timing-function || transition-delay;
```

- transition 主要包含四个属性值：
  - 执行变换的属性：transition-property，
    - `transition-property: none || all || property;`
    - transition-property 是用来指定当元素其中一个属性改变时执行 transition 效果。
    - none: 没有属性会获得过渡效果；
    - all: 所有属性都将获得过渡效果,也是其默认值；
    - property: 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
  - 变换延续的时间：transition-duration，
    - `transition-duration: time;`
    - transition-duration 是用来指定元素 转换过程的持续时间，取值 time 为数值，单位为 s（秒）或者 ms(毫秒)，其默认值是 0，也就是变换时是即时的。
  - 在延续时间段，变换的速率变化：transition-timing-function，
    - `transition-timing-function: linear || ease || ease-in || ease-out || ease-in-out || cubic-bezier(n,n,n,n);`
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115220429.png)
  - 变换延迟时间：transition-delay。
    - transition-delay: time;
    - transition-delay 是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行 transition 效果，其取值 time 为数值，单位为 s（秒）或者 ms(毫秒)， 默认大小是"0"，也就是变换立即执行，没有延迟。
- 注意事项
  - 不是所有的 CSS 属性都支持 transition
  - transition 需要明确知道，开始状态和结束状态的具体数值，才能计算出中间状态。比如，height 从 0px 变化到 100px，transition 可以算出中间状态。但是，transition 没法算出 0px 到 auto 的中间状态，也就是说，如果开始或结束的设置是 height: auto，那么就不会产生动画效果。
  - transition 需要事件触发，所以没法在网页加载时自动发生。
  - transition 是一次性的，不能重复发生，除非一再触发。

```html
<div class="one"></div>

.one { width: 100px; height: 100px; margin: 200px auto; background-color:
#cd4a48; -webkit-transition: width, height 2s ease; -moz-transition: width,
height 2s ease; -ms-transition: width, height 2s ease; -o-transition: width,
height 2s ease; transition: width, height 2s ease; } .one:hover { width: 300px;
height: 300px; }
```

#### animation

不同于 transition 只能定义首尾两个状态，animation 可以定义任意多的关键帧，因而能实现更复杂的动画效果。

```css
animation: animation-name || animation-duration || animation-timing-function ||
  animation-delay ||animation-iteration-count || animation-direction;
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115220651.png)

- 其他属性
  - 除了上述主要用到的六个属性外，还要额外介绍两个属性。
  - animation-fill-mode
    - 动画结束以后，会立即从结束状态跳回到起始状态。如果想让动画保持在结束状态，需要使用 animation-fill-mode 属性。
    - `animation-fill-mode: none || backwards || both`
      - none：默认值，回到动画没开始时的状态。
      - forwards：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
      - backwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
      - both: 根据 animation-direction 轮流应用 forwards 和 backwards 规则。
  - animation-play-state
    - 有时，动画播放过程中，会突然停止。这时，默认行为是跳回到动画的开始状态。
    - 如果想让动画保持突然终止时的状态，就要使用 animation-play-state 属性。
    - `animation-play-state:running || paused`
    - animation-play-state 主要是用来控制元素动画的播放状态。其主要有两个值，running 和 paused 其中 running 为默认值。通过 paused 将正在播放的动画停下了，通过 running 将暂停的动画重新播放，这个属性目前很少内核支持。

* keyframe
  - 在介绍 animation 具体使用之前，要先介绍 keyframe。
  - @keyframes 让开发者通过指定动画中特定时间点必须展现的关键帧样式（或者说停留点）来控制 CSS 动画的中间环节。这让开发者能够控制动画中的更多细节而不是全部让浏览器自动处理。
  - 要使用关键帧, 先创建一个带名称的@keyframes 规则，以便后续使用 animation-name 这个属性来调用指定的@keyframes. 每个@keyframes 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。
  - `@keyframes animationname {keyframes-selector {css-styles;}}`
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115220746.png)

```html
<div class="one"></div>

.one { width: 100px; height: 100px; margin: 200px auto; background-color:
#cd4a48; position: relative; animation: moveHover 5s ease-in-out 0.2s; }
@keyframes moveHover { 0% { top: 0px; left: 0px; background: #cd4a48; } 50% {
top: 200px; left: 200px; background:#A48992; } 100% { top: 350px; left:350px;
background: #FFB89A; } }
```

#### transform

transform 就是变形，主要包括旋转 rotate、扭曲 skew、缩放 scale 和移动 translate 以及矩阵变形 matrix。

```css
transform: none || transform-functions;
```

none:表示不进么变换；transform-function 表示一个或多个变换函数，以空格分开；换句话说就是我们同时对一个元素进行 transform 的多种属性操作，例如 rotate、scale、translate 三种。

- translate
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221107.png)
- scale
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221126.png)
- rotate
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221144.png)
- skew
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221205.png)
- transform-origin
  - 以上变化的默认参照点是元素的中心点，不过可以通过 transform-origin 设置元素的参照点。
  - `transform-origin: X || Y || Z`
  - 其中 X，Y，Z 对应三维坐标，X，Y，Z 的值可以是 em，px。此外，X，Y 可以是百分值，其中 X 也可以是字符参数值 left，center，right。Y 和 X 一样除了百分值外还可以设置字符值 top，center，bottom。

### css 的块元素和行内元素，有哪些，区别，转换

- 块级元素：会自动占据一定矩形空间，可以通过设置高度、宽度、内外边距等属性，来调整的这个矩形的样子。
- 行内元素：则没有自己的独立空间，它是依附于其他块级元素存在的，因此，对行内元素设置高度、宽度、内外边距等属性，都是无效的。

- 常见的块级元素和行内元素

  - 块级元素：div、p、h1-h6、hr、ul、ol
  - 行内元素：a、b、i、u、em、input、select、img、label、br

- CSS 块元素与行内元素的转换：
  - 块转行内：display:block;
  - 行内转块：display:inline;

### css 的三种引入方式及优先级

1. 行内样式
   `<p style="color:#F00; "></p>`
   缺点：HTML 页面不纯净，文件体积大，不利于蜘蛛爬行，后期维护不方便。

2. 内嵌样式
   内嵌样式就是将 CSS 代码写在`<head></head>`之间，并且用`<style></style>`进行声明。
   优缺点：页面使用公共 CSS 代码，也是每个页面都要定义的，如果一个网站有很多页面，每个文件都会变大，后期维护难度也大，如果文件很少，CSS 代码也不多，这种样式还是很不错的。

3. 外部样式
   链接样式（推荐）： 链接样式是使用频率最高，最实用的样式，只需要在`<head></head>`之间加上`<link…/>`就可以了。
   优缺点：实现了页面框架代码与表现 CSS 代码的完全分离，使得前期制作和后期维护都十分方便

导入样式（不建议使用）： 导入样式和链接样式比较相似，采用@import 样式导入 CSS 样式表，在 HTML 初始化时，会被导入到 HTML 或者 CSS 文件中，成为文件的一部分，类似第二种内嵌样式。
链接式和导入式的区别：

<link>
1、属于 XHTML
2、优先加载 CSS 文件到页面
@import
1、属于 CSS2.1
2、先加载 HTML 结构在加载 CSS 文件。

四种 CSS 引入方式的优先级： 1.就近原则 2.理论上：行内>内嵌>链接>导入 3.实际上：内嵌、链接、导入在同一个文件头部，谁离相应的代码近，谁的优先级高（页面多种方式使用 css 样式引入）

### line-height 单位的区别

1.normal
2.inherit
3.number
4.number + px/em/rem/……
5.% 同 number+px/em/rem 单位效果一样，后代元素会直接继承父元素的 line-height 计算结果值

- normal 同 number 效果一样，会在每个后代元素下重新计算出实际值，系数约 1.2

- %同 number+px/em/rem 单位效果一样，后代元素会直接继承父元素的 line-height 计算结果值

- 当一个元素是使用带单位的值声明的，那么它的后代元素会继承其父元素 line-height 计算结果值:行高属性是用类似 px、em、rem 等单位来声明时，它的值会先被计算，然后计算后的值会传到任何继承它的后代元素。

- 当一个元素是使用不带单位的数字，声明的值会被继承，也就是说这个值会在子元素中用来与子元素本身的 font-size 重新计算子元素的 line-height。

- 所以我们通常想要的效果是使用不带单位的 line-height,我们可以在父元素上设定一个无单位数字 line-height,其子元素会默认继承。如果想在子元素上有额外的样式，则在子元素上写 line-height 覆盖即可。
  ### 移除 inline-block 间隙

1. 移除空格
   元素间的间隙出现的原因是元素标签之间的空格，把空格去掉间隙自然就会消失。

```html
<div class="demo">
  <span>我是一个span</span><span>我是一个span</span><span>我是一个span</span
  ><span>我是一个span</span>
</div>

<div class="demo">
  <span>我是一个span </span><span>我是一个span </span><span>我是一个span </span
  ><span>我是一个span</span>
</div>

<div class="demo">
  <span>我是一个span</span
  ><!-- 
        --><span>我是一个span</span
  ><!-- 
        --><span>我是一个span</span
  ><!-- 
        --><span>我是一个span</span>
</div>
```

2.取消标签闭合

```html
<div class="demo">
        <span>我是一个span
        <span>我是一个span
        <span>我是一个span
        <span>我是一个span</span>
    </div>
.demo span{
     background:#ddd;
     display: inline-block;
}
```

2.使用 margin 负值

```css
.parent .child + .child {
  margin-left: -2px;
}
```

3.使用 font-size:0
在父容器上使用 font-size:0;可以消除间隙，可以这样写:

```html
// html
<div class="third">
  <div class="first-div"></div>
  <div class="second-div"></div>
  <div class="third-div"></div>
</div>

// css .third { font-size: 0; // 这里 } .first-div, .second-div, .third-div {
display: inline-block; // 这里 height: 100px; margin: 0; } .first-div,
.third-div { background: pink; width: 50px; } .second-div { background: red;
width: calc(100% - 100px); }
```

4.letter-spacing 和/line-height

```html
// html
<div class="third">
  <div class="first-div"></div>
  <div class="second-div"></div>
  <div class="third-div"></div>
</div>
<div class="third">
  <div class="first-div"></div>
  <div class="second-div"></div>
  <div class="third-div"></div>
</div>

// css .third { letter-spacing: -15px; // 在chrome下测试这个值只要 <= -5
line-height: 13px; // 在chrome下测试这个值只要 <= 13 } .first-div, .second-div,
.third-div { display: inline-block; height: 100px; } .first-div, .third-div {
background: pink; width: 50px; } .second-div { background: red; width: calc(100%
- 100px); }
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106101630.png)
5.word-spacing
最优解在这，设置父元素，display:table 和 word-spacing

```css
.parent {
  display: table;
  word-spacing: -1em; /*兼容其他浏览器，题主还未验证*/
}
```

### 标准模型，IE模型的区别 (CSS盒模型)

可以设置box-sizing：border-box；设置为IE盒子模型，来避免盒子被padding撑破。

可以设置box-sizing：content-box；设置为标准盒子模型。

**两者的区别在于content的不同，IE盒模型的content包括border、padding**

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210720141137.png" style="zoom:33%;" />

```
W3C标准盒模型:
外盒尺寸计算（元素空间尺寸）
element空间高度＝内容高度＋内距＋边框＋外距
element空间宽度＝内容宽度＋内距＋边框＋外距
内盒尺寸计算（元素大小）
element高度＝内容高度＋内距＋边框（height为内容高度）
element宽度＝内容宽度＋内距＋边框（width为内容宽度）

垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
IE传统下盒模型:
外盒尺寸计算（元素空间尺寸）
element空间高度＝内容高度＋外距（height包含了元素内容宽度、边框、内距）
element宽间宽度＝内容宽度＋外距（width包含了元素内容宽度、边框、内距）
内盒尺寸计算（元素大小）
element高度＝内容高度（height包含了元素内容宽度、边框、内距）
element宽度＝内容宽度（width包含了元素内容宽度、边框、内距）
```

**JS如何设置获取盒模型对应的宽和高**

```js
dom.style.width/height
dom.currentStyle.width/height  //渲染以后的 IE
window.getComputedStyle(dom).width/height  //所有浏览器都支持
dom.getBoundingClientRect().width/height //计算一个元素的绝对位置
```
### 清除浮动

BFC 清除浮动

```css
.parent {
  overflow: hidden;
}
```

clear 清除浮动

```css
.clearfix {
  zoom: 1;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### .position 有几种，分别描述？

- static（静态定位）
  - 对象遵循标准文档流中，top, right, bottom, left 等属性失效。
- relative（相对定位）
  - 对象遵循标准文档流中，依赖 top, right, bottom, left 等属性相对于该对象在标准文档流中的位置进行偏移，同时可通过 z-index 定义层叠关系。
- absolute（绝对定位）
  - 对象脱离标准文档流，使用 top, right, bottom, left 等属性进行绝对定位 同时可通过 z-index 定义层叠关系。
  - 相对于 static 定位以外的第一个父元素进行绝对定位
- fixed（固定定位）
  - 对象脱离标准文档流，使用 top, right, bottom, left 等属性进行绝对定位,同时可通过 z-index 定义层叠关系。
  - fixed 元素总是相对于 body 定位的
- sticky（粘性定位元素）
  - 可以说是相对定位 relative 和固定定位 fixed 的结合
  - 元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量。
  - 在目标区域以内，它的行为就像 position:relative;在滑动过程中，某个元素距离其父元素的距离达到 sticky 粘性定位的要求时(比如 top：100px)；position:sticky 这时的效果相当于 fixed 定位，固定到适当位置。

### z-index

- z-index 的取值
  - auto（自动，默认值）
  - 整数（正整数/负整数/0）
    - 数值越大，元素也就越靠近观察者；而数值越小，元素看起来也就越远。
  - inherit（继承）

一共可以有 7 种层叠等级。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009152205.png)

- 背景和边框 —— 形成层叠上下文的元素的背景和边框，也是层叠上下文中的最低等级。
- 负 z-index 值 —— 层叠上下文内有着 负 z-index 值 的子元素。
- 块级盒 —— 文档流中非行内非定位子元素。
- 浮动盒 —— 非定位浮动元素。
- 行内盒 —— 文档流中行内级别非定位子元素。
- z-index: 0 —— 定位元素，这些元素将形成了新的层叠上下文。
- 正 z-index 值 —— 定位元素。 层叠上下文中的最高等级。

### 防止高度塌陷，4中方案
#### 方案1
- 为`父元素`设置`overflow:hidden`属性。
- CSS中的`overflow:hidden`属性会强制要求父元素必须包裹住所有内部浮动元素，以及所有元素的margin范围。
- 如果刚好父元素有些超范围的子元素内容需要显示（比如：个别position定位的子菜单项），就会发生冲突。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208150400.png)
#### 方案2
- 在父元素内的结尾追加一个空子元素（块级元素），并设置空子元素清除浮动影响（clear：both）。
- 利用clear：both属性和父元素必须包含非浮动的元素两个原理。
- 缺点：无端多出一个无意义的看不见的空元素，影响选择器和查找元素。
- 解决：设置父元素之后的平级元素清除浮动。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208150718.png)
#### 方案3
- 设置父元素也浮动
- 浮动属性也会强制父元素扩大到包含所有浮动的内部元素
- 缺点：会产生新的浮动影响。比如，父元素浮动，导致父元素之后平级的页脚div上移，被父元素挡住了
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208151028.png)
#### 方案4
- 为父元素末尾伪元素设置clear：both。
- 优点：既不会影响显示隐藏，又不会影响查找元素，又不会产生新的浮动问题。
- 个别浏浏览器，dispaly:table，可能带默认高度
- 保险起见：在增加一个属性height:0px。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208151524.png)
### BFC块级格式化上下文   (边距重叠解决方案）
- 块级格式化上下文   (边距重叠解决方案）
- `BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。
-`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用`BFC`呢，`BFC`可以看做是一个`CSS`元素属性
- 他是网页中的一个独立的渲染区域
- 这个渲染区域只有块级元素才能参与
    - 内部的块元素会在垂直方向，一个接一个地放置。每个块元素独占一行
- 他规定额内部的块级元素如何布局
- BFC渲染区域内部如何布局，与区域外部毫不相干
    - 区域里面的子元素不会影响到外面的元素
    - 外面的元素也不会影响到区域里面的子元素
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208161143.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208161211.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208161230.png)
#### BFC的规则
1. 垂直方向的距离由margin决定， 属于同一个`BFC`的两个相邻的标签外边距会发生重叠。属于同一个BFC的两个相邻块元素在垂直方向上的margin会发生重叠/合并。但水平方向的margin不会（给其中一个元素增加一个父级，然后让他的父级触发BFC）
2. 左侧BFC渲染区域的margin，必须与右侧BFC渲染区域的margin相衔接，不能出现重叠
3. BFC的区域不会与浮动元素的box重叠(浮动元素不会覆盖到触发 BFC 元素上)。清除浮动布局，阻止同级元素被浮动元素覆盖。（非浮动元素触发了BFC,阻止元素被浮动元素覆盖原理）
4. BFC在页面上是独立的容器，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。（父级触发了BFC）
5. 计算BFC高度的时候，浮动元素也会参与计算，防止使用float脱离文档流，高度塌陷。  计算父元素BFC渲染区域的高度时，内部浮动元素的高度，都必须算在内。（父级触发了BFC）
#### BFC触发
1. float的值不是none。
2. position的值不是static或者relative。绝对定位元素（元素的 `position` 为 `absolute` 或 `fixed`）
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex。
4. overflow的值不是visible。(hidden、scroll、auto、inherit)
#### BFC解决了什么问题
1. **使用float脱离文档流，高度塌陷**
- 子元素浮动，会对父元素造成影响
- 如果子元素浮动起来，就不占用普通文档流的位置。父元素高度就会失去支撑，也称为高度塌陷。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>高度塌陷</title>
    <style>
        .box {
            margin: 100px;
            width: 100px;
            height: 100px;
            background: red;
            float: left;
        }
        .container {
            background: #000;
            //给父元素加上这个，触发BFC 解决Float脱离文档流，高度塌陷
            //display: inline-block;
            //overflow: auto/hidden/scroll; /** 创建一个BFC **/
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
</html>

```

2. **Margin边距重叠**
- 垂直方向上，两个元素上下margin相遇时，两元素的间的总间距并不等于两个margin的和。而是等于最大的margin。
- 小的margin会被大的margin吞并。

第一步： 用一个外围块元素包裹下方元素
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208162817.png)
第二步：设置新外层元素overflow:hidden
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208162837.png)
- 原理: 新外层元素，变成一个BFC方式的渲染区域，就必须包裹内部子元素及子元素的margin。
- 而且，内部元素不能超出范围影响外部，外部元素也不能进入BFC范围内，影响内部。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208162913.png)
- 缺点:  为如果父元素中部分自由定位的子元素，希望即使超出父元 素范围，也能显示时，就冲突了。
- 解决:  第二步: 父元素::before{ content:””; display:table}
- 原理: display:table，在子元素之前形成平级的bfc渲染区域。不允许 子元素的margin进入::before范围内。
- 优点: 既不隐藏内容，又不添加新元素，又不影响高度。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Margin边距重叠</title>
    <style>
     .box3, .box4 {
        width: 120px;
        height: 120px;
        background: lightblue;
      }
      .box1 {
          margin: 10px 0;
      }
      .box2 {
          margin: 30px 0;
      }
      
      // 给子元素加一个父级
      .box5 {
          overflow: auto/hidden/scroll  /** 创建一个BFC **/
      }
    </style>
  </head>
  <body>
     // before
    <div>
        <div class="box3"></div>
        <div class="box4"></div>
    </div>
  	// after
    <div>
        <div class="box3"></div>
        <div class="box5"> <!--创建一个BFC-->
            <div class="box4"></div>
        </div>
    </div>
</body>
</html>
```

3. 两栏布局,元素浮动后发生重叠

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>两栏布局</title>
    <style>
            div {
                 width: 200px;
                 height: 100px;
                 border: 1px solid red;
            }

    </style>
</head>
<body>
    <div style="float: left;">
        两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局
    </div>
  	第一种：
    <div style="width: 300px; display:flex;">
        我是蛙人，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭
    </div>
  	第二种：
  	<div style="width: 300px; overflow: hidden;">
        我是蛙人，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭
    </div>
  	。。。。
</body>
</html>
```
4. **避免垂直方向 margin溢出**
- 问题：子元素设置margin-top，会超出父元素上边的范围，变成父元素的margin-top。
- 而实际上，子元素与父元素之间，依然是没有margin-top的。效果不是想要的。
- 解决方案1
    - 设置父元素overflow:hidden
    - 原理: 父元素变成BFC渲染区域，就必须包裹内层子元素的margin
    - 缺点: 万一有的子元素，即使溢出父元素，也希望显示呢？就会发生冲突。
- 解决方案2
    - 为父元素添加上边框，颜色设置为透明（transparent）
    - 原理: 这里不是bfc。而是因为边框本身可以阻隔margin溢出。
    - 缺点: 边框会增大父元素的实际大小，导致布局错乱。
- 解决方案3
    - 用父元素的padding-top代替第一个子元素的margin-top
    - 原理: 这里也不是bfc。而是因为padding本身可以阻隔margin溢出。
    - 缺点: 对父元素高度有影响。
    - 解决: 可以设置父元素box-sizing:border-box。
- 解决方案4
    - 在父元素内第一个子元素之前添加一个空的`<table></table>`
    - 原理: table的display属性默认相当于table，所以形成小的bfc渲染区域。其他元素的margin不能进入table范围内。就阻隔了margin向上溢出。
    - 优点: 空table元素没有大小，不占用父元素控件。
    - 缺点: 增加一个看不见的空元素，干扰查找元素
- 解决方案5
    - 最好的解决: 父元素::before{ content:""; display:table;  }
    - 优点:既不隐藏内容，又不添加新元素，又不影响高度。
5. 左定宽， 右自适应布局
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208164226.png)
- 第一步: 左边定宽元素左浮动:  .left{ float:left; width:固定宽 }
- 第二步: 右边元素不用右浮动，而是.right{overflow:hidden; … }
- 原理: 右边元素overflow:hidden后，形成BFC渲染区域。左边的float元素就不能进入右边范围了。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220208164319.png)
### 页面布局
1. 三栏布局
   - 浮动
   ```html
    <style>
           html, * {
               padding: 0;
               margin: 0;
           }
           .layout article div {
               min-height:100px;
           }
           .layout.float .left {
               float: left;
               width: 300px;
               background: red;
           }
           .layout.float .right {
               float: right;
               width: 300px;
               background: blue;
           }
           .layout.layout .center {
               background: yellow;
           }
       </style>
   
    <section class="layout float">
           <article class="left-right-center">
               <div class="left"></div>
               <div class="right"></div>
               <div class="center">
                   <h1>浮动解决方案</h1>
               </div>
           </article>
       </section>
   ```
   **优点：** 兼容性比较好；把清除浮动和周边元素的关系处理好的话。
   **缺点： **清除浮动，浮动以后脱离文档流，处理不好会带来很多问题。
   
   
   - 绝对定位
   ```html
   <style>
           html *{
               padding: 0;
               margin: 0;
           }
           .layout article div{
               min-height: 100px;
           }
           .layout.absolute .left-center-right>div{
             position: absolute;
           }
           .layout.absolute .left{
             left:0;
             width: 300px;
             background: red;
           }
           .layout.absolute .center{
             left: 300px;
             right: 300px;
             background: yellow;
           }
           .layout.absolute .right{
             right:0;
             width: 300px;
             background: blue;
           }
   </style>
   <section class="layout absolute">
           <article class="left-center-right">
               <div class="left"></div>
               <div class="center">
                 <h2>绝对定位解决方案</h2>
               </div>
               <div class="right"></div>
             </article>
    </section>
   ```
   **优点：** 快捷，配合js使用不容易出问题。
   **缺点：** 布局已经脱离文档流了，就意味下面所有子元素也必须脱离文档流，导致了这个方案的可使用性比较差。



   - flex布局
   ```html
    <style>
           .layout.flexbox{
             margin-top: 110px;
           }
           .layout.flexbox .left-center-right{
             display: flex;
           }
           .layout.flexbox .left{
             width: 300px;
             background: red;
           }
           .layout.flexbox .center{
             flex:1;
             background: yellow;
           }
           .layout.flexbox .right{
             width: 300px;
             background: blue;
           }
   </style>
   <section class="layout flexbox">
         <h1>三栏布局</h1>
         <article class="left-center-right">
           <div class="left"></div>
           <div class="center">
             <h2>flexbox解决方案</h2>
           </div>
           <div class="right"></div>
         </article>
       </section>
   ```
   **优点：** 解决了上面两个方案的不足
   **缺点：** IE8及以下不支持 flex



   - table布局
   ```html
         <style>
           .layout.table .left-center-right{
             width:100%;
             height: 100px;
             display: table;
           }
           .layout.table .left-center-right>div{
             display: table-cell;
           }
           .layout.table .left{
             width: 300px;
             background: red;
           }
           .layout.table .center{
             background: yellow;
           }
           .layout.table .right{
             width: 300px;
             background: blue;
           }
         </style>
   <section class="layout table">
         <h1>三栏布局</h1>
         <article class="left-center-right">
           <div class="left"></div>
           <div class="center">
             <h2>表格布局解决方案</h2>
           </div>
           <div class="right"></div>
         </article>
       </section>
   ```
   **优点：** 轻易的做到，表格兼容性非常好，flex解决不了的（IE8不支持flex），想实现同样效果可以用表格。
   **缺点：** 历史的诟病以外，其中某一个单元格的高度超出了的时候，两侧的单元格也是要调整高度的；有时候的场景是不需要同时增高的。



   - grid布局
   ```html
      <style>
           /*网格布局有行有列*/
           .layout.grid .left-center-right{
             width:100%;
             display: grid;
             grid-template-rows: 100px;
             grid-template-columns: 300px auto 300px;
           }
           .layout.grid .left-center-right>div{
   
           }
           .layout.grid .left{
             width: 300px;
             background: red;
           }
           .layout.grid .center{
             background: yellow;
           }
           .layout.grid .right{
   
             background: blue;
           }
         </style>
   <section class="layout grid">
         <h1>三栏布局</h1>
         <article class="left-center-right">
           <div class="left"></div>
           <div class="center">
             <h2>网格布局解决方案</h2>
           </div>
           <div class="right"></div>
         </article>
       </section>
   ```
   **优点：** 可以做很多复杂的布局，代码量也简化很多，是未来的趋势；
   **缺点：** 兼容性问题，各种浏览器及旧版本支持不是很好。
2. **上面都是确定高度已知。高度不已知的情况下。**
- flex
- table
3. **总结：**
- 各方案优缺点
  float：需要清除浮动，但是兼容性好；
  绝对定位：快捷，已理解，但是绝对定位脱离了文档流，可用性差；
  flexbox：有兼容性，其他的都挺好的；
  表格布局：兼容性好；
  网格布局：有兼容性
### 你知道哪些清除浮动的方案？每种方案的有什么优缺点?

- 给外部盒子也添加浮动

把外部盒子也从标准文档流中抽离，让它和孩子们见面。
缺点：可读性差，不易于维护（别人很难理解为什么要给父元素也添上float），而且可能需要调整整个页面布局。

- 在外部盒子内最下方添上带`clear`属性的空盒子

可以是div也可以是其它块级元素，把 `<div style="clear:both;"></div>`放在盒内底部，用最下面的空盒子清除浮动，把盒子重新撑起来。
缺点：引入了冗余元素

- 用overflow:hidden清除浮动  BFC

给外部盒子添上这个属性就好了，非常简单。
缺点：有可能造成溢出元素不可见，影响展示效果。

- 用after伪元素清除浮动

```css
.clearfloat:after{
  display:bloc;
  clear:both;
  content:"";
  visibility:hidden;
  height:0
}

.clearfloat{
  *zoom: 1;
}

```

给外部盒子的after伪元素设置clear属性，再隐藏它
这其实是对空盒子方案的改进，一种纯CSS的解决方案，不用引入冗余元素。

### 浮动元素的特性 
- 只会影响后面的元素
- 文本不会被浮动元素覆盖
- 具备内联盒子特性：宽度由内容决定
- 具备块级盒子特性：支持所有样式
- 浮动放不下，会自动换行，父容器放不下，自动换行

### 让一个元素水平垂直居中，到底有多少种方案？

- **水平居中**

  - 对于 行内元素 : `text-align: center`;

  - 对于确定宽度的块级元素：

    （1）width和margin实现。`margin: 0 auto`;

    （2）绝对定位和margin-left: -width/2, 前提是父元素position: relative

  - 对于宽度未知的块级元素

    （1）`table标签配合margin左右auto实现水平居中`。使用table标签（或直接将块级元素设值为 display:table），再通过给该标签添加左右margin为auto。

    （2）inline-block实现水平居中方法。display：inline-block和text-align:center实现水平居中。

    （3）`绝对定位+transform`，translateX可以移动本身元素的50%。

    （4）flex布局使用`justify-content:center`

- **垂直居中**

  1. 利用 `line-height` 实现居中，这种方法适合纯文字类
  2. 通过设置父容器 相对定位 ，子级设置 `绝对定位`，标签通过margin实现自适应居中
  3. 弹性布局 flex :父级设置display: flex; 子级设置margin为auto实现自适应居中
  4. 父级设置相对定位，子级设置绝对定位，并且通过位移 transform 实现
  5. `table 布局`，父级通过转换成表格形式，`然后子级设置 vertical-align 实现`。（需要注意的是：vertical-align: middle使用的前提条件是内联元素以及display值为table-cell的元素）。

#### 水平居中

`单行的文本、inline 或 inline-block 元素`
此类元素需要水平居中，则父级元素必须是块级元素(block level)，且父级元素上需要这样设置样式：

```css
.parent {
    text-align: center;
}
```

#### 垂直居中

方法一：通过设置上下内间距一致达到垂直居中的效果：

```css
.single-line {
    padding-top: 10px;
    padding-bottom: 10px;
}
```

方法二：通过设置 height 和 line-height 一致达到垂直居中：

```css
.single-line {
    height: 100px;
    line-height: 100px;
}
```

固定宽高的块级盒子
方法一：absolute + 负 margin

```css
.parent {
    position:relative;
}
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -50px 0 0 -50px;
}
```

方法二：absolute + margin auto

```css
.parent {
    position:relative;
}
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
```

方法三：absolute + calc

```css
.parent {
    position:relative;
}
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    left:calc(50% - 50px);
    top:calc(50% - 50px);
}
```

不固定宽高的块级盒子
方法一：absolute + transform

```css
.parent {
    position:relative;
}
.child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
```

方法二：line-height + vertical-align

```css
.parent {
    line-height: 150px;
    text-align: center;
}
.child {
    display: inline-block;
    line-height: initial;
    vertical-align:center;
}
```

方法三：flex

```css
.parent {
    display:flex;
    justify-content:center;
    align-items:center;
}
```

方法四：grid

```css
.parent {
   display:grid;
}
.child {
    display: inline-block;
    justify-content:center;
    align-self: center;
}
```
### 水平垂直居中

#### 定宽高

- 绝对定位和负 magin 值
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      position: relative;
    }
    .children-box {
      position: absolute;
      width: 100px;
      height: 100px;
      background: yellow;
      left: 50%;
      top: 50%;
      margin-left: -50px;
      margin-top: -50px;
    }
  </style>
  ```
- 绝对定位 + transform
  ```js
    <template>
      <div id="app">
          <div class="box">
              <div class="children-box"></div>
          </div>
      </div>
    </template>
    <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      position: relative;
    }
    .children-box {
      position: absolute;
      width: 100px;
      height: 100px;
      background: yellow;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    </style>
  ```
- 绝地定位 + margin: auto

  ```html
  <style>
    .box1 {
      width: 500px;
      height: 500px;
      background-color: aqua;
      position: relative;
    }
    .box2 {
      width: 100px;
      height: 100px;
      background-color: blanchedalmond;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  </style>
  <body>
    <div class="box1">
      <div class="box2"></div>
    </div>
  </body>
  ```

- flex 布局
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .children-box {
      background: yellow;
      height: 100px;
      width: 100px;
    }
  </style>
  ```
- grid 布局
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: grid;
    }
    .children-box {
      width: 100px;
      height: 100px;
      background: yellow;
      margin: auto;
    }
  </style>
  ```
- table-cell + vertical-align + inline-block/margin: auto
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
    .children-box {
      width: 100px;
      height: 100px;
      background: yellow;
      display: inline-block; // 可以换成margin: auto;
    }
  </style>
  ```

#### 不定宽高

- 绝对定位 + transform

  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      position: relative;
    }
    .children-box {
      position: absolute;
      background: yellow;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  ```

- table-cell
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
    .children-box {
      background: yellow;
      display: inline-block;
    }
  </style>
  ```
- flex 布局

  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">11111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .children-box {
      background: yellow;
    }
  </style>
  ```

- flex + margin:auto

  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">11111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: flex;
    }
    .children-box {
      background: yellow;
      margin: auto;
    }
  </style>
  ```

- grid
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">11111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: grid;
    }
    .children-box {
      background: yellow;
      align-self: center;
      justify-self: center;
    }
  </style>
  ```
- gird+margin:auto

  ```js
    <template>
      <div id="app">
          <div class="box">
              <div class="children-box">11111111</div>
          </div>
      </div>
    </template>
    <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: grid;
    }
    .children-box {
      background: yellow;
      margin: auto;
    }
    </style>
  ```

- writing-mode 属性布局(不是很了解)

#### 内联元素居中布局

- 水平居中
  - 行内元素可设置：text-align: center;
  - flex 布局设置父元素：display: flex; justify-content: center;
- 垂直居中
  - 单行文本父元素确认高度：height === line-heigh
  - 多行文本父元素确认高度：disaply: table-cell; vertical-align: middle;

#### 块级元素居中布局

- 水平居中
  - 定宽: margin: 0 auto;
  - 不定宽： 参考上诉例子中不定宽高例子。
  - 定位
  - flex
  - grid
- 垂直居中
  - position: absolute 设置 left、top、margin-left、margin-to(定高)；
  - display: table-cell；
  - transform: translate(x, y)；
  - flex(不定高，不定宽)；
  - grid(不定高，不定宽)，兼容性相对比较差；

### 水平居中
#### 前提1
- 父元素必须是块级盒子容器
- 父元素宽度必须已经被设定好
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095127.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095219.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095248.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095414.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095431.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095449.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095502.png)
### 垂直居中
#### 前提1
- 父元素是盒子容器。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095728.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095751.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209095819.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209100006.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209100046.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209100105.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209100118.png)
### 垂直和水平同时居中
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209100253.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20220209100305.png)

### Flex
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009164716.png)
#### Flex 属性
Flex 是 Flexible Box 的缩写，意为"弹性布局",用来为盒状模型提供最大的灵活性。指定容器 display: flex 即可。 简单的分为容器属性和元素属性。
- 容器的属性：
  - flex-direction：决定主轴的方向（即子 item 的排列方法）flex-direction: row | row-reverse | column | column-reverse;
    ```css
    .ele {
      flex-direction: row; // 默认值，主轴为水平方向，起点在左端。
      flex-direction: row-reverse; // 主轴为水平方向，起点在右端。
      flex-direction: column; // 主轴为垂直方向，起点在上。
      flex-direction: column-reverse; // 主轴为垂直方向，起点在下。
    }
    ```
  - flex-wrap：决定换行规则 flex-wrap: nowrap | wrap | wrap-reverse;
    ```css
    .ele {
      flex-wrap: nowrap; // 默认，不换行
      flex-wrap: wrap; // 换行，第一行在上方。
      flex-wrap: wrap-reverse; // 换行，第一行在下方。
    }
    ```
  - flex-flow： flex-direction 属性和 flex-wrap 属性的简写形式。默认值为 row nowrap。
    ```css
    .ele {
      lex-flow: <flex-direction> || <flex-wrap>;
    }
    ```
  - justify-content：对其方式，水平主轴对齐方式
    ```css
    .ele {
      justify-content: flex-start; // 默认，左对齐
      justify-content: flex-end; // 右对齐
      justify-content: center; // 居中
      justify-content: space-between; // 两端对齐，项目之间的间隔都相等。
      justify-content: space-around; // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    }
    ```
  - align-items：对齐方式，竖直轴线方向
    ```css
    .ele {
      align-items: flex-start; // 交叉轴的起点对齐。
      align-items: flex-end; // 交叉轴的终点对齐。
      align-items: center; // 交叉轴的中点对齐。
      align-items: baseline; // 项目的第一行文字的基线对齐。
      align-items: stretch; // 默认，如果项目未设置高度或设为auto，将占满整个容器的高度。
    }
    ```
  - align-content：多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    ```css
      .ele{
        align-content: flex-start;   // 与交叉轴的起点对齐
        align-content; flex-end;     // 与交叉轴的终点对齐。
        align-content: center;       // 与交叉轴的中点对齐。
        align-content: space-between;// 与交叉轴两端对齐，轴线之间的间隔平均分布。
        align-content: space-around; // 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
        align-content: stretch;     // 默认 轴线占满整个交叉轴。
      }
    ```

- 项目的属性（元素的属性）：
  - order 属性：子容器的排列顺序，定义项目的排列顺序，顺序越小，排列越靠前，默认为 0
  - flex-grow 属性：定义项目的放大比例，即使存在空间，也不会放大
  - flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果 定义个 item 的 flow-shrink 为 0，则为不缩小
  - flex-basis 属性：定义了在分配多余的空间，项目占据的空间。
  - flex：是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto。
  - align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖
    - 子容器的 align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖父容器 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。
#### flex:1, flex:auto, flex:0 区别
flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```
- flex-grow 属性
  - flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。
  - 如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。
- flex-shrink 属性
  - flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
  - 如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。
  - 负值对该属性无效
- flex-basis 属性
  - flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。
  - 它可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间。

1. flex: auto; ==> flex: 1 1 auto;相当于可扩大，可缩小
2. flex: none; ==> flex: 0 0 auto;相当于不可扩大，不可缩小
3. flex: 0; ==> flex:0 1 0%;相当于不可扩大，可缩小
4. flex: 1; (取值为非负数字) ==> flex: 1 1 0%; (赋值在第一位，后两位是固定的 1 ，0%);相当于可扩大，可缩小
5. flex: 20%; || flex: 200px; (取值为一个长度或百分比) ==> flex:1 1 20%; || flex: 1 1 200px; (前两位是固定值，赋值第三位)
6. flex: 2 3; (取值为两个非负数字) ==> flex: 2 3 0%; (取值为前两位，第三位固定 0%)
7. flex: 2 200px; (取值为一个非负数字和一个长度或百分比) ==> flex:2 1 200px; (取值为第一位和最后一位，中间值固定 1)
#### flex:1
- 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
- flex-grow（扩展量）定义项目的的放大比例；
  - 代表含义是对额外空间的占据量，所谓额外空间就是这一行多余的空间，有多余的空间这一属性才有用。默认值是 0，意思就是即使有多余空间，它也不要
  - 默认为 0，即 即使存在剩余空间，也不会放大；所有项目的 flex-grow 为 1：等分剩余空间（自动放大占位）；flex-grow 为 n 的项目，占据的空间（放大的比例）是 flex-grow 为 1 的 n 倍。
- flex-shrink（收缩量）定义项目的缩小比例；
  - 这个属性只有在没有额外空间时起作用，意思是没有额外空间时，成员贡献出空间的大小。默认值为 1，如果为 0 意思是不贡献空间，也就是说即使空间不足，成员大小也不发生改变。
  - 默认为 1，即 如果空间不足，该项目将缩小；
  - 所有项目的 flex-shrink 为 1：当空间不足时，缩小的比例相同；flex-shrink 为 0：空间不足时，该项目不会缩小；flex-shrink 为 n 的项目，空间不足时缩小的比例是 flex-shrink 为 1 的 n 倍。
- flex-basis
  - 表示在分配额外空间之前，成员占据的空间，默认值为 auto，意思就是你本来占多少就是多少。但也可以自己设置长度(px)。这个值的效果就是确定在释放和分配空间的时候，你的初值是多少。
  - 定义在分配多余空间之前，项目占据的主轴空间（main size），浏览器根据此属性计算主轴是否有多余空间
  - 默认值为 auto，即 项目原本大小；设置后项目将占据固定空间。

### Grid

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009164716.png)
lex 布局虽然强大，但是只能是一维布局，如果要进行二维布局，那么我们还需要使用 grid。

grid 布局又称为“网格布局”，可以实现二维布局方式，和之前的 表格 table 布局差不多，然而，这是使用 CSS 控制的，不是使用 HTML 控制的，同时还可以依赖于媒体查询根据不同的上下文得新定义布局。和 table 布局不同的是，grid 布局不需要在 HTML 中使用特定的标签布局，所有的布局都是在 CSS 中完成的，你可以随意定义你的 grid 网格。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015141127.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015144548.png)

#### 使用 grid 布局

使用 grid 布局很简单，通过 display 属性设置属性值为 grid 或 inline-grid 或者是 subgrid（该元素父元素为网格，继承父元素的行和列的大小） 就可以了。

网格容器中的所有子元素就会自动变成网格项目（grid item），然后设置列（grid-template-columns）和 行（grid-template-rows）的大小，设置`grid-template-columns`有多少个参数生成的 grid 列表就有多少个列。如果没有设置 grid-template-columns，那么默认只有一列，宽度为父元素的 100%。

**注：当元素设置了网格布局，column、float、clear、vertical-align 属性无效。**

```html
<div class="grid-container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>

.grid-container{ padding: 20px; display: grid; grid-template-rows: 50px 100px
60px 80px; grid-template-columns: 50px 1fr 1fr 2fr; background: pink; } .item{
border: 2px solid palegoldenrod; color: #fff; }
```

- css fr 单位是一个自适应单位，fr 单位被用于在一系列长度值中分配剩余空间，如果多个已指定了多个部分，则剩下的空间根据各自的数字按比例分配。
- fr 是基于网格容器可用空间来计算的（flex 也是一样），所以我们可以和其他单位混合使用，如果需要的话

#### 行或列最小和最大尺寸

`minmax()`函数来创建行或列的最小或最大尺寸，第一个参数定义网格轨道的最小值，第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受 auto 值。auto 值允许网格轨道基于内容的尺寸拉伸或挤压。

```css
.grid-container {
  padding: 20px;
  display: grid;
  grid-template-rows: minmax(100px, 200px) minmax(50px, 200px);
  grid-template-columns: 1fr 1fr 2fr;
  background: pink;
  height: 300px;
}
```

遇到的问题：

- 将第一行的高度设置为`minmax(100px,200px)`，第二行的高度设置为`minmax(50px,200px)`，容器总高度设置为`300px`，这时每一列的高度要怎么算呢？
- 判断总高度是小于第一列高度的最大值和第二列高度的最大值之和的，如果大于最大值之和，那么第一列和第二列的高度都为设置的最大值，如果是小于最小值之和的话，那么第一列和第二列的高度都为设置的最小值。
- 总高度是小于第一列高度的最大值和第二列高度的最大值之和
  - 总高度 `300px` - 第一列最小高度 `100px` - 第二列最小高度 `50px` = `150px`
  - 第一列高度：第一列最小高度 `100px + 150px/2 = 175px`;
  - 第二列高度：第一列最小高度 `50px + 150px/2 = 125px`;

#### 重复行或者列

`repeat()` 属性可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。
`repeat()` 也接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。

```css
.grid-container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(3, 100px);
  background: pink;
}
```

#### 间距

- grid-column-gap：创建列与列之间的距离。
- grid-row-gap：行与行之间的距离。
- grid-gap 是 grid-row-gap 和 grid-column-gap 两个属性的缩写。

```css
.grid-container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 50px;
  grid-row-gap: 15px;
  background: pink;
}
```

#### 通过网格线定位 grid item

我们可以通过表格线行或者列来定位 grid item。

```html
<div class="grid-container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>

.grid-container{ padding: 20px; display: grid; grid-template-columns:
repeat(2,100px); grid-template-rows: repeat(3,100px); grid-column-gap: 50px;
grid-row-gap: 15px; background: pink; } .item{ border: 2px solid palegoldenrod;
color: #fff; text-align: center; font-size: 20px; } .item1{ grid-row-start: 2;
grid-row-end: 3; grid-column-start: 2; grid-column-end: 3; background: #fffa90;
color: #000; }
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015143416.png)

- `grid-row` 是 `grid-row-start` 和 `grid-row-end` 的简写。`grid-column` 是 `grid-column-start` 和 `grid-column-end` 的简写。
  - 只提供一个值，指定了 `grid-row-start` 和 `grid-column-start` 的值。
  - 提供两个值，第一个值是 `grid-row-start` 或者 `grid-column-start` 的值，第二个值是 `grid-row-end` 或者 `grid-column-end` 的值，两者之间必须要用`/`隔开。
  ```css
  grid-row: 2;
  grid-column: 3 / 4;
  ```
  - 四个值可以用 `grid-area` 缩写，分别对应 `grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`：
  ```css
  grid-area: 2 / 2 / 3 / 3;
  ```

#### 合并单元行与合并单元列

这个就和`excel`中的合并单元行/列是相同的（这个需要设置在`grid item`中）

```css
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 4;
```

也可以使用`grid-row`和`grid-column`简写的形式，关键词`span`后面紧随数字，表示合并多少个列或行，`/` 前面是从第几行`/`列开始。

```css
grid-row: 2 / span 3;
grid-column: span 2;
```

```css
.grid-container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 50px;
  grid-row-gap: 15px;
  background: pink;
}
.item {
  border: 2px solid palegoldenrod;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015144225.png)

#### 自定义网格线名称

在`grid`中，是可以自定义网格线的名称的，然后使用定义好的网格线来进行布局，`[col1-start]` 网格线名称一定要使用 `[]` 括住。

```html
<div class="grid-container">
  <div class="item a">a</div>
  <div class="item b">b</div>
  <div class="item c">c</div>
  <div class="item d">d</div>
  <div class="item e">e</div>
  <div class="item f">f</div>
  <div class="item g">g</div>
  <div class="item h">h</div>
  <div class="item i">i</div>
  <div class="item j">j</div>
</div>

.grid-container{ text-align: center; height: 400px; padding: 100px; display:
grid; grid-column-gap: 5px; grid-row-gap: 5px; background: pink;
grid-template-columns: [col1-start] 100px [col1-end] 5px [col2-start] 100px
[col2-end] 5px [col3-start] 100px [col3-end] 5px [col4-start] 100px [col4-end];
grid-template-rows: [row1-start] auto [row1-end] 5px [row2-start] auto
[row2-end] 5px [row3-start] auto [row3-end] 5px [row4-start] auto [row4-end] 5px
[row5-start] auto [row5-end]; } .a { grid-column: col1-start / col3-end;
grid-row: row1-start; background: #ffffff;} .b { grid-column: col4-start /
col4-end; grid-row: row1-start / row5-end; background: orange; } .c {
grid-column: col1-start; grid-row: row2-start; background: #ffffff;} .d {
grid-column: col2-start; grid-row: row2-start; background: #ffffff;} .e {
grid-column: col3-start; grid-row: row2-start; background: #ffffff;} .f {
grid-column: col1-start / col2-end; grid-row: row3-start; background: #ffffff;}
.g { grid-column: col3-start; grid-row: row3-start; background: #ffffff;} .h {
grid-column: col1-start; grid-row: row4-start; background: #ffffff;} .i {
grid-column: col2-start / col3-end; grid-row: row4-start; background: #ffffff;}
.j { grid-column: col1-start / col3-end; grid-row: row5-start; background:
#ffffff;}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015144801.png)

#### 通过网格区域命名和定位网格项目

- 什么是网格区域：
  - 网格区域(grid-area)是一个逻辑空间，主要用来放置一个或多个网格单元格（Grid Cell）。他是由四条网格线(Grid line)，网格区域每边一条，四边相交组织的网格轨道(Grid Track)。简单点理解，网格区域是有四条网格线交织组成的网格空间，这个空间中可能是一个网格单元格，也可能是多个网格单元格。
- 定义网格区域

  - 在 CSS Grid Layout 中定义网格区域有两种方式，一种是通过网格线来定义，另一种是通过 grid-template-areas 来定义。接下来看看两种定义网格区域的方法在具体使用过程中有何不同。

- 网格线定义网格区域
  - 使用网格线定义网格区域的方法非常的简单，首先依赖于`grid-template-columns`和`grid-template-rows`显式定义网格线，甚至是由浏览器隐式创建网格线，然后通过`grid-area`属性通过取网格线，组成网格线交织区域，那么这个区域就是所讲的网格区域。在使用`grid-area`属性调用网格线，其遵循的规则是`grid-area: row-start/ column-start / row-end / column-end`。
- `grid-template-areas`定义网格区域

  - 除了使用网格线的交组来定义网格区域之外，在 CSS Grid Layout 中还可以通过`grid-template-areas`属性来定义网格区域的名称，然后需要放在对应网格区域的元素，可以通过`grid-area`属性来指定。而且重复区域可以使用同一个名称来实现跨区域。另外对于空的轨道区域，可以使用点号 . 来代表

  ```html
  <div class="grid-container">
    <div class="header ">header</div>
    <div class="content ">content</div>
    <div class="sidebar ">sidebar</div>
    <div class="footer ">footer</div>
  </div>

  .grid-container{ text-align: center; padding: 20px; display: grid;
  grid-column-gap: 5px; grid-row-gap: 5px; background: pink;
  grid-template-areas: "header header header header header" "sidebar content
  content content content" "footer footer footer footer footer";
  grid-template-rows: 50px 150px 50px; grid-template-columns: 200px 200px 200px;
  } .header { grid-area:header; background: #fff} .content { grid-area: content;
  background: #fffa90} .sidebar { grid-area: sidebar; background: #5bc0de}
  .footer { grid-area: footer; background: #ffff00}
  ```

  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015145529.png)
  在不设置高度的情况下（父容器和 grid-template-rows 的值，或者 grid-template-rows 设置为 auto 时，slider 和 content 的高度是一致的，并且会根据其内的高度自适应）
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015145708.png)

### 常见布局的方案

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009164716.png)

#### 单列布局

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210929065711.png)

- header,content 和 footer 等宽的单列布局
  - 对于第一种，先通过对 header,content,footer 统一设置 width：1000px;或者 max-width：1000px(这两者的区别是当屏幕小于 1000px 时，前者会出现滚动条，后者则不会，显示出实际宽度);然后设置 margin:auto 实现居中即可得到。
- header 与 footer 等宽,content 略窄的单列布局
  - header、footer 的内容宽度不设置，块级元素充满整个屏幕，但 header、content 和 footer 的内容区设置同一个 width，并通过 margin:auto 实现居中。

```html
<div class="header"></div>
<div class="content"></div>
<div class="footer"></div>

.header{ margin:0 auto; max-width: 960px; height:100px; background-color: blue;
} .content{ margin: 0 auto; max-width: 960px; height: 400px; background-color:
aquamarine; } .footer{ margin: 0 auto; max-width: 960px; height: 100px;
background-color: aqua; }
```

```html
<div class="header">
  <div class="nav"></div>
</div>
<div class="content"></div>
<div class="footer"></div>

.header{ margin:0 auto; max-width: 960px; height:100px; background-color: blue;
} .nav{ margin: 0 auto; max-width: 800px; background-color: darkgray; height:
50px; } .content{ margin: 0 auto; max-width: 800px; height: 400px;
background-color: aquamarine; } .footer{ margin: 0 auto; max-width: 960px;
height: 100px; background-color: aqua; }
```

#### 两列自适应布局

两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式。

- float+overflow:hidden
  - 如果是普通的两列布局，浮动+普通元素的 margin 便可以实现，但如果是自适应的两列布局，利用 float+overflow:hidden 便可以实现，这种办法主要通过 overflow 触发 BFC,而 BFC 不会重叠浮动元素。
  - 使用 overflow 属性来触发 bfc，来阻止浮动造成的文字环绕效果。
  - 注意点:如果侧边栏在右边时，注意渲染顺序。即在 HTML 中，先写侧边栏后写主内容
- Flex 布局
  - Flex 布局，也叫弹性盒子布局，区区简单几行代码就可以实现各种页面的的布局。
- grid 布局
  - Grid 布局，是一个基于网格的二维布局系统，目的是用来优化用户界面设计。

```html
<div class="parent" style="background-color: lightgrey;">
  <div class="left" style="background-color: lightblue;">
    <p>left</p>
  </div>
  <div class="right" style="background-color: lightgreen;">
    <p>right</p>
    <p>right</p>
  </div>
</div>
.parent { overflow: hidden; zoom: 1; } .left { float: left; margin-right: 20px;
} .right { overflow: hidden; zoom: 1; }
```

```css
//html部分同上
.parent {
  display: flex;
}
.right {
  margin-left: 20px;
  flex: 1;
}
```

```css
//html部分同上
.parent {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
}
```

#### 三栏布局

中间列自适应宽度，旁边两侧固定宽度。

1. 圣杯布局
   比较特殊的三栏布局，同样也是两边固定宽度，中间自适应，唯一区别是 dom 结构必须是先写中间列部分，这样实现中间列可以优先加载。
   **要注意的是，中间栏要在放在文档流前面以优先渲染。**

- 缺点

  - center 部分的最小宽度不能小于 left 部分的宽度，否则会 left 部分掉到下一行
  - 如果其中一列内容高度拉长(如下图)，其他两列的背景并不会自动填充。(借助等高布局正 padding+负 margin 可解决）。

    ```html
    <div class="container">
      <div class="center">
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>

    .container { // 导致左右栏也会 跟着走 // 分别给左右栏 position:
    relative;定位到原本的位置 padding:0 220px;//为左右栏腾出空间 } .left {
    float: left; width: 200px; height: 400px; background: red; margin-left:
    -100%; position: relative; left: -220px; } .center { float: left; width:
    100%; height: 500px; background: yellow; } .right { float: left; width:
    200px; height: 400px; background: blue; margin-left: -200px; position:
    relative; right: -220px; }
    ```

2. 双飞翼布局
   同样也是三栏布局，在圣杯布局基础上进一步优化，解决了圣杯布局错乱问题，实现了内容与布局的分离。而且任何一栏都可以是最高栏，不会出问题。

- 缺点
  - 多加一层 dom 树节点，增加渲染树生成的计算量。

```html
 <article class="container">
    <div class="center">
      <div class="inner">双飞翼布局</div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </article>

  .container {
      //不会引起塌陷
      min-width: 600px; //确保中间内容可以显示出来，两倍left宽+right宽
    }

    .left {
      float: left;
      width: 200px;
      height: 400px;
      background: red;
      margin-left: -100%;
    }

    .center {
      float: left;
      width: 100%;
      height: 500px;
      background: yellow;
    }

    .center .inner {
      // 流出左右边栏的宽度
      margin: 0 200px; //新增部分
    }

    .right {
      float: left;
      width: 200px;
      height: 400px;
      background: blue;
      margin-left: -200px;
    }
  </style>
```

- 两种布局实现方式对比:
  - 两种布局方式都是把主列放在文档流最前面，使主列优先加载。
  - 两种布局方式在实现上也有相同之处，都是让三列浮动，然后通过负外边距形成三列布局。
  - 两种布局方式的不同之处在于如何处理中间主列的位置： 圣杯布局是利用父容器的左、右内边距+两个从列相对定位； 双飞翼布局是把主列嵌套在一个新的父级块中利用主列的左、右外边距进行布局调整

3. 绝对定位法

   ```html
   <div class="left">Left</div>
   <div class="main">Main</div>
   <div class="right">Right</div>

   //简单的进行CSS reset body,html{ height:100%; padding: 0px; margin:0px; }
   //左右绝对定位 .left,.right{ position: absolute; top:0px; background: red;
   height:100%; } .left{ left:0; width:100px; } .right{ right:0px; width:200px;
   } //中间使用margin空出左右元素所占据的空间 .main{ margin:0px 200px 0px 100px;
   height:100%; background: blue; }
   ```

````
- 缺点
  - 如果中间栏含有最小宽度限制，或是含有宽度的内部元素，当浏览器宽度小到一定程度，会发生层重叠的情况。

4. 浮动
```html
//注意元素次序
<div class="left">Left</div>
<div class="right">Right</div>
<div class="main">Main</div>


body,html {
    height:100%;
    padding: 0;
    margin: 0
}
//左栏左浮动
.left {
    background: red;
    width: 100px;
    float: left;
    height: 100%;
}
//中间自适应
.main {
    background: blue;
    height: 100%;
    margin:0px 200px 0px 100px;
}
//右栏右浮动
.right {
    background: red;
    width: 200px;
    float: right;
    height: 100%;
}
````

#### 等高布局

等高布局是指子元素在父元素中高度相等的布局方式。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210929073545.png)

1. 利用正 padding+负 margin
   可解决圣杯布局的第二点缺点，因为背景是在 padding 区域显示的，设置一个大数值的 padding-bottom，再设置相同数值的负的 margin-bottom，并在所有列外面加上一个容器，并设置 overflow:hidden 把溢出背景切掉。这种可能实现多列等高布局，并且也能实现列与列之间分隔线效果，结构简单，兼容所有浏览器。

   ```css
   /* 在圣杯布局的布局的基础上 */
   .center,
   .left,
   .right {
     padding-bottom: 10000px;
     margin-bottom: -10000px;
   }

   .container {
     padding-left: 220px;
     padding-right: 220px;
     overflow: hidden;
   }
   ```

````
2. 模仿表格布局

#### 粘连布局
有一块内容<main>，当<main>的高康足够长的时候，紧跟在<main>后面的元素<footer>会跟在<main>元素的后面。
当<main>元素比较短的时候(比如小于屏幕的高度),我们期望这个<footer>元素能够“粘连”在屏幕的底部
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210929090420.png)
```html
<div id="wrap">
  <div class="main">
    main <br />
    main <br />
    main <br />
  </div>
</div>
<div id="footer">footer</div>

* {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%; //高度一层层继承下来
  }

  #wrap {
    min-height: 100%;
    background: pink;
    text-align: center;
    overflow: hidden;
  }

  #wrap .main {
    padding-bottom: 50px;
  }

  #footer {
    height: 50px;
    line-height: 50px;
    background: deeppink;
    text-align: center;
    margin-top: -50px;
  }

  .container {
    padding-left: 220px;
    padding-right: 220px;
  }

  .left {
    float: left;
    width: 200px;
    height: 400px;
    background: red;
    margin-left: -100%;
    position: relative;
    left: -220px;
  }

  .center {
    float: left;
    width: 100%;
    height: 500px;
    background: yellow;
  }

  .right {
    float: left;
    width: 200px;
    height: 400px;
    background: blue;
    margin-left: -200px;
    position: relative;
    right: -220px;
  }

  .center,
  .left,
  .right {
    padding-bottom: 10000px;
    margin-bottom: -10000px;
  }
````

- 实现
  - footer 必须是一个独立的结构，与 wrap 没有任何嵌套关系
  - wrap 区域的高度通过设置 min-height，变为视口高度
  - footer 要使用 margin 为负来确定自己的位置
  - 在 main 区域需要设置 padding-bottom。这也是为了防止负 margin 导致 footer 覆盖任何实际内容。

### 水平垂直居中

#### 定宽高

- 绝对定位和负 magin 值
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      position: relative;
    }
    .children-box {
      position: absolute;
      width: 100px;
      height: 100px;
      background: yellow;
      left: 50%;
      top: 50%;
      margin-left: -50px;
      margin-top: -50px;
    }
  </style>
  ```
- 绝对定位 + transform
  ```js
    <template>
      <div id="app">
          <div class="box">
              <div class="children-box"></div>
          </div>
      </div>
    </template>
    <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      position: relative;
    }
    .children-box {
      position: absolute;
      width: 100px;
      height: 100px;
      background: yellow;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    </style>
  ```
- 绝地定位 + margin: auto

  ```html
  <style>
    .box1 {
      width: 500px;
      height: 500px;
      background-color: aqua;
      position: relative;
    }
    .box2 {
      width: 100px;
      height: 100px;
      background-color: blanchedalmond;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  </style>
  <body>
    <div class="box1">
      <div class="box2"></div>
    </div>
  </body>
  ```

- flex 布局
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .children-box {
      background: yellow;
      height: 100px;
      width: 100px;
    }
  </style>
  ```
- grid 布局
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: grid;
    }
    .children-box {
      width: 100px;
      height: 100px;
      background: yellow;
      margin: auto;
    }
  </style>
  ```
- table-cell + vertical-align + inline-block/margin: auto
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box"></div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
    .children-box {
      width: 100px;
      height: 100px;
      background: yellow;
      display: inline-block; // 可以换成margin: auto;
    }
  </style>
  ```

#### 不定宽高

- 绝对定位 + transform

  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      position: relative;
    }
    .children-box {
      position: absolute;
      background: yellow;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  ```

- table-cell
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
    .children-box {
      background: yellow;
      display: inline-block;
    }
  </style>
  ```
- flex 布局

  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">11111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .children-box {
      background: yellow;
    }
  </style>
  ```

- flex + margin:auto

  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">11111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: flex;
    }
    .children-box {
      background: yellow;
      margin: auto;
    }
  </style>
  ```

- grid
  ```html
  <template>
    <div id="app">
      <div class="box">
        <div class="children-box">11111111</div>
      </div>
    </div>
  </template>
  <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: grid;
    }
    .children-box {
      background: yellow;
      align-self: center;
      justify-self: center;
    }
  </style>
  ```
- gird+margin:auto

  ```js
    <template>
      <div id="app">
          <div class="box">
              <div class="children-box">11111111</div>
          </div>
      </div>
    </template>
    <style type="text/css">
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid red;
      display: grid;
    }
    .children-box {
      background: yellow;
      margin: auto;
    }
    </style>
  ```

- writing-mode 属性布局(不是很了解)

#### 内联元素居中布局

- 水平居中
  - 行内元素可设置：text-align: center;
  - flex 布局设置父元素：display: flex; justify-content: center;
- 垂直居中
  - 单行文本父元素确认高度：height === line-heigh
  - 多行文本父元素确认高度：disaply: table-cell; vertical-align: middle;

#### 块级元素居中布局

- 水平居中
  - 定宽: margin: 0 auto;
  - 不定宽： 参考上诉例子中不定宽高例子。
  - 定位
  - flex
  - grid
- 垂直居中
  - position: absolute 设置 left、top、margin-left、margin-to(定高)；
  - display: table-cell；
  - transform: translate(x, y)；
  - flex(不定高，不定宽)；
  - grid(不定高，不定宽)，兼容性相对比较差；

### 单行文本溢出，多行文本溢出的代码实现?

#### 单行文本省略

```css
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

#### 多行文本省略

```css
.ellipsis {
  display: -webkit-box; /*重点，不能用block等其他，将对象作为弹性伸缩盒子模型显示*/
  -webkit-box-orient: vertical; /*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
  -webkit-line-clamp: 3; /*行数，超出三行隐藏且多余的用省略号表示...*/
  line-clamp: 3;
  word-break: break-all;
  overflow: hidden;
  max-width: 100%;
}
```

### px、rpx、em、rem、dpr、vw、wh 的值各是什么意思

- px:像素
  - css 中的 px 是一个相对（抽象）单位是虚拟像素，因为不同的设备在大小宽高相同时，他们的物理像素大小也可能是不同的，物理像素高的设备单位面积内存放的像素点就高，因此画质看起来就更精细，通常情况下在 pc 端中，css 中的 px 就接近于实际的像素大小，但是在移动设备上，根据不用机型的分辨率大小，css 中的一个 px 可能就会对应不同数量的物理像素点
- rem: 根据根元素(即 html)的 font-size
  - rem 和 em 类似都是相对长度单位，但是 rem 只会相对于 html 根元素的字体大小，也就是说如果根元素字体设置为 18px，那么全局内 rem 的值换算都为 1rem = 18px
  - 有时我们为了换算方便会将根元素的字体大小先设置为 62.5%，然后根据需要进行调整，原因是 62.5%\*16px = 10px，此时也就是 1rem = 10px
- em: 根据「自身元素」的 font-size
  - 使用 em 单位的元素如果自身设置了字体大小，那么就相对于自身计算，如果自身没有设置字体大小那么就会继承父元素的字体大小，如果父元素没有设置，就会依次向上寻找（因为字体大小是会被继承的），如果页面中没有设置字体大小，那么就会以浏览器的默认字体大小 16px 为基准
- vw: viewport width
- vh: viewport height
  - vh 指的是视窗高度 vh 类似于一种百分比的单位，他相对于视窗的高度，将视窗的高度分为 100 份，10vh 也就是占用视窗的 10%
- vm:
  - vm 是在视口中选取 宽度或者高度最小的那一个，然后想 vw、vh 一样将其分为 100 等份
- rpx：
  - rpx 响应式 px 单位
  - rpx 本质上是和宽度相关的单位，屏幕越宽实际像素值就越大，这是根据屏幕宽度缩放的单位，如果你不想根据屏幕缩放，那么不要使用 rpx
  - 使用 rpx 单位元素的大小的计算公式为
    - 750 \* 元素在设计稿中的宽度 / 设计稿基准宽度
    - 若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 \* 100 / 750，结果为：100rpx
    - 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 \* 100 / 640，结果为：117rpx
  - rpx 本质上是和宽度相关的单位，屏幕越宽实际像素值就越大，这是根据屏幕宽度缩放的单位，如果你不想根据屏幕缩放，那么不要使用 rpx
  - 如果你的字体使用了 rpx 就需要注意了，你的字体也会跟着屏幕的宽度变化而变化
  - rpx 不支持切换横竖屏时进行计算大小，因此如果你使用了 rpx，建议锁定屏幕方向

### 伪类与伪元素

- 伪类
  - 伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover 来描述这个元素的状态。虽然它和普通的 css 类相似，可以为已有的元素添加样式，但是它只有处于 dom 树无法描述的状态下才能为元素添加样式，所以将其称为伪类。
  - 双冒号 (::) 表示伪元素
- 伪元素
  - 伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过:before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
  - 单冒号 (:)表示伪类

### CSS 选择器的优先级

第一优先级：!important 会覆盖页面内任何位置的元素样式 1.内联样式，如 style="color: green"，权值为 1000
2.ID 选择器，如#app，权值为 0100 3.类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为 0010 4.标签、伪元素选择器，如 div::first-line，权值为 0001 5.通配符、子类选择器、兄弟选择器，如\*, >, +，权值为 0000 6.继承的样式没有权值

### display:none visibility:hidden opacity:0 区别

- display: none;
  - DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；
  - 事件监听：无法进行 DOM 事件监听；
  - 性能：动态改变此属性时会引起重排，性能较差；
  - 继承：不会被子元素继承，毕竟子类也不会被渲染；
  - transition：transition 不支持 display。
- visibility: hidden;
  - DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；
  - 事件监听：无法进行 DOM 事件监听；
  - 性 能：动态改变此属性时会引起重绘，性能较高；
  - 继 承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；
  - transition：visibility 会立即显示，隐藏时会延时
- opacity: 0;

  - DOM 结构：透明度为 100%，元素隐藏，占据空间；
  - 事件监听：可以进行 DOM 事件监听；
  - 性 能：提升为合成层，不会触发重绘，性能较高；
  - 继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；
  - transition：opacity 可以延时显示和隐藏

    1.opacity：0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定 一些事件，如 click 事件，那么点击该区域，也能触发点击事件的
    2.visibility：hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已 经绑定的事件 ，隐藏对应元素，在文档布局中仍保留原来的空间（重绘）
    3.display：none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素。 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）

### CSS 标签 meta ？？？？？？？？？

### CSS 画三角形 画半圆

#### 三角形

利用元素的 border 绘制三角形，先来看一下宽高均为 0，border 有宽度

```html
<style>
  .triangle {
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-bottom: 200px solid #0ff;
  }
</style>

<div class="triangle"></div>
```

#### 梯形

梯形也是基于 border 来绘制的，只不过绘制梯形时，宽高和 border 尺寸相同。

```html
<style>
  .trapezoid {
    width: 50px;
    height: 50px;
    background: #ff0;
    border-top: 50px solid #f00;
    border-bottom: 50px solid #00f;
    border-left: 50px solid #0f0;
    border-right: 50px solid #0ff;
  }
</style>
<div class="trapezoid"></div>
```

#### 扇形

```html
<style>
  .sector1 {
    border-radius: 100px 0 0;
    width: 100px;
    height: 100px;
    background: #00f;
  }
</style>
<div class="sector1"></div>

<style>
  .sector2 {
    border: 100px solid transparent;
    width: 0;
    border-radius: 100px;
    border-top-color: #f00;
  }
</style>
<div class="sector2"></div>
```

#### 椭圆

border-radius: 水平半径 / 垂直半径;

```html
<style>
  .oval {
    width: 100px;
    height: 50px;
    background: #ff0;
    border-radius: 50px / 25px;
  }
</style>
<div class="oval"></div>
```

#### 箭头

```html
<style>
  .arrow {
    width: 0;
    height: 0;
    border: 50px solid;
    border-color: transparent #0f0 transparent transparent;
    position: relative;
  }
  .arrow::after {
    content: "";
    position: absolute;
    right: -55px;
    top: -50px;
    border: 50px solid;
    border-color: transparent #fff transparent transparent;
  }
</style>
<div class="arrow"></div>
```

#### 半圆

```html
<style>
  .semicircle {
    width: 100px;
    height: 50px;
    border-radius: 50px 50px 0 0;
    background-color: rebeccapurple;
  }
</style>
<div class="semicircle"></div>
```

### CSS 九宫格布局

#### Flex 实现

原理： 使用 flex 弹性布局和 flex-wrap 来设置

```html
//html代码
<div class="box">
  <ul class="box-inner">
    <li>九宫格1</li>
    <li>九宫格2</li>
    <li>九宫格3</li>
    <li>九宫格4</li>
    <li>九宫格5</li>
    <li>九宫格6</li>
    <li>九宫格7</li>
    <li>九宫格8</li>
    <li>九宫格9</li>
  </ul>
</div>

// css代码 .box { position: relative; width: 100%; height: 600px; } .box-inner {
position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex;
flex-wrap: wrap; } .box-inner > li { overflow: hidden; flex-grow: 1;
background-color: darkorange; text-align: center; color: #ffffff; width: 33%;
height: 200px; line-height: 200px; margin: 1px; text-align: center; }
```

#### Grid 实现

原理：使用 grid 创建网格布局，划分为 3x3 的等分布局。

```html
//html代码
<div class="box">
  <div>九宫格1</div>
  <div>九宫格2</div>
  <div>九宫格3</div>
  <div>九宫格4</div>
  <div>九宫格5</div>
  <div>九宫格6</div>
  <div>九宫格7</div>
  <div>九宫格8</div>
  <div>九宫格9</div>
</div>
//css代码 .box { display: grid; height: 600px; width: 100%;
grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); }
.box > div { width: 98%; margin: 1%; background-color: deeppink; text-align:
center; line-height: 200px; } .box > div:nth-child(even) { background-color:
black; color: #fff; }
```

#### Float 实现

原理：利用 float 布局和 31%的百分比设置宽和高。

```html
//html代码
<div class="box">
  <ul class="box-inner">
    <li>九宫格1</li>
    <li>九宫格2</li>
    <li>九宫格3</li>
    <li>九宫格4</li>
    <li>九宫格5</li>
    <li>九宫格6</li>
    <li>九宫格7</li>
    <li>九宫格8</li>
    <li>九宫格9</li>
  </ul>
</div>
//css代码 .box { position: relative; width: 100%; height: 600px; } .box-inner {
position: absolute; top: 0; left: 0; width: 100%; height: 100%; } .box-inner >
li { position: relative; float: left; width: 31%; height: 31%; margin: 1%;
list-style-type: none; background-color: springgreen; text-align: center;
line-height: 200px; } .box-inner > li:nth-child(odd) { background-color: silver;
}
```

#### Table 实现

原理 1：使用原生 table 表格实现九宫格 缺点：单元之间的间隔使用 border-spacing 实现，不支持百分比，设置后为添加单元四周的间隔。

```html
//html代码
<div class="box">
  <table class="box-inner">
    <tbody>
      <tr>
        <td>九宫格1</td>
        <td>九宫格2</td>
        <td>九宫格3</td>
      </tr>
      <tr>
        <td>九宫格4</td>
        <td>九宫格5</td>
        <td>九宫格6</td>
      </tr>
      <tr>
        <td>九宫格7</td>
        <td>九宫格8</td>
        <td>九宫格9</td>
      </tr>
    </tbody>
  </table>
</div>
//css代码 .box { position: relative; width: 100%; height: 600px; } .box-inner {
position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 10px;
border-spacing: 0.57em; font-size: 20px; empty-cells: hide; table-layout: fixed;
} .box-inner > tbody > tr > td { text-align: center; background-color:
burlywood; overflow: hidden; }
```

### CSSOM 建立的过程中，有没有一些全局的 API 是暴露出来可供调用的 ？????????????

### RAF（requestAnimationFrame） 和 RIC（requestIdleCallback） 是什么

#### 页面流畅与 FPS

- 页面是一帧一帧绘制出来的，当每秒绘制的帧数（FPS）达到 60 时，页面是流畅的，小于这个值时，用户会感觉到卡顿。

- 1s 60 帧，所以每一帧分到的时间是 1000/60 ≈ 16 ms。所以我们书写代码时力求不让一帧的工作量超过 16ms。

#### Frame

浏览器每一帧都需要完成哪些工作？
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013143020.png)

- 一帧内需要完成如下六个步骤的任务：
  - 处理用户的交互
  - JS 解析执行
  - 帧开始。窗口尺寸变更，页面滚去等的处理
  - requestAnimationFrame
  - 布局
  - 绘制

#### requestIdleCallback

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013143303.png)

- requestIdleCallback：: 会在浏览器空闲时间执行回调，也就是允许开发人员在主事件循环中执行低优先级任务，而不影响一些延迟关键事件。如果有多个回调，会按照先进先出原则执行，但是当传入了 timeout，为了避免超时，有可能会打乱这个顺序。

- 上面六个步骤完成后没超过 16 ms，说明时间有富余(空闲时间多了)，此时就会执行 requestIdleCallback 里注册的任务。

- 从上图也可看出，和 requestAnimationFrame 每一帧必定会执行不同，requestIdleCallback 是捡浏览器空闲来执行任务。

```js
requestIdleCallback(myNonEssentialWork, { timeout: 2000 });
​
// 任务队列
const tasks = [
 () => {
   console.log("第一个任务");
 },
 () => {
   console.log("第二个任务");
 },
 () => {
   console.log("第三个任务");
 },
];
​
function myNonEssentialWork (deadline) {
 // 如果帧内有富余的时间，或者超时
 while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && tasks.length > 0) {
   work();
 }
​
 if (tasks.length > 0)
   requestIdleCallback(myNonEssentialWork);
 }
​
function work () {
 tasks.shift()();
 console.log('执行任务');
}

// 超时的情况，其实就是浏览器很忙，没有空闲时间，此时会等待指定的 timeout 那么久再执行，通过入参 dealine 拿到的 didTmieout 会为 true，同时 timeRemaining () 返回的也是 0。超时的情况下如果选择继续执行的话，肯定会出现卡顿的，因为必然会将一帧的时间拉长。
```

- cancelIdleCallback
  - 与 setTimeout 类似，返回一个唯一 id，可通过 cancelIdleCallback 来取消任务。

#### requestAnimationFrame

requestAnimationFrame： 告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom，更新动画的函数)；由于是每帧执行一次，那结果就是每秒的执行次数与浏览器屏幕刷新次数一样，通常是每秒 60 次。

在没有 requestAnimationFrame 方法的时候，执行动画，我们可能使用 setTimeout 或 setInterval 来触发视觉变化；但是这种做法的问题是：回调函数执行的时间是不固定的，可能刚好就在末尾，或者直接就不执行了，经常会引起丢帧而导致页面卡顿。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013144154.png)
归根到底发生上面这个问题的原因在于时机，也就是浏览器要知道何时对回调函数进行响应。setTimeout 或 setInterval 是使用定时器来触发回调函数的，而定时器并无法保证能够准确无误的执行，有许多因素会影响它的运行时机，比如说：当有同步代码执行时，会先等同步代码执行完毕，异步队列中没有其他任务，才会轮到自己执行。并且，我们知道每一次重新渲染的最佳时间大约是 16.6 ms，如果定时器的时间间隔过短，就会造成 过度渲染，增加开销；过长又会延迟渲染，使动画不流畅。

requestAnimationFrame 方法不同与 setTimeout 或 setInterval，它是由系统来决定回调函数的执行时机的，会请求浏览器在下一次重新渲染之前执行回调函数。无论设备的刷新率是多少，requestAnimationFrame 的时间间隔都会紧跟屏幕刷新一次所需要的时间；例如某一设备的刷新率是 75 Hz，那这时的时间间隔就是 13.3 ms（1 秒 / 75 次）。需要注意的是这个方法虽然能够保证回调函数在每一帧内只渲染一次，但是如果这一帧有太多任务执行，还是会造成卡顿的；因此它只能保证重新渲染的时间间隔最短是屏幕的刷新时间。

```js
let offsetTop = 0;
const div = document.querySelector(".div");
const run = () => {
  div.style.transform = `translate3d(0, ${(offsetTop += 10)}px, 0)`;
  window.requestAnimationFrame(run);
};
run();
```

#### 总结

一些低优先级的任务可使用`requestIdleCallback`等浏览器不忙的时候来执行，同时因为时间有限，它所执行的任务应该尽量是能够量化，细分的微任务（micro task）。

因为它发生在一帧的最后，此时页面布局已经完成，所以不建议在 requestIdleCallback 里再操作 DOM，这样会导致页面再次重绘。DOM 操作建议在 RAF 中进行。同时，操作 DOM 所需要的耗时是不确定的，因为会导致重新计算布局和视图的绘制，所以这类操作不具备可预测性。

Promise 也不建议在这里面进行，因为 Promise 的回调属性 Event loop 中优先级较高的一种微任务，会在 requestIdleCallback 结束时立即执行，不管此时是否还有富余的时间，这样有很大可能会让一帧超过 16 ms。

### 怎样处理 移动端 1px 被 渲染成 2px 问题？

- 局部处理
  - meta 标签中的 viewport 属性 ，initial-scale 设置为 1
  - rem 按照设计稿标准走，外加利用 transfrome 的 scale(0.5) 缩小一倍即可；
- 全局处理
  - mate 标签中的 viewport 属性 ，initial-scale 设置为 0.5
  - rem 按照设计稿标准走即可

### 网页视口尺寸

- 屏幕
  - 屏幕尺寸
    - 屏幕尺寸是屏幕的宽度和高度：显示器或移动屏幕。window.screen 是保存屏幕尺寸信息的对象。
      - screen.width：屏幕的宽 、 screen.height：屏幕的高。
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106104805.png)
  - 可用屏幕尺寸
    - 可用的屏幕大小由活动屏幕的宽度和高度组成，没有操作系统工具栏。
    - screen.availWidth：可利用的宽，等于屏幕的宽、screen.availHeight：可利用的高，等于屏幕的高减去 mac 顶部栏或 windows 底部栏。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106104855.png)
  - 屏幕距离
    - screenTop：浏览器窗口左上角到屏幕上边缘的距离。
    - screenLeft：浏览器窗口左上角到屏幕左边缘的距离。
    - Firefox 浏览器不支持上述属性，但是可以使用 👇:
      - screenX：等于 screenLeft。
      - screenY：等于 screenTop。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106105729.png)
- window 窗口
  - 窗口的外部大小由整个浏览器窗口的宽度和高度组成，包含地址栏，选项卡栏和其他浏览器面板。
    - window.outerWidth：浏览器窗口的宽、window.outerHeight：浏览器窗口的高。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106105935.png)
- 客户区
  - 元素的客户区大小（client dimension），指的是元素内容及其内边距所占据的空间大小
  - clientWidth：内容可视区的宽度、clientHeight：内容可视区的高度。
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110042.png)
  - 如果有滚动条 clientWidth = 元素宽 + padding（左右） - 滚动条
  - 如果没有滚动条 clientWidth = 元素宽 + padding（左右）
  - 获取页面大小:let pageWidth = document.documentElement.clientWidth || document.body.clientWidth（ie7 之前的版本）;
- 网页大小
  - 网页大小由呈现的页面内容的宽度和高度组成。
  - scrollWidth：实际内容的宽度。没有垂直滚动条时与 clientWidth 相同。否则是等于实际内容的宽度 + padding。scrollWidth 也包括 ::before 和 ::after 这样的伪元素。
  - scrollHeight：实际内容的高度。没有垂直滚动条时与 clientHeight 相同。否则是等于实际内容的高度 + padding。scrollHeight 也包括 ::before 和 ::after 这样的伪元素。
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110220.png)
- 滚动距离
  - scrollLeft：元素最左端和窗口中可见内容的最左端之间的距离。即当前左滚的距离
  - scrollTop：元素最顶端和窗口中可见内容的最顶端之间的距离。即当前上滚的距离
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110333.png)
  - 如果有滚动条 scrollLeft = 隐藏内容宽度 + border
  - 如果没有滚动条 scrollLeft = 0
- 偏移量
  - 偏移量包括元素在屏幕上占用的所有可见的空间。元素的可见大小由其高度、宽度决定，包括所有内边距、滚动条和边框大小（注意，不包括外边距）。
  - offsetHeight：元素在垂直方向上占用的空间大小，包括元素的高度、（可见的）水平滚动条的高度、上边框高度和下边框高度。
  - offsetWidth：元素在水平方向上占用的空间大小。包括元素的宽度、（可见的）垂直滚动条的宽度、左边框宽度和右边框宽度。
  - offsetLeft：当前元素内容区域（包括 border）左边缘到 offsetParent 内容区域（不包括 border）左边缘的距离。
  - offsetTop：当前元素内容区域（包括 border）顶部到 offsetParent 内容区域（不包括 border）顶部的距离。
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110734.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110836.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111014.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111112.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111243.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111342.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111403.png)
  -

### CSS 优化

- 多个 css 合并，尽量减少 HTTP 请求
- 将 css 文件放在页面最上面
- 移除空的 css 规则
- 避免使用 CSS 表达式
- 选择器优化嵌套，尽量避免层级过深
- 充分利用 css 继承属性，减少代码量
- 抽象提取公共样式，减少代码量
- 属性值为 0 时，不加单位
- 属性值为小于 1 的小数时，省略小数点前面的 0
- css 雪碧图


