​	

# JavaScript面试

## 基础面试问题
### Var，Let 和 Const 有什么区别
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
### this指向 - 最全系列
函数的`this`在调用时绑定的，完全取决于函数的调用位置（也就是函数的调用方法）。为了搞清楚`this`的指向是什么，必须知道相关函数是如何调用的。

JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

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

### 12个xxx和xxx的不同

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

### 函数柯里化？？？？？？？

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

- 柯里化可以我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的函数，这是一种对函数参数的缓存
- 让函数变得更灵活，颗粒度更小
- 可以把多元函数转换为一元函数，可以组合使用函数产生强大的功能

### 函数式编程？？？？？？？？

函数式编程：把事物之间的一系列复杂的**联系**抽象到程序的事件（对运算过程进行抽象）。

#### 函数式编程的好处（Why study FP(Functional Programming)）

- react的流行，使函数式编程受到越来越多的关注

- Vue3也开始大量使用函数式编程

- 函数式编程可以抛弃this。即使用过程中，不用关注this指向问题

- 项目打包过程中，可以更好的利用tree shaking过滤无用代码（vue3的改进点）

- 方便测试、方便并行处理

- 有很多库（lodash、underscore、ramda），可以帮助我们进行函数是的开发。

#### 什么是高阶函数

- 可以把函数作为参数传递给另一个函数

```js
function forEach(array,fn){
	for(let i = 0; i < array.length; i++){
        fn(array[i])
    }
}
```

- 可以把函数作为另一个函数的返回值

```js
function makeFn(){
	let msg = "hello world!"
    return function(){
        console.log(msg)
    }
}

const fn = makeFn();
fn()
```

#### 使用高阶函数的意义

- 抽象细节，即不需要关注内部执行细节，只需要关注想要实现的目标即可
- 高阶函数是用来抽象通用问题的，精简代码，实现代码的复用

```js
// 面向过程的方式
let array = [1,2,3,4];
for (let i = 0; i< array.length; i++){
    console.log(array[i])
}

// 高阶函数的方式
let array = [1,2,3,4];
forEach(array,item => {
    console.log(item);
    ... // something you want
})

//常用的高阶函数
forEach
map
filter
every
some
find/findIndex
reduce
sort
```

#### 纯函数

**相同的输入永远都会得到相同的输出**，而且没有任何可观察的副作用。

- 数组的slice和splice分别是：纯函数、不纯的函数
  - `slice`返回数组中指定的部分，不会改变原有函数
  - `splice`对数组进行操作并返回该数组，会改变原有数组
- 函数式编程不会保留计算中间的结果，所以变量是不可变的（无状态的）



### 闭包？？？？？

## 常见面试问题

### 跨域

解决跨域的方案

- 修改本地HOST
- JSONP
- CORS
- Proxy
- Nginx反向代理
- Post Message（利用`iframe`标签，实现不同域的关联）

同源是什么？

如果两个URL的协议`protocol`、主机名`host`和端口号`port`都相同的话，则这两个URL是同源。

同源策略

同源策略是一个重要的安全策略。它能够阻断恶意文档，减少被攻击的媒介。

> 真实项目中，很少有**同源策略**，大部分都是**非同源策略**

跨域是什么？

**当协议、域名与端口号中任意一个不相同时，都算作不同域，不同域之间相互请求资源的表现(非同源策略请求)，称作”跨域“**。

造成跨域的几种常见表现

- 服务器分开部署（Web服务器 + 数据请求服务器）
- 本地开发（本地预览项目 调取 测试服务器的数据）
- 调取第三方平台的接口

> **Web服务器**：主要用来静态资源文件的处理

解决方案

- 修改本地HOST(不作介绍)
- JSONP
- CORS
- Proxy
- Nginx反向代理
- Post Message（利用`iframe`标签，实现不同域的关联）

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

2. **CORS**

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

### Proxy的局限性

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



<script>
  //=>监听A发送过来的信息
  window.onmessage = function (ev) {
    // console.log(ev.data);

    //=>ev.source:A
    ev.source.postMessage(ev.data + '@@@', '*');
  }
</script>
```

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

### HTTP协议

1. HTTP协议的主要特点
2. HTTP报文的组成部分
3. HTTP方法
4. POST和GET的区别
5. HTTP状态码
6. 什么是持久连接
7. 什么是管线化

HTTP报文的组成部分

请求报文：请求行，请求头，空行，请求体；响应报文：状态行，响应头，空行，响应体。请求行包含：http方法，页面地址，http协议以及版本；请求头包含：key-value值，告诉服务器端我要什么内容。

HTTP协议类的主要特点：简单快速，灵活，无连接，无状态。

HTTP协议类，HTTP方法：GET，获取资源，POST，传输资源，PUT，更新资源，DELETE，删除资源，HEAD，获得报文首部。

HTTP协议类：POST和GET的区别：1.GET在浏览器回退时是无害的，而POST会再次提交请求；2.GET产生的URL地址可以被收藏，而POST不可以；3.GET请求会被浏览器主动缓存，而POST不会，除非手动设置；4.GET请求只能进行url编码，而POST支持多种编码方式；5.GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会保留；6.GET请求在URL中传送的参数是有长度限制的，而POST是没有限制的；7.对参数的数据类型，GET只接受ASCII字符，而POST没有限制；8.GET比POST更不安全，因为参数直接暴露在URL中，所以不是用来传递敏感信息的；9.GET参数通过URL传递的，POST放在Request body中。

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

HTTP协议采用“请求-应答”模式，当使用普通模式，即非`keep-alive`模式时，每个请求/应答 客户和服务器都要新键一个连接，完成之后立即断开连接（HTTP协议为无连接的协议）。

当使用`keep-alive`模式（又称为持久连接，连接重用）时，`keep-alive`功能使客户端到服务器端的连接有效，当出现对服务器的后继请求时，`keep-alive`功能避免了建立或重新建立连接。

### 浏览器缓存？？？？？？？

### 渲染机制？？？？？

1. 什么是`DOCTYPE`及作用
2. 浏览器渲染过程
3. 重排`Reflow`
4. 重绘`Repaint`
5. 布局`Layout`

> 页面性能

提升页面性能的方法：

1. 资源压缩合并，减少HTTP请求
2. 非核心代码异步加载，异步加载的方式，
3. 利用浏览器缓存
4. 使用CDN















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


