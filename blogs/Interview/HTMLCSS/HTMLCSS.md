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



### 浮动元素的特性 
- 只会影响后面的元素
- 文本不会被浮动元素覆盖
- 具备内联盒子特性：宽度由内容决定
- 具备块级盒子特性：支持所有样式
- 浮动放不下，会自动换行，父容器放不下，自动换行

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



