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

