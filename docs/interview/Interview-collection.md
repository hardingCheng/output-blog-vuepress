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
    - 载入 JavaScript 文件时不阻塞 HTML 的解析，执行阶段被放到 HTML 标签解析完成之后。
    - 在加载多个JS脚本的时候，async是无顺序的加载，而defer是有顺序的加载。
- async
    - async的设置，会使得script脚本异步的加载并在允许的情况下执行
    - async的执行，并不会按着script在页面中的顺序来执行，而是谁先加载完谁执行。
    - 这种方式加载的 JavaScript 依然会阻塞 load 事件
    - async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行。

## CSS
### .position有几种，分别描述？
- static（静态定位）
    - 对象遵循标准文档流中，top, right, bottom, left 等属性失效。
- relative（相对定位）
    - 对象遵循标准文档流中，依赖top, right, bottom, left 等属性相对于该对象在标准文档流中的位置进行偏移，同时可通过z-index定义层叠关系。
- absolute（绝对定位）
    - 对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位 同时可通过z-index定义层叠关系。
    - 相对于static定位以外的第一个父元素进行绝对定位
- fixed（固定定位）
    - 对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位,同时可通过z-index定义层叠关系。
    - fixed 元素总是相对于 body 定位的
- sticky（粘性定位元素）
    - 可以说是相对定位relative和固定定位fixed的结合
    - 元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量。
    - 在目标区域以内，它的行为就像 position:relative;在滑动过程中，某个元素距离其父元素的距离达到sticky粘性定位的要求时(比如top：100px)；position:sticky这时的效果相当于fixed定位，固定到适当位置。
### z-index
- z-index的取值
    - auto（自动，默认值）
    - 整数（正整数/负整数/0）
        - 数值越大，元素也就越靠近观察者；而数值越小，元素看起来也就越远。
    - inherit（继承）

一共可以有7种层叠等级。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009152205.png)

- 背景和边框 —— 形成层叠上下文的元素的背景和边框，也是层叠上下文中的最低等级。
- 负z-index值 —— 层叠上下文内有着 负z-index值 的子元素。
- 块级盒 —— 文档流中非行内非定位子元素。
- 浮动盒 —— 非定位浮动元素。
- 行内盒 —— 文档流中行内级别非定位子元素。
- z-index: 0 —— 定位元素，这些元素将形成了新的层叠上下文。
- 正z-index值 —— 定位元素。 层叠上下文中的最高等级。
### BFC块级格式化上下文   (边距重叠解决方案）

块级格式化上下文   (边距重叠解决方案）。
`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用`BFC`呢，`BFC`可以看做是一个`CSS`元素属性。
一个环境中的元素不会影响到其它环境中的布局。

> #### BFC的规则

1. 垂直方向的距离由margin决定， 属于同一个`BFC`（处于同一个BFC中的元素相互影响）的两个相邻的标签外边距会发生重叠。（给其中一个元素增加一个父级，然后让他的父级触发BFC）
2. BFC的区域不会与浮动元素的box重叠(浮动元素不会覆盖到触发 BFC 元素上)。清除浮动布局，阻止同级元素被浮动元素覆盖。（非浮动元素触发了BFC,阻止元素被浮动元素覆盖原理）
3. BFC在页面上是独立的容器，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。（父级触发了BFC）
4. 计算BFC高度的时候，浮动元素也会参与计算，防止使用float脱离文档流，高度塌陷。（父级触发了BFC）

> #### BFC触发

1. float的值不是none。
2. position的值不是static或者relative。绝对定位元素（元素的 `position` 为 `absolute` 或 `fixed`）
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex。
4. 内联块 (元素具有 display: inline-block)。
5. overflow的值不是visible(hidden、scroll、auto、inherit)

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
            // 给父元素加上这个，触发BFC 解决Float脱离文档流，高度塌陷
            // display: inline-block;
            // overflow: auto/hidden/scroll; /** 创建一个BFC **/
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

2. margin边距重叠

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

### Grid
### 常见布局的方案
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009164716.png)

#### 单列布局
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210929065711.png)
- header,content和footer等宽的单列布局
    - 对于第一种，先通过对header,content,footer统一设置width：1000px;或者max-width：1000px(这两者的区别是当屏幕小于1000px时，前者会出现滚动条，后者则不会，显示出实际宽度);然后设置margin:auto实现居中即可得到。
- header与footer等宽,content略窄的单列布局
    - header、footer的内容宽度不设置，块级元素充满整个屏幕，但header、content和footer的内容区设置同一个width，并通过margin:auto实现居中。
```html
<div class="header"></div>
<div class="content"></div>
<div class="footer"></div>

.header{
    margin:0 auto; 
    max-width: 960px;
    height:100px;
    background-color: blue;
}
.content{
    margin: 0 auto;
    max-width: 960px;
    height: 400px;
    background-color: aquamarine;
}
.footer{
    margin: 0 auto;
    max-width: 960px;
    height: 100px;
    background-color: aqua;
}
```
```html
<div class="header">
    <div class="nav"></div>
</div>
<div class="content"></div>
<div class="footer"></div>


.header{
    margin:0 auto;
    max-width: 960px;
    height:100px;
    background-color: blue;
}
.nav{
    margin: 0 auto;
    max-width: 800px;
    background-color: darkgray;
    height: 50px;
}
.content{
    margin: 0 auto;
    max-width: 800px;
    height: 400px;
    background-color: aquamarine;
}
.footer{
    margin: 0 auto;
    max-width: 960px;
    height: 100px;
    background-color: aqua;
}
```
#### 两列自适应布局
两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式。
- float+overflow:hidden
    - 如果是普通的两列布局，浮动+普通元素的margin便可以实现，但如果是自适应的两列布局，利用float+overflow:hidden便可以实现，这种办法主要通过overflow触发BFC,而BFC不会重叠浮动元素。
    - 使用overflow属性来触发bfc，来阻止浮动造成的文字环绕效果。
    - 注意点:如果侧边栏在右边时，注意渲染顺序。即在HTML中，先写侧边栏后写主内容
- Flex布局
    - Flex布局，也叫弹性盒子布局，区区简单几行代码就可以实现各种页面的的布局。
- grid布局
    - Grid布局，是一个基于网格的二维布局系统，目的是用来优化用户界面设计。
```html
<div class="parent" style="background-color: lightgrey;">
    <div class="left" style="background-color: lightblue;">
        <p>left</p>
    </div>
    <div class="right"  style="background-color: lightgreen;">
        <p>right</p>
        <p>right</p>
    </div>        
</div>

.parent {
  overflow: hidden;
  zoom: 1;
}
.left {
  float: left;
  margin-right: 20px;
}
.right {
  overflow: hidden;
  zoom: 1;
}
```
```css
//html部分同上
.parent {
  display:flex;
}  
.right {
  margin-left:20px; 
  flex:1;
}
```
```css
//html部分同上
.parent {
  display:grid;
  grid-template-columns:auto 1fr;
  grid-gap:20px
} 
```
#### 三栏布局
中间列自适应宽度，旁边两侧固定宽度。
1. 圣杯布局
比较特殊的三栏布局，同样也是两边固定宽度，中间自适应，唯一区别是dom结构必须是先写中间列部分，这样实现中间列可以优先加载。
**要注意的是，中间栏要在放在文档流前面以优先渲染。**
- 缺点
    - center部分的最小宽度不能小于left部分的宽度，否则会left部分掉到下一行
    - 如果其中一列内容高度拉长(如下图)，其他两列的背景并不会自动填充。(借助等高布局正padding+负margin可解决）。
```html
<div class="container">
    <div class="center">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>

.container {
    // 导致左右栏也会  跟着走
    // 分别给左右栏 position: relative;定位到原本的位置
    padding:0 220px;//为左右栏腾出空间
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



//简单的进行CSS reset
body,html{
    height:100%;
    padding: 0px;
    margin:0px;
}
//左右绝对定位
.left,.right{
    position: absolute;
    top:0px;
    background: red;
    height:100%;
}
.left{
    left:0;
    width:100px;
}
.right{
    right:0px;
    width:200px;
}
//中间使用margin空出左右元素所占据的空间
.main{
    margin:0px 200px 0px 100px;
    height:100%;
    background: blue;
}
```
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
```


#### 等高布局
等高布局是指子元素在父元素中高度相等的布局方式。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210929073545.png)
1. 利用正padding+负margin
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
```
- 实现
    - footer必须是一个独立的结构，与wrap没有任何嵌套关系
    - wrap区域的高度通过设置min-height，变为视口高度
    - footer要使用margin为负来确定自己的位置
    - 在main区域需要设置 padding-bottom。这也是为了防止负 margin 导致 footer 覆盖任何实际内容。

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


1.opacity：0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定 一些事件，如click 事件，那么点击该区域，也能触发点击事件的
2.visibility：hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已 经绑定的事件 ，隐藏对应元素，在文档布局中仍保留原来的空间（重绘）
3.display：none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素。 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）

### CSS标签meta

### rpx和px的联系和区别以及计算方法

### CSS画三角形   画半圆
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
梯形也是基于 border 来绘制的，只不过绘制梯形时，宽高和border尺寸相同。
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
      border-radius:100px 0 0;
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
    .arrow{
        width: 0;
        height: 0;
        border: 50px solid;
        border-color: transparent #0f0 transparent transparent;
        position: relative;
    }
    .arrow::after{
        content: '';
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
  .semicircle{
    width: 100px;
    height: 50px;
    border-radius: 50px 50px 0 0;
    background-color: rebeccapurple;
  }
</style>
<div class="semicircle"></div>
```

## JS
### ● 图片懒加载的原理？？？
### ● 箭头函数和普通函数有什么区别？如果把箭头函数转换为不用箭头函数的形式，如何转换
### 闭包
- 防抖节流
```js
// 防抖
function debounce(fn, delay = 300) {
  let timer; //闭包引用的外界变量
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```
- 模拟块级作用域
```js
function outputNumbers(count) {
  (function () {
    for (var i = 0; i < count; i++) {
      console.log(i);
    }
  })();
}
outputNumbers(5)
```
- 对象中创建私有变量
```js
var aaa = (function () {
  var a = 1;
  function bbb() {
    a++;
    console.log(a);
  }
  function ccc() {
    a++;
    console.log(a);
  }
  return {
    b: bbb, //json结构
    c: ccc,
  };
})();
console.log(aaa.a); //undefined
aaa.b(); //2
aaa.c(); //3
```
### apply call bind 区别
- 三者都可以改变函数的 this 对象指向。
- 三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
- 三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。
- bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。
- bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例
### 编程范式
在js的章节总结了

面向过程（Process Oriented Programming，POP）
面向对象（Object Oriented Programming，OOP）
面向接口（Interface Oriented Programming， IOP）
面向切面（Aspect Oriented Programming，AOP）
函数式（Funtional Programming，FP）
响应式（Reactive Programming，RP）
函数响应式（Functional Reactive Programming，FRP）

### this的五种情况

`this`是在执行的时候确定的。不执行，你就不知道在哪里。

1. 作为普通函数执行时，`this`指向`window`。
2. 当函数作为对象的方法被调用时，`this`就会指向`该对象`。
3. 构造器调用，`this`指向`返回的这个对象`。
4. 箭头函数 箭头函数的`this`绑定看的是`this所在函数定义在哪个对象下`，就绑定哪个对象。如果有嵌套的情况，则this绑定到最近的一层对象上。
5. 基于Function.prototype上的 `apply 、 call 和 bind `调用模式，这三个方法都可以显示的指定调用函数的 this 指向。`apply`接收参数的是数组，`call`接受参数列表，`` bind`方法通过传入一个对象，返回一个` this `绑定了传入对象的新函数。这个函数的 `this`指向除了使用`new `时会被改变，其他情况下都不会改变。若为空默认是指向全局对象window。

**this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的**

**当this碰到return时**。如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。

***终极秘籍***：

1. 如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window，这里需要说明的是在js的严格版中this指向的不是window，但是我们这里不探讨严格版的问题，你想了解可以自行上网查找。
2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
3. 如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象


箭头函数中没有`this`绑定，必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，则`this`绑定的是最近一层非箭头函数的`this`，否则`this`的值则被设置为全局对象。
而箭头函数的`this`是上层普通函数的`this`或者是全局对象（浏览器中是`window`）
```js
var name = 'window';
var student = {
    name: '若川',
    doSth: function(){
        // var self = this;
        var arrowDoSth = () => {
            // console.log(self.name);
            console.log(this.name);
        }
        arrowDoSth();
    },
    arrowDoSth2: () => {
        console.log(this.name);
    }
}
student.doSth(); // '若川'
student.arrowDoSth2(); // 'window'
```


如果要判断一个运行中函数的 `this` 绑定， 就需要找到这个函数的直接调用位置。找到之后 就可以顺序应用下面这四条规则来判断 `this` 的绑定对象。

- `new` 调用：绑定到新创建的对象，注意：显示`return`函数或对象，返回值不是新创建的对象，而是显式返回的函数或对象。
- `call` 或者 `apply`（ 或者 `bind`） 调用：严格模式下，绑定到指定的第一个参数。非严格模式下，`null`和`undefined`，指向全局对象（浏览器中是`window`），其余值指向被`new Object()`包装的对象。
- 对象上的函数调用：绑定到那个对象。
- 普通函数调用：在严格模式下绑定到 `undefined`，否则绑定到全局对象。

`ES6` 中的箭头函数：不会使用上文的四条标准的绑定规则， 而是根据当前的词法作用域来决定`this`， 具体来说， 箭头函数会继承外层函数，调用的 this 绑定（ 无论 this 绑定到什么），没有外层函数，则是绑定到全局对象（浏览器中是`window`）。这其实和 `ES6` 之前代码中的 `self = this` 机制一样。

`DOM`事件函数：一般指向绑定事件的`DOM`元素，但有些情况绑定到全局对象（比如`IE6~IE8`的`attachEvent`）。

一定要注意，有些调用可能在无意中使用普通函数绑定规则。如果想“ 更安全” 地忽略 `this` 绑 定， 你可以使用一个对象， 比如`ø = Object.create(null)`， 以保护全局对象。

面试官考察`this`指向就可以考察`new、call、apply、bind`，箭头函数等用法。从而扩展到作用域、闭包、原型链、继承、严格模式等。这就是面试官乐此不疲的原因。


### 作用域和作用域链
定义：简单来说作用域就是变量与函数的可访问范围，由当前环境与上层环境的一系列变量对象组成
1.全局作用域：代码在程序的任何地方都能被访问，window 对象的内置属性都拥有全局作用域。
2.函数作用域：在固定的代码片段才能被访问
作用：作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。

作用域链参考链接一般情况下，变量到 创建该变量 的函数的作用域中取值。但是如果在当前作用域中没有查到，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

### 原型 && 原型链
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211012095343.png)
- 每一个构造函数都有(原型)prototype指向它的原型对象。
- 原型对象有constructor指向它的构造函数。
- 构造函数可以通过new 的创建方式创建实例对象
- 实例对象通过_proto_指向它的原型对象。
- 原型对象也有自己的原型对象，通过_proto_指向。
```js
1. Person.prototype.constructor == Person // **准则1：原型对象（即Person.prototype）的constructor指向构造函数本身**
2. person01.__proto__ == Person.prototype // **准则2：实例（即person01）的__proto__和原型对象指向同一个地方**
```
‌**原型**:  在 JS 中，每当定义一个对象（函数也是对象）时，对象中都会包含一些预定义的属性。其中每个函数对象都有一个prototype 属性，这个属性指向函数的原型对象。

**原型链**：（各个原型之间构成的链，我们称之为原型链。）如果试图引用对象(实例instance)的某个属性,会首先在对象内部寻找该属性,直至找不到,然后才在该对象的原型(instance.prototype)里去找这个属性.如果还找不到则往原型的原型上找，这样一个层层查找形成的一个链式的关系被称为原型链。）

当在一个对象 obj 上访问某个属性时，如果不存在于 obj，那么便会去对象的原型也就是 obj.__proto__ 上去找这个属性。如果有则返回这个属性，没有则去对象 obj 的原型的原型也就是 obj.__proto__.__proto__去找，重复以上步骤。一直到访问纯对象的原型也就是 Object.prototype，没有的话续往上找也就是 Object.prototype.__proto__，其实就是 null，直接返回 undefined。

**特点**:  JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。
```js
// 原型、构造函数、实例、原型链的关系
// 1、实例 ==> 1. 对象就是一个实例，就有_proto_属性
//             2. 实例通过_proto_原型链找到prototype原型对象，prototype原型对象的属性被所有实例共享。
// 2、构造函数 ==> 1.可以通过new运算符生成一个实例。
//                 2.任何函数都可以作为构造函数。
//                 3.只要被new运算符使用过的函数就是一个构造函数
// 3、原型 ==> 1. 函数都有prototype属性，prototype属性的值就是一个初始化的原型对象。
//             2. 原型对象有个constructor和_proto_属性，constructor是一个构造函数。
//             3. Fn.prototype.constructor === Fn   // constructor函数指向构造函数本身。通过constructor把原型对象和构造函数关联。
// 4、原型链 ==>1. 对象有_proto_属性（函数也是对象，所以函数也有_proto_属性）
//              2. 实例通过_proto_原型链找到prototype原型对象,如果找不到，则通过原型对象的_proto_继续往上找，一直到顶层。
// 5、关系：==> 1. Fn.prototype.constructor === Fn  // 构造函数原型的constructor属性指向构造函数本身
//              2. obj3.__proto__.constructor === Fn
//              3. obj3.__proto__.constructor === Fn.prototype.constructor
//              4. obj3.__proto__ === Fn.prototype  // 修改prototype的属性， __proto__也会修改，同理也是
```
### 原型链，为什么要这么设计
- 在定义函数时，会执行两个动作：一个动作是创建函数对象，这是因为函数是对象；另一个动作是创建一个完全独立的原型对象；定义的函数的原型属性将指向该原型对象。
- 那么 prototype 就是调用 `构造函数` 而创建的那个对象`实例`的`的原型对象`。
- 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。
- 最主要的就是节省内存，如果属性和方法定义在原型上，那么所有的实例对象就能共享。

### __proto__和prototype的区别和关系?
- js 每个对象都会拥有`prototype`属性的。这个属性指向一个对象，这个对象的所有属性和方法都会被构造函数的实例所继承。
- 实例都包含一个指向构造函数的`原型对象`的`__proto__`内部指针。。
- 实例都会有一个`constructor`属性去指向它的构造函数s
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

### instanceof
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210802103943.png)

1、instanceof的作用是用来做检测类型：
（1）instanceof可以检测某个对象是不是另一个对象的实例(用于判断某个实例是否属于某构造函数)；
```js
var Person = function() {};
var student = new Person();
console.log(student instanceof Person);  // true
```
（2）instanceof可以检测父类型(在继承关系中用来判断一个实例是否属于它的父类型或者祖先类型的实)；
```js
function Person() {};
function Student() {};
var p = new Person();
Student.prototype=p; //继承原型
var s=new Student();
console.log(s instanceof Student); //true
console.log(s instanceof Person); //true
// 但是，instanceof不适合检测一个对象本身的类型。
```
2、instanceof 检测一个对象A是不是另一个对象B的实例的原理：
其实 `instanceof` 主要的实现原理就是只要右边变量的 `prototype` 在左边变量的原型链上即可。因此，`instanceof` 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 `prototype`，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。
查看对象B的prototype指向的对象是否在对象A的[[prototype]]链上。如果在，则返回true,如果不在则返回false。不过有一个特殊的情况，当对象B的prototype为null将会报错(类似于空指针异常)。
```js
function _instanceof(A, B) {
    var O = B.prototype;// 取B的显示原型
    A = A.__proto__;// 取A的隐式原型
    while (true) {
        //Object.prototype.__proto__ === null
        if (A === null)
            return false;
        if (O === A)// 这里重点：当 O 严格等于 A 时，返回 true
            return true;
        A = A.__proto__;
    }
}
```
```js
// instanceof ==> 1. 判断实例对象的__proto__和构造函数的prototype属性指向同一个引用地址
                    （并不能判断一个对象是不是一个构造函数直接生成的实例），
//                2. obj3 instanceof Fn  // true
//                3. obj3 instanceof Object  // true，由于 Fn instanceof Object === true
//                4. 如何准确判断一个对象是不是一个构造函数直接生成的实例对象(通过constructor)： 
//                   obj3.__proto__.constructor === Fn.prototype.constructor // true
//                   obj3.__proto__.constructor === Object.prototype.constructor // false
```

### `.new`操作符和`new`一个对象发生了什么?
1.创建一个空对象。
2.该对象的隐式原型指向该函数的原型。(设置原型，将对象的原型设置为函数的prototype对象。)
3.这个新对象会绑定到函数调用的this。(让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）)
4.如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。(判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。)

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
### ES5 继承
#### 原型链继承
```js
function Parent() {
    this.name = 'arzh'
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child() {
    
}

//主要精髓所在
Child.prototype = new Parent()
Child.prototype.constructor = Child

var arzhChild2 = new Child()
arzhChild2.names.push('arzh2')
console.log(arzhChild2.names) //[ 'arzh', 'arzh1', 'arzh2' ]

var arzhChild3 = new Child()
arzhChild3.names.push('arzh3')
console.log(arzhChild3.names) //[ 'arzh', 'arzh1', 'arzh2', 'arzh3' ]

```
- 缺点
    - 每个实例对引用类型属性的修改都会被其他的实例共享
    - 在创建Child实例的时候，无法向Parent传参。这样就会使Child实例没法自定义自己的属性（名字）

#### 构造函数实现继承
```js
function Parent() {
    this.names = ['arzh','arzh1']
}

function Child() {
    Parent.call(this)
}

var arzhChild2 = new Child()
arzhChild2.names.push('arzh2')
console.log(arzhChild2.names) //[ 'arzh', 'arzh1', 'arzh2' ]

var arzhChild3 = new Child()
arzhChild3.names.push('arzh3')
console.log(arzhChild3.names) //[ 'arzh', 'arzh1', 'arzh3' ]
```    
- 优点
    - 解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题
    - 子类可以向父类传参
- 缺点
    - 无法复用父类的公共函数
    - 每次子类构造实例都得执行一次父类函数

#### 组合式继承(原型链继承和借用构造函数合并)
```js
function Parent(name) {
    this.name = name
    this.body = ['foot','hand']
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var arzhChild1 = new Child('arzh1', '18')
arzhChild1.body.push('head1')
console.log(arzhChild1.name,arzhChild1.age) //arzh1 18
console.log(arzhChild1.body) //[ 'foot', 'hand', 'head1' ]

var arzhChild2 = new Child('arzh2', '20')
arzhChild2.body.push('head2')
console.log(arzhChild2.name,arzhChild2.age) //arzh2 20
console.log(arzhChild2.body) //[ 'foot', 'hand', 'head2' ]
```
- 优点 
    - 解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题
    - 子类可以向父类传参
    - 可实现父类方法复用
- 缺点:
    - 需执行两次父类构造函数，第一次是Child.prototype = new Parent(),第二次是Parent.call(this, name)造成不必要的浪费

#### 原型式继承
复制传入的对象到创建对象的原型上，从而实现继承
```js
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
```
```js
function Parent4() {
  this.name = "parent4";
  this.play = [1, 2, 3];
}
function Child4() {
  Parent4.call(this);
  this.type = "child4";
}
// 就是为了继承父类的原型对象
// 在原型对象中有constructor属性，因为子类和父类都是一个原型对象，所以属性值都是一样的
// Child4.prototype.constructor = Child4  加上这句话也不行，因为Child4.prototype = Parent4.prototype是一个对象，你改变Child4.prototype 就等于改变 Parent4.prototype
Child4.prototype = Parent4.prototype;
var s5 = new Child4();
var s6 = new Child4();
console.log(s5, s6);

console.log(s5 instanceof Child4, s5 instanceof Parent4);
// 但是使用这种的时候  你去找我这实例是谁产生的，竟然是父类（不是我们想要的）
console.log(s5.constructor);
```
- 缺点
    -  同原型链继承一样，每个实例对引用类型属性的修改都会被其他的实例共享

#### 寄生式继承
寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。可以在创建对象的时候，把对象方法也通过此种方式继承。
```js
function createEnhanceObj(o) {
    //代替原型式继承的createObj
    var clone = Object.create(o)
    clone.getName = function () {
        console.log('arzh')
    }
    return clone;
}
```
```js
function Parent5() {
  this.name = "parent5";
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = "child5";
}
// 对象关联 一个新的对象  子类和父类的原型进行隔离
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
```
- 缺点
    - 同借用构造函数一样，无法复用父类函数，每次创建对象都会创建一遍方法

#### 寄生组合式继承
不需要为了子类的原型而多new了一次父类的构造函数，如Child.prototype = new Parent() 只需要复制父类原型的一个副本给子类原型即可。
```js
function inheritPrototype(Parent, Child){
	Child.prototype = Object.create(Parent.prototype) //创建父类原型的一个副本,把副本赋值给子类原型
	Child.prototype.constructor = Child;
}
```
```js
function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(color) {
    Parent.call(this, 'arzh')
    this.color = color
}

Child.prototype = Object.create(Parent.prototype) //创建父类原型的一个副本,把副本赋值给子类原型
Child.prototype.constructor = Child;

var arzhChild = new Child('red')
console.log(arzhChild.name) // 'arzh'
```
- 优点
    - 不必为了指定子类型的原型而调用父类型的构造函数

#### ES6继承
ES6支持通过类来实现继承，方法比较简单.
```js
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    toString() {
        return this.x + '' + this.y
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y) //调用父类的constructor(x, y)
        this.color = color
    }
    
    toString() {
        return this.color + ' ' + super.toString() // 调用父类的toString()
    }
}

var colorPoint = new ColorPoint('1', '2', 'red')

console.log(colorPoint.toString())  // red 12
```

#### ES5继承和ES6继承的差别
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210927093321.png)
- 差别1：
    - ES6的构造函数通过原型链连接起来了，构造函数之间有直接的引用关系；
    - ES5实际上是使用call或者apply借用父类构造函数实现的实例化，构造函数之间没有直接的引用关系
- 差别2：
    - ES5的实例化对象是由子类构造函数先创建的，然后父类构造函数是使用call或者apply修改这个对象
    - ES6的实例化对象是由父类构造函数先创建的（这就是为什么要先调用super），然后子类构造函数修改这个对象

#### ES6实例成员、静态成员、静态方法处理
- 静态方法
    - 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
    - 静态方法包含this关键字，这个this指的是类，而不是实例。
    - 静态方法可以与非静态方法重名。
    - 父类Foo有一个静态方法，子类Bar可以调用这个方法。静态方法也是可以从super(super.classMethod())对象上调用的。
```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```

- 实例属性
    - 定义在constructor()方法里面的this上面
    - 定义在类的最顶层。
```js
class IncreasingCounter {
  _count = 0;
  constructor() {
    this._count1 = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

- 静态属性
    - 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
    -  ES6 明确规定，Class 内部只有静态方法，没有静态属性。
    -  写法为Foo类定义了一个静态属性prop。
```js
// 老写法
class Foo {
  // ...
}
Foo.prop = 1;

// 新写法
class Foo {
  static prop = 1;
}
```

- 私有方法
    - 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。
    - 一种做法是在命名上加以区别。
        - _bar()方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。
    - 另一种方法就是索性将私有方法移出类，因为类内部的所有方法都是对外可见的。
    - 一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
```js
class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}




class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}
function bar(baz) {
  return this.snaf = baz;
}




const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};

const inst = new myClass();
Reflect.ownKeys(myClass.prototype)
// [ 'constructor', 'foo', Symbol(bar) ]
```

### 手写函数（前面有很多）
在JS基础中有很多这种需要手写的函数和方法等。

### 变量提升(函数提升)
- 所谓的变量提升（变量提升），是指在JS代码执行中， JavaScript引擎（V8）把变量的声明部分和函数的声明部分提升到代码开头的行为，变量提升后，会给变量设置默认值undefined，给函数赋值函数体。
- 在JS的变量提升中，提升的只是变量的声明，所以对于var a = 1，一般把它拆分成var a 和 a = 1。只提升var a，a = 1不变。
- 有多个同名变量声明时，函数声明会覆盖其他的声明。如果有多个同名函数声明，则是由最后的一个函数声明覆盖之前所有的声明。

### 数据类型
值类型（7个）：Undefined、Null、Number、String、Boolean、Symbol(ES6)、BigInt(ES10)
引用类型：Object：Array、Function
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

### JS垃圾回收机制
1. 项目中，如果存在大量不被释放的内存（堆/栈/上下文），页面性能会变得很慢。当某些代码操作不能被合理释放，就会造成内存泄漏。我们尽可能减少使用闭包，因为它会消耗内存。
2. 浏览器垃圾回收机制/内存回收机制:
   > 浏览器的`Javascript`具有自动垃圾回收机制(`GC:Garbage Collecation`)，垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。

   **标记清除**:在`js`中，最常用的垃圾回收机制是标记清除：当变量进入执行环境时，被标记为“进入环境”，当变量离开执行环境时，会被标记为“离开环境”。垃圾回收器会销毁那些带标记的值并回收它们所占用的内存空间。
    **谷歌浏览器**：“查找引用”，浏览器不定时去查找当前内存的引用，如果没有被占用了，浏览器会回收它；如果被占用，就不能回收。
    **IE浏览器**：“引用计数法”，当前内存被占用一次，计数累加1次，移除占用就减1，减到0时，浏览器就回收它。
3. 优化手段：内存优化 ; 手动释放：取消内存的占用即可。
   （1）堆内存：fn = null 【null：空指针对象】
   （2）栈内存：把上下文中，被外部占用的堆的占用取消即可。
4. 内存泄漏
   在 JS 中，常见的内存泄露主要有 4 种,全局变量、闭包、DOM 元素的引用、定时器
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
https://juejin.cn/post/6844903959283367950
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210921221425.png)
#### Set数据结构
概念：set是ES6新增的数据结构。集合的概念是一组无序且唯一（即不重复）的项组成。set数据结构使用了与有限集合相同的数学概念，应用在计算机的数据结构中，与数组类似，但成员都是唯一的，没有重复的值。

特点：key和value相同，没有重复的value。只有健值，没有健名，有点类似数组。

#### WeakSet
WeakSet 对象允许你将弱引用对象储存在一个集合中。
WeakSet 与 Set 的区别：
- WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以
- WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素。

#### Map数据结构
Map 是一种叫做字典的数据结构,Map和对象最大的不同应该就是键可以是任意类型。
Map原生提供三个遍历器生成函数和一个遍历方法。
- keys()：返回键名的遍历器。
- values()：返回键值的遍历器。
- entries()：返回所有成员的遍历器。
- forEach()：遍历Map的所有成员。
需要特别注意的是，Map的遍历顺序就是插入顺序。

#### WeakMap
WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意。
注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

WeakMap 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的key则变成无效的），所以，WeakMap 的 key 是不可枚举的。

### CommonJS 和 es6 模块化的区别
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211012163119.png)
1. `ES6 Module`静态引入，编译时引入（码在编译的过程中可以做的事情包含词法和语法分析、类型检查以及代码优化等等。）
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
JS里整数的计算是正确的，但是小数的计算是有误差的。
简单的说，就是小数的表示肯定有误差，只是误差极小。
```js
0.1 + 0.2 
0.30000000000000004
```
对小数点以后的数乘以2，取结果的整数部分（不是1就是0），然后再用小数部分再乘以2，再取结果的整数部分……以此类推，直到小数部分为0或者位数已经够了就OK了。然后把取的整数部分按先后次序排列
对浮点数进行运算的过程中，需要将十进制转换成二进制。
### Number()的存储空间是多大？假如接口返回一个超过最大字节的数字怎么办？
Number类型的最大值为2的53次方，即9007199254740992，如果超过这个值，比如900719925474099222，那么得到的值会不精确，也就是900719925474099200

### 浏览器对于小数单位是怎么计算的？
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
function *main() {
    try{
        const user = yield ajax('/api/1')
        console.log(users);

        const posts = yield ajax('/api/2')
        console.log(posts);

        const urls = yield ajax('/api/3')
        console.log(urls);

    }catch(e){
        console.log(e);
    }
}

const g = main()

function handleResults(results){
    if(results.done) return
    results.value.then(data => {
        handleResults(g.next(data));
    },error => {
        g.throw(error);
    })
}

handleResults(g.next())
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

### （DOM 事件流）浏览器的事件冒泡及事件捕获？怎么取消事件冒泡？事件代理？
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
    - 事件委托也叫事件委派，就是利用 DOM 的冒泡事件流，注册最少的监听器，实现对 DOM 节点的所有子元素进行事件群控。
    - 事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。(给 ul 注册点击事件，然后利用事件对象的 target 来找到当前点击的 li ，然后事件冒泡到 ul 上， ul 有注册事件，就会触发事件监听器。)
    - 事件委托的作用
        - 只操作了一次 DOM ，提高了程序的性能。
        - 在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的操作dom,那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长，这也就是为什么要减少dom操作的原因。每一个事件处理函数，都是一个对象，那么多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到js程序里面，只对它的父级(如果只有一个父级)这一个对象进行操作，与dom的操作就只需要交互一次，这样就能大大的减少与dom的交互次数，提高性能；
### target/currentTarget/relateTarget
- event.target
    - 返回触发事件的元素
    - 可以用来实现事件委托 (event delegation)
- event.currentTarget
    - 返回绑定事件的元素
- event.relateTarget
    - 返回与事件的目标节点相关的节点。
### window.onload 和 DOMContentLoaded
```js
window.addEventListener('load', function(){
    //页面的全部资源加载完才会执行，包括图片、视频等
});

document.addEventListener('DOMContentLoaded', function(){
    //DOM 渲染完即可执行，此时图片、视频还可能没加载完 -> 尽量选择此方法
});
```
### Promise（写的不好）
- 回调地狱
    - 代码臃肿
    - 可读性差。
    - 耦合度过高，可维护性差。代码复用性差。
    - 容易滋生 bug。
    - 只能在回调里处理异常。

Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210926211726.png)
```md
Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行
Promise 会有三种状态
    Pending 等待
    Fulfilled 完成
    Rejected 失败

状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；

Promise 中使用 resolve 和 reject 两个函数来更改状态；

then 方法内部做但事情就是状态判断
    如果状态是成功，调用成功回调函数
    如果状态是失败，调用失败回调函数
    
promise调用then的前提是该promise的状态为fullfilled
只有promise调用then的时候，then里面的函数才会被推入微任务中；

```


```js
new Promise(请求1)
    .then(请求2(请求结果1))
    .then(请求3(请求结果2))
    .then(请求4(请求结果3))
    .then(请求5(请求结果4))
    .catch(处理异常(异常信息))
```
Promise 的写法更为直观，并且能够在外层捕获异步函数的异常信息。
- Promise 对象的 then 方法会返回一个全新的 Promise 对象
- 后面的 then 方法就是在为上ー个 then 返回的 Promise 注册回调
- 前面 then 方法中回调函数的返回值会作为后面 then 方法回调的参数
- 如果回调中返回的是 Promise，那后面 then 方法的回调会等待它的结束


Js引擎为了让microtask尽快的输出，做了一些优化，连续的多个then(3个)如果没有reject或者resolve会交替执行then而不至于让一个堵太久完成用户无响应
```js
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})

// 大家先思考一下

0  1 2 3 4 5 6
```


```js
/**
 * 1. Promise就是一个类   在执行这个类的时候 需要传递一个执行器进去  执行器会立即执行
 * 2. Promise中有三种状态 分别为 成功fulfilled 失败rejected 等待pending  一旦状态确定就不可以更改
 * 3. resolve,reject函数是用来更改状态的
 * 4. then方法内部做的事情就是判断 如果状态是成功  调用成功的回调函数 如果状态是失败 调用失败的回调函数。then方法是被定义在原生对象上的方法
 * 5. then成功回调有一个参数 表示成功之后的值 then失败回调有一个参数  表示失败后的原因
 */
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    status = PENDING
    // 成功之后的值
    value = undefined
    // 失败之后的原因
    error = undefined
    // 成功回调
    successCallback = []
    // 失败回调
    failureCallback = []
    //传递执行器
    construct(executor){
        // 执行器会立即执行  (Promise的立即执行性,除了resolve，reject都执行)
        try {
            executor(this.resolve,this.reject)
            // 捕获执行器错误
        } catch (error) {
            this.reject(error)
        }
    }
    resolve = (value) => {
        // 如果状态不是等待 阻止程序向下执行
        if(this.status !== PENDING) return   
        // 更改状态为成功
        this.status = FULFILLED
        // 保存成功之后的值
        this.value = value

        
        // 异步执行的时候 判断成功回调是否存在 如果存在 调用
        // this.successCallback && this.successCallback(this.value)
        while(this.successCallback.length){
            //从前往后调用
            this.successCallback.shift()
        }
    }
    reject = (error) => {
        // 如果状态不是等待 阻止程序向下执行
        if(this.status !== PENDING) return  
        // 更改状态为失败
        this.status = REJECTED
        // 保存失败之后的原因
        this.error = error


        // 异步执行的时候 判断失败回调是否存在 如果存在 调用
        // this.failureCallback && this.failureCallback(this.error)
        while(this.failureCallback.length){
            //从前往后调用
            this.failureCallback.shift()
        }
    }
    then(successCallback, failureCallback){
        /**
        .then()
        .then()
.       .then(value => console.log(value))
         */
        // 将 then 方法的参数变成可选参数
        successCallback  = successCallback ? successCallback : value => value
        // then链式调用
        let promise2 = new MyPromise((resolve,reject) => {
            // 判断状态
            if(this.status === FULFILLED) {
                // 变成异步代码   等待所有同步代码完成之后执行  这样做的原因是为了获取 promise2
                setTimeout(() =>{
                    // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
                    try {
                        let x = successCallback(this.value)
                        // 判断 x 的值是普通纸还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象，查看promise对象返回的结果
                        // 再根据promise对象返回的结果，决定调用resolve还是reject
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (error) {
                        reject(error)
                    }
                },0)
            }else if(this.status === REJECTED) {
                setTimeout(() =>{
                    // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
                    try {
                        let x = failureCallback(this.error)
                        // 判断 x 的值是普通纸还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象，查看promise对象返回的结果
                        // 再根据promise对象返回的结果，决定调用resolve还是reject
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (error) {
                        reject(error)
                    }
                },0) 
            }else {
                // 调用then的时候  没有直接调用 resolve 和 reject。异步之后调用
                // 处理异步状态
                // 等待状态
                // 将成功回调和失败回调存储起来
                // then 方法多次调用添加多个处理函数
                this.successCallback.push(() => {
                    setTimeout(() =>{
                        // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
                        try {
                            let x = successCallback(this.value)
                            // 判断 x 的值是普通纸还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象，查看promise对象返回的结果
                            // 再根据promise对象返回的结果，决定调用resolve还是reject
                            resolvePromise(promise2,x,resolve,reject)
                        } catch (error) {
                            reject(error)
                        }
                    },0)
                })
                this.failureCallback.push(() => {
                    setTimeout(() =>{
                        // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
                        try {
                            let x = failureCallback(this.error)
                            // 判断 x 的值是普通纸还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象，查看promise对象返回的结果
                            // 再根据promise对象返回的结果，决定调用resolve还是reject
                            resolvePromise(promise2,x,resolve,reject)
                        } catch (error) {
                            reject(error)
                        }
                    },0) 
                })
            }
        })
        return promise2
    }
    finally(callback) {
        //最后一个promise的then
        return this.then((value) => {
                                                  //执行这个promise
            return MyPromise.resolve(callback()).then(() => value)
        },(error) => {
            return MyPromise.resolve(callback()).then(() => {throw error})
        })
    } 
    catch(failureCallback){
        return this.then(undefined,failureCallback)
    }
    static all(array){
        // 结果数组
        let result = []
        let index = 0
        let len = array.length

        return new MyPromise((resolve, reject) =>{
            function addData(key, value){
                result[key] = value
                index++
                if(index === len){
                    // 全部成功
                    resolve(result)
                }
            }
            // for循环瞬间就执行完了
            // 注意执行的时候  有可能有异步循环
            for(let i=0;i < len;i++){
                let current = array[i]
                if(current instanceof MyPromise){
                    // 失败就调用reject(error)  
                    current.then(value => addData(i, value),error => reject(error))
                }else {
                    addData(i,array[i])
                }
            }
        })
    }
    static resolve(value){
        if(value instanceof MyPromise){
            return value
        }else {
            return new MyPromise(resolve => resolve(value))
        }
    }
    static reject(error){
        if(value instanceof MyPromise){
            return error
        }else {
            return new MyPromise((resolve, reject) => reject(error));
        }
    }
    // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
    // 哪个Promise最快得到结果，就返回那个结果，无论成功失败
    static race(array) {
        return new MyPromise((resolve, reject) => {
            array.forEach(item => {
                if (item instanceof MyPromise) {
                    item.then(res => {
                        resolve(res)
                    }, err => {
                        reject(err)
                    })
                } else {
                    resolve(promise)
                }
            })
        })
    }
    // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
    // 如果有一个Promise成功，则返回这个成功结果
    // 如果所有Promise都失败，则报错
    static any(array) {
        return new Promise((resolve, reject) => {
            let count = 0
            array.forEach((item) => {
                item.then(val => {
                    resolve(val)
                }, err => {
                    count++
                    if (count === array.length) {
                        reject(new AggregateError('All promises were rejected'))
                    }
                })
            })
        })
    }
}


function resolvePromise(promise2,x,resolve,reject) {
    // then 方法链式调用识别 Promise 对象来自自己   不能自己返回自己的promise2 形成死循环调用
    // 处理自己返回自己
    if(promise2 === x){
        // return 阻止向下执行
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if(x instanceof MyPromise){
        // promise对象
        // x.then((value) => resolve(value),(error) => reject(error))
        x.then(resolve,reject)ß
    }else {
        // 普通值
        resolve(x)
    }
}
```
### Proxy
#### Proxy
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

代理提供了一种独特的方法，可以在最底层更改或调整现有对象的行为。

Proxy 是对象的包装，将代理上的操作转发到对象，并可以选择捕获其中的一些操作。
它可以包装任何类型的对象，包括类和函数。


```js
const p = new Proxy(target, handler)

// target：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
// handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
```
```js
const man = {
  name: "阿宝哥",
};

const proxy = new Proxy(man, {
  // target —— 是目标对象，该对象作为第一个参数传递给 new Proxy，
  // property —— 目标属性名,
  // receiver —— 如果目标属性是一个 getter 访问器属性，则 receiver 就是本次读取属性所在的 this 对象。
  get(target, property, receiver) {
    console.log(`正在访问${property}属性`);
    return target[property];
  },
  // 13 种捕获器
  // set()  target —— 是目标对象，该对象作为第一个参数传递给 new Proxy，property —— 目标属性名称， value —— 目标属性要设置的值， receiver —— 与 get 钩子类似，仅与 setter 访问器相关。如果写入操作成功，set 钩子应该返回 true，否则返回 false（触发 TypeError）。
  // deleteProperty()
  // ownKeys()
  // has()
  // 需要注意的是，所有的捕获器是可选的。如果没有定义某个捕获器，那么就会保留源对象的默认行为。
});

console.log(proxy.name);
console.log(proxy.age);
```

通过 Proxy.revocable() 方法可以用来创建一个可撤销的代理对象。
```js
Proxy.revocable(target, handler);


const target = {}; 
const handler = {};
const { proxy, revoke } = Proxy.revocable(target, handler);

proxy.name = "阿宝哥";
console.log(proxy.name); // 阿宝哥
revoke();
console.log(proxy.name); // TypeError: Revoked
```

#### Reflect 对象简介
Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handlers 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。

Reflect 是一个内置对象，可简化的创建 Proxy。
以前的内部方法，比如[[Get]]，[[Set]] 等等都只是规范，不能直接调用。
Reflect 对象使调用这些内部方法成为可能。它的方法是内部方法的最小包装。

对于每个可被 Proxy 捕获的内部方法，Reflect 都有一个对应的方法 Reflect，其名称和参数与 Proxy 钩子相同。

我们可以用 Reflect 来将操作转发到原始对象。

```js
const man = {
  name: "阿宝哥",
  city: "Xiamen",
};

console.log(Reflect.set(man, "sex", 1)); // true
console.log(Reflect.has(man, "name")); // true
console.log(Reflect.has(man, "age")); // false
console.log(Reflect.ownKeys(man)); // [ 'name', 'city', 'sex' ]
// Reflect.get(target, propertyKey[, receiver])：获取对象身上某个属性的值，类似于 target[name]。
// Reflect.set(target, propertyKey, value[, receiver])：将值赋值给属性的函数。返回一个布尔值，如果更新成功，则返回 true。
// Reflect.deleteProperty(target, propertyKey)：删除 target 对象的指定属性，相当于执行 delete target[name]。
// Reflect.has(target, propertyKey)：判断一个对象是否存在某个属性，和 in 运算符的功能完全相同。
// Reflect.ownKeys(target)：返回一个包含所有自身属性（不包含继承属性）的数组。
```

#### `Object.defineProperty`和`Proxy`的区别
- Object.defineProperty
    - Object.defineProperty只能代理某个属性。
    - 只能监听对象(Object)，不能监听数组的变化，无法触发push, pop, shift, unshift,splice, sort, reverse。
    - 必须遍历对象的每个属性
    - 只能劫持当前对象属性，如果想深度劫持，必须深层遍历嵌套的对象
    - 对象上新增属性，Object.defineProperty监听不到
    - 若对象内部属性要全部递归代理，Object.definePropery需要一次完成所有递归，性能比Proxy差。
    - Proxy不兼容IE，Object.defineProperty不兼容IE8及以下
```js
Object.defineProperty(obj,'name',{
  value:'张三',
  writable:false,
  configurable: false,
  enumerable: false,
  get() {
    console.log('get log!');
    return log;
  },
  set(value) {
    log = value;
    archive.push({ val: log });
  }
})
```
- Proxy
    - Proxy可以直接监听对象而非属性
    - Proxy直接可以劫持整个对象,并返回一个新对象。
    - Proxy可以直接监听数组的变化
    - Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的。
    - 对象上新增属性，Proxy可以监听到
    - 若对象内部属性要全部递归代理，Proxy可以只在调用的时候递归
    - Proxy使用上比Object.defineProperty方便多。

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

#### 尾递归
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


### 事件循环（Event Loop）---- （JavaScript的运行机制）----JS异步
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

#### Event Loop即事件循环
Event Loop即事件循环，是指浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210926210917.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922153333.png)
**Event Loop是javascript的执行机制：**
**执行同步任务** -> **执行异步任务** -> **先执行微任务** -> **后执行宏任务**
事件循环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。

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
    - 微任务会全部执行，而宏任务会一个一个来执行
    - 也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）
- 浏览器中的任务源(task):
    - 宏任务(macrotask)：
        - 宿主环境提供的，比如浏览器
        - ajax
        - setTimeout
        - setInterval
        - setTmmediate(只兼容ie)
        - script
        - requestAnimationFrame
        - messageChannel
        - UI渲染
        - 一些浏览器api
        - 事件绑定
        - 回调函数
        - Node中fs可以进行异步I/O操作
    - 微任务(microtask)：
        - Promise（async/await
        - queueMicrotask
        - mutationObserver(浏览器提供)
        - process.nexTick（Node独有的）
process.nextTick1这个地方有点出入，我一般认为`process.nextTick()`推入主线程执行栈栈底，作为执行栈最后一个任务执行)

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

### setTimeout、Promise、Async/Await 的区别
- setTimeout
    - settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行。
- Promise
    - Promise本身是同步的立即执行函数， 当在executor中执行resolve或者reject的时候, 此时是异步操作， 会先执行then/catch等，当主栈完成后，才会去调用resolve/reject中存放的方法执行。
```js
console.log('script start')
let promise1 = new Promise(function (resolve) {
    console.log('promise1')
    resolve()
    console.log('promise1 end')
}).then(function () {
    console.log('promise2')
})
setTimeout(function(){
    console.log('settimeout')
})
console.log('script end')
// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
```
- async/await
    - async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
```js
async function async1(){
   console.log('async1 start');
    await async2();
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}

console.log('script start');
async1();
console.log('script end')

// 输出顺序：script start->async1 start->async2->script end->async1 end
```
- Async/Await 如何通过同步的方式实现异步
    - Async/Await就是一个自执行的generate函数。利用generate函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个promise对象.

### 阻塞了 JS 中的主线程会发生什么情况？
JS如果执行时间过长就会阻塞页面。

假设JS引擎正在进行巨量的计算，此时就算GUI有更新，也会被保存到队列中，等待JS引擎空闲后执行。
然后，由于巨量计算，所以JS引擎很可能很久很久后才能空闲，自然会感觉到巨卡无比。

所以，要尽量避免JS执行时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

### 装箱拆箱，隐式转换
- 显示装箱
    - 显示装箱非常简单，就是通过内置对象或者说基本包装类型对基本数据类型进行操作。
    - 根据基础类型构造一个临时对象，能在基础类型上调用对应对象的原型上的方法。 该临时对象只存在于方法调用那一行代码执行的瞬间，执行方法后立刻被销毁。
```js
// 我们的name是一个对象，能够调用相应的方法或者原型链上的方法。
const name = new String("Uni");
String.prototype.age = "20";
console.log(name.age);
```
- 隐式装箱
    - 创建一个对应类型的实例
    - 在实例中调用需要的方法或属性
    - 销毁这个实例
```js
'lxh'.charAt(0);

const name = "Uni";
let newName = new Object(name);
const len = newName.length;
newName = null;
```
浏览器对于这些常用的一些隐式装箱有着一定的预先处理，为的就是减少性能损耗。



拆箱，就是装箱的反向操作，指的是将引用类型转换为对应的基本类型。常用的就是引用类型的valueOf和toString两个方法。JS标准规定了ToPrimitive用于拆箱转换。
JS标准规定了ToPrimitive函数用于拆箱转换。ToPrimitive会首先调用valueOf 和 toString来获取基本数据类型。

复杂数据类型在隐式转换时，先调用 valueOf，再调用 toString
```js
const bool = new Boolean(false);
console.log(bool.valueOf());    // false

if (!bool.valueOf()) {
    console.log('ok');        // ok
} else {
    console.log('okk');
}
```


### Tree Shaking原理
Tree-Shaking 是一种基于 ES Module 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化。

Tree Shaking已经成为一种应用广泛的性能优化手段。

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
if(process.env.NODE_ENV === 'development'){
  require('./bar');
  exports.foo = 'foo';
}
```
而 ESM 方案则从规范层面规避这一行为，它要求所有的导入导出语句只能出现在模块顶层，且导入导出的模块名必须为字符串常量。ESM 下模块之间的依赖关系是高度确定的，与运行状态无关，编译工具只需要对 ESM 模块做静态分析，就可以从代码字面量中推断出哪些模块值未曾被其它模块使用，这是实现 Tree Shaking 技术的必要条件。
```js
// index.js
import {bar} from './bar';
console.log(bar);

// bar.js
export const bar = 'bar';
export const foo = 'foo';


//bar.js 模块导出了 bar 、foo ，但只有 bar 导出值被其它模块使用，经过 Tree Shaking 处理后，foo 变量会被视作无用代码删除。
```

#### 实现原理
Tree Shaking 是先找出 已使用 的代码，自然剩下的则是 未使用 的代码，最后通过注释的方式分别标注。区分 已使用 和 未使用 的代码后，通过 压缩器 将 未使用 的代码删除。

由于 Tree Shaking 是通过 ES6 Import 和 Export 实现找出 已使用 和 未使用 的代码， 所以 Tree Shaking 使用前提： 是源码必须遵循 ES6 的模块规范 (import & export)，如果是 CommonJS 规范 (require) 则无法使用。

Webpack 中，Tree-shaking 的实现一是先标记出模块导出值中哪些没有被用过(标记的效果就是删除没有被其它模块使用的导出语句)，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：
    - Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中
    - Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用
    - 生成产物时，若变量没有被其它模块使用则删除对应的导出语句
真正执行“Shaking”操作的是 Terser 插件。未使用的变量和模块经过标记后，已经变成一段 Dead Code —— 不可能被执行到的代码，这个时候只需要用 Terser 提供的 DCE 功能就可以删除这一段定义语句，以此实现完整的 Tree Shaking 效果。
    
    - 收集模块导出
    - 标记模块导出
    - 生成代码
    - 删除 Dead Code
    - 结束

- Dead Code 一般具有以下几个特征
    - 代码不会被执行，不可到达
    - 代码执行的结果不会被用到
    - 代码只会影响死变量（只写不读）


## HTTP
### Service Worker有哪些作用
### Cookie、Session、webStorage、localStorage、sessionStorage
#### Cookie
- HTTP 是无状态的协议（对于事务处理没有记忆能力，每次客户端和服务端会话完成时，服务端不会保存任何会话信息）：每个请求都是完全独立的，服务端无法确认当前访问者的身份信息，无法分辨上一次的请求发送者和这一次的发送者是不是同一个人。所以服务器与浏览器为了进行会话跟踪（知道是谁在访问我），就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一浏览器。而这个状态需要通过 cookie 或者 session 去实现。
- cookie 存储在客户端： cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。
- cookie 是不可跨域的： 每个 cookie 都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（靠的是 domain）。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923132748.png)

#### Cookie的使用
cookie 可通过 document.cookie 获取全部 cookie。它是一段字符串，是键值对的形式。
```js
Cookies.set("name", "value", { expires: 7 }); // 设置一个cookie，7天后失效

Cookies.get("name"); // => 'value'

Cookies.remove("name");
```

#### 使用 Cookie 时需要考虑的问题
- 因为存储在客户端，容易被客户端篡改，使用前需要验证合法性
- 不要存储敏感数据，比如用户密码，账户余额
- 使用 httpOnly 在一定程度上提高安全性
- 尽量减少 cookie 的体积，能存储的数据量不能超过 4kb
- 设置正确的 domain 和 path，减少数据传输
- cookie 无法跨域
- 一个浏览器针对一个网站最多存 20 个Cookie，浏览器一般只允许存放 300 个Cookie
- 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token


#### Session
- session 是另一种记录服务器和客户端会话状态的机制
- session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的cookie 中

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923153926.png)

- session 认证流程
    - 用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session
    - 请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器
    - 浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名
    - 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。

SessionID 是连接 Cookie 和 Session 的一道桥梁。

#### 使用 session 时需要考虑的问题
- 将 session 存储在服务器里面，当用户同时在线量比较多时，这些 session 会占据较多的内存，需要在服务端定期的去清理过期的 session
- 当网站采用集群部署的时候，会遇到多台 web 服务器之间如何做 session 共享的问题。
- 当多个应用要共享 session 时，除了以上问题，还会遇到跨域问题，因为不同的应用可能部署的主机不一样，需要在各个应用做好 cookie 跨域的处理。
- sessionId 是存储在 cookie 中的，假如浏览器禁止 cookie 或不支持 cookie 怎么办？ 一般会把 sessionId 跟在 url 参数后面即重写 url，所以 session 不一定非得需要靠 cookie 实现
- 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token

#### Cookie和Session
- 安全性： Session 比 Cookie 安全，Session 是存储在服务器端的，Cookie 是存储在客户端的。
- 存取值的类型不同：Cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，Session 可以存任意数据类型。
- 有效期不同： Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效。
- 存储大小不同： 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie，但是当访问量过多，会占用过多的服务器资源。

#### WebStorage
- webstorage是本地存储，存储在客户端，包括localStorage和sessionStorage；
- localStorage生命周期是永久，这意味着除非用户手动去清除localStorage信息，否则这些信息将永远存在。存放数据大小为一般为5MB,而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信；
- sessionStorage仅在当前会话下有效，关闭页面或浏览器后被清除。存放数据大小为一般为5MB，而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。源生接口可以接受，亦可再次封装来对Object和Array有更好的支持
- WebStorage的目标
    - 提供一种在cookie之外存储会话数据的路径
    - 提供一种存储大量可以跨会话存在的数据的机制
    - HTML5的WebStorage提供了两种API：localStorage（本地存储）和sessionStorage（会话存储）
- 作用域的不同：
    - 不同浏览器无法共享localStorage或sessionStorage中的信息。
    - 相同浏览器的不同页面间可 以共享相同的 localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息。
- 存储大小：
    - localStorage和sessionStorage的存储数据大小一般都是：5MB
- 存储位置：
    - localStorage和sessionStorage都保存在客户端，不与服务器进行交互通信
- 存储内容类型：
    - localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理
- 获取方式：
    - localStorage：window.localStorage;；sessionStorage：window.sessionStorage;
- WebStorage的优点：
    - 存储空间更大：cookie为4KB，而WebStorage是5MB
    - 节省网络流量：WebStorage不会传送到服务器，存储在本地的数据可以直接获取，也不会像cookie一样每次请求都会传送到服务器，所以减少了客户端和服务器端的交互，节省了网络流量对于那种只需要在用户浏览一组页面期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage会非常方便
    - 快速显示：有的数据存储在WebStorage上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快
    - 安全性：WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题
    - WebStorage提供了一些方法，数据操作比cookie方便

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923222357.png)
#### sessionStorage、localStorage和cookie的区别
- 相同点是都是保存在浏览器端、且同源的
- cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下
- 存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
- 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭
- 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；  localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的
- webStorage支持事件通知机制，可以将数据更新的通知发送给监听者
- web Storage的api接口使用更方便
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923222632.png)

localStorage 适合持久化缓存数据，比如页面的默认偏好配置等；sessionStorage 适合一次性临时数据保存。

### HTTP与HTTPS有什么区别？
HTTP与HTTPS的区别， 。
HTTP：是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。

HTTPS：是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是确认网站的真实性。

#### HTTPS和HTTP的区别主要如下：
1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。　　
2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。　　
3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。　　
4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

- HTTPS的优点
    - 使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；
    - HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。
- HTTPS的缺点
    - https 握手阶段比较`费时`，会使页面加载时间延长 50%，增加 10%~20%的耗电。
    - https `缓存`不如 http 高效，会增加数据开销。
    - SSL 证书也需要钱，功能越强大的`证书费`用越高。
    - SSL 证书需要绑定 `IP`，不能再同一个 ip 上绑定多个域名，ipv4 资源支持不了这种消耗

#### https 协议的工作原理
客户端在使用 HTTPS 方式与 Web 服务器通信时有以下几个步骤：
    - 客户端使用 https url 访问服务器，则要求 web 服务器建立 ssl 链接。
    - web 服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），传输给客户端。
    - 客户端和 web 服务器端开始协商 SSL 链接的安全等级，也就是加密等级。
    - 客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。
    - web 服务器通过自己的私钥解密出会话密钥。
    - web 服务器通过会话密钥加密与客户端之间的通信。


### HTTP1.0、HTTP1.1、http2.0 的区别
#### HTTP1.0和HTTP1.1的区别
- 长连接：HTTP1.1支持长连接和请求的流水线处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启长连接keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。
- 节约带宽： HTTP1.0中存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能。HTTP1.1支持只发送header信息（不带任何body信息），如果服务器认为客户端有权限请求服务器，则返回100，客户端接收到100才开始把请求body发送到服务器；如果返回401，客户端就可以不用发送请求body了节约了带宽。
- HOST域：  在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname），HTTP1.0没有host域。随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都支持host域，且请求消息中如果没有host域会报告一个错误（400 Bad Request）。
- 缓存处理：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。
- 错误通知的管理：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。

#### HTTP1.1和HTTP2.0的区别
- 多路复用：HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。HTTP1.1也可以多建立几个TCP连接，来支持处理更多并发的请求，但是创建TCP连接本身也是有开销的。
- 头部数据压缩(采用HPACK压缩算法压缩头部，减小了传输的体积)： 在HTTP1.1中，HTTP请求和响应都是由状态行、请求/响应头部、消息主体三部分组成。一般而言，消息主体都会经过gzip压缩，或者本身传输的就是压缩过后的二进制文件，但状态行和头部却没有经过任何压缩，直接以纯文本传输。随着Web功能越来越复杂，每个页面产生的请求数也越来越多，导致消耗在头部的流量越来越多，尤其是每次都要传输UserAgent、Cookie这类不会频繁变动的内容，完全是一种浪费。HTTP1.1不支持header数据的压缩，HTTP2.0使用HPACK算法对header的数据进行压缩，这样数据体积小了，在网络上传输就会更快。
- 服务器推送： 服务端推送是一种在客户端请求之前发送数据的机制。网页使用了许多资源：HTML、样式表、脚本、图片等等。在HTTP1.1中这些资源每一个都必须明确地请求。这是一个很慢的过程。浏览器从获取HTML开始，然后在它解析和评估页面的时候，增量地获取更多的资源。因为服务器必须等待浏览器做每一个请求，网络经常是空闲的和未充分使用的。为了改善延迟，HTTP2.0引入了server push，它允许服务端推送资源给浏览器，在浏览器明确地请求之前，免得客户端再次创建连接发送请求到服务器端获取。这样客户端可以直接从本地加载这些资源，不用再通过网络。

#### Http3.0 相对于 Http2.0的区别
http 协议是应用层协议，都是建立在传输层之上的。我们也都知道传输层上面不只有 TCP 协议，还有另外一个强大的协议 UDP 协议，2.0 和 1.0 都是基于 TCP 的，因此都会有 TCP 带来的硬伤以及局限性。而 Http3.0 则是建立在 UDP 的基础上。所以其与 Http2.0 之间有质的不同。

- 连接迁移
- 无队头阻塞
- 自定义的拥塞控制
- 前向安全和前向纠错
### HTTP知识点
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
    - 重点区别
        - GET会产生一个TCP数据包，而POST会产生两个TCP数据包。
        - 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200(返回数据);
        - 而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)。


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
### 在交互过程中如果数据传送完了，还不想断开连接怎么办，怎么维持？
在 HTTP 中响应体的 Connection 字段指定为 keep-alive

### Fetch API 与传统 Request 的区别
HTTP数据请求的方式:XMLHttpRequest、ajax、fetch与axios

- ajax
    - 传统 Ajax 指的是 XMLHttpRequest（XHR），多个请求之间如果有先后关系的话，就会出现回调地狱。
- axios
    - 一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，
    - 支持 Promise API
    - 客户端支持防止CSRF
    - 提供了一些并发请求的接口（重要，方便了很多的操作）
    - 拦截请求和响应
    - 转换请求和响应数据
    - 取消请求
    - 自动转换JSON数据
- fetch
    - 语法简洁，更加语义化
    - 基于标准 Promise 实现，支持 async/await
    - 同构方便
    - 更加底层，提供的API丰富（request, response）
    - 脱离了XHR，是ES规范里新的实现方式

    - fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
    - fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
    - fetch不支持超时控制，
    - fetch没有办法原生监测请求的进度，而XHR可以

### 计算机分为哪几层？计算机网络的七个层？
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922213035.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922213526.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922213617.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210929161835.png)


127.0.0.1是本地循环地址，如果本地址无法ping通，则表明本地机tcp/ip协议不能正常工作。
ping命令是使用的网络层协议ICMP

### TCP三次握手和四次挥手
为什么要进行三次握手：为了确认对方的发送和接收能力。

- 第一次握手：建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。
- 第二次握手：服务器收到syn包并确认客户的SYN（ack=j+1），同时也发送一个自己的SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
- 第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。
四次以上都可以，只不过 三次就够了


四次握手：
- **客户端进程发出连接释放报文**，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。
- **服务器收到连接释放报文，发出确认报文**，ACK=1，ack=u+1，并且带上自己的序列号seq=v，此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。
- 客户端收到服务器的确认请求后，此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最 后的数据）。
- **服务器将最后的数据发送完毕后，就向客户端发送连接释放报文**，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。
- **客户端收到服务器的连接释放报文后，必须发出确认**，ACK=1，ack=w+1，而自己的序列号是seq=u+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。
- 服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。

#### 为什么需要等待 2MSL
因为如果不等待的话，如果服务端还有很多数据包要给客户端发，且此时客户端端口被新应用占据，那么就会接收到无用的数据包，造成数据包混乱，所以说最保险的方法就是等服务器发来的数据包都死翘翘了再启动新应用。

1个 MSL 保证四次挥手中主动关闭方最后的 ACK 报文能最终到达对端
1个 MSL 保证对端没有收到 ACK 那么进行重传的 FIN 报文能够到达

如果是三次的话，那么服务端的 ACK 和 FIN 合成一个挥手，那么长时间的延迟可能让 TCP 一位 FIN 没有达到服务器端，然后让客户的不断的重发 FIN

### TCP 滑动窗口
在 TCP 链接中，对于发送端和接收端而言，TCP 需要把发送的数据放到发送缓存区, 将接收的数据放到接收缓存区。而经常会存在发送端发送过多，而接收端无法消化的情况，所以就需要流量控制，就是在通过接收缓存区的大小，控制发送端的发送。如果对方的接收缓存区满了，就不能再继续发送了。而这种流量控制的过程就需要在发送端维护一个发送窗口，在接收端维持一个接收窗口。
TCP 滑动窗口分为两种: 发送窗口和接收窗口。

### UDP和TCP的区别及应用场景
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922215122.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922215218.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922215348.png)

### TCP 拥塞机制
原因是有可能整个网络环境特别差，容易丢包，那么发送端就应该注意了。


主要用三种方法：
    - 慢启动阈值 + 拥塞避免
        - 拥塞窗口（cwnd）
        - 慢启动阈值（ssthresh）
            - 然后采用一种比较保守的慢启动算法来慢慢适应这个网络，在开始传输的一段时间，发送端和接收端会首先通过三次握手建立连接，确定各自接收窗口大小，然后初始化双方的拥塞窗口，接着每经过一轮 RTT（收发时延），拥塞窗口大小翻倍，直到达到慢启动阈值。
            - 然后开始进行拥塞避免，拥塞避免具体的做法就是之前每一轮 RTT，拥塞窗口翻倍，现在每一轮就加一个。
    - 快速重传
        - 在 TCP 传输过程中，如果发生了丢包，接收端就会发送之前重复 ACK，比如 第 5 个包丢了，6、7 达到，然后接收端会为 5，6，7 都发送第四个包的 ACK，这个时候发送端受到了 3 个重复的 ACK，意识到丢包了，就会马上进行重传，而不用等到 RTO （超时重传的时间）
        - 选择性重传：报文首部可选性中加入 SACK 属性，通过 left edge 和 right edge 标志那些包到了，然后重传没到的包
    - 快速恢复
        - 如果发送端收到了 3 个重复的 ACK，发现了丢包，觉得现在的网络状况已经进入拥塞状态了，那么就会进入快速恢复阶段：
            - 会将拥塞阈值降低为 拥塞窗口的一半
            - 然后拥塞窗口大小变为拥塞阈值
            - 接着 拥塞窗口再进行线性增加，以适应网络状况


### WebSocket与Ajax的区别
- 本质不同
    - Ajax 即异步 JavaScript 和 XML，是一种创建交互式网页的应用的网页开发技术
    - websocket 是 HTML5 的一种新协议，实现了浏览器和服务器的实时通信
- 生命周期不同：
    - websocket 是长连接，会话一直保持
    - ajax 发送接收之后就会断开
- 适用范围：
    - websocket 用于前后端实时交互数据
    - ajax 非实时
- 发起人：
    - AJAX 客户端发起
    - WebSocket 服务器端和客户端相互推送


### 跨域的方案
#### 同源是什么？
如果两个URL的协议`protocol`、主机名`host`和端口号`port`都相同的话，则这两个URL是同源。

#### 前后端通讯的方式
- Ajax（同源的通信方式）
- WebSocket（不受同源策略的限制）
- CORS（支持跨域通信，也支持同源通信）

#### 跨域是什么？

**当协议、域名与端口号中任意一个不相同时，都算作不同域，不同域之间相互请求资源的表现(非同源策略请求)，称作”跨域“**。

- 造成跨域的几种常见表现
    - 服务器分开部署（Web服务器 + 数据请求服务器）
    - 本地开发（本地预览项目 调取 测试服务器的数据）
    - 调取第三方平台的接口

#### 跨域的解决方案
- 修改本地HOST
- JSONP
- CORS(（跨域资源共享 Cross-origin resource sharing）允许浏览器向跨域服务器发出XMLHttpRequest请求，从而克服跨域问题，它需要浏览器和服务器的同时支持。 )
- Proxy
- Nginx反向代理
- Post Message（利用`iframe`标签，实现不同域的关联）
- Hash
- WebSocket


1.  **JSONP**
**原理**
    - `JSONP`利用`script`标签不存在域的限制，且定义一个`全局执行上下文`中的函数`func`（用来接收服务器端返回的数据信息）来接收数据，从而实现跨域请求。

**弊端：**
    - 只允许**GET**请求
    - 不安全：只要浏览器支持，且存在浏览器的全局变量里，则谁都可以调用
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210712090223.png)

**手动封装JSONP**

`callback`必须是一个全局上下文中的函数（防止不是全局的函数，我们需要把这个函数放在全局上，并且从服务器端接收回信息时，要浏览器执行该函数）
```js
// 客户端
function jsonp(url, callback) {
  // 把传递的回调函数挂载到全局上 uniqueName变量存储全局的回调函数（确保每次的callback都具有唯一性）
 let uniqueName = `jsonp${new Date().getTime()}`;
  // 套了一层 anonymous function
  // 目的让 返回的callback执行且删除创建的标签
  window[uniqueName] = data => {
   // 从服务器获取结果并让浏览器执行callback
    document.body.removeChild(script);
    delete window[uniqueName];
    callback && callback(data);
  }
  // 处理URL
  url += `${url.includes('?')} ? '&' : '?}callback=${uniqueName}'`;
  // 发送请求
  let script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

// 执行第二个参数 callback，获取数据
jsonp('http://127.0.0.1:1001/list?userName="lsh"', (result) => {
 console.log(result);
})



// 服务器端
// Api请求数据
app.get('/list', (req, res) => {
  // req.query 问号后面传递的参数信息
  // 此时的callback 为传递过来的函数名字 (uniqueName)
 let { callback } = req.query;
  // 准备返回的数据（字符串）
  let res = { code: 0, data: [10,20] };
  let str = `${callback}($(JSON.stringify(res)))`;
  // 返回给客户端数据
  res.send(str);
})



// 服务器请求的 url
Request URL:
 http://127.0.0.1:1001/list?userName="lsh"&callback=jsonp159876002
// 服务器返回的函数callback
 jsonp159876002({"code":0, "data": [10,20]});
// 客户端接收的数据信息
{ code: 0, data: Array(2) }
```




2. CORS（支持跨域通信的Ajax）
上文提到，不允许跨域的根本原因是因为`Access-Control-Allow-Origin`已被禁止。那么只要让`服务器端设置允许源`就可以了。

**原理**
    - 解决掉浏览器的默认安全策略，在服务器端设置允许哪些源请求就可以了

```js
// 服务器端
app.use((req, res, next) => {
 // * 允许所有源（不安全/不能携带资源凭证）
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Credentials", true);
 /* res.header("Access-Control-Allow-Headers", "Content-Type,....");
 res.header("Access-Control-Allow-Methods", "GET,..."); */

 // 试探请求：在CORS跨域请求中，首先浏览器会自己发送一个试探请求，验证是否可以和服务器跨域通信，服务器返回200，则浏览器继续发送真实的请求
 req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});


// 客户端
let xhr = new XMLHttpRequest;
xhr.open('get', 'http://127.0.0.1:1001/list');
xhr.setRequestHeader('Cookie', 'name=jason');
xhr.withCredentials = true;
xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    console.log(xhr.responseText);
  }
};
xhr.send();

// CORS【参考资料】http://www.ruanyifeng.com/blog/2016/04/cors.html
// url（必选），options（可选）
fetch('/some/url/', {
      method: 'get',
 }).then(function (response) {

 }).catch(function (err) {
     // 出错了，等价于 then 的第二个参数，但这样更好用更直观
 });
```

当我们一旦在服务器端设置了允许`任何源`可以请求之后，其实请求是不安全的，并且要求`客户端`不能携带资源凭证（比如上文中的Cookie字段），浏览器端会报错。

告诉我们`Cookie`字段是不安全的也不能被设置的，如果允许源为`'*'`的话也是不允许的。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210712091113.png)

正确写法✅

- 设置单一源（安全/也可以携带资源凭证/只能是单一一个源）
- 也可以动态设置多个源：每一次请求都会走这个中间件，我们首先设置一个白名单，如果当前客户端请求的源在白名单中，我们把`Allow-Origin`动态设置为当前这个源

```js
app.use((req, res, next) => {
  
  // 也可自定义白名单，检验请求的源是否在白名单里，动态设置
  /* let safeList = [
  "http://127.0.0.1:5500",
  xxx,
  xxxxx,
 ]; */
 res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
 res.header("Access-Control-Allow-Credentials", true); // 设置是否可携带资源凭证

 /* res.header("Access-Control-Allow-Headers", "Content-Type,....");
 res.header("Access-Control-Allow-Methods", "GET,..."); */

 // 试探请求：在CORS跨域请求中，首先浏览器会自己发送一个试探请求，验证是否可以和服务器跨域通信，服务器返回200，则浏览器继续发送真实的请求
 req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});

```
**CORS的好处**
- 原理简单，容易配置，允许携带资源凭证
- 仍可以用 `ajax`作为资源请求的方式
- 可以动态设置多个源，通过判断，将`Allow-Origin`设置为当前源

**CORS的局限性**
- 只允许某一个源发起请求
- 如多个源，还需要动态判断




3. Proxy
**Proxy**翻译为“代理”，是由webpack配置的一个插件，叫"webpack-dev-server"（只能在开发环境中使用）
**Proxy**在webpack中的配置

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {...},
  devServer: {
    port: '3000',
    compress: true,
    open: true,
    hot: true,
    proxy: {
      '/': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true
      }
    }
  },
  // 配置WEBPACK的插件
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      filename: `index.html`
    })
  ]
};
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210712091604.png)

**Proxy**代理其实相当于由`webpack-dev-server`配置在本地创建了一个port=3000的服务，利用`node`的中间层代理（分发）解决了浏览器的同源策略限制。
但是它只能在**开发环境**下使用，因为`dev-server`只是一个`webpack`的一个插件；
如果需要在生产环境下使用，需要我们配置`Nginx`反向代理服务器；
另外如果是自己实现`node服务层代理`：无论是开发环境还是生产环境都可以处理（node中间层和客户端是同源，中间层帮助我们向服务器请求数据，再把数据返回给客户端）

**Proxy的局限性**
只能在本地开发阶段使用




4.配置Nginx反向代理

主要作为**生产环境**下跨域的解决方案。
原理：利用Node中间层的分发机制，将请求的URL转向服务器端的地址

配置反向代理
```nginx
server {
 listen: 80;
  server_name: 192.168.161.189;
  # 这个地方有匹配规则
  loaction: {
  proxy_pass_http://127.0.0.1:1001; // 请求转向这个URL地址，服务器地址
    root html;
    index index.html;
  }
}
```


5. POST MESSAG

假设现在有两个页面，分别为A页面`port=1001`、B页面`port=1002`，实现页面A与页面B的页面通信（跨域）

**原理**：
- 把 B页面当做A的子页面嵌入到A页面里，通过`iframe.contentWindow.postMessage`向B页面传递某些信息
- 在B页面中通过`window.onmessage`获取A页面传递过来的信息`ev.data`(见下代码)
- 同理在B页面中通过`ev.source.postMessage`向A页面传递信息
- 在A页面中通过`window.onmessage`获取B页面传递的信息

主要利用内置的`postMessage`和`onmessage`传递信息和接收信息。

```JS
// A 页面
// 把 B页面当做A的子页面嵌入到A页面里
<iframe id="iframe" src="http://127.0.0.1:1002/B.html" frameborder="0" style="display: none;"></iframe>
<script>
  iframe.onload = function () {
    iframe.contentWindow.postMessage('珠峰培训', 'http://127.0.0.1:1002/');
  }
  //=>监听B传递的信息
  window.onmessage = function (ev) {
    console.log(ev.data);
  }
</script>




// B页面
<script>
  //=>监听A发送过来的信息
  window.onmessage = function (ev) {
    // console.log(ev.data);
    //=>ev.source:A
    ev.source.postMessage(ev.data + '@@@', '*');
  }
</script>
```

5. WebSocket
```js
      // Websocket【参考资料】http://www.ruanyifeng.com/blog/2017/05/websocket.html
      var ws = new WebSocket('wss://echo.websocket.org');
      // 发送消息
      ws.onopen = function (evt) {
          console.log('Connection open ...');
          ws.send('Hello WebSockets!');
      };
      // 接收消息
      ws.onmessage = function (evt) {
          console.log('Received Message: ', evt.data);
          ws.close();
      };
      // 关闭连接
      ws.onclose = function (evt) {
          console.log('Connection closed.');
      };
```
### XSS 攻击和 CSRF 攻击各自的原理是什么？两者又有什么区别？以及如何防范？
1、XSS 攻击
- 概念
    - XSS（Cross Site Scripting）：跨域脚本攻击。
- 原理
    - 不需要你做任何的登录认证，它会通过合法的操作（比如在 url 中输入、在评论框中输入），向你的页面注入脚本（可能是 js、hmtl 代码块等）。
- 防范
    - 编码；对于用户输入进行编码。
    - 过滤；移除用户输入和事件相关的属性。(过滤 script、style、iframe 等节点)
    - 校正；使用 DOM Parse 转换，校正不配对的 DOM 标签。
    - HttpOnly
- 分类
    - 反射型(非持久)：点击链接，执行脚本
    - 存储型(持久)：恶意输入保存数据库，其他用户访问，执行脚本
    - 基于 DOM：恶意修改 DOM 结构，基于客户端


2. CSRF 攻击
- 概念
    - SRF（Cross-site request forgery）：跨站请求伪造。
- 原理
    - 登录受信任网站 A，并在本地生成 Cookie。（如果用户没有登录网站 A，那么网站 B 在诱导的时候，请求网站 A 的 api 接口时，会提示你登录）
    - 在不登出 A 的情况下，访问危险网站 B（其实是利用了网站 A 的漏洞）。
- 防范
    - token 验证；
    - 隐藏令牌；把 token 隐藏在 http 请求的 head 中。
    - referer 验证；验证页面来源。
- 两者区别
    - CSRF：需要用户先登录网站 A，获取 cookie。XSS：不需要登录。
    - CSRF：是利用网站 A 本身的漏洞，去请求网站 A 的 api。XSS：是向网站 A 注入 JS 代码，然后执行 JS 里的代码，篡改网站 A 的内容。

### CDN
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923075356.png)
#### 简单介绍
把大量资源集中到单一节点进行分发，恐怕很难有某个机房可以支撑得住这么大的流量。

内容分发网络（Content Dilivery Network）的互联网底层建设(CDN)。内容分发网络（Content Dilivery Network，CDN）是一个专门用来分发内容的分布式应用。

CDN 构建在现有的互联网之上，通过在各地部署数据中心，让不同地域的用户可以就近获取内容。(这里的内容通常指的是文件、图片、视频、声音、应用程序安装包等，它们具有一个显著的特征——无状态，或者说是静态的。)

需要考虑到流量、单点故障、延迟等因素。在离用户更近的地理位置提供资源，可以减少延迟。按照地理位置分散地提供资源，也可以降低中心化带来的服务压力。

技术上全面解决由于网络带宽小、用户访问量大、网点分布不均等原因，提高用户访问网站的响应速度、减少带宽预算分配、改善内容可用性、增强网站安全性

#### 内容分发
CDN 的工作原理就是将您源站的资源缓存到位于全球各地的 CDN 节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验。

CDN 是一个分布式的内容分发网络。当用户请求一个网络资源时，用户请求的是 CDN 提供的资源。和域名系统类似，当用户请求一个资源时，首先会接触到一个类似域名系统中目录的服务，这个服务会告诉用户究竟去哪个 IP 获取这个资源。


事实上，很多大型的应用，会把 DNS 解析作为一种负载均衡的手段。当用户请求一个网址的时候，会从该网站提供的智能 DNS 中获取网站的 IP。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923072131.png)
- 当用户点击网站页面上的内容URL，先经过本地DNS系统解析，如果本地DNS服务器没有相应域名的缓存，则本地DNS系统会将域名的解析权交给CNAME指向的CDN专用DNS服务器。
- CDN的DNS服务器将CDN的全局负载均衡设备IP地址返回给用户。
- 用户向CDN的全局负载均衡设备发起URL访问请求。
- CDN全局负载（CDN 的智能 DNS ）均衡设备根据用户IP地址，以及用户请求的URL，选择一台用户所属区域的区域负载均衡设备，并将请求转发到此设备上。
- 区域负载均衡设备会选择一个最优的缓存服务器节点，并从缓存服务器节点处得到缓存服务器的IP地址，最终将得到的IP地址返回给全局负载均衡设备：
    - 根据用户IP地址，判断哪一个边缘节点距用户最近；
    - 根据用户所请求的URL中携带的内容名称，判断哪一个边缘节点上有用户所需内容；
    - 查询各个边缘节点当前的负载情况，判断哪一个边缘节点尚有服务能力。
- 全局负载均衡设备把服务器的IP地址返回给用户。
- 用户向缓存服务器发起请求，缓存服务器响应用户请求，将用户所需内容传送到用户终端。如果这台缓存服务器上并没有用户想要的内容，而区域均衡设备依然将它分配给了用户，那么这台服务器就要向它的上一级缓存服务器请求内容，直至追溯到网站的源服务器将内容拉到本地。

在上面整个过程当中，CDN 的智能 DNS 还充当了负载均衡的作用。如果一个节点压力过大，则可以将流量导向其他的节点。

#### CDN组成
CDN网络的主要有中心节点和边缘节点。
- 中心节点
    - 中心节点包括CDN网管中心和全局负载均衡DNS重定向解析系统，负责整个CDN网络的分发及管理
- 边缘节点
    - CDN边缘节点主要指异地分发节点，由负载均衡设备、高速缓存服务器两部分组成。
        - 负载均衡设备负责每个节点中各个Cache的负载均衡，保证节点的工作效率；同时还负责收集节点与周围环境的信息，保持与全局负载均衡DNS的通信，实现整个系统的负载均衡。
        - 高速缓存服务器（Cache）负责存储客户网站的大量信息，就像一个靠近用户的网站服务器一样响应本地用户的访问请求。通过全局负载均衡DNS的控制，用户的请求被透明地指向离他最近的节点，节点中Cache服务器就像网站的原始服务器一样，响应终端用户的请求。因其距离用户更近，故其响应时间才更快。

#### 回溯
CDN 想象成一个分布式的分级缓存，再加上数据库的两层设计。
在 CDN 的设计当中，CDN 实际上提供的是数据的缓存。而原始数据，则由服务的提供者提供。

用户请求静态资源通常用自己的域名（防止跨域和一些安全问题）。为了让用户请求的是自己的网站，而使用的是 CDN 的服务，这里会使用 CNAME 让自己的域名作为 CDN 域名的一个别名。当请求到 CDN 服务的时候，会首先由 CDN 的 DNS 服务帮助用户选择一个最优的节点，这个 DNS 服务还充当了负载均衡的作用。接下来，用户开始向 CDN 节点请求资源。如果这个时候资源已经过期或者还没有在 CDN 节点上，就会从源站读取数据，这个步骤称为CDN 的回源。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923073122.png)

CDN 节点到源站请求资源，重新设置缓存。通常服务提供方在使用 CDN 的时候，会在自己的某个域名发布静态资源，然后将这个域名交给 CDN。

比如源站在 s.example.com 中发布静态资源，然后在 CDN 管理后台配置了这个源站。在使用 CDN 时，服务提供方会使用另一个域名，比如说 b.example.com。然后配置将 b.example.com 用 CNAME 记录指向 CDN 的智能 DNS。


这个时候，如果用户下载b.example.com/a.jpg，CDN 的智能 DNS 会帮用户选择一个最优的 IP 地址（最优的 CDN 节点）响应这次资源的请求。如果这个 CDN 节点没有 a.jpg，CDN 就会到 s.example.com 源站去下载，缓存到 CDN 节点，然后再返回给用户。

CDN 回源有 3 种情况，
- 一种是 CDN 节点没有对应资源时主动到源站获取资源；
- 另一种是缓存失效后，CDN 节点到源站获取资源；
- 还有一种情况是在 CDN 管理后台或者使用开放接口主动刷新触发回源。

### 缓存
#### http 缓存
浏览器缓存(Brower Caching)是浏览器对之前请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力

http缓存机制主要在http响应头中设定，响应头中相关字段为Expires、Cache-Control、Last-Modified、Etag。
- 缓存相关 header
    - Expires：响应头，代表该资源的过期时间。
    - Cache-Control：请求/响应头，缓存控制字段，精确控制缓存策略。
    
    
    - If-Modified-Since：请求头，资源最近修改时间，由浏览器告诉服务器。
    - Last-Modified：响应头，资源最近修改时间，由服务器告诉浏览器。

    - Etag：响应头，资源标识，由服务器告诉浏览器。
    - If-None-Match：请求头，缓存资源标识，由浏览器告诉服务器。
    
    - If-Modified-Since 和 Last-Modified
    - Etag 和 If-None-Match

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924072012.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924074826.png)

强缓存和协商缓存最大也是最根本的区别是：强缓存命中的话不会发请求到服务器（比如chrome中的200 from memory cache），协商缓存一定会发请求到服务器，通过资源的请求首部字段验证资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的实体，而是通知客户端可以从缓存中加载这个资源（304 not modified）


#### 强缓存
不需要发送请求到服务端，直接读取浏览器本地缓存，在 Chrome 的 Network 中显示的 HTTP 状态码是 200 ，在 Chrome 中，强缓存又分为 Disk Cache (存放在硬盘中)和 Memory Cache (存放在内存中)，存放的位置是由浏览器控制的。是否强缓存由 Expires、Cache-Control 和 Pragma 3 个 Header 属性共同来控制。

- Expires
    - Expires：Expires的值是一个 HTTP 日期，在浏览器发起请求时，会根据系统时间和 Expires 的值进行比较，如果系统时间超过了 Expires 的值，缓存失效。由于和系统时间进行比较，所以当系统时间和服务器时间不一致的时候，会有缓存有效期不准的问题。Expires 的优先级在三个 Header 属性中是最低的。
 - Cache-Control：Cache-Control 是 HTTP/1.1 中新增的属性，在请求头和响应头中都可以使用，常用的属性值如有
    - max-age：单位是秒，缓存时间计算的方式是距离发起的时间的秒数，超过间隔的秒数缓存失效
    - no-cache：不使用强缓存，需要与服务器验证缓存是否新鲜。
    - no-store：禁止使用缓存（包括协商缓存），每次都向服务器请求最新的资源。
    - private：专用于个人的缓存，中间代理、CDN 等不能缓存此响应
    - public：响应可以被中间代理、CDN 等缓存
    - must-revalidate：在缓存过期前可以使用，过期后必须向服务器验证
    - 浏览器先检查 Cache-Control，如果有，则以 Cache-Control 为准，忽略 Expires。如果没有 Cache-Control，则以 Expires 为准。
    - Cache-Control 对缓存的控制粒度更细，包括缓存代理服务器的缓存控制。
- Pragma
    - Pragma 只有一个属性值，就是 no-cache ，效果和 Cache-Control 中的 no-cache 一致，不使用强缓存，需要与服务器验证缓存是否新鲜，在 3 个头部属性中的优先级最高。
    - Pragma 和 Cache-Control 同时存在的时候，Pragma 的优先级高于 Cache-Control。
    - 因为它优先级最高，当存在时一定不会命中强缓存。

#### 协商缓存
当浏览器的强缓存失效的时候或者请求头中设置了不走强缓存，并且在请求头中设置了If-Modified-Since 或者 If-None-Match 的时候，会将这两个属性值到服务端去验证是否命中协商缓存，如果命中了协商缓存，会返回 304 状态，加载浏览器缓存，并且响应头会设置 Last-Modified 或者 ETag 属性。

-  ETag/If-None-Match
    -  ETag/If-None-Match 的值是一串 hash 码，代表的是一个资源的标识符，当服务端的文件变化的时候，它的 hash码会随之改变，通过请求头中的 If-None-Match 和当前文件的 hash 值进行比较，如果相等则表示命中协商缓存。ETag 又有强弱校验之分，如果 hash 码是以 "W/" 开头的一串字符串，说明此时协商缓存的校验是弱校验的，只有服务器上的文件差异（根据 ETag 计算方式来决定）达到能够触发 hash 值后缀变化的时候，才会真正地请求资源，否则返回 304 并加载浏览器缓存。
    -   If-Modified-Since是一个请求首部字段，并且只能用在GET或者HEAD请求中。
    -   ETag优先级比Last-Modified高，同时存在时会以ETag为准。
    -   发现有If-None-Match，则比较 If-None-Match 的 Etag 值，忽略If-Modified-Since的比较。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924073615.png)
- Last-Modified/If-Modified-Since
    -  Last-Modified/If-Modified-Since 的值代表的是文件的最后修改时间，第一次请求服务端会把资源的最后修改时间放到 Last-Modified 响应头中，第二次发起请求的时候，请求头会带上上一次响应头中的 Last-Modified 的时间，并放到 If-Modified-Since 请求头属性中，服务端根据文件最后一次修改时间和 If-Modified-Since 的值进行比较，如果相等，返回 304 ，并加载浏览器缓存。

    
ETag/If-None-Match 的出现主要解决了 Last-Modified/If-Modified-Since 所解决不了的问题：
    - 某些情况下服务器无法获取资源的最后修改时间
    - 如果文件的修改频率在秒级以下，Last-Modified/If-Modified-Since 会错误地返回 304。Last-Modified只能精确到秒
    - 如果文件被修改了，但是内容没有任何变化的时候，Last-Modified/If-Modified-Since 会错误地返回 304。使用ETag可以正确缓存



不管用 Expires 还是 Cache-Control，他们都只能够控制缓存是否过期，但是在缓存过期之前，浏览器是无法得知服务器上的资源是否变化的。只有当缓存过期后，浏览器才会发请求询问服务器。
- 我们不让 html 文件缓存，每次访问 html 都去请求服务器。所以浏览器每次都能拿到最新的html资源。
    -  html 中 a.js 的版本号。
    - 以版本号来区分，也可以以 MD5hash 值来区分

```js
<script src="http://test.com/a.js?version=0.0.2"></script>


<script src="http://test.com/a.【hash值】.js"></script>
```
#### 缓存场景
对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略。

### DNS过程
域名解析就是将域名转换为IP地址的过程。（因为想要访问一台服务器，最终是靠IP地址访问的，而不是靠域名访问的，他们的之间的映射关系保存在本地缓存和网络上的各种域名解析服务器中）

- 第一步
    - 客户端计算机发起 DNS 解析请求，将域名发送给同一网段的 DNS 服务器
- 第二步
    - 注册在客户端计算机上的 DNS 服务器会优先从缓存中查找该域名对应的 IP 地址，当缓存中的 IP 地址有效时则直接返回给客户端计算机。若失效或不存在时则将该域名发送给根域的 DNS 服务器，开始查询操作。
- 第三步
    - 根域服务器拿到需要解析的域名后，开始在记录中查询该域名对应的顶级域的 DNS 服务器信息，查到后将顶级域的DNS 服务器的 IP 地址回传给客户端委托 DNS 查询的服务器。
- 第四步
    - 被委托查询域名信息的 DNS 服务器拿到该域名对应的顶级域的 DNS服务器的 IP（也就是 .com 域对应的 IP） 地址后 ，继续使用该 IP 地址向顶级域服务器发起解析请求。也就是去 .com 域对应的 DNS 服务器去查询。
- 第五步
    - .com 域对应的 DNS 服务器收到解析请求后，开始查询域名下一级域对应的 DNS 服务器信息，查询到这一级域对应的 DNS 服务器信息后，将其对应的 IP 地址回传给客户端就近的DNS服务器。
- 第六步
    - 整个查询过程就这样一级接一级的查询下去，最终会找到完整域名所对应的服务器 IP 地址。找到后同样会回传给客户端委托查询域名信息的 DNS 服务器，然后该 DNS 服务器会将该 IP 地址发送回客户端计算机，同时将本次的查询结果保存在缓存中，以备下次查询是直接使用（有效期内）。


## 页面渲染和性能优化
### （浏览器从输入 url 到页面渲染的整个流程）页面渲染
很多大公司面试喜欢问这样一道面试题，输入URL到看见页面发生了什么？
```md
- DNS解析
- 发起TCP连接
- 发送HTTP请求
- 服务器处理请求并返回HTTP报文
- 浏览器解析渲染页面
- 连接结束。
```
```md
浏览器地址栏输入 URL 并回车
浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期
DNS 解析 URL 对应的 IP
根据 IP 建立 TCP 连接（三次握手）
发送 http 请求
服务器处理请求，浏览器接受 HTTP 响应
浏览器解析并渲染页面
关闭 TCP 连接（四次握手）
```

#### DNS解析
详情请见  面试题目中的DNS过程
可以优化的点:
    - DNS缓存:从离浏览器的距离排序的话，有以下几种: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。
    - DNS负载均衡:DNS可以返回一个合适的机器的IP给用户，例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等，这种过程就是DNS负载均衡。
#### 发起TCP连接
TCP提供一种可靠的传输，这个过程涉及到三次握手，四次挥手，TCP提供一种面向连接的，可靠的字节流服务。
- 三次握手
    - 第一次握手：
        - 客户端发送syn包(Seq=x)到服务器，并进入SYN_SEND状态，等待服务器确认；
    - 第二次握手
        - 服务器收到syn包，必须确认客户的SYN（ack=x+1），同时自己也发送一个SYN包（Seq=y），即SYN+ACK包，此时服务器进入SYN_RECV状态；
    - 第三次握手
        - 客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=y+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。
        - 握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。理想状态下，TCP连接一旦建立，在通信双方中的任何一方主动关闭连接之前，TCP 连接都将被一直保持下去。
    三次握手是为了防止失效的连接请求报文段突然又传送到主机B，因而产生错误。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924215349.png)

-  四次挥手
    -  数据传输完毕后，双方都可释放连接。最开始的时候，客户端和服务器都是处于ESTABLISHED状态，假设客户端主动关闭，服务器被动关闭。
    -  第一次挥手：
        -  客户端发送一个FIN，用来关闭客户端到服务器的数据传送，也就是客户端告诉服务器：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，客户端依然会重发这些数据)，但是，此时客户端还可 以接受数据。FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。
    - 第二次握手：
        - 服务器收到FIN包后，发送一个ACK给对方并且带上自己的序列号seq，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）。此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。
    - 第三次握手
        - 服务器发送一个FIN，用来关闭服务器到客户端的数据传送，也就是告诉客户端，我的数据也发送完了，不会再给你发数据了。由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。
    - 第四次握手
        - 主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924215839.png)

- 为什么客户端最后还要等待2MSL？
    - MSL（Maximum Segment Lifetime），TCP允许不同的实现可以设置不同的MSL值。
    - 第一，保证客户端发送的最后一个ACK报文能够到达服务器，因为这个ACK报文可能丢失，站在服务器的角度看来，我已经发送了FIN+ACK报文请求断开了，客户端还没有给我回应，应该是我发送的请求断开报文它没有收到，于是服务器又会重新发送一次，而客户端就能在这个2MSL时间段内收到这个重传的报文，接着给出回应报文，并且会重启2MSL计时器。
    - 第二，防止类似与“三次握手”中提到了的“已经失效的连接请求报文段”出现在本连接中。客户端发送完最后一个确认报文后，在这个2MSL时间中，就可以使本连接持续的时间内所产生的所有报文段都从网络中消失。这样新的连接中不会出现旧连接的请求报文。

- 为什么建立连接是三次握手，关闭连接确是四次挥手呢？
    - 建立连接的时候， 服务器在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。
而关闭连接时，服务器收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，己方ACK和FIN一般都会分开发送，从而导致多了一次。

#### 发送HTTP请求
请看HTTP和缓存的总结：
- 请求
    - 请求行
        - 请求行的格式为Method Request-URL HTTP-Version CRLF eg: GET index.html HTTP/1.1
        - 常用的方法有: GET, POST, PUT, DELETE, OPTIONS, HEAD。
        - 常见的请求方法区别：这里主要展示POST和GET的区别
            - GET在浏览器回退时是无害的，而POST会再次提交请求。
            - GET产生的URL地址可以被Bookmark，而POST不可以。
            - GET请求会被浏览器主动cache，而POST不会，除非手动设置。
            - GET请求只能进行url编码，而POST支持多种编码方式。
            - GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
            - GET请求在URL中传送的参数是有长度限制的，而POST么有。
            - 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
            - GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
            - GET参数通过URL传递，POST放在Request body中。
            - GET会产生一个TCP数据包，而POST会产生两个TCP数据包。
                - 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200(返回数据);
                - 而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)。
    - 请求报头
        - 请求报头允许客户端向服务器传递请求的附加信息和客户端自身的信息。
            - 请求报头中使用了Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Cookie等字段。Accept用于指定客户端用于接受哪些类型的信息，Accept-Encoding与Accept类似，它用于指定接受的编码方式。Connection设置为Keep-alive用于告诉客户端本次HTTP请求结束之后并不需要关闭TCP连接，这样可以使下次HTTP请求使用相同的TCP通道，节省TCP连接建立的时间。
    - 请求正文
        - 当使用POST, PUT等方法时，通常需要客户端向服务器传递数据。这些数据就储存在请求正文中。在请求包头中有一些与请求正文相关的信息，例如: 现在的Web应用通常采用Rest架构，请求的数据格式一般为json。这时就需要设置Content-Type: application/json。
    - 请求正文
前面基础介绍，在本文档的缓存知识点这个专题下面。
- 缓存
    - 强制缓存
        - 当缓存数据库中有客户端需要的数据，客户端直接将数据从其中拿出来使用（如果数据未失效），当缓存服务器没有需要的数据时，客户端才会向服务端请求。
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211012164423.png)
    - 协商缓存
        - 又称对比缓存。客户端会先从缓存数据库拿到一个缓存的标识，然后向服务端验证标识是否失效，如果没有失效服务端会返回304，这样客户端可以直接去缓存数据库拿出数据，如果失效，服务端会返回新的数据
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211012164452.png)
    - 强制缓存的优先级高于协商缓存，若两种缓存皆存在，且强制缓存命中目标，则协商缓存不再验证标识。
    - 缓存的优点
        - 减少了冗余的数据传递，节省宽带流量
        - 减少了服务器的负担，大大提高了网站性能
        - 加快了客户端加载网页的速度 这也正是HTTP缓存属于客户端缓存的原因。
#### 服务器处理请求并返回HTTP报文
请看HTTP和缓存的总结：
- 响应
    - 状态码 
        - 状态码是由3位数组成，第一个数字定义了响应的类别，且有五种可能取值:
            - 1xx：指示信息–表示请求已接收，继续处理。
            - 2xx：成功–表示请求已被成功接收、理解、接受。
            - 3xx：重定向–要完成请求必须进行更进一步的操作。
            - 4xx：客户端错误–请求有语法错误或请求无法实现。
            - 5xx：服务器端错误–服务器未能实现合法的请求。
        - 常见状态码区别
            - 200 成功:请求成功，通常服务器提供了需要的资源。
            - 204 无内容:服务器成功处理了请求，但没有返回任何内容。
            - 301 永久移动:请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
            - 302 临时移动：服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。
            - 304 未修改：自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。
            - 400 错误请求：服务器不理解请求的语法。
            - 401 未授权:请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
            - 403 禁止:服务器拒绝请求。
            - 404 未找到:请求格式正确，但是由于含有语义错误，无法响应
            - 500 服务器内部错误:服务器遇到错误，无法完成请求。
    - 响应报头：响应报头字段有: Server, Connection...。
    - 响应报文：服务器请求的HTML,CSS,JS文件就放在这里面

#### 浏览器解析渲染页面
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210926121230.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210926125828.png)
注意：上图流程中有很多连接线，这表示了Javascript动态修改了DOM属性或是CSS属性会导致重新Layout，但有些改变不会重新Layout，就是上图中那些指到天上的箭头，比如修改后的CSS rule没有被匹配到元素。

这个图就是Webkit解析渲染页面的过程。
    - 解析HTML形成DOM树
    - 解析CSS形成CSSOM 树
    - 合并DOM树和CSSOM树形成渲染树
    - 浏览器开始渲染并绘制页面：这个过程涉及两个比较重要的概念回流和重绘，DOM结点都是以盒模型形式存在，需要浏览器去计算位置和宽度等，这个过程就是回流。等到页面的宽高，大小，颜色等属性确定下来后，浏览器开始绘制内容，这个过程叫做重绘。浏览器刚打开页面一定要经过这两个过程的，但是这个过程非常非常非常消耗性能，所以我们应该尽量减少页面的回流和重绘

**回流必定会发生重绘，重绘不一定会引发回流。**
性能优化之回流重绘
- 回流
    - 当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
    - 会导致回流的操作：
        - 页面首次渲染
        - 浏览器窗口大小发生改变
        - 元素尺寸或位置发生改变（边距、填充、边框、宽度和高度）
        - 元素内容变化（文字数量或图片大小等等）（比如用户在input框中输入文字）
        - 元素字体大小变化
        - 添加或者删除可见的DOM元素
        - 激活CSS伪类（例如：:hover）
        - 查询某些属性或调用某些方法
        - 设置 style 属性的值
        ````css
            1. clientWidth、clientHeight、clientTop、clientLeft
            2. offsetWidth、offsetHeight、offsetTop、offsetLeft
            3. scrollWidth、scrollHeight、scrollTop、scrollLeft
            4. scrollIntoView()、scrollIntoViewIfNeeded()
            5. getComputedStyle()
            6. getBoundingClientRect()
            7. scrollTo()
        ```
- 重绘
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210926130248.png)
    - 当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。
- 优化
    - css方面优化
        - 避免使用table布局。可能很小的一个小改动会造成整个 table 的重新布局。
        - 尽可能在DOM树的最末端改变class。
        - 避免设置多层内联样式。
        - 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame。将动画效果应用到position属性为absolute或fixed的元素上。
        - 避免使用CSS表达式（例如：calc()）。
        - 使用 transform 替代 top
        - 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
        - CSS 选择符从右往左匹配查找，避免节点层级过多
        - 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层。
    - js方面的优化
        - 不要把节点的属性值放在一个循环里当成循环里的变量。
        - 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
        - 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
        - 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
        - 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
        - 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

- JS的解析
    - JS的解析是由浏览器的JS引擎完成的。由于JavaScript是单进程运行，也就是说一个时间只能干一件事，干这件事情时其他事情都有排队，但是有些人物比较耗时（例如IO操作），所以将任务分为同步任务和异步任务，所有的同步任务放在主线程上执行，形成执行栈，而异步任务等待，当执行栈被清空时才去看看异步任务有没有东西要搞，有再提取到主线程执行，这样往复循环，就形成了Event Loop事件循环，下面来看看大人物
- Event Loop
    - JavaScript是一门单线程语言，尽管H5中提出了Web-Worker，能够模拟实现多线程，但本质上还是单线程，说它是多线程就是扯淡。
    - 前面的JS中有  Event Loop  这个知识点
### 性能优化
- 性能优化原则
    - 多使用内存、缓存或其他方法。
    - 减少 CPU 计算量，减少网络加载耗时。
    - 适用于所有编程的优化方法 —— 用空间来换时间。
- 性能优化的方法
    -  让加载更快
        -  减少资源体积
            - 压缩代码： 可以通过压缩代码来减少资源体积，包括 js 文件、 css 文件和图片都可以进行压缩。同时服务器端 可以通过 gzip 算法来对资源进行压缩。
        - 减少请求次数
            - 合并代码： 比如说我们写了三四个文件，但通过打包可能就只剩下一个文件
            - SSR服务器端渲染：
                - 服务端把网页和数据一起加载，一起渲染。
                - 早期的 JSP 、ASP 、PHP，现在的 vue SSR 、React SSR
            - 缓存
        - 使用更快的网络
            - 通过 CDN 
    -  让渲染更快
        -  html、css、js和图片层面
            -  css 放在 head ， JS 放在 body 最下面；
            -  懒加载（图片懒加载，上滑加载更多）。
        - 从DOM层面
            - 对 DOM 查询进行缓存；
            - 从频繁进行 DOM 操作，变为合并到一起进行 DOM 结构插入；
        - 防抖 debounce 和 节流 throttle
### 提高页面渲染效率
基于上面介绍的浏览器渲染原理，DOM 和 CSSOM 结构构建顺序，初始化可以对页面渲染做些优化，提升页面性能。
    - JS优化： <script> 标签加上 defer属性 和 async属性 用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。
        - defer属性： 用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
        - async属性： HTML5新增属性，用于异步下载脚本文件，下载完毕立即解释执行代码。
    - CSS优化： <link> 标签的 rel属性 中的属性值设置为 preload 能够让你在你的HTML页面中可以指明哪些资源是在页面加载完成后即刻需要的,最优的配置加载顺序，提高渲染性能
    - HTML文档结构层次尽量少，最好不深于六层；
    - 脚本尽量后放，放在前即可；
    - 少量首屏样式内联放在标签内；
    - 样式结构层次尽量简单；
    - 在脚本中尽量减少DOM操作，尽量缓存访问DOM的样式信息，避免过度触发回流；
    - 减少通过JavaScript代码修改元素样式，尽量使用修改class名方式操作样式或动画；
    - 动画尽量使用在绝对定位或固定定位的元素上；
    - 隐藏在屏幕外，或在页面滚动时，尽量停止动画；
    - 尽量缓存DOM查找，查找器尽量简洁；
    - 涉及多域名的网站，可以开启域名预解析

### 提高首屏展示效率
- Vue-Router路由懒加载（利用Webpack的代码切割）
- 使用CDN加速，将通用的库从vendor进行抽离
- Nginx的gzip压缩
- Vue异步组件
- 服务端渲染SSR
- 如果使用了一些UI库，采用按需加载
- Webpack开启gzip压缩
- 如果首屏为登录页，可以做成多入口
- Service Worker缓存文件处理
- 使用link标签的rel属性设置   prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch通常用于加速下一次导航）、preload（preload将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度）


基于上面介绍的浏览器渲染原理，DOM 和 CSSOM 结构构建顺序，初始化可以对页面渲染做些优化，提升页面性能。
很多人在构建前端项目时会发现打包出来的chunk.vendors.xxx.js文件实在是太大,导致首屏加载速度很慢
    - 使用webpack-bundle-analyzer分析前端项目包大小, 找出问题源头.
```js
// vue.config.js
chainWebpack: (config) => {
  config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
}
````
    - 去掉vuecli打包生成的map文件：这些文件用于错误时给出准确的提示,线上环境是不需要的。
```js
// vue.config.js
productionSourceMap: false
```
    - CDN引入需要的资源
```js
// vue.config.js
const cdn = {
  css: [
    // antd css 由于引入失败只好放弃了antd的按需引入
  ],
  js: [
    // vue
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
    // vue-router
    'https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js',
    // vuex
    'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.2/vuex.min.js',
    // axios
    'https://cdn.bootcdn.net/ajax/libs/axios/0.18.0/axios.min.js',
    // moment
    'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js',
  ],
};

chainWebpack: (config) => {
  // 正式环境配置cdn引入
  if (process.env.NODE_ENV === 'production') {
    let externals = {
      vue: 'Vue',
      axios: 'axios',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      moment: 'moment',
    };
    config.externals(externals);
    // 通过 html-webpack-plugin 将 cdn 注入到 index.html 之中
    config.plugin('html').tap((args) => {
      args[0].cdn = cdn;
      return args;
    });
  }
},


//public/index.html
<% if (process.env.NODE_ENV === 'production') { %>
<% for(var css of htmlWebpackPlugin.options.cdn.css) { %>
<link rel="stylesheet" href="<%=css%>" as="style">
<% } %>
<% for(var js of htmlWebpackPlugin.options.cdn.js) { %>
<script src="<%=js%>"></script>
<% } %>
<% } %>
```
    - 开启gzip打包
```js
// vue.config.js
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
configureWebpack: (config) => {
  // 代码 gzip
  const productionGzipExtensions = ['html', 'js', 'css'];
  config.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240, // 只有大小大于该值的资源会被处理 10240
      minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
      deleteOriginalAssets: false, // 删除原文件
    })
  );
},

//同时需要配置nginx才可支持gzip
// nginx.conf
http {
  #nginx开启gzip
  #前端文件在build的时候已经配置好压缩,需要再配置一下nginx;
  gzip on; 
  gzip_static on;
  gzip_buffers 4 16k;
  gzip_comp_level 5;
  gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg 
              image/gif image/png;   
}
```
    - 路由懒加载
```js
// router.js
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Chat',
    component: () => import('@/views/GenalChat.vue'),
  },
];
```



#### 首屏性能衡量的指标
1. FPS：最能反映页面性能的指标FPS(frame per second)，一般系统设置屏幕的刷新率为60fps。小于24就会出现明显的卡顿
2. DOMContentLoaded：DOM加载并解析完成会触发DOMContentLoaded事件，如果源码输出的内容太多，客户端解析DOM的时间也会变长，例如增加2000个嵌套层叠可能会相应增加50-200ms，尽量保证首屏输出即可，后续的内容只保留钩子，利用js渲染。
3. 流畅度：FPS 值越高，视觉呈现越流畅，在等待的过程中可以加入一些视觉缓冲。
4. 首屏加载时间：通过`window.performance.timing`来计算出来。
```md
1. DNS解析耗时: domainLookupEnd - domainLookupStart
2. TCP连接耗时: connectEnd - connectStart
3. SSL安全连接耗时: connectEnd - secureConnectionStart
4. 网络请求耗时(TTFB): responseStart - requestStart
5. 数据传输耗时: responseEnd - responseStart
6. DOM解析耗时: domInteractive - responseEnd
7. 资源加载耗时: loadEventStart - domContentLoadedEventEnd
8. 首包时间: responseStart - domainLookupStart
9. 首次渲染时间 / 白屏时间: responseEnd - fetchStart
10. 首次可交互时间: domInteractive - fetchStart
11. DOM Ready时间: domContentLoadEventEnd - fetchStart
12. 页面完全加载时间: loadEventStart - fetchStart
```

#### 优化的思考角度
```md
1. 首屏一定要快
2. 滚屏一定要流畅
3. 能不加载的先别加载
4. 能不执行的先别执行
5. 渐进展现、圆滑展现
```

#### 为什么首屏会加载缓慢？
```md
我先列一下目前我遇见影响加载的点：
1. 静态资源的加载未处理，资源加载过多
2. 调用的接口太多，接口的时间太久（此处前端也没有办法...）
3. 前端组件根据后端返回按需加载
```

#### 如何进行优化
- 懒加载
    - 优先加载主要模块，让用户第一眼能看到最重要的信息。比如只有某种情况才会加载的模块使用require()，按需加载，这个方法在webpack打包的时候把导入的模块单独打一个包，不会加入到首屏加载的包中，优化体积大小。
- 懒执行
    - 一些需要点击或者hover才会触发的模块，就等触发的时候再加载。
- 图片尺寸的控制和懒加载
    - 尽量使用webp格式的照片，因为同样的视觉效果，其体积为其他的1/3大小。使用雪碧图来处理首屏上所有的小icon，走cdn缓存等。

## Vue
### React和Vue的区别

### 简述MVVM
什么是MVVM？
视图模型双向绑定，是Model-View-ViewModel的缩写，也就是把MVC中的Controller演变成ViewModel。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据。以前是操作DOM结构更新视图，现在是数据驱动视图。

MVVM的优点：
1.低耦合。视图（View）可以独立于Model变化和修改，一个Model可以绑定到不同的View上，当View变化的时候Model可以不变化，当Model变化的时候View也可以不变；
2.可重用性。你可以把一些视图逻辑放在一个Model里面，让很多View重用这段视图逻辑。
3.独立开发。开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注于页面设计。
4.可测试。
### 说Vue的MVVM实现原理
1. Vue作为MVVM模式的实现库的2种技术
    1. 模板解析
    2. 数据绑定
2. 模板解析：实现初始化显示
    1. 解析大括号表达式
    2. 解析指令
3. 数据绑定：实现更新显示
    1. 通过数据劫持实现
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210929170246.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210918215643.png)

### vue虚拟DOM的理解
1. 什么是VDOM
Virtual DOM 用JS模拟DOM结构用。JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树， 插到文档当中 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树 进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的 DOM 树上，视图就 更新了。Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。

建立一个与 dom 树对应的虚拟 dom 对象（ js 对象），以对象嵌套的方式来表示 dom 树，那么每次 dom 的更改就变成了 js 对象的属性的更改，这样一来就能查找 js 对象 的属性变化要比查询 dom 树的性能开销小。

2. 为何要用vdom？
DOM操作非常非常“rang贵”，将DOM对比操作放在JS层，提高效率。
DOM结构的对比，放在JS层来做

3. vdom核心函数有哪些
核心函数：
    - h('标签名', {...属性名...}, [...子元素...])
    - h('标签名', {...属性名...}, '.........')
    - patch(container, vnode)
    - patch(vnode, newVnode)

### Vue2.x底层实现原理
Vue是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调
Vue是一个典型的MVVM框架，模型（Model）只是普通的javascript对象，修改它则试图（View）会自动更新。这种设计让状态管理变得非常简单而直观

- Observer（数据监听器）:Observer的核心是通过Object.defineProprtty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。这时候Observer就要通知订阅者，订阅者就是Watcher
- Watcher（订阅者）: Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是：
    - 自身实例化时往属性订阅器(dep)里面添加自己
    - 自身必须有一个update()方法
    - 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调
- Compile（指令解析器）: Compile主要做的事情是解析模板指令，将模板中变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加鉴定数据的订阅者，一旦数据有变动，收到通知，更新试图

### Vue2.x响应式原理
vue 初始化时会用Object.defineProperty()给data中每一个属性添加getter和setter，同时创建dep和watcher进行依赖收集与派发更新，最后通过diff算法对比新老vnode差异，通过patch即时更新DOM


vue2.0中，响应式实现的核心就是 ES5的Object.defineProperty(obj, prop, descriptor). 通过Object.defineProperty()劫持data和props各个属性的getter和setter，getter做依赖收集，setter派发更新。整体来说是一个 数据劫持 + 发布-订阅者模式。


具体来说， ① vue初始化阶段(beforeCreate之后create之前)，遍历data/props，调用Object.defineProperty给每个属性加上getter、setter。② 每个组件、每个computed都会实例化一个watcher（当然也包括每个自定义watcher），订阅渲染/计算所用到的所用data/props/computed，一旦数据发生变化，setter被调用，会通知渲染watcher重新计算、更新组件。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211007094007.png)

### Vue2.xcomputed与watch
通俗来讲，既能用 computed 实现又可以用 watch 监听来实现的功能，推荐用 computed， 重点在于 computed 的缓存功能 computed 计算属性是用来声明式的描述一个值依赖了其它的值，当所依赖的值或者变量 改变时，计算属性也会跟着改变； watch 监听的是已经在 data 中定义的变量，当该变量变化时，会触发 watch 中的方法。

- watch 属性监听 是一个对象，键是需要观察的属性，值是对应回调函数，主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作,监听属性的变化，需要在数据变化时执行异步或开销较大的操作时使用
- computed 计算属性 属性的结果会被缓存，当computed中的函数所依赖的属性没有发生改变的时候，那么调用当前函数的时候结果会从缓存中读取。除非依赖的响应式属性变化时才会重新计算，主要当做属性来使用 computed中的函数必须用return返回最终的结果 computed更高效，优先使用。data 不改变，computed 不更新。
- 使用场景 computed：当一个属性受多个属性影响的时候使用，例：购物车商品结算功能 watch：当一条数据影响多条数据的时候使用，例：搜索数据

### Vue2.x组件中的data为什么是一个函数？
一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。 2.如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

### Vue2.x v-for和v-if不建议用在一起
1. 当 v-for 和 v-if 处于同一个节点时，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。如果要遍历的数组很大，而真正要展示的数据很少时，这将造成很大的性能浪费
2. 这种场景建议使用 computed，先对数据进行过滤

### Vue 项目中 key 的作用
key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度，更高效的更新虚拟DOM;

更准确 : 因为带 key 就不是就地复用了,在 sameNode 函数 a.key === b.key 对比中可以避免就地复用的情况。所以会更加准确,如果不加 key,会导致之前节点的状态被保留下来,会产生一系列的 bug。

更快速 : key 的唯一性可以被 Map 数据结构充分利用,相比于遍历查找的时间复杂度 O(n),Map 的时间复杂度仅仅为 O(1)

key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。


- vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。
    - 在vue的diff函数中，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。
- 为了在数据变化时强制更新组件，以避免“就地复用”带来的副作用。
    - 当 Vue.js 用 v-for 更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。重复的key会造成渲染错误。

### Vue2.x双向绑定的实现原理
当一个Vue实例创建时，Vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher重新计算，从而致使它关联的组件得以更新。

### Vue2.xnextTick的实现
nextTick是Vue提供的一个全局API,是在下次DOM更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick，则可以在回调中获取更新后的DOM；

在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用 nextTick 来获取更新后的 DOM。 nextTick主要使用了宏任务和微任务。 根据执行环境分别尝试采用Promise、MutationObserver、setImmediate，如果以上都不行则采用setTimeout定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

### Vue2.x的diff算法
渲染真实的DOM开销是很大的，修改了某个数据，如果直接渲染到真实dom上会引起整个DOM树的重绘和重排。
Virtual Dom 根据真实DOM生成的一个Virtual DOM，当Virtual DOM某个节点的数据改变后生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode.
注意：在采取diff算法比较的时候，只会在同层级进行，不会跨层级比较。
当数据发生改变时，set方法会让调用Dep.notify()方法通知所有订阅者Watcher，订阅者就会调用patch函数给真实的DOM打补丁，更新响应的试图。

### Vue2.x的computed的实现原理
computed 本质是一个惰性求值的观察者computed watcher。其内部通过 this.dirty 属性标记计算属性是否需要重新求值。
Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。

- 当 computed 的依赖状态发生改变时,就会通知这个惰性的 watcher,computed watcher 通过 this.dep.subs.length 判断有没有订阅者,
- 有的话,会重新计算,然后对比新旧值,如果变化了,会重新渲染。 (Vue 想确保不仅仅是计算属性依赖的值发生变化，而是当计算属性最终计算的值发生变化时才会触发渲染 watcher 重新渲染，本质上是一种优化。)
- 没有的话,仅仅把 this.dirty = true (当计算属性依赖于其他数据时，属性并不会立即重新计算，只有之后其他地方需要读取属性的时候，它才会真正计算，即具备 lazy（懒计算）特性。)

### Vue2.x的Watch的运行原理
watch没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开deep：true选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用字符串形式监听
注意：Watcher : 观察者对象 , 实例分为渲染 watcher (render watcher),计算属性 watcher (computed watcher),侦听器 watcher（user watcher）三种

Watch没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开deep：true选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用字符串形式监听，如果没有写到组件中，不要忘记使用unWatch手动注销哦。

### Vue2.x的声明周期
- beforeCreate是new Vue()之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问。
- created在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取，在当前阶段无法与Dom进行交互，如果非要想，可以通过vm.$nextTick来访问Dom。
- beforeMount发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。
- mounted在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用$refs属性对Dom进行操作。
- beforeUpdate发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。
- updated发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。
- beforeDestroy发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。
- destroyed发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。
### Vue2.0中组件生命周期调用顺序说一下
组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。

组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

加载渲染过程：
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted

子组件更新过程：
父beforeUpdate->子beforeUpdate->子updated->父updated

父组件更新过程：
父 beforeUpdate -> 父 updated

销毁过程：
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
### Vue模版编译原理知道吗，能简单说一下吗？
Vue的编译过程就是将template转化为render函数的过程。会经历以下阶段：
- 生成AST树
- 优化
- codegen

首先解析模版，生成AST语法树(一种用JavaScript对象的形式来描述整个模板)。 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。

Vue的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的DOM也不会变化。那么优化过程就是深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。

编译的最后一步是将优化后的AST树转换为可执行的代码。

### keep-alive实现原理
keep-alive可以实现组件缓存，当组件切换时不会对当前组件进行卸载。

keep-alive实例会缓存对应组件的VNode,如果命中缓存，直接从缓存对象返回对应VNode

LRU（Least recently used）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。

### v-if和v-show的区别
v-show和v-if都是用来显示隐藏元素，v-if还有一个v-else配合使用，两者达到的效果都一样，性能方面去有很大的区别。
- v-show
    - 而 v-show 有更高的初始渲染开销。
    - v-show不管条件是真还是假，第一次渲染的时候都会编译出来，也就是标签都会添加到DOM中。
    - 之后切换的时候，通过display: none;样式来显示隐藏元素。可以说只是改变css的样式，几乎不会影响什么性能。
    - 如果需要非常频繁地切换，则使用 v-show 较好；
- v-if
    - v-if 有更高的切换开销
    - 在首次渲染的时候，如果条件为假，什么也不操作，页面当作没有这些元素。
    - 当条件为真的时候，开始局部编译，动态的向DOM元素里面添加元素。当条件从真变为假的时候，开始局部编译（编译会被缓存起来），卸载这些元素，也就是删除。
    - 如果在运行时条件很少改变，则使用 v-if 较好。
- 性能方面
    - v-if绝对是更消耗性能的，因为v-if在显示隐藏过程中有DOM的添加和删除，v-show就简单多了，只是操作css。

- 闪烁问题
    - 用v-if或者v-show就会出现div闪现，或者部分闪烁的结果。解决方法：可以在根元素添加v-cloak来解决，并且设置它的css样式即可。
```js
<style>
/* 在引入的css文件中写入这个*/
    [v-cloak]{
        display: none;
    }
</style>
<body>
    <!-- 添加这个v-cloak -->
    <div id='app' v-cloak>
        <div v-if="isShow">
        content
        </div>
    </div>
</body>
<script>
    new Vue({
        el: '#app',
        data () {
            return {
                isShow: false
            }
        }
    })
</script>
```
### Vue的数据为什么频繁变化但只会更新一次
- 检测到数据变化
- 开启一个队列
- 在同一事件循环中缓冲所有数据改变
- 如果同一个 watcher (watcherId相同)被多次触发，只会被推入到队列中一次

不优化，每一个数据变化都会执行: setter->Dep->Watcher->update->run
优化后：执行顺序update -> queueWatcher -> 维护观察者队列（重复id的Watcher处理） -> waiting标志位处理 -> 处理$nextTick（在为微任务或者宏任务中异步更新DOM）

### Vue3.0 有哪些新特性
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211006221811.png)
- Composition API
    - Vue2中OptionsAPI
        - 相关业务的代码需要遵循option的配置写到特定的区域，导致后续维护非常的复杂，代码可复用性也不高。最难受的是敲代码的时候不得不上下反复横跳
    - Vue3中的CompositionAPI
        - 功能相关的代码都聚合起来了，代码变得井然有序，不再频繁地上下反复横跳。
        - 而Composition API带来的出色代码组织和复用能力，让你可以把功能相关的代码抽离出去成为一个可复用的函数JS、TS文件，在.vue文件中通过函数的调用把刚刚这些函数的返回值组合起来，最后返回模板真正需要使用到的东西。（React Hook）
        - 与React Hooks对比
            - 同样的逻辑组合、复用能力
            - 只调用一次
                - 符合 JS 直觉
                - 没有闭包变量问题
                - 没有内存/GC 压力
                - 不存在内联回调导致子组件永远更新的问题
- Fragment
    - 这个新特性比较简单，就是在模板中可以写多个根节点。
        - 减少无意义的根节点元素
        - 可以平级递归组件
```js
<template>
  <quick-sort :list="left" v-if="left.length"></quick-sort>
  <span class="item">{{ flag }}</span>
  <quick-sort :list="right" v-if="right.length"></quick-sort>
</template>


<script lang="ts">
import {defineComponent, ref} from "vue"

export default defineComponent({
  name: 'quick-sort',
  props: ["list"],
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const flag: number = props.list[0]
    const left = ref<number[]>([])
    const right = ref<number[]>([])

    setTimeout(() => {
      props.list.slice(1).forEach((item: number) => {
        item > flag ? right.value.push(item) : left.value.push(item)
      })
    }, 100)

    return {
      flag,
      left,
      right
    }
  }
})
</script>
```
- Suspense
    - 可以理解为异步组件的爹。用于方便地控制异步组件的一个挂起和完成状态。
    - Suspense将异步组件包起来，template #default中展示加载完成的异步组件，template #fallback中则展示异步组件挂起状态时需要显示的内容。
```js
<template>
  <h1>Suspense</h1>
  <Suspense>
    <template #default>
      <AsyncComponent :timeout="5000"/>
    </template>

    <template #fallback>
      <p class="loading">loading {{ loadingStr }}</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AsyncComponent from "@/components/AsyncComponent.vue"
import useLoading from "@/composables/useLoading";

export default defineComponent({
  components: {
    AsyncComponent
  },
  setup() {
    const {loading: loadingStr} = useLoading()
    return {loadingStr}
  }
})
</script>
```
- Teleport
    - 组件任意门，让你的组件可以任意地丢到html中的任一个DOM下。
```js
<template>
  <h1>Teleport——任意门</h1>
  <div class="customButton" @click="handleToggle">偷袭</div>
  <teleport to="body">
    <TeleportModal v-if="isOpen" @click="handleToggle"></TeleportModal>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import TeleportModal from "@/components/TeleportModal.vue"

export default defineComponent({
  components: {
    TeleportModal
  },
  setup() {
    const isOpen = ref(false)
    const handleToggle = () => {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      handleToggle
    }
  }
})
</script>
```
- createRenderer API
    - Vue3中我们可以自由方便地去构建Web（浏览器）平台或非Web平台的自定义渲染器。
    - 将Virtual DOM和平台相关的渲染分离，通过createRendererAPI我们可以自定义Virtual DOM渲染到某一平台中时的所有操作，比如新增、修改、删除一个“元素”，我们可以这些方法中替换或修改为我们自定义的逻辑，从而打造一个我们自定义的渲染器。
    - 调用createRenderer以后的返回值是一个renderer，createApp这个方法就是这个renderer的一个属性方法，用它替代原生的createApp方法就可以使用我们自己的自定义渲染器了~
### Vue3.0 是如何变得更快更小的
- 如何更快
    - Object.defineProperty => Proxy（响应式原理）
        - Proxy不仅消除了Vue2中现有的限制（比如对象新属性的增加、数组元素的直接修改不会触发响应式机制，这也是很多新手以为所谓的bug），而且有着更好的性能：
        - 在Vue2中对数据的侦听劫持是在组件初始化时去遍历递归一个对象，给其中的每一个属性用Object.defineProperty设置它的getter和setter，然后再把处理好的这些对象挂到组件实例的this上面，所以这种方式的数据侦听是在属性层面的，这也是为什么增加对象属性无法被监听的原因，同时这种初始化的操作对于CPU来说还是比较昂贵的一个操作。对于javascript而言，一个对象肯定越稳定越小性能就越好。
        - Proxy之后组件的初始化就不需要这么做这么费时的操作了，因为Proxy就是真正意义给一个对象包上一层代理从而去完成数据侦听劫持的操作，所以总的来说这个复杂度是直接少了一个数量级的。只要你对这个代理后的对象访问或修改里面的东西都能被这层代理所感知到，进而去动态地决定返回什么东西给你，并且也不再需要把选项的这些东西再重复挂到组件实例的this上面，因为你访问的时候是有这个信息知道你访问的东西是属于props还是data还是其他的，vue只需要根据这个信息去对应的数据结构里面拿出来就可以了，单就这一点而言你就可以感觉到组件的内存占用已经少了一半。
        - proxy是在对象层面上的代理，所以你在对象上新增属性是可以被代理到的。
        - Proxy还可以代理数组，所以就算你直接修改数组里面的元素也是可以被代理到的。
    - 突破Virtual DOM瓶颈
        - 所以Virtual DOM的更新性能从与模板整体大小相关，提升到了只与动态内容的数量
        - 传统的Virtual DOM 树
            - 当数据发生改变的时候，两棵vdom的树会进行diff比较，找到需要更新的节点再patch为实际的DOM更新到浏览器上。这个过程在Vue2中已经优化到了组件的粒度，通过渲染Watcher去准确找到需要更新的组件，将整个组件内的vdom tree进行diff。
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211007071032.png)
        - Vue3.0的
            - Vue3重写了Virtual Dom，以利用模板的静态分析优势去将更新的粒度进一步缩小到动态元素甚至是动态的属性。
            - 通过compiler对模板的静态分析，在优化模式下将静态的内容进行hosting，也就是把静态节点提升到外面去，实际生成vnode的就只有动态的元素<p class="text">{{ msg }}</p>，再分析这个元素内可能发生变化的东西，对这个元素打上patchFlag，表示这个元素可能发生变化的类型是文本内容textContent还是属性类class等等。
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211007071416.png)
            - 完全静态的元素已经被提升到render函数上面去了，实际会创建vnode的就只有一个含有动态文本内容的p元素。
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211007071459.png)
            - v-if / v-for
                - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211007071825.png)
                - 将模版基于动态节点指令切割为嵌套的区块
                - 每个区块内部的节点结构是固定的
                - 每个区块只需要以一个平面数组追踪自身包含的动态节点
    - 更多编译时优化
        - Slot默认编译为函数
            - 这个让使用插槽的父子组件之间的更新关系不再强耦合
        - 利用模板静态分析对vnode生成的类型标记——patchFlag
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211007072244.png)
            - vnode的patchFlag通过 | 操作符去组合起来，vnode的patchFlag和某个特定类型所代表的patchFlag就用 & 操作符计算一下，如果得到的结果为0，则说明这个vnode的这个类型的属性是不会变的，不为0则相反。
- 如何更小
    - 最主要的就是充分利用了Tree-shaking（支持摇树优化）的特性
        - tree shaking以后，进入bundle的只有被引入并且真正会被使用的代码块。在Vue3中许多渐进式的特性都使用了第二种的写法来进行重写，而且模板本身又是Tree shaking友好的。
        - Vue3最重要的变化之一就是引入了Tree-Shaking，Tree-Shaking带来的bundle体积更小是显而易见的。
            - 在2.x版本中，很多函数都挂载在全局Vue对象上，比如nextTick、nextTick、set等函数，因此虽然我们可能用不到，但打包时只要引入了vue这些全局函数仍然会打包进bundle中。
            - 在Vue3中，所有的API都通过ES6模块化的方式引入，这样就能让webpack或rollup等打包工具在打包时对没有用到API进行剔除，最小化bundle体积；
### Vue3.0的性能优化
- 源码优化
    - 更好的代码管理方式：monorepo 根据功能将不同的模块拆分到packages目录下不同的子目录中。这样使得模块拆分更细化，职责划分更明确，模块之间的依赖关系也更加明确，开发人员也更容易阅读、理解和更改所有模块源码，提高代码的可维护性。
    - 采用typescript开发，也省去了单独维护d.ts文件的麻烦。

- 性能优化
    - 源码体积优化：移除了一些冷门的feature（比如filter、inline-template等），引入tree-shaking技术减少打包体积。
    - 数据劫持优化：使用Proxy代替vue2.x中的defineProperty，能够深层监听数组对象的变化。
    - 编译优化：检测出模板中的静态节点、子树甚至数据对象，并在生成的代码中将它们提升到渲染函数之外。这样可以避免在每次渲染时重新创建这些对象，从而大大提高内存使用率并减少垃圾回收的频率。
    - 语法API优化：推出composition API优化逻辑组合和优化逻辑复用。

### Vue3.0和Vue2.0的差别
- 响应式原理不同
    - 使用proxy代替defineProperty
    - defineProperty只能响应首次渲染时候的属性，Proxy需要的是整体，不需要关心里面有什么属性，而且Proxy的配置项有13种，可以做更细致的事情，这是之前的defineProperty无法达到的
- Diff算法的提升
    - 以往的渲染策略
        - vue2.x提供类似于HTML的模板语法，但是，它是将模板编译成渲染函数来返回虚拟DOM树。Vue框架通过递归遍历两个虚拟DOM树，并比较每个节点上的每个属性，来确定实际DOM的哪些部分需要更新。
    - 潜在的问题
        - 由于现代JavaScript引擎执行的高级优化，这种有点暴力的算法通常非常快速，但是DOM的更新仍然涉及许多不必要的CPU工作
    - Vue3的突破
        - 编译器和运行时需要协同工作：编译器分析模板并生成带有优化提示的代码，而运行时尽可能获取提示并采用快速路径。
            - 首先，在DOM树级别。我们注意到，在没有动态改变节点结构的模板指令（例如v-if和v-for）的情况下，节点结构保持完全静态。如果我们将一个模板分成由这些结构指令分隔的嵌套“块”，则每个块中的节点结构将再次完全静态。当我们更新块中的节点时，我们不再需要递归遍历DOM树 - 该块内的动态绑定可以在一个平面数组中跟踪。这种优化通过将需要执行的树遍历量减少一个数量级来规避虚拟DOM的大部分开销。
            - 其次，编译器积极地检测模板中的静态节点、子树甚至数据对象，并在生成的代码中将它们提升到渲染函数之外。这样可以避免在每次渲染时重新创建这些对象，从而大大提高内存使用率并减少垃圾回收的频率。
            - 第三，在元素级别。编译器还根据需要执行的更新类型，为每个具有动态绑定的元素生成一个优化标志。例如，具有动态类绑定和许多静态属性的元素将收到一个标志，提示只需要进行类检查。运行时将获取这些提示并采用专用的快速路径。
- typeScript的支持
    - vue2是支持类型的，用的是Facebook的Flow做类型检查，但是因为某些情况下推断有问题，所以改为支持ts。
- 生命周期不同
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211007085637.png)
    - 使用setup代替了之前的beforeCreate和created，其他生命周期名字有些变化，功能都是没有变化的
- vue3对全局API的优化（ tree-shaking ）
    - 在Vue3中，所有的API都通过ES6模块化的方式引入，这样就能让webpack或rollup等打包工具在打包时对没有用到API进行剔除，最小化bundle体积；
- v-if 比 v-for优先级高 
- Composition API
    - 很多个API组合的一套API
    - setup
        - setup替代了以前的 beforeCreate 和 created ，类似于初始化的功
    - ref 、toRef、 toRefs
        - ref 就当作简单的响应式变量 
        - toRef 就是把不是响应式的对象转化成响应式
        - toRefs 就是把响应式的reactive对象，分解成无数的响应式 ref
        - 注意
            - 1. ref 响应式的数据，在函数里读取的时候需要 .value获取
            - 2. dom里不需要我们.value 框架替我们自动解构了
            - 3. 组件return的时候将 reactive的对象 toRefs ，可以使代码更简洁，又不会丢失数据的响应式
    ```js
    import { ref , toRef , toRefs } from 'vue'
    setup(){
     const obj = {age:12}
     //初始化设置个响应式变量tor,函数中读取值要tor.value
     let tor = ref(0)
     //这里将对象转化成响应性，并设置key值,函数中读取值要toR._object
     let toR = toRef(obj,'toR')
     const state = reactive({
    	num:1,
    	name:'baby张'
    })
     return {
    	tor,
    	roR,
    	//toRefs针对的是使用了reactive的响应式对象，可以理解为将对象拆分成多个响应式ref，外界可以读取到响应式的所有属性
    	...toRefs(state)
    	}
     }
    ```
    - reactive
        - reactive 内部是可以使用计算属性等各种方法，它只是把数据实现响应式而已
        - reactive 后return 的数据最好是用toRefs 转化一下，好处谁用谁知道
    - watch、watchEffect
        - watch则是一对多的关系
        - watch
            - watch里第一个参数是监听需要的变量，第二个是执行的回调函数，
        - watchEffect
            - watchEffect只要里面的变量发生了改变就会执行,并且第一次渲染会立即执行,没有变化前后返回参数，无法监听整个reactive
        - 区别
            - watch 需要具体监听参数，watchEffect 不需要传入监听参数
            - watch 的回调函数跟以前一样有前后对比的参数，watchEffect 啥都没有
            - watch 只有监听属性变化才执行，watchEffect 第一次会立即执行
            - watch 和 watchEffect 都无法监听未被绑定的属性
            - watch 可以直接监听 ref 和 reactive 绑定的对象，watchEffect 不可以（ref的值要.value，reactive的值要具体到内部属性），只会执行第一次
    ```js
         //这里的watchEffect只要里面的变量发生了改变就会执行,并且第一次渲染会立即执行,没有变化前后返回参数，无法监听整个reactive
        watchEffect(() => {
          refnum.value = state.count;
          console.log(state, "watchEffect");s
        });
        //watch里第一个参数是监听需要的变量，第二个是执行的回调函数，
        watch(refnum,(a,b)=>{
          console.log(a,b,'watch,a,b')
        })
    ```
    ```js
    import { reactive, ref, watch } from "vue";
    const state = reactive({
      count: 0,
    });
    
    //侦听时返回值得getter函数
    watch(
      () => state.count,
      (count, prevCount) => {
        // 1 0
        console.log(count, prevCount);
      }
    );
    state.count++;
    
    const count = ref(0);
    //直接侦听ref
    watch(count, (count, prevCount) => {
      // 2 0
      console.log(count, prevCount, "watch");
    });
    count.value = 2;



    const state = reactive({
      count: 1,
    });
    const count = ref(2);
    watch([() => state.count, count], (newVal, oldVal) => {
      //[3, 2]  [1, 2]
      //[3, 4]  [3, 2]
      console.log(newVal, oldVal);
    });
    state.count = 3;
    count.value = 4;



    import _ from "lodash";
    const deepObj = reactive({
      a: {
        b: {
          c: "hello",
        },
      },
    });
    
    watch(
      () => _.cloneDeep(deepObj),
      (val, old) => {
        // new hello hello
        console.log(val.a.b.c, old.a.b.c);
      },
      { deep: true }
    );
    
    deepObj.a.b.c = "new hello";
    ```
    - computed
        - computed是多对一的关系
        - computed是一个函数，它接收一个回调函数作为参数，返回一个基于该值的响应式Ref对象。也可以接收一个对象形式（对象中只有set和get）作为参数。
    ```js
    <script lang="ts">
        import { defineComponent, ref, computed } from "vue";
        export default defineComponent({
          setup() {
            const count = ref(0);
            const increment = () => {
              count.value++;
            };
            const double = computed(() => count.value * 2);
            // const double = computed({
            //   get() {
            //     return count.value * 3;
            //   },
            //   set(val) {
            //     console.log(val);
            //     count.value = val - 1;
            //   }
            // });
            return {
              count,
              increment,
              double
            };
          }
        });
        </script>
    ```
    - 函数组件
        - 在 Vue 3 中，所有的函数式组件都是用普通函数创建的
        - 有两个参数：props 和 context
        - 以前是在 render 函数中隐式提供 creatElement，现在是组合Api里引入h
    ```js
        import { h } from 'vue'
        const Fun = (props, context) => {
        //这里h的用法跟以前还是一样的
          return h(p, context.attrs, context.slots)
        }
        export default Fun
    ```    
### Vue3.0双向绑定的实现原理    

### Vue3.0响应式数据原理
Vue3.x改用Proxy替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。

Proxy只会代理对象的第一层。
判断当前Reflect.get的返回值是否为Object，如果是则再通过reactive方法做代理， 这样就实现了深度观测。

监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？
我们可以判断key是否为当前被代理对象target自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger。
### Vue3.0的diff算法
Vue3.x借鉴了 ivi算法和 inferno算法
在创建VNode时就确定其类型，以及在mount/patch的过程中采用位运算来判断一个VNode的类型，在这个基础之上再配合核心的Diff算法
该算法中还运用了动态规划的思想求解最长递归子序列。
### Vue3.0的computed的实现原理

### Vue3.0的Watch的运行原理

### Vue的性能优化？
- 编码阶段
    - 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
    - v-if和v-for不能连用
    - 如果需要使用v-for给每项元素绑定事件时使用事件代理
    - SPA 页面采用keep-alive缓存组件
    - 在更多的情况下，使用v-if替代v-show
    - key保证唯一
    - 使用路由懒加载、异步组件
    - 防抖、节流
    - 第三方模块按需导入
    - 长列表滚动到可视区域动态加载
    - 图片懒加载
- SEO优化
    - 预渲染
    - 服务端渲染SSR
- 打包优化
    - 压缩代码
    - Tree Shaking/Scope Hoisting
    - 使用cdn加载第三方模块
    - 多线程打包happypack
    - splitChunks抽离公共文件
    - sourceMap优化
- 用户体验
    - 骨架屏
    - PWA
- 使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。
## VueRouter
### hash路由和history路由实现原理说一下
- location.hash的值实际就是URL中#后面的东西。
- history实际采用了HTML5中提供的API来实现，主要有history.pushState()和history.replaceState()。

- hash 模式
    - location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
    - 可以为 hash 的改变添加监听事件
    - `window.addEventListener("hashchange", funcRef, false);`
    - 每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了
- history 模式
    - 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。
    - 这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。
## Webpack Vite Rollup
### Webpack流程
- webpack到底是如何对我们的项目进行打包的呢？
    - 事实上webpack在处理应用程序时，它会根据命令或者配置文件找到入口文件；
    - 从入口开始，会生成一个  依赖关系图，这个依赖关系图会包含应用程序中所需的所有模块（比如.js文件、css文件、图片、 字体等）；
    - 然后遍历图结构，打包一个个模块（根据文件的不同使用不同的loader来解析）生成AST语法树，；
    - 找出每个文件的依赖项（遍历）。
    - 根据AST语法树，生成浏览器能够运行的代码


Webpack 的运行流程是一个串行的过程：
- 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
- 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
- 确定入口：根据配置中的 entry 找出所有的入口文件
- 编译模块：从入口文件开始，调用所有配置的loader对模块进行翻译成compliation，然后递归所有依赖的模块，然后重复编译。得到每个模块翻译后的最终内容以及它们之间的依赖关系。
- 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
- 输出资源：根据入口和模块的依赖关系，组装成一个个包含多个模块的chunk，然后将chunk转换成一个单独的文件加入输出列表，这是可以修改输出内容的最后机会
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统
### Webpack特点
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
### Webpack的loader和plugins的区别
Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。

Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。
### 有哪些常见的Loader？你用过哪些Loader？
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
- sass-loader：将SCSS/SASS代码转换成CSS
- css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
- style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
- postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
- eslint-loader：通过 ESLint 检查 JavaScript 代码
- tslint-loader：通过 TSLint检查 TypeScript 代码
- mocha-loader：加载 Mocha 测试用例的代码
- coverjs-loader：计算测试的覆盖率
- vue-loader：加载 Vue.js 单文件组件
- i18n-loader: 国际化
- cache-loader: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里

### 有哪些常见的Plugin？你用过哪些Plugin？
- define-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
- ignore-plugin：忽略部分文件
- html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
- web-webpack-plugin：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用
- uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)
- terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
- webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
- mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)
- serviceworker-webpack-plugin：为网页应用增加离线缓存功能
- clean-webpack-plugin: 目录清理
- ModuleConcatenationPlugin: 开启 Scope Hoisting
- speed-measure-webpack-plugin: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)
- webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)

### 是否写过Loader？简单描述一下编写loader的思路？
Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。

- Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用
- Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据
- 尽可能的异步化 Loader，如果计算量很小，同步也可以
- Loader 是无状态的，我们不应该在 Loader 中保留状态
- 使用 loader-utils 和 schema-utils 为我们提供的实用工具
- 加载本地 Loader 方法
    - Npm link
    - ResolveLoader
### 是否写过Plugin？简单描述一下编写Plugin的思路？
webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。

- compiler 暴露了和 Webpack 整个生命周期相关的钩子
- compilation 暴露了与模块和依赖有关的粒度更小的事件钩子
- 插件需要在其原型上绑定apply方法，才能访问 compiler 实例
- 传给每个插件的 compiler 和 compilation对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件
- 找出合适的事件点去完成想要的功能
    - emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)
    - watch-run 当依赖的文件发生变化时会触发
- 异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住

### webpack Plugin 和 Loader 的区别
- Loader
    - 用于对模块源码的转换，loader 描述了 webpack 如何处理非 javascript 模块，并且在 bundle 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或者将内联图像转换为 data URL。比如说：CSS-Loader，Style-Loader 等。
- 

### source map是什么？生产环境怎么用？
source map 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。map文件只要不打开开发者工具，浏览器是不会加载的。

线上环境一般有三种处理方案：
- hidden-source-map：借助第三方错误监控平台 Sentry 使用
- nosources-source-map：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高
- sourcemap：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)

注意：避免在生产中使用 inline- 和 eval-，因为它们会增加 bundle 体积大小，并降低整体性能。

### 文件监听原理呢？
在发现源码发生变化时，自动重新构建出新的输出文件。

Webpack开启监听模式，有两种方式：
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
        aggregateTimeout:300,        
        // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次        
        poll:1000    
    }
}
```
### 文件指纹是什么？怎么用？
文件指纹是打包后输出的文件名的后缀。
- Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
- Chunkhash：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash
- Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

- JS的文件指纹设置
    - 设置 output 的 filename，用 chunkhash。
```js
module.exports = {
    entry: {
        app: './scr/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist'
    }
}
```
- CSS的文件指纹设置
    - 设置 MiniCssExtractPlugin 的 filename，使用 contenthash。
```js
module.exports = {
    entry: {
        app: './scr/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist'
    },
    plugins: [new MiniCssExtractPlugin({
        filename: `[name][contenthash:8].css`
    })]
}
```
- 图片的文件指纹设置
    - 设置file-loader的name，使用hash。
        - 占位符名称及含义
            - ext 资源后缀名
            - name 文件名称
            - path 文件的相对路径
            - folder 文件所在的文件夹
            - contenthash 文件的内容hash，默认是md5生成
            - hash 文件内容的hash，默认是md5生成
            - emoji 一个随机的指代文件内容的emoj
```js
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name][hash:8].[ext]'
                }
            }]
        }]
    }
}
```
### Webpack 的热更新原理 ？？？？？？？？
HMR即Hot Module Replacement是指当你对代码修改并保存后，webpack将会对代码进行重新打包，并将改动的模块发送到浏览器端，浏览器用新的模块替换掉旧的模块，去实现局部更新页面而非整体刷新页面。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008171751.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008172241.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008171851.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008173220.png)

右侧Server端使用webpack-dev-server去启动本地服务，内部实现主要使用了webpack、express、websocket。
- 用express启动本地服务，当浏览器访问资源时对此做响应。
- 服务端和客户端使用websocket实现长连接
- webpack监听源文件的变化，即当开发者保存文件时触发webpack的重新编译。
    - 每次编译都会生成hash值、已改动模块的json文件、已改动模块代码的js文件
    - 编译完成后通过socket向客户端推送当前编译的hash戳
- 客户端的websocket监听到有文件改动推送过来的hash戳，会和上一次对比
    - 一致则走缓存
    - 不一致则通过ajax和jsonp向服务端获取最新资源
- 使用内存文件系统去替换有修改的内容实现局部刷新
### 如何对bundle体积进行监控和分析？
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
    - 合理使用alias
- 提取页面公共资源
    - 基础包分离：
        - 使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中
        - 使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件
- DLL
    - 使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。
- 充分利用缓存提升二次构建速度
    - babel-loader 开启缓存
    - terser-webpack-plugin 开启缓存
    - 使用 cache-loader 或者 hard-source-webpack-plugin
- Tree shaking
    - 打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的bundle中去掉(只能对ES6 Modlue生效) 开发中尽可能使用ES6 Module的模块，提高tree shaking效率
    - 禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking
    - 去除无用 CSS 代码
- Scope hoisting
    - 构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
    - 必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法
- Code Splitting: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存
- 动态Polyfill
    - 建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护。

### 代码分割，那代码分割的本质是什么？有什么意义呢？
代码分割的本质其实就是在源代码直接上线和打包成唯一脚本main.bundle.js这两种极端方案之间的一种更适合实际场景的中间状态。

代码分割：用可接受的服务器性能压力增加来换取更好的用户体验。
源代码直接上线：虽然过程可控，但是http请求多，性能开销大。
打包成唯一脚本：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。

### 聊一聊Babel原理吧
大多数JavaScript Parser遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器) 。

Babel大概分为三大部分：
- 解析：将代码转换成 AST
    - 词法分析：将代码(字符串)分割为token流，即语法单元成的数组
    - 语法分析：分析token流(上面生成的数组)并生成 AST
- 转换：访问 AST 的节点进行变换操作生产新的 AST
    - Taro就是利用 babel 完成的小程序语法转换
- 生成：以新的 AST 为基础生成代码
### webpack5 和 webpack4 的区别
1. Tree Shaking
- webpack4.0
tree-shaking 就可以把没有用的那些东西剔除掉，来减少最终的bundle体积。
```js
  // webpack.config.js中
  module.exports = {
     optimization: {
       //usedExports : true, 标记没有用的叶子
       usedExports: true, //只导出被使用的模块
       //minimize: true, 摇掉那些没有用的叶子
       minimize : true // 启动压缩
     }
  }
```
- webpack5.0
webpack5的 `mode=“production”` 自动开启 `tree-shaking`。

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
       minimize : true // 启动压缩
     }
  }
```

3. webpack 缓存
- webpack4.0
    - `npm install hard-source-webpack-plugin -D`
```js
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin') 
 
module.exports = { 
plugins: [
  // 其它 plugin... 
  new HardSourceWebpackPlugin(), 
] }
```
- webpack5 缓存配置
    - webpack5 内部内置了 cache 缓存机制。直接配置即可。
    - cache 会在开发模式下被设置成 type： memory 而且会在生产模式把cache 给禁用掉。
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
4. 对loader的优化
- webpack 4 加载资源需要用不同的 loader
    - raw-loader 将文件导入为字符串
    - url-loader 将文件作为 data url 内联到 bundle文件中
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
6. devtool的差别
sourceMap需要在 webpack.config.js里面直接配置 devtool 就可以实现了。而 devtool有很多个选项值，不同的选项值，不同的选项产生的 .map 文件不同，打包速度不同。
一般情况下，我们一般在开发环境配置用“cheap-eval-module-source-map”，在生产环境用‘none’。
```js
v4: devtool: 'cheap-eval-module-source-map'
v5: devtool: 'eval-cheap-module-source-map'
```

### Rollup原理
Rollup中，一个文件就是一个模块。每一个模块都会根据文件的代码生成一个 AST 语法抽象树，Rollup 需要对每一个 AST 节点进行分析。

分析 AST 节点，就是看看这个节点有没有调用函数或方法。如果有，就查看所调用的函数或方法是否在当前作用域，如果不在就往上找，直到找到模块顶级作用域为止。（rollup 不看你引入了什么函数，而是看你调用了什么函数。如果调用的函数不在此模块中，就从其它模块引入。）

如果本模块都没找到，说明这个函数、方法依赖于其他模块，需要从其他模块引入。

最后将所有引入的代码打包在一起。生成代码。
### Rollup特点
- Tree-shaking
    - 这个特点，是Rollup最初推出时的一大特点。Rollup通过对代码的静态分析，分析出冗余代码，在最终的打包文件中将这些冗余代码删除掉，进一步缩小代码体积。
- ES2015模块打包支持
    - Rollup直接不需要通过babel将import转化成Commonjs的require方式，极大地利用ES2015模块的优势。
- 在开发应用时使用 Webpack，开发库时使用 Rollup。

### Vite
Vite(读音类似于[weɪt]，法语，快的意思) 是一个由原生 ES Module 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，在生产环境下基于 Rollup 打包。
### Vite 的特点
- 闪电般的冷启动速度
- 即时热模块更换（热更新）
- 真正的按需编译
Vite 要求项目完全由 ES Module 模块组成，common.js 模块不能直接在 Vite 上使用。因此不能直接在生产环境使用。在打包上依旧还是使用 rollup 等传统打包工具。因此 Vite 目前更像是一个类似于 webpack-dev-server 的开发工具.
### Vite 的基本实现原理
Vite 的基本实现原理，就是启动一个 koa 服务器拦截浏览器请求ES Module的请求。通过 path 找到目录下对应的文件做一定的处理最终以 ES Modules 格式返回给客户端
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211008174614.png)

浏览器对 import 的模块发起请求时的一些局限了，平时我们写代码，如果不是引用相对路径的模块，而是引用 node_modules 的模块，都是直接 import xxx from 'xxx'，由 Webpack 等工具来帮我们找这个模块的具体路径。但是浏览器不知道你项目里有 node_modules，它只能通过相对路径去寻找模块。

因此 Vite 在拦截的请求里，对直接引用 node_modules 的模块都做了路径的替换，换成了 /@modules/ 并返回回去。而后浏览器收到后，会发起对 /@modules/xxx 的请求，然后被 Vite 再次拦截，并由 Vite 内部去访问真正的模块，并将得到的内容再次做同样的处理后，返回给浏览器。
### Vite 热更新(Hot Module Reload)原理
Vite 的热加载原理，其实就是在客户端与服务端建立了一个 websocket 链接，当代码被修改时，服务端发送消息通知客户端去请求修改模块的代码，完成热更新。

### Webpack & Vite 原理对比
Webpack 之所以慢，是因为 Webpack 会将许多资源构成一个或者多个 bundle 。当我们修改模块中的一个子模块b.js，整个bundle.js 都需要重新打包，随着项目规模的扩大，重新打包(热更新)的时间越来越长。

跳过打包的过程，当需要某个模块时再通过请求去获取。Vite 一个由原生 ES Module（esbuild 是一个全新的js打包工具，支持如babel, 压缩等的功能）驱动的 Web 开发构建工具，完全做到按需加载。
## 工具
### Git
#### Git 的工作区域和流程
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210923223618.png)

- Workspace：工作区，就是平时进行开发改动的地方，是当前看到最新的内容，在开发的过程也就是对工作区的操作
- Index：暂存区，当执行 git add 的命令后，工作区的文件就会被移入暂存区，暂存区标记了当前工作区中那些内容是被 Git 管理的，当完成某个需求或者功能后需要提交代码，第一步就是通过 git add 先提交到暂存区。
- Repository：本地仓库，位于自己的电脑上，通过 git commit 提交暂存区的内容，会进入本地仓库。
- Remote：远程仓库，用来托管代码的服务器，远程仓库的内容能够被分布在多个地点的处于协作关系的本地仓库修改，本地仓库修改完代码后通过 git push 命令同步代码到远程仓库。
```md
1.在工作区开发，添加，修改文件。
2.将修改后的文件放入暂存区。
3.将暂存区域的文件提交到本地仓库。
4.将本地仓库的修改推送到远程仓库。
```

#### Git 基本操作
- git add :添加文件到暂存区
- git commit :提交暂存的更改，
- git pull:从远程仓库拉取代码并合并到本地
- git branch :和分支相关

#### git merge 和 git rebase 的区别
- git rebase 的使用
    - rebase 翻译为变基，他的作用和 merge 很相似，用于把一个分支的修改合并到当前分支上。
- git merge 和 git rebase 的区别
    - 不同于 git rebase 的是，git merge 在不是 fast-forward（快速合并）的情况下，会产生一条额外的合并记录，类似 Merge branch 'xxx' into 'xxx' 的一条提交信息。
    - 另外，在解决冲突的时候，用 merge 只需要解决一次冲突即可，简单粗暴，而用 rebase 的时候 ，需要依次解决每次的冲突，才可以提交。
