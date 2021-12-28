---
title: 手撕代码
date: 2021-12-19
tags:
  - 手撕代码
categories:
  - 手撕代码
---

## 手写代码部分 1

### 手写 Node 的 Promisify
在 nodejs 提供的 util 工具包中也存在一个 promisify 函数：
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
### 手写 Node 的 promisifyAll
批量 promise 化：
```js
function promisifyAll(obj) {
  // 将对象转为数组,遍历数组中的fn，依次完成 promisify 操作
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'function') {
      obj[key + 'Async'] = promisify(obj[key])
    }
  })
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

### 大数相加并进行千分位展示

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

### 手写洗牌算法
原理就是遍历数组元素，将当前元素与随机抽取的一个剩余元素进行交换。
```js
function shuffle(arr) {
    let newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        <!-- 随机抽取arr剩余元素中的某个值，下标为rIndex -->
        let rIndex = Math.floor(Math.random() * (len - i));
        <!-- 将抽取的值赋值给新数组 -->
        newArr[i] = arr[rIndex];
        <!-- 删除arr中抽取的项，保证每次都是从剩余元素中抽取，不重复 -->
        arr.splice(rIndex, 1);
    }
    <!-- 返回乱序后的数组 -->
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(shuffle(arr));



// 我们可以用生成器来做，每次抽取其中一张牌，把抽出的牌通过yield方法进行抽出去，做成一个可迭代对象，最后通过...展开操作符进行展开。
const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function * draw(cards){
    const c = [...cards];

  for(let i = c.length; i > 0; i--) {
    const pIdx = Math.floor(Math.random() * i);
    [c[pIdx], c[i - 1]] = [c[i - 1], c[pIdx]];
    yield c[i - 1];
  }
}

const result = draw(cards);
console.log([...result]);

```

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
### JS 实现驼峰命名与横线命名的转换
#### 驼峰 ---> 横线
将骆驼命名规则的字符串转换成使用短横线命名法的字符串, 并且全小写 .例如: 'getElementById' => 'get-element-by-id'
```js
// 方法1：正则表达式
function getKebabCase(str) {
  let temp = str.replace(/[A-Z]/g, function(i) {
    return "_" + i.toLowerCase();
  });
  if (temp.slice(0, 1) === "_") {
    temp = temp.slice(1); //如果首字母是大写，执行replace时会多一个_，需要去掉
  }
  return temp;
}
console.log(getKebabCase("getElementById")); // get-element-by-id
```

```js
// 方法2：reduce方法
function getKebabCase(prev, cur, index, array) {
  if (/[A-Z]/.test(cur)) {
    cur = cur.toLowerCase();
    if (index === 0) {
      return prev + cur;
    } else {
      return prev + "_" + cur;
    }
  } else {
    return prev + cur;
  }
}

function toKebabCase(arr) {
  if (typeof arr === "string") {
    arr = arr.split("");
  }
  return arr.reduce(getKebabCase, "");
}

let s = "getElementById";
let test1 = toKebabCase(s); // get-element-by-id
let test2 = [].reduce.call(s, getKebabCase, ""); // get-element-by-id
```

```js
// 方法3：利用数组方法
function getKebabCase(str) {
  let arr = str.split("");
  let result = arr
    .map((item) => {
      if (item.toUpperCase() === item) {
        return "_" + item.toLowerCase();
      } else {
        return item;
      }
    })
    .join("");
  return result;
}
console.log(getKebabCase("getElementById")); // get-element-by-id
```
#### 横线 ---> 驼峰
将短横线命名规则的字符串转换成使用驼峰命名法的字符串. 例如: 'get-element-by-id ' => 'getElementById'
```js
// 方法1： 正则表达式
function getCamelCase(str) {
  return str.replace(/-([a-z])/g, function(all, i) {
    return i.toLowerCase();
  });
}
```

```js
// 方法2： 利用数组方法
function getCamelCase(str) {
  let arr = str.split("-");
  return arr
    .map((item, index) => {
      if (index === 0) {
        return item; // 看是大驼峰还是小驼峰
      } else {
        return item.chartAt(0).toUpperCase() + item.slice(1);
      }
    })
    .join("");
}
```
### 手写JS事件委托
```html
<ul>
  <li>111</li>
  <li>222</li>
  <li>333</li>
  <li>444</li>
</ul>


<!-- 没有使用事件委托 -->
<script>
$("li").on("mouseover", function () {
    $(this)
      .css("background-color", "gray")
      .siblings()
      .css("background-color", "white");
});    
</script>

<!-- 使用事件委托 -->
$("ul").on("mouseover", function (e) {
    $(e.target)
      .css("background-color", "gray")
      .siblings()
      .css("background-color", "white");
  });
```

- 第一步：给父元素绑定事件
  - 给元素 ul 添加绑定事件，绑定 mouseover 事件设置 css（也可通过 addEventListener 为点击事件 click 添加绑定）
- 第二步：监听子元素的冒泡事件
  - 这里默认是冒泡，点击子元素 li 会向上冒泡
- 第三步：找到是哪个子元素的事件
  - 通过匿名回调函数的参数 e 用来接收事件对象，通过 target 获取触发事件的目标（可以通过判断 target 的类型来确定是哪一类的子元素对象执行事件）
### 手写 js 版本号比较
```js
function Version(curV, reqV) {
  // 把一些垂直制表符替换为""
  curV = curV ? curV.replace(/[vV]/, "") : "0.0.0";
  reqV = reqV ? reqV.replace(/[vV]/, "") : "0.0.0";
  // 根据.拆分成数组来进行比较
  var arr1 = curV.split(".");
  var arr2 = reqV.split(".");
  //将两个版本号拆成数字
  var minL = Math.min(arr1.length, arr2.length);
  var pos = 0; //当前比较位
  var diff = 0; //当前为位比较是否相等

  //逐个比较如果当前位相等则继续比较下一位
  while (pos < minL) {
    diff = parseInt(arr1[pos]) - parseInt(arr2[pos]);
    if (diff != 0) {
      break;
    }
    pos++;
  }
  // 根据正负数来判断是什么类型的版本
  if (diff > 0) {
    console.log("新版本");
  } else if (diff == 0) {
    console.log("稳定版");
  } else {
    console.log("旧版本");
  }
}
```
### 手写写版本号排序
`题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']`
```js
function VersionSorting(arr) {
  arr.sort((a, b) => {
    let i = 0;
    // 根据。来进行切割
    const arr1 = a.split(".");
    const arr2 = b.split(".");
    while (true) {
      const s1 = arr1[i];
      const s2 = arr2[i];
      i++;
      if (s1 === undefined || s2 === undefined) {
        return arr2.length - arr1.length;
      }
      if (s1 === s2) continue;
      return s2 - s1;
    }
  });
}
```
### 手写找到数组中第一个没出现的最小正整数
```md
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

示例 1：

输入：nums = [1,2,0]
输出：3

示例 2：

输入：nums = [3,4,-1,1]
输出：2

示例 3：

输入：nums = [7,8,9,11,12]
输出：1
```

```js
// 时间复杂度为 O(n^2)
const firstMissingPositive = (nums) => {
    let i = 0;
    let res = 1;
    while (i < nums.length) {
      if (nums[i] == res) {
        res++;
        i = 0;
      } else {
        i++;
      }
    }
    return res;
  };
```

```js
// 时间复杂度为 O(n)
const firstMissingPositive = (nums) => {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
    }
    for (let i = 1; i <= nums.length + 1; i++) {
      if (!set.has(i)) {
        return i;
      }
    }
  };
```

```js
for (let i = 0; i < nums.length; i++) {
      while (
        nums[i] >= 1 &&
        nums[i] <= nums.length && // 对1~nums.length范围内的元素进行安排
        nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换,相应的元素放在相应的位置上
      ) {
        const temp = nums[nums[i] - 1]; // 交换
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
      }
    }
    // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != i + 1) {
        return i + 1;
      }
    }
    return nums.length + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
  };
```
### 手写在制定数据源里面生成一个长度为n的不重复随机数组
```js
// 时间复杂度为 O(n^2)
function getTenNum(testArray, n) {
let result = [];
for (let i = 0; i < n; ++i) {
  // 洗牌算法
  const random = Math.floor(Math.random() * testArray.length);
  const cur = testArray[random];
  if (result.includes(cur)) {
    i--;
    continue;
  }
  result.push(cur);
}
return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);
```

```js
// 标记法 / 自定义属性法 时间复杂度为 O(n)
```js
function getTenNum(testArray, n) {
let hash = {};
let result = [];
let ranNum = n;
while (ranNum > 0) {
  const ran = Math.floor(Math.random() * testArray.length);
  if (!hash[ran]) {
    hash[ran] = true;
    result.push(ran);
    ranNum--;
  }
}
return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);
```

```js
// 交换法 时间复杂度为 O(n)
function getTenNum(testArray, n) {
    const cloneArr = [...testArray];
    let result = [];
    for (let i = 0; i < n; i++) 
      const ran = Math.floor(Math.random() * (cloneArr.length - i));
      result.push(cloneArr[ran]);
      cloneArr[ran] = cloneArr[cloneArr.length - i - 1];
    }
    return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 14);
```
### 手写简单的闭包
```js
function a() {
  var i = 0;

  function b() {
    return i++;
  }
  return b;
}

var x;
x = a();

console.log(x());
console.log(x());
console.log(x());
```
### 手写 trim 函数
```js
String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/gm, "");
};
```
### 手写 compose 函数组合函数
```js
const compose = (..args) => {
    return function(value){
        return args.reverse().reduce(function (acc,fn){
            return fn(acc)
        //acc的初始值
        },value)
    }
}


const compose = (...args) => value => args.reverse().reduce((acc,fn) => fn(acc),value);


const compose = (...fns) => {
  if (!fns.length) return (v) => v;
  if (fns.length === 1) return fns[0];
  return fns.reduce((acc,cur) => {
    return (...args) => {
      return acc(cur(...args))
    }
  })
}
```
### 手写柯里化函数

```js
// 柯里化后的函数
let curried = _.curry(getSum);
// 测试
curried(1, 2, 3);
curried(1)(2)(3);
curried(1, 2)(3);
```

```js
function curry(fn) {
  return function curriedFn(...args) {
    if (fn.arguments.length > args.length) {
      // 递归调用，直到参数个数相等
      return curriedFn(...args.concat(Array.from(arguments)));
    }
    // 实参和形参个数相同，调用fn，返回结果
    return fn(...args);
  };
}
```
```md
实现一个 add 方法
题目描述:实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
```

```js
function add(...args) {
  let allArgs = [...args];
  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }
  fn.toString = function() {
    if (!allArgs.length) {
      return;
    }
    return allArgs.reduce((sum, cur) => sum + cur);
  };
  return fn;
}
```
### 手写偏函数
什么是偏函数？偏函数就是将一个 n 参的函数转换成固定 x 参的函数，剩余参数（n - x）将在下次调用全部传入。
```js
// 例子
function add(a, b, c) {
  return a + b + c;
}
let partialAdd = partial(add, 1);
partialAdd(2, 3);

function partial(fn, ...args) {
  return (...arg) => {
    return fn(...args, ...arg);
  };
}
```
### 手写 bind、call、apply 函数
首先`apply`,`call`,`bind`都是强制绑定`this`,而`apply`和`call`都是立即执行，只有`bind`是返回一个函数，所以可以将`apply`和`call`放在一起分析。

1. `apply`,`call`,`bind`都是可以改变`this`的指向
2. `apply`,`call`会执行调用的函数，`bind`返回一个新函数。
3. `apply`第二个参数要求是数组，`call`，`bind`则没有限制数据类型，它会把剩余的参数一起传给函数，`bind`还会把新函数调用时传入的参数一起合并，传给新函数。
4. 他们都是绑定在`Function`的`prototype`上。

```js
// call
Function.prototype._call = function(context, ...args) {
  // 判断是否是个函数
  if (typeof this !== "function") {
    throw new Error("not function");
  }
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol();
  // 不传默认是全局，window
  var context = context || window;
  // args不传时默认是空数组，防止下面用spread操作符时报错
  var args = args ? args : [];
  // 把this存到context.fn，这里的this是调用的函数
  context[fn] = this; 
  // 执行调用的函数，this指向context，参数用spread操作符扩展
  const res = context[fn](...args);
  // 删除，不污染context
  delete context[fn];
  // 返回res
  return res;
};
```
```js
// bind
Function.prototype._bind = function(context, ...args) {
  // 判断是否是个函数
  if (typeof this !== "function") {
    throw new Error("not function");
  }
  // 不传默认是全局，window
  var context = context || window;
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol();
  // 把this存到fn，这里的this是调用的函数
  context[fn] = this;
  return function newFn(...fnArgs) {
    let res;
    // 要考虑新函数是不是会当作构造函数
    if (this instanceof newFn) {
      // 如果是构造函数则调用new 并且合并参数args，fnArgs
      res = new context[fn](...args, ...fnArgs);
    } else {
      // 当作普通函数调用 也可以用上面定义的_call
      res = context[fn].call(context, ...args, ...fnArgs);
    }
    return res;
  };
};
```
```js
// apply
Function.prototype._apply = function(context, args) {
  // 不传默认是全局，window
  var context = context || window;
  // args不传时默认是空数组，防止下面用spread操作符时报错
  var args = args ? args : [];
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol();
  // 把this存到context.fn，这里的this是调用的函数
  context[fn] = this;
  // 执行调用的函数，this指向context，参数用spread操作符扩展
  const res = context[fn](...args);
  // 删除，不污染context
  delete context[fn];
  // 返回res
  return res;
};
```
### 手写jQuery
```js
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
    this.selector = selector;
  }
  get(index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }
  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false);
    });
  }
  // 扩展很多 DOM API
}

// 插件
jQuery.prototype.dialog = function(info) {
  alert(info);
};

// “造轮子”
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector);
  }
  // 扩展自己的方法
  addClass(className) {}
  style(data) {}
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click', () => alert('clicked'))
```
### 手写Ajax
1. 创建`XMLHttpRequest`对象;
2. 调用`open`方法传入三个参数 请求方式`(GET/POST)、url、同步异步(true/false)`;
3. 监听`onreadystatechange`事件，当`readystate`等于 4 时返回`responseText`;
4. 调用 send 方法传递参数。

```js
// 声明配置项参数
var opt = {
  url: "",
  type: "get",
  data: {},
  success: function () {},
  error: function () {},
};

function ajax(opt) {
  // 声明XMLHttpRequest对象 并且做兼容处理
  var xhr = XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  var data = opt.data,
    url = opt.url,
    type = opt.type.toUpperCase(),
    dataArr = [];
  // 拼接参数
  for (var k in data) {
    dataArr.push(k + "=" + data[k]);
  }
  // get处理方法
  if (type === "GET") {
    // 请求地址上直接拼接相关参数
    url = url + "?" + dataArr.join("&");
    xhr.open(type, true);
    xhr.send();
  }
  // post处理方法
  if (type === "POST") {
    xhr.open(type, url, true);
    // 需要设置请求头
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // 发送请求并且附带参数
    xhr.send(dataArr.join("&"));
  }
  // 只判断响应时间就可以了
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        var res;
        if (opt.success && opt.success instanceof Function) {
          res = xhr.responseText;
          if (typeof res === "string") {
            res = JSON.parse(res);
            opt.success.call(xhr, res);
          }
        }
      } else {
        if (opt.error && opt.error instanceof Function) {
          opt.error.call(xhr, res);
        }
      }
    }
  };
}
```
### 手写预加载
预加载简单来说就是将所有所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。
在网页全部加载之前，对一些主要内容进行加载，以提供给用户更好的体验，减少等待的时间。否则，如果一个页面的内容过于庞大，没有使用预加载技术的页面就会长时间的展现为一片空白，直到所有内容加载完毕。
```js
let length = imglist.length;
let images = new Array(); // 定义一个数组容器，用来存储预加载完成的图片
let loadEl = document.querySelector(".loading");
function preload() {
  let count = 0; // 计算器，计算加载了多少图片
  for (let i = 0; i < length; i++) {
    images[i] = new Image();
    images[i].src = `./imgs/${imglist[i].url}`;
    // 谷歌浏览器高版本支持大部分ES6，所以这里就不用字符串拼接了。
    images[i].onload = function () {
      count++;
      if (count === length) {
        loadEl.innerHTML = "加载完成";
      } else {
        loadEl.innerHTML = "正在加载中";
      }
    };
  }
}
preload();
```
### 手写图片懒加载&惰性函数
- 实现图片懒加载其核心的思想就是将 img 的 src 属性先使用一张本地占位符，或者为空。然后真实的图片路径再定义一个 data-set 属性存起来，待达到一定条件的时将 data-img 的属性值赋给 src。
- 如下是通过 scroll 滚动事件监听来实现的图片懒加载，当图片都加载完毕移除事件监听，并且将移除 html 标签。
- 一个是图片到各个边距的距离，二个就是判断图片是否在可视区域内。
```js
const lazyLoad = function (imgs) {
  let count = 0;
  const deleteImgs = [];
  const handler = () => {
    imgs.forEach((item, index) => {
      // getBoundingClientRect用于获取某个元素相对于视窗的位置集合（getBoundingClientRect()//获取元素的大小及位置）
      const react = item.getBoundingClientRect();
      // 我们先获取图片到可视区顶部的距离,并判断是否小于可视区的高度：
      if (react.top < window.innerHeight) {
        item.src = item.dataset.src;
        count++;
        // 保存已经加载的图片的索引
        deleteImgs.push(index);
        // 图片全部加载完成后移除事件监听；
        if (count === deleteImgs.length)
          document.removeEventListener("scroll", lazyLoad);
      }
    });
    // 排除已经加载的图片,加载完的图片，从 imgList 移除；
    imgs = imgs.filter((item, index) => !deleteImgs.includes(index));
  };
  return handler();
};


// 采用了节流函数
// 节流函数：只允许一个函数在N秒内执行一次
window.addEventListener('scroll',throttle(lazyload,500,1000));


// 定义一个防抖函数
function debounce(fn, delay = 500) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 页面加载完成执行一次lazyload，渲染第一次打开的网页视口内的图片
window.onload = lazyload;
// 监听Scroll事件，为了防止频繁调用，使用防抖函数进行优化
window.addEventListener("scroll", debounce(lazyload, 600));
// 浏览器窗口大小改变时重新计算
window.addEventListener("resize", debounce(lazyload, 600));
```
### 手写滚动加载
```js
// 原理就是监听页面滚动事件，分析clientHeight、scrollTop、scrollHeight三者的属性关系。
window.addEventListener(
  "scroll",
  function() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    if (clientHeight + scrollTop >= scrollHeight) {
      // 检测到滚动至页面底部，进行后续操作
      // ...
    }
  },
  false
);
```
### 渲染几万条数据不卡住页面
```js
// 渲染大数据时，合理使用createDocumentFragment和requestAnimationFrame，将操作切分为一小段一小段执行。
setTimeout(() => {
  // 插入十万条数据
  const total = 100000;
  // 一次插入的数据
  const once = 20;
  // 插入数据需要的次数
  const loopCount = Math.ceil(total / once);
  let countOfRender = 0;
  const ul = document.querySelector("ul");
  // 添加数据的方法
  function add() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
      const li = document.createElement("li");
      li.innerText = Math.floor(Math.random() * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    countOfRender += 1;
    loop();
  }
  function loop() {
    if (countOfRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }
  loop();
}, 0);
```
### 打印出当前网页使用了多少种 HTML 元素
```js
const fn = () => {
  return [
    ...new Set([...document.querySelectorAll("*")].map((el) => el.tagName)),
  ].length;
};
```
### JavaScript大数相加
```js
// 题目描述:实现一个add方法完成两个大数相加
let a = "9007199254740991";
let b = "1234567899999999999";


function add(a, b) {
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  //用0去补齐长度
  a = a.padStart(maxLength, 0); //"0009007199254740991"
  b = b.padStart(maxLength, 0); //"1234567899999999999"
  //定义加法过程中需要用到的变量
  let t = 0;
  let f = 0; //"进位"
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f !== 0) {
    sum = "" + f + sum;
  }
  return sum;
}
```
### setTimeout 模拟实现 setInterval(带清除定时器的版本)
```js
setTimeout(function() {
    console.log(1);
    setTimeout(arguments.callee, 1);
}, 1)
        
// 题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
function mySettimeout(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
// let a=mySettimeout(()=>{
//   console.log(111);
// },1000)
// let b=mySettimeout(() => {
//   console.log(222)
// }, 1000)
```
### setInterval 模拟实现 setTimeout(带清除定时器的版本)
```js
// 我们能反过来使用 setinterval 模拟实现 settimeout 吗？
const mySetTimeout = (fn, time) => {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time);
};
// mySetTimeout(()=>{
//   console.log(1);
// },1000)
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
### 手写 forEach
```js
Array.prototype.myForEach = function (callback, context) {
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let arr = Array.prototype.slice.call(this);
  let len = arr.length;
  for (var i = 0; i < len; i++) {
    callback.call(context, arr[i], i, this);
  }
};
```
### 手写 map 函数
```js
// 遍历数组的每一项，并执行回调函数的操作，返回一个对每一项进行操作后的新数组，
Array.prototype.map = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
    // 运行传递过来的函数  是一个匿名函数
    result.push(callback(this[i], i, this));
  }
  return result;
};
const arr = [1, 2, 3, , 5];
const result = arr.map((item) => item * 2);
console.log(result);

//es5实现map函数
const selfMap = function(callback, context) {
  //当前带有length的对象转化为数组
  let arr = Array.prototype.slice.call(this);
  let mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    mappedArr.push(callback.call(context, arr[i], i, this));
  }
  return mappedArr;
};
// 值得一提的是，map 的第二个参数为第一个参数回调中的 this 指向，如果第一个参数为箭头函数，那设置第二个 this 会因为箭头函数的词法绑定而失效

//使用reduce实现数组map方法
const selfMap2 = function(callback, context) {
  let arr = Array.prototype.slice.call(this);
  return arr.reduce((pre, cur, index) => {
    return [...pre, callback.call(context, cur, index, this)];
  }, []);
};
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
### 手写 filter 函数
```js
Array.prototype.filter = function(callback) {
  if (this == undefined) {
    throw new TypeError("this is null or not undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
    callback(this[i], i, this) && result.push(this[i]);
  }
  return result;
};
const arr = [1, 2, 3, , 5];
const result = arr.filter((item) => item > 2);
console.log(result);

//es5实现
const seltFilter = function(callback, context) {
  let arr = Array.prototype.slice.call(this);
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
    callback.call(context, arr[i], i, this) && filteredArr.push(arr[i]);
  }
};

//使用reduce实现数组filter方法
const selfFilter2 = function(callback, context) {
  return this.reduce((pre, cur, index) => {
    return callback.call(context, arr[i], i, this) ? [...pre, ...cur] : [...pre];
  });
};
```
### 手写reduce
```js
// 对数组累积执行回调函数，返回最终计算结果
Array.prototype.reduce = function(callback, initValue) {
  let result = initValue ? initValue : this[0];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
    result = callback(result, this[i], i, this);
  }
  return result;
};
const arr = [1, , 2, 3, , 5];
const result = arr.reduce((a, b) => a * b, 2);
console.log(result);

//es5
const findRealELementIndex = function(arr, initiIndex) {
  let index;
  for (let i = initIndex || 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    index = i;
    break;
  }
  return index;
};
const selfReduce = function(callback, initalValue) {
  let arr = Array.prototype.slice.call(this);
  let res;

  if (initalValue === undefined) {
    res = arr[findRealElementIndex(arr)];
    for (let i = 0; i < arr.lenght - 1; i++) {
      //reduce遍历时候 需要跳过稀疏元素，遍历到最后一个非稀疏元素
      if (!arr.hasOwnProperty(i)) continue;
      let realElementIndex = findRealElementIndex(arr, i + 1);
      res = callback.call(null, res, arr[realElementIndex], realElementIndex, this);
    }
  } else {
    res = initalValue;
    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue;
      res = callback.call(null, res, arr[i], i, this);
    }
  }
  return res;
};

//另一种es5的方法
Array.prototype.myReduce = function(callback, initialValue) {
  var len = this.length,
    nextValue,
    i;
  if (!initialValue) {
    // 没有传第二个参数
    nextValue = this[0];
    i = 1;
  } else {
    // 传了第二个参数
    nextValue = initialValue;
    i = 0;
  }
  for (; i < len; i++) {
    nextValue = callback(nextValue, this[i], i, this);
  }
  return nextValue;
};
```
### 手写every函数

```javascript
Array.prototype.every = function(callback) {
  let bool = true;
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
    if (!callback(this[i], i, this)) {
      bool = false;
      break;
    }
  }
  return bool;
};
const arr = [1, 2, 3, , 5];
const result = arr.every((item) => item > 3);
console.log(result);
```
### 手写some函数
```js
Array.prototype.some = function (callback){
    let bool = false;
    for (let i=0;i<this.length;i++) {
        if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
        if (callback(this[i],i,this)){
            bool = true
            break
        }
    }
    return bool
}
const arr = [1,2,3,,5]
const result = arr.some(item => item > 3)
console.log(result)


//es5
const selfSome = function(callback,context){
  let arr = Array.prototype.slice.call(this)
  if(!arr.length) return false
  let flag = false
  for(let i = 0;i < arr.length;i++){
    if(!arr.hasOwnProperty(i)) continue
    let res = callback.call(context,arr[i],i,this)
    if(res) {
      flag = true
      break
    }
  }
  return flag
}

// 执行 some 方法的数组如果是一个空数组，最终始终会返回 false，而另一个数组的 every 方法中的数组如果是一个空数组，会始终返回 true
```
### 手写find方法
```js
// 只查找第一个
Array.prototype.find = function(fn) {
  let result;
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue; // 处理稀疏数组的情况
    if (fn(this[i], i, this)) {
      result = this[i];
      break;
    }
  }
  return result;
};
const arr = [1, 2, 3, , 5, 4];
const result = arr.find((item) => item > 3);
console.log(result);
```
### 手写拉平数组(数组扁平化)
```js
// 利用es6语法arr.flat(num)方法将数组拉平
// 该方法不传参数默认只会拉平一层，如果想拉平多层嵌套的数组，需要传入一个整数，表示要拉平的层级。该返回返回一个新的数组，对原数组没有影响。
function flattening(arr, num = 1) {
  if (!Array.isArray(arr)) return;
  return arr.flat(num,2);
}
```
```js
// 利用 reduce() 方法将数组拉平。
// 利用 reduce 进行迭代，核心的思想是递归实现。
function flattening(arr) {
  if (!Array.isArray(arr)) return;
  return arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flattening(b) : b);
  }, []);
}
```
```js
// 模拟栈实现数组拉平
// 该方法是模拟栈，在性能上相对最优解。
function flattening(arr) {
  if (!Array.isArray(arr)) return;
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    let value = stack.shift();
    Array.isArray(value) ? stack.push(value) : res.push(value);
  }
  return res;
}
```
```js
// 利用正则
const res2 = JSON.stringify(arr)
  .replace(/\[|\]/g, "")
  .split(",");

// 正则改良版本
const res3 = JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");
```
```js
// 函数递归
const res = [];
const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
}
```
### 手写数组去重
- 利用 ES6 Set 去重（ES6 中最常用）
- 利用 for 嵌套 for，然后 splice 去重（ES5 中最常用）
- 利用 indexOf 去重
- 利用 sort()
- 利用对象的属性不能相同的特点进行去重（这种数组去重的方法有问题，不建议用，有待改进）
- 利用 includes
- 利用 hasOwnProperty
- 利用 filter
- 利用递归去重
- 利用 Map 数据结构去重
- 利用 reduce+includes
- [...new Set(arr)]

```js
// 利用ES6 Set去重（ES6中最常用）
function unique(arr) {
  return Array.from(new Set(arr));
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```
```js
// 利用for嵌套for，然后splice去重（ES5中最常用）
// 双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```
```js
// 利用indexOf去重
// 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```
```js
// 利用sort()
// 利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  arr = arr.sort();
  var arrry = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arrry.push(arr[i]);
    }
  }
  return arrry;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```
```js
// 利用includes
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      //includes 检测数组是否有某个值
      array.push(arr[i]);
    }
  }
  return array;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
```
```js
// 利用hasOwnProperty
// 利用hasOwnProperty 判断是否存在对象属性
function unique(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
```
```js
// 利用filter
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
```
```js
// 利用递归去重
function unique(arr) {
  var array = arr;
  var len = array.length;

  array.sort(function(a, b) {
    //排序后更加方便去重
    return a - b;
  });

  function loop(index) {
    if (index >= 1) {
      if (array[index] === array[index - 1]) {
        array.splice(index, 1);
      }
      loop(index - 1); //递归loop，然后数组去重
    }
  }
  loop(len - 1);
  return array;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```
```js
// 利用Map数据结构去重
// 创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。
function arrayNonRepeatfy(arr) {
  let map = new Map();
  let array = new Array(); // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // 如果有该key值
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false); // 如果没有该key值
      array.push(arr[i]);
    }
  }
  return array;
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```
```js
// 利用reduce+includes
function unique(arr) {
  return arr.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    []
  );
}
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```
```js
// [...new Set(arr)]
[...new Set(arr)];
//代码就是这么少----（其实，严格来说并不算是一种，相对于第一种方法来说只是简化了代码）
```
### 类数组转化为数组的方法
```js
// 类数组拥有 length 属性 可以使用下标来访问元素 但是不能使用数组的方法 如何把类数组转化为数组?

const arrayLike=document.querySelectorAll('div')

// 1.扩展运算符
[...arrayLike]
// 2.Array.from
Array.from(arrayLike)
// 3.Array.prototype.slice.call()
Array.prototype.slice.call(arrayLike)
// 4.Array.apply
Array.apply(null, arrayLike)
// 5.Array.prototype.concat
Array.prototype.concat.apply([], arrayLike)
```
### 手写 isNaN()
```js
function myIsNaN(param) {
  var param = Number(param);
  return param !== param;
}
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
### 手写浅拷贝
- 如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
- 浅拷贝后会重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后引用类型会共享堆中的内存，引用类型就会互相影响
- 实际上对于数组来说， 只要不修改原数组， 重新返回一个新数组就可以实现浅拷贝，比如说map、filter、reduce等方法
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809212740.png)

```js
//方法 1
Object.assign(target, ...sources); // 缺陷：没能处理数组，不够通用
```
```js
//方法 2
var simpleClone = function(target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (obj.hasOwnProperty(key)) {
        cloneTarget[key] = target[key];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}
```
```js
//方法 3
let obj1 = {
  name: "yang",
  res: {
    value: 123,
  },
};
let { ...obj2 } = obj1;
obj2.res.value = 456;
console.log(obj2); // {name: "yang", res: {value: 456}}
console.log(obj1); // {name: "yang", res: {value: 456}}
obj2.name = "haha";
console.log(obj2); // {name: "haha", res: {value: 456}}
console.log(obj1); // {name: "yang", res: {value: 456}}
```
```js
//方法 4
const arr1 = [
  "yang",
  {
    value: 123,
  },
];
const arr2 = arr1.slice(0);
arr2[1].value = 456;
console.log(arr2); // ["yang", {value: 456}]
console.log(arr1); // ["yang", {value: 456}]
arr2[0] = "haha";
console.log(arr2); // ["haha", {value: 456}]
console.log(arr1); // ["yang", {value: 456}]
```
```js
//方法 5
const arr1 = [
  "yang",
  {
    value: 123,
  },
];
const arr2 = [].concat(arr1);
arr2[1].value = 456;
console.log(arr2); // ["yang", {value: 456}]
console.log(arr1); // ["yang", {value: 456}]
arr2[0] = "haha";
console.log(arr2); // ["haha", {value: 456}]
console.log(arr1); // ["yang", {value: 456}]
```
### 手写深拷贝
- 将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。深拷贝开辟了新的堆内存地址，并且将对象的引用指向了新开辟的内存地址，和前面复制的对象完全独立，自立根生，拷贝地很深，学功夫学到家，自立门户的感觉。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210809212944.png)
```js
//方法 1 JSON.parse(JSON.stringify())
let student = {
  name: "小明",
  score: {
    english: 88,
    chinese: 77,
    math: 99,
  },
};

let deepStudent = JSON.parse(JSON.stringify(student));
// JSON.stringify 对于拷贝其他引用类型、拷贝函数、循环引用等情况无法很好处理，只能运用于简单 JSON。
// 会忽略 undefined、symbol、不能序列化函数、不能解决循环引用的对象、不能正确处理new Date()、不能处理正则、不能处理new Error()
deepStudent.name = "李雷";
deepStudent.score.english = 98;
console.log("deepStudent: ", deepStudent);
console.log("student: ", student);
```
```js
//方法 2 深拷贝更为通用的做法：递归遍历赋值
var deepClone = function(target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(target[key]);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
};



// target.target = target;
// 这个case如果还用以上递归代码的话，会导致死循环、栈内存溢出。
// 附加考虑循环引用
var deepClone = function(target, map = new Map()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};




// 附加考虑循环引用,弱引用对象，垃圾回收机制会自动帮我们回收。
var deepClone = function(target, map = new WeakMap()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};
```
```js
// 方法3  其他的理解
function isObject(val) {
  return typeof val === "object" && val !== null;
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });

  return target;
}

// var obj1 = {
// a:1,
// b:{a:2}
// };
// var obj2 = deepClone(obj1);
// console.log(obj1);
```
```js
// 方法4
function deepCopy(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj;
  // 防止循环引用
  if (cache.get(obj)) return cache.get(obj);
  // 支持函数
  if (obj instanceof Function) {
    return function() {
      return obj.apply(this, arguments);
    };
  }
  // 支持日期
  if (obj instanceof Date) return new Date(obj);
  // 支持正则对象
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  // 还可以增加其他对象，比如：Map, Set等，根据情况判断增加即可，面试点到为止就可以了

  // 数组是 key 为数字素银的特殊对象
  const res = Array.isArray(obj) ? [] : {};
  // 缓存 copy 的对象，用于处理循环引用的情况
  cache.set(obj, res);

  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = deepCopy(obj[key], cache);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
}

// 测试
const source = {
  name: "Jack",
  meta: {
    age: 12,
    birth: new Date("1997-10-10"),
    ary: [1, 2, { a: 1 }],
    say() {
      console.log("Hello");
    },
  },
};
source.source = source;
const newObj = deepCopy(source);
console.log(newObj.meta.ary[2] === source.meta.ary[2]); // false
console.log(newObj.meta.birth === source.meta.birth); // false
```
```js
// 超级全面的深拷贝
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";
const argsTag = "[object Arguments]";
const boolTag = "[object Boolean]";
const dateTag = "[object Date]";
const numberTag = "[object Number]";
const stringTag = "[object String]";
const symbolTag = "[object Symbol]";
const errorTag = "[object Error]";
const regexpTag = "[object RegExp]";
const funcTag = "[object Function]";
const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}
function getType(target) {
  return Object.prototype.toString.call(target);
}
function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}
function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe));
}
function cloneReg(targe) {
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
}
function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      if (param) {
        const paramArr = param[0].split(",");
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}
// 处理 不可继续遍历的类型
function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    case funcTag:
      return cloneFunction(targe);
    default:
      return null;
  }
}
function clone(target, map = new WeakMap()) {
  // 克隆原始类型
  if (!isObject(target)) {
    return target;
  }
  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target, type);
  } else {
    return cloneOtherType(target, type);
  }
  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);
  // 克隆set
  if (type === setTag) {
    target.forEach((value) => {
      cloneTarget.add(clone(value, map));
    });
    return cloneTarget;
  }
  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value, map));
    });
    return cloneTarget;
  }
  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = clone(target[key], map);
  });

  return cloneTarget;
}
module.exports = {
  clone,
};
```
```js
// 其他的高级版
function deepClone(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj;
  // 防止循环引用
  if (cache.get(obj)) return cache.get(obj);
  // 支持函数
  if (obj instanceof Function) {
    return function() {
      return obj.apply(this, arguments);
    };
  }
  // 支持日期
  if (obj instanceof Date) return new Date(obj);
  // 支持正则对象
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

  // 数组是 key 为数字索引的特殊对象
  const res = Array.isArray(obj) ? [] : {};
  // 缓存 copy 的对象，用于处理循环引用的情况
  cache.set(obj, res);

  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = deepClone(obj[key], cache);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
}

// 其他高级版本2
// 深拷贝：对对象内部进行深拷贝，支持 Array、Date、RegExp、DOM
const deepCopy = (sourceObj) => {
  // 如果不是对象则退出（可停止递归）
  if (typeof sourceObj !== "object") return;

  // 深拷贝初始值：对象/数组
  let newObj = sourceObj instanceof Array ? [] : {};

  // 使用 for-in 循环对象属性（包括原型链上的属性）
  for (let key in sourceObj) {
    // 只访问对象自身属性
    if (sourceObj.hasOwnProperty(key)) {
      // 当前属性还未存在于新对象中时
      if (!(key in newObj)) {
        if (sourceObj[key] instanceof Date) {
          // 判断日期类型
          newObj[key] = new Date(sourceObj[key].getTime());
        } else if (sourceObj[key] instanceof RegExp) {
          // 判断正则类型
          newObj[key] = new RegExp(sourceObj[key]);
        } else if (
          typeof sourceObj[key] === "object" &&
          sourceObj[key].nodeType === 1
        ) {
          // 判断 DOM 元素节点
          let domEle = document.getElementsByTagName(
            sourceObj[key].nodeName
          )[0];
          newObj[key] = domEle.cloneNode(true);
        } else {
          // 当元素属于对象（排除 Date、RegExp、DOM）类型时递归拷贝
          newObj[key] =
            typeof sourceObj[key] === "object"
              ? deepCopy(sourceObj[key])
              : sourceObj[key];
        }
      }
    }
  }
  return newObj;
};
// deepCopy 函数测试效果
const objA = {
  name: "jack",
  birthday: new Date(),
  pattern: /jack/g,
  body: document.body,
  others: [123, "coding", new Date(), /abc/gim],
};
const objB = deepCopy(objA);
console.log(objA === objB); // false
console.log(objA.others === objB.others); // false
console.log(objA, objB); // 对象内容一样
```
### 手写对象的扁平方法
```md
const obj = {
  a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
  }

flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
```

```js
// 判断是不是对象
function isObject(val) {
  return typeof val === "object" && val !== null;
}
// 进行对象深度抹平
function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    // 判断是不是对象
    if (isObject(cur)) {
      if (Array.isArray(cur)) 
        // 遍历数组 一级一级拼接
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        // 遍历对象 一级一级拼接
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");
  return res;
}
flatten();
```
```js
// 没有数组的情况
function objectFlat(obj = {}) {
  const res = {};
  function flat(item, preKey = "") {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key;
      if (val && typeof val === "object") {
        flat(val, newKey);
      } else {
        res[newKey] = val;
      }
    });
  }
  flat(obj);
  return res;
}
```
### 手写判断一个对象是不是可迭代的
- 判断一个对象是不是可迭代的
  - **每个可迭代对象必然包含一个 [Symbol.iterator] 方法属性**
  - 每个可迭代对象都有一个 [Symbol.iterator] 方法属性，没有的话，肯定不是可迭代对象。
### 手写判断一个对象是否为空
- 判断一个对象是否为空
```js
function objectEmptyCheck(value) {
  return (
    value && Object.keys(value).length === 0 && value.constructor === Object
  );
}
let objectEmptyCheck = (obj) => (JSON.stringify(obj) === "{}" ? true : false);

```
### 手写Object.is()
Object.is()与===方法类似，但是NaN === NaN返回true，0 === -0返回false；
```js
console.log(Object.is(1, 1)); // true
console.log(Object.is('123', '123')); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
```
```js
Object.is = (val1, val2) => {
  if (Number.isNaN(val1) && Number.isNaN(val2)) {
    return true;
  }

  if ((val1 === 0 && val2 === -0) || (val1 === -0 && val2 === 0)) {
    return false;
  }

  return val1 === val2;
};

console.log(myIs(1, 1)); // true
console.log(myIs(true, true)); // true
console.log(myIs("123", "123")); // true
console.log(myIs(NaN, NaN)); // true
console.log(myIs(0, -0)); // false
console.log(myIs(-0, 0)); // false
```
### 手写Object.create（）
Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象__proto__
```js
Object.create = function create(proto, propertiesObject = undefined) {
  // proto 新创建对象的原型对象, propertiesObject 要定义其可枚举属性或修改的属性描述符的对象
  // 只能是 null 或者 object
  if (
    typeof proto !== "object" &&
    proto !== null &&
    typeof proto !== "function"
  )
    throw Error(
      "Uncaught TypeError: Object prototype may only be an Object or null"
    );

  function F() {} // 创建一个空的构造函数 F
  F.prototype = proto; // F 原型指向 proto
  let obj = new F(); // 创建 F 的实例

  if (propertiesObject !== undefined)
    // propertiesObject有值则调用 Object.defineProperties
    Object.defineProperties(obj, propertiesObject);

  return obj; // 返回 这个 obj
};
```
### 手写 Object.assign()
Object.assign 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
由于Object.assign是浅拷贝，仅仅会针对第一层的数据进行处理，深层嵌套的数据不会进行处理
不可枚举数据使用Object.assign时不能拷贝
继承的属性使用Object.assign时不能拷贝
```js
Object.assign = (target, ...sources) => {
  // undefined 和 null，直接抛异常
  if (target == null) {
    throw new TypeError("不能对null undefined进行处理");
  }

  // 利用Object创建一个对象， 保持引用相同
  let obj = Object(target);

  // 遍历后续的 sources， 将每一项对象取出
  sources.forEach((nextSource) => {
    // 忽略 null undefined
    if (nextSource != null) {
      // 将对象的第一层数据取出，因为Object.assign是浅拷贝的
      for (const key in nextSource) {
        // 判断是否是自身属性，若是继承过来的数据则不进行处理
        if (Object.prototype.hasOwnProperty.call(nextSource, key)) {
          obj[key] = nextSource[key];
        }
      }
    }
  });

  // 将合并完成的对象返回
  return obj;
};
```
### 手写 JSON.stringify
JSON.stringify([, replacer [, space]) 方法是将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串。此处模拟实现，不考虑可选的第二个参数 replacer 和第三个参数 space。

- 基本数据类型：
  - undefined 转换之后仍是 undefined(类型也是 undefined)
  - boolean 值转换之后是字符串 "false"/"true"
  - number 类型(除了 NaN 和 Infinity)转换之后是字符串类型的数值
  - symbol 转换之后是 undefined
  - null 转换之后是字符串 "null"
  - string 转换之后仍是 string
  - NaN 和 Infinity 转换之后是字符串 "null"
- 函数类型：转换之后是 undefined
- 如果是对象类型(非函数)
  - 如果是一个数组：如果属性值中出现了 undefined、任意的函数以及 symbol，转换成字符串 "null" ；
  - 如果是 RegExp 对象：返回 {} (类型是 string)；
  - 如果是 Date 对象，返回 Date 的 toJSON 字符串值；
  - 如果是普通对象；
    - 如果有 toJSON() 方法，那么序列化 toJSON() 的返回值。
    - 如果属性值中出现了 undefined、任意的函数以及 symbol 值，忽略。
    - 所有以 symbol 为属性键的属性都会被完全忽略掉。
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
```js
function jsonStringify(data) {
  let dataType = typeof data;

  if (dataType !== "object") {
    let result = data;
    //data 可能是 string/number/null/undefined/boolean
    if (Number.isNaN(data) || data === Infinity) {
      //NaN 和 Infinity 序列化返回 "null"
      result = "null";
    } else if (
      dataType === "function" ||
      dataType === "undefined" ||
      dataType === "symbol"
    ) {
      //function 、undefined 、symbol 序列化返回 undefined
      return undefined;
    } else if (dataType === "string") {
      result = '"' + data + '"';
    }
    //boolean 返回 String()
    return String(result);
  } else if (dataType === "object") {
    if (data === null) {
      return "null";
    } else if (data.toJSON && typeof data.toJSON === "function") {
      return jsonStringify(data.toJSON());
    } else if (data instanceof Array) {
      let result = [];
      //如果是数组
      //toJSON 方法可以存在于原型链中
      data.forEach((item, index) => {
        if (
          typeof item === "undefined" ||
          typeof item === "function" ||
          typeof item === "symbol"
        ) {
          result[index] = "null";
        } else {
          result[index] = jsonStringify(item);
        }
      });
      result = "[" + result + "]";
      return result.replace(/'/g, '"');
    } else {
      //普通对象
      /**
       * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
       * symbol key 忽略
       * undefined、函数、symbol 为属性值，被忽略
       */
      let result = [];
      Object.keys(data).forEach((item, index) => {
        if (typeof item !== "symbol") {
          //key 如果是symbol对象，忽略
          if (
            data[item] !== undefined &&
            typeof data[item] !== "function" &&
            typeof data[item] !== "symbol"
          ) {
            //键值如果是 undefined、函数、symbol 为属性值，忽略
            result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
          }
        }
      });
      return ("{" + result + "}").replace(/'/g, '"');
    }
  }
}
```
### 手写 JSON.parse
- 把 JSON 字符串解析为原生 JavaScript 对象
- 介绍 2 种方法实现：
  - eval 实现；
  - new Function 实现；
#### eval 实现
第一种方式最简单，也最直观，就是直接调用 eval，代码如下：
```js
var json = '{"a":"1", "b":2}';
var obj = eval("(" + json + ")");  // obj 就是 json 反序列化之后得到的对象
```
但是直接调用 eval 会存在安全问题，如果数据中可能不是 json 数据，而是可执行的 JavaScript 代码，那很可能会造成 XSS 攻击。因此，在调用 eval 之前，需要对数据进行校验。
```js
var rx_one = /^[\],:{}\s]*$/;
var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rx_four = /(?:^|:|,)(?:\s*\[)+/g;

if (
    rx_one.test(
        json.replace(rx_two, "@")
            .replace(rx_three, "]")
            .replace(rx_four, "")
    )
) {
    var obj = eval("(" +json + ")");
}
```
#### new Function 实现
Function 与 eval 有相同的字符串参数特性。
```js
var json = '{"name":"小姐姐", "age":20}';
var obj = (new Function('return ' + json))();
```
### 手写Promise
```js
/**
* 1. Promise就是一个类，在执行这个类的时候，需要传递一个执行器进去，执行器会立即执行。
* 2. Promise中有三种状态分别为成功fulfilled、失败rejected、等待pending，一旦状态确定就不可以更改。
* 3. resolve,reject函数是用来更改状态的。
* 4. then方法内部做的事情就是判断，如果状态是成功，调用成功的回调函数，如果状态是失败，调用失败的回调函数。then方法是被定义在原生对象上的方法。
* 5. then成功回调有一个参数，表示成功之后的值，then失败回调有一个参数，表示失败后的原因。
*/

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  //传递执行器
  construct(executor) {
    this.status = PENDING;
    // 成功之后的值
    this.value = undefined;
    // 失败之后的原因
    this.error = undefined;
    // 成功回调
    this.onResolvedCallbacks = [];
    // 失败回调
    this.onRejectedCallbacks = [];
    // 执行器会立即执行  (Promise的立即执行性,除了resolve，reject都执行)
    try {
      executor(this.resolve, this.reject);
      // 捕获执行器错误
    } catch (error) {
      this.reject(error);
    }
  }
  resolve = (value) => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 更改状态为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value;
    // 异步执行的时候 判断成功回调是否存在 如果存在 调用
    // this.onResolvedCallbacks && this.onResolvedCallbacks(this.value)
    while (this.onResolvedCallbacks.length) {
      //从前往后调用
      this.onResolvedCallbacks.shift();
    }
  };
  reject = (error) => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 更改状态为失败
    this.status = REJECTED;
    // 保存失败之后的原因
    this.error = error;

    // 异步执行的时候 判断失败回调是否存在 如果存在 调用
    // this.onRejectedCallbacks && this.onRejectedCallbacks(this.error)
    while (this.onRejectedCallbacks.length) {
      //从前往后调用
      this.onRejectedCallbacks.shift();
    }
  };
  then(onFulfilled, onRejected) {
    /**
    .then()
    .then()
.   .then(value => console.log(value))
    */
    // onFulfilled,onRejected都是可选参数，如果他们不是函数，必须被忽略
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    // then链式调用
    // onFulfilled或onRejected不能同步被调用，必须异步调用。我们就用setTimeout解决异步问题。
    let promise2 = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        // 变成异步代码   等待所有同步代码完成之后执行  这样做的原因是为了获取 promise2
        setTimeout(() => {
          // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
          try {
            let x = onFulfilled(this.value);
            // 判断 x 的值是普通纸还是promise对象
            // 如果是普通值 直接调用resolve
            // 如果是promise对象，查看promise对象返回的结果
            // 再根据promise对象返回的结果，决定调用resolve还是reject
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
          try {
            let x = onRejected(this.error);
            // 判断 x 的值是普通纸还是promise对象
            // 如果是普通值 直接调用resolve
            // 如果是promise对象，查看promise对象返回的结果
            // 再根据promise对象返回的结果，决定调用resolve还是reject
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        // 我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用它们
        // 类似于发布订阅，先将then里面的两个函数储存起来，由于一个promise可以有多个then，所以存在同一个数组内。
        // 调用then的时候  没有直接调用 resolve 和 reject。异步之后调用
        // 处理异步状态
        // 等待状态
        // 将成功回调和失败回调存储起来
        // then 方法多次调用添加多个处理函数
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
            try {
              let x = onFulfilled(this.value);
              // 判断 x 的值是普通纸还是promise对象
              // 如果是普通值,直接调用resolve,直接作为promise2成功的结果
              // 如果是promise对象，查看promise对象返回的结果,则取它的结果，作为新的promise2成功的结果
              // 再根据promise对象返回的结果，决定调用resolve还是reject
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            // 捕获 then 链式调用的错误  上一个then的错误  传给下一个then的catch
            try {
              let x = onRejected(this.error);
              // 判断 x 的值是普通纸还是promise对象
              // 如果是普通值 直接调用resolve
              // 如果是promise对象，查看promise对象返回的结果
              // 再根据promise对象返回的结果，决定调用resolve还是reject
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
  catch(failureCallback) {
    return this.then(undefined, failureCallback);
  }
  // new Promise().finally()
  // finally方法是无论成功还是失败都会执行的方法
  // 1.无论当前 promise 对象状态是成功还是失败，finally()都会被调用一次
  // 2.finally()后面可以链式调用then（）---> finally()返回一个 promise 对象
  finally(callback) {
    //最后一个promise的then
    //then 方法可以拿到当前的状态
    return this.then(
      (value) => {
        //执行这个promise
        return MyPromise.resolve(callback()).then(() => value);
      },
      (error) => {
        return MyPromise.resolve(callback()).then(() => {
          throw error;
        });
      }
    );
  }
  done(resolveFn, rejectFn) {
    this.then(resolveFn, rejectFn).catch((reason) => {
      setTimeout(() => {
        throw reason;
      }, 0);
    });
  }
  // Promise.resolve(value)
  // resolve 返回的是一个promise对象
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    } else {
      return new MyPromise((resolve) => resolve(value));
    }
  }
  // Promise.reject(value)
  // reject 返回的是一个promise对象
  static reject(error) {
    if (error instanceof MyPromise) {
      return error;
    } else {
      return new MyPromise((resolve, reject) => reject(error));
    }
  }
  // Promise.all([])
  // all方法接收一个数组，当数组中每个实例都成功时才会返回，返回的也是一个数组，每个参数为对应的promise返回的结果，如果有一项失败了，all方法都会返回失败
  // 当 array 中的所有元素都执行成功，才返回成功 resolve
  // 当 array 中的一个元素执行失败，则返回失败 reject
  static all(array) {
    // 结果数组
    let result = [];
    let index = 0;
    let len = array.length;

    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === len) {
          // 全部成功
          resolve(result);
        }
      }
      // for循环瞬间就执行完了
      // 注意执行的时候  有可能有异步循环
      for (let i = 0; i < len; i++) {
        let current = array[i];
        if (current instanceof MyPromise) {
          // 失败就调用reject(error)
          current.then(
            (value) => addData(i, value),
            (error) => reject(error)
          );
        } else {
          addData(i, array[i]);
        }
      }
    });
  }
  // Promise.race([])
  // race方法同样接收一个数组参数，里面每一项是Promise实例，它返回最快改变状态的Promise实例方法的结果
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 返回 promise 对象，只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
  // 哪个Promise最快得到结果，就返回那个结果，无论成功失败
  static race(array) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      array.forEach((item) => {
        if (item instanceof MyPromise) {
          item.then(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
  // allSettled方法也是接收数组参数，但是它无论成功或者失败，都会返回
  static allSettled(array) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      let len = array.length;
      let results = [];

      for (let i = 0; i < len; i++) {
        let item = array[i];

        if (!(item instanceof MyPromise)) return;

        item.then(
          (result) => {
            results[i] = result;
          },
          (reason) => {
            results[i] = reason;
          }
        );
        resolve(results);
      }
    });
  }
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 如果有一个Promise成功，则返回这个成功结果
  // 如果所有Promise都失败，则报错
  static any(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        throw new Error(`argument must be a array`);
      }
      let count = 0;
      array.forEach((item) => {
        item.then(
          (val) => {
            resolve(val);
          },
          (err) => {
            count++;
            if (count === array.length) {
              reject(new AggregateError("All promises were rejected"));
            }
          }
        );
      });
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // then 方法链式调用识别 Promise 对象来自自己   不能自己返回自己的promise2 形成死循环调用
  // 处理自己返回自己
  if (promise2 === x) {
    // return 阻止向下执行
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  if (x instanceof MyPromise) {
    // promise对象
    // x.then((value) => resolve(value),(error) => reject(error))
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}
```
### 手写Promise.all
```js
// 传入的所有 Promsie 都是 fulfilled，则返回由他们的值组成的，状态为 fulfilled 的新 Promise；
// 只要有一个 Promise 是 rejected，则返回 rejected 状态的新 Promsie，且它的值是第一个 rejected 的 Promise 的
// 只要有一个 Promise 是 pending，则返回一个 pending 状态的新 Promise；
// all方法接收一个数组，当数组中每个实例都成功时才会返回，返回的也是一个数组，每个参数为对应的promise返回的结果，如果有一项失败了，all方法都会返回失败
Promise.all = function (promiseArr) {
  let result = [];
  //声明一个计数器 每一个promise返回就加一
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      //这里用 Promise.resolve包装一下 防止不是Promise类型传进来
      Promise.resolve(promiseArr[i]).then(
        (res) => {
          //这里不能直接push数组  因为要控制顺序一一对应
          result[i] = res;
          count++;
          //只有全部的promise执行成功之后才resolve出去
          if (count === promiseArr.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
```
### 手写Promise.race
```js
// Promise.race([])
// race方法同样接收一个数组参数，里面每一项是Promise实例，它返回最快改变状态的Promise实例方法的结果
// 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
// 返回 promise 对象，只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
// 哪个Promise最快得到结果，就返回那个结果，无论成功失败
Promise.race = function (promiseArr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i]).then(
        (res) => {
          //promise数组只要有任何一个promise 状态变更  就可以返回
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
```
### 手写Promise.resolve
```js
// Promsie.resolve(value) 可以将任何值转成值为 value 状态是 fulfilled 的 Promise，但如果传入的值本身是 Promise 则会原样返回它。

Promise.resolve = function(value) {
    // 如果是 Promsie，则直接输出它
    if(value instanceof Promise){
        return value
    }
    return new Promise(resolve => resolve(value))
}
```
### 手写Promise.reject
```js
// 和 Promise.resolve() 类似，Promise.reject() 会实例化一个 rejected 状态的 Promise。

Promise.reject = function(error) {
    // 如果是 Promsie，则直接输出它
    if(value instanceof Promise){
        return error
    }
    return new Promise((resolve,reject) => reject(error))
}
```
### 手写Promise.allSettled
```js
// allSettled方法也是接收数组参数，但是它无论成功或者失败，都会返回
// 所有 Promise 的状态都变化了，那么新返回一个状态是 fulfilled 的 Promise，且它的值是一个数组，数组的每项由所有 Promise 的值和状态组成的对象；
// 如果有一个是 pending 的 Promise，则返回一个状态是 pending 的新实例
Promise.allSettled = function (array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      throw new Error(`argument must be a array`);
    }
    let len = array.length;
    let results = [];
    for (let i = 0; i < len; i++) {
      let item = array[i];
      if (!(item instanceof Promise)) return;
      item.then(
        (result) => {
          results[i] = result;
        },
        (reason) => {
          results[i] = reason;
        }
      );
      resolve(results);
    }
  });
};
```
### 手写Promise.any
```js
// 空数组或者所有 Promise 都是 rejected，则返回状态是 rejected 的新 Promsie，且值为 AggregateError 的错误；
// 只要有一个是 fulfilled 状态的，则返回第一个是 fulfilled 的新实例；
// 其他情况都会返回一个 pending 的新实例；


// 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
// 如果有一个Promise成功，则返回这个成功结果
// 如果所有Promise都失败，则报错
Promise.any = function (array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      throw new Error(`argument must be a array`);
    }
    let count = 0;
    array.forEach((item) => {
      item.then(
        (val) => {
          resolve(val);
        },
        (err) => {
          count++;
          if (count === array.length) {
            reject(new AggregateError("All promises were rejected"));
          }
        }
      );
    });
  });
};
```
### 手写通过Promise实现sleep
很多编程语言里都有 sleep()，delay()等方法，它能让我们的程序不那么着急的去执行下一步操作，而是延迟、等待一段时间。
```js
function sleep(s) {
  s = s || 0;
  s = parseInt(s) * 1000;
  let now = +new Date();
  let timer = null;
  return new Promise((resolve, reject) => {
    timer = setInterval(() => {
      if (now + s < +new Date()) {
        clearInterval(timer);
        resolve(true);
      }
    }, 10);
  });
}

(async function() {
  console.log("Do some thing, " + new Date());
  await sleep(3000);
  console.log("Do other things, " + new Date());
})();
```
### 并行限制的 Promise 调度器
题目描述:JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个。
```md
 addTask(1000,"1");
 addTask(500,"2");
 addTask(300,"3");
 addTask(400,"4");
 的输出顺序是：2 3 1 4

 整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
```
```js
class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.maxCount = limit;
    this.runCounts = 0;
  }
  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order);
          resolve();
        }, time);
      });
    };
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;
    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();
```
### 手写异步并发数限制
```js
/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
let mapLimit = (list, limit, asyncHandle) => {
  let recursion = (arr) => {
    return asyncHandle(arr.shift()).then(() => {
      if (arr.length !== 0) return recursion(arr);
      // 数组还未迭代完，递归继续进行迭代
      else return "finish";
    });
  };

  let listCopy = [].concat(list);
  let asyncList = []; // 正在进行的所有并发异步操作
  while (limit--) {
    asyncList.push(recursion(listCopy));
  }
  // Promise.all 表示所有的进程已经并发完毕
  return Promise.all(asyncList); // 所有并发异步操作都完成后，本次并发控制迭代完成
};

var dataLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 100, 123];
var count = 0;
mapLimit(dataLists, 3, (curItem) => {
  return new Promise((resolve) => {
    count++;
    setTimeout(() => {
      console.log(curItem, "当前并发量:", count--);
      resolve();
    }, Math.random() * 5000);
  });
}).then((response) => {
  console.log("finish", response);
});
```

```js
class Scheduler {
  constructor() {
    // 任务队列
    this.queue = [];
    // 最大任务数
    this.maxCount = 2;
    // 运行任务数
    this.runCounts = 0;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;

    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();
// 2
// 3
// 1
// 4
```
```js
//自定义请求函数
var request = url => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`任务${url}完成`)
        }, 1000)
    }).then(res => {
        console.log('外部逻辑', res);
    })
}

//添加任务
function addTask(url){
    let task = request(url);
    pool.push(task); 
    task.then(res => {
        //请求结束后将该Promise任务从并发池中移除
        pool.splice(pool.indexOf(task), 1);
        console.log(`${url} 结束，当前并发数：${pool.length}`);
        url = urls.shift();
        // //每当并发池跑完一个任务，就再塞入一个任务
        if(url !== undefined){
            addTask(url);
        }
    })
}

let urls =  ['bytedance.com','tencent.com','alibaba.com','microsoft.com','apple.com','hulu.com','amazon.com'] // 请求地址
let pool = []//并发池
let max = 3 //最大并发量
//先循环把并发池塞满
while (pool.length < max) {
    let url = urls.shift();
    addTask(url)
}
```
```js
//自定义请求函数
var request = url => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`任务${url}完成`)
        }, 1000)
    }).then(res => {
        console.log('外部逻辑', res);
    })
}

//添加任务
function addTask(url){
    let task = request(url);
    pool.push(task); 
    task.then(res => {
        //请求结束后将该Promise任务从并发池中移除
        pool.splice(pool.indexOf(task), 1);
        console.log(`${url} 结束，当前并发数：${pool.length}`);
    })
}
//每当并发池跑完一个任务，就再塞入一个任务
function run(race){
    race.then(res => {
        let url = urls.shift();
        if(url !== undefined){
            addTask(url);
            run(Promise.race(pool));
        }
    })
}

let urls =  ['bytedance.com','tencent.com','alibaba.com','microsoft.com','apple.com','hulu.com','amazon.com'] // 请求地址
let pool = []//并发池
let max = 3 //最大并发量
//先循环把并发池塞满
while (pool.length < max) {
    let url = urls.shift();
    addTask(url)
}
//利用Promise.race方法来获得并发池中某任务完成的信号
let race = Promise.race(pool)
run(race)
```
### 手写异步串行 | 异步并行
```js
// 1. promisify
const promiseAdd = (a, b) =>
  new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

// 2. 异步串行处理
async function serialSum(...args) {
  return args.reduce(
    (task, now) => task.then((res) => promiseAdd(res, now)),
    Promise.resolve(0)
  );
}

// 3. 异步并行处理
async function parallelSum(...args) {
  if (args.length === 1) return args[0];
  const tasks = [];
  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0));
  }
  const results = await Promise.all(tasks);
  return parallelSum(...results);
}

// 测试
(async () => {
  console.log("Running...");
  const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);
  console.log(res1);
  const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);
  console.log(res2);
  console.log("Done");
})();
```
### 手写类的继承方式(优缺点)？？？？？？？？？

1. **借助构造函数实现继承**

使用`借用构造函数`的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

```js
function Parent1() {
  this.name = "parent1";
}
// 子类无法继承父类原型链上的方法
Parent1.prototype.say = function() {};
function Child1() {
  //修改执行上下文
  Parent1.call(this);
  this.type = "child1";
}
console.log(new Child1(), new Child1().say());
```

2. **借助原型链实现继承**

以`原型链的方式来实现继承`，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

```js
function Parent2() {
  this.name = "parent2";
  this.play = [1, 2, 3];
}
function Child2() {
  this.type = "child2";
}
Child2.prototype = new Parent2();

var s1 = new Child2();
var s2 = new Child2();
// s1.__proto__ === s2.__proto__  true
console.log(s1.play, s2.play);
// 原型链继承的同一个对象引用，创建对个实例，实例使用的都是一个对象，修改一个另一个也跟着变，因为是一个。
s1.play.push(4);
```

3. **组合方式**（构造函数+原型链）

`组合继承`，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

```js
// 解决了上面两种的每个问题
// 父类多次实例化问题
function Parent3() {
  this.name = "parent3";
  this.play = [1, 2, 3];
}
function Child3() {
  Parent3.call(this);
  this.type = "child3";
}
// 就是为了继承父类的原型对象
Child3.prototype = new Parent3();
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);
```

4. **组合继承优化 1**

   ```js
   function Parent4() {
     this.name = "parent4";
     this.play = [1, 2, 3];
   }
   function Child4() {
     Parent4.call(this);
     this.type = "child4";
   }
   // 就是为了继承父类的原型对象
   // 在原型对象中有constructor属性，因为子类和父类都是一个原型对象，所以属性值都是一样的
   // Child4.prototype.constructor = Child4  加上这句话也不行，因为Child4.prototype = Parent4.prototype是一个对象，你改变Child4.prototype 就等于改变 Parent4.prototype
   Child4.prototype = Parent4.prototype;
   var s5 = new Child4();
   var s6 = new Child4();
   console.log(s5, s6);

   console.log(s5 instanceof Child4, s5 instanceof Parent4);
   // 但是使用这种的时候  你去找我这实例是谁产生的，竟然是父类（不是我们想要的）
   console.log(s5.constructor);
   ```

5. **组合继承优化 2**

`原型式继承`，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

```js
function Parent5() {
  this.name = "parent5";
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = "child5";
}
// 对象关联 一个新的对象  子类和父类的原型进行隔离
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
```

（1）第一种是以`原型链的方式来实现继承`，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

（2）第二种方式是使用`借用构造函数`的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

（3）第三种方式是`组合继承`，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

（4）第四种方式是`原型式继承`，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

（5）第五种方式是`寄生式继承`，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

（6）第六种方式是`寄生式组合继承`，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。
### 手写深度比较（isEqual）
```js
// 判断对象是否是对象还是数组
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

// 判断全相等
function isEqual(obj1, obj2) {
  // 判断不是对象数组的直接比较值
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }
  // 防止传入的 两个是同一对象 直接返回
  if (obj1 === obj2) {
    return true;
  }
  // 是对象和数组(不考虑function)
  // 分别取出keys
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  // 先判断keys的个数相等不
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  // 以obj1为基准 递归判断 obj2
  for (let key in obj1) {
    const result = isEqual(obj1[key], obj2[key]);
    if (!result) return false;
  }
  // 遍历 递归后到了这里就是全相等
  return true;
}
```
```js
// 传入普通
console.log(isEqual("123", "123")); //true
// 传入一样
console.log(isEqual(obj1, obj1)); //true
// 比较两个一样的
const obj1 = {
  x: 1,
  y: 2,
  s: {
    x: 1,
    y: 2,
  },
};

const obj2 = {
  x: 1,
  y: 2,
  s: {
    x: 1,
    y: 2,
  },
};
console.log(isEqual(obj1, obj2)); //true
```
### 获取当前页面 URL 参数
- 相关方法
    - 传统方式,查找 location.search
    - 新 API URL SearchParams
```js
// 传统方式
function query(name) {
  const search = location.search.substr(1); // 类似 array.slice(1)
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i");
  const res = search.match(reg);
  if (res === null) {
    return null;
  }
  return res[2];
}
query("d");
```

```js
// 新 API URL SearchParams
function query(name) {
  const search = location.search;
  const p = new URLSearchParams(search);
  return p.get(name);
}
query("b")
```
### 将URL参数解析为JS对象
- 方法
    - 传统方式，分析 srarch
    - 使用 URLSearchParams
```js
function queyrToObj() {
  const res = {};
  const search = location.search.substr(1); //截取?之后的参数
  search.split("&").forEach((paramStr) => {
    const arr = paramStr.split("=");
    const key = arr[0];
    const val = arr[1];
    res[key] = val;
  });
  return res;
}
```

```js
function queryToObj() {
  const res = {};
  const pList = new URLSearchParams(location.search);
  pList.forEach((val, key) => {
    res[key] = val;
  });
  return res;
}
```

```js
function queryToObj(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split("&"); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      // 处理有 value 的参数
      let [key, val] = param.split("="); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else {
        // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else {
      // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  });
  return paramsObj;
}
```
### 封装 localStorage
因为 localStorage 是永久存储的，不支持设置过期时间，而我们有时又不希望把本地的存储一起发往服务器，所以也不会使用 cookie，基于这样的业务场景，就对 localStorage 进行了二次封装，让它具备过期时间的特点。
```js
class Storage {
  // 过期时间
  constructor(express) {
    this.express = express;
  }
  // 设置 key-value
  set(key, value, express) {
    let obj = {
      data: value,
      cTime: Date.now(),
      express: express || this.express,
    };
    localStorage.setItem(key, JSON.stringify(obj));
  }
  get(key) {
    let item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    item = JSON.parse(item);
    let nowTime = Date.now();
    // 判断是否过期
    if (item.express && item.express < nowTime - item.cTime) {
      this.remove(key);
      return null;
    } else {
      return item.data;
    }
  }
  // 移除 key-value
  remove(key) {
    localStorage.removeItem(key);
  }
  // 清空 key-value
  clear() {
    localStorage.clear();
  }
}
```
### 树形结构转成列表
```js
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
// 转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
]
```
```js
// 深度优先遍历
function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
    tree.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    });
  };
  dfs(data);
  return res;
}
```
### 列表转成树形结构
```js
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
]
// 转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
```
```js
function listToTree(data) {
  let temp = {};
  let treeData = [];
  // id作为数组的索引，
  for (let i = 0; i < data.length; i++) {
    temp[data[i].id] = data[i];
  }
  for (let i in temp) {
    // 转化为数字，除了非0结点
    if (+temp[i].parentId != 0) {
      // 相应父节点没有找到孩子，给孩子赋值[]
      if (!temp[temp[i].parentId].children) {
        temp[temp[i].parentId].children = [];
      }
      // 根据父节点找孩子
      temp[temp[i].parentId].children.push(temp[i]);
    } else {
      treeData.push(temp[i]);
    }
  }
  return treeData;
}
```
### DOM节点输出JSON的格式
```md
<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

把上诉dom结构转成下面的JSON格式

{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
```
## 手写代码部分3
### 手写`——proto__`
```js
Object.defineProperty(Object.prototype, "__proto__", {
  get: function() {
    return Object.getPrototypeOf(this);
  },
  // ES6中的Object.setPrototypeOf
  set: function(o) {
    Object.setPrototypeOf(this, o);
    return o;
  },
});
```
### 手写new
```js
function myNew(Func, ...args) {
  // 创建一个空的对象
  let obj = {};
  // 隐式原型链接到该函数的原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Func.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  const ret = Func.call(obj, ...args);
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
}
```
### 手写 instanceof
```js
function _instanceof(A, B) {
  var O = B.prototype; // 取B的显示原型
  // Object.getPrototypeOf(A)
  A = A.__proto__; // 取A的隐式原型
  while (true) {
    //Object.prototype.__proto__ === null
    if (A === null) return false;
    if (O === A)
      // 这里重点：当 O 严格等于 A 时，返回 true
      return true;
    A = A.__proto__;
  }
}
```
## 手写代码部分4
### 手写字符串最长的不重复子串(最长不含重复字符的子字符串)
```js
const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let max = 0;
  while (right <= s.length) {
    let lr = s.slice(left, right);
    // 往右查找的字符是否在截取的子串中出现，出现就是不符合的
    const index = lr.indexOf(s[right]);
    // 往右查找的字符在子串中出现了
    if (index > -1) {
      // 更改起始的查找的位置，也就是子串的左侧截取位置
      left = index + left + 1;
    } else {
      // 如果查找的右侧字符在子串中没有，就截取子串，准备比价最大不重复子串长度
      lr = s.slice(left, right + 1);
      max = Math.max(max, lr.length);
    }
    right++;
  }
  return max;
};
```
### 手写查找最长数组公共前缀(14. 最长公共前缀)
```js
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) 
        return "";
    // 初始化数组公共前缀，就用第一个
    let ans = strs[0];
    // 循环遍历数组中的每一个串
    for(let i =1;i<strs.length;i++) {
        // 每次都要初始化位置
        let j=0;
        for(;j<ans.length && j < strs[i].length;j++) {
            if(ans[j] != strs[i][j])
                break;
        }
        // 每次都更新的前缀
        ans = ans.substr(0, j);
        if(ans === "")
            return ans;
    }
    return ans;
};
```
### 手写判断括号字符串是否有效
```js
const isValid = function(s) {
  // 奇数个括号一定是无效的
  if (s.length % 2 === 1) {
    return false;
  }
  // 自己定义的标志
  const regObj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  // 栈
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const cur = stack.pop();
      // 出栈的括号要是和标志中的不一致就是无效的
      if (s[i] !== regObj[cur]) {
        return false;
      }
    }
  }
  // 栈中的括号还剩的话 一定是无效的
  if (stack.length) {
    return false;
  }
  return true;
};
```
### LRU 算法
- `LRU`（ least recently used）根据数据的历史记录来淘汰数据，重点在于**保护最近被访问/使用过的数据，淘汰现阶段最久未被访问的数据**
- LRU：如果数据最近被访问过,那么将来被访问的几率也更高
- LRU算法主要思想就是假设:长期不被使用的数据，未来被使用到的概率也不大。LRU的主要数据结构是哈希链表。
- 实现思路
    - 采用es6的Map
    - 新数据插入到链表尾部
    - 每当缓存命中（即缓存数据被访问），则将数据移到链表尾部
    - 表满的时候，将链表头部的数据丢弃

```js
class LRUCache {
  constructor(limit) {
    this.limit = limit
    this.cache = new Map()
  }
  get(key) {
    if (this.cache.has(key)) {
      // 访问到的 key 若在缓存中，将其提前
      const temp = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, temp)
      return temp
    }
    return -1
  }

  put(key, value) {
    // 存在则删除
    if (this.cache.has(key)) {
      this.cache.delete(key)
    // 超过缓存长度,淘汰最近没使用的
    } else if (this.cache.size >= this.limit) {
      this.cache.delete(this.cache.keys().next().value)
      console.log(`key:${key}, value: ${value}`)
    }
    // 重新设置
    this.cache.set(key, value)
  }
  toString() {
    console.log('limit：', this.limit)
    console.table(this.cache)
  }
}

const lru = new LRUCache(4)

lru.put(2,2)   // 入 2，剩余容量3
lru.put(3,3)   // 入 3，剩余容量2
lru.put(4,4)   // 入 4，剩余容量1
lru.put(5,5)   // 入 5，已满    从头至尾         2-3-4-5
lru.put(4,4)   // 入4，已存在 ——> 置队尾         2-3-5-4
lru.put(1,1)   // 入1，不存在 ——> 删除队首 插入1  3-5-4-1
lru.get(3)     // 获取3，刷新3——> 置队尾         5-4-1-3

lru.toString()
```
#### 实际运用
在Vue的keep-alive组件中就用了这个算法，我们可以来分析一下keep-alive的原理。
```js
export default {
  name: "keep-alive",
  // 抽象组件属性 ,它在组件实例建立父子关系的时候会被忽略,发生在 initLifecycle 的过程中
  abstract: true, 
  props: {
    // 被缓存组件
    include: patternTypes, 
    // 不被缓存组件
    exclude: patternTypes,
    // 指定缓存大小
    max: [String, Number] 
  },
  created() {
    // 初始化用于存储缓存的 cache 对象
    this.cache = Object.create(null);
    // 初始化用于存储VNode key值的 keys 数组
    this.keys = []; 
  },
  destroyed() {
    for (const key in this.cache) {
      // 删除所有缓存
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted() {
    // 监听缓存（include）/不缓存（exclude）组件的变化
    // 在变化时，重新调整 cache
    // pruneCache：遍历 cache，如果缓存的节点名称与传入的规则没有匹配上的话，就把这个节点从缓存中移除
    this.$watch("include", val => {
      pruneCache(this, name => matches(val, name));
    });
    this.$watch("exclude", val => {
      pruneCache(this, name => !matches(val, name));
    });
  },
  render() {
    // 获取第一个子元素的 vnode
    const slot = this.$slots.default;
    const vnode: VNode = getFirstComponentChild(slot);
    const componentOptions: ?VNodeComponentOptions =
      vnode && vnode.componentOptions;
    if (componentOptions) {
      // name 不在 inlcude 中或者在 exlude 中则直接返回 vnode，否则继续进行下一步
      // check pattern
      const name: ?string = getComponentName(componentOptions);
      const { include, exclude } = this;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode;
      }
      
      const { cache, keys } = this;
      // 获取键，优先获取组件的 name 字段，否则是组件的 tag
      const key: ?string =
        vnode.key == null
          ? // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            componentOptions.Ctor.cid +
            (componentOptions.tag ? `::${componentOptions.tag}` : "")
          : vnode.key;
        
      // --------------------------------------------------
      // 下面就是 LRU 算法了，
      // 如果在缓存里有则调整，
      // 没有则放入（长度超过 max，则淘汰最近没有访问的）
      // --------------------------------------------------
      // 如果命中缓存，则从缓存中获取 vnode 的组件实例，并且调整 key 的顺序放入 keys 数组的末尾
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      }
      // 如果没有命中缓存,就把 vnode 放进缓存
      else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        // 如果配置了 max 并且缓存的长度超过了 this.max，还要从缓存中删除第一个
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }
      
      // keepAlive标记位
      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0]);
  }
};

// 移除 key 缓存
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}

// remove 方法（shared/util.js）
/**
 * Remove an item from an array.
 */
export function remove (arr: Array<any>, item: any): Array<any> | void {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
```
- 在 keep-alive 缓存超过最大时，使用的缓存淘汰算法就是 LRU 算法，它在实现的过程中用到了 cache 对象用于保存缓存的组件实例及 key 值，keys 数组用于保存缓存组件的 key ，当 keep-alive 中渲染一个需要缓存的实例时：
    - 判断缓存中是否已缓存了该实例，缓存了则直接获取，并调整 key 在 keys 中的位置
    - 如果没有缓存，则缓存该实例，若 keys 的长度大于 max （缓存长度超过上限），则移除 keys[0] 缓存
- LRU算法在很多项目和系统中都有使用，比如安卓系统的任务管理界面，会把最近使用的放在最前面，最近最久未使用的任务放到后面。
### 实现LazyMan链式调用
```md
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
```
```js
class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    setTimeout(() => {
      // 把 this.next() 放到调用栈清空之后执行
      this.next();
    }, 0);
  }
  next() {
    const task = this.tasks.shift(); // 取第一个任务执行
    task && task();
  }
  sleep(time) {
    this._sleepWrapper(time, false);
    return this; // 链式调用
  }
  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }
  _sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(task); // 放到任务队列顶部
    } else {
      this.tasks.push(task); // 放到任务队列尾部
    }
  }
  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}
function LazyMan(name) {
  return new _LazyMan(name);
}
```
### 动态规划求解硬币找零问题
```md
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1

示例 1：
输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1

示例 2：
输入: coins = [2], amount = 3
输出: -1
```

```js
const coinChange = function(coins, amount) {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = [];
  // 提前定义已知情况
  f[0] = 0;
  // 遍历 [1, amount] 这个区间的硬币总额
  for (let i = 1; i <= amount; i++) {
    // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
    f[i] = Infinity;
    // 循环遍历每个可用硬币的面额
    for (let j = 0; j < coins.length; j++) {
      // 若硬币面额小于目标总额，则问题成立
      if (i - coins[j] >= 0) {
        // 状态转移方程
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
      }
    }
  }
  // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
  if (f[amount] === Infinity) {
    return -1;
  }
  // 若有解，直接返回解的内容
  return f[amount];
};
```
## 手写代码部分5
### 手写axios
```js
function axios({
  //注意这里使用结构赋值，可以传默认值
  url,
  //默认请求方式为GET
  method = "GET",
  //params用于接受get请求的参数，请求时直接带在url后面
  params = {},
  //data用于接受post方法的参数
  data = {},
}) {
  //返回一个promise对象
  return new Promise((resolve, reject) => {
    // 定义一个字符串保存url后面的拼接参数部分
    let queryString = "";
    // 得到key组成的数组
    // Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
    Object.keys(params).forEach((key) => {
      // 这里使用模板字符串简化代码，同时key是一个变量，用[]而不是点语法取出
      queryString += `${key}=${params[key]}&`;
    });
    // 如果queryString非空，也就是说使用get请求传参，我们直接将参数拼接在url后面
    if (queryString) {
      // substring() 方法用于提取字符串中介于两个指定下标之间的字符。
      // 注意最后一个字符是&，因此我们取length-1个字符
      queryString = queryString.substring(0, queryString.length - 1);
      //用？分割并拼接
      url += "?" + queryString;
    }
    // 创建xhr对象
    const request = new XMLHttpRequest();
    // 打开连接
    request.open(method, url, true);
    // 绑定状态改变的监听（异步，当状态为4时才会继续执行）
    request.onreadystatechange = function () {
      if (request.readyState != 4) {
        return;
      }
      // 发送请求
      // 如果是get请求，已经在url中携带参数了，直接传null
      if (method == "GET") {
        request.send(null);
        //如果是post请求，将data作为参数发送
      } else if (method == "POST") {
        // 添加请求头
        request.setRequestHeader(
          "Content-Type",
          "application/json;charset=utf-8"
        );
        // JSON格式话data并发送请求
        request.send(JSON.stringify(data));
      }
      //这时request会返回status和报文
      // 解构赋值，这里仅返回状态码和报文
      const { status, statusText } = request;
      // 状态码在200到300间代表成功
      if (status >= 200 && status < 300) {
        // 对返回值进行结构赋值
        const response = {
          //  JSON.stringify 将数组,对象转换成 JSON 字符串，然后使用 JSON.parse 将该字符串重新转换成数组，对象。
          data: JSON.parse(request.response),
          status,
          statusText,
        };
        // 执行回调函数并将response作为参数
        resolve(response);
      } else {
        reject(new Error("resquest error status is" + status));
      }
    };
  });
}

```
### 手写jQuery
```js
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
    this.selector = selector;
  }
  get(index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }
  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false);
    });
  }
  // 扩展很多 DOM API
}

// 插件
jQuery.prototype.dialog = function(info) {
  alert(info);
};

// “造轮子”
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector);
  }
  // 扩展自己的方法
  addClass(className) {}
  style(data) {}
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click', () => alert('clicked'))
```
### 手写字符串模板
```js
function render(template, data) {
  let computed = template.replace(/\{\{(\w+)\}\}/g, function(match, key) {
    return data[key];
  });
  return computed;
}



function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) {
    // 判断模板里是否有模板字符串
    const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段，一个一个查找
    template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
    return render(template, data); // 递归的渲染并返回渲染后的结构,递归的查找
  }
  return template; // 如果模板没有模板字符串直接返回
}

// 测试验证
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let person = {
  name: "布兰",
  age: 12,
};
render(template, person); // 我是布兰，年龄12，性别undefined
```
### 手写将虚拟Dom转化为真实Dom（类似的递归题-必考）
```js
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作 这一步是关键
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}
```
### 手写发布订阅模式
```js
class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter((item) => {
      return item !== callBack;
    });
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    // 封装执行函数，执行完就删除
    function fn() {
      callBack();
      this.off(type, fn);
    }
    // 订阅
    this.on(type, fn);
  }
  // 触发事件
  emit(type, ...rest) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, rest));
  }
}
```
### 手写Vue.Reactive
```js
// Dep module
class Dep {
  static stack = [];
  static target = null;
  deps = null;

  constructor() {
    this.deps = new Set();
  }

  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target);
    }
  }

  notify() {
    this.deps.forEach((w) => w.update());
  }

  static pushTarget(t) {
    if (this.target) {
      this.stack.push(this.target);
    }
    this.target = t;
  }

  static popTarget() {
    this.target = this.stack.pop();
  }
}

// reactive
function reactive(o) {
  if (o && typeof o === "object") {
    Object.keys(o).forEach((k) => {
      defineReactive(o, k, o[k]);
    });
  }
  return o;
}

function defineReactive(obj, k, val) {
  let dep = new Dep();
  Object.defineProperty(obj, k, {
    get() {
      dep.depend();
      return val;
    },
    set(newVal) {
      val = newVal;
      dep.notify();
    },
  });
  if (val && typeof val === "object") {
    reactive(val);
  }
}

// watcher
class Watcher {
  constructor(effect) {
    this.effect = effect;
    this.update();
  }

  update() {
    Dep.pushTarget(this);
    this.value = this.effect();
    Dep.popTarget();
    return this.value;
  }
}

// 测试代码
const data = reactive({
  msg: "aaa",
});

new Watcher(() => {
  console.log("===> effect", data.msg);
});

setTimeout(() => {
  data.msg = "hello";
}, 1000);
```
### 事件总线EventEmitter（发布订阅模式）
```js
function EventEmitter() {
  this.events = new Map();
}

// 需要实现的一些方法：
// addListener、removeListener、once、removeAllListeners、emit
// 添加订阅、移除订阅、执行一次、移除订阅、执行订阅

// 模拟实现addlistener方法
const wrapCallback = (fn, once = false) => ({ callback: fn, once });
EventEmitter.prototype.addListener = function(type, fn, once = false) {
  const hanlder = this.events.get(type);
  if (!hanlder) {
    // 没有type绑定事件
    this.events.set(type, wrapCallback(fn, once));
  } else if (hanlder && typeof hanlder.callback === "function") {
    // 目前type事件只有一个回调
    this.events.set(type, [hanlder, wrapCallback(fn, once)]);
  } else {
    // 目前type事件数>=2
    hanlder.push(wrapCallback(fn, once));
  }
};


// 模拟实现removeListener
EventEmitter.prototype.removeListener = function(type, listener) {
  const hanlder = this.events.get(type);
  if (!hanlder) return;
  if (!Array.isArray(this.events)) {
    if (hanlder.callback === listener.callback) this.events.delete(type);
    else return;
  }
  for (let i = 0; i < hanlder.length; i++) {
    const item = hanlder[i];
    if (item.callback === listener.callback) {
      hanlder.splice(i, 1);
      i--;
      if (hanlder.length === 1) {
        this.events.set(type, hanlder[0]);
      }
    }
  }
};


// 模拟实现once方法
EventEmitter.prototype.once = function(type, listener) {
  this.addListener(type, listener, true);
};


// 模拟实现emit方法
EventEmitter.prototype.emit = function(type, ...args) {
  const hanlder = this.events.get(type);
  if (!hanlder) return;
  if (Array.isArray(hanlder)) {
    hanlder.forEach((item) => {
      item.callback.apply(this, args);
      if (item.once) {
        this.removeListener(type, item);
      }
    });
  } else {
    hanlder.callback.apply(this, args);
    if (hanlder.once) {
      this.events.delete(type);
    }
  }
  return true;
};

// 模拟实现全部订阅移除
EventEmitter.prototype.removeAllListeners = function(type) {
  const hanlder = this.events.get(type);
  if (!hanlder) return;
  this.events.delete(type);
};
```
### 手写防抖节流1
```js
// 防抖
function debounce(fn, delay = 300) {
  //默认300毫秒
  let timer;
  return function() {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args); // 改变this指向为调用debounce所指的对象
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  debounce(() => {
    console.log(111);
  }, 1000)
);

// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log(111);
  }, 1000)
);
```
### 手写防抖节流2
针对高频的触发的函数，我们一般都会思考通过节流或者防抖去实现性能上的优化。

节流实现原理是通过定时器以和时间差做判断。定时器有延迟的能力，事件一开始不会立即执行，事件结束后还会再执行一次；而时间差事件一开始就立即执行，时间结束之后也会立即停止。
```js
//防抖
function debounce(handle, delay) {
  var timer = null;
  return function() {
    var _self = this,
      _args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      handle.apply(_self, _args);
    }, delay);
  };
}

//节流
function throttle(handler, wait) {
  var lastTime = 0;
  return function(e) {
    var nowTime = new Date().getTime();
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }
  };
}

function throttle(fn, gapTime) {
  let timer = null;
  return function() {
    var _self = this,
      _args = argument;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(_self, _args);
      timer = null;
    });
  };
}
```
### 书写防抖节流3
```js
// 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。
// 简单版：函数内部支持使用 this 和 event 对象；
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}
// 最终版：除了支持 this 和 event 外，还支持以下功能：
// 支持立即执行；
// 函数可能有返回值；
// 支持取消功能；
function debounce(func, wait, immediate) {
  var timeout, result;

  var debounced = function() {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
```

```js
// 触发高频事件，且 N 秒内只执行一次。
// 简单版：使用时间戳来实现，立即执行一次，然后每 N 秒执行一次。
function throttle(func, wait) {
  var context, args;
  var previous = 0;

  return function() {
    var now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}

// 最终版：支持取消节流；另外通过传入第三个参数，options.leading 来表示是否可以立即执行一次，opitons.trailing 表示结束调用的时候是否还要执行一次，默认都是 true。注意设置的时候不能同时将 leading 或 trailing 设置为 false。
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
}
```
### 书写防抖节流4
1. 函数防抖(debounce)
   - **概念：** `在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。`
   - **生活中的实例：** `如果有人进电梯（触发事件），那电梯将在10秒钟后出发（执行事件监听器），这时如果又有人进电梯了（在10秒内再次触发该事件），我们又得等10秒再出发（重新计时）。
   - **生活中的实例：** 我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。
   - **事件响应函数在一段规定时间（前/后）才执行。如果在规定时间内，再次触发，重新计算时间。**
   - **触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间**
   - **防抖动是将多次执行变为最后一次执行**
   - **函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。**
2. 函数节流(throttle)
   - **概念：** 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
   - **生活中的实例：** 我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。
   - **高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率**
   - **节流是将多次执行变成每隔一段时间执行。**
   - **函数节流是指一定时间内 js 方法只跑一次。**

函数防抖和函数节流是**在时间轴上控制函数的执行次数**。防抖可以类比为`电梯不断上乘客`,节流可以看做`幻灯片限制频率播放电影`。


- 对于函数防抖，有以下几种应用场景：
    - 防止表单多次提交。
    - 对于输入框连续输入进行 AJAX 验证时，用函数防抖能有效减少请求次数。搜索框输入查询（监听输入框输入内容，设定每隔一段时间访问接口。
    - 判断`scroll`是否滑到底部，`滚动事件`+`函数防抖`
    - 浏览器窗口缩放时，resize 事件。
    - 手机号，邮箱验证输入检测
    - 总的来说，适合多次事件**一次响应**的情况
```js
// 包含立即执行
function debounce(fn, wait = 200, immediate = false) {
  let timer = null,
    isEnd = true, // 默认后执行  用变量来判断先后执行
    result;
  let debounced = function(...args) {
    if (timer) clearTimeout(timer);
    if (immediate) {
      // 立即执行
      // 改变this指向
      isEnd && (result = fn.apply(this, args));
      isEnd = false;
    }
    // 后执行
    timer = setTimeout(() => {
      !immediate && (result = fn.apply(this, args));
      isEnd = true;
    }, wait);
    return result;
  };
  debounced.cancel = function() {
    if (timer) clearTimeout(timer);
    timer = null;
  };
  return debounced;
}

//解决函数异步问题
//  配合async 和  awit使用
function debounce(fn, wait, immediate) {
  let timer = null,
    result;
  let debounced = function(...args) {
    // 使用Promise
    return new Promise((res) => {
      if (timer) clearInterval(timer);
      if (immediate) {
        // 立即执行
        if (!timer) {
          result = fn.apply(this, args);
          res(result);
        }
        //当我们提交失败了怎么办（哭），在设定的时间间隔内，将timer设置为null, 过了设定的时间间隔，可以再次触发提交按钮的立即执行，这才是完整的。
        timer = setTimeout(() => {
          timer = null;
        }, wait);
      } else {
        timer = setTimeout(() => {
          result = fn.apply(this, args);
          res(result);
        }, wait);
      }
    });
  };
  debounced.cancel = function() {
    if (timer) clearTimeout(timer);
    timer = null;
  };
  return debounced;
}

var fn = function() {
  console.log("boom");
};

setInterval(debounce(fn, 500), 1000); // 第一次在1500ms后触发，之后每1000ms触发一次

setInterval(debounce(fn, 2000), 1000); // 不会触发一次（我把函数防抖看出技能读条，如果读条没完成就用技能，便会失败而且重新读条）
```


- 对于函数节流，有如下几个场景：
    - 游戏中的刷新率
    - DOM 元素拖拽
    - Canvas 画笔功能
    - 总的来说，适合**大量事件**按时间做**平均**分配触发。
```js
function throttle(fn, gapTime) {
  let timer = null;
  return function() {
    var _self = this,
      _args = argument;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(_self, _args);
      timer = null;
    });
  };
}

let fn = () => {
  console.log("boom");
};

setInterval(throttle(fn, 1000), 10);
```

