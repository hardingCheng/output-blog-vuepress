# 布局方案

## 布局中的尺寸与位置

### CSS盒模型的组成

标准盒模型：

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828083809.png" style="zoom:33%;" />

IE盒模型

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828090940.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828091247.png" style="zoom:33%;" />



### CSS盒模型注意

1. 背景色会平铺到非`margin`的区域
2. `margin-top`传递现象

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1 {
            width: 200px;
            height: 200px;
            background: pink;
        }
        .box2{
            width:100px;
            height:100px;
            background:skyblue;
            margin-top:30px;
        }
    </style>
</head>

<body>
    <div class="box1">
        <div class="box2"></div>
    </div>

</body>

</html>
```

3. `margin`上下叠加问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1 {
            width: 200px;
            height: 200px;
            background: pink;
            margin-bottom: 40px; //取大的作为两者的margin
        }

        .box2 {
            width: 100px;
            height: 100px;
            background: skyblue;
            margin-top: 30px;
        }
    </style>
</head>

<body>
    <div class="box1"></div>
    <div class="box2"></div>
</body>
</html>
```

## flex

弹性盒子是一种用于按行或按列布局元素的`一维布局`方法。元素可以膨胀以填充额外的空，收缩以适应更小的空间。

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828151934.png" style="zoom:33%;" />

### 主轴与交叉轴

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210828152252.png)

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828162025.png" style="zoom:50%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828153038.png" style="zoom:50%;" />

### 内联与块的上下左右居中布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828162459.png" style="zoom:33%;" />

```html
// （内联盒子）文字垂直居中
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 300px;
            height: 200px;
            background: skyblue;
            display: flex;
            align-items: center;
        }
    </style>
</head>

<body>
    <div class="box">
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
    </div>
</body>
</html>




// 块级元素   flex/定位
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 300px;
            height: 200px;
            background: skyblue;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .box div{
            width:100px;
            height:100px;
            background:pink;
        }
    </style>
</head>

<body>
    <div class="box">
        <div></div>
    </div>
</body>

</html>
```

### 不定项居中布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828163658.png" style="zoom:33%;" />

```html
// flex
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 300px;
            height: 150px;
            background: skyblue;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
        .box div {
            width: 30px;
            height: 30px;
            background: pink;
            border-radius: 50%;
            margin:5px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>




// 定位
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 300px;
            height: 150px;
            background: skyblue;
            position: relative;
        }
        .box section{
            width:100%;
            position: absolute;
            bottom:0;
            text-align: center;
            // 解决display: inline-block; 的空隙问题
            font-size:0;
        }
        .box div {
            width: 30px;
            height: 30px;
            background: pink;
            border-radius: 50%;
            display: inline-block;
            font-size:16px;
            margin:5px;
        }
    </style>
</head>
<body>
    <div class="box">
        <section>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </section>
    </div>
</body>
</html>
```

### 均匀分列布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828164628.png" style="zoom:33%;" />

```html
// flex  可以自适应
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            height:200px;
            background:skyblue;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding:0 20px;
        }
        .main div{
            width:30px;
            height:30px;
            background:pink;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="main">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>
</html>
```

### 子项分组布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828174616.png" style="zoom:33%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            height:200px;
            background: skyblue;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .main div:nth-of-type(2){
            display: flex;
            margin-left:10px;
        }
        .main .box{
            width:50px;
            height:100px;
            background:pink;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="box">1</div>
        <div>
            <div class="box">2</div>
            <div class="box">3</div>
        </div>
    </div>
</body>
</html>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            height:200px;
            background: skyblue;
            display: flex;
            align-items: center;
        }
        .main div{
            width:50px;
            height:100px;
            background:pink;
            margin-right:10px;
        }
        .main div:nth-of-type(3){
            margin-right: auto;
        }
        .main div:nth-of-type(6){
            margin-right: auto;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>


        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>

        
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
</body>
</html>
```

### 等高布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828194249.png" style="zoom:33%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            width:500px;
            background:skyblue;
            display: flex;
            justify-content: space-between;
        }
        .main div{
            /* 没有指定高度，弹性默认拉伸 */
            width:100px;
            background:pink;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
        </div>
        <div>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
        </div>
    </div>
</body>
</html>
```

### 两栏/三栏布局

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210828195647.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
        }
        .main{
            height:100vh;
            background:skyblue;
            display: flex;
        }
        .col1{
            width:200px;
            background:pink;
        }
        .col2{
            /* 沾满剩余空间 */
            flex-grow: 1;
            background:springgreen;
        }
        .col3{
            width:100px;
            background: tomato;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="col1"></div>
        <div class="col2"></div>
        <div class="col3"></div>
    </div>
</body>
</html>
```

### Sticky Footer布局（上中下布局  中间自适应）

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210828200949.png)

中间内容自动适配

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
        }
        .main{
            min-height:100vh;
            display: flex;
            flex-direction: column;
        }
        .main .header{
            height:100px;
            background:pink;
        }
        .main .content{
            flex-grow: 1;
        }
        .main .footer{
            height:100px;
            background:skyblue;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="header"></div>
        <div class="content">
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
        </div>
        <div class="footer"></div>
    </div>
</body>
</html>
```

### 溢出布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828202615.png" style="zoom:33%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
        }
        .main{
            height:100px;
            background:skyblue;
            display: flex;
            align-items: center;
        }
        .main div{
            width:100px;
            height:80px;
            background:pink;
            margin-right:10px;
            /* 设置不收缩，就可以溢出了 */
            flex-shrink: 0;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
</body>
</html>
```

### 综合案例 轮播图

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210828210514.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./iconfont.css">
    <link rel="stylesheet" href="./reset.css">
    <style>
       .swiper-container{
            position: relative;
            /* 把溢出项隐藏掉 */
            overflow: hidden;
        }
        .swiper-wrapper{
            display: flex;
            /* 使用偏移来切换 */
            /* transform: translateX(-400px); */
        }
        .swiper-slide{
            width:100%;
            /*需要设置不收缩，让其他溢出*/
            flex-shrink: 0;
        }
        .swiper-slide img{
            width:100%;
        }
        .swiper-pagination{
            position: absolute;
            height: 28px;
            width: 100%;
            bottom:0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .swiper-pagination-bullet{
            width:8px;
            height:8px;
            border-radius: 50%;
            background:#c6bcaf;
            margin:0 4px;
        }
        .swiper-pagination-bullet-active{
            background:white;
        }
        .swiper-button-prev, .swiper-button-next{
            position: absolute;
            top:0;
            height:100%;
            display: flex;
            align-items: center;
        }
        .swiper-button-prev{
            left:0;
        }
        .swiper-button-next{
            right:0;
        }
        .swiper-button-prev i, .swiper-button-next i{
            font-size:44px;
            color:white;
        }
    </style>
</head>
<body>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://pic3.iqiyipic.com/common/lego/20210609/e66f0e28608f4aa7b08b5d93088c73c6.jpg?caplist=jpg,webp" alt=""></div>
            <div class="swiper-slide"><img src="https://pic0.iqiyipic.com/common/lego/20210614/71f0084bddcb446db323fa9eebf53585.jpg?caplist=jpg,webp" alt=""></div>
            <div class="swiper-slide"><img src="https://m.iqiyipic.com/common/lego/20210613/80bfb766ac36470f9ec3a3788f85eabe.jpg?caplist=jpg,webp" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination">
            <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
        </div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev">
            <i class="iconfont icon-swiperhoutui"></i>
        </div>
        <div class="swiper-button-next">
            <i class="iconfont icon-swiperqianjin"></i>
        </div>
    </div>
</body>
</html>
```

### 综合案例 知乎导航（自适应）

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210828212203.png" style="zoom:33%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./iconfont.css">
    <link rel="stylesheet" href="./reset.css">
    <style>
        body{
            background:#f6f6f6;
        }
        .header-container{
            background:#ffffff;
        } 
        .header-wrapper{
            margin:0 auto;
            height: 52px;
            /*重点的地方*/
            min-width:1000px;
            max-width:1156px;
            display: flex;
            align-items: center;
        }
        .header-logo{
            margin-right: 40px;
        }
        .header-nav{
            display: flex;
        }
        .header-nav li{
            margin-right:30px;
        }
        .header-search{
            flex-grow:1;
            display: flex;
            justify-content: center;
        }
        .header-search-wrapper{
            max-width:482px;
            height:34px;
            flex-grow: 1;
            display: flex;
            align-items:center;
            justify-content: space-between;
            background:#f6f6f6;
            border-radius: 100px;
        }
        .header-search-input{
            flex-grow: 1;
            border:none;
            background:none;
            margin:0 20px;
        }
        .header-search-wrapper i{
            margin:0 20px;
        }
        .header-btn{
            display: flex;
        }
        .header-btn-login{
            width:60px;
            height:32px;
            border:1px #0066ff solid;
            border-radius: 3px;
            color:#0066ff;
            background:none;
            cursor: pointer;
            display: block;
            margin-left:20px;
        }
        .header-btn-zhihu{
            width:90px;
            height:32px;
            background:#0066ff;
            color:white;
            border:none;
            border-radius: 3px;
            display: block;
            margin-left:20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="header-container">
        <div class="header-wrapper">
            <div class="header-logo">
                <a href="#"><img src="./logo.png" alt=""></a>
            </div>
            <ul class="header-nav">
                <li>首页</li>
                <li>会员</li>
                <li>发现</li>
                <li>等你来答</li>
            </ul>
            <div class="header-search">
                <div class="header-search-wrapper">
                    <input class="header-search-input" type="text" placeholder="520文案">
                    <i class="iconfont icon-fangdajing"></i>
                </div>
            </div>
            <div class="header-btn">
                <button class="header-btn-login">登录</button>
                <button class="header-btn-zhihu">加入知乎</button>
            </div>
        </div>
    </div>
</body>
```

