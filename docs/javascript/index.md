# 	JavaScrip知识点日常总结

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

3. 对象原型__proto__

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

-------------------------js面试中也有this-------------------------

`this`是在执行的时候确定的。不执行，你就不知道在哪里。

1. 作为普通函数执行时，`this`指向`window`。
2. 当函数作为对象的方法被调用时，`this`就会指向`该对象`。
3. 构造器调用，`this`指向`返回的这个对象`。
4. 箭头函数 箭头函数的`this`绑定看的是`this所在函数定义在哪个对象下`，就绑定哪个对象。如果有嵌套的情况，则this绑定到**最近的一层对象上**。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210811195727.png)

5. 基于Function.prototype上的 `apply 、 call 和 bind `调用模式，这三个方法都可以显示的指定调用函数的 this 指向。`apply`接收参数的是数组，`call`接受参数列表，`` bind`方法通过传入一个对象，返回一个` this `绑定了传入对象的新函数。这个函数的 `this`指向除了使用`new `时会被改变，其他情况下都不会改变。若为空默认是指向全局对象window。

### 深浅拷贝

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

将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。

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
            // 递归调用！！！
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

```

### 手写相关函数

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
````

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
值得一提的是，map 的第二个参数为第一个参数回调中的 this 指向，如果第一个参数为箭头函数，那设置第二个 this 会因为箭头函数的词法绑定而失效


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



//使用reduce实现数组的flat方法
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

### 编程范式

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210816185058.png" style="zoom:33%;" />

- 函数式编程是随着React的流行受到越来越多的关注 
- Vue3 也开始拥抱函数式编程
- 函数式编程可以抛弃 this
- 打包过程中可以更好的利用 tree shaking 
- 过滤无用代码方便测试、方便并行处理
- 有很多库可以帮助我们进行函数式开发：lodash、underscore、ramda

1. **简单总结**

编程范式是一种编程风格，可分为命令式、函数式（属于声明式）、面向对象等多种范式。

JS 是一种动态语言，它支持多种范式，具体选择哪种范式，根据业务需求和个人风格做选择。

编程范式没有绝对的好坏之分，只有合适和不合适。

简单来说下这几种范式的特点。

- 命令式更符合自然逻辑，容易理解。
- 函数式减少了临时变量，容易维护。
- 面向对象更方便扩展，代码复用程度高。

2. **编程范式是什么**

> [编程范式](https://link.juejin.cn/?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E7%BC%96%E7%A8%8B%E8%8C%83%E5%9E%8B%2F1475451%3Ffromtitle%3D%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F%26fromid%3D23696164%26fr%3Daladdin)是一类典型的编程风格，是指从事软件工程的一类典型的风格（可以对照方法学）。

> 如：命令式编程、函数式编程、面向对象编程等不同的编程范式。

**前端领域的函数式编程的体现**

最近函数式编程逐渐又火了起来，我们看看前端领域有什么函数式编程的影子吧

- ES6的箭头函数、map 、reduce 、filter
- React 16.8 的Hook
- Vue3.0的Composition API

3. **命令式编程**

**命令式编程就是关注计算执行步骤，如何执行，注重过程。** 

大部分命令式编程语言都支持四种基本的语句

运算语句；

- 循环语句（for、while）；

- 条件分支语句（if else、switch）；

- 无条件分支语句（return、break、continue）。

```js
//命令式
const WIDTHS = ['10px','20px','30px'], LENGTH = 3;
let arr = [];
for (let i = 0; i < LENGTH; i++) {
  arr = arr.concat(WIDTHS);
}
// ["10px", "20px", "30px", "10px", "20px", "30px", "10px", "20px", "30px"]

//函数式
const WIDTHS = ['10px','20px','30px'], LENGTH = 3;
const arr = Array(LENGTH).fill('').reduce(acc => acc.concat(WIDTHS), []);
// ["10px", "20px", "30px", "10px", "20px", "30px", "10px", "20px", "30px"]
```

**命令式编程的优缺点**

- 优点
  - 性能高，因为有引擎作优化
  - 容易理解，因为符合自然编程思路
- 缺点
  - 产生大量临时变量
  - 代码可读性低，需要通读代码才知道具体做了什么

4. **函数式编程**

**函数式编程，主要强调如何通过函数的组合变化来解决问题，关注结果。**

- 函数式编程中的函数指的不是程序中的函数（方法）而是数学中的函数即映射关系，例如：`y=sin(x）`，x 和 y 的关系（x 确定了 y一定确定）
- 相同的输入始终要得到相同的输出（纯函数)
- 函数式编程用来描述数据（函数之间的映射)

**函数式编程的特性**

- 函数是"第一等公民"
  - 函数可以像其他数据类型一样操作，如赋值给其他变量、作为函数的入参、作为函数的返回值。
- 惰性计算
  - 只在需要的时候执行，不产生无意义的中间变量。
- 没有"副作用"
  - 副作用指函数计算结果的过程中，系统状态的变化，或者函数内部和外部进行交互，产生其他影响。
  - 常见的副作用：更改全局变量、发送http请求、dom查询。
- 引用透明性
  - 即如果提供同样的输入，那么函数总是返回同样的结果。
  - 完全不依赖外部状态的变化（无状态），如全局变量，this 指针，IO 操作等。（函数的输出仅取决于输入，而不依赖外部状态；）
  - PS：没有副作用 + 无状态 又可以称为纯函数。（不会造成超出其作用域的变化，即不修改函数参数或全局变量等。）



柯里化其实就是流水线上的**加工站**，函数组合就是我们的**流水线**。

- 柯里化（Currying）
  - 理解为“加工站”，接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数。
  - 将一个多元函数转为一个单元函数，可以依次调用`f(x,y,z) → f(x)(y)(z)`。
  - 举个例子：求两个数的平方和

```js
// 原始版本
const squares = function(x, y) {
  return x * x + y * y;
}
console.log(squares(1,2));
// 柯里化版本
const currySquares = function(x) {
    return function(y) {
    	return x * x + y * y;
    }
}
console.log(currySquares(1)(2));
```



- 函数组合（Compose）
  - 理解为“流水线”，将多个函数组合成一个新的函数，初始数据通过多个函数依次处理，最后整体输出。
  - 把复杂的逻辑拆分成一个个简单任务，最后组合起来完成任务，使得整个过程的数据流更明确、可控。
  - 为了保证每个加工站的输出刚好流入下个工作站的输入，必须是单元函数。如果是加工站是多元函数，就需要用到柯里化转为单元函数，再放到流水线上组合使用。
  - 两个函数组合示例： 注意compose (从右往左的组合顺序执行 )

```js
const compose = (f, g) => x => f(g(x))

const f = x => x + 1;
const g = x => x * 2;
const fg = compose(f, g);
fg(1) // 3
```

- 多个函数组合示例： 如果需要类似管道pipe（从左往右）的数据流，将reduce换成reduceRight即可。

```js
const compose = (...fns) => {
  return fns.reduce((acc,cur) => {
    return (...args) => {
      return acc(cur(...args))
    }
  })
}
// 最后返回的函数先执行

const f = x => {
  console.log('f: ', x);
  return x + 1;
}

const g = x => {
  console.log('g: ', x);
  return x + 1;
}

const t = x => {
  console.log('t: ', x);
  return x + 1;
}

compose(f, g, t)(1);

// t:  1
// g:  2
// f:  3
```

**函数式编程的优缺点**

- 优点
  - 代码简洁，开发快速
    - 函数复用率很高，减少重复，开发速度快
  - 维护方便
    - 减少状态变量的声明和维护
  - 更少的出错概率
    - 强调纯函数，没有副作用
- 缺点
  - 性能不好，容易过度抽象包装
    - 比如 使用命令式就只需要 变量+命令式（一层循环），使用函数式，不使用外部变量（双重循环）。
    - 在 JS 这种非函数式语言中，函数式的方式比直接写语句指令慢（引擎会针对很多指令做特别优化），如纯循环就比原生map性能快几倍。
  - 内存容易占用过高
    - 为了实现对象状态的不可变，创建更多新对象。消耗更多内存空间，JS引擎进行垃圾回收有压力。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210816224030.png)

### 纯函数

#### 什么是纯函数

- 如果函数的调用参数相同, 则永远返回相同的结果. 它不依赖于程序执行期间函数   外部任何状态或数据的变化  , 只  依赖于传入的参数。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210915191158.png)
- 纯函数不会产生任何可观察的副作用, 例如: 网络请求, 输入/输出设备, 或数据突变(mutation)等。

**
- 数组中的slice和splice分别是：纯函数和不纯的函数
    - slice返回数组中的指定部分，不会改变数组
    - splice对数组进行操作返回该数组，会改变原数组
**

#### 纯函数特点

- **无状态**：函数的输出仅取决于输入，而不依赖外部状态；
- **无副作用**：不会造成超出其作用域的变化，即不修改 函数参数 或 全局变量 等。函数依赖外部状态就无法保证相同的输出，就会带来副作用。

```js
function add(obj) {
  obj.num += 1
  return obj
}

const obj = {num: 1}
add(obj)
console.log(obj)
// { num: 2 }
```

这个函数不是纯的，因为js对象传递的是引用地址，函数内部的修改会直接影响外部变量，最后产生了预料之外的结果。接下来，我们改成纯函数的写法：

```js
function add(obj) {
  const _obj = {...obj}
  _obj.num += 1
  return _obj
}

const obj = {num: 1}
add(obj)
console.log(obj);
// { num: 1 }
```

- **可缓存性**正是因为函数式声明的无状态特点，即：**相同输入总能得到相同的输出**。所以我们可以提前缓存函数的执行结果，实现更多功能。例如：优化斐波拉契数列的递归解法。
```js
function memoize(f){
    //缓存值
    let cache = {}
    //闭包
    return function(){
        //转化为字符串
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f.apply(f,arguments)
        return cache[key]
    }
} 
```
- **可移植性/自文档化**纯函数的依赖很明确，更易于观察和理解，配合类型签名可以使程序更加简单易读。
- **可测试性**纯函数让测试更加简单，只需简单地给函数一个输入，然后断言输出就可以了。
- **并行处理**在多线程环境下并行操作共享的内存数据很可能会出现意外情况。纯函数（封闭的环境）不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数（Web Worker可以开启新的线程)。
#### 副作用

函数的副作用是指**在调用函数时，除了返回函数值外还产生了额外的影响**。例如修改上个例子中的修改参数或者全局变量。除此之外，以下副作用也都有可能会发生：

- 更改全局变量
- 处理用户输入
- 屏幕打印或打印log日志
- DOM查询以及浏览器cookie、localstorage查询
- 发送http请求
- 抛出异常，未被当前函数捕获
- ...

*副作用往往会影响代码的可读性和复杂性，从而导致意想不到的bug。在实际开发中，我们是离不开副作用的，那么在函数式编程中应尽量减少副作用，尽量书写纯函数。*

例子：

```js
// 组合函数
function compose(...fns) {
  return fns.reduce((a,b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}

// redux
function createStore(reducer) {
  let currentState
  let listeners = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    listeners.map(listener => {
      listener()
    })
    return action
  }
  function subscribe(cb) {
    listeners.push(cb)
    return () => {}
  }
 
  return {
    getState,
    dispatch,
    subscribe
  }
}
// 应用实例如下：
function reducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
const store = createStore(reducer)

console.log(store.getState());
console.log(store.dispatch({type: 'ADD'}));
console.log(store.getState());
```

首先使用`reducer`初始化`store`，后续事件产生时，通过`dispatch`更新`store`状态，同时通过`getState`获取`store`的最新状态。

`redux`规范了**单向数据流**，`action`只能由`dispatch`函数派发，并通过纯函数`reducer`更新状态`state`，然后继续等待下一次的事件。这种单向数据流的机制进一步简化事件管理的复杂度，并且还可以在事件流程中插入**中间件（middleware）**。通过中间件，可以实现日志记录、thunk、异步处理等一系列扩展处理，大大得增强事件处理的灵活性。

增强版：

```js
// 扩展createStore
function createStore(reducer, enhancer){
 if (enhancer) {
   return enhancer(createStore)(reducer)
  }
  
  ...
}
// 中间件的实现
function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer) {
      const store = createStore(reducer)
      let _dispatch = store.dispatch

      const middlewareApi = {
        getState: store.getState,
        dispatch: action => _dispatch(action)
      }

      // 获取中间件数组：[mid1, mid2]
      // mid1 = next1 => action1 => {}
      // mid2 = next2 => action2 => {}
      const midChain = middlewares.map(mid => mid(middlewareApi))

      // 通过compose组合中间件：mid1(mid2(mid3()))，得到最终的dispatch
      // 1. compse执行顺序：next2 => next1
      // 2. 最终dispatch：action1 (action1中调用next时，回到上一个中间件action2; action2中调用next时，回到最原始的dispatch)
      
      _dispatch = compose(...midChain)(store.dispatch)

      return {
        ...store,
        dispatch: _dispatch
      }
    }
  }
}

// 自定义中间件模板
const middleaware = store => next => action => {
    // ...逻辑处理
    next(action)
}
```

通过`compose`组合所有的`middleware`，然后返回包装过的`dispatch`。接下来，在每次`dispatch`时，`action`会经过全部中间件进行一系列操作，最后透传给纯函数`reducer`进行真正的状态更新。任何`middleware`能够做到的事情，我们都可以通过手动包装`dispatch`调用实现，但是放在同一个地方统一管理使得整个项目的扩展变得更加容易。

```js
// 1. 手动包装dispatch调用，实现logger功能
function dispatchWithLog(store, action) {
 console.log('dispatching', action)
 store.dispatch(action)
 console.log('next state', store.getState())
}

dispatchWithLog(store, {type: 'ADD'})

// 2. 中间件方式包装dispatch调用
const store = new Store(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

store.dispatch(() => {
 setTimeout(() => {
   store.dispatch({type: 'ADD'})
  }, 2000)
})
  
// 中间件执行过程
thunk => logger => store.dispatch
```

### 高阶函数

高级函数是指至少满足下列条件之一的函数。

- 函数可以作为参数被传递
```js
function forEach(array,fn){
    for(let i = 0;i < array.length;i++){
        fn(array[i])
    }
}
forEach([1,2,3],(item) => {
    console.log(item)
})


function filters(array,fn) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if(fn(array[i])){
            result.push(array[i])
        }
    }
}
filters([1,2,3],(items) => items > 1)
```
- 函数可以作为返回值输出
```js
function makeFn() {
    let msg = "Hello function"
    //返回一个函数
    return function(){
        console.log(msg)
    }
}
const fn = makeFn()
fn()


makeFn()()
```
其实就是函数式编程 上面有  柯里化啥的

- 抽象可以帮我们屏蔽细节，只需要关注与我们的目标
- 高阶函数是用来抽象通用的问题

常用的高阶函数
- forEach
- map
- filter
- every
- some
- find/findeIndex
- reduce
- sort
- ....


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
// 数值与其他类型比较，都会讲其他类型转化为数值。
```
### 作用域
作用域包含3中类型：**全局作用域**、**块级作用域**和**函数作用域**。

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

### 闭包

------------------------------js面试中也有闭包--------------------

- 就是用来让全局访问函数内部的变量的和方法。
- JavaScript中，即使`调用完函数，该函数内部定义的变量和方法仍会保留在内存中。在函数执行完后保留函数内部定义的变量或者方法的链接，这就是闭包工作方式的一部分。`
- 闭包用来模拟类似于对象的私有方法内容。

- 闭包：函数和其周围的状态（词法环境）的引用捆绑在一起形成闭包。
    - 可以在另一个作用域中调用一个函数的内部函数并且可以访问到该函数的作用域中的成员

- 闭包的本质：函数在执行的时候会放到一个执行站上当函数执行完毕之后从执行栈上移除，**但是堆上的作用域成员因为被外部引用不能释放**，因此内部函数依然可以访问外部函数成员。

- 闭包的好处：延长外部函数内部变量的生命周期和作用域范围。

#### 什么是闭包
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210811194956.png)

**闭包中：所有的自由变量的查找，是在函数定义的地方，向上级作用域查找。不是在执行的地方！！！**

**在函数退出后，闭包还能够保留对所有局部函数变量的引用。JavaScript允许在一个函数中定义另一个函数，从技术上讲，这就是闭包。**

```js
// 闭包结构
// 函数global定义在与window一起创建的现有的执行语境中。
// 新的执行语境。在声明绑定实例化的过程中，在JavaScript解释器的内部，inner将会作为一个新的局部对象被创建，其作用域指向global的执行语境的变量环境。
function global(){
    function inner(){
        console.log("inner");
    }
    inner();
}
global() // inner
```
我们可以通过函数返回私有方法（内部函数），开公开对他们的引用。
```js
function sendEmail(from,sub,message) {
    let msg = `"${sun}" > "${message}" received from ${from}`
    let send = function(){
        console.log(msg)
    }
    return send
}
let ref = sendEmail('Jason','Re:sunject','Good news')

ref()
```
我们可以在全局作用域中通过引用来调用send方法。即使在调用完sendEmail函数之后，变量msg和send仍会保留在内存中。
#### 漂亮闭包
```js
let get = null
function closure(){
    this.inc = 0
    get = () => this.inc
    function increase() {this.inc++}
    function decrease() {this.inc--}
    function set(v) {this.inc = v}
    function del() {
        delete this.inc
        this.inc = null
        console.log("this.inc deleted")
    }
    function readd(){
        if(!this.inc) {
            this.inc = "re-added"
        }
    }
    return [increase,decrease,set,del,readd]
}
```
#### 闭包小结
如果在一个函数中声明另一个函数，就创建了闭包。
当调用的函数包含另一个函数时，`就会新建执行语境`，它持有所有局部变量的全新副本。通过链接到全局作用域中定义的变量名，或在外层函数中使用return关键字返回闭包，就可以在全局作用域中创建他们的引用。

`闭包使你可以持有局部函数变量的引用，在函数退出后仍然可使用。`
#### 柯里化函数
当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）然后返回一个新的函数接收剩余的参数，返回结果。


- 柯里化可以我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的函数，这是一种对函数参数的缓存。
- 让函数变得更灵活，颗粒度更小。
- 可以把多元函数转换为一元函数，可以组合使用函数产生强大的功能。
- 参数对复用。
- 提高实用性。
- 延迟执行 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。柯里化的函数可以延迟接收参数，就是比如一个函数需要接收的参数是两个，执行的时候必须接收两个参数，否则没法执行。但是柯里化后的函数，可以先接收一个参数。
-------------------------------js面试中也有-------------------------------
```js
//原来
function getAge(min,age){
    return age >= min
}


//柯里化后
function getAge(min){
    return function(age){
        return age >= min
    }
}
```
```js
let planets = function(a) {
    return function(b) {
        return "xx" + a + "and" + b;
    }
}
let favoritePlanets = planets("Jupiter")
favoritePlanets("Earth") //xxxJupiterandEarth
favoritePlanets("Jupiter") //xxxJupiterandJupiter
favoritePlanets("Saturn") //xxxJupiterandSaturn

planets("Jupiter")("Earth")   //xxxJupiterandEarth


let planets = (a) => (b) => "xx" + a + "and" + b;
```
#### js闭包的9大使用场景
1. 返回值（最常用）
以闭包的形式将 name 返回。
```js
function fn(){
    var name = 'hello'
    return function() {
        return name
    }
}
var fnc = fn()
console.log(fnc())  // hello
```
2. 函数赋值
在闭包里面给fn2函数设置值，闭包的形式把name属性记忆下来，执行会输出 hello。
```js
var fn2
function fn() {
    var name = 'hello'
    fn2 = function() {
        return name
    }
}
fn()
console.log(fn2())
```
3. 函数参数
用闭包返回一个函数，把此函数作为另一个函数的参数，在另一个函数里面执行这个函数，最终输出 hello。
```js
function fn(){
    var name="hello";
    return function callback(){
        return name;
    }
}
var fn1 = fn()//执行函数将返回值（callback函数）赋值给fn1，
 
function fn2(f){
    //将函数作为参数传入
    console.log(f());//执行函数，并输出
}
fn2(fn1)//执行输出fn2
```
4. IIFE（自执行函数）
直接在自执行函数里面将封装的函数fn1传给fn2，作为参数调用同样可以获得结果 hello。
```js
(function(){
    var name="hello";
    var fn1= function(){
        return name;
    }
    //直接在自执行函数里面调用fn2，将fn1作为参数传入
    fn2(fn1);
})()
function fn2(f){
    //将函数作为参数传入
    console.log(f());//执行函数，并输出
}
```
5. 循环赋值
```js
//每秒执行1次，分别输出1-10
for(var i=1;i<=10;i++){
    (function(j){
        //j来接收
        setTimeout(function(){
            console.log(j);
        },j*1000);
    })(i)//i作为实参传入
}
```
6. getter和setter
第一次输出 hello 用setter以后再输出 world ，这样做可以封装成公共方法，防止不想暴露的属性和函数暴露在外部。
```js
function fn(){
    var name='hello'
    setName=function(n){
        name = n;
    }
    getName=function(){
        return name;
    }

    //将setName，getName作为对象的属性返回
    return {
        setName:setName,
        getName:getName
    }
}
var fn1 = fn();//返回对象，属性setName和getName是两个函数
console.log(fn1.getName());//getter
fn1.setName('world');//setter修改闭包里面的name
console.log(fn1.getName());//getter
```
7. 迭代器（执行一次函数往下取一个值）
```js
var arr =['aa','bb','cc'];
function incre(arr){
    var i=0;
    return function(){
        //这个函数每次被执行都返回数组arr中 i下标对应的元素
         return arr[i++] || '数组值已经遍历完';
    }
}
var next = incre(arr);
console.log(next());//aa
console.log(next());//bb
console.log(next());//cc
console.log(next());//数组值已经遍历完
```
8. 首次区分（相同的参数，函数不会重复执行）
可以明显的看到首次执行的会被存起来，再次执行直接取。
```js
var fn = (function(){
 var arr=[];//用来缓存的数组
 return function(val){
     if(arr.indexOf(val)==-1){//缓存中没有则表示需要执行
         arr.push(val);//将参数push到缓存数组中
         console.log('函数被执行了',arr);
         //这里写想要执行的函数
     }else{
         console.log('此次函数不需要执行');
     }
     console.log('函数调用完打印一下，方便查看已缓存的数组：',arr);
 }
})();

fn(10);
fn(10);
fn(1000);
fn(200);
fn(1000);
```
9.  缓存
```js
//比如求和操作，如果没有缓存，每次调用都要重复计算，采用缓存已经执行过的去查找，查找到了就直接返回，不需要重新计算    
var fn=(function(){
  var cache={};//缓存对象
  var calc=function(arr){//计算函数
      var sum=0;
      //求和
      for(var i=0;i<arr.length;i++){
          sum+=arr[i];
      }
      return sum;
  }

  return function(){
      var args = Array.prototype.slice.call(arguments,0);//arguments转换成数组
      var key=args.join(",");//将args用逗号连接成字符串
      var result , tSum = cache[key];
      if(tSum){//如果缓存有   
          console.log('从缓存中取：',cache[key])//打印方便查看
          result = tSum;
      }else{
          //重新计算，并存入缓存同时赋值给result
          result = cache[key]=calc(args);
          console.log('存入缓存：',cache)//打印方便查看
      }
      return result;
  }
})();
fn(1,2,3,4,5);
fn(1,2,3,4,5);
fn(1,2,3,4,5,6);
fn(1,2,3,4,5,8);
fn(1,2,3,4,5,6);
```
### 循环
循环引入了迭代器的概念。一些内嵌类型是可迭代的。迭代器可以传递给for...of循环，而不是传统的for循环。迭代器抽象了列表的索引值，帮助你集中精力来解决问题。

数组就是迭代类型，而对象则不是（对象是枚举类型）。迭代类型对集合中的各顺序有要求。这就是数组拥有这种索引的原因。枚举类型并不要求迭代时属性按照一定的顺序出现。

- for
- for...of
- for...in
- while
- Array.forEach
- Array.keys
- Array.values
- Array.map
- Array.every
- Array.some
- Array.filter
- Array.reduce

#### for...of  只能处理可迭代的值
1. for...of和生成器
```js
function* generator(){
    yield 1
    yield 2
    yield 3
}
for (let value of generator()){
    console.log(value)
}


let gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
```
2. for...of和字符串
```js
let string = 'text'
for (let value of string) {
    console.log(value)
}
```
3. for...of和数组
```js
let array = [1, 2]
for (let value of array) {
    console.log(value)
}
```
4. for...of循环和转化的可迭代对象
```js
let enumerable = { property : 1,method : () => {}}

for(let key of Object.keys(enumerable)) console.log(key)

for(let key of Object.values(enumerable)) console.log(key)

for(let key of Object.entries(enumerable)) console.log(key)
```

`for...of `只能遍历对象中有内置的`@@iterator`

#### for...in  只能处理可枚举的对象属性

```js
let object = {
    a : 1, 
    b : 2,
    c : 3,
    method: () => {}
}

for(let key in object) {
    console.log(key,object[key])
}
```
for...in循环只迭代可枚举的对象属性。尽管所有的对象属性都存在于 对象之中，但并非所有的对象属性都是可枚举的。for...in迭代器将所有不可枚举的属性。

在for...in循环的输出中不会出现构造函数和原型属性。尽管他们也存在于对象中，但被认知是不可枚举的。

### 数组和字符串
#### 数组
- Array.prototype.sort()
- Array.forEach((item,index,object) => { ... })  
- Array.every((value) => value < 10)  
  - 一则假则为假
  - 一则真则为真
- Array.some((value) => value < 10)  
  - 一则真则为真
- Array.filter((value) => value < 10)
  - 返回符合条件项的新数组
- Array.map((value) => value = value + 1)
  - 返回修改之后的副本
- Array.reduce((a,b) => a + b)

可用之处很多的

```js
const array  = [5,4,7,8,9,2];

//求和
array.reduce((a,b) => a+b); // 输出: 35

//最大值
array.reduce((a,b) => a>b?a:b);// 输出: 9

//最小值
array.reduce((a,b) => a<b?a:b);// 输出: 2
```

- Array.flat(depth)
  - 扁平化多维数组
  - 指定嵌套数组结构应展平的深度的深度级别。默认为 1。
- Array.flatMap()
  - 返回一个新数
  - 一个新数组，每个元素都是回调函数的结果，并展平到深度为 1。
#### 字符串
- String.prototype.matchAll()
  - matchAll()方法返回与正则表达式匹配字符串的所有结果的迭代器，包括捕获组。
  - 使用matchAll可用，您可以避免while循环并exec使用g.
  - 通过使用matchAll，您可以获得一个迭代器，用于更方便的for...of、 array spread、 或Array.from()
  - 使用string.matchAll,而不是带全匹配符/g的regex.exec和string.match
  ```js
    const regexp = /t(e)(st(\d?))/g;
    const str = 'test1test2';
  
    const array = [...str.matchAll(regexp)];
  
    console.log(array[0]);
    // expected output: Array ["test1", "e", "st1", "1"]
  
    console.log(array[1]);
    // expected output: Array ["test2", "e", "st2", "2"]
  
    const regexp = RegExp('foo[a-z]*','g');
    const str = 'table football, foosball';
    const matches = str.matchAll(regexp);
  
    for (const match of matches) {
    console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
    }
    // expected output: "Found football start=6 end=14."
    // expected output: "Found foosball start=16 end=24."
  
    // matches iterator is exhausted after the for..of iteration
    // Call matchAll again to create a new iterator
    Array.from(str.matchAll(regexp), m => m[0]);
    // Array [ "football", "foosball" ]
  
    // 捕获组
    var regexp = /t(e)(st(\d?))/g;
    var str = 'test1test2';
  
    str.match(regexp);
    // Array ['test1', 'test2']
    let array = [...str.matchAll(regexp)];
    array[0];
    // ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
    array[1];
    // ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
  ```
#### 比较两个对象
```js
function is_array(value) {
    return typeof value.reduce == 'function'&&typeof value.filter == 'function'
            &&typeof value.map == 'function' && typeof value.length == 'number'
}
function arrcmp(a,b) {
    if(!is_array(a)&&is_array(b)) return false
    if(a.length != b.length) return false
    for(let i = 0;i < a.length;i++){
        if(a[i] != b[i]){
            return false
        }
    }
    return true
}

function objcmp(a,b){
    let A = Object.getOwnPropertyNames(a)
    let B = Object.getOwnPropertyNames(b)
    if(A.length !== B.length){
        return false
    }
    for(let i = 0;i < A.length;i++){
        let propName = A[i]
        let p1 = a[propName]
        let p2 = b[propName]
         if(!is_array(p1)&&is_array(p2)) {
            if(!arrcmp(p1,p2)){
                return false
            }
         }else {
             if(p1.constructor === Object && p2.constructor === Object){
                 if(!objcmp(p1,p2)){
                     return false
                 }else if(p1 !== p2){
                     return false
                 }
             }
         }
    }
    return true
}
```

### 函数

普通函数和箭头函数。

普通函数：函数调用+构造函数。函数的作用域中存在一个类数组argument对象，它持有参数的长度和传递给函数值，即使是函数定义中并不存在的参数名也是如此。

箭头函数：this关键字指向this表示的作用域外的任意内容。箭头函数的作用域中并不存在类数组的arguements对象。

#### 函数结构

return关键字不是必须的。不过，即使未指定return关键字，在函数体内的所有语句都执行完后，函数仍会返回。

在ES5的函数中，this关键字指向函数被执行的语境。它通常是全局的window对象。如果函数使用new关键字来实例化对象，那么this关键字将指向函数实例化的对象实例。

argument类数组对象，它持有参数的长度和传递给函数值，即使是函数定义中并不存在的参数名也是如此。

#### 匿名函数

匿名函数通常用作时间回调，在这种情况下，我们通常不需要知道函数的名称，只是在事件完成后的某个时刻执行改函数。

将函数赋值给变量，使其成为有名函数。

#### 高阶函数

真正使函数抽象化的是高阶函数本身无须具体知道它在做什么。它只是针对一组执行操作的逻辑框架。

`高阶函数`是将函数作为其参数或返回函数（或二者同时存在）的函数。

一个函数要符合高阶函数的条件，就需要将`函数作为参数`或`返回函数`。只要满足其中一个条件，我们创建的就是高阶函数。

```js
function add_one(value){
  return value + 1
}
function map(array,f) {
  let copy = []
  for (let index = 0;index < array.lenght; index++){
    let original = array[index]
    let modified = f(original)
    copy[index] = modified
  }
  return cpoy
}
```

通过隐藏迭代步骤，剩下的工作就是编写实际的函数，分别比较、添加或过滤每个值。这有助于集中精力解决问题，而不必要编写和重写大量代码。同时，这也会让代码看起来更整洁。

#### 箭头函数

ES6引入箭头函数，这是为JavaScript中创建`函数表达式`提供了一种简单的语法。箭头函数并不适用function关键字进行定义。

```js
() => {}

let fun = () => {
  return 1
}

let fun = () => 1


```

#### 箭头函数结构

箭头函数没有类似数组的arguments对象，也不能用作构造函数。this关键字指向箭头函数外部作用域中的相同值。

#### ES风格函数的相似

```js
function classic_one(){
  console.log(this)  //window
}
function classic_two(){
  console.log(this) //window
}
let arrow = () => {
  console.log(this) //window
}
```

当定义在全局作用域中时，对于this绑定来说，传统函数和箭头函数之间似乎没有什么区别。

箭头函数并不绑定this关键字，它从外部作用域中查找this的值，这与其他的变量一样。可以说箭头函数拥有“透明”的作用域。

箭头函数无argument对象

箭头函数无构造函数

继承的this语境。

普通函数：谁执行了这个函数，this就指向谁。

箭头函数根据其`使用位置`而非定义而为位置继承词法作用域。在那个语境中执行这个箭头函数，箭头函数中的this就指向它。

#### 动态创建HTML元素

```js
let E = document.createElement('div')


let div = document.createElement('div')
div.setAttribute('id','element')
div.style.position = 'absoute'


let div = document.createElement('div')
document.body.appendChild(div)



let div = document.createElement('div')
div.setAttribute('id-1','element')
document.getElementById("id-1").appendChild(div)
document.querySelector("id-1").appendChild(div)


也可以写函数创建
```

### 原型

在定义函数时，会执行两个动作：一个动作是创建函数对象，这是因为函数是对象；另一个动作是创建一个完全独立的原型对象；定义的函数的原型属性将指向该原型对象。

我们创建的每个函数都有一个 [[prototype\]](https://link.juejin.cn/?target=%E5%8E%9F%E5%9E%8B))属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。那么 prototype 就是调用 `构造函数` 而创建的那个对象`实例`的`的原型对象`。使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。

最主要的就是节省内存，如果属性和方法定义在原型上，那么所有的实例对象就能共享。

```js
// 定义Human函数
function Human(name){}
// 检查是否创建了原型对象
typedof Human.prototype; // "object"
```

Human.prototype将指向原型对象。该对象拥有另一个名为constructor的属性，该属性指回Human函数。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/prototype%E5%92%8Cconstructor.png)

Human是一个构造函数，用于创建Human类型的对象。它的原型对象指向内存中的单独实体—**原型对象**

原型属性不可以用于对象的实例，只可以用于构造函数。在实例上，可以通过`__proto__`来访问原型,最好是使用静态方法`Object.getPrototypeOf(instance)`，会返回与`__proto__`相同的原型对象。

#### 对象字面量的原型

```js
let literal = {
	prop:123,
  meth:function() {}
}

literal.__proto__    // Object
literal.__proto__.constructor    // f Object { [本地代码] }
literal.constructor    // f Object { [本地代码] }
```

创建literal时候，`literl.__proto__`就会连接到Object.prototype。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/__proto__%E6%8C%87%E5%90%91Object.prototype.png" style="zoom:50%;" />

JavaScript内部已经创建了Object.prototype。每当定义新对象时，都会创建一个二级对象，作为其原型。

#### 原型链接

5条原型规则，是学习理解原型链的基础。
 1.所有的引用类型（数组、对象、函数），都`具有对象特性`，即可自由扩展属性（除了“null”意外）
 2.所有的引用类型（数组、对象、函数），`都有一个_proto_(隐式原型)属性`，属性值是一个普通的对象
 3.所有的函数，`都有一个prototype(显式原型)属性`，属性值也是一个普通的对象
 4.所有的引用类型（数组、对象、函数），`__ proto __ 属性值指向它的构造函数的" __ prototype __ "属性值`
 5.当试图得到一个对象的某个属性时，`如果这个对象本身没 有这个属性，那么会去它的__proto__（即它的构造函数的 prototype）中寻找`。

```js
let instance = new Object()
instance.prop = 123
instance.meth = function(){}
```

Object的构造函数，会得到一个构造好的链接。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210627093044.png" style="zoom:50%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210802100638.png" style="zoom:50%;" />

在原型对象中使用.constructor（构造器）属性来区分，我这个原型对象被那个构造函数引用了。

.prototype属性执行单独的对象—内置的原型对象，在该示例中即Object.prototype,它类似于前面示例中的Human.prototype。

`__proto__` 属性是对象实例和构造函数的原型对象的链接。  就是一级一级往上找原型对象。

Object类型的**对象实例**拥有`__proto__`属性，后者指向构造函数的原型对象。Object创建的二级原型对象和`__proto__`指向Object的原型对象的实例。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812152130.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812152148.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809210423.png)

- js 每个对象都会拥有`prototype`属性的。这个属性指向一个对象，这个对象的所有属性和方法都会被构造函数的实例所继承。

- 只有对象（任何对象）只有`__proto__`去找它的原型对象。( 实例都包含一个指向构造函数的`原型对象`的内部指针。)。
- 实例都会有一个`constructor`属性去指向它的构造函数。
- 在原型对象中使用`.constructor`（构造器）属性来区分，我这个原型对象被那个构造函数引用了。所有原型对象都会自动获得一个constructor（构造函数）属性，这个属性是一个指向prototype属性所在函数的指针。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210811192816.png)

- 每个`构造函数`都有一个`原型对象`
- `原型对象`都包含一个指向`构造函数`的`指针.constructor`
- 而`实例`都包含一个指向`原型对象`的`指针.__proto__`

### 原型链   

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809210529.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210811193119.png)

**基于原型的执行规则：即原型链**

- 获取属性 xialuo.name或执行方法 xialuo. sahi()时
- 先在自身属性和方法寻找
- 如果找不到则自动去隐式原型_ proto_中查找

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210812152148.png)

 可以看出 `p1.__proto__.__proto__` 指向了 `Object.prototype`，`p1.__proto__.__proto__.__proto__` 最后指向了 null，由此可以看出了构建了一条**原型链**。

**原型链的构建依赖于实例对象的 `__proto__` ，并不是原对象的 `prototype`**

任何一个`实例对象`通过`原型链`找到它上面的`原型对象`，原型对象上的方法都是被对象实例所共享的。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210627093913.png" style="zoom:33%;" />

####  查找方法

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210627100827.png" style="zoom:33%;" />

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809210529.png)

**如果在对象上没有找到需要的属性或者方法引用，引擎就会继续在 `[[ptototype]]`关联的对象上进行查找，同理，如果在后者中也没有找到需要的引用就会继续查找它的[[prototype]],以此类推。这一系列对象的链接被称为“原型链”。**

调用Array.toString时，实际的动作是：JavaScript先在Array对象的原型上查找toString方法，但并未找到该方法；接下来，JavaScript决定在Array的父类Object的原型属性上查找toString方法，最终它找到Object.prototype.toString,并且执行后者。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210627101604.png)

#### 父对象

Array、Number等是如何知道Object是其父对象的呢？这正是原型继承的目的：在子对象和父对象之间创建链接。这通常被称为原型链。

#### 扩展自己的对象

Array和Number的父对象是Object。可以试着创建一些对象构造函数，并将他们的原型对象上的`__proto__`属性重新连接到父对象。

#### construcor属性

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210627102944.png" style="zoom:50%;" />

Function.construct是Function（循环），而Object.construct也是Function。这表示Function类是使用函数构造的，而Function本身就是类。这就是循环依赖关系。

#### Function

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210627103619.png" style="zoom:50%;" />

#### 原型实践（创建对象的集中方法）

#### 对象字面量（创建对象方法1）

```js
let cat = {}

cat.name = "Felix"
cat.hunger = 0
cat.energy = 1
cat.state = "idele"

cat.sleep = function(amount) {
  this.state = "sleeping"
  console.log(`${this.name} is ${this.state}`)
  this.energy += 1
  this.hunger += 1
}

cat.wakeup = function(amount) {
  this.state = "idle"
  console.log(`${this.name} woke up.`)
}
```

#### 使用Function构造函数（创建对象方法2）

```js
function Cat(name){
  this.name = name
}
var cat = new Cat('Felix')




function Cat(name,hunger,energy,state){
  let cat = {}

  cat.name = "Felix"
  cat.hunger = 0
  cat.energy = 1
  cat.state = "idele"

  cat.sleep = function(amount) {
    this.state = "sleeping"
    console.log(`${this.name} is ${this.state}`)
    this.energy += 1
    this.hunger += 1
  }

  cat.wakeup = function(amount) {
    this.state = "idle"
    console.log(`${this.name} woke up.`)
  }
  return cat
}

let felix = Cat("Felix",10,5,"idel")
felix.sleep() 
felix.wakeup()

let luna = Cat("luna",10,5,"idel")
luna.sleep() 
luna.wakeup()
```

#### 原型（Object.create来创建对象）（创建对象方法3）

`Object.create()`方法`创建一个新对象`，使用现有的对象来提供新创建的对象的`__proto__`。可以实现隔离。

```js
const me = Object.create(person); // me.__proto__ === person
```

我们发现一个问题。felix和luna的所有方法占用的内存空间是之前的两倍。这是因为我们为每只猫创建了两个对象字面量。这就是原型要解决的问题。

```js
const prototype = {
  sleep(amout) { //实现  }
  wakeup(amout) { //实现  }
  eat(amout) { //实现  }
  wander(amout) { //实现  }
}
```

包装好的所有方法都共享内存中的一个位置。

```js
const prototype = {
  sleep(amout) { //实现  }
  wakeup(amout) { //实现  }
  eat(amout) { //实现  }
  wander(amout) { //实现  }
}
    
function Cat(name,hunger,energy,state){
  let cat = {}

  cat.name = "Felix"
  cat.hunger = 0
  cat.energy = 1
  cat.state = "idele"

  cat.sleep = prototype.sleep
  cat.wakeup = prototype.wakeup
  return cat
}
```

##### 使用Object.create来创建对象

```js
const cat = {
  name:"Felix",
  state:"idle",
  hunger:1
}
const kitten = Object.create(cat)
kitten.name = "Luna"
kitten.state = "sleeping"

console.log(kitten)   // {name:"Luna",state:"sleeping"}

console.log(kitten.hunger) //1
```

这使用Object.create方法创建的对象特有的动作。当我们试着获取kitten.hunger时，JavaScript将查看kitten.hunger,但找到它（因为它并不是直接在kitten对象的实例上创建的）。

然后，JavaScript会查看cat对象中的hunger属性。因为kitten是使用Object.create(cat)创建的，所以kitten认为cat是它的父对象，因此它会查看cat对象。

最后，kitten在cat.hunger中找到hunger属性，在控制台上输出1。同样，hunger属性在内存中存储一次。

```js
const prototype = {
  sleep(amout) { //实现  }
  wakeup(amout) { //实现  }
  eat(amout) { //实现  }
  wander(amout) { //实现  }
}
    
function Cat(name,hunger,energy,state){
  let cat = Object.create(prototype)

  cat.name = name
  cat.hunger = hunger
  cat.energy = energy
  cat.state = state
  
  return cat
}
let felix = Cat("Felix",10,5,"idel")
felix.sleep() 

let luna = Cat("luna",10,5,"idel")
luna.sleep() 
```

现在语法是最佳的，sleep在内存中仅定义一次。无论创建多少个felix或luna，都不是会因为方法而浪费内存，因为他们只定义一次。

- 字面量和`new`关键字创建的对象是`Object`的实例，原型指向`Object.prototype`，继承内置对象`Object`

- `Object.create(arg, pro)`创建的对象的原型取决于`arg`，`arg`为`null`，新对象是空对象，没有原型，不继承任何对象；`arg`为指定对象，新对象的原型指向指定对象，继承指定对象。

#### instanceof

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

#### 构造函数

```js
console.log(typeof Object.prototype) //"object"
```

我们将所有的Cat函数直接附加到其内置的原型属性，而不是我们先前创建的prototype对象。

```js
function Cat(name,hunger,energy,state){
  let cat = Object.create(Cat.prototype)
  
  cat.name = name
  cat.hunger = hunger
  cat.energy = energy
  cat.state = state
  
  return cat
}
Cat.prototype.sleep = function() { //实现 }
Cat.prototype.wakeup = function() { //实现 }
Cat.prototype.eat = function() { //实现 }
Cat.prototype.wander = function() { //实现 }

let luna = Cat("Luan",5,1,"sleeping")
luna.sleep()
```

在这种情况下，JavaScript将先在luna对象上查找sleep方法，但是找不到它；然后JavaScript会在Cat.prototype上查找sleep方法，并在找到后进行调用。 

因此原型对象主要是作为一种特殊的查找对象保护在内存中，并在使用其构造函数实例化的所有对象实例之间进行共享。

#### new运算符

### new运算符的实现机制

1. 首先创建了一个新的`空对象`
2. `设置原型`，将对象的原型设置为函数的`prototype`对象。
3. 让函数的`this`指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

` let p1 = new Person();`

- step1，让变量`p1`指向一个空对象   `let p1 = {};`
- step2， 让 `p1` 这个对象的 `__proto__` 属性指向 `Person` 对象的原型对象。   `p1.__proto__ = Person.prototype;`
- step3， 让 `p1` 来执行 `Person` 方法。  `Person.call(p1);`

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

自己实现一个new运算符原理

```js
function Cat(name,hunger,energy,state){
  cat.name = name
  cat.hunger = hunger
  cat.energy = energy
  cat.state = state
}
Cat.prototype.sleep = function() { //实现 }
Cat.prototype.wakeup = function() { //实现 }
Cat.prototype.eat = function() { //实现 }
Cat.prototype.wander = function() { //实现 }

let luna =new Cat("Luan",5,1,"sleeping")
luna.sleep()
```

#### class关键字

```js
class Cat {
  constructor(name,hunger,energy,state){
    this.name = name
    this.hunger =hunger
    this.energy = energy
    this.state = state
  }
  sleep(amout) { //实现  }
  wakeup(amout) { //实现  }
  eat(amout) { //实现  }
  wander(amout) { //实现  }
}
```

### 面向对象编程(+类的继承实现方式)

```js
//print.js
const print = () => console.log(message)
export default print


// Ingredient
export default class Ingredient {
  constructor(name,type,calories){
    this.name = name
    this.type = type
    this.calories =calories
    this.minutes = {
      fried:0,
      boiled:0,
      baked:0
    }
  }
  static meat = 0
	static vegetable = 1
	static fruit = 2
	static meat = 3
	static sauce = 4
	static grain = 5
	static cheese = 6
	static spice = 7
}

//FoodFactory
export default class FoodFactory {
  constructor(){}
}
FoodFactory.make = function(what){
  return new Ingredient(what.name,what.type,what.calories)
}

//Fridge
export default class Fridge {
  constructor(ingredients){
    this.items = ingredients
  }
  get(type){
    return this.items.filter(i => i.type == type,0)
  }
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

### 事件

#### 浏览器事件

内置的浏览器事件是预设好的，并且在动作发生时，由浏览器执行。

1. **DOM事件基本**

```js
//HTML事件处理程序：
<input type="button" value="Click Me" onclick="alert('Clicked!')" />
<input type="button" value="Click Me" onclick="showMessage()" />



//DOM0 时代 DOM0级事件处理程序:
element.onclick = function(){}
var btn = document.getElementById("button")
btn.onclick = function() {alert(this.id)}
btn.onclick = null;


//DOM2 时代 DOM2级事件处理程序:
element.addEventListener('click',function(){},false)
var btn = document.getElementById("button");
btn.addEventListener("click", function() {alert(this.id)}, false);
btn.removeEventListener("click", function() {alert(this.id)}, false)
//false是冒泡阶段调用事件处理程序、true是捕获阶段


//DOM3 时代
element.addEventListener('keyup',function(){},false)


//IE事件处理程序:
var btn = document.getElementById("button");
btn.attachEvent("onclick", function() {alert("Clicked!")}); 
btn.detachEvent("onclick", function() {alert("Clicked!")}); 

```

2. **DOM事件模型** 

冒泡：从下往上

捕获：从上往下

3. **DOM事件流**

包含三个阶段：事件捕获阶段，处于事件阶段，和事件冒泡阶段。

**事件发生的顺序：** 按照W3C的标准，先发生捕获事件，后发生冒泡事件。如果一个元素已经执行了有两个同样的事件，但一个是捕获，一个是冒泡，只执行捕获事件。

用户的操作（例如点击事件）是怎么传递到页面上的，然后怎么响应的。

事件通过**捕获**达到**目标阶段**（目标元素），从目标元素**冒泡**到**windon**对象。

4. **描述DOM事件的捕获流程**

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210801180424.png" style="zoom:33%;" />

5. **Event对象的常见应用**

```js
event.preventDefault() //阻止默认事件
event.stopPropagation() //阻止冒泡行为
event.stopImmediatePropagation() //一个元素绑定两个事件。在一个事件中加入，另一个事件不执行
event.currentTarget() //返回其监听器触发事件的节点，即当前处理该事件的元素、文档或窗口。包括冒泡和捕获事件。
event.target() //target 事件属性可返回事件的目标节点（触发该事件的节点，也就是事件发生的源头，事件发生所绑定的那个节点
```

6. **自定义事件**

```js
var newEvent = new Event('custom')
// CustomEvent可以带参数
var newEvent2 = new CustomEvent('custom',{
    a:2
})
dom.addEventListener('custom',function(){
    console.log('custom')
})

// 触发自定义事件
dom.dispatchEvent(newEvent)
```

#### 事件捕获与事件冒泡

事件冒泡：指事件最开始是由最具体的元素接收，然后逐级向上传播到不具体的节点（文档）。

事件捕获：指事件最开始是由不具体的节点（文档）接收，然后逐级向下传播到最具体的元素。

addEventListener方法的最后一个参数useCaptue设为false，以禁止事件捕获模式。

addEventListener会同时监听捕获和冒泡。最后一个参数useCaptue使程序员可以自己选择事件传播模式。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210627150311.png" style="zoom:50%;" />

2. dispatchEvent

```js
document.dispatchEvent(startEvent)
```

3. removeEventListener

```js
document.removeEventListener('click',callback)
```

4. CustomEvent对象

时间可以携带附加数据，指定时间的详细信息。

```js
let info = {
  detail: {
    position:[125,210],
    info:"map location"
	}
}
// 自定义的事件名字，并且携带相关信息
let eventPin = new CustomEvent('pin',info)
let callback = function(event){
  console.log(event)
}
document.addEventListener('pin',callback)
document.dispatchEvent(eventPin)
```

5. setTimeout

定时器

```js
let callback = function() { console.log('event') }
let timer = setTimeout(callback,1000)
clearTimeout(timer)
timer = null
```

6. setInterval

时间间隔持续执行回调函数。

```js
let interval = setInterval(callback,1000)
clearInterval(interval)
interval = null
```

#### 事件委托/事件代理

不在事件发生的直接DOM上设置监听函数，而在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型（使用target属性），来做出不同的响应。

**使用原因/性能内存问题：** 在JS中，添加到页面的事件处理程序数量会关系到页面的整体运行性能。两个方面：每个函数都是对象，会占用内存，内存中对象越多，性能越差；大量事件处理程序导致的DOM访问次数会延迟整个页面的交互就绪时间。

```js
<ul id="name">
    <li id="1">a</li>
</ul>

var ul = document.getElementById("name");

ul.addEventListener("click", function(event){
    switch (event.target.id) {
        case "1":
            event.target.innerHTML = "aa";
            break;
    }
},false);
```

#### 拦截浏览器事件

```js
window.onload = function(evevt) {}
window.onresize = function(evevt) {}
window.focus = function(evevt) {}
window.onmousemove = function(evevt) {}
window.onmouseover = function(evevt) {}
window.onmouseout = function(evevt) {}


document.getElementById('id').onclick = function(event){
  console.log(event)
}
```

#### 显示鼠标位置

```js
window.onmouseove = function(event){
  //获取相对于文档的鼠标坐标
  let mouseX = event.pageX
  let mouseY = event.pageY
  //获取相对于元素区域的鼠标坐标
  let localX = event.clientX
  let localY = event.clientY
}
```

### 网路请求

```js
const Http = new XMLHttpRequest()
const url = "object.js"

Http.onreadystatechange = function(){
	//检查请求是否成功
  if(this.readyState == 4 && this.status == 200){
    let json = JSON.parse(Http.responseText)
    console.log(json)
    
    let id = json.id
    let name = json.name
    
    let userId = document.getElementById("id")
    if(userId) userId.innerHTML = id
    let userName = document.getElementById("name")
    if(username) userId.innerHTML = name
  }
}
Http.open('GET',url)
Http.send()
```

#### Promise

```js
// Promise.resolve
let promise = Promise.resolve("message")

promise.then(function(message)){
	console.log("then: "+message)       
}

promise.catch(function(error)){
	console.log("catch: "+error)       
}

promise.finally(function(msg)){
  console.log("finally: "+msg)   
}




// Promise.reject
let promise = Promise.reject("message")
promise.catch(function(error)){
	console.log("catch: "+error)       
}

//组装
let promise = new Promise(function(resolve,reject){
  let condition = ture
  if(condition) {
    resolve("message")
  }else {
    reject("error")
  }
}).then(function(msg){
  console.log(msg)
}).catch(function(error){
  console.log(error)
}).finally(() => {
  console.log("finally")
})


// Promise.all
var array = [promise,threat,wish]
Promise.all(array).then(function(value){
  console.log(values)
})
```

#### axios

#### Fetch API

```JS
let loading_animation = ture

fetch(request).then(respose => {
  var type = response.headers.get("content-type")
  if(type && type.includes("application/json")){
    return respose.json()
  }
  throw new TypeError("Content is not in JSON format")
}).then(json => {
  
}).catch(error => {
  
}).finally(() => {
  loading_animation = false
})
```

#### async/await

解决Promise的代码与一般的回调存在类似的问题。

#### 生成器

```js
function* generator() {
  try {
    yield 1
    yield 2
    yield 2
  }catch(error){
    console.log('Error caugth',error)
  }
}
let g = generator()
g.next()  //{value:1,done:false}
g.next()  //{value:2,done:false}
g.next()  //{value:3,done:false}

g.throw(new Error('Something went wrong'))

```

### 事件循环 （**Event Loop**）

++++++++++++++++++++++面试题目中：js运行机制有++++++++++

```
JS`是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列的代表就是，`Promise.then`，`MutationObserver`，宏任务的话就是`setImmediate setTimeout setInterval
```

JS运行的环境。一般为浏览器或者Node。 在浏览器环境中，有JS 引擎线程和渲染线程，且两个线程互斥。 Node环境中，只有JS 线程。 不同环境执行机制有差异，不同任务进入不同Event Queue队列。 当主程结束，先执行准备好微任务，然后再执行准备好的宏任务，一个轮询结束。

#### 浏览器中的事件环（Event Loop)

事件环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。

- eventLoop 是由JS的宿主环境（浏览器）来实现的；
- 事件循环可以简单的描述为以下四个步骤:
  1. 函数入栈，当Stack中执行到异步任务的时候，就将他丢给WebAPIs,接着执行同步任务,直到Stack为空；
  2. 此期间WebAPIs完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列，宏任务放到宏任务队列）
  3. 执行栈为空时，Event Loop把微任务队列执行清空；
  4. 微任务队列清空后，进入宏任务队列，取队列的第一项任务放入Stack(栈）中执行，执行完成后，查看微任务队列是否有任务，有的话，清空微任务队列。重复4，继续从宏任务中取任务执行，执行完成之后，继续清空微任务，如此反复循环，直至清空所有的任务。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809222955.png)

浏览器中的任务源(task):

- `宏任务(macrotask)`：
   宿主环境提供的，比如浏览器
   ajax、setTimeout、setInterval、setTmmediate(只兼容ie)、script、requestAnimationFrame、messageChannel、UI渲染、一些浏览器api
- `微任务(microtask)`：
   语言本身提供的，比如promise.then
   then、queueMicrotask(基于then)、mutationObserver(浏览器提供)、messageChannel 、mutationObersve

#### Node 环境中的事件环（Event Loop)

`Node`是基于V8引擎的运行在服务端的`JavaScript`运行环境，在处理高并发、I/O密集(文件操作、网络操作、数据库操作等)场景有明显的优势。虽然用到也是V8引擎，但由于服务目的和环境不同，导致了它的API与原生JS有些区别，其Event Loop还要处理一些I/O，比如新的网络连接等，所以Node的Event Loop(事件环机制)与浏览器的是不太一样。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210809223542.png" style="zoom:33%;" />

执行顺序如下：

- `timers`: 计时器，执行setTimeout和setInterval的回调
- `pending callbacks`: 执行延迟到下一个循环迭代的 I/O 回调
- `idle, prepare`: 队列的移动，仅系统内部使用
- `poll轮询`: 检索新的 I/O 事件;执行与 I/O 相关的回调。事实上除了其他几个阶段处理的事情，其他几乎所有的异步都在这个阶段处理。
- `check`: 执行`setImmediate`回调，setImmediate在这里执行
- `close callbacks`: 执行`close`事件的`callback`，一些关闭的回调函数，如：socket.on('close', ...)

### 调用栈？？？？
