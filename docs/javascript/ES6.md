# ES2015
## 声明
**const**: 声明常量
**let**: 声明变量
- 作用域
    - 全局作用域
    - 函数作用域：`function() {}`
    - 块级作用域：`{}`
- 作用域范围
    - `var`在全局代码中执行
    - `const`和`let`只能在代码块中执行
- 赋值使用
    - `const`命令声明常量后必须立马赋值
    - `let`命令声明变量后可立马赋值或使用时赋值
- 重点难点
    - 不允许重复声明
    - 未定义就使用会报错：`const`命令和`let`命令不存在变量提升
    - 暂时性死区：在代码块内使用`const`命令和`let`命令声明变量之前，该变量都不可用


## 解构
### 字符串解构
```js
const [a,b,c,d,e] = "hello"
```
### 数值解构
```js
const { toString: s } = 123
```
### 布尔解构
```js
const { toString: b } = true
```
### 对象解构
```js
// 形式
const { x, y } = { x: 1, y: 2 }

// 默认：
const { x, y = 2 } = { x: 1 }

// 改名：
const { x, y: z } = { x: 1, y: 2 }
```
### 数组解构
数据结构具有Iterator接口可采用数组形式的解构赋值。
```js
// 形式
const [x, y] = [1, 2]

// 默认：
const [x, y = 2] = [1]
```
### 函数参数解构
数组解构：`function Func([x = 0, y = 1]) {}`
对象解构：`function Func({ x = 0, y = 1 } = {}) {}`

### 应用场景
应用场景：

交换变量值：`[x, y] = [y, x]`
返回函数多个值：`const [x, y, z] = Func()`
定义函数参数：`Func([1, 2])`
提取JSON数据：`const { name, version } = packageJson`
定义函数参数默认值：`function Func({ x = 1, y = 2 } = {}) {}`
遍历Map结构：`for (let [k, v] of Map) {}`
输入模块指定属性和方法：`const { readFile, writeFile } = require("fs")`

## 模板字符串
模板字符串的引入是es6的一大亮点，它使得输出模板变得简洁而方便。模板采用反引号（``），中间支持各种格式的输出。 包括换行，空格，变量，表达式，调用函数等。
```js
var age=22;
var name='lang'
var say=()=>{
  return 'hello'
}
var str=`myname is${name} my age is ${age} and i can say ${say()}`
console.log(str);  //myname islang my age is 22 and i can say hello
```
### 带标签的模板字符串
```js
const name = 'tom'
const gender = true

function myTagFunc(strings,name,gender){
    return strings[0] + name + strings[1] + gender + strings[2]
}
const result = myTagFunc`hey, ${name} is a ${gender}.`

console.log(result);


// hey, tom is a true.
```
## 数值扩展
- Number.MIN_SAFE_INTEGER：最小安全数值(-2^53)
- Number.MAX_SAFE_INTEGER：最大安全数值(2^53)
- Number.parseInt()：返回转换值的整数部分
- Number.parseFloat()：返回转换值的浮点数部分
- Number.isFinite()：是否为有限数值
- Number.isNaN()：是否为NaN
- Number.isInteger()：是否为整数
- Number.isSafeInteger()：是否在数值安全范围内

## 数组扩展
### Array.from()：
转换具有Iterator接口的数据结构为真正数组，返回新数组
类数组对象：包含length的对象、Arguments对象、NodeList对象

### Array.of()
转换一组值为真正数组，返回新数组

### copyWithin()
把指定位置的成员复制到其他位置，返回原数组

### find() findIndex()
返回第一个符合条件的成员。
返回第一个符合条件的成员索引值。

### keys() values()  entries()
返回以属性值为遍历器的对象。
返回以属性值为遍历器的对象。
返回以索引值和属性值为遍历器的对象。


## 字符串扩展方法
### for...of...字符串遍历
```js
var a='lang'
for (item of a){
  
   console.log(item);
} 
// l
// a
// n
// g
```
### includes()值存在判断
在es6之前使用indexof也可以进行值存在判断。includes与indexof既可以进行字符串的判断，也可以进行数组值的判断， 但是indexof在对NaN进行判断时会出现不准确。

indexof的返回结果为-1||0，includes为true||false.
```js
let site = ['runoob', 'google', 'taobao'];
site.includes('runoob'); 
// true 
site.includes('baidu'); 
// false


[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true


var arr = ['a', 'b', 'c'];
arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
```
### String.codePointAt()
返回字符对应码点(String.fromCodePoint()的逆操作)

### String.fromCodePoint()
返回码点对应字符

### repeat()字符串重复
```js
var a='lang'
console.log(a.repeat(3));//langlanglang
```

### startwith，endwith
startWith('str',n)：返回布尔值，表示参数字符串是否在原字符串的头部。
endsWith('str',n)：返回布尔值，表示参数字符串是否在原字符串的尾部。
其中str表示要判断的值，n表示从目标字符串的第几个元素开始。
```js
var str='hello world'
console.log(str.startsWith('hello',0)); //true
console.log(str.startsWith('world',6)); //true
console.log(str.startsWith('world',0)); //false
```

### padStart()，padEnd()
es6提供了两个字符串追加的方法String.prototype.padStart和String.prototype.padEnd，方便我们将一个新的字符串追加到某个字符串的头尾。
```js
var obj={
  name:'wangcai',
  car:'BMW',
  wife:'fatgirl'
}
for(var item in obj){
  console.log(item.padEnd(10,'-')+'value:'+obj[item].padStart(10,'**'));
}
//name------value:***wangcai
//car-------value:*******BMW
//wife------value:***fatgirl
```

### 函数参数默认值
```js
const config = (data = 'data is empty') => {}
```

### 扩展运算符（...）
#### 扩展运算符(spread)
```js
/******************扩展运算符(spread)********************/

     //demo 1  传递数据代替多个字符串的形式
     function  test(a,b,c){
         console.log(a);
         console.log(b);
         console.log(c);
     }

     var arr = [1, 2, 3];
     test(...arr);
    

     //demo2 将一个数组插入到另一个数据中
     var arr1 = [1, 2, 3,4];
     var arr2 = [...arr1, 4, 5, 6];
     console.log(arr2);


     //demo3  字符串转数据
     var str='loycoder';
     var arr3= [...str];
     console.log(arr3);
```
#### 剩余运算符(rest)
```js
 /******************剩余运算符(rest)********************/

  //demo4  当函数参数个数不确定时，用 rest运算符
    function rest01(...arr) {
        for (let item of arr) {
            console.log(item);
        }
    }
    rest01(1, 3, 5);

    //demo5 当函数参数个数不确定时的第二种情况
    function rest02(item, ...arr) {
        console.log(item);
        console.log(arr);
    }
    rest02(1, 2, 34);

    //demo6 rest运算符配合 解构使用：
    var [a,...temp]=[1, 2, 4];
    console.log(a);
    console.log(temp);
```

### 箭头函数
箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。
```js
var list = [1, 2, 3, 4, 5, 6, 7]
var newList = list.map(function (item) {
    return item * item
})


const list = [1, 2, 3, 4, 5, 6, 7]
const newList = list.map(item => item * item)
```
### 对象属性简写（Object attribute shorthand）
```js
let cat = 'Miaow'
let dog = 'Woof'
let bird = 'Peet peet'

let someObject = {
  cat,
  dog,
  bird
}

console.log(someObject)

//{
//  cat: "Miaow",
//  dog: "Woof",
//  bird: "Peet peet"
//}
```

## 对象扩展
### Object.assign()：合并对象(浅拷贝)，返回原对象
```js
const source = {
    a:123,
    b:123
}

const target = {
    a:456,
    c:456
}
const result = Object.assign(target,source)

console.log(target) //{ a: 123, c: 456, b: 123 }
console.log(target === target) //true
```
### Object.is()：对比两值是否相等
```js
console.log(Object.is(+0,-0));//false
console.log(Object.is(NaN,NaN));//true
```
### Object.getPrototypeOf()：返回对象的原型对象
### Object.setPrototypeOf()：设置对象的原型对象
###  __proto__：返回或设置对象的原型对象
### 遍历
- for-in：遍历对象自身可继承可枚举属性
- Object.keys()：返回对象自身可枚举属性键组成的数组
- Object.getOwnPropertyNames()：返回对象自身非Symbol属性键组成的数组
- Object.getOwnPropertySymbols()：返回对象自身Symbol属性键组成的数组
- Reflect.ownKeys()：返回对象自身全部属性键组成的数组
## Proxy
- 定义：修改某些操作的默认行为
- 声明：const proxy = new Proxy(target, handler)
- 入参
    - target：拦截的目标对象
    - handler：定制拦截行为
- 方法
    - Proxy.revocable()：返回可取消的Proxy实例(返回{ proxy, revoke }，通过revoke()取消代理)
- 拦截方式
    - get()：拦截对象属性读取
    - set()：拦截对象属性设置，返回布尔
    - has()：拦截对象属性检查k in obj，返回布尔
    - deleteProperty()：拦截对象属性删除delete obj[k]，返回布尔
    - defineProperty()：拦截对象属性定义Object.defineProperty()
    - Object.defineProperties()，返回布尔
    - ownKeys()：拦截对象属性遍历for-in、Object.keys()
    - Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()，返回数getOwnPropertyDescriptor()：拦截对象属性描述读
    - Object.getOwnPropertyDescriptor()，返回对象getPrototypeOf()：拦截对象原型读取instanceof、Object.getPrototypeOf()、Object.prototype.__proto__、Object.prototype.isPrototypeOf()、Reflect.getPrototypeOf()，返回对象
    - setPrototypeOf()：拦截对象原型设置Object.setPrototypeOf()，返回布尔
    - isExtensible()：拦截对象是否可扩展读取Object.isExtensible()，返回布尔
    - preventExtensions()：拦截对象不可扩展设置Object.preventExtensions()，返回布尔
    - apply()：拦截Proxy实例作为函数调用proxy()、proxy.apply()、proxy.call()
    - construct()：拦截Proxy实例作为构造函数调用new proxy()
- 重点难点
    - 要使Proxy起作用，必须针对实例进行操作，而不是针对目标对象进行操作
    - 没有设置任何拦截时，等同于直接通向原对象
    - 属性被定义为不可读写/扩展/配置/枚举时，使用拦截方法会报错
    - 代理下的目标对象，内部this指向Proxy代理
```js
 const person = {
     name:'zce',
     age:20
 }

 const personProxy = new Proxy(person,{
     get(target,property){
         return property in target ? target[property] : undefined
     },
     set(target,property,value){
         if(!Number.isInteger(value)){
             throw new TypeError(`${value} is not an integer`)
         }
        target[property] = value
     }
 })
```
### Proxy vs  Object.defineProperty(personProxy)
```js
// defineProperty 只能监视属性的读写  proxy 可以删除啥的
// Proxy更好的支持数组对象的监视
const list = []

const listProxy = new Proxy(list,{
    set(target,property,value){
        target[property] = value
        return true
    }
})
listProxy.push(100)

// Proxy是以非侵入式的方式监管了对象的读写
```
## Reflect
- 定义：保持Object方法的默认行为
- 方法
    - get()：返回对象属性
    - set()：设置对象属性，返回布尔
    - has()：检查对象属性，返回布尔
    - deleteProperty()：删除对象属性，返回布尔
    - defineProperty()：定义对象属性，返回布尔
    - ownKeys()：遍历对象属性，返回数组(Object.getOwnPropertyNames()+Object.getOwnPropertySymbols())
    - getOwnPropertyDescriptor()：返回对象属性描述，返回对象
    - getPrototypeOf()：返回对象原型，返回对象
    - setPrototypeOf()：设置对象原型，返回布尔
    - isExtensible()：返回对象是否可扩展，返回布尔
    - preventExtensions()：设置对象不可扩展，返回布尔
    - apply()：绑定this后执行指定函数
    - construct()：调用构造函数创建实例
- 设计目的
    - 将Object属于语言内部的方法放到Reflect上
    - 将某些Object方法报错情况改成返回false
    - 让Object操作变成函数行为
    - Proxy与Reflect相辅相成


将Object属于语言内部的方法放到Reflect上
将某些Object方法报错情况改成返回false
让Object操作变成函数行为
Proxy与Reflect相辅相成

Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 Proxy 的方法相同。Reflect不是一个函数对象，因此它是不可构造的。

Reflect 内部封装了一系列对对象的底层操作。 
Reflect 统一提供一套用于操作对象的API。


Proxy方法和Reflect方法一一对应
Proxy和Reflect联合使用，前者负责拦截赋值操作，后者负责完成赋值操作
```js
const observe = (data, callback) => {
      return new Proxy(data, {
            get(target, key) {
                return Reflect.get(target, key)
            },
            set(target, key, value, proxy) {
                  callback(key, value);
                  target[key] = value;
                    return Reflect.set(target, key, value, proxy)
            }
      })
}

const FooBar = { open: false };
const FooBarObserver = observe(FooBar, (property, value) => {
  property === 'open' && value 
          ? console.log('FooBar is open!!!') 
          : console.log('keep waiting');
});
console.log(FooBarObserver.open) // false
FooBarObserver.open = true // FooBar is open!!!
```

## Promise
Promise 是ES6提供的一种异步解决方案，比回调函数更加清晰明了。
Promise 翻译过来就是承诺的意思，这个承诺会在未来有一个确切的答复，并且该承诺有三种状态，分别是：
- 三种状态
    - 等待中（pending）
    - 完成了 （resolved）
    - 拒绝了（rejected）
这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 resolved 后，就不能再次改变

当我们在构造 Promise 的时候，构造函数内部的代码是立即执行的。

## 类（Class）
在ES6之前，如果我们要生成一个实例对象，传统的方法就是写一个构造函数，例子如下：
```js
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.information = function () {
    return 'My name is ' + this.name + ', I am ' + this.age
}
```
但是在ES6之后，我们只需要写成以下形式：
```js
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    information() {
        return 'My name is ' + this.name + ', I am ' + this.age
    }
}
```

## Set
- 入参：具有Iterator接口的数据结构
- 属性
    - constructor：构造函数，返回Set
    - size：返回实例成员总数
- 方法
    - add()：添加值，返回实例
    - delete()：删除值，返回布尔
    - has()：检查值，返回布尔
    - clear()：清除所有成员
    - keys()：返回以属性值为遍历器的对象
    - values()：返回以属性值为遍历器的对象
    - entries()：返回以属性值和属性值为遍历器的对象
    - forEach()：使用回调函数遍历每个成员
- 应用场景
    - 去重字符串：[...new Set(str)].join("")
    - 去重数组：[...new Set(arr)]或Array.from(new Set(arr))
    - 集合数组
        - 声明：const a = new Set(arr1)、const b = new Set(arr2)
        - 并集：new Set([...a, ...b])
        - 交集：new Set([...a].filter(v => b.has(v)))
        - 差集：new Set([...a].filter(v => !b.has(v)))
    - 映射集合
        - 声明：let set = new Set(arr)
        - 映射：set = new Set([...set].map(v => v * 2))或set = new Set(Array.from(set, v => v * 2))
S6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
Set本身是一个构造函数，用来生成Set数据结构
```js
var s = new Set();

[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```
## WeakSet
- 入参：具有Iterator接口的数据结构
- 属性
    - constructor：构造函数，返回WeakSet
- 方法
    - add()：添加值，返回实例
    - delete()：删除值，返回布尔
    - has()：检查值，返回布尔
- 使用场景
    - 储存DOM节点：DOM节点被移除时自动释放此成员，不用担心这些节点从文档移除时会引发内存泄漏
    - 临时存放一组对象或存放跟对象绑定的信息：只要这些对象在外部消失，它在WeakSet结构中的引用就会自动消
-重点难点
    - 成员都是弱引用，垃圾回收机制不考虑WeakSet结构对此成员的引用
    - 成员不适合引用，它会随时消失，因此ES6规定WeakSet结构不可遍历
    - 其他对象不再引用成员时，垃圾回收机制会自动回收此成员所占用的内存，不考虑此成员是否还存在于WeakSet结构中
## Map
- 入参：具有Iterator接口且每个成员都是一个双元素数组的数据结构
- 属性
    - constructor：构造函数，返回Map
    - size：返回实例成员总数
- 方法
    - get()：返回键值对
    - set()：添加键值对，返回实例
    - delete()：删除键值对，返回布尔
    - has()：检查键值对，返回布尔
    - clear()：清除所有成员
    - keys()：返回以键为遍历器的对象
    - values()：返回以值为遍历器的对象
    - entries()：返回以键和值为遍历器的对象
    - forEach()：使用回调函数遍历每个成员

ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。
```js
var m = new Map();
var o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```
## WeakMap
- 入参：具有Iterator接口且每个成员都是一个双元素数组的数据结构
- 属性
    - constructor：构造函数，返回WeakMap
- 方法
    - get()：返回键值对
    - set()：添加键值对，返回实例
    - delete()：删除键值对，返回布尔
    - has()：检查键值对，返回布尔
- 应用场景
    - 储存DOM节点：DOM节点被移除时自动释放此成员键，不用担心这些节点从文档移除时会引发内存泄漏
    - 部署私有属性：内部属性是实例的弱引用，删除实例时它们也随之消失，不会造成内存泄漏
- 重点难点
    - 成员键都是弱引用，垃圾回收机制不考虑WeakMap结构对此成员键的引用
    - 成员键不适合引用，它会随时消失，因此ES6规定WeakMap结构不可遍历
    - 其他对象不再引用成员键时，垃圾回收机制会自动回收此成员所占用的内存，不考虑此成员是否还存在于WeakMap结构中
    - 一旦不再需要，成员会自动消失，不用手动删除引用
    - 弱引用的只是键而不是值，值依然是正常引用
    - 即使在外部消除了成员键的引用，内部的成员值依然存在
## Symbol
symbol 是一种基本数据类型，Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。

```js
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1); // "symbol"
console.log(symbol3.toString()); // "Symbol(foo)"
console.log(Symbol('foo') === Symbol('foo')); // false
```
  
## 迭代器（Iterator）
迭代器（Iterator）是一种迭代的机制，为各种不同的数据结构提供统一的访问机制。任何数据结构只要内部有 Iterator 接口，就可以完成依次迭代操作。

一旦创建，迭代器对象可以通过重复调用next()显式地迭代，从而获取该对象每一级的值，直到迭代完，返回{ value: undefined, done: true }
```js
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}
```  
## Generator/yield
Generator函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同。

Generator函数有多种理解角度。从语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。

执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。

形式上，Generator函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield语句，定义不同的内部状态（yield语句在英语里的意思就是“产出”）。
```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }
```
## 模块化(Module)
- 命令
    - export：规定模块对外接口
        - 默认导出：export default Person(导入时可指定模块任意名称，无需知晓内部真实名称)
        - 单独导出：export const name = "Bruce"
        - 按需导出：export { age, name, sex }(推荐)
        - 改名导出：export { name as newName }
    - import：导入模块内部功能
        - 默认导入：import Person from "person"
        - 整体导入：import * as Person from "person"
        - 按需导入：import { age, name, sex } from "person"
        - 改名导入：import { name as newName } from "person"
        - 自执导入：import "person"
        - 复合导入：import Person, { name } from "person"
    - 复合模式：export命令和import命令结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量
        - 默认导入导出：export { default } from "person"
        - 整体导入导出：export * from "person"
        - 按需导入导出：export { age, name, sex } from "person"
        - 改名导入导出：export { name as newName } from "person"
        - 具名改默认导入导出：export { name as default } from "person"
        - 默认改具名导入导出：export { default as name } from "person"
    - 继承：默认导出和改名导出结合使用可使模块具备继承性
    - 设计思想：尽量地静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
    - 严格模式：ES6模块自动采用严格模式(不管模块头部是否添加use strict)
- 模块方案
    - CommonJS：用于服务器(动态化依赖)
    - AMD：用于浏览器(动态化依赖)
    - AMD：用于浏览器(动态化依赖)
    - UMD：用于浏览器和服务器(动态化依赖)
    - ESM：用于浏览器和服务器(静态化依赖)
- 加载方式
    - 运行时加载
        - 定义：整体加载模块生成一个对象，再从对象上获取需要的属性和方法进行加载(全部加载)
        - 影响：只有运行时才能得到这个对象，导致无法在编译时做静态优化
    - 编译时加载
        - 定义：直接从模块中获取需要的属性和方法进行加载(按需加载)
        - 影响：在编译时就完成模块加载，效率比其他方案高，但无法引用模块本身(本身不是对象)，可拓展JS高级语法(宏和类型校验)
- 加载实现
    - 传统加载：通过<script>进行同步或异步加载脚本
        - 同步加载：<script src=""></script>
        - Defer异步加载：<script src="" defer></script>(顺序加载，渲染完再执行)
        - Async异步加载：<script src="" async></script>(乱序加载，下载完就执行)
    - 模块加载：<script type="module" src=""></script>(默认是Defer异步加载)
- CommonJS和ESM的区别
    - CommonJS输出值的拷贝，ESM输出值的引用
        - CommonJS一旦输出一个值，模块内部的变化就影响不到这个值
        - ESM是动态引用且不会缓存值，模块里的变量绑定其所在的模块，等到脚本真正执行时，再根据这个只读引用到被加载的那个模块里去取值
    - CommonJS是运行时加载，ESM是编译时加载
        - CommonJS加载模块是对象(即module.exports)，该对象只有在脚本运行完才会生成
        - ESM加载模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
- 重点难点
    - ES6模块中，顶层this指向undefined，不应该在顶层代码使用this
    - 一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取
    - export命令输出的接口与其对应的值是动态绑定关系，即通过该接口可获取模块内部实时的值
    - import命令大括号里的变量名必须与被导入模块对外接口的名称相同
    - import命令输入的变量只读(本质是输入接口)，不允许在加载模块的脚本里改写接口
    - import命令命令具有提升效果，会提升到整个模块的头部，首先执行
    - 重复执行同一句import语句，只会执行一次
    - export default命令只能使用一次
    - export default命令导出的整体模块，在执行import命令时其后不能跟大括号
    - export default命令本质是输出一个名为default的变量，后面不能跟变量声明语句
    - export default命令本质是将后面的值赋给名为default的变量，可直接将值写在其后
    - export default命令和export {}命令可同时存在，对应复合导入
    - export命令和import命令可出现在模块任何位置，只要处于模块顶层即可，不能处于块级作用域
    - import()加载模块成功后，此模块会作为一个对象，当作then()的参数，可使用对象解构赋值来获取输出接口
    - 同时动态加载多个模块时，可使用Promise.all()和import()相结合来实现
    - import()和结合async/await来书写同步操作的代码
