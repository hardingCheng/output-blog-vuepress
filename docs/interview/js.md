JavaScript面试

## 基础面试问题
### Var、Let 和 Const 有什么区别
1. Var
在ES5中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量。
注意：顶层对象，在浏览器环境指的是`window`对象，在`Node`指的是`global`对象。
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
### this的五种情况

`this`是在执行的时候确定的。不执行，你就不知道在哪里。

1. 作为普通函数执行时，`this`指向`window`。
2. 当函数作为对象的方法被调用时，`this`就会指向`该对象`。
3. 构造器调用，`this`指向`返回的这个对象`。
4. 箭头函数 箭头函数的`this`绑定看的是`this所在函数定义在哪个对象下`，就绑定哪个对象。如果有嵌套的情况，则this绑定到最近的一层对象上。
5. 基于Function.prototype上的 `apply 、 call 和 bind `调用模式，这三个方法都可以显示的指定调用函数的 this 指向。`apply`接收参数的是数组，`call`接受参数列表，`` bind`方法通过传入一个对象，返回一个` this `绑定了传入对象的新函数。这个函数的 `this`指向除了使用`new `时会被改变，其他情况下都不会改变。若为空默认是指向全局对象window。

### this指向 - 最全系列

函数的`this`在调用时绑定的（`this`是在执行的时候确定的。不执行，你就不知道在哪里。），完全取决于函数的调用位置（也就是函数的调用方法）。为了搞清楚`this`的指向是什么，必须知道相关函数是如何调用的。

JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

1. 作为普通函数执行时，`this`指向`window`。
2. 当函数作为对象的方法被调用时，`this`就会指向`该对象`。
3. 构造器调用，`this`指向`返回的这个对象`。
4. 箭头函数 箭头函数的`this`绑定看的是`this所在函数定义在哪个对象下`，就绑定哪个对象。如果有嵌套的情况，则this绑定到**最近的一层对象上**。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210811195727.png)

5. 基于Function.prototype上的 `apply 、 call 和 bind `调用模式，这三个方法都可以显示的指定调用函数的 this 指向。`apply`接收参数的是数组，`call`接受参数列表，`` bind`方法通过传入一个对象，返回一个` this `绑定了传入对象的新函数。这个函数的 `this`指向除了使用`new `时会被改变，其他情况下都不会改变。若为空默认是指向全局对象window。

----------------------------------------------------------------------------------------------------------------------------------------------------------

- 在对象方法中，this表示该方法所属的对象（this 指向调用它所在方法的对象）

- 如果单独使用this表示全局对象，非严格模式下（node环境下：Global；浏览器下：Window）
- 在函数使用中，this 指向函数的所属者（严格模式下：函数是没有绑定到 this 上，这时候 this 是未定义的undefined）
- 在事件中，this表示接收事件的元素（在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素
- 类似call()和apply()方法可以将this引用到任何对象中（apply 和 call 允许切换函数执行的上下文环境（context），即 this 绑定的对象，可以将 this 引用到任何对象）

**this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的**

**当this碰到return时**。如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。

```js
function fn(){  
    this.user = '阳光明媚';  
    return {};  
}
var a = new fn;  
console.log(a.user); //undefined


function fn(){  
    this.user = '阳光明媚';  
    return function(){};
}
var a = new fn;  
console.log(a.user); //undefined


function fn(){  
    this.user = '阳光明媚';  
    return 15;
}
var a = new fn;  
console.log(a.user); //阳光明媚


function fn(){  
    this.user = '阳光明媚';  
    return undefined;
}
var a = new fn;  
console.log(a.user); //阳光明媚

```

***终极秘籍***：

1. 如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window，这里需要说明的是在js的严格版中this指向的不是window，但是我们这里不探讨严格版的问题，你想了解可以自行上网查找。
2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
3. 如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象

#### 全局上下文

1. 非严格模式和严格模式中this都是指向顶层对象（浏览器中是window）。
```js
this === window// true
'use strict'
this === window;
this.name = '若川';
console.log(this.name); // 若川
```
#### 函数上下文

- 普通函数调用模式
```js
// 非严格模式
var name = 'window';
var doSth = function(){
    console.log(this.name);
}
doSth(); // 'window'
```
你可能会误以为`window.doSth()`是调用的，所以是指向`window`。虽然本例中`window.doSth`确实等于`doSth`。`name`等于`window.name`。上面代码中这是因为在`ES5`中，全局变量是挂载在顶层对象（浏览器是`window`）中。事实上，并不是如此。
```js
// 非严格模式
let name2 = 'window2';
let doSth2 = function(){
    console.log(this === window);
    console.log(this.name2);
}
doSth2() // true, undefined
```
这个例子中`let`没有给顶层对象中（浏览器是`window`）添加属性，`window.name2`和`window.doSth`都是`undefined`。
严格模式中，普通函数中的`this`则表现不同，表现为`undefined`。

严格模式中，普通函数中的`this`则表现不同，表现为`undefined`。

```js
// 严格模式
'use strict'
var name = 'window';
var doSth = function(){
    console.log(typeof this === 'undefined');
    console.log(this.name);
}
doSth(); // true，// 报错，因为this是undefined
```

看过的《你不知道的`JavaScript`》上卷的读者，应该知道书上将这种叫做默认绑定。对`call`，`apply`熟悉的读者会类比为：

```js
doSth.call(undefined);
doSth.apply(undefined);
```

效果是一样的，`call`，`apply`作用之一就是用来修改函数中的`this`指向为第一个参数的。第一个参数是`undefined`或者`null`，非严格模式下，是指向`window`。严格模式下，就是指向第一个参数。

```js
var name = '若川';
setTimeout(function(){
    console.log(this.name);
}, 0);
// 语法
setTimeout(fn | code, 0, arg1, arg2, ...)
// 也可以是一串代码。也可以传递其他函数
// 类比 setTimeout函数内部调用fn或者执行代码`code`。
fn.call(undefined, arg1, arg2, ...);
```

- 对象中的函数（方法）调用模式兑现

```js
var name = 'window';
var doSth = function(){
    console.log(this.name);
}
var student = {
    name: '若川',
    doSth: doSth,
    other: {
        name: 'other',
        doSth: doSth,
    }
}
student.doSth(); // '若川'
student.other.doSth(); // 'other'
// 用call类比则为：
student.doSth.call(student);
// 用call类比则为：
student.other.doSth.call(other);
```

但往往会有以下场景，把对象中的函数赋值成一个变量了。这样其实又变成普通函数了，所以使用普通函数的规则（默认绑定）。

```js
var studentDoSth = student.doSth;
studentDoSth(); // 'window'
// 用call类比则为：
studentDoSth.call(undefined);
```

- ### `call、apply、bind` 调用模式

```js
fun.call(thisArg, arg1, arg2, ...)
```

**thisArg**
在`fun`函数运行时指定的`this`值。需要注意的是，指定的`this`值并不一定是该函数执行时真正的`this`值，如果这个函数处于**非严格模式**下，则指定为`null`和`undefined`的`this`值会自动指向全局对象(浏览器中就是`window`对象)，同时值为原始值(数字，字符串，布尔值)的`this`会指向该原始值的自动包装对象。
**arg1, arg2, ...**
指定的参数列表
**返回值**
返回值是你调用的方法的返回值，若该方法没有返回值，则返回`undefined`。
`apply`和`call`类似。只是参数不一样。它的参数是数组（或者类数组）。

根据参数`thisArg`的描述，可以知道，`call`就是改变函数中的`this`指向为`thisArg`，并且执行这个函数，这也就使`JS`灵活很多。严格模式下，`thisArg`是原始值是值类型，也就是原始值。不会被包装成对象。

```js
var doSth = function(name){
    console.log(this);
    console.log(name);
}
doSth.call(2, '若川'); // Number{2}, '若川'
var doSth2 = function(name){
    'use strict';
    console.log(this);
    console.log(name);
}
doSth2.call(2, '若川'); // 2, '若川'
```

`bind`和`call`和`apply`类似，第一个参数也是修改`this`指向，只不过返回值是新函数，新函数也能当做构造函数（`new`）调用。

`bind()`方法创建一个新的函数， 当这个新函数被调用时`this`键值为其提供的值，其参数列表前几项值为创建时指定的参数序列。
**语法：**fun.bind(thisArg[, arg1[, arg2[, ...]]])
**参数：****thisArg**调用绑定函数时作为this参数传递给目标函数的值。如果使用`new`运算符构造绑定函数，则忽略该值。当使用`bind`在`setTimeout`中创建一个函数（作为回调提供）时，作为`thisArg`传递的任何原始值都将转换为`object`。如果没有提供绑定的参数，则执行作用域的`this`被视为新函数的`thisArg`。**arg1, arg2, ...**当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。**返回值**返回由指定的`this`值和初始化参数改造的原函数拷贝。

- 构造函数调用模式

```js
function Student(name){
    this.name = name;
    console.log(this); // {name: '若川'}
    // 相当于返回了
    // return this;
}
var result = new Student('若川');
```

使用`new`操作符调用函数，会自动执行以下步骤。

```markdown

1. 创建了一个全新的对象。
2. 这个对象会被执行`[[Prototype]]`（也就是`__proto__`）链接。
3. 生成的新对象会绑定到函数调用的`this`。
4. 通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
5. 如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
```



由此可以知道：`new`操作符调用时，`this`指向生成的新对象。**特别提醒一下，`new`调用时的返回值，如果没有显式返回对象或者函数，才是返回生成的新对象**。

```js
function Student(name){
    this.name = name;
    // return function f(){};
    // return {};
}
var result = new Student('若川');
console.log(result); {name: '若川'}
// 如果返回函数f，则result是函数f，如果是对象{}，则result是对象{}
```

很多人或者文章都忽略了这一点，直接简单用`typeof`判断对象。虽然实际使用时不会显示返回，但面试官会问到。

- 原型链中的调用模式

```js
function Student(name){
    this.name = name;
}
var s1 = new Student('若川');
Student.prototype.doSth = function(){
    console.log(this.name);
}
s1.doSth(); // '若川'
```

会发现这个似曾相识。这就是对象上的方法调用模式。自然是指向生成的新对象。如果该对象继承自其它对象。同样会通过原型链查找。上面代码使用`ES6`中`class`写法则是：

```js
class Student{
    constructor(name){
        this.name = name;
    }
    doSth(){
        console.log(this.name);
    }
}
let s1 = new Student('若川');
s1.doSth();
```

`babel` `es6`转换成`es5`的结果，可以去`babeljs网站转换测试`自行试试。

```js
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value"in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } returnfunction (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { thrownewTypeError("Cannot call a class as a function"); } }

var Student = function () {
    function Student(name) {
        _classCallCheck(this, Student);

        this.name = name;
    }

    _createClass(Student, [{
        key: 'doSth',
        value: function doSth() {
            console.log(this.name);
        }
    }]);

    return Student;
}();

var s1 = new Student('若川');
s1.doSth();
```

由此看出，`ES6`的`class`也是通过构造函数模拟实现的，是一种语法糖。

- 箭头函数调用模式

先看箭头函数和普通函数的重要区别：

```
1、没有自己的this、super、arguments和new.target绑定。2、不能使用new来调用。3、没有原型对象。4、不可以改变this的绑定。5、形参名称不能重复。
```

箭头函数中没有`this`绑定，必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，则`this`绑定的是最近一层非箭头函数的`this`，否则`this`的值则被设置为全局对象。

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

其实就是相当于箭头函数外的`this`是缓存的该箭头函数上层的普通函数的`this`。如果没有普通函数，则是全局对象（浏览器中则是`window`）。也就是说无法通过`call`、`apply`、`bind`绑定箭头函数的`this`(它自身没有`this`)。而`call`、`apply`、`bind`可以绑定缓存箭头函数上层的普通函数的`this`。

```js
var student = {
    name: '若川',
    doSth: function(){
        console.log(this.name);
        return() => {
            console.log('arrowFn:', this.name);
        }
    }
}
var person = {
    name: 'person',
}
student.doSth().call(person); // '若川'  'arrowFn:' '若川'
student.doSth.call(person)(); // 'person' 'arrowFn:' 'person'
```

- DOM时间处理函数调用

  #### addEventerListener、attachEvent、onclick

```html
<button class="button">onclick</button>
<ul class="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<script>
    var button = document.querySelector('button');
    button.onclick = function(ev){
        console.log(this);
        console.log(this === ev.currentTarget); // true
    }
    var list = document.querySelector('.list');
    list.addEventListener('click', function(ev){
        console.log(this === list); // true
        console.log(this === ev.currentTarget); // true
        console.log(this);
        console.log(ev.target);
    }, false);
</script>
```

`onclick`和`addEventerListener`是指向绑定事件的元素。一些浏览器，比如`IE6~IE8`下使用`attachEvent`，`this`指向是`window`。顺便提下：面试官也经常考察`ev.currentTarget`和`ev.target`的区别。`ev.currentTarget`是绑定事件的元素，而`ev.target`是当前触发事件的元素。比如这里的分别是`ul`和`li`。但也可能点击的是`ul`，这时`ev.currentTarget`和`ev.target`就相等了。

#### 内联事件处理函数调用

```js
<button class="btn1" onclick="console.log(this === document.querySelector('.btn1'))">点我呀</button>
<button onclick="console.log((function(){return this})());">再点我呀</button>
```

第一个是`button`本身，所以是`true`，第二个是`window`。这里跟严格模式没有关系。当然我们现在不会这样用了，但有时不小心写成了这样，也需要了解。

其实`this`的使用场景还有挺多，比如对象`object`中的`getter`、`setter`的`this`，`new Function()`、`eval`。但掌握以上几种，去分析其他的，就自然迎刃而解了。使用比较多的还是普通函数调用、对象的函数调用、`new`调用、`call、apply、bind`调用、箭头函数调用。

- 优先级

而箭头函数的`this`是上层普通函数的`this`或者是全局对象（浏览器中是`window`），所以排除，不算优先级。

```js
var name = 'window';
var person = {
    name: 'person',
}
var doSth = function(){
    console.log(this.name);
    returnfunction(){
        console.log('return:', this.name);
    }
}
var Student = {
    name: '若川',
    doSth: doSth,
}
// 普通函数调用
doSth(); // window
// 对象上的函数调用
Student.doSth(); // '若川'
// call、apply 调用
Student.doSth.call(person); // 'person'
new Student.doSth.call(person); //Uncaught TypeError: Student.doSth.call is not a constructor
```

试想一下，如果是`Student.doSth.call(person)`先执行的情况下，那`new`执行一个函数。是没有问题的。然而事实上，这代码是报错的。运算符优先级是`new`比点号低，所以是执行`new (Student.doSth.call)(person)`而`Function.prototype.call`，虽然是一个函数（`apply`、`bind`也是函数），跟箭头函数一样，不能用`new`调用。所以报错了。

```js
Uncaught TypeError: Student.doSth.call is not a constructor
```

这是因为函数内部有两个不同的方法：`[[Call]]`和`[[Constructor]]`。当使用普通函数调用时，`[[Call]]`会被执行。当使用构造函数调用时，`[[Constructor]]`会被执行。`call`、`apply`、`bind`和箭头函数内部没有`[[Constructor]]`方法。

从上面的例子可以看出普通函数调用优先级最低，其次是对象上的函数。`call（apply、bind）`调用方式和`new`调用方式的优先级，在《你不知道的JavaScript》是对比`bind`和`new`，引用了`mdn`的`bind`的`ployfill`实现，`new`调用时bind之后的函数，会忽略`bind`绑定的第一个参数，(`mdn`的实现其实还有一些问题，感兴趣的读者，可以看我之前的文章：面试官问：能否模拟实现`JS`的`bind`方法)，说明`new`的调用的优先级最高。所以它们的优先级是`new` 调用 > `call、apply、bind` 调用 > 对象上的函数调用 > 普通函数调用。

4. 总结

如果要判断一个运行中函数的 `this` 绑定， 就需要找到这个函数的直接调用位置。找到之后 就可以顺序应用下面这四条规则来判断 `this` 的绑定对象。

- `new` 调用：绑定到新创建的对象，注意：显示`return`函数或对象，返回值不是新创建的对象，而是显式返回的函数或对象。
- `call` 或者 `apply`（ 或者 `bind`） 调用：严格模式下，绑定到指定的第一个参数。非严格模式下，`null`和`undefined`，指向全局对象（浏览器中是`window`），其余值指向被`new Object()`包装的对象。
- 对象上的函数调用：绑定到那个对象。
- 普通函数调用：在严格模式下绑定到 `undefined`，否则绑定到全局对象。

`ES6` 中的箭头函数：不会使用上文的四条标准的绑定规则， 而是根据当前的词法作用域来决定`this`， 具体来说， 箭头函数会继承外层函数，调用的 this 绑定（ 无论 this 绑定到什么），没有外层函数，则是绑定到全局对象（浏览器中是`window`）。这其实和 `ES6` 之前代码中的 `self = this` 机制一样。

`DOM`事件函数：一般指向绑定事件的`DOM`元素，但有些情况绑定到全局对象（比如`IE6~IE8`的`attachEvent`）。

一定要注意，有些调用可能在无意中使用普通函数绑定规则。如果想“ 更安全” 地忽略 `this` 绑 定， 你可以使用一个对象， 比如`ø = Object.create(null)`， 以保护全局对象。

面试官考察`this`指向就可以考察`new、call、apply、bind`，箭头函数等用法。从而扩展到作用域、闭包、原型链、继承、严格模式等。这就是面试官乐此不疲的原因。

### 有了 promise ，为啥还需要 async await ？

> async/await是一种编写异步代码的新方法。在这之前编写异步代码使用的是回调函数和promise。
> async/await实际是建立在promise之上的。因此你不能把它和回调函数搭配使用。
> async/await可以使异步代码在形式上更接近于同步代码。这就是它最大的价值。

#### 语法

假设有一个getJSON方法，它返回一个promise，该promise会被resolve为一个JSON对象。我们想要调用该方法，输出得到的JSON对象，最后返回"done"。

以下是使用promise的实现方式：

```js
const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })
makeRequest()
```

使用async/await则是这样的：

```js
const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}

makeRequest()
```

使用async/await时有以下几个区别：

在定义函数时我们使用了async关键字。await关键字只能在使用async定义的函数的内部使用。所有async函数都会返回一个promise，该promise最终resolve的值就是你在函数中return的内容。
由于第一点中的原因，你不能在顶级作用域中await一个函数。因为顶级作用域不是一个async方法。

```js
// this will not work in top level
// await makeRequest()
    
// this will work
makeRequest().then((result) => {
  // do something
})
```

await getJSON()意味着直到getJSON()返回的promise在resolve之后，console.log才会执行并输出resolove的值。

#### 为何使用async/await编写出来的代码更好呢？

1. 简洁

看看我们节省了多少代码吧。即使是在这么一个简单的例子中，我们也节省了可观的代码。我们不需要为.then编写一个匿名函数来处理返回结果，也不需要创建一个data变量来保存我们实际用不到的值。我们还避免了代码嵌套。这些小优点会在真实项目中变得更加明显。

2. 错误处理

async/await终于使得用同一种构造(古老而好用的try/catch) 处理同步和异步错误成为可能。在下面这段使用promise的代码中，try/catch不能捕获JSON.parse抛出的异常，因为该操作是在promise中进行的。要处理JSON.parse抛出的异常，你需要在promise上调用.catch并重复一遍异常处理的逻辑。通常在生产环境中异常处理逻辑都远比console.log要复杂，因此这会导致大量的冗余代码。

```js
const makeRequest = () => {
    try {
    getJSON()
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
      })
      // uncomment this block to handle asynchronous errors
      // .catch((err) => {
      //   console.log(err)
      // })
    } catch (err) {
        console.log(err)
    }
}
```

现在看看使用了async/await的情况，catch代码块现在可以捕获JSON.parse抛出的异常了：

```js
const makeRequest = async () => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON())
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
```

3. 条件分支

假设有如下逻辑的代码。请求数据，然后根据返回数据中的某些内容决定是直接返回这些数据还是继续请求更多数据：

```js
const makeRequest = () => {
  return getJSON()
    .then(data => {
      if (data.needsAnotherRequest) {
        return makeAnotherRequest(data)
          .then(moreData => {
            console.log(moreData)
            return moreData
          })
      } else {
        console.log(data)
        return data
      }
    })
}
```

只是阅读这些代码已经够让你头疼的了。一不小心你就会迷失在这些嵌套(6层)，空格，返回语句中。(当然我们一般用请求数据的返回值作为判断条件不会写成这样，也许我这个小白会...) 在使用async/await改写后，这段代码的可读性大大提高了：

```js
const makeRequest = async () => {
  const data = await getJSON()
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData)
    return moreData
  } else {
    console.log(data)
    return data    
  }
}
```

4. 中间值

比如你向一个url1发送请求，拿到返回值1，然后用这个返回值1当作参数去请求url2，拿到返回值2，然后拿返回值1和返回值2作为参数去请求url3，拿到最终的返回结果。
对应的代码看起来是这样的：

```js
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return promise2(value1)
        .then(value2 => {
          // do something          
          return promise3(value1, value2)
        })
    })
}
```

如果promise3没有用到value1，那么我们就可以把这几个promise改成嵌套的模式。如果你不喜欢这种编码方式，你也可以把value1和value2封装在一个Promsie.all调用中以避免深层次的嵌套：

```js
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {
      // do something          
      return promise3(value1, value2)
    })
}
```

这种方式为了保证可读性而牺牲了语义。除了避免嵌套的promise，没有其它理由要把value1和value2放到一个数组里。

同样的逻辑如果换用async/await编写就会非常简单，直观。

```js
const makeRequest = async () => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2)
}
```

5. 异常堆栈

假设有一段串行调用多个promise的代码，在promise串中的某一点抛出了异常：

```js
const makeRequest = () => {
  return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => {
      throw new Error("oops");
    })
}

makeRequest()
  .catch(err => {
    console.log(err);
    // output
    // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
  })
```

从promise串返回的异常堆栈中没有包含关于异常是从哪一个环节抛出的信息。更糟糕的是，它还会误导你，它包含的唯一的函数名是callAPromise，然而该函数与此异常并无关系。（这种情况下文件名和行号还是有参考价值的）。

然而，在使用了async/await的代码中，异常堆栈指向了正确的函数：

```js
const makeRequest = async () => {
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  throw new Error("oops");
}

makeRequest()
  .catch(err => {
    console.log(err);
    // output
    // Error: oops at makeRequest (index.js:7:9)
  })
```

这带来的好处在本地开发环境中可能并不明显，但当你想要在生产环境的服务器上获取有意义的异常信息时，这会非常有用。在这种情况下，知道异常来自makeRequest而不是一连串的then调用会有意义的多。

6. 调试

最后压轴的一点，使用async/await最大的优势在于它很容易被调试。由于以下两个原因，调试promise一直以来都是很痛苦的。

你不能在一个返回表达式的箭头函数中设置断点（因为没有代码块）

如果你在一个.then代码块中使用调试器的步进(step-over)功能，调试器并不会进入后续的.then代码块，因为调试器只能跟踪同步代码的『每一步』。

通过使用async/await，你不必再使用箭头函数。你可以对await语句执行步进操作，就好像他们都是普通的同步调用一样。

结论 async/await是过去几年中JavaScript引入的最具革命性的特性之一。它使你意识到promise在语法上的糟糕之处，并提供了一种简单，直接的替代方案。

#### promise怎么实现链式调用跟返回不同的状态？

实现链式调用：使用`.then()`或者`.catch()`方法之后会返回一个`promise`对象，可以继续用`.then()`方法调用，再次调用所获取的参数是上个`then`方法`return`的内容

1. promise的三种状态是 `fulfilled`(已成功)/`pengding`(进行中)/`rejected`(已拒绝)
2. 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
3. Promise 中使用 `resolve` 和 `reject` 两个函数来更改状态；
4. then 方法内部做的事情就是状态判断:

- 如果状态是成功，调用成功回调函数
- 如果状态是失败，调用失败回调函数

### 前后端接口鉴权全解 Cookie/Session/Token 的区别

#### Cookie

- 其中 `<cookie-name>=<cookie-value>` 这样的 kv 对，内容随你定，另外还有 HttpOnly、SameSite 等配置，一条 `Set-Cookie` 只配置一项 cookie。

- Expires 设置 cookie 的过期时间（时间戳），这个时间是**客户端时间**。
- Max-Age 设置 cookie 的保留时长（秒数），同时存在 Expires 和 Max-Age 的话，Max-Age 优先
- Domain 设置生效的域名，默认就是当前域名，不包含子域名
- Path 设置生效路径，`/` 全匹配
- Secure 设置 cookie 只在 https 下发送，防止**中间人攻击**
- HttpOnly 设置禁止 JavaScript 访问 cookie，防止**XSS**
- SameSite 设置跨域时不携带 cookie，防止**CSRF**

```js
// 发送方式
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1

//在发送 cookie 时，并不会把上面提到的 Expires 等配置传到服务器，因为服务器在设置后就不需要关心这些信息了，只要现代浏览器运作正常，收到的 cookie 就是没问题的。
```

#### Session

从 cookie 说到 session，是因为 session 才是真正的“信息”，如上面提到的，cookie 是容器，里面装着 `PHPSESSID=298zf09hf012fh2;`，这就是一个 session ID。

当初 session 的存在就是要为客户端和服务器连接提供的信息，所以我将 session 理解为信息，而 session id 是获取信息的钥匙，通常是一串唯一的哈希码。

接下来分析两个 node.js express 的中间件，理解两种 session 的实现方式。

session 信息可以储存在客户端，如 cookie-session，也可以储存在服务器，如 express-session。使用 session ID 就是把 session 放在服务器里，用 cookie 里的 id 寻找服务器的信息。

1. 客户端存储

对于 cookie-session 库，比较容易理解，其实就是把所有信息加密后塞到 cookie 里。其中涉及到 cookies 库。在设置 session 时其实就是调用 cookies.set，把信息写到 set-cookie 里，再返回浏览器。**换言之，取值和赋值的本质都是操作 cookie**。

浏览器在接收到 set-cookie 头后，会把信息写到 cookie 里。在下次发送请求时，信息又通过 cookie 原样带回来，所以服务器什么东西都不用存，只负责获取和处理 cookie 里的信息，这种实现方法不需要 session ID。

```js
const express = require('express')
var cookieSession = require('cookie-session')
const app = express()
app.use(
  cookieSession({
    name: 'session',
    keys: [
      /* secret keys */
      'key',
    ],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
)
app.get('/', function(req, res) {
  req.session.test = 'hey'
  res.json({
    wow: 'crazy',
  })
})

app.listen(3001)
```

在通过 `app.use(cookieSession())` 使用中间件之前，请求是不会设置 cookie 的，添加后再访问（并且在设置 req.session 后，若不添加 session 信息就没必要、也没内容写到 cookie 里），就能看到`服务器响应头`部新增了下面两行，分别写入 session 和 session.sig：

```
Set-Cookie: session=eyJ0ZXN0IjoiaGV5In0=; path=/; expires=Tue, 23 Feb 2021 01:07:05 GMT; httponly
Set-Cookie: session.sig=QBoXofGvnXbVoA8dDmfD-GMMM6E; path=/; expires=Tue, 23 Feb 2021 01:07:05 GMT; httponly
```

然后你就能在 DevTools 的 Application 标签看到 cookie 成功写入。session 的值 `eyJ0ZXN0IjoiaGV5In0=` 通过 base64 解码即可得到 `{"test":"hey"}`，这就是所谓的“将 session 信息放到客户端”，因为 base64 编码并不是加密，这就跟明文传输没啥区别，所以**请不要在客户端 session 里放用户密码之类的机密信息**。

说回第二个值 session.sig，它是一个 27 字节的 SHA1 签名，用以**校验 session 是否被篡改**，是 cookie 安全的又一层保障。

2. 服务端存储

既然要储存在服务器，那么 express-session 就需要一个容器 store，它可以是内存、redis、mongoDB 等等等等，内存应该是最快的，但是重启程序就没了，redis 可以作为备选，用数据库存 session 的场景感觉不多。

在监测到客户端送来的 cookie 之后，可以从 cookie 获取 sessionID，再使用 id 在 store 中获取 session 信息，挂到 `req.session` 上，经过这个中间件，你就能顺利地使用 req 中的 session。

在请求没有 session id 的情况下，通过 `store.generate` 创建新的 session，在你写 session 的时候，cookie 可以不改变，只要根据原来的 cookie 访问内存里的 session 信息就可以了。

```js
var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)

app.use(function(req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})

app.get('/foo', function(req, res, next) {
  res.json({
    session: req.session,
  })
})

app.get('/bar', function(req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})

app.listen(3001)
```

3. 两种存储方式对比

储存在客户端的情况，解放了服务器存放 session 的内存，但是每次都带上一堆 base64 处理的 session 信息，如果量大的话传输就会很缓慢。

储存在服务器相反，用服务器的内存拯救了带宽。

另外，在退出登录的实现和结果，也是有区别的。

储存在服务器的情况就很简单，如果 `req.session.isLogin = true` 是登录，那么 `req.session.isLogin = false` 就是退出。

但是状态存放在客户端要做到真正的“即时退出登录”就很困难了。你可以在 session 信息里加上过期日期，也可以直接依靠 cookie 的过期日期，过期之后，就当是退出了。

但是如果你不想等到 session 过期，现在就想退出登录！怎么办？认真想想你会发现，仅仅依靠客户端储存的 session 信息真的没有办法做到。

即使你通过 `req.session = null` 删掉客户端 cookie，那也只是删掉了，但是如果有人曾经把 cookie 复制出来了，那他手上的 cookie 直到 session 信息里的过期时间前，都是有效的。

#### Token

其实本质上 token 的功能就是和 session id 一模一样。你把 session id 说成 session token 也没什么问题。

其中的区别在于，session id **一般**存在 cookie 里，自动带上；token **一般**是要你主动放在请求中，例如设置请求头的 `Authorization` 为 `bearer:<access_token>`。

在 OAuth 系统中也使用了 Access token 这个关键词，写过微信登录的朋友应该都能感受到 token 是个什么啦。

Token 在权限证明上真的很重要，不可泄漏，谁拿到 token，谁就是“主人”。所以要做一个 Token 系统，刷新或删除 Token 是必须要的，这样在尽快弥补 token 泄漏的问题。

- JWT

这样可以用于自家登录，也可以用于第三方登录。单点登录也是 JWT 的常用领域。

JWT 也因为信息储存在客户端造成无法让自己失效的问题，这算是 JWT 的一个缺点。

- HTTP authentication

Basic authentication 大概比较适合 serverless，毕竟他没有运行着的内存，无法记录 session，直接每次都带上验证就完事了。

- OAuth2.0

OAuth 2.0（RFC 6749）也是用 token 授权的一种协议，它的特点是你可以在**有限范围内**使用别家接口，也可以借此使用别家的登录系统登录自家应用，也就是第三方应用登录。

既然是第三方登录，那除了应用本身，必定存在第三方登录服务器。在 OAuth 2.0 中涉及三个角色：用户、应用提供方、登录平台，相互调用关系如下：

```
     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+
```

```
1.准备
一般来说，应用提供方需要先在登录平台申请好 AppID 和 AppSecret。（微信使用这个名称，其他平台也差不多，一个 ID 和一个 Secret）

2.获取Code
什么是授权临时票据（code）？答：第三方通过 code 进行获取 access_token 的时候需要用到，code 的超时时间为 10 分钟，一个 code 只能成功换取一次 access_token 即失效。code 的临时性和一次保障了微信授权登录的安全性。第三方可通过使用 https 和 state 参数，进一步加强自身授权登录的安全性。

3.获取Token

4.使用 token 调用微信接口

```

### 12个  “什么什么”  和  “什么什么”  的不同

1. 箭头函数和普通函数的不同

   a. 箭头函数和普通函数的样式不同，箭头函数语法更加简洁、清晰，箭头函数是`=>`定义函数,普通函数是`function`定义函数。

   b. 箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值，定义的时候就确定并固定了。

   c. 箭头函数不能作为构造函数使用，也不能使用new关键字(`因为箭头函数没有自己的this，它的this其实是继承了外层执行环境中的this，且this指向永远不会改变,作为构造函数其的this要是指向创建的新对象`)。

   d. 箭头函数没有自己的arguments。在箭头函数中访问arguments实际上获得的是外层局部（函数）执行环境中的值。

   e. call、apply、bind 并不会影响其 this 的指向。

   f. 箭头函数没有原型prototype。

   g. 箭头函数不能当作 Generator 函数，不能使用 yield 关键字。

2. var let const 区别

   **变量提升方面**：var声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined。
   let和const不存在变量提升问题(`注意这个‘问题’后缀，其实是有提升的，只不过是let和const具有一个暂时性死区的概念，即没有到其赋值时，之前就不能用`)，即它们所声明的变量一定要在声明后使用，否则报错。

   **块级作用域方面**：var不存在块级作用域,let和const存在块级作用域

   **声明方面**：var允许重复声明变量,let和const在同一作用域不允许重复声明变量。其中const声明一个只读的常量(因为如此，其声明时就一定要赋值，不然报错)。一旦声明，常量的值就不能改变。

3. Bigint和Number区别

   Number类型的数字**有精度限制**，数值的精度只能到 53 个二进制位（相当于 16 个十进制位, `正负9007199254740992`），大于这个范围的整数，就无法精确表示了。

   Bigint**没有位数的限制，任何位数的整数都可以精确表示**。但是其只能用于表示整数，且为了与Number进行区分，BigInt 类型的数据必须添加后缀n。BigInt 可以使用负号（-），但是不能使用正号（+）。

   另外number类型的数字和Bigint类型的数字**不能**混合计算。	

```js
12n+12;//报错
```

4. 基本数据类型和引用数据类型

   **基本数据类型：**
   	a. 基本数据类型的值是不可变的(重新赋值属于改变属性名的指向了，而不是对值进行操作),这里你就可以联想到，`是不是所有关于字符串和数字的方法`都是带有`返回值`的，而不是改变原字符串或数字。

   ​	b. 基本数据类型不可以添加属性和方法，虽然不会报错，但也只是一瞬间转为了相应包装对象，操作完又转化回原基本数据类型，不会保存结果。

   ​	c. 基本数据类型的赋值是简单赋值,基本数据类型的比较是值的比较。

   ​	d. 基本数据类型是存放在栈区的

   **引用数据类型：**
   	a. 引用类型的值是可以改变的,例如对象就可以通过修改对象属性值更改对象。

   ​	b. 引用类型可以添加属性和方法。

   ​	c. 引用类型的赋值是对象引用,即声明的变量标识符，存储的只是对象的指针地址。

   ​	d. 引用类型的比较是引用(`指针地址`)的比较。

   ​	e. 引用类型是同时保存在栈区和堆区中的,栈区保存变量标识符和指向堆内存的地址。

5. async await和promise的区别

   **async/await优点**：
   	a. 它做到了真正的串行的同步写法，代码阅读相对容易

   ​	b. 对于条件语句和其他流程语句比较友好，可以直接写到判断条件里面

```js
function a() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(222)
      }, 2222)
    })
  };
async function f() {
    try {
      if ( await a() === 222) {
        console.log('yes, it is!') // 会打印
      }
    } catch (err) {
      // ...
    }
  }
```

​		c. 处理复杂流程时，在代码清晰度方面有优势

​	**async/await缺点**：

​		a. 无法处理promise返回的reject对象，要借助try...catch...

​		b. 用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。

```js
	*//promise*
	Promise.all([ajax1(), ajax2()])
```

​		c. try...catch...内部的变量无法传递给下一个try...catch...,Promise和then/catch内部定义的变量，能通过then链条的参数传递到下一个then/catch，但是async/await的try内部的变量，如果用let和const定义则无法传递到下一个try...catch...，只能在外层作用域先定义好。

​	**但async/await确确实实是解决了promise一些问题的。更加灵活的处理异步**

​	**promise的一些问题：**
​		a. 一旦执行，无法中途取消，链式调用多个then中间不能随便跳出来

​		b. 错误无法在外部被捕捉到，只能在内部进行预判处理，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部

​		c. Promise内部如何执行，监测起来很难，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

6. get和post的区别

   a. GET 是将参数写在 `URL 中 ?` 的后面，并用 `&` 分隔不同参数；而 POST 是将信息存放在 `Message Body` 中传送，参数‘不会’显示在 URL 中(Restful规范中是这样，但post在有需要时可以把参数放URL里)。GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值。也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。

   b. GET请求提交的数据有长度限制（**HTTP 协议本身没有限制 URL 及正文长度**,对 URL 的限制大多是浏览器和服务器的原因），POST请求没有内容长度限制。

   c. GET请求返回的内容会被浏览器缓存起来。而每次提交POST请求，浏览器不会缓存POST请求返回的内容。

   d. GET对数据进行查询，POST主要对数据进行增删改！简单说，GET是只读，POST是写。

   e. 关于安全性，GET 请求方式从浏览器的 URL 地址就可以看到参数；所以post更安全，其实无论是 GET 还是 POST 其实**都是不安全的**，因为 HTTP 协议是明文传输，只要拦截封包便能轻易获取重要资讯。想要安全传输资料，必须使用 SSL/TLS来加密封包，也就是 HTTPS。

   **那为什么推崇使用post来处理敏感数据呢？**
   因为get的记录会保存在浏览器，上网日志中，而使用Post，因为数据不会记录存储在浏览器的记录和网址访问记录中，这样会有更大的**安全性**。

   f.**一个误区** 说GET产生一个TCP数据包；POST产生两个TCP数据包
   **其说法**：对于GET方式的请求，浏览器会把http header和data一并发送出去，服务端响应200，请求成功。

   对于POST方式的请求，浏览器会先发送http header给服务端，告诉服务端等一下会有数据过来，服务端响应100 continue，告诉浏览器我已经准备接收数据，浏览器再post发送一个data给服务端，服务端响应200，请求成功。

   **为其正名**:上面所说的post会比get多一个tcp包其实不太严谨。多发的那个expect 100 continue header报文，是`由客户端对http的post和get的请求策略决定`的，目的是为了避免浪费资源，如带宽，数据传输消耗的时间等等。所以客户端会在发送header的时候添加expect 100去探探路，如果失败了就不用继续发送data，从而减少了资源的浪费。所以是否再发送一个包取决了客户端的实现策略，和get/post并没什么关系。有的客户端比如fireFox就只发送一个包。

7. cookies和session的区别

   a. `存储位置不同:`cookie的数据信息存放在客户端浏览器上，session的数据信息存放在服务器上。

   b. `存储容量不同:`单个cookie保存的数据<=4KB，一个站点最多保存20个Cookie，而对于session来说并没有上限，但出于对服务器端的性能考虑，session内不要存放过多的东西，并且设置session删除机制。

   c. `存储方式不同:`cookie中只能保管ASCII字符串，并需要通过编码方式存储为Unicode字符或者二进制数据。session中能够存储任何类型的数据，包括且不限于string，integer，list，map等。

   d. `隐私策略不同:`cookie对客户端是可见的，别有用心的人可以分析存放在本地的cookie并进行cookie欺骗，所以它是不安全的，而session存储在服务器上，对客户端是透明的，不存在敏感信息泄漏的风险。

   e. `有效期上不同:`开发可以通过设置cookie的属性，达到使cookie长期有效的效果。session依赖于名为JSESSIONID的cookie，而cookie JSESSIONID的过期时间默认为-1，只需关闭窗口该session就会失效，因而session不能达到长期有效的效果。

   f. `服务器压力不同:`cookie保管在客户端，不占用服务器资源。对于并发用户十分多的网站，cookie是很好的选择。session是保管在服务器端的，每个用户都会产生一个session。假如并发访问的用户十分多，会产生十分多的session，耗费大量的内存。

   g. `跨域支持上不同:`cookie支持跨域名访问(二级域名是可以共享cookie的)。session不支持跨域名访问。

8. fetch和Ajax和axios区别

   Ajax是什么：Ajax是（Asynchronous JavaScript and XML）的缩写。现在，允许浏览器与服务器通信而无须刷新当前页面的技术都被叫做Ajax。核心使用`XMLHttpRequest`对象。

   axios是什么：axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上`也是对原生XHR`的封装，只不过它是Promise的实现版本，符合最新的ES规范。

   fetch是什么：Fetch被称为下一代Ajax技术,采用Promise方式来处理数据。是一种简洁明了的API，比XMLHttpRequest更加简单易用。

   所以其主要区别是 axios、fetch请求后都支持Promise对象API，ajax只能用回调函数。

9. Px,em,rem,vw,vh区别

   px: px就是pixel的缩写，意为像素。px就是一张图片最小的一个点，一张位图就是千千万万的这样的点构成的。

   em: **参考物是父元素**的font-size，具有继承的特点。如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。

   rem: css3新单位，**相对于根元素html**（网页）的font-size，不会像em那样，依赖于父元素的字体大小，而造成混乱。

   vw: css3新单位，viewpoint width的缩写，**视窗宽度**，1vw等于视窗宽度的1%。
   举个例子：浏览器宽度1200px, 1 vw = 1200px/100 = 12 px。

   vh: css3新单位，viewpoint height的缩写，**视窗高度**，1vh等于视窗高度的1%。
   举个例子：浏览器高度900px, 1 vh = 900px/100 = 9 px。

10. webpack中loader和plugin的区别

    **什么是loader?**
    loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中

    **什么是plugin？**
    在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。

    **区别：**

    ​	对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程

    ​	plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务

11. bind call apply区别

    a. 三者都可以改变函数的this对象指向。

    b. 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。

    c. 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。

    d. bind 改变this指向后不会立即执行，而是返回一个永久改变this指向的函数便于稍后调用；apply, call则是立即调用

12. localstorage、sessionstorage、cookie的区别

    a. 相同点是都是保存在浏览器端、且同源的

    b. cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下

    c. 存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大

    d. 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭

    e. 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的

    f. webStorage(`webstorage是本地存储，存储在客户端，包括localStorage和sessionStorage`)支持事件通知机制，可以将数据更新的通知发送给监听者

    h. webStorage的api接口使用更方便

### JavaScript的Proxy代理对象

#### 什么Proxy代理

```js
// pOjb就是通过new Proxy创建的代理对象
var pObj = new Proxy(obj, handlers)
```

#### 为什么需要代理对象

举个记账的例子：

```js
// obj代表我们，wallet属性指我们钱包，现在我们钱包里有100元
// consume指消费次数，每次消费加1， 记一笔账
var obj = {wallet: 100}
var consume = 0

// 这个月，我们喝了五次肥宅快乐水，每次消费我们都记一笔

// 今天消费3元
consume++
obj.wallet = 97

// 今天消费3元
consume++
obj.wallet = 94

// 今天消费3元
consume++
obj.wallet = 91

// 今天消费3元
consume++
obj.wallet = 88

// 今天消费3元
consume++
obj.wallet = 85
```

每次我们修改钱包剩余金额时，都要执行一次consume++去执行一次记账的操作。有没有更简单的方式，不需要每次都写上一行代码去增加消费次数呢？

答案当然有，它就是Proxy代理对象！使用代理对象，你想对目标对象的属性操作全部改为对代理对象相同属性的操作，代理对象提供了对属性获取 [[get]] 修改 [[set]] 等操作的拦截，js将这种拦截称为trap（捕捉器）。

通过捕捉器，我们就可以捕获到 代码中对属性的操作时机，让我们能够先执行我们自定义的业务逻辑代码。

因为我们对目标对象的属性操作改为了对代理对象相同的属性操作，所以我们在最后需要通过Reflact执行目标对象的原始操作。

```js

var consume = 0
// 目标对象
var obj = {wallet: 100}
// 捕获器trap
var handlers = {
  set(target, key, val) {
    // target 目标对象
    // key 代理对象要修改的属性
    
    // 记录一笔消费
    consume++
    // 通过Reflact对象触发原始目标对象的属性操作
    // 相当于执行 target[key] = val
    Reflect.set(target, key, val)
  }
}
// 代理对象
var pObj = new Proxy(obj, handlers)
// 将对目标对象obj的属性wallet操作改为代理对象相同属性wallet的操作
pObj.wallet = 97
pObj.wallet = 94
pObj.wallet = 91
pObj.wallet = 88
pObj.wallet = 85

console.log(obj.wallet) // 85
console.log(consume) // 5
```

#### 取消代理

假如某一天，你实现了财务自由，不需要再精打细算记录每一笔消费了，你可能就需要取消此前的代理，代码很简单，往下看：

```js

var consume = 0
var obj = {wallet:  100}
var handlers = {
  set(target, key, val) {
    consume++
    Reflect.set(target, key, val)
  }
}

// 使用Proxy.revocable创建代理
var tmpObj = Proxy.revocable(obj, handlers)
var pObj = tmpObj.proxy
var prevoke = tmpObj.revoke

// 使用代理对象进行消费记账
pObj.wallet = 97
pObj.wallet = 94
pObj.wallet = 91

// 某一天，我们实现了一个小目标
pObj.wallet = 100000000
// 我们不需要记账了，我们需要取消创建的代理
prevoke() // 执行prevoke即可，就是这么简单 哦耶~

pObj.wallet = 99999997 // TypeError 报错啦 （代理取消之后就不能使用了哟！）
```

#### 代理在后模式

前面的示例都是先执行代理捕获器中的业务逻辑，最后再通过Reflect执行目标对象的属性操作，这种捕获代码操作在前，目标对象操作在后的模式称为“代理在先”模式，有在先，当然就有在后模式。

当然这里的“代理在后”模式并不是先使用Reflect对象触发目标对象属性操作，在执行捕获器中的其他操作代码。

而是指代理作为目标对象的一种补充，我们仍然操作的是目标对象，只是当某些操作在目标对象上无法实现时，才使用代理对象。

等会，当某些操作目标对象无法提供时，js会向目标对象的原型prototype上进行查找，所以“代理在后”模式是对目标对象的原型进行代理！

```js

var handlers = {
  get(target, key, context) {
    return function () {
      context.speak(key + '!')
    }
  }
}

var catchall = new Proxy({}, handlers)

var greeter = {
  speak(who = 'someone') {
    console.log('hello ', who)
  }
}

// 将catchall设置为greeter的原型
Object.setPrototypeOf(greeter, catchall)

greeter.speak() // hello someone
greeter.speak('world') // hello world

// 执行greater上不存在的方法
greeter.everyone() // hello everyone!
```

#### **Reflect**

Reflect对象用来触发目标对象执行相应的操作,就是这么简单！

```js
Reflect.get(target, key, context) // 等价于  target[key]
Reflect.set(target, key, val) // 等价于 target[key] = val
```

### 函数柯里化

`柯里化(Currying)` 是把接收多个参数的原函数变换成接受一个单一参数（原来函数的第一个参数的函数)并返回一个新的函数，新的函数能够接受余下的参数，并返回和原函数相同的结果。

- 当一个函数有多个参数的时候，先传递一部分参数调用它（这部分参数以后永远不变）
- 然后返回一个新的函数接受剩余的参数，返回结果
- 讲人话，就是将一个有n个参数函数，转变为可以(n ~ 1)次连续调用的函数，即`fn(x,y,z)`转变为`curriedFn(x)(y)(z)`或`curriedFn(x,y)(z)`或`curriedFn(x)(y,z)`或`curriedFn(x,y,z)`

```js
const _ = require('lodash');
// 要柯里化的函数
function getSum(a,b,c){
    return a + b + c;
}
// 柯里化后的函数
let curried = _.curry(getSum)
// 测试
curried(1,2,3);
curried(1)(2)(3);
curried(1,2)(3);


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

- 柯里化可以我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的函数，这是一种对函数参数的缓存。
- 让函数变得更灵活，颗粒度更小。
- 可以把多元函数转换为一元函数，可以组合使用函数产生强大的功能。

- 参数对复用。

- 提高实用性。

- 延迟执行 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。柯里化的函数可以延迟接收参数，就是比如一个函数需要接收的参数是两个，执行的时候必须接收两个参数，否则没法执行。但是柯里化后的函数，可以先接收一个参数。

### 函数式编程

在js的基础篇章中有

### 闭包

**闭包的概念**

函数执行时形成的私有上下文EC(FN)，正常情况下，代码执行完会出栈后释放;但是特殊情况下，如果当前私有上下文中的某个东西被上下文以外的事物占用了，则上下文不会出栈释放，从而形成不销毁的上下文。 函数执行函数执行过程中，会形成一个全新的私有上下文，可能会被释放，可能不会被释放，不论释放与否，他的作用是：

（1）保护：划分一个独立的代码执行区域，在这个区域中有自己私有变量存储的空间，保护自己的私有变量不受外界干扰（操作自己的私有变量和外界没有关系）；

（2）保存：如果当前上下文不被释放【只要上下文中的某个东西被外部占用即可】，则存储的这些私有变量也不会被释放，可以供其下级上下文中调取使用，相当于把一些值保存起来了；

我们把函数执行形成私有上下文，来保护和保存私有变量机制称为`闭包`。

> 闭包是指有权访问另一个函数作用域中的变量的函数--《JavaScript高级程序设计》

**稍全面的回答**： 在js中变量的作用域属于函数作用域, 在函数执行完后,作用域就会被清理,内存也会随之被回收,但是由于闭包函数是建立在函数内部的子函数, 由于其可访问上级作用域,即使上级函数执行完, 作用域也不会随之销毁, 这时的子函数(也就是闭包),便拥有了访问上级作用域中变量的权限,即使上级函数执行完后作用域内的值也不会被销毁。

- **闭包的特性**：

  - 1、内部函数可以访问定义他们外部函数的参数和变量。(作用域链的向上查找，把外围的作用域中的变量值存储在内存中而不是在函数调用完毕后销毁)设计私有的方法和变量，避免全局变量的污染。

    1.1.闭包是密闭的容器，，类似于set、map容器，存储数据的

    1.2.闭包是一个对象，存放数据的格式为 key-value 形式

  - 2、函数嵌套函数

  - 3、本质是将函数内部和外部连接起来。优点是可以读取函数内部的变量，让这些变量的值始终保存在内存中，不会在函数被调用之后自动清除

- **闭包形成的条件**：

  1. 函数的嵌套
  2. 内部函数引用外部函数的局部变量，延长外部函数的变量生命周期

- **闭包的用途**：

  1. 模仿块级作用域
  2. 保护外部函数的变量 能够访问函数定义时所在的词法作用域(阻止其被回收)
  3. 封装私有化变量
  4. 创建模块

- **闭包应用场景**

  闭包的两个场景，闭包的两大作用：`保存/保护`。 在开发中, 其实我们随处可见闭包的身影, 大部分前端JavaScript 代码都是“事件驱动”的,即一个事件绑定的回调方法; 发送ajax请求成功|失败的回调;setTimeout的延时回调;或者一个函数内部返回另一个匿名函数,这些都是闭包的应用。

- **闭包的优点**：延长局部变量的生命周期

- **闭包缺点**：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏

### typeof和instanceof原理

JavaScript有八种内置类型

- 空值（null)
- 未定义(undefined)
- 布尔值（boolean)
- 数字（number)
- 字符串（string)
- 对象 (object)
- 符号（symbol, ES6中新增)
- 大整数（BigInt, ES2020 引入）

> 除对象外，其他统称为“基本类型”。

1. **typeof**

`typeof`是一个操作符而不是函数，用来检测给定变量的数据类型。

```js
typeof null // 'object'
typeof undefined; // "undefined"
typeof false; // "boolean"
typeof 1; // "number"
typeof '1'; // "string"
typeof {}; // "object" 
typeof []; // "object" 
typeof new Date(); // "object"
typeof Symbol(); // "Symbol"
typeof 123n // 'bigint'
typeof function a(){} //"function"
```

优点：能够快速区分基本数据类型。

缺点：不能将Object、Array和Null区分，都返回object。

但是使用 `typeof`不能 判断对象具体是哪种类型。所有`typeof` 返回值为 "object" 的对象（如数组，正则等）都包含一个内部属性 `[[class]]`(我们可以把它看做一个内部的分类)。这个属性无法直接访问，一般通过 `Object.prototype.toString(...)`来查看。

每种引用类型都会直接或者间接继承自Object类型，因此它们都包含toString()函数。不同数据类型的toString()类型返回值也不一样，所以通过toString()函数可以准确判断值的类型。

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

优点：精准判断数据类型。

缺点：写法繁琐不容易记，推荐进行封装后使用。

`instanceof` 运算符也常常用来判断对象类型。用法: 左边的运算数是一个`object`，右边运算数是对象类的名字或者构造函数; 返回`true`或`false`。

```js
[] instanceof Array; // true
[] instanceof Object; // true
[] instanceof RegExp; // false
new Date instanceof Date; // true
```

`instanceof` 的内部机制是：检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

`typeof`原理： **不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位存储其类型信息**。

- 000: 对象
- 010: 浮点数
- 100：字符串
- 110： 布尔
- 1： 整数



2. **instanceof**

`instanceof` 用来比较一个对象是否为某一个构造函数的实例。注意，instanceof运算符只能用于对象，不适用原始类型的值。

```js
console.log(1 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```

优点：能够区分Array、Object和Function，适合用于判断自定义的类实例对象。

缺点：Number，Boolean，String基本数据类型不能判断。

- 判断某个`实例`是否属于`某种类型`

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

判断一个函数是否时数组或者对象，从另一个角度讲，就是判断变量的构造函数时Array类型还是Ojbect类型。因为一个对象的实例都是通过构造函数生成的，所以，我们可以直接判断一个变量的constructor属性。

```js
 const a = [0, 1, 2];
        console.log(a.constructor === Array); // true
        console.log(a.constructor === Object);  // false

        const b = {name: 'xx'};
        console.log(b.constructor === Array); // false
        console.log(b.constructor === Object); // true


function getDataType (o) {
            const constructor = o.__proto__.constructor || o.constructor
            if (constructor === Array) return 'Array';
            if (constructor === Object) return 'Object';
            return 'others'
        }

```

我们使用 `typeof` 来判断基本数据类型是 ok 的，不过需要注意当用 `typeof` 来判断 `null` 类型时的问题，如果想要判断一个对象的具体类型可以考虑用 `instanceof`，但是 `instanceof` 也可能判断不准确，比如一个数组，他可以被 `instanceof` 判断为 Object。所以我们要想比较准确的判断对象实例的类型时，可以采取 `Object.prototype.toString.call` 方法。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210802130036.png)

## 常见面试问题

### HTTP协议

1. HTTP协议的主要特点

HTTP协议类的主要特点：简单快速，灵活，无连接，无状态（无法区分两次连接是否一样）。

2. HTTP报文的组成部分

HTTP报文的组成部分

请求报文：请求行，请求头，空行，请求体；

响应报文：状态行，响应头，空行，响应体。

请求行包含：http方法，页面地址，http协议以及版本；

请求头包含：key-value值，告诉服务器端我要什么内容。

3. HTTP方法

HTTP协议类，

HTTP方法：

GET，获取资源，

POST，传输资源，

PUT，更新资源，

DELETE，删除资源，

HEAD，获得报文首部。

4. POST和GET的区别

HTTP协议类：

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

5. HTTP状态码

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

6. 什么是持久连接（HTTP1.1版本才支持）

HTTP协议采用“请求-应答”模式，当使用普通模式，即非`keep-alive`模式时，每个请求/应答 客户和服务器都要新键一个连接，完成之后立即断开连接（HTTP协议为无连接的协议）。

当使用`keep-alive`模式（又称为持久连接，连接重用）时，`keep-alive`功能使客户端到服务器端的连接有效，当出现对服务器的后继请求时，`keep-alive`功能避免了建立或重新建立连接。

7. 什么是管线化

在使用持久化连接的情况下，某个连接上消息的传递类似于

请求1->响应1->请求2->响应2->请求3->响应3

在某个连接上的消息变成了类似这样，也是在持久化连接情况下（请求一次打包发过去，响应也一次打包发过来）

请求1->请求2->请求3->响应1->响应2->响应3



- 管线化机制通过持久连接完成,仅HTP/1.1支持此技术。

- 只有 GET 和 HEAD 请求可以进行管线化，而 POST 则有所限制。

- 初次创建连接时不应启动管线机制,因为对方(服务器)不一定支持HTTP/1.1版本的协议

- 管线化不会影响响应到来的顺序，如上面的例子所示，响应返回的顺序并未改变 HTP1.1 要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对于管线化的请求不失败即可。

- 由于上面提到的服务器端问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不好，因此现代浏览器如 Chrome 和 Firefox 默认并未开启管线化支持。

8. #### http 和 https 的基本概念

http: 是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从 WWW 服务器传输超文本到本地浏览器的超文本传输协议。
 https:是以安全为目标的 HTTP 通道，即 HTTP 下加入 SSL 层进行加密。

https 协议的主要作用：建立一个信息安全通道，来确保数据的传输，确保网站的真实性。

9. #### http 和 https 的区别？

http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议。

https 协议需要 CA证书，费用较高。

使用不同的链接方式，端口也不同，一般，http 协议的端口为 80，https 的端口为 443。

http 的连接很简单，是无状态的。

10. #### https 协议的工作原理

客户端在使用 HTTPS 方式与 Web 服务器通信时有以下几个步骤，如图所示。

- 客户端使用 https url 访问服务器，则要求 web 服务器建立 ssl 链接。

- web 服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或 者说传输给客户端。

- 客户端和 web 服务器端开始协商 SSL 链接的安全等级，也就是加密等级。

- 客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。

- web 服务器通过自己的私钥解密出会话密钥。

- web 服务器通过会话密钥加密与客户端之间的通信。

11. #### https 协议的优点和缺点

- 优点

  https 协议要比 http 协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。 HTTPS 是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。

- 缺点

  https 握手阶段比较`费时`，会使页面加载时间延长 50%，增加 10%~20%的耗电。

  https `缓存`不如 http 高效，会增加数据开销。

  SSL 证书也需要钱，功能越强大的`证书费`用越高。

  SSL 证书需要绑定 `IP`，不能再同一个 ip 上绑定多个域名，ipv4 资源支持不了这种消耗

12. TCP三次握手
    1. 第一次握手：建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。
    2. 第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
    3. 第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

```
握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。
```

### 通信类

#### **同源是什么？**

如果两个URL的协议`protocol`、主机名`host`和端口号`port`都相同的话，则这两个URL是同源。

#### **同源策略(协议、域名与端口号)**

同源策略是一个重要的安全策略。它能够阻断恶意文档，减少被攻击的媒介。

> 真实项目中，很少有**同源策略**，大部分都是**非同源策略**

#### 前后端通讯的方式

- Ajax（同源的通信方式）
- WebSocket（不受同源策略的限制）
- CORS（支持跨域通信，也支持同源通信）

#### **跨域是什么？**

**当协议、域名与端口号中任意一个不相同时，都算作不同域，不同域之间相互请求资源的表现(非同源策略请求)，称作”跨域“**。

#### **造成跨域的几种常见表现**

- 服务器分开部署（Web服务器 + 数据请求服务器）
- 本地开发（本地预览项目 调取 测试服务器的数据）
- 调取第三方平台的接口

> **Web服务器**：主要用来静态资源文件的处理

#### **解决跨域的方案**

- 修改本地HOST
- JSONP
- CORS
- Proxy
- Nginx反向代理
- Post Message（利用`iframe`标签，实现不同域的关联）
- Hash
- WebSocket

1. **JSONP**

原理：`JSONP`利用`script`标签不存在域的限制，且定义一个`全局执行上下文`中的函数`func`（用来接收服务器端返回的数据信息）来接收数据，从而实现跨域请求。

**弊端**：

- 只允许**GET**请求
- 不安全：只要浏览器支持，且存在浏览器的全局变量里，则谁都可以调用

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210712090223.png)

**手动封装JSONP**

`callback`必须是一个全局上下文中的函数

（防止不是全局的函数，我们需要把这个函数放在全局上，并且从服务器端接收回信息时，要浏览器执行该函数）

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

在上文中说到只要服务器端那里设置了允许通过`jsonp`的形式跨域请求，我们就可以取回数据。

2. **CORS**（支持跨域通信的Ajax）

上文提到，不允许跨域的根本原因是因为`Access-Control-Allow-Origin`已被禁止。那么只要让`服务器端设置允许源`就可以了。

**原理**：解决掉浏览器的默认安全策略，在服务器端设置允许哪些源请求就可以了

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

3. **Proxy**

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

4. **配置Nginx反向代理**

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

5. **POST MESSAGE**

假设现在有两个页面，分别为A页面`port=1001`、B页面`port=1002`，实现页面A与页面B的页面通信（跨域）

原理：

- 把 B页面当做A的子页面嵌入到A页面里，通过`iframe.contentWindow.postMessage`向B页面传递某些信息
- 在B页面中通过`window.onmessage`获取A页面传递过来的信息`ev.data`(见下代码)
- 同理在B页面中通过`ev.source.postMessage`向A页面传递信息
- 在A页面中通过`window.onmessage`获取B页面传递的信息

主要利用内置的`postMessage`和`onmessage`传递信息和接收信息。

A.html

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

6. **Hash**

url后面的# 改变不会导致页面刷新

```js
   // 利用hash，场景是当前页面 A 通过iframe或frame嵌入了跨域的页面 B
      // 在A中伪代码如下：
      var B = document.getElementsByTagName('iframe');
      B.src = B.src + '#' + 'data';
      // 在B中的伪代码如下
      window.onhashchange = function () {
          var data = window.location.hash;
      };
```

6. **WebSocket**

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

### 安全类

#### **CSRF**

基本概念和缩写：CSRF，即 Cross Site Request Forgery，中译是跨站请求伪造，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210804153816.png" style="zoom:33%;" />

攻击原理：

通常情况下，CSRF 攻击是攻击者借助受害者的 Cookie 骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。

在用户已经登录目标站的前提下，访问到了攻击者的钓鱼网站，攻击者直接通过 url 调用目标站的接口，伪造用户的行为进行攻击，通常这个行为用户是不知情的。

防御手段：

- **验证码**

验证码被认为是对抗 CSRF 攻击最简洁而有效的防御方法。

从上述示例中可以看出，CSRF 攻击往往是在用户不知情的情况下构造了网络请求。而验证码会强制用户必须与应用进行交互，才能完成最终请求。因为通常情况下，验证码能够很好地遏制 CSRF 攻击。

但验证码并不是万能的，因为出于用户考虑，不能给网站所有的操作都加上验证码。因此，验证码只能作为防御 CSRF 的一种辅助手段，而不能作为最主要的解决方案。

- **Referer Check**

根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。通过 Referer Check，可以检查请求是否来自合法的"源"。

比如，如果用户要删除自己的帖子，那么先要登录 www.c.com，然后找到对应的页面，发起删除帖子的请求。此时，Referer 的值是 [www.c.com](https://link.juejin.cn/?target=http%3A%2F%2Fwww.c.com)；当请求是从 www.a.com 发起时，Referer 的值是 [www.a.com](https://link.juejin.cn/?target=http%3A%2F%2Fwww.a.com) 了。因此，要防御 CSRF 攻击，只需要对于每一个删帖请求验证其 Referer 值，如果是以 www.c.com 开头的域名，则说明该请求是来自网站自己的请求，是合法的。如果 Referer 是其他网站的话，则有可能是 CSRF 攻击，可以拒绝该请求。Referer Check 不仅能防范 CSRF 攻击，另一个应用场景是 "防止图片盗链"。

- **添加 token 验证**

CSRF 攻击之所以能够成功，是因为攻击者可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 Cookie 中，因此攻击者可以在不知道这些验证信息的情况下直接利用用户自己的 Cookie 来通过安全验证。要抵御 CSRF，关键在于在请求中放入攻击者所不能伪造的信息，并且该信息不存在于 Cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。

#### **XSS**

基本概念：XSS (Cross Site Script) 跨站脚本攻击。XSS 攻击是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。

攻击原理：

是一种**代码注入攻击**。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。

XSS 攻击可以分为 3 类：反射型（非持久型）、存储型（持久型）、基于 DOM。

**XSS 主要是通过输入框等形式提交 js 脚本，最终在页面上被执行。**

防御手段：

- **HttpOnly 防止劫取 Cookie**

HttpOnly 最早由微软提出，至今已经成为一个标准。浏览器将禁止页面的 Javascript 访问带有 HttpOnly 属性的 Cookie。

上文有说到，攻击者可以通过注入恶意脚本获取用户的 Cookie 信息。通常 Cookie 中都包含了用户的登录凭证信息，攻击者在获取到 Cookie 之后，则可以发起 Cookie 劫持攻击。所以，严格来说，HttpOnly 并非阻止 XSS 攻击，而是能阻止 XSS 攻击后的 Cookie 劫持攻击。

- **输入检查**

**不要相信用户的任何输入。** 对于用户的任何输入要进行检查、过滤和转义。建立可信任的字符和 HTML 标签白名单，对于不在白名单之列的字符或者标签进行过滤或编码。

- **输出检查**

用户的输入会存在问题，服务端的输出也会存在问题。一般来说，除富文本的输出外，在变量输出到 HTML 页面时，可以使用编码或转义的方式来防御 XSS 攻击。例如利用 sanitize-html 对输出内容进行有规则的过滤之后再输出到页面中。

3. **CSRF与 XSS 区别**

- **通常来说 CSRF 是由 XSS 实现的，CSRF 时常也被称为 XSRF（CSRF 实现的方式还可以是直接通过命令行发起请求等）。**
- 本质上讲，XSS 是代码注入问题，**CSRF 是 HTTP 问题。** XSS 是内容没有过滤导致浏览器将攻击者的输入当代码执行。**CSRF 则是因为浏览器在发送 HTTP 请求时候自动带上 cookie，而一般网站的 session 都存在 cookie里面(Token验证可以避免)。**

### 从输入 URL 到页面展示，这中间发生了什么？

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210816130659.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210816130759.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210816130844.png" style="zoom:33%;" />

1. **用户输入URL**

浏览器判断输入内容是否为URL，如果不是URL，用浏览器默认的搜索引擎来合成新的带搜索关键字的URL，如果判断输入内容符合URL规则，则加上协议合成完整URL。

2. **URL请求**

- 1. 浏览器进程通过进程间通信（IPC）把URL请求发送至网络进程，由网络进程发起真正的URL请求。
- 2. 网络进程查找本地缓存是否缓存了该资源，如果有缓存资源，那么直接返回资源给浏览器进程，如果没有缓存则进入网络请求流程。
- 3. 请求前第一步进行DNS解析，以获取请求域名的服务器IP地址。如果请求协议是HTTPS，需要建立TLS连接。
- 4. 利用IP地址和服务器建立TCP连接。
- 5. 构建请求行、请求头等信息，并把和该域名相关的Cookie等数据附加到请求头中，然后向服务器发送构建的请求信息。
- 6. 服务器接收到请求信息后，会根据请求信息生成响应数据（包括响应行、响应头和响应体等信息），并发给网络进程。
- 7. 网络进程接收到响应后，解析响应头的内容。

如果返回的状态码是301或者302，从响应头的 Location 字段读取重定向的地址，发起新的 HTTP 或者 HTTPS 请求。

如果响应行是200，根据Content-Type，判断服务器返回的响应体数据是什么类型，如果响应头中的Content-type字段的值是text/html，说明服务器返回的数据是HTML格式。

3. ####  准备渲染进程

同一站点：根域名（例如，geekbang.org）和协议（例如，https:// 或者 http://）相同的页面。

Chrome 默认会为每个页面分配一个渲染进程，但是，如果从一个页面打开了另一个新页面，而新页面和当前页面属于同一站点的话，那么新页面会复用父页面的渲染进程。

4. #### 提交文档（即响应体数据）

- 浏览器进程发出“提交请求”消息给渲染进程，渲染进程接收到“提交文档”的消息后，和网络进程建立传输数据的“管道”。

- 等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程。

- 浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新。

5. #### 渲染流程（就是下面的渲染机制）

### 渲染机制

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816132327.png)

1. 什么是`DOCTYPE`及作用

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210806083900.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145201.png)

2. 浏览器渲染过程

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210806084829.png)

- **1.构建DOM树**

浏览器从响应体读取HTML原始字节，并指定编码(如UTF-8)转换成字符串， 再将字符串转换成Token，Token会标识是“开始标签”、“结束标签”或“文本”等信息，如"StartTag:head"、"EndTag:title"、"sometext"， 然后由Token生成节点对象，最后构建DOM树。如"StartTag:head"、"EndTag:title"、"sometext"， 然后由Token生成节点对象，最后构建DOM树。

> 事实上，构建DOM的过程中，不是等所有Token都转换完成后再去生成节点对象，而是一边生成Token一边消耗Token来生成节点对象。 换句话说，每个Token被生成后，会立刻消耗这个Token创建出节点对象。注意：带有结束标签标识的Token不会创建节点对象。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145222.png)

- **2.构建CSSOM树**

构建CSSOM的过程与构建DOM的过程相似。

CSS 样式来源主要有三种：

​	 - 通过 link 引用的外部 CSS 文件

​     - `<style>`标记内的 CSS

​     - 元素的 style 属性内嵌的 CSS

在这一过程中，浏览器会确定下每一个节点的样式到底是什么，并且这一过程其实是很消耗资源的。因为样式既可以自行设置给某个节点，也可以通过继承获得。 在这一过程中，浏览器得递归CSSOM树，确定具体的元素样式。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145238.png)

- **3.构建渲染树（布局树）**

遍历DOM树中的所有可见节点，并把这些节点添加到渲染树，不可见的节点会被忽略掉，如head标签下面的全部内容、样式属性包含dispaly:none的元素等。

计算渲染树节点的坐标位置。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145254.png)

- **4. 构建分层树**

渲染引擎为特定的节点生成专用的图层，并生成一棵对应的图层树。

- **5. 生成绘制表**

把每一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表。

绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染引擎中的合成线程来完成的。

所以这一步还要将绘制列表提交到合成线程。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145311.png)

- **6.栅格化**

> 合成线程会将图层划分为图块（tile），按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。 所谓栅格化，是指将图块转换为位图。而图块是栅格化执行的最小单位。 渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在线程池内执行的。 通常，栅格化过程都会使用 GPU 来加速生成，使用 GPU 生成位图的过程叫快速栅格化，或者 GPU 栅格化，生成的位图被保存在 GPU 内存中。

- **7.合成**

所有图块都被光栅化后，合成线程发送绘制图块的命令DrawQuad给浏览器进程。

- **8.显示**

浏览器进程里面有一个叫viz的组件，用来接收合成线程发过来的DrawQuad命令，然后根据DrawQuad命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。

3. 重排`Reflow`

当渲染树中部分或全部元素的更改，能引起元素的几何位置属性(`DOM`对象的位置和尺寸大小)，例如改变元素的宽度、高度等，浏览器会触发重新布局（浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置），这个过程称为回流或者重排。

会导致回流的操作：

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变（边距、填充、边框、宽度和高度）
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加、删除、修改、移动可见的DOM元素
- 计算 offsetWidth 和 offsetHeight 属性
- 设置/查询某些属性、调用某些方法

- 当你修改 CSS 样式的时候

常见的会导致回流的属性和方法：

- width、height、margin、padding、border
- display、position、overflow
- clientWidth、clientHeight、clientTop、clientLeft
- offsetWidth、offsetHeight、offsetTop、offsetLeft
- scrollWidth、scrollHeight、scrollTop、scrollLeft
- scrollIntoView()、scrollIntoViewIfNeeded()
- getComputedStyle()
- getBoundingClientRect()
- scrollTo()

4. 重绘`Repaint`

当页面中元素样式的改变并不影响它在文档流中的位置时，例如修改了元素的背景颜色，由于没有引起几何位置的变换，所以不会重新执行布局，浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。（当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。）

相较于重排操作，重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些。

常见的会导致重绘的属性和方法：

- color、text-decoration、visibility
- background、background-image、background-position、background-repeat、background-size
- outline、outline-color、outline-style、outline-radius、outline-width
- border-style、box-shadow

5. 布局`Layout`

> 页面性能

提升页面性能的方法：

1. 资源压缩合并，减少HTTP请求
2. 非核心代码异步加载，异步加载的方式，
3. 利用浏览器缓存
4. 使用CDN
5. 如何减少重绘和重排
   1. 样式集中修改，不要一条一条地修改 DOM 的样式。
   2. 不要把 DOM 结点的属性值放在循环里当成循环里的变量。
   3. 为动画的 HTML 元件使用 `fixed` 或 `absoult` 的 `position`，那么修改他们的 CSS 是不会 reflow 的。
   4. 不使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。
   5. 尽量只修改`position：absolute`或`fixed`元素，对其他元素影响不大
   6. 动画开始`GPU`加速，`translate`使用`3D`变化

### JS运行机制

**什么是单线程**

单线程即同一时间只有一个线程，只能做一件事
原因：避免DOM渲染的冲突
解决方案：异步
实现方式：event-loop

**JavaScript怎么实现异步**

JS 实现异步时通过 **事件循环（Event Loop）**,是JS异步的解决方案。 JS实现异步的具体解决方案

- 同步代码，直接执行

- 异步代码先放在 `异步队列` 中
- 待同步函数执行完毕，轮询执行异步队列 中的函数

**目前JS解决异步的方案有哪些**

- 回调函数
- 事件监听
- 发布-订阅
- `Promise`
- Generator
- `Async/Await`

**Event Loop是javascript的执行机制**

**执行同步任务** -> **行异步任务** -> **先执行微任务** -> **后执行宏任务**

主线程从**任务队列**中读取事件，这个过程是不断循环的，所以整个的这种运行机制又称为Event Loop（事件循环）。Event Loop是JavaScript的执行机制

- **同步任务和异步任务（宏任务和微任务）**

同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。

异步任务：不进入主线程，而进入**任务队列（task queue）** 只有**任务队列**通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145333.png" style="zoom:33%;" />

- **宏任务和微任务**

|           宏任务            |            微任务             |
| :-------------------------: | :---------------------------: |
|           定时器            |    Promise（async/await）     |
|          事件绑定           | process.nexTick（Node独有的） |
|            Ajax             |        MutationObserve        |
|          回调函数           |                               |
| Node中fs可以进行异步I/O操作 |                               |

 **JavaScript 执行机制：**

- **主线程任务——>微任务——>宏任务**

如果宏任务里还有微任就继续执行宏任务里的微任务，如果宏任务中的微任务中还有宏任务就在依次进行

- **主线程任务——>微任务——>宏任务——>宏任务里的微任务——>宏任务里的微任务中的宏任务——>直到任务全部完成**

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



<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210806134040.png" style="zoom:33%;" />



```js
    console.log('一碗白米饭')
    setTimeout(function () {
      console.log('麻辣鱼头')
    }, 0)
    new Promise(function (resolve, reject) {
      resolve('凉拌小菜')
    }).then(res => {
      console.log(res)
    })
    new Promise(function (resolve, reject) {
      resolve('麻婆没豆腐')
    }).then(res => {
      console.log(res)
    })
    setTimeout(function () {
      console.log('红烧乳猪蹄')
      console.log('油焖大虾')
    }, 0)
    setTimeout(function () {
      console.log('糖醋鲤鱼')
    }, 0)
    new Promise(function (resolve, reject) {
      resolve('红烧木耳')
    }).then(res => {
      console.log(res)
    })
    console.log('白开水')
// 控制台结果
    白米饭
    白开水
    凉拌小菜
    麻婆没豆腐
    红烧木耳
    麻辣鱼头
    红烧乳猪蹄
    油焖大虾
    糖醋鲤鱼

```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145406.png" style="zoom:33%;" />

将同步代码放入执行栈中执行，在控制台输出。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210806134345.png" style="zoom:33%;" />

**清空执行栈** -> **先执行微任务** ->**清空微任务队列**

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210806134652.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210806134722.png" style="zoom:33%;" />

**执行宏任务** ->**清空宏任务队列** -> **一次事件循环结束**

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210806134621.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210806134759.png" style="zoom:33%;" />



JS内存空间分为**栈(stack)** 、**堆(heap)** 、**池(一般也会归类为栈中)** 。 其中**栈**存放变量，**堆**存放复杂对象，**池**存放常量，所以也叫常量池。

- 基本类型：--> `栈`内存（不包含闭包中的变量）
- 引用类型：--> `堆`内存

**栈内存(Stack)**：浏览器在计算机内存中分配出一块内存供代码执行的环境栈（ECStack），也称栈内存 ；

> 基本数据类型都是存到栈里面的。 引用数据类型指针存到栈内存。

**堆内存(Heap)**：浏览器会把内置的属性和方法放到一个单独的内存中，

> 引用数据类型是先开辟一个堆内存，一个16进制的地址，按照键、值分别存放，最后把地址放到栈中供代码关联使用；

js 中存在多种作用域（全局，函数私有的，块级私有的），引擎在编译执行代码的过程中，首先会创建一个执行栈，也就是栈内存（`ECStack` => 执行环境栈），然后执行代码。

代码执行前首先会形成自己的`EC`(执行上下文)，执行上下文分为全局执行上下文（`EC(G)`）和函数执行上下文（`EC(...)`）,其中函数的执行上下文是私有的。

创建执行上下文的过程中，可能会创建：

- `GO(Global Object)`：全局对象 浏览器端，会把GO赋值给window
- `VO(Varible Object)`：变量对象，存储当前上下文中的变量。
- `AO(Active Object)`：活动对象

然后把上下文压缩进栈，进栈后，在当前上下文再依次执行代码； 全局执行器上下文（EC(G)）进栈（ECStack）执行,执行完代码就会把形成的上下文释放（出栈），执行后一些没用的上下文也将出栈，有用的上下文会压缩到栈底（闭包）。栈底永远是全局执行上下文，栈顶则永远是当前执行上下文。当页面关闭全局上下文出栈。

### 页面性能（性能优化）

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816155255.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816160028.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816160145.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816155340.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816155411.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816160732.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816160751.png)

1. **提升页面性能的方法有那些**

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210806101028.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210806101655.png)

```js
    <script src="./defer1.js" charset="utf-8" defer></script>
    <script src="./defer2.js" charset="utf-8" defer></script>
    <script src="./async1.js" charset="utf-8" async></script>
    <script src="./async2.js" charset="utf-8" async></script>
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145438.png)

### 浏览器缓存

1. **DNS缓存**

通常我们输入一个网址，它包含了`域名`和`端口`可以指定唯一的IP地址，然后建立连接进行通信，而`域名`查找`IP地址`的过程就是`dns解析`。

```
www.dnscache.com (域名) - DNS解析 -> 11.222.33.444 (IP地址)
```

这个过程会对网络请求带来一定的损耗，所以浏览器在第一次获取到`IP地址`后，会将其缓存起来。下次相同域名再次发起请求时，浏览器会先查找本地缓存，如果缓存有效，则会直接返回该`IP地址`，否则会继续开始寻址之旅。

- 首先搜索浏览器自身的DNS缓存,如果存在，则`域名解析`到此完成。
- 如果`浏览器自身的缓存`里面没有找到对应的条目，那么会尝试读取`操作系统的hosts文件`看是否存在对应的映射关系,如果存在，则域名解析到此完成。
- 如果本地hosts文件不存在映射关系，则查找`本地DNS服务器`(ISP服务器,或者自己手动设置的DNS服务器),如果存在,域名到此解析完成。
- 如果本地DNS服务器还没找到的话,它就会向`根服务器`发出请求,进行递归查询。

2. **memory cache（本地缓存）**

这是浏览器为了加快读取缓存速度而进行的`自身的优化行为`，不受开发者控制，也不受 HTTP 协议头的约束。当资源被存入内存后，下次同样的请求将不再通过网络，而是直接访问内存，`当关闭该页面时，此资源就被内存释放掉`了，再次重新打开相同页面时不再出现`from memory cache`的情况。

什么时候资源会被放入memory缓存呢?

答案是:几乎`所有的网络请求资源`都会根据相关的策略被浏览器自动加入到 memory cache 中。但是也正因为数量很大但是浏览器占用的内存不能无限扩大这样两个因素，memory cache 注定只能是个`“短期存储”`。当数据量过大，即使网页不关闭，缓存依然会失效。

memory cache 机制保证了一个页面中如果有两个相同的请求 (例如两个 `src` 相同的 `<img>`，两个 `href` 相同的 `<link>`)都实际只会被请求最多一次，避免浪费。

3. **http缓存（disk cache）**

强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，返回200，重新返回资源和缓存标识，再存入浏览器缓存中；生效则返回304，继续使用缓存。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210806145754.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816155911.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145438.png)

`硬盘缓存又叫HTTP缓存`，它也是浏览器缓存中最重要的内容。因为你想啊，DNS缓存它主要是做一个ip地址查找并且是自主完成的，memory cache 也是不受控制，算是一个黑盒。所以剩下的`可以受我们控制`的硬盘缓存的重要性就不言而喻了，`大多优化手段也是针对硬盘缓存`。HTTP缓存分为`强缓存`和`协商缓存`。

- **强缓存**

`控制它的字段`分别是：`Expires`和`Cache-Control`，其中`Cache-Control`优先级比`Expires`高。

当客户端发出一个请求到服务器，服务器希望你把资源缓存起来，于是在响应头中加入了这些内容。

```js
Cache-Control: max-age=3600 我希望你把这个资源缓存起来，缓存时间是3600秒（1小时）
Expires: Thu, 10 Nov 2020 08:45:11 GMT 到达指定时间过期 
Date: Thu, 30 Apr 2020 12:39:56 GMT 
Etag:W/"121-171ca289ebf"，(后面协商缓存内容)这个资源的编号是W/"121-171ca289ebf" 
Last-Modified:Thu, 30 Apr 2020 08:16:31 GMT，(后面协商缓存内容)这个资源的上一次修改时间
```

`Cache-Control`和 `Expires`分别是HTTP/1.1 和 HTTP/1.0的内容，为了兼容 HTTP/1.0 和 HTTP/1.1，实际项目中两个字段我们都会设置。

浏览器收到这个响应之后就会做下面的事情:

			- 浏览器把这次请求得到的响应体`缓存到本地文件`中
			- 浏览器`标记这次请求的请求方法和请求路径`

- 浏览器`标记这次缓存的时间`是3600秒
- 浏览器`记录服务器的响应时间`是格林威治时间`2020-04-30 12:39:56`

这一次的记录非常重要，它为以后浏览器要不要去请求服务器提供了依据。

之后当客户端收准备再次请求同样的地址时，它突然想起了一件事：`我需要的东西在不在缓存里呢？`

此时，客户端会到缓存中去寻找是否有缓存的资源，如下

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210806141946.png" style="zoom:33%;" />

判断缓存是否有效就是通过把`max-age + Date`，得到一个过期时间，看看这个过期时间是否大于当前时间，如果是，则表示缓存还没有过期，仍然有效，如果不是，则表示`缓存失效`。

- **协商缓存**

一旦发现缓存无效，它**并不会简单的把缓存删除**，而是抱着一丝希望，想问问服务器，我**这个缓存在上次修改之后是否重新做了更改？还能继续使用吗**？

**协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程**。

于是，浏览器向服务器发出了一个**带缓存的请求**。

**（1）Last-Modified和If-Modified-Since**

`Last-Modified: Fri, 22 Jul 2016 01:47:00 GMT`

浏览器下一次请求这个资源，浏览器检测到有 Last-Modified这个header，于是添加If-Modified-Since这个header，值就是Last-Modified中的值；服务器再次收到这个资源请求，会根据 If-Modified-Since 中的值与服务器中这个资源的最后修改时间对比，如果没有变化，返回304和空的响应体，直接从缓存读取，如果If-Modified-Since的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和200

但是 Last-Modified 存在一些弊端：

> - 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源
> - 因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源

**(2) ETag和If-None-Match**

**Etag是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)，只要资源有变化，Etag就会重新生成**。浏览器在下一次加载资源向服务器发送请求时，会将上一次返回的Etag值放到request header里的If-None-Match里，服务器只需要比较客户端传来的If-None-Match跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。

所谓带缓存的请求，无非就是加入了以下的请求头：

```js
If-Modified-Since: Thu, 30 Apr 2020 08:16:31 GMT  亲，你曾经告诉我，这个资源的上一次修改时间是格林威治时间2020-04-30 08:16:31，请问这个资源在这个时间之后有发生变动吗？
If-None-Match: W/"121-171ca289ebf"  亲，你曾经告诉我，这个资源的编号是W/"121-171ca289ebf，请问这个资源的编号发生变动了吗？
```

之所以要发两个信息，是为了兼容不同的服务器，因为有些服务器只认`If-Modified-Since`，有些服务器只认`If-None-Match`，有些服务器两个都认,但是一般来说 `If-None-Match 的优先级高于 If-Modified-Since`。

**（3）两者对比**

- 首先在精确度上，Etag要优于Last-Modified。

Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的Last-Modified其实并没有体现出来修改，但是Etag每次都会改变确保了精度；如果是负载均衡的服务器，各个服务器生成的Last-Modified也有可能不一致。

- 第二在性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值。
- 第三在优先级上，服务器校验优先考虑Etag

此时可能会产生两个结果

**缓存失效：** 那么非常简单，服务器再次给予一个正常的响应（响应码200 带响应体），同时可以附带上新的缓存指令，浏览器缓存新的内容

**缓存有效：** 服务器返回304重定向，并且响应头带上新的缓存指令，浏览器作出相应缓存动作。

- **Cache-Control**

`Cache-Control`还可以设置下面一个或多个值：

​		- `public`：指示服务器资源是公开的。比如有一个页面资源，所有人看到的都是一样的。这个值对于浏览器而言没有什么意义，但可能在某些场景可能有用。本着「我告知，你随意」的原则，`http`协议中很多时候都是客户端或服务器告诉另一端详细的信息，至于另一端用不用，完全看它自己。

 	-`private`：指示服务器资源是私有的。比如有一个页面资源，每个用户看到的都不一样。这个值对于浏览器而言没有什么意义，但可能在某些场景可能有用。本着「我告知，你随意」的原则，`http`协议中很多时候都是客户端或服务器告诉另一端详细的信息，至于另一端用不用，完全看它自己。

​	- `no-cache`：告知客户端，你可以缓存这个资源，但是不要**直接**使用它。当你缓存之后，后续的每一次请求都需要附带缓存指令，让服务器告诉你这个资源有没有过期。

​	- `no-store`：告知客户端，不要对这个资源做任何的缓存，之后的每一次请求都按照正常的普通请求进行。若设置了这个值，浏览器将不会对该资源做出任何的缓存处理。

​	- `max-age`：不再赘述

比如，`Cache-Control: public, max-age=3600`表示这是一个公开资源，请缓存1个小时。

不仅仅是在响应头中出现，在`http1.1`版本中，也可以在**请求头**中加入`Cache-Control: no-cache，`它的含义是向服务器表达：不要考虑任何缓存，给我一个正常的结果。这和`http1.0`版本的消息头字段pragma是一样的功能。

- **expire**

在`http1.0`版本中，是通过`Expire`响应头来指定过期时间点的，例如：

```js
Expire: Thu, 30 Apr 2020 23:38:38 GMT
```

到了`http1.1`版本，已更改为通过`Cache-Control`的`max-age`来记录了。

4. **总结**

当浏览器再次访问一个已经访问过的资源时，它会这样做：

​		- 根据相关字段判断是否命中`强缓存`，如果命中，就直接使用缓存了。

​		- 如果没有命中强缓存，就发请求到服务器检查是否命中`协商缓存`。

​		- 如果命中协商缓存，服务器会返回 304 告诉浏览器使用`本地缓存`。

​		- 否则，返回`最新的资源`。

5. **实际场景应用缓存策略**

- **频繁变动的资源**

对于频繁变动的资源，首先需要使用`Cache-Control: no-cache` 使浏览器每次都请求服务器，然后配合 ETag 或者 Last-Modified 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。

- **不常变化的资源**

通常在处理这类资源时，给它们的 Cache-Control 配置一个很大的 `max-age=31536000` (一年)，这样浏览器之后请求相同的 URL 会命中强制缓存。而为了解决更新的问题，就需要在文件名(或者路径)中添加 hash， 版本号等动态字符，之后更改动态字符，从而达到更改引用 URL 的目的，让之前的强制缓存失效 (其实并未立即失效，只是不再使用了而已)。 在线提供的类库 (如 `jquery-3.3.1.min.js`, `lodash.min.js` 等) 均采用这个模式。

6. **用户行为对浏览器缓存的影响**

所谓用户行为对浏览器缓存的影响，指的就是用户在浏览器如何操作时，会触发怎样的缓存策略。主要有 3 种：

- 打开网页，地址栏输入地址： 查找 disk cache 中是否有匹配。如有则使用；如没有则发送网络请求。
- 普通刷新 (F5)：因为 TAB 并没有关闭，因此 memory cache 是可用的，会被优先使用(如果匹配的话)。其次才是 disk cache。
- 强制刷新 (Ctrl + F5)：浏览器不使用缓存，因此发送的请求头部均带有 `Cache-control: no-cache`(为了兼容，还带了 `Pragma: no-cache`),服务器直接返回 200 和最新内容。



### ES6 Module和Commonjs区别

1. `ES6 Module`静态引入，编译时引入
2. `Commonjs`动态引入，执行时引入
3. 只有`ES6 Module`才能静态分析，实现`Tree-Shaking`

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

### ES6的WeakSet和WeakMap

`WeakSet` 结构与 `Set` 类似，也是不重复的值的集合。

- 成员都是数组和类似数组的对象，若调用 `add()` 方法时传入了非数组和类似数组的对象的参数，就会抛出错误。

```
const b = [1, 2, [1, 2]]
new WeakSet(b) // Uncaught TypeError: Invalid value used in weak set
复制代码
```

- 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏。
- `WeakSet` 不可迭代，因此不能被用在 `for-of` 等循环中。
- `WeakSet` 没有 `size` 属性。

WeakSet 对象中储存的对象值都是被弱引用的，即**垃圾回收机制不考虑 WeakSet 对该对象的应用**，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），**WeakSet 对象是无法被遍历**的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素



`WeakMap` 结构与 `Map` 结构类似，也是用于生成键值对的集合。

WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

基本上，**如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap**。一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除。

```js
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
```

总之，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。

注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

```js
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
```

- 只接受对象作为键名（`null` 除外），不接受其他类型的值作为键名
- 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
- 不能遍历，方法有 `get`、`set`、`has`、`delete`

总结

Set

- 是一种叫做集合的数据结构(ES6新增的)
- 成员唯一、无序且不重复
- `[value, value]`，键值与键名是一致的（或者说只有键值，没有键名）
- 允许储存任何类型的唯一值，无论是原始值或者是对象引用
- 可以遍历，方法有：`add`、`delete`、`has`、`clear`

WeakSet

- 成员都是对象
- 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 `DOM` 节点，不容易造成内存泄漏
- 不能遍历，方法有 `add`、`delete`、`has`

Map

- JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用**字符串**当作键。这给它的使用带来了很大的限制。
-  **“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键**。

- 是一种类似于字典的数据结构，本质上是键值对的集合
- 可以遍历，可以跟各种数据格式转换
- 操作方法有:`set`、`get`、`has`、`delete`、`clear`

WeakMap

- 只接受对象作为键名（`null` 除外），不接受其他类型的值作为键名

- 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的

- 不能遍历，方法有 `get`、`set`、`has`、`delete`

- ```js
  //WeakMap 应用的典型场合就是 DOM 节点作为键名。下面是一个例子:
  //一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险。
  let myWeakmap = new WeakMap();
  myWeakmap.set(
    document.getElementById('logo'),
    {timesClicked: 0})
  ;
  document.getElementById('logo').addEventListener('click', function() {
    let logoData = myWeakmap.get(document.getElementById('logo'));
    logoData.timesClicked++;
  }, false);
  
  
  
  //WeakMap 的另一个用处是部署私有属性。
  //上面代码中，Countdown类的两个内部属性_counter和_action，是实例的弱引用，所以如果删除实例，它们也就随之消失，不会造成内存泄漏。
  const _counter = new WeakMap();
  const _action = new WeakMap();
  
  class Countdown {
    constructor(counter, action) {
      _counter.set(this, counter);
      _action.set(this, action);
    }
    dec() {
      let counter = _counter.get(this);
      if (counter < 1) return;
      counter--;
      _counter.set(this, counter);
      if (counter === 0) {
        _action.get(this)();
      }
    }
  }
  
  const c = new Countdown(2, () => console.log('DONE'));
  
  c.dec()
  c.dec()
  // DONE
  
  ```

  

### Webpack性能优化

模块1：

- `webpack`性能优化-产出代码

1. 小图片`base64`编码
2. `bundle`加`hash`
3. 懒加载
4. 提供公共代码
5. 使用`CDN`加速
6. 使用`production`
7. `Scope Hosting`

- 代码体积更小
- 创建函数作用域更小
- 代码可读性更好

`babel`:前端开发环境必备工具,同`webpack`，需要了解基本的配置和使用

环境搭建和基本配置：`babel-polyfill，babel-runtime`

环境搭建：`.babelrc`配置：`presets`和`plugins`

`core-js`,`regenerator`结合，如何按需引入`babel-polyfill`，`Babel 7.4`之后弃用`babel-polyfill`，推荐直接使用`core-js`和`regenerator`。

`babel-polyfill`按需引入：文件较大，只有一部分功能，无需全部引入，配置按需引入。

`babel-polyfill`的问题？

1. 会污染全局环境；
2. 如果做一个独立的`web`系统，则无碍；
3. 如果做一个第三方`Lib`,则会有问题；

`babel-runtime`不会污染全局环境：

1. 基本配置
2. 高级配置
3. 优化打包效率
4. 优化产生代码
5. 构建流程概述
6. `babel`

> `babel-polyfill`和`babel-runtime`的区别

1. `babel-polyfill`会污染全局
2. `babel-runtime`不会污染全局
3. 产生第三方`lib`要用`babel-runtime`

细分：

拆分配置和`merge`；启动本地服务；处理`ES6`；处理样式；处理图片；多入口；抽离css文件；抽离公共代码；懒加载；处理JSX；处理Vue；webpack优化构建速度：优化`babel-loader`，`IgnorePlugin`，`noParse`，`happyPacK`，`ParalleIUglifyPlugin`。

> 前端为何打包构建，好处？

1. 体积更小（`Tree-Shaking`，压缩，合并），加载更快
2. 编译高级语言或语法（`TS，ES6+，模块化，SCSS`）
3. 兼容性和错误检查（`Polyfill，postcss，eslint`）

通过打包和构建，可以统一，高效的开发环境；统一的构建流程和产出标准，集成公司构建规范（提测，上线等）。

### 



模块2：

> module, chunk, bundle的区别？

1. `module`各个源码文件，`webpack`中一切皆模块
2. `chunk`多模块合并成的，如`entry`，`import()`，`splitChunk`
3. `bundle`最终的输出文件

`loader`和`plugin`的区别：`loader`模块转换器，如`less-css`；`plugin`扩展插件，如：`HtmlWebpackPlugin`。

`babel`和`webpack`的区别？

1. `babel`-`js`新语法编译工具，不关心模块化。
2. `webpack`-打包构建工具，是多个`loader`，`plugin`的集合

如何产生一个`lib`？参考`webpack.dll.js ouput library.`

```js
output: {
 // lib的文件名
 filename: 'lodash.js',
 // 输出lib到dist目录下
 path: disPath,
 library: 'lodash',
},
```

为何`Proxy`不能被`Polyfill`?

1. 如`Class`可以用`function`模拟
2. 如`Promise`可以用`callback`来模拟
3. 但`Proxy`的功能用`Object.defineProperty`无法模拟

> `webpack`如何实现懒加载

- `import()`
- 结合`Vue React`异步组件
- 结合`Vue-router,React-router`异步加载路由

> webpack优化构建速度（可用于生产环境）

- 优化`babel-loader`
- `IgnorePlugin`
- `noParse`
- `happyPack`
- `ParalleIUglifyPlugin`

> `webpack`优化构建速度（不用于生产环境）

- 自动刷新
- 热更新
- DIIPlugin

### 前端错误监控（产品质量 体系）

1. **前端错误的分类**
   - 即时运行错误：代码错误
   - 资源加载错误
2. **错误的捕获方式**

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210806103223.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812145517.png)

3. **上报错误的基本原理**

- 采用Ajax通信方式上报
- 利用Image对象上报

```js
  <script type="text/javascript">
      (new Image()).src = 'http://baidu.com/tesjk?r=tksjk';
    </script>
```

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

## 其他项目问题

### 项目流程

1. 项目分多人，多角色参与
2. 项目分多阶段
3. 项目需要计划和执行

需求分析：了解背景，质疑需求是否合理，需求是否闭环，开发难度如何，是否需要其他支持，不要急于给排期。

技术方案设计：1，求简，不过渡设计；2，产出文档，复盘；3，找准设计重点，组件怎么设计；4，组内评审；5，和`RD，CRD`沟通；6，发出会议结论。

完整项目流程：各个角色（需求分析），技术方案设计，开发，联调，测试，上线。

如何保证代码质量，开发，项目质量？

1. 如何反馈排期
2. 符合开发规范
3. 写出开发文档
4. 及时写单元测试
5. `Mock API`
6. `Code Review`

联调：1，和RD，CRD技术联调；2，让UE确定视觉效果；3，让PM确定产品功能。

加需求：走需求变更流程，按规定走，发起项目组和leader的评审，重新评估排期。

测试：提测发邮件，抄送项目组，测试问题要详细记录。

有问题及时沟通，QA和FE天生信息不对称，当面讨论，让QA帮你复现，需要特定设备才能复现。沟通，及时识别风险，及时汇报。

### 业务能力、团队协作能力、事务推动能力、带人能力、其他能力。
