# JavaScrip知识点日常总结
## javascript基础
### javascript中call()、apply()、bind()
例子
```javascript
var name = '小王',
    age = 12
var obj = {
    name: '小张',
    objAge: this,
    myFun: function () {
        console.log(this.name + 'myFun' + this.age); //这个时候this指向obj
    }
}
var name = '小王'
function getName() {
    console.log(this.name); //此时的this指向  window
}
```
这两者`this` 的差别，第一个打印里面的`this` 指向`obj`，第二个全局声明的`getName()`函数 `this` 是`window` ；
#### `call()`、`apply()`、`bind()` 都是用来重定义 `this` 这个对象的
```javascript
var name = '小王',
    age = 12
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function () {
        console.log(this.name + '年龄' + this.age);
    }
}
var db = {
    name: '小张',
    age: 13
}
//都是重新改变this指向的 
obj.myFun.call(db); //小张年龄99     从原来obj->db
obj.myFun.apply(db); //小张年龄99    从原来obj->db
obj.myFun.bind(db)(); //小张年龄99   从原来obj->db
```
::: tip 提示
`bind` 方法后面多了个`()`外 ，结果返回都一致！`bind` 返回的是一个新的函数，你必须调用它才会被执行。其他的都是自动执行的。
:::
```javascript
var name = '小王',
    age = 12
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function (from, to) {
        console.log(this.name + '年龄' + this.age + '来自' + from + '去往' + to);
    }
}
var db = {
    name: '小张',
    age: 13
}
obj.myFun.call(db, '成都', '上海'); //小张 年龄 99  来自 成都去往上海
obj.myFun.apply(db, ['成都', '上海']); //小张 年龄 99  来自 成都去往上海  
obj.myFun.bind(db, '成都', '上海')(); //小张 年龄 99  来自 成都去往上海
obj.myFun.bind(db, ['成都', '上海'])(); //小张 年龄 99  来自 成都,上海去往undefined
```
::: tip 提示
1.  `call 、bind 、 apply `这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
2.  `call`的参数是直接放进去的，第二第三第n个参数`全都用逗号分隔`，直接放到后面 `obj.myFun.call(db,'成都', ... ,'string' )`；
3.  `apply`的所有参数都必须`放在一个数组里`面传进去 `obj.myFun.apply(db,['成都', ..., 'string' ])`;
4.  `bind`除了返回是函数以外，它的参数和`call`一样。
5.  `bind`方法在这里再多说一下，bind的时候传的参数会预先传给返回的方法，调用方法时就不用再传参数了。
6.  如果`call()`和`apply()`的`第一个参数是null或者undefined，那么this的指向就是全局变量，在浏览器里就是window对象`。
:::
### JavaScript构造函数、原型、原型链
典型的OOP的语言中(如Java)，都存在类的概念，类就是对象的模板，对象就是类的实例，但在ES6之前，JS并没有类的概念。

1. 对象字面量
```javascript
let obj = {}
```
2. new Object()
```javascript
let obj = new Object()
```
3. 自定义构造函数
```javascript
function Person (name, age) {
    this.name = name
    this.age = age
    this.sayName = function () {
        console.log(this.name)
    }
}
let p1 = new person('Jerry', 18)
```
:::tip 提示
构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。
使用构造函数时注意：
1.  构造函数用于创建某一类对象，其首字母大写
2.  构造函数要和new一起使用
:::

构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的this上添加，通过两种方式添加的成员，就分别成为静态成员和实例成员。
- 静态成员：在构造函数本身上添加的成员，只能由构造函数本身来访问
- 实例成员：在构造函数内部创建的对象成员，只能由实例化的对象来访问
```javascript
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}
// 实例成员就是构造函数内部通过this添加的成员：name、age、sayName就是实例成员，实例成员只能通过实例化的对象来访问
let p1 = new Person('Jerry', 18)
Person.gender = 'male' // 静态成员，在否早函数本身上添加的成员gender就是静态成员
console.log(Person.gender)  //male => 静态成员只能通过构造函数来访问率
console.log(p1.gender)  // undefined => 不能通过对象来访问
```
构造函数方法很好用，但是存在浪费内存的问题
```javascript
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}
let p1 = new Person('Jerry', 18)
let p2 = new Person('Jack', 19)
console.log(p1.sayName === p2.sayName) // false
```
4. 构造函数原型prototype

**构造函数通过原型分配的函数是所有对象共享的js规定，每一个构造函数都有一个prototype属性，指向另一个对象。prototype就是一个对象，这个对象的所有属性和方法都会被构造函数所拥有。**
```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.sayName = function () {
  console.log(this.name)
}
let p1 = new Person('Jerry', 18)
let p2 = new Person('Jack', 19)
console.log(p1.sayName()) // Jerry
console.log(p2.sayName()) // Jack
console.log(p1.sayName === p2.sayName)  // true
p1.__proto__ === Person.prototype // true
```
::: tip 提示
一般情况下，公共的属性定义到构造函数里，公共的方法放在原型对象身上。
1. 原型是什么：一个对象，我们也成为prototype为原型对象
2. 原型的作用是什么：共享方法
:::

5. 对象原型__proto__
   
::: tip 提示
对象都会有一个属性__proto__指向构造函数的prototype原型对象，对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有__proto__原型的存在
- __proto__对象原型和原型对象prototype是等价的
- __proto__对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是他是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象prototype
:::

6. 对象原型__proto__

**对象原型(proto)和构造函数(prototype)原型对象里面都有一个属性constructor属性，constructor我们成为构造函数，因为它指构造函数本身 contructor主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。**
![](../img/proto.png)

7. constructor构造函数

**对象原型(proto)和构造函数(prototype)原型对象里面都有一个属性constructor属性，constructor我们成为构造函数，因为它指构造函数本身 contructor主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数**
   
```javascript
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype = {
// 如果修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动利用constructor指回原来的构造函数
    constructor: Person,
    sayName: function () {
    }
}
let p1 = new Person('Jerry', 18)
let p2 = new Person('Jack', 20)
console.log(Person.prototype.constructor)
console.log(p1.__proto__.constructor)
```
:::danger
一般情况下，对象的方法都在构造函数的原型对象中设置，如果多个对象的方法，我们可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象constructor就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个constructor指向原来的构造函数。
:::

8. 构造函数、实例、原型对象三者之间的关系
   ![](../img/constructor_instance_prototype_object.png)
   
9. 原型链
   ![](../img/prototype_chain.png)
::: tip 提示 
   1. 只要是对象就有__proto__原型，指向原型对象。
   2. Person原型对象里面的__proto__原型指向的是Object.prototype。
   3. Object.prototype原型里的__proto__原型指向为null, 只要是对象，它里面都有一个原型__proto__，它指向的是原型对象prototype,原型对象里也有一个__proto__，它指向的是Object原型对象prototype， Object原型对象里也有一个__proto__,它指向的是null。
    
   简单来说就是，每个对象都有一个原型， 每一个原型又是一个对象，所以原型又有自己的原型，这样一环扣一环形成一条链，就叫原型链。
:::

10. JS的成员查找机制（规则）
    1. 当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性
    2. 如果没有就查找它的原型(也就是__proto__指向的prototype原型对象)
    3. 如果还没有就查找原型对象的原型(Object的原型对象)
    4. 依次类推一直找到Object为止(null)
    6. __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线

11. 原型对象this指向
    
   调用方式|this指向
   :----:|:----:
   普通函数调用|window
   构造函数调用|实例对象，原型对象里的方法也指向实例对象
   对象方法调用|该方法所属对象
   事件绑定对象|绑定事件对象
   定时器函数|window
   立即执行函数|window

改变函数内部this主席昂，常用的方法：`bind()、call()、apply()`
call()方法：调用一个对象，即调用函数的方式，改变函数的this指向。主要作用实现继承。
```javascript
foo.call(thisArg, arg1,arg2,...)
```
apply()方法：调用一个函数，`即调用函数的方式`，改变函数的this指向。
```javascript
foo.apply(thisArg, [argArray])

// thisArg：在foo函数运行时指定的this值
// argArray: 传递的值，必须包含在数组里
// 返回值就是函数的返回值，因为他就是调用函数
```
```javascript
// 利用apply借助于数学内置对象求最大最小值
var arr = [1,20,30,60]
var max = Math.max.apply(Math, arr)
max //  60
```
bind()方法不会调用函数，但是能改变函数内部this指向。
```javascript
foo.bind(thisArg, arg1, arg2,...)

// thisArg: 在foo函数运行时指定的this值
// arg1, arg2：传递的其他参数
// 返回由指定的this值和初始化参数改造的原函数拷贝，即原函数改变this之后产生的新函数
```
```javascript
var btn = document.querySelector('button');
btn.onclick = function() {
   this.diabled = true; //这个 this 指向 btn 按钮
   // var that = this;
   setTimeout(function() { //定时器里面的 this 指向的是 window
      // that.disabled = false;
      this.disabled = false;
   }.bind(this), 3000); //这个 this 指向 btn 这个对象
}
```
::: tip 提示
- `call()`经常做继承。
- `apply()`经常跟数组有关系。
- `bind()`不立即调用函数，如果有的函数我们不需要立即调用，但是又想改变这个函数内部`this`指向，此时用`bind()`。
:::

12. 内置函数 
    
可以通过原型对象，对原来的内置对象进行扩展自定义的方法，比如给数组增加自定义求偶数和的功能
```javascript
Array.prototype.sum = function () {
  let sum = 0
  for (let i = 0; i < this.length; i++) {
    sum += this[i]
  }
  return sum
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.sum())
console.log(Array.prototype)
```
### javascript `this`重点

#### 普通函数和箭头函数对 this 的处理方式
#### javaScript的this指向问题

### 深浅拷贝
### 手写数组相关函数
#### 手写map函数
```javascript
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
```

#### 手写reduce函数
```javascript
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

#### 手写拉平数组
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

#### 手写节流&防抖
针对高频的触发的函数，我们一般都会思考通过节流或者防抖去实现性能上的优化。
节流实现原理是通过定时器以和时间差做判断。定时器有延迟的能力，事件一开始不会立即执行，事件结束后还会再执行一次；而时间差事件一开始就立即执行，时间结束之后也会立即停止。
结合两者的特性封装节流函数：
```javascript
const throttle = (fn,waiting=1000,option)=>{
    let preTime = new Date(0).getTime(),
        options = option || {
            firstTime:true,
            endTime:false
        },
        timer;
    let _throttle = (...args) => {
        let newTime = new Date().getTime();
        if (!options.firstTime){
            if (timer) return
            timer = setTimeout(() => {
                fn.apply(fn,args);
                timer = null
            },waiting)
        }else if (newTime - preTime > waiting){
            fn.apply(fn,args);
            preTime = newTime
        }else if (options.endTime) {
            timer = setTimeout(() => {
                fn.apply(fn,args);
                timer = null
            },waiting)
        }
    }
    _throttle.cancel = () => {
        preTime = 0
        clearTimeout(timer);
        time = null
    }
    return _throttle
}
```
## javascript语法简明手册
### Chrome控制台
1. copy()函数
    + 将已有对象的JSON表达式复制到缓冲区
2. console.dir() 
    + 查看所有对象的属性和方法
3.  console.error()
    + 提供栈追踪
4. console.time()和console.timeEnd()
    + 可以跟踪函数所消耗的时间，对代码优化很有帮助
```js
console.time()
let arr = new Array(10000)
for (let i = 0; i<arr.length; i++) {
    arr[i] = new Object()
}
console.timeEnd()
```
5. console.clear()

### javascript基础
#### DOMContentLoaded
为了等待DOM事件，添加事件监听器。该事件监听器。DOMContentLoaded。
```html
<html>
    <head>
        <title>DOM Loaded.</title>
        <script type="text/javascript">
            function load(){
                console.log('DOM Loaded.')
            }
            document.addEventListener("DOMContentLoaded",load)
        </script>
    </head>
</html>
```
该入口点需要保证所有DOM元素都已经加载到内存中，而且在使用javascript来访问他们时不会发生错误。
请根据是仅需要等待DOM还是需要等待其他媒介，来决定程序入口是DOMContentLoaded、readyState还是本地的window.onload方法。
1. readyState
在绑定DOMContentLoaded事件之前，需要检查readyState
```js
<html>
    <head>
        <title>DOM Loaded.</title>
        <script type="text/javascript">
            function load(){
                console.log('DOM Loaded.')
            }
            if(document.readyState == 'loading') {
                document.addEventListener("DOMContentLoaded",load)
            }else {
            load()
        }
        </script>
    </head>
</html>
```
2. window.onload
使用window。onload方法，一直等到所有图像和相关媒介都下载完成。
   
```js
<html>
    <head>
        <title>DOM Loaded.</title>
        <script type="text/javascript">
            window.onload = function() {
            // 等待各种东西加载完毕
        }
        </script>
    </head>
</html> 
```
#### export、export default和module.exports的用法及区别
##### Node应用由模块组成，采用CommonJS模块规范。module.exports。
CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
```js
// 导出
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;


// 导入
// require方法用于加载模块。
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6
```
##### ES6使用export和import来导出、导入模块
在一个文件或模块中，export、import可以有多个，export default仅有一个。通过export方式导出，在导入时要加{ }，export default则不需要。
export命令规定是对外的接口，必须与模块内部的变量建立一一对应关系.
```js
// test-es6.js
const name = 'linda'
const age = 20
function add(x,y) {
    return x+y
}
export {name,age,add}


import {name,age,add} from "./test-es6.js"
```
```js
//a.js
export const str = "blablabla~";
export function log(sth) { 
  return sth;
}

//b.js
import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号
```

export default 命令，为模块指定默认输出，import时可以自己起名字。使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。
```js
//a.js
const str = "blablabla~";
export default str;

//b.js
import str from 'a'; //导入的时候没有花括号
```
##### ES10动态导入
ES10 可以将导入赋值给一个变量。
```js
element.addEventListener('click',async() => {
    const module = await import('./api/click.js')
    module.clickEvent()
})
```

#### 字面量与构造函数
值|类型(typeof x)|构造函数
:---:|:---:|:---:
1|"number"|Number()
3.14|"number"|Number()
some text .|"string"|String()
[]|"object"|Array()
{}|"object"|Object()
true|"boolean"|Boolean()
f f(){}|"function"|Function()

#### 引用传递
:::tip 提示
常将数据从一处复制到另一处。人们很自然地会想到将当前值从一个变量赋给另一个变量时，会生成一个副本。javascript是通过引用进行赋值，实际上并不会生成原始变量的副本。
:::

```js
let x = { p:1 }  // 创建新变量x
let y = x // y是x的引用
x.p = 2 // 修改x的原始值
console.log(y.p) // 2
```
引用链
```js
let a = { p:1 }
let b = a
let c = b
let d = c
let e = d
let f = e
let g = f

a.p = 5
console.log(g.p)
```

#### 作用域的怪癖
##### 怪癖1：函数内的let和const与全局变量
```js
let a = "global a"
let b = "global b"

function x(){
    console.log("x(): global b = " + b)  //"global b"
    console.log("x(): global a = " + a)  // ReferenceError
    let a = 1 // 不提升
}

x()
```
::: danger 重点
如果函数内部已经存在变量a（并且是使用let或const定义的），那么在函数内部的变量a的定义之前使用a，就会发生ReferenceError错误，即使存在全局变量a，也是如此！
这在语法上称为“暂时性死区”（英temporal dead zone，简 TDZ），即代码块开始到变量声明语句完成之间的区域。
:::
##### 怪癖2：var依附于window/this对象，而let和const不会
::: danger 重点
在全局作用域中，this引用指向window对象或全局语境的实例。当使用var关键字定义变量时，这些变量就依附于window对象，而使用let和const定义的变量不会这样。
:::
```js
console.log(this === window) // window

var c = 'c' // 依附于window（全局作用域中的this）
let d = 'd' // 独立于this

console.log(c) // c
console.log(this.c) // c
console.log(window.c) // c 

console.log(d) // d
console.log(this.d) // 未定义
console.log(window.d) // 未定义
```
### javascript语句
#### 求值语句
```js
let a = 1       // underfined
a;              // 1
```
一些语句的求值结果是undefined
语句|求值结果
:---:|:---:
;|undefined
1;|1
"text";|"text"
[];|[]
{};|undefined
let a = 1;|undefined
let b = [];|undefined
let c = {};|undefined
let d = new String("text");|undefined
let e = new Number(123);|undefined
new String("text");|"text"
new Number(125);|125
let f = function() {return 1};|undefined
f()|1
let o = (a,b) => a+b;|undefined
o(1,2)|3
function name() {}|undefined
::: tip 重点
尽管一些求值规则容易理解，但是特殊的规则可能需要死记硬背。
:::

### javascript基本类型
#### 基本类型
JavaScript包含7种类型：`boolean`、`null`、`undefined`、`number`、`bigint`、`string`和`symbol`。

类型|值|构造函数|typeof
:---:|:---:|:---:|:---:
null|null|无|"object"
undefined|undefined|无|"object"
number|123 3.14|Number()|"number"
bigint|123n 256n|Bigint()|"bigint"
string|"hello"|String()|"string"
boolean|true false|Boolean()|"boolean"
symbol||无|"symbol"

#### Symbol特别注意
```js
// 不能使用new初始化symbol
let sym = new Symbol('sym'); // TypeError
// 正确创建方式
let sym = Symbol('sym');
// 创建唯一的symbol
Symbol('sym') === Symbol('sym')  // false
// 每当调用Symbol('sym')时，就会创建唯一的symbol。symbol可以用来定义私有对象的属性。
```
利用symbol定义对象属性
```js
let sym = Symbol('unique')
let bol = Symbol('distinct')
let one = Symbol('only-one')
let obj = { property: "regular property",[sym]:1,[bol]:2 }
ogj[one] = 3
```
同时显示私有属性和公开属性
```js
console.log(obj)
/*
{
  property: 'regular property',
  [Symbol(unique)]: 1,
  [Symbol(distinct)]: 2,
  [Symbol(only-one)]: 3
}
 */
```
基于symbol的私有属性对Object.entries、Object.keys、Object.values以及其他迭代器（如for...in...循环）,JSON.stringify是不可见的。
```js
for(let prop in obj) {
    console.log(prop + ": " + obj[prop])
}
console.log(Object.entries(obj))
console.log(JSON.stringify(obj))
/*
property: regular property
[ [ 'property', 'regular property' ] ]
{"property":"regular property"}

 */
```
symbol属性可以通过Object.getOwnPropertySymbols方法公开symbol属性。
```js
console.log(Object.getOwnPropertySymbols(obj))
[ Symbol(unique), Symbol(distinct), Symbol(only-one) ]
```
全局symbol注册表
有一种创建字符串键的方法可以覆盖使用相同的名字创建的symbol,这就是symbol的全局注册表。可以使用Symbol.for和Symbol.keyFor进行访问。
```js
let sym = Symbol.from('age')
let bol = Symbol.from('age')
obj[sym] = 20
obj[bol] = 25

console.log(obj[sym])  // 25
```
### 强制类型转换
```js
// 数值与字符串相加时候，数值总会先执行加法。
1 + 1 + 1 + 2 + "" => "5"
```

```js
// 数值与其他类型比较，都会讲其他类型转化为数值。
```
### 作用域
作用域包含3中类型：全局作用域、块级作用域和函数作用域。
#### 变量定义
1. 区分大小写
2. 定义变量（var,let,const）
#### 变量提升
全局作用域中定义的变量基本上可以面向全局语境中定义的全部其他作用域，包括`块级作用域`、`for-loop作用域`、`函数作用域`、`事件回调函数`
```js
console.log(apple) // undefined
{
    var apple = 1
}

var apple
console.log(apple) // undefined
{
    apple = 1
}
```
#### 函数提升
```js
fun()  // Hello from fun() function.
function fun() {
    console.log("Hello from fun() function.")
}

function fun() {
    console.log("Hello from fun() function.")
}
fun()  // Hello from fun() function.
```
#### 在函数作用域中定义变量
在自己的块级作用域找不到var定义时，它就会在父级作用域中查找。如果在自己的块级作用域找到该变量，那么它就会继承变量的值。在函数作用域中定义的变量基本上只接受单向访问。
函数支持闭包模式。在该模式下，它们的变量对全局作用域是不可见的，但是可以被它们内部的其他函数作用域访问。
#### 作用域可见性的区别
全局作用域中
当变量定义在全局作用域中时，var、let和const在作用域可见性方面没有区别。它们对内部的块级作用域、函数作用域和时间回调函数作用域都是有效的。
关键字let和const限制变量，使用变量仅在其定义的作用域内有效。
#### 在函数作用域中
在函数内，包括var在内的所有变量类型都仅适用于其他作用域。无论你使用哪一个关键字，都无法在变量定义的函数作用域外部访问该变量。
#### 闭包
函数闭包就是一个函数位于另一个函数的内部。
```js
var plus = (function() {
    var counter = 0
    return function() {
        counter += 1
        return counter
    }
})()
plus()  // 1
plus()  // 2
plus()  // 3
```
在plus的作用域内，另一个匿名函数被创建，它能使私有变量counter自增1，并将结果的返回值传给全局作用域。在全局作用域不可以直接访问counter变量，也不可以修改该变量。
至于闭包内的代码才允许其内部函数来修改该变量，并保持该变量不被泄露到全局作用域。
#### 在块级作用域中
let和const隐蔽变量的可见性，使其仅对变量定义所在的作用域及其内部作用可见。
在类中
```js
class Cat{
    constructor() {
        let property = 1   // 局部变量
        this.something = 2  // 对象属性
    }
    method() {
        console.log(this.property)  //undefined
        console.log(this.something) //2
    }
    
}
```
const和数组
const数组的值是可以修改的，只是不可以再将新的对象赋给初始变量名。
```js
const A = []
A[0] = 'a'
A = [] // 类型错误，赋值给常量
```
const和对象字面量与数组相似。

### 运算符
### 位运算符
运算符|名称|实例|结果
:----:|:----:|:----:|:----:
&|按位与|a&b|1
`|`|按位或|`a|b`|13
^|按位异或|a^b|12
~|按位非|~a|-6
>>|按位右移|a>>1|2
<<|按位左移|a<<2|10
#### typeof
运算符|结果
:----:|:----:
typeof 125|"number"
typeof 100n|"bigint"
typeof '125'|"string"
typeof NaN|"number"
typeof true|"boolean"
typeof []|"object"
typeof {}|"object"
typeof Object|"object"
typeof new Object()|"object"
typeof null|"object"
#### delete
delete关键字删除对象属性
```js
let bird = {
    name:'raven',
    speed:'30mpg'
}
delete bird.speed
```
#### in
in运算符可以用来检查属性名是否存在于对象中。
```js
"c" in { "a" : 1,"b" : 2,"c" :3}  //true
```
检查是否存在索引值
```js
"c" in ["a","b","c"] //false
0 in ["a","b","c"]  // true
```
检查length属性
```js
"length" in [] //true
```
### ...rest和...spread
#### rest属性
...rest语法可以帮助你从函数的单个参数名中提取多项，并应用它们。单个rest参数包含传递给函数的一个或者多个参数。
```js
// 
let f = (...items) => items.map(item => console.log(item))
let f = (...i) => i.map(v => console.log(v))
f(1,2,3,4,5,6)   -> [1,2,3,4,5,6]
```
#### spread属性
spread和rest相反，它可以帮助你从对象中提取组成部分。
```js
let {鸡腿,空心菜,土豆} = 购物车
```
#### ...rest和...spread
- ...rest:将所有剩余的参数（"其余的参数"）收集到一个数组中。
- ...spread:将迭代器展开为一个或多个参数
#### 语法详解
rest餐宿可以为函数书籍任意数量的参数，并将它们存储到一个数组中。
rest必须是唯一的参数标识或是参数列表中的最后一个。
```js
function sum(...args) {
    console.log(args) // [1,2,3]
}
sum(1,2,3)
function sum(a,...args) {
    console.log(args) // [2,3]
}
sum(1,2,3)
```
...spread和...rest相反,他从一个数组中取出值。
```js
function print(a,...args) {
    console.log(a);
    console.log(args)
}
print(...[1,2,3],4,5) //在这里是...spread   => print(1,2,3,4,5)
// a = 1
// args = [2,3,4,5]
```
#### spread来扁平化数组
```js
let names = ['felix','luna']
const cats = [...names,'daisy']
console.log(cats)  // ['felix','luna','daisy']
```
#### 解构赋值
解构赋值可用于从数组和对象中提取多项，并将它们赋给变量。
解构不是隐式递归的，不会扫描到二级对象。
如果未在对象中找到变量，得到的结果就是undefined
```js
[a,b] = [10,20]
console.log(a,b)

[a,b,...rest] = [30,40,50,60,70]
console.log(a,b) // 30,40
console.log(rest) //[50,60,70]

// 提取匹配名称的对象属性
let { oranges } = { organes:1 }
console.log(organes)  // 1

let fruit_basket = {
    apples : 0,
    grapes : 1,
    mangos : 3
}
let { grapes } = fruit_basket
console.log(grapes)

// 解构与重命名同时进行
let { automobile:car } = { automobile:"Tesla" }
console.log(car)
```
#### 合并对象和数组
```js
let a = { p:1,q:2,m:() => {}}
let b = { r:3,s:4,n:() => {}}
let c  = {...a,...b}


let a = [1,2]
let b = [3,4]
let c = [...a,...b]  //[1,2,3,4]
```
