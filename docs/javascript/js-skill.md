# JavaScript技巧

## 日常博客and公众号

### 从数组中过滤到虚值

像 `0`, `undefined`, `null`, `false`, `""`, `''`这样的假值可以通过下面的技巧轻易地过滤掉。

```js
const array = [3, 0, 6, 7, '', false];
array.filter(Boolean);  // 输出(3) [3, 6, 7]
```

### 利用逻辑运算符处理需要条件判断的情况

```js
function doSomething(arg1){ 
    arg1 = arg1 || 10; 
// 如果arg1没有值，则取默认值 10
}

let foo = 10;  
foo === 10 && doSomething(); 
// 如果 foo 等于 10，刚执行 doSomething();
// 输出: 10
```

### 去除数组重复值

```js
const array  = [5,4,7,8,9,2,7,5];
array.filter((item,idx,arr) => arr.indexOf(item) === idx);
// or
const nonUnique = [...new Set(array)];
// Output: [5, 4, 7, 8, 9, 2]
```

###  创建一个计数器对象或 Map

大多数情况下，可以通过创建一个对象或者Map来计数某些特殊词出现的频率。

```js
let string = 'kapilalipak';

const table={}; 
for(let char of string) {
  table[char]=table[char]+1 || 1;
}
// 输出 {k: 2, a: 3, p: 2, i: 2, l: 2}


const countMap = new Map();
  for (let i = 0; i < string.length; i++) {
    if (countMap.has(string[i])) {
      countMap.set(string[i], countMap.get(string[i]) + 1);
    } else {
      countMap.set(string[i], 1);
    }
  }
// 输出 Map(5) {"k" => 2, "a" => 3, "p" => 2, "i" => 2, "l" => 2}
```

### 合并两个对象

```js
const user = { 
 name: 'Kapil Raghuwanshi', 
 gender: 'Male' 
 };
const college = { 
 primary: 'Mani Primary School', 
 secondary: 'Lass Secondary School' 
 };
const skills = { 
 programming: 'Extreme', 
 swimming: 'Average', 
 sleeping: 'Pro' 
 };

const summary = {...user, ...college, ...skills};
```

### 可选链

```js
const user = {
  employee: {
    name: "Kapil"
  }
};
user.employee?.name;
// Output: "Kapil"
user.employ?.name;
// Output: undefined
user.employ.name
// 输出: VM21616:1 Uncaught TypeError: Cannot read property 'name' of undefined
```

### 双问号

概念是 当左边的值为 null 或者 undefined 时，就返回右边的值

```js
const foo = null ?? 'my school';
// 输出: "my school"

const baz = 0 ?? 42;
// 输出: 0
```

### 将十进制转换为二进制或十六进制

```js
const num = 10;

num.toString(2);
// 输出: "1010"
num.toString(16);
// 输出: "a"
num.toString(8);
// 输出: "12"
```

### 单行的回文数检查

```js
function checkPalindrome(str) {
  return str == str.split('').reverse().join('');
}
checkPalindrome('naman');
// 输出: true
```

## 常用的前端JavaScript方法封装

### 输入一个值，返回其数据类型

```js
function type(para){
  return Object.prototype.toString.call(para)
}
```

### 数组去重

```js
function unique1(arr){
  //先检测是否是数组
  return [...new Set(arr)]
}


function unique2(arr){
  var obj = {}
  return arr.filter(ele => {
    if(!obj[ele]){
      obj[ele] = true
      return true
    }
  })
}


function unique3(arr){
  var result = []
  arr.forEach(ele => {
    if(result.indexOf(ele) === -1){
      result.push(ele)
    }
  })
  return result
}
```

### 字符串去重

```js
String.prototype.unique = function(){
  var obj = {},
      str = '',
      len = this.length;
  for(var i = 0;i < len;i++){
    if(!obj[this[i]]){
      str += this[i]
      ogj[this[i]] = true
    }
  }
}


function uniq(str) {
    return str.replace(/(\w)\1+/g, '$1')
}
```

### reverse底层原理和扩展

```js
// 改变原数组
Array.prototype.myReverse = function () {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        var temp = this[i];
        this[i] = this[len - 1 - i];
        this[len - 1 - i] = temp;
    }
    return this;
}
```

### 找出字符串第一次只出现一次的字母

```js
String.prototype.firstAppear = function () {
  //使用对象为数据统计
    var obj = {},
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (obj[this[i]]) {
            obj[this[i]]++;
        } else {
            obj[this[i]] = 1;
        }
    }
    for (var prop in obj) {
       if (obj[prop] == 1) {
         return prop;
       }
    }
}
```

### 找元素的第n级父元素

```js
function parents(ele, n) {
    while (ele && n) {
        ele = ele.parentElement ? ele.parentElement : ele.parentNode;
        n--;
    }
    return ele;
}
```

### 返回元素的第n个兄弟节点 ？？？？？？？

```js
function retSibling(e, n) {
    while (e && n) {
        if (n > 0) {
            if (e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
            }
            n--;
        } else {
            if (e.previousElementSibling) {
                e = e.previousElementSibling;
            } else {
                for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSibling);
            }
            n++;
        }
    }
    return e;
}
```

### 判断元素有没有子元素

```js
function hasChildren(e) {
    var children = e.childNodes,
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            return true;
        }
    }
    return false;
}
```

### 获得滚动条的滚动距离

```js
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
```

### 获取视口的尺寸

```js
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}
```

### 获取任一元素的任意属性

```js
function getStyle(elem, prop) {
    return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]
}
```

### 绑定、解绑事件的兼容代码；取消冒泡的兼容代码

```js
function addEvent(elem, type, handle) {
    if (elem.addEventListener) { //非ie和非ie9
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) { //ie6到ie8
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}


function removeEvent(elem, type, handle) {
    if (elem.removeEventListener) { //非ie和非ie9
        elem.removeEventListener(type, handle, false);
    } else if (elem.detachEvent) { //ie6到ie8
        elem.detachEvent('on' + type, handle);
    } else {
        elem['on' + type] = null;
    }
}


function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}
```

### 检查字符串是否是回文

```js
function isPalina(str) {
    if (Object.prototype.toString.call(str) !== '[object String]') {
        return false;
    }
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str)
    return (str == str.split('').reverse().join(''))
}
```

### 运动函数、弹性运动

```js
function animate(obj, json, callback) {
    clearInterval(obj.timer);
    var speed,
        current;
    obj.timer = setInterval(function () {
        var lock = true;
        for (var prop in json) {
            if (prop == 'opacity') {
                current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
            } else {
                current = parseInt(window.getComputedStyle(obj, null)[prop]);
            }
            speed = (json[prop] - current) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (prop == 'opacity') {
                obj.style[prop] = (current + speed) / 100;
            } else {
                obj.style[prop] = current + speed + 'px';
            }
            if (current != json[prop]) {
                lock = false;
            }
        }
        if (lock) {
            clearInterval(obj.timer);
            typeof callback == 'function' ? callback() : '';
        }
    }, 30)
}



function ElasticMovement(obj, target) {
    clearInterval(obj.timer);
    var iSpeed = 40,
        a, u = 0.8;
    obj.timer = setInterval(function () {
        a = (target - obj.offsetLeft) / 8;
        iSpeed = iSpeed + a;
        iSpeed = iSpeed * u;
        if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
            console.log('over')
            clearInterval(obj.timer);
            obj.style.left = target + 'px';
        } else {
            obj.style.left = obj.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

### 获取url中的参数

```js
function getWindonHref() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    if (args[0] === sHref) {
        return '';
    }
    var hrefarr = args[1].split('#')[0].split('&');
    var obj = {};
    for (var i = 0; i < hrefarr.length; i++) {
        hrefarr[i] = hrefarr[i].split('=');
        obj[hrefarr[i][0]] = hrefarr[i][1];
    }
    return obj;
}
```

### 遍历DOM树

```js
// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
    callback(element);
    var list = element.children;
    for (var i = 0; i < list.length; i++) {
        traverse(list[i], callback);
    }
}
```

### 原生js封装ajax

```js
function ajax(method, url, callback, data, flag) {
    var xhr;
    flag = flag || true;
    method = method.toUpperCase();
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(2)
            callback(xhr.responseText);
        }
    }

    if (method == 'GET') {
        var date = new Date(),
        timer = date.getTime();
        xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
        xhr.send()
        } else if (method == 'POST') {
        xhr.open('POST', url, flag);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}
```



