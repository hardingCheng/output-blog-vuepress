# 根据各路大佬面经+自己的心得
## HTML
### html 标签的一些共有的属性有哪些？
- id属性
    - id属性是标签的唯一标识，每个标签的id属性的值必须是唯一的。
- class属性
    - 常用来使用class属性值给标签设置样式，样式一样的标签可以设置同样的class。
- name属性
    - 设置标签的名字，可以有同样的名字
- style属性
    - 设置标签样式
### html5 的新特性，除了语义化标签还有什么？
- 语义化标签
在HTML5出来之前，我们习惯于用div来表示页面的章节或者不同模块，但是div本身是没有语义的。但是现在，HTML5中加入了一些语义化标签，来更清晰的表达文档结构。
    - 语义化优点：
        - 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
        - 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
        - 方便其他设备解析，如盲人阅读器根据语义渲染网页
        - 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。
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
-  H5新特性
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

### script标签defer与async差异
- defer
    - 如果script标签设置了该属性，则浏览器会异步的下载该文件并且不会影响到后续DOM的渲染；如果有多个设置了defer的script标签存在，则会按照顺序执行所有的script；defer脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行。
- async
    - async的设置，会使得script脚本异步的加载并在允许的情况下执行
    - async的执行，并不会按着script在页面中的顺序来执行，而是谁先加载完谁执行。

## CSS

### .position有几种，分别描述？
- static（静态定位）
    - 对象遵循标准文档流中，top, right, bottom, left 等属性失效。
- relative（相对定位）
    - 对象遵循标准文档流中，依赖top, right, bottom, left 等属性相对于该对象在标准文档流中的位置进行偏移，同时可通过z-index定义层叠关系。
- absolute（绝对定位）
    - 对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于static定位以外的第一个父元素进行绝对定位） 同时可通过z-index定义层叠关系。
- fixed（固定定位）
    - 对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于浏览器窗口进行绝对定位）同时可通过z-index定义层叠关系。
- sticky（粘性定位元素）
    - 可以说是相对定位relative和固定定位fixed的结合
    - 在目标区域以内，它的行为就像 position:relative;在滑动过程中，某个元素距离其父元素的距离达到sticky粘性定位的要求时(比如top：100px)；position:sticky这时的效果相当于fixed定位，固定到适当位置。

### BFC块级格式化上下文   (边距重叠解决方案）

块级格式化上下文   (边距重叠解决方案）

`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。

`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用`BFC`呢，`BFC`可以看做是一个`CSS`元素属性

> #### BFC的规则

1. 垂直方向的距离由margin决定， 属于同一个`BFC`的两个相邻的标签外边距会发生重叠。（给其中一个元素增加一个父级，然后让他的父级触发BFC）
2. BFC的区域不会与浮动元素的box重叠(浮动元素不会覆盖到触发 BFC 元素上)。清除浮动布局，阻止同级元素被浮动元素覆盖。（非浮动元素触发了BFC,阻止元素被浮动元素覆盖原理）
3. BFC在页面上是独立的容器，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。（父级触发了BFC）
4. 计算BFC高度的时候，浮动元素也会参与计算，防止使用float脱离文档流，高度塌陷。（父级触发了BFC）

> #### BFC触发

1. float的值不是none。
2. position的值不是static或者relative。绝对定位元素（元素的 `position` 为 `absolute` 或 `fixed`）
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex。
4. overflow的值不是visible。(hidden、scroll、auto、inherit)

> #### BFC解决了什么问题

1. 使用float脱离文档流，高度塌陷

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

2. Margin边距重叠

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
### 标准模型，IE模型（替代盒子模型）的区别 (CSS盒模型)

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
### Flex
#### flex:1
- flex-grow（扩展量）
    - 代表含义是对额外空间的占据量，所谓额外空间就是这一行多余的空间，有多余的空间这一属性才有用。默认值是0，意思就是即使有多余空间，它也不要
- flex-shrink（收缩量）
    - 这个属性只有在没有额外空间时起作用，意思是没有额外空间时，成员贡献出空间的大小。默认值为1，如果为0意思是不贡献空间，也就是说即使空间不足，成员大小也不发生改变。
- flex-basis
    - 表示在分配额外空间之前，成员占据的空间，默认值为auto，意思就是你本来占多少就是多少。但也可以自己设置长度(px)。这个值的效果就是确定在释放和分配空间的时候，你的初值是多少。

### 水平垂直居中
#### 定宽高
- 绝对定位和负magin值
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
           background-color:aqua;
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
</head>
<body>
   <div class="box1">
       <div class="box2"></div>
   </div>
</body>
```
- flex布局
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
- grid布局
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
    display: inline-block;// 可以换成margin: auto;
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
- flex布局
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
- writing-mode属性布局(不是很了解)


#### 内联元素居中布局
- 水平居中
    - 行内元素可设置：text-align: center;
    - flex布局设置父元素：display: flex; justify-content: center;
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
    - position: absolute设置left、top、margin-left、margin-to(定高)；
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
    text-overflow: ellipsis
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
### rem、em、vw、wh 的值各是什么意思
- rem: 根据根元素(即 html)的 font-size
- em: 根据「自身元素」的 font-size
- vw: viewport width
- vh: viewport height


vw vh是固定的百分比，这样在小屏上东西太小，大屏上东西太大。就算配合媒体查询，你每个地方都写媒体查询太累了。

而rem是根据html字体大小动态变化的一个单位，意味着只需要给html字体大小写一份媒体查询，然后其他使用rem的地方都可以调整为合适的大小。


### 伪类与伪元素
- 伪类
    - 伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover 来描述这个元素的状态。虽然它和普通的 css 类相似，可以为已有的元素添加样式，但是它只有处于 dom 树无法描述的状态下才能为元素添加样式，所以将其称为伪类。
    - 双冒号 (::) 表示伪元素
- 伪元素
    - 伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过:before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
    - 单冒号 (:)表示伪类
### CSS选择器的优先级
第一优先级：!important会覆盖页面内任何位置的元素样式
1.内联样式，如style="color: green"，权值为1000
2.ID选择器，如#app，权值为0100
3.类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为0010
4.标签、伪元素选择器，如div::first-line，权值为0001
5.通配符、子类选择器、兄弟选择器，如*, >, +，权值为0000
6.继承的样式没有权值

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

### CSS标签meta

### rpx和px的联系和区别以及计算方法
？？？？？？？？



## JS

### 手写函数（前面有很多）

### 变量提升(函数提升)
- 所谓的变量提升（变量提升），是指在JS代码执行中， JavaScript引擎（V8）把变量的声明部分和函数的声明部分提升到代码开头的行为，变量提升后，会给变量设置默认值undefined，给函数赋值函数体。
- 在JS的变量提升中，提升的只是变量的声明，所以对于var a = 1，一般把它拆分成var a 和 a = 1。只提升var a，a = 1不变。
- 有多个同名变量声明时，函数声明会覆盖其他的声明。如果有多个同名函数声明，则是由最后的一个函数声明覆盖之前所有的声明。


### 数据类型
- Javascript 中的数据类型包括原始类型和引用类型。其中原始类型包括 null、undefined、boolean、string、symbol、bigInt、number。
    - 基本类型的访问是按值访问的，就是说你可以操作保存在变量中的实际的值s。
    - 基本类型的变量是存放在栈区的（栈区指内存里的栈内存）
    - 通过值复制的方式赋值和传递值。
    - 值类型的数据是不可变的，在内存中占有固定大小的空间，它们都会被存储在栈（stack）中。
-  引用类型指的是 Object
    -  而引用类型则是通过复制指针，实现复制，但指针指向的是同一个对象，所以改变其中一个两个 都改变；
    -  它们总是通过引用复制的方式赋值和传递值。
    -  引用类型的数据大小不固定，所以把它们的值存在堆（Heap）中，但还是会把它们在堆中的内存地址存在栈中。在查询引用类型数据时，先从栈中读取所持有的数据在堆中的内存地址，然后根据地址找到实际的数据。

### 为什么会有栈内存和堆内存？
与gc（垃圾回收机制）有关。为了使程序运行时占用的内存最小。

当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会被逐个放入这块栈内存里，当方法执行结束，这个方法的内存栈也会被销毁。因此，所有在方法中定义的变量都存放在栈内存中。

当在程序创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法调用结束后，只要这个对象还可能被另一个变量所引用，则这个对象就不会被销毁；只有当一个对象没有被任何变量引用它时，系统的垃圾回收机制才会回收它。


### 判断数据类型的方法
typeof可以检测变量的数据类型，返回如下6种字符串number、string、boolean、object、undefined、function。
```js
typeof undefined; // "undefined"
typeof false; // "boolean"
typeof 1; // "number"
typeof '1'; // "string"
typeof Symbol(); // "Symbol"
typeof 123n // 'bigint'
typeof function a(){} //"function"


typeof null // 'object'
typeof {}; // "object" 
typeof []; // "object" 
typeof new Date(); // "object"
```
优点：能够快速区分基本数据类型。
缺点：不能将Object、Array和Null区分，都返回object。



一般通过 `Object.prototype.toString(...)`来查看。每种引用类型都会直接或者间接继承自Object类型，因此它们都包含toString()函数。不同数据类型的toString()类型返回值也不一样，所以通过toString()函数可以准确判断值的类型。
```js
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call('hi') // "[object String]"
Object.prototype.toString.call({a:'hi'}) // "[object Object]"
Object.prototype.toString.call([1,'a']) // "[object Array]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(() => {}) // "[object Function]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"

优点：精准判断数据类型。
缺点：写法繁琐不容易记，推荐进行封装后使用。
```


`instanceof` 运算符也常常用来判断对象类型。用法: 左边的运算数是一个`object`，右边运算数是对象类的名字或者构造函数; 返回`true`或`false`。
```js
[] instanceof Array; // true
[] instanceof Object; // true
[] instanceof RegExp; // false
new Date instanceof Date; // true
```
`instanceof` 的内部机制是：检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。
- instanceof，用于检测某个对象的原型链是否包含某个构造函数的 prototype 属性。
- instanceof 适用于检测对象，它是基于原型链运作的。
- instanceof 除了适用于任何 object 的类型检查之外，也可以用来检测内置对象，比如：Array、RegExp、Object、Function
- instanceof 对基本数据类型检测不起作用，主要是因为基本数据类型没有原型链。

优点：能够区分Array、Object和Function，适合用于判断自定义的类实例对象。
缺点：Number，Boolean，String基本数据类型不能判断。
    - 判断某个`实例`是否属于某种类型
    ```js
        let person = function () {
        }
        let nicole = new person()
        nicole instanceof person // true
        
        function Foo() {
        }
        
        Object instanceof Object // true
        Function instanceof Function // true
        Function instanceof Object // true
        Foo instanceof Foo // false
        Foo instanceof Object // true
        Foo instanceof Function // true
    ```
    - 也可以判断一个实例是否是其父类型或者祖先类型的实例。
    ```js
        function Car(make, model, year) {
          this.make = make;
          this.model = model;
          this.year = year;
        }
        const auto = new Car('Honda', 'Accord', 1998);
        
        console.log(auto instanceof Car);
        // expected output: true
        
        console.log(auto instanceof Object);
        // expected output: true
    ```
    
### 判断一个对象是不是可迭代的,判断一个对象是否为空
- 判断一个对象是不是可迭代的
    - **每个可迭代对象必然包含一个 [Symbol.iterator]  方法属性**
    - 每个可迭代对象都有一个 [Symbol.iterator]  方法属性，没有的话，肯定不是可迭代对象。

- 判断一个对象是否为空
    ```js
        function goodEmptyCheck(value) {
            return value && Object.keys(value).length === 0 && value.constructor === Object;
        }
        
        
        
        
         let isEmpty = (obj) => (JSON.stringify(obj) === '{}') ? true : false
    ```

### for in 和 for of 的区别
- for in
    - for...in语句以**任意顺序**遍历一个对象的除Symbol以外的可枚举属性。
    - for ... in更适合遍历对象，不建议与数组一起使用，因为遍历顺序有可能不是按照实际数组的索引顺序。

- for-of
    - for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments对象等 ）上创建一个迭代循环，并为每个不同属性的值执行语句。
    - 与forEach()不同的是，它可以正确响应break、continue和return语句。


### 闭包的应用场景
- 闭包是指有权访问另一个函数作用域中的变量的函数
- 延长局部变量的生命周期，在某些情况下，希望某些函数内的变量在函数执行后不被销毁
- 会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏

使用场景
- 模仿块级作用域
```js
for(var i = 0; i < 5; i++) {
    (function(j){
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    })(i)
}
```
- setTimeout 传参
原生的setTimeout传递的第一个函数不能带参数
```js
//原生的setTimeout传递的第一个函数不能带参数
setTimeout(function(param){
    alert(param)
},1000)


//通过闭包可以实现传参效果
function myfunc(param){
    return function(){
        alert(param)
    }
}
var f1 = myfunc(1);
setTimeout(f1,1000);
```
- IIFE 自执行函数
```js
  var arr = [];
    for (var i=0;i<3;i++){
      //使用IIFE
      (function (i) {
        arr[i] = function () {
          return i;
        };
      })(i);
    }
    console.log(arr[0]()) // 0
    console.log(arr[1]()) // 1
    console.log(arr[2]()) // 2
```
- 函数防抖、节流
```js
- 输入框连续输入进行AJAX验证时
- 浏览器窗口缩放时，resize事件。
//防抖
function debounce(handle, delay) {
    var timer = null;
    return function () {
        var _self = this, _args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handle.apply(_self, _args)
        }, delay)
    }
}


- DOM元素拖拽
- Canvas画笔功能
//节流
function throttle(handler, wait) {
    var lastTime = 0;
    return function (e) {
        var nowTime = new Date().getTime();
        if (nowTime - lastTime > wait) {
            handler.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}
```
- 柯里化
当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）然后返回一个新的函数接收剩余的参数，返回结果。
    - 柯里化可以我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的函数，这是一种对函数参数的缓存。
    - 让函数变得更灵活，颗粒度更小。
    - 可以把多元函数转换为一元函数，可以组合使用函数产生强大的功能。
    - 参数对复用。
    - 提高实用性。
    - 延迟执行 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。柯里化的函数可以延迟接收参数，就是比如一个函数需要接收的参数是两个，执行的时候必须接收两个参数，否则没法执行。但是柯里化后的函数，可以先接收一个参数。

```js
function curry(fn){
    return function curriedFn(...args){
        if(fn.arguments.length > args.length){
            // 递归调用，直到参数个数相等
            return curriedFn(...args.concat(Array.from(arguments)))
        }
        // 实参和形参个数相同，调用fn，返回结果
        return fn(...args);
    }
}
````
- 函数组合
```js
const compose = (...fns) => {
  return fns.reduce((acc,cur) => {
    return (...args) => {
      return acc(cur(...args))
    }
  })
}
```
### var、let 和 const 有什么区别
1. var
在ES5中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量。
注意：顶层对象，在浏览器环境指的是`window`对象，在`Node`指的是`global`对象。
- 在变量未赋值时，变量undefined（为使用声明变量时也为undefined）
- 作用域——var的作用域为方法作用域；只要在方法内定义了，整个方法内的定义变量后的代码都可以使用
```js
var a = 10;
console.log(window.a) // 10
```
使用`var`声明的变量存在变量提升情况。
```js
console.log(a) // undefined
var a = 20
```
在编译阶段，编译器会将其变成以下执行。
```js
var a
console.log(a)  // undefined
a = 20
```
使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明。
```js
var a = 20 
var a = 30
console.log(a) // 30
```
在函数中使用使用`var`声明变量时候，该变量是局部的。
```js
var a = 20
function change(){
    var a = 30
}
change()
console.log(a) // 20 
```
而如果在函数内不使用`var`，该变量是全局的。
```js
var a = 20
function change(){
   a = 30
}
change()
console.log(a) // 30 
```
2. let
`let`是`ES6`新增的命令，用来声明变量。
用法类似于`var`，但是所声明的变量，只在`let`命令所在的`代码块内`有效。
- 在变量为声明前直接使用会报错
- 作用域——let为块作用域——通常let比var 范围要小
- let禁止重复声明变量，否则会报错；var可以重复声明
```js
{
    let a = 20
}
console.log(a) // ReferenceError: a is not defined.
```
不存在变量提升。
这表示在声明它之前，变量a是不存在的，这时如果用到它，就会抛出一个错误
```js
console.log(a) // ReferenceError: a is not defined.
let a = 2
```
只要块级作用域内存在`let`命令，这个区域就不再受外部影响。
使用`let`声明变量前，该变量都不可用，也就是大家常说的`“暂时性死区”`
```js
var a = 123
if (true) {
    // 只要块级作用域内存在`let`命令，这个区域就不再受外部影响。
    a = 'abc' // ReferenceError
    let a;
}
```
最后，`let`不允许在相同作用域中重复声明。
```js
let a = 20
let a = 30
// Uncaught SyntaxError: Identifier 'a' has already been declared


// 注意的是相同作用域，下面这种情况是不会报错的
let a = 20
{
    let a = 30
}

// 因此，我们不能在函数内部重新声明参数
function func(arg) {
  let arg;
}
func()
// Uncaught SyntaxError: Identifier 'arg' has already been declared
```
3. const
`const`声明一个只读的常量，一旦声明，常量的值就不能改变。
这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值。
 - const为常量声明方式；声明变量时必须初始化，在后面出现的代码中不能再修改该常量的值
​ - const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动
```js
const a = 1
a = 3
// TypeError: Assignment to constant variable.

const a;
// SyntaxError: Missing initializer in const declaration
```
如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错。
```js
var a = 20
let b = 20
const a = 30
const b = 30
// 都会报错
```
`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量。
对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变。
```js
const foo = {};
// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123
// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```
其它情况，`const`与`let`一致。
4. 区别
`var`、`let`、`const`三者区别可以围绕下面六点展开：
- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
- 使用
变量提升
- `var`声明的变量存在变量提升，即变量可以在声明之前调用，值为`undefined`。
- `let`和`const`不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错。
```js
// var
console.log(a)  // undefined
var a = 10

// let 
console.log(b)  // Cannot access 'b' before initialization
let b = 10

// const
console.log(c)  // Cannot access 'c' before initialization
const c = 10
```
暂时性死区
- `var`不存在暂时性死区。
- `let`和`const`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
```js
// var
var a = 123
if (true) {
    // 只要块级作用域内存在`let`命令，这个区域就不再受外部影响。
    a = 'abc' // ReferenceError
    let a;
}
```
块级作用域
- `var`不存在块级作用域。
- `let`和`const`存在块级作用域。
```js
// var
{
    var a = 20
}
console.log(a)  // 20

// let
{
    let b = 20
}
console.log(b)  // Uncaught ReferenceError: b is not defined

// const
{
    const c = 20
}
console.log(c)  // Uncaught ReferenceError: c is not defined
```
重复声明
`var`允许重复声明变量。
`let`和`const`在同一作用域不允许重复声明变量。
```js
// var
var a = 10
var a = 20 // 20

// let
let b = 10
let b = 20 // Identifier 'b' has already been declared

// const
const c = 10
const c = 20 // Identifier 'c' has already been declared
```
修改声明的变量
`var`和`let`可以。
`const`声明一个只读的常量。一旦声明，常量的值就不能改变。
```js
// var
var a = 10
a = 20
console.log(a)  // 20

//let
let b = 10
b = 20
console.log(b)  // 20

// const
const c = 10
c = 20
console.log(c) // Uncaught TypeError: Assignment to constant variable
```    
    
### 深浅拷贝
- 浅拷贝
    - 如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
```js
//方法 1
Object.assign(target, ...sources)  // 缺陷：没能处理数组，不够通用


//方法 2
var simpleClone = function (target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
       if (obj.hasOwnProperty(key)) {
            cloneTarget[key] = target[key];
        }
    }
    return cloneTarget;
  } else {
    return target;
  }
};
```

```
实际上对于数组来说， 只要不修改原数组， 重新返回一个新数组就可以实现浅拷贝，比如说map、filter、reduce等方法
```

- 深拷贝
将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。

```js
//方法 1 JSON.parse(JSON.stringify())
let student = {
  name: "小明",
  score: {
    english: 88,
    chinese: 77,
    math: 99,
  },
};

let deepStudent = JSON.parse(JSON.stringify(student));
// JSON.stringify 对于拷贝其他引用类型、拷贝函数、循环引用等情况无法很好处理，只能运用于简单 JSON。
// 会忽略 undefined、symbol、不能序列化函数、不能解决循环引用的对象、不能正确处理new Date()、不能处理正则、不能处理new Error()


// 方法2
var deepClone = function (target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
            // 递归调用！！！
           cloneTarget[key] = deepClone(target[key]);
       }
    }
    return cloneTarget;
  } else {
    return target;
  }
};


// 附加考虑循环引用,弱引用对象，垃圾回收机制会自动帮我们回收。
var deepClone = function (target, map = new WeakMap()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};
```

### `.new`操作符和`new`一个对象发生了什么?
1.创建一个空对象。
2.该对象的隐式原型指向该函数的原型。
3.这个新对象会绑定到函数调用的this。
4.如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

```js
function myNew(Con, ...args) {
  // 创建一个空的对象
  let obj = {};
  // 隐式原型链接到该函数的原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Con.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  let ret = Con.call(obj, ...args);
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
}
```

### 类数组对象转换为数组的方法
- ES6语法 Array.from(arr)
```js
//将hdList用Array.from（）方法转换为数组，并用list变量接收
let list = Array.from(hdList);
```
- 用Array.prototype.slice.call（elems）方法转化为数组 或 [].slice.call（elems）
```js
let list = Array.prototype.slice.call(hdList);
```
- 用[ ...elems ]方法转化为数组
```js
let list = [...hdList];//用[ ...elems ]方法转化为数组并用list接收
```
- 用Array.prototype.forEach.call(elem,callback)方法
```js
//直接对hdList集合进行循环或者map等
Array.prototype.forEach.call（hdList,function(){
//...
}）
Array.prototype.map.call（hdList,function(){
//...
}）
```

### ES6
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210921221425.png)

### commonJS 和 es6 模块化的区别
1. `ES6 Module`静态引入，编译时引入
2. `Commonjs`动态引入，执行时引入
3. 只有`ES6 Module`才能静态分析，实现`Tree-Shaking` （rollup）
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

- CommonJS 的特性如下：
    - CommonJS 模块由 JS 运行时实现。
    - CommonJs 是单个值导出，本质上导出的就是 exports 属性。
    - CommonJS 是可以动态加载的，对每一个加载都存在缓存，可以有效的解决循环引用问题。
    - CommonJS 模块同步加载并执行模块文件。

- Es module 的特性如下：
    - ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。
    - ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。
    - ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。
    - ES6 模块提前加载并执行模块文件，
    - ES6 Module 导入模块在严格模式下。
    - ES6 Module 的特性可以很容易实现 Tree Shaking 和 Code Splitting。

### 0.1+0.2 !== 0.3
```js
0.1 + 0.2 
0.30000000000000004
```
对小数点以后的数乘以2，取结果的整数部分（不是1就是0），然后再用小数部分再乘以2，再取结果的整数部分……以此类推，直到小数部分为0或者位数已经够了就OK了。然后把取的整数部分按先后次序排列
对浮点数进行运算的过程中，需要将十进制转换成二进制。

### 发布订阅模式是怎么样的：nodejs 中 EventEmitter 类，主要方法有 on，emit，once，off
```js
class EventEmitter {
  constructor(defaultMaxListeners = 50) {
    this.defaultMaxListeners = defaultMaxListeners;
    this.listener = {};
  }

  // 订阅
  on(eventName, fn) {
    if (!this.listener[eventName]) {
      this.listener[eventName] = [];
    }
    if (this.listener[eventName].length >= this.defaultMaxListeners) {
      throw `${eventName}超出最大监听${this.defaultMaxListeners}个数限制`;
    }
    this.listener[eventName].push(fn);
  }

  // 取消
  off(eventName, fn) {
    let callBacks = this.listener[eventName];
    if (!callBacks) {
      return false;
    }
    if (!fn) {
      callBacks = [];
    } else {
      let cb;
      for (let i = 0; i < callBacks.length; i++) {
        cb = callBacks[i];
        if (cb === fn || cb.fn === fn) {
          callBacks.splice(i, 1);
          i--;
        }
      }
    }
  }

  // 监听一次
  once(eventName, fn) {
    const on = (...args) => {
      this.off(eventName, on);
      fn.apply(this, ...args);
    };
    // 取消订阅使用
    on.fn = fn;
    this.on(eventName, on);
  }

  // 发布
  emit(eventName, ...args) {
    const callBackFn = this.listener[eventName] || [];
    if (callBackFn.length === 0) {
      throw `${eventName}不存在`;
    }
    callBackFn.forEach((fn) => {
      fn(args);
    });
  }
}

const $event = new EventEmitter();

function fn1(...args) {
  console.log("fn111111", ...args);
}
function fn2(...args) {
  console.log("fn2", ...args);
}

$event.once("fn1", fn2);

// $event.on("fn1", fn1);
// $event.on("fn1", fn1);
// $event.on("fn1", fn2);

// $event.on("fn1", fn1);
// // event.off("fn1", fn1);
// $event.on("fn2", fn1);
// $event.on("fn3", fn1);
// $event.on("fn4", fn1);

$event.emit("fn1", "fn1参数2", "参数3", "参数4");
// $event.emit("fn1", "fn2 fn2");

```

### JS 实现异步的 5 种方式
- 回调函数（Callback）
    - 回调函数有一个致命的弱点，就是容易写出回调地狱（Callback hell）。
    - 回调函数的优点是简单、容易理解和实现，缺点是不利于代码的阅读和维护，各个部分之间高度耦合，使得程序结构混乱、流程难以追踪
    - 此外它不能使用 try catch 捕获错误，不能直接 return。
```js
ajax(url, () => {
    // 处理逻辑
    ajax(url1, () => {
        // 处理逻辑
        ajax(url2, () => {
            // 处理逻辑
        })
    })
})
```

- 发布订阅
    - 存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。
    - 有家外卖，你可以点外卖，这就是订阅，当你的外卖做好了，就会有人给你打电话叫你去取外卖，这就是发布
```js
class EventEmitter {
  constructor(defaultMaxListeners = 50) {
    this.defaultMaxListeners = defaultMaxListeners;
    this.listener = {};
  }

  // 订阅
  on(eventName, fn) {
    if (!this.listener[eventName]) {
      this.listener[eventName] = [];
    }
    if (this.listener[eventName].length >= this.defaultMaxListeners) {
      throw `${eventName}超出最大监听${this.defaultMaxListeners}个数限制`;
    }
    this.listener[eventName].push(fn);
  }

  // 取消
  off(eventName, fn) {
    let callBacks = this.listener[eventName];
    if (!callBacks) {
      return false;
    }
    if (!fn) {
      callBacks = [];
    } else {
      let cb;
      for (let i = 0; i < callBacks.length; i++) {
        cb = callBacks[i];
        if (cb === fn || cb.fn === fn) {
          callBacks.splice(i, 1);
          i--;
        }
      }
    }
  }

  // 监听一次
  once(eventName, fn) {
    const on = (...args) => {
      this.off(eventName, on);
      fn.apply(this, ...args);
    };
    // 取消订阅使用
    on.fn = fn;
    this.on(eventName, on);
  }

  // 发布
  emit(eventName, ...args) {
    const callBackFn = this.listener[eventName] || [];
    if (callBackFn.length === 0) {
      throw `${eventName}不存在`;
    }
    callBackFn.forEach((fn) => {
      fn(args);
    });
  }
}

const $event = new EventEmitter();

function fn1(...args) {
  console.log("fn111111", ...args);
}
function fn2(...args) {
  console.log("fn2", ...args);
}

$event.once("fn1", fn2);

// $event.on("fn1", fn1);
// $event.on("fn1", fn1);
// $event.on("fn1", fn2);

// $event.on("fn1", fn1);
// // event.off("fn1", fn1);
// $event.on("fn2", fn1);
// $event.on("fn3", fn1);
// $event.on("fn4", fn1);

$event.emit("fn1", "fn1参数2", "参数3", "参数4");
// $event.emit("fn1", "fn2 fn2");

```
- Promise对象
    - Promise对象是异步编程的一种解决方案，比传统的回调函数和事件更合理更强大。
    - Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件的结果，相比回调函数，Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。 
    - Promise对象有三种状态:pending(进行中)，fulfilled(已成功)，rejected(已失败)
    - 一旦状态改变，就不再变化，任何时候都可以得到这个结果。
```js
let p = new Promise((resolve, reject) => {
  reject('reject')
  resolve('success')//无效代码不会执行
})
p.then(
  value => {
    console.log(value)
  },
  reason => {
    console.log(reason)//reject
  }
)
```
    - promise的链式调用
        - 每次调用返回的都是一个新的Promise实例(这就是then可用链式调用的原因)
        - 如果then中返回的是一个结果的话会把这个结果传递下一次then中的成功回调
        - 如果then中出现异常,会走下一个then的失败回调
        - 在 then中使用了return，那么 return 的值会被Promise.resolve() 包装(见例1，2)
        - then中可以不传递参数，如果不传递会透到下一个then中(见例3)
        - catch 会捕获到没有捕获的异常
```js
  // 例1
  Promise.resolve(1)
  .then(res => {
    console.log(res)
    return 2 //包装成 Promise.resolve(2)
  })
  .catch(err => 3)
  .then(res => console.log(res))
```

- 生成器Generators/ yield
    - Generator 函数是 ES6 提供的一种异步编程解决方案
    - Generator 函数是一个状态机，封装了多个内部状态。
    - Generator 函数除了状态机，还是一个遍历器对象生成函数。
    - 可暂停函数, yield可暂停，next方法可启动，每次返回的是yield后的表达式结果。
    - yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
```js
function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}
```

- async/await
    - async/await 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。
    - async/await是基于Promise实现的，它不能用于普通的回调函数。
    - async/await与Promise一样，是非阻塞的。
    - async/await使得异步代码看起来像同步代码，这正是它的魔力所在。
    - 一个函数如果加上 async ，那么该函数就会返回一个 Promise
    - Async/Await并发请求 如果请求两个文件，毫无关系，可以通过并发请求
    - 如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低，代码没有依赖性的话，完全可以使用 Promise.all 的方式。
```js
let fs = require('fs')
function read(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}
function readAll() {
  read1()
  read2()//这个函数同步执行
}
async function read1() {
  let r = await read('1.txt','utf8')
  console.log(r)
}
async function read2() {
  let r = await read('2.txt','utf8')
  console.log(r)
}
readAll() // 2.txt 3.txt
```

### 介绍一下函数的作用，纯函数是什么，函数的副作用是什么?
- 函数是"第一等公民"
  - 函数可以像其他数据类型一样操作，如赋值给其他变量、作为函数的入参、作为函数的返回值。

- 纯函数
    - 如果函数的调用参数相同, 则永远返回相同的结果. 它不依赖于程序执行期间函数   外部任何状态或数据的变化,只依赖于传入的参数。
    - 纯函数不会产生任何可观察的副作用, 例如: 网络请求, 输入/输出设备, 或数据突变(mutation)等。
    - **无状态**：函数的输出仅取决于输入，而不依赖外部状态；
    - **无副作用**：不会造成超出其作用域的变化，即不修改 函数参数 或 全局变量 等。函数依赖外部状态就无法保证相同的输出，就会带来副作用。
    - **可缓存性**正是因为函数式声明的无状态特点，即：**相同输入总能得到相同的输出**。所以我们可以提前缓存函数的执行结果，实现更多功能。例如：优化斐波拉契数列的递归解法。
    - **可移植性/自文档化**纯函数的依赖很明确，更易于观察和理解，配合类型签名可以使程序更加简单易读。
    - **可测试性**纯函数让测试更加简单，只需简单地给函数一个输入，然后断言输出就可以了。
    - **并行处理**在多线程环境下并行操作共享的内存数据很可能会出现意外情况。纯函数（封闭的环境）不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数（Web Worker可以开启新的线程)。

- 函数副作用
    - 函数的副作用是指**在调用函数时，除了返回函数值外还产生了额外的影响**。
    - 更改全局变量
    - 处理用户输入
    - 屏幕打印或打印log日志
    - DOM查询以及浏览器cookie、localstorage查询
    - 发送http请求
    - 抛出异常，未被当前函数捕获

### 原型链，为什么要这么设计
- 在定义函数时，会执行两个动作：一个动作是创建函数对象，这是因为函数是对象；另一个动作是创建一个完全独立的原型对象；定义的函数的原型属性将指向该原型对象。
- 那么 prototype 就是调用 `构造函数` 而创建的那个对象`实例`的`的原型对象`。使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。
- 最主要的就是节省内存，如果属性和方法定义在原型上，那么所有的实例对象就能共享。


### __proto__和prototype的区别和关系?
- js 每个对象都会拥有`prototype`属性的。这个属性指向一个对象，这个对象的所有属性和方法都会被构造函数的实例所继承。
- 只有对象（任何对象）只有`__proto__`去找它的原型对象。( 实例都包含一个指向构造函数的`原型对象`的内部指针。)。
- 实例都会有一个`constructor`属性去指向它的构造函数。
- 在原型对象中使用`.constructor`（构造器）属性来区分，我这个原型对象被那个构造函数引用了。所有原型对象都会自动获得一个constructor（构造函数）属性，这个属性是一个指向prototype属性所在函数的指针。

```js
    var o = {};
    o.__proto__ === Object.prototype  //true
    o instanceof Object      //true
    o instanceof Function    //false
    
    var o = Object();
    o.__proto__ === Object.prototype  //true
    o instanceof Object      //true
    o instanceof Function    //false
    
    var o = new Object();
    o.__proto__ === Object.prototype  //true
    o instanceof Object      //true
    o instanceof Function    //false
    
    function Fn(){}
    var fn = new Fn();
    fn.__proto__ === Fn.prototype;
    
    fn instanceof Fn        //true
    fn instanceof Object    //true
    fn instanceof Function  //false


   Function.__proto__ === Function.prototype  //true
   Object.__proto__ === Function.prototype  //true
   
   Function.prototype.__proto__ === Object.prototype
   Object.prototype.__proto__ === null，是原型链有终点。
   
   function fn(){}
   fn.__proto__ === Function.prototype  //true
   fn.prototype.__proto__ === Object.prototype  //true
   fn.prototype.constructor === fn  //true
```
```js
函数含有__proto__与prototype属性，__proto__指向Function.prototype,prototype指向Object.prototype，
```



_proto_是服务于函数对象的，prototype是服务于构造函数的实例化对象的
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922072448.png)
```js
console.log(User.__proto__ === Object);//false
console.log(User.__proto__ === Object.__proto__);//true
console.log(User.prototype.__proto__ === User.__proto__.__proto__);//true
console.log(User.prototype.__proto__ === Object.prototype);//true
  
```
_proto_属性的作用主要是用来确定当前对象的继承者，在当前对象找不到指定的属性和对象时，会去proto属性指定的对象中寻找，之后依次类推直到找完所有继承或找到要找的属性为止。

prototype 中定义的属性和方法都是留给自己的 “后代” 用的。

JS中的 proto 入场了，它存在于普通对象和函数对象中，它的作用就是引用父类的 prototype 对象。


### 动态创建script标签并插入到页面上，说执行时机
因为浏览器对动态插入的script标签，默认设置的是async。
async作用的js脚本时没有顺序的，异步加载，加载后执行。
所以还有个defer，defer是异步加载，按script在文档中的顺序执行。
既然问题出在async上，那么创建script标签时把他设置为false就好。

### onclick和addEventListener的区别
1.onclick事件在同一时间只能指向唯一对象（重复绑定事件只会使最后绑定的事件响应） 2.addEventListener给一个事件注册多个listener（重复绑定事件会依次从上到下响应）


addEventListener第一个参数事件类型，第二个类型即绑定的具体事件，第三个参数默认是false，false是冒泡，true时是捕获；
事件触发的顺序为先捕获再冒泡，捕获时从dom树最上层开始响应，冒泡时从dom树最底层开始响应；
阻止冒泡和捕获用e.stopPropagation(),event.cancelBubble; // IE 6 7 8 的停止冒泡; 
阻止默认事件用e.preventDefaule(),e.returnValue; 是一个属性，适用于 IE 6 7 8;

### 浏览器的事件冒泡及事件捕获？怎么取消事件冒泡？事件代理？
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922093720.png)
- 包括三个阶段：
    - 事件捕获阶段
        - 事件捕获：事件从最不精确的对象(document 对象)开始触发，然后到最精确
        - 事件从Document节点自上而下向目标节点传播的阶段；
    - 处于目标阶段
        - 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。
    - 事件冒泡阶段
        - 事件冒泡：事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发，当一个元素接收到事件的时候会把他接收到的事件传给自己的父级，一直到window 。
        - 事件从目标节点自下而上向Document节点传播的阶段。

- 注意:
    - JS代码只能执行捕获或者冒泡其中的一个阶段
    - onclick 和 attachEvent 只能得到冒泡阶段
    - addEventListener(type, listener[, useCapture]) 第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认是false），表示在事件冒泡阶段调用事件处理程序
    - 有的事件是没有冒泡的，如：onblur、onfocus、onmouseenter、onmouseleave 等

阻止冒泡和捕获用e.stopPropagation(),event.cancelBubble; // IE 6 7 8 的停止冒泡; 
阻止默认事件用e.preventDefaule(),e.returnValue; 是一个属性，适用于 IE 6 7 8;


- 事件委托的原理（重）
    - 事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。(给 ul 注册点击事件，然后利用事件对象的 target 来找到当前点击的 li ，然后事件冒泡到 ul 上， ul 有注册事件，就会触发事件监听器。)
    - 事件委托的作用
        - 只操作了一次 DOM ，提高了程序的性能。
        - 在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的操作dom,那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长，这也就是为什么要减少dom操作的原因。每一个事件处理函数，都是一个对象，那么多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到js程序里面，只对它的父级(如果只有一个父级)这一个对象进行操作，与dom的操作就只需要交互一次，这样就能大大的减少与dom的交互次数，提高性能；
### Promise（写的不好）
- 回调地狱
    - 代码臃肿
    - 可读性差。
    - 耦合度过高，可维护性差。代码复用性差。
    - 容易滋生 bug。
    - 只能在回调里处理异常。

Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。
```js
new Promise(请求1)
    .then(请求2(请求结果1))
    .then(请求3(请求结果2))
    .then(请求4(请求结果3))
    .then(请求5(请求结果4))
    .catch(处理异常(异常信息))
```
Promise 的写法更为直观，并且能够在外层捕获异步函数的异常信息。

### 尾递归调用及尾调用优化

#### 尾调用
当一个函数执行时的最后一个步骤是返回另一个函数的调用，这就叫做尾调用。 
```js
// 尾调用正确示范1.0
function f(x) {
  return g(x);
}

// 尾调用正确示范2.0
function f(x) {
  if (x > 0) {
    return m(x);
  }
  return n(x);
}
```
- 优点
    - 由于尾调用是函数的最后一条执行语句，无需再保留外层函数的栈帧来存储它的局部变量以及调用前地址等信息，所以栈从始至终就只保留着一个栈帧。这就是尾调用优化，节省了很大一部分的内存空间。
- 缺点
    - 但上面只是理论上的理想情况，把代码改写成尾调用的形式只是一个前提条件，栈是否真的如我们所愿从始至终只保留着一个栈桢还得取决于语言是否支持。

#### 尾调用优化
函数在调用的时候会在调用栈（call stack）中存有记录，每一条记录叫做一个调用帧（call frame），每调用一个函数，就向栈中push一条记录，函数执行结束后依次向外弹出，直到清空调用栈，参考下图：
```js
function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.trace();
}
one();
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922142313.png)
在一个函数中调用另一个函数，但是并没有通过return来结束当前函数的执行，JS引擎会认为当前的函数并没有执行完成，会在执行当前函数调用的函数，等他执行完成才会释放当前函数。

尾调用优化只在严格模式下有效。 尾调用优化后，每次 return 的内层函数的调用记录会取代外层函数的调用记录，调用栈中始终只保持了一条调用帧。

```js
“use strict”;
function one () {
    return two();
}
function two () {
    return three();
}
function three () {
    console.trace();
    return false;
}
one();
```
one函数执行时，会把one函数添加进调用栈中，one函数现在为当前帧。
在one函数中又调用了two函数，当时在调用two函数添加了return，调用栈会把one函数弹出，当前调用栈中只有一个two函数。
在two函数中又调用three函数，因为有return当前调用栈中只有three函数。
当three函数执行完成后，调用栈弹出three函数，此时调用栈当前为空。

### 尾递归
函数尾调用自身，这个形式称为尾递归。
```js
function foo() {
  return foo();
}
```
- 优点
    - 递归对于空间消耗很大，容易造成栈溢出。如果我们将其改成尾递归，那么能做到只保存1个栈帧，有效避免了栈溢出。
- 缺点
    -  语义不明显，阅读性较差

```js
'use strict';
function factorial(num, num1 = 0, num2 = 1) {
  if (num === 0) {
    return num1;
  }
  console.trace();
  return factorial(num - 1, num2, num1 + num2);
}
```


### 事件循环（Event Loop）---- （JavaScript的运行机制）
#### 线程和进程的区别，JS是单线程的吗？
进程是资源分配的最小单位，线程是CPU调度的最小单位
- 进程
    - 代表CPU所能处理的单个任务。任一时刻，CPU总是运行一个进程，其他进程处于非运行状态。
- 线程
    - 一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。
    - 一个进程可以包括多个线程。
    - 一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。
    - "互斥锁"（Mutual exclusion，缩写 Mutex），防止多个线程同时读写某一块内存区域。
    - 做"信号量"（Semaphore），用来保证多个线程不会互相冲突。
- js是单线程
    - js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。 
    - 利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。
    
    
    - JS引擎线程
    - 事件触发线程
    - 定时触发器线程

    
    
- js解决异步
    - JS 实现异步时通过 **事件循环（Event Loop）**,是JS异步的解决方案。 JS实现异步的具体解决方案
        - 同步代码，直接执行
        - 异步代码先放在 `异步队列` 中
        - 待同步函数执行完毕，轮询执行异步队列 中的函数
    - JS解决异步的方案有
        - 回调函数
        - 事件监听
        - 发布-订阅
        - `Promise`
        - Generator
        - `Async/Await`


Event Loop即事件循环，是指浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922153333.png)

**Event Loop是javascript的执行机制：**
**执行同步任务** -> **执行异步任务** -> **先执行微任务** -> **后执行宏任务**


**同步任务和异步任务（异步任务分为：宏任务和微任务）**
同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。

异步任务：不进入主线程，而进入**任务队列（task queue）** 只有**任务队列**通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

**宏任务和微任务**

macrotask（又称之为宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）
    - 每一个task会从头到尾将这个任务执行完毕，不会执行其它
    - 浏览器为了能够使得JS内部task与DOM任务能够有序的执行，会在一个task执行结束后，在下一个 task 执行开始前，对页面进行重新渲染

microtask（又称为微任务），可以理解是在当前 task 执行结束后立即执行的任务
    - 也就是说，在当前task任务后，下一个task之前，在渲染之前
    - 所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染
    - 也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）



|           宏任务            |            微任务             |
| :-------------------------: | :---------------------------: |
|           定时器            |    Promise（async/await）     |
|          事件绑定           | process.nexTick（Node独有的） |
|            Ajax             |        MutationObserve        |
|          回调函数           |                               |
| Node中fs可以进行异步I/O操作 |                               |

**主线程任务——>微任务——>宏任务**（如果宏任务里还有微任就继续执行宏任务里的微任务，如果宏任务中的微任务中还有宏任务就在依次进行）
**主线程任务——>微任务——>宏任务——>宏任务里的微任务——>宏任务里的微任务中的宏任务——>直到任务全部完成**


```js
console.log('1');
setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('3');
        resolve();
    }).then(function() {
        console.log('4')
    })
})
new Promise(function(resolve) {
    console.log('5');
    resolve();
}).then(function() {
    console.log('6')
})

setTimeout(function() {
    console.log('7');
    new Promise(function(resolve) {
        console.log('8');
    }).then(function() {
        console.log('9')
    })
})
console.log('10');

// 1 5 10 6 2 3 4 7 8

第一轮：
首先是进入主线程，遇到 console.log(‘1’)，打印1
然后遇到 promise 中的 console.log(‘5’); 直接执行，打印5
再遇到 console.log(‘10’)，打印10

第二轮：
然后运行微任务，我们看到这里面的微任务有 promise，依次执行。
首先promise完成态，走到 then，遇到 console.log(‘6’)，打印6

第三轮：
然后运行宏任务，我们看到这里面的微任务有 setTimeout，依次执行。
遇到 console.log(‘2’)，打印2，然后发现里面还有个微任务 promise，先打印3，等完成后，走到 then，打印4
遇到第二个 setTimeout 打印7，然后发现里面还有个微任务 promise，先打印8，由于没有完成态resolve()，所以不打印9
```

执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行macrotask（宏任务），否则就一次性执行完所有微任务。
每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。


最简单的JS运行机制：
- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
- 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

### 阻塞了 JS 中的主线程会发生什么情况？
JS如果执行时间过长就会阻塞页面。

假设JS引擎正在进行巨量的计算，此时就算GUI有更新，也会被保存到队列中，等待JS引擎空闲后执行。
然后，由于巨量计算，所以JS引擎很可能很久很久后才能空闲，自然会感觉到巨卡无比。

所以，要尽量避免JS执行时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。


## HTTP
### HTTP与HTTPS有什么区别？
HTTP与HTTPS的区别， 。
HTTP：是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。

HTTPS：是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是确认网站的真实性。

#### HTTPS和HTTP的区别主要如下：
1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。　　
2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。　　
3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。　　
4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。


使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；
HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。

https 握手阶段比较`费时`，会使页面加载时间延长 50%，增加 10%~20%的耗电。
https `缓存`不如 http 高效，会增加数据开销。
SSL 证书也需要钱，功能越强大的`证书费`用越高。
SSL 证书需要绑定 `IP`，不能再同一个 ip 上绑定多个域名，ipv4 资源支持不了这种消耗


### HTTP1.0、HTTP1.1、http2.0 的区别
#### HTTP1.0和HTTP1.1的区别
- 长连接：HTTP1.1支持长连接和请求的流水线处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启长连接keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。
- 节约带宽： HTTP1.0中存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能。HTTP1.1支持只发送header信息（不带任何body信息），如果服务器认为客户端有权限请求服务器，则返回100，客户端接收到100才开始把请求body发送到服务器；如果返回401，客户端就可以不用发送请求body了节约了带宽。
- HOST域：  在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname），HTTP1.0没有host域。随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都支持host域，且请求消息中如果没有host域会报告一个错误（400 Bad Request）。
- 缓存处理：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。
- 错误通知的管理：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。

#### HTTP1.1和HTTP2.0的区别
- 多路复用：HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。HTTP1.1也可以多建立几个TCP连接，来支持处理更多并发的请求，但是创建TCP连接本身也是有开销的。
- 头部数据压缩： 在HTTP1.1中，HTTP请求和响应都是由状态行、请求/响应头部、消息主体三部分组成。一般而言，消息主体都会经过gzip压缩，或者本身传输的就是压缩过后的二进制文件，但状态行和头部却没有经过任何压缩，直接以纯文本传输。随着Web功能越来越复杂，每个页面产生的请求数也越来越多，导致消耗在头部的流量越来越多，尤其是每次都要传输UserAgent、Cookie这类不会频繁变动的内容，完全是一种浪费。HTTP1.1不支持header数据的压缩，HTTP2.0使用HPACK算法对header的数据进行压缩，这样数据体积小了，在网络上传输就会更快。
- 服务器推送： 服务端推送是一种在客户端请求之前发送数据的机制。网页使用了许多资源：HTML、样式表、脚本、图片等等。在HTTP1.1中这些资源每一个都必须明确地请求。这是一个很慢的过程。浏览器从获取HTML开始，然后在它解析和评估页面的时候，增量地获取更多的资源。因为服务器必须等待浏览器做每一个请求，网络经常是空闲的和未充分使用的。为了改善延迟，HTTP2.0引入了server push，它允许服务端推送资源给浏览器，在浏览器明确地请求之前，免得客户端再次创建连接发送请求到服务器端获取。这样客户端可以直接从本地加载这些资源，不用再通过网络。


### HTTP
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922191832.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210824184941.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210824184846.png)

POST和GET的区别：
    - **GET在浏览器回退时是无害的，而POST会再次提交请求；**
    - GET产生的URL地址可以被收藏，而POST不可以；
    - **GET请求会被浏览器主动缓存，而POST不会，除非手动设置；**
    - GET请求只能进行url编码，而POST支持多种编码方式； 
    - **GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会保留；**
    - **GET请求在URL中传送的参数是有长度限制的，而POST是没有限制的；**
    - 对参数的数据类型，GET只接受ASCII字符，而POST没有限制；
    - GET比POST更不安全，因为参数直接暴露在URL中，所以不是用来传递敏感信息的；
    - **GET参数通过URL传递的，POST放在Request body中。**


`HTTP`状态码：
    - `1xx`:指示信息，表示请求已接收，继续处理；
    - `2xx`:成功，表示请求已被成功接收；
    - `3xx`:重定向，要完成请求必须进行更进一步的操作；
    - `4xx`:客户端错误，请求有语法错误或请求无法实现；
    - `5xx`:服务器错误，服务器未能实现合法的请求。

    - `200` ok: 客户端请求成功
    - `206 Partial Content`: 客户发送了一个带有Range头的GET请求，服务器完成了它
    - `301 Moved Permanently`: 所请求的页面已经转移至新的url
    - `302 Found`: 所有请求的页面已经临时转移至新的url
    - `304 Not Modified`：客户端有缓冲的文档并发出了一个条件性的请求 服务器告诉客户，原来缓冲的文档还可以继续使用
    - `400` 客户端请求有语法错误，不能被服务器所理解
    - `401` 请求未经授权，这个状态码必须和`www-Authenticate`报头域一起使用
    - `403` 对被请求页面的访问被禁止
    - `404` 请求资源不存在
    - `505` 服务器发送不可预期的错误，原来缓冲的文档还可以继续使用
    - `503` 请求未完成，服务器临时过载或宕机，一段时间后可能恢复正常


OPTIONS方法用于获取目的资源所支持的通信方式的选项。在 CORS 中，可以使用 OPTIONS 方法发起一个预检请求，以检测实际请求是否可以被服务器所接受。预检请求报文中的 Access-Control-Request-Method 首部字段告知服务器实际请求所使用的 HTTP 方法；Access-Control-Request-Headers 首部字段告知服务器实际请求所携带的自定义首部字段。服务器基于从预检请求获得的信息来判断，是否接受接下来的实际请求。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922193301.png)



- HTTP协议的主要特点
    - HTTP协议类的主要特点：简单快速，灵活，无连接，无状态（无法区分两次连接是否一样）。
- HTTP报文的组成部分
    - HTTP报文的组成部分
    - 请求报文：请求行，请求头，空行，请求体；
    - 响应报文：状态行，响应头，空行，响应体。
    - 请求行包含：http方法，页面地址，http协议以及版本；
    - 请求头包含：key-value值，告诉服务器端我要什么内容。
## Webpack Vite Rollup
