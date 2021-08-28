## 基础

### 1. 标准模型，IE模型的区别 (CSS盒模型)

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



### 2. BFC块级格式化上下文   (边距重叠解决方案）

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
4. overflow的值不是visible。

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

### 3. 页面布局

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

### 4. 你知道哪些清除浮动的方案？每种方案的有什么优缺点?

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

### 5. 让一个元素水平垂直居中，到底有多少种方案？

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

### 6. 浮动元素的特性 

- 只会影响后面的元素
- 文本不会被浮动元素覆盖
- 具备内联盒子特性：宽度由内容决定
- 具备块级盒子特性：支持所有样式
- 浮动放不下，会自动换行，父容器放不下，自动换行

