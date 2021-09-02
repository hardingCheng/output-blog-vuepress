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
p1.init()
```

