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
