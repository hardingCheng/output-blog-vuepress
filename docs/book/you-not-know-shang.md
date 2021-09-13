# 你不知道的JavaScript上卷

## 作用域

- 分词/词法分析
- 解析/语法分析   AST
- 代码生成

JavaScript的编译过程不是发生在构建之前的。大部分情况下编译发生在代码执行前的几微秒。

编译器首先会将这段程序分解成词法单元，然后将词法单元解析成一个树结构。但是当编译器开始进行代码生成时，它对这段程序的处理方式会和预期的有所不同。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210708210350.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210708210626.png)

作用域嵌套

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210708211342.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210708211756.png)

变量进行赋值，那么就会使用LHS查询；如果目的是获取变量的值，就会使用RHS查询。赋值操作符会导致LHS查询。=操作符或调用函数时候传入参数的操作都会导致关联作用域的赋值操作。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210708212046.png)

## 词法作用域

词法作用域就是定义在词法阶段的作用域。换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变。

词法作用域是一套关于引擎如何寻找变量以及会在何处找到变量的规则。词法作用域最重要的特征是它的定义过程发生在代码的书写阶段。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210708223824.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210708224123.png)

## 函数作用域和块作用域

### 函数中的作用域

无论标识符声明出现在作用域中的何处，这个标识符所代表的变量或函数都将附属于所处作用域的气泡。

函数作用域的含义是指：属于这个函数的全部变量都可以在整个函数的范围内使用及复用。嵌套的作用域中也可以使用。

### 隐藏内部实现

从所写代码中选出一个任意片段，然后用函数声明对它进行包装，实际上就是把这些代码“隐藏”起来了。

“隐藏”作用域中的变量和函数所带来的的另一个好处，是可以避免同名标识符之间的冲突，两个标识符可能具有相同的名字但用途却不一样，无意见可能造成命名冲突。冲突会导致变量的值被意外覆盖。

### 函数作用域

在任意代码片段外部添加包装函数，可以将内部的变量和函数定义“隐藏”起来，外部作用域无法访问包装函数内部的任何内容。

**立即执行函数**

```js
var a = 2

(function foo(){
  var a = 3
  console.log(a)
})()
console.log(a)
```

由于函数被包含在一对`( )`括号内部，因此成为了一个表达式，通过在末尾加上另一个`( )`可以立即执行这个函数，比如`(function foo(){...})()`。第一个`( )`将函数变成表达式，第二个`( )`执行了这个函数。

进阶用法是把它们当作函数调用并传递参数进去。

```js
var a = 2

(function IFEE(global){
  var a = 3
  console.log(a) //3
  console.log(global.a) //2
})(window)
console.log(a) //2
```

我们将`window`对象的引用传递进去，但是将参数命名为`global`,因此在代码风格上对全局对象的引用变得比引用一个没有“全局”字样的变量更加清晰。

高级进阶用法倒置代码的运行数顺序，将需要运行的函数防灾第二位。

```js
(function IFEE(def){
  def(window)
})(function def(global){
  var a  = 3
  console.log(a)
  console.log(global.a)
})
```

### 块作用域

**with**

`with`关键字。它不仅是一个难于理解的结构，同时也是块作用域的一个例子。用`with`从对象中创建出的作用域仅在`with`声明而非外部作用域中有效。

**try/catch**

```js
try{
  undefind() //执行一个非法操作来强制制造一个异常
}catch(err){
  console.log(err) //能够正常执行
}

console.log(err) //ReferenceError:err not found
```

**let**

`let`关键字可以将变量绑定到所在的任意作用域中（通常是{...}内部）。换机话所，let为其声明的变量隐式地劫持了所在的块作用域。

```js
var foo = ture
if(foo){
  let bar = foo*2
  bar = something(bar)
  console.log(bar)
}

console.log(bar) //ReferenceError
```

使用let关键字声明不会再块作用域中进行提升。

1.**垃圾回收**

作用域非常有用的原因和闭包及回收内存垃圾的回收机制相关。

```js
function process(data){
  //do
}
var someReallyBigData = {...}
                         
process(someReallyBigData)
var btn = document.getElementById('my_button')
btn.addEventListener('click',function click(evt){
  console.log("do")
})

//process执行完之后，在内存中占用大量空间的数据结构就可以被垃圾回收了。但是，由于click函数形成了一个覆盖整个作用域的闭包，javascript引擎极有可能依然保存着这个结构。
```

```js
function process(data){
  //do
}
//块级作用域  可以让引擎清楚的知道没有必要继续保存无关哇数据结构了
{
  var someReallyBigData = {...}                        
	process(someReallyBigData)
}
var btn = document.getElementById('my_button')
btn.addEventListener('click',function click(evt){
  console.log("do")
})


```

2.**循环**

```js
for(let i = 0;i<10;i++){
  console.log(i)
}

console.log(i) //ReferenceError
```

for循环头部的let不仅将i绑定到了for玄幻的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。

**const**

除了let以外，ES6还引入了const。

```js
var foo = true

if(foo) {
  var a = 2
  const b = 3 //包含在if中的块作用域常量
  
  a = 3
  b = 4 //错误
}
console.log(a) //3
console.log(b) //ReferenceError
```

## 提升

引擎会在解释JavaScript代码之前首先对其进行编译。编译阶段中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。

```js
a = 2
var a 
console.log(a)  //2

---------->转化为
var a
a = 2
console.log(a) //2





console.log(a) //undefined
var a =2
---------->转化为
var a
console.log(a) //undefined
a = 2

```

先有蛋（声明）后有鸡（赋值）

只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。如果提升改变了代码执行的顺序，会造成非常严重的破坏。

```js
foo()
function foo(){
  console.log(a)
  var a = 2
}
---------->转化为
function foo(){
  var a
  console.log(a) //undefined
  a = 2
}
foo()
```

函数声明会被提升，但是函数表达式却不会提升。

```js
foo() //不是ReferenceError,而是TypeError
var foo = function bar(){
  //....
}
```

即使是具名的函数表达式，名称标识符在赋值之前也无法在所在作用域中使用：

```js
foo() //TypeError
bar() //ReferenceError

var foo = function bar() {
  //...
}
---------->转化为
var foo
foo() //TypeError
bar() //ReferenceError
foo = function() {
  var bar = ....
}
```

函数声明和变量声明都会被提升。但是一个值得注意的细节（出现多个重复的声明的代码中）是函数会首先被提升，然后是变量

```js
foo()
var foo
function(){
  console.log(1)
}
foo = function(){
  console.log(2)
}
---------->转化为
function foo(){
  console.log(1)
}
foo()
foo = function() {
  console.log(2)
}

//var foo尽管出现在function foo()...的声明之前，但它是重复的声明，因为函数声明会被提升到普通变量之前。
```

```js
foo() // foo is not a function

var a = true

if(a){
    function foo(){
        console.log("a")
    }
}else{
    function foo(){
        console.log("b")
    }
}
```

## 作用域闭包

闭包是基于词法作用域书写代码时所产生的自然结果。

当函数可以记住并且访问所在的词法作用域时，就产生了闭包，及时函数是在当前词法作用域之外执行。

```js
function foo() {
  var a = 2
  function bar() {
    console.log(a)
  }
  return bar
}
var baz = foo()
baz()   //2  这就是闭包效果
```

拜bar()所在声明的位置所赐，它拥有涵盖foo()内部作用域的闭包，使得该作用域能够一直存活，以供bar()在之后任何时间进行引用。bar()依然持有对该作用域的引用，而这个引用就叫做闭包。可以访问定义时的词法作用域。

这个函数在定义时的词法作用域以外的值进行传递，当函数在别处被调用时都可以观察到闭包。

```js
function foo(){
  var a = 2
  function baz() {
    console.log(a)
  }
  bar (baz)
}
function bar(fn){
  fn()
}
foo()
```

把内部函数baz传递给bar，当调用这个函数时（现在叫做fn），它涵盖的foo（）内部作用域的闭包就可以观察到了，因为它能够访问a。

```js
var fn

function foo(){
  var a = 2
  function baz(){
    console.log(a)
  }
  fn = baz //将baz分配给全局变量
}

function bar(){
  fn() //闭包
}
foo()
bar() //2
```

无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。

 ```js
 function wait(message){
   setTimeout(function timer(){
     console.log(message)
   },1000)
 }
 wait("hello,closure!")
 
 
 
 function setupBot(name,selector){
   $(selector).click(function activator(){
     console.log("Activating:" + names)
   })
 }
 setupBot("Closure Bot 1","#bot_1")
 setupBot("Closure Bot 2","#bot_2")
 ```

定时器、事件监听器、Ajax请求、跨窗口通信、Web Workers或者任何其他的异步 （或者同步）任务中，只要使用了**回调函数**，实际上就是在使用闭包。

```js
for(var i = 1;i<=5;i++){
  setTimeout(function timer(){
    console.log(i)   // 6 6 6 6 6
  },i*1000)
}
//他们都被封闭到一个共享的全局作用域中，因此实际上只有一个i。

//修改之后
//声明一个立即执行函数来创建作用域
for(var i = 1;i<=5;i++){
  (function(){
    var j = i
    setTimeout(function timer(){
      console.log(j)
    },j*1000)
  })()
}
for(var i = 1;i<=5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    },j*1000)
  })(i)
}
```

每次迭代我们需要一个**块作用域**。`let`

```js
for(let i = 1;i<=5;i++){
  setTimeout(function timer(){
    console.log(i)   // 1 2 3 4 5 6
  },i*1000)
}

// 块作用域和闭包联手便可天下无敌。
```

与回调无关的。**模块**

```js
//函数闭包模块
function CoolModule(){
  var something = "cool"
  var another = [1,2,3]
  function doSomethig(){
    console.log(somethin)
  }
  function doAnother(){
    console.log(another.join("!"))
  }
  return {
    doSomethig,
    doAnother
  }
}
var foo = CoolModule()

foo.doSomething() //cool
foo.doAnother() //1!2!3!

```

模块模式需要具备两个必要条件。

1. 必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块实例）。
2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以返回或者修改私有的状态。

```js
//只要一个实例时候，使用单例模式    也就是立即执行函数
var foo = (function CoolModule(){
  var something = "cool"
  var another = [1,2,3]
  function doSomethig(){
    console.log(somethin)
  }
  function doAnother(){
    console.log(another.join("!"))
  }
  return {
    doSomethig,
    doAnother
  }
})()

foo.doSomething() //cools
foo.doAnother() //1!2!3!
```

模块也是普通函数，可以接受参数。

```js
function CoolModule(id){
  function identify(){
    console.log(id)
  }
  return {
    identify
  }
}
var foo1 = CoolModule("foo 1")
var foo2 = CoolModule("foo 2")
foo1.identify() //"foo 1"
foo2.identify() //"foo 2"
```

模块模式另一个简单但强大的用法是命名将要作为公共API返回的对象。

```js
var foo = (function CoolModule(){
	function change(){
    publicApi.identify = identify2
  }
  function identify1(){
      console.log(id)
  }
  function identify2(){
      console.log(id.toUpperCase())
  }
  var publicAPI = {
    change,
    identify
  }
  return publicApi
})("foo module")

foo.identify() //foo module
foo.change()
foo.identify2() //FOO MODULE
```

现代模块化机制

```js

var MyModules = (function Manger(){
    var module = {};
    
    function define(name,deps,impl){
        for(var i=0;i<deps.length;i++>){
            deps[i] = module[deps[i]]
        }
        module[name] = impl.apply(impl,deps)
    }
    function get(name){
        return module[name]
    }
    return {
        define,
        get
    }
})()


MyModules.define('bar',[],function(){
    function hello(who){
        return "Let me introduce: "+ who
    }
    return { 
        hello
    }
})
MyModules.define('foo',['bar'],function(){
    var hungry = "hippo"
    function awesome(){
        console.log(bar.hello(hungry).toUpperCase());
    }
    return {
        awesome
    }
})
var bar = MyModules.get("bar")
var foo = MyModules.get("foo")

console.log(bar.hello('hippo'))

foo.awesome()

//foo和bar模块都是通过一个返回公共api的函数来定义的。foo甚至接受bar的实例作为依赖参数，并且相应地使用它。
```

未来的模块化机制

```js
bar.js
function hello(who){
  return "xxx"
}
export hello



foo.js
import hello from "bar"
var hungry = "hippo"
function awesome(){
  console.log(hello(hungry).toUpperCase())
}
export awesome



baz.js
module foo from "foo"
module bar from "bar"
console.log(bar.hello("rhino"))
foo.awesome()
```

**当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包**。

## 关于this

this关键字是JavaScript是最复杂的机制之一。

```js
function identify() {
  return this.name.toUpperCase()
}
function speak() {
  let greeting = "Hello,I'm" + identify.call(this)
  console.log(greeting)
}
let me = {
  name:'Kyle'
}
let you = {
  name:'Reader'
}

identify.call(me) //KYLE
identify.call(you) //READER

speak.call(me) //Hello,我是KYLE
speak.call(you) //Hello,我是READER
```

this提供一种更优雅的方法来隐私“传递”一个对象引用，因此可以将API设计得更加简洁并且易于复用。随着你的使用模式原来越复杂，显示。

```JS
//
//误解1:指向自身
//
function foo(num){
  console.log("foo: " + num)
  
  //记录foo被调用的次数
  this.count++
}
foo.count = 0
for(i = 0;i<10;i++){
  if(i>5){
    foo(i)
  }
}
console.log(foo.count) //0 




function foo(num){
  console.log("foo: " + num)
  
  //记录foo被调用的次数
  foo.count++
}
foo.count = 0
for(i = 0;i<10;i++){
  if(i>5){
    foo(i)
  }
}
console.log(foo.count) //4




function foo(num){
  console.log("foo: " + num)
  
  //记录foo被调用的次数  在当前的调用方式下（参考下方代码），this确实指向foo
  this.count++
}
foo.count = 0
for(i = 0;i<10;i++){
  if(i>5){
    foo.all(foo,i)
  }
}
console.log(foo.count) //4







//
//误解2:它的作用域  this指向函数作用域
//
// this在任何情况下都不指向函数的词法作用域。
function foo(){
  var a = 2
  this.bar()
}
function bar(){
  console.log(this.a)
}
foo() //ReferenceError:a is not defined
```

每当你想把this和词法作用域的查找混合使用的时，一定要提醒自己，这是无法实现的。

**this绑定和函数声明的位置没有任何关系，只取决于函数的调用方式**。

**当一个函数被调用的时，会创建一个活动记录（执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this就是记录的其中一个属性，会在函数执行的过程中用到。**

**this实际上是在函数被调用时发生的绑定的，它指向什么完全取决于函数在哪里被调用。**





## this的全面解析

排除了一些对this的错误理解并且明白了每个函数的this是在调用时绑定的，完全取决于函数的调用位置（函数的调用方法）。

### 调用位置

理解调用位置：调用位置就是函数在代码中被调用的位置（而不是声明位置）。

最重要的就是分析调用栈（就是为了到达当前执行位置所调用的所有函数）。

```js
function baz(){
  // 当前调用栈是baz
  // 因此当前调用位置是全局作用域
  console.log("baz")
  bar()//<--bar调用位置
}
function bar()
  // 当前调用栈是baz -> bar 
  // 因此当前调用位置在baz中
  console.log("bar")
  foo() //<--foo调用位置
}
function foo(){
  // 当前调用栈是baz -> bar -> foo
  // 因此当前调用位置在bar中
  console.log("foo")
}
baz() //<--baz的调用位置
```

### 绑定规则

1. **默认绑定**

首先是最常用的函数调用类型：独立函数调用。

```js
function foo(){
  // 函数调用的时候应用了this的默认绑定，因此this指向全局对象。
  console.log(this.a)
}
var a = 2
foo() // 2
```

在非严格模式下this的默认绑定，因此this指向全局对象。在严格模式下this会绑定到undefined。

```js
function foo(){
  "use strict"
  console.log(this.a)
}
var a = 2
foo() // TypeError:this is undefined
```

2. **隐式绑定**

调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。

```js
function foo(){
  console.log(this.a)
}
var obj = {
  a:2,
  // foo()是声明式的，无论直接在obj中定义还是先定义再添加为引用属性，这个函数严格来说都不属于obj对象
  foo:foo
}
obj.foo() //2
```

然而，调用位置会使用`obj`上下文来引用函数，因此你可以说函数被调用时obj对象“拥有”或者“包含”函数引用。

当函数引用有上下文对象时，`隐式绑定`规则会把函数调用中的`this`绑定到这个上下文对象。因为调用`foo()`时this被绑定到`obj`，因此`this.a`和`obj.a`是一样的。

**对象引用链中只有上一层或者最后一层在调用位置起作用**

```js
function foo(){
  console.log(this.a)
}
var obj2 = {
  a:42,
  foo:foo
}
var obj1 = {
  a:2,
  obj2:obj2
}
obj1.obj2.foo() //42  this绑定的只有上一层或者最后一层在调用位置起作用
```

**隐式丢失**

一个最常见的this绑定问题就是`隐式绑定`的函数会丢失绑定的对象，也就是说它会应用`默认绑定`，从而把`this`绑定到全局对象或者`undefined`上，取决于是否严格模式。

```JS
function foo(){
  console.log(this.a)
}
var obj = {
  a:2,
  foo:foo
}
var bar = obj.foo //函数别名
var a = "oops,global" //a是全局对象的属性
//  this绑定的只有上一层或者最后一层在调用位置起作用
bar() // "oops,global" 
```

```js
function foo(){
  console.log(this.a)
}
function doFoo(fn){
  //fn其实引用的是foo
  fn() //<--调用位置
}
var obj = {
  a:2,
  foo:foo
}
var a = "opp,global" //a是全局对象的属性
doFoo(obj.foo) //"oops,global" 
```

```js
function foo(){
  console.log(this.a)
}
var obj = {
  a:2,
  foo:foo
}
var a = "opp,global" //a是全局对象的属性
setTimeout(obj.foo,100) //"opp,global"
```

回调函数丢失`this`绑定是非常常见的。调用回调函数的函数可能会修改`this`。在一些流行的JavaScirpt库中事件处理器常会把回调函数的`this`强制绑定到触发事件的`DOM`元素上。

3. **显示绑定**

使用自带函数`call() apply()`方法。它们第一个参数是对象，它们会把这个对象绑定到this，接着调用函数时指定这个`this`。

你可以直接指定`this`的绑定对象，因此我们称之为显示绑定。

```js
function foo(){
  console.log(this.a)
}
var obj = {
  a:2,
}
foo.call(obj) //2   强制吧this绑定在obj上
```

如果你传入了原始值（字符串类型，布尔类型，数字类型）来当作this的绑定对象，这个原始值会被转成它的对象形式（`new String(...)、new Boolean(...)或者new Number()`）。这个称为装箱。

`显示绑定`仍然无法解决我们之前提出的的丢失绑定问题。

- 硬绑定

```js
function foo(){
  console.log(this.a)
}

var obj = {
  a:2
}

var bar = function(){
  foo.call(obj)
}

bar() //2
setTimeout(bar,100) //2
// 硬绑定的bar不可能再修改它的this
bar.call(window) //2	
```

我们创建了函数`bar()`，并在它的内部手动调用了`foo。call(obj)`，因此强制把`foo`的`this`绑定到了`obj`。无论之后如何调用函数`bar`，它总会手动在`obj`上调用`foo`。这种绑定是一种显式的强制绑定，因此我们称之为`硬绑定`。

**硬绑定的典型应用场景就是创建一个包裹函数，传入所有的参数并返回接收到的所有值。**

```js
function foo(something){
  console.log(this.a,something)
}

var obj = {
  a:2
}

var bar = function(){
  return foo.apply(obj,argument)
}

var b = bar(3)  // 2 3
console.log(b)  // 5





function foo(something){
  console.log(this.a,something)
  return this.a + something
}
// 简单的辅助绑定函数
function bind(fn,obj){
  return function() {
    return fn.apply(obj,argument)
  }
}
var bar = bind(foo,obj)

var b = bar(3) //2 3
console.log(b) // 5




//es5
function foo(something){
  console.log(this.a,something)
  return this.a + something
}
var bar = foo.bind(obj)
var b = bar(3) //2 3
console.log(b) // 5
```

- API调用的“上下文”

一些函数都提供了一个可选参数，通常被称为“上下文(context)”，其作用和`bind(...)`一样，确保你的回调函数使用指定的`this`。

```js
function foo(el){
  console.log(el,this.id)
}
var obj = {
  id:"awesome"
}
// 调用foo(...)时候this绑定到obj
[1,2,3].forEarch(foo,obj)
```

4. **new绑定**

`JavaScript`中的“构造函数”。在`JavaScript`中，构造函数只是一些使用`new`操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。它们只是被`new`操作符调用的普通函数而已。

使用`new`来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。

- 创建（或者说构造）一个全新的对象。
- 这个新对象会被执行【【原型】】连接
- 这个新对象会被绑定到函数调用的this
- 如果函数没有返回其对象，那么new表达式中的函数会自动返回这个现对象

```js
function foo(a) {
  this.a =  a
}
var bar = new foo(2)
console.log(bar.a) //2
```

使用`new` 来调用`foo(...)`时，我们会构造一个新的对象并把它绑定到`foo(...)`调用中的`this`上。`new`是最后一种可以影响调用时`this`绑定行为的方法。

### 优先级

显示绑定 > new绑定 > 隐式绑定

1. **判断this**

现在我们可以根据优先级来判断函数在某个位置应用的是那条规则。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210717150319.png)

### 绑定列外

- **被忽略的`this`**

如果你把`null`或者`undefined`作为`this`的绑定对象传入`call`、`apply`或者`bind`。这些值在调用时会被忽略，实际应用的是默认绑定规则。

```js
function foo(){
  console.log(this.a)
}
var a = 2
foo.call(null) //2



function foo(a,b){
  console.log("a:" + a +",b:"+b)
}
// 把数组”展开“成参数
foo.apply(null,[2,3]) //a:2,b:3
// 使用bind(...)进行柯里化
var bar = foo.bind(null,2)
bar(3) //a:2,b:3
```

这两种方法都需要传入一个参数当做`this`的绑定对象。如果函数并不关心`this`的话，你仍然需要传入一个占位值，这时`null`可能是一个不错的选择。

**更安全的`this`**

一种”更安全“的做法是传入一个特殊对象，把`this`绑定到这个对象不会对你的程序产生任何副作用。使用一个空的非委托对象（`DMZ`）。

```js
function foo(a,b){
  console.log("a:" + a +",b:"+b)
}
//我们的DMZ空对象
var ø = Object.create(null)
// 把数组”展开“成参数
foo.apply(ø,[2,3]) //a:2,b:3
// 使用bind(...)进行柯里化
var bar = foo.bind(ø,2)
bar(3) //a:2,b:3
```

直接可以看出来我们希望这`this`是空的。

- 间接引用

有可能（有意无意的）创建一个函数的”间接引用“,在这中情况下，调用这个函数会应用默认绑定规则。

`间接引用`最容易发在赋值时发生：

```js
function foo(){
  console.log(this.a)
}
var a = 2 
var o = {a:3,foo:foo}
var p = {a:4}
o.foo() //3
(p.foo = o.foo)() //2
```

赋值表达式`p.foo = o.foo`的`返回值`是`目标函数的引用`，因此调用位置是`foo()`而不是`p.foo()`或者`o.foo()`。会应用默认绑定。

:::tip 注意

注意：对于默认绑定来说，决定`this`绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。如果函数体处于严格模式，`this`会被绑定到`undefined`，否则`this`会被绑定到全局对象。

:::

- 软绑定 ????????????

硬绑定这种方式可以把`this`强制绑定到指定的对象（除了使用`new`时），防止函数调用应用默认绑定规则。问题在于，硬绑定会大大降低函数的灵活性，使用硬绑定之后就如法使用隐式或者显示绑定修改`this`。

可以给默认绑定指定一个全局对象和`undefined`以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显示绑定来修改`this`的能力。

```js
if(!Function.prototype.softBind){
  Function.prototype.softBind = function(obj){
    var fn = this
    // 获取所有curried参数
    var curried = [].slice.call(arguments,1)
    var bound = function(){
      return fn.apply(
      	(!this || this === (window || global)) ? obj : this
        curried.concat.apply(curried,arguments)
      )
    }
    bound.prototype = Object.create(fn.prototype)
    return bound
  }
}





function foo(){
  console.log("name:" + this.name)
}
var obj = {name:"obj"},
    obj2 = {name:"obj2"},
    obj3 = {name:"obj3"}
var fooOBJ = foo.softBind(obj)
fooOBJ()  //name:obj
obj2.foo = foo.softBind(obj)
obj2.foo() //name:obj2   <----看！！！
fooOBJ.call(obj3) //name: obj3   <----看！！！
setTimeout(obj2.foo,10) //name:obj   <----应用了软绑定
```

首先检查调用时的`this`，如果`this`绑定到全局对象或者`undefined`，那就把指定的默认对象`obj`绑定到`this`否则不会修改`this`。这段代码还支持可选柯里化。

### this词法

箭头函数不使用`this`的四种标准，而是根据外层（函数或者全局）作用域来决定`this`。

```js
function foo(){
  //返回一个箭头函数
  return (q) => {
    //this继承自foo()
    console.log(this.a)
  }
}
var obj1 = {
  a:2
}
var obj2 = {
  a:3
}
var bar = foo.call(obj1)
bar.call(obj2) //2,不是3！
```

`foo()`内部创建的箭头函数会捕获`foo()`的`this`绑定到`obj1`,`bar`(引用箭头函数)的`this`也会被绑定到`obj1`，箭头函数的绑定无法修改。

```js
function foo(){
  setTimeout(() => {
    //这里的this在词法上继承自foo()
    console.log(this.a)
  })
}
var obj1 = {
  a:2
}
foo.call(obj) //2
```

### 小结

- 由`new`调用？绑定到县创建的对象。
- 由`call`或者`apply`（或者`bind`）调用？绑定到指定对象。
- 由上下文对象调用？绑定到那个上下文对象。
- 默认：在严格模式下绑定到`undefined`，否则绑定到全局对象。

一定要注意，有些调用可能无意中使用默认绑定规则。如果想”更安全“地忽略`this`绑定，你可使用一个`DMZ`对象，比如`ø = Object.cerate(null)`,以保护全局对象。

ES6的箭头函数并不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定`this`，具体来说，箭头函数会继承外层函数的`this`绑定（无论`this`绑定到什么）。

## 对象

### 语法

对象定义的两种形似：**声明（文字）**和**构造形式**。

```js
// 对象的文字
var myObj = {
  key:value
}
// 构造形式
var myObj = new Object()
myObj.key = value
```

### 类型

JavaScript中一共有六种主要类型（术语是“语言类型”）。

- string
- number
- boolean
- null
- undefined
- object

**内置对象**

对象的子类型，通产称为内置对象。

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

JavaScript会自动把字面量转换为相应的对象。

`null`和`undefined`没有对应的构造形式，它们只有文字形式。相反，`Date`只有构造，没有文字形式。

### 内容

对象的内容是由一些存储在特定命名位置的（任意类型）值组成的，我们称之为属性。

存储在对象容器内部的是这些属性的名称，它们就像指针（引用）一样，指向这些值真正的存储位置。

```js
var myObject = {
  a : 2
}
myObject.a; //2    属性访问
myOject['a'] //2   键访问
```

1. **可计算属性名**

ES6增加了`可计算属性名`，可以在文字形式中使用`[]`包裹一个表达式来当作属性名字。

```js
var perfix = "foo"

var myObject = {
  [prefix + "bar"]:"hello",
  [prefix + "baz"]:"world"
}
myObject["foobar"];//hello
myObject["foobaz"];//world


var myObject = {
  [Symbol.something]:"hello world"
}
```

2. **属性和方法**

```js
function foo(){
  console.log("foo")
}
var someFoo = foo //对foo的变量引用
var myObjetct = {
  someFoo:foo
}
foo; //function foo(){...}
someFoo; //function foo(){...}
myObject.someFoo //function foo(){...}
```

`someFoo`和`myObject.someFoo`知识对于同一个函数的不同引用，并不能说明这个函数是特别的或者”属于“某个对象。如果`foo()`定义时在内部有一个`this`引用，那这两个函数引用的唯一区别就是`myObject.someFoo`中的`this`会被隐式绑定到一个对象。无论哪种引用形式都不能称之为”方法“。

即使你在对象的文字形式中声明一个函数表达式，这个函数也不会”属于“这个对象-它们只是对于相同函数对象的多个引用。

```js
var myObjetc = {
  foo:function(){
    console.log("foo")
  }
}
var someFoo = myObject.foo
someFoo //function foo(){...}
myObject.foo //function foo(){...}
```

3. **数组**

```js
var myArray = ['foo',42,'bar']
myArray.length //3
```

数组当做一个普通的键/值对象来使用，并且不添加任何数值索引。

对象来存储键/值对，只用数组来存储数值下标/值对。

4. **赋值对象**

```js
function anotherFunction(){ /* ...*/ }

var anotherObject = {
  c:true
}

var anotherArray = []

var myObject = {
  a:2,
  b:anotherObject, //引用，不是复本
  c:anotherArray, //另一个引用
  d:anotherFunction
}
anotherArray.push(anotherObject,myObject)

```

首先判断是`浅拷贝`还是`深拷贝`。

```js
//深复制
var newObj = JSON.parse(JSON.stringify(someObj))


//浅复制
var newObj = Object.assign({},myObject)
newObj.a //2
newObj.b === anotherObject //true
newObj.c === anotherArray //true
newObj.d === anotherFunction //true
//源对象属性的一些特性（比如writable）不会被复制到目标对象。
```

5. **属性描述符**

从ES5开始，所有的属性都具备了属性描述符。

```js
var myObject = {
  a:2
}

Object.getOwnPropertyDescriptor(myObject,"a")
/*
{ 
  value: 2,  //值
  writable: true,  //可写
  enumerable: true,  //可枚举
  configurable: true  //可配置
}
*/
```

创建普通属性时属性描述符会使用默认值，我们也可以使用`Object.defineProperty(..。)`来添加一个新属性或者修改一个已有属性。

```js
var myObject = {}

Object.defineProperty(myObject,"a",{ 
  value: 2,  //值
  writable: true,  //可写
  enumerable: true,  //可枚举
  configurable: true  //可配置
})
myObject.a //2
```

如果对象的某个属性是某个对象/函数的最后一个`引用者`对这个属性执行`delete`操作之后，这个未引用的对象/函数就可以被垃圾回收。

6. **不变性**

希望属性或者对象时不可改变的。有很多多种方法。所有的方法创建的都是浅不变性，也就是说，它们只会影响目标对象和它的直接属性。如果目标对象引用了其他对象（数组,对象，函数等），其他对象的内容不受影响，仍然可变。

```js
myImmutableObject.foo //[1,2,3]
myImmutableObject.foo.push(4)
myImmutableObject.foo //[1,2,3,4]
```

- **对象常量**

结合`writable:false`和`configurable:false`就可以创建一个真正的常量属性（不可修改、重定义或者删除）。

```js
var myObject = {}
Object.defineProperty(myObject,"FAVORITE_NUMBER",{
  value:2,
  writable:false,
  configurable:false
})
```

- **禁止扩展**

禁止一个对象添加新属性并且保留已有属性。

```js
var myObject = {
  a:2
}

Object.preventExtensions(myObject)

myObject.b = 3
myObject.b //undefined
//在非严格模式下，创建属性b会静默失败。在严格模式下，将会抛出TypeError错误
```

- **密封**

`Object.seal(...)`会创建一个密封的对象，这个方法实际上就是表用了`Object.preventExtensions(...)`并把所有现有属性标记为`configurable:false`。

所以，密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性（虽然可以修改属性的值）。

- **冻结**

`Object.freeze(...)`会创建一个冻结对象，这个方法实际上就是表用了`Object.seal(...)`并把所有现有属性标记为`writable:false`。这样就无法修改它们的值。

这个方法是你可以应用在对象上的级别最高的不可变性，它会禁止对于对象及其任意直接属性修改。（引用其他对象时不受影响的）

”深度冻结“一个对象。首先在一个对象上调用`Object.freeze(...)`然后遍历它引用的所有对象并在这些对象上调用`Object.freeze(...)`。但是一定要小心，因为这样做有可能会在无意中冻结其他（共享）对象。

7. **[[Get]]**

```js
var myObject = {
  a:2
}
myObject.a //2    [[[Get]]()]
```

8. **[[Put]]**

`[[Put]]`来设置或者创建这个属性。但是`[[Put]]`被触发时，实际的行为取决于许多因素，包括对象中是否已经存在这个属性。

- 属性是否是访问描述符？如果是并且存在`setter`就调用`setter`。
- 属性的数据描述符中的`writable`是否为`false`?如果是，非严格模式下静默失败，在严格模式下抛出`TypeError`异常。
- 如果都不是，就将该值设置为属性值。

9. **Getter和Setter**

对象默认的`[[Put]]`和`[[Get]]`操作分别可以控制属性值的设置和获取。

改写整个对象（不仅仅是某个属性）的默认`[[Put]]`和`[[Get]]`操作。

使用`setter和getter`，部分改写默认操作，只能应用到单个属性上，无法使用在整个对象上。

```js
var myObject = {
  // a定义一个getter
  get a(){
    return 2
  }
}
Object.defineProperty("myObject",b,{
  //描述符
  //给b设置一个getter
  get:function(){
    return this.a * 2
  }
  //确保b会出现在对象的属性列表中
  enumerable:true
})
myObject.a //2
myObject.a //4
```

```js
var myObject = {
  // a定义一个getter
  get a(){
    return this._a_
  }
  set a(val){
    this._a_ = val * 2
  }
}
myObject.a = 2
myObject.a //4
```

10. **存在性**

判断对象中是否存在这个属性：

```js
var myObject = {
  a:2
}
("a" in myObject) //true
("b" in myObject) //false
myObject.hasOwnProperty("a")//true
myObject.hasOwnProperty("b")//false


Object.prototype.hasOwnProperty(myObject,"a")//true
```

in运算符实际上检查的是某个属性名是否存在，不是值是否存在。

```js
var myObject = {};

Object.defineProperty(myObject,"a",{
  enumerable:true,
  value:2
})
Object.defineProperty(myObject,"b",{
  enumerable:false,
  value:3
})
myObject.b //3
("b" in myObject) //true
myObject.hasOwnProperty("b") //true

for(var key in myObject){
  console.log(key)//a
}

myObject.propertyIsEnumerable("a") //true
myObject.propertyIsEnumerable("b") //false

Object.keys(myObject) //['a']
Object.getOwnPropertyNames(myObject) //['a','b']
```

### 遍历

`for...in...`遍历对象是无法直接获取属性值的，因为实际上遍历的是对象中的所有可枚举属性，需要动手获取属性值。

使用`for...of..`遍历对象。

```js
var myObject = {
  a:2,
  b:3
}
Object.defineProperty(m,Object,Symbol.iterator,{
  enumerable:false,
  writable:false,
  configurable:true,
  value:function(){
    var o = this
    var indx =0
    var ks = Object.keys(o)
    // 闭包
    return {
      next:function(){
        return {
          value:o[ks[indx++]],
          done:(indx > ks.length)
        }
      }
    }
  }
})
var it = myObject[Symbol.iterator]()
it.next() //{value:2,done:false}
it.next() //{value:3,done:false}
it.next() //{value:undefined,done:true}

for(var v of myOject){
  console.log(v)
}
```

## 混合对象"类"

在子类（而不是它们创建的实例对象！）中也可以相对引用它继承的父类，这种`相对`引用通常被称为`super`。

子类得到的仅仅是继承自父类行为的一份副本。子类对继承到的一个方法进行”重写“，不会影响父类中的方法，这两个方法互不影响，因此才能使用相对多态引用访问父类中的方法。（如果重写会影响父类的方法，那重写之后父类中的原始方法就不存在了，自然也无法运用）。

多态并不表示子类和父类有关联，子类得到的只是父类的一份副本。类的继承其实就是复制。

模拟类的复制行为（继承）,这个方法就是`混入`。

1. **显示混入**

```js
function mixin(sourceObj,targetObj){
  for(var key in sourceObj){
    if(!(key in targetObje)){
      targetObj[key] = sourceObj[key]
    }
  }
  return targetObj
}
var Vehicle = {
  engines:1,
  ignition:function(){
    console.log("Turning on my engine")
  },
  dirve:function(){
    this.ignition()
    console.log("Steering and moving forward")
	}
}

var Car = mixin(Vehicle,{
  wheels:4,
  drive:function(){
    Vehicle.dirve.call(this)
    console.log("Rolling on all" + this.wheels+" wheels!")
  }
})
```

2. **寄生继承**

```js
function Vehicle() {
    this.engines = 1
}

Vehicle.prototype.igniton = function () {
    console.log("Turning on my engine")
}

Vehicle.prototype.drive = function (){
    this.igniton()
    console.log("Steering and moving forward")
}

function Car() {
    let car = new Vehicle()
    car.wheels = 4
    let vehDriver = car.drive
    car.drive  = function (){
        vehDriver.call(this)
        console.log("Rolling on all" + this.wheels + " wheels")
    }
    return car
}
let myCar = new Car()
myCar.drive()
Turning on my engine
Steering and moving forward
Rolling on all4 wheels
```

3. **隐式混入**

```js
let Something = {
    cool:function(){
        this.greeting = "Hello World"
        this.count = this.count ? this.count + 1 :1
    }
}
Something.cool()
Something.greeting
Something.count

let Another = {
    cool:function(){
        //隐式的吧Something混入Another
        Something.cool.call(this)
    }
}
Another.cool()
Another.greeting
Another.count
```

## 原型

### [[Prototype]]

`JavaScript`中的对象有一个特殊的`[[Prototype]]`内置属性，其实就是对于其他对象的引用。几乎所有的对象在创建时候`[[Prototype]]`属性都会被赋予一个非空值。

```js
//创建一个关联到anotherObject的对象
var myObject = Object.create(anotherObjetc)
for(var k in myObject){
  console.log("found:" + k)
}
("a" in myObject)
```

通过各种语法进行属性检查查找都会查找`[[Prototype]]`链，直到找到属性或者查找完整条原型链。

1. **Object.prototype**

所有`普通`的`[[Prototype]]`链最终都会指向内置的`Object.prototype`。由于所有的“普通”(内置，不是特定主机的扩展)对象都“源于”(或者说把`[[Prototype]]`链的顶端设置为)这个`Object.prototype`对象，所有它包含`JavaScript`中许多通用的功能。

2. **属性设置和屏蔽**

```js
myObject.foo = "bar"
```

如果`foo`不是直接存在于`myObject`中，`[[Prototype]]`链就会被遍历，类似`[[Get]]`操作。如果原型链上找不到`foo`，`foo`就会被直接添加到`myObject`上。

如果属性名`foo`即出现在`myObject`中也出现在`myObject`的`[[Prototype]]`链上层，那就会发生屏蔽。`myObject`中包含的`foo`属性会屏蔽原型链上层的所有`foo`属性，因为`myObject.foo`总会选择原型链中最底层的`foo`属性。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210722075842.png)

如果需要屏蔽方法进行委托的话就不得不使用丑陋的显示伪多态。

```js
var anotherObejct = {
  a:2
}
var myObject = Obejct.create(anotherObject)
anotherObject.a //2
myObject.a //2
anotherObejct.hasOwnPrototype("a") //true
myObject.hasOwnPrototype("a") //false

myObject.a++ //隐式屏蔽！myObject.a = myObject.a + 1

anotherObject.a //2
myObject.a //3    
myObject.hasOwnPrototype("a") //true
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210722080657.png)

### **类**

在`JavaScript`中，类如法描述对象的行为（因为根本不存在类！）对象直接定义自己的行为。`JavaScript`中只有对象。

1. **类函数**

```js
function Foo(){
	//....
}
Foo.prototype; //{}
```

通过调用`new Foo()`创建的每个对象将最终被`[[Prototype]]`链接到这个`“Foo.prototype”`对象。

```js
function Foo(){  
  //....
}
var a = new Foo()
Object.getPrototypeOf(a) === Foo.protptype //true
```

通过调用`new Foo()`创建`a`,`a`内部的`[[Prototype]]`链接到这个`“Foo.prototype”`对象。

最后我们得到了两个对象，他们之间相互关联，就是这样。我们并没有初始化一个类，实际上我们并没有从“类”中复制任何行为到一个对象中，只是让两个对象相互互联。

**关于名称**

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210722082657.png)

继承意味着复制操作，`Javascript`（默认）并不会复制对象属性。相反，`Javascript` 会在两个对象之间创建一个关联，这样一个对象就可以通过`委托`访问另一个对象的属性和函数。`委托`这个术语可以更加准确地描述 `Javascript` 中对象的关联机制。

还有个偶尔会用到的 Javascript 术语`差异继承`。基本原则是在描述对象行为时，使用其`不同于普遍描述的特质`。举例来说，描述汽车时你会说汽车是有四个轮子的一种交通工具，但是你不会重复描述交通工具具备的通用特性（比如引擎）。

但是和原型继承一样，差异继承会更多是你脑中构建出的模型，而非真实情况。它忽略了个事实，那就是对象` B `实际上并不是被差异构造出来的，我们只是定义了` B` 的一些指定特性，其他没有定义的东西都变成了“洞”。而这些洞（或者说缺少定义的空白处）最终会被委托行为“填满”。

默认情况下，对象并不会像差异继承暗示的那样通过复制生成。因此，差异继承也不适合用来描述 Javascript 的[[Prototype]]机制。

1. **构造函数**

```js
function Foo(){
  // ...
}
var a = new Foo()



function Foo(){
  // ...
}
Foo.prototype.constructor === Foo //true
var a = new Foo()
a.constructor === Foo //true
```

`Foo. Prototype` 默认（在代码中第一行声明时！）有一个公有并且不可枚举的属性。`.constructor`，这个属性引用的是对象关联的函数（本例中是 `Foo`）。可以看到通过`“构造函数”`调用 `new Foo（）`创建的对象也有一个，`constructor` 属性，指向“创建这个对象的函数”。

- **构造函数还是调用**

当你在普通的函数调用前面加上 `new` 关键字之后，就会把这个函数调用变成一个`“构造函数调用”`。实际上，`new` 会劫持所有普通函数并用`构造对象的形式来调用它`。

```js
function NothingSpecial(){
  cosole.log("Dont't mind me!")
}
var a = new NothingSpecial()
 // Dont't mind me!

a // {}
```

`Nothingspecial` 只是一个普通的函数，但是使用 `new` 调用时，它就会构造一个对象并赋值给 `a`，这看起来像是 `new` 的一个副作用（无论如何都会构造一个对象）。这个调用是一个构造函数调用，但是 `NothingSpecial `本身并不是一个构造函数。

换句话说，在 `Javascript` 中对于“构造函数”最准确的解释是，所有带 `new` 的函数调用。函数不是构造函数，但是当且仅当使`用 new 时，函数调用会变成“构造函数调用”`

2. **技术**

```js
function Foo(name){
    this.name = name
}
Foo.prototype.myName = function(){ 
    return this.name
}
var a = new Foo("a")
var b = new Foo("b")
 
a.myName() //a
b.myName() //b
```

因此，在创建的过程中，`a` 和` b` 的内部`[[Prototype]]`都会`关联`到` Foo. Prototype `上。当 `a` 和` b `中无法找到`myName` 时，它会通过`委托`在` Foo. Prototype `上找到。

实际上，`.constructor` 引用同样被`委托`给了` Foo. Prototype`，而 `Foo. Prototype. constructor `默认指向 Foo。

`Foo. Prototype `的 `constructor` 属性只`是 Foo 函数`在`声明时的默认属性`。如果你创建了一个新对象并替换了函数默认的`.prototype `对象引用，那么新对象并`不会`自动获得`.constructor 属性`。

```js
function Foo(){ /*....*/ }
Foo.prototype = { /*....*/ } //创建一个新原型对象

var a1 = new Foo()
a1.constructor === Foo //false
a1.constructor === Object //true
```

`a1 `并没有，`constructor` 属性，所以它会委托`[[Prototype]]`链上的` Foo.prototype`。但是这个对象也没有，`constructor` 属性（不过默认的` Foo.prototype `对象有这属性！），所以它会继续委托，这次会委托给委托链顶端的` Object. prototype`。这个对象有`constructor` 属性，指向内置的` Object（）`函数。

```js
function Foo(){ /*....*/ }
Foo.prototype = { /*....*/ } //创建一个新原型对象

// 需要修复在Foo.prototype上修复丢失的.constructor属性
// 新对象属性起到Foo.prototype的作用
Object.defineProperty(Foo.prototype,"constructor",{
    enumerable:false,
    writable:false,
    configurable:true,
    value:Foo //让.constructor指向Foo
})
```

`.constructor `并不是一个不可属性。它是不可枚举的，但是它的值是可写的（可以被修改）。此外，你可以给任意`[[Prototype]]`链中的任意对象添加一个名为 `constructor` 的属性或者对其进行修改，你可以任意对其赋值。

和`[[Get]]`算法査找`[[Prototype]]`链的机制一样，`.constructor `属性引用的目标可能和你想的完全不同。

### (原型)继承

实际上，我们已经了解了通常被称作`原型继承`的机制，`a` 可以“继承”`Foo.prototype `并访问` Foo.prototype `的 `myName（）`函数。但是之前我们只把继承看作是类和类之间的关系。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210725075842.png)

展示出对象（实例）`a1` 到` Foo.prototype` 的`委托`关系，还展示出` Bar.prototype` 到` Foo.prototype `的`委托`关系，而`后者和类继承很相似`，只有箭头的方向不同。`图中由下到上的箭头表明这是委托关联，不是复制操作`。

典型的”原型风格“继承

```js
function Foo(name){
  this.name = name
}
Foo.prototype.myName = function(){
  return this.name
}
function Bar(name,label){
  Foo.call(this,name)
  this.label = label
}
// 我们创建了一个新的Bar.prototype的对象并关联到Foo.prototype
Bar.prototype = Object.create(Foo.prototype)

// 注意！现在没有Bar.prototype.constructor了
// 如果你需要这个属性的话可能需要手动修复一下
Bar.prototype.myLabel = function(){
  return this.label
}
var a = new Bar("a","obj a")
a.myName() //"a"
a.myLabel() //"obj a"
```

这段代码的核心部分就是语句` Bar.prototype=Object.create (Foo.prototype）`。调用`Object.create (..) `会凭空创建一个“新”对象并把新对象内部的`[[Prototype]]`关联到你指定的对象（本例中是 `Foo.prototype`）。

换句话说，这条语句的意思是：“创建一个新的 `Bar.prototype `对象并把它关联到` Foo.prototype`

```js
// 我们创建了一个新的Bar.prototype的对象并关联到Foo.prototype
// ES6之前
Bar.prototype = Object.create(Foo.prototype)
// ES6之后
Object.setPrototypeOf(Bar.prototype ，Foo.prototype)
```

检查一个实例（JavaScript中的对象）的继承祖先（JavaScript中的委托关联）通常被称为`内省`或者`反射`。

```js
function Foo(){
  // ...
}
Foo.prototype.blah = ....
var a = new Foo()
```

通过内省找出`a`的`”祖先“（委托关联）`。

```js
a  instanceof Foo //true
// a 的整个[[Prototype]]链中是否有Foo.prototype指向的对象 


Foo.prototype.isPrototypeOf(a) //true
// 在a的整个[[Prototype]]链中是否出现过Foo.prototype
b.isPrototypeOf(c)  //b是否出现在c的[[Prototype]]链


a.__proto__ === Foo.prototype //true
```

### 对象关联

`[[Prototype]]`机制就是存在于对象中的一个`内部链接`，它会引用其他对象。

1. **创建关联**

`[[Prototype]]`建立对象间的关联。

```js
var foo = {
  something:function(){
    console.log("something!")
  }
}
var bar = Obejct.create(foo)
bar.something() //something
```

`Object.create (...) `会创建一个新对象`（bar）`并把它关联到我们指定的对象`（foo）`，这样我们就可以充分发挥`[[Prototy]]`机制的威力（委托）并且避免不必要的麻烦（比如使用 `new` 的构造函数调用会生成，`.prototype `和，`.constructor `引用）。

`不需要类创建两个对象之间的关系，只需要用过委托来关联对象就足够了。`

```js
if(!Object.create){
  Object.create = function(o){
    function F(){}
    F.prototype = o
    return new F()
  }
}
```

```js
var anotherObject = {
    a:2
}
var myObject = Object.create(anotherObject,{
    b:{
        enumerable:false,
        writable:true,
        configurable:false,
        value:3
    },
    c:{
        enumerable:true,
        writable:false,
        configurable:false,
        value:4
    }
})
```

2. **关联关系是备用的**

对象之间的关联关系是处理”缺失“属性或者方法时的一种备用选项。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210725094417.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210725094456.png)

## 行为委托

如果在第一个对象上没有找到需要的属性或者方法引用，引擎就会继续在`[[Prototype]]`关联的对象上进行査找。同理，如果在后者中也没有找到需要的引用就会继续査找它的`[[Prototype]]`，以此类推。这一系列对象的链接被称为“原型链”。

换句话说，Javascript中这个机制的本质就是对象之间的关联关系。

### 面向委托的设计

```js
Task = {
    setID:function(id) {
        this.id = ID
    },
    outputID:function() {
        console.log(this.id)
    }
}

// XYZ委托Task
XYZ = Object.create(Task)

XYZ.prepareTask = function(ID,Label) {
    this.setID(ID)
    this.label = Label
}

XYZ.outputTaskDetails = function(){
    this.outputID()
    console.log(this.label)
}

// ABC = Object.create(Task)
```

在这段代码中，Task 和 XYZ 并不是类（或者函数），它们是对象。XYZ 通过 Object.create (..) 创建，它的`[[Prototype]]`委托了 Task 对象。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210801082802.png)

在 API 接口的设计中，委托最好在内部实现，不要直接暴露出去。在之前的例子中我们并没有让开发者通过 API 直接调用 XYZ.setID()。（当然，可以这么做！）相反，我们把委托隐藏在了 API 的内部，XYZ. Preparetask （）会 委托 Task.setID (...)。

	- **相互委托（禁止）**

你无法在两个或两个以上互相（双向）委托的对象之间创建循环委托。如果你把 B 关联到 A 然后试着把 A 关联到 B，就会出错。

	- **调试**

“类”设计模式和“委托”设计模式不一样。

2. **比较思维模型**

“类”设计模式和“委托”设计模式不一样。

下面是典型的（“原型”）面向对象风格：

```js
function Foo() {
    this.me = who
}
Foo.prototype.identity = function(){
    return "I am " + this.me
}
function Bar(who) {
    Foo.call(this.who)
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.speak = function(){
    alert("Hello, " + this.identity() + ". " )
}
var b1 = new Bar("b1")
var b2 = new Bar("b2")

b1.speak()
b2.speak()
```

下面是对象关联风格的代码：

```js
Foo = {
    init: function(who) {
        this.me = who;
    },
    identity: function() {
        return "I am " + this.me
    }
}
Bar = Object.create(Foo);

Bar.speak = function(){
    alert("Hello, " + this.identity() + ". " )
}
var b1 = Object.create(Bar)
b1.init("b1")
var b2 = Object.create(Bar)
b2.init("b2")
b1.speak()
b2.speak()
```

我们只是把对象关联起来，并不需要那些既复杂又令人困惑的模仿类的行为（构造函数、原型以及new）。

类风格代码的思维模型强调实体以及实体间的关系。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210801093746.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210801094114.png)

对象关联风格代码的思维模型：

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210801094300.png)

### 类和对象

控件“类”

```js
// 父类
function Widget(width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
}

Widget.prototype.render = function($where) {
    if(this.$elem) {
        this.$elem.css({
            width: this.width + 'px',
            height: this.height + 'px'
        }).appendTo($where)
    }
}
// 子类
function Button(width, height,label) {
    // 调用super构造函数
    Widget.call(this,width,height)
    this.label = label || 'Default'
    this.$elem = $('<button>').text(this.label)
}

// 让Button继承Widget
Button.prototype = Object.create(Widget.prototype)

// 重写render()
Button.prototype.render = function($where) {
    // super调用
    Widget.prototype.render.call(this,$where)
    this.$elem.click(this.onClick.bind(this))
}

Button.prototype.onClick = function(evt) {
    console.log("Button '" + this.label + "'clicked！")
}

$(document).ready(function(){
    var $body = $(document.body)
    var btn1 = new Button(125,30,"Hello")
    var btn1 = new Button(125,40,"World")

    btn1.render($body)
    btn2.render($body)
})



class Widget {
    constructor(width, height){
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }
    render($where) {
        if(this.$elem) {
            this.$elem.css({
                width: this.width + 'px',
                height: this.height + 'px'
            }).appendTo($where)
        }
    }
}
class Button extends Widget {
    constructor(width, height,label){
        super(width, height)
        this.label = label || 'Default'
        this.$elem = $('<button>').text(this.label)
    }
    render($where){
        super.render($where)
        this.$elem.click(this.onClick.bind(this))
    }
    onClick(evt) {
        console.log("Button '" + this.label + "'clicked！")
    }
}
$(document).ready(function(){
    var $body = $(document.body)
    var btn1 = new Button(125,30,"Hello")
    var btn1 = new Button(125,40,"World")

    btn1.render($body)
    btn2.render($body)
})
```

委托控件

```js

var Widget = {
    init:function(width, height){
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert:function($where){
        if(this.$elem) {
            this.$elem.css({
                width: this.width + 'px',
                height: this.height + 'px'
            }).appendTo($where)
        }
    }
}

var Button = Object.create(Widget)

Button.setup = function(width, height, label){
    // 委托调用
    this.init(width, height)
    this.label = label || 'Default'
    this.$elem = $('<button>').text(this.label)
}

Button.build = function($where){
    this.insert($where)
    this.$elem.click(this.onClick.bind(this))
}

Button.onClick = function(evt) {
    console.log("Button '" + this.label + "'clicked！")
}
$(document).ready(function(){
    var $body = $(document.body)
    var btn1 = Object.create(Button)
    btn1.setup(125,30,"Hello")
    var btn2 = Object.create(Button)
    btn2.setup(125,40,"World")

    btn1.render($body)
    btn2.render($body)
})
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210801114126.png)

类

```js
// 父类
function Controller() {
    this.error = []
}
Controller.prototype.showDialog = function(title,msg) {
    // 给用户显示标题和消息
}
Controller.prototype.success = function(msg) {
    this.showDialog("Success",msg);
}
Controller.prototype.failure = function(err) {
    this.errors.push(err)
    this.showDialog("Error",err)
}

// 子类
function LoginController() {
    Controller.call(this)
}

// 子类关联到父类
LoginController.prototype = Object.create(Controller.prototype)
LoginController.prototype.getUser = function(){
    return document.getElementById("Login_username").value
}
LoginController.prototype.getPassword = function(){
    return document.getElementById("Login_password").value 
}
LoginController.prototype.validateEntry = function(user,pw){
    user = user || this.getUser()
    pw = pw || this.getPassword()

    if(!(user&&pwd)){
        return this.failure("Please enter a username & password!")
    }
    else if(pw.length < 5){
        return this.failure("Password must be 5+ characters!")
    }
    return true
}
LoginController.prototype.failure = function(err){
    // super调用
    Controller.prototype.failure.call(this,"Login invalid: " + err)
}
// 子类
function AuthController(login){
    Controller.call(this,login)
    // 合成
    this.login = login
}
// 把子类关联到父类
AuthController.prototype = Object.create(Controller.prototype)
AuthController.prototype.server = function(url,data) {
    return $.ajax({
        url,
        data
    })
}
AuthController.prototype.checkAuth = function(){
    var user = this.login.getUser()
    var pwd = this.login.getPassword()
    if(this.login.validateEntry(user,pwd)){
        this.server("/check-auth",{
            user,
            pwd
        }).then(this.success.bind(this))
        .fail(this.failure.bind(this))
    }
}
// 重写基础的success
AuthController.prototype.success = function() {
    // super调用
    Controller.prototype.success.call(this,'Authenticated!')
}

// 重写基础的failure
AuthController.prototype.failure = function(err) {
    // super调用
    Controller.prototype.failure.call(this,"Auth Failed: " + err)
}
var auth = new AuthController(
    // 除了继承还要合成
    new LoginController()
)
auth.checkAuth()
```

反类

```js
var LoginController = {
    errors:[],
    getUser:function(){
        return document.getElementById("Login_username").value
    },
    getPassword:function(){
        return document.getElementById("Login_password").value 
    },
    validateEntry:function(user,pw){
        user = user || this.getUser()
        pw = pw || this.getPassword()
    
        if(!(user&&pwd)){
            return this.failure("Please enter a username & password!")
        }
        else if(pw.length < 5){
            return this.failure("Password must be 5+ characters!")
        }
        return true
    },
    showDialog:function(title,msg) {
        // 给用户显示标题和消息
    },
    
    failure:function(err) {
        this.errors.push(err)
        this.showDialog("Error",err)
    }
}
// 让AuthController委托LoginController
var AuthController = Object.create(LoginController)
AuthController.errors = []
AuthController.checkAuth = function(){
    var user = this.login.getUser()
    var pwd = this.login.getPassword()
    if(this.login.validateEntry(user,pwd)){
        this.server("/check-auth",{
            user,
            pwd
        }).then(this.success.bind(this))
        .fail(this.failure.bind(this))
    }
}
AuthController.server = function(url,data) {
    return $.ajax({
        url,
        data
    })
}
AuthController.accepted = function() {
    this.showDialog("Success",msg);
}
AuthController.rejected = function(err) {
    this.failure("Auth Failed: " + err)
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210801160357.png)

####  更好的语法

```js
// 类
class Foo(){
  methodName(){
    
  }
}


// 委托对象
var LoginController = {
  errors:[],
  getUser(){
    
  },
  getPassword(){
    
  }
}
// 现在把AuthController关联到LoginController
Object.setPrototypeOf(AuthController,LoginController)
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210801161717.png)

ES6中为了实现类，新增加了关键字class,extends,super，用来实现传统的面相对象编程。然而，class语法并没有解决所有的问题。class基本上只是现在的prototype机制的一种语法糖。也就是说class并不会向传统的面向类的语言一样在声明是静态复制所有行为。如果你有意或者无意修改或者替换了父“类”中的一个方法，那子“类”和所有实例都会受到影响，因为它们在定义时并没有进行复制，只是使用基于prototype的实时委托。

