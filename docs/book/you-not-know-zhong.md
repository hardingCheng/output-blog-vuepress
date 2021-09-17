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
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210914080158.png)
### 值类型转换
将值从一种类型转换为另一种类型通常称为`类型转换（type casting）`，这是显式的情况；隐式的情况称为`强制类型转换（coercion）`
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911101628.png)

### 抽象值操作(ToString、ToNumber、ToBoolean)
1. ToString
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911102115.png)
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911102237.png)
2. ToNumber
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911102338.png)
   前面介绍过`""、"\n"（或者" "等其他空格组合）`等空字符串被 ToNumber 强制类型转换为 0。
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
*隐式强制类型转换指的是那些隐蔽的强制类型转换*，副作用也不是很明显。
#### 字符串和数字之间的隐式强制类型转换
```js
var a = '42'
var b = '0'

var c = 42
var d = 0

a + b //'420'
c + d //42


var a = [1,2]
var b = [3,4]
a + b //"1,23,4"
```


数字和空字符串““相+来将其转换为字符串：
```js
var a = 42
var b = a + ""

b //"42"
```


（隐式）和前面的 String (a)（显式）之间有一个细微的差别需要注意。根据 a+ 会对 a 调用valueOf（）方法，然后通过 ToString 抽象 ToPrinitive 抽象操作规则，a+“” 操作将返回值转换为字符串。而 String (a）则是直接调用 ToString（）。

```js
var a = {
    valueOf:function(){ return 42 },
    toString:function(){ return 4 }
}
a + “”  //“42”
String(a)  //"4"
```

从字符串强制类型转换为数字的情况：
```js
var a = "3.14"
var b = a - 0
b //3.14

var a = [3]
var b = [1]
a - b //2
```
-是数字减法运算符，因此 a - 0 会将 a 强制类型转换为数字。也可以使用 a * 1 和 a / 1, 因为这两个运算符也只适用于数字，只不过这样的用法不太常见。

#### 布尔值到数字的隐式强制类型转换
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210913110730.png)

#### 隐式强制类型转换为布尔值
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210913110836.png)
以上情况中，非布尔值会被隐式强制类型转换为布尔值，遵循前面介绍过的 ToBoolean 抽象操作规则。

#### || 和 &&
因为和其他语言不同，在 JavaScript 中它们返回的并不是布尔值。它们的返回值是两个操作数中的一个（且仅一个）。即选择两个操作数中的一个，然后返回它的值。

&&和||运算符的返回值并不一定是布尔类型，而是两个操作数其中一个的值。

```js
var a = 42
var b = "abc"
var c = null

a || b      //42
a && b      //"abc"

c || b      //"abc"
c && b      // null
```
在 JavaScript 中它们返回的并不是布尔值。它们的返回值是两个操作数中的一个（且仅一个）.

||和&&首先会对第一个操作数（a 和 c）执行条件判断，如果其不是布尔值（如上例）就先进行 ToBoolean 强制类型型转换，然后再执行条件判断。

对于||来说，如果条件判断结果为 true 就返回第一个操作数（a 和 c）的值，如果为 false 就返回第二个操作数（b）的值。

&&则相反，如果条件判断结果为 true 就返回第二个操作数（b）的值，如果为 false 就返回第一个操作数（a 和 c）的值。

||和&&返回它们其中一个操作数的值，而非条件判断的结果（其中可能涉及强制类型转换）。c&&b 中 c 为 null，是一个假值，因此&&表达式的结果是 null（即 c 的值），而非条件判断的结果 false。


#### 符号的强制类型转换
但 ES6 中引入了符号类型，它的强制类型转换有一个坑，在这里有必要提一下。ES6 允许从符号到字符串的显式强制类型转换，然而隐式强制类型转换会产生错误。

```js
var s1 = Symbol("cool")
String(s1)  // "Symbol(cool)"

var s2 = Symbol("not cool")
s2 + ""     //TypeError
```

符号不能够被强制类型转换为数字（显式和隐式都会产生错误），但可以被强制类型转换为布尔值（显式和隐式结果都是 true）。

### 宽松相等和严格相等
宽松相等（loose equals) ==和严格相等（strict equals) ===都用来判断两个值是否“相等”，但是它们之间有一个很重要的区别，特别是在判断条件上。

==检查值是否相等，===检查值和类型是否相等。==允许在相等比较中进行强制类型转换，而===不允许。

#### 相等比较操作的性能
有人觉得==会比===慢，实际上虽然强制类型转换确实要多花点时间，但仅仅是微秒级（百万分之一秒）的差别而已。
如果进行比较的两个值类型相同，则==和===使用相同的算法，所以除了 JavaScript 引擎！在实现上的细微差别之外，它们之间并没有什么不同。

#### 抽象相等
非常规的情况需要注意：
- NaN不等于NaN
- +0等于-0
- 如果进行比较的两个值类型相同，则==和===使用相同的算法，所以除了 JavaScript 引擎！在实现上的细微差别之外，它们之间并没有什么不同。
- 
==在比较两个不同类型的值时会发生隐式强制类型转换，会将其中之一或两者都转换为相同的类型后再进行比较。

#### 字符串和数字之间的相等比较
```js
var a = 42
var b = "42"

a === b     //false
a == b      //true
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210913122920.png)

#### 其他类型和布尔类型之间的相等比较
==最容易出错的一个地方是 true 和 false 与其他类型之间的相等比较。
```js
var a = "42"
var b = true

a == b //false
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210913123126.png)
**==对不同的类型组合怎样处理。：两边的布尔值会被强制类型转换为数字。**
```js
var a = "42"

//不要这样用，条件判断不成立
if(a == true) {
    // ...
}
//不要这样用，条件判断不成立
if(a === true) {
    // ...
}
//这样的显示用法没问题
if(a) {
    // ...
}
//这样的显示用法更好
if(!!a) {
    // ...
}
//这样的显示用法很好
if(Boolean(a)) {
    // ...
}
```
**避免了==true 和==false（也叫作布尔值的宽松相等）之后我们就不用担心这些坑了。**

#### null和undefined之间的相等比较
null和undefined之间的 == 也涉及隐式强制类型转换。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210913140026.png)
```js
var a = null
var b 

a == b     //true
a == null  //true
b == null  //true

a == false  //false
b == false  //false
a == ""    //false
b == ""    //false
a == 0     //false
b == 0     //false
```

```js
var a = doSomethig()
if(a == null){
    //..
}
```
条件判断 `a == null` 仅在 `doSomething（`）返回非 `null` 和 `undefined` 时才成立，除此之外其他值都不成立，包括 9、false 和““这样的假值。`
`a == null` 这样的隐式强制类型转换在保证安全性的同时还能提高代码可读性。

#### 对象和非对象之间的相等比较
关于对象(对象/函数/数组)和标量基本类型(字符串/数字/布尔值)之间的相等比较。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210913141451.png)
这里只提到了字符串和数字，没有布尔值。布尔值会先被强制类型转换为数字。
```js
var a = 42
var b = [ 42 ]

a == b //true
```
`[ 42 ]` 首先调用 `ToPromitive` 抽袖象操作,返回“42“，变成`“42" == 42`, 然后又变成 `42 == 42`, 最后二者相等。

介绍过的 ToPromitive 抽象操作的所有特性（如 `toString（`）、`valueOf ()`)
因为 b 通过 ToPromitive 进行强制类型转换，并返回标量基本类型值“abc“，与 a 相等。


```js
var a = null
var b = Object(a) //和Obejct()一样
a == b //false


var c = undefined
var d = Object(c) //和Obejct()一样
c == d //false

var e = NaN
var f = Object(e) //和Obejct()一样
e == f //false
```
因为没有对应的封装对象，所以 `null` 和 `undefined` 不能够被封装, `Object (null）`和 `Object（）`均返回一个常规对象。

`NaN` 能够被封装为数字封装对象，但拆封之后 `NaN == NaN` 返回 `false`，因为` NaN` 不等于 `NaN`

#### 比较少见的情况
更改内置原生原型会导致哪些奇怪的结果。
1.**返回其他数字**
```js
Number.prototype.valueOf = function(){
    return 3
}
new Number(2)  ==  3  //true
```
`2 == 3` 不会有这种问题，因为` 2 和 3 `都是数字基本类型值，不会调用  `Number.Prototype valueOf(）`方法。而` Number(2) `涉及`ToPrimltive`强制类型转换，因此会调用`valueOf()`

2. **假值比较相等**
` == `中的隐式强制类型转换最为人诟病的地方是假值的相等比较。
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210914071044.png)

3. **极端情况**
```js
[] == ![] //true
2 == [2] //true
"" == [null] //true
```
根据 `ToBoolean` 规则，它会进行布尔值的显式强制类型转换。所以`[] =![]`变成了`[] == !Boolean([])`。前面我们讲过 `false == []`.

介绍` ToNumber` 时我们讲过，`==`右边的值`[2] 和 [null]`会进行` ToPrimitilve `强制类型转换，以便能够和左边的基本类型值（2 和““）进行比较。因为数组的`valueOf()`返回数组本身所以强制类型转换过程中数组会进行字符串化。第一行中的[2]会转换为“2“，然后通过ToNumber转换为2。第二行中的[null]会直接转换为““。所以最后的结果就是` 2==2 `和`“"==““`。

4. **完整性检查**
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210914073212.png)

#### 安全运用隐式强制类型转换
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210914073425.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210914073643.png)

### 抽象关系比较
比较双方首先调用` ToPrimitive`，如果结果出现非字符串，就根据` ToNumber `规则将双方强制类型转换为数字来进行比较。

```js
var a = [42]
var b = ['043']

a < b //false
```
a 和 b 并没有被转换为数字，因为` ToPrilmttlve `返回的是字符串，所以这里比较的是“42 和“043"两个字符串，它们分以“4"和“0"开头。因为“0”在字母顺序上小于“4“，所以最后结果为 false。

```js
var a = { b:42 }
var b = { b:43 }

a < b //false
a == b //false
a > b //false

a <= b //true
a >= b //true
```
`a < b `结果还是` false`，因为 a 是`[object bject]`, b 也是`[obiect Object]`，所以按照字母顺序` a < b `并不成立。



因为根据规范` a <= b `被处理为` b < a `，然后将结果反转。因为` b < a `的结果是` false`，所以 `a <= b `的结果是` true`。
这可能与我们设想的大相径庭，即`<=`应该是“小于或者等于”。实际上`JavaScript`中<=是“不大于”的意思（即`!(a > b)`，处理为`!(b < a）`）。同理` a >= b 处理为 b <= a`。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210914080158.png)

## 语法
### 语句和表达式
JavaScript中的表示式可以返回一个结果值。
```js
var a = 3 * 6
var b = a
b
```
表达式为：
```js
3 * 6  //是一个表达式（结果为18）
a      //是一个表达式（结果为18）
b      //是一个表达式（结果为18）
```
这三行都是包含表达式的语句。`var a = 3 * 6`和`var b = a`称为”声明语句“，因为它们都声明了变量（还可以为其赋值）。`a = 3 * 6`和`b = a`(不带var)叫作”赋值表达式“。

#### 语句的结果值
语句的返回结果为`undefined`。`var a = 3 * 6`  -> 'undefined'

`{...}`的结果值是其最后一个语句/表达式的结果。
```js
var b
if(true){
    b = 4 + 38
}
//控制台会返回42   即最后一个语句或者表达式 b = 4 + 38的结果值
```

#### 表达式的副作用
表达式的副作用 指的是 就是你用了这个表示，你修改别人或者自己所用变量的值。
```js
a++
a--
```
#### 上下文规则
在 JavaScript 语法规则中，有时侯同样的语法在不同的情况下会有不同的解释。
1. 大括号
(1)对象常量
用大括号定义对象常量。
```js
var a = {
    foo:bar()
}
//{...}被赋值给a,因而它是一个对象常量
```
(2)标签
```js
//普通代码块
{
    //标签语句
    foo:bar()
}
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210915073939.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210915074054.png)

2. 代码块
```js
[] + {} //"[object Object]"
{} + [] //0
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210915074521.png)

3. 对象结构
```js
function getName() {
    return {
        a:42,
        b:"foo"
    }
}
var { a,b } = getData();
console.log(a,b) //42 "foo"


//命名参数
```js
function foo({a,b,c}){
    console.log(a,b,c)
}

foo({
    c:[1,2,3],
    a:42,
    b:"foo"
})
```

### 元素符优先级
#### 短路
`&&`和`||`运算符的“短路”（short circuiting）特性。对`&&`和`||`来说，如果从左边的操作数能够得出结果，就可以忽略右边的操作数。我们将这种现象称为“短路”（即执行最短路径）。

#### 更强的绑定
`&&`和`||`比`? :`的绑定更强。

#### 关联
&&和||运算符先于？：执行，那么如果多个相同优先级的运算符同时出现，又该如何处理呢？它们的执行顺序是从左到右还是从右到左？一般说来，运算符的关联（associativity）不是从左到右就是从右到左，这取决于组合（grouping）是从左开始还是从右开始。请注意：关联和执行顺序不是一回事


而` a && b && c `这样的表达式就涉及组合（隐式），这意味着` a && b` 或` b && c `会先执行。
从技术角度来说，因为`&&`运算符是左关联（||也是），所以` a && bb &&c `会被处理为`（a && b)  && c`。不过右关联` aa && ( bb && cc）`的结果也一样。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210915212804.png)

### 自动分号
请注意，ASI 只在换行符处起作用，而不会在代码行的中间插入分号。

如果 JavaScript 解析器发现代码行可能因为缺失分号而导致错误，那么它就会自动补上分号。并且，只有在代码行末尾与换行符之间除了空格和注释之外没有别的内容时，它オ会这样做。

### 函数参数
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210915215655.png)

### 小结
JavaScript 语法规则之上是语义规则（也称作上下文）。例如，}在不同情况下的意思不尽相同，可以是语句块、对象常量、解构赋值（ES6) 或者命名函数参数（ES6)。

JavaScript 详细定义了运算符的优先级（运算符执行的先后顺序）和关联（多个运算符的组合方式）。只要熟练掌握了这些规则，就能对如何合理地运用它们作出自己的判断。

ASI（自动分号插入）是 JavaScript。引擎的代码解析纠错机制，它会在需要的地方自动插入分号来纠正解析错误。问题在于这是否意味着大多数的分号都不是必要的（可以省略），或者由于分号缺失导致的错误是否都可以交给 JavaScript 引擎来处理。

JavaScript中有很多错误类型，分为两大类：早期错误（編译时错误，无法被捕获）和运行时错误（可以通过 try...catch 来捕获）。所有语法错误都是早期错误，程序有语法错误则无法运行。



## 异步现在的未来
### 事件循环
JavaScript 引擎并不是独立运行的，它运行在宿主环境中，对多数开发者来说通常就是 Web 浏览器。经过最近几年（不仅于此）的发展，JavaScript 已经超出了浏览器的范围，进入了其他环境。

但是，所有这些环境都有一个共同“点”（thread，也指线程。不论真假与否，这都不算个很精妙的异步笑话），即它们都提供了一种机制来处理程序中多个块的执行，且执行每块时调用 Javascript擎，这种机制被称为**事件循环。**

所以，举例来说，如果你的 JavaScript 程序发出一个 Ajax 请求，从服务器获取一些数据那你就在一个函数（通常称为回调函数）中设置好响应代码，然后 JavaScript 引擎会通知宿主环境：“嘿，现在我要暂停执行，你一旦完成网络请求，拿到了数据，就请调用这个函数。”然后浏览器就会设置侦听来自网络的响应，拿到要给你的数据之后，**就会把回调函数插入到事件循环**，以此实现对这个回调的调度执行。

所以换句话说就是，程序通常分成了很多小块，在事件循环队列中一个接一个地执行。严格地说，和你的程序不直接相关的其他事件也可能会插入到队列中。

### 并行线程(JavaScript单线程)
JavaScript 从不跨线程共享数据，

术语“异步”和“并行”常常被混为一谈，但实际上它们的意义完全不同。记住，异步是将来运行，而并行是关于能够同时发生的事情。

并行计算最常见的工具就是进程和线程。进程和线程独立运行，并可能同时运行：在不同的处理器，甚至不同的计算机上，但多个线程能够共享单个进程的内存。

与之相对的是，事件循环把自身的工作分成一个个任务并顺序执行，不允许对共享内存的并行访问和修改。通过分立线程中彼此合作的事件循环，并行和顺序执行可以共存。并行线程的交替执行和异步事件的交替调度，其粒度是完全不同的。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917090757.png)

在` JavaScript `的特性中，这种函数顺序的不确定性就是通常所说的**竞态条件**,`foo（）`和`bar（）`相互竞争，看谁先运行。具体来说，因为无法可靠预测` a `和` b `的最终结果，所以才是竞态条件。


### 并发
第一个“进程”在用户向下滚动页面触发 onscroll 事件时响应这些事件（发起 Ajax 请求要求新的内容）第二个“进程”接收 Ajax 响应（把内容展示到页面）。

显然，如果用户滚动页面足够快的话，在等待第一个响应返回并处理的时候可能会看到两个或更多 onscroll 事件被触发，因此将得到快速触发彼此交替的 onscroll 事件和 Ajax 响应事件

两个或多个“进程”同时执行就出现了并发，不管组成它们的单个运算是否并行执行（在独立的处理器或处理器核心上同时运行）。可以把并发看作“进程”级（或者任务级）的并行，与运算级的并行（不同处理器上的线程）相对。

#### 非交互
两个或多个“进程”在同一个程序内并发地交替运行它们的步骤/事件时,如果这些任务彼此不相关，就不一定需要交互。如果**进程间没有相互影的话，不确定性是完全可以接受的**。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917092525.png)

#### 交互
更常见的情况是，并发的“进程”需要相互交流，通过作用域或 DOM 间接交互
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917093555.png)


#### 协作
还有一种并发合作方式，称为并发协作（cooperative concurrency）。这里的重点不再是通过共享作用域中的值进行交互（尽管显然这也是允许的！）。这里的目标是取到一个长期运行的“进程”，并将其分割成多个步骤或多批任务，使得其他并发“进程”有机会将自己的运算插入到事件循环队列中交替运行。

长时间“进程”运行时，页面上的其他代码都不能运行，包括不能有其他的 response (.。) 调用或 UI 刷新，甚至是像滚动、输入、按钮点击这样的用户事件。这是相当痛苦的。所以，要创建一个协作性更强更友好且不会霸占事件循环队列的并发系统，你可以异步地批处理这些结果。每次处理之后返回事件循环，让其他等待事件有机会运行。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210917094403.png)

### 任务
在 ES6 中，有一个新的概念建立在事件循环队列之上，叫作任务队列（job queue）。

因此，我认为对于任务队列最好的理解方式就是，它是挂在事件循环队列的每个 tick 之后的一个队列。在事件循环的每个 tick 中，可能出现的异步动作不会导致一个完整的新事件添加到事件循环队列中，而会在当前 tick 的任务队列末尾添加一个项目（一个任务）。

事件循环队列类似于一个游乐园游戏：玩过了一个游戏之后，你需要重新到队尾排队オ能再玩一次。而任务队列类似于玩过了游戏之后，插队接着续玩。一个任务可能引起更多任务被添加到同一个队列末尾。所以，理论上说，任务循环（job loop）可能无限循环（一个任务总是添加另一个任务，以此类推），进而导致程序的饿死，无法转移到下一个事件循环 tick。从概念上看，这和代码中的无限循环（就像  while (true).) 的体验几乎是一样的。

### 小结
实际上，JavaScript 程序总是至少分为两个块：第一块现在运行；下一块将来运行，以响应某个事件。尽管程序是一块一块执行的，但是所有这些块共享对程序作用域和状态的访问，所以对状态的修改都是在之前累积的修改之上进行的。

旦有事件需要运行，事件循环就会运行，直到队列清空。事件循环的每一轮称为一个 tick。用户交互、IO 和定时器会向事件队列中加入事件。

任意时刻，一次只能从队列中处理一个事件。执行事件的时候，可能直接或间接地引发个或多个后续事件。

并发是指两个或多个事件链随时间发展交替执行，以至于从更高的层次来看，就像是同时在运行（尽管在任意时刻只处理一个事件）。

通常需要对这些并发执行的“进程”（有别于操作系统中的进程概念）进行某种形式的交互协调，比如需要确保执行顺序或者需要防止竟态出现。这些“进程”也可以通过把自身分割为更小的块，以便其他“进程”插入进来。


## 回调
