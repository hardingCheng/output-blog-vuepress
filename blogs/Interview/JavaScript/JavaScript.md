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
### CSS 和 JS 为什么会放在头部或者底部？
- 因为页面在加载时，浏览器会识别该文档 CSS，并行下载，不会停止对当前文档的加载。放在头部可以保证在加载 html 生成 DOM tree 的时候，就可以同时对 DOM tree 进行渲染，可以防止闪跳，白屏或者布局混乱。
- 外部引入 js 文件阻塞其他资源下载，也会阻塞该 js 引入位置以下的页面的内容呈现，而且 js 可能会改变 DOM tree 的结构，需要一个稳定的 DOM tree，所以要放置在页面的最下面。
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
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211106161929.png)### JS 数据类型
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
```### JS 如何实现多线程
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








