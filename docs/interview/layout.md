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

## 移动端适配布局

### 逻辑像素和物理像素

（1）pt是逻辑像素

​     px是物理像素

（2) 逻辑像素和物理像素:

   *逻辑像素（logic point）：逻辑像素的单位是PT，它是按照内容的尺寸计算的单位。**比如iPhone 4的逻辑像素是480x320pt。但是由于每个逻辑的点因为视网膜屏密度增加了一倍，即1pt=2px，那么其实iPhone 4的物理像素是960x640px**。iOS开发工程师和使用Sketch和     AdobeXD软件设计界面的设计师使用的单位都是PT。*



<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830161730.png" style="zoom:33%;" />

### 移动端rem /em布局原理

ps中量取的数值，是物理像素，css中设置的逻辑像素，所以对量取的值进行除以2 

- em 是 CSS 中的相对长度单位中的一个。在 font-size 中使用是相对于`父元素的 font-size 大小`

- rem(root em) 和 em 一样，也是一个相对长度单位，不过 `rem 相对的是 HTML 的根元素 html`。 rem 由于是基于 html 的 font-size 来计算，所以通常用于自适应网站或者 H5 中。 

### 网易移动端

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830173149.png" style="zoom:25%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./iconfont/iconfont.css">
    <link rel="stylesheet" href="./css/reset.css">
    <style>
        html{
            /*100px*/
            font-size:26.666667vw;
        }
        body{
            font-size: 0.16rem;
        }
        a{
            color: #34372e;
        }
        .head{
            height: 0.43rem;
            background: #ef1b1a;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 0.1rem;
        }
        .head i {
            font-size: 0.18rem;
        }
        .head-user, .head-email{
            width: 25%;
            font-size: 0.14rem;
        }
        .head-email{
            text-align: right;
        }
        .head-logo{
            width: 50%;
            text-align: center;
        }
        .head-logo img{
            height: 0.21rem;
        }

        .nav{
            height: 0.46rem;
            border-bottom: 0.005rem #ededed solid;
            padding:0 0.1rem;
            display: flex;
            align-items: center; 
            font-size: 0.18rem;
        }
        .nav li{
            flex-grow: 1;
            text-align: center;
            position: relative;
        }
        .nav li.active a{
            color: #ef191b;
        }
        .nav li.active::after{
            content: "";
            position: absolute;
            left:50%;
            bottom:-0.12rem;
            margin-left: -0.07rem;
            width: 0.15rem;
            height: 0.02rem;
            background: #ef191b;
        }
        .nav-sub{
            padding: 0.11rem 0.1rem 0.07rem 0.1rem;
            background: #f8f8f8;
            position: relative;
        }
        .nav-sub-list{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-rows: 0.35rem;
        }
        .nav-sub__closed{
            height: 0.7rem;
            overflow: hidden;
        }
        .nav-sub__closed + .nav-sub-arrow{
            transform: rotate(0);
        }
        .nav-sub-arrow{
            position: absolute;
            right: 0.1rem;
            bottom: 0.2rem;
            transform: rotate(180deg);
        }
        .news{
            padding: 0 0.1rem;
        }
        .news-title{
            font-size: 0.18rem;
            line-height: 0.66rem;
        }
        .news-item{
            margin-bottom: 0.25rem;
        }
        .news-item-title{
            width: 2.95rem;
            line-height: 0.22rem;
            font-size: 0.17rem;
            margin-bottom: 0.08rem;
            font-weight: 400;
        }
        .news-item-info{
            font-size: 0.12rem;
            color: #b3b4b6;
        }
        .news-item-img img{
            width: 100%;
            margin-top: 0.05rem;
            margin-bottom: 0.09rem;
        }

        .news2-item{
            border-top: 0.005rem #f6f7f9 solid;
            padding: 0.1rem;
            display: flex;
        }
        .news2-item-content{
            flex-grow: 1;
            margin-right: 0.15rem;
        }
        .news2-item-title{
            line-height: 0.22rem;
            font-size: 0.17rem;
            margin-bottom: 0.08rem;
            font-weight: 400;
        }
        .news2-item-info{
            font-size: 0.12rem;
            color: #b3b4b6;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .news2-item-img{
            width: 1.17rem;
        }
        .news2-item-img img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
        .app{
            color: #fb1515;
            border:0.005rem #fbbab8 solid;
            border-radius: 1rem;
            padding:0.02rem 0.05rem;
        }
    </style>
</head>
<body>
    <div class="head">
        <div class="head-user">
            <i class="iconfont icon-yonghu"></i>
        </div>
        <div class="head-logo">
            <img src="./img/logo.png" alt="">
        </div>
        <div class="head-email">
            <i class="iconfont icon-youxiang"></i>
            邮箱
            <i class="iconfont icon-jiantou"></i>
        </div>
    </div>
    <ul class="nav">
        <li class="active">
            <a href="#">要闻</a>
        </li>
        <li>
            <a href="#">推荐</a>
        </li>
        <li>
            <a href="#">原创</a>
        </li>
        <li>
            <a href="#">热点</a>
        </li>
    </ul>
    <div class="nav-sub">
        <ul class="nav-sub-list">
            <li>
                <a href="#">新闻</a>
            </li>
            <li>
                <a href="#">抗疫</a>
            </li>
            <li>
                <a href="#">娱乐</a>
            </li>
            <li>
                <a href="#">体育</a>
            </li>
            <li>
                <a href="#">财经</a>
            </li>
            <li>
                <a href="#">新闻</a>
            </li>
            <li>
                <a href="#">抗疫</a>
            </li>
            <li>
                <a href="#">娱乐</a>
            </li>
            <li>
                <a href="#">体育</a>
            </li>
            <li>
                <a href="#">财经</a>
            </li>
            <li>
                <a href="#">新闻</a>
            </li>
            <li>
                <a href="#">抗疫</a>
            </li>
            <li>
                <a href="#">娱乐</a>
            </li>
            <li>
                <a href="#">体育</a>
            </li>
            <li>
                <a href="#">财经</a>
            </li>
        </ul>
        <div class="nav-sub-arrow">
            <i class="iconfont icon-down-arrow"></i>
        </div>
    </div>
    <div class="news">
        <h2 class="news-title">今日要闻</h2>
        <div class="news-item">
            <h3 class="news-item-title">测试文字测试文字</h3>
            <p class="news-item-info">央视网 1小时前 879跟帖</p>
        </div>
        <div class="news-item">
            <h3 class="news-item-title">测试文字测试文字</h3>
            <p class="news-item-info">央视网 1小时前 879跟帖</p>
        </div>
        <div class="news-item">
            <h3 class="news-item-title">测试文字测试文字测试文字测试文字测试文字测试文字</h3>
            <div class="news-item-img"><img src="./img/news.jpg" alt=""></div>
            <p class="news-item-info">央视网 1小时前 879跟帖</p>
        </div>
    </div>
    <div class="news2">
        <div class="news2-item">
            <div class="news2-item-content">
                <h3 class="news2-item-title">测试文字测试文字</h3>
                <p class="news2-item-info">
                    <span>上游新闻 2287跟贴</span>
                    <span class="app">打开APP</span>
                </p>
            </div>
            <div class="news2-item-img">
                <img src="./img/news2.jpg" alt="">
            </div>
        </div>
        <div class="news2-item">
            <div class="news2-item-content">
                <h3 class="news2-item-title">测试文字测试文字</h3>
                <p class="news2-item-info">
                    <span>上游新闻 2287跟贴</span>
                    <span class="app">打开APP</span>
                </p>
            </div>
            <div class="news2-item-img">
                <img src="./img/news3.jpg" alt="">
            </div>
        </div>
    </div>
</body>
</html>
```

### 移动端vw布局原理

`vw/vh` `vw`和`vh`分别是相对于屏幕视口宽度和高度而言的长度单位： • `1vw`= 视口宽度均分成 100 份中 1 份的长度； • `1vh` = 视口高度均分成 100 份中 1 份的长度； 在 JS 中 100vw = window.innerWidth，100vh = window.innerHeight。

`vw/vh`的出现使得多了一种写自适应布局的方案，开发者不再局限于 rem 了。 相对视口的单位，除了 vw/vh 外，还有 vmin 和 vmax： • `vmin`：取 vw 和 vh 中值较小的； • `vmax`：取 vw 和 vh 中值较大的；

### B站移动端布局

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210830180622.png" style="zoom:33%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./iconfont/iconfont.css">
    <link rel="stylesheet" href="./css/reset.css">
    <style>
        a{
            color: #4c514d;
        }
        .head{
            height: 11.733vw;
            display: flex;
            align-items: center;
            padding: 0 2.667vw;
        }
        .head-logo{
            margin-left: 2.133vw;
            margin-right: auto;
        }
        .head-logo i{
            font-size: 7.467vw;
            color: #f47296;
        }
        .head-search i{
            font-size: 5.867vw;
            color: #c9c9c9;
        }
        .head-login{
            margin-left: 5.333vw;
            background: #e8e8e8;
            font-size: 3.2vw;
            border-radius: 50%;
            padding: 1.867vw;   
        }
        .head-login a{
            color: #f47296;
        }
        .head-app{
            margin-right: 0.533vw;
            margin-left: 5.333vw;
            background: #f47296;
            border-radius: 1.067vw;
            padding: 1.333vw 2.667vw;
        }
        .head-app a{
            color: #fffefc;
        }

        .nav{
            height: 10.667vw;
            border-bottom: 0.133vw solid #f3f3f3; 
            padding: 0 2.667vw;
            position: relative;
        }
        .nav-list{
            height:100%;
            display: flex;
            align-items: center;
            overflow: hidden;
        }
        .nav-list li{
            width: 10.667vw;
            margin-right:5.333vw;
            flex-shrink: 0;
            text-align: center;
            position: relative;
        }
        .nav-list li.active a{
            color: #f47296;
        }
        .nav-list li.active::after{
            content: "";
            position: absolute;
            width: 11.733vw;
            height: 0.533vw;
            background: #f47296;
            bottom: -2.667vw;
            left: -0.533vw;
        }
        .nav-arrow{
            position: absolute;
            right: 0;
            top: 0;
            width: 10.667vw;
            height:100%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .video{
            padding: 2.133vw 2.667vw;
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 2.667vw;
        }
        .video-item-pic{
            display: grid;
        }
        .video-item-pic img{
            grid-area: 1/1/1/1;
            width:100%;
            height:100%;
            object-fit: cover;
            border-radius: 0.8vw;
        }
        .video-item-pic span{
            grid-area: 1/1/1/1;
            align-self: flex-end;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0.533vw;
        }
        .video-item-pic i{
            margin-right: 1.333vw;
        }
        .video-item-title{
            margin-top: 1.867vw;
            margin-bottom: 4vw;
            font-size: 3.2vw;
            line-height: 4.267vw;
        }
    </style>
</head>
<body>
    <div class="head">
        <div class="head-logo">
            <i class="iconfont icon-BILIBILI_LOGO"></i>
        </div>
        <div class="head-search">
            <i class="iconfont icon-fangdajing"></i>
        </div>
        <div class="head-login">
            <a href="#">登录</a>
        </div>
        <div class="head-app">
            <a href="#">下载 App</a>
        </div>
    </div>
    <div class="nav">
        <ul class="nav-list">
            <li class="active">
                <a href="#">首页</a>
            </li>
            <li>
                <a href="#">动画</a>
            </li>
            <li>
                <a href="#">番剧</a>
            </li>
            <li>
                <a href="#">国创</a>
            </li>
            <li>
                <a href="#">音乐</a>
            </li>
            <li>
                <a href="#">首页</a>
            </li>
            <li>
                <a href="#">动画</a>
            </li>
            <li>
                <a href="#">番剧</a>
            </li>
            <li>
                <a href="#">国创</a>
            </li>
            <li>
                <a href="#">音乐</a>
            </li>
        </ul>
        <div class="nav-arrow">
            <i class="iconfont icon-arrow-bottom"></i>
        </div>
    </div>
    <ul class="video">
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video1.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题</a>
            </h3>
        </li>
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video2.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题</a>
            </h3>
        </li>
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video3.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题</a>
            </h3>
        </li>
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video1.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题</a>
            </h3>
        </li>
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video1.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题测试标题测试标题测试标题测试标题</a>
            </h3>
        </li>
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video1.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题</a>
            </h3>
        </li>
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video3.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题</a>
            </h3>
        </li>
        <li class="video-item">
            <div class="video-item-pic">
                <img src="./img/video2.jpg" alt="">
                <span>
                    <span>
                        <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
                        73.7万
                    </span>
                    <span>
                        <i class="iconfont icon-xinxi"></i>
                        5591
                    </span>
                </span>
            </div>
            <h3 class="video-item-title">
                <a href="#">测试标题测试标题</a>
            </h3>
        </li>
    </ul>
</body>
</html>
```

## 响应式布局
一套代码多端
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103142114.png)
### 媒体查询
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103145830.png)
#### 媒体类型
```css
@media print {
    .box {
        font-size: 60px;
    }
}
```
#### 媒体特性
```css
/* max-width   min-width */
max-width: 1200px @media (min-width: 700px) {
    .box {
        width: 200px;
        height: 200px;
        background: pink;
    }
}

/* 竖屏竖屏 */
@media (orientation: portrait) {
    .box {
        width: 200px;
        height: 200px;
        background: pink;
    }
}

/* 横屏竖屏 */
@media (orientation: landscape) {
    .box {
        width: 200px;
        height: 200px;
        background: skyblue;
    }
}
```
#### 逻辑操作符
```css
@media screen and (min-width: 700px) and (max-width: 1200px) {
    .box {
        width: 200px;
        height: 200px;
        background: pink;
    }
}

@media not screen and (min-width: 700px) {
    .box {
        width: 200px;
        height: 200px;
        background: pink;
    }
}

@media screen,
print and (min-width: 700px) {
    .box {
        width: 200px;
        height: 200px;
        background: pink;
    }
}
```
#### link标签
```css
<link rel="stylesheet" href="./a.css" media="(orientation: portrait)">
<link rel="stylesheet" href="./b.css" media="(orientation: landscape)">
```
### 媒体查询的编写位置以及顺序
1. 添加到样式表的底部，对css进行优先级的覆盖
```css
.box{
    width:100px;
    height:100px;
    background:blue;
}

@media (min-width: 700px) {
    .box{
        background: pink;
    }
}
```
2. 移动端 -> PC端的适配原则：min-width从小到大
```css
/* 如何多条件的时候，min-width编写顺序：从小到大进行适配 */
/* min-width方式：移动优先的原则，先编写移动端设备，然后响应式过渡到PC端 */
@media (min-width: 700px) {
    .box {
        background: pink;
    }
}

@media (min-width: 1000px) {
    .box {
        background: green;
    }
}
```
3. PC端 -> 移动端的适配原则：max-width从大到小
```css
/* 如何从PC端响应式过渡到移动端？ max-width , 从大到小区编写 */
.box {
    width: 100px;
    height: 100px;
    background: blue;
}

@media (max-width: 1000px) {
    .box {
        background: pink;
    }
}

@media (max-width: 700px) {
    .box {
        background: green;
    }
}
```
### 响应断点（阈值）的设定
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211103165125.png)
- 阈值设定
    - Extra small < 576px
    - Small >= 576px，-sm
    - Medium >= 768px，-md
    - Large >= 992px， -lg
    - X-Large >= 1200px，-xl
    - XX-Large >= 1400px，-xxl
```css
.d-none{
    display: none;
}
@media (min-width: 576px){
    .d-sm-none{
        display: none;
    }
}
@media (min-width: 768px){
    .d-md-none{
        display: none;
    }
}
@media (min-width: 992px){
    .d-lg-none{
        display: none;
    }
}
@media (min-width: 1200px){
    .d-xl-none{
        display: none;
    }
}
@media (min-width: 1400px){
    .d-xxl-none{
        display: none;
    }
}
```
```html
<body>
    <div class="d-none">11111</div>
    <div class="d-sm-none">22222</div>
    <div class="d-md-none">33333</div>
    <div class="d-lg-none">44444</div>
    <div class="d-xl-none">55555</div>
    <div class="d-xxl-none">66666</div>
</body>
```
### 响应式栅格系统
栅格布局 + 断点设定
```css
.row {
    background: skyblue;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px;
    grid-auto-rows: 50px;
}

.row div {
    background: pink;
    border: 1px black solid;
    grid-area: auto/auto/auto/span 12;
}

.row .col-1 {
    grid-area: auto/auto/auto/span 1;
}

.row .col-2 {
    grid-area: auto/auto/auto/span 2;
}

.row .col-3 {
    grid-area: auto/auto/auto/span 3;
}

.row .col-4 {
    grid-area: auto/auto/auto/span 4;
}

.row .col-5 {
    grid-area: auto/auto/auto/span 5;
}

.row .col-6 {
    grid-area: auto/auto/auto/span 6;
}

.row .col-7 {
    grid-area: auto/auto/auto/span 7;
}

.row .col-8 {
    grid-area: auto/auto/auto/span 8;
}

.row .col-9 {
    grid-area: auto/auto/auto/span 9;
}

.row .col-10 {
    grid-area: auto/auto/auto/span 10;
}

.row .col-11 {
    grid-area: auto/auto/auto/span 11;
}

.row .col-12 {
    grid-area: auto/auto/auto/span 12;
}

@media (min-width: 576px) {
    .row .col-sm-1 {
        grid-area: auto/auto/auto/span 1;
    }

    .row .col-sm-2 {
        grid-area: auto/auto/auto/span 2;
    }

    .row .col-sm-3 {
        grid-area: auto/auto/auto/span 3;
    }

    .row .col-sm-4 {
        grid-area: auto/auto/auto/span 4;
    }

    .row .col-sm-5 {
        grid-area: auto/auto/auto/span 5;
    }

    .row .col-sm-6 {
        grid-area: auto/auto/auto/span 6;
    }

    .row .col-sm-7 {
        grid-area: auto/auto/auto/span 7;
    }

    .row .col-sm-8 {
        grid-area: auto/auto/auto/span 8;
    }

    .row .col-sm-9 {
        grid-area: auto/auto/auto/span 9;
    }

    .row .col-sm-10 {
        grid-area: auto/auto/auto/span 10;
    }

    .row .col-sm-11 {
        grid-area: auto/auto/auto/span 11;
    }

    .row .col-sm-12 {
        grid-area: auto/auto/auto/span 12;
    }
}

@media (min-width: 768px) {
    .row .col-md-1 {
        grid-area: auto/auto/auto/span 1;
    }

    .row .col-md-2 {
        grid-area: auto/auto/auto/span 2;
    }

    .row .col-md-3 {
        grid-area: auto/auto/auto/span 3;
    }

    .row .col-md-4 {
        grid-area: auto/auto/auto/span 4;
    }

    .row .col-md-5 {
        grid-area: auto/auto/auto/span 5;
    }

    .row .col-md-6 {
        grid-area: auto/auto/auto/span 6;
    }

    .row .col-md-7 {
        grid-area: auto/auto/auto/span 7;
    }

    .row .col-md-8 {
        grid-area: auto/auto/auto/span 8;
    }

    .row .col-md-9 {
        grid-area: auto/auto/auto/span 9;
    }

    .row .col-md-10 {
        grid-area: auto/auto/auto/span 10;
    }

    .row .col-md-11 {
        grid-area: auto/auto/auto/span 11;
    }

    .row .col-md-12 {
        grid-area: auto/auto/auto/span 12;
    }
}

@media (min-width: 992px) {
    .row .col-lg-1 {
        grid-area: auto/auto/auto/span 1;
    }

    .row .col-lg-2 {
        grid-area: auto/auto/auto/span 2;
    }

    .row .col-lg-3 {
        grid-area: auto/auto/auto/span 3;
    }

    .row .col-lg-4 {
        grid-area: auto/auto/auto/span 4;
    }

    .row .col-lg-5 {
        grid-area: auto/auto/auto/span 5;
    }

    .row .col-lg-6 {
        grid-area: auto/auto/auto/span 6;
    }

    .row .col-lg-7 {
        grid-area: auto/auto/auto/span 7;
    }

    .row .col-lg-8 {
        grid-area: auto/auto/auto/span 8;
    }

    .row .col-lg-9 {
        grid-area: auto/auto/auto/span 9;
    }

    .row .col-lg-10 {
        grid-area: auto/auto/auto/span 10;
    }

    .row .col-lg-11 {
        grid-area: auto/auto/auto/span 11;
    }

    .row .col-lg-12 {
        grid-area: auto/auto/auto/span 12;
    }
}

@media (min-width: 1200px) {
    .row .col-xl-1 {
        grid-area: auto/auto/auto/span 1;
    }

    .row .col-xl-2 {
        grid-area: auto/auto/auto/span 2;
    }

    .row .col-xl-3 {
        grid-area: auto/auto/auto/span 3;
    }

    .row .col-xl-4 {
        grid-area: auto/auto/auto/span 4;
    }

    .row .col-xl-5 {
        grid-area: auto/auto/auto/span 5;
    }

    .row .col-xl-6 {
        grid-area: auto/auto/auto/span 6;
    }

    .row .col-xl-7 {
        grid-area: auto/auto/auto/span 7;
    }

    .row .col-xl-8 {
        grid-area: auto/auto/auto/span 8;
    }

    .row .col-xl-9 {
        grid-area: auto/auto/auto/span 9;
    }

    .row .col-xl-10 {
        grid-area: auto/auto/auto/span 10;
    }

    .row .col-xl-11 {
        grid-area: auto/auto/auto/span 11;
    }

    .row .col-xl-12 {
        grid-area: auto/auto/auto/span 12;
    }
}

@media (min-width: 1400px) {
    .row .col-xxl-1 {
        grid-area: auto/auto/auto/span 1;
    }

    .row .col-xxl-2 {
        grid-area: auto/auto/auto/span 2;
    }

    .row .col-xxl-3 {
        grid-area: auto/auto/auto/span 3;
    }

    .row .col-xxl-4 {
        grid-area: auto/auto/auto/span 4;
    }

    .row .col-xxl-5 {
        grid-area: auto/auto/auto/span 5;
    }

    .row .col-xxl-6 {
        grid-area: auto/auto/auto/span 6;
    }

    .row .col-xxl-7 {
        grid-area: auto/auto/auto/span 7;
    }

    .row .col-xxl-8 {
        grid-area: auto/auto/auto/span 8;
    }

    .row .col-xxl-9 {
        grid-area: auto/auto/auto/span 9;
    }

    .row .col-xxl-10 {
        grid-area: auto/auto/auto/span 10;
    }

    .row .col-xxl-11 {
        grid-area: auto/auto/auto/span 11;
    }

    .row .col-xxl-12 {
        grid-area: auto/auto/auto/span 12;
    }
}
```
```html
<div class="row">
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">col</div>
</div>
```
### 响应式交互实现
1. 利用`checked`伪类
2. 利用`JavaScript`
```css
ul {
    display: none;
}

input {
    display: none;
}

input:checked+ul {
    display: block;
}

@media (min-width: 700px) {
    ul {
        display: block;
    }

    span {
        display: none;
    }
}
```
```html
<body>
    <label for="menu">
        <span>
            菜单按钮
        </span>
    </label>
    // 必须在这个上面
    <input id="menu" type="checkbox">
    <ul>
        <li>首页</li>
        <li>教程</li>
        <li>论坛</li>
        <li>文章</li>
    </ul>
</body>
```
### 响应式案例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./iconfont/iconfont.css">
    <link rel="stylesheet" href="./css/reset.css">
    <style>
        :root{
            --container: 100%;
        }
        body{
            background: #ebebeb;
        }
        a{
            color: #505050;
        }
        .head{
            height: 190px;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .head-logo{
            width: 200px; 
        }
        .nav{
            border-top: 1px #ebebeb solid;
            border-bottom: 2px #e1e1e1 solid;
            background: white;
            padding: 0 15px;
        }
        .nav-bar{
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .nav-bar i{
            cursor: pointer;
        }
        .nav-list{
            display: none;
        }
        .nav-list li{
            height: 56px;
            line-height: 56px;
            position: relative;
            padding:0 21px;
        }
        .nav-list li.active::after{
            content: "";
            position: absolute;
            left:0;
            bottom:0;
            width: 100%;
            height: 2px;
            background: #e67e22;
        }
        .nav-toggle{
            display: none;
        }
        .nav-toggle:checked + .nav-list{
            display: block;
        }

        .main{
            padding: 0 15px;
            width: var(--container);
            margin: 0 auto;
            box-sizing: border-box;
        }
        .main-article{
            margin-top: 35px;
            background: white;
            padding: 35px;
            line-height: 1.5;
        }
        .main-article h2{
            font-size: 35px;
            text-align: center;
            font-weight: 400;
        }
        .main-article div{
            text-align: center;
            color: #959595;
        }
        .main-article p{
            margin-top:25px;
            font-size:18px;
        }
        .main-article button{
            border:none;
            background: #e67e22;
            color: white;
            padding:10px;
            cursor: pointer;
            margin: 30px 0;
        }
        .main-article section{
            border-top:1px #ebebeb solid;
            padding-top:20px;
        }
        .main-article section i{
            margin-right: 10px;
        }

        .main-aside{
            background: white;
            padding:35px;
            margin-top:35px;
        }
        .main-aside h3{
            font-size: 20px;
            font-weight: 400;
            padding-bottom: 10px;
            border-bottom: 1px #cccccc solid;
            position: relative;
        }
        .main-aside h3::after{
            content:"";
            position: absolute;
            left:0;
            bottom:-1px;
            width: 90px;
            height: 1px;
            background: #e67e22;

        }

        .main-aside p{
            margin-top:30px;
        }

        .main-aside button{
            border:none;
            background: #e67e22;
            color: white;
            padding:10px;
            cursor: pointer;
            margin-top: 30px;
            width: 100%;
        }
        .main-aside div {
            margin-top: 20px;
        }
        .main-aside div a{
            border:1px #ebebeb solid;
            display: inline-block;
            margin:11px 7px 0 0;
            padding:5px 10px;
        }

        .foot{
            margin-top: 35px;
            padding-top:35px;
            background: #202020;
            overflow: hidden;
        }
        .foot-wrapper{
            width: var(--container);
            margin: 0 auto;
        }
        .foot-item{
            padding:0 30px;
            margin-bottom: 30px;
        }
        .foot-item h3{
            color: white;
            font-size: 22px;
            font-weight: 400;
            padding-bottom: 10px;
            border-bottom: 1px #cccccc solid;
            position: relative;
        }
        .foot-item h3::after{
            content:"";
            position: absolute;
            left:0;
            bottom:-1px;
            width: 90px;
            height: 1px;
            background: #e67e22;
        }
        .foot-item div{
            margin-top: 20px;
        }
        .foot-item div a{
            margin:10px;
            display: inline-block;
            color: #959595;
        }

        .copyright{
            background: #111111;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            color: #555555;
        }

        .row{
            display: grid;
            grid-template-columns: repeat(12, 1fr);
        }
        .row>[class*="col"]{
            grid-area: auto/auto/auto/span 12;
        }
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

        @media (min-width: 576px){
            .row .col-sm-1{
                grid-area: auto/auto/auto/span 1;
            }
            .row .col-sm-2{
                grid-area: auto/auto/auto/span 2;
            }
            .row .col-sm-3{
                grid-area: auto/auto/auto/span 3;
            }
            .row .col-sm-4{
                grid-area: auto/auto/auto/span 4;
            }
            .row .col-sm-5{
                grid-area: auto/auto/auto/span 5;
            }
            .row .col-sm-6{
                grid-area: auto/auto/auto/span 6;
            }
            .row .col-sm-7{
                grid-area: auto/auto/auto/span 7;
            }
            .row .col-sm-8{
                grid-area: auto/auto/auto/span 8;
            }
            .row .col-sm-9{
                grid-area: auto/auto/auto/span 9;
            }
            .row .col-sm-10{
                grid-area: auto/auto/auto/span 10;
            }
            .row .col-sm-11{
                grid-area: auto/auto/auto/span 11;
            }
            .row .col-sm-12{
                grid-area: auto/auto/auto/span 12;
            }
        }

        @media (min-width: 768px){

            .nav-bar{
                display: none;
            }
            .nav-list{
                display: flex !important;
                justify-content: center;
                justify-items: center;
            }

            .row .col-md-1{
                grid-area: auto/auto/auto/span 1;
            }
            .row .col-md-2{
                grid-area: auto/auto/auto/span 2;
            }
            .row .col-md-3{
                grid-area: auto/auto/auto/span 3;
            }
            .row .col-md-4{
                grid-area: auto/auto/auto/span 4;
            }
            .row .col-md-5{
                grid-area: auto/auto/auto/span 5;
            }
            .row .col-md-6{
                grid-area: auto/auto/auto/span 6;
            }
            .row .col-md-7{
                grid-area: auto/auto/auto/span 7;
            }
            .row .col-md-8{
                grid-area: auto/auto/auto/span 8;
            }
            .row .col-md-9{
                grid-area: auto/auto/auto/span 9;
            }
            .row .col-md-10{
                grid-area: auto/auto/auto/span 10;
            }
            .row .col-md-11{
                grid-area: auto/auto/auto/span 11;
            }
            .row .col-md-12{
                grid-area: auto/auto/auto/span 12;
            }
        }

        @media (min-width: 992px){
            :root{
                --container: 940px;
            }

            .row>[class*="col"]{
                padding: 0 15px;
            }

            .row .col-lg-1{
                grid-area: auto/auto/auto/span 1;
            }
            .row .col-lg-2{
                grid-area: auto/auto/auto/span 2;
            }
            .row .col-lg-3{
                grid-area: auto/auto/auto/span 3;
            }
            .row .col-lg-4{
                grid-area: auto/auto/auto/span 4;
            }
            .row .col-lg-5{
                grid-area: auto/auto/auto/span 5;
            }
            .row .col-lg-6{
                grid-area: auto/auto/auto/span 6;
            }
            .row .col-lg-7{
                grid-area: auto/auto/auto/span 7;
            }
            .row .col-lg-8{
                grid-area: auto/auto/auto/span 8;
            }
            .row .col-lg-9{
                grid-area: auto/auto/auto/span 9;
            }
            .row .col-lg-10{
                grid-area: auto/auto/auto/span 10;
            }
            .row .col-lg-11{
                grid-area: auto/auto/auto/span 11;
            }
            .row .col-lg-12{
                grid-area: auto/auto/auto/span 12;
            }
        }

        @media (min-width: 1200px){

            :root{
                --container: 1160px;
            }

            .row>[class*="col"]{
                padding: 0 15px;
            }

            .row .col-xl-1{
                grid-area: auto/auto/auto/span 1;
            }
            .row .col-xl-2{
                grid-area: auto/auto/auto/span 2;
            }
            .row .col-xl-3{
                grid-area: auto/auto/auto/span 3;
            }
            .row .col-xl-4{
                grid-area: auto/auto/auto/span 4;
            }
            .row .col-xl-5{
                grid-area: auto/auto/auto/span 5;
            }
            .row .col-xl-6{
                grid-area: auto/auto/auto/span 6;
            }
            .row .col-xl-7{
                grid-area: auto/auto/auto/span 7;
            }
            .row .col-xl-8{
                grid-area: auto/auto/auto/span 8;
            }
            .row .col-xl-9{
                grid-area: auto/auto/auto/span 9;
            }
            .row .col-xl-10{
                grid-area: auto/auto/auto/span 10;
            }
            .row .col-xl-11{
                grid-area: auto/auto/auto/span 11;
            }
            .row .col-xl-12{
                grid-area: auto/auto/auto/span 12;
            }
        }

        @media (min-width: 1400px){
            .row .col-xxl-1{
                grid-area: auto/auto/auto/span 1;
            }
            .row .col-xxl-2{
                grid-area: auto/auto/auto/span 2;
            }
            .row .col-xxl-3{
                grid-area: auto/auto/auto/span 3;
            }
            .row .col-xxl-4{
                grid-area: auto/auto/auto/span 4;
            }
            .row .col-xxl-5{
                grid-area: auto/auto/auto/span 5;
            }
            .row .col-xxl-6{
                grid-area: auto/auto/auto/span 6;
            }
            .row .col-xxl-7{
                grid-area: auto/auto/auto/span 7;
            }
            .row .col-xxl-8{
                grid-area: auto/auto/auto/span 8;
            }
            .row .col-xxl-9{
                grid-area: auto/auto/auto/span 9;
            }
            .row .col-xxl-10{
                grid-area: auto/auto/auto/span 10;
            }
            .row .col-xxl-11{
                grid-area: auto/auto/auto/span 11;
            }
            .row .col-xxl-12{
                grid-area: auto/auto/auto/span 12;
            }
        }
    </style>
</head>
<body>
    <div class="head">
        <img class="head-logo" src="./img/ghost-logo.png" alt="">
    </div>
    <div class="nav">
        <div class="nav-bar">
            <label for="nav-toggle">
                <i class="iconfont icon-zhedie"></i>
            </label>
        </div>
        <input id="nav-toggle" class="nav-toggle" type="checkbox">
        <ul class="nav-list">
            <li class="active"><a href="#">首页</a></li>
            <li><a href="#">论坛</a></li>
            <li><a href="#">快捷手册</a></li>
            <li><a href="#">中文文档</a></li>
            <li><a href="#">关于</a></li>
        </ul>
    </div>
    <div class="main row">
        <div class="col-lg-8">
            <div class="main-article">
                <h2>
                    全新的 Ghost 文档上线
                </h2>
                <div>
                    <span>作者：王赛</span> • <span>2018年11月20日</span>
                </div>
                <p>
                    我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
                </p>
                <button>阅读全文</button>
                <section>
                    <i class="iconfont icon-wenjianjia"></i>
                    <a href="#">Android</a>，
                    <a href="#">客户端</a>
                </section>
            </div>
            <div class="main-article">
                <h2>
                    全新的 Ghost 文档上线
                </h2>
                <div>
                    <span>作者：王赛</span> • <span>2018年11月20日</span>
                </div>
                <p>
                    我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
                </p>
                <button>阅读全文</button>
                <section>
                    <i class="iconfont icon-wenjianjia"></i>
                    <a href="#">Android</a>，
                    <a href="#">客户端</a>
                </section>
            </div>
            <div class="main-article">
                <h2>
                    全新的 Ghost 文档上线
                </h2>
                <div>
                    <span>作者：王赛</span> • <span>2018年11月20日</span>
                </div>
                <p>
                    我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
                </p>
                <button>阅读全文</button>
                <section>
                    <i class="iconfont icon-wenjianjia"></i>
                    <a href="#">Android</a>，
                    <a href="#">客户端</a>
                </section>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="main-aside">
                <h3>声明</h3>
                <p>Ghost 中文版不再继续维护，请去官方下载。</p>
            </div>
            <div class="main-aside">
                <h3>下载</h3>
                <button>Ghost最新版</button>
            </div>
            <div class="main-aside">
                <h3>标签云</h3>
                <div>
                    <a href="#">客户端</a>
                    <a href="#">Android</a>
                    <a href="#">jQuery</a>
                    <a href="#">Ghost 0.7 版本</a>
                    <a href="#">开源</a>
                    <a href="#">助手函数</a>
                    <a href="#">客户端</a>
                    <a href="#">客户端</a>
                    <a href="#">Android</a>
                    <a href="#">jQuery</a>
                    <a href="#">Ghost 0.7 版本</a>
                    <a href="#">开源</a>
                    <a href="#">助手函数</a>
                    <a href="#">客户端</a>
                </div>
            </div>
        </div>
    </div>
    <div class="foot">
        <div class="foot-wrapper row">
            <div class="foot-item col-lg-4">
                <h3>友链</h3>
                <div>
                    <a href="#">Bootstrap中文网</a>
                    <a href="#">React</a>
                    <a href="#">Vue.js</a>
                    <a href="#">Svelte</a>
                    <a href="#">Preact</a>
                    <a href="#">Babel</a>
                    <a href="#">Webpack</a>
                    <a href="#">Rollup.js</a>
                    <a href="#">Bootstrap中文网</a>
                    <a href="#">React</a>
                    <a href="#">Vue.js</a>
                    <a href="#">Svelte</a>
                    <a href="#">Preact</a>
                    <a href="#">Babel</a>
                    <a href="#">Webpack</a>
                    <a href="#">Rollup.js</a>
                </div>
            </div>
            <div class="foot-item col-lg-4">
                <h3>标签云</h3>
                <div>
                    <a href="#">客户端</a>
                    <a href="#">Android</a>
                    <a href="#">jQuery</a>
                    <a href="#">Ghost 0.7 版本</a>
                    <a href="#">开源</a>
                    <a href="#">助手函数</a>
                    <a href="#">客户端</a>
                    <a href="#">客户端</a>
                    <a href="#">Android</a>
                    <a href="#">jQuery</a>
                    <a href="#">Ghost 0.7 版本</a>
                    <a href="#">开源</a>
                    <a href="#">助手函数</a>
                    <a href="#">客户端</a>
                </div>
            </div>
            <div class="foot-item col-lg-4">
                <h3>合作伙伴</h3>
                <div>
                    <a href="#">腾讯</a>
                    <a href="#">阿里巴巴</a>
                    <a href="#">百度</a>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright © Ghost中文网 | 京ICP备11008151号-11 | 京公网安备11010802014853</p>
    </div>
</body>
</html>
```
## 综合案例
### CSS文件划分以及功能划分
#### CSS文件划分
- 公共型样式
    - 公共型样式可命名为 global.css 或common.css 等名字，主要包括网站通用样式编写
- 特殊型样式
    - 特殊型样式主要是根据当前页面来决定的文件，只针对当前页面做出特殊处理的样式
- 皮肤型样式
    - 皮肤型样式是针对网站需要皮肤功能时，把颜色、背景等抽离出来放到文件中的形式
#### CSS功能分类
- 重置样式
    - 重置样式在前面章节中有介绍过，主要是去除狀认样式和统一不同设备下的表现形态。
- 网站通用布局
    - 网站通用布局主要指的是对网站中出现的大块结构进行排版。
- 通用模块
    - 通用模块指的是网页中可以重复使用的较大的整体
- 通用原件
    - 通用原件指的是不可再分的较为小巧的个体，通常被重复用于各种模块中
- 通用响应式系统
    - 通用响应式系统指的是在不同设备下要实现响应式布局，当满足了某个断点设定后调用的相应变化样式，
#### CSS方法论及样式规范
- OOCSS
- BEM
- SMACSS
- Atomic CSS
