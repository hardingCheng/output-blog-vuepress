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
