# TypeScript

## TypeScript 日常

### extends

```typescript
T extends U ? X : Y
```

看起来是不是有点像三元运算符: `condition ? result(1) : result(2)`，用大白话可以表示为:

> 如果`T`包含的类型 是 `U`包含的类型的 '子集'，那么取结果`X`，否则取结果`Y`。

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

// 如果泛型参数 T 为 null 或 undefined，那么取 never，否则直接返回T。
let demo1: NonNullable<number>; // => number
let demo2: NonNullable<string>; // => string
let demo3: NonNullable<undefined | null>; // => never
```

### infer

支持`infer`关键字，可以推断一个类型变量，高效的对类型进行模式匹配。但是，**这个类型变量只能在true的分支中使用**。

```typescript
// 内置 ReturnType
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

```

其实理解之后很简单，这里直接说下我的理解，应该还算简单易懂:

> infer X 就相当于声明了一个变量，这个变量随后可以使用，是不是有点像for循环里面的声明语句？

```typescript
for (let i = 0, len = arr.length; i < len; i++) {
    // do something
}
```

> 不同的是，infer X的这个位置本应该有一个写死的类型变量，只不过用infer R替换了，更灵活。

> 需要注意的是infer声明的这个变量只能在true分支中使用

```typescript
// 解读: 如果泛型变量T是 () => infer R的`子集`，那么返回 通过infer获取到的函数返回值，否则返回boolean类型
type Func<T> = T extends () => infer R ? R : boolean;

let func1: Func<number>; // => boolean
let func2: Func<''>; // => boolean
let func3: Func<() => Promise<number>>; // => Promise<number>

```

## TypeScript 内置API

全局声明了一些`Type`, 调用`Type`就可以方便地进行一些类型转换或者创建新的类型。

### **Partial 将一个类型的属性全部变为可选**

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

从上面的代码中可以看出来该`Type`使用时需要传入一个泛型`T`。内部遍历`T`的所有属性然后创建一个新的 `Type`，新的`Type`的所有属性使用 `?` 标识，使之为可选。

`keyof`会遍历一个`Interface`的所有属性名称(key), 生成一个联合类型 `"name" | "age" ...`，然后可以得到下面代码

`P in "name" | "age"` 这就很明白能看出来了，表明了`P`为右侧类型

```typescript
interface UserInfo {
    name:string;
    age:number;
}

// 这里会将 UserInfo 所有的属性变为可选
const foo:Partial<UserInfo> = {
    name:"张三" 
}
```

### **Required 将一个类型的属性全部变为必选**

```typescript
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

该`Type`和`Partial`刚好是相反的。从上面的代码中可以看出来该`Type`实用时需要传入一个泛型`T`。内部使用`-?`将`T`的每个属性去除可选标识使之变成为必填。

```typescript
interface UserInfo {
    name?:string;
    age?:number;
}

// 这里会将 UserInfo 所有可选的属性变为必选
const foo:Required<UserInfo> = {
    name:"张三",
    age:18
}
```

### **Readonly 将一个类型的属性全部变为只读状态**

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

从上面的代码中可以看出来该`Type`实用时需要传入一个泛型`T`。内部使用`readonly`将`T`的每个属性去除可选标识使之变成为只读。

```typescript
interface UserInfo {
    name?:string;
    age?:number;
}
 
const foo:Readonly<UserInfo> = {
    name:"张三",
    age:18
}
foo.name = '李四';// error: 无法分配到 "name" ，因为它是只读属性
```

### **Record 构造一个字面量对象 Type**

```typescript
type Record<K extends keyof any, T> = {
  // 联合类型 A 的所有子类型，在联合类型 B 中存在  
    [P in K]: T;
};
```

`Record` 用于方便地构造一个字面量对象。其作用和 `{ [propName:string]:any }` 有些许类似。

`Record` 只需要传入两个 `Type` 即可创建一个新的 `Type`，相比于 `{ [propName:string]:any }` 能方便一些。当然除了方便外功能也比它强大，因为`Record`第一个参数可接收一组`key`，这样就可以做到定义出一个完整的 `Type` 了。

```typescript
// 这是通过 interface 定义出来的。
interface UserInfo {
    name:string;
    age:number;
}

// 我们用 Record 来实现一遍 UserInfo 。
// 注意：后面一个形参和 UserInfo 的是不一样的，因为 Record 第二个参数只能接受一个类型。所以这里要么用 any，要么用这种联合类型。
type UserInfoT = Record<"name" | "age", string | number>

// 结果
// type UserInfoT = {
//     name:string | number;
//     age:string | number;
// }
```

### **Pick 从一个 Type 中选取一些属性来构造一个新的对象 Type**

```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

`Pick` 也用于方便地构造一个字面量对象。其作用和 `Record` 有些许类似。

```typescript
interface UserInfo {
    name:string;
    age:number;
}

// 这时候我们只需要 UserInfo 的 name 属性。
type UserInfoT = Pick<UserInfo, "name">
```

### **Omit 从一个对象类型中删除一些属性来构造一个新的对象 Type**

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

日常使用中`Omit` 是一个使用频率可能比较高的。和 `Pick` 刚刚相反，用于排除不需要的属性。

```typescript
interface UserInfo {
    name:string;
    age:number;
}

// 这时候我们不需要 UserInfo 的 name 属性。
type UserInfoT = Omit<UserInfo, "name">
```

### **Exclude 排除一个联合类型中的某一些类型来构造一个新 Type**

上面说的 `Omit` 和 `Pick` 都是对一个字面量对象 `Type` 的操作。如果要对一个联合类型操作的话需要用到 `Exclude` 和 `Extract`

```typescript
// 排除掉 "name"
type UserInfoT = Exclude<"name" | "age", "name">;

// 等价于
type UserInfoA = "age";
```

### **Extract 提取出一个联合类型中的某一些类型来构造一个新 Type**

```typescript
type Extract<T, U> = T extends U ? T : never;
```

和 `Exclude` 恰好相反。

```typescript
// 从 T1 中 提取出 T2
type T1 = "name" | "age" | "hob";
type T2 = "name" | "age";
type UserInfoT = Extract<T1, T2>;

// 等价于
type UserInfoA = "name" | "age";
```

### **NonNullable 从类型中排除 null 和 undefined 来构造一个新的 Type**

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

```typescript
// 从 UserInfoK 中 排除掉 null | undefined 
type UserInfoK = NonNullable<"name" | "hob" | undefined>;

// 等价于
type UserInfoKA = "name" | "hob";
```

### **Parameters 从 [函数 Type] 的形参构造一个数组 Type**

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

`infer`标识一个待推导类型，上面定义的意思是：如果 T 为函数类型，那就返回函数的形参。

ps: `infer`和变量似的，先定义一个 `infer P` 然后 Ts 就会自动推导函数的形参或者返回值、或者数组元素等，然后开发者在合适的位置使用定义好的`infer P`即可。

加入有这样一个需求：需要将数组类型的 `Type` 变为联合类型。其他类型的则不变。这样我们就可以写一个这样的 `Type`

```typescript
type ArrayToUnion<T> = T extends Array<infer Item> ? Item : T;

const a:ArrayToUnion<[string, number]> = "111"; // a: string | number
const b:ArrayToUnion<string | number> = "111"; // a: string | number
```

从这个案列的`a`变量可以看出作用，`a`变量的类型定义为`ArrayToUnion<[string, number]>`，这里传入的是个数组`[string, number]`被`ArrayToUnion`处理为了`string | number`。

```typescript
// 定义一个函数
function getUserInfo(id:string, group:string){}

// 获取到函数需要的形参 Type[]
type GetUserInfoArg = Parameters<typeof getUserInfo>;
   
const arg:GetUserInfoArg = [ "001", "002" ];

getUserInfo(...arg);
```

代码中的`typeof`是 ts 提供的操作符不是 js 中的那个`typeof`，只能用到 ts 的类型定义中, 所以使用`typeof getUserInfo`才能指向函数`Type`

### **ConstructorParameters 从定义的[构造函数]的形参构造数组 Type**

```typescript
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```

实现原理完全和 `Parameters` 一样，只不过这个方法接受的事一个类。

```typescript
class User{
    constructor(id:string, group:string){}
}

type NewUserArg =  ConstructorParameters<typeof User>;

const arg:NewUserArg = [ "001", "002"];

new User(...arg);
```

### **ReturnType 用函数 Type 的返回值定义一个新的 Type**

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

使用 `infer` 实现。比 `Parameters` 更简单，可以去看上面的 `Parameters` 就能明白这段代码意思。

```typescript
// 定义一个函数 Type
type GetUserInfo = ()=>string;

const rt:ReturnType<GetUserInfo> = 'xxx';
```

### **InstanceType 从一个构造函数的实例定义一个新的 Type**

```typescript
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
```

使用 `infer` 实现。和`ReturnType`实现原理完全一样。

### **ThisParameterType 提取函数 Type 的 this 参数生成一个新的 Type**

```typescript
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;
```

从上面定义看出该 `Type` 对函数的第一个形参 `this` 做了`infer`推导。然后返回了推导出来的`this`。

```typescript
// 定义一个函数，并且定义函数 this 类型。 
function getUserInfo(this:{ name:string }){}

const getUserInfoArgThis: ThisParameterType<typeof getUserInfo> = {
    name:"王"
};
```

### **OmitThisParameter 忽略函数 Type 的 this 参数，生成一个新的函数 Type**

```typescript
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
```

如果传入的`T`没有`this`参数就直接返回`T`,如果有`this`参数就继续进行判断，

第二层判断为：如果T不是函数那也会直接返回`T`,最后是重新定义了一个函数然后返回。其中使用`infer`定义了我们所需要的形参和返回值。

```typescript
// 定义一个函数
function getUserInfo(this:{ name:string }, id:string){}

// 去除 getUserInfo 函数 this 参，然后创建出来了一个新类型
const aaa: OmitThisParameter<typeof getUserInfo> = (id:string)=>{} 
```

### **ThisType 给对象标记 this 接口**

这个类型在 lib.d.ts 中定义的就是一个`{}`空标签，所以用的时候往往比较困惑。特别是没注意看到官网上写的必须开启`--noImplicitThis`时才可以用的时候。就算你看到了，但是你在他们案例中如果不注意的话还是搞不懂，因为官方案例中设置了这个编译规则 `// @noImplicitThis: false`。

`noImplicitThis` 规则开启后在函数中的`this`在不定义的情况下不能使用，相当于严格模式，默认情况下`noImplicitThis`的值为`false`，除非手动开启，否则`ThisType`毫无作用。

```typescript
// 定义一个函数
function getUserInfo(this:{ name:string }, id:string){}

// 去除 getUserInfo 函数 this 参，然后创建出来了一个新函数类型
const aaa: OmitThisParameter<typeof getUserInfo> = (id:string)=>{} 
```

### **Uppercase 将字符串中的每个字符转换为大写**

这是对字符串的操作，所有对字符串的操作在 lib.d.ts 中都找不到具体的定义，文档上说是为了提升性能。

```typescript
type MyText = "Hello, world" 
type A = Uppercase<MyText>; // type A = "HELLO, WORLD"
```

### **Lowercase 将字符串中的每个字符转换为小写**

```typescript
type MyText = "Hello, world" 
type A = Lowercase<MyText>; // type A = "hello, world"
```

### **Capitalize 将字符串中的第一个字符转换为大写**

```typescript
type MyText = "hello, world" 
type A = Capitalize<MyText>; // type A = "Hello, world"
```

### **Uncapitalize 将字符串中的第一个字符转换为小写**

```typescript
type MyText = "Hello, world" 
type A = Uncapitalize<MyText>; // type A = "hello, world"
```

