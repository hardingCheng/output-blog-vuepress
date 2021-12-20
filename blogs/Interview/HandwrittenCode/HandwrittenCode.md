---
title: 手写代码
date: 2021-12-19
tags:
  - 手撕代码
categories:
  - JavaScript 面试
---

## 手写代码部分 1

### 手写 Node 的 Promisify

用于将异步回调 callback 形式的操作或 API 转换为 promise 形式。

```js
// 使用前
fs.readFile("./index.js", (err, data) => {
  if (!err) {
    console.log(data.toString());
  }
  console.log(err);
});
// 使用后
// 使用promisify后
const readFile = promisify(fs.readFile);
readFile("./index.js")
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log("error:", err);
  });
```

```js
// const newFn = promisify(fn)
// newFn(a) 会执行Promise参数方法
function promisify(fn) {
  return function (...args) {
    // 返回promise的实例
    return new Promise(function (reslove, reject) {
      // newFn(a) 时会执行到这里向下执行
      // 加入参数cb => newFn(a)
      args.push(function (err, data) {
        if (err) {
          reject(err);
        } else {
          reslove(data);
        }
      });
      // 理解apply的含义   其实它的参数是[]数组
      // 这里才是函数真正执行的地方执行newFn(a, cb)
      fn.apply(null, args);
    });
  };
}
```

### 手写 JSONP

```js
const jsonp = ({ url, params, callbackName }) => {
  // 生成url拼接上参数
  const generateUrl = () => {
    let dataSrc = "";
    for (let key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  };
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement("script");
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
};
```

### 手写生成指定长度的随机字符串

```js
function generateRamStr(len, charSet) {
  const chars =
    charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomStr = "";
  for (var i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomStr;
}
```

### 手写 JS 处理大数相加问题

```js
var number1 = 10000000000000000000000000 + 11111111111111111111111111;
//理论上number1的值应该是21111111111111111111111111（javascript中会表示为科学计数法：2.111111111111111e+25）
var number2 = 21111111111111111111111000;
console.log(number1 === number2); //true

// JavaScript Number 的精度丢失问题。因为 JavaScript 的 Number 类型是遵循 IEEE 754 规范表示的，这就意味着 JavaScript 能精确表示的数字是有限的，JavaScript 可以精确到个位的最大整数是 9007199254740992，也就是 2 的 53 次方，超过这个范围就会精度丢失，造成 JavaScript 无法判断大小，从而会出现下面的现象：
Math.pow(2, 53); // 9007199254740992
Math.pow(2, 53) === Math.pow(2, 53) + 1; // true
9007199254740992 === 9007199254740992 + 1; // true
```

那当两个数据相加时，其中一个或者两个数据都超过了这个精度范围，直接相加结果就会不准了，那怎么解决呢？将 Number 转为 String，然后将 String 转为 Array，并且注意补齐较短的数组，将他们的长度标称一样再一一相加得到一个新数组，再讲和组成的新数组转为数字就可以了。

```js
function sumString(a, b) {
  // 加'0'首先是为了转为字符串，而且两个数相加后可能需要进位，这样保证了和的长度就是a、b中长的那个字符的长度
  a = "0" + a;
  b = "0" + b;
  let arrA = a.split(""), //将字符串转为数组
    arrB = b.split(""),
    res = [], //相加结果组成的数组
    temp = "", //相同位数相加的值
    carry = 0, //同位数相加结果大于等于10时为1，否则为0
    distance = a.length - b.length, //计算两个数字字符串的长度差
    len = distance > 0 ? a.length : b.length; //和的长度
  // 在长度小的那个值前加distance个0，保证两个数相加之前长度是想等的
  if (distance > 0) {
    for (let i = 0; i < distance; i++) {
      arrB.unShift("0");
    }
  } else {
    for (let i = 0; i < distance; i++) {
      arrA.unShift("0");
    }
  }
  // 现在得到了两个长度一致的数组，需要做的就是把他们想通位数的值相加，大于等于10的要进一
  // 最终得到一个和组成的数组，将数组转为字符串，去掉前面多余的0就得到了最终的和
  for (let i = len - 1; i >= 0; i--) {
    temp = Number(arrA[i]) + Number(arrB[i]) + carry;
    if (temp >= 10) {
      carry = 1;
      res.unshift((temp + "")[1]);
    } else {
      carry = 0;
      res.unshift(temp);
    }
  }
  res = res.join("").replace(/^0/, "");
  console.log(res);
}
```

### 大数相加并进行千分位展示 xxx,xxx,xxx,xxx

```js
// 核心都是通过数组的reduce,一个通过字符串
var str = "123456789";
//[9,8,7,6,5,4,3,2,1]
function formatCash(str) {
  //不考虑入参的判断
  return (
    String(str)
      .split("")
      // 先反转
      // 789 -> 6,789 -> 456,789 -> 3,456,789 -> 123,456,789s
      .reverse()
      .reduce((pre, next, index) => {
        return index % 3 ? next + "" + pre : next + "," + pre;
      })
  );
}
console.log(formatCash(str));
```

```js
// 核心都是通过数组的reduce,一个通过数组
function formatCash(str) {
  const ret = Array.from(str)
    .reverse()
    .reduce((result, next, i, arr) => {
      if ((i + 1) % 3 === 0 && i + 1 !== arr.length) {
        result.push(next, ",");
        return result;
      }
      result.push(next);
      return result;
      // return (index % 3) ? (next + "" + pre) : (next + ',' + pre);
    }, []);
  return ret.reverse().join("");
}
```

```js
// 除法+求模
function formatCash(number) {
  var n = number;
  var r = "";
  var temp;
  do {
    mod = n % 1000;
    n = n / 1000;
    // ~~是取反两次
    // ~~的作用是去掉小数部分,因为位运算的操作值要求是整数，其结果也是整数，所以经过位运算的都会自动变成整数。
    // 与Math.floor()不同的是，它只是单纯的去掉小数部分，不论正负都不会改变整数部分
    temp = ~~mod;
    r = (n >= 1 ? `${temp}`.padStart(3, "0") : temp) + (!!r ? "," + r : "");
  } while (n >= 1);

  var strNumber = number + "";
  var index = strNumber.indexOf(".");
  if (index > 0) {
    r += strNumber.substring(index);
  }
  return r;
}
```

```js
// 正则
function format_with_regex(number) {
  var reg = /\d{1,3}(?=(\d{3})+$)/g;
  return (number + "").replace(reg, "$&,");
}
function format_with_regex(number) {
  var reg = /(\d)(?=(?:\d{3})+$)/g;
  return (number + "").replace(reg, "$1,");
}
```

```js
// toLocaleString
function format_with_toLocaleString(
  number,
  minimumFractionDigits,
  maximumFractionDigits
) {
  minimumFractionDigits = minimumFractionDigits || 2;
  maximumFractionDigits = maximumFractionDigits || 2;
  maximumFractionDigits = Math.max(
    minimumFractionDigits,
    maximumFractionDigits
  );
  return number.toLocaleString("en-us", {
    maximumFractionDigits: maximumFractionDigits || 2,
    minimumFractionDigits: minimumFractionDigits || 2,
  });
}
```

```js
// Intl.NumberFormat
function format_with_Intl(
  number,
  minimumFractionDigits,
  maximumFractionDigits
) {
  minimumFractionDigits = minimumFractionDigits || 2;
  maximumFractionDigits = maximumFractionDigits || 2;
  maximumFractionDigits = Math.max(
    minimumFractionDigits,
    maximumFractionDigits
  );
  return new Intl.NumberFormat("en-us", {
    maximumFractionDigits: maximumFractionDigits || 2,
    minimumFractionDigits: minimumFractionDigits || 2,
  }).format(number);
}
```

### 金额千分位格式化函数

```js
function formatAmount(num) {
  if (num) {
    //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
    num = num.toString().replace(/\$|\,/g, "");
    //如果num不是数字，则将num置0，并返回
    if ("" == num || isNaN(num)) {
      return "Not a Number ! ";
    }
    //如果num是负数，则获取她的符号
    var sign = num.indexOf("-") > 0 ? "-" : "";
    //如果存在小数点，则获取数字的小数部分
    var cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : "";
    cents = cents.length > 1 ? cents : ""; //注意：这里如果是使用change方法不断的调用，小数是输入不了的
    console.log(cents);
    //获取数字的整数数部分
    num = num.indexOf(".") > 0 ? num.substring(0, num.indexOf(".")) : num;
    //如果没有小数点，整数部分不能以0开头
    if ("" == cents) {
      if (num.length > 1 && "0" == num.substr(0, 1)) {
        return "Not a Number ! ";
      }
    }
    //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
    else {
      if (num.length > 1 && "0" == num.substr(0, 1)) {
        return "Not a Number ! ";
      }
    }
    //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
    /*
    也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
    字符串长度为0/1/2/3时都不用添加
    字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
    */
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
      num =
        num.substring(0, num.length - (4 * i + 3)) +
        "," +
        num.substring(num.length - (4 * i + 3));
    }
    //将数据（符号、整数部分、小数部分）整体组合返回
    return sign + num + cents;
  }
}
```

### 手写洗牌算法 ？？？？？？？？

### 手写斐波那契数列

```js
// 第一种方法
function fibonacci(n) {
  /*
        斐波那契数列前两项都是1，所以判断n是否等于1或者2，如果是则直接返回1
    */
  n = n && parseInt(n);
  if (n == 1 || n == 2) {
    return 1;
  }
  // 使用arguments.callee实现递归
  return arguments.callee(n - 2) + arguments.callee(n - 1);
}
let sum = fibonacci(8);
console.log(sum); // 21
```

```js
// 第二种方法
function fibonacci(nub) {
  let n = nub && parseInt(nub);
  let n1 = 1; // 初始 n = 1时候的值为1
  let n2 = 1; // 初始 n = 2时候的值为1
  let f; // 声明变量sum 接受第 n 个的斐波那契数

  // n 等于 1 或 n 等于 2 的时候直接返回1
  if (n == 1 || n == 2) {
    return 1;
  }
  for (let i = 2; i < n; i++) {
    f = n1 + n2;
    n1 = n2;
    n2 = f;
  }
  return f;
}
let sum = fibonacci(8);
console.log(8); // 21
```

```js
// 第三种方法
function fibonacci(n) {
  n = n && parseInt(n);
  let n1 = 1;
  let n2 = 1;
  // n 等于 1 或 n 等于 2 的时候直接返回1
  if (n == 1 || n == 2) {
    return 1;
  }
  // 使用解构赋值，n1 等于 n2，n2 等于 n1 + n2 最后返回 n2
  for (let i = 2; i < n; i++) {
    [n1, n2] = [n2, n1 + n2];
  }
  return n2;
}
```

## 手写代码部分 2

### 手写 reduce 实现 map

```js
// 将每次遍历的元素，作为传入的函数的参数，并将函数执行的结果放入新的数组中。
Array.prototype._map = function (callback) {
  if (typeof callback === "function") {
    return this.reduce((prev, item, index, arr) => {
      prev.push(callback(item, index, arr));
      return prev;
    }, []);
  } else {
    console.log(new Error("callback is not function"));
  }
};

let val = [1, 5, 6]._map((item) => item + 1);
console.log(val); // [2, 6, 7]
```

### 手写 reduce 实现 filter

```js
// 如果filter函数传入的参数(参数是一个函数)执行后有返回值，即经过了检验，才将遍历的当前元素放入数组中，如果没有返回值，就忽略
Array.prototype._filter = function (callback) {
  if (typeof callback === "function") {
    return this.reduce((prev, item, index, arr) => {
      // 先执行函数，看返回的是真的假的
      callback(item, index, arr) ? prev.push(item) : null;
      return prev;
    }, []);
  } else {
    console.log(new Error("callback is not function"));
  }
};
let val = [1, 5, 6]._filter((item) => item > 2);
console.log(val); // [5, 6]
```

### 手写 reduce 最大值/最小值

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((prev, cur) => Math.max(prev, cur))); // 5
console.log(arr.reduce((prev, cur) => Math.min(prev, cur))); // 1
```

### 手写数组随机排序

```js
// 利用数组自带的sort方法
// 这种方法是利用随机出一个正数或者负数来让数组里面的内容两两对比，是正数就是顺序，是负数则是倒序，这种方法的缺点就是随机性不高，不能完全随机，因为是两两对比，所以最后一个数在最后的可能性较大。
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function foo(arr) {
  var cloneArray = arr.concat();
  cloneArray.sort((n1, n2) => {
    return Math.random() - 0.5;
  });
  return cloneArray;
}
console.log(foo(arr));
```

```js
// 利用递归函数对比
// 递归的方法是利用递归函数的自调，定义一个随机数index（因为定了向下取整，所以范围为0~8）作为随机下标，然后将它对应的数从数组中取下压入到result数组中，从而实现随机排序，定义if判断，如果cloneArr的长度为空的话，则退出循环，这种随机的随机性很好，但是代码性能不太友好。
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function foo(arr) {
  var result = [];
  var cloneArray = arr.concat();
  (function () {
    if (!cloneArray.length) {
      return;
    }
    var index = Math.floor(Math.random() * cloneArray.length);
    result = result.concat(cloneArray.splice(index, 1));
    // 匿名函数的递归
    arguments.callee();
  })();
  return result;
}
console.log(foo(arr));
```

```js
// 洗牌算法（推荐）
// 洗牌算法呢是利用随机出的index下标对应的数，与数组从前到后相互切换，所以称为洗牌，代码运行效率相比前面几种高，随机性也很大。在这强烈推荐。
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function foo(arr) {
  var cloneArray = arr.concat();
  var length = cloneArray.length;
  for (var i = 0; i < len; i++) {
    var index = Math.floor(Math.random() * cloneArray.length);
    var temp = cloneArray[index];
    cloneArray[index] = cloneArray[i];
    cloneArray[i] = temp;
  }
  return cloneArray;
}
console.log(foo(arr));
```

### 手写 String 的 indexof

```js
// 正则表达式实现
function sIndexOf(str, searchVal, fromIndex = 0) {
  const len = arr.length;
  if (fromIndex < 0) fromIndex = 0;
  if (fromIndex >= len) return -1;
  // 定义匹配规则
  let reg = new RegExp(`${searchVal}`, "g"); // 为了支持lastIndex，自定义开始匹配位置，需要开启'g'，全局匹配
  // 初始化开始搜索位置
  reg.lastIndex = fromIndex;
  // 执行匹配
  let result = reg.exec(str);
  // 返回匹配结果
  return result ? result.index : -1;
}
```

```js
// 循环遍历。 需要支持searchVal为多字符串时的匹配
function sIndexOf2(str, searchVal, fromIndex = 0) {
  let strLen = str.length;
  let searchValLen = (searchVal + "").length;
  if (fromIndex < 0) fromIndex = 0;
  if (fromIndex >= strLen) return -1;
  for (let i = fromIndex; i <= strLen - searchValLen; i++) {
    if (searchVal == str.slice(i, searchValLen + i)) return i;
  }
  return -1;
}
```
