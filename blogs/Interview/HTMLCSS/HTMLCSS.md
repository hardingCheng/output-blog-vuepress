---
title: HTMLCSS 面试题
date: 2021-12-19
tags:
  - HTMLCSS
categories:
  - HTMLCSS面经
  - HTMLCSS知识要点
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



