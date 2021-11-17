# 面经+自己的心得

## 对于前端的看法和理解？？？
## 前端和后端到底有什么不同？？？

web前端: 就是在用户可以看得见摸得着的东西。包括你浏览页面的结构、外观视觉表现以及层面的交互实现。前端开发人员的目标是确保所有用户都可以访问该网站或应用，并在所有视图中做出响应 —— 移动和桌面。

web后端：就是用户看不见摸不着的数据库交互处理的业务逻辑。需要考虑的是如何实现功能、数据的存取、平台的稳定性与性能等。后端开发人员的目标是围绕前端构建程序，并提供所需的所有支持，并确保站点或应用始终正常运行。

## HTML

### 如何理解 html 语义化?
- 就是用正确的标签做正确的事
  - 头部：header
  - 导航：nav
  - 主体内容：main
  - 标题：h1 ~ h6
  - 段落：p
  - 侧边栏：aside
  - 页脚：footer

- HTML语义化有什么好处呢？
  - 网页加载慢导致CSS文件还未加载时（没有CSS），页面仍然清晰、可读、好看。
  - 提升用户体验，例如title、alt可用于解释名词或解释图片信息。
  - 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息。
  - 方便其他设备（如屏幕阅读器、盲人阅读器、移动设备）更好的解析页面。
  - 使代码更具可读性，便于团队开发和维护。
### DOCTYPE及作用
`<!DOCTYPE html>`
- 概念
  - DTD（document type definition，文档类型定义）声明于文档最前面，用来定义XML或（X）HTML的文件类型。浏览器会使用它来判断文档类型，并根据这个判断决定用什么引擎来解析和渲染他们。
- 解析引擎的两种模式
  - 解析引擎有严格模式和混杂模式。严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。
- DOCTYPE的作用
  - DOCTYPE是用来声明文档类型和DTD规范的，其作用一是文件的合法性验证。如果文件代码不合法，那么浏览器解析时会出一些错误。二是浏览器会使用它来判断文档类型，并根据这个判断决定用什么引擎来解析和渲染他们。
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
- H5新特性
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
### viewport
  ```html
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
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
### min-width、max-width、width的包含(优先级关系)关系？？？？？？？？？？
### 哪些CSS属性是不被IE兼容的？
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
    - multi-column实现瀑布流主要依赖以下几个属性：
        - column-count: 设置共有几列
        - column-width: 设置每列宽度，列数由总宽度与每列宽度计算得出
        - column-gap: 设置列与列之间的间距
    - column-count和column-width都可以用来定义分栏的数目，而且并没有明确的优先级之分。优先级的计算取决与具体的场景。
    - 计算column-count和column-width转换后具体的列数，哪个小就用哪个。
    - 我们希望的是每个元素都是独立的，前后不断开，此时我们需要使用break-inside来实现。
        - break-inside: auto | avoid
            - auto: 元素可以中断
            - avoid: 元素不能中断
    - 但由于multi-column布局中子元素的排列顺序是先从上往下再从左至右，所以这种方式仅适用于数据固定不变的情况，对于滚动加载更多等可动态添加数据的情况就并不适用了。
```css
.masonry{
    column-count: 3;
    column-gap: 10px;
}
.masonry .item{
    border:1px solid #999;
    margin-bottom: 10px;
    break-inside: avoid;
}
.masonry .item img{
    width: 100%;
}
```
- grid 布局实现瀑布流
    - 网格布局（Grid）是最强大的 CSS 布局方案。
    - 它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。
```css
.wrap-waterfall--grid img{vertical-align: top;width: 100px}
.wrap-waterfall--grid .list{
    display: grid;
    grid-gap: 10px;
    /* 可以看到，网格大小，占据位置是需要提前设定的 */
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
}
```
-  Flexbox 实现瀑布流
    -  flex布局默认情况下是水平排列，可以修改为垂直排列并且允许换行达到纵向瀑布流的效果。
    -  局限性：必须用固定高度使内容换行，填充比较难以控制；不固定高度的话要结合js才能实现
```html
<template>
  <div class="masonry">
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data1">
    </div>
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data2">
    </div>
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data3">
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
      data3
    };
  }
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
    - 看了以上的各种css方案，都有各自的弊端，实际使用场景一般也不会通过纯css做瀑布流布局。
    - CSS 新属性 grid-template-rows: masonry 轻松实现瀑布流布局，一行代码即可搞定。
    - 看了caniuse，兼容性感人。


- js
- 原生js
    - 确定每行放几张图片， 每行的个数（column）=页面宽度（pageWidth）/（图片盒子宽度+图片间距）
    - 确定一行多少个之后首先需要将第一行排列好 （绝对定位的方式，使用js排列好）
    - 找出每一行的最小高度，排列完每一张图片之后更新最小高度
    

- 第三方库
- 第三方库
    -  vue-waterfall
    -  @egjs/vue-infinitegrid，



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
2. 伪元素表示的是被选择元素的某个部分，这个部分看起来像一个独立的元素，但是是"假元素"，只存在于css中，所以叫"伪"的元素，例如:before和:after
3. 核心区别在于，是否创造了“新的元素”

### CSS动画属性有哪些?
transition、animation和transform是CSS3中三个制作动画的重要属性。
#### transition
transition允许css的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值。
```css
transition ：transition-property || transition-duration || transition-timing-function || transition-delay;
```
- transition主要包含四个属性值：
    - 执行变换的属性：transition-property，
        - `transition-property: none || all || property;`
        - transition-property是用来指定当元素其中一个属性改变时执行transition效果。
        - none: 没有属性会获得过渡效果；
        - all: 所有属性都将获得过渡效果,也是其默认值；
        - property: 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
    - 变换延续的时间：transition-duration，
        - `transition-duration: time;`
        - transition-duration是用来指定元素 转换过程的持续时间，取值time为数值，单位为s（秒）或者ms(毫秒)，其默认值是0，也就是变换时是即时的。
    - 在延续时间段，变换的速率变化：transition-timing-function，
        - `transition-timing-function: linear || ease || ease-in || ease-out || ease-in-out || cubic-bezier(n,n,n,n);`
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115220429.png)
    - 变换延迟时间：transition-delay。
        - transition-delay: time;
        - transition-delay是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行transition效果，其取值time为数值，单位为s（秒）或者ms(毫秒)， 默认大小是"0"，也就是变换立即执行，没有延迟。
- 注意事项
    - 不是所有的CSS属性都支持transition
    - transition需要明确知道，开始状态和结束状态的具体数值，才能计算出中间状态。比如，height从0px变化到100px，transition可以算出中间状态。但是，transition没法算出0px到auto的中间状态，也就是说，如果开始或结束的设置是height: auto，那么就不会产生动画效果。
    - transition需要事件触发，所以没法在网页加载时自动发生。
    - transition是一次性的，不能重复发生，除非一再触发。
```html
<div class="one"></div>

.one {
        width: 100px;
        height: 100px;
        margin: 200px auto;
        background-color: #cd4a48;
        -webkit-transition: width, height 2s ease;
        -moz-transition: width, height 2s ease;
        -ms-transition: width, height 2s ease;
        -o-transition: width, height 2s ease;
        transition: width, height 2s ease;
    }

    .one:hover {
        width: 300px;
        height: 300px;
    }
```
#### animation
不同于transition只能定义首尾两个状态，animation可以定义任意多的关键帧，因而能实现更复杂的动画效果。
```css
animation: animation-name || animation-duration || animation-timing-function || animation-delay ||animation-iteration-count || animation-direction
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115220651.png)
- 其他属性
    - 除了上述主要用到的六个属性外，还要额外介绍两个属性。
    - animation-fill-mode
        - 动画结束以后，会立即从结束状态跳回到起始状态。如果想让动画保持在结束状态，需要使用animation-fill-mode属性。
        - `animation-fill-mode: none || backwards || both`
            - none：默认值，回到动画没开始时的状态。
            - forwards：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
            - backwards：在 animation-delay所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
            - both: 根据animation-direction轮流应用forwards和backwards规则。
    - animation-play-state
        - 有时，动画播放过程中，会突然停止。这时，默认行为是跳回到动画的开始状态。
        - 如果想让动画保持突然终止时的状态，就要使用animation-play-state属性。
        - `animation-play-state:running || paused`
        - animation-play-state主要是用来控制元素动画的播放状态。其主要有两个值，running和paused其中running为默认值。通过paused将正在播放的动画停下了，通过running将暂停的动画重新播放，这个属性目前很少内核支持。



- keyframe
    - 在介绍animation具体使用之前，要先介绍keyframe。
    - @keyframes 让开发者通过指定动画中特定时间点必须展现的关键帧样式（或者说停留点）来控制CSS动画的中间环节。这让开发者能够控制动画中的更多细节而不是全部让浏览器自动处理。
    - 要使用关键帧, 先创建一个带名称的@keyframes规则，以便后续使用 animation-name这个属性来调用指定的@keyframes. 每个@keyframes 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。
    - `@keyframes animationname {keyframes-selector {css-styles;}}`
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115220746.png)
```html
<div class="one"></div>

.one {
        width: 100px;
        height: 100px;
        margin: 200px auto;
        background-color: #cd4a48;
        position: relative;
        animation: moveHover 5s ease-in-out 0.2s;

    }


    @keyframes moveHover {
        0% {
            top: 0px;
            left: 0px;
            background: #cd4a48;
        }
        50% {
            top: 200px;
            left: 200px;
            background:#A48992;
        }
        100% {
            top: 350px;
            left:350px;
            background: #FFB89A;
        }
    }
```
#### transform
transform就是变形，主要包括旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。
```css
transform: none || transform-functions
```
none:表示不进么变换；transform-function表示一个或多个变换函数，以空格分开；换句话说就是我们同时对一个元素进行transform的多种属性操作，例如rotate、scale、translate三种。

- translate
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221107.png)
- scale
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221126.png)
- rotate
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221144.png)
- skew
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221205.png)
- transform-origin
    - 以上变化的默认参照点是元素的中心点，不过可以通过transform-origin设置元素的参照点。
    - `transform-origin: X || Y || Z`
    - 其中X，Y，Z对应三维坐标，X，Y，Z的值可以是em，px。此外，X，Y可以是百分值，其中X也可以是字符参数值left，center，right。Y和X一样除了百分值外还可以设置字符值top，center，bottom。


### css的块元素和行内元素，有哪些，区别，转换
- 块级元素：会自动占据一定矩形空间，可以通过设置高度、宽度、内外边距等属性，来调整的这个矩形的样子。
- 行内元素：则没有自己的独立空间，它是依附于其他块级元素存在的，因此，对行内元素设置高度、宽度、内外边距等属性，都是无效的。

- 常见的块级元素和行内元素
  - 块级元素：div、p、h1-h6、hr、ul、ol
  - 行内元素：a、b、i、u、em、input、select、img、label、br

- CSS块元素与行内元素的转换：
  - 块转行内：display:block;
  - 行内转块：display:inline;

### css的三种引入方式及优先级

1. 行内样式
   `<p style="color:#F00; "></p>`
   缺点：HTML页面不纯净，文件体积大，不利于蜘蛛爬行，后期维护不方便。

2. 内嵌样式
   内嵌样式就是将CSS代码写在`<head></head>`之间，并且用`<style></style>`进行声明。
   优缺点：页面使用公共CSS代码，也是每个页面都要定义的，如果一个网站有很多页面，每个文件都会变大，后期维护难度也大，如果文件很少，CSS代码也不多，这种样式还是很不错的。

3. 外部样式
   链接样式（推荐）： 链接样式是使用频率最高，最实用的样式，只需要在`<head></head>`之间加上`<link…/>`就可以了。
   优缺点：实现了页面框架代码与表现CSS代码的完全分离，使得前期制作和后期维护都十分方便

导入样式（不建议使用）： 导入样式和链接样式比较相似，采用@import样式导入CSS样式表，在HTML初始化时，会被导入到HTML或者CSS文件中，成为文件的一部分，类似第二种内嵌样式。
 链接式和导入式的区别：
    <link>
        1、属于XHTML
        2、优先加载CSS文件到页面
    @import
        1、属于CSS2.1
        2、先加载HTML结构在加载CSS文件。

四种CSS引入方式的优先级：
1.就近原则
2.理论上：行内>内嵌>链接>导入
3.实际上：内嵌、链接、导入在同一个文件头部，谁离相应的代码近，谁的优先级高（页面多种方式使用css样式引入）

### line-height单位的区别

1.normal
2.inherit
3.number
4.number + px/em/rem/……
5.% 同number+px/em/rem单位效果一样，后代元素会直接继承父元素的line-height计算结果值

- normal同number效果一样，会在每个后代元素下重新计算出实际值，系数约1.2

- %同number+px/em/rem单位效果一样，后代元素会直接继承父元素的line-height计算结果值

- 当一个元素是使用带单位的值声明的，那么它的后代元素会继承其父元素line-height计算结果值:行高属性是用类似px、em、rem等单位来声明时，它的值会先被计算，然后计算后的值会传到任何继承它的后代元素。

- 当一个元素是使用不带单位的数字，声明的值会被继承，也就是说这个值会在子元素中用来与子元素本身的font-size重新计算子元素的line-height。

- 所以我们通常想要的效果是使用不带单位的line-height,我们可以在父元素上设定一个无单位数字line-height,其子元素会默认继承。如果想在子元素上有额外的样式，则在子元素上写line-height覆盖即可。
  ### 移除inline-block间隙
1. 移除空格
   元素间的间隙出现的原因是元素标签之间的空格，把空格去掉间隙自然就会消失。
```html
<div class="demo">
  <span>我是一个span</span><span>我是一个span</span><span>我是一个span</span><span>我是一个span</span>
</div>

<div class="demo">
        <span>我是一个span
        </span><span>我是一个span
        </span><span>我是一个span
        </span><span>我是一个span</span>
    </div>

<div class="demo">
        <span>我是一个span</span><!-- 
        --><span>我是一个span</span><!-- 
        --><span>我是一个span</span><!-- 
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
2.使用margin负值
```css
.parent .child + .child {
  margin-left: -2px
}
```
3.使用font-size:0
在父容器上使用font-size:0;可以消除间隙，可以这样写:
```html
// html
<div class='third'>
    <div class='first-div'></div>
    <div class='second-div'></div>
    <div class='third-div'></div>
</div>

// css
.third {
  font-size: 0;  // 这里
}

.first-div, .second-div, .third-div {
  display: inline-block;  // 这里
  height: 100px;
  margin: 0;
}

.first-div, .third-div {
  background: pink;
  width: 50px;
}

.second-div {
  background: red;
  width: calc(100% - 100px);
}

```
4.letter-spacing和/line-height
```html
// html
<div class='third'>
    <div class='first-div'></div>
    <div class='second-div'></div>
    <div class='third-div'></div>
</div>
<div class='third'>
    <div class='first-div'></div>
    <div class='second-div'></div>
    <div class='third-div'></div>
</div>

// css
.third {
  letter-spacing: -15px;  // 在chrome下测试这个值只要 <= -5 
  line-height: 13px;  // 在chrome下测试这个值只要 <= 13 
} 

.first-div, .second-div, .third-div {
  display: inline-block;
  height: 100px;
}

.first-div, .third-div {
  background: pink;
  width: 50px;
}

.second-div {
  background: red;
  width: calc(100% - 100px);
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106101630.png)
5.word-spacing
最优解在这，设置父元素，display:table和word-spacing

```css
.parent{
  display: table;
  word-spacing:-1em; /*兼容其他浏览器，题主还未验证*/
}
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
`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用`BFC`呢，`BFC`可以看做是一个`CSS`元素属性。简单来说，BFC 实际上是一块区域，在这块区域中遵循一定的规则，有一套独特的渲染规则。一个环境中的元素不会影响到其它环境中的布局。

> #### BFC的规则

1. 垂直方向的距离由margin决定， 属于同一个`BFC`（处于同一个BFC中的元素相互影响）的两个相邻的标签外边距会发生重叠。（给其中一个元素增加一个父级，然后让他的父级触发BFC）
2. BFC的区域不会与浮动元素的box重叠(浮动元素不会覆盖到触发 BFC 元素上)。清除浮动布局，阻止同级元素被浮动元素覆盖。（非浮动元素触发了BFC,阻止元素被浮动元素覆盖原理）
3. BFC在页面上是独立的容器，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。（父级触发了BFC）
4. 计算BFC高度的时候，浮动元素也会参与计算，防止使用float脱离文档流，高度塌陷。（父级触发了BFC）
5. BFC 区域内的元素外边距会发生重叠。
6. BFC 区域内的元素不会与浮动元素重叠。
7. 计算 BFC 区域的高度时，浮动元素也参与计算。
8. BFC 区域就相当于一个容器，内部的元素不会影响到外部，同样外部的元素也不会影响到内部。
> #### BFC触发
9. float的值不是none。
10. position的值不是static或者relative。绝对定位元素（元素的 `position` 为 `absolute` 或 `fixed`）
11. display的值是inline-block、table-cell、flex、table-caption或者inline-flex。
12. 内联块 (元素具有 display: inline-block)。
13. overflow的值不是visible(hidden、scroll、auto、inherit)
> #### BFC解决了什么问题
1. 消除父子元素边距重叠，父元素设置overflow: hidden
2. 消除相邻元素垂直方向的边距重叠：第二个子元素套一层，并设置overflow: hidden，构建BFC使其不影响外部元素。
3. 清除浮动：父元素设置overflow: hidden触发BFC实现清除浮动，防止父元素高度塌陷，后面的元素被覆盖，实现文字环绕等等。
4. 使用float脱离文档流，高度塌陷
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

### Flex
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009164716.png)
#### Flex属性
Flex 是 Flexible Box 的缩写，意为"弹性布局",用来为盒状模型提供最大的灵活性。指定容器 display: flex 即可。 简单的分为容器属性和元素属性。
- 容器的属性：
  - flex-direction：决定主轴的方向（即子 item 的排列方法）flex-direction: row | row-reverse | column | column-reverse;
    ```css
    .ele {
        flex-direction: row;                // 默认值，主轴为水平方向，起点在左端。
        flex-direction: row-reverse;        // 主轴为水平方向，起点在右端。
        flex-direction: column;             // 主轴为垂直方向，起点在上。
        flex-direction: column-reverse;     // 主轴为垂直方向，起点在下。
      }
    ```
  - flex-wrap：决定换行规则 flex-wrap: nowrap | wrap | wrap-reverse;
    ```css
    .ele {
       flex-wrap: nowrap;          // 默认，不换行
       flex-wrap: wrap;            // 换行，第一行在上方。
       flex-wrap: wrap-reverse     // 换行，第一行在下方。
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
    .ele{
      justify-content: flex-start;      // 默认，左对齐
      justify-content: flex-end;        // 右对齐
      justify-content: center;          // 居中
      justify-content: space-between;   // 两端对齐，项目之间的间隔都相等。
      justify-content: space-around;    // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    }
    ```
  - align-items：对齐方式，竖直轴线方向
    ```css
      .ele{
        align-items: flex-start;    // 交叉轴的起点对齐。
        align-items: flex-end;      // 交叉轴的终点对齐。
        align-items: center;        // 交叉轴的中点对齐。
        align-items: baseline;      // 项目的第一行文字的基线对齐。
        align-items: stretch;       // 默认，如果项目未设置高度或设为auto，将占满整个容器的高度。
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
    - 子容器的 align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖父容器 align-items 属性。默认值为 auto，表示继承父元素的 align-items属性，如果没有父元素，则等同于 stretch。
#### flex:1, flex:auto, flex:0 区别
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
```css
  .item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
```
- flex-grow属性
  - flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  - 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
- flex-shrink属性
  - flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  - 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
  - 负值对该属性无效
- flex-basis属性
  - flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
  - 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。


1. flex: auto; ==> flex: 1 1 auto;相当于可扩大，可缩小
2. flex: none; ==> flex: 0 0 auto;相当于不可扩大，不可缩小
3. flex: 0; ==> flex:0 1 0%;相当于不可扩大，可缩小
4. flex: 1; (取值为非负数字) ==> flex: 1 1 0%; (赋值在第一位，后两位是固定的1 ，0%);相当于可扩大，可缩小
5. flex: 20%; || flex: 200px; (取值为一个长度或百分比) ==> flex:1 1 20%; || flex: 1 1 200px; (前两位是固定值，赋值第三位)
6. flex: 2 3; (取值为两个非负数字) ==> flex: 2 3 0%; (取值为前两位，第三位固定0%)
7. flex: 2 200px; (取值为一个非负数字和一个长度或百分比) ==> flex:2 1 200px; (取值为第一位和最后一位，中间值固定1)

#### flex:1
- 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
- flex-grow（扩展量）定义项目的的放大比例；
  - 代表含义是对额外空间的占据量，所谓额外空间就是这一行多余的空间，有多余的空间这一属性才有用。默认值是0，意思就是即使有多余空间，它也不要
  - 默认为0，即 即使存在剩余空间，也不会放大；所有项目的flex-grow为1：等分剩余空间（自动放大占位）；flex-grow为n的项目，占据的空间（放大的比例）是flex-grow为1的n倍。
- flex-shrink（收缩量）定义项目的缩小比例；
  - 这个属性只有在没有额外空间时起作用，意思是没有额外空间时，成员贡献出空间的大小。默认值为1，如果为0意思是不贡献空间，也就是说即使空间不足，成员大小也不发生改变。
  - 默认为1，即 如果空间不足，该项目将缩小；
  - 所有项目的flex-shrink为1：当空间不足时，缩小的比例相同；flex-shrink为0：空间不足时，该项目不会缩小；flex-shrink为n的项目，空间不足时缩小的比例是flex-shrink为1的n倍。
- flex-basis
  - 表示在分配额外空间之前，成员占据的空间，默认值为auto，意思就是你本来占多少就是多少。但也可以自己设置长度(px)。这个值的效果就是确定在释放和分配空间的时候，你的初值是多少。
  - 定义在分配多余空间之前，项目占据的主轴空间（main size），浏览器根据此属性计算主轴是否有多余空间
  - 默认值为auto，即 项目原本大小；设置后项目将占据固定空间。
### Grid
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211009164716.png)
lex 布局虽然强大，但是只能是一维布局，如果要进行二维布局，那么我们还需要使用 grid。

grid 布局又称为“网格布局”，可以实现二维布局方式，和之前的 表格table布局差不多，然而，这是使用 CSS 控制的，不是使用 HTML 控制的，同时还可以依赖于媒体查询根据不同的上下文得新定义布局。和 table 布局不同的是，grid 布局不需要在 HTML 中使用特定的标签布局，所有的布局都是在 CSS 中完成的，你可以随意定义你的 grid 网格。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015141127.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015144548.png)

#### 使用 grid 布局
使用 grid 布局很简单，通过display属性设置属性值为 grid 或 inline-grid 或者是 subgrid（该元素父元素为网格，继承父元素的行和列的大小） 就可以了。

网格容器中的所有子元素就会自动变成网格项目（grid item），然后设置列（grid-template-columns）和 行（grid-template-rows）的大小，设置` grid-template-columns `有多少个参数生成的 grid 列表就有多少个列。如果没有设置 grid-template-columns，那么默认只有一列，宽度为父元素的 100%。

**注：当元素设置了网格布局，column、float、clear、vertical-align属性无效。**

```html
<div class="grid-container">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
</div>


.grid-container{
    padding: 20px;
    display: grid;
    grid-template-rows: 50px 100px 60px 80px;
    grid-template-columns: 50px 1fr 1fr 2fr;
    background: pink;
}
.item{
    border: 2px solid palegoldenrod;
    color: #fff;
}
```
- css fr 单位是一个自适应单位，fr单位被用于在一系列长度值中分配剩余空间，如果多个已指定了多个部分，则剩下的空间根据各自的数字按比例分配。
- fr 是基于网格容器可用空间来计算的（flex 也是一样），所以我们可以和其他单位混合使用，如果需要的话
#### 行或列最小和最大尺寸
`minmax()`函数来创建行或列的最小或最大尺寸，第一个参数定义网格轨道的最小值，第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受 auto 值。auto 值允许网格轨道基于内容的尺寸拉伸或挤压。
```css
.grid-container{
  padding: 20px;
  display: grid;
  grid-template-rows: minmax(100px,200px) minmax(50px,200px);
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
  .grid-container{
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2,100px);
  grid-template-rows: repeat(3,100px);
  background: pink;
  }
```
#### 间距
- grid-column-gap：创建列与列之间的距离。
- grid-row-gap：行与行之间的距离。
- grid-gap 是 grid-row-gap 和 grid-column-gap两个属性的缩写。
```css
  .grid-container{
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2,100px);
    grid-template-rows: repeat(3,100px);
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


  .grid-container{
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(2,100px);
      grid-template-rows: repeat(3,100px);
      grid-column-gap: 50px;
      grid-row-gap: 15px;
      background: pink;
  }
  .item{
      border: 2px solid palegoldenrod;
      color: #fff;
      text-align: center;
      font-size: 20px;
  }
  .item1{
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      background: #fffa90;
      color: #000;
  }
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
.grid-container{
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,100px);
    grid-template-rows: repeat(3,100px);
    grid-column-gap: 50px;
    grid-row-gap: 15px;
    background: pink;

}
.item{
    border: 2px solid palegoldenrod;
    color: #fff;
    text-align: center;
    font-size: 20px;

}
.item1{
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


.grid-container{
    text-align: center;
    height: 400px;
    padding: 100px;
    display: grid;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    background: pink;
    grid-template-columns: [col1-start] 100px [col1-end] 5px [col2-start] 100px [col2-end] 5px [col3-start]
    100px [col3-end] 5px [col4-start] 100px [col4-end];
    grid-template-rows: [row1-start] auto [row1-end] 5px [row2-start] auto [row2-end] 5px [row3-start] auto
     [row3-end] 5px [row4-start] auto [row4-end] 5px [row5-start] auto [row5-end];
}


.a { grid-column: col1-start / col3-end; grid-row: row1-start;
    background: #ffffff;}
.b { grid-column: col4-start / col4-end; grid-row: row1-start / row5-end; background: orange; }
.c { grid-column: col1-start; grid-row: row2-start; background: #ffffff;}
.d { grid-column: col2-start; grid-row: row2-start; background: #ffffff;}
.e { grid-column: col3-start; grid-row: row2-start; background: #ffffff;}
.f { grid-column: col1-start / col2-end; grid-row: row3-start; background: #ffffff;}
.g { grid-column: col3-start; grid-row: row3-start; background: #ffffff;}
.h { grid-column: col1-start; grid-row: row4-start; background: #ffffff;}
.i { grid-column: col2-start / col3-end; grid-row: row4-start; background: #ffffff;}
.j { grid-column: col1-start / col3-end; grid-row: row5-start; background: #ffffff;}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015144801.png)

#### 通过网格区域命名和定位网格项目
- 什么是网格区域：
  - 网格区域(grid-area)是一个逻辑空间，主要用来放置一个或多个网格单元格（Grid Cell）。他是由四条网格线(Grid line)，网格区域每边一条，四边相交组织的网格轨道(Grid Track)。简单点理解，网格区域是有四条网格线交织组成的网格空间，这个空间中可能是一个网格单元格，也可能是多个网格单元格。
- 定义网格区域
  - 在CSS Grid Layout中定义网格区域有两种方式，一种是通过网格线来定义，另一种是通过grid-template-areas来定义。接下来看看两种定义网格区域的方法在具体使用过程中有何不同。

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

    .grid-container{
        text-align: center;
        padding: 20px;
        display: grid;
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        background: pink;
        grid-template-areas: "header header header header header"
                            "sidebar content content content content"
                            "footer footer footer footer footer";

        grid-template-rows: 50px 150px 50px;
        grid-template-columns: 200px 200px 200px;

    }

    .header { grid-area:header; background: #fff}
    .content { grid-area: content; background: #fffa90}
    .sidebar { grid-area: sidebar; background: #5bc0de}
    .footer { grid-area: footer; background: #ffff00}
  ```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015145529.png)
在不设置高度的情况下（父容器和 grid-template-rows 的值，或者 grid-template-rows 设置为 auto 时，slider 和 content 的高度是一致的，并且会根据其内的高度自适应）
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015145708.png)
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
### px、rpx、em、rem、dpr、vw、wh 的值各是什么意思
- px:像素
  - css中的px是一个相对（抽象）单位是虚拟像素，因为不同的设备在大小宽高相同时，他们的物理像素大小也可能是不同的，物理像素高的设备单位面积内存放的像素点就高，因此画质看起来就更精细，通常情况下在pc端中，css中的px就接近于实际的像素大小，但是在移动设备上，根据不用机型的分辨率大小，css中的一个px可能就会对应不同数量的物理像素点
- rem: 根据根元素(即 html)的 font-size
  - rem和em类似都是相对长度单位，但是rem只会相对于html根元素的字体大小，也就是说如果根元素字体设置为18px，那么全局内rem的值换算都为1rem = 18px
  - 有时我们为了换算方便会将根元素的字体大小先设置为62.5%，然后根据需要进行调整，原因是62.5%*16px = 10px，此时也就是1rem = 10px
- em: 根据「自身元素」的 font-size
  - 使用em单位的元素如果自身设置了字体大小，那么就相对于自身计算，如果自身没有设置字体大小那么就会继承父元素的字体大小，如果父元素没有设置，就会依次向上寻找（因为字体大小是会被继承的），如果页面中没有设置字体大小，那么就会以浏览器的默认字体大小16px为基准
- vw: viewport width
- vh: viewport height
  - vh指的是视窗高度 vh类似于一种百分比的单位，他相对于视窗的高度，将视窗的高度分为100份，10vh也就是占用视窗的10%
- vm:
  - vm是在视口中选取 宽度或者高度最小的那一个，然后想vw、vh一样将其分为100等份
- rpx：
  - rpx 响应式px单位
  - rpx本质上是和宽度相关的单位，屏幕越宽实际像素值就越大，这是根据屏幕宽度缩放的单位，如果你不想根据屏幕缩放，那么不要使用rpx
  - 使用rpx单位元素的大小的计算公式为
    - 750 * 元素在设计稿中的宽度 / 设计稿基准宽度
    - 若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 * 100 / 750，结果为：100rpx
    - 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 * 100 / 640，结果为：117rpx
  - rpx本质上是和宽度相关的单位，屏幕越宽实际像素值就越大，这是根据屏幕宽度缩放的单位，如果你不想根据屏幕缩放，那么不要使用rpx
  - 如果你的字体使用了rpx就需要注意了，你的字体也会跟着屏幕的宽度变化而变化
  - rpx不支持切换横竖屏时进行计算大小，因此如果你使用了rpx，建议锁定屏幕方向
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
### CSS标签meta  ？？？？？？？？？
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
### CSS九宫格布局
#### Flex实现
原理： 使用flex弹性布局和flex-wrap来设置
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

  // css代码
  .box {
    position: relative;
    width: 100%;
    height: 600px;
  }
  .box-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .box-inner > li {
    overflow: hidden;
    flex-grow: 1;
    background-color: darkorange;
    text-align: center;
    color: #ffffff;
    width: 33%;
    height: 200px;
    line-height: 200px;
    margin: 1px;
    text-align: center;
  }
```
#### Grid实现
原理：使用grid创建网格布局，划分为3x3的等分布局。
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
  //css代码
  .box {
    display: grid;
    height: 600px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  }
  .box > div {
    width: 98%;
    margin: 1%;
    background-color: deeppink;
    text-align: center;
    line-height: 200px;
  }
  .box > div:nth-child(even) {
    background-color: black;
    color: #fff;
  }
```

#### Float实现
原理：利用float布局和31%的百分比设置宽和高。
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
  //css代码
  .box {
    position: relative;
    width: 100%;
    height: 600px;
  }
  .box-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .box-inner > li {
    position: relative;
    float: left;
    width: 31%;
    height: 31%;
    margin: 1%;
    list-style-type: none;
    background-color: springgreen;
    text-align: center;
    line-height: 200px;
  }
  .box-inner > li:nth-child(odd) {
    background-color: silver;
  }
```
#### Table实现

原理1：使用原生table表格实现九宫格 缺点：单元之间的间隔使用border-spacing实现，不支持百分比，设置后为添加单元四周的间隔。

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
//css代码
.box {
  position: relative;
  width: 100%;
  height: 600px;
}
.box-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 10px;
  border-spacing: 0.57em;
  font-size: 20px;
  empty-cells: hide;
  table-layout: fixed;
}
.box-inner > tbody > tr > td {
  text-align: center;
  background-color: burlywood;
  overflow: hidden;
}
```
### RAF（requestAnimationFrame） 和 RIC（requestIdleCallback） 是什么
#### 页面流畅与 FPS

- 页面是一帧一帧绘制出来的，当每秒绘制的帧数（FPS）达到 60 时，页面是流畅的，小于这个值时，用户会感觉到卡顿。

- 1s 60帧，所以每一帧分到的时间是 1000/60 ≈ 16 ms。所以我们书写代码时力求不让一帧的工作量超过 16ms。
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
  div.style.transform = `translate3d(0, ${offsetTop += 10}px, 0)`;
  window.requestAnimationFrame(run);
  };
  run();
```
#### 总结
一些低优先级的任务可使用`requestIdleCallback`等浏览器不忙的时候来执行，同时因为时间有限，它所执行的任务应该尽量是能够量化，细分的微任务（micro task）。

因为它发生在一帧的最后，此时页面布局已经完成，所以不建议在 requestIdleCallback 里再操作 DOM，这样会导致页面再次重绘。DOM 操作建议在 RAF 中进行。同时，操作 DOM 所需要的耗时是不确定的，因为会导致重新计算布局和视图的绘制，所以这类操作不具备可预测性。

Promise 也不建议在这里面进行，因为 Promise 的回调属性 Event loop 中优先级较高的一种微任务，会在requestIdleCallback 结束时立即执行，不管此时是否还有富余的时间，这样有很大可能会让一帧超过 16 ms。

### 怎样处理 移动端 1px 被 渲染成 2px问题？
- 局部处理
  - meta标签中的 viewport属性 ，initial-scale 设置为 1
  - rem按照设计稿标准走，外加利用transfrome 的scale(0.5) 缩小一倍即可；
- 全局处理
  - mate标签中的 viewport属性 ，initial-scale 设置为 0.5
  - rem 按照设计稿标准走即可
### 网页视口尺寸
- 屏幕
  - 屏幕尺寸
    - 屏幕尺寸是屏幕的宽度和高度：显示器或移动屏幕。window.screen是保存屏幕尺寸信息的对象。
      - screen.width：屏幕的宽 、 screen.height：屏幕的高。
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106104805.png)
  - 可用屏幕尺寸
    - 可用的屏幕大小由活动屏幕的宽度和高度组成，没有操作系统工具栏。
    - screen.availWidth：可利用的宽，等于屏幕的宽、screen.availHeight：可利用的高，等于屏幕的高减去 mac 顶部栏或 windows 底部栏。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106104855.png)
  - 屏幕距离
    - screenTop：浏览器窗口左上角到屏幕上边缘的距离。
    - screenLeft：浏览器窗口左上角到屏幕左边缘的距离。
    - Firefox 浏览器不支持上述属性，但是可以使用👇:
      - screenX：等于 screenLeft。
      - screenY：等于 screenTop。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106105729.png)
- window窗口
  - 窗口的外部大小由整个浏览器窗口的宽度和高度组成，包含地址栏，选项卡栏和其他浏览器面板。
    - window.outerWidth：浏览器窗口的宽、window.outerHeight：浏览器窗口的高。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106105935.png)
- 客户区
  - 元素的客户区大小（client dimension），指的是元素内容及其内边距所占据的空间大小
  - clientWidth：内容可视区的宽度、clientHeight：内容可视区的高度。
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110042.png)
  - 如果有滚动条clientWidth = 元素宽 + padding（左右） - 滚动条
  - 如果没有滚动条clientWidth = 元素宽 + padding（左右）
  - 获取页面大小:let pageWidth = document.documentElement.clientWidth || document.body.clientWidth（ie7之前的版本）;
- 网页大小
  - 网页大小由呈现的页面内容的宽度和高度组成。
  - scrollWidth：实际内容的宽度。没有垂直滚动条时与clientWidth相同。否则是等于实际内容的宽度 + padding。scrollWidth也包括 ::before 和 ::after这样的伪元素。
  - scrollHeight：实际内容的高度。没有垂直滚动条时与clientHeight相同。否则是等于实际内容的高度 + padding。scrollHeight也包括 ::before 和 ::after这样的伪元素。
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110220.png)
- 滚动距离
  - scrollLeft：元素最左端和窗口中可见内容的最左端之间的距离。即当前左滚的距离
  - scrollTop：元素最顶端和窗口中可见内容的最顶端之间的距离。即当前上滚的距离
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110333.png)
  - 如果有滚动条scrollLeft = 隐藏内容宽度 + border
  - 如果没有滚动条scrollLeft = 0
- 偏移量
  - 偏移量包括元素在屏幕上占用的所有可见的空间。元素的可见大小由其高度、宽度决定，包括所有内边距、滚动条和边框大小（注意，不包括外边距）。
  - offsetHeight：元素在垂直方向上占用的空间大小，包括元素的高度、（可见的）水平滚动条的高度、上边框高度和下边框高度。
  - offsetWidth：元素在水平方向上占用的空间大小。包括元素的宽度、（可见的）垂直滚动条的宽度、左边框宽度和右边框宽度。
  - offsetLeft：当前元素内容区域（包括border）左边缘到 offsetParent 内容区域（不包括border）左边缘的距离。
  - offsetTop：当前元素内容区域（包括border）顶部到 offsetParent 内容区域（不包括border）顶部的距离。
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110734.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106110836.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111014.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111112.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111243.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111342.png)
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106111403.png)
  - 

### CSS优化
- 多个css合并，尽量减少HTTP请求
- 将css文件放在页面最上面
- 移除空的css规则
- 避免使用CSS表达式
- 选择器优化嵌套，尽量避免层级过深
- 充分利用css继承属性，减少代码量
- 抽象提取公共样式，减少代码量
- 属性值为0时，不加单位
- 属性值为小于1的小数时，省略小数点前面的0
- css雪碧图

## JS
### js能表示的最大整数，小数在计算机内部的存储过程？？？？？？
### JS如何实现多线程
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115222810.png)
JS为我们提供了一个Worker的类，它的作用就是为了解决这种阻塞的现象。当我们使用这个类的时候，它就会向浏览器申请一个新的线程。这个线程就用来单独执行一个js文件。
```js
var worker = new Worker(js文件路径);    //这个语句就会申请一个线程用来执行这个js文件。

// 　在主线程中有一些方法来实现对新线程的控制和数据的接收。在这里，我们只说比较常用的几个方法。
//postMessage(msg);
//postMessage方法把在新线程执行的结果发送到浏览器的js引擎线程里
worker.onmessage = function(){
    //获取在新线程中执行的js文件发送的数据 用event.data接收数据
    console.log( event.data )
};
setTimeout( function(){
    worker.terminate();
    //terminate方法用于关闭worker线程
},2000)
    
setTimeout( function(){
    worker = new Worker("js/test22.js");
    //再次开启worker线程
},3000)


// 新线程中使用postMessage()方法可以向主线程中发送一些数据，主线程中使用worker的onmessage事件来接收这些数据，这样就实现了js的多线程执行和多线程之间数据的传递。
```
### 图片懒加载的原理？
#### 懒加载概念
对于页面有很多静态资源的情况下（比如网商购物页面），为了节省用户流量和提高页面性能，可以在用户浏览到当前资源（当前窗口（可视区域）的大小）的时候，再对资源进行请求和加载。
#### 懒加载实现原理
我们的图片要显示出来的话一般是借用img标签，然后把src属性写上图片的地址，才能把图片显示出来，那就想，我们先把图片不显示出来，就来写一个自定义属性字段，把这个属性字段的值写成图片地址，当图片在可视区域的范围的时候，就把自定义属性的值作为src的值。这就实现了懒加载。
```html
<img src="" lazyload="true" data-original="https://t7.baidu.com/itu=1732966997,2981886582&fm=193&f=GIF" alt="" class="image-item">
```
data-original是我们自己定义的属性字段，它的值为我们要的图片地址。lazyload="true"是为了当图片加载出来后将图片不在需要懒加载了。
#### 可视区域怎么找呢？
使用：document.documentElement.clientHeight可以获取到当前屏幕的高度。
当我们获取到高度之后，在想，如果这个图片在这个区域内，就让图片显示出来。

然后在想：当页面发生上滑的时候，可视区域的图片就会发生改变，所以当鼠标滚轮滚动的时候，在可视区域的图片就可能出去可视区域了，不在的可能这时候就进来了可视区域。所以我们要写一个监听事件。
当我们拿到所有的img时，利用循环去判断他们是否在可视区域内，在就加载出来，不在就暂时不加载。 所以需要满足的条件是图片的顶部在可视区域的高度里面，图片的底部也要在可视区域里面，也就是图片没有被划出去。
```js
//获取可视区域的高度
var viewHeight = document.documentElement.clientHeight
document.addEventListener('scroll', function () {
    //获取到页面上所有的img
    //判断某个是否进入可视区域
    //如果进入，就把它自身的data-original的值取出来放到src
    var arr = document.querySelectorAll('img[data-original][lazyload]')
    // console.log(arr);
    /* for(var i of arr){
        if(arr[i].offsettop()<i){
            
        }
    } */
    arr.forEach(item => {
        let rect = item.getBoundingClientRect() //用于一次性获取某个容器相对于浏览器上下左右的位置
        if (rect.top < viewHeight && rect.bottom >= 0) {
            item.src = item.dataset.original
            item.removeAttribute('data-original')
            item.removeAttribute('lazyload')
        }
    })
})
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .image-item {
        height: 300px;
        display: block;
        margin-bottom: 50px;
    }
</style>

<body>
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=1785207335,3397162108&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=2581522032,2615939966&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=3423293041,3900166648&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=1417505637,1247476664&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=3659156856,3928250034&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=1416385889,2308474651&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=1599162854,1822154160&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=1476844859,894832600&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=3728410568,989468460&fm=193&f=GIF" alt=""
        class="image-item">
    <img src="" lazyload="true" data-original="https://t7.baidu.com/it/u=3696285528,2808863331&fm=193&f=GIF" alt=""
        class="image-item">

</body>
<script>
    //获取可视区域的高度
    var viewHeight = document.documentElement.clientHeight
    document.addEventListener('scroll', function () {
        //获取到页面上所有的img
        //判断某个是否进入可视区域
        //如果进入，就把它自身的data-original的值取出来放到src
        var arr = document.querySelectorAll('img[data-original][lazyload]')
        // console.log(arr);
        /* for(var i of arr){
        if(arr[i].offsettop()<i){
            
        }
    } */
        arr.forEach(item => {
            let rect = item.getBoundingClientRect()//用于一次性获取某个容器相对于浏览器上下左右的位置
            if (rect.top < viewHeight && rect.bottom >= 0) {
                item.src = item.dataset.original
                item.removeAttribute('data-original')
                item.removeAttribute('lazyload')
            }
        })
    })
</script>
</html>
```
### JS中七种为false和六种错误
- 七种情况在JS中对应的布尔值都为false
    - false
    - 0
    - null
    - undefined
    - ""      空字符串（双引号）
    - ''      空字符串（单引号）
    - NaN

- js的六种错误
    - SyntaxError：语法错误
    - Uncaught ReferenceError：引用错误
    - RangeError：范围错误
    - TypeError类型错误
    - URIError，URL错误
    - EvalError eval()函数执行错误

### 箭头函数和普通函数有什么区别？如果把箭头函数转换为不用箭头函数的形式，如何转换?
1. 语法更加简洁、清晰
   箭头函数的定义要比普通函数定义简洁、清晰得多，很快捷。

2. 箭头函数没有 prototype (原型)，所以箭头函数本身没有this​​​​​​​
```js
   // 箭头函数
   let a = () => {};
   console.log(a.prototype); // undefined

  // 普通函数
  function a() {};
  console.log(a.prototype); // {constructor:f}
```
3. 箭头函数不会创建自己的this
箭头函数没有自己的this，箭头函数的this指向在定义（注意：是定义时，不是调用时）的时候继承自外层第一个普通函数的this。所以，箭头函数中 this 的指向在它被定义的时候就已经确定了，之后永远不会改变。
```js
  let obj = {
    a: 10,
    b: () => {
      console.log(this.a); // undefined
      console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    },
    c: function() {
      console.log(this.a); // 10
      console.log(this); // {a: 10, b: ƒ, c: ƒ}
    }
  }
  obj.b();
  obj.c();
```

4. call | apply | bind 无法改变箭头函数中this的指向
call | apply | bind方法可以用来动态修改函数执行时this的指向，但由于箭头函数的this定义时就已经确定且永远不会改变。所以使用这些方法永远也改变不了箭头函数this的指向。
   ```js
    var id = 10;
    let fun = () => {
      console.log(this.id)
    };
    fun();     // 10
    fun.call({ id: 20 });     // 10
    fun.apply({ id: 20 });    // 10
    fun.bind({ id: 20 })();   // 10
   ```

5. 箭头函数不能作为构造函数使用
因为箭头函数没有自己的this，它的this其实是继承了外层执行环境中的this，且this指向永远不会随在哪里调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用new调用时会报错！
```js
let Fun = (name, age) => {
  this.name = name;
  this.age = age;
};

// 报错
let p = new Fun('dingFY', 24);

```
6. 箭头函数不绑定arguments，取而代之用rest参数...代替arguments对象，来访问箭头函数的参数列表
箭头函数没有自己的arguments对象。在箭头函数中访问arguments实际上获得的是外层局部（函数）执行环境中的值。
```js
  // 普通函数
  function A(a){
    console.log(arguments);
  }
  A(1,2,3,4,5,8);  //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]

  // 箭头函数
  let B = (b)=>{
    console.log(arguments);
  }
  B(2,92,32,32);   // Uncaught ReferenceError: arguments is not defined

  // rest参数...
  let C = (...c) => {
    console.log(c);
  }
  C(3,82,32,11323);  // [3, 82, 32, 11323]
```

7. 箭头函数不能用作Generator函数，不能使用yield关键字
8. 箭头函数没有prototype(原型)，所以箭头函数本身没有this
9. 箭头函数的this在定义的时候继承自外层第一个普通函数的this。
10. 如果箭头函数外层没有普通函数，严格模式和非严格模式下它的this都会指向window(全局对象)
11. 箭头函数本身的this指向不能改变，但可以修改它要继承的对象的this。
12. 箭头函数的this指向全局，使用arguments会报未声明的错误。
13. 箭头函数的this指向普通函数时,它的argumens继承于该普通函数
14. 使用new调用箭头函数会报错，因为箭头函数没有constructor
15. 箭头函数不支持new.target
16. 箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名
17. 箭头函数相对于普通函数语法更简洁优雅
### 箭头函数的注意事项

18. 一条语句返回对象字面量，需要加括号，或者直接写成多条语句的return形式，否则像func中演示的一样，花括号会被解析为多条语句的花括号，不能正确解析
```js
  var func1 = () => { foo: 1 }; // 想返回一个对象,花括号被当成多条语句来解析，执行后返回undefined
  var func2 = () => ({foo: 1}); // 用圆括号是正确的写法
  var func2 = () => {
    return {
    foo: 1 // 更推荐直接当成多条语句的形式来写，可读性高
    };
  };
```
19. 箭头函数在参数和箭头之间不能换行！
```js
var func = ()
        => 1;  // 报错： Unexpected token =>
```

20. 箭头函数的解析顺序相对靠前
```js
let a = false || function() {}; // ok
let b = false || () => {}; // Malformed arrow function parameter list
let c = false || (() => {}); // ok
```

### 哪些场景下不能使用箭头函数？

1. 定义对象方法
JS 中对象方法的定义方式是在对象上定义一个指向函数的属性，当方法被调用的时候，方法内的 this 就会指向方法所属的对象。
```js
let obj = {
  array: [1, 2, 3],
  sum: () => {
      console.log(this === window); // true
      return this.array.reduce((result, item) => result + item);
  }
};
console.log(this === window); //true
obj.sum();//报错：Uncaught TypeError: Cannot read property 'reduce' of undefined at Object.sum
// 确保 this 是在运行时是由包含它的上下文决定的。
let obj = {
    array: [1, 2, 3],
    sum() {
        console.log(this === window); // false
        return this.array.reduce((result, item) => result + item);
    }
};
console.log(this === window); //true
console.log(obj.sum());//6
```
2. 定义原型方法
同样的规则适用于原型方法（prototype method）的定义，使用箭头函数会导致运行时的执行上下文错误。
```js
function Cat(name) {
    this.name = name;
}
Cat.prototype.sayCatName = () => {
    console.log(this === window); // => true
    return this.name;
};
const cat = new Cat('Tom');
console.log(cat.sayCatName()); // undefined



function Cat(name) {
    this.name = name;
}
Cat.prototype.sayCatName = function () {
    console.log(this === window); // => false
    return this.name;
}
const cat = new Cat('Tom');
console.log(cat.sayCatName()); // Tom
```

3. 定义事件回调函数（不能定义动态上下文的回调函数）
箭头函数在声明的时候就绑定了执行上下文，要动态改变上下文是不可能的，在需要动态上下文的时候它的弊端就凸显出来。
```js
// 比如在客户端编程中常见的 DOM 事件回调函数（event listenner）绑定，触发回调函数时 this 指向当前发生事件的 DOM 节点，而动态上下文这个时候就非常有用，比如下面这段代码试图使用箭头函数来作事件回调函数。
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log(this === window); // true
  this.innerHTML = 'Clicked button';
});

// 在全局上下文下定义的箭头函数执行时 this 会指向 window，当单击事件发生时，this.innerHTML 就等价于 window.innerHTML，而后者是没有任何意义的。
// 使用函数表达式就可以在运行时动态的改变 this
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
    console.log(this === button); // true
    this.innerHTML = 'Clicked button';
});

```
4. 定义构造函数
```js
// 构造函数中的 this 指向新创建的对象，当执行 new Car() 的时候，构造函数 Car 的上下文就是新创建的对象，也就是说 this instanceof Car === true。显然，箭头函数是不能用来做构造函数， 实际上 JS 会禁止你这么做，如果你这么做了，它就会抛出异常。
const Message = (text) => {
    this.text = text;
};
const helloMessage = new Message('Hello World!');//报错： Throws "TypeError: Message is not a constructor"


// 　构造新的 Message 实例时，JS 引擎抛了错误，因为 Message 不是构造函数。可以通过使用函数表达式或者函数声明来声明构造函数修复上面的例子。
const Message = function(text) {
    this.text = text;
};
const helloMessage = new Message('Hello World!');
console.log(helloMessage.text); // 'Hello World!'
```

### CSS和JS为什么会放在头部或者底部？
- 因为页面在加载时，浏览器会识别该文档CSS，并行下载，不会停止对当前文档的加载。放在头部可以保证在加载html生成DOM tree的时候，就可以同时对DOM tree进行渲染，可以防止闪跳，白屏或者布局混乱。
- 外部引入js文件阻塞其他资源下载，也会阻塞该js引入位置以下的页面的内容呈现，而且js可能会改变DOM tree的结构，需要一个稳定的DOM tree，所以要放置在页面的最下面。
### undefined和null有什么区别？
首先，undefined和null都是假值（falsy），都能作为条件进行判断。这两种不同类型的值，既有着不同的语义和场景，又表现出较为相似的行为。
#### undefined
undefined 的字面意思就是：未定义的值 。这个值的语义是，希望表示一个变量最原始的状态，而非人为操作的结果 。

因此，undefined 一般都来自于某个表达式最原始的状态值，不是人为操作的结果。当然，你也可以手动给一个变量赋值 undefined，但这样做没有意义，因为一个变量不赋值就是 undefined 。

这种原始状态会在以下 4 种场景中出现：

1. 声明一个变量，但是没有赋值
```js
  var foo;
  console.log(foo); // undefined
  // 访问 foo，返回了 undefined，表示这个变量自从声明了以后，就从来没有使用过，也没有定义过任何有效的值。
```
2. 访问对象上不存在的属性或者未定义的变量
```js
  console.log(Object.foo); // undefined
  console.log(typeof demo); // undefined
  // 访问 Object 对象上的 foo 属性，返回 undefined ， 表示Object 上不存在或者没有定义名为 foo 的属性；对未声明的变量执行typeof操作符返回了undefined值。
```

3. 函数定义了形参，但没有传递实参
```js
//函数定义了形参 a
function fn(a) {
  console.log(a); // undefined
}
fn(); //未传递实参
// 函数 fn 定义了形参 a，但 fn 被调用时没有传递参数，因此，fn 运行时的参数 a 就是一个原始的、未被赋值的变量。
```

4. 使用void对表达式求值
```js
  void 0 ; // undefined
  void false; // undefined
  void []; // undefined
  void null; // undefined
  void function fn(){} ; // undefined

// ECMAScript 明确规定 void 操作符 对任何表达式求值都返回 undefined ，这和函数执行操作后没有返回值的作用是一样的，JavaScript 中的函数都有返回值，当没有 return 操作时，就默认返回一个原始的状态值，这个值就是 undefined，表明函数的返回值未被定义。
```
#### null
null 的字面意思是：空值 。这个值的语义是，希望表示一个对象被人为的重置为空对象，而非一个变量最原始的状态 。 在内存里的表示就是，栈中的变量没有指向堆中的内存对象。

1. 一般在以下两种情况下我们会将变量赋值为null
如果定义的变量在将来用于保存对象，那么最好将该变量初始化为null，而不是其他值。换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null值，这样有助于进一步区分null和undefined。

当一个数据不再需要使用时，我们最好通过将其值设置为null来释放其引用，这个做法叫做解除引用。不过解除一个值的引用并不意味着自动回收改值所占用的内存。解除引用的真正作用是让值脱离执行环境，以便垃圾收集器在下次运行时将其回收。解除引用还有助于消除有可能出现的循环引用的情况。这一做法适用于大多数全局变量和全局对象的属性，局部变量会在它们离开执行环境时(函数执行完时)自动被解除引用。

2. 特殊的typeof null
当我们使用typeof操作符检测null值，我们理所应当地认为应该返"Null"类型呀，但是事实返回的类型却是"object"。
  ```js
  var data = null;
  console.log(typeof data); // "object"
```

- 一方面从逻辑角度来看，null值表示一个空对象指针，它代表的其实就是一个空对象，所以使用typeof操作符检测时返回"object"也是可以理解的。
- 另一方面，其实在JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的(对象的类型标签是 0)。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"。在ES6中，当时曾经有提案为历史平凡, 将type null的值纠正为null, 但最后提案被拒了,所以还是保持"object"类型。

用一句话总结两者的区别就是：undefined 表示一个变量自然的、最原始的状态值，而 null 则表示一个变量被人为的设置为空对象，而不是原始状态。所以，在实际使用过程中，为了保证变量所代表的语义，不要对一个变量显式的赋值 undefined，当需要释放一个对象时，直接赋值为 null 即可。

- null是主动使用，undefined是被动的备选手段
- null本质上是零，undefined本质上是个对象（js作者规定了type而已）
- 判断null和undefined时，应永远使用严格判断（===）
- js中“没有传”、“没有给”和undefined基本等价；而null是有值的——例如：默认参数

### == 和 ===
== 代表相同， ===代表严格相同（数据类型和值都相等）。

当进行双等号比较时候，先检查两个操作数数据类型，如果相同，则进行===比较，如果不同，则愿意为你进行一次类型转换，转换成相同类型后再进行比较，而===比较时，如果类型不同，直接就是false。

- 双等号==
  - 如果两个值类型相同，再进行三个等号(===)的比较；
  - 如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较
  - 查看是否是 undefined 和 null 比较
    - ✅ 返回 true
    - ⬇️ 如果不是继续下一条规则
  - 是否在比较 string 和 number
    - ✅ 如果是，那么将 string 转为 number 并回到最初重新比较 ♻️
    - ⬇️ 如果不是继续下一条规则
  - 查看我们比较的项中是否有 boolean
    - ✅ 如果有，那么将 boolean 转为 number 并回到最初重新比较 ♻️
    - ⬇️ 如果不是继续下一条规则
  - 查看是否有一项是 object
    - ✅ 如果有，那么将 object 转为其原始值 primitive 并回到最初重新比较 ♻️
    - ❌ 如果还不是，只能返回 false 了💩
      ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106160907.png)

- 类型转换
  - 获取对象原始值
    - 接着我们再来研究一下对象怎么转换为原始值的：转换类型的这个方法在 JS 源代码中是 ToPrimitive 这个方法，该方法有一个可选参数 PreferredType，这个参数的作用是指定期望类型；如果第一个参数对应的对象可以被转换为不止一种类型，那么后者可以作为一种暗示，表示该对象应该转换为那种类型
  - 默认情况下（期望类型默认为 number）
    - 调用 valueOf 方法：
      - ✅ 如果返回的是原始值，那么就用这个
      - ⬇️ 如果返回的不是原始值，那么跳到下一步
    - 调用 toString 方法：
      - ✅ 如果返回的是原始值，那么就用这个
      - ❌ 否则报错💩
  - 如果期望类型为 string：
    - 调用 toString 方法：
      - ✅ 如果返回的是原始值，那么就用这个
      - ⬇️ 如果返回的不是原始值，那么跳到下一步
    - 调用 valueOf 方法：
      - ✅ 如果返回的是原始值，那么就用这个
      - ❌ 否则报错💩
  - 如果对象是 Date 类型（期望类型为 string）：
    - 调用 toString 方法：
      - ✅ 如果返回的是原始值，那么就用这个
      - ⬇️ 如果返回的不是原始值，那么跳到下一步
    - 调用 valueOf 方法：
      - ✅ 如果返回的是原始值，那么就用这个
      - ❌ 否则报错💩
  - 简单的说就是默认调用 valueOf 方法，然后是 toString 方法；如果对象是 Date 类型或对象的期望类型为 string，那么先调用 toString 方法😪

- 转换为 number
  - 转换成 number 类型的规则：
    - undefined 👉 NaN 如果是 undefined 则直接转换成 NaN
    - null 👉 0 如果是 null 则转换成 0
    - boolean 👉 0/1 如果是 boolean 则转换成 0 或 1
    - string 👉 0/NaN/(parse to number) 如果是 string 则转换成对应的 number，空字符串转换为 0，无法转换的则为 NaN
    - object 👉 首先获取原始值然后再转为 number
      ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106161657.png)
- 转换为 string
  - 转为 string 的规则为：
    - undefined 👉 'undefined'
    - null 👉 'null'
    - number 👉 'number'
    - boolean 👉 'true'/'false'
    - object 👉 首先获取原始值，然后转为 string
      ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106161750.png)

- 转为 boolean
  - ❌下面这些在 JS 中都为 falsy 除此之外的都是 truthy
    - undefined 👉 falsy
    - null 👉 falsy
    - 0 👉 falsy
    - "" 👉 falsy
    - NaN 👉 falsy
  - 转换规则如下：
    - undefined 👉 false
    - null 👉 false
    - number 👉 当为 0 时 false 否则为 true
    - string 👉 当为空字符串时为 false 否则为 true
    - object 👉 true
    - array 👉 true
    - Date 👉 true
      ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106161911.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106161929.png)
### JS数据类型
- undefined
- Null
- Boolean
- String
- Number
- Symbol
- BigInt
- Object
  - Array
  - RegExp
  - Date
  - Math
  - Function

- 基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量；
- 引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念。

### 数据类型

值类型（7个）：Undefined、Null、Number、String、Boolean、Symbol(ES6)、BigInt(ES10)
引用类型：Object：Array、Function

- Javascript 中的数据类型包括原始类型和引用类型。其中原始类型包括 null、undefined、boolean、string、symbol、bigInt、number。
  - 基本类型的访问是按值访问的，就是说你可以操作保存在变量中的实际的值s。
  - 基本类型的变量是存放在栈区的（栈区指内存里的栈内存）
  - 通过值复制的方式赋值和传递值。
  - 值类型的数据是不可变的，在内存中占有固定大小的空间，它们都会被存储在栈（stack）中。
- 引用类型指的是 Object
  - 而引用类型则是通过复制指针，实现复制，但指针指向的是同一个对象，所以改变其中一个两个 都改变；
  - 它们总是通过引用复制的方式赋值和传递值。
  - 引用类型的数据大小不固定，所以把它们的值存在堆（Heap）中，但还是会把它们在堆中的内存地址存在栈中。在查询引用类型数据时，先从栈中读取所持有的数据在堆中的内存地址，然后根据地址找到实际的数据。
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
#### Symbol主要用于什么场景下
- 应用场景1：使用Symbol来作为对象属性名(key)
  - 在这之前，我们通常定义或访问对象的属性时都是使用字符串
  - Symbol可同样用于对象属性的定义和访问
  - Symbol类型的key是不能通过Object.keys()或者for...in来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。
  - 当使用JSON.stringify()将对象转换成JSON字符串的时候，Symbol属性也会被排除在输出内容之外
```js
const PROP_NAME = Symbol()
const PROP_AGE = Symbol() let obj = { [PROP_NAME]: "一斤代码" } obj[PROP_AGE] = 18 obj[PROP_NAME] // '一斤代码' obj[PROP_AGE] // 18 

// 使用Object的API
Object.getOwnPropertySymbols(obj) // [Symbol(name)]
// 使用新增的反射API Reflect.ownKeys(obj) // [Symbol(name), 'age', 'title'] 
```
- 应用场景2：使用Symbol来替代常量
  - 需要为常量赋一个唯一的值（比如这里的'AUDIO'、'VIDEO'、 'IMAGE'），常量少的时候还算好，但是常量一多，你可能还得花点脑子好好为他们取个好点的名字。
  - 现在有了Symbol，我们大可不必这么麻烦了：
```js
const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = Symbol()
// 直接就保证了三个常量的值是唯一的了
```
- 应用场景3：使用Symbol定义类的私有属性/方法
  - Symbol以及模块化机制，类的私有属性和方法才变成可能。
  - 由于Symbol常量PASSWORD被定义在a.js所在的模块中，外面的模块获取不到这个Symbol，也不可能再创建一个一模一样的Symbol出来（因为Symbol是唯一的），因此这个PASSWORD的Symbol只能被限制在a.js内部使用，所以使用它来定义的类属性是没有办法被模块外访问到的，达到了一个私有化的效果。
```js
// a.js
const PASSWORD = Symbol()
class Login {
    constructor(username, password) {
        this.username = username this[PASSWORD] = password
    }
    checkPassword(pwd) {
        return this[PASSWORD] === pwd
    }
}
export default Login


// b.js
import Login from './a.js'
const login = new Login('admin', '123456') 
login.checkPassword('123456') // true login.PASSWORD // oh!no! login[PASSWORD] // oh!no! login["PASSWORD"] // oh!no! 
```
### 变量提升(函数提升)

- 所谓的变量提升（变量提升），是指在JS代码执行中， JavaScript引擎（V8）把变量的声明部分和函数的声明部分提升到代码开头的行为，变量提升后，会给变量设置默认值undefined，给函数赋值函数体。

- 在JS的变量提升中，提升的只是变量的声明，所以对于var a = 1，一般把它拆分成var a 和 a = 1。只提升var a，a = 1不变。

- 有多个同名变量声明时，函数声明会覆盖其他的声明。如果有多个同名函数声明，则是由最后的一个函数声明覆盖之前所有的声明。
### js声明变量的方式
  JavaScript中可以通过var、let、const、function、import、class这几种方式来声明变量。
1. var
```js
  var x = 'global'; //全局变量
  function local(){
  var x = 'local variable'; //局部变量
  console.log(x)
  }
  local() // 'local variable'
  console.log(x) // 'global'
```

2. let声明变量(let命令用于声明变量,let声明的变量是可变的)
```js
  let lt= 520;
  var lzp= 1314;
  lt = 410;
  lzp = 1122; 
  console.log(lt) // 410
```
3. const声明变量(const命令用于声明变量，const声明的变量是不可变的。)
```js
  const lzp= 410;
  lzp = 1122; // 报错
```

4. function声明变量
ES6允许我们为函数的参数设置默认值，即直接写在参数定义的后面。当参数值为undefined的时候，默认值生效。
```js
  function log(x , y = "lutian"){
  console.log(x,y);
  }
  log('love'); //love lutian
  log('love','only'); //love only
```

5. import声明变量
ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。Module 语法是 JavaScript 模块的标准写法，使用import取代require
```js
  import { func1, func2 } from 'moduleA';
  import { Button } from 'antd';

  // 在导入导出时可以根据需求起别名，方便理解和开发
  import {longlonglongName as name} from './moduleA.js';
```
6. class声明变量
ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面对象编程的语法。 ES5类的定义
```js
function Person(x, y) {
  this.name = x;
  this.age = y;
}
Person.prototype.getInfo = function () {
  return '(' + this.name + ', ' + this.age + ')';
};
var info = new Person('lutian', 18);



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return '(' + this.name + ', ' + this.age + ')';
  }
}
typeof Person // "function"
Person === Person.prototype.constructor // true
```

### 函数声明和函数表达式的区别
- 函数声明function fn() {...}
- 函数表达式const fn = function() {..}
- 函数声明会在代码执行前预加载,而函数表达式不会
### 为什么要用 setTimeout 模拟 setInterval ？
setInterval 是一个宏任务。用多了你就会发现它并不是准确无误，极端情况下还会出现一些令人费解的问题。
- 推入任务队列后的时间不准确
  - 在 setInterval 被推入任务队列时，如果在它前面有很多任务或者某个任务等待时间较长比如网络请求等，那么这个定时器的执行时间和我们预定它执行的时间可能并不一致。
    ```js
      let startTime = new Date().getTime();
      let count = 0;
      //耗时任务
      setInterval(function() {
      let i = 0;
      while (i++ < 1000000000);
      }, 0);
      setInterval(function() {
      count++;
      console.log(
      "与原设定的间隔时差了：",
      new Date().getTime() - (startTime + count * 1000),
      "毫秒"
      );
      }, 1000);
      // 输出：
      // 与原设定的间隔时差了： 699 毫秒
      // 与原设定的间隔时差了： 771 毫秒
      // 与原设定的间隔时差了： 887 毫秒
      // 与原设定的间隔时差了： 981 毫秒
      // 与原设定的间隔时差了： 1142 毫秒
      // 与原设定的间隔时差了： 1822 毫秒
      // 与原设定的间隔时差了： 1891 毫秒
      // 与原设定的间隔时差了： 2001 毫秒
      // 与原设定的间隔时差了： 2748 毫秒
      // ...
    ```
- 函数操作耗时过长导致的不准确
    - 考虑极端情况，假如定时器里面的代码需要进行大量的计算(耗费时间较长)，或者是 DOM 操作。这样一来，花的时间就比较长，有可能前一次代码还没有执行完，后一次代码就被添加到队列了。也会到时定时器变得不准确，甚至出现同一时间执行两次的情况。
    - 最常见的出现的就是，当我们需要使用 ajax 轮询服务器是否有新数据时，必定会有一些人会使用 setInterval，然而无论网络状况如何，它都会去一遍又一遍的发送请求，最后的间隔时间可能和原定的时间有很大的出入。
    ```js
    // 做一个网络轮询，每一秒查询一次数据。
    let startTime = new Date().getTime();
    let count = 0;

    setInterval(() => {
        let i = 0;
        while (i++ < 10000000); // 假设的网络延迟
        count++;
        console.log(
            "与原设定的间隔时差了：",
            new Date().getTime() - (startTime + count * 1000),
            "毫秒"
        );
    }, 1000)
    输出：
    // 与原设定的间隔时差了： 567 毫秒
    // 与原设定的间隔时差了： 552 毫秒
    // 与原设定的间隔时差了： 563 毫秒
    // 与原设定的间隔时差了： 554 毫秒(2次)
    // 与原设定的间隔时差了： 564 毫秒
    // 与原设定的间隔时差了： 602 毫秒
    // 与原设定的间隔时差了： 573 毫秒
    // 与原设定的间隔时差了： 633 毫秒
    ```

- setInterval 缺点 与 setTimeout 的不同
  - 再次强调，定时器指定的时间间隔，表示的是何时将定时器的代码添加到消息队列，而不是何时执行代码。所以真正何时执行代码的时间是不能保证的，取决于何时被主线程的事件循环取到，并执行。
  - 每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。
  - setInterval 有两个缺点：
    - 使用 setInterval 时，某些间隔会被跳过；
    - 可能多个定时器会连续执行；
    - 一般用 setTimeout 模拟 setInterval，来规避掉上面的缺点。

- setTimeout 模拟 setInterval
  ```js
    // 写一个 interval 方法
    let timer = null
    interval(func, wait){
      let interv = function(){
          func.call(null);
          timer=setTimeout(interv, wait);
      };
      timer= setTimeout(interv, wait);
    },

    // 和 setInterval() 一样使用它
    interval(function() {}, 20);

    // 终止定时器
    if (timer) {
      window.clearSetTimeout(timer);
      timer = null;
    }
  ```
### JS编译原理
```js
  var name;    //编译阶段处理
  name='jack';    //执行阶段处理
```

#### 编译阶段
这个阶段的主角就是所谓的编译器，这个编译器会找遍当前作用域，看看是不是已经存在一个叫 name 的变量。如果已经存在，那么就什么都不做，直接忽略 var name 这个声明，继续编译下去；如果没有，则在当前作用域里新增一个叫 name 的变量。然后，编译器会为引擎生成运行时所需要的代码，程序就进入了执行阶段

#### 执行阶段
这个阶段的主角就是大家所熟悉的JS引擎啦，JS引擎在运行的时候，也会先找遍当前作用域，看看是否有一个叫 name 的变量，如果有的话，那么刚刚好，直接赋值，如果没有的话，那就是当前作用域没有，那怎么办，那就考虑探出头去，去外面（ 父级作用域 ）看看有没有，没有的话，再去外面查找，一层又一层（ 当然如果是还有父层的话 ），如果最终还是找不到的话，那么JS引擎也表示无能为力，那就抛个异常给别人看看吧，表示自己已经努力过了。

上面提到的去外面查找，一层又一层，从当前作用域再到父级作用域，再到父级的父级作用域，以此类推，就是所谓的作用域链了，就跟链条一样，一节有一节往上，是不是形容地可以说是很贴切了。总结而言就是，作用域套作用域，也就有了所谓的作用域链

### 作用域和作用域链
#### 作用域
定义：简单来说作用域就是变量与函数的可访问范围，由当前环境与上层环境的一系列变量对象组成

1. 全局作用域：代码在程序的任何地方都能被访问，window 对象的内置属性都拥有全局作用域。

2. 函数作用域：在固定的代码片段才能被访问

3. 块级作用域：块级作用域相当于是只在这块代码块中生效，如果它被大括号 {} 所包围，那么大括号中就是一段代码块，代码块中使用 let 和 const 声明的变量也被称为局部变量

作用：作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。
#### 作用域链
作用域链参考链接一般情况下，变量到 创建该变量 的函数的作用域中取值。但是如果在当前作用域中没有查到，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

作用域和作用域的嵌套，就产生了作用域链，另外要记住的一个特性就是作用域链的查找，向外不向内，想想探出头去，而不是看着锅里，就可以了
### 闭包
- 能够访问其他函数内部变量的函数，被称为 闭包
- 闭包应用场景:作为参数被传入,作为返回值被返回
- 自由变量的查找,要在函数定义的地方(而非执行的地方)
- 影响:变量会常驻内存,得不到释放。闭包不要乱用
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
3. 构造器调用，`this`指向`返回的这个实例化对象`。
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


通过这种方式，所有的实例都可以访问到这个方法，并且这个方法只需要占用一份内存，节省内存，this 的指向还能正确指向类的实例。

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

### 构造函数、原型和原型链
- 每一个函数对象都有一个prototype属性，指向函数对象的原型，原型对象上有一个constructor属性指向构造函数本身。
- 引用类型 constructor 属性值是可以修改的，但是对于基本类型来说是只读的，当然 null 和 undefined 没有 constructor 属性。
- __proto__ 属性在 ES6 时被标准化，但因为性能问题并不推荐使用，推荐使用 Object.getPrototypeOf()。
- __proto__ 是每个实例上都有的属性，prototype 是构造函数的属性，在实例上并不存在，所以这两个并不一样，但 foo.__proto__ 和 Foo.prototype 指向同一个对象。
- 每个对象拥有一个原型对象，通过__proto__指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null，这就是原型链。
- js 每个对象都会拥有`__proto__`属性的。这个属性指向原型对象，这个对象的所有属性和方法都会被构造函数的实例所继承。
- 实例都包含一个指向构造函数的`原型对象`的`__proto__`内部指针。。
- 实例都会有一个`constructor`属性去指向它的构造函数
- 在原型对象中使用`.constructor`（构造器）属性来区分，我这个原型对象被那个构造函数引用了。所有原型对象都会自动获得一个constructor（构造函数）属性，这个属性是一个指向prototype属性所在函数的指针。
### Function、Object、null等等的关系和鸡蛋问题
每个JS对象一定对应一个原型对象，并从原型对象继承属性和方法。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014094614.png)

原型链的尽头指向null，那么Function.prototype、Object.prototype、null、Function.prototype.__proto__、Object.prototype.__proto__、function、object之间的关系是什么。

- 原型链的尽头（root）是Object.prototype。所有对象均从Object.prototype继承属性。
  - Object/Array/String等等构造函数本质上和Function一样，均继承于Function.prototype。
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014100423.png)
- Function.prototype和Function.__proto__为同一对象。
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014101327.png)
- Function.prototype直接继承root（Object.prototype）。
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014101357.png)
- 通过这点我们可以弄清 继承的原型链：Object.prototype(root)<---Function.prototype<---Function|Object|Array...
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014101415.png)
- Function.prototype是个不同于一般函数（对象）的函数（对象）。
  - Function.prototype像普通函数一样可以调用，但总是返回undefined。
  - 普通函数实际上是Function的实例，即普通函数继承于Function.prototype。func.__proto__ === Function.prototype。
  - Function.prototype继承于Object.prototype，并且没有prototype这个属性。func.prototype是普通对象，Function.prototype.prototype是null。
  - 所以，Function.prototype其实是个另类的函数，可以独立于/先于Function产生。
- Object本身是个（构造）函数，是Function的实例，即Object.__proto__就是Function.prototype。
- 先有Object.prototype（原型链顶端），Function.prototype继承Object.prototype而产生，最后，Function和Object和其它构造函数继承Function.prototype而产生。
### __proto__和prototype的区别和关系?
JS正是通过__proto__和prototype的合作实现了原型链，以及对象的继承。

- 对象__proto__属性的值就是它所对应的原型对象
  ```js
  var one = {x: 1};
  var two = new Object();
  one.__proto__ === Object.prototype // true
  two.__proto__ === Object.prototype // true
  one.toString === one.__proto__.toString // true
  ```
首先来说说prototype属性，不像每个对象都有__proto__属性来标识自己所继承的原型，只有函数才有prototype属性。

为什么只有函数才有prototype属性？ES规范就这么定的。

当你创建函数时，JS会为这个函数自动添加prototype属性。

构造函数，通过prototype来存储要共享的属性和方法。而一旦你把这个函数当作构造函数（constructor）调用（即通过new关键字调用），那么JS就会帮你创建该构造函数的实例，实例继承构造函数prototype的所有属性和方法（实例通过设置自己的__proto__指向承构造函数的prototype来实现这种继承）。

对象的__proto__指向自己构造函数的prototype。obj.__proto__.__proto__...的原型链由此产生，包括我们的操作符instanceof正是通过探测obj.__proto__.__proto__... === Constructor.prototype来验证obj是否是Constructor的实例。

- js 每个对象都会拥有`prototype`属性的。这个属性指向原型对象，这个对象的所有属性和方法都会被构造函数的实例所继承。
- 实例都包含一个指向构造函数的`原型对象`的`__proto__`内部指针。。
- 实例都会有一个`constructor`属性去指向它的构造函数
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
  函数含有__proto__与prototype属性，__proto__指向Function.prototype,prototype指向Object.prototype
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
（2）instanceof可以检测父类型(在继承关系中用来判断一个实例是否属于它的父类型或者祖先类型的实）

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
### Class
#### ES6中类中的static用ES5怎么实现?

1.静态方法就是定义在 构造函数的方法；
2.实例方法就是定义在 构造函数原型（prototype）上的方法；

```js
let Animal = function (type) {
  this.type = type
}

// 动态方法
Animal.prototype.walk = function(){
  // 调用静态方法
  Animal.eat()
  console.log('I am walking')
}

// 静态方法
Animal.eat = function (food) {
  console.log(`I am eating`);
}

let cat = new Animal('cat')
cat.walk()
cat.eat()
```

### ES5 继承(extend)
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
  - 同原型链继承一样，每个实例对引用类型属性的修改都会被其他的实例共享

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
  - ES6 明确规定，Class 内部只有静态方法，没有静态属性。
  - 写法为Foo类定义了一个静态属性prop。
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
### 为什么会有栈内存和堆内存？

与gc（垃圾回收机制）有关。为了使程序运行时占用的内存最小。

当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会被逐个放入这块栈内存里，当方法执行结束，这个方法的内存栈也会被销毁。因此，所有在方法中定义的变量都存放在栈内存中。

当在程序创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法调用结束后，只要这个对象还可能被另一个变量所引用，则这个对象就不会被销毁；只有当一个对象没有被任何变量引用它时，系统的垃圾回收机制才会回收它。

### JS垃圾回收机制

每隔一段时间， JS 的垃圾收集器都会对变量进行“巡逻”，就和保安巡逻园区一样，让不相干的人赶紧走。当一个变量不被需要了以后，它就会把这个变量所占用的内存空间所释放，这个过程就叫做垃圾回收

JS 的垃圾回收算法分为两种，**引用计数法**和**标记清除法**

**引用计数法**：在引用计数法的机制下，内存中的每一个值都会对应一个引用计数。
引用计数法是最初级的垃圾回收算法，已经被现代浏览器所淘汰了。在学习引用计数法之前，需要首先对引用有一定的概念，你可以认为它就是对当前变量所指向的那块内存地址的描述，有点类似于JS引用数据类型的内存指向的概念，先来看一行代码：

```js
var obj={name:'jack'};
```

当我们在给 obj 赋值的同时，其实就创建了一个指向该变量的引用,引用计数为1，在引用计数法的机制下，内存中的每一个值都会对应一个引用计数。而当我们给 obj 赋值为 null时，这个变量就变成了一块没用的内存，那么此时， obj 的引用计数将会变成 0，它将会被垃圾收集器所回收，也就是 obj 所占用的内存空间将会被释放。

函数作用域的生命周期是很短暂的，在函数执行完毕之后，里面的变量基本是没用的变量了，不清除的后果就是该内存垃圾没有被释放，依然霸占着原有的内存不松手，就会容易引发内存泄漏。

```js
function changeName(){
  var obj1={};
  var obj2={};

  obj1.target=obj2;
  obj2.target=obj1;
  obj1.age=15;
  console.log(obj1.target);
  console.log(obj2.target);
}

changeName();
```

**标记清除法**：引用计数法的弊端已经很明显了，那么，现在所要说的标记清除法就不存在这样子的问题。因为它采用的判断标准是看这个对象是否可抵达，它主要分为两个阶段，*标记阶段和清除阶段*:

- 标记阶段
  - 垃圾收集器会从根对象（Window对象）出发，扫描所有可以触及的对象，这就是所谓的可抵达
- 清除阶段
  - 在扫描的同时，根对象无法触及（不可抵达）的对象,就是被认为不被需要的对象，就会被当成垃圾清除
  ```js
  function changeName(){
    var obj1={};
    var obj2={};
    obj1.target=obj2;
    obj2.target=obj1;
    obj1.age=15;
    console.log(obj1.target);
    console.log(obj2.target);
  }
  changeName();

  ```
在函数执行完毕之后，函数的声明周期结束，那么现在，从 Window对象 出发， obj1 和 obj2 都会被垃圾收集器标记为不可抵达，这样子的情况下，互相引用的情况也会迎刃而解。

### 内存泄漏
该释放的内存垃圾没有被释放，依然霸占着原有的内存不松手，造成系统内存的浪费，导致性能恶化，系统崩溃等严重后果，这就是所谓的内存泄漏。

### 创建对象有几种方法
```js
// 第一种：字面量
var o1 = {name: "o1"}
var o2 = new Object({name: "o2"})
// 第二种：通过构造函数
var M = function(name){this.name = name}
var o3 = new M("o3")
// 第三种：Object.create()
var p = {name: "p"}
var o4 = Object.create(p)
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
### for ... of相关问题
- for .. in (以及forEach for )是常规的同步遍历
- for .. of常用于异步的遍历
  ```js
  function test(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item * item)
      }, 1000)
    })
  }
  const arr = [100, 200, 300]

  // 使用同步遍历的时候 是在1000ms后全部把结果打印出来了，而不是隔一秒打印s
  arr.forEach(async (i) => {
    console.log(await test(i))
  })

  function test(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item * item)
      }, 1000)
    })
  }

  const arr = [100, 200, 300]
  // 使用for...of 遍历会 1000ms 打印一次
  !(async function () {
    for (let item of arr) {
      console.log(await test(item))
    }
  })()
  ```
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
- 输入框连续输入进行AJAX验证时
- 浏览器窗口缩放时，resize事件。
  ```js
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
  ```

- DOM元素拖拽
- Canvas画笔功能
  ```js
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
```

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
- 三者的区别
  - 区别1
    - var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
    - let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
    - const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，且不能修改。
  - 区别2
    - var可以先使用，后声明，因为存在变量提升；let必须先声明后使用。
    - var是允许在相同作用域内重复声明同一个变量的，而let与const不允许这一现象。
    - 在全局上下文中，基于let声明的全局变量和全局对象GO（window）没有任何关系 ;var声明的变量会和GO有映射关系；
  - 区别3
    - 解决暂时性死区
      - 如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。假如我们尝试在声明前去使用这类变量，就会报错。
      - 当我们进入当前作用域时，let 或者 const 声明的变量已经存在了——它们只是不允许被获取而已。要想获取它们，必须得等到代码执行到声明处。
    - let /const/function会把当前所在的大括号(除函数之外)作为一个全新的块级上下文，应用这个机制，在开发项目的时候，遇到循环事件绑定等类似的需求，无需再自己构建闭包来存储，只要基于let的块作用特征即可解决
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
实际上对于数组来说， 只要不修改原数组， 重新返回一个新数组就可以实现浅拷贝，比如说map、filter、reduce等方法

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
### 数组的遍历方法（数组的方法），那些方法有什么区别？？？？？？
### js数组的方法，哪些会改变原数组
#### 改变原数组的方法
- 改变原数组的方法(9个)
  - splice() 添加/删除数组元素
  - sort() 数组排序
  - pop() 删除一个数组中的最后的一个元素
  - shift() 删除数组的第一个元素
  - push() 向数组的末尾添加元素
  - unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
  - reverse() 颠倒数组中元素的顺序
  - ES6 IteratorcopyWithin() 指定位置的成员复制到其他位置
  - ES6 fill() 填充数组
#### 不改变原数组的方法
- 不改变原数组的方法(8个):
  - slice() 浅拷贝数组的元素
  - join() 数组转字符串
  - toLocaleString() 数组转字符串
  - toString() 数组转字符串 不推荐
  - cancat方法用于合并两个或多个数组，返回一个新数组。
  - indexOf() 查找数组是否存在某个元素，返回下标
  - lastIndexOf() 查找指定元素在数组中的最后一个位置
  - ES7 includes() 查找数组是否包含某个元素 返回布尔
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

### CommonJS 和 ESmodules 模块化的区别
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
    - 一个文件就是一个模块,每个模块都有单独的作用域
    - 通过module.exports导出成员。通过require函数载入模块
    - commonjs是以同步的方式加载模块 node的执行机制是在启动时去加载模块 在执行阶段不需要加载模块
    - CommonJS 模块输出的是一个值的拷贝，一旦输出一个值，模块内部的变化就影响不到这个值
    - CommonJS 模块加载的顺序，按照其在代码中出现的顺序
    - 由于 CommonJS 是同步加载模块的，在服务器端，文件都是保存在硬盘上，所以同步加载没有问题，但是对于浏览器端，需要将文件从服务器端请求过来，那么同步加载就不适用了，所以，CommonJS 是不适用于浏览器端的。
    - CommonJS 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存

- Es module 的特性如下：
    - ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。
    - ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。
    - 导出的并不是成员的值 而是内存地址 内部发生改变外部也会改变，外部导入的是只读成员不能修改
    - ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。
    - ES6 模块提前加载并执行模块文件，
    - ES6 Module 导入模块在严格模式下。
    - ES6 Module 的特性可以很容易实现 Tree Shaking 和 Code Splitting。
    - ES module中可以导入CommonJS模块。CommonJS中不能导入ES module模块。

### 0.1+0.2 !== 0.3
JS里整数的计算是正确的，但是小数的计算是有误差的。
简单的说，就是小数的表示肯定有误差，只是误差极小。
```js
0.1 + 0.2 
0.30000000000000004
```

对小数点以后的数乘以2，取结果的整数部分（不是1就是0），然后再用小数部分再乘以2，再取结果的整数部分……以此类推，直到小数部分为0或者位数已经够了就OK了。然后把取的整数部分按先后次序排列
对浮点数进行运算的过程中，需要将十进制转换成二进制。

前面讲到，在JavaScript中，使用浮点数标准IEEE 754表示数字的，在表示小数的时候，在转化二进制的时候有些数是不能完整转化的，比如0.3，转化成二进制是一个很长的循环的数，是超过了JavaScript能表示的范围的，所以近似等于0.30000000000000004。
这个是二进制浮点数最大的问题（不仅 JavaScript，所有遵循 IEEE 754 规范的语言都是如此）。

在这里我们要引入ES6中在Number对象上新增的一个极小的常量Number.EPSILON。它表示1与大于1的最小浮点数之差，等于2的-52次方。Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。所以可以用这个来判断两个数浮点数是否想等：
```js
function numIsEqual(lef, rig) {
    let EPSILON = Number.EPSILON ? Number.EPSILON : Math.pow(2,-52)
    return Math.abs(lef - rig) < EPSILON
}
```

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
    - 不出产生冒泡的事件：abort、blur、focus、load、unload、mouseenter、mouseleave、resize和自定义事件
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211105181843.png)
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211105181903.png)

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
#### Promise初介绍
在传统的异步编程中，如果异步之间存在依赖关系，我们就需要通过层层嵌套回调来满足这种依赖，如果嵌套层数过多，可读性和可维护性都变得很差，产生所谓“回调地狱”，而Promise将回调嵌套改为链式调用，增加可读性和可维护性。

- 回调地狱
    - 嵌套层次很深，难以维护
    - 无法正常使用return和throw
    - 无法正常检索堆栈信息
    - 多个回调之间难以建立联系

Promise的概念
- 主要用于异步计算。promise是用来解决异步函数的顺序问题.
- 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。
- 可以在对象之间传递和操作Promise，帮助我们处理队列。

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

- Promise 的写法更为直观，并且能够在外层捕获异步函数的异常信息。
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

#### Promise的调用流程

- 分析Promise的调用流程：
  - Promise的构造方法接收一个executor()，在new Promise()时就立刻执行这个executor回调
  - executor()内部的异步任务被放入宏/微任务队列，等待执行
  - then()被执行，收集成功/失败回调，放入成功/失败队列
  - executor()的异步任务被执行，触发resolve/reject，从成功/失败队列中取出回调依次执行
- 其实熟悉设计模式的同学，很容易就能意识到这是个观察者模式，这种收集依赖 -> 触发通知 -> 取出依赖执行 的方式，被广泛运用于观察者模式的实现，在Promise里，执行顺序是then收集依赖 -> 异步触发resolve -> resolve执行依赖。

#### Promise A+规范

- Promise本质是一个状态机，且状态只能为以下三种：Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态），状态的变更是单向的，只能从Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆

- then方法接收两个可选参数，分别对应状态改变时触发的回调。then方法返回一个promise。then 方法可以被同一个 promise 调用多次。
#### then链式调用

- .then()需要返回一个Promise，这样才能找到then方法，所以我们会把then方法的返回值包装成Promise。

- .then()的回调需要拿到上一个.then()的返回值

- .then()的回调需要顺序执行。我们要等待当前Promise状态变更后，再执行下一个then收集的回调，这就要求我们对then的返回值分类讨论。
#### 手写Promise的调用流程
```js
/**
* 1. Promise就是一个类   在执行这个类的时候 需要传递一个执行器进去  执行器会立即执行
* 2. Promise中有三种状态 分别为 成功fulfilled 失败rejected 等待pending  一旦状态确定就不可以更改
* 3. resolve,reject函数是用来更改状态的
* 4. then方法内部做的事情就是判断 如果状态是成功  调用成功的回调函数 如果状态是失败 调用失败的回调函数。then方法是被定义在原生对象上的方法
* 5. then成功回调有一个参数 表示成功之后的值 then失败回调有一个参数  表示失败后的原因
*/


// Promise/A+规范的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    // // Promise状态
    status = PENDING
    // 成功之后的值
    value = undefined
    // 失败之后的原因
    error = undefined
    // 成功回调  then收集的执行成功的回调队列
    successCallback = []
    // 失败回调  then收集的执行失败的回调队列
    failureCallback = []
    // 传递执行器
    // new Promise()时立即执行executor,并传入resolve和reject
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
        // then链式调用  return一个新的promise
        let promise2 = new MyPromise((resolve,reject) => {
            // 判断状态
            if(this.status === FULFILLED) {
                // Promise的执行顺序是new Promise -> then()收集回调 -> resolve/reject执行回调，这一顺序是建立在executor是异步任务的前提上的，如果executor是一个同步任务，那么顺序就会变成new Promise -> resolve/reject执行回调 -> then()收集回调，resolve的执行跑到then之前去了，为了兼容这种情况。
                // 变成异步代码   等待所有同步代码完成之后执行  这样做的原因是为了获取 promise2
                setTimeout(() =>{
                    // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
                    try {
                        // 执行第一个(当前的)Promise的成功回调,并获取返回值
                        let x = successCallback(this.value)
                        // //把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
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
        // return一个新的promise
        return promise2
    }
    finally(callback) {
        //最后一个promise的then
        return this.then((value) => {
            // finally()如果return了一个reject状态的Promise，将会改变当前Promise的状态，这个MyPromise.resolve就用于改变Promise状态，在finally()没有返回reject态Promise或throw错误的情况下，去掉MyPromise.resolve也是一样的
                                                  //执行这个promise
            return MyPromise.resolve(callback()).then(() => value)
        },(error) => {
            return MyPromise.resolve(callback()).then(() => {throw error})
        })
    }
    // catch方法其实就是执行一下then的第二个回调
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
    // 这里resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
    if(x instanceof MyPromise){
        // promise对象
        // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
        // x.then((value) => resolve(value),(error) => reject(error))
        x.then(resolve,reject)
    }else {
        // 普通值
        resolve(x)
    }
}

```
```js
//Promise/A+规定的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING     // Promise状态
    this._value = undefined    // 储存then回调return的值
    this._resolveQueue = []    // 成功队列, resolve时触发
    this._rejectQueue = []     // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      //把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      const run = () => {
        if(this._status !== PENDING) return   // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULFILLED              // 变更状态
        this._value = val                     // 储存当前value

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // 实现同resolve
    let _reject = (val) => {
      const run = () => {
        if(this._status !== PENDING) return   // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = REJECTED               // 变更状态
        this._value = val                     // 储存当前value
        while(this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject)
  }

  // then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = reason => {
      throw new Error(reason instanceof Error? reason.message:reason);
    } : null

    // return一个新的promise
    return new MyPromise((resolve, reject) => {
      // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        try {
          // 执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value)
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      // reject同理
      const rejectedFn  = error => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value)    // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          rejectedFn(this._value)
          break;
      }
    })
  }

  //catch方法其实就是执行一下then的第二个回调
  catch(rejectFn) {
    return this.then(undefined, rejectFn)
  }

  //finally方法
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),             //执行回调,并returnvalue传递给后面的then
      reason => MyPromise.resolve(callback()).then(() => { throw reason })  //reject同理
    )
  }

  //静态的resolve方法
  static resolve(value) {
    if(value instanceof MyPromise) return value //根据规范, 如果参数是Promise实例, 直接return这个实例
    return new MyPromise(resolve => resolve(value))
  }

  //静态的reject方法
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  //静态的all方法
  static all(promiseArr) {
    let index = 0
    let result = []
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach((p, i) => {
        //Promise.resolve(p)用于处理传入值不为Promise的情况
        MyPromise.resolve(p).then(
          val => {
            index++
            result[i] = val
            if(index === promiseArr.length) {
              resolve(result)
            }
          },
          err => {
            reject(err)
          }
        )
      })
    })
  }

  //静态的race方法
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      //同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
      for (let p of promiseArr) {
        MyPromise.resolve(p).then(  //Promise.resolve(p)用于处理传入值不为Promise的情况
          value => {
            resolve(value)        //注意这个resolve是上边new MyPromise的
          },
          err => {
            reject(err)
          }
        )
      }
    })
  }
}
```

#### Promise有3个状态：

- pending|【待定】初始状态
- fulfilled|【实现】操作成功
- rejected【被否决】操作失败

Promise状态发生改变，就会触发.then（）里的响应函数处理后 续步骤。 Promise状态一经改变，不会再变。 Promise实例一经创建，执行器立即执行。

#### .then()
.then（）接受两个函数作为参数，分别代表fulilled和rejected .then（）返回一个新的Promise实例，所以它可以链式调用 .当前面的Promise状态改变时，.then（）根据其最终状态，选择特定 的状态响应函数执行 .状态响应函数可以返回新的Promise，或其它值 .如果返回新的Promise，那么下一级.then（）会在新Promise状态改变之后执行 .如果返回其它任何值，则会立刻执行下一级.then（）

#### then（）里有.then（）的情况
因为.then（）返回的还是Promise实例。 会等里面的.then（）执行完，在执行外面的。

#### Promise.all() 批量执行
- Promise.all（【p1，p2，p….】）用于将多个Promise实例，包装成一个新的Promise实例。
- 返回的实例就是普通Promise
- 它接受一个数组作为参数。
- 数组里可以是Promise对象，也可以是别的值，只有Promise会等待状态改变。
- 所有子Promise都完成，该Promise完成，返回值是全部值的数组
- 有任何一个失败，该Promise失败，返回值是第一个失败的子Promise的结果。 Promise.all() 最常见就是和.map() 连用。 实现队列1.使用.forEach（）2.使用.reduce()

#### Promise.resolve()
- 返回一个fulfilled的Promise实例，或原始Promise实例。
- 参数为空，返回一个状态为fulfilled 的Promise实例
- 参数是一个跟Promise无关的值，同上，不过fulfuilled响应函数会得到这个参数
- 参数为Promise实例，则返回该实例，不做任何修改
- 参数为thenable，立刻执行它的.then（）

#### Promise.reject()
- 返回一个rejected的Promise实例。 Promise.reject()其他特性同Promise.resolve()，但不认thenable

#### Promise.race()
- 类似Promise.all（），区别在于它有任意一个完成就算完成。 场景用法： 把异步操作和定时器放在一起 如果定时器先触发，就认为超时，告知用户
### promise 和 async await 有什么区别

- 概念：
  - Promise 是异步编程的一种解决方案，主要是为了解决"回调地狱"问题，有三种状态（pending/fulfilled/rejected)，对象状态不受外界影响，一旦状态改变就不会变化。
  - async/await 也是异步编程的一种解决方案，基于Promise实现的，返回的是一个Promise对象。

- 区别：
  - promise.then属于微任务，会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；
  - async函数返回一个 Promise 对象，可以使用then方法添加回调函数。async函数表示函数里面可能会有异步方法，await后面跟一个表达式。当async函数执行的时候，一旦遇到await就会先返回，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，等到异步操作完成，再接着执行函数体内后面的语句。

Promise和Async都能解决相同的问题，可以根据不同场景选择。Promise可以一直异步链式调用，Async/await对比就比较简洁。

awiat的含义是等待，即async的函数需要等待await后的函数执行完成并且有了返回结果（Promise对象）之后，才能继续执行下面的代码，await通过返回一个Promise对象来实现同步的效果。

### promise有哪些用法，哪些库函数 ??????
### async/await实现
在多个回调依赖的场景中，尽管Promise通过链式调用取代了回调嵌套，但过多的链式调用可读性仍然不佳，流程控制也不方便，ES7 提出的async 函数，终于让 JS 对于异步操作有了终极解决方案，简洁优美地解决了以上两个问题。

```js
async () => {
  const a = await Promise.resolve(a);
  const b = await Promise.resolve(b);
  const c = await Promise.resolve(c);
}
```

那么我们要如何实现一个async/await呢，首先我们要知道，async/await实际上是对Generator（生成器）的封装，是一个语法糖。
ES6 新引入了 Generator 函数，可以通过 yield 关键字，把函数的执行流挂起，通过next()方法可以切换到下一个状态，为改变执行流程提供了可能，从而为异步编程提供解决方案。

```js
function* myGenerator() {
  yield '1'
  yield '2'
  return '3'
}
const gen = myGenerator();  // 获取迭代器
gen.next()  //{value: "1", done: false}
gen.next()  //{value: "2", done: false}
gen.next()  //{value: "3", done: true}



// 也可以通过给next()传参, 让yield具有返回值
function* myGenerator() {
  console.log(yield '1')  //test1
  console.log(yield '2')  //test2
  console.log(yield '3')  //test3
}
// 获取迭代器
const gen = myGenerator();
gen.next()
gen.next('test1')
gen.next('test2')
gen.next('test3')
```

- Generator和async/await。看起来其实已经很相似，但二者又有三点不同：
  - async/await自带执行器，不需要手动调用next()就能自动执行下一步
  - async函数返回值是Promise对象，而Generator返回的是生成器对象
  - await能够返回Promise的resolve/reject的值
  - 我们对async/await的实现，其实也就是对应以上三点封装Generator

#### 自动执行
```js
// 也可以通过给gen.next()传值的方式，让yield能返回resolve的值
function* myGenerator() {
  console.log(yield Promise.resolve(1))   //1
  console.log(yield Promise.resolve(2))   //2
  console.log(yield Promise.resolve(3))   //3
}

// 手动执行迭代器
const gen = myGenerator()
gen.next().value.then(val => {
  // console.log(val)
  gen.next(val).value.then(val => {
    // console.log(val)
    gen.next(val).value.then(val => {
      // console.log(val)
      gen.next(val)
    })
  })
})




// 手动执行的写法看起来既笨拙又丑陋，我们希望生成器函数能自动往下执行，且yield能返回resolve的值，基于这两个需求，我们进行一个基本的封装，这里async/await是关键字，不能重写，我们用函数来模拟：

function run(gen) {
  // 把返回值包装成promise
  // 返回值是Promise：async/await的返回值是一个Promise，我们这里也需要保持一致，给返回值包一个Promise
  return new Promise((resolve, reject) => {
    var g = gen()

    function _next(val) {
      //错误处理
      try {
        var res = g.next(val) 
      } catch(err) {
        return reject(err); 
      }
      if(res.done) {
        return resolve(res.value);
      }
      //res.value包装为promise，以兼容yield后面跟基本类型的情况
      Promise.resolve(res.value).then(
        val => {
          _next(val);
        }, 
        err => {
          // 抛出错误
          // 缺少错误处理：上边代码里的Promise如果执行失败，就会导致后续执行直接中断，我们需要通过调用Generator.prototype.throw()，把错误抛出来，才能被外层的try-catch捕获到
          g.throw(err)
        });
    }
    _next();
  });
}
function* myGenerator() {
  try {
    console.log(yield Promise.resolve(1))
    console.log(yield 2)   //2
    console.log(yield Promise.reject('error'))
  } catch (error) {
    console.log(error)
  }
}
const result = run(myGenerator)     //result是一个Promise
//输出 1 2 error






// 到这里，一个async/await的实现基本完成了。最后我们可以看一下babel对async/await的转换结果，其实整体的思路是一样的，但是写法稍有不同：
//相当于我们的run()
function _asyncToGenerator(fn) {
  // return一个function，和async保持一致。我们的run直接执行了Generator，其实是不太规范的
  return function() {
    var self = this
    var args = arguments
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);

      //相当于我们的_next()
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      //处理异常
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

const foo = _asyncToGenerator(function* () {
  try {
    console.log(yield Promise.resolve(1))   //1
    console.log(yield 2)                    //2
    return '3'
  } catch (error) {
    console.log(error)
  }
})
foo().then(res => {
  console.log(res)                          //3
})
```

### Generator实现
```js
function* foo() {
  yield 'result1'
  yield 'result2'
  yield 'result3'
}

const gen = foo()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


// 看看ES5环境下是如何实现Generator的：
"use strict";
var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(foo);

function foo() {
  return regeneratorRuntime.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'result1';

        case 2:
          _context.next = 4;
          return 'result2';

        case 4:
          _context.next = 6;
          return 'result3';

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var gen = foo();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

#### regeneratorRuntime.mark()
regeneratorRuntime.mark(foo)这个方法在第一行被调用，我们先看一下runtime里mark()方法的定义

```js
//runtime.js里的定义稍有不同，多了一些判断，以下是编译后的代码
runtime.mark = function(genFun) {
  genFun.__proto__ = GeneratorFunctionPrototype;
  genFun.prototype = Object.create(Gp);
  return genFun;
};
```

这里边GeneratorFunctionPrototype和Gp我们都不认识，他们被定义在runtime里，不过没关系，我们只要知道mark()方法为生成器函数（foo）绑定了一系列原型就可以了，这里就简单地过了

#### regeneratorRuntime.wrap()
从上面babel转化的代码我们能看到，执行foo()，其实就是执行wrap()，那么这个方法起到什么作用呢，他想包装一个什么东西呢，我们先来看看wrap方法的定义：

```js
//runtime.js里的定义稍有不同，多了一些判断，以下是编译后的代码
function wrap(innerFn, outerFn, self) {
  // outerFn.prototype其实就是genFun.prototype，
  var generator = Object.create(outerFn.prototype);
  // context可以直接理解为这样一个全局对象，用于储存各种状态和上下文：
  var context = new Context([]);
  // makeInvokeMethod的定义如下，它return了一个invoke方法，invoke用于判断当前状态和执行下一步，其实就是我们调用的next()
  generator._invoke = makeInvokeMethod(innerFn, self, context);
  return generator;
}
```

wrap方法先是创建了一个generator，并继承outerFn.prototype；然后new了一个context对象；makeInvokeMethod方法接收innerFn(对应foo$)、context和this，并把返回值挂到generator._invoke上；最后return了generator。其实wrap()相当于是给generator增加了一个_invoke方法

```js
var ContinueSentinel = {};

var context = {
  done: false,
  method: "next",
  next: 0,
  prev: 0,
  abrupt: function(type, arg) {
    var record = {};
    record.type = type;
    record.arg = arg;

    return this.complete(record);
  },
  complete: function(record, afterLoc) {
    if (record.type === "return") {
      this.rval = this.arg = record.arg;
      this.method = "return";
      this.next = "end";
    }

    return ContinueSentinel;
  },
  stop: function() {
    this.done = true;
    return this.rval;
  }
};





//以下是编译后的代码
function makeInvokeMethod(innerFn, context) {
  // 将状态置为start
  var state = "start";

  return function invoke(method, arg) {
    // 已完成
    if (state === "completed") {
      return { value: undefined, done: true };
    }

    context.method = method;
    context.arg = arg;

    // 执行中
    while (true) {
      state = "executing";

      var record = {
        type: "normal",
        arg: innerFn.call(self, context)    // 执行下一步,并获取状态(其实就是switch里边return的值)
      };

      if (record.type === "normal") {
        // 判断是否已经执行完成
        state = context.done ? "completed" : "yield";

        // ContinueSentinel其实是一个空对象,record.arg === {}则跳过return进入下一个循环
        // 什么时候record.arg会为空对象呢, 答案是没有后续yield语句或已经return的时候,也就是switch返回了空值的情况(跟着上面的switch走一下就知道了)
        if (record.arg === ContinueSentinel) {
          continue;
        }
        // next()的返回值
        return {
          value: record.arg,
          done: context.done
        };
      }
    }
  };
}
```

为什么generator._invoke实际上就是gen.next呢，因为在runtime对于next()的定义中，next()其实就return了_invoke方法

```js
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
}

defineIteratorMethods(Gp);
```

#### 低配实现 & 调用流程分析
```js
// 生成器函数根据yield语句将代码分割为switch-case块，后续通过切换_context.prev和_context.next来分别执行各个case
function gen$(_context) {
  while (1) {
    switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return 'result1';

      case 2:
        _context.next = 4;
        return 'result2';

      case 4:
        _context.next = 6;
        return 'result3';

      case 6:
      case "end":
        return _context.stop();
    }
  }
}

// 低配版context
var context = {
  next:0,
  prev: 0,
  done: false,
  stop: function stop () {
    this.done = true
  }
}

// 低配版invoke
let gen = function() {
  return {
    next: function() {
      value = context.done ? undefined: gen$(context)
      done = context.done
      return {
        value,
        done
      }
    }
  }
}

// 测试使用
var g = gen()
g.next()  // {value: "result1", done: false}
g.next()  // {value: "result2", done: false}
g.next()  // {value: "result3", done: false}
g.next()  // {value: undefined, done: true}
```

- 分析一下调用流程：
  - 我们定义的function* 生成器函数被转化为以上代码
  - 转化后的代码分为三大块：
    - gen$(_context)由yield分割生成器函数代码而来
    - context对象用于储存函数执行上下文
    - invoke()方法定义next()，用于执行gen$(_context)来跳到下一步
  - 当我们调用g.next()，就相当于调用invoke()方法，执行gen$(_context)，进入switch语句，switch根据context的标识，执行对应的case块，return对应结果
  - 当生成器函数运行到末尾（没有下一个yield或已经return），switch匹配不到对应代码块，就会return空值，这时g.next()返回{value: undefined, done: true}

从中我们可以看出，Generator实现的核心在于上下文的保存，函数并没有真的被挂起，每一次yield，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个context对象储存上下文，使得每次执行生成器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样

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
  - 语义不明显，阅读性较差

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

### js执行的时候浏览器开启了哪些线程
5个 主线程，事件处理线程，渲染线程，http线程，事件触发线程
### js同步代码要loop很久，会不会阻塞后面代码的执行
会的
### 事件循环（Event Loop）---- （JavaScript的运行机制）----JS异步
#### 线程和进程的区别，JS是单线程的吗？

进程是资源分配的最小单位，线程是CPU调度的最小单位

- 进程
  - 代表CPU所能处理的单个任务。任一时刻，CPU总是运行一个进程，其他进程处于非运行状态。
  - 进程间通信
    - 管道（Pipe）及有名管道（named pipe）：管道可用于具有亲缘关系进程间的通信，有名管道克服了管道没有名字的限制，因此，除具有管道所具有的功能外，它还允许无亲缘关系进程间的通信；
    - 信号（Signal）：信号是比较复杂的通信方式，用于通知接受进程有某种事件发生，除了用于进程间通信外，进程还可以发送信号给进程本身；linux除了支持Unix早期信号语义函数sigal外，还支持语义符合Posix.1标准的信号函数sigaction（实际上，该函数是基于BSD的，BSD为了实现可靠信号机制，又能够统一对外接口，用sigaction函数重新实现了signal函数）；
    - 消息队列（Message）：消息队列是消息的链接表，包括Posix消息队列system V消息队列。有足够权限的进程可以向队列中添加消息，被赋予读权限的进程则可以读走队列中的消息。消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。
    - 共享内存：使得多个进程可以访问同一块内存空间，是最快的可用IPC形式。是针对其他通信机制运行效率较低而设计的。往往与其它通信机制，如信号量结合使用，来达到进程间的同步及互斥。
    - 信号量（semaphore）：主要作为进程间以及同一进程不同线程之间的同步手段。
    - 套接口（Socket）：更为一般的进程间通信机制，可用于不同机器之间的进程间通信。起初是由Unix系统的BSD分支开发出来的，但现在一般可以移植到其它类Unix系统上：Linux和System V的变种都支持套接字。
  - 通信方式的比较和优缺点：
    - 管道：速度慢，容量有限，只有父子进程能通讯
    - 有名管道（named pipe）：任何进程间都能通讯，但速度慢
    - 消息队列：容量受到系统限制，且要注意第一次读的时候，要考虑上一次没有读完数据的问题
    - 信号量：不能传递复杂消息，只能用来同步
    - 共享内存：能够很容易控制容量，速度快，但要保持同步，比如一个进程在写的时候，另一个进程要注意读写的问题，相当于线程中的线程安全，当然，共享内存区同样可以用作线程间通讯，不过没这个必要，线程间本来就已经共享了同一进程内的一块内存

- 线程
  - 一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。
  - 一个进程可以包括多个线程。
  - 一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。
  - "互斥锁"（Mutual exclusion，缩写 Mutex），防止多个线程同时读写某一块内存区域。
  - 做"信号量"（Semaphore），用来保证多个线程不会互相冲突。
  - 线程间通信
    - 通过访问共享变量的方式(注:需要处理同步问题)
    - 通过管道流

- js是单线程
  - js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。
  - 利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。
  - JS引擎线程
  - 事件触发线程
  - 定时触发器线程
#### js解决异步
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
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211022171914.png)
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

### DOM渲染的时机

- JS是单线程的，而且和DOM渲染共用一个线程
- JS执行的时候，得留一-些时机供DOM渲染
- 每次Call Stack（执行栈）清空(即每次轮询结束)， 即同步任务执行完
- 都是DOM重新渲染的机会，DOM结构如有改变则重新渲染
- 然后再去触发下一次Event Loop（事件循环）

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

### 常用设计模式有哪些并举例使用场景

- 工厂模式 - 传入参数即可创建实例
  - 虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode
- 单例模式 - 整个程序有且仅有一个实例
  - vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉
- 发布-订阅模式 (vue 事件机制)
- 观察者模式 (响应式数据原理)
- 装饰模式: (@装饰器的用法)
- 策略模式 策略模式指对象有某个行为,但是在不同的场景中,该行为有不同的实现方案-比如选项的合并策略


## TS
### typescript 中, enum 实现原理？？？？？？？？？
### 列举你知道哪些 typescript 工具类型？？？？？？？？？
### typescript 工具类型返回的是 type 还是 interface?？？？？？？？？？


## Node
### Node是什么
Node.js 是一个开源与跨平台的 JavaScript 运行时环境。在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能。我们可以理解为：Node.js 就是一个服务器端的、非阻塞式I/O的、事件驱动的JavaScript运行环境。

- 理解Node，有几个基础的概念：非阻塞异步和事件驱动。
    - 非阻塞异步： Nodejs采用了非阻塞型I/O机制，在做I/O操作的时候不会造成任何的阻塞，当完成之后，以时间的形式通知执行操作。例如，在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。
    - 事件驱动： 事件驱动就是当进来一个新的请求的时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般都是回调函数。比如，读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115221852.png)

### Node的应用场景及存在的缺点
#### 优缺点
- Node.js适合用于I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作。
- 缺点如下：
    - 不适合CPU密集型应用
    - 只支持单核CPU，不能充分利用CPU
    - 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃
#### 应用场景
- 在熟悉了Nodejs的优点和弊端后，我们可以看到它适合以下的应用场景：
    - 善于I/O，不善于计算。因为Nodejs是一个单线程，如果计算（同步）太多，则会阻塞这个线程。
    - 大量并发的I/O，应用程序内部并不需要进行非常复杂的处理。
    - 与 WeSocket 配合，开发长连接的实时交互应用程序。
- 具体的使用场景如下：
    - 用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序。
    - 基于web、canvas等多人联网游戏。
    - 基于web的多人实时聊天客户端、聊天室、图文直播。
    - 单页面浏览器应用程序。
    - 操作数据库、为前端和移动端提供基于json的API。
## HTTP
### JWT
#### 什么是 JWT

- JSON Web Token（简称 JWT）是目前最流行的跨域认证解决方案。

- 是一种认证授权机制。

- JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源。比如用在用户登录上。

- 可以使用 HMAC 算法或者是 RSA 的公/私秘钥对 JWT 进行签名。因为数字签名的存在，这些传递的信息是可信的。
### 如何实现扫码登录功能？

扫码登录场景想必我们都不陌生——很多PC端的网站都提供了扫码登录的功能，无需在网页上输入任何账号和密码，只需要通过手机上的APP，如微信、淘宝、QQ等等，使用扫描功能，扫描网页上的二维码，确认登录，就可以完成网页端登录。

- 扫码登录分析
  - 其实涉及到三种角色，需要解决两个问题。
    - 三种角色
      - PC端、手机端、服务端。
    - 两个问题
      - 手机端如何完成认证
      - PC端如何完成登录
      - 如果用普通的账号密码方式登录认证，PC端通过账号密码完成认证，然后服务端给PC端同步返回token key之类的标识，PC端再次请求服务端，需要携带token key，用于标识和证明自己登录的状态。
      - 服务端响应的时候，需要对token key进行校验，通过则正常响应；校验不通过，认证失败；或者token过期，PC端需要再次登录认证，获取新的token key。
      - 现在换成了扫码登录：
        - 认证不是通过账号密码了，而是由手机端扫码来完成
        - PC端没法同步获取认证成功之后的凭据，必须用某种方式来让PC端获取认证的凭据。

- 扫码登录实现
  - 手机端如何完成认证
    - 二维码怎么生成
      - 手机扫码这个过程，其实是对二维码的解码，获取二维码中包含的数据。
      - 首先，二维码是展示在我们的PC端，所以生成这个操作应该由PC端去请求服务端，获取相应的数据，再由PC端生成这个二维码。
        - 二维码包含什么呢
          - 二维码在我们这个场景里面是一个重要的媒介，服务端必须给这个数据生成惟一的标识作为二维码ID，同时还应该设置过期的时间。PC端根据二维码ID等数据生成二维码。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108181611.png)
    - APP认证机制
      - 基于APP的移动互联网认证机制。
        - 首先，手机端一般是不会存储登录密码的，我们发现，只有装载APP，第一次登录的时候，才需要进行基于账号密码的登录，之后即使这个清理掉这个应用进程，甚至手机重启，都是不需要再次输入账号密码的，它可以自动登录。
        - 这背后有一套基于token的认证机制，和PC有些类似，但又有一些不同。
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108181722.png)
          - APP登录认证的时候除了账号密码，还有设备信息
          - 账号密码校验通过，服务端会把账号与设备进行一个绑定，进行持久化的保存，包含了账号ID，设备ID，设备类型等等
          - APP每次请求除了携带token key，还需要携带设备信息。
          - 因为移动端的设备具备唯一性，可以为每个客户端生成专属token，这个token也不用过期，所以这就是我们可以一次登录，长久使用的原理。
    - 手机扫码干了什么
      - 手机扫码干了两件事：
        - 扫描二维码：识别PC端展示的二维码，获取二维码ID
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108181830.png)
        - 确认登录
          - 手机端通过带认证信息(token key、设备信息)、二维码信息（二维码ID）请求服务端，完成认证过程，确认PC端的登录。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108181903.png)
    - PC端如何完成登录
      - PC端通过token来标识登录状态。那么手机端扫码确认之后，我们的服务端就应该给PC生成相应的token。
      - 这个PC端又如何获取它所需的token key，来完成登录呢？
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108182947.png)
      - PC端可以通过获取二维码的状态来进行相应的响应：
        - 二维码未扫描：无操作
        - 二维码已失效：提示刷新二维码
        - 二维码已成功：从服务端获取PC token
      - 获取二维码状态，主要有三种方式：
        - 轮询
          - 轮询方式是指客户端会每隔一段时间就主动给服务端发送一次二维码状态的查询请求。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108183043.png)
        - 长轮询
          - 长轮询是指客户端主动给服务端发送二维码状态的查询请求，服务端会按情况对请求进行阻塞，直至二维码信息更新或超时。当客户端接收到返回结果后，若二维码仍未被扫描，则会继续发送查询请求，直至状态变化（已失效或已成功）。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108183206.png)
        - Websocket
          - Websocket是指前端在生成二维码后，会与后端建立连接，一旦后端发现二维码状态变化，可直接通过建立的连接主动推送信息给前端。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108183233.png)
  - 总结
    - 二维码扫码登录的一些关键点，现在我们把这些点串起来，来看一看二维码扫码登录的整体的实现流程。
    - 以常用的轮询方式获取二维码状态为例：
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108183407.png)
      - 访问PC端二维码生成页面，PC端请求服务端获取二维码ID
      - 服务端生成相应的二维码ID，设置二维码的过期时间，状态等。
      - PC获取二维码ID，生成相应的二维码。
      - 手机端扫描二维码，获取二维码ID。
      - 手机端将手机端token和二维码ID发送给服务端，确认登录。
      - 服务端校验手机端token，根据手机端token和二维码ID生成PC端token
      - PC端通过轮询方式请求服务端，通过二维码ID获取二维码状态，如果已成功，返回PC token，登录成功。

### 浏览器的最大请求并发数
并发数量简单通俗的讲就是，当浏览器网页的时候同时工作的进行数量。
HTTP客户端一般对同一个服务器的并发连接个数都是有限制的。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106162358.png)

### Service Worker有哪些作用
### cookies、sessionStorage、localStorage 和 indexDB 的区别

- cookie是网站为了标示用户身份而储存在用户本地的数据

- 是否在http请求只能够携带
  - cookie数据始终在同源的http请求中携带，跨域需要设置withCredentials = true
  - sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存

- 存储大小：
  - cookie数据大小不能超过4k；
  - sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大，因不同浏览器大小不同；

- 有效时间：
  - cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
  - localStorage 硬盘存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
  - sessionStorage 存在内存中，数据在当前浏览器窗口关闭后自动删除
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015134146.png)
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

### Cookie、Session、Token、JWT

#### 什么是认证（Authentication）

- 通俗地讲就是验证当前用户的身份，证明“你是你自己”（比如：你每天上下班打卡，都需要通过指纹打卡，当你的指纹和系统里录入的指纹相匹配时，就打卡成功）

- 互联网中的认证：
  - 用户名密码登录
  - 邮箱发送登录链接
  - 手机号接收验证码
  - 只要你能收到邮箱/验证码，就默认你是账号的主人
#### 什么是授权（Authorization）
- 用户授予第三方应用访问该用户某些资源的权限
  - 你在安装手机应用的时候，APP 会询问是否允许授予权限（访问相册、地理位置等权限）
  - 你在访问微信小程序时，当登录时，小程序会询问是否允许授予权限（获取昵称、头像、地区、性别等个人信息）

- 实现授权的方式有：cookie、session、token、OAuth
#### 什么是凭证（Credentials）
- 实现认证和授权的前提是需要一种媒介（证书） 来标记访问者的身份
  - 在战国时期，商鞅变法，发明了照身帖。照身帖由官府发放，是一块打磨光滑细密的竹板，上面刻有持有人的头像和籍贯信息。国人必须持有，如若没有就被认为是黑户，或者间谍之类的。
  - 在现实生活中，每个人都会有一张专属的居民身份证，是用于证明持有人身份的一种法定证件。通过身份证，我们可以办理手机卡/银行卡/个人贷款/交通出行等等，这就是认证的凭证。
  - 在互联网应用中，一般网站（如掘金）会有两种模式，游客模式和登录模式。游客模式下，可以正常浏览网站上面的文章，一旦想要点赞/收藏/分享文章，就需要登录或者注册账号。当用户登录成功后，服务器会给该用户使用的浏览器颁发一个令牌（token），这个令牌用来表明你的身份，每次浏览器发送请求时会带上这个令牌，就可以使用游客模式下无法使用的功能。
#### 什么是 Cookie
- HTTP 是无状态的协议（对于事务处理没有记忆能力，每次客户端和服务端会话完成时，服务端不会保存任何会话信息）：每个请求都是完全独立的，服务端无法确认当前访问者的身份信息，无法分辨上一次的请求发送者和这一次的发送者是不是同一个人。所以服务器与浏览器为了进行会话跟踪（知道是谁在访问我），就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一浏览器。而这个状态需要通过 cookie 或者 session 去实现。

- cookie 存储在客户端： cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。

- cookie 是不可跨域的： 每个 cookie 都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（靠的是 domain）。
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211112072406.png)
#### 什么是 Session
- session 是另一种记录服务器和客户端会话状态的机制
- session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的cookie 中
  ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211112072500.png)

- session 认证流程：
  - 用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session
  - 请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器
  - 浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名
  - 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。

- SessionID 是连接 Cookie 和 Session 的一道桥梁，大部分系统也是根据此原理来验证用户登录状态。
#### Cookie 和 Session 的区别
- 安全性： Session 比 Cookie 安全，Session 是存储在服务器端的，Cookie 是存储在客户端的。
- 存取值的类型不同：Cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，Session 可以存任意数据类型。
- 有效期不同： Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效。
- 存储大小不同： 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie，但是当访问量过多，会占用过多的服务器资源。
#### 什么是 Token（令牌）
- Acesss Token
  - 访问资源接口（API）时所需要的资源凭证
  - 简单 token 的组成： uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串）
  - 特点：
    - 服务端无状态化、可扩展性好
    - 支持移动端设备
    - 安全
    - 支持跨程序调用
  - token 的身份验证流程：
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211112072747.png)
    - 客户端使用用户名跟密码请求登录
    - 服务端收到请求，去验证用户名与密码
    - 验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端
    - 客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里
    - 客户端每次向服务端请求资源的时候需要带着服务端签发的 token
    - 服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据
  - 每一次请求都需要携带 token，需要把 token 放到 HTTP 的 Header 里
  - 基于 token 的用户认证是一种服务端无状态的认证方式，服务端不用存放 token 数据。用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库
  - token 完全由应用管理，所以它可以避开同源策略
- Refresh Token
  - 另外一种 token——refresh token
  - refresh token 是专用于刷新 access token 的 token。如果没有 refresh token，也可以刷新 access token，但每次刷新都要用户输入登录用户名与密码，会很麻烦。有了 refresh token，可以减少这个麻烦，客户端直接用 refresh token 去更新 access token，无需用户进行额外的操作。
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211112072946.png)
  - Access Token 的有效期比较短，当 Acesss Token 由于过期而失效时，使用 Refresh Token 就可以获取到新的 Token，如果 Refresh Token 也失效了，用户就只能重新登录了。
  - Refresh Token 及过期时间是存储在服务器的数据库中，只有在申请新的 Acesss Token 时才会验证，不会对业务接口响应时间造成影响，也不需要向 Session 一样一直保持在内存中以应对大量的请求。
#### Token 和 Session 的区别
- Session 是一种记录服务器和客户端会话状态的机制，使服务端有状态化，可以记录会话信息。而 Token 是令牌，访问资源接口（API）时所需要的资源凭证。Token 使服务端无状态化，不会存储会话信息。
- Session 和 Token 并不矛盾，作为身份认证 Token 安全性比 Session 好，因为每一个请求都有签名还能防止监听以及重放攻击，而 Session 就必须依赖链路层来保障通讯安全了。如果你需要实现有状态的会话，仍然可以增加 Session 来在服务器端保存一些状态。
- 所谓 Session 认证只是简单的把 User 信息存储到 Session 里，因为 SessionID 的不可预测性，暂且认为是安全的。而 Token ，如果指的是 OAuth Token 或类似的机制的话，提供的是 认证 和 授权 ，认证是针对用户，授权是针对 App 。其目的是让某 App 有权利访问某用户的信息。这里的 Token 是唯一的。不可以转移到其它 App上，也不可以转到其它用户上。Session 只提供一种简单的认证，即只要有此 SessionID ，即认为有此 User 的全部权利。是需要严格保密的，这个数据应该只保存在站方，不应该共享给其它网站或者第三方 App。所以简单来说：如果你的用户数据可能需要和第三方共享，或者允许第三方调用 API 接口，用 Token 。如果永远只是自己的网站，自己的 App，用什么就无所谓了。
#### 什么是 JWT
JWT基本上由.分隔的三部分组成，分别是头部，有效载荷和签名。 一个简单的JWT的例子，如下所示：
```md
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiemhhbmdzYW4ifQ.ec7IVPU-ePtbdkb85IRnK4t4nUVvF2bBf8fGhJmEwSs
```
如果你细致得去看的话会发现其实这是一个分为 3 段的字符串，段与段之间用 点号 隔开，在 JWT 的概念中，每一段的名称分别为：
```md
Header.Payload.Signature
```
- Header
  - JWT 的 Header 通常包含两个字段，分别是：typ(type) 和 alg(algorithm)
   - typ：token的类型，这里固定为 JWT
   - alg：使用的 hash 算法，例如：HMAC SHA256 或者 RSA
- Payload
  - JWT 中的 Payload 其实就是真实存储我们需要传递的信息的部分，例如正常我们会存储些用户 ID、用户名之类的。此外，还包含一些例如发布人、过期日期等的元数据。
- Signature
  - Signature 部分其实就是对我们前面的 Header 和 Payload 部分进行签名，保证 Token 在传输的过程中没有被篡改或者损坏，签名的算法也很简单，但是，为了加密，所以除了 Header 和 Payload 之外，还多了一个密钥字段




- JSON Web Token（简称 JWT）是目前最流行的跨域认证解决方案。
- 是一种认证授权机制。
- JWT 是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准（RFC 7519）。JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源。比如用在用户登录上。
- 可以使用 HMAC 算法或者是 RSA 的公/私秘钥对 JWT 进行签名。因为数字签名的存在，这些传递的信息是可信的。
- 可以使用 HMAC 算法或者是 RSA 的公/私秘钥对 JWT 进行签名。因为数字签名的存在，这些传递的信息是可信的。
- 生成 JWT
  - jwt.io/
  - www.jsonwebtoken.io/
- JWT 的原理
  - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211112074303.png)
  - JWT 认证流程：
    - 用户输入用户名/密码登录，服务端认证成功后，会返回给客户端一个 JWT
    - 客户端将 token 保存到本地（通常使用 localstorage，也可以使用 cookie）
    - 当用户希望访问一个受保护的路由或者资源的时候，需要请求头的 Authorization 字段中使用Bearer 模式添加 JWT，其内容看起来是下面这样`Authorization: Bearer <token>`
    - 服务端的保护路由将会检查请求头 Authorization 中的 JWT 信息，如果合法，则允许用户的行为
    - 因为 JWT 是自包含的（内部包含了一些会话信息），因此减少了需要查询数据库的需要
    - 因为 JWT 并不使用 Cookie 的，所以你可以使用任何域名提供你的 API 服务而不需要担心跨域资源共享问题（CORS）
    - 因为用户的状态不再存储在服务端的内存中，所以这是一种无状态的认证机制

- JWT 的使用方式
  - 客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。
  - 方式一
    - 当用户希望访问一个受保护的路由或者资源的时候，可以把它放在 Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在 HTTP 请求头信息的 Authorization 字段里，使用 Bearer 模式添加 JWT。
    ```js
    GET /calendar/v1/events
    Host: api.example.com
    Authorization: Bearer <token>
    ```
    - 用户的状态不会存储在服务端的内存中，这是一种 无状态的认证机制
    - 服务端的保护路由将会检查请求头 Authorization 中的 JWT 信息，如果合法，则允许用户的行为。
    - 由于 JWT 是自包含的，因此减少了需要查询数据库的需要
    - JWT 的这些特性使得我们可以完全依赖其无状态的特性提供数据 API 服务，甚至是创建一个下载流服务。
    - 因为 JWT 并不使用 Cookie ，所以你可以使用任何域名提供你的 API 服务而不需要担心跨域资源共享问题（CORS）
  - 方式二
    - 跨域的时候，可以把 JWT 放在 POST 请求的数据体里。
  - 方式三
    - 通过 URL 传输`http://www.example.com/user?token=xxx`
#### Token 和 JWT 的区别
- 相同：
  - 都是访问资源的令牌
  - 都可以记录用户的信息
  - 都是使服务端无状态化
  - 都是只有验证成功后，客户端才能访问服务端上受保护的资
- 区别：
  - Token：服务端验证客户端发送过来的 Token 时，还需要查询数据库获取用户信息，然后验证 Token 是否有效。
  - JWT： 将 Token 和 Payload 加密后存储于客户端，服务端只需要使用密钥解密进行校验（校验也是 JWT 自己实现的）即可，不需要查询或者减少查询数据库，因为 JWT 自包含了用户信息和加密的数据。
#### 常见的前后端鉴权方式
- Session-Cookie
- Token 验证（包括 JWT，SSO）
- OAuth2.0（开放授权）
#### 常见的加密算法
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211112102921.png)

- 哈希算法(Hash Algorithm)又称散列算法、散列函数、哈希函数，是一种从任何一种数据中创建小的数字“指纹”的方法。哈希算法将数据重新打乱混合，重新创建一个哈希值。
- 哈希算法主要用来保障数据真实性(即完整性)，即发信人将原始消息和哈希值一起发送，收信人通过相同的哈希函数来校验原始数据是否真实。
- 哈希算法通常有以下几个特点：
  - 正像快速：原始数据可以快速计算出哈希值
  - 逆向困难：通过哈希值基本不可能推导出原始数据
  - 输入敏感：原始数据只要有一点变动，得到的哈希值差别很大
  - 冲突避免：很难找到不同的原始数据得到相同的哈希值，宇宙中原子数大约在 10 的 60 次方到 80 次方之间，所以 2 的 256 次方有足够的空间容纳所有的可能，算法好的情况下冲突碰撞的概率很低：
    - 2 的 128 次方为 340282366920938463463374607431768211456，也就是 10 的 39 次方级别
    - 2 的 160 次方为 1.4615016373309029182036848327163e+48，也就是 10 的 48 次方级别
    - 2 的 256 次方为 1.1579208923731619542357098500869 × 10 的 77 次方，也就是 10 的 77 次方
- 注意：
  - 以上不能保证数据被恶意篡改，原始数据和哈希值都可能被恶意篡改，要保证不被篡改，可以使用RSA 公钥私钥方案，再配合哈希值。
  - 哈希算法主要用来防止计算机传输过程中的错误，早期计算机通过前 7 位数据第 8 位奇偶校验码来保障（12.5% 的浪费效率低），对于一段数据或文件，通过哈希算法生成 128bit 或者 256bit 的哈希值，如果校验有问题就要求重传。
#### 常见问题
- 使用 cookie 时需要考虑的问题
  - 因为存储在客户端，容易被客户端篡改，使用前需要验证合法性
  - 不要存储敏感数据，比如用户密码，账户余额
  - 使用 httpOnly 在一定程度上提高安全性
  - 尽量减少 cookie 的体积，能存储的数据量不能超过 4kb
  - 设置正确的 domain 和 path，减少数据传输
  - cookie 无法跨域
  - 一个浏览器针对一个网站最多存 20 个Cookie，浏览器一般只允许存放 300 个Cookie
  - 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token



- 使用 session 时需要考虑的问题
  - 将 session 存储在服务器里面，当用户同时在线量比较多时，这些 session 会占据较多的内存，需要在服务端定期的去清理过期的 session
  - 当网站采用集群部署的时候，会遇到多台 web 服务器之间如何做 session 共享的问题。因为 session 是由单个服务器创建的，但是处理用户请求的服务器不一定是那个创建 session 的服务器，那么该服务器就无法拿到之前已经放入到 session 中的登录凭证之类的信息了。
  - 当多个应用要共享 session 时，除了以上问题，还会遇到跨域问题，因为不同的应用可能部署的主机不一样，需要在各个应用做好 cookie 跨域的处理。
  - sessionId 是存储在 cookie 中的，假如浏览器禁止 cookie 或不支持 cookie 怎么办？ 一般会把 sessionId 跟在 url 参数后面即重写 url，所以 session 不一定非得需要靠 cookie 实现
  - 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token


- 使用 token 时需要考虑的问题
  - 如果你认为用数据库来存储 token 会导致查询时间太长，可以选择放在内存当中。比如 redis 很适合你对 token 查询的需求。
  - token 完全由应用管理，所以它可以避开同源策略
  - token 可以避免 CSRF 攻击(因为不需要 cookie 了)
  - 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token



- 使用 JWT 时需要考虑的问题
  - 因为 JWT 并不依赖 Cookie 的，所以你可以使用任何域名提供你的 API 服务而不需要担心跨域资源共享问题（CORS）
  - JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。
  - JWT 不加密的情况下，不能将秘密数据写入 JWT。
  - JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。
  - JWT 最大的优势是服务器不再需要存储 Session，使得服务器认证鉴权业务可以方便扩展。但这也- 是 JWT 最大的缺点：由于服务器不需要存储 Session 状态，因此使用过程中无法废弃某个 Token 或者更改 Token 的权限。也就是说一旦 JWT 签发了，到期之前就会始终有效，除非服务器部署额外的逻辑。
  - JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。
  - JWT 适合一次性的命令认证，颁发一个有效期极短的 JWT，即使暴露了危险也很小，由于每次操作都会生成新的 JWT，因此也没必要保存 JWT，真正实现无状态。
  - 为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。


- 使用加密算法时需要考虑的问题
  - 绝不要以明文存储密码
  - 永远使用 哈希算法 来处理密码，绝不要使用 Base64 或其他编码方式来存储密码，这和以明文存储密码是一样的，使用哈希，而不要使用编码。编码以及加密，都是双向的过程，而密码是保密的，应该只被它的所有者知道， 这个过程必须是单向的。哈希正是用于做这个的，从来没有解哈希这种说法， 但是编码就存在解码，加密就存在解密。
  - 绝不要使用弱哈希或已被破解的哈希算法，像 MD5 或 SHA1 ，只使用强密码哈希算法。
  - 绝不要以明文形式显示或发送密码，即使是对密码的所有者也应该这样。如果你需要 “忘记密码” 的功能，可以随机生成一个新的 一次性的（这点很重要）密码，然后把这个密码发送给用户。
### HTTP与HTTPS有什么区别？
HTTP与HTTPS的区别:
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
    
- HTTPS的整体过程分为证书验证和数据传输阶段
  - ① 证书验证阶段：
    - 浏览器发起 HTTPS 请求；
    - 服务端返回 HTTPS 证书；
    - 客户端验证证书是否合法，如果不合法则提示告警。
  - ② 数据传输阶段：
    - 当证书验证合法后，在本地生成随机数；
    - 通过公钥加密随机数，并把加密后的随机数传输到服务端；
    - 服务端通过私钥对随机数进行解密；
    - 服务端通过客户端传入的随机数构造对称加密算法，对返回结果内容进行加密后传输。

#### 有哪些区别SSL协议是使用对称加密还是非对称加密
HTTPS 在内容传输的加密上使用的是对称加密，非对称加密只作用在证书验证阶段。


- 为什么数据传输是用对称加密？
  - 首先：非对称加密的加解密效率是非常低的，而 http 的应用场景中通常端与端之间存在大量的交互，非对称加密的效率是无法接受的。
  - 另外：在 HTTPS 的场景中只有服务端保存了私钥，一对公私钥只能实现单向的加解密，所以 HTTPS 中内容传输加密采取的是对称加密，而不是非对称加密。
### HTTP下向HTTPS发请求，请求能成功吗？如果反过来呢？
### HTTP1.0、HTTP1.1、http2.0 的区别
#### HTTP1.0和HTTP1.1
- HTTP1.0
  - HTTP/0.9极其简单，且使用非常受限。
  - 每次HTTP 请求/响应都会重新建立TCP连接
  - 添加了对 POST 和 HEAD 方法的支持
  - 协议头带有版本号、协议类型、状态码字段
  - 响应类型：超文本、脚本、媒体、样式表
  - 支持keep-alive连接，但默认情况下它是“关闭”的

- HTTP/1.1
  - HTTP/1.0的主要缺陷是：它在每次请求\响应时都要建立新的TCP连接。这种做法非常耗时，且影响客户端和服务器的性能。
  - 单个TCP连接上可以传送多个HTTP请求和响应
  - 添加了对 PUT、DELETE、TRACE、OPTIONS 方法的支持
  - 默认持久连接
#### HTTP1.0和HTTP1.1的区别
- HTTP1.0
  - 队头阻塞：下个请求必须在前一个请求返回后才能发出，导致带宽无法被充分利用，后续请求被阻塞（HTTP 1.1 尝试使用流水线（Pipelining）技术，但先天 FIFO（先进先出）机制导致当前请求的执行依赖于上一个请求执行的完成，容易引起队头阻塞，并没有从根本上解决问题）；
  - 协议开销大：header里携带的内容过大，且不能压缩，增加了传输的成本；
  - 单向请求：只能单向请求，客户端请求什么，服务器返回什么

- HTTP1.1
  - 长连接：HTTP1.1支持长连接和请求的流水线处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启长连接keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。
  - 节约带宽： HTTP1.0中存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能。HTTP1.1支持只发送header信息（不带任何body信息），如果服务器认为客户端有权限请求服务器，则返回100，客户端接收到100才开始把请求body发送到服务器；如果返回401，客户端就可以不用发送请求body了节约了带宽。
  - HOST域：  在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname），HTTP1.0没有host域。随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都支持host域，且请求消息中如果没有host域会报告一个错误（400 Bad Request）。
  - 缓存处理：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。
  - 错误通知的管理：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107112111.png)

#### HTTP1.1和HTTP2.0的区别
- 多路复用：HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。HTTP1.1也可以多建立几个TCP连接，来支持处理更多并发的请求，但是创建TCP连接本身也是有开销的。
- 头部数据压缩(采用HPACK压缩算法压缩头部，减小了传输的体积)： 在HTTP1.1中，HTTP请求和响应都是由状态行、请求/响应头部、消息主体三部分组成。一般而言，消息主体都会经过gzip压缩，或者本身传输的就是压缩过后的二进制文件，但状态行和头部却没有经过任何压缩，直接以纯文本传输。随着Web功能越来越复杂，每个页面产生的请求数也越来越多，导致消耗在头部的流量越来越多，尤其是每次都要传输UserAgent、Cookie这类不会频繁变动的内容，完全是一种浪费。HTTP1.1不支持header数据的压缩，HTTP2.0使用HPACK算法对header的数据进行压缩，这样数据体积小了，在网络上传输就会更快。
- 服务器推送： 服务端推送是一种在客户端请求之前发送数据的机制。网页使用了许多资源：HTML、样式表、脚本、图片等等。在HTTP1.1中这些资源每一个都必须明确地请求。这是一个很慢的过程。浏览器从获取HTML开始，然后在它解析和评估页面的时候，增量地获取更多的资源。因为服务器必须等待浏览器做每一个请求，网络经常是空闲的和未充分使用的。为了改善延迟，HTTP2.0引入了server push，它允许服务端推送资源给浏览器，在浏览器明确地请求之前，免得客户端再次创建连接发送请求到服务器端获取。这样客户端可以直接从本地加载这些资源，不用再通过网络。
- 非阻塞下载

缺点：HTTP 2中，多个请求在一个TCP管道中的，出现了丢包时，HTTP 2的表现反倒不如HTTP 1.1了。因为 TCP 为了保证可靠传输，有个特别的“丢包重传”机制，丢失的包必须要等待重新传输确认，HTTP 2出现丢包时，整个 TCP 都要开始等待重传，那么就会阻塞该TCP连接中的所有请求。而对于 HTTP 1.1 来说，可以开启多个 TCP 连接，出现这种情况反到只会影响其中一个连接，剩余的 TCP 连接还可以正常传输数据

#### Http3.0 相对于 Http2.0的区别

http 协议是应用层协议，都是建立在传输层之上的。我们也都知道传输层上面不只有 TCP 协议，还有另外一个强大的协议 UDP 协议，2.0 和 1.0 都是基于 TCP 的，因此都会有 TCP 带来的硬伤以及局限性。而 Http3.0 则是建立在 UDP 的基础上。所以其与 Http2.0 之间有质的不同。

通过多路复用，HTTP/2解决了队头阻塞问题。但如果TCP流中出现了丢包，根据TCP的拥塞控制机制，其他数据流就只能等待丢包被重新发送和接收。所以，TCP的队头阻塞问题在HTTP/2中依然存在。HTTP/3通过使用基于UDP的传输协议QUIC解决了这一问题。

HTTP/3是自HTTP/2之后最新且最主要的HTTP版本。因为HTTP/3本身就是为QUIC协议设计的，所以也被描述为基于QUIC的HTTP/2。HTTP/3的目标是通过使用谷歌的QUIC协议提供快速、可靠安全的网络连接。

- HTTP/3
  - 基于UDP的QUIC连接迁移实现
    - TCP的连接重连之痛
      - 一条 TCP 连接是由四元组标识的（源 IP，源端口，目的 IP，目的端口）。什么叫连接迁移呢？就是当其中任何一个元素发生变化时，这条连接依然维持着，能够保持业务逻辑不中断。
    - 用户的地址发生变化时，如 WIFI 切换到 4G 场景，基于 TCP 的 HTTP 协议无法保持连接的存活。QUIC 基于连接 ID 唯一识别连接。当源地址发生改变时，QUIC 仍然可以保证连接存活和数据正常收发。
    - QUIC是基于UDP协议的，任何一条 QUIC 连接不再以 IP 及端口四元组标识，而是以一个 64 位的随机数作为 ID 来标识，这样就算 IP 或者端口发生变化时，只要 ID 不变，这条连接依然维持着，上层业务逻辑感知不到变化，不会中断，也就不需要重连。
  - 低连接延时
    - TLS的连接时延问题
      - 对于数据量小的请求而言，单一次的请求握手就占用了大量的时间，对于用户体验的影响非常大。同时，在用户网络不佳的情况下，RTT延时会变得较高，极其影响用户体验。
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107112541.png)
      - 从对比我们可以看到，即使用上了TLS 1.3，精简了握手过程，最快能做到0-RTT握手(首次是1-RTT)；但是对用户感知而言, 还要加上1RTT的TCP握手开销。
      - QUIC通过合并加密与连接管理解决了这个问题，我们来看看其是如何实现真正意义上的0-RTT的握手, 让与server进行第一个数据包的交互就能带上用户数据。
      - QUIC 由于基于 UDP，无需 TCP 连接，在最好情况下，短连接下 QUIC 可以做到 0RTT 开启数据传输。而基于 TCP 的 HTTPS，即使在最好的 TLS1.3 的 early data 下仍然需要 1RTT 开启数据传输。而对于目前线上常见的 TLS1.2 完全握手的情况，则需要 3RTT 开启数据传输。对于 RTT 敏感的业务，QUIC 可以有效的降低连接建立延迟。
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107134603.png)
  - 可自定义的拥塞控制
    - Quic使用可插拔的拥塞控制，相较于TCP，它能提供更丰富的拥塞控制信息。比如对于每一个包，不管是原始包还是重传包，都带有一个新的序列号(seq)，这使得Quic能够区分ACK是重传包还是原始包，从而避免了TCP重传模糊的问题。Quic同时还带有收到数据包与发出ACK之间的时延信息。这些信息能够帮助更精确的计算RTT。此外，Quic的ACK Frame 支持256个NACK 区间，相比于TCP的SACK(Selective Acknowledgment)更弹性化，更丰富的信息会让client和server 哪些包已经被对方收到。
    - QUIC 的传输控制不再依赖内核的拥塞控制算法，而是实现在应用层上，这意味着我们根据不同的业务场景，实现和配置不同的拥塞控制算法以及参数。GOOGLE 提出的 BBR 拥塞控制算法与 CUBIC 是思路完全不一样的算法，在弱网和一定丢包场景，BBR 比 CUBIC 更不敏感，性能也更好。在 QUIC 下我们可以根据业务随意指定拥塞控制算法和参数，甚至同一个业务的不同连接也可以使用不同的拥塞控制算法。
  - 无队头阻塞
    - TCP的队头阻塞问题
      - 虽然 HTTP2 实现了多路复用，但是因为其基于面向字节流的 TCP，因此一旦丢包，将会影响多路复用下的所有请求流。QUIC 基于 UDP，在设计上就解决了队头阻塞问题。
      - TCP 队头阻塞的主要原因是数据包超时确认或丢失阻塞了当前窗口向右滑动，我们最容易想到的解决队头阻塞的方案是不让超时确认或丢失的数据包将当前窗口阻塞在原地。QUIC也正是采用上述方案来解决TCP 队头阻塞问题的。
      - TCP 为了保证可靠性，使用了基于字节序号的 Sequence Number 及 Ack 来确认消息的有序到达。
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107134825.png)
      - 如上图，应用层可以顺利读取stream1中的内容，但由于stream2中的第三个segment发生了丢包，TCP 为了保证数据的可靠性，需要发送端重传第 3 个 segment 才能通知应用层读取接下去的数据。所以即使stream3 stream4的内容已顺利抵达，应用层仍然无法读取，只能等待stream2中丢失的包进行重传。
      - 在弱网环境下，HTTP2的队头阻塞问题在用户体验上极为糟糕。
    - QUIC的无队头阻塞解决方案
      - QUIC 同样是一个可靠的协议，它使用 Packet Number 代替了 TCP 的 Sequence Number，并且每个 Packet Number 都严格递增，也就是说就算 Packet N 丢失了，重传的 Packet N 的 Packet Number 已经不是 N，而是一个比 N 大的值，比如Packet N+M。
      - QUIC 使用的Packet Number 单调递增的设计，可以让数据包不再像TCP 那样必须有序确认，QUIC 支持乱序确认，当数据包Packet N 丢失后，只要有新的已接收数据包确认，当前窗口就会继续向右滑动。待发送端获知数据包Packet N 丢失后，会将需要重传的数据包放到待发送队列，重新编号比如数据包Packet N+M 后重新发送给接收端，对重传数据包的处理跟发送新的数据包类似，这样就不会因为丢包重传将当前窗口阻塞在原地，从而解决了队头阻塞问题。那么，既然重传数据包的Packet N+M 与丢失数据包的Packet N 编号并不一致，我们怎么确定这两个数据包的内容一样呢？
      - QUIC使用Stream ID 来标识当前数据流属于哪个资源请求，这同时也是数据包多路复用传输到接收端后能正常组装的依据。重传的数据包Packet N+M 和丢失的数据包Packet N 单靠Stream ID 的比对一致仍然不能判断两个数据包内容一致，还需要再新增一个字段Stream Offset，标识当前数据包在当前Stream ID 中的字节偏移量。
      - 有了Stream Offset 字段信息，属于同一个Stream ID 的数据包也可以乱序传输了（HTTP/2 中仅靠Stream ID 标识，要求同属于一个Stream ID 的数据帧必须有序传输），通过两个数据包的Stream ID 与 Stream Offset 都一致，就说明这两个数据包的内容一致。
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107134949.png)
  - 报文 Body 都是经过加密的
    - QUIC 的 packet 除了个别报文比如 PUBLIC_RESET 和 CHLO，所有报文头部都是经过认证的，报文 Body 都是经过加密的。这样只要对 QUIC 报文任何修改，接收端都能够及时发现，有效地降低了安全风险。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107135122.png)
      ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107111256.png)
#### QUIC协议
QUIC是一种新的多路传输层网络协议标准，建立在 UDP 之上。QUIC的主要目标是通过减少页面加载时间提升用户体验，并提高HTTPS的传输性能。它在本质上是TCP+TLS+HTTP/2。

设计HTTP/3的目的就是要充分利用 QUIC 的优势。QUIC 协议本身可以处理数据流，所以排除了 TCP 队头阻塞问题。

- QUIC 的一些关键特性包括：
  - 基于UDP
  - 使用没有队头阻塞的连接复用
  - 重构TCP的关键机制（连接复用、连接建立、拥塞控制、可靠性），并成为可靠的传输协议
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211107111633.png)
- 交换数据包
  - 安全的首包
    - 首先，客户端在一个CRYPTO 帧中传输包含TLS 1.3 Client Hello的首包。Client Hello包含不同类型的的扩展项，如目标服务器的SNI（Server Name Indication，服务器名称指示 ）、QUIC 传输参数、压缩证书等，以及客户端支持的压缩方法和不同的加密套件。
    - 如果服务器接受QUIC和TLS 1.3参数，它也会在CRYPTO帧中发送包含对客户端首包确认信息和TLS 1.3 Server Hello的首包信息。Server Hello中包含被服务器接收的加密套件和不同的扩展（如密钥共享、支持的版本等）。在客户端接收到 Server Hello后，会向服务器发送一个ACK确认包。
    - 这三个首包都可能包含一个填充帧，以根据需要增加数据包的大小。
  - 握手包
    - 客户端和服务器之间的首包被交换以后，服务器会发送一个握手数据包，其中包含余下的服务器端消息，如证书、与服务器身份验证相关的加密扩展。客户端会验证这些证书，然后QUIC 握手以客户端发送的握手消息结束。
  - 安全的净荷包
    - 一旦安全的QUIC连接建立，客户端与服务器之间的信息便可以安全传输。
- 我们为什么要用QUIC？
  - 传统的TCP协议是建立在操作系统层和中间路由模块之上实现的，它的握手阶段信息很容易被这些中间模块篡改而变得不安全。
  - 但QUIC协议是在UDP之上的用户级（如浏览器）中实现的，因此它更加灵活、对用户更友好，并且能够在短时间内支持更多设备。
  - 在 QUIC 中，传输相关的信息被不同的保护层加密，握手包在传输链路上不容易被识别和修改。因此它提供了更安全的网络数据传输。
### HTTP知识点
#### HTTP 请求报文结构/HTTP 响应报文结构
- HTTP协议的主要特点
  - HTTP协议类的主要特点：简单快速，灵活，无连接，无状态（无法区分两次连接是否一样）。
- HTTP报文的组成部分
  - HTTP报文的组成部分
    - 请求报文：请求行，请求头，空行，请求体；
    - 响应报文：状态行，响应头，空行，响应体。
    - 请求行包含：http方法，页面地址，http协议以及版本；
    - 请求头包含：key-value值，告诉服务器端我要什么内容。
      ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922191832.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210824184941.png)

```md
首行是Request-Line包括：请求方法，请求URI，协议版本，CRLF
首行之后是若干行请求头，包括general-header，request-header或者entity-header，每个一行以CRLF结束
请求头和消息实体之间有一个CRLF分隔
根据实际请求需要可能包含一个消息实体 一个请求报文例子如下：
```

```md
GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
Host: www.w3.org
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: https://www.google.com.hk/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: authorstyle=yes
If-None-Match: "2cc8-3e3073913b100"
If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

name=qiu&age=25
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210824184846.png)

```md
首行是状态行包括：HTTP版本，状态码，状态描述，后面跟一个CRLF
首行之后是若干行响应头，包括：通用头部，响应头部，实体头部
响应头部和响应实体之间用一个CRLF空行分隔
最后是一个可能的消息实体 响应报文例子如下：
```

```md
HTTP/1.1 200 OK
Date: Tue, 08 Jul 2014 05:28:43 GMT
Server: Apache/2
Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT # 最后修改时间，用于协商缓存
ETag: "40d7-3e3073913b100" # 文件hash，用于协商缓存
Accept-Ranges: bytes
Content-Length: 16599
Cache-Control: max-age=21600 # 强缓存（浏览器端）最大过期时间
Expires: Tue, 08 Jul 2014 11:28:43 GMT # 强缓存（浏览器端）过期时间
P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
Content-Type: text/html; charset=iso-8859-1

{"name": "qiu", "age": 25}
```

#### POST和GET的区别：
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
#### 预检(OPTIONS)请求
在浏览器中通过http请求与服务端进行请求时，偶尔会发现某一些请求会被调用两次，一次是符合我们业务需求的接口调用，一次是在我们预料之外的请求，而且这个请求还不会有任何的数据返回，咋一看似乎是哪里出了问题，这个请求便是预检请求(request method为OPTIONS)

- 为何会存在OPTIONS请求呢？
  - 可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前自动先发起 OPTIONS 请求，即 CORS 预检请求，服务器若接受该跨域请求，浏览器才继续发起正式请求

- 什么时候会发起OPTIONS请求呢？
  - 一个 CORS 预检请求是用于检查服务器是否支持 CORS 即跨域资源共享，当有必要的时候，浏览器会自动发出一个预检请求；所以在正常情况下，我们不需要自己去发这样的请求
  - 在跨域的情况下：
    - 当发送的请求为非简单请求时，这个时候浏览器会自动的帮我们发送一个OPTIONS请求，用于检测所请求的目标资源是否支持跨域，当浏览器发送OPTIONS请求得到响应之后，会根据responst header自动处理，若是目标资源支持跨域则会继续将正常的请求发送，若是不支持跨域则直接控制台报错，提示当前请求跨域了
    - 若是发送的请求为简单请求时，则不会发送OPTIONS请求，浏览器会直接将请求正常发送

- 为什么要对非简单跨域请求做预检？
  - 减少非简单跨域请求对服务器的影响（开始时就提到，服务器有时候不想理睬跨域请求），比如PUT、DELETE请求可以直接新建或者修改、删除服务器中的资源。预检请求可以防止该情况发生。
  - 减少服务器对于是否跨域的计算量
    - 对于非简单请求的跨域请求，服务器对于是否跨域的计算是在预检请求上，如果预检请求通过之后，正式请求都不用再次计算。而且一次预检请求通过后，之后的每次请求都只会发正式请求。节约了很多服务端的计算量。

- 为什么不对简单的跨域请求做预检？
  - 一开始就提到，form能实现的简单跨域请求，浏览器做不了任何的限制。
  - 没必要对简单请求做预检。比如，一些post请求只是想打个日志，并不需要服务器的响应，但是如果加预检请求，预检请求不通过就做不了这件事。还有一些GET请求、HEAD请求只是想获取资源，并不会修改资源，在不获取响应的时候并不会对服务器造成影响。在这种情况下，加预检请求，只会增加服务器的负担
- #### CORS跨域请求[简单请求与复杂请求]
  CORS（cross-origin resource sharing），跨源资源共享（一般俗称『跨域请求』）。
- 简单请求和预检请求的区分，会看到有很多的条件：
  - 简单请求的 HTTP 方法只能是 GET、HEAD 或 POST
  - 简单请求的 HTTP 头只能是
    - Accept
      - 请求头用来告知（服务器）客户端可以处理的内容类型
    - Accept-Language
      - 请求头允许客户端声明它可以理解的自然语言，以及优先选择的区域方言
    - Conent-Language
      - 是一个 entity header（实体消息首部），用来说明访问者希望采用的语言或语言组合，这样的话用户就可以根据自己偏好的语言来定制不同的内容
    - Content-Type
      - 实体头部用于指示资源的MIME类型, 值是 application/x-www-form-urlencoded, multipart/form-data, 或者 text/plain之一的（忽略参数）
    - Last-Event-ID
    - DPR
    - Downlink
    - Save-Data
    - Viewport-Width
    - Width
  - 简单请求的 Content-Type 头只能是 text/plain、multipart/form-data 或 application/x-www-form-urlencoded
  - 任何一个不满足上述要求的请求，即被认为是复杂请求。一个复杂请求不仅有：包含通信内容的请求，同时也包含预请求。
- 简单请求
  - 部分响应头
    - Access-Control-Allow-Origin（必含）- 不可省略，否则请求按失败处理。该项控制数据的可见范围，如果希望数据对任何人都可见，可以填写"*"。
    - Access-Control-Allow-Credentials（可选） – 该项标志着请求当中是否包含cookies信息，只有一个可选值：true（必为小写）。如果不包含cookies，请略去该项，而不是填写false。这一项与XmlHttpRequest2对象当中的withCredentials属性应保持一致，即withCredentials为true时该项也为true；withCredentials为false时，省略该项不写。反之则导致请求失败。
    - Cache-Control
    - Content-Language
    - Content-Type
    - Expires
    - Last-Modified

- 复杂请求
  - 比如说你需要发送PUT、DELETE等HTTP动作，或者发送Content-Type: application/json的内容。
  - 复杂请求表面上看起来和简单请求使用上差不多，但实际上浏览器发送了不止一个请求。其中最先发送的是一种"预请求"，此时作为服务端，也需要返回"预回应"作为响应。预请求实际上是对服务端的一种权限请求，只有当预请求成功返回，实际请求才开始执行。
  - 响应头
    - Access-Control-Allow-Origin（必含） – 和简单请求一样的，必须包含一个域。
    - Access-Control-Allow-Methods（必含） – 这是对预请求当中Access-Control-Request-Method的回复，这一回复将是一个以逗号分隔的列表。尽管客户端或许只请求某一方法，但服务端仍然可以返回所有允许的方法，以便客户端将其缓存。
    - Access-Control-Allow-Headers（当预请求中包含Access-Control-Request-Headers时必须包含） – 这是对预请求当中Access-Control-Request-Headers的回复，和上面一样是以逗号分隔的列表，可以返回所有支持的头部。这里在实际使用中有遇到，所有支持的头部一时可能不能完全写出来，而又不想在这一层做过多的判断，没关系，事实上通过request的header可以直接取到Access-Control-Request-Headers，直接把对应的value设置到Access-Control-Allow-Headers即可。
    - Access-Control-Allow-Credentials（可选） – 和简单请求当中作用相同。
    - Access-Control-Max-Age（可选） – 以秒为单位的缓存时间。预请求的的发送并非免费午餐，允许时应当尽可能缓存。
  - 一旦预回应如期而至，所请求的权限也都已满足，则实际请求开始发送。
#### HTTP常见状态码及其含义
- `HTTP`状态码：
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
- 为什么要进行三次握手：为了确认对方的发送和接收能力。
  - 第一次握手：建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。
  - 第二次握手：服务器收到syn包并确认客户的SYN（ack=j+1），同时也发送一个自己的SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
  - 第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。
  - 握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。四次以上都可以，只不过 三次就够了
- 四次握手：
  - **客户端进程发出连接释放报文**，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。
  - **服务器收到连接释放报文，发出确认报文**，ACK=1，ack=u+1，并且带上自己的序列号seq=v，此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。
  - 客户端收到服务器的确认请求后，此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最 后的数据）。
  - **服务器将最后的数据发送完毕后，就向客户端发送连接释放报文**，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。
  - **客户端收到服务器的连接释放报文后，必须发出确认**，ACK=1，ack=w+1，而自己的序列号是seq=u+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。
  - 服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。
  - 为什么不是两次？
    - 两次情况客户端说完结束就立马断开不再接收，无法确认服务端是否接收到断开消息，但且服务端可能还有消息未发送完。
  - 为什么不是三次？
    - 3次情况服务端接收到断开消息，向客户端发送确认接受消息，客户端未给最后确认断开的回复。
#### 为什么需要等待 2MSL
因为如果不等待的话，如果服务端还有很多数据包要给客户端发，且此时客户端端口被新应用占据，那么就会接收到无用的数据包，造成数据包混乱，所以说最保险的方法就是等服务器发来的数据包都死翘翘了再启动新应用。

1个 MSL 保证四次挥手中主动关闭方最后的 ACK 报文能最终到达对端
1个 MSL 保证对端没有收到 ACK 那么进行重传的 FIN 报文能够到达

如果是三次的话，那么服务端的 ACK 和 FIN 合成一个挥手，那么长时间的延迟可能让 TCP 一位 FIN 没有达到服务器端，然后让客户的不断的重发 FIN
### UDP和TCP的区别及应用场景
#### TCP和UDP的区别
- TCP是面向链接的，而UDP是面向无连接的。
- TCP仅支持单播传输，UDP 提供了单播，多播，广播的功能。
- TCP的三次握手保证了连接的可靠性; UDP是无连接的、不可靠的一种数据传输协议，首先不可靠性体现在无连接上，通信都不需要建立连接，对接收到的数据也不发送确认信号，发送端不知道数据是否会正确接收。
- UDP的头部开销比TCP的更小，数据传输速率更高，实时性更好。
- TCP对系统资源要求较多，UDP对系统资源要求较少。
- 每一条TCP连接只能是点到点的；UDP支持一对一，一对多，多对一和多对多的交互通信。
- TCP提供可靠的服务，也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达；UDP尽最大努力交付，即不保证可靠交付。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922215122.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922215218.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922215348.png)
#### TCP 滑动窗口
在 TCP 链接中，对于发送端和接收端而言，TCP 需要把发送的数据放到发送缓存区, 将接收的数据放到接收缓存区。而经常会存在发送端发送过多，而接收端无法消化的情况，所以就需要流量控制，就是在通过接收缓存区的大小，控制发送端的发送。如果对方的接收缓存区满了，就不能再继续发送了。而这种流量控制的过程就需要在发送端维护一个发送窗口，在接收端维持一个接收窗口。
TCP 滑动窗口分为两种: 发送窗口和接收窗口。

#### TCP 拥塞机制
原因是有可能整个网络环境特别差，容易丢包，那么发送端就应该注意了。
- 主要用三种方法：
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
#### TCP 流量控制（滑动窗口）
流量控制就是让发送方的发送速率不要太快，让接收方来得及接受。利用滑动窗口机制可以很方便的在TCP连接上实现对发送方的流量控制。TCP的窗口单位是字节，不是报文段，发送方的发送窗口不能超过接收方给出的接收窗口的数值。


发送方通过维持一个发送滑动窗口来确保不会发生由于发送方报文发送太快接收方无法及时处理的问题。此时发送方的报文分为四类， 第一类是已经发送并且得到接收方确认的报文，第二类是已经发送但是没有接收到确认的报文，第三类是发送方还没发送，但是滑动窗口还足够巨大，允许被发送的报文， 第四类是还没发送并且窗口已经被占满，不允许发送的报文。 一般来说，滑动窗口的最左端都是介于第一类跟第二类报文的分界线，最右端是第三类跟第四类报文的分界线。



- 滑动窗口的流量控制可以包括那么几个协议：
  - a、停等协议。 滑动窗口的大小为1， 每个发送报文都要等到被确认以后，发送方才继续发送下一个报文。
  - b、后退n步协议。 该协议下，滑动窗口大于1，发送方可以一直发送报文，但是当接收到接收方发送的三个连续的同一序列号的ACK报文时，说明该序列号的报文是已经丢失的，那么此时重发该丢失报文以及该报文以后的报文（包括那些已经发送的）。
  - c、选择重传。在后退n步协议当中，如果某个报文丢失，那么将要重新发送这个丢失报文及以后的所有报文（包括已经发送的），选择重传协议不用做此要求，只要重新发送丢失的报文即可。
#### TCP 为什么可靠
因为TCP丢包之后，会做数据校验，然后重传数据。接收方每收到一个数据包就发送一次确认，发送方设置定时器，如果定时没有收到接收确认就重传。有两种，一种是丢多少重传多少，一种是从丢弃的地方重新传送数据，一般是后面一种。并且针对传输的流量，TCP会做限制，尽量保证网络的最大传输效率，保证接受方稳定接受。
### 网络 5层 osi 7层
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211109191738.png)
### UDP实现可靠性传输
1. 简介
- UDP不属于连接型协议，因而具有资源消耗小，处理速度快的特点，所以通常音频、视频和普通数据在传送时使用UDP较多，因为他们及时偶尔丢失一两个数据，也不会对接受结果产生太大影响。

- 传输层无法确保数据的可靠传输，只能通过应用层来实现。实现的方式可以参考TCP可靠性传输的方式，只是实现不在传输层，实现转移到应用层。

- 实现确定机制、重传机制、窗口确认机制。

- 如果你不利用Linux协议栈以及上层socket机制，自己通过抓包和发包的方式去实现可靠性传输，那么必须通过如下功能：
  - 发送：包的分片、包确定、包的重发
  - 接受：包的调序、包的序号确定
- 目前有如下开源程序利用UDO实现了可靠的数据传输，分别是RUDP、RTP、UDT
2. RUDP
RUDP提供一组数据服务质量增强机制，如拥塞控制的改进、重发机制及淡化服务器算法等，从而在包丢失和网络拥塞的情况下，RTP客户机（实时位置）面前呈现的就是一个高质量的RTP流。在不干扰协议的实时特性的同时，可靠UDP的拥塞控制机制允许TCP方式下的流控制行为。
3. RTP
实时传输协议（RTP）为数据提供了具有实时特征的端到端传送服务，如在组播或单播网络服务下的交互式视频音频或模拟数据。应用程序通常在UDP上运行RTP以便使用其多路节点和校验服务；这两种协议都提供了传输层协议的功能。但是RTP可以与其他适合的底层网络或传输协议一起使用。如果底层网络提供组播方式，那么RTP可以使用该组播表传输数据到多个目的地。
RTP本身没有提供按时发送机制或其他服务质量（QoS）保证，它依赖于底层服务区实现这一过程。RTP并不保证传送或防止无序传送，也不确定底层网络的可靠性。RTP实行有序传送，RTP中的序列号允许接收方重组发送发的包序列，同时序列号也能用于决定适当的包位置，例如：在视频解码中，就不需要顺序解码。
4. UDT
基于UDP的数据传输协议（UDT）是一种互联网数据传输协议。UDT的主要目的是支持高速广域网上的海量数据传输，而互联网上的标准数据传输协议TCP在高带宽长距离网络上性能很差。顾名思义，UDT建于UDP之上，并引入新的拥塞控制和数据可靠性控制机制。UDT是面向连接的双向的应用层协议。它同时支持可靠的数据流传输和部分可靠的数据报传输。由于UDT完全在UDP上实现，它也可以应用在除了高速数据传输之外的其他应用领域，例如点到点技术（P2P），防火墙穿透，多媒体数据传输等等。
- UDT应用层协议
  - UDT并不是在瓶颈带宽相对较小的和大量多元短文档流的情况下用来替代TCP的。
  - UDT主要作为TCP的朋友，和TCP并存，UDT分配的带宽不应该超过根据MAX-MIN规则的最大最小公平共享原则（备注：最大最小规则允许UDT在高BDP连接下分配TCP不能使用的可用带宽）。
  - UDT是双工的，每个UDT实体有两个部分：发送和接受。
    - 发送者根据流量控制和速率控制来发送（和重传）应用程式数据。
    - 接受者根据数据包和控制包，并根据接收到的包发送控制包。发送和接受程式共享同一个UDP端口来发送和接收。
    - 接受者也负责触发和处理任何的控制事件，包括拥塞控制和可靠性控制和他们的相对机制，例如RTT估计、带宽估计、应答和重传。
  - UDT总是试着将应用层数据打包成固定的大小，除非数据不够这么大。和TCP相似的是，这个固定的包大小叫做MSS（最大包大小）。由于期望UDT用来传输大块数据流，我们假定只能很小的一部分不规则的大小的包在UDT session中。MSS能够通过应用程式来安装，MTU是其最优值。
  - UDT拥塞控制算法将速率控制在窗口（流量控制）合并起来，前者调整包的发送周期，后者限制最大的位被应答的包。在速率控制中使用的参数通过带宽估计技术来更新，它继承来之基于接受的包方法。同时，速率控制周期是估计RTT的常量，流控制参数参考与对方的数据到达速度，另外接收端释放的缓冲区的大小。
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
### websocket如何建立连接，手写websocket建立过程？？？？？？？？？？
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
1. **JSONP**
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
#### CORS跨域请求[简单请求与复杂请求]
CORS（cross-origin resource sharing），跨源资源共享（一般俗称『跨域请求』）。
- 简单请求和预检请求的区分，会看到有很多的条件：
  - 简单请求的 HTTP 方法只能是 GET、HEAD 或 POST
  - 简单请求的 HTTP 头只能是 Accept/Accept-Language/Conent-Language/Content-Type 等
  - 简单请求的 Content-Type 头只能是 text/plain、multipart/form-data 或 application/x-www-form-urlencoded
  - 任何一个不满足上述要求的请求，即被认为是复杂请求。一个复杂请求不仅有：包含通信内容的请求，同时也包含预请求。

- 简单请求
  - 部分响应头
    - Access-Control-Allow-Origin（必含）- 不可省略，否则请求按失败处理。该项控制数据的可见范围，如果希望数据对任何人都可见，可以填写"*"。
    - Access-Control-Allow-Credentials（可选） – 该项标志着请求当中是否包含cookies信息，只有一个可选值：true（必为小写）。如果不包含cookies，请略去该项，而不是填写false。这一项与XmlHttpRequest2对象当中的withCredentials属性应保持一致，即withCredentials为true时该项也为true；withCredentials为false时，省略该项不写。反之则导致请求失败。
    - Cache-Control
    - Content-Language
    - Content-Type
    - Expires
    - Last-Modified
- 复杂请求
  - 比如说你需要发送PUT、DELETE等HTTP动作，或者发送Content-Type: application/json的内容。
  - 复杂请求表面上看起来和简单请求使用上差不多，但实际上浏览器发送了不止一个请求。其中最先发送的是一种"预请求"，此时作为服务端，也需要返回"预回应"作为响应。预请求实际上是对服务端的一种权限请求，只有当预请求成功返回，实际请求才开始执行。
  - 响应头
    - Access-Control-Allow-Origin（必含） – 和简单请求一样的，必须包含一个域。
    - Access-Control-Allow-Methods（必含） – 这是对预请求当中Access-Control-Request-Method的回复，这一回复将是一个以逗号分隔的列表。尽管客户端或许只请求某一方法，但服务端仍然可以返回所有允许的方法，以便客户端将其缓存。
    - Access-Control-Allow-Headers（当预请求中包含Access-Control-Request-Headers时必须包含） – 这是对预请求当中Access-Control-Request-Headers的回复，和上面一样是以逗号分隔的列表，可以返回所有支持的头部。这里在实际使用中有遇到，所有支持的头部一时可能不能完全写出来，而又不想在这一层做过多的判断，没关系，事实上通过request的header可以直接取到Access-Control-Request-Headers，直接把对应的value设置到Access-Control-Allow-Headers即可。
    - Access-Control-Allow-Credentials（可选） – 和简单请求当中作用相同。
    - Access-Control-Max-Age（可选） – 以秒为单位的缓存时间。预请求的的发送并非免费午餐，允许时应当尽可能缓存。
  - 一旦预回应如期而至，所请求的权限也都已满足，则实际请求开始发送
#### 使用Access-Control-Allow-Origin为什么可以解决跨域问题?？？？？？？？
#### 使用access-control-allow-origin解决跨域问题的流程是怎样的?？？？？？？
### 什么叫同源？浏览器为什么要设置同源？同源策略都可以阻挡哪些恶意代码？
- 什么叫同源
    - 两个页面地址中的协议，域名，端口号一致，则表示同源
- 为什么浏览器要使用同源策略
    - 设置同源策略的主要目的是为了安全，如果没有同源限制，在浏览器中的cookie等其他数据可以任意读取，不同域下的DOM任意操作，ajax任意请求其他网站的数据，包括隐私数据。
- 同源策略都可以阻挡哪些恶意代码
    - 无法用js读取非同源的Cookie、LocalStorage 和 IndexDB 无法读取。
    - 无法用js获取非同源的DOM 。
    - 无法用js发送非同源的AJAX请求 。
### 怎么实现接口防刷？
1. ①通过前端按钮屏蔽（不安全） 
2. ②前端每次请求都带上token与后端进行校验，检验通过后，后端在缓存中更改token值并且同请求数据一起返回给前端
3. ③记录指定时间内请求过多的用户的IP，超过一定次数后直接拉入缓存黑名单，不响应其数据
### web安全的问题
- SQL注入
  - SQL注入（英语：SQL injection），也称SQL注入或SQL注码，是发生于应用程序与数据库层的安全漏洞。
  - 简而言之，是在输入的字符串之中注入SQL指令，在设计不良的程序当中忽略了字符检查，那么这些注入进去的恶意指令就会被数据库服务器误认为是正常的SQL指令而运行，因此遭到破坏或是入侵。 
      - SQL命令可查询、插入、更新、删除等，命令的串接。而以分号字符为不同命令的区别。（原本的作用是用于SubQuery或作为查询、插入、更新、删除……等的条件式）
      - SQL命令对于传入的字符串参数是用单引号字符所包起来。（但连续2个单引号字符，在SQL数据库中，则视为字符串中的一个单引号字符）
      - SQL命令中，可以注入注解（连续2个减号字符 -- 后的文字为注解，或“/”与“/”所包起来的文字为注解）
      - 因此，如果在组合SQL的命令字符串时，未针对单引号字符作转义处理的话，将导致该字符变量在填入命令字符串时，被恶意窜改原本的SQL语法的作用。
    -  SQL注入的防范措施
        -  在组合SQL字符串时，先针对所传入的参数加入其他字符（将单引号字符前加上转义字符）
        -  使用SQL防注入系统。
        -  增强WAF的防御力。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211117074659.png)



- 点击劫持
  - click-jacking，也被称为UI-覆盖攻击。
  - 攻击方式就是在某些操作的按钮上加一层透明的iframe。点击一下， 就入坑了。
  - 如何防御点击劫持
    - 使用 HTTP 头防御
      - 通过配置 nginx 发送 X-Frame-Options 响应头。这个 HTTP 响应头 就是为了防御用 iframe 嵌套的点击劫持攻击。这样浏览器就会阻止嵌入网页的渲染。
    - 使用 Javascript 防御
      - 判断顶层视口的域名是不是和本页面的域名一致，如果不一致就让恶意网页自动跳转到我方的网页。
```js
if (top.location.hostname !== self.location.hostname) {
  alert("您正在访问不安全的页面，即将跳转到安全页面！")
  top.location.href = self.location.href;
}
```



- 中间人攻击
  - 中间人攻击（Man-in-the-Middle Attack, MITM）是一种由来已久的网络入侵手段.
  - 如 SMB 会话劫持、DNS 欺骗等攻击都是典型的MITM攻击。
  - 简而言之，所谓的MITM攻击就是通过拦截正常的网络通信数据，并进行数据篡改和嗅探来达到攻击的目的，而通信的双方却毫不知情。
  - 如何防御中间人攻击
    - 确保当前你所访问的网站使用了HTTPS
    - 如果你是一个网站管理员，你应当执行HSTS协议
    - 不要在公共Wi-Fi上发送敏感数据
    - 如果你的网站使用了SSL，确保你禁用了不安全的SSL/TLS协议。
    - 不要点击恶意链接或电子邮件。

- 钓鱼网站
- XSS
- CSRF
### XSS 攻击和 CSRF 攻击各自的原理是什么？两者又有什么区别？以及如何防范？
1、XSS 攻击
- 概念
  - XSS（Cross Site Scripting）：跨域脚本攻击。
    -原理
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
### DOS、 DDOS攻击原理和防范？
- DOS
    - 最基本的DoS攻击就是利用合理的客户端请求来占用过多的服务器资源，从而使合法用户无法得到服务器的响应。
    - 传统的DoS攻击一般是采用一对一的方式，当攻击目标的CPU速度、内存或者网络带宽等各项性能指标不高的情况下，它的效果是明显的。
    - 但随着计算机与网络技术的发展，计算机的处理能力显著增加，内存不断增大，同时也出现了千兆级别的网络，这使得DoS攻击逐渐失去了效果。
- DDOS
    - DDoS(Distributed Denial of Service)即分布式拒绝服务攻击，是目前最为强大、最难以防御的攻击方式之一。
    - DDoS攻击手段迁在传统的DoS攻击基础之上产生的一类攻击方式，传统的DoS攻击一般是采用一对一的方式，当攻击目标的CPU速度、内存或者网络带宽等各项性能指标不高的情况下，它的效果是明显的。
    - DDoS的原理就非常简单了，它指的是攻击者借助公共网络，将数量庞大的计算机设备联合起来作为攻击平台，对一个或多个目标发动攻击，从而达到瘫痪目标主机的目的。
- DoS或DDoS攻击可以具体分成两种形式：带宽消耗型以及资源消耗型。它们都是透过大量合法或伪造的请求占用大量网络以及器材资源，以达到瘫痪网络以及系统的目的。
    - 带宽消耗型攻击
        - DDoS带宽消耗攻击可以分为两个不同的层次；洪泛攻击或放大攻击。
            - 洪泛攻击的特点是利用僵尸程序发送大量流量至受损的受害者系统，目的在于堵塞其宽带。
            - 放大攻击与其类似，是通过恶意放大流量限制受害者系统的宽带；其特点是利用僵尸程序通过伪造的源IP(即攻击目标IP)向某些存在漏洞的服务器发送请求，服务器在处理请求后向伪造的源IP发送应答，由于这些服务的特殊性导致应答包比请求包更长，因此使用少量的宽带就能使服务器发送大量的应答到目标主机上。
            - UDP洪水攻击（User Datagram Protocol floods）
                - UDP（用户数据报协议）是一种无连接协议，当数据包通过UDP发送时，所有的数据包在发送和接收时不需要进行握手验证。当大量UDP数据包发送给受害系统时，可能会导致带宽饱和从而使得合法服务无法请求访问受害系统。遭受DDoS UDP洪泛攻击时，UDP数据包的目的端口可能是随机或指定的端口，受害系统将尝试处理接收到的数据包以确定本地运行的服务。如果没有应用程序在目标端口运行，受害系统将对源IP发出ICMP数据包，表明“目标端口不可达”。某些情况下，攻击者会伪造源IP地址以隐藏自己，这样从受害系统返回的数据包不会直接回到僵尸主机，而是被发送到被伪造地址的主机。有时UDP洪泛攻击也可能影响受害系统周围的网络连接，这可能导致受害系统附近的正常系统遇到问题。然而，这取决于网络体系结构和线速
            - ICMP洪水攻击（ICMP floods）
                - ICMP（互联网控制消息协议）洪水攻击是通过向未良好设置的路由器发送广播信息占用系统资源的做法。
            - 死亡之Ping（ping of death）
                - 死亡之Ping是产生超过IP协议能容忍的数据包数，若系统没有检查机制，就会宕机。
            - 泪滴攻击
                - 每个资料要发送前，该数据包都会经过切割，每个小切割都会记录位移的信息，以便重组，但此攻击模式就是捏造位移信息，造成重组时发生问题，造成错误。
    - 资源消耗型攻击
        - 协议分析攻击（SYN flood，SYN洪水）
            - 传送控制协议（TCP）同步（SYN）攻击。TCP进程通常包括发送者和接受者之间在数据包发送之前创建的完全信号交换。启动系统发送一个SYN请求，接收系统返回一个带有自己SYN请求的ACK（确认）作为交换。发送系统接着传回自己的ACK来授权两个系统间的通讯。若接收系统发送了SYN数据包，但没接收到ACK，接受者经过一段时间后会再次发送新的SYN数据包。接受系统中的处理器和内存资源将存储该TCP SYN的请求直至超时。DDoS TCP SYN攻击也被称为“资源耗尽攻击”，它利用TCP功能将僵尸程序伪装的TCP SYN请求发送给受害服务器，从而饱和服务处理器资源并阻止其有效地处理合法请求。它专门利用发送系统和接收系统间的三向信号交换来发送大量欺骗性的原IP地址TCP SYN数据包给受害系统。最终，大量TCP SYN攻击请求反复发送，导致受害系统内存和处理器资源耗尽，致使其无法处理任何合法用户的请求。
        - LAND攻击
            - 这种攻击方式与SYN floods类似，不过在LAND攻击包中的原地址和目标地址都是攻击对象的IP。这种攻击会导致被攻击的机器死循环，最终耗尽资源而死机。
        - CC攻击（Distributed HTTP flood，分布式HTTP洪水攻击）
            - CC攻击使用代理服务器向受害服务器发送大量貌似合法的请求（通常为HTTP GET)。攻击者创造性地使用代理，利用广泛可用的免费代理服务器发动DDoS攻击。许多免费代理服务器支持匿名，这使追踪变得非常困难。2004年，一位匿名为KiKi的中国黑客开发了一种用于发送HTTP请求的DDoS攻击工具以攻击名为“Collapsar”的NSFOCUS防火墙，因此该黑客工具被称为“Challenge Collapsar”（挑战黑洞，简称CC），这类攻击被称作“CC攻击”。
        - 僵尸网络攻击
            - 僵尸网络是指大量被命令与控制（C&C）服务器所控制的互联网主机群。攻击者传播恶意软件并组成自己的僵尸网络。僵尸网络难于检测的原因是，僵尸主机只有在执行特定指令时才会与服务器进行通讯，使得它们隐蔽且不易察觉。僵尸网络根据网络通讯协议的不同分为IRC、HTTP或P2P类等。
        - 应用程序级洪水攻击（Application level floods）
            - 与前面叙说的攻击方式不同，应用程序级洪水攻击主要是针对应用软件层的，也就是高于OSI的。它同样是以大量消耗系统资源为目的，通过向IIS这样的网络服务程序提出无节制的资源申请来破坏正常的网络服务。
-  DoS攻击的防范措施
    -  拒绝服务攻击的防御方式通常为入侵检测，流量过滤和多重验证，旨在堵塞网络带宽的流量将被过滤，而正常的流量可正常通过。
    -  防火墙
        -  防火墙可以设置规则，例如允许或拒绝特定通讯协议，端口或IP地址。当攻击从少数不正常的IP地址发出时，可以简单的使用拒绝规则阻止一切从攻击源IP发出的通信。复杂攻击难以用简单规则来阻止，例如80端口（网页服务）遭受攻击时不可能拒绝端口所有的通信，因为其同时会阻止合法流量。此外，防火墙可能处于网络架构中过后的位置，路由器可能在恶意流量达到防火墙前即被攻击影响。然而，防火墙能有效地防止用户从启动防火墙后的计算机发起攻击。
    - 交换机
        - 大多数交换机有一定的速度限制和访问控制能力。有些交换机提供自动速度限制、流量整形、后期连接、深度包检测和假IP过滤功能，可以检测并过滤拒绝服务攻击。例如SYN洪水攻击可以通过后期连接加以预防。基于内容的攻击可以利用深度包检测阻止。
    - 路由器
        - 和交换机类似，路由器也有一定的速度限制和访问控制能力，而大多数路由器很容易受到攻击影响。
    - 黑洞引导
        - 黑洞引导指将所有受攻击计算机的通信全部发送至一个“黑洞”（空接口或不存在的计算机地址）或者有足够能力处理洪流的网络设备商，以避免网络受到较大影响。
    - 流量清洗
        - 当流量被送到DDoS防护清洗中心时，通过采用抗DDoS软件处理，将正常流量和恶意流量区分开。正常的流量则回注回客户网站。这样一来可站点能够保持正常的运作，处理真实用户访问网站带来的合法流量。
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
#### CDN缓存、加速
- 缓存加速
    - 通常这个是指一个产品或系统，通过观察用户的请求来提取热门资源，然后将热门资源进行下载并缓存到本地，以便后续的用户能加速获取服务信息。
- CDN缓存加速
    - 总体来说CDN是通过缓存的方式，将用户访问的数据缓存于各个节点上，以便于用户在访问相同数据时，能较快的获取数据。
    - CDN加速时还有哪些优势
        - 减轻源站的负担
            - 通过内容分发技术，将源站数据缓存在各个节点上，可以减少网站带宽的消耗，也就是缓解了服务器的压力同时也可以让用户更快的获取数据。
        - 提高网站安全性
            - 随着互联网威胁愈发严峻，网站防御，除了使用高防服务器以外，科学使用高防CDN，除了能提高用户访问速度以外，还能有效的对网站进行防御保护。
        - 加速访问
            - 通过对用户分布区域进行分析，选择适合的节点。可以有效的改善不同地区用户在访问时的访问延迟问题。
### 缓存
#### 缓存有哪些好处？
- 缓解服务器压力，不用每次都去请求某些数据了。
- 提升性能，打开本地资源肯定会比请求服务器来的快。
- 减少带宽消耗，当我们使用缓存时，只会产生很小的网络消耗
#### Web缓存种类
数据库缓存，CDN缓存，代理服务器缓存，浏览器缓存。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013135501.png)
所谓浏览器缓存其实就是指在本地使用的计算机中开辟一个内存区，同时也开辟一个硬盘区作为数据传输的缓冲区，然后用这个缓冲区来暂时保存用户以前访问过的信息。
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

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013140918.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924072012.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924074826.png)

强缓存和协商缓存最大也是最根本的区别是：强缓存命中的话不会发请求到服务器（比如chrome中的200 from memory cache），协商缓存一定会发请求到服务器，通过资源的请求首部字段验证资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的实体，而是通知客户端可以从缓存中加载这个资源（304 not modified）

#### 缓存位置

查找浏览器缓存时会按顺序查找: Service Worker-->Memory Cache-->Disk Cache-->Push Cache。
- Service Worker
  - 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。
  - 使用 Service Worker的话，传输协议必须为 HTTPS。
  - 因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。
  - Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。

- Memory Cache
  - 内存中的缓存，主要包含的是当前中页面中已经抓取到的资源，例如页面上已经下载的样式、脚本、图片等。
  - 读取内存中的数据肯定比磁盘快，内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。
  - 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。

- Disk Cache
  - 存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。
  - 在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。
  - 它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。
  - 并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。绝大部分的缓存都来自 Disk Cache。

- Push Cache
  - Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。
  - 它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。
#### 强缓存
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104153519.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013140918.png)

- 强缓存命中返回 200 200（from cache）

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

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104153603.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013142135.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211013142155.png)
- 协商缓存命中返回 304
- 请求头last-modified的日期与响应头的last-modified一致
- 请求头if-none-match的hash与响应头的etag一致
  - 这两种情况会返回Status Code: 304
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211104153626.png)
    当浏览器的强缓存失效的时候或者请求头中设置了不走强缓存，并且在请求头中设置了If-Modified-Since 或者 If-None-Match 的时候，会将这两个属性值到服务端去验证是否命中协商缓存，如果命中了协商缓存，会返回 304 状态，加载浏览器缓存，并且响应头会设置 Last-Modified 或者 ETag 属性。
- ETag/If-None-Match
  - ETag/If-None-Match 的值是一串 hash 码，代表的是一个资源的标识符，当服务端的文件变化的时候，它的 hash码会随之改变，通过请求头中的 If-None-Match 和当前文件的 hash 值进行比较，如果相等则表示命中协商缓存。ETag 又有强弱校验之分，如果 hash 码是以 "W/" 开头的一串字符串，说明此时协商缓存的校验是弱校验的，只有服务器上的文件差异（根据 ETag 计算方式来决定）达到能够触发 hash 值后缀变化的时候，才会真正地请求资源，否则返回 304 并加载浏览器缓存。
  - If-Modified-Since是一个请求首部字段，并且只能用在GET或者HEAD请求中。
  - ETag优先级比Last-Modified高，同时存在时会以ETag为准。
  - 发现有If-None-Match，则比较 If-None-Match 的 Etag 值，忽略If-Modified-Since的比较。
    ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210924073615.png)
- Last-Modified/If-Modified-Since
  - Last-Modified/If-Modified-Since 的值代表的是文件的最后修改时间，第一次请求服务端会把资源的最后修改时间放到 Last-Modified 响应头中，第二次发起请求的时候，请求头会带上上一次响应头中的 Last-Modified 的时间，并放到 If-Modified-Since 请求头属性中，服务端根据文件最后一次修改时间和 If-Modified-Since 的值进行比较，如果相等，返回 304 ，并加载浏览器缓存。
- ETag/If-None-Match 的出现主要解决了 Last-Modified/If-Modified-Since 所解决不了的问题：
  - 某些情况下服务器无法获取资源的最后修改时间
  - 如果文件的修改频率在秒级以下，Last-Modified/If-Modified-Since 会错误地返回 304。Last-Modified只能精确到秒
  - 如果文件被修改了，但是内容没有任何变化的时候，Last-Modified/If-Modified-Since 会错误地返回 304。使用ETag可以正确缓存
不管用 Expires 还是 Cache-Control，他们都只能够控制缓存是否过期，但是在缓存过期之前，浏览器是无法得知服务器上的资源是否变化的。只有当缓存过期后，浏览器才会发请求询问服务器。
- 我们不让 html 文件缓存，每次访问 html 都去请求服务器。所以浏览器每次都能拿到最新的html资源。
  - html 中 a.js 的版本号。
  - 以版本号来区分，也可以以 MD5hash 值来区分

```js
<script src="http://test.com/a.js?version=0.0.2"></script>


<script src="http://test.com/a.【hash值】.js"></script>
```

#### 缓存场景

对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略。

#### 刷新对于强缓存和协商缓存的影响

- 当ctrl+f5强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存。
- 当f5刷新网页时，跳过强缓存，但是会检查协商缓存。
- 浏览器地址栏中写入URL，回车 浏览器发现缓存中有这个文件了，不用继续请求了，直接去缓存拿。

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
- 四次挥手
  - 数据传输完毕后，双方都可释放连接。最开始的时候，客户端和服务器都是处于ESTABLISHED状态，假设客户端主动关闭，服务器被动关闭。
  - 第一次挥手：
    - 客户端发送一个FIN，用来关闭客户端到服务器的数据传送，也就是客户端告诉服务器：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，客户端依然会重发这些数据)，但是，此时客户端还可 以接受数据。FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。
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
      ```css
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
  - 让加载更快
    - 减少资源体积
      - 压缩代码： 可以通过压缩代码来减少资源体积，包括 js 文件、 css 文件和图片都可以进行压缩。同时服务器端 可以通过 gzip 算法来对资源进行压缩。
    - 减少请求次数
      - 合并代码： 比如说我们写了三四个文件，但通过打包可能就只剩下一个文件
      - SSR服务器端渲染：
        - 服务端把网页和数据一起加载，一起渲染。
        - 早期的 JSP 、ASP 、PHP，现在的 vue SSR 、React SSR
      - 缓存
    - 使用更快的网络
      - 通过 CDN
  - 让渲染更快
    - html、css、js和图片层面
      - css 放在 head ， JS 放在 body 最下面；
      - 懒加载（图片懒加载，上滑加载更多）。
    - 从DOM层面
      - 对 DOM 查询进行缓存；
      - 从频繁进行 DOM 操作，变为合并到一起进行 DOM 结构插入；
    - 防抖 debounce 和 节流 throttle
### 提高页面渲染效率
基于上面介绍的浏览器渲染原理，DOM 和 CSSOM 结构构建顺序，初始化可以对页面渲染做些优化，提升页面性能。
- JS优化： <script> 标签加上 defer属性 和 async属性 用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。
  - asyncdefer属性： 用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
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
```

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

5. DNS解析耗时: domainLookupEnd - domainLookupStart

6. TCP连接耗时: connectEnd - connectStart

7. SSL安全连接耗时: connectEnd - secureConnectionStart

8. 网络请求耗时(TTFB): responseStart - requestStart

9. 数据传输耗时: responseEnd - responseStart

10. DOM解析耗时: domInteractive - responseEnd

11. 资源加载耗时: loadEventStart - domContentLoadedEventEnd

12. 首包时间: responseStart - domainLookupStart

13. 首次渲染时间 / 白屏时间: responseEnd - fetchStart

14. 首次可交互时间: domInteractive - fetchStart

15. DOM Ready时间: domContentLoadEventEnd - fetchStart

16. 页面完全加载时间: loadEventStart - fetchStart
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
### PV、UV、IP分别是什么意思？

- PV（Page View）访问量, 即页面浏览量或点击量，衡量网站用户访问的网页数量；在一定统计周期内用户每打开或刷新一个页面就记录1次，多次打开或刷新同一页面则浏览量累计。

- UV（Unique Visitor）独立访客，统计1天内访问某站点的用户数(以cookie为依据);访问网站的一台电脑客户端为一个访客。可以理解成访问某网站的电脑的数量。网站判断来访电脑的身份是通过来访电脑的cookies实现的。如果更换了IP后但不清除cookies，再访问相同网站，该网站的统计中UV数是不变的。如果用户不保存cookies访问、清除了cookies或者更换设备访问，计数会加1。00:00-24:00内相同的客户端多次访问只计为1个访客。

- IP（Internet Protocol）独立IP数，是指1天内多少个独立的IP浏览了页面，即统计不同的IP浏览用户数量。同一IP不管访问了几个页面，独立IP数均为1；不同的IP浏览页面，计数会加1。 IP是基于用户广域网IP地址来区分不同的访问者的，所以，多个用户（多个局域网IP）在同一个路由器（同一个广域网IP）内上网，可能被记录为一个独立IP访问者。如果用户不断更换IP，则有可能被多次统计。
## Vue
### SSR
#### 什么是SSR
SSR是Server Side Render简称，叫服务端渲染
#### SSR原理
在客户端请求服务器的时候，服务器到数据库中获取到相关的数据，并且在服务器内部将Vue组件渲染成HTML，并且将数据、HTML一并返回给客户端，这个在服务器将数据和组件转化为HTML的过程，叫做服务端渲染SSR


而当客户端拿到服务器渲染的HTML和数据之后，由于数据已经有了，客户端不需要再一次请求数据，而只需要将数据同步到组件或者Vuex内部即可。除了数据以外，HTML也结构已经有了，客户端在渲染组件的时候，也只需要将HTML的DOM节点映射到Virtual DOM即可，不需要重新创建DOM节点，这个将数据和HTML同步的过程，又叫做客户端激活
#### 使用SSR的好处
- 好处主要有以下两点：
    - 有利于SEO
        - 其实就是有利于爬虫来爬你的页面，因为部分页面爬虫是不支持执行JavaScript的，这种不支持执行JavaScript的爬虫抓取到的非SSR的页面会是一个空的HTML页面，而有了SSR以后，这些爬虫就可以获取到完整的HTML结构的数据，进而收录到搜索引擎中。
    - 白屏时间更短
        - 相对于客户端渲染，服务端渲染在浏览器请求URL之后已经得到了一个带有数据的HTML文本，浏览器只需要解析HTML，直接构建DOM树就可以。而客户端渲染，需要先得到一个空的HTML页面，这个时候页面已经进入白屏，之后还需要经过加载并执行 JavaScript、请求后端服务器获取数据、JavaScript 渲染页面几个过程才可以看到最后的页面。特别是在复杂应用中，由于需要加载 JavaScript 脚本，越是复杂的应用，需要加载的 JavaScript 脚本就越多、越大，这会导致应用的首屏加载时间非常长，进而降低了体验感。
#### 使用SSR的缺点
- 并不是所有的WEB应用都必须使用SSR，这需要开发者自己来权衡，因为服务端渲染会带来以下问题：
    - 代码复杂度增加。为了实现服务端渲染，应用代码中需要兼容服务端和客户端两种运行情况，而一部分依赖的外部扩展库却只能在客户端运行，需要对其进行特殊处理，才能在服务器渲染应用程序中运行。
    - 需要更多的服务器负载均衡。由于服务器增加了渲染HTML的需求，使得原本只需要输出静态资源文件的nodejs服务，新增了数据获取的IO和渲染HTML的CPU占用，如果流量突然暴增，有可能导致服务器down机，因此需要使用响应的缓存策略和准备相应的服务器负载。
    - 涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。
#### 同构
- 同构的定义
    - 在服务端渲染中，有两种页面渲染的方式：
        - 前端服务器通过请求后端服务器获取数据并组装HTML返回给浏览器，浏览器直接解析HTML后渲染页面
        - 浏览器在交互过程中，请求新的数据并动态更新渲染页面
        - 这两种渲染方式有一个不同点就是，一个是在服务端中组装html的，一个是在客户端中组装html的，运行环境是不一样的。所谓同构，就是让一份代码，既可以在服务端中执行，也可以在客户端中执行，并且执行的效果都是一样的，都是完成这个html的组装，正确的显示页面。也就是说，一份代码，既可以客户端渲染，也可以服务端渲染。

- 同构的条件
    - 为了实现同构，我们需要满足什么条件呢？首先，我们思考一个应用中一个页面的组成，假如我们使用的是Vue.js，当我们打开一个页面时，首先是打开这个页面的URL，这个URL，可以通过应用的路由匹配，找到具体的页面，不同的页面有不同的视图，那么，视图是什么？从应用的角度来看，视图 = 模板 + 数据，那么在 Vue.js 中， 模板可以理解成组件，数据可以理解为数据模型，即响应式数据。所以，对于同构应用来说，我们必须实现客户端与服务端的路由、模型组件、数据模型的共享。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113165452.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113164555.png)

### spa是什么？好处呢？坏处呢？
#### SPA
SPA的全称(single-page-application)是单页面应用，意思就是说，应用的html，css，js只在web应用初始化的时候加载，加载完毕之后，不会重新渲染整个页面了。

SPA是怎么实现的呢？为什么不需要重新加载页面就能达到页面的重新渲染呢？是利用了 路由机制 使得html内容变换，达到不需要加载页面也可以达到重新渲染的目的。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113165654.png)

#### SPA优缺点
- 单页面的优点：
    - 用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小
    - 前后端分离
    - 页面效果会比较炫酷（比如切换页面内容时的专场动画）
- 单页面缺点：
    - 不利于seo
    - 导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）
    - 初次加载时耗时多
    - 页面复杂度提高很多
### 认为 node.js，vue，react 各种出现的原因和各自优缺点是啥？？？？？？？
### Vue框架有哪些有点和缺点?
优点：渐进式，组件化，轻量级，虚拟dom，响应式，单页面路由，数据与视图分开。
缺点：单页面不利于seo，不支持IE8以下，首屏加载时间长。
### React和Vue的区别？
- 相同点：
    - 1.都使用了虚拟dom
    - 2.组件化开发
    - 3.都是单向数据流(父子组件之间，不建议子修改父传下来的数据)
    - 4.都支持服务端渲染
- 不同点：
    - 1.React的JSX，Vue的template
    - 2.数据变化，React手动(setState)，Vue自动(初始化已响应式处理，Object.defineProperty，Proxy)
    - 3.React单向绑定，Vue双向绑定
    - 4.React的Redux，Vue的Vuex
### v-model原理？？？？？？？？
### Vue设置自定义指令？？？？？？？ 全栈然叔的课程是有的，介绍的很详细
- Vue指令
    - Vue的指令以v-开头，作用在HTML元素上，将指令绑定在元素上，给绑定的元素添加一些特殊行为。
    - `<h1 v-if="yes">Yes</h1>`
- Vue2.0自定义指令
    - `Vue.directive(id, definition)`
    - 传入的两个参数，id是指指令ID，definition是指定义对象。其中，定义对象可以提供一些钩子函数。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115073324.png)
```js
Vue.directive('my-directive', {
  bind: function(){
    //做绑定的准备工作
    //比如添加事件监听器，或是其他只需要执行一次的复杂操作
  },
  inserted: function(){
    //...
  },
  update: function(){
    //根据获得的新值执行对应的更新
    //对于初始值也会调用一次
  },
  componentUpdated: function(){
    //...
  },
  unbind: function(){
    //做清理操作
    //比如移除bind时绑定的事件监听器
  }
})
```
### Vue手写渲染函数？？？？？？？全栈然叔的课程是有的，介绍的很详细
### Vue 组件修饰符？？？？？？？
### Vue组件间传值的方法有哪些?
1. props、$emit()
```js
export default {
    name: 'Child',
    props: {
        // 父组件通过 <Child @change="changeName" :name="parentName" />
        name: {
            type: String, //类型
            default: '', //默认值
            required: true,//是否必填
            validator: function (value) { 
                return value > 10 
            }
        }
    },
    methods: {
        changeName () {
            this.$emit('change', 需要传递的参数)
        }
    }
}
```
2. vuex 全局状态管理
3. provide、inject传值
provice/inject传值的方式，适合所有的向下传值类型，层级可以很深，多用于组件开发。业务开发中很少用到。
```js
// A组件
// provide作为一个属性使用，和data，methods等统级，将要传递给子孙的属性放在里面
provide() {
    return {
      toSon: 'this is to my son'
    }
},



// B、C等子孙组件
// inject是一个对象
inject: {
    toSon: {
      default: '' // 设置接收属性的默认值
    }
 },
 
// inject也可以是一个数组
inject:['toSon']
```
4. attr、listeners传值
这两个属性都是绑在组件B上面的，组件B起到一个承上启下的作用。attr用于将A组件传递过来的属性，下传给C组件listeners用于将C组件发射的数据，上传给A组件inheritAttrs用于设置属性，当设置为false时候，dom上则不会出现属性。
```js
// A组件
<component-b
      :pagination="pagination" // 将属性传递给B和C
      v-on:propToComponentA="listenComponentC" // 监听c组件的事件
 />
 
 methods: {
     listenComponentC(data) {}
 }



// B组件
<component-c  v-bind="$attrs" v-on="$listeners"/>
inheritAttrs: false


// C组件
  inheritAttrs: false,
  created() {
   console.log(this.$attrs)
   //输出可以发现$attrs对象是A组件传递过来的属性
  },
  methods: {
    propToComponentA() {
      const data = {
        name: '古天乐'
      }
      // b组件，c组件都可以监听事件propToComponentA
      this.$emit('propToComponentA',data)
    }
  },
```
5. children、parent
- $children
    - 在父组件中，通过children可以获得所有无序的子组件组成的数组。 注意，当你想用children调用儿子组件中的方法或者参数时候，一定是需要等挂在完毕，在mounted中调用，或者是$nextTick
- $parent
    - 子组件可以通过this.$parent获取父组件实例。同样的，打点调用父组件的方法。
6. 中央事件总线 emit/on
- 创建全局响应式变量
    - 一般在main.js中定义一个全局变量，挂在到window下
```js
import Vue from 'vue'
window.eventBus = new Vue()
// 也可以挂载到vue原型链上,二选其一
Vue.prototype.$eventBus = new Vue();
```
- 事件挂载到eventBus
```js
// c组件发射了一名为dataFrom的事件，并挂载了数据this.dataA
this.$eventBus.$emit('dataFrom', this.dataA);
```
- 接收eventBus的事件
```js
// 因为$eventBus是全局，且响应式的，任何一个组件都可以进行接收
this.$eventBus.$on('dataFrom',  function (data) {
     // handle data code
});

// 如果想接收一次事件后移除，就用$once
this.$eventBus.$once('dataFrom',  function (data) {
     // handle data code
});

// 移除事件监听
$this.$eventBus.$off('dataFrom')
```
7. 使用$refs获取组件实例，进而获取数据

### Vue事件绑定原理
```js
// 原生事件绑定
<div @click="fn()"></div>

// 组件绑定
<my-component @click.native="fn" @click="fn1"></my- component>
```
原生事件绑定是通过addEventListener绑定给真实元素的。
组件事件绑定是通过Vue自定义的$on实现的。

- 原生事件是通过addEventListener来绑定的
- Vue是通过Vue实例的$on实现的，他是基于订阅观察者模式的，维护一个事件中心，在执行on的时候录入元素和事件，在执行emit的时候触发对应的元素上的事件
### Vue 的插件怎么注册 插件接口该怎么设计？？？？？？
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
由于在浏览器中操作 DOM 是很昂贵的。频繁的操作 DOM，会产生一定的性能问题。这就是虚拟 Dom 的产生原因。Vue2 的 Virtual DOM 借鉴了开源库 snabbdom 的实现。Virtual DOM 本质就是用一个原生的 JS 对象去描述一个 DOM 节点，是对真实 DOM 的一层抽象。

1. 什么是VDOM
   Virtual DOM 用JS模拟DOM结构用。JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树， 插到文档当中 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树 进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的 DOM 树上，视图就 更新了。Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。

建立一个与 dom 树对应的虚拟 dom 对象（ js 对象），以对象嵌套的方式来表示 dom 树，那么每次 dom 的更改就变成了 js 对象的属性的更改，这样一来就能查找 js 对象 的属性变化要比查询 dom 树的性能开销小。

2. 为何要用vdom？
   DOM操作非常非常“rang贵”，将DOM对比操作放在JS层，提高效率。
   DOM结构的对比，放在JS层来做

3. vdom核心函数有哪些
- 核心函数：
   - h('标签名', {...属性名...}, [...子元素...])
   - h('标签名', {...属性名...}, '.........')
   - patch(container, vnode)
   - patch(vnode, newVnode)
### 为什么要有虚拟DOM节点，直接操作DOM节点的问题在哪里？
虚拟DOM：对复杂的DOM结构提供便捷的工具，最小化的进行DOM操作。

虚拟DOM不会进行重绘和回流，在虚拟DOM中进行频繁修改，然后一次性比较并修改真实DOM中需要修改的部分，最后在真实DOM中进行重绘和回流，见着过多的DOM节点重绘和回流的损耗。

真实DOM的重绘和回流效率相当低，虚拟DOM有效地降低了大面积的对真实DOM进行重绘和回流，因为通过比较差异，只渲染局部。

### 虚拟 DOM 有什么优缺点
- 优点：
  - 保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
  - 无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
  - 跨平台： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。
- 缺点:
  - 无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。
  - 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。
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
- 响应式的主要原理是数据劫持和观察者模式
- vue2.0中，响应式实现的核心就是 ES5的Object.defineProperty(obj, prop, descriptor). 通过Object.defineProperty()劫持data和props各个属性的getter和setter，getter做依赖收集，setter派发更新。整体来说是一个 数据劫持 + 发布-订阅者模式。

vue 初始化时会用Object.defineProperty()给data中每一个属性添加getter和setter，同时创建dep和watcher进行依赖收集与派发更新，最后通过diff算法对比新老vnode差异，通过patch即时更新DOM

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
- 当 Vue.js 用 v-for 更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。重复的key会造成渲染错误。
- key的作用主要是为了让vue可以区分元素，更高效的对比更新虚拟DOM;
- Vue在patch过程中判断两个节点是否是相同节点,key是一个必要条件，是唯一标识，如不定义key，Vue只能认为比较的两个节点是同一个，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能;
- 从源码中可以知道，Vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key,它的值就是undefined，则可能永远认为这是两个相同的节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。
- key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度，更高效的更新虚拟DOM;
- 更准确 : 因为带 key 就不是就地复用了,在 sameNode 函数 a.key === b.key 对比中可以避免就地复用的情况。所以会更加准确,如果不加 key,会导致之前节点的状态被保留下来,会产生一系列的 bug。
- 更快速 : key 的唯一性可以被 Map 数据结构充分利用,相比于遍历查找的时间复杂度 O(n),Map 的时间复杂度仅仅为 O(1)
- key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
- vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。
  - 在vue的diff函数中，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。
- 为了在数据变化时强制更新组件，以避免“就地复用”带来的副作用。
  - 当 Vue.js 用 v-for 更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。重复的key会造成渲染错误。

```js
// 判断两个vnode的标签和key是否相同 如果相同 就可以认为是同一节点就地复用
function isSameVnode(oldVnode, newVnode) {
  return oldVnode.tag === newVnode.tag && oldVnode.key === newVnode.key;
}

// 根据key来创建老的儿子的index映射表  类似 {'a':0,'b':1} 代表key为'a'的节点在第一个位置 key为'b'的节点在第二个位置
function makeIndexByKey(children) {
  let map = {};
  children.forEach((item, index) => {
    map[item.key] = index;
  });
  return map;
}
// 生成的映射表
let map = makeIndexByKey(oldCh);
```

### Vue2.x双向绑定的实现原理
当一个Vue实例创建时，Vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher重新计算，从而致使它关联的组件得以更新。
### Vue2.xnextTick的实现
nextTick是Vue提供的一个全局API,是在下次DOM更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick，则可以在回调中获取更新后的DOM；

在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用 nextTick 来获取更新后的 DOM。 nextTick主要使用了宏任务和微任务。 根据执行环境分别尝试采用Promise、MutationObserver、setImmediate，如果以上都不行则采用setTimeout定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

```js
let callbacks = [];
let pending = false;
function flushCallbacks() {
  pending = false; //把标志还原为false
  // 依次执行回调
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}
let timerFunc; //定义异步方法  采用优雅降级
if (typeof Promise !== "undefined") {
  // 如果支持promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== "undefined") {
  // MutationObserver 主要是监听dom变化 也是一个异步方法
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== "undefined") {
  // 如果前面都不支持 判断setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 最后降级采用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb) {
  // 除了渲染watcher  还有用户自己手动调用的nextTick 一起被收集到数组
  callbacks.push(cb);
  if (!pending) {
    // 如果多次调用nextTick  只会执行一次异步 等异步队列清空之后再把标志变为false
    pending = true;
    timerFunc();
  }
}
```

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

- beforeCreate 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问
- created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el,如果非要想与 Dom 进行交互，可以通过 vm.$nextTick 来访问 Dom
- beforeMount 发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。
- mounted 在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用$refs属性对Dom进行操作。
- beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁（patch）之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
- updated 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新，该钩子在服务器端渲染期间不被调用。
- beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。我们可以在这时进行善后收尾工作，比如清除计时器。
- destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。### Vue2.0中组件生命周期调用顺序说一下
- activated keep-alive 专属，组件被激活时调用
- deactivated keep-alive 专属，组件被销毁时调用

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

### Vue2.x是如何实现数组响应式的？

vue 的开发者对数组改变数据的 7 个方法做了一些改动。

```js
...
// 取出 Array的原型prototype 存储在 arrayProto变量中，
const arrayProto = Array.prototype
// 在这个原型基础之上create一个新的对象 arrayMethods
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
 // 接下来遍历数组这7个方法，在这些方法原有功能的基础上，额外添加了通知 更新(ob.dep.notify())的操作
methodsToPatch.forEach(function (method) {
  // cache original method  存储原本的方法
  const original = arrayProto[method]
  // def为引入的方法，作用是通知更新
  def(arrayMethods, method, function mutator (...args) {
    // 先是正常调用当前方法
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 给新增的属性添加监听依赖
    if (inserted) ob.observeArray(inserted)
    // notify change
    // 最后 dep.notify() 通知更新
    ob.dep.notify()
    return result
  })
})
```

### 异步请求在哪一步发起？
可以在钩子函数 created、beforeMount、mounted 中进行异步请求，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。

如果异步请求不需要依赖 Dom 推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
能更快获取到服务端数据，减少页面 loading 时间；
ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；
### Vue模版编译原理
- 将模板字符串转换成 elment ASTs (解析器)
- 对AST进行静态标注，即不需要修改的地方标注出来，后面的虚拟Dom对比时便会忽略这个，提升新能
- 将AST生成render函数
### Vue模版编译原理知道吗，能简单说一下吗？
Vue的编译过程就是将template转化为render函数的过程。会经历以下阶段：

```md
第一步是将 模板字符串 转换成 element ASTs（解析器）
第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）
第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）
```

首先解析模版，生成AST语法树(一种用JavaScript对象的形式来描述整个模板)。 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。

Vue的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的DOM也不会变化。那么优化过程就是深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。

编译的最后一步是将优化后的AST树转换为可执行的代码。

```js
export function compileToFunctions(template) {
  // 我们需要把html字符串变成render函数
  // 1.把html代码转成ast语法树  ast用来描述代码本身形成树结构 不仅可以描述html 也能描述css以及js语法
  // 很多库都运用到了ast 比如 webpack babel eslint等等
  let ast = parse(template);
  // 2.优化静态节点
  // 这个有兴趣的可以去看源码  不影响核心功能就不实现了
  //   if (options.optimize !== false) {
  //     optimize(ast, options);
  //   }

  // 3.通过ast 重新生成代码
  // 我们最后生成的代码需要和render函数一样
  // 类似_c('div',{id:"app"},_c('div',undefined,_v("hello"+_s(name)),_c('span',undefined,_v("world"))))
  // _c代表创建元素 _v代表创建文本 _s代表文Json.stringify--把对象解析成文本
  let code = generate(ast);
  //   使用with语法改变作用域为this  之后调用render函数可以使用call改变this 方便code里面的变量取值
  let renderFn = new Function(`with(this){return ${code}}`);
  return renderFn;
}
```

### keep-alive实现原理

keep-alive 是 Vue 内置的一个组件，可以实现组件缓存，当组件切换时不会对当前组件进行卸载。

- 常用的两个属性 include/exclude，允许组件有条件的进行缓存。
- 两个生命周期 activated/deactivated，用来得知当前组件是否处于活跃状态。
- keep-alive 的中还运用了 LRU(最近最少使用) 算法，选择最近最久未使用的组件予以淘汰。（LRU（Least recently used）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。
  ）

keep-alive实例会缓存对应组件的VNode,如果命中缓存，直接从缓存对象返回对应VNode。

```js
export default {
  name: "keep-alive",
  abstract: true, //抽象组件

  props: {
    include: patternTypes, //要缓存的组件
    exclude: patternTypes, //要排除的组件
    max: [String, Number], //最大缓存数
  },

  created() {
    this.cache = Object.create(null); //缓存对象  {a:vNode,b:vNode}
    this.keys = []; //缓存组件的key集合 [a,b]
  },

  destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted() {
    //动态监听include  exclude
    this.$watch("include", (val) => {
      pruneCache(this, (name) => matches(val, name));
    });
    this.$watch("exclude", (val) => {
      pruneCache(this, (name) => !matches(val, name));
    });
  },

  render() {
    const slot = this.$slots.default; //获取包裹的插槽默认值
    const vnode: VNode = getFirstComponentChild(slot); //获取第一个子组件
    const componentOptions: ?VNodeComponentOptions =
      vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions);
      const { include, exclude } = this;
      // 不走缓存
      if (
        // not included  不包含
        (include && (!name || !matches(include, name))) ||
        // excluded  排除里面
        (exclude && name && matches(exclude, name))
      ) {
        //返回虚拟节点
        return vnode;
      }

      const { cache, keys } = this;
      const key: ?string =
        vnode.key == null
          ? // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            componentOptions.Ctor.cid +
            (componentOptions.tag ? `::${componentOptions.tag}` : "")
          : vnode.key;
      if (cache[key]) {
        //通过key 找到缓存 获取实例
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key); //通过LRU算法把数组里面的key删掉
        keys.push(key); //把它放在数组末尾
      } else {
        cache[key] = vnode; //没找到就换存下来
        keys.push(key); //把它放在数组末尾
        // prune oldest entry  //如果超过最大值就把数组第0项删掉
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true; //标记虚拟节点已经被缓存
    }
    // 返回虚拟节点
    return vnode || (slot && slot[0]);
  },
};
```

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


- Vue3 数据劫持底层主要是使用 ES6 的 Proxy 实现。
  - Proxy 的优势如下:
    - Proxy 可以直接监听对象（const proxy = new Proxy(target, handler)）；defineProperty 需要遍历对象属性进行监听。
    - Proxy 可以直接监听对象新增的属性；defineProperty 只能劫持一开始就存在的属性，新增属性需要手动 Observer。
    - Proxy 可以直接监听数组的变化；defineProperty 无法监听数组的变化。
    - Proxy 有多达 13 种拦截方法：不限于 get、set、has、deleteProperty、apply、ownKeys、construct 等等；除开 get 和 set 其他都是 defineProperty 不具备的。
    - Proxy 返回的是一个新对象，我们可以只操作新的对象达到目的；defineProperty 只能遍历对象属性直接修改；
  - Proxy 的劣势如下:
    - ES6 的 Proxy 的存在浏览器兼容性问题。
    - Proxy 和 Reflect 结合实现 Vue3 底层数据劫持原理。Reflect 设计的目的是为了优化 Object 的一些操作方法以及合理的返回 Object 操作返回的结果，对于一些命令式的 Object 行为，Reflect 对象可以将其变为函数式的行为。比如 （'name' in obj） = Reflect.has(obj, 'name')
### Vue3.0的diff算法
Vue3.x借鉴了 ivi算法和 inferno算法
在创建VNode时就确定其类型，以及在mount/patch的过程中采用位运算来判断一个VNode的类型，在这个基础之上再配合核心的Diff算法
该算法中还运用了动态规划的思想求解最长递归子序列。
### Vue3.0的computed的实现原理
### Vue3.0的Watch的运行原理

### Vue项目中实现路由按需加载（路由懒加载）的3中方式
- vue异步组件
- es6提案的import()
- webpack的require.ensure()
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
### vue 中使用了哪些设计模式
1. 工厂模式 - 传入参数即可创建实例
虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode。
2. 单例模式 - 整个程序有且仅有一个实例
vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉
3. 发布-订阅模式 (vue 事件机制)
4. 观察者模式 (响应式数据原理)
5. 装饰模式: (@装饰器的用法)

## VueRouter
### VueRouter的router 和 route的区别?
- $route对象
    - $route对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等。
    - $route.path 字符串，对应当前路由的路径，总是解析为绝对路径，如"/foo/bar"。
    - $route.params 一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。
    - $route.query 一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有$route.query.user == 1,如果没有查询参数，则是个空对象。
    - $route.hash 当前路由的hash值 (不带#) ，如果没有 hash 值，则为空字符串。锚点*
    - $route.fullPath 完成解析后的 URL，包含查询参数和hash的完整路径。
    - $route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
    - $route.name 当前路径名字
    - $route.meta 路由元信息
    - 路由钩子函数
- $router对象
    - $router对象是全局路由的实例，是router构造方法的实例。
    - 路由实例方法：
        - push
            - 字符串this.$router.push('home')
            - 对象this.$router.push({path:'home'})
            - 命名的路由this.$router.push({name:'user',params:{userId:123}})
            - 带查询参数，变成 /register?plan=123this.$router.push({path:'register',query:{plan:'123'}})
        - go
            - 页面路由跳转 
            -  前进或者后退this.$router.go(-1)  // 后退
        - replace
            -  push方法会向 history 栈添加一个新的记录，而replace方法是替换当前的页面，
            - 不会向 history 栈添加一个新的记录
            - 一般使用replace来做404页面

### hash路由和history路由实现原理说一下 (history模式和hash模式的区别)
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
### vue-router 中路由方法 pushState 和 replaceState 能否触发 popSate 事件
- 不能
- HTML5 新接口，可以改变网址(存在跨域限制)而不刷新页面，这个强大的特性后来用到了单页面应用
- 仅改变网址,网页不会真的跳转,也不会获取到新的内容,本质上网页还停留在原页面
```js
window.history.pushState(state, title, targetURL);
@状态对象：传给目标路由的信息,可为空
@页面标题：目前所有浏览器都不支持,填空字符串即可
@可选url：目标url，不会检查url是否存在，且不能跨域。如不传该项,即给当前url添加data

window.history.replaceState(state, title, targetURL);
@类似于pushState,但是会直接替换掉当前url,而不会在history中留下记录
```

- popstate 事件会在点击后退、前进按钮(或调用 history.back()、history.forward()、history.go()方法)时触发

### vue-router 路由钩子函数是什么 执行顺序是什么

路由钩子的执行流程, 钩子函数种类有:全局守卫、路由守卫、组件守卫。

- 完整的导航解析流程:
  - 导航被触发。
  - 在失活的组件里调用 beforeRouteLeave 守卫。
  - 调用全局的 beforeEach 守卫。
  - 在重用的组件里调用 beforeRouteUpdate 守卫。重用的组件。
  - 在路由配置里调用 beforeEnter。
  - 解析异步路由组件。
  - 在被激活的组件里调用 beforeRouteEnter。
  - 调用全局的 beforeResolve 守卫。
  - 导航被确认。
  - 调用全局的 afterEach 钩子。
  - 触发 DOM 更新。
  - 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### vue-router跳转方式有哪些

- router.push(location, onComplete?, onAbort?)
  - 想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

- router.replace(location, onComplete?, onAbort?)
  - 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

- router.go(n)
  - 这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
### vue-router添加参数

- vue-router传递参数
  - 编程式的导航 router.push
    - this.$router.push({ name: 'news', params: { userId: 123 }})
      - 命名路由搭配params，刷新页面参数会丢失
    - this.$router.push({ path: '/news', query: { userId: 123 }});
      - 查询参数搭配query，刷新页面数据不会丢失
  - 声明式的导航 <router-link>
    - <router-link :to="{ name: 'news', params: { userId: 1111}}">click to news page</router-link>
### location.href和vue-router的区别

- vue-router使用pushState进行路由更新，静态跳转，页面不会重新加载；location.href会触发浏览器，页面重新加载一次
- vue-router使用diff算法，实现按需加载，减少dom操作
- vue-router是路由跳转或同一个页面跳转；location.href是不同页面间跳转；
- vue-router是异步加载this.$nextTick(()=>{获取url})；location.href是同步加载
## Vuex

### Vuex个人理解
vue一般是单项数据流，当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：
多个视图依赖于同一状态、来自不同视图的行为需要变更同一状态。
作用：多个组件共享数据或者是跨组件传递数据

vuex 是专门为 vue 提供的全局状态管理系统，用于多个组件中数据共享、数据缓存等。（无法持久化、内部核心原理是通过创造一个全局实例 new Vue）
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211015154102.png)

### Vuex是怎么实现的？

install函数：用来注册插件到vue里（说白了就是在vue中执行这个函数，并把vue当作参数传入此函数，使用vue的方法和绑定store到各个组件上）

store类：state、getters、mutations、actions、modules、plugins
辅助函数：mapState、mapActions、mapMutations

#### 怎么让每个vue组件都能拿到$store？

给每个实例注入$store。

在install方法里面，用vue.mixin混入，在beforeCreate的生命周期的钩子函数，使得当每个组件实例化的时候都会调用这个函数，给自己赋值一个store属性

```js
let Vue
const install = (_Vue) => {
  Vue = _Vue
  // 使用vue的混入方法，在创建之前，给每个组件都增加$store属性
  Vue.mixin({
    // 创建之前会被执行
    beforeCreate () {
      // 根实例有store属性
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
      // 根实例上没有的store属性，往父亲节点找
      // new Vue({store}) 这里已经在根组件挂载有store属性
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}
export default {
  install // 给用户提供一个install方法，默认会被调用
}
```
#### 怎么实现state数据响应式？
利用vue的响应式原理，让state的修改都可以更新回视图，而不是单纯获取state数据。

```js
class Store {
  constructor (options) {
    // this.vm  = options.state   只是单纯获取state数据，但是数据修改不会更新界面
    /** 借用Vue的双向绑定机制让Vuex中data变化实时更新界面 */
    this.vm = new _Vue({
      data: {
        state: options.state
      }
    })
  }
/* 类的属性访问器
    访问state对象时候，就直接返回响应式的数据
    Object.defineProperty get 同理
  */
  get state () {
    return this.vm.state
  }
}
```

#### getters怎么实现？
getters从根本上就是computed，给你返回一些派生的状态（对数据进行过滤操作）。

遍历用户传入的参数获取属性名，利用Object.defineProperty的get获取方法执行的结果，赋值到getters对象对应的属性名上，用户通过this.getters.myName就可以调用对应的值

```js
// 简化代码，封装遍历方法
const forEach = (obj, callback) => {
  Object.keys(obj).forEach((key) => {
    callback(key, obj[key])
  })
}
forEach(getters, (getterName, fn) => {
  Object.defineProperty(store.getters, getterName, {
    get () {
      // 让getter执行自己的状态 传入
      return fn(state)
    }
  })
})
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106190231.png)

#### commit怎么去触发mutation
1）不能直接改变 store 中的状态。改变 store 中的状态的唯一方法是提交 (commit) mutation。
2）每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。调用 store.commit(type, payload) 方法来触发mutations中的相关方法。

```js
forEach(mutations, (mutationName, fn) => {
      store.mutations[mutationName] || (store.mutations[mutationName] = [])
      store.mutations[mutationName].push((payload) => { // 先把用户传入的mutations参数的属性和方法保存到store实例上的this.mutations对象里面
        fn(state, payload)  // 参数是state数据
      })
    })

// 用户通过this.$store.commit('syncAdd', 10) 传入属性名和荷载，找到对应的函数，遍历执行
commit = (type, payload) => {
  this.mutations[type].forEach(fn => fn(payload))
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106190533.png)

#### dispatch怎么触发actions？
actions和mutations的区别：
①action提交的是mutation，而不是直接变更状态
②actions用于处理一些异步事件，而mutations一般用于处理同步事件
③通过store.dispatch触发action，参数是vuex.store实例（因为modules需要获取上下文）
通过store.commit触发mutation，参数是state,payload。actions也可以实现同步函数，但是vuex要求必须遵从原则
```js
forEach(actions, (actionName, fn) => {
    store.actions[actionName] || (store.actions[actionName] = [])
    store.actions[actionName].push((payload) => {
      fn(store, payload)  // 参数是vuex.store实例
       })
})

// 用户通过this.$store.dispatch('syncAdd', 10) 传入属性名和荷载，找到对应的函数，遍历执行
dispatch = (type, payload) => {
    this.actions[type].forEach(fn => fn(payload))
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106190646.png)

#### plugins是怎么实现？(持久化插件plugins)

作用是：把state都存储在localStorage里面，刷新不会丢失数据
原理：发布订阅模式
实例store的时候，遍历plugins里面的函数，并执行 this.subscribe() 订阅到sote._subscribe数组上
当监测到mutation有变化的时候，依次执行所有的订阅

```js
// store.js
const persits = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('vuex-state', JSON.stringify(state))
  })
}
export default new Vuex.Store({ // 导出一个store实例
  plugins: [
    persits // 发布，通知所有的订阅
  ]
})



/** 安装模块 */
const installModule = (store, state, path, rootModule) => {
  let mutations = rootModule._raw.mutations
  if (mutations) {
    forEach(mutations, (mutationName, fn) => {
      store.mutations[mutationName] || (store.mutations[mutationName] = [])
      store.mutations[mutationName].push((payload) => {
        fn(state, payload)
        console.log(state)
        // 发布 让所有订阅依次执行
        store._subscribes.forEach(fn => fn({ type: mutationName, payload }, store.state))
      })
    })
  }
}

class Store {
  constructor (options) {
    // 将用户的状态放到store中
    // this.state = options.state
    /** 借用Vue的双向绑定机制让Vuex中data变化实时更新界面 */
    this.vm = new _Vue({
      data: {
        state: options.state
      }
    })
    // 只循环一次，现在需要把子modules里面的getters、mutations、actions都放到对应的对象里
    /** 保存一份到本身实例 */
    this._options = options
    this._subscribes=[]
    // 实例store的时候，遍历plugins里面的函数，并执行 this.subscribe() 订阅
    options.plugins.forEach(plugin => plugin(this))
  }
  subscribe (fn) {
    this._subscribes.push(fn) // 订阅
  }
}
```

#### mapState怎么实现？
抽象形容：mapState是state的语法糖。
```js
import { mapState } from 'vuex';
 // computed只有mapState的情况下
  computed: mapState({
    counts: 'counts', // 第一种写法
    add: (state) => this.str + ':' + state.add, // 第二种写法
})

// 还有其他的情况下
computed: {
  /*
  ...mapState({
    counts: state => state.counts,
    add: state => state.add
  })
  */
  ...mapState([  // 第三种写法：通过数组来赋值
    'counts',
     'add'
  ])
},
```
…mapState相当于解构赋值给computed，浅拷贝。

```js
let mapState = {
  name: 'ccc',
  age: 1,
  child:{
    count:2
  }
}

let computed = {...mapState}
computed.age = 18
computed.child.count = 3
console.log(computed) // {name: "ccc", age: 18, child :{count:3}}
console.log(mapState) // {name: "ccc", age: 1, child :{count:3}}
```

1）…mapState([ ‘age’]) 会执行一个函数，返回一个对象，通过…解构到computed上
2）执行函数时会判断传入的是字符串，还是对象或数组？
① 如果是对象或数组，都去根实例的state上找（所有module.state都挂载在store.state上）
    对象{ age: state => state.age }：执行函数并传入根state作为参数，让它返回对应value
    数组[ ‘age’ ]：通过key找到根state上的对应的value
② 如果是字符串，说明是用命名空间来获取值，则通过第一个参数（命名空间名）去根实例store._modulesNamespaceMap上找到对应的module模块，再通过第二个参数（key）找到state上对应的value返回

总结：都是通过key值在state上找到value值，组装成对象返回，然后再解构赋值到computed上

#### 命名空间
namespaced：vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名

当使用 mapState, mapGetters, mapActions 和 mapMutations 这些函数来绑定带命名空间的模块时，写起来可能比较繁琐：

```js
// store.js
const moduleE = {
  namespaced: true,
  state: {
    name: 'xiaoming',
    age: 1
  }
}
export default new Vuex.Store({
  modules: {
    // 将模块挂载到根store
    moduleE, // 等同于moduleE : 等同于moduleE, 上面模块的命名空间是moduleE
    // eee: moduleE, // 下面模块的命名空间是 eee
 }
});



// 带命名空间的绑定函数
computed: {
  // ...mapState('命名空间名', ["name"])   在辅助函数mapState的第一参数上，填写上模块的命名空间名
 // ...mapState('moduleE', {
 //   name: 'name'
// })
  ...mapState('moduleE', ['name'])
}


// 实现原理
 computed: {
    // ...mapState('moduleE', { // 命名空间名用法1
    //   name: 'name'
    // })
   // ...mapState('moduleE', ['name']) // 命名空间名用法2
    // ...mapState({ // 用法1
    //   age: state => state.age
    // })
     ...mapState([ // 用法2
       'age'
     ])
  },
```

命名空间原理：
1）安装每一个模块的时候，判断有没有namespaced，为否时，则给他设置false，为true则找到moduleName和对应module，挂载到根_modulesNamespaceMap={}对象上

2）当通过mapState取值的时候就可以通过命名空间名到根_modulesNamespaceMap上找到对应的值
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106191310.png)

### Vuex是什么？原理是什么？怎么使用？哪种功能场景使用它？
- 状态管理库，类似 React 中的 Rudux
- vuex是一个专门为vue构建的状态集管理，主要是为了解决组件间状态共享的问题，强调的是数据的集中式管理，说白了主要是便于维护便于解耦所以不是所有的项目都适合使用vuex，如果你不是构建大型项目使用vuex反而使你的项目代码繁琐多余
- state mutations getters actions modules

### 为什么 Vuex的mutation中不能做异步操作？
Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。 每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。
### Vuex 页面刷新数据丢失怎么解决

需要做 vuex 数据持久化 一般使用本地存储的方案来保存数据 可以自己设计存储方案 也可以使用第三方插件
### vuex中如何组合使用多个 action。

业务逻辑场景：存在2个action，actionA和actionB，先执行完actionA才能执行actionB。

```js
actions:{
    actionA({commit}){
        return new Promise((reslove,reject)=>{
            commit('someMutationA')
            reslove()
        })
    }
}


// 第一种 在组件里派发action
this.$store.dispatch('actionA').then(()=>{
    // ...派发其他的action或者写其他的逻辑
})
// 第二种 在actions里派发另一个action
actions:{
    actionB({dispatch, commit}){
        return dispatch('actionA').then(()=>{
            commit('someOtherMutation')
        })
    }
}
// 使用async/await的写法
actions:{
    async actionA({commit}){
        commit('someMutationA', await someMutationA())
    },
    async actionB({dispatch,commit}){
        await dispatch('actionA') // 等待actionA完成
        commit('someMutationB', await someMutationB)
    }
}
```
## Vue-Cli
### 实现一个vue-cli，整个思路是什么？??????
## Webpack Vite Rollup
### package.json说说你知道的配置，browserlist作用是什么？？？？？？
#### package.json
从我们接触前端开始，每个项目的根目录下一般都会有一个package.json文件，这个文件定义了当前项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等）。

当运行npm install命令的时候，会根据package.json文件中的配置自动下载所需的模块，也就是配置项目所需的运行和开发环境。

package.json文件是一个JSON对象，这从他的后缀名.json就可以看出来，该对象的每一个成员就是当前项目的一项设置。比如name就是项目名称，version是版本号。

当然很多人其实并不关心package.json的配置，他们应用的更多的是dependencies或devDependencies配置。
```json
{
    "name": "hardingcheng",
    "version":"0.0.1",
    "description": "antd-theme",
    "keywords":["node.js","antd", "theme"],
    "homepage": "https://zhiqianduan.com",
    "bugs":{"url":"http://path/to/bug","email":"yindong@xxxx.com"},
    "license": "ISC",
    "author": "yindong",
    "contributors":[{"name":"yindong","email":"yindong@xxxx.com"}],
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
    "config": { "port" : "8080" },
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
    "bundledDependencies": [
        "renderized", "super-streams"
    ],
    "engines": {"node": "0.10.x"},
	  "os" : [ "win32", "darwin", "linux" ],
    "cpu" : [ "x64", "ia32" ],
    "private": false,
    "publishConfig": {}
  }
```
- 必须属性
- name字段
    - package.json文件中最重要的就是name和version字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。对包的更改应该与对版本的更改一起进行。
    - package.json文件中最重要的就是name和version字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。对包的更改应该与对版本的更改一起进行。
    - name必须小于等于214个字符，不能以.或_开头，不能有大写字母，因为名称最终成为URL的一部分因此不能包含任何非URL安全字符。npm官方建议我们不要使用与核心节点模块相同的名称。不要在名称中加js或node。如果需要可以使用engines来指定运行环境。
    - 该名称会作为参数传递给require，因此它应该是简短的，但也需要具有合理的描述性。
- version字段
    - version一般的格式是x.x.x, 并且需要遵循该规则。
    - package.json文件中最重要的就是name和version字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。每次发布时version不能与已存在的一致。


- 描述信息
- description字段
    - description是一个字符串，用于编写描述信息。有助于人们在npm库中搜索的时候发现你的模块。
- keywords字段
    - keywords是一个字符串组成的数组，有助于人们在npm库中搜索的时候发现你的模块。
- homepage字段
    - homepage项目的主页地址。
- bugs字段
    - bugs用于项目问题的反馈issue地址或者一个邮箱。
    ```json
    "bugs": { 
      "url" : "https://github.com/owner/project/issues",
      "email" : "project@hostname.com"
    }
    ```
- license字段
    - license是当前项目的协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。
    - `"license" : "BSD-3-Clause"`
- author字段 contributors字段
    - author是具体一个人，contributors表示一群人，他们都表示当前项目的共享者。同时每个人都是一个对象。具有name字段和可选的url及email字段。
    - contributors表示该项目包的贡献者，和author不同的是，该字段是一个数组，包含所有的贡献者
    ```json
    "author": {
      "name" : "hardingcheng",
      "email" : "hardingcheng@xx.com",
      "url" : "https://hardingcheng.com/"
    }
    ```
    
    
- 文件&目录 
- files字段
    - files属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）
    - 可以在模块根目录下创建一个.npmignore文件，写在这个文件里边的文件即便被写在files属性里边也会被排除在外，这个文件的写法与.gitignore类似。
- main字段
    - main字段指定了加载的入口文件，require导入的时候就会加载这个文件。这个字段的默认值是模块根目录下面的index.js。
- bin字段
    - bin项用来指定每个内部命令对应的可执行文件的位置。如果你编写的是一个node工具的时候一定会用到bin字段。
    - 当我们编写一个cli工具的时候，需要指定工具的运行命令，比如常用的webpack模块，他的运行命令就是webpack。
    - 当我们执行webpack命令的时候就会执行bin/index.js文件中的代码。
    - 在模块以依赖的方式被安装，如果存在bin选项。在node_modules/.bin/生成对应的文件，Npm会寻找这个文件，在node_modules/.bin/目录下建立符号链接。由于node_modules/.bin/目录会在运行时加入系统的PATH变量，因此在运行npm时，就可以不带路径，直接通过命令来调用这些脚本。
    - 所有node_modules/.bin/目录下的命令，都可以用npm run [命令]的格式运行。在命令行下，键入npm run，然后按tab键，就会显示所有可以使用的命令。
    ```json
        "bin": {
      "webpack": "bin/index.js",
    }
    ```
- man字段
    - man用来指定当前模块的man文档的位置。
    - `"man" :[ "./doc/calc.1" ]`
- directories字段
    - directories制定一些方法来描述模块的结构, 用于告诉用户每个目录在什么位置。
- repository字段
    - 指定一个代码存放地址，对想要为你的项目贡献代码的人有帮助
    ```json
    "repository" : {
      "type" : "git", 
      "url" : "https://github.com/npm/npm.git"
    }
    ```
    
    


- 脚本配置
- scripts字段
    - scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行npm run start时，所要执行的命令。
    ```json
    "scripts": {
      "start": "node ./start.js"
    }
    ```
    - 使用scripts字段可以快速的执行shell命令，可以理解为alias。
    - scripts可以直接使用node_modules中安装的模块，这区别于直接运行需要使用npx命令。
- config字段
    - config字段用于添加命令行的环境变量。
    ```json
    {
      "name" : "hardingcheng",
      "config" : { "port" : "8080" },
      "scripts" : { "start" : "node server.js" }
    }
    ```
    - 然后，在server.js脚本就可以引用config字段的值。`console.log(process.env.npm_package_config_port); //8080`





- 依赖配置
- dependencies字段, devDependencies字段
    - dependencies字段指定了项目运行所依赖的模块，devDependencies指定项目开发所需要的模块。
    - 它们的值都是一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。
    - 当安装依赖的时候使用--save参数表示将该模块写入dependencies属性，--save-dev表示将该模块写入devDependencies属性。
    - 对象的每一项通过一个键值对表示，前面是模块名称，后面是对应模块的版本号。版本号遵循“大版本.次要版本.小版本”的格式规定。
    - 固定版本: 比如5.38.1，安装时只安装指定版本。
    - 波浪号: 比如~5.38.1, 表示安装5.38.x的最新版本（不低于5.38.1），但是不安装5.39.x，也就是说安装时不改变大版本号和次要版本号。 
    - 插入号: 比如ˆ5.38.1, ，表示安装5.x.x的最新版本（不低于5.38.1），但是不安装6.x.x，也就是说安装时不改变大版本号。 
    - 需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
    - latest: 安装最新版本。
- peerDependencies字段
    - 当我们开发一个模块的时候，如果当前模块与所依赖的模块同时依赖一个第三方模块，并且依赖的是两个不兼容的版本时就会出现问题。
    - 比如，你的项目依赖A模块和B模块的1.0版，而A模块本身又依赖B模块的2.0版。大多数情况下，这不构成问题，B模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。最典型的场景就是插件，比如A模块是B模块的插件。用户安装的B模块是1.0版本，但是A插件只能和2.0版本的B模块一起使用。这时，用户要是将1.0版本的B的实例传给A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果A和B一起安装，那么B必须是2.0模块。
    - peerDependencies字段，就是用来供插件指定其所需要的主工具的版本。可以通过peerDependencies字段来限制。
    ```json
    {
      "name": "myless",
      "peerDependencies": {
        "less": "3.9.x"
      }
    }
    ```
- bundledDependencies字段
    - bundledDependencies指定发布的时候会被一起打包的模块.
- optionalDependencies字段
    - 如果一个依赖模块可以被使用， 同时你也希望在该模块找不到或无法获取时npm继续运行，你可以把这个模块依赖放到optionalDependencies配置中。这个配置的写法和dependencies的写法一样，不同的是这里边写的模块安装失败不会导致npm install失败。
- engines字段
    - engines字段指明了该模块运行的平台，比如Node或者npm的某个版本或者浏览器。
    - `{ "engines" : { "node" : ">=0.10.3 <0.12", "npm" : "~1.0.20" } }`


- 发布配置
- os字段
    - 可以指定你的模块只能在哪个操作系统上运行
    - `"os" : [ "darwin", "linux", "win32" ]`
- cpu字段
    - 限制模块只能在某种架构的cpu下运行
    - `"cpu" : [ "x64", "ia32" ]`
- private字段
    - 如果这个属性被设置为true，npm将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。
    - `"private": true`
- publishConfig字段
    - 这个配置是会在模块发布时生效，用于设置发布用到的一些值的集合。如果你不想模块被默认标记为最新的，或者默认发布到公共仓库，可以在这里配置tag或仓库地址。
    - 通常publishConfig会配合private来使用，如果你只想让模块被发布到一个特定的npm仓库，如一个内部的仓库。
    ```json
    "private": true,
    "publishConfig": {
      "tag": "1.0.0",
      "registry": "https://registry.npmjs.org/",
      "access": "public"
    }
    ```
- preferGlobal字段
    - preferGlobal的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。
    - `"preferGlobal": false`
- browser字段
    - browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。
    ```json
    "browser": {
      "tipso": "./node_modules/tipso/src/tipso.js"
    },s
    ```
  
  
  
- 第三方配置
- typings
    - typings字段用来指定TypeScript的入口文件：
    - `"typings": "types/index.d.ts",`
- eslintConfig
    - eslint的配置可以写在单独的配置文件.eslintrc.json 中，也可以写在package.json文件的eslintConfig配置项中。
- babel
    - babel用来指定Babel的编译配置
- unpkg
    - 使用该字段可以让 npm 上所有的文件都开启 cdn 服务，该CND服务由unpkg提供：`"unpkg": "dist/vue.js"`
- lint-staged
    - lint-staged是一个在Git暂存文件上运行linters的工具，配置后每次修改一个文件即可给所有文件执行一次lint检查，通常配合gitHooks一起使用。
    - 使用lint-staged时，每次提交代码只会检查当前改动的文件。
- gitHooks
    - itHooks用来定义一个钩子，在提交（commit）之前执行ESlint检查。在执行lint命令后，会自动修复暂存区的文件。修复之后的文件并不会存储在暂存区，所以需要用git add命令将修复后的文件重新加入暂存区。在执行pre-commit命令之后，如果没有错误，就会执行git commit命令
    - 这里就是配合上面的lint-staged来进行代码的检查操作。
- browserslist
    - browserslist字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。
#### browserslist
browserslist字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。比如最上面的例子中的该字段值：
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
这里指定了一个对象，里面定义了生产环境和开发环境的浏览器要求。上面的development就是指定开发环境中支持最后一个版本的chrome、Firefox、safari浏览器。这个属性是不同的前端工具之间共用目标浏览器和 node 版本的配置工具，被很多前端工具使用，比如Babel、Autoprefixer等。

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
        
### Webpack 的热更新（HMR）原理

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
### webpack 打包构建 AST 以后做了什么
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
### 代码分割，那代码分割的本质是什么？有什么意义呢
代码分割的本质其实就是在源代码直接上线和打包成唯一脚本main.bundle.js这两种极端方案之间的一种更适合实际场景的中间状态。

代码分割：用可接受的服务器性能压力增加来换取更好的用户体验。
源代码直接上线：虽然过程可控，但是http请求多，性能开销大。
打包成唯一脚本：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。

### 聊一聊Babel原理吧
大多数JavaScript Parser遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器) 。
Babel 是一个 JavaScript 编译器。他把最新版的 javascript 编译成当下可以执行的版本，简言之，利用 babel 就可以让我们在当前的项目中随意的使用这些新最新的 es6，甚至 es7 的语法。

Babel大概分为三大部分：解析（parse），转换（transform），生成（generate）。
- 解析：将代码转换成 AST
  - 将代码解析成抽象语法树（AST），每个 js 引擎（比如 Chrome 浏览器中的 V8 引擎）都有自己的 AST 解析器，而 Babel 是通过 Babylon 实现的。在解析过程中有两个阶段：词法分析和语法分析，词法分析阶段把字符串形式的代码转换为令牌（tokens）流，令牌类似于 AST 中节点；而语法分析阶段则会把一个令牌流转换成 AST 的形式，同时这个阶段会把令牌中的信息转换成 AST 的表述结构。

- 转换：访问 AST 的节点进行变换操作生产新的 AST
  - 在这个阶段，Babel 接受得到 AST 并通过 babel-traverse 对其进行深度优先遍历，在此过程中对节点进行添加、更新及移除操作。这部分也是 Babel 插件介入工作的部分。
- 生成：以新的 AST 为基础生成代码
  - 将经过转换的 AST 通过 babel-generator 再转换成 js 代码，过程就是深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。
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
### Webpack 打包加速的方法
- devtool 的 sourceMap较为耗时
- 开发环境不做无意义的操作：代码压缩、目录内容清理、计算文件hash、提取CSS文件等
- 第三方依赖外链script引入：vue、ui组件、JQuery等
- HotModuleReplacementPlugin：热更新增量构建
- DllPlugin& DllReferencePlugin：动态链接库，提高打包效率，仅打包一次第三方模块，每次构建只重新打包业务代码。
- thread-loader,happypack：多线程编译，加快编译速度
- noParse：不需要解析某些模块的依赖
- babel-loader开启缓存cache
- splitChunks（老版本用CommonsChunkPlugin）：提取公共模块，将符合引用次数(minChunks)的模块打包到一起，利用浏览器缓存
- Tree Shaking 摇树：基于ES6提供的模块系统对代码进行静态分析, 并在压缩阶段将代码中的死代码（dead code)移除，减少代码体积。
### Webpack 打包体积优化思路
- webpack-bundle-analyzer插件可以可视化的查看webpack打包出来的各个文件体积大小，以便我们定位大文件，进行体积优化
- 提取第三方库或通过引用外部文件的方式引入第三方库
- 代码压缩插件UglifyJsPlugin
- 服务器启用gzip压缩
- 按需加载资源文件 require.ensure
- 剥离css文件，单独打包
- 去除不必要插件，开发环境与生产环境用不同配置文件
- SpritesmithPlugin雪碧图，将多个小图片打包成一张，用background-image，backgroud-pisition，width，height控制显示部分
- url-loader 文件大小小于设置的尺寸变成base-64编码文本，大与尺寸由file-loader拷贝到目标目录
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
### ParallelUglifyPlugin： 多线程压缩JS代码
webpack有默认的代码压缩功能，如果项目比较大、文件比较多，则引入多线程压缩能节省时间。
```js
const ParallelUglifyPlugin  = require('webpack-parallel-uglify-plugin');
{
    plugins:[
    // window.ENV = "production"
    new webpack.DefinePlugin({ENV:JSON.stringify('production')}),
    // 打包之前清空文件夹
    new CleanWebpackPlugin(),
    // 压缩css
    new MiniCssExtractPlugin({
      filename:'css/[name]_[contenthash:8].css'
    }),
    new HappyPack({
      loaders: [ 'babel-loader?cacheDirectory=true' ]
    }),
    new ParallelUglifyPlugin({})
  ]
}
```

### Tree Shaking 摇树

虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。基于ES6提供的模块系统对代码进行静态分析,并将代码中的死代码（dead code)移除的一种技术。因此，利用Tree Shaking技术可以很方便地实现我们代码上的优化，减少代码体积。
- 摇树删除代码的原理
  - webpack基于ES6提供的模块系统，对代码的依赖树进行静态分析，把import & export标记为3类：
    - 所有import标记为/* harmony import */
    - 被使用过的export标记为/harmony export([type])/，其中[type]和webpack内部有关，可能是binding，immutable等；
    - 没有被使用的export标记为/* unused harmony export [FuncName] */，其中[FuncName]为export的方法名，之后使用Uglifyjs（或者其他类似的工具）进行代码精简，把没用的都删除。
- 为何基于es6模块实现（ES6 module 特点：）：
  - 只能作为模块顶层的语句出现
  - import的模块名只能是字符串常量
  - import binding是immutable的
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
- tree-shaking & babel 使用babel-loader处理js代码会导致tree-shaking失效的原因
    - treeshaking 使用的前提必须是ES module组织的代码，也就是说交给ESMOdule处理的代码必须是ESM。当我们使用babel-loader处理js代码之后就有可能将ESM 转换 成commonjs规范（preset-env插件工作的时候就会将esm => coommonjs）
    - 收到配置preset-env的modules：false,确保不会开启自动转换的插件(在最新版本的babel-loader中自动帮我们关闭了转换成commonjs规范的功能)
```js
presets: [
    ['@babel/preset-env', {module: 'commonjs'}]
]
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

- Webpack 中，Tree-shaking 的实现一是先标记出模块导出值中哪些没有被用过(标记的效果就是删除没有被其它模块使用的导出语句)，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：
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
### ES6 Module和Commonjs区别
#### commonjs 使用与原理
在使用  规范下，有几个显著的特点。
- 在 `commonjs` 中每一个 js 文件都是一个单独的模块，我们可以称之为 module；
- 该模块中，包含 CommonJS 规范的核心变量: exports、module.exports、require；
- exports 和 module.exports 可以负责对模块中的内容进行导出；
- require 函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；

- 在当前目录下的 `node_modules` 目录查找。
- 如果没有，在父级目录的 `node_modules` 查找，如果没有在父级目录的父级目录的 `node_modules` 中查找。
- 沿着路径向上递归，直到根目录下的 `node_modules` 目录。
- 在查找过程中，会找 `package.json` 下 main 属性指向的文件，如果没有  `package.json` ，在 node 环境下会以此查找 `index.js` ，`index.json` ，`index.node`。
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
export default 'hello'

// main.js
import str from './hello.js'
console.log(str)
```

## 微前端
### 微前端是什么, 有哪些特点和优势
### 微前端实现的主要原理
### 怎么解决样式隔离
### 如何解决主应用和子应用的隔离, 用 node.js 实现沙箱机制的原理
### 讲讲 window.history 的原理, 为什么 popState 能够实现前端路由
### 主应用修改了路由, 子应用如何感知到
### 介绍 monorepo 概念
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
## 前端工程化
### 前端工程化规范

一切能提升前端开发效率，提高前端应用质量的手段和工具都是前端工程化。前端工程化是一个标准化过程，所有的项目都有共同的起点，通过制定脚手架（一般区分前后台项目），内置webpack、mock服务、开发规范（eslint）、单元测试等功能，约束每个项目的模样、玩法大体一样。总结就是将前端开发流程，标准化、规范化、工具化、自动化、简单化，提升了应用质量及开发效率。

- 前端工程化主要包括四个方面：模块化、组件化、规范化、自动化。
  - 模块化
    - 指将一个文件拆分成多个相互依赖的文件，最后进行统一的打包和加载，这样能够很好的保证高效的多人协作。
    - JS 模块化：CommonJS、AMD、CMD 以及 ES6 Module。
    - CSS 模块化：Sass、Less、Stylus、BEM、CSS Modules 等。其中预处理器和 BEM 都会有的一个问题就是样式覆盖。而 CSS Modules 则是通过 JS 来管理依赖，最大化的结合了 JS 模块化和 CSS 生态，比如 Vue 中的 style scoped。
    - 资源模块化：任何资源都能以模块的形式进行加载，目前大部分项目中的文件、CSS、图片等都能直接通过 JS 做统一的依赖关系处理。
  - 组件化
    - 指对ui层面的拆分。其中主要包括细粒度和通用性这两块的考虑。
    - 不同于模块化，模块化是对文件、对代码和资源拆分，而组件化则是对 UI 层面的拆分。
    - 通常，我们会需要对页面进行拆分，将其拆分成一个一个的零件，然后分别去实现这一个个零件，最后再进行组装。在我们的实际业务开发中，对于组件的拆分我们需要做不同程度的考量，其中主要包括细粒度和通用性这两块的考虑。对于业务组件，你更多需要考量的是针对你负责业务线的一个适用度，即你设计的业务组件是否成为你当前业务的 “通用” 组件。
  - 规范化
    - 指的是我们在工程开发初期以及开发期间制定的系列规范。
      - 项目目录结构
      - 编码规范：对于编码这块的约束，一般我们都会采用一些强制措施，比如 ESLint、StyleLint 等。
      - 联调规范
      - 文件命名规范
      - 样式管理规范：目前流行的样式管理有 BEM、Sass、Less、Stylus、CSS Modules 等方式。
      - git flow 工作流：其中包含分支命名规范、代码合并规范等。
      - 定期 code review … 等等
  - 自动化
    - 自动化工具在自动化合并、构建、打包都能为我们节省很多工作。而这些只是前端自动化其中的一部分，前端自动化还包含了持续集成、自动化测试等方方面面。
    - 从最早先的 grunt、gulp 等，再到目前的 webpack、parcel。这些自动化工具在自动化合并、构建、打包都能为我们节省很多工作。而这些只是前端自动化其中的一部分，前端自动化还包含了持续集成、自动化测试等方方面面。

- 前端工程化具体包含哪些知识
  - 脚手架
    - 脚手架包括什么
      - 通用的项目目录模版
      - 通用的Webpack配置
      - 统一的Eslint校验规则
      - 统一的单元测试框架配置：单元测试覆盖率、测试的目录等
      - 统一的Dockerfile和jenkinsfile (用来打包成镜像和部署流水线定义)
      - 统一babel的配置（.babelrc或babel.config.js）
      - 统一的常量配置（缓存字段等等）
      - 不同环境的配置文件（development、test、production）
    - 如何开发脚手架
      - 创建一个文件夹，做为脚手架的起点，执行npm init生成package.json文件
      - 工欲善其事必先利其器，安装以下npm包
        - 可用于控制台选择的工具：inquirer(交互、选择)
        - 可处理控制台命令的工具：commander（定义脚手架命令）
        - download-git-repo：下载远程模板工具，负责下载远程仓库的模板项目
        - 可改变输出log颜色的工具：chalk
        - 可执行shell命令的工具: child_process
  - 构建工具（webpack）
  - MOCK服务
  - 开发规范
  - 单元测试
  - 项目部署
## 前端性能优化
### 通过哪些平台进行性能测试
#### 性能该怎么检测
- 性能检测的方式有很多：
    - Chrome 自带的开发者工具：Performance
    - Lighthouse 开源工具
    - 原生 Performance API
    - 各种官方库、插件
        - web-vitals-extension
        - web-vitals 库

这些方法各有各的好处，前两种方式简单快捷，能够可视化各类指标，但是很难拿到用户端的数据，毕竟你不大可能让用户去跑这些工具，当然除此之外还有一些很小的缺点，比如说拿不到重定向次数等等。
#### 最新性能指标
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113150531.png)

- FP & FCP
    - 首次绘制，FP（First Paint），这个指标用于记录页面第一次绘制像素的时间。
    - 首次内容绘制，FCP（First Contentful Paint），这个指标用于记录页面首次绘制文本、图片、非空白 Canvas 或 SVG 的时间。
    - 这两个指标看起来大同小异，但是 FP 发生的时间一定小于等于 FCP
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113151556.png)
    - FP 指的是绘制像素，比如说页面的背景色是灰色的，那么在显示灰色背景时就记录下了 FP 指标。但是此时 DOM 内容还没开始绘制，可能需要文件下载、解析等过程，只有当 DOM 内容发生变化才会触发，比如说渲染出了一段文字，此时就会记录下 FCP 指标。因此说我们可以把这两个指标认为是和白屏时间相关的指标，所以肯定是最快越好。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113151834.png)


- LCP
    - 最大内容绘制，LCP（Largest Contentful Paint），用于记录视窗内最大的元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变，另外该指标会在用户第一次交互后停止记录。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113152056.png)
    - LCP 其实能比前两个指标更能体现一个页面的性能好坏程度，因为这个指标会持续更新。举个例子：当页面出现骨架屏或者 Loading 动画时 FCP 其实已经被记录下来了，但是此时用户希望看到的内容其实并未呈现，我们更想知道的是页面主要的内容是何时呈现出来的。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113152150.png)
    - 长任务也会在 FID 及 TBT 指标中使用到。
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113160602.png)
        - 因此这是一个很重要的用户体验指标，代表着页面何时真正进入可用的状态。毕竟光内容渲染的快也不够，还要能迅速响应用户的交互。想必大家应该体验过某些网站，虽然内容渲染出来了，但是响应交互很卡顿，只能过一会才能流畅交互的情况。


- TTI
    - 首次可交互时间，TTI（Time to Interactive）。这个指标计算过程略微复杂，它需要满足以下几个条件
        - 从 FCP 指标后开始计算
        - 持续 5 秒内无长任务（执行时间超过 50 ms）且无两个以上正在进行中的 GET 请求
        - 往前回溯至 5 秒前的最后一个长任务结束的时间
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113152502.png)
    - 可能会疑问为什么长任务需要定义为 50ms 以外？
        - Google 提出了一个 RAIL 模型：
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113152554.png)
        - 对于用户交互（比如点击事件），推荐的响应时间是 100ms 以内。那么为了达成这个目标，推荐在空闲时间里执行任务不超过 50ms（W3C 也有这样的标准规定），这样能在用户无感知的情况下响应用户的交互，否则就会造成延迟感。



- FID
    - 首次输入延迟，FID（First Input Delay），记录在 FCP 和 TTI 之间用户首次与页面交互时响应的延迟。
    - 这个指标其实挺好理解，就是看用户交互事件触发到页面响应中间耗时多少，如果其中有长任务发生的话那么势必会造成响应时间变长。
    - 其实在上文我们就讲过 Google 推荐响应用户交互在 100ms 以内


- TBT
    - 阻塞总时间，TBT（Total Blocking Time），记录在 FCP 到 TTI 之间所有长任务的阻塞时间总和。
    - 假如说在 FCP 到 TTI 之间页面总共执行了以下长任务（执行时间大于 50ms）及短任务（执行时间低于 50ms）
    - 那么每个长任务的阻塞时间就等于它所执行的总时间减去 50ms
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113161805.png)
        - 所以对于上图的情况来说，TBT 总共等于 345ms。
    - 这个指标的高低其实也影响了 TTI 的高低，或者说和长任务相关的几个指标都有关联性。


- CLS
    - 累计位移偏移，CLS（Cumulative Layout Shift），记录了页面上非预期的位移波动。
    - 大家想必遇到过这类情况：页面渲染过程中突然插入一张巨大的图片或者说点击了某个按钮突然动态插入了一块内容等等相当影响用户体验的网站。这个指标就是为这种情况而生的，计算方式为：位移影响的面积 * 位移距离。
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113161942.png)
        - 文本移动了 25% 的屏幕高度距离（位移距离），位移前后影响了 75% 的屏幕高度面积（位移影响的面积），那么 CLS 为 0.25 * 0.75 = 0.1875。
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211113162019.png)


#### 三大核心指标
- Google 在今年五月提出了网站用户体验的三大核心指标，分别为：
    - LCP
    - FID
    - CLS

- LCP 代表了页面的速度指标，虽然还存在其他的一些体现速度的指标，但是上文也说过 LCP 能体现的东西更多一些。一是指标实时更新，数据更精确，二是代表着页面最大元素的渲染时间，通常来说页面中最大元素的快速载入能让用户感觉性能还挺好。
- FID 代表了页面的交互体验指标，毕竟没有一个用户希望触发交互以后页面的反馈很迟缓，交互响应的快会让用户觉得网页挺流畅。
- CLS 代表了页面的稳定指标，尤其在手机上这个指标更为重要。因为手机屏幕挺小，CLS 值一大的话会让用户觉得页面体验做的很

#### 如何优化指标
- 资源优化
    - 该项措施可以帮助我们优化 FP、FCP、LCP 指标。
        - 压缩文件、使用 Tree-shaking 删除无用代码
        - 服务端配置 Gzip 进一步再压缩文件体积
        - 资源按需加载
        - 通过 Chrome DevTools 分析首屏不需要使用的 CSS 文件，以此来精简 CSS
        - 内联关键的 CSS 代码
        - 使用 CDN 加载资源及 dns-prefetch 预解析 DNS 的 IP 地址
        - 对资源使用 preconnect，以便预先进行 IP 解析、TCP 握手、TLS 握手
        - 缓存文件，对首屏数据做离线缓存
        - 图片优化，包括：用 CSS 代替蹄片、裁剪适配屏幕的图片大小、小图使用 base64 或者 PNG 格式、支持 WebP 就尽量使用 WebP、渐进式加载图片


- 网络优化
    - 该项措施可以帮助我们优化 FP、FCP、LCP 指标。
        - 这块内容大多可以让后端或者运维帮你去配置，升级至最新的网络协议通常能让你网站加载的更快。
        - 比如说使用 HTTP2.0 协议、TLS 1.3 协议或者直接拥抱 QUIC 协议~


- 优化耗时任务
    - 该项措施可以帮助我们优化 TTI、FID、TBT 指标。
        - 使用 Web Worker 将耗时任务丢到子线程中，这样能让主线程在不卡顿的情况下处理 JS 任务
        - 调度任务 + 时间切片，这块技术在 React 16 中有使用到。简单来说就是给不同的任务分配优先级，然后将一段长任务切片，这样能尽量保证任务只在浏览器的空闲时间中执行而不卡顿主线程


- 不要动态插入内容
    - 该项措施可以帮助我们优化 CLS 指标。
        - 用骨架屏给用户一个预期的内容框架，突兀的显示内容体验不会很好
        - 图片切勿不设置长宽，而是使用占位图给用户一个图片位置的预期
        - 不要在现有的内容中间插入内容，起码给出一个预留位置

#### Performance性能API的使用

### 前端性能优化
#### CSS方面优化
- 多个css合并，尽量减少HTTP请求
- 将css文件放在页面最上面
- 移除空的css规则
- 避免使用CSS表达式
- 选择器优化嵌套，尽量避免层级过深
- 充分利用css继承属性，减少代码量
- 抽象提取公共样式，减少代码量
- 属性值为0时，不加单位
- 属性值为小于1的小数时，省略小数点前面的0
- 使用CSS Sprites将多张图片拼接成一张图片，通过CSS background 属性来访问图片内容
#### JS
- 节流、防抖
- 长列表滚动到可视区域动态加载（大数据渲染）
- 图片懒加载（src）
- DOM 操作优化
  - 批量添加dom可先createElement创建并添加节点，最后一次性加入dom
  - 批量绑定事件，使用事件委托绑定父节点实现，利用了事件冒泡的特性
  - 如果可以使用innerHTML代替appendChild
  - 在 DOM 操作时添加样式时尽量增加 class 属性，而不是通过 style 操作样式，以减少重排（Reflow）
#### 网络
- 减少 HTTP 请求数量
- 利用浏览器缓存，公用依赖包（如vue、Jquery、ui组件等）单独打包/单文件在一起，避免重复请求
- 减小cookie大小，尽量用localStorage代替
- CDN托管静态文件
- 开启 Gzip 压缩

## 前端性能优化
### 前端性能优化

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108160432.png)
- 从过程趋势来看，性能优化可分为网络层面和渲染层面；从结果趋势来看，性能优化可分为时间层面和体积层面。简单来说就是要在访问网站时使其快准狠地立马呈现在用户眼前。
- 所有的性能优化都围绕着两大层面两小层面实现，核心层面是网络层面和渲染层面，辅助层面是时间层面和体积层面，而辅助层面则充满在核心层面里。
#### 九大策略
- 九大策略
  - 网络层面
    - 网络层面的性能优化，无疑是如何让资源体积更小加载更快，因此笔者从以下四方面做出建议。
    - 构建策略：基于构建工具(Webpack/Rollup/Parcel/Esbuild/Vite/Gulp)
      - 该策略主要围绕webpack做相关处理，同时也是接入最普遍的性能优化策略。其他构建工具的处理也是大同小异，可能只是配置上不一致。说到webpack的性能优化，无疑是从时间层面和体积层面入手。
      - 对两层面分别做出6个性能优化建议总共12个性能优化建议，为了方便记忆均使用四字词语概括，方便大家消化。⏱表示减少打包时间，📦表示减少打包体积。
      - 减少打包时间：缩减范围、缓存副本、定向搜索、提前构建、并行构建、可视结构
        - 缩减范围
          - 配置include/exclude缩小Loader对文件的搜索范围，好处是避免不必要的转译。node_modules目录的体积这么大，那得增加多少时间成本去检索所有文件啊？
          - include/exclude通常在各大Loader里配置，src目录通常作为源码目录，可做如下处理。当然include/exclude可根据实际情况修改。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162258.png)
        - 缓存副本
          - 配置cache缓存Loader对文件的编译副本，好处是再次编译时只编译修改过的文件。未修改过的文件干嘛要随着修改过的文件重新编译呢？
          - 大部分Loader/Plugin都会提供一个可使用编译缓存的选项，通常包含cache字眼。以babel-loader和eslint-webpack-plugin为例。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162230.png)
        - 定向搜索
          - 配置resolve提高文件的搜索速度，好处是定向指定必须文件路径。若某些第三方库以常规形式引入可能报错或希望程序自动索引特定类型文件都可通过该方式解决。
          - alias映射模块路径，extensions表明文件后缀，noParse过滤无依赖文件。通常配置alias和extensions就足够。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162147.png)
        - 提前构建
          - 配置DllPlugin将第三方依赖提前打包，好处是将DLL与业务代码完全分离且每次只构建业务代码。这是一个古老配置，在webpack v2时已存在，不过现在webpack v4+已不推荐使用该配置，因为其版本迭代带来的性能提升足以忽略DllPlugin所带来的效益。
          - DLL意为动态链接库，指一个包含可由多个程序同时使用的代码库。在前端领域里可认为是另类缓存的存在，它把公共代码打包为DLL文件并存到硬盘里，再次打包时动态链接DLL文件就无需再次打包那些公共代码，从而提升构建速度，减少打包时间。
          - 配置DLL总体来说相比其他配置复杂，配置流程可大致分为三步。
          - 首先告知构建脚本哪些依赖做成DLL并生成DLL文件和DLL映射表文件。
          - 然后在package.json里配置执行脚本且每次构建前首先执行该脚本打包出DLL文件。
          - 最后链接DLL文件并告知webpack可命中的DLL文件让其自行读取。使用html-webpack-tags-plugin在打包时自动插入DLL文件。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162105.png) 
        - 并行构建
          - 配置Thread将Loader单进程转换为多进程，好处是释放CPU多核并发的优势。在使用webpack构建项目时会有大量文件需解析和处理，构建过程是计算密集型的操作，随着文件增多会使构建过程变得越慢。
          - 运行在Node里的webpack是单线程模型，简单来说就是webpack待处理的任务需一件件处理，不能同一时刻处理多件任务。
          - 文件读写与计算操作无法避免，能不能让webpack同一时刻处理多个任务，发挥多核CPU电脑的威力以提升构建速度呢？thread-loader来帮你，根据CPU个数开启线程。
          - 在此需注意一个问题，若项目文件不算多就不要使用该性能优化建议，毕竟开启多个线程也会存在性能开销。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162347.png)
        - 可视结构
          - 配置BundleAnalyzer分析打包文件结构，好处是找出导致体积过大的原因。从而通过分析原因得出优化方案减少构建时间。BundleAnalyzer是webpack官方插件，可直观分析打包文件的模块组成部分、模块体积占比、模块包含关系、模块依赖关系、文件是否重复、压缩体积对比等可视化数据。
          - 可使用webpack-bundle-analyzer配置，有了它，我们就能快速找到相关问题。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162454.png)
      - 减少打包体积：分割代码、摇树优化、动态垫片、按需加载、作用提升、压缩资源
        - 分割代码
          - 分割各个模块代码，提取相同部分代码，好处是减少重复代码的出现频率。webpack v4使用splitChunks替代CommonsChunksPlugin实现代码分割。
          - splitChunks配置较多，详情可参考官网，在此笔者贴上常用配置。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162551.png)
        - 摇树优化
          - 删除项目中未被引用代码，好处是移除重复代码和未使用代码。摇树优化首次出现于rollup，是rollup的核心概念，后来在webpack v2里借鉴过来使用。
          - 摇树优化只对ESM规范生效，对其他模块规范失效。摇树优化针对静态结构分析，只有import/export才能提供静态的导入/导出功能。因此在编写业务代码时必须使用ESM规范才能让摇树优化移除重复代码和未使用代码。
          - 在webpack里只需将打包环境设置成生产环境就能让摇树优化生效，同时业务代码使用ESM规范编写，使用import导入模块，使用export导出模
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162636.png)
        - 动态垫片
          - 通过垫片服务根据UA返回当前浏览器代码垫片，好处是无需将繁重的代码垫片打包进去。每次构建都配置@babel/preset-env和core-js根据某些需求将Polyfill打包进来，这无疑又为代码体积增加了贡献。
          - @babel/preset-env提供的useBuiltIns可按需导入Polyfill。
            - false：无视target.browsers将所有Polyfill加载进来
            - entry：根据target.browsers将部分Polyfill加载进来(仅引入有浏览器不支持的Polyfill，需在入口文件import "core-js/stable")
            - usage：根据target.browsers和检测代码里ES6的使用情况将部分Polyfill加载进来(无需在入口文件import "core-js/stable")
            - 在此推荐大家使用动态垫片。动态垫片可根据浏览器UserAgent返回当前浏览器Polyfill，其思路是根据浏览器的UserAgent从browserlist查找出当前浏览器哪些特性缺乏支持从而返回这些特性的Polyfill。对这方面感兴趣的同学可参考polyfill-library和polyfill-service的源码。
            - 在此提供两个动态垫片服务，可在不同浏览器里点击以下链接看看输出不同的Polyfill。相信IExplore还是最多Polyfill的，它自豪地说：我就是我，不一样的烟火。
              - 官方CDN服务：https://link.juejin.cn/?target=https%3A%2F%2Fpolyfill.io%2Fv3%2Fpolyfill.min.js
              - 阿里CDN服务：https://link.juejin.cn/?target=https%3A%2F%2Fpolyfill.alicdn.com%2Fpolyfill.min.js
            - 使用html-webpack-tags-plugin在打包时自动插入动态垫片。
            - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108162956.png)
        - 按需加载
          - 将路由页面/触发性功能单独打包为一个文件，使用时才加载，好处是减轻首屏渲染的负担。因为项目功能越多其打包体积越大，导致首屏渲染速度越慢。
          - 首屏渲染时只需对应JS代码而无需其他JS代码，所以可使用按需加载。webpack v4提供模块按需切割加载功能，配合import()可做到首屏渲染减包的效果，从而加快首屏渲染速度。只有当触发某些功能时才会加载当前功能的JS代码。
          - webpack提供魔术注解命名切割模块，若无注解则切割出来的模块无法分辨出属于哪个业务模块，所以一般都是一个业务模块共用一个切割模块的注解名称
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108163220.png)
        - 作用提升
          - 分析模块间依赖关系，把打包好的模块合并到一个函数中，好处是减少函数声明和内存花销。作用提升首次出现于rollup，是rollup的核心概念，后来在webpack v3里借鉴过来使用。
          - 在未开启作用提升前，构建后的代码会存在大量函数闭包。由于模块依赖，通过webpack打包后会转换成IIFE，大量函数闭包包裹代码会导致打包体积增大(模块越多越明显)。在运行代码时创建的函数作用域变多，从而导致更大的内存开销。
          - 在开启作用提升后，构建后的代码会按照引入顺序放到一个函数作用域里，通过适当重命名某些变量以防止变量名冲突，从而减少函数声明和内存花销。
          - 在webpack里只需将打包环境设置成生产环境就能让作用提升生效，或显式设置concatenateModules。
          - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108163405.png)
        - 压缩资源
          - 压缩HTML/CSS/JS代码，压缩字体/图像/音频/视频，好处是更有效减少打包体积。极致地优化代码都有可能不及优化一个资源文件的体积更有效。
          - 针对HTML代码，使用html-webpack-plugin开启压缩功能。
          - 针对CSS/JS代码，分别使用以下插件开启压缩功能。其中OptimizeCss基于cssnano封装，Uglifyjs和Terser都是webpack官方插件，同时需注意压缩JS代码需区分ES5和ES6。
            - optimize-css-assets-webpack-plugin：压缩CSS代码
            - uglifyjs-webpack-plugin：压缩ES5版本的JS代码
            - terser-webpack-plugin：压缩ES6版本的JS代码
          - 针对字体/音频/视频文件，还真没相关Plugin供我们使用，就只能拜托大家在发布项目到生产服前使用对应的压缩工具处理了。针对图像文件，大部分Loader/Plugin封装时均使用了某些图像处理工具，而这些工具的某些功能又托管在国外服务器里，所以导致经常安装失败。
          - webpack压缩图像  这个值得开发
        -
    - 图像策略：基于图像类型(JPG/PNG/SVG/WebP/Base64)
      - 该策略主要围绕图像类型做相关处理，同时也是接入成本较低的性能优化策略。只需做到以下两点即可。
      - 图像选型：了解所有图像类型的特点及其何种应用场景最合适
        - 图像选型一定要知道每种图像类型的体积/质量/兼容/请求/压缩/透明/场景等参数相对值，这样才能迅速做出判断在何种场景使用何种类型的图像。
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108164555.png)
      - 图像压缩：在部署到生产环境前使用工具或脚本对其压缩处理
        - 图像压缩可在上述构建策略-压缩资源里完成，也可自行使用工具完成。由于现在大部分webpack图像压缩工具不是安装失败就是各种环境问题(你懂的)，所以笔者还是推荐在发布项目到生产服前使用图像压缩工具处理，这样运行稳定也不会增加打包时间。
        - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108164658.png)
    - 分发策略：基于内容分发网络(CDN)
      - 该策略主要围绕内容分发网络做相关处理，同时也是接入成本较高的性能优化策略，需足够资金支持。
      - 虽然接入成本较高，但大部分企业都会购买一些CDN服务器，所以在部署的事情上就不用过分担忧，尽管使用就好。该策略尽量遵循以下两点就能发挥CDN最大作用
        - 所有静态资源走CDN：开发阶段确定哪些文件属于静态资源
        - 把静态资源与主页面置于不同域名下：避免请求带上Cookie
        - 内容分发网络简称CDN，指一组分布在各地存储数据副本并可根据就近原则满足数据请求的服务器。其核心特征是缓存和回源，缓存是把资源复制到CDN服务器里，回源是资源过期/不存在就向上层服务器请求并复制到CDN服务器里。
        - 使用CDN可降低网络拥塞，提高用户访问响应速度和命中率。构建在现有网络基础上的智能虚拟网络，依靠部署在各地服务器，通过中心平台的调度、负载均衡、内容分发等功能模块，使用户就近获取所需资源，这就是CDN的终极使命。
        - 基于CDN的就近原则所带来的优点，可将网站所有静态资源全部部署到CDN服务器里。那静态资源包括哪些文件？通常来说就是无需服务器产生计算就能得到的资源，例如不常变化的样式文件、脚本文件和多媒体文件(字体/图像/音频/视频)等。
    - 缓存策略：基于浏览器缓存(强缓存/协商缓存)
      - 该策略主要围绕浏览器缓存做相关处理，同时也使接入成本最低的性能优化策略。其显著减少网络传输所带来的损耗，提升网页访问速度，是一种很值得使用的性能优化策略。
      - 为了让浏览器缓存发挥最大作用，该策略尽量遵循以下五点就能发挥浏览器缓存最大作用。
        - 考虑拒绝一切缓存策略：Cache-Control:no-store
        - 考虑资源是否每次向服务器请求：Cache-Control:no-cache
        - 考虑资源是否被代理服务器缓存：Cache-Control:public/private
        - 考虑资源过期时间：Expires:t/Cache-Control:max-age=t,s-maxage=t
        - 考虑协商缓存：Last-Modified/Etag
      - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108171545.png)
      - 整个缓存策略机制很明了，先走强缓存，若命中失败才走协商缓存。若命中强缓存，直接使用强缓存；若未命中强缓存，发送请求到服务器检查是否命中协商缓存；若命中协商缓存，服务器返回304通知浏览器使用本地缓存，否则返回最新资源。
      - 有两种较常用的应用场景值得使用缓存策略一试，当然更多应用场景都可根据项目需求制定。
        - 频繁变动资源：设置Cache-Control:no-cache，使浏览器每次都发送请求到服务器，配合Last-Modified/ETag验证资源是否有效
        - 不常变化资源：设置Cache-Control:max-age=31536000，对文件名哈希处理，当代码修改后生成新的文件名，当HTML文件引入文件名发生改变才会下载最新文件
  - 渲染层面
    - 渲染层面的性能优化，无疑是如何让代码解析更好执行更快。因此笔者从以下五方面做出建议。
    - CSS策略：基于CSS规则
      - 避免出现超过三层的嵌套规则
      - 避免为ID选择器添加多余选择器
      - 避免使用标签选择器代替类选择器
      - 避免使用通配选择器，只对目标节点声明规则
      - 避免重复匹配重复定义，关注可继承属性
    - DOM策略：基于DOM操作
      - 缓存DOM计算属性
      - 避免过多DOM操作
      - 使用DOMFragment缓存批量化DOM操作
    - 阻塞策略：基于脚本加载
      - 脚本与DOM/其它脚本的依赖关系很强：对<script>设置defer
      - 脚本与DOM/其它脚本的依赖关系不强：对<script>设置async
    - 回流重绘策略：基于回流重绘
      - 缓存DOM计算属性
      - 使用类合并样式，避免逐条改变样式
      - 使用display控制DOM显隐，将DOM离线化
    - 异步更新策略：基于异步更新
      - 在异步任务中修改DOM时把其包装成微任务
    - 上述五方面都是编写代码时完成，充满在整个项目流程的开发阶段里。因此在开发阶段需时刻注意以下涉及到的每一点，养成良好的开发习惯，性能优化也自然而然被使用上了。
    - 渲染层面的性能优化更多表现在编码细节上，而并非实体代码。简单来说就是遵循某些编码规则，才能将渲染层面的性能优化发挥到最大作用。回流重绘策略在渲染层面的性能优化里占比较重，也是最常规的性能优化之一。
  - 上述四方面都是一步接着一步完成，充满在整个项目流程里。构建策略和图像策略处于开发阶段，分发策略和缓存策略处于生产阶段，因此在每个阶段都可检查是否按顺序接入上述策略。通过这种方式就能最大限度增加性能优化应用场景。
#### 六大指标
根据性能优化的重要性和实际性划分出九大策略和六大指标，其实它们都是一条条活生生的性能优化建议。有些性能优化建议接不接入影响都不大，因此将九大策略定位高于六大指标。针对九大策略还是建议在开发阶段和生产阶段接入，在项目复盘时可将六大指标的条条框框根据实际应用场景接入。

- 六大指标基本囊括大部分性能优化细节，可作为九大策略的补充。笔者根据每条性能优化建议的特征将指标划分为以下六方面。
  - 加载优化：资源在加载时可做的性能优化
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108172559.png)
  - 执行优化：资源在执行时可做的性能优化
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108172613.png)
  - 渲染优化：资源在渲染时可做的性能优化
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108172624.png)
  - 样式优化：样式在编码时可做的性能优化
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108172638.png)
  - 脚本优化：脚本在编码时可做的性能优化
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108172654.png)
  - V8引擎优化：针对V8引擎特征可做的性能优化  
    - ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211108172704.png)
## 手写相关函数
### 手写相关函数1
#### JS处理大数相加问题
```js
var number1 = 10000000000000000000000000 + 11111111111111111111111111   //理论上number1的值应该是21111111111111111111111111（javascript中会表示为科学计数法：2.111111111111111e+25）
var number2 = 21111111111111111111111000
console.log(number1 === number2)  //true
```
JavaScript Number的精度丢失问题。因为JavaScript的Number类型是遵循IEEE 754规范表示的，这就意味着JavaScript能精确表示的数字是有限的，JavaScript可以精确到个位的最大整数是9007199254740992，也就是2的53次方，超过这个范围就会精度丢失，造成JavaScript无法判断大小，从而会出现下面的现象：
```js
Math.pow(2, 53);    // 9007199254740992
Math.pow(2, 53) === Math.pow(2, 53) + 1;    // true
9007199254740992 === 9007199254740992 + 1;    // true
```

那当两个数据相加时，其中一个或者两个数据都超过了这个精度范围，直接相加结果就会不准了，那怎么解决呢？将Number转为String，然后将String转为Array，并且注意补齐较短的数组，将他们的长度标称一样再一一相加得到一个新数组，再讲和组成的新数组转为数字就可以了。
```js
function sumString(a, b) {
  a = '0' + a;
  b = '0' + b;  //加'0'首先是为了转为字符串，而且两个数相加后可能需要进位，这样保证了和的长度就是a、b中长的那个字符的长度
  var arrA = a.split(''),  //将字符串转为数组
      arrB = b.split(''),
      res = [],  //相加结果组成的数组
      temp = '',  //相同位数相加的值
      carry = 0,  //同位数相加结果大于等于10时为1，否则为0
      distance = a.length - b.length,  //计算两个数字字符串的长度差
      len = distance > 0 ? a.length : b.length;  //和的长度
  // 在长度小的那个值前加distance个0，保证两个数相加之前长度是想等的
  if(distance > 0) {
    for(let i = 0; i < distance; i++) {
      arrB.unShift('0');
    }
  }else{
    for(let i = 0; i < distance; i++) {
      arrA.unShift('0');
    }
  }
  // 现在得到了两个长度一致的数组，需要做的就是把他们想通位数的值相加，大于等于10的要进一
  // 最终得到一个和组成的数组，将数组转为字符串，去掉前面多余的0就得到了最终的和
  for(let i = len-1; i >= 0; i--) {
    temp = Number(arrA[i]) + Number(arrB[i]) + carry;
    if(temp >= 10) {
      carry = 1;
      res.unshift((temp + '')[1])
    }
    else{
      carry = 0;
      res.unshift(temp)
    }
  }
  res = res.join('').replace(/^0/, '');
  console.log(res);
}
```
#### 大数相加并进行千分位展示
```js
// 核心都是通过数组的reduce,一个通过字符串
var str = '123456789';
//[9,8,7,6,5,4,3,2,1]
function formatCash(str) {
  //不考虑入参的判断
  return String(str).split('').reverse().reduce((pre, next, index) => {
    return (index % 3) ? (next + "" + pre) : (next + ',' + pre);
  })
}
console.log(formatCash(str));



// 核心都是通过数组的reduce,一个通过数组
function f(str) {
    const ret = Array.from(str).reverse().reduce((result,next,i,arr) => {
        if((i+1)%3 === 0 && (i+1) !== arr.length) {
            result.push(next,',')
            return result;
        }
        result.push(next);
        return result;
        // return (index % 3) ? (next + "" + pre) : (next + ',' + pre);
    },[])
    return ret.reverse().join('');
}



// 除法+求模
function format_with_mod(number) {
    var n = number;
    var r = ""; 
    var temp;
    do {
        mod = n % 1000;
        n = n / 1000;
        temp = ~~mod;
        r =  (n >= 1 ?`${temp}`.padStart(3, "0"): temp) + (!!r ? "," + r : "")
    } while (n >= 1)

    var strNumber = number + "";
    var index = strNumber.indexOf(".");
    if (index > 0) {
        r += strNumber.substring(index);
    }
    return r;
}




// 正则
function format_with_regex(number) {
    var reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (number + '').replace(reg, '$&,');
}

function format_with_regex(number) {
    var reg = /(\d)(?=(?:\d{3})+$)/g   
    return (number + '').replace(reg, '$1,');
}



// toLocaleString
function format_with_toLocaleString(number, minimumFractionDigits, maximumFractionDigits) {
    minimumFractionDigits = minimumFractionDigits || 2;
    maximumFractionDigits = (maximumFractionDigits || 2);
    maximumFractionDigits = Math.max(minimumFractionDigits, maximumFractionDigits);

    return number.toLocaleString("en-us", {
        maximumFractionDigits: maximumFractionDigits || 2,
        minimumFractionDigits: minimumFractionDigits || 2
    })
}




// Intl.NumberFormat
function format_with_Intl(number, minimumFractionDigits, maximumFractionDigits) {
    minimumFractionDigits = minimumFractionDigits || 2;
    maximumFractionDigits = (maximumFractionDigits || 2);
    maximumFractionDigits = Math.max(minimumFractionDigits, maximumFractionDigits);

    return new Intl.NumberFormat('en-us', {
        maximumFractionDigits: maximumFractionDigits || 2,
        minimumFractionDigits: minimumFractionDigits || 2
    }).format(number)
}
```
#### 金额千分位格式化函数
```js
const formatAmount=function (num) {
    if(num)
    {
        console.log(num);

        //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
        num = num.toString().replace(/\$|\,/g,'');
        //如果num不是数字，则将num置0，并返回
        if(''==num || isNaN(num)){return 'Not a Number ! ';}
        //如果num是负数，则获取她的符号
        var sign = num.indexOf("-")> 0 ? '-' : '';
        //如果存在小数点，则获取数字的小数部分
        var cents = num.indexOf(".")> 0 ? num.substr(num.indexOf(".")) : '';
        cents = cents.length>1 ? cents : '' ;//注意：这里如果是使用change方法不断的调用，小数是输入不了的
        //获取数字的整数数部分
        num = num.indexOf(".")>0 ? num.substring(0,(num.indexOf("."))) : num ;
        //如果没有小数点，整数部分不能以0开头
        if('' == cents){ if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
        //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
        else{if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
        //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
        /*
          也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
          字符串长度为0/1/2/3时都不用添加
          字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
         */
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        {
            num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
        }
        //将数据（符号、整数部分、小数部分）整体组合返回
        return (sign + num + cents);
    }
}
```
#### 手写数组随机排序？
```js
// 利用数组自带的sort方法
// 这种方法是利用随机出一个正数或者负数来让数组里面的内容两两对比，是正数就是顺序，是负数则是倒序，这种方法的缺点就是随机性不高，不能完全随机，因为是两两对比，所以最后一个数在最后的可能性较大。
var arr = [1,2,3,4,5,6,7,8,9,10]
function foo(arr){
    var cloneArray = arr.concat();
    cloneArray.sort((n1,n2) => {
        return Math.random() - 0.5
    })
    return cloneArray
}
console.log(foo(arr));


// 利用递归函数对比
// 递归的方法是利用递归函数的自调，定义一个随机数index（因为定了向下取整，所以范围为0~8）作为随机下标，然后将它对应的数从数组中取下压入到result数组中，从而实现随机排序，定义if判断，如果cloneArr的长度为空的话，则退出循环，这种随机的随机性很好，但是代码性能不太友好。
var arr = [1,2,3,4,5,6,7,8,9,10]
function foo(arr){
    var result = []
    var cloneArray = arr.concat();
    (function(){
        if(!cloneArray.length){return;}
        var index = Math.floor(Math.random() * cloneArray.length)
        result = result.concat(cloneArray.splice(index, 1))
        arguments.callee()
    })()
    return result;
}
console.log(foo(arr));


// 洗牌算法（推荐）
// 洗牌算法呢是利用随机出的index下标对应的数，与数组从前到后相互切换，所以称为洗牌，代码运行效率相比前面几种高，随机性也很大。在这强烈推荐。
var arr = [1,2,3,4,5,6,7,8,9,10]
function foo(arr){
    var cloneArray = arr.concat();
    var length = cloneArray.length
    for(var i = 0;i < len;i++){
        var index = Math.floor(Math.random() * cloneArray.length)
        var temp = cloneArray[index]
        cloneArray[index] = cloneArray[i]
        cloneArray[i] = temp
    }
    return cloneArray
}
console.log(foo(arr));

```
#### 手写String的indexof
```js
/**
 * String实现-1：正则表达式实现
 * 
 * @param {*} str
 * @param {*} searchVal
 * @param {number} [fromIndex=0]
 * @returns
 */
function sIndexOf(str, searchVal, fromIndex = 0) {
  const len = arr.length;
  if (fromIndex < 0) fromIndex = 0
  if (fromIndex >= len) return -1
  // 定义匹配规则
  let reg = new RegExp(`${searchVal}`, 'g') // 为了支持lastIndex，自定义开始匹配位置，需要开启'g'，全局匹配
  // 初始化开始搜索位置
  reg.lastIndex = fromIndex
  // 执行匹配
  let ret = reg.exec(str)
  // console.log(ret)
  // 返回匹配结果
  return ret ? ret.index : -1
}

/**
 * String实现-2：循环遍历。 需要支持searchVal为多字符串时的匹配。
 *
 * @param {*} str
 * @param {*} searchVal
 * @param {number} [fromIndex=0]
 * @returns
 */
function sIndexOf2(str, searchVal, fromIndex = 0) {
  let strLen = str.length
  let searchValLen = (searchVal + '').length
  if (fromIndex < 0) fromIndex = 0
  if (fromIndex >= strLen) return -1
  for (let i = fromIndex; i <= strLen - searchValLen; i++) {
    if (searchVal == str.slice(i, searchValLen + i)) return i
  }
  return -1
}

/**
 * Array实现: 循环遍历
 *
 * @param {*} arr
 * @param {*} searchVal
 * @param {number} [fromIndex=0]
 * @returns
 */
function aIndexOf(arr, searchVal, fromIndex = 0) {
  const len = arr.length;
  if (fromIndex < 0) fromIndex += len
  if (fromIndex >= len) return -1
  for (let i = fromIndex; i < len; i++) {
    if (arr[i] === searchVal) return i
  }
  return -1
}

// 最终实现
String.prototype._indexOf = Array.prototype._indexOf = function (searchVal, fromIndex) {
  let data = this
  let isArray = Array.isArray(data)
  let isString = Object.prototype.toString.call(data) == '[object String]'
  if (!isArray && !isString) throw new TypeError('String or Array')
  if (isArray) return aIndexOf(data, searchVal, fromIndex)
  if (isString) return sIndexOf(data, searchVal, fromIndex)
}
```
#### 手写斐波那契数列
```js
// 第一种方法
function fibonacci(n) {
    /*
        斐波那契数列前两项都是1，所以判断n是否等于1或者2，如果是则直接返回1
    */
    n = n && parseInt(n);
    if (n == 1 || n == 2) {
        return 1;
    };
    // 使用arguments.callee实现递归
    return arguments.callee(n - 2) + arguments.callee(n - 1);
}
let sum = fibonacci(8)
console.log(sum) // 21




// 第二种方法
function fibonacci(nub) {
    let n = nub && parseInt(nub);
    let n1 = 1; // 初始 n = 1时候的值为1
    let n2 = 1; // 初始 n = 2时候的值为1
    let f;    // 声明变量sum 接受第 n 个的斐波那契数
    
    // n 等于 1 或 n 等于 2 的时候直接返回1
    if(n == 1 || n == 2) {
        return 1;
    }
    for(let i = 2; i < n; i++) {
        f = n1 + n2;
        n1 = n2;
        n2 = f;
    } 
    return f
}
let sum = fibonacci(8) 
console.log(8) // 21




// 第三种方法
function fibonacci(n) {
    n = n && parseInt(n);
    let n1 = 1; 
    let n2 = 1;
    // n 等于 1 或 n 等于 2 的时候直接返回1
    if(n == 1 || n == 2) {
        return 1;
    }
    // 使用解构赋值，n1 等于 n2，n2 等于 n1 + n2 最后返回 n2
    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
}
```
#### JS实现驼峰命名与横线命名的转换
驼峰  ---> 横线
```js
// 将骆驼命名规则的字符串转换成使用短横线命名法的字符串, 并且全小写 .例如: 'getElementById' => 'get-element-by-id'

// 方法1：正则表达式
function getKebabCase(str) {
    let temp = str.replace(/[A-Z]/g, function(i) {
        return '_' + i.toLowerCase();
    })
    if (temp.slice(0,1) === '_') {
        temp = temp.slice(1);   //如果首字母是大写，执行replace时会多一个_，需要去掉
    }
    return temp;
}
console.log(getKebabCase('getElementById')); // get-element-by-id
// 方法2：reduce方法
function getKebabCase(prev, cur, index, array) {
    if (/[A-Z]/.test(cur)) {
        cur = cur.toLowerCase();
        if (index === 0) {
            return prev + cur;
        } else {
            return prev + '_' + cur;
        }
    } else {
        return prev + cur;
    }
}

function toKebabCase(arr) {
    if (typeof arr === 'string') {
        arr = arr.split('');
    }
    return arr.reduce(getKebabCase, '');
}

let s = 'getElementById'
let test1 = toKebabCase(s); // get-element-by-id
let test2 = [].reduce.call(s, getKebabCase, '');  // get-element-by-id

// 方法3：利用数组方法
function getKebabCase(str) {
    let arr = str.split('');
    let result = arr.map((item) => {
        if (item.toUpperCase() === item) {
            return '_' + item.toLowerCase();
        } else {
            return item;
        }
    }).join('');
    return result;
}
console.log(getKebabCase('getElementById')); // get-element-by-id
```
横线 ---> 驼峰
```js
// 将短横线命名规则的字符串转换成使用驼峰命名法的字符串. 例如: 'get-element-by-id ' => 'getElementById'

// 方法1： 正则表达式
function getCamelCase(str) {
    return str.replace(/-([a-z])/g, function(all, i) {
        return i.toLowerCase();
    })
}


// 方法2： 利用数组方法
function getCamelCase(str) {
    let arr = str.split('-');
    return arr.map((item, index) => {
        if (index === 0) {
            return item; // 看是大驼峰还是小驼峰
        } else {
           return item.chartAt(0).toUpperCase() + item.slice(1); 
        }
    }).join('');
}

```
#### 手写事件委托
```html
<ul>
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
</ul>

// 没用事件委托
$("li").on("mouseover",function(){
　　　$(this).css("background-color","gray").siblings().css("background-color","white");
})


// 用了时间委托
$("ul").on("mouseover", function(e) {
    $(e.target).css("background-color", "gray").siblings().css("background-color", "white");
})
```
- 第一步：给父元素绑定事件
    - 给元素ul添加绑定事件，绑定mouseover事件设置css（也可通过addEventListener为点击事件click添加绑定）
- 第二步：监听子元素的冒泡事件
    - 这里默认是冒泡，点击子元素li会向上冒泡
- 第三步：找到是哪个子元素的事件
    - 通过匿名回调函数的参数e用来接收事件对象，通过target获取触发事件的目标（可以通过判断target的类型来确定是哪一类的子元素对象执行事件）
#### 手写字符串模板

```js
function render(template, data) {
    const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
    if (reg.test(template)) { // 判断模板里是否有模板字符串
        const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
        return render(template, data); // 递归的渲染并返回渲染后的结构
    }
    return template; // 如果模板没有模板字符串直接返回
}


// 测试验证
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: '布兰',
    age: 12
}
render(template, person); // 我是布兰，年龄12，性别undefined
```

#### 手写异步并发数限制

```js
/**
 * 关键点
 * 1. new promise 一经创建，立即执行
 * 2. 使用 Promise.resolve().then 可以把任务加到微任务队列，防止立即执行迭代方法
 * 3. 微任务处理过程中，产生的新的微任务，会在同一事件循环内，追加到微任务队列里
 * 4. 使用 race 在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
 * 5. 任务完成后，需要从 doingTasks 中移出
 */
function limit(count, array, iterateFunc) {
  const tasks = []
  const doingTasks = []
  let i = 0
  const enqueue = () => {
    if (i === array.length) {
      return Promise.resolve()
    }
    const task = Promise.resolve().then(() => iterateFunc(array[i++]))
    tasks.push(task)
    const doing = task.then(() => doingTasks.splice(doingTasks.indexOf(doing), 1))
    doingTasks.push(doing)
    const res = doingTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve()
    return res.then(enqueue)
  };
  return enqueue().then(() => Promise.all(tasks))
}

// test
const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i))
limit(2, [1000, 1000, 1000, 1000], timeout).then((res) => {
  console.log(res)
})
```

#### 手写异步串行 | 异步并行

```js
// 字节面试题，实现一个异步加法
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 500);
}

// 解决方案
// 1. promisify
const promiseAdd = (a, b) => new Promise((resolve, reject) => {
  asyncAdd(a, b, (err, res) => {
    if (err) {
      reject(err)
    } else {
      resolve(res)
    }
  })
})

// 2. 串行处理
async function serialSum(...args) {
  return args.reduce((task, now) => task.then(res => promiseAdd(res, now)), Promise.resolve(0))
}

// 3. 并行处理
async function parallelSum(...args) {
  if (args.length === 1) return args[0]
  const tasks = []
  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0))
  }
  const results = await Promise.all(tasks)
  return parallelSum(...results)
}

// 测试
(async () => {
  console.log('Running...');
  const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
  console.log(res1)
  const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
  console.log(res2)
  console.log('Done');
})()
```

#### 手写js版本号比较

```js
function Version(curV,reqV){
    curV = curV ? curV.replace(/[vV]/, "") : "0.0.0";
    reqV = reqV ? reqV.replace(/[vV]/, "") : "0.0.0";
    var arr1=curV.split('.');
    var arr2=reqV.split('.');
    //将两个版本号拆成数字
    var minL= Math.min(arr1.length,arr2.length);
    var pos=0;        //当前比较位
    var diff=0;        //当前为位比较是否相等

    //逐个比较如果当前位相等则继续比较下一位
    while(pos<minL){
        diff=parseInt(arr1[pos])-parseInt(arr2[pos]);
        if(diff!=0){
          break;
        }
        pos++;
    }

    if (diff>0) {
        console.log('新版本')
    }else if (diff==0) {
        console.log('稳定版')
    }else{
        console.log('旧版本')
    }
  }
```

#### 写版本号排序的方法

```md
题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
```

```js
arr.sort((a, b) => {
  let i = 0;
  const arr1 = a.split(".");
  const arr2 = b.split(".");

  while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i];
    i++;
    if (s1 === undefined || s2 === undefined) {
      return arr2.length - arr1.length;
    }

    if (s1 === s2) continue;

    return s2 - s1;
  }
});
console.log(arr);
```

#### 封装localStorage

因为localStorage是永久存储的，不支持设置过期时间，而我们有时又不希望把本地的存储一起发往服务器，所以也不会使用cookie，基于这样的业务场景，就对localStorage进行了二次封装，让它具备过期时间的特点。

```js
class Storage {
  constructor (express) {
    this.express = express;
  }
  set(key, value, express) {
    let obj = {
      data: value,
      cTime: Date.now(),
      express: express || this.express
    };
    localStorage.setItem(key, JSON.stringify(obj));
  }
  get(key) {
    let item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    item = JSON.parse(item);
    let nowTime = Date.now();
    if (item.express && item.express < (nowTime - item.cTime)) {
      this.remove(key);
      return null;
    } else {
      return item.data;
    }
  }
  remove(key) {
    localStorage.removeItem(key);
  }
  clear(){
    localStorage.clear();
  }
}
```

#### 获取当前页面url参数

- 传统方式,查找location.search
- 新API URL SearchParams

```js
// 传统方式
function query(name) {
  const search = location.search.substr(1) // 类似 array.slice(1)
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const res = search.match(reg)
  if (res === null) {
    return null
  }
  return res[2]
}
query('d')



function query(name) {
  const search = location.search
  const p = new URLSearchParams(search)
  return p.get(name)
}
console.log(query('b'))
```

#### 将url参数解析为JS对象

- 传统方式， 分析 srarch
- 使用 URLSearchParams

```js
function queyrToObj() {
    const res = {}
    const search = location.search.substr(1)//截取?之后的参数
    search.split('&').forEach(paramStr => {
        const arr = paramStr.split('=')
        const key = arr[0]
        const val = arr[1]
        res[key] = val
    })
    return res
}



function queryToObj() {
    const res = {}
    const pList = new URLSearchParams(location.search)
    pList.forEach((val,key) => {
        res[key] = val
    })
    return res
}




function queryToObj(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
        if (/=/.test(param)) { // 处理有 value 的参数
            let [key, val] = param.split('='); // 分割 key 和 value
            val = decodeURIComponent(val); // 解码
            val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

            if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else { // 如果对象没有这个 key，创建 key 并设置值
                paramsObj[key] = val;
            }
        } else { // 处理没有 value 的参数
            paramsObj[param] = true;
        }
    })

    return paramsObj;
}
```

#### 手写深度比较（isEqual）

```js
// 判断对象是否是对象还是数组
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

// 判断全相等
function isEqual(obj1, obj2) {
  // 判断不是对象数组的直接比较值
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  // 防止传入的 两个是同一对象 直接返回
  if (obj1 === obj2) {
    return true
  }
  // 是对象和数组(不考虑function)
  // 分别取出keys
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  // 先判断keys的个数相等不
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }
  // 以obj1为基准 递归判断 obj2
  for (let key in obj1) {
    const result = isEqual(obj1[key], obj2[key])
    if (!result) return false
  }
  // 遍历 递归后到了这里就是全相等
  return true
}

//使用
// 传入普通
console.log(isEqual('123', '123')) //true
// 传入一样
console.log(isEqual(obj1, obj1)) //true
// 比较两个一样的
const obj1 = {
  x: 1,
  y: 2,
  s: {
    x: 1,
    y: 2,
  },
}

const obj2 = {
  x: 1,
  y: 2,
  s: {
    x: 1,
    y: 2,
  },
}
console.log(isEqual(obj1, obj2)) //true
```

#### 手写-如何找到数组中第一个没出现的最小正整数

```js
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

示例 1：

输入：nums = [1,2,0]
输出：3

示例 2：

输入：nums = [3,4,-1,1]
输出：2

示例 3：

输入：nums = [7,8,9,11,12]
输出：1
```

- 第一版 O(n^2) 的方法
  ```js
  const firstMissingPositive = (nums) => {
  let i = 0;
  let res = 1;
  while (i < nums.length) {
    if (nums[i] == res) {
      res++;
      i = 0;
    } else {
      i++;
    }
  }
  return res;
  };
  ```

- 第二版 时间空间均为 O(n)
  ```js
  const firstMissingPositive = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  };
  ```

- 最终版 时间复杂度为 O(n) 并且只使用常数级别空间
  ```js
  const firstMissingPositive = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= nums.length && // 对1~nums.length范围内的元素进行安排
      nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换
    ) {
      const temp = nums[nums[i] - 1]; // 交换
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
  };
  ```
#### 手写-怎么在制定数据源里面生成一个长度为 n 的不重复随机数组

- 第一版 时间复杂度为 O(n^2)
  ```js
  function getTenNum(testArray, n) {
  let result = [];
  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * testArray.length);
    const cur = testArray[random];
    if (result.includes(cur)) {
      i--;
      break;
    }
    result.push(cur);
  }
  return result;
  }
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const resArr = getTenNum(testArray, 10);
  ```

- 第二版 标记法 / 自定义属性法 时间复杂度为 O(n)
  ```js
  function getTenNum(testArray, n) {
  let hash = {};
  let result = [];
  let ranNum = n;
  while (ranNum > 0) {
    const ran = Math.floor(Math.random() * testArray.length);
    if (!hash[ran]) {
      hash[ran] = true;
      result.push(ran);
      ranNum--;
    }
  }
  return result;
  }
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const resArr = getTenNum(testArray, 10);
  ```

- 第三版 交换法 时间复杂度为 O(n)
  ```js
  function getTenNum(testArray, n) {
  const cloneArr = [...testArray];
  let result = [];
  for (let i = 0; i < n; i++) {
    debugger;
    const ran = Math.floor(Math.random() * (cloneArr.length - i));
    result.push(cloneArr[ran]);
    cloneArr[ran] = cloneArr[cloneArr.length - i - 1];
  }
  return result;
  }
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const resArr = getTenNum(testArray, 14);
  ```
#### 手写-字符串最长的不重复子串
  ```js
  const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let max = 0;
  while (right <= s.length) {
    let lr = s.slice(left, right);
    const index = lr.indexOf(s[right]);

    if (index > -1) {
      left = index + left + 1;
    } else {
      lr = s.slice(left, right + 1);
      max = Math.max(max, lr.length);
    }
    right++;
  }
  return max;
  };
  ```
#### 手写-查找数组公共前缀
```js
const longestCommonPrefix = function (strs) {
const str = strs[0];
let index = 0;
while (index < str.length) {
  const strCur = str.slice(0, index + 1);
  for (let i = 0; i < strs.length; i++) {
    if (!strs[i] || !strs[i].startsWith(strCur)) {
      return str.slice(0, index);
    }
  }
  index++;
}
return str;
};
```
#### 手写-判断括号字符串是否有效
  ```js
  const isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const regObj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const cur = stack.pop();
      if (s[i] !== regObj[cur]) {
        return false;
      }
    }
  }
  
  if (stack.length) {
    return false;
  }
  
  return true;
  };
  ```
  
#### 手写-实现一个对象的 flatten 方法
```js
  const obj = {
  a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
  }

flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

function isObject(val) {
  return typeof val === "object" && val !== null;
}

function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");

  return res;
}
flatten();

```
#### 手写-将虚拟 Dom 转化为真实 Dom（类似的递归题-必考）
```js
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作 这一步是关键
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}
```

#### 手写-发布订阅模式

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter((item) => {
      return item !== callBack;
    });
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
  // 触发事件
  emit(type, ...rest) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, rest));
  }
}
// 使用如下
// const event = new EventEmitter();
// const handle = (...rest) => {
//   console.log(rest);
// };
// event.on("click", handle);
// event.emit("click", 1, 2, 3, 4);
// event.off("click", handle);
// event.emit("click", 1, 2);
// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");
```

#### 手写 promise.all 和 race

```js
  //静态方法
  static all(promiseArr) {
    let result = [];
    //声明一个计数器 每一个promise返回就加一
    let count = 0;
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
      //这里用 Promise.resolve包装一下 防止不是Promise类型传进来
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            //这里不能直接push数组  因为要控制顺序一一对应(感谢评论区指正)
            result[i] = res;
            count++;
            //只有全部的promise执行成功之后才resolve出去
            if (count === promiseArr.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  //静态方法
  static race(promiseArr) {
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            //promise数组只要有任何一个promise 状态变更  就可以返回
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
}
```

#### 手写Promise
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
        x.then(resolve,reject)
    }else {
        // 普通值
        resolve(x)
    }
}
```

#### 手写new

```js
function myNew(Func, ...args) {
  // 创建一个空的对象
  let obj = {};
  // 隐式原型链接到该函数的原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Func.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  const ret = Func.call(obj, ...args);
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
}
```

#### 手写简单的闭包

```js
function a() {
    var i = 0

    function b() {
        return i++
    }
    return b
}

var x
x = a()

console.log(x())
console.log(x())
console.log(x())
```

#### 手写trim函数

```js
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/gm,'');
}
```

#### 手写compose函数组合函数

```js
function compose(..args){
    return function(value){
        return args.reverse().reduce(function (acc,fn){
            return fn(acc)
        //acc的初始值
        },value)
    }
}

const compose = (...args) => value => args.reverse().reduce((acc,fn) => fn(acc),value);

const compose = (...fns) => {
  if (!fns.length) return (v) => v;
  if (fns.length === 1) return fns[0];
  return fns.reduce((acc,cur) => {
    return (...args) => {
      return acc(cur(...args))
    }
  })
}
```

#### 手写柯里化函数

```js
// 柯里化后的函数
let curried = _.curry(getSum)
// 测试
curried(1,2,3);
curried(1)(2)(3);
curried(1,2)(3);
```

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
```

```md
实现一个 add 方法
题目描述:实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
```

```js
function add(...args) {
  let allArgs = [...args];
  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }
  fn.toString = function () {
    if (!allArgs.length) {
      return;
    }
    return allArgs.reduce((sum, cur) => sum + cur);
  };
  return fn;
}
```

#### 手写偏函数

什么是偏函数？偏函数就是将一个 n 参的函数转换成固定 x 参的函数，剩余参数（n - x）将在下次调用全部传入。

```js
// 例子
function add(a, b, c) {
    return a + b + c
}
let partialAdd = partial(add, 1)
partialAdd(2, 3)


function partial(fn, ...args) {
    return (...arg) => {
        return fn(...args, ...arg)
    }
}
```

#### 手写bind、call、apply函数

这道题其实理清楚`apply`,`call`,`bind`的特点就行了。首先`apply`,`call`,`bind`都是强制绑定`this`,而`apply`和`call`都是立即执行，只有`bind`是返回一个函数，所以可以将`apply`和`call`放在一起分析。

通过上面的`apply`,`call`,`bind`用法可以得知：

1. `apply`,`call`,`bind`都是可以改变`this`的指向
2. `apply`,`call`会执行调用的函数，`bind`返回一个新函数。
3. `apply`第二个参数要求是数组，`call`，`bind`则没有限制数据类型，它会把剩余的参数一起传给函数，`bind`还会把新函数调用时传入的参数一起合并，传给新函数。
4. 他们都是绑定在`Function`的`prototype`上。

```js
// call
Function.prototype._call = function (context, ...args) {
   // 判断是否是个函数
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  // 不传默认是全局，window
  context = context || window
  // args不传时默认是空数组，防止下面用spread操作符时报错
  args = args ? args : []
  // 把this存到context.fn，这里的this是调用的函数
  context.fn = this
  // 执行调用的函数，this指向context，参数用spread操作符扩展
  const res = context.fn(...args)
  // 删除，不污染context
  delete context.fn
  // 返回res
  return res
}


// bind
Function.prototype._bind = function (context, ...args) {
   // 判断是否是个函数
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  // 不传默认是全局，window
  context = context || window
  // 把this存到fn，这里的this是调用的函数
  let fn = this
  return function newFn (...fnArgs) {
    let res
    // 要考虑新函数是不是会当作构造函数
    if (this instanceof newFn) {
      // 如果是构造函数则调用new 并且合并参数args，fnArgs
      res = new fn(...args, ...fnArgs)
    } else {
      // 当作普通函数调用 也可以用上面定义的_call
      res = fn.call(context, ...args, ...fnArgs)
    }
    return res
  }
}


// apply
Function.prototype._apply = function (context, args) {
  // 不传默认是全局，window
  context = context || window
  // args不传时默认是空数组，防止下面用spread操作符时报错
  args = args ? args : []
  // 把this存到context.fn，这里的this是调用的函数
  context.fn = this
  // 执行调用的函数，this指向context，参数用spread操作符扩展
  const res = context.fn(...args)
  // 删除，不污染context
  delete context.fn
  // 返回res
  return res
}
```

#### 手写jQuery

```js
class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
    // 扩展很多 DOM API
}

// 插件
jQuery.prototype.dialog = function (info) {
    alert(info)
}

// “造轮子”
class myJQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }
    // 扩展自己的方法
    addClass(className) {

    }
    style(data) {

    }
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click', () => alert('clicked'))
```

#### 手写Ajax

1. 创建`XMLHttpRequest`对象;

2. 调用`open`方法传入三个参数 请求方式`(GET/POST)、url、同步异步(true/false)`;

3. 监听`onreadystatechange`事件，当`readystate`等于4时返回`responseText`;

4. 调用send方法传递参数。

```js
 var opt = {
     url: '',
     type: 'get',
     data: {},
     success: function () {},
     error: function () {},
 };

 function ajax(opt) {
     // 声明XMLHttpRequest对象 并且做兼容处理
     var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
     var data = opt.data,
         url = opt.url,
         type = opt.type.toUpperCase(),
         dataArr = [];
     for (var k in data) {
         dataArr.push(k + '=' + data[k]);
     }
     if (type === 'GET') {
         url = url + '?' + dataArr.join('&');
         xhr.open(type, true);
         xhr.send();
     }
     if (type === 'POST') {
         xhr.open(type, url, true);
         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
         xhr.send(dataArr.join('&'));
     }
     // 只判断响应时间就可以了
     xhr.onreadystatechange = function () {
         if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
             var res;
             if (opt.success && opt.success instanceof Function) {
                 res = xhr.responseText;
                 if (typeof res === = 'string') {
                     res = JSON.parse(res);
                     opt.success.call(xhr, res);
                 }
             }
         } else {
             if (opt.error && opt.error instanceof Function) {
                 opt.error.call(xhr, res);
             }
         }
     };
 }
```

#### 手写`——proto__`

```js
Object.defineProperty(Object.prototype, "__proto__", {
    get: function() {
        return Object.getPrototypeOf(this);
    },
    // ES6中的Object.setPrototypeOf
    set: function(o) {
        Object.setPrototypeOf(this, o);
        return o;
    }
})
```

#### 手写instanceof

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

#### 手写new运算符

```js
/**
 * Con 目标对象
 * args 参数
 */
function myNew(Con, ...args) {
  // 创建一个空的对象
  let obj = {};
  // 链接到原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Con.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  let ret = Con.call(obj, ...args);
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
}


function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  console.log(`your name is ${this.name}`);
};
let p2 = myNew(Person, "lisi");
// your name is lisi
p2.getName();
```

#### 手写forEach方法

```js
Array.prototype.myForEach = function (func, context) {
      let arr = Array.prototype.slice.call(this)
    for (var i = 0; i < arr.length; i++) {
        func.call(context, arr[i], i, this)
    }
}
```

#### 手写map函数

```javascript
// 遍历数组的每一项，并执行回调函数的操作，返回一个对每一项进行操作后的新数组，
Array.prototype.map = function(fn) {
    const result = [];
    for (let i=0;i<this.length;i++) {
        if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
        // 运行传递过来的函数  是一个匿名函数
        result.push(fn(this[i],i,this))
    }
    return result
}
const arr = [1,2,3,,5]
const result = arr.map(item => item*2)
console.log(result)



//es5实现map函数
const selfMap = function (fn,context){
  //当前带有length的对象转化为数组
  let arr = Array.prototype.slice.call(this)
  let mappedArr = []
  for(let i = 0;i < arr.length;i++){
    if(!arr.hasOwnProperty(i)) continue
    mappedArr.push(fn.call(context,arr[i],i,this))    
  }
  return mappedArr
}
// 值得一提的是，map 的第二个参数为第一个参数回调中的 this 指向，如果第一个参数为箭头函数，那设置第二个 this 会因为箭头函数的词法绑定而失效


//使用reduce实现数组map方法
const selfMap2 = function(fn,context){
  let arr = Array.prototype.slice.call(this)
  return arr.reduce((pre,cur,index) => {
    return [...pre,fn.call(context,cur,index,this)]
  },[])
}
```

#### 手写filter函数

```javascript
Array.prototype.filter = function (fn){
    const result = [];
    for (let i=0;i<this.length;i++) {
        if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
        fn(this[i],i,this) && result.push(this[i])
    }
    return result
}
const arr = [1,2,3,,5]
const result = arr.filter(item => item > 2)
console.log(result)


//es5实现
const seltFilter = function(fn,context){
  let arr = Array.prototype.slice.call(this)
  let filteredArr = []
  for(let i = 0;i < arr.length;i++){
    if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
    fn.call(context,arr[i],i,this) && filteredArr.push(arr[i])
  }
}

//使用reduce实现数组filter方法
const selfFilter2 = function(fn,context){
  return this.reduce((pre,cur,index) => {
    return  fn.call(context,arr[i],i,this) ? [...pre,...cur] :[...pre]
  })
}
```

#### 手写reduce函数

```javascript
// 对数组累积执行回调函数，返回最终计算结果
Array.prototype.reduce = function (fn,initValue){
    let result = initValue?initValue:this[0]
    for (let i=0;i<this.length;i++) {
        if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
        result = fn(result, this[i], i, this)
    }
    return result
}
const arr = [1,,2,3,,5]
const result = arr.reduce((a,b) => a*b,2)
console.log(result)



//es5
const findRealELementIndex = function(arr,initiIndex){
  let index
  for(let i = initIndex || 0;i < arr.length;i++){
    if(!arr.hasOwnProperty(i)) continue
    index = i
    break
  }
  return index
}
const selfReduce = function(fn,initalValue){
  let arr = Array.prototype.slice.call(this)
  let res

  if(initalValue === undefined){
    res = arr[findRealElementIndex(arr)]
    for(let i = 0;i < arr.lenght -1;i++){
      //reduce遍历时候 需要跳过稀疏元素，遍历到最后一个非稀疏元素
      if(!arr.hasOwnProperty(i)) continue
      let realElementIndex = findRealElementIndex(arr,i+1)
      res = fn.call(null,res,arr[realElementIndex],realElementIndex,this)
    }
  }else {
    res = initalValue
    for(let i = 0;i <arr.length;i++){
      if(!arr.hasOwnProperty(i)) continue
      res = fn.call(null,res,arr[i],i,this)
    }
  }
  return res
}



//另一种es5的方法
Array.prototype.myReduce = function (func, initialValue) {
    var len = this.length,
        nextValue,
        i;
    if (!initialValue) {
        // 没有传第二个参数
        nextValue = this[0];
        i = 1;
    } else {
        // 传了第二个参数
        nextValue = initialValue;
        i = 0;
    }
    for (; i < len; i++) {
        nextValue = func(nextValue, this[i], i, this);
    }
    return nextValue;
}
```

#### 手写every函数

```javascript
Array.prototype.every = function (fn){
    let bool = true;
    for (let i=0;i<this.length;i++) {
        if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
        if (!fn(this[i],i,this)){
            bool = false
            break
        }
    }
    return bool
}
const arr = [1,2,3,,5]
const result = arr.every(item => item > 3)
console.log(result)
```

#### 手写some函数

```javascript
Array.prototype.some = function (fn){
    let bool = false;
    for (let i=0;i<this.length;i++) {
        if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
        if (fn(this[i],i,this)){
            bool = true
            break
        }
    }
    return bool
}
const arr = [1,2,3,,5]
const result = arr.some(item => item > 3)
console.log(result)


//es5
const selfSome = function(fn,context){
  let arr = Array.prototype.slice.call(this)
  if(!arr.length) return false
  let flag = false
  for(let i = 0;i < arr.length;i++){
    if(!arr.hasOwnProperty(i)) continue
    let res = fn.call(context,arr[i],i,this)
    if(res) {
      flag = true
      break
    }
  }
  return flag
}

执行 some 方法的数组如果是一个空数组，最终始终会返回 false，而另一个数组的 every 方法中的数组如果是一个空数组，会始终返回 true
```

#### 手写find方法

```javascript
// 只查找第一个
Array.prototype.find = function (fn){
    let result
    for (let i=0;i<this.length;i++) {
        if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
        if (fn(this[i],i,this)){
            result = this[i]
            break
        }
    }
    return result
}
const arr = [1,2,3,,5,4]
const result = arr.find(item => item > 3)
console.log(result)
```

#### 类数组转化为数组的方法

```js
// 类数组拥有 length 属性 可以使用下标来访问元素 但是不能使用数组的方法 如何把类数组转化为数组?

const arrayLike=document.querySelectorAll('div')

// 1.扩展运算符
[...arrayLike]
// 2.Array.from
Array.from(arrayLike)
// 3.Array.prototype.slice
Array.prototype.slice.call(arrayLike)
// 4.Array.apply
Array.apply(null, arrayLike)
// 5.Array.prototype.concat
Array.prototype.concat.apply([], arrayLike)
```

#### 手写拉平数组(数组扁平化)

```javascript
// 利用es6语法flat(num)方法将数组拉平
// 该方法不传参数默认只会拉平一层，如果想拉平多层嵌套的数组，需要传入一个整数，表示要拉平的层级。该返回返回一个新的数组，对原数组没有影响。
function flattening1(arr,num=1) {
    if (!Array.isArray(arr)) return
    return arr.flat(num)
}
// 利用 reduce() 方法将数组拉平。
// 利用 reduce 进行迭代，核心的思想是递归实现。
function flattening2(arr) {
    if (!Array.isArray(arr)) return
    return arr.reduce((a, b)=>{
        return a.concat(Array.isArray(b)?flattening2(b):b);
    }, [])
}
// 模拟栈实现数组拉平
// 该方法是模拟栈，在性能上相对最优解。
function flattening3(arr) {
    if (!Array.isArray(arr)) return
    const stack = [...arr]
    const res = []
    while (stack.length){
        let value = stack.shift()
        Array.isArray(value) ? stack.push(value) : res.push(value)
    }
    return res
}

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, ["string", { type: "对象" }]];
const result1 = flattening1(arr,1)
const result2 = flattening2(arr)
const result3 = flattening2(arr)
console.log(result3)

//使用reduce实现数组的flat方法
```

#### 实现一个对象的扁平化方法

```js
const obj = {
 a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
 b: [1, 3, {a: 2, b: 3}],
 c: 3
}

flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
```

```js
function isObject(val) {
  return typeof val === "object" && val !== null;
}

function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");

  return res;
}
flatten();








// 没有数组的情况
function objectFlat(obj = {}) {
  const res = {}
  function flat(item, preKey = '') {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key
      if (val && typeof val === 'object') {
        flat(val, newKey)
      } else {
        res[newKey] = val
      }
    })
  }
  flat(obj)
  return res
}

// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source));
// { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f.g': 2 }
```

#### 手写图片懒加载&惰性函数

实现图片懒加载其核心的思想就是将 img 的 src 属性先使用一张本地占位符，或者为空。然后真实的图片路径再定义一个 data-set 属性存起来，待达到一定条件的时将 data-img 的属性值赋给 src。
如下是通过scroll滚动事件监听来实现的图片懒加载，当图片都加载完毕移除事件监听，并且将移除 html 标签。

```javascript
const lazyLoad = function(imgs){
    let count = 0
    const deleteImgs = []
    const handler = () => {
        imgs.forEach((item,index) => {
            // getBoundingClientRect用于获取某个元素相对于视窗的位置集合
            const react = item.getBoundingClientRect()
            if (react.top<window.innerHeight){
                item.src = dataset.src
                count++
                deleteImgs.push(index)
                if (count === deleteImgs.length) document.removeEventListener('scroll',lazyLoad)
            }
        })
        imgs = imgs.filter((item,index)=>!deleteImgs.includes(index))
    }
    return handler()
}
```

scroll滚动事件容易造成性能问题。那可以通过 IntersectionObserver 自动观察 img 标签是否进入可视区域。
实例化 IntersectionObserver 实例，接受两个参数：callback 是可见性变化时的回调函数，option 是配置对象（该参数可选）。
当 img 标签进入可视区域时会执行实例化时的回调，同时给回调传入一个 entries 参数，保存着实例观察的所有元素的一些状态，比如每个元素的边界信息，当前元素对应的 DOM 节点，当前元素进入可视区域的比率，每当一个元素进入可视区域，将真正的图片赋值给当前 img 标签，同时解除对其的观察。

```javascript
const lazyLoad = function(imgs){
  const observer = new InteractionObserver((entities)=>{
      entities.forEach((entity) => {
          if(entity.intersectionRatio > 0) {
              entity.target.src = dataset.src
              observer.unobserve(entity.target)
          }
      })
  })
  imgs.forEach((img) => observer.observe(img))
}
```

#### 手写Object.create

Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

```js
Object.create2 = function(proto, propertyObject = undefined) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object or null.')
    if (propertyObject == null) {
        new TypeError('Cannot convert undefined or null to object')
    }
    function F() {}
    F.prototype = proto
    const obj = new F()
    if (propertyObject != undefined) {
        Object.defineProperties(obj, propertyObject)
    }
    if (proto === null) {
        // 创建一个没有原型对象的对象，Object.create(null)
        obj.__proto__ = null
    }
    return obj
}
```

#### 手写Object.assign

```js
Object.assign2 = function(target, ...source) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    let ret = Object(target) 
    source.forEach(function(obj) {
        if (obj != null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key]
                }
            }
        }
    })
    return ret
}
```

#### 手写JSON.stringify
JSON.stringify([, replacer [, space]) 方法是将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串。此处模拟实现，不考虑可选的第二个参数 replacer 和第三个参数 space。
- 基本数据类型：
  - undefined 转换之后仍是 undefined(类型也是 undefined)
  - boolean 值转换之后是字符串 "false"/"true"
  - number 类型(除了 NaN 和 Infinity)转换之后是字符串类型的数值
  - symbol 转换之后是 undefined
  - null 转换之后是字符串 "null"
  - string 转换之后仍是string
  - NaN 和 Infinity 转换之后是字符串 "null"
- 函数类型：转换之后是 undefined
- 如果是对象类型(非函数)
  - 如果是一个数组：如果属性值中出现了 undefined、任意的函数以及 symbol，转换成字符串 "null" ；
  - 如果是 RegExp 对象：返回 {} (类型是 string)；
  - 如果是 Date 对象，返回 Date 的 toJSON 字符串值；
  - 如果是普通对象；
    - 如果有 toJSON() 方法，那么序列化 toJSON() 的返回值。
    - 如果属性值中出现了 undefined、任意的函数以及 symbol 值，忽略。
    - 所有以 symbol 为属性键的属性都会被完全忽略掉。
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
  ```js
  function jsonStringify(data) {
    let dataType = typeof data;
    if (dataType !== 'object') {
        let result = data;
        //data 可能是 string/number/null/undefined/boolean
        if (Number.isNaN(data) || data === Infinity) {
            //NaN 和 Infinity 序列化返回 "null"
            result = "null";
        } else if (dataType === 'function' || dataType === 'undefined' || dataType === 'symbol') {
            //function 、undefined 、symbol 序列化返回 undefined
            return undefined;
        } else if (dataType === 'string') {
            result = '"' + data + '"';
        }
        //boolean 返回 String()
        return String(result);
    } else if (dataType === 'object') {
        if (data === null) {
            return "null"
        } else if (data.toJSON && typeof data.toJSON === 'function') {
            return jsonStringify(data.toJSON());
        } else if (data instanceof Array) {
            let result = [];
            //如果是数组
            //toJSON 方法可以存在于原型链中
            data.forEach((item, index) => {
                if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
                    result[index] = "null";
                } else {
                    result[index] = jsonStringify(item);
                }
            });
            result = "[" + result + "]";
            return result.replace(/'/g, '"');
        } else {
            //普通对象
            /**
             * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
             * symbol key 忽略
             * undefined、函数、symbol 为属性值，被忽略
             */
            let result = [];
            Object.keys(data).forEach((item, index) => {
                if (typeof item !== 'symbol') {
                    //key 如果是symbol对象，忽略
                    if (data[item] !== undefined && typeof data[item] !== 'function'
                        && typeof data[item] !== 'symbol') {
                        //键值如果是 undefined、函数、symbol 为属性值，忽略
                        result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
                    }
                }
            });
            return ("{" + result + "}").replace(/'/g, '"');
        }
    }
  }
  ```
#### 手写JSON.parse
把JSON字符串解析为原生JavaScript对象
- 介绍 2 种方法实现：
  - eval 实现；
  - new Function 实现；
```js
// eval 实现
var json = '{"a":"1", "b":2}';
var obj = eval("(" + json + ")");  // obj 就是 json 反序列化之后得到的对象



// // 但是直接调用 eval 会存在安全问题，如果数据中可能不是 json 数据，而是可执行的 JavaScript 代码，那很可能会造成 XSS 攻击。因此，在调用 eval 之前，需要对数据进行校验。
var rx_one = /^[\],:{}\s]*$/;
var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rx_four = /(?:^|:|,)(?:\s*\[)+/g;

if (
    rx_one.test(
        json.replace(rx_two, "@")
            .replace(rx_three, "]")
            .replace(rx_four, "")
    )
) {
    var obj = eval("(" +json + ")");
}
```

```js
// new Function 实现
// Function 与 eval 有相同的字符串参数特性。
var json = '{"name":"小姐姐", "age":20}';
var obj = (new Function('return ' + json))();
```

#### 手写预加载

```javascript
let images = [...document.querySelectorAll('img')]
const loadedImages = function(...imgs){
    const imagesArr = []
    let count = 0
    for (let i=0;i<images.length;i++) {
        const img = new Image()
        img.onload = function(){
            imgs[i].src = imagesArr[i]
            count++
            if (count === imagesArr.length) {
                console.log("加载完成")
            }
        }

    }
    return {
        setSrc: function(...args) {
            imgs.forEach((img) => img.src = '///loading.png')
            imagesArrr = args
        }
    }
}
```

#### 手写-防抖节流1

```js
// 防抖
function debounce(fn, delay = 300) {
  //默认300毫秒
  let timer;
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args); // 改变this指向为调用debounce所指的对象
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  debounce(() => {
    console.log(111);
  }, 1000)
);




// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log(111);
  }, 1000)
);
```

#### 手写-节流防抖2
针对高频的触发的函数，我们一般都会思考通过节流或者防抖去实现性能上的优化。
节流实现原理是通过定时器以和时间差做判断。定时器有延迟的能力，事件一开始不会立即执行，事件结束后还会再执行一次；而时间差事件一开始就立即执行，时间结束之后也会立即停止。
结合两者的特性封装节流函数：

```javascript
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

function throttle(fn, gapTime) {
  let timer = null
  return function(){
    var _self = this,_args = argument;
    if(timer){
      return 
    }
    timer = setTimeout(() => {
      fn.apply(_self,_args)
      timer = null
    })
  }
}
```

#### 手写-防抖节流3
```js
// 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。
// 简单版：函数内部支持使用 this 和 event 对象；
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
// 最终版：除了支持 this 和 event 外，还支持以下功能：
// 支持立即执行；
// 函数可能有返回值；
// 支持取消功能；
function debounce(func, wait, immediate) {
    var timeout, result;

    var debounced = function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        } else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
        return result;
    };

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
```

```js
// 触发高频事件，且 N 秒内只执行一次。
// 简单版：使用时间戳来实现，立即执行一次，然后每 N 秒执行一次。
function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}


// 最终版：支持取消节流；另外通过传入第三个参数，options.leading 来表示是否可以立即执行一次，opitons.trailing 表示结束调用的时候是否还要执行一次，默认都是 true。注意设置的时候不能同时将 leading 或 trailing 设置为 false。
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }
    return throttled;
}
```

#### JS函数防抖和函数节流

1. 函数防抖(debounce)
   - **概念：** `在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。`
   - **生活中的实例：** `如果有人进电梯（触发事件），那电梯将在10秒钟后出发（执行事件监听器），这时如果又有人进电梯了（在10秒内再次触发该事件），我们又得等10秒再出发（重新计时）。`**生活中的实例：** `我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。`
   - **事件响应函数在一段规定时间（前/后）才执行。如果在规定时间内，再次触发，重新计算时间。**
   - **触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间**
   - **防抖动是将多次执行变为最后一次执行**
   - **函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。**
2. 函数节流(throttle)
   - **概念：** `规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。`
   - **生活中的实例：** `我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。`、
   - **高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率**
   - **节流是将多次执行变成每隔一段时间执行。**
   - **函数节流是指一定时间内js方法只跑一次。**

对于函数防抖，有以下几种应用场景：
- 防止表单多次提交。
- 对于输入框连续输入进行AJAX验证时，用函数防抖能有效减少请求次数。搜索框输入查询（监听输入框输入内容，设定每隔一段时间访问接口。
- 判断`scroll`是否滑到底部，`滚动事件`+`函数防抖`
- 浏览器窗口缩放时，resize事件。
- 手机号，邮箱验证输入检测

总的来说，适合多次事件**一次响应**的情况
```js
// 包含立即执行
function debounce(fn, wait = 200, immediate = false) {
  let timer = null, 
      isEnd = true, // 默认后执行  用变量来判断先后执行
      result
  let debounced = function (...args) {
    if (timer) clearTimeout(timer)
    if (immediate) { // 立即执行
      // 改变this指向
      isEnd && (result = fn.apply(this, args))
      isEnd = false
    }
    // 后执行
    timer = setTimeout(() => {
      (!immediate) && (result = fn.apply(this, args))
      isEnd = true
    }, wait)
    return result
  }
  debounced.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
  }
  return debounced
}




//解决函数异步问题 
//  配合async 和  awit使用
function debounce(fn, wait, immediate) {
  let timer = null, result
  let debounced = function (...args) {
    // 使用Promise
    return new Promise(res => {
      if (timer) clearInterval(timer)
      if (immediate) {// 立即执行
        if (!timer) {
          result = fn.apply(this, args)
          res(result)
        }
        //当我们提交失败了怎么办（哭），在设定的时间间隔内，将timer设置为null, 过了设定的时间间隔，可以再次触发提交按钮的立即执行，这才是完整的。
        timer = setTimeout(() => {
          timer = null
        }, wait);
      } else {
        timer = setTimeout(() => {
          result = fn.apply(this, args)
          res(result)
        }, wait);
      }
    })
  }
  debounced.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
  }
  return debounced
}


var fn = function () {
  console.log('boom')
}

setInterval(debounce(fn,500),1000) // 第一次在1500ms后触发，之后每1000ms触发一次

setInterval(debounce(fn,2000),1000) // 不会触发一次（我把函数防抖看出技能读条，如果读条没完成就用技能，便会失败而且重新读条）
```

对于函数节流，有如下几个场景：
- 游戏中的刷新率
- DOM元素拖拽
- Canvas画笔功能

总的来说，适合**大量事件**按时间做**平均**分配触发。
```js
function throttle(fn, gapTime) {
  let timer = null
  return function(){
    var _self = this,_args = argument;
    if(timer){
      return 
    }
    timer = setTimeout(() => {
      fn.apply(_self,_args)
      timer = null
    })
  }
}

let fn = ()=>{
  console.log('boom')
}

setInterval(throttle(fn,1000),10)
```

函数防抖和函数节流是**在时间轴上控制函数的执行次数**。防抖可以类比为`电梯不断上乘客`,节流可以看做`幻灯片限制频率播放电影`。

#### 冒泡排序--时间复杂度 n^2

```js
function bubbleSort(arr) {
  // 缓存数组长度
  const len = arr.length;
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - 1; j++) {
      // 若相邻元素前面的数比后面的大
      if (arr[j] > arr[j + 1]) {
        // 交换两者
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // 返回数组
  return arr;
}
// console.log(bubbleSort([3, 6, 2, 4, 1]));
```

#### 选择排序--时间复杂度 n^2

```js
function selectSort(arr) {
  // 缓存数组长度
  const len = arr.length;
  // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
  let minIndex;
  // i 是当前排序区间的起点
  for (let i = 0; i < len - 1; i++) {
    // 初始化 minIndex 为当前区间第一个元素
    minIndex = i;
    // i、j分别定义当前区间的上下界，i是左边界，j是右边界
    for (let j = i; j < len; j++) {
      // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// console.log(quickSort([3, 6, 2, 4, 1]));
```

#### 插入排序--时间复杂度 n^2

```js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let target = arr[j];
    while (j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}
// console.log(insertSort([3, 6, 2, 4, 1]));
```

#### 快排--时间复杂度 nlogn~ n^2 之间

```js
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const cur = arr[arr.length - 1];
  const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
  const right = arr.filter((v) => v > cur);
  return [...quickSort(left), cur, ...quickSort(right)];
}
// console.log(quickSort([3, 6, 2, 4, 1]));
```

#### 归并排序--时间复杂度 nlog(n)

```js
function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  if (i < left.length) {
    res.push(...left.slice(i));
  } else {
    res.push(...right.slice(j));
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
// console.log(mergeSort([3, 6, 2, 4, 1]));
```

#### 二分查找--时间复杂度 log2(n)

```js
function search(arr, target, start, end) {
  let targetIndex = -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    targetIndex = mid;
    return targetIndex;
  }

  if (start >= end) {
    return targetIndex;
  }

  if (arr[mid] < target) {
    return search(arr, target, mid + 1, end);
  } else {
    return search(arr, target, start, mid - 1);
  }
}
// const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const position = search(dataArr, 6, 0, dataArr.length - 1);
// if (position !== -1) {
//   console.log(`目标元素在数组中的位置:${position}`);
// } else {
//   console.log("目标元素不在数组中");
// }
```

#### 大数相加

```js
// 题目描述:实现一个add方法完成两个大数相加
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //...
}
```

```js
function add(a ,b){
   //取两个数字的最大长度
   let maxLength = Math.max(a.length, b.length);
   //用0去补齐长度
   a = a.padStart(maxLength , 0);//"0009007199254740991"
   b = b.padStart(maxLength , 0);//"1234567899999999999"
   //定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   //"进位"
   let sum = "";
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10);
      sum = t%10 + sum;
   }
   if(f!==0){
      sum = '' + f + sum;
   }
   return sum;
}
```

#### LRU 算法

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211018153230.png)

```js
//  一个Map对象在迭代时会根据对象中元素的插入顺序来进行
// 新添加的元素会被插入到map的末尾，整个栈倒序查看
class LRUCache {
  constructor(capacity) {
    this.secretKey = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (this.secretKey.has(key)) {
      let tempValue = this.secretKey.get(key);
      this.secretKey.delete(key);
      this.secretKey.set(key, tempValue);
      return tempValue;
    } else return -1;
  }
  put(key, value) {
    // key存在，仅修改值
    if (this.secretKey.has(key)) {
      this.secretKey.delete(key);
      this.secretKey.set(key, value);
    }
    // key不存在，cache未满
    else if (this.secretKey.size < this.capacity) {
      this.secretKey.set(key, value);
    }
    // 添加新key，删除旧key
    else {
      this.secretKey.set(key, value);
      // 删除map的第一个元素，即为最长未使用的
      this.secretKey.delete(this.secretKey.keys().next().value);
    }
  }
}
// let cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log("cache.get(1)", cache.get(1))// 返回  1
// cache.put(3, 3);// 该操作会使得密钥 2 作废
// console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
// cache.put(4, 4);// 该操作会使得密钥 1 作废
// console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
// console.log("cache.get(3)", cache.get(3))// 返回  3
// console.log("cache.get(4)", cache.get(4))// 返回  4
```

#### 树形结构转成列表

```js
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
]
```

```js
function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
    tree.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    });
  };
  dfs(data);
  return res;
}
```

#### 列表转成树形结构

```js
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
]

转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
```

```js
function listToTree(data) {
  let temp = {};
  let treeData = [];
  for (let i = 0; i < data.length; i++) {
    temp[data[i].id] = data[i];
  }
  for (let i in temp) {
    if (+temp[i].parentId != 0) {
      if (!temp[temp[i].parentId].children) {
        temp[temp[i].parentId].children = [];
      }
      temp[temp[i].parentId].children.push(temp[i]);
    } else {
      treeData.push(temp[i]);
    }
  }
  return treeData;
}
```

#### 实现模板字符串解析功能

```js
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined
```

```js
function render(template, data) {
  let computed = template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
    return data[key];
  });
  return computed;
}
```

#### 将虚拟 Dom 转化为真实 Dom

```js
{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
```

```js
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}
```

#### 分片思想解决大数据量渲染问题

```js
// 题目描述:渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染


let ul = document.getElementById("container");
// 插入十万条数据
let total = 100000;
// 一次插入 20 条
let once = 20;
//总页数
let page = total / once;
//每条记录的索引
let index = 0;
//循环加载数据
function loop(curTotal, curIndex) {
  if (curTotal <= 0) {
    return false;
  }
  //每页多少条
  let pageCount = Math.min(curTotal, once);
  window.requestAnimationFrame(function () {
    for (let i = 0; i < pageCount; i++) {
      let li = document.createElement("li");
      li.innerText = curIndex + i + " : " + ~~(Math.random() * total);
      ul.appendChild(li);
    }
    loop(curTotal - pageCount, curIndex + pageCount);
  });
}
loop(total, index);
```

#### Object.is 实现

```md
Object.is不会转换被比较的两个值的类型，这点和===更为相似，他们之间也存在一些区别。
    1. NaN在===中是不相等的，而在Object.is中是相等的
    2. +0和-0在===中是相等的，而在Object.is中是不相等的
```

```js
Object.is = function (x, y) {
  if (x === y) {
    // 当前情况下，只有一种情况是特殊的，即 +0 -0
    // 如果 x !== 0，则返回true
    // 如果 x === 0，则需要判断+0和-0，则可以直接使用 1/+0 === Infinity 和 1/-0 === -Infinity来进行判断
    return x !== 0 || 1 / x === 1 / y;
  }

  // x !== y 的情况下，只需要判断是否为NaN，如果x!==x，则说明x是NaN，同理y也一样
  // x和y同时为NaN时，返回true
  return x !== x && y !== y;
};
```

#### 动态规划求解硬币找零问题

```md
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1

示例1：
输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1

示例2：
输入: coins = [2], amount = 3
输出: -1
```

```js
const coinChange = function (coins, amount) {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = [];
  // 提前定义已知情况
  f[0] = 0;
  // 遍历 [1, amount] 这个区间的硬币总额
  for (let i = 1; i <= amount; i++) {
    // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
    f[i] = Infinity;
    // 循环遍历每个可用硬币的面额
    for (let j = 0; j < coins.length; j++) {
      // 若硬币面额小于目标总额，则问题成立
      if (i - coins[j] >= 0) {
        // 状态转移方程
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
      }
    }
  }
  // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
  if (f[amount] === Infinity) {
    return -1;
  }
  // 若有解，直接返回解的内容
  return f[amount];
}
```

#### 实现 LazyMan

```md
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
```

```js
class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    setTimeout(() => {
      // 把 this.next() 放到调用栈清空之后执行
      this.next();
    }, 0);
  }
  next() {
    const task = this.tasks.shift(); // 取第一个任务执行
    task && task();
  }
  sleep(time) {
    this._sleepWrapper(time, false);
    return this; // 链式调用
  }
  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }
  _sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(task); // 放到任务队列顶部
    } else {
      this.tasks.push(task); // 放到任务队列尾部
    }
  }
  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}
function LazyMan(name) {
  return new _LazyMan(name);
}
```

#### 类的继承方式(优缺点)

1. **借助构造函数实现继承**

使用`借用构造函数`的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

```js
            function Parent1 () {
          this.name = 'parent1';
      }
            // 子类无法继承父类原型链上的方法
      Parent1.prototype.say = function () {};
      function Child1 () {
          //修改执行上下文
          Parent1.call(this);
          this.type = 'child1';
      }
      console.log(new Child1(), new Child1().say());
```

2. **借助原型链实现继承**

以`原型链的方式来实现继承`，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

```js
     function Parent2 () {
          this.name = 'parent2';
          this.play = [1, 2, 3];
      }
      function Child2 () {
          this.type = 'child2';
      }
      Child2.prototype = new Parent2();

      var s1 = new Child2();
      var s2 = new Child2();
            // s1.__proto__ === s2.__proto__  true
      console.log(s1.play, s2.play);
      // 原型链继承的同一个对象引用，创建对个实例，实例使用的都是一个对象，修改一个另一个也跟着变，因为是一个。
            s1.play.push(4);
```

3. **组合方式**（构造函数+原型链）

`组合继承`，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

```js
      // 解决了上面两种的每个问题
            // 父类多次实例化问题
            function Parent3 () {
          this.name = 'parent3';
          this.play = [1, 2, 3];
      }
      function Child3 () {
          Parent3.call(this);
          this.type = 'child3';
      }
            // 就是为了继承父类的原型对象
      Child3.prototype = new Parent3();
      var s3 = new Child3();
      var s4 = new Child3();
      s3.play.push(4);
      console.log(s3.play, s4.play);
```

4. **组合继承优化1**
   
   ```js
            function Parent4 () {
          this.name = 'parent4';
          this.play = [1, 2, 3];
      }
      function Child4 () {
          Parent4.call(this);
          this.type = 'child4';
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

5. **组合继承优化2**

`原型式继承`，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

```js
            function Parent5 () {
          this.name = 'parent5';
          this.play = [1, 2, 3];
      }
      function Child5 () {
          Parent5.call(this);
          this.type = 'child5';
      }
            // 对象关联 一个新的对象  子类和父类的原型进行隔离
      Child5.prototype = Object.create(Parent5.prototype);
            Child5.prototype.constructor = Child5
```

（1）第一种是以`原型链的方式来实现继承`，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

（2）第二种方式是使用`借用构造函数`的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

（3）第三种方式是`组合继承`，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

（4）第四种方式是`原型式继承`，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

（5）第五种方式是`寄生式继承`，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

（6）第六种方式是`寄生式组合继承`，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

#### settimeout 模拟实现 setinterval(带清除定时器的版本)

```js
// 题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
function mySettimeout(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }
  interval();
  return {
    cancel:()=>{
      clearTimeout(timer)
    }
  }
}
// let a=mySettimeout(()=>{
//   console.log(111);
// },1000)
// let b=mySettimeout(() => {
//   console.log(222)
// }, 1000)


// 我们能反过来使用 setinterval 模拟实现 settimeout 吗？
const mySetTimeout = (fn, time) => {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time);
};
// mySetTimeout(()=>{
//   console.log(1);
// },1000)
```

#### 浅拷贝

如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

浅拷贝后会重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后引用类型会共享堆中的内存，引用类型就会互相影响

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809212740.png)

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
//方法 3
let obj1 = {
    name: 'yang',
    res: {
        value: 123
    }
}
let {...obj2} = obj1
obj2.res.value = 456
console.log(obj2) // {name: "yang", res: {value: 456}}
console.log(obj1) // {name: "yang", res: {value: 456}}
obj2.name = 'haha'
console.log(obj2) // {name: "haha", res: {value: 456}}
console.log(obj1) // {name: "yang", res: {value: 456}}
//方法 4
 const arr1 = [
     'yang',
     {
         value: 123
     }
 ];
 const arr2 = arr1.slice(0);
 arr2[1].value = 456;
 console.log(arr2); // ["yang", {value: 456}]
 console.log(arr1); // ["yang", {value: 456}]
 arr2[0] = 'haha';
 console.log(arr2); // ["haha", {value: 456}]
 console.log(arr1); // ["yang", {value: 456}]
//方法 5
const arr1 = [
      'yang',
      {
          value: 123
      }
  ];
  const arr2 = [].concat(arr1);
  arr2[1].value = 456;
  console.log(arr2); // ["yang", {value: 456}]
  console.log(arr1); // ["yang", {value: 456}]
  arr2[0] = 'haha';
  console.log(arr2); // ["haha", {value: 456}]
  console.log(arr1); // ["yang", {value: 456}]
```

```
实际上对于数组来说， 只要不修改原数组， 重新返回一个新数组就可以实现浅拷贝，比如说map、filter、reduce等方法
```

#### 深拷贝

将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。深拷贝开辟了新的堆内存地址，并且将对象的引用指向了新开辟的内存地址，和前面复制的对象完全独立，自立根生，拷贝地很深，学功夫学到家，自立门户的感觉。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809212944.png)

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
deepStudent.name = "李雷";
deepStudent.score.english = 98;
console.log("deepStudent: ", deepStudent);
console.log("student: ", student);





//方法 2 深拷贝更为通用的做法：递归遍历赋值
var deepClone = function (target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
           cloneTarget[key] = deepClone(target[key]);
       }
    }
    return cloneTarget;
  } else {
    return target;
  }
};



// target.target = target;
// 这个case如果还用以上递归代码的话，会导致死循环、栈内存溢出。
// 附加考虑循环引用
var deepClone = function (target, map = new Map()) {
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





// 方法3
function deepCopy(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj
  // 防止循环引用
  if (cache.get(obj)) return cache.get(obj)
  // 支持函数
  if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments)
    }
  }
  // 支持日期
  if (obj instanceof Date) return new Date(obj)
  // 支持正则对象
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  // 还可以增加其他对象，比如：Map, Set等，根据情况判断增加即可，面试点到为止就可以了

  // 数组是 key 为数字素银的特殊对象
  const res = Array.isArray(obj) ? [] : {}
  // 缓存 copy 的对象，用于处理循环引用的情况
  cache.set(obj, res)

  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = deepCopy(obj[key], cache)
    } else {
      res[key] = obj[key]
    }
  });
  return res
}

// 测试
const source = {
  name: 'Jack',
  meta: {
    age: 12,
    birth: new Date('1997-10-10'),
    ary: [1, 2, { a: 1 }],
    say() {
      console.log('Hello');
    }
  }
}
source.source = source
const newObj = deepCopy(source)
console.log(newObj.meta.ary[2] === source.meta.ary[2]); // false
console.log(newObj.meta.birth === source.meta.birth); // false






// 超级全面的深拷贝
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";
const argsTag = "[object Arguments]";
const boolTag = "[object Boolean]";
const dateTag = "[object Date]";
const numberTag = "[object Number]";
const stringTag = "[object String]";
const symbolTag = "[object Symbol]";
const errorTag = "[object Error]";
const regexpTag = "[object RegExp]";
const funcTag = "[object Function]";
const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}
function getType(target) {
  return Object.prototype.toString.call(target);
}
function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}
function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe));
}
function cloneReg(targe) {
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
}
function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      if (param) {
        const paramArr = param[0].split(",");
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}
// 处理 不可继续遍历的类型
function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    case funcTag:
      return cloneFunction(targe);
    default:
      return null;
  }
}
function clone(target, map = new WeakMap()) {
  // 克隆原始类型
  if (!isObject(target)) {
    return target;
  }
  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target, type);
  } else {
    return cloneOtherType(target, type);
  }
  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);
  // 克隆set
  if (type === setTag) {
    target.forEach((value) => {
      cloneTarget.add(clone(value, map));
    });
    return cloneTarget;
  }
  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value, map));
    });
    return cloneTarget;
  }
  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = clone(target[key], map);
  });

  return cloneTarget;
}
module.exports = {
  clone,
};





// 其他的高级版
function deepClone(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj
  // 防止循环引用
  if (cache.get(obj)) return cache.get(obj)
  // 支持函数
  if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments)
    }
  }
  // 支持日期
  if (obj instanceof Date) return new Date(obj)
  // 支持正则对象
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)

  // 数组是 key 为数字索引的特殊对象
  const res = Array.isArray(obj) ? [] : {}
  // 缓存 copy 的对象，用于处理循环引用的情况
  cache.set(obj, res)

  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = deepClone(obj[key], cache)
    } else {
      res[key] = obj[key]
    }
  });
  return res
}




// 其他高级版本2
// 深拷贝：对对象内部进行深拷贝，支持 Array、Date、RegExp、DOM
const deepCopy = (sourceObj) => {
  // 如果不是对象则退出（可停止递归）
  if(typeof sourceObj !== 'object') return;

  // 深拷贝初始值：对象/数组
  let newObj = (sourceObj instanceof Array) ? [] : {};

  // 使用 for-in 循环对象属性（包括原型链上的属性）
  for (let key in sourceObj) { 
    // 只访问对象自身属性
    if (sourceObj.hasOwnProperty(key)) {
      // 当前属性还未存在于新对象中时
      if(!(key in newObj)){
        if (sourceObj[key] instanceof Date) {
          // 判断日期类型
          newObj[key] = new Date(sourceObj[key].getTime());
        } else if (sourceObj[key] instanceof RegExp) {
          // 判断正则类型
          newObj[key] = new RegExp(sourceObj[key]);
        } else if ((typeof sourceObj[key] === 'object') && sourceObj[key].nodeType === 1 ) {
          // 判断 DOM 元素节点
          let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0];
          newObj[key] = domEle.cloneNode(true);
        } else {
          // 当元素属于对象（排除 Date、RegExp、DOM）类型时递归拷贝
          newObj[key] = (typeof sourceObj[key] === 'object') ? deepCopy(sourceObj[key]) : sourceObj[key];
        }
      }
    }
  }
  return newObj;
}
// deepCopy 函数测试效果
const objA = {
  name: 'jack',
  birthday: new Date(),
  pattern: /jack/g,
  body: document.body,
  others: [123,'coding', new Date(), /abc/gim,]
};
const objB = deepCopy(objA);
console.log(objA === objB); // false
console.log(objA.others === objB.others); // false
console.log(objA, objB); // 对象内容一样
```

#### vue reactive

```js
// Dep module
class Dep {
  static stack = []
  static target = null
  deps = null

  constructor() {
    this.deps = new Set()
  }

  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target)
    }
  }

  notify() {
    this.deps.forEach(w => w.update())
  }

  static pushTarget(t) {
    if (this.target) {
      this.stack.push(this.target)
    }
    this.target = t
  }

  static popTarget() {
    this.target = this.stack.pop()
  }
}

// reactive
function reactive(o) {
  if (o && typeof o === 'object') {
    Object.keys(o).forEach(k => {
      defineReactive(o, k, o[k])
    })
  }
  return o
}

function defineReactive(obj, k, val) {
  let dep = new Dep()
  Object.defineProperty(obj, k, {
    get() {
      dep.depend()
      return val
    },
    set(newVal) {
      val = newVal
      dep.notify()
    }
  })
  if (val && typeof val === 'object') {
    reactive(val)
  }
}

// watcher
class Watcher {
  constructor(effect) {
    this.effect = effect
    this.update()
  }

  update() {
    Dep.pushTarget(this)
    this.value = this.effect()
    Dep.popTarget()
    return this.value
  }
}

// 测试代码
const data = reactive({
  msg: 'aaa'
})

new Watcher(() => {
  console.log('===> effect', data.msg);
})

setTimeout(() => {
  data.msg = 'hello'
}, 1000)
```

#### 手写通过Promise实现sleep方法

很多编程语言里都有sleep()，delay()等方法，它能让我们的程序不那么着急的去执行下一步操作，而是延迟、等待一段时间。

```js
function sleep(s){
    s = s || 0;
    s  = parseInt(s) * 1000;
    let now = +new Date();
    let timer = null;
    return new Promise((resolve, reject)=>{
        timer = setInterval(()=>{
            if( now + s < +new Date()){
                clearInterval(timer);
                resolve(true);
            }
        }, 10)
    })
}


(async function() {
  console.log('Do some thing, ' + new Date());
  await sleep(3000);
  console.log('Do other things, ' + new Date());
})();
```
#### 手写简易版axios
```js
 function axios({
        //注意这里使用结构赋值，可以传默认值
        url,
        //默认请求方式为GET
        method = 'GET',
        //params用于接受get请求的参数，请求时直接带在url后面
        params = {},
        //data用于接受post方法的参数
        data = {},
    }) {
        //返回一个promise对象
        return new Promise((resolve, reject) => {
            // 定义一个字符串保存url后面的拼接参数部分
            let queryString = '';
            // 得到key组成的数组
            // Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
            Object.keys(params).forEach(key => {
                    // 这里使用模板字符串简化代码，同时key是一个变量，用[]而不是点语法取出
                    queryString += `${key}=${params[key]}&`
                })
                // 如果queryString非空，也就是说使用get请求传参，我们直接将参数拼接在url后面
            if (queryString) {
                // substring() 方法用于提取字符串中介于两个指定下标之间的字符。
                // 注意最后一个字符是&，因此我们取length-1个字符
                queryString = queryString.substring(0, queryString.length - 1)
                    //用？分割并拼接
                url += '?' + queryString;
            }
            // 创建xhr对象
            const request = new XMLHttpRequest()
                // 打开连接
            request.open(method, url, true)
                // 绑定状态改变的监听（异步，当状态为4时才会继续执行）
            request.onreadystatechange = function() {
                if (request.readyState != 4) {
                    return
                }
                // 发送请求 
                // 如果是get请求，已经在url中携带参数了，直接传null
                if (method == 'GET') {
                    request.send(null)
                        //如果是post请求，将data作为参数发送
                } else if (method == "POST") {
                    // 添加请求头
                    request.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
                        // JSON格式话data并发送请求
                    request.send(JSON.stringify(data))
                }
                //这时request会返回status和报文
                // 解构赋值，这里仅返回状态码和报文
                const {
                    status,
                    statusText
                } = request
                // 状态码在200到300间代表成功
                if (status >= 200 && status < 300) {
                    // 对返回值进行结构赋值
                    const response = {
                            //  JSON.stringify 将数组,对象转换成 JSON 字符串，然后使用 JSON.parse 将该字符串重新转换成数组，对象。
                            data: JSON.parse(request.response),
                            status,
                            statusText
                        }
                        // 执行回调函数并将response作为参数
                    resolve(response)
                } else {
                    reject(new Error('resquest error status is' + status))
                }

            }

        })
    }`

```
## Git
### git命令
### 一个业务场景：a，b，c，d，要删除c的提交，git怎么操作（git revert）
## 色子点数

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211111101458.png)

```html
<div class="dice">
    <div class="row1">
        <div class="one-face">
            <span class="pot"></span>
        </div>

        <div class="three-face">
            <span class="pot"></span>
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
    </div>

    <div class="row2">
        <div class="two-face">
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
        <div class="four-face">
            <div class="column">
                <span class="pot"></span>
                <span class="pot"></span>
            </div>
            <div class="column">
                <span class="pot"></span>
                <span class="pot"></span>
            </div>
        </div>
    </div>
</div>



<style>
    body{
        background-color: black;               
    }
    .dice{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    [class $='face']{
        margin:16px;/*设置所有外边距属性*/
        padding:4px;/*设置所有填充属性*/
        background-color: lightgray;
        width: 120px;
        height:120px;
        -o-object-fit: contain;
        object-fit: contain;/*指定元素的内容应该如何去适应指定容器的高度与宽度。contain-保持原有尺寸比例。内容被缩放。*/
        -webkit-box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7 ;
        /*inset-从外层的阴影（开始时）改变阴影内侧阴影;5px-阴影大小;0-模糊距离*/
        box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7 ;
        border-radius: 10%;                 
    }
    .pot{
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin: 4px;
        background-color: #333;
        -webkit-box-shadow: inset 0 3px #111,inset 0 -3px #555;
        box-shadow: inset 0 3px #111,inset 0 -3px #555;
    }
    .one-face{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .two-face,
    .three-face,
    .four-face{
        display: flex;
        justify-content: space-between;
    }
    .two-face .pot:nth-of-type(2){/*匹配属于父元素的特定类型的第 N 个子元素的每个元素*/
        align-self: flex-end;
    }
    [class^='row']{
        display: flex;
        flex-direction: column;
    }
    .three-face .pot:nth-of-type(2){
        align-self: center;
    }
    .three-face .pot:nth-of-type(3){
        align-self: flex-end;
    }
    .four-face .column{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211111101717.png)

```html
<div class="one-first-left-face">
    <span class="pot"></span>
</div>

body{
    background-color: black;
}
.dice{
    display:flex;
    justify-content: center;/*水平方式对齐*/
    align-items: center;/*垂直方向对齐*/
    flex-wrap: wrap;/*换行*/   
}
[class $='face']{
    margin:16px;
    padding:4px;
    background-color: lightgray;
    width: 120px;
    height:120px;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7 ;
    box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7 ;
    border-radius: 10%;   
}
.pot{
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 4px;
    background-color: #333;
    -webkit-box-shadow: inset 0 3px #111,inset 0 -3px #555;
    box-shadow: inset 0 3px #111,inset 0 -3px #555;
}
.one-first-center-face{
    display: flex;
    justify-content: center;
}
.one-first-right-face{
    display: flex;
    justify-content: flex-end;
}

.one-sec-left-face{
    display: flex;
    align-items: center;
}
.one-sec-center-face{
    display: flex;
    justify-content: center;
    align-items: center;
}
.one-sec-right-face{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.one-thi-left-face{
    display: flex;
    align-items: flex-end;
}
.one-thi-center-face{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.one-thi-right-face{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211111101754.png)

```js
<div class="dice">
    <div class="two-top-face">
        <span class="pot"></span>
        <span class="pot"></span>
    </div>
    <div class="two-left-face">
        <span class="pot"></span>
        <span class="pot"></span>
    </div>
    <div class="two-center-face">
        <span class="pot"></span>
        <span class="pot"></span>
    </div>
    <div class="two-one-center-face">
        <span class="pot"></span>
        <span class="pot"></span>
    </div>

    <div class="four-face">
        <div class="column">
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
    </div>

    <div class="six-face">
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
    </div>
    <div class="six-sec-face">
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
    </div>
    <div class="six-thi-face">
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
    </div>

    <div class="nine-face">
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
        <div class="column">
            <span class="pot"></span>
            <span class="pot"></span>
            <span class="pot"></span>
        </div>
    </div>
</div>



body{
    background-color: black;               
}
.dice{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
[class $='face']{
    margin:16px;
    padding:4px;
    background-color: lightgray;
    width: 120px;
    height:120px;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7 ;
    box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7 ;
    border-radius: 10%;   
}
.pot{
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 4px;
    background-color: #333;
    -webkit-box-shadow: inset 0 3px #111,inset 0 -3px #555;
    box-shadow: inset 0 3px #111,inset 0 -3px #555;
}
.two-top-face,
.four-face,
.six-face,
.six-sec-face,
.nine-face
{
    display: flex;
    justify-content: space-between;
}
.two-left-face{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.two-center-face{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.two-one-center-face{
    display: flex;
    justify-content: flex-start;
}
.two-one-center-face .pot:nth-of-type(2){
    align-self: center;
}
.four-face .column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.six-face .column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.six-sec-face .column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.six-thi-face{
   display:flex;
   flex-wrap:wrap;

}
.six-thi-face .column{
    display:flex;
    flex-basis: 100%;
    justify-content: space-between;
}
.six-thi-face .column:nth-child(2){
   justify-content: center;
}
.six-thi-face .column:nth-child(3){
   justify-content: space-between;
}

.nine-face .column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```
## 数据库
### 三大范式
目前关系数据库有六种范式：第一范式（1NF）、第二范式（2NF）、第三范式（3NF）、巴斯-科德范式（BCNF）、第四范式(4NF）和第五范式（5NF，又称完美范式）。

而通常我们用的最多的就是第一范式（1NF）、第二范式（2NF）、第三范式（3NF），也就是本文要讲的“三大范式”。

第一范式（1NF）：要求数据库表的每一列都是不可分割的原子数据项。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115215727.png)
第二范式（2NF）：在1NF的基础上，非码属性必须完全依赖于候选码（在1NF基础上消除非主属性对主码的部分函数依赖）
第二范式需要确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关（主要针对联合主键而言）。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115215744.png)
第三范式（3NF）：在2NF基础上，任何非主属性不依赖于其它非主属性（在2NF基础上消除传递依赖）
第三范式需要确保数据表中的每一列数据都和主键直接相关，而不能间接相关。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115215812.png)

## 其他
### 最近关注的技术，细说一个你比较了解的
### 平时会在哪里学习技术，看哪些资料
