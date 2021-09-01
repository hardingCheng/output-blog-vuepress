# JavaScript设计模式

## 面向对象

### 类

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



