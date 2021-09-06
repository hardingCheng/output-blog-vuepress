# JavaScript内置对象

## Aarry

### Array.prototype`[@@iterator]`()

```js
arr[Symbol.iterator]()

//数组的 iterator 方法，默认情况下，与 values() 返回值相同， arr[Symbol.iterator] 则会返回 values() 函数。
```

```js
var arr = ['a', 'b', 'c', 'd', 'e']
var eArr = arr[Symbol.iterator]()
// 浏览器必须支持 for...of 循环  只能使用带有迭代器的
for (let letter of eArr) {
  console.log(letter);
}



var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e
```

### Array.prototype.at()

该**`at()`**方法采用整数值并返回该索引处的项目，允许正整数和负整数。负整数从数组中的最后一项开始计数。

```js
arr.at(index)

//数组中与给定索引匹配的元素。undefined如果找不到给定的索引，则返回。
```

```js
// Our array with items
const cart = ['apple', 'banana', 'pear'];

const item1 = cart.at(-1); //pear
cart.push('orange');
const item2 = cart.at(-1); //orange
```

### Array.prototype.concat()

 `concat()` 方法用于合并两个或多个数组。`此方法不会更改现有数组`，而是返回一个新数组。

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// ["a", "b", "c", "d", "e", "f"]




var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];
var nums = num1.concat(num2, num3);
console.log(nums);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]



var alpha = ['a', 'b', 'c'];
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Array.prototype.copyWithin()

`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

`copyWithin` 是一个可变方法，它不会改变 this 的长度 length，但是会改变 this 本身的内容，且需要时会创建新的属性。

```js
arr.copyWithin(target[, start[, end]])



target
	0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
	如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
start
	0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
	如果 start 被忽略，copyWithin 将会从0开始复制。
end
	0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
	如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）。
```

```js
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]
```

```js
if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin = function(target, start/*, end*/) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-8.
    var relativeTarget = target >> 0;

    var to = relativeTarget < 0 ?
      Math.max(len + relativeTarget, 0) :
      Math.min(relativeTarget, len);

    // Steps 9-11.
    var relativeStart = start >> 0;

    var from = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 15.
    var count = Math.min(final - from, len - to);

    // Steps 16-17.
    var direction = 1;

    if (from < to && to < (from + count)) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Step 18.
    while (count > 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Step 19.
    return O;
  };
}
```

### Array.prototype.entries()

`entries()` 方法返回一个新的**Array Iterator**对象，该对象包含数组中每个索引的键/值对。

```js
arr.entries()

//返回一个新的 Array 迭代器对象。
```

```js
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}

// [0, "a"]
// [1, "b"]
// [2, "c"]
```

```js
// 二维数组按行排序
function sortArr(arr) {
    var goNext = true;
    var entries = arr.entries();
    while (goNext) {
        var result = entries.next();
        if (result.done !== true) {
            result.value[1].sort((a, b) => a - b);
            goNext = true;
        } else {
            goNext = false;
        }
    }
    return arr;
}

var arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
sortArr(arr);

/*(4) [Array(2), Array(5), Array(5), Array(4)]
    0:(2) [1, 34]
    1:(5) [2, 3, 44, 234, 456]
    2:(5) [1, 4, 5, 6, 4567]
    3:(4) [1, 23, 34, 78]
    length:4
    __proto__:Array(0)
*/
```

### Array.prototype.every()

`every()` 方法测试一个数组内的**所有元素**是否都能通过某个指定函数的测试。它返回一个布尔值。

**注意**：若收到一个空数组，此方法在一切情况下都会返回 `true`。

`every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个会使 `callback` 返回 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。

`every` 不会改变原数组。

```js
arr.every(callback(element[, index[, array]])[, thisArg])
// 如果回调函数的每一次返回都为 truthy 值，返回 true ，否则返回 false。



callback
	用来测试每个元素的函数，它可以接收三个参数：
	element
		用于测试的当前值。
	index可选
		用于测试的当前值的索引。
	array可选
		调用 every 的当前数组。
thisArg
	执行 callback 时使用的 this 值。
```

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true



[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true

```

```js
if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
```

### Array.prototype.fill()

`fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

`fill 方法故意被设计成通用方法, 该方法不要求 `this` 是数组对象。

`fill` 方法是个可变方法, 它会改变调用它的 `this` 对象本身, 然后返回它, 而并不是返回一个副本。

```js
arr.fill(value[, start[, end]])
// 修改后的数组。




value
	用来填充数组元素的值。
start 可选
	起始索引，默认值为0。
end 可选
	终止索引，默认值为 this.length。
```

```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行都一个引用类型
// 如 arr[0] === arr[1] 为true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
```

### Array.prototype.filter()

`filter()` 方法创建一个`新数组`, 其包含通过所提供函数实现的测试的所有元素。 

`filter` 不会改变原数组，它返回过滤后的新数组。

```js
arr.filter(callback(element[, index[, array]])[, thisArg])
// 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。


callback
	用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
	element
		数组中当前正在处理的元素。
	index可选
		正在处理的元素在数组中的索引。
	array可选
		调用了 filter 的数组本身。
thisArg可选
	执行 callback 时，用于 this 的值。
```

```js
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]





const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

```js
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```

### Array.prototype.find()

`find()` 方法返回数组中满足提供的测试函数的**第一个元素的值**。否则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

`find`方法不会改变数组。

```js
arr.find(callback[, thisArg])
// 数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。



callback
	在数组每一项上执行的函数，接收 3 个参数：
		element
			当前遍历到的元素。
		index可选
			当前遍历到的索引。
		array可选
			数组本身。
thisArg可选
	执行回调时用作this 的对象。
```

```js
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
function findCherries(fruit) {
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}
```

### Array.prototype.findIndex()

`findIndex()`方法返回数组中满足提供的测试函数的**第一个元素的索引**。若没有找到对应元素则返回-1。

`findIndex`不会修改所调用的数组。

```js
arr.findIndex(callback[, thisArg])
// 数组中通过提供测试函数的第一个元素的索引。否则，返回-1



callback
	在数组每一项上执行的函数，接收 3 个参数：
		element
			当前遍历到的元素。
		index可选
			当前遍历到的索引。
		array可选
			数组本身。
thisArg可选
	执行回调时用作this 的对象。
```

```js
argeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}
```

### Array.prototype.flat() 数组扁平化

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```js
arr.flat([depth])
// 一个包含将数组与子数组中所有元素的新数组。


depth 可选
	指定要提取嵌套数组的结构深度，默认值为 1。
```

```js
// 扁平化嵌套数组
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




//扁平化与数组空项
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

```

```js
reduce 与 concat
var arr = [1, 2, [3, 4]];
// 展开一层数组
arr.flat();
// 等效于
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]
// 使用扩展运算符 ...
const flattened = arr => [].concat(...arr);







reduce + concat + isArray + recursivity
// 使用 reduce、concat 和递归展开无限多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};
flatDeep(arr1, Infinity);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]




forEach+isArray+push+recursivity
// forEach 遍历数组会自动跳过空元素
const eachFlat = (arr = [], depth = 1) => {
  const result = []; // 缓存递归结果
  // 开始递归
  (function flat(arr, depth) {
    // forEach 会自动去除数组空位
    arr.forEach((item) => {
      // 控制递归深度
      if (Array.isArray(item) && depth > 0) {
        // 递归数组
        flat(item, depth - 1)
      } else {
        // 缓存元素
        result.push(item)
      }
    })
  })(arr, depth)
  // 返回递归结果
  return result;
}
// for of 循环不能去除数组空位，需要手动去除
const forFlat = (arr = [], depth = 1) => {
  const result = [];
  (function flat(arr, depth) {
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) {
        flat(item, depth - 1)
      } else {
        // 去除空元素，添加非undefined元素
        item !== void 0 && result.push(item);
      }
    }
  })(arr, depth)
  return result;
}




堆栈stack
// 无递归数组扁平化，使用堆栈
// 注意：深度的控制比较低效，因为需要检查每一个值的深度
// 也可能在 shift / unshift 上进行 w/o 反转，但是末端的数组 OPs 更快
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 反转恢复原数组的顺序
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]



// 递归版本的反嵌套
function flatten(array) {
  var flattend = [];
  (function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}




//forEach
function flatten(arr) {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i))
      //递归
      result.push(...flatten(i));
    else
      result.push(i);
  })
  return result;
}

// Usage
const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
flatten(problem); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Array.prototype.flatMap()

`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 连着深度值为1的 [flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

```js
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
//一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为1。



callback
	在数组每一项上执行的函数，接收 3 个参数：
		element
			当前遍历到的元素。
		index可选
			当前遍历到的索引。
		array可选
			数组本身。
thisArg可选
	执行回调时用作this 的对象。
```

```js
var arr1 = [1, 2, 3, 4];
arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]
arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]
// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]



let arr1 = ["it's Sunny in", "", "California"];
arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]
arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]

```

```js
reduce() 与 concat()

var arr = [1, 2, 3, 4];
arr.flatMap(x => [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]



请注意，这是低效的，并且应该避免大型阵列：在每次迭代中，它创建一个必须被垃圾收集的新临时数组，并且它将元素从当前的累加器数组复制到一个新的数组中，而不是将新的元素添加到现有的数组中。
```

### Array.prototype.forEach()

`forEach()` 方法对数组的每个元素执行一次给定的函数。

`forEach()` 被调用时，不会改变原数组，也就是调用它的数组（尽管 `callback` 函数在被调用时可能会改变原数组）。

除了抛出异常以外，没有办法中止或跳出 `forEach()` 循环。如果你需要中止或跳出循环，`forEach()` 方法不是应当使用的工具。

```js
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
//undefined



callback
	在数组每一项上执行的函数，接收 3 个参数：
		element
			当前遍历到的元素。
		index可选
			当前遍历到的索引。
		array可选
			数组本身。
thisArg可选
	执行回调时用作this 的对象。
```

```js
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"




不对未初始化的值进行任何操作（稀疏数组）
const arraySparse = [1,3,,7];
let numCallbackRuns = 0;
arraySparse.forEach(function(element){
  console.log(element);
  numCallbackRuns++;
});
console.log("numCallbackRuns: ", numCallbackRuns);
// 1
// 3
// 7
// numCallbackRuns: 3





如果数组在迭代时被修改了，则其他元素会被跳过。
var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'two') {
    words.shift();
  }
});
// one
// two
// four
```

### Array.from()

`Array.from()` 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

```js
Array.from(arrayLike[, mapFn[, thisArg]])
// 一个新的数组实例。



arrayLike
	想要转换成数组的伪数组对象或可迭代对象。
mapFn 可选
	如果指定了该参数，新数组中的每个元素会执行该回调函数。
thisArg 可选
	可选参数，执行回调函数 mapFn 时 this 对象。
```

```js
Array.from('foo');
// [ "f", "o", "o" ]


const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]



const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];
Array.from(mapper.keys());
// ['1', '2'];



function f() {
  //类数组对象
  return Array.from(arguments);
}
f(1, 2, 3);
// [ 1, 2, 3 ]



function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}
var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));                     // [1, 2, 3]
```

```js
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}
```

### Array.prototype.includes()

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

使用 `includes()`比较字符串和字符时是区分大小写。

```js
arr.includes(valueToFind[, fromIndex])
// 返回一个布尔值 Boolean ，如果在数组中找到了（如果传入了 fromIndex ，表示在 fromIndex 指定的索引范围中找到了）则返回 true 



valueToFind
 	需要查找的元素值。
fromIndex 可选
	从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
```

```js
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true



var arr = ['a', 'b', 'c'];
arr.includes('c', 3);   // false
arr.includes('c', 100); // false
// 如果 fromIndex 大于等于数组的长度，则会返回 false，且该数组不会被搜索。
```

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(valueToFind, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}
```

### Array.prototype.indexOf()

`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```js
arr.indexOf(searchElement[, fromIndex])
// 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

searchElement
 	需要查找的元素值。
fromIndex 可选
	开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
```

```js
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0



var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

### Array.isArray()

**Array.isArray()** 用于确定传递的值是否是一个 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。

```js
Array.isArray(obj)
//如果值是 Array，则为true; 否则为false。


obj
	需要检测的值。
```

```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);
// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });
```

```js
//instanceof 和 isArray
当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.


var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false
```

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

### Array.prototype.join()

`join()` 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN_docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

```js
arr.join([separator])
//一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串。



separator 可选
	指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符。
```

```js
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"




function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
```

### Array.prototype.keys()

`keys() `方法返回一个包含数组中每个索引键的`Array Iterator`对象。

```js
arr.keys()
// 一个新的 Array 迭代器对象。
```

```js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

### Array.prototype.lastIndexOf()

`lastIndexOf()` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始

`lastIndexOf` 使用[严格相等](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)（strict equality，即 ===）比较 `searchElement` 和数组中的元素。

```js
arr.lastIndexOf(searchElement[, fromIndex])
//数组中该元素最后一次出现的索引，如未找到返回-1。


searchElement
	被查找的元素。
fromIndex 可选
	从此位置开始逆向查找。默认为数组的长度减 1(arr.length - 1)，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。
```

```js
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

```js
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n, k,
        t = Object(this),
        len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0
          ? Math.min(n, len - 1)
          : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

### Array.prototype.map()

`map()` 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

`map `不修改调用它的原数组本身（当然可以在 `callback` 执行时改变原数组）

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
// 一个由原数组每个元素执行回调函数的结果组成的新数组。



callback
	生成新数组元素的函数，使用三个参数：
	currentValue
		callback 数组中正在处理的当前元素。
	index可选
		callback 数组中正在处理的当前元素的索引。
	array可选
		map 方法调用的数组。
thisArg可选
	执行 callback 函数时值被用作this。
```

```js
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]



var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]



var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles数组的值为： [2, 8, 18]
// numbers数组未被修改： [1, 4, 9]



var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```

```js
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
```

### Array.of()

`Array.of()` 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

`Array.of()` 和 `Array` 构造函数之间的区别在于处理整数参数：`Array.of(7)` 创建一个具有单个元素 **7** 的数组，而 **`Array(7)`** 创建一个长度为7的空数组（**注意：**这是指一个有7个空位(empty)的数组，而不是由7个`undefined`组成的数组）。

```js
array.of(element0[, element1[, ...[, elementN]]])
// 新的 Array 实例。

elementN
	任意个参数，将按顺序成为返回数组中的元素。
```

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

### Array.prototype.pop()

`pop()`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

`pop` 方法从一个数组中删除并返回最后一个元素。

```js
arr.pop()
// 从数组中删除的元素(当数组为空时返回undefined)。
```

```js
let myFish = ["angel", "clown", "mandarin", "surgeon"];

let popped = myFish.pop();

console.log(myFish);
// ["angel", "clown", "mandarin"]

console.log(popped);
// surgeon
```

### Array.prototype.push()

`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

push方法将值追加到数组中。

```js
arr.push(element1, ..., elementN)
// 当调用该方法时，新的 length 属性值将被返回。

elementN
	被添加到数组末尾的元素。
```

```js
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");
console.log(sports);
// ["soccer", "baseball", "football", "swimming"]
console.log(total);
// 4


var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables);
// ['parsnip', 'potato', 'celery', 'beetroot']
```

### Array.prototype.reverse()

`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

```js
 arr.reverse()
// 颠倒后的数组。
```

```js
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]
a.reverse();
console.log(a); // [3, 2, 1]


const a = {0: 1, 1: 2, 2: 3, length: 3};
console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}
Array.prototype.reverse.call(a); //same syntax for using apply()
console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}
```

### Array.prototype.shift()

`shift` 方法并不局限于数组：这个方法能够通过 [`call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法作用于类似数组的对象上。但是对于没有 length 属性（从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。

`shift()` 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

```js
arr.shift()
//从数组中删除的元素; 如果数组为空则返回undefined 。 
```

```js
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('调用 shift 之后: ' + myFish);
// "调用 shift 之后: clown,mandarin,surgeon"

console.log('被删除的元素: ' + shifted);
// "被删除的元素: angel"
```

### Array.prototype.slice()

`slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）。原始数组不会被改变

`slice` 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。

```js
arr.slice([begin[, end]])
// 一个含有被提取元素的新数组。


begin 可选
	提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
	如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
	如果省略 begin，则 slice 从索引 0 开始。
	如果 begin 超出原数组的索引范围，则会返回空数组。
end 可选
	提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素。slice 会提取原数组中索引从 begin 到 end 的所有元素（包含 begin，但不包含 end）。
	slice(1,4) 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
	如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
	如果 end 被省略，则 slice 会一直提取到原数组末尾。
	如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。

```

```js
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']



function list() {
  return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3); // [1, 2, 3]
Copy to Clipboard

```

### Array.prototype.some()

`some()` 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

`some()` 被调用时不会改变数组。

```js
arr.some(callback(element[, index[, array]])[, thisArg])
//数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。


callback
	用来测试每个元素的函数，它可以接收三个参数：
	element
		用于测试的当前值。
	index可选
		用于测试的当前值的索引。
	array可选
		调用 every 的当前数组。
thisArg
	执行 callback 时使用的 this 值。
```

```js
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true



var fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}
checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
```

### Array.prototype.sort()

`sort()`方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

```js
arr.sort([compareFunction])
//排序后的数组。请注意，数组已原地排序，并且不进行复制。


compareFunction 可选
	用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
firstEl
	第一个用于比较的元素。
secondEl
	第二个用于比较的元素。
  
  
  
如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。


function compare(a, b) {
  if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

```

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

也可以写成：
var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]






var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return (a.value - b.value)
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

### Array.prototype.splice()

**`splice()`** 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

```js
ray.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。


start
	指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。
deleteCount 可选
	整数，表示要移除的数组元素的个数。
	如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
	如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
	如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
item1, item2, ... 可选
	要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
```

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");
// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除




var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');
// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除



var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]



var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);
// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]
```

### Array.prototype.toString()

`toString()` 返回一个字符串，表示指定的数组及其元素。

```js
arr.toString()
//一个表示指定的数组及其元素的字符串。
```

### Array.prototype.unshift()

**`unshift()`** 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度(该**方法修改原有数组**)**。

`unshift` 特意被设计成具有通用性；这个方法能够通过 [`call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法作用于类数组对象上。不过对于没有 length 属性（代表从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。

```js
arr.unshift(element1, ..., elementN)
// 当一个对象调用该方法时，返回其 length 属性值。

elementN
	要添加到数组开头的元素或多个元素。
```

```js
let arr = [1, 2];

arr.unshift(0); // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]

```

### Array.prototype.values()

**`values()`** 方法返回一个新的 **`Array Iterator`** 对象，该对象包含数组每个索引的值

```js
arr.values()
//一个新的 Array 迭代对象。
```

```js
let arr = ['w', 'y', 'k', 'o', 'p'];
let eArr = arr.values();

for (let letter of eArr) {
  console.log(letter);
} //"w" "y "k" "o" "p"
```

### Array.prototype.reduce()

`reduce()` 方法对数组中的每个元素执行一个由您提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

回调函数第一次执行时，`accumulator` 和`currentValue`的取值有两种情况：如果调用`reduce()`时提供了`initialValue`，`accumulator`取值为`initialValue`，`currentValue`取数组中的第一个值；如果没有提供 `initialValue`，那么`accumulator`取数组中的第一个值，`currentValue`取数组中的第二个值。

如果没有提供`initialValue`，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供`initialValue`，从索引0开始。

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
//函数累计处理的结果

callback
	执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
	accumulator
		累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
	currentValue
		数组中正在处理的元素。
	index 可选
		数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
	array可选
		调用reduce()的数组
initialValue可选
	作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
```

```js
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr );


[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
}, 10)


var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]




var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }





var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }





let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])
console.log(myOrderedArray)
```

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError( 'Array.prototype.reduce ' +
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // Steps 3, 4, 5, 6, 7
      var k = 0;
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    }
  });
}
```

