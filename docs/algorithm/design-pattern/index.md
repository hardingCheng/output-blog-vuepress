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

