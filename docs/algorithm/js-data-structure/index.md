# JavaScript 数据结构与算法

## JavaScript 基础

### 变量

javaScript 包含类型有：`数`，`字符串`，`布尔值`，`函数和对象`，还有`underfine`和`null`，以及`数组`、`日期`和`正则表达式`。
原生数据类型：`null`、`undefined`、`字符串`、`数`、`布尔值`、`Symbol`。
派生数据类型/对象：`JavaScript`、包含`函数`、`数组`和`正则表达式`。

### 真假值

|                                数值类型                                 |                              转换成布尔值                               |
| :---------------------------------------------------------------------: | :---------------------------------------------------------------------: |
|                                undefined                                |                                  false                                  |
|                                  null                                   |                                  false                                  |
|                                 布尔值                                  |                      true 是 true，false 是 false                       |
|                                   数                                    |                 +0，-0 和 NaN 都是 false，其他都是 true                 |
|                                 字符串                                  | 如果字符串是空的（长度是 0）就是 false，其他都是 true（长度大于等于 1） |
| 对象（任何对象 new Array(),new String(),new Boolean(),new Number()...） |                                  true                                   |

### ==或者===

==
| 类型（x） | 类型（y) | 结果 |
| :----------: | :----------: | :---------------: |
| null | undefined | true |
| undefined | null | true |
| 数值 | 字符串 | x==toNumber(y) |
| 字符串 | 数 | toNumber(x)==y |
| 布尔值 | 任何类型 | toNumber(x)==y |
| 任何类型 | 布尔值 | x==toNumber(y) |
| 字符串或者数 | 对象 | x==toPrimitive(y) |
| 对象 | 字符串或者数 | toPrimitive(x)==y |

===
| 类型（x） | 类型（y) | 结果 |
| :-------: | :-----------------------: | :---: |
| 数 | x 和 y 的值相同（但不是 NaN） | true |
| 字符串 | x 和 y 是相同的字符） | true |
| 布尔值 | x 和 y 都是 true 或 false | true |
| 对象 | x 和 y 引用同一个对象 | true |

## ECMAScript 和 TypeScript

Babel.js 将新特性的 js 代码转化为只使用广泛支持的 ES5 特性的等价代码。

## 数组

### 为什用数组

**数组**是最简单的内存数据结构。数组存储一系列同一数据类型的值。在 js 中也可以在数组中保存不同类型的值，但我们还是遵守最佳实践，避免这么做。（其他的语言没有这个能力）。

### 创建和初始化数组

```javascript
// 第一种创建方法
let datsOfWeek = new Array();
datsOfWeek = new Array(7);
daysof = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri");

// 第二种创建方法
let datsOfWeek = [];
let datsOfWeek = ["sun", "mon", "Tue", "Wed", "Thu", "Fri"];

//获取数组中已经存储了多少元素。
console.log(datsOfWeek.length);
```

### 添加元素

#### 在数组末尾插入元素

```js
// 如果想要给数组添加一个元素，只要把值赋值给数组中最后一个空位上的元素即可。
let string = ["sun", "mon", "Tue", "Wed", "Thu", "Fri"];
string[string.length] = "xwc";
```

:::tip 提示
在 js 中，数组是一个可以修改的对象。如果添加元素，它就会动态增长。
:::

使用`push`方法
push 方法，能把元素添加到数组的末尾。

```js
let number = [1, 2, 3, 4, 5, 6];
number.push(11);
number.push(11, 12);
```

#### 在数组开头插入元素

```js
// 传统方法
// 所有元素向右移动一位，将要插入元素放在第一位。
// 放在Array原型对象上，所有数组实例对可以使用
let number = [1, 2, 3, 4, 5, 6];
Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.legth; i > 0; i++) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
number.insertFirstPosition(-1);
```

使用`unshift`方法

```js
let number = [1, 2, 3, 4, 5, 6];
number.unshift(-1);
number.unshift(-2, -3);
```

### 删除元素

#### 从数组末尾删除元素

要删除数组最靠后的元素，可以用 pop 方法。

```js
let number = [1, 2, 3, 4, 5, 6];
number.pop();
```

:::tip 提示
push 和 pop 方法我们可以模拟栈
:::

#### 从数组开头删除元素

```js
// 重置索引
Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    // 去除undefind的元素
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};
// 去除数组的第一个元素
Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};
let number = [1, 2, 3, 4, 5, 6];
number = number.removeFirstPosition();
```

使用`shift`方法

```js
let number = [1, 2, 3, 4, 5, 6];
number.shift();
```

:::tip 提示
unshift 和 shift 方法我们可以模拟队列
:::

#### 从任意位置添加或者删除元素

使用`splice`方法。通过指定位置/索引，就可以删除相应位置上指定数量的元素。

```js
let number = [1, 2, 3, 4, 5, 6];
number.splice(3, 2);
```

使用`splice`方法。通过指定位置/索引，就可以开始添加相应元素。

```js
let number = [1, 2, 3, 4, 5, 6];
// splice方接受到的第一个参数，表示想要删除或插入的元素的索引值。
// splice方接受到的第二个参数，表示想要删除元素的个数。
// splice方接受到的第三个参数以及以后，就是要添加到数组里的值。
number.splice(3, 0, 7, 8, 9, 10);

var arr = [8, 6, 7, 4, 5, 1, 2, 3];
arr.splice(2, 3, 6, 6, 6); //索引2开始删除3个元素，但也插入3个元素
console.log(arr);
```

### 二维数组及其多维数组

js 仅支持一维数组，并不支持矩阵。可以使用数组套数组。

```js
let averageTemp = [];
averageTemp[0] = [1, 2, 3, 4, 5, 6, 7];
averageTemp[1] = [1, 2, 3, 4, 5, 6, 7];
```

#### 迭代二维数组的元素

```js
function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
```

#### 多维数组

```js
const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}
```

#### 迭代三维数组的元素

```js
function printMatrix(matrix3x3x3) {
  for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
      for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
        console.log(matrix3x3x3[i][j][z]);
      }
    }
  }
}
```

### js 数组常用方法

js 基础的数组用法

```js
// pop push shift unshift splice

// concat
// 用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
var arr1 = [1, 2, 3];
var arr2 = [-1, -2, -3];
console.log(arr1.concat(arr2)); // 输出结果：[ 1, 2, 3, -1, -2, -3 ]
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers); // 依次往后链接

// every
// 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
var arrAge = [32, 33, 16, 40];
var result = arrAge.every(function(value) {
  return value > 15;
});
console.log(result); // 输出结果：true
var arrAge = [32, 33, 16, 40];
var result = arrAge.every(function(value) {
  return value > 18;
});
console.log(result); // 输出结果：false

// filter
// 对数组中的每一项运行给定函数，返回该函数会返回true的项组成新的数组
var arrAge = [32, 33, 16, 40];
var result = arrAge.filter(function(value) {
  return value > 30;
});
console.log(result); // 输出结果：[32, 33, 40]

// forEach
// 对数组中的每一项运行给定函数，这个方法没有返回值
var arrAge = [32, 33, 16, 40];
var result = arrAge.forEach(function(value) {
  console.log(value);
});
// 输出结果：32
// 输出结果：33
// 输出结果：16
// 输出结果：40

// join
// 将所有的数组元素连接成一个字符串
var arrAge = [32, 33, 16, 40];
console.log(arrAge.join(",")); // 输出结果：32,33,16,40

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
var result = arrAge.map(function(value) {
  return value / 2;
});
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
console.log(arrAge.slice(1, 3)); // 输出结果：[33,16]
var arrAge = [32, 33, 16, 40];
console.log(arrAge.slice(1)); // 输出结果：[33,16,40]

// some
// 对数组中的每一项运行给定函数，如果任意一项true,则返回true
var arrAge = [32, 33, 16, 40];
var result = arrAge.some(function(value) {
  return value > 32;
});
console.log(result); // 输出结果：true
var arrAge = [32, 33, 16, 40];
var result = arrAge.some(function(value) {
  return value > 41;
});
console.log(result); // 输出结果：false

// sort
// 按照字母顺序对数组进行排队，也支持传入指定排序方法的函数作为参数
// array.sort()方法默认是升序排序，如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
// 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
// 若 a 等于 b，则返回 0。
// 若 a 大于 b，则返回一个大于 0 的值
var arr = [8, 6, 7, 4, 5, 1, 2, 3];
arr.sort();
console.log(arr); // 输出结果：[1,2,3,4,5,6,7,8]
var arr = [8, 6, 7, 4, 5, 1, 2, 3];
arr.sort(function(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if ((a = b)) {
    return 0;
  }
});
console.log(arr); // 输出结果：[8,7,6,5,4,3,2,1]

// toString
// 将数组作为字符串返回
var arr = [8, 6, 7, 4, 5, 1, 2, 3];
console.log(arr.toString()); // 输出结果：8,6,7,4,5,1,2,3

// valueOf
// 和toString类似，将数组作为字符串返回
var arr = [8, 6, 7, 4, 5, 1, 2, 3];
console.log(arr.valueOf()); // 输出结果：8,6,7,4,5,1,2,3

// reduce
// 此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型
let arr = [1, 2, 3, 4, 5];
const add = (a, b) => a + b;
let sum = arr.reduce(add); // sum = 15  相当于累加的效果
```

ES2015 和 ES2016

```js
// 数组遍历方法
// for...of...
for (const n of numbers) {
  console.log(n);
}

// @@iterator
// ES6新的迭代器 ( @@iterator)
// 返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对
let numbers = [1, 2, 3];
let iterator = numbers[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //undefined
for (const n of iterator) {
  console.log(n); //都迭代完之后，iterator.next().value为undefined
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
const arr1 = ["a", "b", "c"];
for (let [index, val] of arr1.entries()) {
  console.log(index, val); // 0 a 1 b 2 c
}

// 迭代器方法keys
// 返回包含数组所有索引号的@@iterator
const arr1 = ["a", "b", "c"];
for (let index of arr1.keys()) {
  console.log(index); // 0 1 2
}

// 迭代器方法values
// 返回包含数组所有值的@@iterator
const arr1 = ["a", "b", "c"];
for (let val of arr1.values()) {
  console.log(val); // a b c
}

// inlcudes
// 判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回false。
let arr = ["react", "angular", "vue"];
if (arr.includes("react")) {
  console.log("react存在");
}

// find
// 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素。第一个元素。
var arr = [1, 2, 3, 4, 5, 6, 7];
var ele = arr.find(function(ele, index, array) {
  return ele > 5;
});
console.log(ele); //输出6

// findIndex
// 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素在数组中的索引。第一个。
var arr = [1, 2, 3, 4, 5, 6, 7];
var index = arr.findIndex(function(ele, index, array) {
  return ele > 5;
});
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
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3,
};
var newArr = Array.from(obj); //输出['a', 'b', 'c']
let numbers2 = Array.from(numbers);

// Array.of ()
// 根据传入的参数创建一个数组
// 方法用于将一组值转换为数组。Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组
var arr1 = Array.of();
var arr2 = Array.of(5, 2);
console.log(arr1); //输出[]
console.log(arr2); //输出[5,2]
var arr3 = Array.of(...numbers);
function ArrayOf() {
  return [].slice.call(arguments);
}
```

## 栈

只要后进先出的都是可以使用栈的。

### LeetCode

简单： 

		- 20 [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
		- 

### 栈数据结构

栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称做栈顶，另一端叫做栈低。在栈里，新元素都靠近栈顶，旧元素都接近栈低。

#### 创建一个基于数组的栈

```js
class Stack {
  construct() {
    this.item = [];
  }
}
```

- push(element(s)): 添加一个（或几个）新元素到栈顶。
- pop():移除栈顶元素，同时返回被移除的元素。
- peek():返回栈顶元素，不对栈做任何修改（该方法不会移除栈顶元素，仅仅返回它）。
- isEmpty():如果栈里没有任何元素就返回 true，否则返回 false。
- clear():移除栈里的所有元素。
- size():返回栈里的元素个数。该方法和数组的 length 属性很类似。

```js
class Stack {
  construct() {
    this.item = [];
  }
  // push(element(s)): 添加一个（或几个）新元素到栈顶。
  push(element) {
    this.item.push(element);
  }

  // pop():移除栈顶元素，同时返回被移除的元素。
  pop() {
    return this.item.pop();
  }

  // peek():返回栈顶元素，不对栈做任何修改（该方法不会移除栈顶元素，仅仅返回它）。
  peek() {
    return this.item[this.item.length - 1];
  }

  // isEmpty():如果栈里没有任何元素就返回true，否则返回false。
  isEmpty() {
    return this.item.length === 0;
  }

  // size():返回栈里的元素个数。该方法和数组的length属性很类似
  size() {
    return this.item.length;
  }

  // clear():移除栈里的所有元素。
  clear() {
    // this.item.length = 0
    this.item = [];
  }

  // 数组中自带toString() 方法
}
```

#### 创建一个基于对象的升级版本栈

```js
class Stack {
  construct() {
    // 对象
    this.item = {};
    this.count = 0;
  }
  // push(element(s)): 添加一个（或几个）新元素到栈顶。
  push(element) {
    this.item[this.count] = element;
    this.count++;
  }

  // pop():移除栈顶元素，同时返回被移除的元素。
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.item[this.count];
    // 删除对象元素
    delete this.item[this.count];
    return result;
  }

  // peek():返回栈顶元素，不对栈做任何修改（该方法不会移除栈顶元素，仅仅返回它）。
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.count - 1];
  }

  // isEmpty():如果栈里没有任何元素就返回true，否则返回false。
  isEmpty() {
    return this.count === 0;
  }

  // size():返回栈里的元素个数。该方法和数组的length属性很类似
  size() {
    return this.count;
  }

  // clear():移除栈里的所有元素。
  clear() {
    this.count = 0;
    this.item = {};
  }

  // toString()
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.item[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.item[i]}`;
    }
    return objString;
  }
}
```

#### 保护数据结构内部元素

##### 下划线命名约定 只是约定

```js
class Stack {
  construct() {
    // 对象
    this._item = {};
    this._count = 0;
  }
}
```

##### 使用 ES6 的限定作用域 Symbol 实现类

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

##### 使用 ES6 的 WeakMap 实现类

有一种数据类型可以确保属性是私有的，就是 WeakMap。WeakMap 可以存储键值对，其中键是对象，值可以是任意数据类型。

```js
const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }
  push(element) {
    const s = items.get(this);
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  // 其他方法
}
```

items 在 Stack 类里面是真正的私有属性。采用这种方法，代码可读性不强，而且在扩展类时无法继承私有属性。

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
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}
```

#### 十进制转任何进制

```js
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let digits = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}
```

## 队列和双端队列

先进先出的的场景。

#### LeetCode

		- [933. 最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/)

### 队列数据结构

队列是遵循先进先出（FIFO）原则的一组有序的项。队列在尾部添加新的元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

#### 创建队列

```js
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0; // 追踪第一个元素
    this.item = {}; //使用对象更加高效
  }
}
```

- enqueue(element(s)):向队列尾部添加一个（或多个）新的项。
- dequeue():移除队列的第一项（即排在队列最前面的项）并返回被移除的元素。
- peek():返回队列中的第一个元素---最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息）。该方法在其他语言中也可以叫做 front 方法。
- isEmpty():如果队列中不包含任何元素，返回 true，否则返回 false。
- size():返回队列包含的元素个数，与数组的 length 属性类似。

```js
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0; // 追踪第一个元素
    this.item = {}; //使用对象更加高效
  }
  // enqueue(element(s)):向队列尾部添加一个（或多个）新的项。
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++; // 修改当前第一个元素的位置
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
```

### 双端队列数据结构

双端队列是一种允许我们同时从前端和后端添加和移除元素的特殊队列。

#### 创建队列

```js
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
}
```

- addFront(element):该方法在双端队列前端添加新的元素。
- addBack(element):该方法在双端队列后端添加新的元素（实现方法和 Queue 类中 enqueue 方法相同）。
- removeFront():该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中 dequeue 方法相同）。
- removeBack():该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中 pop 方法相同）。
- peekFront():该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中 peek 方法相同）。
- peekBack():该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中 peek 方法相同）。

```js
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // addFront(element):该方法在双端队列前端添加新的元素。
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
    }
  }
  // addBack(element):该方法在双端队列后端添加新的元素（实现方法和Queue类中enqueue方法相同）。
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // removeFront():该方法会从双端队列前端移除第一个元素（实现方法和Queue类中dequeue方法相同）。
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++; // 修改当前第一个元素的位置
    return result;
  }
  // removeBack():该方法会从双端队列后端移除第一个元素（实现方法和Stack类中pop方法相同）。
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    let result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  // peekFront():该方法会从双端队列前端移除第一个元素（实现方法和Queue类中peek方法相同）。
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  // peekBack():该方法会从双端队列后端移除第一个元素（实现方法和Stack类中peek方法相同）。
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
}
```

### 使用队列和双端队列来解决问题

#### 循环队列---击鼓传花游戏 循环的把头元素插入尾巴

```js
function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    // 初始化队列
    queue.enqueue(elementsList[i]);
  }
  // 列表的人数
  while (queue.size() > 1) {
    // num 设置某个时刻（人）就是被淘汰的
    for (let i = 0; i < num; i++) {
      // 模拟击鼓传花
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue()); // 被淘汰的人进入淘汰列表
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(), // 胜利的人
  };
}
```

#### 回文检查器 双端队列

```js
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString
    .toLocaleLowerCase()
    .split(" ")
    .join("");
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString, charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}
```

#### javaScript 任务队列

## 链表

链表是有序的，所以重复元素一定相邻。  

### LeetCode

- 237.删除链表中的节点
- 206.反转链表
- 2. 两数相加
- 83. 删除排序链表中的重复元素
- 141. 环形链表

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210802140711.png)

### 链表数据结构

数组数据结构有一个缺点：（在大多数语言中）数组的大小是固定的，从数组的起点或者中间插入或者移除的成本很高，因为需要移动元素。
链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。
在数组中，我们可以直接访问任何位置的任何元素，而想要访问链表中间的一个元素，则需要从起点（表头）开始迭代链表直到找到所需的元素。

#### 创建链表

```js
function defaultEquals(a, b) {
  return a === b;
}
export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined; //指向下一个元素
  }
}
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // 存储链表中元素的个数
    this.head = undefined; // 保存第一个元素
    this.equalsFn = defaultEquals; // 比较函数
  }
}
```

LinkedList 类的方法：

- push(element):向链表表尾添加一个新元素。
- insert(element,index):想链表的特定位置插入一个新元素。
- getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回 undefined。
- remove(index):从链表的特定位置移除一个元素。结合 getElementAt(index)使用。
- remove(element):从链表中移除一个元素。
- indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
- removeAt(index):从链表的特定位置移除一个元素。
- isEmpty():如果链表中不包括任何元素，返回 true，如果链表长度>0 则返回 false。
- size():返回链表包含的元素的个数，与数组的 length 属性类似。
- toString():返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 javaScript 对象默认的 toString()方法,让其只输出元素的值.

```js
function defaultEquals(a, b) {
  return a === b;
}
export class Node {
  constructor() {
    this.elements = elements;
    this.next = undefined; //指向下一个元素
  }
}
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // 存储链表中元素的个数
    this.head = undefined; // 保存第一个元素
    this.equalsFn = defaultEquals; // 比较函数
  }
  // push(element):向链表表尾添加一个新元素。
  push(element) {
    const node = new Node();
    let current; //遍历的指针，因为只有一个head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        // 获取最后一项
        current = current.next;
      }
      // 将其next赋为新元素，简历链接
      current.next = node;
    }
    this.count++;
  }
  // removeAt(index):从链表的特定位置移除一个元素。
  // 移除的节点就会被遗弃在计算机内存中，等着被垃圾回收器清除。
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous; // 保存要删除元素的前一项
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        // 将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next;
      }
      this.count--;
      return current.elements;
    }
    return undefined;
  }
  // getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回undefined。
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && node != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  // remove(index):从链表的特定位置移除一个元素。
  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.elements;
    }
    return undefined;
  }
  // insert（element,position):想链表的特定位置插入一个新元素。
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  // indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.elements)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  // remove(element):从链表中移除一个元素。
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // size():返回链表包含的元素的个数，与数组的length属性类似。
  size() {
    return this.count;
  }
  // isEmpty():如果链表中不包括任何元素，返回true，如果链表长度>0则返回false。
  isEmpty() {
    return this.count === 0;
  }
  // toString():返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString()方法,让其只输出元素的值.
  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
  getHead() {
    return this.head;
  }
}
```

### 双向链表

双向链表和普通链表的区别在于，在链表中，一个结点只有链向下一个节点的链接，而在双向链表中，链接是双向的：一个链向向下一个元素，另一个链向前一个元素。

```js
function defaultEquals(a, b) {
  return a === b;
}
export class Node {
  constructor() {
    this.elements = elements;
    this.next = undefined; //指向下一个元素
  }
}
class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // 存储链表中元素的个数
    this.head = undefined; // 保存第一个元素
    this.equalsFn = defaultEquals; // 比较函数
  }
  // push(element):向链表表尾添加一个新元素。
  push(element) {
    const node = new Node();
    let current; //遍历的指针，因为只有一个head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        // 获取最后一项
        current = current.next;
      }
      // 将其next赋为新元素，简历链接
      current.next = node;
    }
    this.count++;
  }
  // removeAt(index):从链表的特定位置移除一个元素。
  // 移除的节点就会被遗弃在计算机内存中，等着被垃圾回收器清除。
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous; // 保存要删除元素的前一项
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        // 将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next;
      }
      this.count--;
      return current.elements;
    }
    return undefined;
  }
  // getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回undefined。
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && node != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  // remove(index):从链表的特定位置移除一个元素。
  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.elements;
    }
    return undefined;
  }
  // insert（element,position):想链表的特定位置插入一个新元素。
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  // indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.elements)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  // remove(element):从链表中移除一个元素。
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // size():返回链表包含的元素的个数，与数组的length属性类似。
  size() {
    return this.count;
  }
  // isEmpty():如果链表中不包括任何元素，返回true，如果链表长度>0则返回false。
  isEmpty() {
    return this.count === 0;
  }
  // toString():返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString()方法,让其只输出元素的值.
  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined; // 链表最后一个元素的引用
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
        if (this.head == null) {
          // NEW
          this.head = node;
          this.tail = node; // NEW
        } else {
          node.next = this.head;
          this.head.prev = node; // NEW
          this.head = node;
        }
      } else if (index === this.count) {
        // last item NEW
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
      return "";
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
      return "";
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

循环链表可以像链表一样只有单向引用，也可以像双向链表一样有双向引用。循环链表和链表之间唯一的区别在于，最后一个元素指向下一个元素的指针不是 undefined 而是第一个元素。
双向循环链表有指向 head 的元素的 tail.next 和指向 tail 元素的 head.prev

```js
function defaultEquals(a, b) {
  return a === b;
}
export class Node {
  constructor() {
    this.elements = elements;
    this.next = undefined; //指向下一个元素
  }
}
class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // 存储链表中元素的个数
    this.head = undefined; // 保存第一个元素
    this.equalsFn = defaultEquals; // 比较函数
  }
  // push(element):向链表表尾添加一个新元素。
  push(element) {
    const node = new Node();
    let current; //遍历的指针，因为只有一个head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        // 获取最后一项
        current = current.next;
      }
      // 将其next赋为新元素，简历链接
      current.next = node;
    }
    this.count++;
  }
  // removeAt(index):从链表的特定位置移除一个元素。
  // 移除的节点就会被遗弃在计算机内存中，等着被垃圾回收器清除。
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous; // 保存要删除元素的前一项
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        // 将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next;
      }
      this.count--;
      return current.elements;
    }
    return undefined;
  }
  // getElementAt(index):返回链表中特定的元素。如果链表中不存在这样的元素则返回undefined。
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && node != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  // remove(index):从链表的特定位置移除一个元素。
  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.elements;
    }
    return undefined;
  }
  // insert（element,position):想链表的特定位置插入一个新元素。
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  // indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.elements)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  // remove(element):从链表中移除一个元素。
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // size():返回链表包含的元素的个数，与数组的length属性类似。
  size() {
    return this.count;
  }
  // isEmpty():如果链表中不包括任何元素，返回true，如果链表长度>0则返回false。
  isEmpty() {
    return this.count === 0;
  }
  // toString():返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString()方法,让其只输出元素的值.
  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
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
  EQUALS: 0,
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

### 创建 StackLinkedList 类

使用 Linkedlist 类及其变种类作为内部的数据结构来创建其他的数据结构，例如栈、队列和双向队列。

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

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210802174251.png" style="zoom:33%;" />

## 集合

集合，这是一种**不允许出现重复**的顺序数据结构。

集合，**无序且唯一**的数据结构。

### LeetCode

- 349. 两个数组的交集

### 构建数据集合

**集合**是由**一组无序且唯一**(不能重复)的项组成。该数据解雇使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中。

### 创建集合类

```js
class Set {
  construct() {
    // 使用对象，js对象不允许一个键指向两个相同的属性，也保证了集合里的元素都是唯一的。
    this.items = {};
  }
}
```

- add(element):向集合添加一个新元素。
- delete(element):从集合移除一个元素。
- has(element):如果元素在集合中，返回 true，否则返回 false。
- clear():移除集合中的所有元素。
- size():返回集合所包含元素的数量。它在数组的 length 属性类似。
- valuse():返回一个包含集合所有值（元素）的数组。

```js
class Set {
  construct() {
    // 使用对象，js对象不允许一个键指向两个相同的属性，也保证了集合里的元素都是唯一的。
    this.items = {};
  }
  // has(element):如果元素在集合中，返回true，否则返回false。
  has(element) {
    // return element in this.items
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  // add(element):向集合添加一个新元素。
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  // delete(element):从集合移除一个元素。
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  // clear():移除集合中的所有元素。
  clear() {
    this.items = {};
  }
  // size():返回集合所包含元素的数量。它在数组的length属性类似。
  size() {
    // 1.给集合添加length属性。
    // 2.
    return Object.keys(this.items).length;
    // 3.手动提取属性，进行计数
  }
  // valuse():返回一个包含集合所有值（元素）的数组。
  valuse() {
    return Object.valuse(this.items);
  }
}
```

### 使用 Set 类

```js
const set = new Set();
set.add(1);
console.log(set.values()); // [1]
console.log(set.has(1)); // true
console.log(set.size()); // 1

set.add(2);
console.log(set.values()); // [1,2]
console.log(set.has(1)); // true
console.log(set.size()); // 2

set.delete(1);
console.log(set.values()); // [2]

set.delete(2);
console.log(set.values()); // []
```

### 集合运算

- 并集：对于给定的两个集合，返回一个包含两个集合中`所有`元素的新集合。
- 交集：对于给定的两个集合，返回一个包含两个集合中`共有`元素的新集合。
- 差集：对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的细新集合。
- 子集:验证一个给定集合是否是另一个集合的子集。
  在自定义的 Set 类上新增方法。

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

### Set 类

```js
// 模拟并集运算
const union = (setA, setB) => {
  const unionAb = new Set();
  setA.forEach((value) => unionAb.add(value));
  setB.forEach((value) => unionAb.add(value));
  return unionAb;
};

// 模拟交集运算
const intersection = (setA, setB) => {
  const intersectionSet = new Set();
  setA.forEach((value) => {
    if (setB.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};

// 模拟差值运算
const difference = (setA, setB) => {
  const differenceSet = new Set();
  setA.forEach((value) => {
    if (!setB.has(value)) {
      differenceSet.add(value);
    }
  });
  return differenceSet;
};

//
```

### 使用扩展运算符计算并交差(就是转换为数组)

```js
// 并
let newSet = new Set([...setA, ...setB]);

// 交
let newSet = new Set([...setA].filter((x) => setB.has(x)));

// 差
let newSet = new Set([...setA].filter((x) => !setB.has(x)));
```

### 数组去重

```js
let arr = [1,1,2,3]
let arr1 = [...new Set(arr)]
```

### Set多种迭代方法

```js
let setA = new Set([1,2,4,5])
// 1.第一种
for(let item of steA){
  console.log(item)
}
// 2.第二种
for(let item of setA.keys()){
  console.log(item)
}
// 3.第三种
for(let item of setA.values()){
  console.log(item)
}
// 4.第四种
for(let (key,value) of setA.entries()){
  console.log(key,value)
}




```



## 字典和散列表

### LeetCode

- 349. 两个数组的交集
- 20.有效的括号
- 1. 两数之和
- 3. 无重复字符的最长子串
- 76. 最小覆盖子串

使用字典和散列表来存储唯一值（不重复的值）的数据结构。
在集合中，我们感兴趣的是每个值本身，并不它当做主要元素。在字典（的映射）中，我们用`[键，值]`对的形式来存储数据。在散列表中也是一样的。

### 字典

集合表示一组互不相同的元素（不重复的元素）。在字典中，存储的是`[键，值]`对，其中键名是用来查询特定元素的。字典和集合很相似，集合以`[值，值]`的形式存储元素，字典则是以`[键，值]`存储数据。字典也称为`映射`、`符号表`、`关联数组`

#### 创建字典类

```js
// 将键key转化为字符串
function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = defaultToString;
    this.table = {};
    // table[key] = {key,value}
  }
}
```

- set(key,value):向字典中添加新元素。如果 key 已经存在，那么已存在的 value 会被新的覆盖。
- remove(key):通过使用键值作为参数来从字典中移除键值对应的数据值。
- hasKey(key):如果某个键值存在于该字典中，返回 true，否则返回 false。
- get(key):通过使用键值作为参数查找特定的数值并返回。
- clear():删除该字典中的所有值。
- size():返回字典所包含值的数量。与数组的 length 属性类似。
- isEmpty():在 size 等于 0 的时候返回 true，否则返回 false。
- keys():将字典所包含的所有键名以数组的形式返回。
- values():j 将字典最后那个所包含的所有数值以数组的形式返回。
- keyValues():将字典中所有[键，值]对返回。
- forEach(callbackFn):迭代字典中所有键值对。callbackFn 有两个参数：key 和 value。该方法可以在回调函数返回 false 时被中止。

```js
function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key}:${this.value}]`;
  }
}
class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = defaultToString;
    this.table = {};
    // table[key] = {key,value}
  }
  // hasKey(key):如果某个键值存在于该字典中，返回true，否则返回false。
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  // set(key,value):向字典中添加新元素。如果key已经存在，那么已存在的value会被新的覆盖。
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(tableKey, value);
      return true;
    }
    return false;
  }
  // remove(key):通过使用键值作为参数来从字典中移除键值对应的数据值。
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  // get(key):通过使用键值作为参数查找特定的数值并返回。
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value;
  }
  // keys():将字典所包含的所有键名以数组的形式返回。
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
    // const keys = []
    // const valuePairs = this.keyValues()
    // for(let i = 0;i<valuePairs.length;i++){
    //     keys.push(valuePairs[i].key)
    // }
    // return keys
  }
  // values():j将字典最后那个所包含的所有数值以数组的形式返回。
  // keyValues():将字典中所有[键，值]对返回。
  keyValues() {
    return Object.values(this.table);
    // const valuePairs = []
    // for(const k in this.table) {
    //     if(this.hasKey(k)){
    //         valuePairs.push(this.table[k])
    //     }
    // }
    // return valuePairs
  }
  // values():j将字典最后那个所包含的所有数值以数组的形式返回。
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }
  // forEach(callbackFn):迭代字典中所有键值对。callbackFn有两个参数：key和value。该方法可以在回调函数返回false时被中止。
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  // clear():删除该字典中的所有值。
  clear() {
    this.table = {};
  }
  // size():返回字典所包含值的数量。与数组的length属性类似。
  size() {
    return Object.keys(this.table).length;
  }
  // isEmpty():在size等于0的时候返回true，否则返回false。
  isEmpty() {
    return this.size() === 0;
  }
  // toString
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}
```

### ES2015Map类

```js
const map = new Map()
map.set('Gandalf','gandalf@email.com')
map.set('John','john@email.com')
map.set('Tyrion','tyrion@email.com')

console.log(map.has('Gandalf')) //true
console.log(map.size) //3
console.log(map.keys()) //{'Gandalf','John','Tyrion'}
console.log(map.values()) //{'gandalf@email.com','john@email.com','tyrion@email.com'}
console.log(map.get('Tyrion')) //tyrion@email.com
map.delete('Tyrion')
map.clear()
```

Map类和我们Dictionary类不同，Map类的keys()，values()方法都返回Iterator，而不是值或者键构成的数组。另一个区别是，我们实现的size方法返回字典中存储的值的个数，而ES2015Map类则是一个size属性。

### ES2015WeakMap类和WeakSet类

除了Set和Map类这两种数据结构，ES2015还增加了它们的弱化版本，WeakSet和WeakMap。及本省，Map和Set与其弱化版本之间仅有的区别是：

- WeakSet或WeakMap类没有entries、keys和values等方法；
- 只能用对象作为键。

创建和使用这两个类主要是为了性能。WeakSet和WeakMap是弱化的（用对象作为键），没有强引用的键。这使得JavaScript的来及回收器可以从中清除整个入口。

必须有键才可以取出值。这些类没有entries、keys和values等迭代器方法，因此除非知道键，否则没办法取出值。

```js
const map = new WeakMap()
const obj1 = {name:'Gandalf'}
const obj2 = {name:'John'}
const obj3 = {name:'Tyrion'}
map.set(obj1,'gandalf@email.com')
map.set(obj2,'john@email.com')
map.set(obj3,'tyrion@email.com')

console.log(map.has(obj1)) //true
console.log(map.get(obj3)) //tyrion@email.com
map.delete(obj2)
```

### 散列表

HashTable 类，也叫 HashMap 类，它是 Dictionary 类的一种散列表实现方式。
`散列`算法的作用是`尽可能快地在数据结构找到一个值`。
使用散列函数，就知道值的具体位置，因此能顾快速检索到该值。散列函数的作用是给定一个键值，然后返回值在表中的地址。

#### 常见的散列函数

- 直接寻址法：取关键字或关键字的某个线性函数值为散列地址。
- 数字分析法：通过对数据的分析，发现数据中冲突较少的部分，并构造散列地址。例如同学们的学号，通常同一届学生的学号，其中前面的部分差别不太大，所以用后面的部分来构造散列地址。
- 平方取中法：当无法确定关键字里哪几位的分布相对比较均匀时，可以先求出关键字的平方值，然后按需要取平方值的中间几位作为散列地址。这是因为：计算平方之后的中间几位和关键字中的每一位都相关，所以不同的关键字会以较高的概率产生不同的散列地址。
- 取随机数法：使用一个随机函数，取关键字的随机值作为散列地址，这种方式通常用于关键字长度不同的场合。
- 除留取余法：取关键字被某个不大于散列表的表长 n 的数 m 除后所得的余数 p 为散列地址。这种方式也可以在用过其他方法后再使用。该函数对 m 的选择很重要，一般取素数或者直接用 n。

常见的解决冲突方法有几个：

- **开放地址法（也叫开放寻址法）**：实际上就是当需要存储值时，对Key哈希之后，发现这个地址已经有值了，这时该怎么办？不能放在这个地址，不然之前的映射会被覆盖。这时对计算出来的地址进行一个探测再哈希，比如往后移动一个地址，如果没人占用，就用这个地址。如果超过最大长度，则可以对总长度取余。这里移动的地址是产生冲突时的增列序量。
- **链地址法**：链地址法其实就是对Key通过哈希之后落在同一个地址上的值，做一个链表。其实在很多高级语言的实现当中，也是使用这种方式处理冲突的，我们会在后面着重学习这种方式。
- **再哈希法**：在产生冲突之后，使用关键字的其他部分继续计算地址，如果还是有冲突，则继续使用其他部分再计算地址。这种方式的缺点是时间增加了。
- **建立一个公共溢出区**：这种方式是建立一个公共溢出区，当地址存在冲突时，把新的地址放在公共溢出区里。



- **腾讯&leetcode349：给定两个数组，编写一个函数来计算它们的交集**

- **字节&leetcode1：两数之和**

- **腾讯&leetcode15：三数之和**

- **leetcode380：常数时间插入、删除和获取随机元素**

  

#### 创建散列表

```js
function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}
```

- put(key,value):向散列列表增加一个新的项（也能更新散列表）。
- remove(key):根据键值从散列表中移除值。
- get(key):返回根据键值检索到的特定的值。

```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class ValuePair {
    constructor(key,value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[${this.key}:${this.value}]`
    }
}
class HashTable {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {}
    }
    // 创建散列函数
    loseloseHashCode(key){
        if(typeof key === 'number) {
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        // tableKey.length获取字符串的长度
        for(let i = 0;i <tableKey.length;i++){
            hash += tableKey.charCodeAt(i)
        }
        // 对于任意数取余
        return hash%37
    }
    hashCode(key){
        return this.loseloseHashCode(key)
    }
    // put(key,value):向散列列表增加一个新的项（也能更新散列表）
    put(key,value){
        if(key != null && value != null){
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key,value)
            return true
        }
        return false
    }
    // get(key):返回根据键值检索到的特定的值。
    get(key){
        cost valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }
    // remove(key):根据键值从散列表中移除值。
    remove(key){
        if(key != null){
            const hash = this.hashCode(key)
            const valuePair = this.table[hash]
            if(valuePair != null){
                delete this.table[hash]
                return true
            }
        }
        return false
    }
    getTable() {
        return this.table;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return Object.keys(this.table).length;
    }
    clear() {
        this.table = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
}
```

#### 散列表和散列集合
散列集合由一个集合构成，但是插入，移除或获取元素时候，使用的是hashCode函数。散列集合只能存储不重复的唯一值。
### 处理散列表冲突
有时候，一些键会有相同的三散列值。不同的值在散列表中对应相同的位置的时候，我们称其为`冲突`。
当我们发生冲突时候解决办法有：
- 分离链接
- 线性探查
- 双散列法
#### 分离链接法
`分离链接`法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的最简单的方法，但是HashTable实例之外还需要额外的存储空间。
```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class ValuePair {
    constructor(key,value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[${this.key}:${this.value}]`
    }
}
class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }
    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }
    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
        let current = linkedList.getHead();
        while (current != null) {
            if (current.element.key === key) {
                linkedList.remove(current.element);
                if (linkedList.isEmpty()) {
                    delete this.table[position];
                }
                return true;
                }
                current = current.next;
            }
        }
        return false;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        let count = 0;
        Object.values(this.table).forEach(linkedList => {
        count += linkedList.size();
        });
        return count;
    }
    clear() {
        this.table = {};
    }
    getTable() {
        return this.table;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
}
```

#### 线性探查法
`线性探查法`,它处理冲突的方法是将元素直接存储到表中。而不是在单独的数据结构中。迭代散列表，知道找到一个空闲的位置。
1. 软删除
使用一个特殊的值（标记）来表示键值对被删除了（惰性删除或者软删除），而不是真的删除。经过一段时间，散列表被操作过后，我们会得到一个标记了若干个删除位置的散列表。这会逐渐降低散列表的效率，因为搜索键值会随着时间变得更慢。能`快速访问并找到一个键使我们使散列表的一个重要原因`。
```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class ValuePair {
    constructor(key,value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[${this.key}:${this.value}]`
    }
}
class ValuePairLazy extends ValuePair {
  constructor(key, value, isDeleted = false) {
    super(key, value);
    this.key = key;
    this.value = value;
    this.isDeleted = isDeleted;
  }
}
class HashTableLinearProbingLazy {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }
    put(key, value) {
        if (key != null && value != null) {
        const position = this.hashCode(key);
        if (this.table[position] == null || (this.table[position] != null && this.table[position].isDeleted)) {
            this.table[position] = new ValuePairLazy(key, value);
        } else {
            let index = position + 1;
            while (this.table[index] != null && !this.table[position].isDeleted) {
                index++;
            }
            this.table[index] = new ValuePairLazy(key, value);
        }
            return true;
        }
        return false;
    }
    get(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDeleted) {
                return this.table[position].value;
            }
            let index = position + 1;
            while ( this.table[index] != null &&(this.table[index].key !== key || this.table[index].isDeleted)) {
                if (this.table[index].key === key && this.table[index].isDeleted) {
                    return undefined;
                }
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key && !this.table[index].isDeleted) {
                return this.table[position].value;
            }
        }
        return undefined;
    }
    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDeleted) {
                this.table[position].isDeleted = true;
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && (this.table[index].key !== key || this.table[index].isDeleted)) {
                index++;
            }
            if ( this.table[index] != null && this.table[index].key === key && !this.table[index].isDeleted) {
                this.table[index].isDeleted = true;
                return true;
            }
        }
        return false;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        let count = 0;
        Object.values(this.table).forEach(valuePair => {
            count += valuePair.isDeleted === true ? 0 : 1;
        });
        return count;
    }
    clear() {
        this.table = {};
    }
    getTable() {
        return this.table;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
}
```
2. 移动元素
第二种方法需要检验是否有必要将一个或多个元素移动到之前的位置。当搜索一个键的时候，这方法可以避免找到一个空位置。
```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class ValuePair {
    constructor(key,value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[${this.key}:${this.value}]`
    }
}
class HashTableLinearProbing {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }
    return undefined;
  }
  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.table).length;
  }
  clear() {
    this.table = {};
  }
  getTable() {
    return this.table;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`;
    }
    return objString;
  }
}
```
### 更好的散列函数
```js
djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381
    for(let i = 0; i < tableKey.length;i++) {
        hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013
}
```
## 递归
#### 理解递归
**递归**是一种解决问题的方法，她从解决问题的各个小部分开始，直到解决最初的大问题。递归通常涉及函数调用自身。
每个递归函数都必须有**基线条件**，即一个不再递归调用的条件（停止点），以防止无限递归。

每当一个函数被一个算法调用时，`该函数会进入调用栈的顶部`。当使用递归的时候，每个函数调用都会堆叠在调用栈的顶部，这是因为每个调用都可能依赖前一个调用结果。后入先出。
#### 计算一个数的阶乘
```js
function factorial(n) {
  if(n === 1 || n === 0){
    return 1
  }
  return n * factorial(n-1)
}
console.log(factorial(5))
```
#### 斐波那锲数
```js
function fabonacci(n) {
  if(n < 1) return 0
  if(n <= 2) return 1
  return fabonacci(n-1) + fabonacci(n-2)
}
console.log(factorial(5))
```
#### 记忆化斐波那锲数
```js
// 闭包 + 缓存数组
const fibonacci = (function() {
  const f = [0];
  return function(n) {
    if(f[n] !== undefined) return f[n];
    return f[n] = (n===1||n===2 ? 1 : fibonacci(n-1) + fibonacci(n-2))
  }
})()

// 对象替换数组来进行缓存，这样就少去了填充 undefined 的时间
// 闭包 + 缓存对象
const fibonacci = (function () {
  const f = {}
  return function(n) {
    if(n === 0 || n === 1) {
      return n
    }
    if(f[n-2] === undefined) {
      f[n-2] = fibonacci(n-2)
    }
    if(f[n-1] === undefined) {
      f[n-1] = fibonacci(n-1)
    }
    return f[n] = f[n-1] + f[n-2]
  }
})()

// 解构赋值
const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let i = 1;
  while(i++ <= n) {
      [a, b] = [b, a+b]
  }
  return a;
}

// 尾递归优化
function fibonacci(n, n1, n2) {
    if(n <= 1) {
        return n2
    }
    return fibonacci(n - 1, n2, n1 + n2)
}
```

## 树

### LeetCode

- 104. 二叉树的最大深度（深度遍历）
- 111. 二叉树的最小深度 （广度遍历）
- 102. 二叉树的层序遍历
- 94. 二叉树的中序遍历
- 112. 路径总和

非顺序数据结构——树。它对于存储需要快速查找的数据非常有用。

`JavaScript` 中没有树这种数据结构，但是可以用 `Object` 和 `Array` 来模拟一颗树。

```js
const tree = {
  value:"a",
  children:[
    {
      value:"b",
      children:[
        {
          value:"d",
          children:[
            {
              value:"e",
              children:[]
            }
          ]
        }
      ]
    },
    {
      value:"c",
      children:[
        {
          value:"f",
          children:[]
        },
        {
          value:"g",
          children:[]
        }
      ]
    }
  ]
}
```

### 树的常见操作有： `DFS` 、 `BFS` 

#### DFS

深度优先遍历，尽可能深的搜索树的分支。

序号表示被搜索的顺序，它的算法口诀是：

1. 访问根节点；
2. 对根节点的 children 挨个（递归）进行深度优先遍历。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210807111336.png" style="zoom:33%;" />

```js
# tree 为上文所述的结构，这里就不重复展示

# 深度优先代码
const dfs = (node)=>{
  console.log(node.value);
  node.children.forEach(dfs);
}

# 调用
dfs(tree);

打印结果输出顺序： a、b、d、e、c、f、g 。
```

#### BFS

广度优先遍历，先访问离根节点最近的节点。

序号表示被搜索的顺序，先把同层的节点给遍历完，再去遍历子节点。它的算法口诀是：

1. 新建一个队列，把根节点入队；
2. 把对头出队并访问；
3. 把对头的 `children` 挨个入队；
4. 重复（循环）第二、三步，直到队列为空。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210807111710.png" style="zoom:33%;" />

```js
const bfs = (root) => {
    const queue = [root];
    while (queue.length > 0) {
        const n = queue.shift();
        console.log(n.val);
        n.children.forEach(child => {
            queue.push(child); 
        });
    }
};

bfs(tree);
打印结果输出顺序： a、b、c、d、e、f、g 。
```

### 树数据结构

### 树的相关术语
一个树结构包含一系列存在父子关系的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点。
- 位于树顶部的节点叫作根结点。
- 至少有一个子节点的节点称为内部节点。
- 没有子元素的节点称为外部节点或叶节点。
- 一个节点可以有祖先和后代。
- 子树：子树由节点和它的后代构成。
- 深度：从根节点到该节点所经历的边的个数
- 高度：节点到叶节点的最长路径
### 二叉树和二叉搜索树
**二叉树**中的节点最多能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
**二叉搜索树**是二叉树的一种，但是只允许你在左侧节点存储（比父节点）小的值。在右侧节点存储（比父节点）大的值。
#### 创建BinarySearchTress类
```js
const Compare = {
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
class Node {
    constructor(key){
        this.key = key
        this.left = left
        this.right = right
    }
}
class BinarySearchTree {
	constructor(compareFn = defaultCompare){
		this.compareFn = defaultCompare
		this.root = null
	}
}
```
- insert(key):向树中插入一个新的键。
- search(key):在树中查找一个键。如果节点存在，则返回true；如果不存在，则返回false。
- inOrderTraverse():通过中序遍历方式遍历所有节点。
- preOrderTraverse():通过先序遍历方式遍历所有节点。
- postOrderTraverse():通过后序遍历方式遍历所有节点。
- min():返回树中最小的值/键。
- max():返回树中最大的值/键。
- remove(key):从树中移除某个键。
```js
const Compare = {
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
class Node {
    constructor(key){
        this.key = key
        this.left = left
        this.right = right
    }
}
class BinarySearchTree {
	constructor(compareFn = defaultCompare){
		this.compareFn = defaultCompare
		this.root = null
	}
	
	getRoot() {
    return this.root;
  }
  
  
	insertNode(node,key){
		if(this.compareFn(node.key,key) === Compare.LESS_THAN){
			if(node.right === null){
				node.right = new Node(key)
			}else {
				this.insertNode(node.right,key)
			}
		}else {
			if(node.left === null){
				node.left = new Node(key)
			}else {
				// 递归实现
				this.insertNode(node.left,key)
			}
		}
	}
	//insert(key):向树中插入一个新的键。
	insert(key){
		if(this.root == null) {
			this.root = new Node(key)
		}else {
		  // 递归实现
			this.insertNode(this.root,key)
		}
	}
	
	
	printNode(value) {
		console.log(value)
	}
	inOrderTraverseNode(node,callback){
		if(node != null){
			this.inOrderTraverseNode(node.left,callback)
			callback(node.key)
			this.inOrderTraverseNode(node.right,callback)
		}
	}
	// inOrderTraverse():通过中序遍历方式遍历所有节点。
	// callbalck = this.printNode
	inOrderTraverse(callbalck){
		this.inOrderTraverseNode(this.root,callback)
	}
	
	
	preOrderTraverseNode(node,callback){
		if(node != null){
			callback(node.key)
			this.inOrderTraverseNode(node.left,callback)
			this.inOrderTraverseNode(node.right,callback)
		}
	}
	// preOrderTraverse():通过先序遍历方式遍历所有节点。
	// callbalck = this.printNode
	preOrderTraverse(callbalck){
		this.preOrderTraverseNode(this.root,callback)
	}
	
	
	postOrderTraverseNode(node,callback){
			this.inOrderTraverseNode(node.left,callback)
			this.inOrderTraverseNode(node.right,callback)
			callback(node.key)
	}
	// postOrderTraverse():通过后序遍历方式遍历所有节点。
	// callbalck = this.printNode
	postOrderTraverse(callbalck){
		this.postOrderTraverseNode(this.root,callback)
	}
	
	
	minNode(node){
		let current = node 
		while(current != null && current.left != null){
			current = current.left
		}
		return current
	}
	// min():返回树中最小的值/键。
	min(){
		return this.minNode(this.root)
	}
	
	
	maxNode(node){
		let current = node 
		while(current != null && current.right != null){
			current = current.right
		}
		return current
	}
	// max():返回树中最大的值/键。
	max(){
		return this.minNode(this.root)
	}
	
	
	searchNode(node,key){
		if(node == null){
			return false
		}
		if(this.compareFn(key,node.key) === Compare.LESS_THAN){
			return this.searchNode(node.left,key)
		}else if(this.compareFn(key,node.key) === Compare.BIGGER_THAN){
			return this.searchNode(node.right,key)
		}else {
			return true
		}
	}
	//search(key):在树中查找一个键。如果节点存在，则返回true；如果不存在，则返回false。
	search(key){
		return this.searchNode(this.root,key))
	}
	
	
	removeNode(node,key){
		if(node === null){
			return null
		}
		if(this.compareFn(key,node.key) === Compare.LESS_THAN){
			node.left = this.removeNode(node.left,key)
			return node
		}else if(this.compareFn(key,node.key) === Compare.BIGGER_THAN){
			node.right = this.removeNode(node.right,key)
			return node
		}else {
			// 无分支  直接删除
			if(node.left == null && node.right == null){
				node = null
				return node
			}
			
			// 单分支
			// 跳过这个节点，直接讲父节点指向它的指针指向的子节点
			if(node.left == null){
				node = node.right
				return node
			}else if(node.right == null){
				node = node.left
				return node
			}
			
			// 双分支
			// 当找到了要移除的节点后，需要找到它右边子树中最小的节点（它的继承者）。
			// 然后，用它右子树中最小节点的键去更新这个节点的值。
			// 但是，这样树中就有两个拥有相同键的节点，这是不行的。要继续把右侧子树中的最小节点移除，毕竟它已经被移至要移除的节点的位置了。
			// 最后，向它的父节点返回更新后节点的引用。
			const aux = this.minNode(node.right)
			node.key = aux.key
			node.right = this.removeNode(node.right,aux.key)
			return node
		}
	}
	// remove(key):从树中移除某个键。
	remove(key){
		this.removeNode(this.root,key)
	}
}
```
#### 前中后序遍历迭代

先序遍历

- 访问根节点。

- 对根节点的左子树进行先序遍历。

- 对根节点的右子树进行先序遍历。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210807122112.png)

```js
// 前序遍历
const preorderTraversal = (root) => {
    let result = []
    var preOrderTraverseNode = (node) => {
        if(node) {
            // 先根节点
            result.push(node.val)
            // 然后遍历左子树
            preOrderTraverseNode(node.left)
            // 再遍历右子树
            preOrderTraverseNode(node.right)
        }
    }
    preOrderTraverseNode(root)
    return result
};


// 前序遍历
const preorderTraversal = (root) => {
    const list = [];
    const stack = [];
    
    // 当根节点不为空的时候，将根节点入栈
    if(root) stack.push(root)
    while(stack.length > 0) {
        const curNode = stack.pop()
        // 第一步的时候，先访问的是根节点
        list.push(curNode.val)
        
      	// 负负为正
        // 我们先打印左子树，然后右子树
        // 所以先加入栈的是右子树，然后左子树
        if(curNode.right !== null) {
            stack.push(curNode.right)
        }
        if(curNode.left !== null) {
            stack.push(curNode.left)
        }
    }
    return list
}
```

中序遍历

- 对根节点的左子树进行中序遍历。
- 访问根节点。
- 对根节点的右子树进行中序遍历。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210807122143.png)

```js
// 中序遍历
const inorderTraversal = (root) => {
    let result = []
    var inorderTraversalNode = (node) => {
        if(node) {
            // 先遍历左子树
            inorderTraversalNode(node.left)
           // 再根节点
            result.push(node.val)
            // 最后遍历右子树
            inorderTraversalNode(node.right)
        }
    }
    inorderTraversalNode(root)
    return result
};


// 中序遍历
const inorderTraversal = (root) => {
    let list = []
    let stack = []
    let node = root
    
    while(node || stack.length) {
    // 遍历左子树
      while(node) {
       stack.push(node)
        node = node.left
      }
      
      node = stack.pop()
      list.push(node.val)
      node = node.right
    }
    return list 
}
```

后序遍历

- 对根节点的左子树进行后序遍历。
- 对根节点的右子树进行后序遍历。
- 访问根节点

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210807122203.png)

```js
// 后序遍历
const postorderTraversal = function(root) {
    let result = []
    var postorderTraversalNode = (node) => {
        if(node) {
            // 先遍历左子树
            postorderTraversalNode(node.left)
            // 再遍历右子树
            postorderTraversalNode(node.right)
            // 最后根节点
            result.push(node.val)
        }
    }
    postorderTraversalNode(root)
    return result
};




// 后序遍历
const postorder = (root) => {
    if (!root) { return; }
    const outputStack = [];
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while(outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
};

const postorderTraversal = (root) => {
    const list = [];
    // （进入顺序 根  左 右
    const stack = [];
    
    // 当根节点不为空的时候，将根节点入栈
    if(root) stack.push(root)
    while(stack.length > 0) {
        const node = stack.pop()
        // （进入顺序）根左右=>（输出顺序）左右根
        list.unshift(node.val)
        
        // 先进栈左子树后右子树
        // 出栈的顺序就变更为先右后左
        // 右先头插法入list
        // 左再头插法入list
        // 实现右左根=>左右根
        if(node.left !== null) {
            stack.push(node.left)
        }
        if(node.right !== null) {
            stack.push(node.right)
        }
    }
    return list
}
```

#### 层序遍历

队列来保存节点，每轮循环中，我们都取一层出来，将它们的左右孩子放入队列。

```js
var levelOrder = function(root) {
    const res = [];
    function levelOrderNode(node, level) {
      if (!node) return null;
      // 当前层数组初始化
      res[level] =  res[level] || [];
      res[level].push(node.val);
      // 下一层 +1
      levelOrderNode(node.left, level + 1);
      levelOrderNode(node.right, level + 1);
    }
    levelOrderNode(root, 0);
    return res;
};



var levelOrder = function(root) {
    if (root == null) return [];
    const ans = [];
    let level = 0;
    const queue = [root];
    while(queue.length) {
      ans.push([]);
      const len = queue.length;
      // 通过遍历，提前执行完一层的所有元素，层级level就可以+1
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        ans[level].push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      level++;
    }
    return ans;
  };

```



### 自平衡树

BST存在一个问题：取决于你添加的节点数，树的一条边可能会很深；也就是说，树的一条分支会有很多层，而其他的分支却只有几层。为了解决这个问题，有一种树叫做（AVL树）。AVL树是一种自平衡二叉搜索树，意思是任何一个节点左右两侧子树的高度之差最多为1.
#### AVL树
AVL树是一种自平衡树。添加或移除节点时，AVL树会尝试保持自平衡。任意一个节点（不论深度）的左子树和右子树高度最多相差1.添加或移除节点时，AVL树会尽可能尝试转换为完全树。
```js
class AVLTress extend BinarySearchTree {
	constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  // insert
  // insertNode
  // removeNode
}
```
在AVL树中插入或移除结点和BST完全不同。然而，AVL树的不同之处在于我们需要检验它的的**平衡因子**，如果有需要，会将其逻辑应用于树的自平衡。

```js
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};
class AVLTress extend BinarySearchTree {
	constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  // 计算节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left),this.getNodeHeight(node.right)) + 1;
  }
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
      // 右不平衡
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
      // 左不平衡
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
 
  // 左-左（LL）:向右的单旋转
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  // 右-右（RR）:向左的单旋转
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  // 左-右（LR）:向右双旋转（先RR旋转，再LL旋转）
  // 左分支的右侧重
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }
  // 右-左（RL）:向左双旋转（先LL旋转，再RR旋转）
  // 右分支的左侧重
   rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
  
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // 重复的键
    }
    // 如果需要，将树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node);
     // 向左侧子树插入节点后树不平衡了
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // 插入的节点的值是否小于左侧子节点的键
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        // Left left case
        node = this.rotationLL(node);
      } else {
        // Left right case
        return this.rotationLR(node);
      }
    }
    // 向右侧子树插入节点后树不平衡了
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
    // 插入的节点的值是否大于右侧子节点的键
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        // Right right case  大于右侧子节点的值
        node = this.rotationRR(node);
      } else {
        // Right left case   小于右侧子节点的值
        return this.rotationRL(node);
      }
    }
    return node;
  }
  removeNode(node, key) {
    node = super.removeNode(node, key); // {1}
    if (node == null) {
      return node;
    }
    // 检测树是否平衡
    const balanceFactor = this.getBalanceFactor(node);
    // 左侧子树移除节点后树不平衡
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // 左侧子树向左不平衡，进行LL旋转
      if (
        this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
        this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }
      // 左侧子树向右不平衡，进行LR旋转
      if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }
    // 右侧子树移除节点后树不平衡
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      // 右侧子树向右不平衡，进行RR旋转
      if (
        this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
        this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node);
      }
      // 右侧子树向左不平衡，进行RL旋转
      if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}
```
### 红黑树？？？？？？？？？
和AVL树一样，**红黑**树也是一个自平衡二叉搜索树。AVL树插入和移除节点可能会造成旋转，所以需要一个包含多次插入和删除的自平衡树。**红黑**树是比较好的。如果插入和删除频率较低（我们更需要多次进行搜索操作），那么AVL树比红黑树更好。

在红黑树中，每个节点我们都遵循以下规则：
1. 每个节点不是不是红就是黑。
2. 树的根节点是黑的。
3. 所有叶节点都是黑的（用NULL引用表示的节点）。
4. 如果一个节点是红的，那么它的的两个子节点都是黑的。
5. 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点。
6. 从给定的节点到它的后代节点（NULL叶节点）的所有路径包含相同数量的黑色节点。

这些条条框框保证红黑树的自平衡，保证红黑树从根节点到达每一个叶子节点的最长路径不会超过最短路径的 2 倍。

- 插入和删除操作，一般认为红黑树的删除和插入会比 AVL 树更快。因为，红黑树不像 AVL 树那样严格的要求平衡因子小于等于1，这就减少了为了达到平衡而进行的旋转操作次数，可以说是牺牲严格平衡性来换取更快的插入和删除时间。
- 红黑树不要求有不严格的平衡性控制，但是红黑树的特点，使得任何不平衡都会在三次旋转之内解决。而 AVL 树如果不平衡，并不会控制旋转操作次数，旋转直到平衡为止。
- 查找操作，AVL树的效率更高。因为 AVL 树设计比红黑树更加平衡，不会出现平衡因子超过 1 的情况，减少了树的平均搜索长度。



<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210706074856.png" style="zoom:33%;" />

```js
const Colors = {
  RED = 0,
  BLACK = 1
}
class RedBlackNode extends Node {
	constructor(key){
		super(key)
		this.key = key
		this.color = Colors.RED
		this.parent = null
	}
	isRed(){
		return this.color === Colors.RED
	}
}
class RedBlackTree extends BinarySearchTree {
	constructor(compareFn = defaultCompare){
		super(compareFn)
		this.compareFn = compareFn
		this.root = null
	}
	fixTreeProperties(node) {
    // 验证父节点是否为红色，以及这个节点是否不是黑色
		while(node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK){
      	// 保存父节点和祖父节点
				let parent = node.parent
				const grandParent = parent.parent
				// 情形A：父节点时左侧节点
				if(grandParent && grandParent.left === parent){
					const uncle = grandParent.right
					// 情形1A：叔节点也是红色-只需要重新填色
          if(uncle && uncle.color && Colors.RED){
            grandParent.color = Color.RED
            parent.color = Colors.BLACK
            uncle.color = Colors.BLACK
           	node = grandParent
          }else {
          	// 情形2A：节点是右侧子节点-左旋转
            // 父节点是祖父节点的左侧子节点，节点时父节点的右侧子节点
          	if(node === parent.right){
          		this.rotationRR(parent)
          		node = parent
          		parent = node.parent
          	}
          	// 情形3A：节点是左侧子节点-右旋转
            // 父节点是祖父节点的左侧子节点，节点时父节点的左侧子节点
          	this.rotationLL(grandParent);
          	parent.color = Colors.BLACK;
          	grandParent.color = Colors.RED;
          	node = parent;
          }
			}else {
				const uncle = grandParent.left;
				// 情形1B：叔节点时红色-只需要重新填色
        // 父节点是祖父节点的右侧子节点，节点时父节点的左侧子节点
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情形2B：节点是左侧子节点-右旋转
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
					// 情形3B：节点是右侧子节点-左旋转
        // 父节点是祖父节点的右侧子节点，节点时父节点的右侧子节点
          this.rotationRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
			}
		}
  // 保证根结点始终为黑色
		this.root.color = Colors.BLACK;
	}
	insertNode(node,key){
		if(this.compareFn(key,node.key) === Compare.LESS_THAN){
			if(node.left == null){
				node.left = new RedBlackNode(key)
				node.left.parent = node
				return node.left
			}else{
				return this.insertNode(node.left,key)
			}
		}else if(node.right == null){
				node.right = new RedBlackNode(key)
				node.right.parent = node
				return node.right
		}else {
			return this.insertNode(node.right,key)
		}
	}
	insert(key){
		if(this.root == null){
			this.root = new RedBlackNode(key)
			this.root.color = Colors.BLACK
		}else {
			const newNode = this.insertNode(this.root,key)
			// 验证在插入后，红黑树的规则是否得到了满足
			this.fixTreeProperties(newNode)
		}
	}
	rotationLL(node){
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }
	rotationRR(node){
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}
```

## 二叉堆和堆排序

堆数据结构也叫作，**二叉堆**。二叉堆是计算机科学中一种非常著名的数据结构，由于它能效高、快速地找出最大值和最小值，常被应用于**优先队列**。也被用于著名的**堆排序算法**中。

### 二叉堆数据结构

二叉堆是一种特殊的二叉树，有以下两个特性。

它是一棵完全二叉树，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶子节点），并且最后一层 的叶节点尽可能都是左侧子节点，这叫作**结构特性**。

二叉堆不是最小堆就是最大堆。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值。所有的节点都大于等于（最大堆）或小于等于（最小堆）每个它的子节点。这叫作**堆的特性**。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210628223323.png)

在二叉堆中，每个子节点都要大于等于父节点（最小堆）或者小于等于父节点（最大堆）。然而在二叉搜索树中，左侧子节点综述比父节点小，右侧子节点也总是更大。

### 创建最小堆类

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210628223412.png)

要访问使用普通数组的二叉树**节点**我们可以使用下面的方式操作index。

对于给定位置index的节点：

它的左侧子节点的位置是2 * index + 1(如果位置可用)

它的右侧子节点的位置是2 * index + 2(如果位置可用)

它的父节点位置是index / 2(如果位置可用)

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }
    getLeftIndex(index){
    return 2 * index + 1
  }
  getRightIndex(index){
    return 2 * index + 2
  }
  getParentIndex(index){
    if(index === 0){
      return underfined
    }
    return Math.floor((index - 1))
  }
}

```

- insert(value):这个方法向堆中插入一个新的值。如果插入成功，它返回true，否则返回false。

- extract():这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。

- findMinimum():这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。

  ```js
  const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
  };
  function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  }
  class MinHeap {
    constructor(compareFn = defaultCompare) {
      this.compareFn = compareFn;
      this.heap = [];
    }
      getLeftIndex(index){
      return 2 * index + 1
    }
    getRightIndex(index){
      return 2 * index + 2
    }
    getParentIndex(index){
      if(index === 0){
        return underfined
      }
      return Math.floor((index - 1))
    }
    
    
    
    
    swap(array,a,b){
      const temp =  arrray[a]
      array[a] = array[b]
      array[b]= temp
    }
    siftUp(index){
      // 获取父节点的位置
      let parent = this.getParentInde(index)
      while(index>0 && this.compareFn(this.heap[parent],this.heap[index]) === Compare.BIGGER_THAN){
        // 插入元素 小于父节点  和父节点交换
        swap(this.heap,parent,index)
        index = parent
        // 继续操作
        parent = this.getParentInde(index)
      }
    }
    // insert(value):这个方法向堆中插入一个新的值。如果插入成功，它返回true，否则返回false。
    insert(value){
      if(value != null){
        this.heap.push(value)
        this.siftUp(this.heap.legth-1)
        return true
      }
      return false
    }
    
    
    
    size(){
      return this.heap.length
    }
    isEmpty(){
      return this.size() === 0
    }
    //findMinimum():这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。
    findMinmum(){
      return this.isEmpty() ? underfind :this.heap[0]
    }
    
    
    
    siftDown(index){
      let element = index
      const left = this.getLeftIndex(index)
      const right = this.getRightIndex(index)
      const size = this.size()
      if(letf < size && this.compareFn(this.heap[element],this.heap[left]) === Compare.BIGGER_THAN)){
        element = left
      }
      if(right < size && this.compareFn(this.heap[element],this.heap[right]) === Compare.BIGGER_THAN)){
        element = right
      }
      if(index !== element){
        this.swap(this.heap,index,element)
        this.siftDown(element) //递归
      }
    }
   // extract():这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。
    extract(){
      if(this.siEmpty()){
        return underfined
      }
      if(this.size() === 1){
        return this.heap.shift()
      }
      const removedValue = this.heap.shift()
      this.heap[0] = this.heap.pop()
      this.siftDown(0)
      return removedValue
    }
  }
  
  
  ```

  ### 创建最大堆类

  ```js
  function reversCompare(compareFn){
    return (a,b) => compareFn(b,a)
  }
  class MaxHeap extends MinHeap{
    constructor(compareFn = defaultCompare) {
      super(compareFn)
      // 翻转一下比较函数就可以了
      this.compareFn = reverseCompare(compareFn);
    }
  }
  ```

  ### 堆排序算法

  1. 用数组创建一个最大堆用作源数据。
  2. 在创建最大堆后，最大的值会被存储在堆的第一个位置。我们要将它替换为堆的最后一个值，将堆的大小减1。
  3. 最后，我们将堆的根节点下移并且重复步骤2直到堆的大小为1。

  最大堆得到的是一个升序序列的数组（从最小到最大）。

  ```js
  function heapSort(array,compareFn = defaultCompare){
    let heapSize = array.length
    buildMaxHeap(array,compareFn)
    while(heapSize > 1){
      swap(array,0,--heapSize)
      heapify(array, 0, heapSize, compareFn)
    }
    return array
  }
  function heapify(array, index, heapSize, compareFn) {
    let largest = index;
    const left = (2 * index) + 1;
    const right = (2 * index) + 2;
    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
      largest = left;
    }
    if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
      largest = right;
    }
    if (largest !== index) {
      swap(array, index, largest);
      heapify(array, largest, heapSize, compareFn);
    }
  }
  function buildMaxHeap(array, compareFn) {
    // 我们只需要对后半部分数组进行heapify(下移函数)。前半部分会自动排序好
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
      heapify(array, i, array.length, compareFn);
    }
    return array;
  }
  ```
## 图
### 图的相关术语
图是网络结构的抽象模型。图是一组由**边**连接的节点(或顶点)。任何二元关系都是可以用图来表示。
一个图G=(V,E)由以下元素组成。
- V:一组顶点。
- E:一组边，连接V中的顶点。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210628223845.png)
由一条边连接在一起的顶点称为**相邻顶点**。
一个顶点的**度**是其相邻顶点的数量。
**路径**是顶点v1，v2，v3...vk的一个连续序列，其中vi和vi+1是相邻的。以上一示意图中的图为例，其中包含路径ABEI和ACDG。
简单路径是要求不包含重复的顶点。
**环**也是一个简单路径。
如果图中不存在环，则称改图时**无环的**。
如果图中每两个顶点间都存在路径，则该图是**连通的**。

### 有向图和无向图
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210628224657.png)
### 图的表示
#### 邻接矩阵
图中常见的实现是邻接矩阵。每个节点都和一个整数相关联，该整数将作为数组的索引。我们用一个二维数组来表示顶点之间的链接。如果索引为i的节点和索引为j的节点相邻，则array[i][j] === 1，否则array[i][j] === 0。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210628225601.png)
不是强连通的图（**稀疏图**）如果用邻接矩阵来表示，则矩阵中将会有很多0，这意味着我们浪费了计算机存储来表示根本不存在的边。
#### 邻接矩阵
**邻接表**的动态数据结构来表示图。邻接表由图中每个顶点的相邻顶点列表组成。我么可以使用列表数组，链表，甚至是散列表或者字典表示相邻顶点列表。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210628230001.png)
#### 关联矩阵
还可以用**关联矩阵**来表示图。在关联矩阵中，矩阵的行表示顶点，列表示边。如果顶点v是e的入射点，则array[v][e] === 1,否则，array[v][e] === 0。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210628230412.png)
### 创建Graph类
```js
class Graph {
	//isDirected表示是有向图还是无向图，默认是无向的。
	constructor(isDirected = false){
		this.isDirected = isDirected
		//数组存储顶点
		this.vertices = []
		//字典存储边。字典使用顶点的名字作为键，邻接顶点列表作为值。
		this.adjList = new Dictionary()
	}
	addVertex(v){
		if(!this.vertices.includes(v)){
			this.vertices.push(v)
			this.adjList.set(v,[])
		}
	}
	addEdge(v,w){
		if(this.adjList.get(v)){
			this.addVertex(v)
		}
		if(!this.adjList.get(w)){
			this.addVertex(w)
		}
		this.adjList.get(v).push(w);
		// 无向图
		if(!this.isDirected){
			this.adjList.get(w).push(v)
		}
	}
	getVerties(){
		return this.vertices
	}
	getAdjList(){
		return this.adjList
	}
	toString(){
		let s = ''
		for(let i = 0;i<this.vertices.length;i++){
			s += `${this.vertices[i]} -> `
			const neighbors = this.adjList.get(this.vertices[i])
			for(let j = 0;j < neighbors.length;j++){
				s += `${neighbors[j]}`
			}
			$ += `\n`
		}
		return s
	}
}
```
### 图的遍历
图的遍历算法有两种：**广度优先搜索（BFS）**和**深度优先搜索(DFS)**。图的遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是都含有环等。

**图遍历算法**的思想是必须追踪么个第一次访问节点，并且追踪有那些节点还没有被完全探索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点。

完全探索一个顶点要求我们查看该顶点的每一条边。对于每一条边所连接的没有被访问顶点，将其标注为被发现的，并将其加进待访问顶点列表中。

为了保证算法效率，务必访问每个顶点至多两次。连通图中每条边和顶点都会被访问到。

|算法|数据结构|描述|
|:----:|:----:|:----:|
|深度优先搜索|栈|将顶点存入栈，顶点是沿着路径被搜索的，存在新的相邻顶点就去访问。|
|广度优先搜索|队列|将顶点存入队列，最先入队列的顶点先被探索。|

当要标注已经访问过的顶点时，我们使用三种颜色来反映他们的状态。
- 白色：表示该顶点还没有被访问。
- 灰色：表示该顶点被访问过，但并未被探索。
- 黑色：表示该顶点被访问过且被完全探索过。
```js
const Color {
	WHITE:0,
  GRAY:1,
  BLACK:2
}
const initializeColor = vertices => {
	const color = {}
  for(let i = 0;i < vertices.length;i++){
    color[vertices[i]] = Color.WHITE
  }
  return color
}
```

#### 广度优先搜索

广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的邻点（相邻顶点），就像一次访问图的一层。换句话说，就是先宽后深地访问顶点。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210629061353.png)

以上是从顶点v开始的广度优先探索算法所遵循的步骤。

1. 创建一个队列Q。
2. 标注v为被发现的（灰色），并将v入队列Q。
3. 如果Q非空，则运行一下步骤：
   - [ ] 将u从队列Q中出队列。
   - [ ] 将标注u为被发现的（灰色）。
   - [ ] 将u所有未被访问过的邻点（白色）入队列。
   - [ ] 标注u为已被探索的（黑色）。

```js
const Color {
	WHITE:0, //白色：表示该顶点还没有被访问。
  GRAY:1, //表示该顶点被访问过，但并未被探索。
  BLACK:2 //表示该顶点被访问过且被完全探索过。
}
const initializeColor = vertices => {
	const color = {}
  for(let i = 0;i < vertices.length;i++){
    color[vertices[i]] = Color.WHITE
  }
  return color
}
const breadthFirstSearch = (graph,startVertex,callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjLish()
  const color = initializeColor(vertices)
  
  const queue = new Queue()
  queue.enqueue(startVertex)
  
  while(!queue.isEmpty()){
    const u =queue.dequeue()
    const neighbors = adjList.get(u)
    color[u] = Colors.GREY
    for(let i = 0;i < neighbors.lenght;i++){
      const w = neighbors[i]
      if(color[w] === Colors.WHITE){
        color[w] = Colors.GREY
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK
    // 如果传入了回调函数会利用它
    callback)&&callback(u)
  }
}

```

#### 1. 使用BFS寻找最短路径

给定一个图G和源顶点v，找出每个顶点u和v之间最短路径的距离（以边的数量计）

对于给定顶点v，广度优先算法会访问所有与其距离为1的顶点，接着是距2的顶点，依次类推。

- 从v到u的距离distance[u]。
- 前溯点predecessors[u]，用来推导出从v到其他每个顶点u的最短路径。

```js
const BFS = (graph,statrVertex) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const queue = new Queue()
  //表示距离
  const distances = {};
  //表示前溯点
  const predecessors = {}
  queue.enqueue(startVertex)
  
  for(let i = 0;i < vertices.length;i++){
    // 初始化
    distance[vertices[i]] = 0
    predecessors[vertices[i]] = null
  }
  
  while(!queue.isEmpty()){
    const u = queue.dequeue()
    const neighbors = adjList.get(u)
    color[u] = Colors.GREY
    for(let i = 0;i < neighbors.length;i++){
      const w = neighbors[i]
      if(color[w] === Colors.WHITE){
        color[w] = Colors.GREY
        distances[w] = distance[u] + 1
        predecessors[w] = u
        queue.enqueue(w)
      }
    }
    colro[u] = Colors.BLACK
  }
  retrun {
    distances,
    predecessors
  }
}




// 打印路径
const shortestPathA = BFS(graph,myVertices[0])
const formVertex = myVertices[0]
for(let i = 1;i < myVertices.length;i++){
  const toVertex = myVertices[i]
  const path = new Stack()
  for(let v = toVertex;v !== formVertex;v = shortestPathA.predecessors[v]){
    path.push{v}
  }
  path.push(fromVertex)
  let s = path.pop()
  while(!path.isEmpty()){
    s += '-' + path.pop()
  }
  console.log(s)
}
```

#### 2.深入学习最短路径算法

- Dijlstra
- Floyd-Warshall

#### 深度优先搜索(DFS)

深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路路径最后一个顶点被访问了，接着原路回退并探索下一条路径。换句话说，它是先深度后广度地访问顶点。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210629071104.png)

深度优先搜索算法不需要一个源顶点。在深度优先搜索算法中，若图中顶点v未访问，则访问该顶点v。

访问顶点v，照做下步骤做：

1. 标注v为被发现的（灰色）。
2. 对于v的所有未被访问（白色）的邻点w，访问顶点w。
3. 标注v为已被探索（黑色）。

深度优先搜索的步骤是递归，这意味着深度优先搜索算法使用栈来存储函数调用（递归调用所创建的栈）。

```js
const Color {
	WHITE:0, //白色：表示该顶点还没有被访问。
  GRAY:1, //表示该顶点被访问过，但并未被探索。
  BLACK:2 //表示该顶点被访问过且被完全探索过。
}
const initializeColor = vertices => {
	const color = {}
  for(let i = 0;i < vertices.length;i++){
    color[vertices[i]] = Color.WHITE
  }
  return color
}
const depthFirstSearch = (graph,callback){
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  for(let i = 0;i < vertices.length;i++){
    if(color[vertices[i]] === Colors.WHITE){
      depthFirstSearchVist(vertices[i],color,adjList,callback)
    }
  }
}
const depthFirstSearchVist = (u,color,adjList,callback){
  color[u] = Colors.GREY
  callback&&callback(u)
  const neightbors = adjList.get(u)
  for(let i = 0;i < neightbors.length;i++){
    const w = neighbors[i]
    if(color[w] === Colors.WHITE){
      // w入递归栈
      depthFirstSearchVist(w,color,adjList,callback)
    }
  }
  // 在该顶点和邻点按深度访问后，我们回退，意思是该顶点已被完全探索，并且标注为黑色。
  color[u] = Colors.BLACK
}
```

![image-20210629073009255](/Users/cr/Library/Application Support/typora-user-images/image-20210629073009255.png)

#### 1.探索深度优先算法

对于给定的图G，我们希望深度优先搜索算法遍历图G的所有节点，构建“森林”（有根树的一个集合）以及一组源顶点（根），并输出两个数组：发现时间和完成探索时间。

- 顶点u的发现时间d[u]。
- 当顶点u被标记为黑色时，u的完全探索时间f[u]
- 顶点u的前溯点p[u]

```js
const Color {
	WHITE:0, //白色：表示该顶点还没有被访问。
  GRAY:1, //表示该顶点被访问过，但并未被探索。
  BLACK:2 //表示该顶点被访问过且被完全探索过。
}
const initializeColor = vertices => {
	const color = {}
  for(let i = 0;i < vertices.length;i++){
    color[vertices[i]] = Color.WHITE
  }
  return color
}
const DFS = graph => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const d = {} //发现时间
  const f = {} //探索时间
  const p = {} //前溯点p[u]
  const time = { count : 0 }
  for(let i = 0;i < vertices.length;i++){
    if(Color[vertices[i]] === Colors.WHITE){
      DFSVisit(vertices[i],color,d,f,p,time,adjList)
    }
  }
  return {
    discovery:d,
    finished:f,
    predecessors:p
  }
} 
const DFSVisit = (u,color,d,f,p,time,adjList){
  color[u] = Colors.GREY
  //追踪发现时间
  d[u] = ++time.count
  const neighbors = adjList.get(u)
  for(let i = 0;i < neighbors.lengthl;i++){
    const w = neighbors[i]
    if(color[w] === Colors.WHITE){
      //追踪w的前溯点
      p[w] = u
      DFSVisit(w,color,d,f,p,time,adjList)
    }
  }
  color[u] = Colors.BLACK
  //追踪其完成时间
  f[u] = ++time.count
}
```

对于改进过的深度优先探索，有两个点需要我们注意。

- 时间（time）变量范围只可能在图顶点数量的一倍到两倍（2|V|）之间。
- 对于所有的顶点u，d[u]<f[u]   完成时间意思是所有顶点已经被探索过了。

#### 拓扑排序

当我们需要编排一些任务或步骤的执行顺序时，这称为**拓扑排序**。拓扑麦序只能应用与**DAG（有向无环图）**。

```js
graph = new Graph(true) //有向图

myVertices = ['A','B','C','D','E','F']
for(let i= 0;i < myVertices.length;i++){
  graph.addVertex(myVertices[i])
}

graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('B','D')
graph.addEdge('B','E')
graph.addEdge('C','F')
graph.addEdge('F','E')

// 执行的改进之后的DFS算法
const result = DFS(graph)


// 根据DFS之后，该图的发现时间和完成时间。以倒序来排序完成时间数组，便得到了该图的排序数组。
const fTimes = result.finished
s = ''
for(let count = 0;count < myVertices.length;count++){
  let max = 0
  let maxName = null
  for(i = 0;i < myVertices.length;i++){
    if(fTimes[myVertices[i]] > max){
      max = fTimes[myVertices[i]]
      maxName = [myVertices[i]]
    }
  }
  s += '-' + maxName
  delete fTimes[maxName]
}
console.log(s) // B-A-D-C-F-E


```

###  最短路径算法

#### Dijkstra算法

Dijkstra算法是一种计算从单个源到其他所有源的最短路径的贪心算法。**这意味着我们可以用它来计算从图的一个顶点到其余各顶点的最短路径。**

![image-20210629192225703](/Users/cr/Library/Application Support/typora-user-images/image-20210629192225703.png)

找顶点A和其余顶点之间的最短路径。

```js
var graph = [
  [0,2,4,0,0,0],
  [0,0,2,4,2,0],
  [0,0,0,0,3,0],
  [0,0,0,0,0,2],
  [0,0,0,3,0,2],
  [0,0,0,0,0,0]
]

const INF = Number.MAX_SAFE_INTEGER
const dijkstra = (graph,src) => {
  const dist = []
  const visited = []
  const { length } = graph
  for(let i = 0;i < length; i++){
    //所有距离初始化为无限大，visited[]初始化为false
    dist[i] = INF
    visited[i] = false
}
//然后，把源顶点到自己的距离设为0
dist[src] = 0
//接下来，要找出到其余顶点的最短路径
for(let i = 0;i < length - 1;i++){
  	//为此，我们需要从尚未处理的顶点中选出距离最近的顶点
    const u = minDistance(dist,visited)
    //把选出的顶点标位visited，以免重复计算
    visited[u] = true
    for(let v= 0;v < length;v++){
      //如果找到最短的路径，则更新最短路径的值
      if(!visited[v] && graph[u][v] !== 0 && dist[u] !== INF  && dist[u] + graph[u][v] < dist [v]){
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }
  //处理完所有顶点后，返回从源顶点（src）到图中的其他顶点最短路径结果。
  return dist
}

const minDistance = (dist,visited) => {
  let min = INF
  let minIndex = -1
  for(let v = 0;v < dist.length;v++){
    if(visited[v] === false && dist[v] <= min){
      min = dist[v]
      minIndex = v
    }
  }
  return minIndex
}

```

#### Floyd-Warshall算法

Floyd-Warshall算法是一种计算图中所有最短路径的动态规划算法。**该算法，我们可以找出所有源到所有顶点的最短路径。**

![image-20210629192225703](/Users/cr/Library/Application Support/typora-user-images/image-20210629192225703.png)

```js
const floyWarshall = graph => {
  const dist = []
  const { length } = graph
  //distances数组初始化为每个顶点之间的权值。
  for(let i= 0;i < length;i++){
    dist[i] = []
    for(let j = 0;j < length;j++){
      if(i === j){
        dist[i][j] = 0
      }else if(!isFinite(graph[i][j])){
        dist[i][j] = Infiity
      }else {
        dist[i][j] = graph[i][j]
      }
    }
  }
  // 将顶点0到k作为中间点，从i到j的最短路径经过k。
  for(let k = 0;k < length;k++){
    for(let i = 0;i < length;i++){
    	for(let j = 0;j < length;j++){
        // 通过顶点k的i和j之间的最短路径
    		if(dist[i][k] + dist[k][j] < dist[i][j]){
          dist[i][j] = dist[i][k] + dist[k][j]
        }
 			}
 		}
  }
  return dist
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210629210440.png)

### 最小生成树

最小生成树（MST）问题是网络设计中常见的问题。

- 几间办公室实现电话线互相连通，以节约资金。
- 岛桥问题，n个岛屿之间建造桥梁，享用最低的成本实现岛屿互相连通。

![image-20210629211057429](/Users/cr/Library/Application Support/typora-user-images/image-20210629211057429.png)

#### Prim算法

Prim算法是一种求解加权无向连通图的MST问题的贪心算法。它能找出某种边的子集，使得其构成树包含中所有顶点，且边的权值之和最小。

```js
const INF = Number.MAX_SAFE_INTEGER;
const minKey = (graph, key, visited) => {
  // Initialize min value
  let min = INF;
  let minIndex = 0;
  for (let v = 0; v < graph.length; v++) {
    if (visited[v] === false && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }
  return minIndex;
};
export const prim = graph => {
  const parent = [];
  const key = [];
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  // 选择第一个key作为第一个顶点。同时，因为第一个顶点总是MST的根结点，所以parent[0] = -1;
  key[0] = 0;
  parent[0] = -1;//根结点
  for (let i = 0; i < length - 1; i++) {
    // 从未处理的顶点集合中选出key值最小的顶点
    const u = minKey(graph, key, visited);
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  return parent;
};
```

#### Kruskal算法

和Prim算法类似，Kruskal算法也是一种求加权无向连通图的MST的贪心算法。

```js
const INF = Number.MAX_SAFE_INTEGER;
const find = (i, parent) => {
  while (parent[i]) {
    i = parent[i]; 
  }
  return i;
};
const union = (i, j, parent) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
};
const initializeCost = graph => {
  const cost = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    cost[i] = [];
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF;
      } else {
        cost[i][j] = graph[i][j];
      }
    }
  }
  return cost;
};
export const kruskal = graph => {
  const { length } = graph;
  const parent = [];
  let ne = 0;
  let a;
  let b;
  let u;
  let v;
  // 首先，把邻接矩阵的值复制到cost数组，以方便修改且可以保留原始值行。
  const cost = initializeCost(graph);
  // 当MST的边数小于顶点总数减一时。
  while (ne < length - 1) {
    //找出权值最小的边
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    // 检查MST是否已经存在这条边，以避免环路。
    u = find(u, parent);
    v = find(v, parent);
    // 如果u和v是不同的边，将其加入MST
    if (union(u, v, parent)) {
      ne++;
    }
    // 从列表中移除这些边，以免重复计算
    cost[a][b] = cost[b][a] = INF;
  }
  return parent;
};

```

## 排序和搜索算法

- 冒泡排序
- 选择排序
- 插入排序
- 希尔排序
- 归并排序
- 快速排序
- 计数排序
- 桶排序
- 基数排序
- 顺序搜索
- 内插搜索
- 二分搜索

### 排序算法

#### 冒泡排序

从运行时间的角度来看，冒泡排序是最差的一个。

**冒泡排序**比较所有相邻的两个项，如果第一个比第二个大，则交换他们。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    // console.log('--- ');
    for (let j = 0; j < length - 1; j++) {
      // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630094323.png)

#### 改进的冒泡排序

如果内循环减去外循环中已经跑的轮数，就可以避免内循环中所有不必要的比较。

```js
function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    // console.log('--- ');
    for (let j = 0; j < length - 1 - i; j++) {
      // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630094945.png)

#### 选择排序

**选择排序**算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并且放置在第一位，接着找到第二小的值并将其放在第二位。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
const selectionSort = (array, compareFn = defaultCompare) => {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    // console.log('index ' + array[i]);
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        // console.log('new index min ' + array[j]);
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      // console.log('swap ' + array[i] + ' with ' + array[indexMin]);
      swap(array, i, indexMin);
    }
  }
  return array;
};

```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630100612.png)

#### 插入排序

**插入排序**每次排一个数组项，以此方式构建最后的排序数组。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

const insertionSort = (array, compareFn = defaultCompare) => {
  const { length } = array;
  let temp;
  //从第二项开始插入，默认第一项已经排序了。
  for (let i = 1; i < length; i++) {
    let j = i;
    //保存当前的临时值
    temp = array[i];
    // console.log('to be inserted ' + temp);
    // 从当前位置 从后往前开始  遍历比较
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      // console.log('shift ' + array[j - 1]);
      array[j] = array[j - 1];
      j--;
    }
    // console.log('insert ' + temp);
    array[j] = temp;
  }
  return array;
};

```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630101531.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630101549.png)

#### 归并排序

**归并排序**是第一个可以实际使用的排序算法。归并排序性能不错，其复杂度O(nlog(n))。

归并排序是一是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

由于是分治法，归并排序也是递归的。我么要将算法分为两个函数：第一个负责将一个大数组分为多个小数组并调用排序的辅助函数。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

//分割
function mergeSort(array, compareFn = defaultCompare) {
  //递归停止条件
  if (array.length > 1) {
    const { length } = array;
    // 找中间位，然后切分
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    // 负责合并和排序小数组来产生大数组，直到回到原始数组并已完成排序。
    array = merge(left, right, compareFn);
  }
  return array;
}

//合并
function merge(left, right, compareFn) {
  let i = 0; //左
  let j = 0; //右
  const result = [];
  //比较来自left数组的项收比来自right数组的项小。如果是，将该项从left数组添加至归并结果数组，并递增用于迭代数组的控制变量，否则从right数组添加项并递增用于迭代数组的控制变量。
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
  }
  //将left剩余所有剩余的项添加到归并数组中，right也是一样的
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630133217.png)

#### 快速排序

**快速排序**也许是最常用的排序算法了。它的复杂度为O(nlog(n))，且性能通常比其他复杂度为O(nlog(n))的排序算法要好。和归并排序一样，快速排序也使用分而治之的方法，将原始数组分为较小的数组（但它没有像归并排序那样将他们分割开）。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630134519.png)

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

function partition(array, left, right, compareFn) {
  //选择中间值
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
	
  while (i <= j) {
    //从右边找大于这个中间值的
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    //从左边找小于这个中间值的
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
function quick(array, left, right, compareFn) {
  let index;
  //如果数组的长度>1（因为只有一个元素的数组必然是已排序了的）
  if (array.length > 1) {
    //对子给定子数组执行partition操作
    index = partition(array, left, right, compareFn);
    // 从left-1  = index - 1 开始  
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    // 从left开始
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}

function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}
```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210630164701.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210630165803.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210630170033.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210630170112.png" style="zoom:33%;" />

#### 计数排序

**计数排序**是一个分布式排序。分布式排序使用已经组织好的辅助数据结构（桶），然后进行合并，得到排序好的数组。

计数排序使用一个用来存储每个元素在原始数组中出现的次数的临时数组。在所有元素都计数完成后，临时数组已排序好序并可以迭代以构建排序后的结果数组。

它是用来排序整数的优秀算法，时间复杂度为O（n+k）,其中k是临时计数数组的大小，但是，它确实需要更多的内存存放临时数组。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function findMaxValue(array, compareFn = defaultCompare) {
  if (array && array.length > 0) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(max, array[i]) === Compare.LESS_THAN) {
        max = array[i];
      }
    }
    return max;
  }
  return undefined;
}


function countingSort(array) {
  //数组中不含有元素，或者只有一个元素，不需要排序算法
  if (array.length < 2) {
    return array;
  }
  //找到数组中的最大值
  const maxValue = findMaxValue(array);
  //创建计数数组   索引的氛围是最大值加1
  const counts = new Array(maxValue + 1);
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  let sortedIndex = 0;
  // console.log('Frequencies: ' + counts.join());
  counts.forEach((element, i) => {
    while (element > 0) {
      array[sortedIndex++] = i;
      element--;
    }
  });
  return array;
}
```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210630223921.png" style="zoom:50%;" />

#### 桶排序

**桶排序**（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶（较小的数组），再使用一个简单的排序算法对于每个桶进行排序。然后，它将所有的痛合并为结果数组。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

const insertionSort = (array, compareFn = defaultCompare) => {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    // console.log('to be inserted ' + temp);
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      // console.log('shift ' + array[j - 1]);
      array[j] = array[j - 1];
      j--;
    }
    // console.log('insert ' + temp);
    array[j] = temp;
  }
  return array;
};

// 创建桶
function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  //迭代原数组找到最大值和最小值
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  //计算每个桶的中需要分布的元素个数
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  //初始化每个桶
  for (let i = 0; i < bucketCount; i++) {
    //多维数组
    buckets[i] = [];
  }
  //将元素分布到每个桶中
  for (let i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }
  return buckets;
}

//桶排序
function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      //每个桶进行插入排序
      insertionSort(buckets[i]);
      //排好的数组放入结果数组中（解构）
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}

//需要指定多少个桶来排序各个元素。桶排序在所有元素平分到各个桶中时的表现最好。
function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array;
  }
  //用来创建桶将元素分布到不同的桶中。
  const buckets = createBuckets(array, bucketSize);
  //对每个桶执行插入排序算法和将所有桶合并为排序后的结果数组
  return sortBuckets(buckets);
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630230350.png)

#### 基数排序

**基数排序**也是一个分布式排序算法，它根据数字的**有效位**或者基数，将整数分布到桶中。基数排序是基于数组中的值的计数制的。主要用来排序整数。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function findMaxValue(array, compareFn = defaultCompare) {
  if (array && array.length > 0) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(max, array[i]) === Compare.LESS_THAN) {
        max = array[i];
      }
    }
    return max;
  }
  return undefined;
}

function findMinValue(array, compareFn = defaultCompare) {
  if (array && array.length > 0) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(min, array[i]) === Compare.BIGGER_THAN) {
        min = array[i];
      }
    }
    return min;
  }
  return undefined;
}

const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
  Math.floor(((value - minValue) / significantDigit) % radixBase);

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  //初始化桶排序
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);//数组中数的有效位
    buckets[bucketsIndex]++;//计数排序
  }
  //计数排序需要累积结果来得到正确的计数值。
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
 	//将值移回原来数组中
  for (let i = array.length - 1; i >= 0; i--) {
    //数组中数的有效位
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
    //从buckets数组中减去它的计数值  放到临时数组
    aux[--buckets[bucketsIndex]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
};


//使用基数是10  //使用10个桶
function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  //原数组最小值
  const minValue = findMinValue(array);
  //原数组最大值
  const maxValue = findMaxValue(array);
  //最后一位开始排序所有的数，也可以修改成支持排序字母字符。
  let significantDigit = 1;
  //直到没有待排序的有效位
  while ((maxValue - minValue) / significantDigit >= 1) {
 		//基数排序
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    //个位百位十位
    significantDigit *= radixBase;
  }
  return array;
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210630231547.png)

#### 希尔排序

- 先将整个待排序的记录序列分割成为若干子序列。
- 分别进行直接插入排序。
- 待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序。

```js
const shellSort = arr => {
	let len = arr.length,
		temp,
		gap = 1;
	console.time('希尔排序耗时');
	while (gap < len / 3) {
		//动态定义间隔序列
		gap = gap * 3 + 1;
	}
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (let i = gap; i < len; i++) {
			temp = arr[i];
			let j = i - gap;
			for (; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
			console.log('arr  :', arr);
		}
	}
	console.timeEnd('希尔排序耗时');
	return arr;
};
```

### 搜索算法

#### 顺序搜索

顺序或线性搜索是最基本的搜索算法。将每一个数据结构中的元素和我们要找的元素做比较。顺序搜索是最低效的一种算法。

```js
const DOES_NOT_EXIST = -1;

function defaultEquals(a, b) {
  return a === b;
}

function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return DOES_NOT_EXIST;
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701070435.png)

#### 二分搜索

**二分搜索**算法的原理和猜数字游戏类似。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701071337.png)

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function binarySearch(array, value, compareFn = defaultCompare) {
  //随意一种排序算法  将原数组排序成有序的
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];
    // console.log('mid element is ' + element);
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
      // console.log('low is ' + low);
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
      // console.log('high is ' + high);
    } else {
      // console.log('found it');
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701071913.png)

#### 内插搜索

**内插搜索**是改良版的二分搜搜。二分搜索总检查min位置上的值，而内插搜索可能会根据要搜索的值检查数组中的不同地方。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701072134.png)

```js
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

export const DOES_NOT_EXIST = -1;

export function lesserEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultEquals(a, b) {
  return a === b;
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b);
}


function interpolationSearch(
  array,
  value,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff
) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;
  while (
    low <= high &&
    biggerEquals(value, array[low], compareFn) &&
    lesserEquals(value, array[high], compareFn)
  ) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);
    if (equalsFn(array[position], value)) {
      return position;
    }
    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return DOES_NOT_EXIST;
}


```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701073042.png)

### 随机算法

需要将一个数组中的值进行随机排列。

#### Fisher-Yates随机

它的含义是迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换。这个随机位置比当前位置小。这样，这个算法可以保证随机过的位置不会再被随机一次。

```js
function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}
```

## 算法设计与技巧

### 分为治之

归并和排序算法。两者都是分为治之算法。两者的共同点在于它们都是分而治之。分而治之是算法设计中的一种方法。它将一个问题分成多个问题和原问题相似的小问题，递归解决小问题，再将解决方式合并以解决原来的问题。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701125931.png)

#### 二分搜索

前面的方式是迭代来实现二分搜索。现在是分而治之的方式实现这个方法。

- **分解**：计算mid并搜索数组较小或较大的一半。
- **解决**：在较小或较大的一半中搜索值。
- **合并**：这不需要，因为我们直接返回了索引值。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

const DOES_NOT_EXIST = -1;

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    //找中间中间值
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    }
    if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    }
    return mid;
  }
  return DOES_NOT_EXIST;
}

function binarySearch(array, value, compareFn = defaultCompare) {
  //快速排序先排成有序
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}
```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210701154342.png" style="zoom:50%;" />

### 动态规划

动态规划是一种将复杂问题分解成更小的子问题来解决的优化技术。

:::tip 注意

动态规划和分而治之是不同的方法。分而治之方法是把问题分解成相互独立的子问题，然后组合它们的答案，而动态规划是将问题分解成互相依赖的子问题。

:::

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701154914.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701155137.png)

#### 最少硬币找零问题

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210701160535.png)

```js
//coins硬笔面额[1,5,10,25]  //amount花钱的总数
function minCoinChange(coins, amount) {
  const cache = [];//记忆化 
  //递归函数  解决问题
  //内部函数也可以 访问到cache
  const makeChange = (value) => {
    //amount不为正，就返回空数组
    if (!value) {
      return [];//包含用来找零的各个面额的硬币数量（最小硬币数）
    }
    //若结果已缓存，则直接返回结果，否则，执行算法
    if (cache[value]) {
      return cache[value];
    }
    let min = [];
    let newMin;
    //对每个面额我们都计算有个新的值，它的值会一直减小，直到能找零的最小钱数
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount) ) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[value] = min);
  };
  return makeChange(amount);
}
```

#### ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703082357.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703082442.png)

#### 0-1背包问题（每个物品只可使用一次）

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210702215917.png)

```js
//通过背包携带物品价值的最大值，而不列出实际的物品
function findValues(n, capacity,weight, values,kS) {
  let i = n;
  let k = capacity;
  while (i > 0 && k > 0) {
    if (kS[i][k] !== kS[i - 1][k]) {
      // console.log(
      //  item ' + i + ' can be part of solution w,v: ' + weights[i - 1] + ',' + values[i - 1]
      //  );
      i--;
      k -= kS[i][k];
    } else {
      i--;
    }
  }
}

//ks[i][w]  对于当前i个物品，当背包容量为w时，可以装的最大价值是ks[i][w]
export function knapSack(capacity, weights, values, n) {
  const kS = [];
  //初始化将用于寻找解决方案的矩阵。
  for (let i = 0; i <= n; i++) {
    kS[i] = [];
  }
  //矩阵为ks[n+1][capacity+1]
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      //忽略矩阵的第一行和第一列，只处理索引不为0的列和行。
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
        //物品i的重量必须小于约束，才有可能成为解决方案的一部分。否则总重量就会超出背包能够携带的重量，这是不可能发生的。
      } else if (weights[i - 1] <= w) {
        //装入i 
        //放入第i个还剩的w - weights[i - 1]
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        //不装入i
        const b = kS[i - 1][w];
        //当找到可以构成解决方案的物品时，选择价值最大的那个。
        kS[i][w] = a > b ? a : b; // max(a,b)
      } else {
        //在w的约束下不把物品i装入背包的最大价值是多少，就是i-1个物品的最大价值
        kS[i][w] = kS[i - 1][w];
      }
    }
    console.log(kS[i].join());
  }
  findValues(n, capacity,weight, values, kS);
  return kS[n][capacity];
}
```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703082531.png)

- 列代表当前背包可以存放的物品的重量。
- 行代表当前物品  
- 表内是存放物品的价值

```js
//递归版本
function knapSack(capacity, weights, values, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }
  if (weights[n - 1] > capacity) {
    return knapSack(capacity, weights, values, n - 1);
  }
  const a = values[n - 1] + knapSack(capacity - weights[n - 1], weights, values, n - 1);
  const b = knapSack(capacity, weights, values, n - 1);
  return a > b ? a : b;
}
```

#### 最长公共子序列

<img src="/Users/cr/Library/Application Support/typora-user-images/image-20210703103111188.png" alt="image-20210703103111188" style="zoom:50%;" />

```js
export function lcs(wordX, wordY) {
  const m = wordX.length;
  const n = wordY.length;
  const l = [];
  //初始化数组
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    //第一行第一列第一个都是0
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
    }
  }
  //开始循环遍历
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      //第一行第一列直接为0
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        //如果相等的话  当前位置左斜上角的值加1
        l[i][j] = l[i - 1][j - 1] + 1;
      } else {
        //如果wordX[i - 1] === wordY[j - 1]不相等话，计算当前位置的上面和左面的最大值
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b; // max(a,b)
      }
    }
    // console.log(l[i].join());
  }
  return l[m][n];
}
```

```js
function printSolution(solution, wordX, m, n) {
  let a = m;
  let b = n;
  let x = solution[a][b];
  let answer = '';
  while (x !== '0') {
    if (solution[a][b] === 'diagonal') {
      answer = wordX[a - 1] + answer;
      a--;
      b--;
    } else if (solution[a][b] === 'left') {
      b--;
    } else if (solution[a][b] === 'top') {
      a--;
    }
    x = solution[a][b];
  }
  // console.log('lcs: ' + answer);
}
export function lcs(wordX, wordY) {
  const m = wordX.length;
  const n = wordY.length;
  const l = [];
  const solution = [];
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
      solution[i][j] = '0';
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
        solution[i][j] = 'diagonal';
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b; // max(a,b)
        solution[i][j] = l[i][j] === l[i - 1][j] ? 'top' : 'left';
      }
    }
    // console.log(l[i].join());
    // console.log(solution[i].join());
  }
  printSolution(solution, wordX, m, n);
  return l[m][n];
}


```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210703143200.png" style="zoom:33%;" />

```js
//递归算法
function lcs(wordX, wordY, m = wordX.length, n = wordY.length) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (wordX[m - 1] === wordY[n - 1]) {
    return 1 + lcs(wordX, wordY, m - 1, n - 1);
  }
  const a = lcs(wordX, wordY, m, n - 1);
  const b = lcs(wordX, wordY, m - 1, n);
  return a > b ? a : b;
}
```

#### 矩阵链相乘

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703154258.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703154344.png)

```js
function printOptimalParenthesis(s, i, j) {
  if (i === j) {
    // console.log('A[' + i + ']');
  } else {
    // console.log('(');
    printOptimalParenthesis(s, i, s[i][j]);
    printOptimalParenthesis(s, s[i][j] + 1, j);
    // console.log(')');
  }
}

function matrixChainOrder(p) {
  const n = p.length;
  const m = [];
  const s = [];
  for (let i = 1; i <= n; i++) {
    m[i] = [];
    m[i][i] = 0;
  }
  for (let i = 0; i <= n; i++) {
    // to help printing the optimal solution
    s[i] = []; // auxiliary
    for (let j = 0; j <= n; j++) {
      s[i][j] = 0;
    }
  }
  //l: 2~p.length
  for (let l = 2; l < n; l++) {
    //i: 1~p.length-l+1
    for (let i = 1; i <= (n - l) + 1; i++) {
      const j = (i + l) - 1;	
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (let k = i; k <= j - 1; k++) {
        // q = cost/scalar multiplications
        const q = m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j]);
        if (q < m[i][j]) {
          m[i][j] = q;
          s[i][j] = k; // s[i,j] = Second auxiliary table that stores k
        }
      }
    }
  }
  // console.log(m);
  // console.log(s);
  printOptimalParenthesis(s, 1, n - 1);
  return m[1][n - 1];
}
```

### 贪心算法

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703193334.png)

#### 最少找找零问题

```js
function minCoinChange(coins, amount) {
  const change = [];
  let total = 0;
  // 从大到小开始试
  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];
    // 把它的值的total相加后，total需要小于amount
    while (total + coin <= amount) {
      //面额结果插入到结果中
      change.push(coin);
      //将total相加
      total += coin;
    }
  }
  return change;
}
```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210703194508.png" style="zoom:33%;" />

#### 分数背包问题

在0-1背包问题中，只能向背包里装入完整的物品，而在分数背包问题中，可以装入分数的物品。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703194905.png)

```js
function knapSack(capacity, weights, values) {
  const n = values.length;
  let load = 0;
  let val = 0;
  //总重量少于背包重量（不能带超过容量的东西），会迭代物品。
  for (let i = 0; i < n && load < capacity; i++) {
    //如果物品可以完整地装入背包
    if (weights[i] <= capacity - load) {
      //将重量和价值分别计入背包已装入物品的总价值和总重量、
      val += values[i];
      load += weights[i];
      //如果物品不能完整地装入背包，计算能够装入部分的比例
    } else {
      const r = (capacity - load) / weights[i];
      val += r * values[i];
      load += weights[i];
      // console.log('using ratio of ' + r + ' for item ' + (i + 1) + ' for the solution');
    }
  }
  return val;
}
```

### 回溯算法

回溯是一种渐进式寻找构建问题解决方式的策略。我们从一个可能动作开始并试着用这个动作解决问题。如果不能解决问题，就回溯并选择另一个动作指导将问题解决。根据这种行为，回溯算法会尝试所有的动作。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703201044.png)

#### 迷宫老鼠问题

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703201218.png)

```js
function isSafe(maze, x, y) {
  const n = maze.length;
  if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
    return true;
  }
  return false;
}

function findPath(maze, x, y, solution) {
  const n = maze.length;
  //老鼠已经到达了终点。如果到了，就将最后一个位置标记为路径的一部分并返回true，表示移动成功结束。
  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1;
    return true;
  }
  //验证老鼠是否可以安全移动到该位置。
  if (isSafe(maze, x, y) === true) {
    solution[x][y] = 1;
    //向当前位置的右边走
    if (findPath(maze, x + 1, y, solution)) {
      return true;
    }
    //向当前位置的下面走
    if (findPath(maze, x, y + 1, solution)) {
      return true;
    }
    //如果水平和垂直都无法走吗，那么将这步从路径中移除并且回溯。
    solution[x][y] = 0;
    return false;
  }
  return false;
}

function ratInAMaze(maze) {
  const solution = [];
  //初始化每个位置为0
  for (let i = 0; i < maze.length; i++) {
    solution[i] = [];
    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0;
    }
  }
  if (findPath(maze, 0, 0, solution) === true) {
    return solution;
  }
  return 'NO PATH FOUND';
}

```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703202318.png)

#### 数独解题器

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703202410.png)

```js
const UNASSIGNED = 0;

function usedInRow(matrix, row, num) {
  for (let col = 0; col < matrix.length; col++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInCol(matrix, col, num) {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox(matrix, boxStartRow, boxStartCol, num) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (matrix[row + boxStartRow][col + boxStartCol] === num) {
        return true;
      }
    }
  }
  return false;
}

function isSafe(matrix, row, col, num) {
  return (
    !usedInRow(matrix, row, num) &&
    !usedInCol(matrix, col, num) &&
    //是否在当前的小数独内   一个小技巧
    !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
  );
}
function solveSudoku(matrix) {
  let row = 0;
  let col = 0;
  let checkBlankSpaces = false;

  for (row = 0; row < matrix.length; row++) {
    for (col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === UNASSIGNED) {
        //如果有空白位置
        checkBlankSpaces = true;
        break;
      }
    }
    //如果有空白位置从两个循环跳出
    if (checkBlankSpaces === true) {
      break;
    }
  }
   //如果没有空白位置（值为0的位置），表示谜题已被完成。
  if (checkBlankSpaces === false) {
    return true;
  }
	//遇到空白并且col和row变量会表示需要用1-9填写空白的位置。
  for (let num = 1; num <= 9; num++) {
    //检查填入数字是否符合
    if (isSafe(matrix, row, col, num)) {
      //符合就填入这数字
      matrix[row][col] = num;
      //填入之后继续执行solveSudoku函数来尝试填写下一个位置
      if (solveSudoku(matrix)) {
        return true;
      }
      //如果一个数字填在了不正确的位置，我们就在将这个位置标记为空，并且算法会回溯在尝试一个其他数字。
      matrix[row][col] = UNASSIGNED;
    }
  }
  return false;
}

function sudokuSolver(matrix) {
  if (solveSudoku(matrix) === true) {
    return matrix;
  }
  return 'NO SOLUTION EXISTS!';
}

```

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703204813.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210703204846.png)

## 算法复杂度为

### 大O表示法

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210704064118.png)

#### 理解大O表示法

大O表示法，一般考虑的是CPU（时间）占用。

#### 时间复杂度比较

![image-20210704064452387](/Users/cr/Library/Application Support/typora-user-images/image-20210704064452387.png)

1. 数据结构

下表是常用数据结构的时间复杂度。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210704064643.png)

2. 图

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210704064856.png)

3. 排序算法

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210704064942.png)

4. 搜索算法

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210704065146.png)

#### NP完全理论概述

