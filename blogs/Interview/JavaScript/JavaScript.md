---
title: JavaScript 面试
date: 2021-12-19
tags:
  - JavaScript
categories:
  - JavaScript 面试
---
## JavaScript
### JS 放在 head 和放在 body 中的区别
在 HTML body 部分中的 JavaScripts 会在页面加载的时候被执行。
在 HTML head 部分中的 JavaScripts 会在被调用的时候才执行。
### 动态创建 script 标签并插入到页面上，说执行时机
- 因为浏览器对动态插入的 script 标签，默认设置的是 async。
    - async 作用的 js 脚本时没有顺序的，异步加载，加载后执行。
- 所以还有个 defer，defer 是异步加载，按 script 在文档中的顺序执行。
    - 既然问题出在 async 上，那么创建 script 标签时把他设置为 false 就好。
### CSS 和 JS 为什么会放在头部或者底部？
- 因为页面在加载时，浏览器会识别该文档 CSS，并行下载，不会停止对当前文档的加载。放在头部可以保证在加载 html 生成 DOM tree 的时候，就可以同时对 DOM tree 进行渲染，可以防止闪跳，白屏或者布局混乱。
- 外部引入 js 文件阻塞其他资源下载，也会阻塞该 js 引入位置以下的页面的内容呈现，而且 js 可能会改变 DOM tree 的结构，需要一个稳定的 DOM tree，所以要放置在页面的最下面。
### onclick 和 addEventListener 的区别
1. onclick 事件在同一时间只能指向唯一对象（重复绑定事件只会使最后绑定的事件响应） 
2. addEventListener 给一个事件注册多个 listener（重复绑定事件会依次从上到下响应）

addEventListener 第一个参数事件类型，第二个类型即绑定的具体事件，第三个参数默认是 false，false 是冒泡，true 时是捕获；
事件触发的顺序为先捕获再冒泡，捕获时从 dom 树最上层开始响应，冒泡时从 dom 树最底层开始响应；
阻止冒泡和捕获用 e.stopPropagation(),event.cancelBubble; // IE 6 7 8 的停止冒泡;
阻止默认事件用 e.preventDefaule(),e.returnValue; 是一个属性，适用于 IE 6 7 8;
```html
<body>
<input id="button1"type="button" value="按钮"/>
<script>
    oBtn = document.getElementById('button1');// 获取的按钮元素
    //定义函数abc
    function abc(){
        alert('abc');
    }
    oBtn.οnclick=function abc(){alert('abc');}
    //oBtn.οnclick=abc;//当点击的时候执行abc这个函数，等价于 oBtn.οnclick=function 	abc(){alert('abc');}
</script>



<input  id="inputBtn" type="button" value="click"/>
<script>
    var inputBtn = document.getElementById('inputBtn');
    inputBtn.addEventListener('click',showMsg,false);//鼠标单击的时候调用showMes这个函数
    function showMsg() {
        alert("事件监听");
    }
</script>
```
### 三种事件模型是什么？
事件 是用户操作网页时发生的交互动作或者网页本身的一些操作，现代浏览器一共有三种事件模型。

- DOM0 级模型： ，这种模型不会传播，所以没有事件流的概念，但是现在有的浏览器支持以冒泡的方式实现，它可以在网页中直接定义监听函数，也可以通过 js 属性来指定监听函数。这种方式是所有浏览器都兼容的。
- IE 事件模型： 在该事件模型中，一次事件共有两个过程，事件处理阶段，和事件冒泡阶段。事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到 document，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。这种模型通过 attachEvent 来添加监听函数，可以添加多个监听函数，会按顺序依次执行。
- DOM2 级事件模型： 在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。捕获指的是事件从 document 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。后面两个阶段和 IE 事件模型的两个阶段相同。这种事件模型，事件绑定的函数是 addEventListener，其中第三个参数可以指定事件是否在捕获阶段执行。
### DOM 事件流:浏览器的事件冒泡及事件捕获？怎么取消事件冒泡？事件代理？
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 DOM 事件流。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922093720.png)
- 包括三个阶段：
  - 事件捕获阶段
    - 事件捕获：事件从最不精确的对象(document 对象)开始触发，然后到最精确
    - 事件从 Document 节点自上而下向目标节点传播的阶段；
  - 处于目标阶段
    - 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。
  - 事件冒泡阶段
    - 事件冒泡：事件按照从最特定的事件目标到最不特定的事件目标(document 对象)的顺序触发，当一个元素接收到事件的时候会把他接收到的事件传给自己的父级，一直到 window 。
    - 事件从目标节点自下而上向 Document 节点传播的阶段。
    - 不出产生冒泡的事件：abort、blur、focus、load、unload、mouseenter、mouseleave、resize 和自定义事件

阻止冒泡和捕获用 e.stopPropagation(),event.cancelBubble; // IE 6 7 8 的停止冒泡;
阻止默认事件用 e.preventDefaule(),e.returnValue; 是一个属性，适用于 IE 6 7 8;
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211105181843.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211105181903.png)
- 注意:
  - JS 代码只能执行捕获或者冒泡其中的一个阶段
  - onclick 和 attachEvent 只能得到冒泡阶段
  - addEventListener(type, listener[, useCapture]) 第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false（不写默认是 false），表示在事件冒泡阶段调用事件处理程序
  - 有的事件是没有冒泡的，如：onblur、onfocus、onmouseenter、onmouseleave 等


- 事件委托的原理（重）
  - 事件委托也叫事件委派，就是利用 DOM 的冒泡事件流，注册最少的监听器，实现对 DOM 节点的所有子元素进行事件群控。
  - 事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。(给 ul 注册点击事件，然后利用事件对象的 target 来找到当前点击的 li ，然后事件冒泡到 ul 上， ul 有注册事件，就会触发事件监听器。)
  - 事件委托的作用
    - 只操作了一次 DOM ，提高了程序的性能。
    - 在 JavaScript 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的操作 dom,那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长，这也就是为什么要减少 dom 操作的原因。每一个事件处理函数，都是一个对象，那么多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到 js 程序里面，只对它的父级(如果只有一个父级)这一个对象进行操作，与 dom 的操作就只需要交互一次，这样就能大大的减少与 dom 的交互次数，提高性能；
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
window.addEventListener("load", function() {
  //页面的全部资源加载完才会执行，包括图片、视频等
});
document.addEventListener("DOMContentLoaded", function() {
  //DOM 渲染完即可执行，此时图片、视频还可能没加载完 -> 尽量选择此方法
});
```
### 如何开启严格模式，严格模式下的特点？
改善错误检查功能并且标识可能不会延续到未来 JavaScript 版本的脚本。ES5 严格模式是限制性更强的 JavaScript 变体，它与常规 JavaScript 的语义不同，其分析更为严格。
```js
// 全局
"use strict";
function doSomething(a, b = a) {
  // code
}
```
```js
// 局部
function doSomething(a, b) {
  "use strict";
  // code
}
```
- 严格模式的限制
  - 变量必须声明后再使用
  - 函数的参数不能有同名属性，否则报错
  - 不能使用 with 语句
  - 不能对只读属性赋值，否则报错
  - 不能使用前缀 0 表示八进制数，否则报错
  - 不能删除不可删除的属性，否则报错
  - 不能删除变量 delete prop，会报错，只能删除属性 delete global[prop]
  - eval 不会在它的外层作用域引入变量
  - eval 和 arguments 不能被重新赋值
  - arguments 不会自动反映函数参数的变化
  - 不能使用 arguments.callee
  - 不能使用 arguments.caller
  - 禁止 this 指向全局对象
  - 不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈
  - 增加了保留字（比如 protected、static 和 interface）
### 图片懒加载的原理？
#### 懒加载概念
对于页面有很多静态资源的情况下（比如网商购物页面），为了节省用户流量和提高页面性能，可以在用户浏览到当前资源（当前窗口（可视区域）的大小）的时候，再对资源进行请求和加载。
#### 懒加载实现原理
我们的图片要显示出来的话一般是借用 img 标签，然后把 src 属性写上图片的地址，才能把图片显示出来，那就想，我们先把图片不显示出来，就来写一个自定义属性字段，把这个属性字段的值写成图片地址，当图片在可视区域的范围的时候，就把自定义属性的值作为 src 的值。这就实现了懒加载。
```html
data-src是我们自己定义的属性字段，它的值为我们要的图片地址。lazyload="true"是为了当图片加载出来后将图片不在需要懒加载了。


<img
  src=""
  lazyload="true"
  data-src="https://t7.baidu.com/itu=1732966997,2981886582&fm=193&f=GIF"
  alt=""
  class="image-item"
/>
```
#### 可视区域怎么找呢？
使用：document.documentElement.clientHeight 可以获取到当前屏幕的高度。当我们获取到高度之后，在想，如果这个图片在这个区域内，就让图片显示出来。

然后在想：当页面发生上滑的时候，可视区域的图片就会发生改变，所以当鼠标滚轮滚动的时候，在可视区域的图片就可能出去可视区域了，不在的可能这时候就进来了可视区域。所以我们要写一个监听事件。

当我们拿到所有的 img 时，利用循环去判断他们是否在可视区域内，在就加载出来，不在就暂时不加载。 所以需要满足的条件是图片的顶部在可视区域的高度里面，图片的底部也要在可视区域里面，也就是图片没有被划出去。
```js
//获取可视区域的高度
var viewHeight = document.documentElement.clientHeight;
document.addEventListener("scroll", function() {
  //获取到页面上所有的img
  //判断某个是否进入可视区域
  //如果进入，就把它自身的data-original的值取出来放到src
  var arr = document.querySelectorAll("img[data-src][lazyload]");
  arr.forEach((item) => {
    let rect = item.getBoundingClientRect(); //用于一次性获取某个容器相对于浏览器上下左右的位置
    if (rect.top < viewHeight && rect.bottom >= 0) {
      item.src = item.dataset.src;
      item.removeAttribute("data-src");
      item.removeAttribute("lazyload");
    }
  });
});
```

### ~~运算符
简单一点就是将一些变量转化为Number（数字）类型的；
- 数字类型的字符串可以转化为纯数字
```js
var a='123';
console.log(~~a); //输出123
```
- 字符串中带了其他字母，符号，或者其他除数字外的东西，一律输出 Number类型的0
```js
var a='asd';
console.log(~~a); //输出0
```
- 任何boolen类型的，如果为TRUE则输出1，FALSE输出0；
```js
var a=1==1;
console.log(~~a);//输出1
```
-  特殊类型，转化为Boolean是true的输出1，转化为boolean是false的输出0；
```js
var a=undefined;
console.log(~~a);//输出0
var b=！undefined;
console.log(~~b);//输出1
```
### JS 中七种为 false 和六种错误
- 七种情况在 JS 中对应的布尔值都为 false
  - false
  - 0
  - null
  - undefined
  - "" 空字符串（双引号）
  - '' 空字符串（单引号）
  - NaN
- js 的六种错误
  - SyntaxError：语法错误
  - Uncaught ReferenceError：引用错误
  - RangeError：范围错误
  - TypeError 类型错误
  - URIError，URL 错误
  - EvalError eval()函数执行错误
### undefined 与 undeclared 的区别？
已在作用域中声明但还没有赋值的变量，是 undefined。相反，还没有在作用域中声明过的变量，是 undeclared 的。
对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。但是我们可以使用 typeof 的安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量，typeof 会返回 "undefined"。
### undefined 和 null 有什么区别？
首先，undefined 和 null 都是假值（falsy），都能作为条件进行判断。这两种不同类型的值，既有着不同的语义和场景，又表现出较为相似的行为。
#### undefined
undefined 的字面意思就是：未定义的值 。这个值的语义是，希望表示一个变量最原始的状态，而非人为操作的结果 。
因此，undefined 一般都来自于某个表达式最原始的状态值，不是人为操作的结果。当然，你也可以手动给一个变量赋值 undefined，但这样做没有意义，因为一个变量不赋值就是 undefined 。这种原始状态会在以下 4 种场景中出现：
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
4. 使用 void 对表达式求值
```js
void 0; // undefined
void false; // undefined
void []; // undefined
void null; // undefined
void function fn() {}; // undefined

// ECMAScript 明确规定 void 操作符 对任何表达式求值都返回 undefined ，这和函数执行操作后没有返回值的作用是一样的，JavaScript 中的函数都有返回值，当没有 return 操作时，就默认返回一个原始的状态值，这个值就是 undefined，表明函数的返回值未被定义。
```
#### null
null 的字面意思是：空值 。这个值的语义是，希望表示一个对象被人为的重置为空对象，而非一个变量最原始的状态。在内存里的表示就是，栈中的变量没有指向堆中的内存对象。
1. 一般在以下两种情况下我们会将变量赋值为 null
   如果定义的变量在将来用于保存对象，那么最好将该变量初始化为 null，而不是其他值。换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存 null 值，这样有助于进一步区分 null 和 undefined。

当一个数据不再需要使用时，我们最好通过将其值设置为 null 来释放其引用，这个做法叫做解除引用。不过解除一个值的引用并不意味着自动回收改值所占用的内存。解除引用的真正作用是让值脱离执行环境，以便垃圾收集器在下次运行时将其回收。解除引用还有助于消除有可能出现的循环引用的情况。这一做法适用于大多数全局变量和全局对象的属性，局部变量会在它们离开执行环境时(函数执行完时)自动被解除引用。

2. 特殊的 typeof null
   当我们使用 typeof 操作符检测 null 值，我们理所应当地认为应该返"Null"类型呀，但是事实返回的类型却是"object"。
```js
var data = null;
console.log(typeof data); // "object"
```
- 一方面从逻辑角度来看，null 值表示一个空对象指针，它代表的其实就是一个空对象，所以使用 typeof 操作符检测时返回"object"也是可以理解的。
- 另一方面，其实在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的(对象的类型标签是 0)。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签也成为了 0，typeof null 就错误的返回了"object"。在 ES6 中，当时曾经有提案为历史平凡, 将 type null 的值纠正为 null, 但最后提案被拒了,所以还是保持"object"类型。
#### 总结
用一句话总结两者的区别就是：undefined 表示一个变量自然的、最原始的状态值，而 null 则表示一个变量被人为的设置为空对象，而不是原始状态。所以，在实际使用过程中，为了保证变量所代表的语义，不要对一个变量显式的赋值 undefined，当需要释放一个对象时，直接赋值为 null 即可。

- null 是主动使用，undefined 是被动的备选手段
- null 本质上是零，undefined 本质上是个对象（js 作者规定了 type 而已）
- 判断 null 和 undefined 时，应永远使用严格判断（===）
- js 中“没有传”、“没有给”和 undefined 基本等价；而 null 是有值的——例如：默认参数
### `==` 和 `===`
== 代表相同， ===代表严格相同（数据类型和值都相等）。

- 当进行双等号比较时候，先检查两个操作数数据类型，如果相同，则进行===比较，如果不同，则愿意为你进行一次类型转换，转换成相同类型后再进行比较
- ===比较时，如果类型不同，直接就是 false。
#### 双等号`==`
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
        - ❌ 如果还不是，只能返回 false 了 💩

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
          - ❌ 否则报错 💩
    - 如果期望类型为 string：
        -  - 调用 toString 方法：
          - ✅ 如果返回的是原始值，那么就用这个
          - ⬇️ 如果返回的不是原始值，那么跳到下一步
        - 调用 valueOf 方法：
          - ✅ 如果返回的是原始值，那么就用这个
          - ❌ 否则报错 💩
    - 如果对象是 Date 类型（期望类型为 string）：
        - 调用 toString 方法：
          - ✅ 如果返回的是原始值，那么就用这个
          - ⬇️ 如果返回的不是原始值，那么跳到下一步
        - 调用 valueOf 方法：
          - ✅ 如果返回的是原始值，那么就用这个
          - ❌ 否则报错 💩
    - 简单的说就是默认调用 valueOf 方法，然后是 toString 方法；如果对象是 Date 类型或对象的期望类型为 string，那么先调用 toString 方法 😪

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
  - ❌ 下面这些在 JS 中都为 falsy 除此之外的都是 truthy
    - undefined 👉 falsy
    - null 👉 falsy
    - 0 👉 falsy
    - "" 👉 falsy
    - NaN 👉 falsy
  - 转换规则如下： - undefined 👉 false - null 👉 false - number 👉 当为 0 时 false 否则为 true - string 👉 当为空字符串时为 false 否则为 true - object 👉 true - array 👉 true - Date 👉 true

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106161911.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106161929.png)
### 变量提升(函数提升)
- 所谓的变量提升（变量提升），是指在 JS 代码执行中， JavaScript 引擎（V8）把变量的声明部分和函数的声明部分提升到代码开头的行为，变量提升后，会给变量设置默认值 undefined，给函数赋值函数体。
- 在 JS 的变量提升中，提升的只是变量的声明，所以对于 var a = 1，一般把它拆分成 var a 和 a = 1。只提升 var a，a = 1 不变。
- 有多个同名变量声明时，函数声明会覆盖其他的声明。如果有多个同名函数声明，则是由最后的一个函数声明覆盖之前所有的声明。
### js 声明变量的方式
JavaScript 中可以通过 var、let、const、function、import、class 这几种方式来声明变量。
1. var
```js
var x = "global"; //全局变量
function local() {
  var x = "local variable"; //局部变量
  console.log(x);
}
local(); // 'local variable'
console.log(x); // 'global'
```
2. let 声明变量(let 命令用于声明变量,let 声明的变量是可变的)
```js
let lt = 520;
var lzp = 1314;
lt = 410;
lzp = 1122;
console.log(lt); // 410
```
3. const 声明变量(const 命令用于声明变量，const 声明的变量是不可变的。)
```js
const lzp = 410;
lzp = 1122; // 报错
```
4. function 声明变量
   ES6 允许我们为函数的参数设置默认值，即直接写在参数定义的后面。当参数值为 undefined 的时候，默认值生效。
```js
function log(x, y = "lutian") {
  console.log(x, y);
}
log("love"); //love lutian
log("love", "only"); //love only
```
5. import 声明变量
   ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，再通过 import 命令输入。Module 语法是 JavaScript 模块的标准写法，使用 import 取代 require
```js
import { func1, func2 } from "moduleA";
import { Button } from "antd";

// 在导入导出时可以根据需求起别名，方便理解和开发
import { longlonglongName as name } from "./moduleA.js";
```
6. class 声明变量
   ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面对象编程的语法。 ES5 类的定义
```js
function Person(x, y) {
  this.name = x;
  this.age = y;
}
Person.prototype.getInfo = function() {
  return "(" + this.name + ", " + this.age + ")";
};
var info = new Person("lutian", 18);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return "(" + this.name + ", " + this.age + ")";
  }
}
typeof Person; // "function"
Person === Person.prototype.constructor; // true
```
### var、let、const有什么区别
- 三者的区别
  - 区别 1
    - var 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
    - let 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
    - const 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，且不能修改。
  - 区别 2
    - var 可以先使用，后声明，因为存在变量提升；let 必须先声明后使用。
    - var 是允许在相同作用域内重复声明同一个变量的，而 let 与 const 不允许这一现象。
    - 在全局上下文中，基于 let 声明的全局变量和全局对象 GO（window）没有任何关系 ;var 声明的变量会和 GO 有映射关系；
  - 区别 3
    - 解决暂时性死区
      - 如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。假如我们尝试在声明前去使用这类变量，就会报错。
      - 当我们进入当前作用域时，let 或者 const 声明的变量已经存在了——它们只是不允许被获取而已。要想获取它们，必须得等到代码执行到声明处。
    - let/const/function 会把当前所在的大括号(除函数之外)作为一个全新的块级上下文，应用这个机制，在开发项目的时候，遇到循环事件绑定等类似的需求，无需再自己构建闭包来存储，只要基于 let 的块作用特征即可解决

1. var
   在 ES5 中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量。
   注意：顶层对象，在浏览器环境指的是`window`对象，在`Node`指的是`global`对象。
- 在变量未赋值时，变量 undefined（为使用声明变量时也为 undefined）。
- 作用域——var 的作用域为方法作用域；只要在方法内定义了，整个方法内的定义变量后的代码都可以使用。
```js
var a = 10;
console.log(window.a); // 10
```
- 使用`var`声明的变量存在变量提升情况。
```js
console.log(a); // undefined
var a = 20;
```
- 在编译阶段，编译器会将其变成以下执行。
```js
var a;
console.log(a); // undefined
a = 20;
```
- 使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明。
```js
var a = 20;
var a = 30;
console.log(a); // 30
```
- 在函数中使用使用`var`声明变量时候，该变量是局部的。
```js
var a = 20;
function change() {
  var a = 30;
}
change();
console.log(a); // 20
```
- 而如果在函数内不使用`var`，该变量是全局的。
```js
var a = 20;
function change() {
  a = 30;
}
change();
console.log(a); // 30
```

2. let
   `let`是`ES6`新增的命令，用来声明变量。
   用法类似于`var`，但是所声明的变量，只在`let`命令所在的`代码块内`有效。

- 在变量为声明前直接使用会报错
- 作用域——let 为块作用域——通常 let 比 var 范围要小
- let 禁止重复声明变量，否则会报错；var 可以重复声明
```js
{
  let a = 20;
}
console.log(a); // ReferenceError: a is not defined.
```
- 不存在变量提升。这表示在声明它之前，变量 a 是不存在的，这时如果用到它，就会抛出一个错误
```js
console.log(a); // ReferenceError: a is not defined.
let a = 2;
```
- 只要块级作用域内存在`let`命令，这个区域就不再受外部影响。使用`let`声明变量前，该变量都不可用，也就是大家常说的`“暂时性死区”`
```js
var a = 123;
if (true) {
  // 只要块级作用域内存在`let`命令，这个区域就不再受外部影响。
  a = "abc"; // ReferenceError
  let a;
}
```
- 最后，`let`不允许在相同作用域中重复声明。
```js
let a = 20;
let a = 30;
// Uncaught SyntaxError: Identifier 'a' has already been declared
// 注意的是相同作用域，下面这种情况是不会报错的
let a = 20;
{
  let a = 30;
}
// 因此，我们不能在函数内部重新声明参数
function func(arg) {
  let arg;
}
func();
// Uncaught SyntaxError: Identifier 'arg' has already been declared
```



3. const
   `const`声明一个只读的常量，一旦声明，常量的值就不能改变。
   这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值。

- const 为常量声明方式；声明变量时必须初始化，在后面出现的代码中不能再修改该常量的值
  ​ - const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动
```js
const a = 1
a = 3
// TypeError: Assignment to constant variable.

const a;
// SyntaxError: Missing initializer in const declaration
```
- 如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错。
```js
var a = 20;
let b = 20;
const a = 30;
const b = 30;
// 都会报错
```
- `const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
- 对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量。
- 对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变。
```js
const foo = {};
// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop; // 123
// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```
- 其它情况，`const`与`let`一致。



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
console.log(a); // undefined
var a = 10;
// let
console.log(b); // Cannot access 'b' before initialization
let b = 10;
// const
console.log(c); // Cannot access 'c' before initialization
const c = 10;
```
- 暂时性死区
    - `var`不存在暂时性死区。
    - `let`和`const`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
```js
// var
var a = 123;
if (true) {
  // 只要块级作用域内存在`let`命令，这个区域就不再受外部影响。
  a = "abc"; // ReferenceError
  let a;
}
```
- 块级作用域
    - `var`不存在块级作用域。
    - `let`和`const`存在块级作用域。
```js
// var
{
  var a = 20;
}
console.log(a); // 20

// let
{
  let b = 20;
}
console.log(b); // Uncaught ReferenceError: b is not defined

// const
{
  const c = 20;
}
console.log(c); // Uncaught ReferenceError: c is not defined
```
- 重复声明
    - `var`允许重复声明变量。
    - `let`和`const`在同一作用域不允许重复声明变量。
```js
// var
var a = 10;
var a = 20; // 20
// let
let b = 10;
let b = 20; // Identifier 'b' has already been declared
// const
const c = 10;
const c = 20; // Identifier 'c' has already been declared
```
- 修改声明的变量
    - `var`和`let`可以。
    - `const`声明一个只读的常量。一旦声明，常量的值就不能改变。
```js
// var
var a = 10;
a = 20;
console.log(a); // 20
//let
let b = 10;
b = 20;
console.log(b); // 20
// const
const c = 10;
c = 20;
console.log(c); // Uncaught TypeError: Assignment to constant variable
```### JS 数据类型
💡ECMAScript 标准定义了**原始数据类型**和**引用数据类型**。
- 原始数据类型（基本类型）：按值访问，可以操作保存在变量中实际的值。
    - 空值（null）
    - 未定义（undefined）
    - 布尔值（boolean）
    - 数字（number）
    - 字符串（string）
    - 符号（symbol）
    - BigInt
        - BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是 Javascript 中可以用 number 表示的最大字符串（string）。 BigInt 可以表示任意大的整数。
- 引用类型（复杂数据类型）：引用类型的值是保存在内存中的对象。
    - 对象（Object）
        - 布尔对象（Boolean）
        - 数字对象（Number）
        - 字符串对象（String）
        - 函数对象（Function）
        - 数组对象（Array）
        - 日期对象（Date）
        - 正则对象（RegExp）
        - 错误对象（Error）
- 与其他语言不同的是，JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。所以引用类型的值是按引用访问的。
- 基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量；
- 引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念。
### JS 数据类型
值类型（7 个）：Undefined、Null、Number、String、Boolean、Symbol(ES6)、BigInt(ES10)
引用类型：Object

- Javascript 中的数据类型包括原始类型和引用类型。其中原始类型包括 null、undefined、boolean、string、symbol、bigInt、number。
  - 基本类型的访问是按值访问的，就是说你可以操作保存在变量中的实际的值。
  - 基本类型的变量是存放在栈区的（栈区指内存里的栈内存）
  - 通过值复制的方式赋值和传递值。
  - 值类型的数据是不可变的，在内存中占有固定大小的空间，它们都会被存储在栈（stack）中。
- 引用类型指的是 Object
  - 而引用类型则是通过复制指针，实现复制，但指针指向的是同一个对象，所以改变其中一个两个 都改变；
  - 它们总是通过引用复制的方式赋值和传递值。
  - 引用类型的数据大小不固定，所以把它们的值存在堆（Heap）中，但还是会把它们在堆中的内存地址存在栈中。在查询引用类型数据时，先从栈中读取所持有的数据在堆中的内存地址，然后根据地址找到实际的数据。
### JS 类型检测
- 类型检测的方法：
    - typeof
    - instanceof
    - Object.prototype.toString
    - constructor
#### typeof
typeof 可以检测变量的数据类型，返回如下 6 种字符串 number、string、boolean、object、undefined、function。
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
- 优点：能够快速区分基本数据类型。
- 缺点：不能将 Object、Array 和 Null 区分，都返回 object。
#### `Object.prototype.toString(...)`
一般通过 `Object.prototype.toString(...)`来查看。每种引用类型都会直接或者间接继承自 Object 类型，因此它们都包含 toString()函数。不同数据类型的 toString()类型返回值也不一样，所以通过 toString()函数可以准确判断值的类型。
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
```
- 优点：精准判断数据类型。
- 缺点：写法繁琐不容易记，推荐进行封装后使用。
#### `instanceof`
`instanceof` 运算符也常常用来判断对象类型。用法: 左边的运算数是一个`object`，右边运算数是对象类的名字或者构造函数; 返回`true`或`false`。

instanceof 运算符用于检测一个对象在其 原型链 中是否存在一个构造函数的 prototype 属性。
```js
[] instanceof Array; // true
[] instanceof Object; // true
[] instanceof RegExp; // false
new Date() instanceof Date; // true
```
`instanceof`  的内部机制是：检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。
- instanceof，用于检测某个对象的原型链是否包含某个构造函数的 prototype 属性。
- instanceof 适用于检测对象，它是基于原型链运作的。
- instanceof 除了适用于任何 object 的类型检查之外，也可以用来检测内置对象，比如：Array、RegExp、Object、Function
- instanceof 对基本数据类型检测不起作用，主要是因为基本数据类型没有原型链。

- 优点：能够区分 Array、Object 和 Function，适合用于判断自定义的类实例对象。
- 缺点：Number，Boolean，String 基本数据类型不能判断。

- 判断某个`实例`是否属于某种类型
```js
let person = function() {};
let nicole = new person();
nicole instanceof person; // true

function Foo() {}
Object instanceof Object; // true
Function instanceof Function; // true
Function instanceof Object; // true
Foo instanceof Foo; // false
Foo instanceof Object; // true
Foo instanceof Function; // true
```
```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```
#### constructor
任何对象都有 constructor 属性，继承自原型对象，constructor 会指向构造这个对象的构造器或构造函数。
```js
Student.prototype.constructor === Student;
//  true
```
### JS类型转换
- JS 中类型转换只有三种情况，分别是： 
    - 转换为布尔值（调用 Boolean()方法） 
    - 转换为数字（调用 Number()、parseInt()和 parseFloat()方法） 
    - 转换为字符串（调用.toString()或者 String()方法） 
    - null 和 underfined 没有.toString 方法

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211203201505.png)
```js
['0'] == false // true
'0' == false // true
[] == false // true
[null] == 0 // true
null == 0 // false
[null] == false // true
null == false // false
[undefined] == false // true
undefined == false // false
```

- ToString，ToNumber，ToBoolean，ToPrimitive
  - 比如数字、字符串、布尔型、数组、对象之间的相互转换。

- ToString
  - 这里所说的 ToString 可不是对象的 toString 方法，而是指其他类型的值转换为字符串类型的操作。
  - 讨论 null、undefined、布尔型、数字、数组、普通对象转换为字符串的规则。
    - null：转为"null"
    - undefined：转为"undefined"
    - 布尔类型：true 和 false 分别被转为"true"和"false"
    - 数字类型：转为数字的字符串形式，如 10 转为"10"， 1e21 转为"1e+21"
    - 数组：转为字符串是将所有元素按照","连接起来，相当于调用数组的 Array.prototype.join()方法，如[1, 2, 3]转为"1,2,3"，空数组[]转为空字符串，数组中的 null 或 undefined，会被当做空字符串处理
    - 普通对象：转为字符串相当于直接使用 Object.prototype.toString()，返回"[object Object]"
```js
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(10); // '10'
String(1e21); // '1e+21'
String([1, 2, 3]); // '1,2,3'
String([]); // ''
String([null]); // ''
String([1, undefined, 3]); // '1,,3'
String({}); // '[object Objecr]'
```
- ToNumber
  - ToNumber 指其他类型转换为数字类型的操作。
    - null： 转为 0
    - undefined：转为 NaN
    - 字符串：如果是纯数字形式，则转为对应的数字，空字符转为 0, 否则一律按转换失败处理，转为 NaN
    - 布尔型：true 和 false 被转为 1 和 0
    - 数组：数组首先会被转为原始类型，也就是 ToPrimitive，然后在根据转换后的原始类型按照上面的规则处理，关于 ToPrimitive，会在下文中讲到
    - 对象：同数组的处理
```js
Number(null); // 0
Number(undefined); // NaN
Number("10"); // 10
Number("10a"); // NaN
Number(""); // 0
Number(true); // 1
Number(false); // 0
Number([]); // 0
Number(["1"]); // 1
Number({}); // NaN
```
- ToBoolean
  - ToBoolean 指其他类型转换为布尔类型的操作。
  - js 中的假值只有 false、null、undefined、空字符、0 和 NaN，其它值转为布尔型都为 true。
```js
Boolean(null); // false
Boolean(undefined); // false
Boolean(""); // flase
Boolean(NaN); // flase
Boolean(0); // flase
Boolean([]); // true
Boolean({}); // true
Boolean(Infinity); // true
```
- ToPrimitive
  - ToPrimitive 指对象类型类型（如：对象、数组）转换为原始类型的操作。
  - 当对象类型需要被转为原始类型时，它会先查找对象的 valueOf 方法，如果 valueOf 方法返回原始类型的值，则 ToPrimitive 的结果就是这个值
  - 如果 valueOf 不存在或者 valueOf 方法返回的不是原始类型的值，就会尝试调用对象的 toString 方法，也就是会遵循对象的 ToString 规则，然后使用 toString 的返回值作为 ToPrimitive 的结果。
  - 对于不同类型的对象来说，ToPrimitive 的规则有所不同，比如 Date 对象会先调用 toString，具体可以参考 ECMA 标准
```js
Number([]); // 0
Number(["10"]); //10

const obj1 = {
  valueOf() {
    return 100;
  },
  toString() {
    return 101;
  },
};
Number(obj1); // 100

const obj2 = {
  toString() {
    return 102;
  },
};
Number(obj2); // 102

const obj3 = {
  toString() {
    return {};
  },
};
Number(obj3); // TypeError

// Number([])， 空数组会先调用valueOf，但返回的是数组本身，不是原始类型，所以会继续调用toString，得到空字符串，相当于Number('')，所以转换后的结果为"0" 同理，Number(['10'])相当于Number('10')，得到结果10
// obj1的valueOf方法返回原始类型100，所以ToPrimitive的结果为100
// obj2没有valueOf，但存在toString，并且返回一个原始类型，所以Number(obj2)结果为102
// obj3的toString方法返回的不是一个原始类型，无法ToPrimitive，所以会抛出错误
```
#### 显式类型转换
通过手动进行类型转换，JavaScript 提供了以下转型函数：
- 转换为数值类型
    - Number(mix)
    - parseInt(string, radix)
    - parseFloat(string)
- 转换为字符串类型
    - toString(radix)
    - String(mix)
- 转换为布尔类型
    - Boolean(mix)
#### 隐式类型转换
在 JavaScript 中，当运算符在运算时，如果 两边数据不统一，CPU 就无法运算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成相同的数据类型再计算。这种无需开发者手动转换，而由 编译器自动转换 的方式就称为 隐式类型转换。JavaScript 的数据类型隐式转换主要分为三种情况：
- 转换为 Boolean 类型
- 转换为 Number 类型
- 转换为 String 类型

Boolean 类型转换规则表：
⚠️ 注意事项：使用 new 运算符创建的对象隐式转换为 Boolean 类型的值都是 true。
连续两个非操作可以将一个数强制转换为 Boolean 类型。
```js
!!undefined;
// false

!!null;
// false

!!1;
// true

!!'';
// false

!!'Hello';
// true

!!{};
// true

!![];
// true

!!function () {};
// true
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211228100310.png)

运算符：
加号运算符：当加号运算符作为一元运算符运算值时，它会将该值转换为 Number 类型。

当加号运算符作为二元运算符操作值时，它会根据两边值类型进行数据类型隐式转换。

首先，当引用对象类型的值进行二元加号运算符运算时，会涉及到转换为原始数据类型的问题。事实上，当一个对象执行例如加法操作的时候，如果它是原始类型，那么就不需要转换。否则，将遵循以下规则：
- 调用实例的 valueOf() 方法，如果有返回的是基础类型，停止下面的过程；否则继续
- 调用实例的 toString() 方法，如果有返回的是基础类型，停止下面的过程；否则继续
- 都没返回原始类型，就会报错

如果运算符两边均为原始数据类型时，则按照以下规则解释：
- 字符串连接符：如果两个操作数中只要存在一个操作数为 String 类型，那么另一个操作数会调用 String() 方法转成字符串然后拼接
- 算术运算符：如果两个操作数都不是 String 类型，两个操作数会调用 Number() 方法隐式转换为 Number 类型（如果无法成功转换成数字，则变为 NaN，再往下操作），然后进行加法算术运算。值转换为 Number 类型和 String 类型都会遵循一个原则：如果该值为原始数据类型，则直接转换为 String 类型或 Number 类型。如果该值为引用数据类型，那么先通过固定的方法将复杂值转换为原始数据类型，再转为 String 类型或 Number 类型。ToPrimitive。
```js
' ' +
// 0

'0' +
// 0

'10' +
// 10

'String' +
// NaN

true +
// 1

false +
// 0

undefined +
// 0

null +
// 0

[] +
// 0

![] +
// 0

[1] +
// 1

[1, 2] +
// NaN

[[1]] +
// 1

[[1, 2]] +
// NaN

{} +
// NaN

function () {};
// NaN

+'' +
// 0
```
⚠️ 注意事项：当 {} + 任何值 时， 前一个 {} 都会被 JavaScript 解释成空块并忽略他。
```js
"1" + 1             // "11"
"1" + "1"           // "11"
"1" + true          // "1true"
"1" + NaN           // "NaN"
"1" + []            // "1"
"1" + {}            // "1[object Object]"
"1" + function(){}  // "1function(){}"
"1" + new Boolean() // "1false"

1 + NaN             // NaN
1 + "true"          // "1true"
1 + true            // 2
1 + undefined       // NaN
1 + null            // 1

1 + []              // "1"
1 + [1, 2]          // "11,2"
1 + {}              // "1[object Object]"
1 + function(){}    // "1function(){}"
1 + Number()        // 1
1 + String()        // "1"

[] + []             // ""
{} + {}             // "[object Object][object Object]"
{} + []             // 0
{a: 0} + 1          // 1
[] + {}             // "[object Object]"
[] + !{}            // "false"
![] + []            // "false"
'' + {}             // "[object Object]"
{} + ''             // 0
[]["map"] + []      // "function map(){ [native code] }"
[]["a"] + []        // "undefined"
[][[]] + []         // "undefined"
+!![] + []          // 1
+!![]               // 1
1-{}                // NaN
1-[]                // 1
true - 1            // 0
{} - 1              // -1
[] !== []           // true
[]['push'](1)       // 1

(![]+[])[+[]]       // "f"
(![]+[])[+!![]]     // "a"
```


相等运算符：
相等运算符 == 会对操作值进行隐式转换后进行比较：
- 如果其中一个操作值为布尔值，则在比较之前先将其转换为数值
- 如果其中一个操作值为字符串，另一个操作值为数值，则通过 Number() 函数将字符串转换为数值
- 如果其中一个操作值是对象，另一个不是，则调用对象的 valueOf() 方法，得到的结果按照前面的规则进行比较
- null 与undefined 是相等的
- 如果一个操作值为 NaN，则返回 false
- 如果两个操作值都是对象，则比较它们是不是指向同一个对象
```js
'1' == true; // true
'1' == 1; // true
'1' == {}; // false
'1' == []; // false

undefined == undefined; // true
undefined == null; // true
nul == null; // true
```


关系运算符:
关系运算符：会把其他数据类型转换成 Number 之后再比较关系（除了 Date 类型对象）:
- 如果两个操作值都是数值，则进行 数值 比较
- 如果两个操作值都是字符串，则比较字符串对应的 ASCII 字符编码值
    - 多个字符则从左往右依次比较
- 如果只有一个操作值是数值，则将另一个操作值转换为数值，进行 数值 比较
- 如果一个操作数是对象，则调用 valueOf() 方法（如果对象没有 valueOf() 方法则调用 toString() 方法），得到的结果按照前面的规则执行比较
- 如果一个操作值是布尔值，则将其转换为 数值，再进行比较
📍 NaN 是非常特殊的值，它不和任何类型的值相等，包括它自己，同时它与任何类型的值比较大小时都返回 false。
```js
5 > 10;
// false

'2' > 10;
// false

'2' > '10';
// true

'abc' > 'b';
// false

'abc' > 'aad';
// true
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211228102332.png)
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
"lxh".charAt(0);

const name = "Uni";
let newName = new Object(name);
const len = newName.length;
newName = null;
```
浏览器对于这些常用的一些隐式装箱有着一定的预先处理，为的就是减少性能损耗。拆箱，就是装箱的反向操作，指的是将引用类型转换为对应的基本类型。常用的就是引用类型的 valueOf 和 toString 两个方法。JS 标准规定了 ToPrimitive 用于拆箱转换。

JS 标准规定了 ToPrimitive 函数用于拆箱转换。ToPrimitive 会首先调用 valueOf 和 toString 来获取基本数据类型。复杂数据类型在隐式转换时，先调用 valueOf，再调用 toString
```js
const bool = new Boolean(false);
console.log(bool.valueOf()); // false

if (!bool.valueOf()) {
  console.log("ok"); // ok
} else {
  console.log("okk");
}
```
### 0.1+0.2 !== 0.3
JS 里整数的计算是正确的，但是小数的计算是有误差的。简单的说，就是小数的表示肯定有误差，只是误差极小。
```js
0.1 + 0.2;
0.30000000000000004;
```
对小数点以后的数乘以 2，取结果的整数部分（不是 1 就是 0），然后再用小数部分再乘以 2，再取结果的整数部分……以此类推，直到小数部分为 0 或者位数已经够了就 OK 了。然后把取的整数部分按先后次序排列
对浮点数进行运算的过程中，需要将十进制转换成二进制。

前面讲到，在 JavaScript 中，使用浮点数标准 IEEE 754 表示数字的，在表示小数的时候，在转化二进制的时候有些数是不能完整转化的，比如 0.3，转化成二进制是一个很长的循环的数，是超过了 JavaScript 能表示的范围的，所以近似等于 0.30000000000000004。
这个是二进制浮点数最大的问题（不仅 JavaScript，所有遵循 IEEE 754 规范的语言都是如此）。

在这里我们要引入 ES6 中在 Number 对象上新增的一个极小的常量 Number.EPSILON。它表示 1 与大于 1 的最小浮点数之差，等于 2 的-52 次方。Number.EPSILON 实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。所以可以用这个来判断两个数浮点数是否想等：
```js
function numIsEqual(lef, rig) {
  let EPSILON = Number.EPSILON ? Number.EPSILON : Math.pow(2, -52);
  return Math.abs(lef - rig) < EPSILON;
}
```
### Number()的存储空间是多大？假如接口返回一个超过最大字节的数字怎么办？
Number 类型的最大值为 2 的 53 次方，即 9007199254740992，如果超过这个值，比如 900719925474099222，那么得到的值会不精确，也就是 900719925474099200
### 浏览器对于小数单位是怎么计算的？
对浮点数进行运算的过程中，需要将十进制转换成二进制。
### Symbol 主要用于什么场景下
- 应用场景 1：使用 Symbol 来作为对象属性名(key)
  - 在这之前，我们通常定义或访问对象的属性时都是使用字符串
  - Symbol 可同样用于对象属性的定义和访问
  - Symbol 类型的 key 是不能通过 Object.keys()或者 for...in 来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用 Symbol 来定义。
  - 当使用 JSON.stringify()将对象转换成 JSON 字符串的时候，Symbol 属性也会被排除在输出内容之外
```js
const PROP_NAME = Symbol();
const PROP_AGE = Symbol();
let obj = { [PROP_NAME]: "一斤代码" };
obj[PROP_AGE] = 18;
obj[PROP_NAME]; // '一斤代码' obj[PROP_AGE] // 18

// 使用Object的API
Object.getOwnPropertySymbols(obj); // [Symbol(name)]
// 使用新增的反射API Reflect.ownKeys(obj) // [Symbol(name), 'age', 'title']
```
- 应用场景 2：使用 Symbol 来替代常量
  - 需要为常量赋一个唯一的值（比如这里的'AUDIO'、'VIDEO'、 'IMAGE'），常量少的时候还算好，但是常量一多，你可能还得花点脑子好好为他们取个好点的名字。
  - 现在有了 Symbol，我们大可不必这么麻烦了：
```js
const TYPE_AUDIO = Symbol();
const TYPE_VIDEO = Symbol();
const TYPE_IMAGE = Symbol();
// 直接就保证了三个常量的值是唯一的了
```
- 应用场景 3：使用 Symbol 定义类的私有属性/方法
  - Symbol 以及模块化机制，类的私有属性和方法才变成可能。
  - 由于 Symbol 常量 PASSWORD 被定义在 a.js 所在的模块中，外面的模块获取不到这个 Symbol，也不可能再创建一个一模一样的 Symbol 出来（因为 Symbol 是唯一的），因此这个 PASSWORD 的 Symbol 只能被限制在 a.js 内部使用，所以使用它来定义的类属性是没有办法被模块外访问到的，达到了一个私有化的效果。
```js
// a.js
const PASSWORD = Symbol()
class Login {
    constructor(username, password) {
        this.username = username 
        this[PASSWORD] = password
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
### 函数声明和函数表达式的区别
- 函数声明 function fn() {...}
- 函数表达式 const fn = function() {..}
- 函数声明会在代码执行前预加载,而函数表达式不会### JS 如何实现多线程
JS 为我们提供了一个 Worker 的类，它的作用就是为了解决这种阻塞的现象。当我们使用这个类的时候，它就会向浏览器申请一个新的线程。这个线程就用来单独执行一个 js 文件。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211115222810.png)
```js
var worker = new Worker(js文件路径); //这个语句就会申请一个线程用来执行这个js文件。

//在主线程中有一些方法来实现对新线程的控制和数据的接收。在这里，我们只说比较常用的几个方法。
//postMessage(msg);
//postMessage方法把在新线程执行的结果发送到浏览器的js引擎线程里
worker.onmessage = function() {
  //获取在新线程中执行的js文件发送的数据 用event.data接收数据
  console.log(event.data);
};
setTimeout(function() {
  worker.terminate();
  //terminate方法用于关闭worker线程
}, 2000);

setTimeout(function() {
  worker = new Worker("js/test22.js");
  //再次开启worker线程
}, 3000);

// 新线程中使用postMessage()方法可以向主线程中发送一些数据，主线程中使用worker的onmessage事件来接收这些数据，这样就实现了js的多线程执行和多线程之间数据的传递。
```

### JS循环大总结for、forEach、for in、for of、map区别
#### map（数组方法）
- 特性：
    - map不改变原数组但是会 返回新数组
    - 可以使用break中断循环，可以使用return返回到外层函数
```js
let newarr=arr.map(i=>{
    return i+=1;
    console.log(i);
})
console.log(arr)//1,3,4---不会改变原数组
console.log(newarr)//[2,4,5]---返回新数组
```
#### forEach（数组方法）
- 特性：
    - 便利的时候更加简洁，效率和for循环相同，不用关心集合下标的问题，减少了出错的概率。
    - 没有返回值
    - 不能使用break中断循环，不能使用return返回到外层函数
- 注意：
    - forEach() 对于空数组是不会执行回调函数的。
    - for可以用continue跳过循环中的一个迭代，forEach用continue会报错。
    - forEach() 需要用 return 跳过循环中的一个迭代，跳过之后会执行下一个迭代。
```js
let newarr=arr.forEach(i=>{
    i+=1;
    console.log(i);//2,4,5
})
console.log(arr)//[1,3,4]
console.log(newarr)//undefined
```
#### for in(大部分用于对象)
用于循环遍历数组或对象属性
- 特性：
    - 可以遍历数组的键名，遍历对象简洁方便

```js
   let person={name:"小白",age:28,city:"北京"}
   let text=""
   for (let i in person){
      text+=person[i]
   }
   输出结果为：小白28北京
//其次在尝试一些数组
   let arry=[1,2,3,4,5]
   for (let i in arry){
        console.log(arry[i])
    }
//能输出出来，证明也是可以的
```
#### for of（不能遍历对象）
- 特性：
    - （可遍历map，object,array,set string等）用来遍历数据，比如组中的值
    - 避免了for in的所有缺点，可以使用break,continue和return，不仅支持数组的遍历，还可以遍历类似数组的对象。
```js
//遍历对象
let person = { name: "老王", age: 23, city: "唐山" };
for (let item of person) {
  console.log(item);
}
//我们发现它是不可以的
//但是它和forEach有个解决方法，结尾介绍
```
#### 总结
- forEach 遍历列表值,不能使用 break 语句或使用 return 语句
- for in 遍历对象键值(key),或者数组下标,不推荐循环一个数组
- for of 遍历列表值,允许遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等.在 ES6 中引入的 for of 循环，以替代 for in 和 forEach() ，并支持新的迭代协议。
- for in循环出的是key，for of循环出的是value；
- for of是ES6新引入的特性。修复了ES5的for in的不足；
- for of不能循环普通的对象，需要通过和Object.keys()搭配使用。
- for in 好像是会遍历原型链上的属性，可以用hasOwnProperty过滤掉原型属性
### for...in...和for...of...的区别
- for...in...
  - for...in...语句以**任意顺序**遍历一个对象的除 Symbol 以外的可枚举属性。
  - for...in...更适合遍历对象，不建议与数组一起使用，因为遍历顺序有可能不是按照实际数组的索引顺序。
- for...of...
  - for...of...语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等 ）上创建一个迭代循环，并为每个不同属性的值执行语句。
  - 与forEach()不同的是，它可以正确响应 break、continue 和 return 语句。
### for...of...相关问题
- for...in...(以及 forEach for )是常规的同步遍历
- for...of...常用于异步的遍历
```js
function test(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item * item);
    }, 1000);
  });
}
const arr = [100, 200, 300];

// 使用同步遍历的时候 是在1000ms后全部把结果打印出来了，而不是隔一秒打印s
arr.forEach(async (i) => {
  console.log(await test(i));
});

function test(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item * item);
    }, 1000);
  });
}

const arr = [100, 200, 300];
// 使用for...of 遍历会 1000ms 打印一次
!(async function () {
  for (let item of arr) {
    console.log(await test(item));
  }
})();
```
### 创建对象有几种方法
```js
// 第一种：字面量
var o1 = { name: "o1" };
var o2 = new Object({ name: "o2" });
// 第二种：通过构造函数
var M = function(name) {
  this.name = name;
};
var o3 = new M("o3");
// 第三种：Object.create()
var p = { name: "p" };
var o4 = Object.create(p);
```
### 遍历对象属性的方法，哪些遍历自身属性，哪些遍历原型属性？
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211121225033.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211121225525.png)
#### Object.keys(), Object.values(), Object.entries()
- Object.keys(), Object.values(), Object.entries()系列 可遍历对象自身可枚举属性(不含以 Symbol 类型为 key 的属性，以下简称 symbol 属性), 适合搭配 forEach, for of 等数组遍历方法使用。
- 可遍历自身属性，不可遍历原型链上属性，不可遍历非枚举属性，不可遍历 symbol 属性。
```js
let obj = Object.create({ inheritProp: 1 }, { noneEnumbleProp: { value: 2 } });
obj.selfProp = 3;
const symbol = Symbol("prop");
obj[symbol] = 4;
Object.keys(obj); // ["selfProp"]
```
#### Object.getOwnPropertyNames()
- Object.getOwnPropertyNames() 可遍历自身属性(可枚举和非枚举的属性)，不包括 symbol 属性 用法和 Object.keys()一样，区别是比 Object.keys()多遍历了自身非枚举属性。
- 可遍历自身属性（枚举+非枚举），不可遍历原型链上属性，不可遍历 symbol 属性。
```js
let obj = Object.create({ inheritProp: 1 }, { noneEnumbleProp: { value: 2 } });
obj.selfProp = 3;
const symbol = Symbol("prop");
obj[symbol] = 4;
Object.getOwnPropertyNames(obj); // ["noneEnumbleProp", "selfProp"]
```
#### for...in...
- for...in...可遍历原型链和自身的可枚举属性，不包括 symbol 属性，不可遍历非枚举属性。
- 将for...in...语句配合 obj.hasOwnProperty(prop) 方法一起使用，就能得到跟 Object.keys/values/entries 方法一样的效果——即返回对象自身的可枚举字符串属性。
- 不可遍历 symbol 属性，不可遍历非枚举属性。
```js
let obj = Object.create({ inheritProp: 1 }, { noneEnumbleProp: { value: 2 } });
obj.selfProp = 3;
const symbol = Symbol("prop");
obj[symbol] = 4;
for (let prop in obj) {
  console.log(prop);
}
// selfProp
// inheritProp
```
```js
for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log({ key: prop, value: obj[prop], pair: [prop, obj[prop]] });
  }
}
// {key: "str", value: "This is a String property", pair: ["str", "This is a String property"] }
```
#### Object.getOwnPropertySymbols()
- 可遍历自身 symbol 属性（枚举+非枚举）。
```js
let obj = Object.create({ inheritProp: 1 }, { noneEnumbleProp: { value: 2 } });
obj.selfProp = 3;
const symbol1 = Symbol("prop1");
const symbol2 = Symbol("prop2");
obj[symbol1] = 4;
Object.defineProperty(obj, symbol2, { value: 5 });
Object.getOwnPropertySymbols(obj); // [Symbol(prop1), Symbol(prop2)]
```
#### Reflect.ownKeys(obj)
- Reflect.ownKeys(obj) 可以看做是 Object.getOwnPropertyNames(obj) + Object.getOwnPropertySymbols(obj)，即获得 obj 自身的所有属性集合。
```js
Reflect.ownKeys(obj); // ["str", "unenum", Symbol(), Symbol(unenum)]
```
### 箭头函数和普通函数有什么区别？如果把箭头函数转换为不用箭头函数的形式，如何转换?
1. 语法更加简洁、清晰：箭头函数的定义要比普通函数定义简洁、清晰得多，很快捷。
2. 箭头函数没有 prototype (原型)，所以箭头函数本身没有 this​​​​​​​。
```js
// 箭头函数
let a = () => {};
console.log(a.prototype); // undefined

// 普通函数
function a() {}
console.log(a.prototype); // {constructor:f}
```
3. 箭头函数不会创建自己的 this
   箭头函数没有自己的 this，箭头函数的 this 指向在定义（注意：是定义时，不是调用时）的时候继承自外层第一个普通函数的 this。所以，箭头函数中 this 的指向在它被定义的时候就已经确定了，之后永远不会改变。
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
  },
};
obj.b();
obj.c();
```
4. call | apply | bind 无法改变箭头函数中 this 的指向
   call | apply | bind 方法可以用来动态修改函数执行时 this 的指向，但由于箭头函数的 this 定义时就已经确定且永远不会改变。所以使用这些方法永远也改变不了箭头函数 this 的指向。
```js
var id = 10;
let fun = () => {
 console.log(this.id);
};
fun(); // 10
fun.call({ id: 20 }); // 10
fun.apply({ id: 20 }); // 10
fun.bind({ id: 20 })(); // 10
```
5. 箭头函数不能作为构造函数使用
   因为箭头函数没有自己的 this，它的 this 其实是继承了外层执行环境中的 this，且 this 指向永远不会随在哪里调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用 new 调用时会报错！
```js
let Fun = (name, age) => {
  this.name = name;
  this.age = age;
};
// 报错
let p = new Fun("dingFY", 24);
```
6. 箭头函数不绑定 arguments，取而代之用 rest 参数...代替 arguments 对象，来访问箭头函数的参数列表
   箭头函数没有自己的 arguments 对象。在箭头函数中访问 arguments 实际上获得的是外层局部（函数）执行环境中的值。
```js
// 普通函数
function A(a) {
  console.log(arguments);
}
A(1, 2, 3, 4, 5, 8); //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 箭头函数
let B = (b) => {
  console.log(arguments);
};
B(2, 92, 32, 32); // Uncaught ReferenceError: arguments is not defined

// rest参数...
let C = (...c) => {
  console.log(c);
};
C(3, 82, 32, 11323); // [3, 82, 32, 11323]
```
7. 箭头函数不能用作 Generator 函数，不能使用 yield 关键字
8. 箭头函数没有 prototype(原型)，所以箭头函数本身没有 this
9. 箭头函数的 this 在定义的时候继承自外层第一个普通函数的 this。
10. 如果箭头函数外层没有普通函数，严格模式和非严格模式下它的 this 都会指向 window(全局对象)
11. 箭头函数本身的 this 指向不能改变，但可以修改它要继承的对象的 this。
12. 箭头函数的 this 指向全局，使用 arguments 会报未声明的错误。
13. 箭头函数的 this 指向普通函数时,它的 argumens 继承于该普通函数
14. 使用 new 调用箭头函数会报错，因为箭头函数没有 constructor
15. 箭头函数不支持 new.target
16. 箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名
17. 箭头函数相对于普通函数语法更简洁优雅
18. 一条语句返回对象字面量，需要加括号，或者直接写成多条语句的 return 形式，否则像 func 中演示的一样，花括号会被解析为多条语句的花括号，不能正确解析
```js
var func1 = () => {
  foo: 1;
}; // 想返回一个对象,花括号被当成多条语句来解析，执行后返回undefined
var func2 = () => ({ foo: 1 }); // 用圆括号是正确的写法
var func2 = () => {
  return {
    foo: 1, // 更推荐直接当成多条语句的形式来写，可读性高
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
  },
};
console.log(this === window); //true
obj.sum(); //报错：Uncaught TypeError: Cannot read property 'reduce' of undefined at Object.sum


// 确保 this 是在运行时是由包含它的上下文决定的。
let obj = {
  array: [1, 2, 3],
  sum() {
    console.log(this === window); // false
    return this.array.reduce((result, item) => result + item);
  },
};
console.log(this === window); //true
console.log(obj.sum()); //6
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
const cat = new Cat("Tom");
console.log(cat.sayCatName()); // undefined

function Cat(name) {
  this.name = name;
}
Cat.prototype.sayCatName = function() {
  console.log(this === window); // => false
  return this.name;
};
const cat = new Cat("Tom");
console.log(cat.sayCatName()); // Tom
```
3. 定义事件回调函数（不能定义动态上下文的回调函数）
箭头函数在声明的时候就绑定了执行上下文，要动态改变上下文是不可能的，在需要动态上下文的时候它的弊端就凸显出来。
```js
// 比如在客户端编程中常见的 DOM 事件回调函数（event listenner）绑定，触发回调函数时 this 指向当前发生事件的 DOM 节点，而动态上下文这个时候就非常有用，比如下面这段代码试图使用箭头函数来作事件回调函数。
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log(this === window); // true
  this.innerHTML = "Clicked button";
});

// 在全局上下文下定义的箭头函数执行时 this 会指向 window，当单击事件发生时，this.innerHTML 就等价于 window.innerHTML，而后者是没有任何意义的。
// 使用函数表达式就可以在运行时动态的改变 this
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log(this === button); // true
  this.innerHTML = "Clicked button";
});
```
4. 定义构造函数
```js
// 构造函数中的 this 指向新创建的对象，当执行 new Car() 的时候，构造函数 Car 的上下文就是新创建的对象，也就是说 this instanceof Car === true。显然，箭头函数是不能用来做构造函数， 实际上 JS 会禁止你这么做，如果你这么做了，它就会抛出异常。
const Message = (text) => {
  this.text = text;
};
const helloMessage = new Message("Hello World!"); //报错： Throws "TypeError: Message is not a constructor"

// 　构造新的 Message 实例时，JS 引擎抛了错误，因为 Message 不是构造函数。可以通过使用函数表达式或者函数声明来声明构造函数修复上面的例子。
const Message = function(text) {
  this.text = text;
};
const helloMessage = new Message("Hello World!");
console.log(helloMessage.text); // 'Hello World!'
```
### 为什么要用setTimeout模拟setInterval ？
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
### JS 编译原理
```js
var name; //编译阶段处理
name = "jack"; //执行阶段处理
```
#### 编译阶段
这个阶段的主角就是所谓的编译器，这个编译器会找遍当前作用域，看看是不是已经存在一个叫 name 的变量。如果已经存在，那么就什么都不做，直接忽略 var name 这个声明，继续编译下去；如果没有，则在当前作用域里新增一个叫 name 的变量。然后，编译器会为引擎生成运行时所需要的代码，程序就进入了执行阶段。
#### 执行阶段
这个阶段的主角就是大家所熟悉的 JS 引擎啦，JS 引擎在运行的时候，也会先找遍当前作用域，看看是否有一个叫 name 的变量，如果有的话，那么刚刚好，直接赋值，如果没有的话，那就是当前作用域没有，那怎么办，那就考虑探出头去，去外面（ 父级作用域 ）看看有没有，没有的话，再去外面查找，一层又一层（ 当然如果是还有父层的话 ），如果最终还是找不到的话，那么 JS 引擎也表示无能为力，那就抛个异常给别人看看吧，表示自己已经努力过了。

上面提到的去外面查找，一层又一层，从当前作用域再到父级作用域，再到父级的父级作用域，以此类推，就是所谓的作用域链了，就跟链条一样，一节有一节往上，是不是形容地可以说是很贴切了。总结而言就是，作用域套作用域，也就有了所谓的作用域链。
### 作用域和作用域链
#### 作用域
定义：简单来说作用域就是变量与函数的可访问范围，由当前环境与上层环境的一系列变量对象组成
1. 全局作用域：代码在程序的任何地方都能被访问，window 对象的内置属性都拥有全局作用域。
2. 函数作用域：在固定的代码片段才能被访问
3. 块级作用域：块级作用域相当于是只在这块代码块中生效，如果它被大括号 {} 所包围，那么大括号中就是一段代码块，代码块中使用 let 和 const 声明的变量也被称为局部变量
作用：作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。
#### 作用域链
作用域链参考链接一般情况下，变量到 创建该变量 的函数的作用域中取值。但是如果在当前作用域中没有查到，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

作用域和作用域的嵌套，就产生了作用域链，另外要记住的一个特性就是作用域链的查找，向外不向内，想想探出头去，而不是看着锅里，就可以了。
### 闭包
- 闭包是指有权访问另一个函数作用域中的变量的函数。
- 延长局部变量的生命周期，在某些情况下，希望某些函数内的变量在函数执行后不被销毁。
- 能够访问其他函数内部变量的函数，被称为 闭包。
- 闭包应用场景:作为参数被传入,作为返回值被返回。
- 自由变量的查找,要在函数定义的地方(而非执行的地方)。
- 影响:变量会常驻内存,得不到释放。闭包不要乱用。
- 防抖节流。
    - 输入框连续输入进行 AJAX 验证时
    - 浏览器窗口缩放时，resize 事件。
    - DOM 元素拖拽
    - Canvas 画笔功能
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

//节流
  function throttle(handler, wait) {
    var lastTime = 0;
    return function(e) {
      var nowTime = new Date().getTime();
      if (nowTime - lastTime > wait) {
        handler.apply(this, arguments);
        lastTime = nowTime;
      }
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
outputNumbers(5);


for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })(i);
}
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
- setTimeout 传参
  原生的 setTimeout 传递的第一个函数不能带参数
```js
//原生的setTimeout传递的第一个函数不能带参数
setTimeout(function (param) {
  alert(param);
}, 1000);

//通过闭包可以实现传参效果
function myfunc(param) {
  return function () {
    alert(param);
  };
}
var f1 = myfunc(1);
setTimeout(f1, 1000);
```
- IIFE 自执行函数
```js
var arr = [];
for (var i = 0; i < 3; i++) {
  //使用IIFE
  (function(i) {
    arr[i] = function() {
      return i;
    };
  })(i);
}
console.log(arr[0]()); // 0
console.log(arr[1]()); // 1
console.log(arr[2]()); // 2
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
function curry(fn) {
  return function curriedFn(...args) {
    if (fn.arguments.length > args.length) {
      // 递归调用，直到参数个数相等
      return curriedFn(...args.concat(Array.from(arguments)));
    }
    // 实参和形参个数相同，调用fn，返回结果
    return fn(...args);
  };
}
```
- 函数组合
```js
  const compose = (...fns) => {
    return fns.reduce((acc, cur) => {
      return (...args) => {
        return acc(cur(...args));
      };
    });
  };
```
### apply、call、bind 区别
- 三者都可以改变函数的 this 对象指向。
- 三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
- 三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。
- bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。
- bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例
### this的五种情况
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211203202603.png)

`this`是在执行的时候确定的。不执行，你就不知道在哪里。**this 永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的**，**当 this 碰到 return 时**。如果返回值是一个对象，那么 this 指向的就是那个返回的对象，如果返回值不是一个对象那么 this 还是指向函数的实例。
1. 作为普通函数执行时，`this`指向`window`。
2. 当函数作为对象的方法被调用时，`this`就会指向`该对象`。
3. 构造器调用，`this`指向`返回的这个实例化对象`。
4. 箭头函数中没有`this`绑定，必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，则`this`绑定的是最近一层非箭头函数的`this`，否则`this`的值则被设置为全局对象。而箭头函数的`this`是上层普通函数的`this`或者是全局对象（浏览器中是`window`）
5. 基于 Function.prototype 上的 `apply 、 call 和 bind`调用模式，这三个方法都可以显示的指定调用函数的 this 指向。`apply`接收参数的是数组，`call`接受参数列表，`` bind`方法通过传入一个对象，返回一个` this `绑定了传入对象的新函数。这个函数的`this`指向除了使用`new `时会被改变，其他情况下都不会改变。若为空默认是指向全局对象 window。

#### 终极秘籍
1. 如果一个函数中有 this，但是它没有被上一级的对象所调用，那么 this 指向的就是 window，这里需要说明的是在 js 的严格版中 this 指向的不是 window，但是我们这里不探讨严格版的问题，你想了解可以自行上网查找。
2. 如果一个函数中有 this，这个函数有被上一级的对象所调用，那么 this 指向的就是上一级的对象。
3. 如果一个函数中有 this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this 指向的也只是它上一级的对象。
4. 箭头函数中没有`this`绑定，必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，则`this`绑定的是最近一层非箭头函数的`this`，否则`this`的值则被设置为全局对象。而箭头函数的`this`是上层普通函数的`this`或者是全局对象（浏览器中是`window`）
```js
var name = "window";
var student = {
  name: "hardingcheng",
  doSth: function () {
    // var self = this;
    var arrowDoSth = () => {
      // console.log(self.name);
      console.log(this.name);
    };
    arrowDoSth();
  },
  arrowDoSth2: () => {
    console.log(this.name);
  },
};
student.doSth(); // 'hardingcheng'
student.arrowDoSth2(); // 'window'
```
#### 判断this的绑定
如果要判断一个运行中函数的 `this` 绑定， 就需要找到这个函数的直接调用位置。找到之后 就可以顺序应用下面这四条规则来判断 `this` 的绑定对象。
- `new` 调用：绑定到新创建的对象，注意：显示`return`函数或对象，返回值不是新创建的对象，而是显式返回的函数或对象。
- `call` 或者 `apply`（ 或者 `bind`） 调用：严格模式下，绑定到指定的第一个参数。非严格模式下，`null`和`undefined`，指向全局对象（浏览器中是`window`），其余值指向被`new Object()`包装的对象。
- 对象上的函数调用：绑定到那个对象。
- 普通函数调用：在严格模式下绑定到 `undefined`，否则绑定到全局对象。
- `ES6` 中的箭头函数：不会使用上文的四条标准的绑定规则， 而是根据当前的词法作用域来决定`this`， 具体来说， 箭头函数会继承外层函数，调用的 this 绑定（ 无论 this 绑定到什么），没有外层函数，则是绑定到全局对象（浏览器中是`window`）。这其实和 `ES6` 之前代码中的 `self = this` 机制一样。
- `DOM`事件函数：一般指向绑定事件的`DOM`元素，但有些情况绑定到全局对象（比如`IE6~IE8`的`attachEvent`）。

面试官考察`this`指向就可以考察`new、call、apply、bind`，箭头函数等用法。从而扩展到作用域、闭包、原型链、继承、严格模式等。这就是面试官乐此不疲的原因。
### 原型和原型链
原型上所有的方法和属性都可以被构造函数的实例共享。使用原型解决所有实例上的方法，还有所有实例上的共同属性都可以放在原型上定义。

‌**原型**: 在 JS 中，每当定义一个对象（函数也是对象）时，对象中都会包含一些预定义的属性。其中每个函数对象都有一个 prototype 属性，这个属性指向函数的原型对象。（原型【prototype】是定义函数由JS自动分配给函数的一个可以被所有构造函数实例对象变脸共享的对象属性），通过这种方式，所有的实例都可以访问到这个方法，并且这个方法只需要占用一份内存，节省内存，this 的指向还能正确指向类的实例。

**原型链**：（各个原型之间构成的链，我们称之为原型链。）如果试图引用对象(实例 instance)的某个属性,会首先在对象内部寻找该属性,直至找不到,然后才在该对象的原型(instance.prototype)里去找这个属性.如果还找不到则往原型的原型上找，这样一个层层查找形成的一个链式的关系被称为原型链。）
当在一个对象 obj 上访问某个属性时，如果不存在于 obj，那么便会去对象的原型也就是 obj.**__proto__** 上去找这个属性。如果有则返回这个属性，没有则去对象 obj 的原型的原型也就是 obj.**__proto__**.**__proto__**去找，重复以上步骤。一直到访问纯对象的原型也就是 Object.prototype，没有的话续往上找也就是 Object.prototype.**__proto__**，其实就是 null，直接返回 undefined。

**特点**: JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。
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


![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211012095343.png)
- 每一个构造函数都有(原型)prototype 指向它的原型对象。
- 原型对象有 constructor 指向它的构造函数。
- 构造函数可以通过 new 的创建方式创建实例对象
- 实例对象通过`__proto__`指向它的原型对象。
- 原型对象也有自己的原型对象，通过*__proto__*指向(指向上一级的原型对象)。
```js
1. Person.prototype.constructor == Person // **准则1：原型对象（即Person.prototype）的constructor指向构造函数本身**
2. person01.__proto__ == Person.prototype // **准则2：实例（即person01）的__proto__和原型对象指向同一个地方**
```
### __proto__和 prototype 的区别和关系
JS 正是通过__proto__和 prototype 的合作实现了原型链，以及对象的继承。
函数含有__proto__与prototype属性，__proto__指向Function.prototype,prototype指向Object.prototype。
对象`__proto__`属性的值就是它所对应的原型对象。
```js
  var one = { x: 1 };
  var two = new Object();
  one.__proto__ === Object.prototype; // true
  two.__proto__ === Object.prototype; // true
  one.toString === one.__proto__.toString; // true
```
首先来说说 prototype 属性，不像每个对象都有`__proto__`属性来标识自己所继承的原型，只有**函数**才有 prototype 属性。
为什么只有函数才有 prototype 属性？ES 规范就这么定的。
当你创建函数时，JS 会为这个函数自动添加 prototype 属性。

构造函数，通过 prototype 来存储要共享的属性和方法。而一旦你把这个函数当作构造函数（constructor）调用（即通过 new 关键字调用），那么 JS 就会帮你创建该构造函数的实例，实例继承构造函数 prototype 的所有属性和方法（实例通过设置自己的`__proto__`指向承构造函数的 prototype 来实现这种继承）。

对象的`__proto__`指向自己构造函数的 prototype。obj.__proto__.__proto__...的原型链由此产生，包括我们的操作符 instanceof 正是通过探测 obj.__proto__.__proto__... === Constructor.prototype 来验证 obj 是否是 Constructor 的实例。

- js 每个对象都会拥有`prototype`属性的。这个属性指向原型对象，这个对象的所有属性和方法都会被构造函数的实例所继承。
- 实例都包含一个指向构造函数的`原型对象`的`__proto__`内部指针。。
- 实例都会有一个`constructor`属性去指向它的构造函数
- 在原型对象中使用`.constructor`（构造器）属性来区分，我这个原型对象被那个构造函数引用了。所有原型对象都会自动获得一个 constructor（构造函数）属性，这个属性是一个指向 prototype 属性所在函数的指针。
```js
var o = {};
o.__proto__ === Object.prototype; //true
o instanceof Object; //true
o instanceof Function; //false

var o = Object();
o.__proto__ === Object.prototype; //true
o instanceof Object; //true
o instanceof Function; //false

var o = new Object();
o.__proto__ === Object.prototype; //true
o instanceof Object; //true
o instanceof Function; //false

function Fn() {}
var fn = new Fn();
fn.__proto__ === Fn.prototype;

fn instanceof Fn; //true
fn instanceof Object; //true
fn instanceof Function; //false

Function.__proto__ === Function.prototype; //true
Object.__proto__ === Function.prototype; //true

Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null; //是原型链有终点。

function fn() {}
fn.__proto__ === Function.prototype; //true
fn.prototype.__proto__ === Object.prototype; //true
fn.prototype.constructor === fn; //true
```

`__proto__`是服务于函数对象的，`prototype` 是服务于构造函数的实例化对象的。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210922072448.png)
```js
console.log(User.__proto__ === Object); //false
console.log(User.__proto__ === Object.__proto__); //true
console.log(User.prototype.__proto__ === User.__proto__.__proto__); //true
console.log(User.prototype.__proto__ === Object.prototype); //true
```
`__proto__`属性的作用主要是用来确定当前对象的继承者，在当前对象找不到指定的属性和对象时，会去 proto 属性指定的对象中寻找，之后依次类推直到找完所有继承或找到要找的属性为止。
prototype 中定义的属性和方法都是留给自己的 “后代” 用的。
JS 中的`__proto__`入场了，它存在于普通对象和函数对象中，它的作用就是引用父类的 prototype 对象。
### 构造函数、原型、原型链
- 每一个函数对象都有一个 prototype 属性，指向函数对象的原型，原型对象上有一个 constructor 属性指向构造函数本身。
- 引用类型 constructor 属性值是可以修改的，但是对于基本类型来说是只读的，当然 null 和 undefined 没有 constructor 属性。
- `__proto__` 属性在 ES6 时被标准化，但因为性能问题并不推荐使用，推荐使用 Object.getPrototypeOf()。
- `__proto__`是每个实例上都有的属性，prototype 是构造函数的属性，在实例上并不存在，所以这两个并不一样，但 `foo.__proto__` 和 Foo.prototype 指向同一个对象。
- 每个对象拥有一个原型对象，通过`__proto__`指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null，这就是原型链。
- js每个对象都会拥有`__proto__`属性的。这个属性指向原型对象，这个对象的所有属性和方法都会被构造函数的实例所继承。
- 实例都包含一个指向构造函数的`原型对象`的`__proto__`内部指针。
- 实例都会有一个`constructor`属性去指向它的构造函数。
- 在原型对象中使用`.constructor`（构造器）属性来区分，我这个原型对象被那个构造函数引用了。所有原型对象都会自动获得一个 constructor（构造函数）属性，这个属性是一个指向 prototype 属性所在函数的指针。
### 原型链，为什么要这么设计
- 在定义函数时，会执行两个动作：一个动作是创建函数对象，这是因为函数是对象；另一个动作是创建一个完全独立的原型对象；定义的函数的原型属性将指向该原型对象。
- 那么 prototype 就是调用 `构造函数` 而创建的那个对象`实例`的`的原型对象`。
- 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。
- 最主要的就是节省内存，如果属性和方法定义在原型上，那么所有的实例对象就能共享。
### JS获取原型的方法？
- p.__proto__
- p.constructor.prototype
- Object.getPrototypeOf(p)
### Function、Object、null 等等的关系和鸡蛋问题
原型链的尽头指向`null`，那么 `Function.prototype`、`Object.prototype`、`null`、`Function.prototype.__proto__`、`Object.prototype..__proto__`、`function`、`object` 之间的关系是什么。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014094614.png)


- 原型链的尽头（root）是 `Object.prototype`。所有对象均从 `Object.prototype` 继承属性。
    - `Object/Array/String` 等等构造函数本质上和 `Function` 一样，均继承于 `Function.prototype`。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014100423.png)
- `Function.prototype` 和 `Function.__proto__`为同一对象。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014101327.png)
- `Function.prototype` 直接继承` root（Object.prototype）`。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014101357.png)
- 通过这点我们可以弄清 继承的原型链：`Object.prototype(root)<---Function.prototype<---Function|Object|Array...`
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211014101415.png)
- `Function.prototype` 是个不同于一般函数（对象）的函数（对象）。
    - Function.prototype 像普通函数一样可以调用，但总是返回 undefined。
    - 普通函数实际上是` Function `的实例，即普通函数继承于 `Function.prototype`。`func.__proto__ === Function.prototype`。
    - `Function.prototype` 继承于 `Object.prototype`，并且没有 `prototype` 这个属性。`func.prototype` 是普通对象，`Function.prototype.prototype` 是 `null`。
    - 所以，`Function.prototype` 其实是个另类的函数，可以独立于/先于 `Function` 产生。
- `Object` 本身是个（构造）函数，是 `Function` 的实例，即 `Object.__proto__`就是 `Function.prototype`。
- 先有 `Object.prototype`（原型链顶端），`Function.prototype` 继承 `Object.prototype` 而产生，最后，`Function` 和 `Object` 和其它构造函数继承 `Function.prototype` 而产生。

### instanceof
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210802103943.png)

1. instanceof 的作用是用来做检测类型：
    1. instanceof 可以检测某个对象是不是另一个对象的实例(用于判断某个实例是否属于某构造函数)；
    ```js
    var Person = function() {};
    var student = new Person();
    console.log(student instanceof Person); // true
    ```
    2. instanceof 可以检测父类型(在继承关系中用来判断一个实例是否属于它的父类型或者祖先类型的实例）
    ```js
    function Person() {}
    function Student() {}
    var p = new Person();
    Student.prototype = p; //继承原型
    var s = new Student();
    console.log(s instanceof Student); //true
    console.log(s instanceof Person); //true
    // 但是，instanceof不适合检测一个对象本身的类型。
    ```
2. instanceof 检测一个对象 A 是不是另一个对象 B 的实例的原理
其实 `instanceof` 主要的实现原理就是只要右边变量的 `prototype` 在左边变量的原型链上即可。因此，`instanceof` 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 `prototype`，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。
查看对象 B 的 prototype 指向的对象是否在对象 A 的[[prototype]]链上。如果在，则返回 true,如果不在则返回 false。不过有一个特殊的情况，当对象 B 的 prototype 为 null 将会报错(类似于空指针异常)。
```js
function _instanceof(A, B) {
  var O = B.prototype; // 取B的显示原型
  A = A.__proto__; // 取A的隐式原型
  while (true) {
    //Object.prototype.__proto__ === null
    if (A === null) return false;
    if (O === A)
      // 这里重点：当 O 严格等于 A 时，返回 true
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
### new
1. 创建一个空对象。 
2. 该对象的隐式原型指向该函数的原型。(设置原型，将对象的原型设置为函数的 prototype 对象。)
3. 这个新对象会绑定到函数调用的 this。(让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）) 
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。(判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。)

```js
function myNew(Con, ...args) {
  // 创建一个空的对象
  let obj = {};
  // 隐式原型链接到该函数的原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Con.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  let result = Con.call(obj, ...args);
  // 优先返回构造函数返回的对象
  return result instanceof Object ? result : obj;
}
```
### Class
#### ES6 中类中的 static 用 ES5 怎么实现?
1. 静态方法就是定义在 构造函数的方法； 
2. 实例方法就是定义在 构造函数原型（prototype）上的方法；
```js
let Animal = function(type) {
  this.type = type;
};

// 动态方法
Animal.prototype.walk = function() {
  // 调用静态方法
  Animal.eat();
  console.log("I am walking");
};

// 静态方法
Animal.eat = function(food) {
  console.log(`I am eating`);
};

let cat = new Animal("cat");
cat.walk();
cat.eat();
```
### ES5 继承(extend)
#### 原型链继承
```js
function Parent() {
  this.property = true;
}
Child.prototype.getSuperValue = function () {
  return this.property;
};
function Child() {
  this.subproperty = false;
}
// 这里是关键，创建Parent的实例，并将该实例赋值给Child.prototype
Child.prototype = new SuperType();
Child.prototype.getSubValue = function () {
  return this.subproperty;
};
var instance = new Child();
console.log(instance.getSuperValue()); // true




function Parent() {
  this.colors = ["red", "blue", "green"];
}
function Child() {}
Child.prototype = new Parent();
var instance1 = new Child();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
var instance2 = new Child();
alert(instance2.colors); //"red,blue,green,black"
```
- 缺点
  - 每个实例对引用类型属性的修改都会被其他的实例共享
  - 在创建 Child 实例的时候，无法向 Parent 传参。这样就会使 Child 实例没法自定义自己的属性（名字）
#### 构造函数实现继承
```js
function Parent() {
  this.color = ["red", "green", "blue"];
}
function Child() {
  //继承自Parent
  //核心代码是Parent.call(this)，创建子类实例时调用Parent构造函数，于是Child的每个实例都会将Parent中的属性复制一份。
  Parent.call(this);
}
var instance1 = new Child();
instance1.color.push("black");
alert(instance1.color); //"red,green,blue,black"

var instance2 = new Child();
alert(instance2.color); //"red,green,blue"
```
- 优点
  - 解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题
  - 子类可以向父类传参
- 缺点
  - 无法复用父类的公共函数
  - 每次子类构造实例都得执行一次父类函数
#### 组合式继承(原型链继承和借用构造函数合并)
组合上述两种方法就是组合继承。用原型链实现对原型属性和方法的继承，用借用构造函数技术来实现实例属性的继承。
```js
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
Parent.prototype.sayName = function () {
  alert(this.name);
};

function Child(name, age) {
  // 继承属性
  // 第二次调用SuperType()
  Parent.call(this, name);
  this.age = age;
}

// 继承方法
// 构建原型链
// 第一次调用Parent()
Child.prototype = new Parent();
// 重写Child.prototype的constructor属性，指向自己的构造函数Child
Child.prototype.constructor = Child;
Child.prototype.sayAge = function () {
  alert(this.age);
};

var instance1 = new Child("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new Child("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211228134800.png)
- 优点
  - 解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题
  - 子类可以向父类传参
  - 可实现父类方法复用
- 缺点:
  - 需执行两次父类构造函数，第一次是 Child.prototype = new Parent(),第二次是 Parent.call(this, name)造成不必要的浪费
  - 第一次调用Parent()：给Child.prototype写入两个属性name，color。
  - 第二次调用Parent()：给instance1写入两个属性name，color。
#### 原型式继承
利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
该方法的原理是创建一个构造函数，构造函数的原型指向对象，然后调用 new 操作符创建实例，并返回这个实例，本质是一个浅拷贝。
```js
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
```
object()对传入其中的对象执行了一次浅复制，将构造函数F的原型直接指向传入的对象。
```js
var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
```

```js
var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"],
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"
```
- 缺点
  - 同原型链继承一样，每个实例对引用类型属性的修改都会被其他的实例共享
  - 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
  - 无法传递参数
#### 寄生式继承
核心：在原型式继承的基础上，增强对象，返回构造函数。

寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。可以在创建对象的时候，把对象方法也通过此种方式继承。

```js
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}


function createAnother(original) {
  var clone = object(original); // 通过调用 object() 函数创建一个新对象
  clone.sayHi = function () {
    // 以某种方式来增强对象
    alert("hi");
  };
  return clone; // 返回这个对象
}
```
函数的主要作用是为构造函数新增属性和方法，以增强函数。
```js
var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"
```
- 缺点
  - 同借用构造函数一样，无法复用父类函数，每次创建对象都会创建一遍方法
  - 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
  - 无法传递参数
#### 寄生组合式继承
结合借用构造函数传递参数和寄生模式实现继承。

不需要为了子类的原型而多 new 了一次父类的构造函数，如 Child.prototype = new Parent() 只需要复制父类原型的一个副本给子类原型即可。

```js
function inheritPrototype(child, parent) {
  var prototype = Object.create(parent.prototype); // 创建对象，创建父类原型的一个副本
  prototype.constructor = child; // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  child.prototype = prototype; // 指定对象，将新创建的对象赋值给子类的原型
}

// 父类初始化实例属性和原型属性
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
Parent.prototype.sayName = function () {
  alert(this.name);
};

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 将父类原型指向子类
inheritPrototype(Child, Parent);

// 新增子类原型属性
Child.prototype.sayAge = function () {
  alert(this.age);
};

var instance1 = new Child("xyc", 23);
var instance2 = new Child("lxy", 23);

instance1.colors.push("2"); // ["red", "blue", "green", "2"]
instance1.colors.push("3"); // ["red", "blue", "green", "3"]
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211228135634.png)
- 优点
  - 不必为了指定子类型的原型而调用父类型的构造函数
  - 只调用一次父类构造函数
  - Child可以向Parent传参
  - 父类方法可以复用
  - 父类的引用属性不会被共享
#### ES6 继承
ES6 支持通过类来实现继承，方法比较简单.
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return this.x + "" + this.y;
  }
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); //调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + " " + super.toString(); // 调用父类的toString()
  }
}
var colorPoint = new ColorPoint("1", "2", "red");
console.log(colorPoint.toString()); // red 12
```
### ES5 继承和 ES6 继承的差别
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210927093321.png)
- 差别 1：
  - ES6 的构造函数通过原型链连接起来了，构造函数之间有直接的引用关系；
  - ES5 实际上是使用 call 或者 apply 借用父类构造函数实现的实例化，构造函数之间没有直接的引用关系
- 差别 2：
  - ES5 的实例化对象是由子类构造函数先创建的，然后父类构造函数是使用 call 或者 apply 修改这个对象
  - ES6 的实例化对象是由父类构造函数先创建的（这就是为什么要先调用 super），然后子类构造函数修改这个对象
### ES6 实例成员、静态成员、静态方法处理
- 静态方法
  - 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
  - 静态方法包含 this 关键字，这个 this 指的是类，而不是实例。
  - 静态方法可以与非静态方法重名。
  - 父类 Foo 有一个静态方法，子类 Bar 可以调用这个方法。静态方法也是可以从 super(super.classMethod())对象上调用的。
```js
class Foo {
  static classMethod() {
    return "hello";
  }
}
Foo.classMethod(); // 'hello'

var foo = new Foo();
foo.classMethod();
// TypeError: foo.classMethod is not a function
```
- 实例属性
  - 定义在 constructor()方法里面的 this 上面
  - 定义在类的最顶层。
```js
class IncreasingCounter {
  _count = 0;
  constructor() {
    this._count1 = 0;
  }
  get value() {
    console.log("Getting the current value!");
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```
- 静态属性
  - 静态属性指的是 Class 本身的属性，即 Class.propName，而不是定义在实例对象（this）上的属性。
  - ES6 明确规定，Class 内部只有静态方法，没有静态属性。
  - 写法为 Foo 类定义了一个静态属性 prop。
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
  - 一种方法是利用 Symbol 值的唯一性，将私有方法的名字命名为一个 Symbol 值。
```js
class Widget {
  // 公有方法
  foo(baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return (this.snaf = baz);
  }
  // ...
}

class Widget {
  foo(baz) {
    bar.call(this, baz);
  }

  // ...
}
function bar(baz) {
  return (this.snaf = baz);
}

const bar = Symbol("bar");
const snaf = Symbol("snaf");

export default class myClass {
  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return (this[snaf] = baz);
  }

  // ...
}

const inst = new myClass();
Reflect.ownKeys(myClass.prototype);
// [ 'constructor', 'foo', Symbol(bar) ]
```
### ES6知识点
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210921221425.png)

#### Set 数据结构
概念：set 是 ES6 新增的数据结构。集合的概念是一组无序且唯一（即不重复）的项组成。set 数据结构使用了与有限集合相同的数学概念，应用在计算机的数据结构中，与数组类似，但成员都是唯一的，没有重复的值。

特点：key 和 value 相同，没有重复的 value。只有健值，没有健名，有点类似数组。
#### WeakSet
WeakSet 对象允许你将弱引用对象储存在一个集合中。
WeakSet 与 Set 的区别：
- WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以
- WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素。
#### Map 数据结构
Map 是一种叫做字典的数据结构,Map 和对象最大的不同应该就是键可以是任意类型。
Map 原生提供三个遍历器生成函数和一个遍历方法。
- keys()：返回键名的遍历器。
- values()：返回键值的遍历器。
- entries()：返回所有成员的遍历器。
- forEach()：遍历 Map 的所有成员。
  需要特别注意的是，Map 的遍历顺序就是插入顺序。
#### WeakMap
WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意。
注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

WeakMap 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的 key 则变成无效的），所以，WeakMap 的 key 是不可枚举的。
### 可迭代接口怎么实现的？
集合对象（数组、Set/Map 集合）和字符串都是可迭代对象，这些对象都有默认的迭代器和 Symbol.iterator 属性。
迭代器的本身是一个对象，这个对象有 next( ) 方法返回结果对象，这个结果对象有下一个返回值 value、迭代完成布尔值 done。
```js
function createIterator(iterms) {
  let i = 0;
  return {
    next() {
      let done = i >= iterms.length;
      let value = !done ? iterms[i++] : undefined;
      return {
        done,
        value,
      };
    },
  };
}

let arrayIterator = createIterator([1, 2, 3]);

console.log(arrayIterator.next()); // { done: false, value: 1 }
console.log(arrayIterator.next()); // { done: false, value: 2 }
console.log(arrayIterator.next()); // { done: false, value: 3 }
console.log(arrayIterator.next()); // { done: true, value: undefined }
```
### ES6 生成器创建一个迭代器?
生成器函数的一个特点是，当执行完一句 yield 语句后函数会自动停止执行，再次调用迭代器的 next( ) 方法才会继续执行下一个 yield 语句。

```js
// let createIterator = function *(items) { // 生成器函数表达式
function* createIterator(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

let someIterator = createIterator([123, "someValue"]);

console.log(someIterator.next()); // { value: 123, done: false }
console.log(someIterator.next()); // { value: 'someValue', done: false }
console.log(someIterator.next()); // { value: undefined, done: true }
```
### reduce的奇淫技巧？
reduce 方法是一个数组的迭代方法，和 map、filter 不同，reduce 方法可缓存一个变量，迭代时我们可以操作这个变量，然后返回它。
#### 代替 map 和 filter
```js
const arr = [0, 1, 2, 3];

// 代替map：[0, 2, 4, 6]
const a = arr.map((v) => v * 2);
const b = arr.reduce((t, v) => [...t, v * 2], []);

// 代替filter：[2, 3]
const c = arr.filter((v) => v > 1);
const d = arr.reduce((t, v) => (v > 1 ? [...t, v] : t), []);

// 代替map和filter：[4, 6]
const e = arr.map((v) => v * 2).filter((v) => v > 2);
const f = arr.reduce((t, v) => (v * 2 > 2 ? [...t, v * 2] : t), []);
```
#### 代替 some 和 every

```js
const scores = [
  { score: 45, subject: "chinese" },
  { score: 90, subject: "math" },
  { score: 60, subject: "english" },
];

// 代替some：至少一门合格
const isAtLeastOneQualified = scores.reduce(
  (t, v) => t || v.score >= 60,
  false
); // true

// 代替every：全部合格
const isAllQualified = scores.reduce((t, v) => t && v.score >= 60, true); // false
```
#### 数组分割
```js
function Chunk(arr = [], size = 1) {
  return arr.length
    ? arr.reduce(
        (t, v) => (
          t[t.length - 1].length === size
            ? t.push([v])
            : t[t.length - 1].push(v),
          t
        ),
        [[]]
      )
    : [];
}

const arr = [1, 2, 3, 4, 5];
Chunk(arr, 2); // [[1, 2], [3, 4], [5]]
```
#### 数组填充
```js
function Fill(arr = [], val = "", start = 0, end = arr.length) {
  if (start < 0 || start >= end || end > arr.length) return arr;
  return [
    ...arr.slice(0, start),
    ...arr.slice(start, end).reduce((t, v) => (t.push(val || v), t), []),
    ...arr.slice(end, arr.length),
  ];
}
const arr = [0, 1, 2, 3, 4, 5, 6];
Fill(arr, "aaa", 2, 5); // [0, 1, "aaa", "aaa", "aaa", 5, 6]
```
#### 数组累加
数组累加是项目经常遇到的，比如计算商品总价等，使用 reduce 就可以一行代码搞定，而且不用定义外部变量，reduce 是完全无副作用的函数。
```js
// 累加
[1, 2, 3, 4, 5, 6, 7, 8].reduce((a, i) => a + i);
// 输出：36

// 累加，默认一个初始值
[1, 2, 3, 4, 5, 6, 7, 8].reduce((a, i) => a + i, 5);
// 输出：41

// 累乘
[1, 2, 3, 4, 5, 6, 7, 8].reduce((a, i) => a * i);
// 输出：40320
```
#### 找出数组最大值
在数组每次的迭代中，我们使用 Math.max 获取最大值并返回，最后我们将得到数组所有项目的最大值。
```js
[1, 2, 3, 4, 5, 6, 7, 8].reduce((a, i) => Math.max(a, i));
```
#### 处理不规则数组
通过 map 和 reduce 配合使用，返回每个子数组拼接好的结果。
```js
let data = [
  ["红色","128g", "苹果手机"],
  ["南北","两室一厅","128㎡","洋房住宅"],
  ["小米","白色","智能运动手表","心率血压血氧","来电信息提醒"],
  ["官方发售","2020年秋季","篮球","球鞋","品牌直邮"]
]
let dataConcat = data.map(item=>item.reduce((a,i)=>`${a} ${i}`))
// 输出结果：
["红色 128g 苹果手机"
"南北 两室一厅 128㎡ 洋房住宅"
"小米 白色 智能运动手表 心率血压血氧 来电信息提醒"
"官方发售 2020年秋季 篮球 球鞋 品牌直邮"]
```
#### 删除数据重复项
检查当前迭代项是否存在，如果不存在添加到数组中。
```js
let array = [1, 2, 3, "a", "b", "c", 1, 2, 3, "a", "b", "c"];
array.reduce((noDupes, curVal) => {
  if (noDupes.indexOf(curVal) === -1) {
    noDupes.push(curVal);
  }
  return noDupes;
}, []);
// 输出：[1, 2, 3, 'a', 'b', 'c']

function Uniq(arr = []) {
  return arr.reduce((t, v) => (t.includes(v) ? t : [...t, v]), []);
}
const arr = [2, 1, 0, 3, 2, 1, 2];
Uniq(arr); // [2, 1, 0, 3]
```
#### 验证括号是否合法
这是一个很巧妙的用法，我在 dev.to 上看到的用法。如果结果等于 0 说明，括号数量是合法的。
```js
[..."(())()(()())"].reduce((a, i) => (i === "(" ? a + 1 : a - 1), 0);
// 输出：0

// 使用循环方式
let status = 0;
for (let i of [..."(())()(()())"]) {
  if (i === "(") status = status + 1;
  else if (i === ")") status = status - 1;
  if (status < 0) {
    break;
  }
}
```
#### 按属性分组
按照指定 key 将数据进行分组，这里我用国家字段分组，在每次迭代过程中检查当前国家是否存在，如果不存在创建一个数组，将数据插入到数组中。并返回数组。
```js
let obj = [
  {name: '张三', job: '数据分析师', country: '中国'},
  {name: '艾斯', job: '科学家', country: '中国'},
  {name: '雷尔', job: '科学家', country: '美国'},
  {name: '鲍勃', job: '软件工程师', country: '印度'},
]
obj.reduce((group, curP) => {
  let newkey = curP['country']
  if(!group[newkey]){
    group[newkey]=[]
  }
  group[newkey].push(curP)
  return group
}, [])
// 输出：
[ 中国: [{…}, {…}]
  印度: [{…}]
  美国: [{…}] ]
```
#### 数组扁平化
这里展示的数组只有一级深度，如果数组是多级可以使用递归来进行处理。
```js
[
  [3, 4, 5],
  [2, 5, 3],
  [4, 5, 6],
]
  .reduce((singleArr, nextArray) => singleArr.concat(nextArray), [])
  [
    // 输出：[3, 4, 5, 2, 5, 3, 4, 5, 6]

    // 当然也可以使用ES6的.flat方法替代
    ([3, 4, 5], [2, 5, 3], [4, 5, 6])
  ].flat();
```
#### 反转字符串
```js
[..."hello world"].reduce((a,v) => v+a)
[..."hello world"].reverse().join('')
```
#### 数组成员独立拆解
```js
function Unzip(arr = []) {
  return arr.reduce(
    (t, v) => (v.forEach((w, i) => t[i].push(w)), t),
    Array.from({ length: Math.max(...arr.map((v) => v.length)) }).map((v) => [])
  );
}
const arr = [
  ["a", 1, true],
  ["b", 2, false],
];
Unzip(arr); // [["a", "b"], [1, 2], [true, false]]
```
#### 数组成员个数统计
```js
function Count(arr = []) {
  return arr.reduce((t, v) => ((t[v] = (t[v] || 0) + 1), t), {});
}
const arr = [0, 1, 1, 2, 2, 2];
Count(arr); // { 0: 1, 1: 2, 2: 3 }
```
#### 数组成员位置记录
```js
function Position(arr = [], val) {
  return arr.reduce((t, v, i) => (v === val && t.push(i), t), []);
}
const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];
Position(arr, 2); // [0, 4]
```
#### 数组成员特性分组
```js
function Group(arr = [], key) {
  return key
    ? arr.reduce(
        (t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t),
        {}
      )
    : {};
}
const arr = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 },
]; // 以地区area作为分组依据
Group(arr, "area"); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }
```
#### 数组成员所含关键字统计
```js
function Keyword(arr = [], keys = []) {
  return keys.reduce(
    (t, v) => (arr.some((w) => w.includes(v)) && t.push(v), t),
    []
  );
}
const text = [
  "今天天气真好，我想出去钓鱼",
  "我一边看电视，一边写作业",
  "小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心",
  "最近上班喜欢摸鱼的人实在太多了，代码不好好写，在想入非非",
];
const keyword = ["偷懒", "喜欢", "睡觉", "摸鱼", "真好", "一边", "明天"];
Keyword(text, keyword); // ["喜欢", "摸鱼", "真好", "一边"]
```
#### 数字千分化
```js
function ThousandNum(num = 0) {
  const str = (+num).toString().split(".");
  const int = (nums) =>
    nums
      .split("")
      .reverse()
      .reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), "")
      .replace(/^,|,$/g, "");
  const dec = (nums) =>
    nums
      .split("")
      .reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "")
      .replace(/^,|,$/g, "");
  return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
}
ThousandNum(1234); // "1,234"
ThousandNum(1234.0); // "1,234"
ThousandNum(0.1234); // "0.123,4"
ThousandNum(1234.5678); // "1,234.567,8"
```
#### 异步累计
```js
async function AsyncTotal(arr = []) {
  return arr.reduce(async (t, v) => {
    const at = await t;
    const todo = await Todo(v);
    at[v] = todo;
    return at;
  }, Promise.resolve({}));
}
const result = await AsyncTotal(); // 需要在async包围下使用
```
#### 斐波那契数列
```js
function Fibonacci(len = 2) {
  const arr = [...new Array(len).keys()];
  return arr.reduce((t, v, i) => (i > 1 && t.push(t[i - 1] + t[i - 2]), t), [
    0,
    1,
  ]);
}
Fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
#### URL 参数反序列化
```js
function ParseUrlSearch() {
  return location.search
    .replace(/(^\?)|(&$)/g, "")
    .split("&")
    .reduce((t, v) => {
      const [key, val] = v.split("=");
      t[key] = decodeURIComponent(val);
      return t;
    }, {});
}
// 假设URL为：https://www.baidu.com?age=25&name=TYJ
ParseUrlSearch(); // { age: "25", name: "TYJ" }
```
#### URL 参数序列化
```js
function StringifyUrlSearch(search = {}) {
  return Object.entries(search)
    .reduce(
      (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
      Object.keys(search).length ? "?" : ""
    )
    .replace(/&$/, "");
}
StringifyUrlSearch({ age: 27, name: "YZW" }); // "?age=27&name=YZW"
```
#### 返回对象指定键值
```js
function GetKeys(obj = {}, keys = []) {
  return Object.keys(obj).reduce(
    (t, v) => (keys.includes(v) && (t[v] = obj[v]), t),
    {}
  );
}
const target = { a: 1, b: 2, c: 3, d: 4 };
const keyword = ["a", "d"];
GetKeys(target, keyword); // { a: 1, d: 4 }
```
#### 数组转对象
```js
const people = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "SZ", name: "TYJ", age: 25 },
];
const map = people.reduce((t, v) => {
  const { name, ...rest } = v;
  t[name] = rest;
  return t;
}, {}); // { YZW: {…}, TYJ: {…} }
```
### JS数组的方法,哪些会改变原数组,哪些不会改变原数组
#### 改变原数组的方法
- 改变原数组的方法(9 个)
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
- 不改变原数组的方法(8 个):
  - slice() 浅拷贝数组的元素
  - join() 数组转字符串
  - toLocaleString() 数组转字符串
  - toString() 数组转字符串 不推荐
  - cancat 方法用于合并两个或多个数组，返回一个新数组。
  - indexOf() 查找数组是否存在某个元素，返回下标
  - lastIndexOf() 查找指定元素在数组中的最后一个位置
  - ES7 includes() 查找数组是否包含某个元素 返回布尔
### JS 操作数组的方法？
- concat()
  - concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，仅会返回被连接数组的一个副本。
- join()
  - join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用','号分割，不改变原数组。
- push()
  - push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。末尾添加，返回的是长度，会改变原数组。
- shift()
  - shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。返回第一个元素，改变原数组。
- unshift()
  - unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。返回新长度，改变原数组。
- slice()
  - slice() 方法返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。返回选定的元素，该方法不会修 改原数组。
- splice()
  - splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。splice() 方法会直接对数组进行修改。
- substring() 和 substr() - 相同点：如果只是写一个参数，两者的作用都一样：都是是截取字符串从当前下标以后直到字符串最后的字符串片段。 - 不同点：第二个参数
  substr（startIndex,lenth）： 第二个参数是截取字符串的长度（从起始点截取某个长度的字符串）；
  substring（startIndex, endIndex）： 第二个参数是截取字符串最终的下标 （截取 2 个位置之间的字符串,‘含头不含尾'）。
- sort 排序
  - 按照 Unicode code 位置排序，默认升序
- reverse()
  - reverse() 方法用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组。
- indexOf 和 lastIndexOf
  - indexOf 和 lastIndexOf 都接受两个参数：查找的值、查找起始位置 不存在，返回 -1 ；存在，返回位置。indexOf 是从前往后查找， lastIndexOf 是从后往前查找。
- every
  - every 对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true
- some
  - some 对数组的每一项都运行给定的函数，任意一项都返回 ture,则返回 true
- filter
  - filter 对数组的每一项都运行给定的函数，返回 结果为 ture 的项组成的数组
- map
  - 对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组
- forEach 数组遍历



ES6 新增新操作数组的方法
- find()：
  - 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索。
- findIndex()：
  - 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索。
- fill()：
  - 选择数组的某个下标，从该位置开始复制数组元素，默认从 0 开始复制。也可以指定要复制的元素范围。
- from
  - 将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组
- of
  - 用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异。
- entries() 返回迭代器：返回键值对
- values() 返回迭代器：返回键值对的 value
- keys() 返回迭代器：返回键值对的 key
- includes
  - 判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误。
### 如何让数组置空？
1. 方法 1
   直接置空，重新初始化。这种方式性能是最好的，因为直接声明了一个新数组，相当于变量初始化，并没有去修改原数组。
```js
arr = [1, 2, 3];
arr = [];
```
2. 方法 2
   使用 length 属性，别忘了在 JS 里，数组的 length 属性不仅可读，还是可写的。这句代码将数组的长度设置为 0，返回 0，此时在控制台再次打印 arr, 会输出 []
```js
arr = [1, 2, 3];
arr.length = 0;
```
3. 方法 3
   使用 splice 属性。数组的 splice 方法用处多多，这里输入两个参数，第一个参数 0 表示从数组索引 0 处开始操作，第二个参数表示待删除的元素个数，这里输入数组的长度，也就是把整个数组的元素都删除了。splice 方法返回被删除的元素，所以这句代码执行后会返回 [1, 2, 3] ，此时再打印 arr, 输出空数组 []
```js
arr = [1, 2, 3];
arr.splice(0, arr.length);
```
4. 方法 4
   使用循环 + pop / shift 方法。通过循环数组中的元素，使用数组内置的 shift/pop 方法来删除数组元素，这两个方法都是直接修改了原数组。通过对比前面的方法，就可以大致猜到这种方式性能肯定是最差的。
```js
arr = [1, 2, 3];
while (arr.length) {
  arr.pop();
  // 类似的，arr.shift()
}
```
### 类数组对象转换为数组的方法
- ES6 语法 Array.from(arr)
```js
//将hdList用Array.from（）方法转换为数组，并用list变量接收
let list = Array.from(hdList);
```
- 用 Array.prototype.slice.call（elems）方法转化为数组 或 [].slice.call（elems）
```js
let list = Array.prototype.slice.call(hdList);
```
- 用[ ...elems ]方法转化为数组
```js
let list = [...hdList]; //用[ ...elems ]方法转化为数组并用list接收
```
- 用 Array.prototype.forEach.call(elem,callback)方法
```js
//直接对hdList集合进行循环或者map等
Array.prototype.forEach.call（hdList,function(){
//...
}）
Array.prototype.map.call（hdList,function(){
//...
}）
```
### 编程范式
面向过程（Process Oriented Programming，POP）
面向对象（Object Oriented Programming，OOP）
面向接口（Interface Oriented Programming， IOP）
面向切面（Aspect Oriented Programming，AOP）
函数式（Funtional Programming，FP）
响应式（Reactive Programming，RP）
函数响应式（Functional Reactive Programming，FRP）
### 函数的作用，纯函数是什么，函数的副作用是什么?
- 函数是"第一等公民"
  - 函数可以像其他数据类型一样操作，如赋值给其他变量、作为函数的入参、作为函数的返回值。
- 纯函数
  - 如果函数的调用参数相同, 则永远返回相同的结果. 它不依赖于程序执行期间函数 外部任何状态或数据的变化,只依赖于传入的参数。
  - 纯函数不会产生任何可观察的副作用, 例如: 网络请求, 输入/输出设备, 或数据突变(mutation)等。
  - **无状态**：函数的输出仅取决于输入，而不依赖外部状态；
  - **无副作用**：不会造成超出其作用域的变化，即不修改 函数参数 或 全局变量 等。函数依赖外部状态就无法保证相同的输出，就会带来副作用。
  - **可缓存性**正是因为函数式声明的无状态特点，即：**相同输入总能得到相同的输出**。所以我们可以提前缓存函数的执行结果，实现更多功能。例如：优化斐波拉契数列的递归解法。
  - **可移植性/自文档化**纯函数的依赖很明确，更易于观察和理解，配合类型签名可以使程序更加简单易读。
  - **可测试性**纯函数让测试更加简单，只需简单地给函数一个输入，然后断言输出就可以了。
  - **并行处理**在多线程环境下并行操作共享的内存数据很可能会出现意外情况。纯函数（封闭的环境）不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数（Web Worker 可以开启新的线程)。
- 函数副作用
  - 函数的副作用是指**在调用函数时，除了返回函数值外还产生了额外的影响**。
  - 更改全局变量
  - 处理用户输入
  - 屏幕打印或打印 log 日志
  - DOM 查询以及浏览器 cookie、localstorage 查询
  - 发送 http 请求
  - 抛出异常，未被当前函数捕获
### 栈内存和堆内存？
与GC（垃圾回收机制）有关。为了使程序运行时占用的内存最小。

当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会被逐个放入这块栈内存里，当方法执行结束，这个方法的内存栈也会被销毁。因此，所有在方法中定义的变量都存放在栈内存中。

当在程序创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法调用结束后，只要这个对象还可能被另一个变量所引用，则这个对象就不会被销毁；只有当一个对象没有被任何变量引用它时，系统的垃圾回收机制才会回收它。
### JS垃圾回收机制
每隔一段时间， JS 的垃圾收集器都会对变量进行“巡逻”，就和保安巡逻园区一样，让不相干的人赶紧走。当一个变量不被需要了以后，它就会把这个变量所占用的内存空间所释放，这个过程就叫做垃圾回收。

- JS 的垃圾回收算法分为两种
    - **引用计数法**
    - **标记清除法**

**引用计数法**：在引用计数法的机制下，内存中的每一个值都会对应一个引用计数。引用计数法是最初级的垃圾回收算法，已经被现代浏览器所淘汰了。在学习引用计数法之前，需要首先对引用有一定的概念，你可以认为它就是对当前变量所指向的那块内存地址的描述，有点类似于JS引用数据类型的内存指向的概念，先来看一行代码：
```js
var obj={name:'jack'};
````
当我们在给 obj 赋值的同时，其实就创建了一个指向该变量的引用,引用计数为 1，在引用计数法的机制下，内存中的每一个值都会对应一个引用计数。而当我们给 obj 赋值为 null 时，这个变量就变成了一块没用的内存，那么此时， obj 的引用计数将会变成 0，它将会被垃圾收集器所回收，也就是 obj 所占用的内存空间将会被释放。

函数作用域的生命周期是很短暂的，在函数执行完毕之后，里面的变量基本是没用的变量了，不清除的后果就是该内存垃圾没有被释放，依然霸占着原有的内存不松手，就会容易引发内存泄漏。
```js
function changeName() {
  var obj1 = {};
  var obj2 = {};

  obj1.target = obj2;
  obj2.target = obj1;
  obj1.age = 15;
  console.log(obj1.target);
  console.log(obj2.target);
}

changeName();
```



**标记清除法**：引用计数法的弊端已经很明显了，那么，现在所要说的标记清除法就不存在这样子的问题。因为它采用的判断标准是看这个对象是否可抵达，它主要分为两个阶段，**标记阶段**和**清除阶段**:
- 标记阶段
  - 垃圾收集器会从根对象（Window 对象）出发，扫描所有可以触及的对象，这就是所谓的可抵达。
- 清除阶段
  - 在扫描的同时，根对象无法触及（不可抵达）的对象,就是被认为不被需要的对象，就会被当成垃圾清除。
```js
function changeName() {
  var obj1 = {};
  var obj2 = {};
  obj1.target = obj2;
  obj2.target = obj1;
  obj1.age = 15;
  console.log(obj1.target);
  console.log(obj2.target);
}
changeName();
```
在函数执行完毕之后，函数的声明周期结束，那么现在，从 Window 对象 出发， obj1 和 obj2 都会被垃圾收集器标记为不可抵达，这样子的情况下，互相引用的情况也会迎刃而解。
### 内存泄漏
该释放的内存垃圾没有被释放，依然霸占着原有的内存不松手，造成系统内存的浪费，导致性能恶化，系统崩溃等严重后果，这就是所谓的内存泄漏。那当不再用到的对象内存，没有及时被回收时，我们叫它 内存泄漏（Memory leak）。
### 哪些可能造成内存泄漏？
#### 不正当的闭包
```js
function fn1() {
  let test = new Array(1000).fill("isboyjc");
  return function() {
    console.log("hahaha");
  };
}
let fn1Child = fn1();
fn1Child();
```

```js
function fn2() {
  let test = new Array(1000).fill("isboyjc");
  return function() {
    console.log(test);
    return test;
  };
}
// 显然它也是闭包，并且因为 return 的函数中存在函数 fn2 中的 test 变量引用，所以 test 并不会被回收，也就造成了内存泄漏。
let fn2Child = fn2();
fn2Child();

function fn2() {
  let test = new Array(1000).fill("isboyjc");
  return function() {
    console.log(test);
    return test;
  };
}
let fn2Child = fn2();
fn2Child();
// 其实在函数调用后，把外部的引用关系置空就好了。说不正当的使用闭包可能会造成内存泄漏。
fn2Child = null;
```
#### 隐式全局变量
我们知道 JavaScript 的垃圾回收是自动执行的，垃圾回收器每隔一段时间就会找出那些不再使用的数据，并释放其所占用的内存空间。

再来看全局变量和局部变量，函数中的局部变量在函数执行结束后这些变量已经不再被需要，所以垃圾回收器会识别并释放它们。但是对于全局变量，垃圾回收器很难判断这些变量什么时候才不被需要，所以全局变量通常不会被回收，我们使用全局变量是 OK 的，但同时我们要避免一些额外的全局变量产生。
```js
function fn() {
  // 没有声明从而制造了隐式全局变量test1
  test1 = new Array(1000).fill("isboyjc1");

  // 函数内部this指向window，制造了隐式全局变量test2
  this.test2 = new Array(1000).fill("isboyjc2");
}
// 调用函数 fn ，因为 没有声明 和 函数中this 的问题造成了两个额外的隐式全局变量，这两个变量不会被回收，这种情况我们要尽可能的避免，在开发中我们可以使用严格模式或者通过 lint 检查来避免这些情况的发生，从而降低内存成本。
fn();
```
除此之外，我们在程序中也会不可避免的使用全局变量，这些全局变量除非被取消或者重新分配之外也是无法回收的，这也就需要我们额外的关注，也就是说当我们在使用全局变量存储数据时，要确保使用后将其置空或者重新分配，当然也很简单，在使用完将其置为 null 即可，特别是在使用全局变量做持续存储大量数据的缓存时，我们一定要记得设置存储上限并及时清理，不然的话数据量越来越大，内存压力也会随之增高。
```js
var test = new Array(10000);
// do something
test = null;
```
#### 游离 DOM 引用
考虑到性能或代码简洁方面，我们代码中进行 DOM 时会使用变量缓存 DOM 节点的引用，但移除节点的时候，我们应该同步释放缓存的引用，否则游离的子树无法释放。
```html
<div id="root">
  <ul id="ul">
    <li></li>
    <li></li>
    <li id="li3"></li>
    <li></li>
  </ul>
</div>
<script>
  let root = document.querySelector("#root");
  let ul = document.querySelector("#ul");
  let li3 = document.querySelector("#li3");

  // 由于ul变量存在，整个ul及其子元素都不能GC
  root.removeChild(ul);

  // 虽置空了ul变量，但由于li3变量引用ul的子节点，所以ul元素依然不能被GC
  ul = null;

  // 已无变量引用，此时可以GC
  li3 = null;
</script>
```
当我们使用变量缓存 DOM 节点引用后删除了节点，如果不将缓存引用的变量置空，依然进行不了 GC，也就会出现内存泄漏。
假如我们将父节点置空，但是被删除的父节点其子节点引用也缓存在变量里，那么就会导致整个父 DOM 节点树下整个游离节点树均无法清理，还是会出现内存泄漏，解决办法就是将引用子节点的变量也置空。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211122081820.png)
#### 遗忘的定时器
经常会用到计时器，也就是 setTimeout 和 setInterval。
```js
// 获取数据
let someResource = getData()
setInterval(() => {
  const node = document.getElementById('Node')
	if(node) {
    node.innerHTML = JSON.stringify(someResource))
	}
}, 1000)
// 在 setInterval 没有结束前，回调函数里的变量以及回调函数本身都无法被回收。
```
什么才叫结束呢？也就是调用了 clearInterval。如果没有被 clear 掉的话，就会造成内存泄漏。不仅如此，如果回调函数没有被回收，那么回调函数内依赖的变量也没法被回收。所以在上例中，someResource 就没法被回收。

同样，setTiemout 也会有同样的问题，所以，当不需要 interval 或者 timeout 时，最好调用 clearInterval 或者 clearTimeout 来清除，另外，浏览器中的 requestAnimationFrame 也存在这个问题，我们需要在不需要的时候用 cancelAnimationFrame API 来取消使用。
#### 遗忘的事件监听器
当事件监听器在组件内挂载相关的事件处理函数，而在组件销毁时不主动将其清除时，其中引用的变量或者函数都被认为是需要的而不会进行回收，如果内部引用的变量存储了大量数据，可能会引起页面占用内存过高，这样就造成意外的内存泄漏。
```vue
<template>
  <div></div>
</template>

<script>
export default {
  created() {
    window.addEventListener("resize", this.doSomething);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.doSomething);
  },
  methods: {
    doSomething() {
      // do something
    },
  },
};
</script>
```
#### 遗忘的监听者模式
监听者模式想必我们都知道，不管是 Vue 、 React 亦或是其他，对于目前的前端开发框架来说，监听者模式实现一些消息通信都是非常常见的，比如 EventBus. . .

当我们实现了监听者模式并在组件内挂载相关的事件处理函数，而在组件销毁时不主动将其清除时，其中引用的变量或者函数都被认为是需要的而不会进行回收，如果内部引用的变量存储了大量数据，可能会引起页面占用内存过高，这样也会造成意外的内存泄漏。
```vue
<template>
  <div></div>
</template>

<script>
export default {
  created() {
    eventBus.on("test", this.doSomething);
  },
  beforeDestroy() {
    eventBus.off("test", this.doSomething);
  },
  methods: {
    doSomething() {
      // do something
    },
  },
};
</script>
```
#### 遗忘的 Map、Set 对象
当使用 Map 或 Set 存储对象时，同 Object 一致都是强引用，如果不将其主动清除引用，其同样会造成内存不自动进行回收。

如果使用 Map ，对于键为对象的情况，可以采用 WeakMap，WeakMap 对象同样用来保存键值对，对于键是弱引用（注：WeakMap 只对于键是弱引用），且必须为一个对象，而值可以是任意的对象或者原始值，由于是对于对象的弱引用，不会干扰 Js 的垃圾回收。

如果需要使用 Set 引用对象，可以采用 WeakSet，WeakSet 对象允许存储对象弱引用的唯一值，WeakSet 对象中的值同样不会重复，且只能保存对象的弱引用，同样由于是对于对象的弱引用，不会干扰 Js 的垃圾回收。

这里可能需要简单介绍下，谈弱引用，我们先来说强引用，之前我们说 JS 的垃圾回收机制是如果我们持有对一个对象的引用，那么这个对象就不会被垃圾回收，这里的引用，指的就是 强引用 ，而弱引用就是一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，因此可能在任何时刻被回收。
```js
// obj是一个强引用，对象存于内存，可用
let obj = { id: 1 };
// 重写obj引用
obj = null;
// 对象从内存移除，回收 {id: 1} 对象

let obj = { id: 1 };
let user = { info: obj };
let set = new Set([obj]);
let map = new Map([[obj, "hahaha"]]);
// 重写obj
// 此例我们重写 obj 以后，{id: 1} 依然会存在于内存中，因为 user 对象以及后面的 set/map 都强引用了它，Set/Map、对象、数组对象等都是强引用，所以我们仍然可以获取到 {id: 1} ，我们想要清除那就只能重写所有引用将其置空了。
obj = null;
console.log(user.info); // {id: 1}
console.log(set);
console.log(map);

let obj = { id: 1 };
let weakSet = new WeakSet([obj]);
let weakMap = new WeakMap([[obj, "hahaha"]]);
// 重写obj引用
obj = null;
// {id: 1} 将在下一次 GC 中从内存中删除
// 使用了 WeakMap 以及 WeakSet 即为弱引用，将 obj 引用置为 null 后，对象 {id: 1} 将在下一次 GC 中被清理出内存。
```
#### 未清理的 Console 输出
写代码的过程中，肯定避免不了一些输出，在一些小团队中可能项目上线也不清理这些 console，殊不知这些 console 也是隐患，同时也是容易被忽略的，我们之所以在控制台能看到数据输出，是因为浏览器保存了我们输出对象的信息数据引用，也正是因此未清理的 console 如果输出了对象也会造成内存泄漏。

所以，开发环境下我们可以使用控制台输出来便于我们调试，但是在生产环境下，一定要及时清理掉输出。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>test</title>
  </head>

  <body>
    <button id="click">click</button>

    <script>
      !(function() {
        function Test() {
          this.init();
        }
        Test.prototype.init = function() {
          this.a = new Array(10000).fill("isboyjc");
          console.log(this);
        };

        document.querySelector("#click").onclick = function() {
          new Test();
        };
      })();
    </script>
  </body>
</html>
```
#### 网络回调
某些场景中，在某个页面发起网络请求，并注册一个回调，且回调函数内持有该页面某些内容，那么，当该页面销毁时，应该注销网络的回调，否则，因为网络持有页面部分内容，也会导致页面部分内容无法被回收。
#### 内存泄漏排查、定位与修复
析内存泄漏的原因，还是需要借助开发者工具的 Memory 功能，这个功能可以抓取内存快照，也可以抓取一段时间内，内存分配的情况，还可以抓取一段时间内触发内存分配的各函数情况。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211122092223.png)
利用这些工具，我们可以分析出，某个时刻是由于哪个函数操作导致了内存分配，分析出大量重复且没有被回收的对象是什么。
这样一来，有嫌疑的函数也知道了，有嫌疑的对象也知道了，再去代码中分析下，这个函数里的这个对象到底是不是就是内存泄漏的元凶，搞定。
#### 内存三大件
内存泄漏我们说很久了，对象已经不再使用但没有被回收，内存没有被释放，即内存泄漏，那想要避免就避免让无用数据还存在引用关系，也就是多注意我们上面说的常见的几种内存泄漏的情况。

内存膨胀 即在短时间内内存占用极速上升到达一个峰值，想要避免需要使用技术手段减少对内存的占用。

频繁 GC 同这个名字，就是 GC 执行的特别频繁，一般出现在频繁使用大的临时变量导致新生代空间被装满的速度极快，而每次新生代装满时就会触发 GC，频繁 GC 同样会导致页面卡顿，想要避免的话就不要搞太多的临时变量，因为临时变量不用了就会被回收，这和我们内存泄漏中说避免使用全局变量冲突，其实，只要把握好其中的度，不太过分就 OK。
### Promise

#### Promise 初介绍
在传统的异步编程中，如果异步之间存在依赖关系，我们就需要通过层层嵌套回调来满足这种依赖，如果嵌套层数过多，可读性和可维护性都变得很差，产生所谓“回调地狱”，而 Promise 将回调嵌套改为链式调用，增加可读性和可维护性。
- 回调地狱
  - 嵌套层次很深，难以维护
  - 无法正常使用 return 和 throw
  - 无法正常检索堆栈信息
  - 多个回调之间难以建立联系
- Promise 的概念
    - 主要用于异步计算。promise 是用来解决异步函数的顺序问题.
    - 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。
    - 可以在对象之间传递和操作 Promise，帮助我们处理队列。

Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210926211726.png)
```js
new Promise(请求1)
  .then(请求2(请求结果1))
  .then(请求3(请求结果2))
  .then(请求4(请求结果3))
  .then(请求5(请求结果4))
  .catch(处理异常(异常信息));
```
- Promise 的写法更为直观，并且能够在外层捕获异步函数的异常信息。
  - Promise 对象的 then 方法会返回一个全新的 Promise 对象
  - 后面的 then 方法就是在为上ー个 then 返回的 Promise 注册回调
  - 前面 then 方法中回调函数的返回值会作为后面 then 方法回调的参数
  - 如果回调中返回的是 Promise，那后面 then 方法的回调会等待它的结束
#### 重点考察细节
**Js 引擎为了让 microtask 尽快的输出，做了一些优化，连续的多个 then(3 个)如果没有 reject 或者 resolve 会交替执行 then 而不至于让一个堵太久完成用户无响应**
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
#### Promise A+规范
- Promise 本质是一个状态机，且状态只能为以下三种：Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态），状态的变更是单向的，只能从 Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆
- then 方法接收两个可选参数，分别对应状态改变时触发的回调。then 方法返回一个 promise。then 方法可以被同一个 promise 调用多次。

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

promise 调用 then 的前提是该 promise 的状态为 fullfilled
只有 promise 调用 then 的时候，then 里面的函数才会被推入微任务中；
```
#### Promise 的调用流程
- 分析 Promise 的调用流程：
  - Promise 的构造方法接收一个 executor()，在 new Promise()时就立刻执行这个 executor 回调
  - executor()内部的异步任务被放入宏/微任务队列，等待执行
  - then()被执行，收集成功/失败回调，放入成功/失败队列
  - executor()的异步任务被执行，触发 resolve/reject，从成功/失败队列中取出回调依次执行
- 其实熟悉设计模式的同学，很容易就能意识到这是个观察者模式，这种收集依赖 -> 触发通知 -> 取出依赖执行 的方式，被广泛运用于观察者模式的实现，在 Promise 里，执行顺序是 then 收集依赖 -> 异步触发 resolve -> resolve 执行依赖。
#### then 链式调用
.then()需要返回一个 Promise，这样才能找到 then 方法，所以我们会把 then 方法的返回值包装成 Promise。
.then()的回调需要拿到上一个.then()的返回值
.then()的回调需要顺序执行。我们要等待当前 Promise 状态变更后，再执行下一个 then 收集的回调，这就要求我们对 then 的返回值分类讨论。
#### 手写Promise
```js
/**
* 1. Promise就是一个类，在执行这个类的时候，需要传递一个执行器进去，执行器会立即执行。
* 2. Promise中有三种状态分别为成功fulfilled、失败rejected、等待pending，一旦状态确定就不可以更改。
* 3. resolve,reject函数是用来更改状态的。
* 4. then方法内部做的事情就是判断，如果状态是成功，调用成功的回调函数，如果状态是失败，调用失败的回调函数。then方法是被定义在原生对象上的方法。
* 5. then成功回调有一个参数，表示成功之后的值，then失败回调有一个参数，表示失败后的原因。
*/

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  //传递执行器
  construct(executor) {
    this.status = PENDING;
    // 成功之后的值
    this.value = undefined;
    // 失败之后的原因
    this.error = undefined;
    // 成功回调
    this.onResolvedCallbacks = [];
    // 失败回调
    this.onRejectedCallbacks = [];
    // 执行器会立即执行  (Promise的立即执行性,除了resolve，reject都执行)
    try {
      executor(this.resolve, this.reject);
      // 捕获执行器错误
    } catch (error) {
      this.reject(error);
    }
  }
  resolve = (value) => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 更改状态为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value;
    // 异步执行的时候 判断成功回调是否存在 如果存在 调用
    // this.onResolvedCallbacks && this.onResolvedCallbacks(this.value)
    while (this.onResolvedCallbacks.length) {
      //从前往后调用
      this.onResolvedCallbacks.shift();
    }
  };
  reject = (error) => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 更改状态为失败
    this.status = REJECTED;
    // 保存失败之后的原因
    this.error = error;

    // 异步执行的时候 判断失败回调是否存在 如果存在 调用
    // this.onRejectedCallbacks && this.onRejectedCallbacks(this.error)
    while (this.onRejectedCallbacks.length) {
      //从前往后调用
      this.onRejectedCallbacks.shift();
    }
  };
  then(onFulfilled, onRejected) {
    /**
    .then()
    .then()
.   .then(value => console.log(value))
    */
    // onFulfilled,onRejected都是可选参数，如果他们不是函数，必须被忽略
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    // then链式调用
    // onFulfilled或onRejected不能同步被调用，必须异步调用。我们就用setTimeout解决异步问题。
    let promise2 = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        // 变成异步代码   等待所有同步代码完成之后执行  这样做的原因是为了获取 promise2
        setTimeout(() => {
          // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
          try {
            let x = onFulfilled(this.value);
            // 判断 x 的值是普通纸还是promise对象
            // 如果是普通值 直接调用resolve
            // 如果是promise对象，查看promise对象返回的结果
            // 再根据promise对象返回的结果，决定调用resolve还是reject
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
          try {
            let x = onRejected(this.error);
            // 判断 x 的值是普通纸还是promise对象
            // 如果是普通值 直接调用resolve
            // 如果是promise对象，查看promise对象返回的结果
            // 再根据promise对象返回的结果，决定调用resolve还是reject
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        // 我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用它们
        // 类似于发布订阅，先将then里面的两个函数储存起来，由于一个promise可以有多个then，所以存在同一个数组内。
        // 调用then的时候  没有直接调用 resolve 和 reject。异步之后调用
        // 处理异步状态
        // 等待状态
        // 将成功回调和失败回调存储起来
        // then 方法多次调用添加多个处理函数
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
            try {
              let x = onFulfilled(this.value);
              // 判断 x 的值是普通纸还是promise对象
              // 如果是普通值,直接调用resolve,直接作为promise2成功的结果
              // 如果是promise对象，查看promise对象返回的结果,则取它的结果，作为新的promise2成功的结果
              // 再根据promise对象返回的结果，决定调用resolve还是reject
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
            try {
              let x = onRejected(this.error);
              // 判断 x 的值是普通纸还是promise对象
              // 如果是普通值 直接调用resolve
              // 如果是promise对象，查看promise对象返回的结果
              // 再根据promise对象返回的结果，决定调用resolve还是reject
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
  catch(failureCallback) {
    return this.then(undefined, failureCallback);
  }
  // new Promise().finally()
  // finally方法是无论成功还是失败都会执行的方法
  // 1.无论当前 promise 对象状态是成功还是失败，finally()都会被调用一次
  // 2.finally()后面可以链式调用then（）---> finally()返回一个 promise 对象
  finally(callback) {
    //最后一个promise的then
    //then 方法可以拿到当前的状态
    return this.then(
      (value) => {
        //执行这个promise
        return MyPromise.resolve(callback()).then(() => value);
      },
      (error) => {
        return MyPromise.resolve(callback()).then(() => {
          throw error;
        });
      }
    );
  }
  done(resolveFn, rejectFn) {
    this.then(resolveFn, rejectFn).catch((reason) => {
      setTimeout(() => {
        throw reason;
      }, 0);
    });
  }
  // Promise.resolve(value)
  // resolve 返回的是一个promise对象
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    } else {
      return new MyPromise((resolve) => resolve(value));
    }
  }
  // Promise.reject(value)
  // reject 返回的是一个promise对象
  static reject(error) {
    if (error instanceof MyPromise) {
      return error;
    } else {
      return new MyPromise((resolve, reject) => reject(error));
    }
  }
  // Promise.all([])
  // all方法接收一个数组，当数组中每个实例都成功时才会返回，返回的也是一个数组，每个参数为对应的promise返回的结果，如果有一项失败了，all方法都会返回失败
  // 当 array 中的所有元素都执行成功，才返回成功 resolve
  // 当 array 中的一个元素执行失败，则返回失败 reject
  static all(array) {
    // 结果数组
    let result = [];
    let index = 0;
    let len = array.length;

    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === len) {
          // 全部成功
          resolve(result);
        }
      }
      // for循环瞬间就执行完了
      // 注意执行的时候  有可能有异步循环
      for (let i = 0; i < len; i++) {
        let current = array[i];
        if (current instanceof MyPromise) {
          // 失败就调用reject(error)
          current.then(
            (value) => addData(i, value),
            (error) => reject(error)
          );
        } else {
          addData(i, array[i]);
        }
      }
    });
  }
  // Promise.race([])
  // race方法同样接收一个数组参数，里面每一项是Promise实例，它返回最快改变状态的Promise实例方法的结果
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 返回 promise 对象，只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
  // 哪个Promise最快得到结果，就返回那个结果，无论成功失败
  static race(array) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      array.forEach((item) => {
        if (item instanceof MyPromise) {
          item.then(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
  // allSettled方法也是接收数组参数，但是它无论成功或者失败，都会返回
  static allSettled(array) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      let len = array.length;
      let results = [];

      for (let i = 0; i < len; i++) {
        let item = array[i];

        if (!(item instanceof MyPromise)) return;

        item.then(
          (result) => {
            results[i] = result;
          },
          (reason) => {
            results[i] = reason;
          }
        );
        resolve(results);
      }
    });
  }
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 如果有一个Promise成功，则返回这个成功结果
  // 如果所有Promise都失败，则报错
  static any(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      let count = 0;
      array.forEach((item) => {
        item.then(
          (val) => {
            resolve(val);
          },
          (err) => {
            count++;
            if (count === array.length) {
              reject(new AggregateError("All promises were rejected"));
            }
          }
        );
      });
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // then 方法链式调用识别 Promise 对象来自自己   不能自己返回自己的promise2 形成死循环调用
  // 处理自己返回自己
  if (promise2 === x) {
    // return 阻止向下执行
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  if (x instanceof MyPromise) {
    // promise对象
    // x.then((value) => resolve(value),(error) => reject(error))
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}
```
### Promise 和 async await 有什么区别
- 概念：
  - Promise 是异步编程的一种解决方案，主要是为了解决"回调地狱"问题，有三种状态（pending/fulfilled/rejected)，对象状态不受外界影响，一旦状态改变就不会变化。
  - async/await 也是异步编程的一种解决方案，基于 Promise 实现的，返回的是一个 Promise 对象。
- 区别：
  - promise.then 属于微任务，会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；
  - async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。async 函数表示函数里面可能会有异步方法，await 后面跟一个表达式。当 async 函数执行的时候，一旦遇到 await 就会先返回，遇到 await 会立即执行表达式，然后把表达式后面的代码放到微任务队列里，等到异步操作完成，再接着执行函数体内后面的语句。

Promise 和 Async/Await都能解决相同的问题，可以根据不同场景选择。Promise 可以一直异步链式调用，Async/Await 对比就比较简洁。

Await 的含义是等待，即 Async 的函数需要等待 await 后的函数执行完成并且有了返回结果（Promise 对象）之后，才能继续执行下面的代码，Await 通过返回一个 Promise 对象来实现同步的效果。
### Async/Await实现

在多个回调依赖的场景中，尽管 Promise 通过链式调用取代了回调嵌套，但过多的链式调用可读性仍然不佳，流程控制也不方便，ES7 提出的 async 函数，终于让 JS 对于异步操作有了终极解决方案，简洁优美地解决了以上两个问题。

```js
async () => {
  const a = await Promise.resolve(a);
  const b = await Promise.resolve(b);
  const c = await Promise.resolve(c);
};
```

那么我们要如何实现一个 async/await 呢，首先我们要知道，async/await 实际上是对 Generator（生成器）的封装，是一个语法糖。
ES6 新引入了 Generator 函数，可以通过 yield 关键字，把函数的执行流挂起，通过 next()方法可以切换到下一个状态，为改变执行流程提供了可能，从而为异步编程提供解决方案。

```js
function* myGenerator() {
  yield "1";
  yield "2";
  return "3";
}
const gen = myGenerator(); // 获取迭代器
gen.next(); //{value: "1", done: false}
gen.next(); //{value: "2", done: false}
gen.next(); //{value: "3", done: true}

// 也可以通过给next()传参, 让yield具有返回值
function* myGenerator() {
  console.log(yield "1"); //test1
  console.log(yield "2"); //test2
  console.log(yield "3"); //test3
}
// 获取迭代器
const gen = myGenerator();
gen.next();
gen.next("test1");
gen.next("test2");
gen.next("test3");
```

- Generator 和 async/await。看起来其实已经很相似，但二者又有三点不同：
  - async/await 自带执行器，不需要手动调用 next()就能自动执行下一步
  - async 函数返回值是 Promise 对象，而 Generator 返回的是生成器对象
  - await 能够返回 Promise 的 resolve/reject 的值
  - 我们对 async/await 的实现，其实也就是对应以上三点封装 Generator
#### 自动执行
```js
// 也可以通过给gen.next()传值的方式，让yield能返回resolve的值
function* myGenerator() {
  console.log(yield Promise.resolve(1)); //1
  console.log(yield Promise.resolve(2)); //2
  console.log(yield Promise.resolve(3)); //3
}

// 手动执行迭代器
const gen = myGenerator();
gen.next().value.then((val) => {
  // console.log(val)
  gen.next(val).value.then((val) => {
    // console.log(val)
    gen.next(val).value.then((val) => {
      // console.log(val)
      gen.next(val);
    });
  });
});

// 手动执行的写法看起来既笨拙又丑陋，我们希望生成器函数能自动往下执行，且yield能返回resolve的值，基于这两个需求，我们进行一个基本的封装，这里async/await是关键字，不能重写，我们用函数来模拟：

function run(gen) {
  // 把返回值包装成promise
  // 返回值是Promise：async/await的返回值是一个Promise，我们这里也需要保持一致，给返回值包一个Promise
  return new Promise((resolve, reject) => {
    var g = gen();

    function _next(val) {
      //错误处理
      try {
        var res = g.next(val);
      } catch (err) {
        return reject(err);
      }
      if (res.done) {
        return resolve(res.value);
      }
      //res.value包装为promise，以兼容yield后面跟基本类型的情况
      Promise.resolve(res.value).then(
        (val) => {
          _next(val);
        },
        (err) => {
          // 抛出错误
          // 缺少错误处理：上边代码里的Promise如果执行失败，就会导致后续执行直接中断，我们需要通过调用Generator.prototype.throw()，把错误抛出来，才能被外层的try-catch捕获到
          g.throw(err);
        }
      );
    }
    _next();
  });
}
function* myGenerator() {
  try {
    console.log(yield Promise.resolve(1));
    console.log(yield 2); //2
    console.log(yield Promise.reject("error"));
  } catch (error) {
    console.log(error);
  }
}
const result = run(myGenerator); //result是一个Promise
//输出 1 2 error

// 到这里，一个async/await的实现基本完成了。最后我们可以看一下babel对async/await的转换结果，其实整体的思路是一样的，但是写法稍有不同：
//相当于我们的run()
function _asyncToGenerator(fn) {
  // return一个function，和async保持一致。我们的run直接执行了Generator，其实是不太规范的
  return function() {
    var self = this;
    var args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);

      //相当于我们的_next()
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      //处理异常
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
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

const foo = _asyncToGenerator(function*() {
  try {
    console.log(yield Promise.resolve(1)); //1
    console.log(yield 2); //2
    return "3";
  } catch (error) {
    console.log(error);
  }
});
foo().then((res) => {
  console.log(res); //3
});
```
### Generator 实现
```js
function* foo() {
  yield "result1";
  yield "result2";
  yield "result3";
}
const gen = foo();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 看看ES5环境下是如何实现Generator的：
("use strict");
var _marked =
  /*#__PURE__*/
  regeneratorRuntime.mark(foo);
function foo() {
  return regeneratorRuntime.wrap(function foo$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return "result1";

        case 2:
          _context.next = 4;
          return "result2";

        case 4:
          _context.next = 6;
          return "result3";

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
regeneratorRuntime.mark(foo)这个方法在第一行被调用，我们先看一下 runtime 里 mark()方法的定义
```js
//runtime.js里的定义稍有不同，多了一些判断，以下是编译后的代码
runtime.mark = function(genFun) {
  genFun.__proto__ = GeneratorFunctionPrototype;
  genFun.prototype = Object.create(Gp);
  return genFun;
};
```
这里边 GeneratorFunctionPrototype 和 Gp 我们都不认识，他们被定义在 runtime 里，不过没关系，我们只要知道 mark()方法为生成器函数（foo）绑定了一系列原型就可以了，这里就简单地过了
#### regeneratorRuntime.wrap()
从上面 babel 转化的代码我们能看到，执行 foo()，其实就是执行 wrap()，那么这个方法起到什么作用呢，他想包装一个什么东西呢，我们先来看看 wrap 方法的定义：
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
wrap 方法先是创建了一个 generator，并继承 outerFn.prototype；然后 new 了一个 context 对象；makeInvokeMethod 方法接收 innerFn(对应 foo\$)、context 和 this，并把返回值挂到 generator.\_invoke 上；最后 return 了 generator。其实 wrap()相当于是给 generator 增加了一个\_invoke 方法
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
  },
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
        arg: innerFn.call(self, context), // 执行下一步,并获取状态(其实就是switch里边return的值)
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
          done: context.done,
        };
      }
    }
  };
}
```
为什么 generator.\_invoke 实际上就是 gen.next 呢，因为在 runtime 对于 next()的定义中，next()其实就 return 了\_invoke 方法
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
    switch ((_context.prev = _context.next)) {
      case 0:
        _context.next = 2;
        return "result1";

      case 2:
        _context.next = 4;
        return "result2";

      case 4:
        _context.next = 6;
        return "result3";

      case 6:
      case "end":
        return _context.stop();
    }
  }
}

// 低配版context
var context = {
  next: 0,
  prev: 0,
  done: false,
  stop: function stop() {
    this.done = true;
  },
};

// 低配版invoke
let gen = function() {
  return {
    next: function() {
      value = context.done ? undefined : gen$(context);
      done = context.done;
      return {
        value,
        done,
      };
    },
  };
};

// 测试使用
var g = gen();
g.next(); // {value: "result1", done: false}
g.next(); // {value: "result2", done: false}
g.next(); // {value: "result3", done: false}
g.next(); // {value: undefined, done: true}
```

- 分析一下调用流程：
  - 我们定义的 function\* 生成器函数被转化为以上代码
  - 转化后的代码分为三大块：
    - gen\$(\_context)由 yield 分割生成器函数代码而来
    - context 对象用于储存函数执行上下文
    - invoke()方法定义 next()，用于执行 gen\$(\_context)来跳到下一步
  - 当我们调用 g.next()，就相当于调用 invoke()方法，执行 gen\$(\_context)，进入 switch 语句，switch 根据 context 的标识，执行对应的 case 块，return 对应结果
  - 当生成器函数运行到末尾（没有下一个 yield 或已经 return），switch 匹配不到对应代码块，就会 return 空值，这时 g.next()返回{value: undefined, done: true}

从中我们可以看出，Generator 实现的核心在于上下文的保存，函数并没有真的被挂起，每一次 yield，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个 context 对象储存上下文，使得每次执行生成器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样。
### Proxy
#### Proxy
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。代理提供了一种独特的方法，可以在最底层更改或调整现有对象的行为。Proxy 是对象的包装，将代理上的操作转发到对象，并可以选择捕获其中的一些操作。它可以包装任何类型的对象，包括类和函数。
```js
const p = new Proxy(target, handler);
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
#### Proxy.revocable()
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
#### Object.defineProperty和Proxy的区别
- Object.defineProperty
  - Object.defineProperty 只能代理某个属性。
  - 只能监听对象(Object)，不能监听数组的变化，无法触发 push, pop, shift, unshift,splice, sort, reverse。
  - 必须遍历对象的每个属性
  - 只能劫持当前对象属性，如果想深度劫持，必须深层遍历嵌套的对象
  - 对象上新增属性，Object.defineProperty 监听不到
  - 若对象内部属性要全部递归代理，Object.definePropery 需要一次完成所有递归，性能比 Proxy 差。
  - Proxy 不兼容 IE，Object.defineProperty 不兼容 IE8 及以下
```js
Object.defineProperty(obj, "name", {
  value: "张三",
  writable: false,
  configurable: false,
  enumerable: false,
  get() {
    console.log("get log!");
    return log;
  },
  set(value) {
    log = value;
    archive.push({ val: log });
  },
});
```
- Proxy
  - Proxy 可以直接监听对象而非属性
  - Proxy 直接可以劫持整个对象,并返回一个新对象。
  - Proxy 可以直接监听数组的变化
  - Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的。
  - 对象上新增属性，Proxy 可以监听到
  - 若对象内部属性要全部递归代理，Proxy 可以只在调用的时候递归
  - Proxy 使用上比 Object.defineProperty 方便多。

### Reflect
#### Reflect 对象简介
Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handlers 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。

Reflect 是一个内置对象，可简化的创建 Proxy。以前的内部方法，比如[[Get]]，[[Set]] 等等都只是规范，不能直接调用。Reflect 对象使调用这些内部方法成为可能。它的方法是内部方法的最小包装。

对于每个可被 Proxy 捕获的内部方法，Reflect 都有一个对应的方法 Reflect，其名称和参数与 Proxy 钩子相同。我们可以用 Reflect 来将操作转发到原始对象。
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
### 尾递归调用及尾调用优化
#### 尾调用
当一个函数执行时的最后一个步骤是返回另一个函数的调用，这就叫做尾调用。
- 优点
  - 由于尾调用是函数的最后一条执行语句，无需再保留外层函数的栈帧来存储它的局部变量以及调用前地址等信息，所以栈从始至终就只保留着一个栈帧。这就是尾调用优化，节省了很大一部分的内存空间。
- 缺点
  - 但上面只是理论上的理想情况，把代码改写成尾调用的形式只是一个前提条件，栈是否真的如我们所愿从始至终只保留着一个栈桢还得取决于语言是否支持。
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
#### 尾调用优化
函数在调用的时候会在调用栈（call stack）中存有记录，每一条记录叫做一个调用帧（call frame），每调用一个函数，就向栈中 push 一条记录，函数执行结束后依次向外弹出，直到清空调用栈，参考下图：
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
在一个函数中调用另一个函数，但是并没有通过 return 来结束当前函数的执行，JS 引擎会认为当前的函数并没有执行完成，会在执行当前函数调用的函数，等他执行完成才会释放当前函数。

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

// one 函数执行时，会把 one 函数添加进调用栈中，one 函数现在为当前帧。
// 在 one 函数中又调用了 two 函数，当时在调用 two 函数添加了 return，调用栈会把one函数弹出，当前调用栈中只有一个two函数。
// 在 two 函数中又调用 three 函数，因为有 return 当前调用栈中只有 three 函数。
// 当 three 函数执行完成后，调用栈弹出 three 函数，此时调用栈当前为空。
```
#### 尾递归
函数尾调用自身，这个形式称为尾递归。
- 优点
  - 递归对于空间消耗很大，容易造成栈溢出。如果我们将其改成尾递归，那么能做到只保存 1 个栈帧，有效避免了栈溢出。
- 缺点
  - 语义不明显，阅读性较差
```js
function foo() {
  return foo();
}
```
```js
"use strict";
function factorial(num, num1 = 0, num2 = 1) {
  if (num === 0) {
    return num1;
  }
  console.trace();
  return factorial(num - 1, num2, num1 + num2);
}
```
### JS执行的时候浏览器开启了哪些线程
5个:主线程，事件处理线程，渲染线程，HTTP线程，事件触发线程
### JS同步代码要 loop 很久，会不会阻塞后面代码的执行
会的
### 线程和进程的区别
进程是资源分配的最小单位，线程是 CPU 调度的最小单位。
- 进程
  - 代表 CPU 所能处理的单个任务。任一时刻，CPU 总是运行一个进程，其他进程处于非运行状态。
  - 进程间通信
    - 管道（Pipe）及有名管道（named pipe）：管道可用于具有亲缘关系进程间的通信，有名管道克服了管道没有名字的限制，因此，除具有管道所具有的功能外，它还允许无亲缘关系进程间的通信；
    - 信号（Signal）：信号是比较复杂的通信方式，用于通知接受进程有某种事件发生，除了用于进程间通信外，进程还可以发送信号给进程本身；linux 除了支持 Unix 早期信号语义函数 sigal 外，还支持语义符合 Posix.1 标准的信号函数 sigaction（实际上，该函数是基于 BSD 的，BSD 为了实现可靠信号机制，又能够统一对外接口，用 sigaction 函数重新实现了 signal 函数）；
    - 消息队列（Message）：消息队列是消息的链接表，包括 Posix 消息队列 system V 消息队列。有足够权限的进程可以向队列中添加消息，被赋予读权限的进程则可以读走队列中的消息。消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。
    - 共享内存：使得多个进程可以访问同一块内存空间，是最快的可用 IPC 形式。是针对其他通信机制运行效率较低而设计的。往往与其它通信机制，如信号量结合使用，来达到进程间的同步及互斥。
    - 信号量（semaphore）：主要作为进程间以及同一进程不同线程之间的同步手段。
    - 套接口（Socket）：更为一般的进程间通信机制，可用于不同机器之间的进程间通信。起初是由 Unix 系统的 BSD 分支开发出来的，但现在一般可以移植到其它类 Unix 系统上：Linux 和 System V 的变种都支持套接字。
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
### JS 是单线程
- js 是单线程
  - js 是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作 dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。
  - 利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。
  - JS 引擎线程
  - 事件触发线程
  - 定时触发器线程
### 阻塞了JS中的主线程会发生什么情况？
JS 如果执行时间过长就会阻塞页面。

假设 JS 引擎正在进行巨量的计算，此时就算 GUI 有更新，也会被保存到队列中，等待 JS 引擎空闲后执行。然后，由于巨量计算，所以 JS 引擎很可能很久很久后才能空闲，自然会感觉到巨卡无比。

所以，要尽量避免 JS 执行时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。
### JS解决异步
- js 解决异步
  - JS 实现异步时通过 **事件循环（Event Loop）**,是 JS 异步的解决方案。 JS 实现异步的具体解决方案
    - 同步代码，直接执行
    - 异步代码先放在 `异步队列` 中
    - 待同步函数执行完毕，轮询执行异步队列 中的函数
  - JS 解决异步的方案有
    - 回调函数
    - 事件监听
    - 发布-订阅
    - Promise
    - Generator
    - Async/Await
### EventLoop即事件循环
Event Loop 即事件循环，是指浏览器或 Node 的一种解决 javaScript 单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210926210917.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211022171914.png)

**Event Loop 是 javascript 的执行机制：**
- 最简单的 JS 运行机制：
    - 执行一个宏任务（栈中没有就从事件队列中获取）
    - 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
    - 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
    - 当前宏任务执行完毕，开始检查渲染，然后 GUI 线程接管渲染
    - 渲染完毕后，JS 线程继续接管，开始下一个宏任务（从事件队列中获取）

**执行同步任务** -> **执行异步任务** -> **先执行微任务** -> **后执行宏任务**:事件循环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。

**同步任务和异步任务（异步任务分为：宏任务和微任务）**:
- 同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。
- 异步任务：不进入主线程，而进入**任务队列（task queue）** 只有**任务队列**通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

**宏任务和微任务**:
**主线程任务——>微任务——>宏任务**（如果宏任务里还有微任就继续执行宏任务里的微任务，如果宏任务中的微任务中还有宏任务就在依次进行）
**主线程任务——>微任务——>宏任务——>宏任务里的微任务——>宏任务里的微任务中的宏任务——>直到任务全部完成**

- macrotask（又称之为宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行） - 每一个 task 会从头到尾将这个任务执行完毕，不会执行其它 - 浏览器为了能够使得 JS 内部 task 与 DOM 任务能够有序的执行，会在一个 task 执行结束后，在下一个 task 执行开始前，对页面进行重新渲染
- microtask（又称为微任务），可以理解是在当前 task 执行结束后立即执行的任务 - 也就是说，在当前 task 任务后，下一个 task 之前，在渲染之前 - 所以它的响应速度相比 setTimeout（setTimeout 是 task）会更快，因为无需等渲染 - 微任务会全部执行，而宏任务会一个一个来执行 - 也就是说，在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕（在渲染前）
- 浏览器中的任务源(task):
  - 宏任务(macrotask)：
    - 宿主环境提供的，比如浏览器
    - ajax
    - setTimeout
    - setInterval
    - setTmmediate(只兼容 ie)
    - script
    - requestAnimationFrame
    - messageChannel
    - UI 渲染
    - 一些浏览器 api
    - 事件绑定
    - 回调函数
    - Node 中 fs 可以进行异步 I/O 操作
  - 微任务(microtask)：
    - Promise（async/await
    - queueMicrotask
    - mutationObserver(浏览器提供)
    - process.nexTick（Node 独有的）
      process.nextTick1 这个地方有点出入，我一般认为`process.nextTick()`推入主线程执行栈栈底，作为执行栈最后一个任务执行)
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
执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行 macrotask（宏任务），否则就一次性执行完所有微任务。

每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为 null，然后再执行宏任务，如此循环。
### DOM 渲染的时机
- JS 是单线程的，而且和 DOM 渲染共用一个线程
- JS 执行的时候，得留一-些时机供 DOM 渲染
- 每次 Call Stack（执行栈）清空(即每次轮询结束)， 即同步任务执行完
- 都是 DOM 重新渲染的机会，DOM 结构如有改变则重新渲染
- 然后再去触发下一次 Event Loop（事件循环）
### JS实现异步的5种方式
- 回调函数（Callback）
- 发布订阅
- Promise 对象
- 生成器 Generators/ yield
- async/await
#### 回调函数（Callback）
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
    });
  });
});
```
#### 发布订阅
- 发布订阅
  - 存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者式"（observer pattern）。
  - 有家外卖，你可以点外卖，这就是订阅，当你的外卖做好了，就会有人给你打电话叫你去取外卖，这就是发布。
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
#### Promise 对象
- Promise 对象
  - Promise 对象是异步编程的一种解决方案，比传统的回调函数和事件更合理更强大。
  - Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件的结果，相比回调函数，Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
  - Promise 对象有三种状态:pending(进行中)，fulfilled(已成功)，rejected(已失败)
  - 一旦状态改变，就不再变化，任何时候都可以得到这个结果。
```js
let p = new Promise((resolve, reject) => {
  reject("reject");
  resolve("success"); //无效代码不会执行
});
p.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason); //reject
  }
);
```
- promise 的链式调用
  - 每次调用返回的都是一个新的 Promise 实例(这就是 then 可用链式调用的原因)
  - 如果 then 中返回的是一个结果的话会把这个结果传递下一次 then 中的成功回调
  - 如果 then 中出现异常,会走下一个 then 的失败回调
  - 在 then 中使用了 return，那么 return 的值会被 Promise.resolve() 包装(见例 1，2)
  - then 中可以不传递参数，如果不传递会透到下一个 then 中(见例 3)
  - catch 会捕获到没有捕获的异常
```js
// 例1
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2; //包装成 Promise.resolve(2)
  })
  .catch((err) => 3)
  .then((res) => console.log(res));
```
#### 生成器 Generators/ yield
- 生成器 Generators/ yield
  - Generator 函数是 ES6 提供的一种异步编程解决方案
  - Generator 函数是一个状态机，封装了多个内部状态。
  - Generator 函数除了状态机，还是一个遍历器对象生成函数。
  - 可暂停函数, yield 可暂停，next 方法可启动，每次返回的是 yield 后的表达式结果。
  - yield 表达式本身没有返回值，或者说总是返回 undefined。next 方法可以带一个参数，该参数就会被当作上一个 yield 表达式的返回值。
```js
function* main() {
  try {
    const user = yield ajax("/api/1");
    console.log(users);
    const posts = yield ajax("/api/2");
    console.log(posts);
    const urls = yield ajax("/api/3");
    console.log(urls);
  } catch (e) {
    console.log(e);
  }
}

const g = main();

function handleResults(results) {
  if (results.done) return;
  results.value.then(
    (data) => {
      handleResults(g.next(data));
    },
    (error) => {
      g.throw(error);
    }
  );
}

handleResults(g.next());
```
#### async/await
- async/await
  - async/await 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。
  - async/await 是基于 Promise 实现的，它不能用于普通的回调函数。
  - async/await 与 Promise 一样，是非阻塞的。
  - async/await 使得异步代码看起来像同步代码，这正是它的魔力所在。
  - 一个函数如果加上 async ，那么该函数就会返回一个 Promise
  - Async/Await 并发请求 如果请求两个文件，毫无关系，可以通过并发请求
  - 如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低，代码没有依赖性的话，完全可以使用 Promise.all 的方式。
```js
let fs = require("fs");
function read(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, "utf8", function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}
function readAll() {
  read1();
  read2(); //这个函数同步执行
}
async function read1() {
  let r = await read("1.txt", "utf8");
  console.log(r);
}
async function read2() {
  let r = await read("2.txt", "utf8");
  console.log(r);
}
readAll(); // 2.txt 3.txt
```

### setTimeout、Promise、Async/Await 的区别
- setTimeout
  - settimeout 的回调函数放到宏任务队列里，等到执行栈清空以后执行。
- Promise
  - Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject 的时候, 此时是异步操作， 会先执行 then/catch 等，当主栈完成后，才会去调用 resolve/reject 中存放的方法执行。
- async/await
  - async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
  - Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个 promise 对象.
```js
console.log("script start");
let promise1 = new Promise(function(resolve) {
  console.log("promise1");
  resolve();
  console.log("promise1 end");
}).then(function() {
  console.log("promise2");
});
setTimeout(function() {
  console.log("settimeout");
});
console.log("script end");
// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
```
```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}

console.log("script start");
async1();
console.log("script end");

// 输出顺序：script start->async1 start->async2->script end->async1 end
```
