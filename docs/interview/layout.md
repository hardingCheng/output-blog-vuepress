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

## flex弹性布局

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

## grid网格布局

CSS 网格是一个用于 web 的二维布局系统。利用网格，你可以把内容按照行与列的格式进行排版。另外，网格还能非常轻松地实现一些复杂的布局。

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210829141003.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210829141323.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210829141348.png)

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210829141439.png" style="zoom:33%;" />

### 定义网格及fr单位

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210829142152.png" style="zoom:25%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
          	/*定义网格的  行和列*/
            /* grid-template-columns: 50px 50px 50px;
            grid-template-rows: 50px 50px 50px; */

            /* grid-template-columns: 50px 20% auto;
            grid-template-rows: 50px 50px; */
            /* 多少列，每列占多少 fr均分*/
            grid-template-columns: 150px 1fr 1fr;
            /* 多少行，每行占多少 fr均分*/
            grid-template-rows: 0.3fr 0.3fr;
        }
        .main div{
            background:pink;
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
    </div>
</body>
</html>
```

### 合并网格及网格命名

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210829142517.png" style="zoom:33%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            /* 每个区域的名称所占位置 */
            grid-template-areas: 
            "a1 a1 a2"
            "a1 a1 a2"
            "a3 a3 a3";
        }
        .main div{
            background:pink;
            border:1px black solid;
            box-sizing: border-box;
        }
        .main div:nth-of-type(1){
            /* 使用所占区域名称 */
            grid-area: a1;
        }
        .main div:nth-of-type(2){
            /* 使用所占区域名称 */
            grid-area: a2;
        }
        .main div:nth-of-type(3){
            /* 使用所占区域名称 */
            grid-area: a3;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>
```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210829145242.png" style="zoom:33%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas: 
            "a1 a1 a2"
            "a1 a1 a2"
            "a3 a3 a3";
        }
        .main div{
            background:pink;
            border:1px black solid;
            box-sizing: border-box;
        }
        .main div:nth-of-type(1){
            grid-area: a1;
        }

    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>






// grid-template-columns + grid-template-rows + grid-template-areas = grid-template
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            /* grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas: 
            "a1 a1 a2"
            "a1 a1 a2"
            "a3 a3 a3"; */
            grid-template: 
            "a1 a1 a2" 1fr
            "a1 a1 a2" 1fr 
            "a3 a3 a3" 1fr
            / 1fr 1fr 1fr;
        }
        .main div{
            background:pink;
            border:1px black solid;
            box-sizing: border-box;
        }
        .main div:nth-of-type(1){
            grid-area: a1;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>
```

### 网格间隙及简写

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210829152446.png" style="zoom:33%;" />

```html
// grid
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas: 
            "a1 a1 a2"
            "a1 a1 a2"
            "a3 a3 a3";
            /* 写法一，已经废弃 */
            /* grid-row-gap: 20px;
            grid-column-gap: 30px; */


            /* 写法二 */
            /* grid-gap: 20px 30px; */
            /* row-gap: 20px;
            column-gap: 30px; */


            /* 写法三 */
            gap:20px 30px;
        }
        .main div{
            background:pink;
            border:1px black solid;
            box-sizing: border-box;
        }
        .main div:nth-of-type(1){
            grid-area: a1;
        }
        .main div:nth-of-type(2){
            grid-area: a2;
        }
        .main div:nth-of-type(3){
            grid-area: a3;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>




// flex
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            width:300px;
            background:skyblue;
            display: flex;
            flex-wrap: wrap;
            row-gap: 20px;
            column-gap: 30px;
            margin-top: 30px;
        }
        .main div{
            width:100px;
            height:100px;
            background:pink;
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
    </div>
</body>
</html>
```

### 网格对齐方式及简写

- 子项在单个网格中的对齐方式

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830091051.png" style="zoom:33%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px 100px 100px;
            /* 子项内容大小 小于 单个网格大小  对齐方式  */
            /* justify-items: start;
            align-items: end; */
            place-items: center center;
        }
        .main div{
            width:50px;
            height:50px;
            background:pink;
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
        <div>9</div>
    </div>
</body>
</html>
```

- 所有网格是个整体在grid中的位置

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830091334.png" style="zoom:33%;" />

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
            margin-top: 30px;
            width:500px;
            height:500px;
            background:skyblue;
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px 100px 100px;
            /* 所有网格一起的大小 小于在grid容器大小  的对齐方式 */
            /* justify-content: space-evenly;
            align-content: end; */
            place-content: grid space-evenly;
        }
        .main div{
            background:pink;
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
        <div>9</div>
    </div>
</body>
```

### 显式网格与隐式网格

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830093632.png" style="zoom:40%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 隐式网格就是，当现在的元素大于设置的 grid-template-columns  grid-template-rows 的个数，就可以让多出的使用隐式网格 */
        .main{
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            /* 隐式网格就是，当现在的元素大于设置的 grid-template-columns  grid-template-rows 的个数，就可以让多出的使用隐式网格 */
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px;
            /* 默认：row 就是行产生隐式网格 */
            grid-auto-flow: row;
            /* 可以调节产生隐式网格的高度 */
            grid-auto-rows: 100px;
        }
        .main div{
            background:pink;
            border:1px black solid;
            box-sizing: border-box;
        }
        .main2{
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: 100px;
            grid-template-rows: 100px 100px 100px;
            /* column 就是列产生隐式网格 */
            grid-auto-flow: column;
            /* 可以调节产生隐式网格的宽度 */
            grid-auto-columns: 100px;
        }
        .main2 div{
            background:pink;
            border:1px black solid;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div class="main2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </div>
    <hr>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </div>
    <hr>
</body>
</html>
```

紧密网格

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830101439.png" style="zoom:40%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px;
            grid-auto-flow: row dense;  /* dense 紧密的 */
            grid-auto-rows: 100px;
        }
        .main div{
            background:pink;
            border:1px black solid;
            box-sizing: border-box;
        }
        .main div:nth-of-type(1){
            /* 从第二个开始排列 */
            grid-column-start: 2;
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
    </div>
</body>
</html>
```

### 基于线的元素放置

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830103318.png" style="zoom:40%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }
        .main div:nth-of-type(1){
            background:pink;
            /* 控制起始位置和结束位置，控制自己在哪里，占多少单元格 */
            grid-column-start: 2;
            grid-column-end: 3;
            /* 默认值：auto */
            grid-row-start: 1;
            grid-row-end: 2;
        }
        .main div:nth-of-type(2){
            background:slategray;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
    </div>
</body>
</html>
```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830103930.png" style="zoom:40%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            /* 可以控制每列每行的命名  1，2，3，4  -> col1,col2,col3,col14 */
            grid-template-columns:[col1] 1fr [col2] 1fr [col3] 1fr [col4];
            grid-template-rows:[row1] 1fr [row2] 1fr [row3] 1fr [row4];
        }
        .main div:nth-of-type(1){
            width:50px;
            height:50px;
            background:pink;
            justify-self: center;
            align-self: center;
            /* grid-column-start:2; */
            /* span 2 占两列 */
            /* grid-column-end:span 2; */
           /*  grid-column-start: col2;
            grid-column-end: col4; */
            
            
            /* grid-column-start grid-column-end  的缩写 */
            /* grid-column: 2 / 3;*/
            /* grid-row-start grid-row-end  的缩写 */
            /* grid-row: 2 / 4; */

            /* grid-column grid-row 的缩写 grid-area */
            grid-area: 2 / 2 / 3 / 3;
           
        }
        .main div:nth-of-type(2){
            background:slategray;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
    </div>
</body>
</html>
```

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830104333.png" style="zoom:40%;" />

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            /* 可以控制每列每行的命名  1，2，3，4  -> col1,col2,col3,col14 */
            grid-template-columns:[col1] 1fr [col2] 1fr [col3] 1fr [col4];
            grid-template-rows:[row1] 1fr [row2] 1fr [row3] 1fr [row4];
        }
        .main div:nth-of-type(1){
            width:50px;
            height:50px;
            background:pink;
            /* 针对子项自己在网格中的对齐方式 */
            justify-self: center;
            align-self: center;
            grid-area: 2 / 2 / 3 / 3;
           
        }
        .main div:nth-of-type(2){
            background:slategray;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
    </div>
</body>
</html>
```

### repeat()与minmax()

- repeat()方法及 auto-fill 可选值，指定可重复的数值。

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
            height:400px;
            background:skyblue;
            display: grid;
            /* grid-template-columns: 100px 100px 100px; */
            /* grid-template-columns: repeat(3, 100px); */


            /* grid-template-columns: 150px 100px 100px; */
            /* grid-template-columns: 150px repeat(2, 100px); */

    
            grid-template-columns: repeat(auto-fill, 100px);
            grid-template-rows: 100px;
        }
        .main div{
            background:pink;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
</body>
</html>
```

- minmax()方法，设置最小和最大值的范围

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
            height:400px;
            background:skyblue;
            display: grid;
            /* grid-template-columns: 100px 1fr 100px; */
            /* 第二列  最小100   最大剩余全部   可以让第二列自适应从最小到最大*/
            grid-template-columns: 100px minmax(100px, 1fr) 100px;
            grid-template-rows: 100px;
        }
        .main div{
            background:pink;
            border:1px black solid;
        }
    </style>
</head>
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>
```

- 自适应(根据分辨率)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210830110632.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210830110648.png)

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830110707.png" style="zoom:33%;" />

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
            background:skyblue;
            display: grid;
            /* 这么一设置就可以自适应了 */
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-template-rows: 100px;
            grid-auto-rows: 100px;
            grid-gap:20px 20px;
        }
        .main div{
            background:pink;
            border:1px black solid;
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
        <div>9</div>
        <div>10</div>
        <div>11</div>
    </div>
</body>
</html>
```

### 比定位更方便的叠加布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830111000.png" style="zoom:33%;" />

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830115231.png" style="zoom:33%;" />

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
            width: 530px;
            height: 300px;
            background:skyblue;
            display: grid;
        }
        .main img{
            /* 设置同一个区域就叠加在一起了 */ 
            grid-area: 1/1/1/1;
        }
        .main span{
            /* 设置同一个区域就叠加在一起了 */
            grid-area: 1/1/1/1;

            /* 子项内容在所占网格中的位置 */
            justify-self: end;
            align-self: end;

             
            margin:5px;
        }
        .main p{
            grid-area: 1/1/1/1;
            align-self: center;
            margin:0;
            padding:0;
            background:rgba(0,0,0,0.5);
            height:30px;
            line-height: 30px;
            color:white;
        }
    </style>
</head>
<body>
    <div class="main">
        <img src="./phone.png" alt="">
        <span>自制</span>
        <p>手机热卖中.....</p>
    </div>
</body>
</html>
```

### 多种组合排列布局

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210830115407.png)

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
            width:300px;
            height:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: repeat(3,1fr);
            gap:5px;
        }
        .main div{
            background:pink;
        }
        .main div:nth-of-type(1){
            /* grid-area: 1/1/3/3; */
            grid-area: 1/1/span 2/span 2;


            /* grid-area: 2/1/span 2/span 2; */
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
    </div>
</body>
</html>
```

### 栅格布局

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210830120201.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .row{
            background:skyblue;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 50px;
            grid-auto-rows: 50px;
        }
        .row div{
            background:pink;
            border:1px black solid;
        }
        /* grid-area: auto/auto/auto/***   可以让紧挨着排列 */
        .row .col-1{
            grid-area: auto/auto/auto/span 1;
        }
        .row .col-2{
            grid-area: auto/auto/auto/span 2;
        }
        .row .col-3{
            grid-area: auto/auto/auto/span 3;
        }
        .row .col-4{
            grid-area: auto/auto/auto/span 4;
        }
        .row .col-5{
            grid-area: auto/auto/auto/span 5;
        }
        .row .col-6{
            grid-area: auto/auto/auto/span 6;
        }
        .row .col-7{
            grid-area: auto/auto/auto/span 7;
        }
        .row .col-8{
            grid-area: auto/auto/auto/span 8;
        }
        .row .col-9{
            grid-area: auto/auto/auto/span 9;
        }
        .row .col-10{
            grid-area: auto/auto/auto/span 10;
        }
        .row .col-11{
            grid-area: auto/auto/auto/span 11;
        }
        .row .col-12{
            grid-area: auto/auto/auto/span 12;
        }
    </style>
</head>
<body>
    <div class="row">
        <div class="col-6">1</div>
        <div class="col-3">2</div>
        <div class="col-4">3</div>
        <div class="col-5">4</div>
    </div>
</body>
</html>
```

### 容器自适应行列布局

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210830121703.png)

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830122107.png" style="zoom:33%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 行自适应  不需要加高 */
        /* .main{ 
            width:300px;
            background:skyblue;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-flow: row;
            grid-auto-rows: 100px;
            gap:5px;
        }
        .main div{
            background:pink;
        } */


        /* 列自适应  不需要加宽 */
        .main{ 
            height:300px;
            background:skyblue;
            display: inline-grid;
            grid-template-rows: repeat(3, 1fr);
            grid-auto-flow: column;
            grid-auto-columns: 100px;
            gap:5px;
        }
        .main div{
            background:pink;
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
        <div>9</div>
        <div>10</div>
    </div>
</body>
</html>
```

### 综合案例一(百度热词风云榜)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210830122506.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./reset.css">
    <style>
        .top{
            width:308px;
            border:1px #dadadc solid;
            margin:20px auto;
        }
        .top-title{
            height:30px;
            display: flex;
            align-items: center;
            margin-left:15px;
            font-size:14px;
            font-weight: bold;
        }
        .top-list{
            height:352px;
            margin: 0 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-template-areas: 
            "a1 a3 a3"
            "a2 a3 a3"
            "a4 a4 a5"
            "a6 a7 a7";
            gap:8px;
        }
        .top-list div:nth-of-type(1){
            grid-area: a1;
        }
        .top-list div:nth-of-type(2){
            grid-area: a2;
        }
        .top-list div:nth-of-type(3){
            grid-area: a3;
        }
        .top-list div:nth-of-type(4){
            grid-area: a4;
        }
        .top-list div:nth-of-type(5){
            grid-area: a5;
        }
        .top-list div:nth-of-type(6){
            grid-area: a6;
        }
        .top-list div:nth-of-type(7){
            grid-area: a7;
        }

        .top-list a{
            width:100%;
            height:100%;
            display: block;
            color:white;
            line-height: 30px;
        }
        .top-list h3{
            text-align: right;
            margin-right:4px;
        }
        .top-list p{
            text-align: center;
        }

        .top-page{
            height:40px;
            margin:0 10px;
            display: flex;
            justify-content: flex-end;
            align-items: center;   
        }
        .top-page a{
            border:1px #cbcbcb solid;
            margin-left:2px;
            padding:3px 4px;
        }
        .top-page span{
            padding:3px 4px;
        }



        .theme1{
            background-image: linear-gradient(#187fe6, #32aff2);
            border:1px #2a9adc solid;
        }
        .theme2{
            background-image: linear-gradient(#f2246c, #fe5bac);
            border:1px #da2061 solid;
        }
        .theme3{
            background-image: linear-gradient(#d46300, #e5ad1c);
            border:1px #cd9818 solid;
        }
        
    </style>
</head>
<body>
    <div class="top">
        <div class="top-title">
            今日上榜
        </div>
        <div class="top-list">
            <div class="theme1">
                <a href="#">
                    <h3>实时热点</h3>
                    <p>阿里第一颗芯</p>
                </a>
            </div>
            <div class="theme2">
                <a href="#">
                    <h3>实时热点</h3>
                    <p>阿里第一颗芯</p>
                </a>
            </div>
            <div class="theme1">
                <a href="#">
                    <h3>实时热点</h3>
                    <p>阿里第一颗芯</p>
                </a>
            </div>
            <div class="theme1">
                <a href="#">
                    <h3>实时热点</h3>
                    <p>阿里第一颗芯</p>
                </a>
            </div>
            <div class="theme1">
                <a href="#">
                    <h3>实时热点</h3>
                    <p>阿里第一颗芯</p>
                </a>
            </div>
            <div class="theme3">
                <a href="#">
                    <h3>实时热点</h3>
                    <p>阿里第一颗芯</p>
                </a>
            </div>
            <div class="theme3">
                <a href="#">
                    <h3>实时热点</h3>
                    <p>阿里第一颗芯</p>
                </a>
            </div>
        </div>
        <div class="top-page">
            <span>1</span>
            <a href="#">2</a>
            <a href="#">3</a>
        </div>
    </div>
</body>
</html>
```

### 综合案例二(小米商品导航菜单)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210830123609.png)

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
        .nav{
            width:233px;
            height:100vh;
            background:rgba(0,0,0,0.5);
        }
        .nav>li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height:42px;
            padding:0 28px;
            cursor: pointer;
            color: white;
            position: relative;
        }
        .nav>li a{
            color:inherit;
        }
        .nav>li:hover{
            background:#ff6801;
        }
        .nav>li:hover .nav-menu{
            display: grid;
        }
        .nav-menu{
            display: none;
            position: absolute;
            left:100%;
            top:0;
            height: 460px;
            grid-template-rows: repeat(6, 1fr);
            grid-template-columns: 305px;
            grid-auto-flow: column;
            grid-auto-columns: 305px;
            background:white;
            border:1px #e1e1e1 solid;
            box-shadow: 5px 5px 10px #ccc;
            color: #36303c;
        }
        .nav-menu>li{
            display: flex;
            align-items: center;
        }
        .nav-menu>li>img{
            margin-left:26px;
            margin-right:21px;
        }
    </style>
</head>
<body>
    <ul class="nav">
        <li>
            <div>
                <a href="#">手机</a>
                <a href="#">电话卡</a>
            </div>
            <i class="iconfont icon-right-arrow"></i>
            <ul class="nav-menu">
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <a href="#">笔记本</a>
                <a href="#">显示器</a>
                <a href="#">平板</a>
            </div>
            <i class="iconfont icon-right-arrow"></i>
            <ul class="nav-menu">
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <a href="#">手机</a>
                <a href="#">电话卡</a>
            </div>
            <i class="iconfont icon-right-arrow"></i>
            <ul class="nav-menu">
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
                <li>
                    <img src="./phone.png" alt="">
                    <p>小米 MIX FOLD</p>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <a href="#">笔记本</a>
                <a href="#">显示器</a>
                <a href="#">平板</a>
            </div>
            <i class="iconfont icon-right-arrow"></i>
        </li>
        <li>
            <div>
                <a href="#">手机</a>
                <a href="#">电话卡</a>
            </div>
            <i class="iconfont icon-right-arrow"></i>
        </li>
        <li>
            <div>
                <a href="#">笔记本</a>
                <a href="#">显示器</a>
                <a href="#">平板</a>
            </div>
            <i class="iconfont icon-right-arrow"></i>
        </li>
    </ul>
</body>
</html>
```

