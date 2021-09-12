# 你不知道的JavaScript中卷
## 类型
对语言引擎和开发人员来说，*类型*是值的内部特征，它定义了值的行为，以使其区别于其他值。
### 内置类型
JavaScript的七种内置类型：
- 空值（null）
- 未定义（undefined）
- 布尔值（boolean）
- 数字（number）
- 字符串（string）
- 对象（object）
- 符号（symbol）
  **除了对象之外，其他统称为“基本类型”**
  我们可以用`typeof`运算符查看值的类型，它返回的是类型的字符串值。
```js
typeof undefined === 'undefined' //true
typeof true === 'boolean' //true
typeof 42 === 'number' //true
typeof "42" === 'string' //true
typeof { life:42 } === 'object' //true
typeof Symbol() === 'symbol' //true
typeof null === 'object' //true
typeof [1,2,3] === 'object' //true
typeof function(){} === 'function' //true
```
```js
var a = null
(!a && typeof a === 'object') //true


//函数不仅是对象，还可以拥有属性
function a(b,c){

}
a.length  //函数对象的length属性是其声明的参数的个数。
```
### undefined 和 undeclared
**变量在未持有值的时候为`undefined`**
```js
var a;
typeof a;//"undefined"
```
**已在作用域中声明但还没有赋值的变量，是undefined的。相反，还没有在作用域中声明过的变量，是undeclared**
```js
var a
a //undefined
b //ReferenceErro:b is not defined
```
可以使用`typeof`的安全防范机制（阻止报错）来检查`undeclared`变量，有时是个不错的办法。

## 值
### 数组
```js
var a = [1,'2',[3]]
a.length  //3
a[0] === 1 //true
a[2][0] === 3 //true



var a = []
a.length //0
a[0] = 1
a[1] = '2'
a[2] = [3]
a.length //3
```
如果字符串键值能够被强制类型转换为十进制数字的话，它就会被当作数字索引来处理。
```js
var a = []
a['13'] = 42
a.length //14
```
**类数组**
```js
var arr = Array.prototype.slice.call(arguments)

var arr = Array.from(arguments)
```
### 字符串
```js
var a = "foo"
var b = ['f','o','o']
```
### 数字
JavaScript只有一种数值类型：`number(数字)`，包括“整数”和带小数的十进制数。
JavaScript中的“整数”就是没有小数的十进制数。所以42.0就等于42

```js
var a = 42
var b = 42.3

var a = 0.42
var b = .42

var a = 42.0
var b = 42.

var a = 5E10
a //500000000
a.toExponential() //5e+10

var b = a * a
b //2.5e+21

var c = 1/as
c //2e-11


var a = 42.59
//指定小数部分的显示位数
a.toFixed(0) //43
a.toFixed(4) //42.5900
(42).toFixed(3) //42.000
0.42.toFixed(3) //0.420
42..toFixed(3)  //42.000

var a = 42.59
//指定有效数位的显示位数
a.toPrecision(1) //4e+1
a.toPrecision(2) //43
a.toPrecision(6) //42.5900
```

### 特殊值

**不是值的值**

undefined 类型只有一个值，即 undef ined。nuL 类型也只有一个值，即 nu。它们的名称既是类型也是值

undefined 和 nuLL 常被用来表示“空的”值或“不是值”的值。二者之间有一些细微的差别。例如

- null 指空值（empty value)

- undefined 指没有值（missing value)

或者

- undefined 指从未赋值

- null指曾赋过值，但是目前没有值

null 是一个特殊关键字，不是标识符，我们不能将其当作变量来使用和赋值。然而  undefined 却是一个标识符，可以被当作变量来使用和赋值。

### 特殊数组

1. **不是数字的数字**

如果数学运算的操作数不是数字类型（或者无法解析为常规的十进制或十六进制数字就无法返有效的数字，这种情况下返回值为 NaN。

NaN 意指“不是一个数字”（not a number），这个名字容易引起误会，后面将会提到。将它理解为“无效数值”“失败数值”或者“坏数值”可能更准确些。

NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”

有人也许认为如果要检查变量的值是否为 NaN 可以直接和 NaN 进行比较，就像比较和 undefined 那。实则不然

```js
var a = 2/'foo'   //NaN
typeof a === 'number'  //true



var a = 2/'foo'
a == NaN  //false
a === NaN //false


//最好的检测
var a = 2/'foo'
var b = 'foo'

Number.isNaN(a)  //true
Number.isNaN(b)  //false
```

## 原生函数
常用的原生函数有：
- String()
- Number()
- Boolean()
- Array()
- Object()
- Function()
- RegExp()
- Date()
- Error()
- Symbol()

```js
// 构造函数创建出来的是封装了基本类型的值的封装对象
var s = new String("Hello World!") 
console.log(s.toString()) //"Hello World!"

typeof a //是“object” 不是 “string”

a instanceof String //true

Object.prototype.toString.call(a) //"[object String]"
```
### 内部属性[[Class]]
所有`typeof`返回值为`object`的对象，都包含一个内部属性`[[Class]]`。这个属性无法直接访问。
一般通过`Object.prototype.toString(..)`

```js
Object.prototype.toString.call([1,2,3]) //"[object Array]"
Object.prototype.toString.call(/regex-literal/i) //"[object Regex]"

Object.prototype.toString.call(null) //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"

Object.prototype.toString.call("abc") //"[object String]"
Object.prototype.toString.call(42) //"[object Numeber]"
Object.prototype.toString.call(true) //"[object Boolean]"
```
### 拆封
如果想要得到拆封对象中的基本类型值，可以使用`valueOf()`函数：
```js
var a = new String('abc')
var b = new Number(42)
var c = new Boolean(true)

a.valueOf() //abc
b.valueOf() //42
c.valueOf() //true
```
在需要用到封装对象中的基本类型值的地方会发生隐式拆封。具体过程（即强制类型转换）。
```js
var a = new String('abc')
var b = a + ""

typeof a //object
typeof b //string
```

构造函数`Array(..)`不要求必须带`new`关键字。不带时，它会被自动补上，因此`Array(1,2,3)`和`new Array(1,2,3)`的效果是一样的。

Array 构造函数只帯一个数字参数的时候，该参数会被作为数组的预设长度（length），而非只充当数组中的一个元素。


我们将包含至少ー个“空単元”的数组称为“稀疏数组”。

我们通过下述方式来创建包含`undefined`单元(而非“空单元”)的数组“
```js
var a = Array.apply(null,{ length : 3})
a //[undefined,undefined,undefined]
```
Array 构造函数只帯一个数字参数的时候，该参数会被作为数组的预设长度（length），而非只充当数组中的一个元素

我们将包含至少ー个“空単元”的数组称为“稀疏数组”。

### 小结

对于单标量基本类型值，比如“abc“，如果要访问它的 Length 属性或 String. Prototype 方法，Javascript 引키擎会自动对该值进行封装（即用相应类型的封装对象来包装它）来实现对这些属性和方法的访问。

## 强制类型转换
### 值类型转换
将值从一种类型转换为另一种类型通常称为`类型转换（type casting）`，这是显式的情况；隐式的情况称为`强制类型转换（coercion）`
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911101628.png)

### 抽象值操作
1. ToString
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911102115.png)
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911102237.png)
2. ToNumber
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911102338.png)
3. ToBoolean
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911102430.png)
```js
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false


Boolean(new Boolean(false))// Boolean对象会转成true
Boolean([]) // 空数组会转成true
Boolean({}) // 空对象会转成true


var obj = new Boolean(false);
console.log(obj && true);//true
console.log(true && obj);//false
```
### 显示强制类型转换
显式强制类型转换是那些显而易见的类型转换，很多类型转换都属于此列。
1. 字符串和数字之间的显示转换
   字符串和数字之间的转换是通过 `String (..)` 和` Number (..)` 这两个内建函数（原生构造函数）来实现的，请注意它们前面没有` new `关键字，并不创建封装对象。
```js
var a = 42
var b = String(a)

var c = '3.14'
var d = String(c)

b //"42"
d //3.14
```
String (..) 遵循前面讲过的 ToString 规则，将值转换为字符串基本类型。Number（）遵循前面讲过的 ToNumber 规则，将值转换为数字基本类型。
```js
var a = 42
var b = a.toString()

var c = '3.14'
var d = +c

b //"42"
d //3.14
```
a.toString（）是显式的（toString”意为“to a string），不过其中涉及隐式转换。因为  toString（）对 42 这样的基本类型值不适用，所以 Javascript 引擎会自动为 42 创建一个封装对象，然后对该对象调用 toString（）。这里显式转换中含有隐式转换。

2. 日期转换为数字
   元运算符+的另一个常见用途是将日期（Date）对象强制类型转换为数字，返回结果为 Unix 时间戳，以微秒为单位（从 1970 年 1 月 1 日 00:00:00UTC 到当前时间）
```js
var a = +new Date()  //1631404558308

var a = new Date(...).getTime() //获取指定时间时间戳

var a = new Date.now()
```

3. 奇特运算符 ~
   一个常被人忽视的地方是~运算符（即字位操作“非”）相关的强制类型转换。
```js
0 | -0 //0
0 | NaN //0
0 | Infinity //0
0 | -Infinity //0
```
在-(x+1) 中唯一能够得到 0（或者严格说是-0) 的 x 值是-1。也就是说如果 x 为-1 时，和一些数字值在一起会返回假值 0, 其他情况则返回真值。
```js
~42  = -42
~-1 = 0
```

4.字位截除
一些开发人员使用`~~`来截除数字值的小数部分。对`~~`我们要多加注意。首先它只适用于 32 位数字。
```js
Math.floor( -49.6 ) //-50
~~-49 //-49
```
x能将值截除为个 32 位整数，X | 0 也可以，而且看起来还更筒洁。

### 显示解析数字字符串
解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字。但解析和转换两者之间还是有明显的差别。
```js
var a = '42'
var b = '42px'

Number(a) //42
parseInt(a) //42


Number(b) //NaN
parseInt(b) //42
```
解析允许字符串中含有非数字字符，**解析按从左到右的顺序，如果遇到非数字字符就停止**。而转换不允许出现非数字字符，否则会失败并返回 NaN。

解析和转换之间不是相互替代的关系。它们虽然类似，但各有各的用途。如果字符串右边的非数字字符不影响结果，就可以使用解析。而转换要求字符串中所有的字符都是数字，像“42px“这样的字符串就不行。

不要忘了 parseInt (..) 针对的是字符串值。向 parseInt (..) 传递数字和其他类型的参数是没有用的，比如 true、function () {...}和【1,2,3]。

即如果没有第二个参数来指定转换的基数（又称为 radix), parseInt (，）会根据字符串的第一个字符来自行决定基数。如果第一个字符是x或者X，则转换为十六进制数字。如果是 0, 则转换为八进制数字。

从 ES5 开始 parseInt（）默认转换为十进制数，除非另外指定。

### 显示转换为布尔值
现在我们来看看从非布尔值强制类型转换为布尔值的情况。

与前面的 String (..) 和 Number (..) 一样，Boolean (..)（不带 new）是显式的 TBboolean 强制类型转换。

```js
var a = "0"
var b = []
var c = {}

var d = ""
var e = 0
var f = null
var g

Boolean(a) //true
Boolean(b) //true
Boolean(c) //true

Boolean(d) //false
Boolean(e) //false
Boolean(f) //false
Boolean(g) //false
```
和前面讲过的+类似，一元运算符！显式地将值强制类型转换为布尔值。
```js
var a = "0"
var b = []
var c = {}

var d = ""
var e = 0
var f = null
var g

!!a //true
!!b //true
!!c //true

!!d //false
!!e //false
!!f //false
!!g //false
```
建议使用 Boolean（）和！！来进行显式转换以便让代码更清晰易读。

### 隐式强制类型转换

