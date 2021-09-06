# JavaScript设计模式

## 面向对象

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210902083929.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210902084449.png)

### 类

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210902084003.png)

```js
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

let zhang = new People('zhang', 20)
zhang.eat()
zhang.speak()

let wang = new People('wang', 21)
wang.eat()
wang.speak()
```

### 继承（子类继承父类）

```js
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

//继承
class Student extends People {
    constructor(name, age, number) {
      	//访问父类的属性
        super(name, age)
        this.number = number
    }
    study() {
        alert(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.study()
console.log(xiaoming.number)
let xiaohong = new Student('xiaohong', 11, 'A2')
xiaohong.study()
```

### 封装（数据的权限和保密）

ts 支持 private public protected  

### 多态（同一接口不同实现）

```js
class People {
    constructor(name) {
        this.name = name
    }
    saySomething() {}
}
class AP extends People {
    constructor(name) {
        super(name)
    }
    //重写父类方法
    saySomething() {
        alert('I am A')
    }
}
class BP extends People {
    constructor(name) {
        super(name)
    }
    //重写父类方法
    saySomething() {
        alert('I am B')
    }
}
let a = new A('a')
a.saySomething()
let b = new B('b')
b.saySomething()
```

### 实例

```js
class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {

    }
    // 此处省略若干 API
}
window.$ = function (selector) {
    return new jQuery(selector)
}
```

## 设计原则

### 设计原则

**SOLID五大设计原则**

- **S**单一职责原则
  - 一个程序只做好意见事情
  - 如果功能过复杂就拆开，每个部分保持独立
- **O**开放封闭原则
  - 对扩展开放，对修改封闭
  - 增加需求时候，扩展新代码，而非修改已有的代码
- **L**李氏转换原则
  - 子类能覆盖父类
  - 父类能出现的地方子类就能出现
  - JS 中使用较少（弱类型&继承使用较少）
- **I**独立接口原则
  - 保持接口的单一独立，避免出现“胖接口”
  -  JS 中没有接口（typescript 例外），使用较少 
  - 类似于单一职责原则，这里更关注接口
- **D**依赖导致原则
  - 面向接口编程，依赖于抽象而不依赖于
  - 具体使用方只关注接口而不关注具体类的实现 
  - JS 中使用较少（没有接口&弱类型）

### 设计模式

- 创建型
  - 工厂模式（エ厂方法模式，抽象工厂模式，建造者模式）
  - 单例模式
  - 原型模式
- 结构型
  - 适配器模式
  - 装饰器模式
  - 代理模式
  - 外观模式
  - 桥接模式
  - 组合模式
  - 享元模式
- 行为型
  - 策略模式
  - 迭代器模式
  - 模板方法模式
  - 职责连模式
  - 观察者模式
  - 命令模式
  - 备忘录模式
  - 中介者模式
  - 状态模式
  - 解释器模式
  - 访问者模式

### 工厂模式

- 将 new 操作单独封装

- 遇到 new 时，就要考虑是否该使用工厂模式

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210902122049.png" style="zoom:33%;" />

```js
class Product {
    constructor(name){
        this.name = name
    }
    init(){}
    fun1(){}
    fun2(){}
}

class Creator {
    create(name){
        return new Product(name)
    }
} 

let creator = new Creator()
let p1 = creator.create('p1')
let p2 = creator.create('p2')
```

#### 场景

- Jquery的`$(div)`
- `Reacr.createElement()`
- Vue的异步组件

#### 设计原则验证

- 构造函数和创建者分离
- 符合开放封闭原则

### 单例模式

- 系统中被唯一使用
- 一个类只有一个实例
- 保证一个类仅有一个实例，并提供一个访问它的全局访问点
- 有一些对象，比如线程池/全局缓存/浏览器中的 `window` 对象等等，我们就只需要一个实例。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210903084106.png" style="zoom:33%;" />

```js
class SingleObject {
    login() {
        console.log('login...')
    }
}
SingleObject.getInstance = (function () {
    //通过闭包存储实例，并进行判断
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance
    }
})()

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2)






class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框已显示')
    }
    hide() {
        if (this.state === 'hide') {
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框已隐藏')
    }
}
LoginForm.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new LoginForm();
        }
        return instance
    }
})()
// 一个页面中调用登录框
let login1 = LoginForm.getInstance()
login1.show()
// login1.hide()
// 另一个页面中调用登录框
let login2 = LoginForm.getInstance()
login2.show()
// 两者是否相等
console.log('login1 === login2', login1 === login2)
```

单例模式是一种简单但非常实用的模式，特别是惰性单例技术，在合适的时候才创建对象，并且只创建唯一的一个。更奇妙的是，创建对象和管理单例的职责被分布在两个不同的方法中，这两个方法组合起来才具有单例模式的威力。

#### 场景

- `Jquery`只有一个`$`
- 登录框
- `vuex`和`redux`中的`store`
- 购物车

#### 设计原则验证

- 符合单一职责原则，只实例化唯一的对象

- 没法具体开放封闭原则，但是绝对不违反开放封闭原则

### 适配模式

- 旧接口格式和使用者不兼容
- 中间加一个适配转换接口

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210905092017.png)

```js
class Adaptee {
    specificResource() {
        return '香港标准插头'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificResource()
        return `${info}  -转换器-   中国标准插头`
    }
}

let target = new Target()
target.request()
```

#### 场景

- 封装旧接口

```js
// 自己封装的 ajax,使用方式如下：
ajax({
    url: '/getData',
    type: 'POST',
    dataType: 'json',
    data:{
        id:'123'
    }
})
.done(function(response){})


// 但是历史原因，代码中全都是：
// $.ajax({.....})





// 就不用全局替换了
// 做一层适配器
var $ = {
    ajax:function(options){
        return ajax(options)
    }
}
```

- Vue Computed

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905093745.png" style="zoom:33%;" />

#### 设计原则验证

- 将旧接口和使用者进行分离
- 符合开放封闭原则

### 装饰器模式

- 为对象添加新功能
- 不改变其原有的结构和功能

- 简单来说，装饰器模式就是给对象动态增加功能。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905094810.png" style="zoom:33%;" />

```js
class Circle {
  draw(){
    console.log("画一个圆形")
	}
}

// 装饰器
class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle) {
    console.log("设置红色边框")
  }
}

let circle = new Circle()
circle.draw()
// 装饰完毕的
let dec = new Decorator()
dec.draw()
```

不直接修改鸭子内部，而是通过一个外部函数，引用这个鸭子，并为外部函数添加下蛋的功能。

```js
const before = function (fn, beforeFn) {
    return function () {
        beforeFn.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}

const after = function (fn, afterFn) {
    return function () {
        const __ = fn.apply(this, arguments)
        afterFn.apply(this, arguments)
        return __
    }
}

const duck =  {
    makeVoice: function () {
        console.log('我会嘎嘎嘎啦')
    },
    sleep: function () {
        console.log('谁又不会睡觉呢')
    },
    walk: function () {
        console.log('哈哈哈，我会走路啦')
    },
    init: function () {
        this.makeVoice()
        this.sleep()
        this.walk()
    }
}

after(duck.init, function egg () {
    console.log('生蛋快乐～')
}).apply(duck)


// 这就是装饰器模式，动态的为鸭子添加功能，而不直接修改鸭子本身。


```

#### 场景

- ES7装饰器

```js
//装饰类
@testable
class MyTestableClass {
  // ...
}
function testable(target) {
  target.isTestable = true;
}
alert(MyTestableClass.isTestable) // true

//原理
@decorator
class A{}
//等同于
class A {}
A = decorator(A) || A


function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}
const Foo = {
  foo() { alert('foo') }
}
@mixins(Foo)
class MyClass {}
let obj = new MyClass();
obj.foo() // 'foo'








function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }
    // 方法装饰器
    @readonly
    name() { return `${this.first} ${this.last}` }
}

var p = new Person()
console.log(p.name())
p.name = function () {} // 这里会报错，因为 name 是只读属性



function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}
const math = new Math();
const result = math.add(2, 4);
console.log('result', result);

```

- Core-decorators

```js

import { readonly, deprecate } from 'core-decorators'
class Person {
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }

  @readonly
  name() { 
    return `${this.first} ${this.last}` 
  }

  // 提示一些API已经废弃了，给用户提示
  @deprecate()
  getName() {
    return `${this.first} ${this.last}`
  }
}
```

- ### 数据上报

自定义事件的数据上报一般都依赖于点击事件，那么这个点击事件既要承担原本的功能，又要承担数据上报的功能。

**普通做法**

```js
const loginBtnClick = () => {
    console.log('去登录'）
    console.log('去上报')
} 
// 好像没毛病，这样的代码中项目中随处可见，逃避(面向过程编程)虽可耻但有用。
```

**装饰器模式做法**

可以通过装饰器模式来重构上述代码，将职责划分更细，代码松耦合，可复用性更高。

```js

const after = function (fn, afterFn) {
    return function () {
        const __ = fn.apply(this, arguments)
        afterFn.apply(this, arguments)
        return __
    }
}

const showLogin = function () {
    console.log('去登录')
}

const log = function () {
    console.log('去上报')
}

const loginBtnClick = after(showLogin, log)

loginBtnClick()

```

- ### 动态增加参数

一个常规的 `ajax` 请求参数包括 `type` / `url` / `param`，当突发一个特殊情况，需要在 `ajax` 的参数中，新增一个 `token` 参数。

**普通做法**

```js

const ajax = function (type, url, param) {
    // 新增token参数
    param.token = 'xxx'
    // ...ajax请求...省略
}
```

**装饰器做法**

通过装饰器模式，在 `ajax` 调用之前，为 `ajax` 增加 `token` 参数，代码如下：

```js
const before = function (fn, beforeFn) {
    return function () {
        //同一个arguments
        beforeFn.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}

let ajax = function (type, url, param) {
    console.log(arguments)
    // ...ajax请求...省略
}

ajax = before(ajax, function (type, url, param) {
    console.log(param)
    param.token = 'xxx'
})

ajax('type', 'url', {name: 'tj'})
```

- 其他

```js
class Plane{
  fire() {
    console.log('发射普通子弹')
  }
}

class MissileDecorator {
  constructor(plane) {
    this.plane = plane
  }

  fire() {
    this.plane.fire()
    console.log('发射导弹')
  }
}

class AtomDecorator {
  constructor(plane) {
    this.plane = plane
  }

  fire() {
    this.plane.fire()
    console.log('发射原子弹')
  }
}

let plane = new Plane()
//plane = new MissileDecorator(plane)
//plane = new AtomDecorator(plane)
//plane.fire() //发射普通子弹 发射导弹 发射原子弹





Function.prototype.before = function(beforefn) {
  var _self = this
  return function() {
    beforefn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

Function.prototype.after = function(afterfn) {
  var _self = this
  return function() {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

 var fun = function() {
  console.log(1)
 }

 var beforeFun = fun.before(function() {
   console.log(0)
 })
 beforeFun() //0 1 


 var afterFun = fun.after(function() {
   console.log(2)
 }).after(function() {
   console.log(3)
 })
 afterFun() //1 2 3
```

#### 设计原则

- 将现有的对象和装饰器进行分离，两者独立存在
- 符合开放封闭原则

装饰器模式，让对象更加稳定，且易于复用。而不稳定的功能，则可以在个性化定制时进行动态添加。

### 代理模式

- 使用者无权访问目标对象
- 中间加代理，通过代理做授权和控制

- 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。

- 代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905105430.png" style="zoom:33%;" />

```js
class RealImg {
  constructor(fileName) {
    this.fileName = fileName
    this.loadFromDisk()
  }

  display() {
    console.log(`display... ${this.fileName}`)
  }

  loadFromDisk() {
    console.log(`loading... ${this.fileName}`)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new RealImg(fileName)
  }

  display() {
    this.realImg.display()
  }
}

const proxyImg = new ProxyImg('1.png')
proxyImg.display()
```

#### 场景

- 网页事件代理

```js
 var ul = document.getElementById('ul')
    ul.addEventListener('click', function(e) {
      var target = e.target;
      if(target.nodeName === 'LI') {
        alert(target.innerHTML)
      }
    })
```

- `Jquery的$.proxy`

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905110001.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905110043.png" style="zoom:33%;" />

- `ES6的proxy`

```js

//明星
let star = {
  name: '张XX',
  age: 25,
  phone: '13900001111'
}

//经纪人
let agent = new Proxy(star, {
  get: function (target, key, receiver) {
    if(key === 'phone') {
      //返回经纪人自己的电话
      return '13922225555'
    }
    if(key === 'price') {
      //明星不报价，经纪人报价
      return 120000
    }
    return target[key]
  },
  set: function (target, key, value, receiver) {
    if(key === 'customPrice') {
      if(value < 100000) {
        throw new Error('价格太低')
      } else {
        target[key] = value
        return true
      }
    }
  }
})

console.log(agent.name) //张XX
console.log(agent.age) //25 
console.log(agent.phone) //13922225555
console.log(agent.price) //120000
agent.customPrice = 150000
console.log(star.customPrice) //150000
agent.customPrice = 90000 //Uncaught Error: 价格太低
```

- 图片懒加载

图片预加载时一种常见的技术，如果直接给 img 标签节点设置 src 属性，由于图片过大或网络不佳，图片的位置往往有一段时间时空白。

```js
const myImage = (() => {
 const imgNode = document.createElement('img')
 document.body.appendChild(imgNode)

 return {
  setSrc: src => {
   imgNode.src = src
  }
 }
})()

const loadingSrc = '../../../../img/loading.gif'
const imgSrc = 'https://img30.360buyimg.com/ling/jfs/t1/187775/5/8271/435193/60c8117eE7d79ef41/1d21db2c4dca9a90.png'

const proxyImage = (function () {
 const img = new Image()
 img.onload = () => {
  myImage.setSrc(img.src)
 }

 return {
  setSrc: src => {
   myImage.setSrc(loadingSrc)
   img.src = src
  }
 }
})()

proxyImage.setSrc(imgSrc)
```

1. 通过 `proxyImage` 控制了对 `MyImage` 的访问，在 `MyImage` 未加载成功之前，使用 `loading` 图占位；
2. 践行单一职责原则，给 `img` 节点设置 `src` 的函数 `MyImage`，预加载图片的函数 `proxyImage`，都只有一个职责；
3. 践行开放-封闭原则，给 `img` 节点设置 `src` 和预加载图片的功能，被隔离在两个对象里，它们可以各自变化不影响对方。

- ### 合并HTTP请求

假设我们要实现一个同步文件的功能，通过复选框，当复选框选中的时候，将该复选框对应的 id 传给服务器，告诉服务器需要同步 id 对应的文件。

思考一下，会发现，如果每选中一个复选框，就请求一次接口，假设 1s 内选中了 10 个复选框，那么就要发送 10 次请求。

可以通过虚拟代理来优化上述做法，新增一个代理，帮助复选框发起同步文件的请求，收集在这 1s 内的请求，1s 后再一起把这些文件 id 发送到服务器。

```html
<!DOCTYPE html>
<html>
<meta charset="utf-8" />
<head>
 <title></title>
</head>
<body>
  a <input type="checkbox" value="a" />
  b <input type="checkbox" value="b" />
  c <input type="checkbox" value="c" />
  d <input type="checkbox" value="d" />
 <script type="text/javascript" src="index.js">
 </script>
</body> 
</html>


```

```js

const synchronousFile = cache => {
  console.log('开始同步文件，id为：'+ cache.join('/'))
}

const proxySynchronousFile = (() => {
  const cache = []

  let timer

  return id => {
    console.log(id)
    cache.push(id)

    if (timer) {
      return
    }

    timer = setTimeout(() => {
      synchronousFile(cache)
      clearTimeout(timer)
      timer = null
      cache.length = 0
    }, 2000)
  }
})()

const checkbox = document.getElementsByTagName('input')

Array.from(checkbox).forEach(i => {
  console.log(i)
  i.onclick = () => {
    if (i.checked) {
      proxySynchronousFile(i.value)
    }
  }
})
```

- ### ajax异步请求数据

在列表需要分页时，同一页的数据理论上只需要去后台拉取一次，可以把这些拉取过的数据缓存下来，下次请求时直接使用缓存数据。

```js
(async function () {
  function getArticle (currentPage, pageSize) {
    console.log('getArticle', currentPage, pageSize)
    // 模拟一个ajax请求
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        data: {
          list: [],
          total: 10,
          params: {
            currentPage, 
            pageSize
          }
        }
      })
    })
  }
  
  const proxyGetArticle = (() => {
    const caches = []
  
    return async (currentPage, pageSize) => {
  
      const cache = Array.prototype.join.call([currentPage, pageSize],',')
  
      if (cache in caches) {
        return caches[cache]
      }
      const { data, ok } = await getArticle(currentPage, pageSize)
  
      if (ok) {
        caches[cache] = data
      }
  
      return caches[cache]
    }
  })()
  // 搜索第一页
  await proxyGetArticle(1, 10)
  // 搜索第二页
  await proxyGetArticle(2, 10)
  // 再次搜索第一页
  await proxyGetArticle(1, 10)
})()

```

#### 比较

1. 代理模式和适配器模式
   - 适配器模式：提供一个不同的接口（如不同版本的插头）
   - 代理模式：提供一模一样的接口

2. 代理模式和装饰器模式
   - 裝饰器模式：扩展功能，原有功能不变且可直接使用代理模式：
   - 显示原有功能，但是经过限制或者割之后的

### 外观模式

- 为子系统中的一组接口提供一个高层接口
- 使用者使用这个接口

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905141547.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905141757.png" style="zoom:33%;" />

#### 场景

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905142759.png" style="zoom:33%;" />

#### 设计原则验证

- 不符合单一职责原则和开放封闭原则，因此谨慎使用，不可滥用

### 观察者模式

- 发布&订阅
- 一对多
- 当对象之间存在一对多的依赖关系时，其中一个对象的状态发生改变，所有依赖它的对象都会收到通知，这就是观察者模式。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905143324.png" style="zoom:33%;" />

```js
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  
  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
    //修改状态，通知所有的观察者
    this.notifyAllObservers()
  }

  //修改状态，通知所有的观察者
  notifyAllObservers() {
    this.observers.forEach(observer => {
      //所有观察者操作
      observer.update(this.state)
    })
  }

  //添加观察者
  attach(observer) {
    this.observers.push(observer)
    observer.subject = this
  }
}

class Observer {
  constructor(name) {
    this.name = name
    this.subject = null
  }

  //
  update(state) {
    console.log(`${this.name} update state to ${state}`)
  }
}

const sub = new Subject()
const obs1 = new Observer('obs1')
const obs2 = new Observer('obs2')
sub.attach(obs1)
sub.attach(obs2)

sub.setState(1)
sub.setState(2)
sub.setState(3)
```

#### 场景

- 网页事件绑定

```js
document.body.addEventListener('click', function() {
  console.log(1)
}, false)

document.body.addEventListener('click', function() {
  console.log(2)
}, false)

document.body.click() //模拟用户点击
```

-  Promise

```js
function loadImg(src) {
    var promise = new Promise(function(resolve, reject) {
        var img = document.createElement('img');
        im.onload = function() {
            resolve(img);
        }
        img.onerror = function() {
            reject(new Error('Could not load'))
        }
        img.src = src;
    })
    return promise
}

var src = 'xxxxx'
var result = loadImg(src)
//通知所有的then
result.then(function(img) {
    console.log('width: ' + img.width)
    return img
}).then(function(img) {
    console.log('height: ' + img.height)
})
```

- Jquery callbacks  

```js
var callbacks = $.Callbacks()
    callbacks.add(function(info) {
      console.log('fn1', info)
    })
    callbacks.add(function(info) {
      console.log('fn2', info)
    })
    callbacks.add(function(info) {
      console.log('fn3', info)
    })

    callbacks.fire('go')
    callbacks.fire('fire')
```

- nodejs自定义事件

```js
const EventEmitter = require('events').EventEmitter
const emitter1 = new EventEmitter()
emitter1.on('some',() => {
    //监听some事件
    console.log('some event is occured 1')
})
emitter1.on('some',() => {
    //监听some事件
    console.log('some event is occured 2')
})
// 触发 some 事件
emitter1.emit('some')


const emitter2 = new EventEmitter()
emitter2.on('sbowName',(name) => {
    //监听some事件
    console.log('event occured',name)
})
// 触发 some 事件
emitter2.emit('sbowName','zhangsan')
```

```js
const EventEmitter = require('events').EventEmitter

//任何构造函数都可以继承 EventEmitter 的方法 on emit
class Cat extends EventEmitter {
    constructor(name){
        super()
        this.name = name
    }
}
var simon = new Cat('simon')
simon.on('miaomiao',function(){
    console.log(this.name,'barked')
})
setInterval(function(){
    simon.emit('miaomiao')
},500)
```

```js
//和上面的原理一样
var fs = require('fs')
var readStream = fs.createReadStream('./data/file.txt')
var length = 0
readStream.on('data', function(chunk) {
    length += chunk.toString().length
})
readStream.on('end', function() {
    console.log(length)
})
```

```js
//和上面的原理一样
var readline = require('readline')
var fs = require('fs')

var rl = readline.createInterface({
    input: fs.createReadStream('./data/file.txt')
})

var lineNum = 0
rl.on('line', function(line) {
    lineNum++
})
rl.on('close', function() {
    console.log('lineNum',lineNum)
})
```

- DOM事件

最常见的观察者模式场景就是 `DOM` 事件函数。

```js
document.body.addEventListener('click', () => {
    alert(2)
}, false)
```

当 `body` 节点被点击时，触发 `alert(2)`，从观察者模式来解释，就是我们订阅了 `bdoy` 节点的点击事件，当点击事件触发，我们就会收到通知。

- 网站登录

网站登录功能，想必大多数做过平台需求的同学都实现过，当网站中的不同模块，如 Header 模块、Nav 模块、正文模块，都依赖登录后获取的用户数据时。

登录模块是一个订阅对象，Header 模块、Nav 模块、正文模块添加对登录模块的订阅，当登录模块发生改变时，通知各个订阅了登录模块的模块。

```js
// 登录模块js
// 登录成功后，发布“loginSucc”登录成功消息，并传递data数据
login.succ(data=> {
    login.trigger('loginSucc', data)
})

// header模块js
// 订阅“loginSucc”登录成功消息
login.listen('loginSucc', () => {
    header.setAvatar(data.avatar)
})

// nav模块js
// 订阅“loginSucc”登录成功消息
login.listen('loginSucc', () => {
    nav.setAvatar(data.avatar)
})
```

- 双向数据绑定

双向数据绑定也可以通过观察者模式实现。

双向指的是视图 `view` 和模型 `model`，当视图发生改变时，模型也发生变化，同样，当模型发生改变，视图也跟着同步变化。

1. #### 新建发布-订阅对象

新建一个发布-订阅对象，用于发布消息，订阅消息。

- `subscribe`：订阅函数，当其他对象添加订阅消息时，将回调函数 `push` 进 `callbacks` 对象数组中；
- `publish`：发布函数，当发布消息时，触发 `callbacks` 中该消息对应的 `callback`.

```js
const Pubsub = {
    subscribe: function (ev, callback) {
        this._callbacks || (this._callbacks = {});
        (this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
    },

    publish: function () {
        const args = [...arguments]
        const ev = args.shift()

        if (!this._callbacks) return
        if (!this._callbacks[ev]) return

        this._callbacks[ev].forEach(callback => {
            callback(...args)
        })
    }
}
```

2. #### `UI`更新

   2.1 发布 `ui` 更新消息

   注册 `document` 的 `keyup` / `change` 事件，当激活事件的 `dom` 元素拥有 `data-bind`属性时，说明 `ui` 正在更新，发布 `ui` 更新消息通知订阅者。

   ```js
   
   function eventHander (e) {
       const { target } = e
       const { value: propValue } = target
   
       const propNameWhole = target.getAttribute('data-bind')
       if (propNameWhole) {
           // 发布ui更新消息
           Pubsub.publish('ui-update-event', { propNameWhole, propValue })
       }
   }
   
   console.log(document.addEventListener)
   document.addEventListener('change', eventHander, false)
   document.addEventListener('keyup', eventHander, false)
   ```

   2.2 订阅`model`更新消息

   所有包含 `data-bind` 属性的 `dom` 元素，订阅 `model` 更新消息，当 `model` 更新时，`ui` 将会收到通知。

   ```js
   // 订阅model更新消息，更新后所有符合条件的dom节点都会收到通知，进行更新
   Pubsub.subscribe('model-update-event', function ({propNameWhole, propValue}) {
       const elements = document.querySelectorAll(`[data-bind="${propNameWhole}"]`)
   
       elements.forEach(element => {
           const elementTagName = element.tagName.toLowerCase()
           const formTypeTagNames = ['input', 'select', 'textarea']
           if (formTypeTagNames.includes(elementTagName)) {
               element.value = propValue
           } else {
               element.innerHTML = propValue
           }
       })
   })
   ```

3. `model`更新

   3.1 订阅 `ui` 更新消息

   订阅 `ui` 更新消息，当 `ui` 更新时，触发 `modal` 更新。

   ```js
   class Bind {
       constructor () {
           this.modelName = ''
       }
   
       initModel ({ modelName }) {
           this.modelName = modelName
   
           // 订阅ui更新消息
           Pubsub.subscribe('ui-update-event', ({propNameWhole, propValue}) => {
               const [ , _propName] = propNameWhole.split('.')
               this.updateModalData(_propName, propValue)
           })
       }
       
       // xxx省略xxx
   
       updateModalData (propName, propValue) {
           const propNameWhole = `${this.modelName}.${propName}`
           // 发布model更新消息
           Pubsub.publish('model-update-event', { propNameWhole, propValue });
       }
   
   }
   ```

   3.2 发布model更新消息

   `model` 更新时，发布 `model` 更新消息，此时，订阅了 `model` 更新消息的 `ui`，将得到通知。

   ```js
   class Bind {
       constructor () {
           this.modelName = ''
       }
       
       // xxx省略xxx
   
       loadModalData (modelData) {
           for (let propName in modelData) {
               this.updateModalData(propName, modelData[propName])
           }
       }
   
       updateModalData (propName, propValue) {
           const propNameWhole = `${this.modelName}.${propName}`
           // 发布model更新消息
           Pubsub.publish('model-update-event', { propNameWhole, propValue });
       }
   
   }
   ```

- Nodejs 中：处理 ht 请求；多进程通讯
- Vue 和 React 组件生命周期触发
- Vue watch

#### 设计原则验证

- 主题和观察者分离，不是主动触发而是被动监听，两者解耦
- 符合开放封闭原则

#### 迭代器模式

- 顺序访问一个集合
- 使用者无需知知道集合的內部结构（封装）

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210905171232.png" style="zoom:33%;" />

```js

class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }

  next() {
    if(this.hasNext()) {
      return this.list[this.index++] 
    }
    return null
  }

  hasNext() {
    return this.index < this.list.length
  }
}

class Container {
  constructor(list) {
    this.list = list
  }

  getIterator() {
    return new Iterator(this)
  }
}

// var arr = [1, 2, 3, 4, 5]
// var container = new Container(arr)
// var iterator = container.getIterator()
// while(iterator.hasNext()) {
//   console.log(iterator.next())
// }
```

#### 场景

- Jquery each

```js
    var arr = [1,2,3]
    var nodeList = document.getElementsByTagName('li')
    var $a = $('li')

    function each(data) {
      var $data = $(data)
      $data.each(function(key, val) {
        console.log(key, val)
      })
    }

    each(arr)
    each(nodeList)
    each($a)
```

-  ES6 Iterator
  - ES6 语法中，有序集合的数据类型已经有很多
  -  Array Map Set String Typedarray arguments Nodelist 
  - 需要有一个统一的遍历接口来遍历所有数据类型
  - （注意，object 不是有序集合，可以用 Map 代替）
  - 以上数据类型，都有【Symbol, Iterate】属性
  - 属性值是函数，执行函数返回一个迭代器
  - 这个迭代器就有 next 方法可顺序迭代子元素可运行 Array.prototype [Symbol.Iterator ]来测试

```js
function each(data) {
  //生成遍历器
  let iterator = data[Symbol.iterator]()

  let item = { done: false }
  while(!item.done) {
    item = iterator.next()
    if(!item.done) {
      console.log(item.value)
    }
  }
}

var map = new Map()
map.set(1, 'a')
map.set(2, 'b')
var arr = [1,2,3]
var str = 'abc'
each(arr)
each(str)
each(map)
```

- `for...of...`

#### 设计原则验证

- 迭代器对象和目标对象分离
- 迭代器将使用者与目标对象隔离开
- 符合开放封闭原则

### 状态模式

- 每个对象有状态变化

- 每次状态变化都会触发一个逻辑
- 不能总是用 if-else 来控制

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210906064649.png" style="zoom:33%;" />

```js
//状态
class State{
  constructor(color) {
    this.color = color
  }
  
  handle(context) {
    console.log(`turn to ${this.color} light`)
    //获取什么灯
    context.setState(this)
  }
}

//主体
//主体可以获得状态信息
class Context {
  constructor() {
    this.state = null
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
  }
}

const context = new Context()
const green = new State('green')
const yellow = new State('yellow')
const red = new State('red')
//状态切换和状态获取是分开的
green.handle(context)
console.log(context.getState())

yellow.handle(context)
console.log(context.getState())

red.handle(context)
console.log(context.getState())
```

#### 场景

- 有限状态机
  - 有限个状态、以及在这些状态之间的变化
  - 如交通信号灯

```js
import StateMachine from 'javascript-state-machine'
import $ from 'jquery'
//new了一个状态机模型
let fsm = new StateMachine({
  init: '收藏',//初始化状态
  transitions: [
    {
      name: 'doStore',
      form: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      form: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    //执行收藏
    onDoStore: function() {
      alert('收藏成功') 
      updateText()
    },
    //取消收藏
    onDeleteStore: function() {
      alert('取消收藏成功') 
      updateText()      
    }
  }
})

let $btn = $('#btn')

$btn.click(function() {
  if(fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

// 更新按钮文案 
function updateText() {
  $btn.text(fsm.state)
}

//初始化文案
updateText()
```

- 简单的Promise

```js
import StateMachine from 'javascript-state-machine'

const fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    //监听resolve
    onResolve(state, data){
      //state - 当前状态机实例; data - fsm.resolve(xxx) 传递的参数
      data.successList.forEach(fn => fn())
    },
    //监听reject
    onReject(state, data){
      //state - 当前状态机实例; data - fsm.reject(xxx) 传递的参数
      data.failList.forEach(fn => fn())
    }
  }
})

class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []
    fn(() => {
      // resolve 函数
      fsm.resolve(this)
    }, () => {
      // reject 函数
      fsm.reject(this)
    })
  }

  then(successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}

function loadImg(src) {
  const mp = new MyPromise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => resolve(img)
    img.onerror = () => reject()
    img.src = src
  })
  return mp
}

let src = 'https://www.baidu.com/img/bd_logo1.png'
let mp = loadImg(src)

mp.then(() => {
  console.log('success1')
}, () => {
  console.log('fail1')
})

mp.then(() => {
  console.log('success2')
}, () => {
  console.log('fail2')
})
```

#### 设计原则验证

- 将状态对象和主题对象分离，状态的变化逻辑单独处理
- 符合开放封闭原则

### 原型模式

- Clone 自己，生成一个新对象
- java 默认有 clone 接口，不用自己实现

#### js中的应用

`Object.create()`

```js
let prototype = {
  getName() {
    return this.first + '  ' + this.last
  },

  say() {
    alert('hello')
  }
}

let x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
alert(x.getName())
x.say()


//兼容不支持浏览器
Object.create = Object.create || function(obj) {
  var F = function() {}
  F.prototype = obj
  return new F()
}
```

#### 其他

```js
var myObj = (function() {
  var _name = 'sven'
  return {
    getName: function() {
      return _name
    }
  }
})()

console.log(myObj.getName()) // sven
//形成了的闭包，外部不可以访问函数内部的变量
console.log(myObj._name) // undefined

var obj1 = new Object()
var obj2 = {}

console.log(Object.getPrototypeOf(obj1) === obj1.__proto__)  //true
console.log(Object.getPrototypeOf(obj1) === Object.prototype) //true
console.log(Object.getPrototypeOf(obj2) === Object.prototype) //true


var obj = {name: 'sven'}

var A = function() {}
A.prototype = obj

var B = function() {}
B.prototype = new A()

var b = new B()
console.log(b.name) //sven
```

### 桥接模式

- 用于把抽象化与实现化解耦
- 使得二者可以独立变化

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210906170512.png" style="zoom:33%;" />

转化为：

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210906170438.png" style="zoom:33%;" />

#### 设计原则验证

- 抽象和实现分离，解耦
- 符合开放封闭原则

### 组合模式

- 生成树形结构，表示“整体-部分”关系
- 让整体和部分都具有一致的操作方式

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210906170808.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210906171442.png" style="zoom:33%;" />

- 整体和单个节点的操作是一致的
- 整体和单个节点的数据结构也保持一致 

#### 设计原则验证

- 讲整体和单个节点的操作抽象出来
- 符合开放封闭原贝

### 享元模式

- 共享内存（主要考虑内存，而非效率）
- 相同的数据，共享使用

#### 设计原则

- 将相同的部分抽象出来
- 符合开放封闭原则

### 策略模式

当我们计划国庆出去游玩时，在交通方式上，我们可以选择贵而快的**飞机**、价格中等但稍慢的**动车**、便宜但超级慢的**火车**，根据不同的人，选择对应的交通方式，且可以随意更换交通方式，这就是**策略模式**。

策略模式的定义是，定义一系列算法，把它们一个个封装起来，并且使它们可以相互替换。

- 不同策略分开处理
- 免出现大量 if.else 或者 switch.case

```js
class User {
  constructor(type) {
    this.type = type
  }

  buy() {
    if(this.type === 'oridinary') {
      console.log('普通用户购买')
    } else if(this.type === 'member') {
      console.log('会员用户购买')
    } else if('this.type' === 'vip') {
      console.log('vip 用户购买')
    }
  }
}

let u1 = new User('member') 
u1.buy()

class OridinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}
class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}

class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

class UserManager {
  constructor() {
    this.user = null
  }

  setUser(user) {
    this.user= user
  }

  userBuy() {
    this.user.buy()
  }
}


const m = new UserManager()
const u = new OridinaryUser()
m.setUser(u)
m.userBuy() //u2.buy()


class Color {
  constructor(name) {
    this.name = name
  }
}

class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  draw() {
    console.log(`${this.color.name} ${this.name}`)
  }
}

let red = new Color('red')
let circle = new Shape('circle', red)
circle.draw() //red circle
```

#### 场景

- 计算年终奖

有一个计算员工年终奖的需求，假设，绩效为 `S` 的员工年终奖是 `4` 倍工资，绩效为 `A` 的员工年终奖是 `3` 倍工资，绩效为 `B` 的员工年终奖是 `2` 倍工资，下面我们来计算员工的年终奖。

```js
var calculateBonus = function(performanceLevel, salary) {
 if (performanceLevel === 'S') {
  return salary * 4;
 }
 if (performanceLevel === 'A') {
  return salary * 3;
 }
 if (performanceLevel === 'B') {
  return salary * 2;
 }
};
calculateBonus('B', 20000); // 输出：40000 
calculateBonus( 'S', 6000 ); // 输出：24000

上述代码有以下缺点：
使用 if-else 语句描述逻辑，代码庞大；
缺乏弹性，如果需要修改绩效 S 的奖金系数，必须修改 calculateBonus 函数，违反了开放-封闭原则；
无法再次复用，当其他地方需要用到这套逻辑，只能再复制一份。




const strategies = {
 S: salary => {
  return salary * 4
 },
 A: salary => {
  return salary * 3
 },
 B: salary => {
  return salary * 2
 }
}
const calculateBonus = (level, salary) => {
 return strtegies[level](salary)
}

console.log(calculateBonus('s', 20000))
console.log(calculateBonus('a', 10000))

可以看到上述代码做了以下改动：
策略类 strategies 封装了具体的算法和计算过程（每种绩效的计算规则）；
环境类 calculateBonus 接受请求，把请求委托给策略类 strategies（员工的绩效和工资；
将算法的使用和算法的实现分离，代码清晰，职责分明；
消除大量的 if-else 语句。
```

- 表单验证

当网页上的表单需要校验输入框/复选框等等规则时，如何去实现呢？

现在有一个注册用户的表单需求，在提交表单之前，需要验证以下规则：

1. 用户名不能为空
2. 密码长度不能少于 6 位
3. 手机号码必须符合格式

```html
// 传统，使用 if-else 语句判断表单输入是否符合对应规则，如不符合，提示错误原因。

<!DOCTYPE html>
<html>
<head>
 <title></title>
</head>
<body>
 <form id='registerForm' action="xxx" method="post">
  用户名：<input type="text" name="userName">
  密码：<input type="text" name="password">
  手机号：<input type="text" name="phone">
  <button>提交</button>
 </form>
 <script type="text/javascript">
        let registerForm = document.getElementById('registerForm')

        registerForm.onsubmit = () => {
                if (registerForm.userName.value) {
                        alert('用户名不能为空')
                        return false
                }

                if (registerForm.password.value.length < 6) {
                        alert('密码长度不能少于6')
                        return false
                }

                if (!/(^1[3|5|8][0-9]$)/.test(registerForm.phone.value)) {
                        alert('手机号码格式不正确')
                        return false
                }
        }
        </script>
</body>
</html>

上述代码有以下缺点：
onsubmit 函数庞大，包含大量 if-else 语句；
onsubmit 缺乏弹性，当有规则需要调整，或者需要新增规则时，需要改动 onsubmit 函数内部，违反开放-封闭原则；
算法复用性差，只能通过复制，复用到其他表单。
```

```html
<!DOCTYPE html>
<html>
<head>
 <title></title>
</head>
<body>
 
 <form action="http://xxx.com/register" id="registerForm" method="post">
   请输入用户名：
  <input type="text" name="userName" />
   请输入密码：
  <input type="text" name="password" />
   请输入手机号码：
  <input type="text" name="phoneNumber" />
  <button>
   提交
  </button>
 </form>
 <script type="text/javascript" src="index.js">
  
 </script>            
</body>  
</html>
```

```js
// 表单dom
const registerForm = document.getElementById('registerForm')

// 表单规则
const rules = {
    userName: [
        {
            strategy: 'isNonEmpty',
            errorMsg: '用户名不能为空'
        },
        {
            strategy: 'minLength:10',
            errorMsg: '用户名长度不能小于10位'
        } 
    ],
    password: [
        {
            strategy: 'minLength:6',
            errorMsg: '密码长度不能小于6位'
        }
    ],
    phoneNumber: [
        {
            strategy: 'isMobile',
            errorMsg: '手机号码格式不正确'
        }
    ]
}

// 策略类
var strategies = {
    isNonEmpty: function(value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
     minLength: function(value, errorMsg, length) {
        console.log(length)
        if (value.length < length) {
            return errorMsg;
        }
    },
     isMobile: function(value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
};

// 验证类
const Validator = function () {
    this.cache = []
}

// 添加验证方法
Validator.prototype.add = function ({ dom, rules}) {
    rules.forEach(rule => {
        const { strategy, errorMsg } = rule
        console.log(rule)
        const [ strategyName, strategyCondition ] = strategy.split(':')
        console.log(strategyName)
        const { value } = dom
        this.cache.push(strategies[strategyName].bind(dom, value, errorMsg, strategyCondition))
    })
}

// 开始验证
Validator.prototype.start = function () {
    let errorMsg
    this.cache.some(cacheItem => {
            const _errorMsg = cacheItem()
            if (_errorMsg) {
                    errorMsg = _errorMsg
                    return true
            } else {
                    return false
            }
    })

    return errorMsg
}

// 验证函数
const validatorFn = () => {
    const validator = new Validator()
    console.log(validator.add)

    Object.keys(rules).forEach(key => {
        console.log(2222222, rules[key])
        validator.add({
            dom: registerForm[key],
            rules: rules[key]
        })
    })

    const errorMsg = validator.start()
    return errorMsg
}


// 表单提交
registerForm.onsubmit = () => {
    const errorMsg = validatorFn()
    if (errorMsg) {
        alert(errorMsg)
        return false
    }
    return false
}


// 上述代码通过 strategies 定义规则算法，通过 Validator 定义验证算法，将规则和算法分离，我们仅仅通过配置的方式就可以完成表单的校验，这些校验规则也可以复用在程序的任何地方，还能作为插件的形式，方便的被移植到其他项目中。
```

策略模式是一种常用且有效的设计模式，通过上述例子，可以总结出策略模式的一些优点：

- 策略模式利用组合/委托和多态等技术和思想，可以有效的避免多重条件选择语句；
- 策略模式提供了对开放-封闭原则的完美支持，将算法封装中独立的策略类中，使得它们易于切换/理解/扩展；
- 在策略模式中利用组合和委托来让 `Context` 拥有执行算法的能力，这也是继承的一种更轻便的代替方案。

#### 设计原则

- 不同策略，分开处理，而不是混合在一起
- 符合开放封闭原则

### 模板方法模式

```js
class Action {
  handle() {
    this.handle1()
    this.handle2()
    this.handle3()
  }

  handle1() {
    console('1')
  }

  handle2() {
    console('2')
  }

  handle3() {
    console('3')
  }
}
```

```js
class Beverage {
  init() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }

  boilWater() {
    console.log('把水煮沸')
  }

  brew(){} //沸水冲泡饮料
  pourInCup(){} //饮料倒进杯子
  addCondiments(){} //加调料
}

class Coffee extends Beverage {
  brew(){
    console.log('用沸水冲泡咖啡')
  } 
  pourInCup(){
    console.log('把咖啡倒进杯子')
  } 
  addCondiments(){
    console.log('加糖和牛奶')
  } 
}

class Tea extends Beverage {
  brew(){
    console.log('用沸水浸泡茶叶')
  } 
  pourInCup(){
    console.log('把茶倒进杯子')
  } 
  addCondiments(){
    console.log('加柠檬')
  } 
}

const coffee = new Coffee()
coffee.init()

const tea = new Tea()
tea.init()

```

### 职责链模式

职责链模式就是当一个对象 `a`，有多种可能的请求对象 `b`、`c`、`d`、`e` 时，我们为 `b`、`c`、`d`、`e` 分别定义一个职责，组成一条职责链，这样 `a` 只需要找到 `b` 发起请求，然后沿着职责链继续请求，直到找到一个对象来处理 `a`。

- 步操作可能分位多个职责角色来完成
- 把这些角色都分开，然后用一个链串起来
- 将发起者和各个处理者进行隔离

```js
class Action {
  constructor(name) {
    this.name = name
    this.nextAction = null
  }

  setNextAction(action) {
    this.nextAction = action
  }

  handle() {
    console.log(`${this.name} 审批`)
    this.nextAction && this.nextAction.handle()
  }
}

const action1 = new Action('组长')
const action2 = new Action('经理')
const action3 = new Action('总监')

action1.setNextAction(action2)
action2.setNextAction(action3)

action1.handle()
```

```js
const order500 = (orderType, pay, stock) => {
  if(orderType === 1 && pay === true){
    console.log('500元定金预购，得到100优惠券')
    return true
  }
  return false
}

const order200 = (orderType, pay, stock) => {
  if(orderType === 2 && pay === true){
    console.log('200元定金预购，得到50优惠券')
    return true
  }
  return false
}

const orderNormal = (orderType, pay, stock) => {
  if(stock > 0){
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机内存不足')
  }
  return true
}

class Chain {
  constructor(fn) {
    this.fn = fn
    this.successor = null
  }

  setNextSuccessor(successor){
    this.successor = successor
  }

  passRequest() {
    const res = this.fn.apply(this, arguments)
    return res ? res : this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
}

const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500) //500元定金预购，得到100优惠券
chainOrder500.passRequest(2, true, 500) //200元定金预购，得到50优惠券
chainOrder500.passRequest(3, false, 500) //普通购买，无优惠券
chainOrder500.passRequest(3, false, 0) //手机内存不足


//上述代码将 chainOrder500 和 chainOrder200 组成一条职责链，不管用户是哪种类型，都只需要向 chainOrder500 发起请求，如果 chainOrder500 无法处理请求，就会继续沿着职责链发起请求，直到找到能处理请求的职责方法。

//通过职责链模式，解耦了请求发送者和多个接收者之间的复杂关系，不再需要知道具体哪个接收者来接收发送的请求，只需要向职责链的第一个阶段发起请求。
```

职责链模式，帮助我们管理代码，降低发起请求和接收请求对象之间的耦合。

职责链模式中的节点数量和顺序是可以自由变动的，可以在运行时决定链中包含哪些节点。

#### 场景

- JS 中能联想到链式操作  
- jquery 的链式操作 Promise.then 的链式操作

#### 设计原则验证

- 发起者于各个处理者进行隔离
- 符合开放封闭原贝

### 命令模式

- 执行命令时，发布者和执行者分开中间
- 加入命令对象，作为中转站

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210906174323.png" style="zoom:33%;" />

```js
//接受者 执行者
class Receiver{
  exec() {
    console.log('执行')
  }
}

//命令者
class  Command {
  constructor(receiver) {
    this.receiver = receiver
  }

  cmd() {
    console.log('执行命令')
    this.receiver.exec()
  }
}

//触发者
class Invoker {
  constructor(command) {
    this.command = command
  }

  invoke() {
    console.log('开始')
    this.command.cmd()
  }
}

//士兵
const soldier = new Receiver()
//小号手 -> 吹号让士兵进攻
const trumpeter = new Command(soldier)
//将军 -> 命令小号手吹号
const general = new Invoker(trumpeter)

general.invoke()
```

#### 场景

网页富文本编辑器操作，浏览器封装了一个命令对象  

document.execcommand (bold)  

document.execcommand (undo)

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210906174806.png" style="zoom:33%;" />

```js
const bindClick = (button, func) => {
  button.onclick = func
}

const MenuBar = {
  refresh() {
    console.log('刷新菜单界面')
  }
}

const SubMenu = {
  add() {
    console.log('增加子菜单')
  },
  del() {
    console.log('删除子菜单')
  }
}

bindClick(button1, MenuBar.refresh)
bindClick(button2, SubMenu.add)
bindClick(button3, SubMenu.del)
```

#### 设计原则验证

- 命令对象于执行对象分开，解耦
- 符合开放封闭原则

### 备忘录模式

- 随时记录一个对象的状态变化
- 随时可以恢复之前的某个状态（如撤销功能）
- 未找到 JS 中经典应用，除了一些工具（如编辑器）

```js
//备忘类
class Memento {
  constructor(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }
}

//备忘列表
class CareTaker {
  constructor() {
    this.list = []
  }

  add(memento) {
    this.list.push(memento)
  }

  get(index) {
    return this.list[index]
  }
}

//编辑器
class Editor {
  constructot() {
    this.content =  null
  }

  setContent(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }

  saveContentToMemento() {
    return new Memento(this.content)
  }

  setContentFromMemento(mement) {
    return this.content = mement.getContent()
  }
 }

 //测试代码
const editor = new Editor()
//备忘录
const careTaker = new CareTaker()

editor.setContent('1')
editor.setContent('2')
careTaker.add(editor.saveContentToMemento())
editor.setContent('3')
careTaker.add(editor.saveContentToMemento())
editor.setContent('4')
console.log(editor.getContent()) // 4
editor.setContentFromMemento(careTaker.get(1)) //撤销
console.log(editor.getContent()) // 3 
editor.setContentFromMemento(careTaker.get(0)) //撤销
console.log(editor.getContent()) // 2
```

#### 设计原则验证

- 状态对象于使用者分开，解耦
- 符合开放封闭原则

### 中介者模式

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210906180112.png)

```js
class A {
  constructor() {
    this.number = 0
  }

  setNumber(num, m) {
    this.number = num
    if(m) {
      m.setB()
    }
  }
}

class B {
  constructor() {
    this.number = 0
  }

  setNumber(num, m) {
    this.number = num
    if(m) {
      m.setA()
    }
  }
}

//中介者
class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  setB() {
    let num = this.a.number
    this.b.setNumber(num / 10)
  }

  setA() {
    let num = this.b.number
    this.a.setNumber(num + 5)
  }
}

const a = new A()
const b = new B()
const m = new Mediator(a, b)
a.setNumber(100, m)
console.log(a.number, b.number)

b.setNumber(100, m)
console.log(a.number, b.number)
```

#### 设计原则验证

- 讲各关联对象通过中介者
- 隔离符合开放封闭原则

### 访问者模式

- 将数据操作和数据结构进行分离
- 使用场景不多

### 解释器模式

- 描述语言语法如何定义，如何解释和编译
- 用于专业场景（bable）

