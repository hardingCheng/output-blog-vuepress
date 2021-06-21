# JavaScript数据结构与算法

## JavaScript基础
### 变量
javaScript 包含类型有：`数`，`字符串`，`布尔值`，`函数和对象`，还有`underfine`和`null`，以及`数组`、`日期`和`正则表达式`。
原生数据类型：`null`、`undefined`、`字符串`、`数`、`布尔值`、`Symbol`。
派生数据类型/对象：`JavaScript`、包含`函数`、`数组`和`正则表达式`。

### 真假值
数值类型|转换成布尔值
:----:|:----:
undefined|false
null|false
布尔值|true是true，false是false
数|+0，-0和NaN都是false，其他都是true
字符串|如果字符串是空的（长度是0）就是false，其他都是true（长度大于等于1）
对象（任何对象new Array(),new String(),new Boolean(),new Number()...）|true

### ==或者===
==
类型（x）|类型（y)|结果
:----:|:----:|:----:
null|undefined|true
undefined|null|true
数值|字符串|x==toNumber(y)
字符串|数|toNumber(x)==y
布尔值|任何类型|toNumber(x)==y
任何类型|布尔值|x==toNumber(y)
字符串或者数|对象|x==toPrimitive(y)
对象|字符串或者数|toPrimitive(x)==y

===
类型（x）|类型（y)|结果
:----:|:----:|:----:
数|x和y的值相同（但不是NaN）|true
字符串|x和y是相同的字符）|true
布尔值|x和y都是true或false|true
对象|x和y引用同一个对象|true
## ECMAScript和TypeScript
Babel.js  将新特性的js代码转化为只使用广泛支持的ES5特性的等价代码。
## 数组
### 为什用数组
**数组**是最简单的内存数据结构。数组存储一系列同一数据类型的值。在js中也可以在数组中保存不同类型的值，但我们还是遵守最佳实践，避免这么做。（其他的语言没有这个能力）。
### 创建和初始化数组
```javascript
// 第一种创建方法
let datsOfWeek = new Array()
datsOfWeek = new Array(7)
daysof = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri')


// 第二种创建方法
let datsOfWeek = []
let datsOfWeek = ['sun', 'mon', 'Tue', 'Wed', 'Thu', 'Fri']


//获取数组中已经存储了多少元素。
console.log(datsOfWeek.length)
```

### 添加元素
#### 在数组末尾插入元素
```js
// 如果想要给数组添加一个元素，只要把值赋值给数组中最后一个空位上的元素即可。
let string = ['sun', 'mon', 'Tue', 'Wed', 'Thu', 'Fri']
string[string.length] = 'xwc'
```
:::tip 提示
在js中，数组是一个可以修改的对象。如果添加元素，它就会动态增长。
:::

使用`push`方法
push方法，能把元素添加到数组的末尾。
```js
let number = [1, 2, 3, 4, 5, 6]
number.push(11)
number.push(11,12)
```
#### 在数组开头插入元素
```js
// 传统方法
// 所有元素向右移动一位，将要插入元素放在第一位。
// 放在Array原型对象上，所有数组实例对可以使用
let number = [1, 2, 3, 4, 5, 6]
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.legth;i > 0;i++){
        this[i] = this[i-1]
    }
    this[0] = value
}
number.insertFirstPosition(-1)
```
使用`unshift`方法
```js
let number = [1, 2, 3, 4, 5, 6]
number.unshift(-1)
number.unshift(-2,-3)
```

### 删除元素
#### 从数组末尾删除元素
要删除数组最靠后的元素，可以用pop方法。
```js
let number = [1, 2, 3, 4, 5, 6]
number.pop()
```
:::tip 提示
push和pop方法我们可以模拟栈
:::
#### 从数组开头删除元素
```js
// 重置索引
Array.prototype.reIndex = function(myArray) {
    const newArray = []
    for (let i = 0;i<myArray.length;i++){
        // 去除undefind的元素
        if (myArray[i] !== undefined){
            newArray.push(myArray[i])
        }
    }
    return newArray
}
// 去除数组的第一个元素
Array.prototype.removeFirstPosition = function() {
    for (let i = 0;i<this.length;i++){
        this[i] = this[i+1]
    }
    return this.reIndex(this)
}
let number = [1, 2, 3, 4, 5, 6]
number = number.removeFirstPosition()
```
使用`shift`方法
```js
let number = [1, 2, 3, 4, 5, 6]
number.shift()
```
:::tip 提示
unshift和shift方法我们可以模拟队列
:::
#### 从任意位置添加或者删除元素
使用`splice`方法。通过指定位置/索引，就可以删除相应位置上指定数量的元素。
```js
let number = [1, 2, 3, 4, 5, 6]
number.splice(3,2)  
```
使用`splice`方法。通过指定位置/索引，就可以开始添加相应元素。
```js
let number = [1, 2, 3, 4, 5, 6]
// splice方接受到的第一个参数，表示想要删除或插入的元素的索引值。
// splice方接受到的第二个参数，表示想要删除元素的个数。
// splice方接受到的第三个参数以及以后，就是要添加到数组里的值。
number.splice(3,0,7,8,9,10)

var arr = [8,6,7,4,5,1,2,3];
arr.splice(2,3,6,6,6);//索引2开始删除3个元素，但也插入3个元素
console.log(arr);
```
### 二维数组及其多维数组
js仅支持一维数组，并不支持矩阵。可以使用数组套数组。
```js
let averageTemp = []
averageTemp[0] = [1,2,3,4,5,6,7]
averageTemp[1] = [1,2,3,4,5,6,7]
```
#### 迭代二维数组的元素
```js
function printMatrix(myMatrix) {
    for (let i = 0;i<myMatrix.length;i++){
        for (let j = 0;j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j])
        }
    }
}
```
#### 多维数组
```js
const matrix3x3x3 = []
for (let i = 0;i<3;i++){
    matrix3x3x3[i] = []
    for (let j = 0;j<3;j++){
        matrix3x3x3[i][j] = []
        for (let z = 0;z<3;z++){
            matrix3x3x3[i][j][z] = i + j + z
        }
    }
}
```
#### 迭代三维数组的元素
```js
function printMatrix(matrix3x3x3) {
    for (let i = 0;i<matrix3x3x3.length;i++){
        for (let j = 0;j<matrix3x3x3[i].length;j++){
            for (let z = 0;z<matrix3x3x3[i][j].length;z++){
                console.log(matrix3x3x3[i][j][z])
            }
        }
    }
}
```
### js数组常用方法
js基础的数组用法
```js
// pop push shift unshift splice

// concat  
// 用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
var arr1 = [1,2,3];
var arr2 = [-1,-2,-3];
console.log(arr1.concat(arr2)); // 输出结果：[ 1, 2, 3, -1, -2, -3 ]
const zero = 0
const positiveNumbers = [1,2,3]
const negativeNumbers = [-3,-2,-1]
let numbers = negativeNumbers.concat(zero,positiveNumbers) // 依次往后链接


// every 
// 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
var arrAge = [32, 33, 16, 40];
var result = arrAge.every(function(value){ return value > 15; });
console.log(result); // 输出结果：true
var arrAge = [32, 33, 16, 40];
var result = arrAge.every(function(value){ return value > 18; });
console.log(result); // 输出结果：false


// filter
// 对数组中的每一项运行给定函数，返回该函数会返回true的项组成新的数组
var arrAge = [32, 33, 16, 40];
var result = arrAge.filter(function(value){ return value > 30; });
console.log(result); // 输出结果：[32, 33, 40]


// forEach
// 对数组中的每一项运行给定函数，这个方法没有返回值
var arrAge = [32, 33, 16, 40];
var result = arrAge.forEach(function(value){
    console.log(value);
});
// 输出结果：32
// 输出结果：33
// 输出结果：16
// 输出结果：40


// join
// 将所有的数组元素连接成一个字符串
var arrAge = [32, 33, 16, 40];
console.log(arrAge.join(',')); // 输出结果：32,33,16,40


// indexOf
// 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
var arrAge = [32, 33, 16, 40];
console.log(arrAge.indexOf(16)); // 输出结果：2


// lastIndexOf
// 返回在数组中搜索到的与给定参数相等的元素的索引里的最大值
var arrAge = [32, 33, 16, 16, 40];
console.log(arrAge.lastIndexOf(16)); // 输出结果：3


// map
// 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
var arrAge = [32, 33, 16, 40];
var result = arrAge.map(function(value){ return value / 2; });
console.log(result); // 输出结果：[16, 16.5, 8,20]


// reverse
// 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了第一个
var arrAge = [32, 33, 16, 40];
console.log(arrAge.reverse()); // 输出结果：[40,16,33,32]


// slice
// 传入索引数，将数组里对应索引范围内的元素作为新数组返回
// 第一个参数索引：必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
// 第二个参数索引：可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
var arrAge = [32, 33, 16, 40];
console.log(arrAge.slice(1,3)); // 输出结果：[33,16]
var arrAge = [32, 33, 16, 40];
console.log(arrAge.slice(1)); // 输出结果：[33,16,40]


// some
// 对数组中的每一项运行给定函数，如果任意一项true,则返回true
var arrAge = [32, 33, 16, 40];
var result = arrAge.some(function(value){ return value > 32; });
console.log(result) // 输出结果：true
var arrAge = [32, 33, 16, 40];
var result = arrAge.some(function(value){ return value > 41; });
console.log(result) // 输出结果：false


// sort
// 按照字母顺序对数组进行排队，也支持传入指定排序方法的函数作为参数
// array.sort()方法默认是升序排序，如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
    // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    // 若 a 等于 b，则返回 0。
    // 若 a 大于 b，则返回一个大于 0 的值
var arr = [8,6,7,4,5,1,2,3];
arr.sort();
console.log(arr); // 输出结果：[1,2,3,4,5,6,7,8]
var arr = [8,6,7,4,5,1,2,3];
arr.sort(function(a,b){
    if (a<b) {
        return -1
    }
    if (a>b){
        return 1
    }
    if (a=b){
        return 0
    }
});
console.log(arr); // 输出结果：[8,7,6,5,4,3,2,1]


// toString
// 将数组作为字符串返回
var arr = [8,6,7,4,5,1,2,3];
console.log(arr.toString()); // 输出结果：8,6,7,4,5,1,2,3


// valueOf
// 和toString类似，将数组作为字符串返回
var arr = [8,6,7,4,5,1,2,3];
console.log(arr.valueOf()); // 输出结果：8,6,7,4,5,1,2,3


// reduce
// 此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型
let arr = [1, 2, 3, 4, 5]
const add = (a, b) => a + b
let sum = arr.reduce(add) // sum = 15  相当于累加的效果
```

ES2015和ES2016
```js
// 数组遍历方法
// for...of...
for(const n of numbers) {
    console.log(n)
}


// @@iterator
// ES6新的迭代器 ( @@iterator)
// 返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对
let numbers = [1,2,3];
let iterator = numbers[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //undefined
for(const n of iterator) {
    console.log(n)  //都迭代完之后，iterator.next().value为undefined
}


// copWithin
// 复制数组中一些列元素到同同一数组指定的起始位置
// 它接受三个参数:
// index（必需）：表示复制的位置
// start（可选）：表示复制的起始位置，默认为0，负数为倒数
// end（可选） ：表示复制的结束位置（不包含）
var arr = [1, 2, 3, 4, 5, 6, 7];
var arr1 = arr.copyWithin(1);
console.log(arr1); //输出1,1,2,3,4,5,6
var arr = [1, 2, 3, 4, 5, 6, 7];
var arr2 = arr.copyWithin(1, 3);
console.log(arr2); //输出1,4,5,6,7,6,7
var arr = [1, 2, 3, 4, 5, 6, 7];
var arr3 = arr.copyWithin(1, 3, 5);
console.log(arr3); //输出1,4,5,4,5,6,7


// 迭代器方法entries
// 返回包含数组所有键值对的@@iterator
const arr1 = ['a', 'b', 'c']
for (let [index, val] of arr1.entries()) {
    console.log(index, val); // 0 a 1 b 2 c
}


// 迭代器方法keys
// 返回包含数组所有索引号的@@iterator
const arr1 = ['a', 'b', 'c']
for (let index of arr1.keys()) {
    console.log(index); // 0 1 2 
}


// 迭代器方法values
// 返回包含数组所有值的@@iterator
const arr1 = ['a', 'b', 'c']
for (let val of  arr1.values()) {
    console.log(val); // a b c
}


// inlcudes
// 判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回false。
let arr = ['react', 'angular', 'vue'];
if (arr.includes('react'))
{
    console.log('react存在'); 
}


// find
// 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素。第一个元素。
var arr = [1, 2, 3, 4, 5, 6, 7];
var ele = arr.find(function(ele, index, array) {
    return ele > 5;
})
console.log(ele); //输出6


// findIndex
// 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素在数组中的索引。第一个。
var arr = [1, 2, 3, 4, 5, 6, 7];
var index = arr.findIndex(function(ele, index, array) {
    return ele > 5;
})
console.log(index); //输出5


// fill
// 用静态值填充数组
var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.fill("a");
console.log(newArr); //输出["a", "a", "a", "a", "a", "a", "a"]


// Array.from ()
// 根据已有数组创建一个新数组
// 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
var obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}
var newArr = Array.from(obj); //输出['a', 'b', 'c']
let numbers2 = Array.from(numbers);


// Array.of ()
// 根据传入的参数创建一个数组
// 方法用于将一组值转换为数组。Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组
var arr1 = Array.of();
var arr2 = Array.of(5, 2)
console.log(arr1); //输出[]
console.log(arr2); //输出[5,2]
var arr3 = Array.of(...numbers)
function ArrayOf() {
    return [].slice.call(arguments);
}
```
## 栈
### 栈数据结构
栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称做栈顶，另一端叫做栈低。在栈里，新元素都靠近栈顶，旧元素都接近栈低。
#### 创建一个基于数组的栈
```js
class Stack {
    construct() {
        this.item = []
    }
}
```
- push(element(s)): 添加一个（或几个）新元素到栈顶。
- pop():移除栈顶元素，同时返回被移除的元素。
- peek():返回栈顶元素，不对栈做任何修改（该方法不会移除栈顶元素，仅仅返回它）。
- isEmpty():如果栈里没有任何元素就返回true，否则返回false。
- clear():移除栈里的所有元素。
- size():返回栈里的元素个数。该方法和数组的length属性很类似。
```js
class Stack {
    construct() {
        this.item = []
    }
    // push(element(s)): 添加一个（或几个）新元素到栈顶。
    push(element){
        this.item.push(element)
    }

    // pop():移除栈顶元素，同时返回被移除的元素。
    pop() {
        return this.item.pop()
    }

    // peek():返回栈顶元素，不对栈做任何修改（该方法不会移除栈顶元素，仅仅返回它）。
    peek(){
        return this.item[this.item.length - 1]
    }

    // isEmpty():如果栈里没有任何元素就返回true，否则返回false。
    isEmpty() {
        return this.item.length === 0
    }

    // size():返回栈里的元素个数。该方法和数组的length属性很类似
    size() {
        return this.item.length
    }
    
    // clear():移除栈里的所有元素。
    clear() {
        // this.item.length = 0
        this.item = []
    }
    
    // 数组中自带toString() 方法
}
```
#### 创建一个基于对象的升级版本栈
```js
class Stack {
    construct() {
        // 对象
        this.item = {}
        this.count = 0
    }
    // push(element(s)): 添加一个（或几个）新元素到栈顶。
    push(element){
        this.item[this.count] = element
        this.count++
    }

    // pop():移除栈顶元素，同时返回被移除的元素。
    pop() {
        if (this.isEmpty()){
            return undefined
        }
        this.count--
        const result = this.item[this.count]
        // 删除对象元素
        delete this.item[this.count]
        return result
    }

    // peek():返回栈顶元素，不对栈做任何修改（该方法不会移除栈顶元素，仅仅返回它）。
    peek(){
        if (this.isEmpty()){
            return undefined
        }
        return this.item[this.count - 1]
    }

    // isEmpty():如果栈里没有任何元素就返回true，否则返回false。
    isEmpty() {
        return this.count === 0
    }

    // size():返回栈里的元素个数。该方法和数组的length属性很类似
    size() {
        return this.count
    }
    
    // clear():移除栈里的所有元素。
    clear() {
        this.count = 0
        this.item = {}
    }
    
    // toString()
    toString() {
        if (this.isEmpty()){
            return ''
        }
        let objString = `${this.item[0]}`
        for (let i = 1;i < this.count;i++) {
            objString = `${objString},${this.item[i]}`
        }
        return objString
    }
}
```
#### 保护数据结构内部元素
##### 下划线命名约定  只是约定
```js
class Stack {
    construct() {
        // 对象
        this._item = {}
        this._count = 0
    }
}
```
##### 使用ES6的限定作用域Symbol实现类
```js
const _items = Symbol("stackItems")
class Stack {
    construct() {
       this[_items] = []
    }
    // 栈的方法
}


这种方法创建的了一个假的私有属性。使用ES6新增的方法Object.getOwnPropertySymbols方法能够取到类里面声明的所有Symbol属性
const stack = new Stack()
stack.push(5)
stack.push(8)
let objectSymbol = Object.getOwnPropertySymbols(stack)
console.log(objectSymbol.length) //1
console.log(objectSymbol) // [Symbol()]
console.log(objectSymbol[0]) //Symbol()
stack[objectSymbol[0]].push(1)
stack.print() // 5,8,1
```

##### 使用ES6的WeakMap实现类
有一种数据类型可以确保属性是私有的，就是WeakMap。WeakMap可以存储键值对，其中键是对象，值可以是任意数据类型。
```js
const items = new WeakMap()
class Stack {
    constructor(){
        items.set(this,[])
    }
    push(element){
        const s = items.get(this)
        s.push(element)
    }
    pop(){
        const s = items.get(this)
        const r = s.pop()
        return r
    }
    // 其他方法
}
```
items在Stack类里面是真正的私有属性。采用这种方法，代码可读性不强，而且在扩展类时无法继承私有属性。

##### 提案方法
```js
class Stack {
    constructor(props) {
        #count = 0
        #items = 0
    }
    // 栈的方法
}
```
### 栈解决的问题
- 图
- 回溯问题
#### 十进制到二进制
```js
function decimalToBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber;
    let rem;
    let binaryString = ''
    while (number > 0){
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}
```
#### 十进制转任何进制
```js
function baseConverter(decNumber,base) {
    const remStack = new Stack()
    let digits = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = ''
    if (!(base >= 2 && base <= 36) ) {
        return ""
    }
    while (number > 0){
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }
    return baseString
}
```
## 队列和双端队列
### 队列数据结构
队列是遵循先进先出（FIFO）原则的一组有序的项。队列在尾部添加新的元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
#### 创建队列
```js
class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0 // 追踪第一个元素
        this.item = {}  //使用对象更加高效
    }
}
```
- enqueue(element(s)):向队列尾部添加一个（或多个）新的项。
- dequeue():移除队列的第一项（即排在队列最前面的项）并返回被移除的元素。
- peek():返回队列中的第一个元素---最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息）。该方法在其他语言中也可以叫做front方法。
- isEmpty():如果队列中不包含任何元素，返回true，否则返回false。
- size():返回队列包含的元素个数，与数组的length属性类似。
```js
class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0 // 追踪第一个元素
        this.item = {}  //使用对象更加高效
    }
    // enqueue(element(s)):向队列尾部添加一个（或多个）新的项。
    enqueue(element){
        this.items[this.count] = element
        this.count++
    }
    dequeue(){
        if (this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++ // 修改当前第一个元素的位置
        return result
    }
    peek(){
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    size(){
        return this.count - this.lowestCount
    }
    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0 
    }
    toString(){
        if (this.isEmpty()){
            return ""
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1;i < this.count;i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
```
### 双端队列数据结构
双端队列是一种允许我们同时从前端和后端添加和移除元素的特殊队列。
#### 创建队列
```js
class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
}
```
- addFront(element):该方法在双端队列前端添加新的元素。
- addBack(element):该方法在双端队列后端添加新的元素（实现方法和Queue类中enqueue方法相同）。
- removeFront():该方法会从双端队列前端移除第一个元素（实现方法和Queue类中dequeue方法相同）。
- removeBack():该方法会从双端队列后端移除第一个元素（实现方法和Stack类中pop方法相同）。
- peekFront():该方法会从双端队列前端移除第一个元素（实现方法和Queue类中peek方法相同）。
- peekBack():该方法会从双端队列后端移除第一个元素（实现方法和Stack类中peek方法相同）。
```js
class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    // addFront(element):该方法在双端队列前端添加新的元素。
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        }else if (this.lowestCount > 0) {
            this.lowestCount-- 
            this.items[this.lowestCount] = element
        }else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i-1]
            }
        }
    }
    // addBack(element):该方法在双端队列后端添加新的元素（实现方法和Queue类中enqueue方法相同）。
    addBack(element){
        this.items[this.count] = element
        this.count++
    }
    // removeFront():该方法会从双端队列前端移除第一个元素（实现方法和Queue类中dequeue方法相同）。
    removeFront(){
        if (this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++ // 修改当前第一个元素的位置
        return result
    }
    // removeBack():该方法会从双端队列后端移除第一个元素（实现方法和Stack类中pop方法相同）。
    removeBack(){
        if (this.isEmpty()){
            return undefined
        }
        this.count--
        let result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    // peekFront():该方法会从双端队列前端移除第一个元素（实现方法和Queue类中peek方法相同）。
    peekFront() {
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    // peekBack():该方法会从双端队列后端移除第一个元素（实现方法和Stack类中peek方法相同）。
    peekBack() {
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.count - 1]
    }
}
```
### 使用队列和双端队列来解决问题
#### 循环队列---击鼓传花游戏  循环的把头元素插入尾巴
```js
function hotPotato(elementsList,num){
    const queue = new Queue()
    const eliminatedList = []
    for (let i = 0;i < elementsList.length;i++){
        // 初始化队列
        queue.enqueue(elementsList[i])
    }
    // 列表的人数
    while (queue.size() > 1){
        // num 设置某个时刻（人）就是被淘汰的
        for (let i = 0;i < num;i++) {
            // 模拟击鼓传花
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue()) // 被淘汰的人进入淘汰列表
    }
    return {
        eliminated:eliminatedList,
        winner:queue.dequeue() // 胜利的人
    }
}
```
#### 回文检查器   双端队列
```js
function palindromeChecker(aString){
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)){
        return false
    }
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar,lastChar
    for (let i = 0;i < lowerString.length;i++){
        deque.addBack(lowerString,charAt(i))
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar){
            isEqual = false
        }
    }
    return isEqual
}
```
#### javaScript任务队列
## 链表
### 链表数据结构
数组数据结构有一个缺点：（在大多数语言中）数组的大小是固定的，从数组的起点或者中间插入或者移除的成本很高，因为需要移动元素。
链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。
在数组中，我们可以直接访问任何位置的任何元素，而想要访问链表中间的一个元素，则需要从起点（表头）开始迭代链表直到找到所需的元素。
#### 创建链表
```js
function defaultEquals(a,b) {
    return a === b
}
export class Node {
    constructor(element) {
        this.element = element
        this.next = undefined //指向下一个元素
    }
}
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0 // 存储链表中元素的个数
        this.head = undefined // 保存第一个元素
        this.equalsFn = defaultEquals  // 比较函数
        
    }
}
```
LinkedList类的方法：
- push(element):向链表表尾添加一个新元素。
- insert(element,index):想链表的特定位置插入一个新元素。
- getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回undefined。
- remove(index):从链表的特定位置移除一个元素。结合getElementAt(index)使用。
- remove(element):从链表中移除一个元素。
- indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
- removeAt(index):从链表的特定位置移除一个元素。
- isEmpty():如果链表中不包括任何元素，返回true，如果链表长度>0则返回false。
- size():返回链表包含的元素的个数，与数组的length属性类似。
- toString():返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString()方法,让其只输出元素的值.

```js
function defaultEquals(a,b) {
    return a === b
}
export class Node {
    constructor() {
        this.elements = elements
        this.next = undefined //指向下一个元素
    }
}
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0 // 存储链表中元素的个数
        this.head = undefined // 保存第一个元素
        this.equalsFn = defaultEquals  // 比较函数

    }
    // push(element):向链表表尾添加一个新元素。
    push(element) {
        const node = new Node()
        let current //遍历的指针，因为只有一个head
        if (this.head == null) {
            this.head = node
        }else {
            current = this.head
            while (current.next != null) { // 获取最后一项
                current = current.next
            }
            // 将其next赋为新元素，简历链接
            current.next = node
        }
        this.count++
    }
    // removeAt(index):从链表的特定位置移除一个元素。
    // 移除的节点就会被遗弃在计算机内存中，等着被垃圾回收器清除。
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) {
            let current = this.head
            // 移除第一项
            if (index === 0) {
                this.head = current.next
            }else {
                let previous // 保存要删除元素的前一项
                for (let i = 0;i < index;i++){
                    previous = current
                    current = current.next
                }
                // 将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next
            }
            this.count--
            return current.elements
        }
       return undefined
    }
    // getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回undefined。
    getElementAt(index) {
        if(index >= 0 && index <= this.count) {
            let current = this.head
            for(let i = 0;i <index && node != null;i++){
                current = current.next
            }
            return current
        }
        return undefined
    }
    // remove(index):从链表的特定位置移除一个元素。
    remove(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            // 移除第一项
            if (index === 0) {
                this.head = current.next
            }else {
               const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.elements
        }
        return undefined
    }
    // insert（element,position):想链表的特定位置插入一个新元素。
    insert(element,index) {
        if(index >= 0 && index <= this.count) {
            const node = new Node(element)
            if(index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            }else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    // indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(element){
        let current = this.head
        for(let i = 0;i < this.count && current != null;i++) {
            if(this.equalsFn(element,current.elements)) {
                return i
            }
            current = current.next
        }
        return -1
    }
    // remove(element):从链表中移除一个元素。
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    // size():返回链表包含的元素的个数，与数组的length属性类似。
    size() {
        return this.count
    }
    // isEmpty():如果链表中不包括任何元素，返回true，如果链表长度>0则返回false。
    isEmpty() {
        return this.count === 0
    }
    // toString():返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString()方法,让其只输出元素的值.
    toString() {
        if(this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for(let i = 1;i<this.size() && current != null;i++){
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}
```
### 双向链表
双向链表和普通链表的区别在于，在链表中，一个结点只有链向下一个节点的链接，而在双向链表中，链接是双向的：一个链向向下一个元素，另一个链向前一个元素。
```js
function defaultEquals(a,b) {
    return a === b
}
export class Node {
    constructor() {
        this.elements = elements
        this.next = undefined //指向下一个元素
    }
}
class DoublyNode extends Node {
    constructor(element,next,prev){
        super(element,next)
        this.prev = prev
    }
}
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0 // 存储链表中元素的个数
        this.head = undefined // 保存第一个元素
        this.equalsFn = defaultEquals  // 比较函数

    }
    // push(element):向链表表尾添加一个新元素。
    push(element) {
        const node = new Node()
        let current //遍历的指针，因为只有一个head
        if (this.head == null) {
            this.head = node
        }else {
            current = this.head
            while (current.next != null) { // 获取最后一项
                current = current.next
            }
            // 将其next赋为新元素，简历链接
            current.next = node
        }
        this.count++
    }
    // removeAt(index):从链表的特定位置移除一个元素。
    // 移除的节点就会被遗弃在计算机内存中，等着被垃圾回收器清除。
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) {
            let current = this.head
            // 移除第一项
            if (index === 0) {
                this.head = current.next
            }else {
                let previous // 保存要删除元素的前一项
                for (let i = 0;i < index;i++){
                    previous = current
                    current = current.next
                }
                // 将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next
            }
            this.count--
            return current.elements
        }
        return undefined
    }
    // getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回undefined。
    getElementAt(index) {
        if(index >= 0 && index <= this.count) {
            let current = this.head
            for(let i = 0;i <index && node != null;i++){
                current = current.next
            }
            return current
        }
        return undefined
    }
    // remove(index):从链表的特定位置移除一个元素。
    remove(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            // 移除第一项
            if (index === 0) {
                this.head = current.next
            }else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.elements
        }
        return undefined
    }
    // insert（element,position):想链表的特定位置插入一个新元素。
    insert(element,index) {
        if(index >= 0 && index <= this.count) {
            const node = new Node(element)
            if(index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            }else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    // indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(element){
        let current = this.head
        for(let i = 0;i < this.count && current != null;i++) {
            if(this.equalsFn(element,current.elements)) {
                return i
            }
            current = current.next
        }
        return -1
    }
    // remove(element):从链表中移除一个元素。
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    // size():返回链表包含的元素的个数，与数组的length属性类似。
    size() {
        return this.count
    }
    // isEmpty():如果链表中不包括任何元素，返回true，如果链表长度>0则返回false。
    isEmpty() {
        return this.count === 0
    }
    // toString():返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString()方法,让其只输出元素的值.
    toString() {
        if(this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for(let i = 1;i<this.size() && current != null;i++){
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.tail = undefined // 链表最后一个元素的引用
    }
    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node; // NEW
        } else {
            // attach to the tail node // NEW
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { // NEW
                    this.head = node;
                    this.tail = node; // NEW
                } else {
                    node.next = this.head;
                    this.head.prev = node; // NEW
                    this.head = node;
                }
            } else if (index === this.count) { // last item NEW
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node; // NEW
                node.prev = previous; // NEW
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = this.head.next;
                // if there is only one item, then we update tail as well //NEW
                if (this.count === 1) {
                    // {2}
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                // last item //NEW
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // link previous with current's next - skip it to remove
                previous.next = current.next;
                current.next.prev = previous; // NEW
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    clear() {
        super.clear();
        this.tail = undefined;
    }
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
    inverseToString() {
        if (this.tail == null) {
            return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
            objString = `${objString},${previous.element}`;
            previous = previous.prev;
        }
        return objString;
    }
}
```
#### 循环链表
循环链表可以像链表一样只有单向引用，也可以像双向链表一样有双向引用。循环链表和链表之间唯一的区别在于，最后一个元素指向下一个元素的指针不是undefined而是第一个元素。
双向循环链表有指向head的元素的tail.next和指向tail元素的head.prev
```js
function defaultEquals(a,b) {
    return a === b
}
export class Node {
    constructor() {
        this.elements = elements
        this.next = undefined //指向下一个元素
    }
}
class DoublyNode extends Node {
    constructor(element,next,prev){
        super(element,next)
        this.prev = prev
    }
}
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0 // 存储链表中元素的个数
        this.head = undefined // 保存第一个元素
        this.equalsFn = defaultEquals  // 比较函数

    }
    // push(element):向链表表尾添加一个新元素。
    push(element) {
        const node = new Node()
        let current //遍历的指针，因为只有一个head
        if (this.head == null) {
            this.head = node
        }else {
            current = this.head
            while (current.next != null) { // 获取最后一项
                current = current.next
            }
            // 将其next赋为新元素，简历链接
            current.next = node
        }
        this.count++
    }
    // removeAt(index):从链表的特定位置移除一个元素。
    // 移除的节点就会被遗弃在计算机内存中，等着被垃圾回收器清除。
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) {
            let current = this.head
            // 移除第一项
            if (index === 0) {
                this.head = current.next
            }else {
                let previous // 保存要删除元素的前一项
                for (let i = 0;i < index;i++){
                    previous = current
                    current = current.next
                }
                // 将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next
            }
            this.count--
            return current.elements
        }
        return undefined
    }
    // getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回undefined。
    getElementAt(index) {
        if(index >= 0 && index <= this.count) {
            let current = this.head
            for(let i = 0;i <index && node != null;i++){
                current = current.next
            }
            return current
        }
        return undefined
    }
    // remove(index):从链表的特定位置移除一个元素。
    remove(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            // 移除第一项
            if (index === 0) {
                this.head = current.next
            }else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.elements
        }
        return undefined
    }
    // insert（element,position):想链表的特定位置插入一个新元素。
    insert(element,index) {
        if(index >= 0 && index <= this.count) {
            const node = new Node(element)
            if(index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            }else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    // indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(element){
        let current = this.head
        for(let i = 0;i < this.count && current != null;i++) {
            if(this.equalsFn(element,current.elements)) {
                return i
            }
            current = current.next
        }
        return -1
    }
    // remove(element):从链表中移除一个元素。
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    // size():返回链表包含的元素的个数，与数组的length属性类似。
    size() {
        return this.count
    }
    // isEmpty():如果链表中不包括任何元素，返回true，如果链表长度>0则返回false。
    isEmpty() {
        return this.count === 0
    }
    // toString():返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString()方法,让其只输出元素的值.
    toString() {
        if(this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for(let i = 1;i<this.size() && current != null;i++){
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}
export default class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.getElementAt(this.size() - 1);
            current.next = node;
        }
        // set node.next to head - to have circular list
        node.next = this.head;
        this.count++;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    // if no node  in list
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    // update last element
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size() - 1);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                // no need to update last element for circular list
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}
```
### 有序链表
有序链表是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到正确的位置来保证链表的有序性。
```js
export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};
export function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
export default class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.equalsFn = equalsFn;
        this.compareFn = compareFn;
    }
    push(element) {
        if (this.isEmpty()) {
            super.push(element);
        } else {
            const index = this.getIndexNextSortedElement(element);
            super.insert(element, index);
        }
    }
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, index === 0 ? index : 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }
    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}
```
### 创建StackLinkedList类
使用Linkedlist类及其变种类作为内部的数据结构来创建其他的数据结构，例如栈、队列和双向队列。
```js
export default class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items.removeAt(this.size() - 1);
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.getElementAt(this.size() - 1).element;
  }
  isEmpty() {
    return this.items.isEmpty();
  }
  size() {
    return this.items.size();
  }
  clear() {
    this.items.clear();
  }
  toString() {
    return this.items.toString();
  }
}
```
## 集合
集合，这是一种**不允许出现重复**的顺序数据结构。
### 构建数据集合
**集合**是由**一组无序且唯一**(不能重复)的项组成。该数据解雇使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中。
### 创建集合类
```js
class Set{
    construct(){
        // 使用对象，js对象不允许一个键指向两个相同的属性，也保证了集合里的元素都是唯一的。
        this.items = {}
    }
}
```
- add(element):向集合添加一个新元素。
- delete(element):从集合移除一个元素。
- has(element):如果元素在集合中，返回true，否则返回false。
- clear():移除集合中的所有元素。
- size():返回集合所包含元素的数量。它在数组的length属性类似。
- valuse():返回一个包含集合所有值（元素）的数组。
```js
class Set{
    construct(){
        // 使用对象，js对象不允许一个键指向两个相同的属性，也保证了集合里的元素都是唯一的。
        this.items = {}
    }
    // has(element):如果元素在集合中，返回true，否则返回false。
    has(element){
        // return element in this.items
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    // add(element):向集合添加一个新元素。
    add(element){
        if(!this.has(element)){
            this.items[element] = element
            return true
        }
        return false
    }
    // delete(element):从集合移除一个元素。
    delete(element) {
        if(this.has(element)){
            delete this.items[element]
            return true
        }
        return false
    }
    // clear():移除集合中的所有元素。
    clear(){
        this.items = {}
    }
    // size():返回集合所包含元素的数量。它在数组的length属性类似。
    size(){
        // 1.给集合添加length属性。
        // 2.
        return Object.keys(this.items).length
        // 3.手动提取属性，进行计数
    }
    // valuse():返回一个包含集合所有值（元素）的数组。
    valuse() {
        return Object.valuse(this.items)
    }
}
```
### 使用Set类
```js
const set = new Set();
set.add(1)
console.log(set.values()) // [1]
console.log(set.has(1)) // true
console.log(set.size()) // 1

set.add(2)
console.log(set.values()) // [1,2]
console.log(set.has(1)) // true
console.log(set.size()) // 2

set.delete(1)
console.log(set.values()) // [2]

set.delete(2)
console.log(set.values()) // []
```
### 集合运算
- 并集：对于给定的两个集合，返回一个包含两个集合中`所有`元素的新集合。
- 交集：对于给定的两个集合，返回一个包含两个集合中`共有`元素的新集合。
- 差集：对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的细新集合。
- 子集:验证一个给定集合是否是另一个集合的子集。
在自定义的Set类上新增方法。
#### 并集
```js
union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return otherSet
}

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
const unionAB = setA.union(setB)
console.log(unionAB.values()) // [1,2,3, 4, 5,6]
```
#### 交集
```js
intersection(otherSet){
    const intersectionSet = new Set()
    const values = this.values()
    for(let i = 0; i < values.length;i++){
        if(otherSet.has(values[i])){
            intersectionSet.add(values[i])
        }
    }
    return intersectionSet
}
const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
const intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values())  // [2,3]


// 优化算法
intersection(otherSet){
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if(otherValues.length - values.length > 0) {
        biggerSet = otherValues
        smallerSet = values
    }
    smallerSet,forEach(()=>{
        if(biggerSet.includes(values)){
            intersectionSet.add(values)
        }
    })
    return intersectionSet
}

```
#### 差集
```js
difference(otherSet){
    const differenceSet = new Set()
    this.values.forEach((value) => {
        if(!otherSet.has(value)) {
            differenceSet.add(value)
        }
    })
    return differenceSet
}

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
const differenceAB = setA.difference(setB)
console.log(differenceAB.values())  // [1]
```
#### 子集
```js
isSubsetOf(otherSet) {
    if(this.size() > otherSet.size()){
        return false
    }
    let isSubset = true
    // 每一个  every
    this.values().every((value) => {
        if(!otherSet.has(value)){
            isSubset = false
            return false
        }
        return true
    })
    return isSubset
}
```
### Set类
```js
// 模拟并集运算
const union = (setA, setB) => {
    const unionAb = new Set()
    setA.forEach((value) => unionAb.add(value))
    setB.forEach((value) => unionAb.add(value))
    return unionAb
}

// 模拟交集运算
const intersection = (setA, setB) => {
    const intersectionSet = new Set()
    setA.forEach((value) => {
        if(setB.has(value)){
            intersectionSet.add(value)
        }
    })
    return intersectionSet
}

// 模拟差值运算
const difference = (setA, setB) => {
    const differenceSet = new Set()
    setA.forEach((value) => {
        if(!setB.has(value)){
            differenceSet.add(value)
        }
    })
    return differenceSet
}

// 
```
### 使用扩展运算符计算并交差
```js
// 并
let newSet = new Set([...setA,...setB])

// 交
let newSet = new Set([...setA].filter(x => setB.has(x)))

// 差 
let newSet = new Set([...setA].filter(x => !setB.has(x)))
```

## 字典和散列表