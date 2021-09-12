# 性能优化

## 性能优化的指标和工具

**性能**-Web网站和应用的支柱

流量 -> 搜索 -> 转换率 -> 用户体验

### 性能指标 - 加载

- **加载瀑布图**

- **基于 HAR 存储与重建性能信息**

- **速度指数（Speed Index  4秒）**

- **重要测量指标**
  - Speed Index  你的页面多久可以让用户看到
  - TTFB
  - 页面加载时间
  - 首次渲染

### 性能优化 - 响应

- 交互动作的反馈时间
- 帧率 FPS
- 异步请求的完成时间

### RAIL 测量模型

- **Response 响应  你的网站给用户的体验**
  - 处理事件应在 50ms 以内完成
- **Animation 动画   你的动画是否流畅**
  - 每 10ms 产生一帧

- **Idle 空闲 足够的空闲时间处理东西**
  - 尽可能增加空闲时间
- **Load 加载  网站加载是否快速**
  - 在 5s 内完成内容加载并可以交互
  - 内容加载+解析+渲染
  - 最好很多加载都是并行的

### 性能测量工具

- Chrome Devtools 开发调试、性能评测 
- Lighthouse 网站整体质量评估
- WebpageTest 多测试地点、全面性能报告

#### 性能测量 - WebpageTest 
解读 Webpagetestl 的报
 - waterfall chart 请求瀑布图
 - first view 首次访  
 - repeat view 二次访问

#### 性能测量 - Lighthouse
```js
npm install -g lighthouse
lighthouse https://airhorner.com/  //还要很多的附加参数
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911112034.png)

#### 使用 Chrome Devtools 分析性能
- Audit ((Lighthouse) 
- Throttling 调整网络吞吐  
- Performance 性能分析
- Network 网络加载分析

- 资源压缩（服务器来进行压缩）
```js
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//资源压缩
const compression = require('compression');
app.use(compression());



app.use(express.static('build'));
//从前端打包的进入
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});
const listener = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${listener.address().port}`);
});
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911115030.png)
使用API在网页中获取
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911120052.png)
```md
DNS 解析耗时: domainLookupEnd - domainLookupStart
TCP 连接耗时: connectEnd - connectStart
SSL 安全连接耗时: connectEnd - secureConnectionStart
网络请求耗时 (TTFB): responseStart - requestStart
数据传输耗时: responseEnd - responseStart
DOM 解析耗时: domInteractive - responseEnd
资源加载耗时: loadEventStart - domContentLoadedEventEnd
First Byte时间: responseStart - domainLookupStart
白屏时间: responseEnd - fetchStart
首次可交互时间: domInteractive - fetchStart
DOM Ready 时间: domContentLoadEventEnd - fetchStart
页面完全加载时间: loadEventStart - fetchStart
http 头部大小： transferSize - encodedBodySize
重定向次数：performance.navigation.redirectCount
重定向耗时: redirectEnd - redirectStart
```
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911120321.png)
### 渲染优化
现代浏览器网页渲染原理关键渲染路径（critical rendering path).
#### 浏览器的渲染过程（面试题  需要优化）
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911150018.png)

JavaScript: 触发视觉的变化  动画等
Style: 对样式进行计算
Layout: 布局  位置  大小
Paint: 画在页面上

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911150326.png)

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911150345.png)

#### 基于上面： 布局和绘制
- 渲染树只包含网页需要的节点
- 布局计算每个节点精确的位置和大小ー“盒模型“
- 绘制是像素化每个节点的过程

**导致布局（回流）：导致位置和大小发生变化**
- 添加/删除元素
- 操作 styles  
- display: none  
- offsetleft, scrollTop, clientWidth 
- 移动元素位置修改浏览器大小 top left bottom rigth
- 字体大小


**避免布局抖动（layout thrashing）（卡顿）**
- 避兔回流:避免使用布局（回流）的一些样式调整
- 读写分离:先进行批量读  -> 在进行批量写（改样式）
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911152722.png)

**解决布局抖动（layout thrashing）：fastdom工具库**
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911152858.png)

#### 基于上面： 复合线程（compositor thread）与图层（layers)

**复合线程（compositor thread）与图层（layers)p**
- 将页面拆分图层进行绘制再进行复合
- 利用 Devtools 了解网页的图层拆分情况
- 哪些样式仅影响复合
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911153917.png)
这些只会触发复合，不会触发布局。
可以把特定的那些动画啥的，不需要触发布局的，可以单独抽出一个图层。这样可以让GPU单独处理。

#### 减少重绘
只触发复合不触发布局和绘制。
```css
@keyframes rotate {
    0% {
        transform: rotate(0deg);
        opacity: 0.1;
        /*width: 300px;*/
        /*transform: scaleX(1);*/
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: rotate(360deg);
        opacity: 0.1;
        /*width: 600px;*/
        /*transform: scaleX(2);*/
    }
}


const styles = theme => ({
    root: {
        margin: theme.spacing(1),
        //告诉浏览器  这个属性需要抽到单独的图层去
        willChange: 'transform'
    },
    card: {
        width: 300
    },
    cardSpinning: {
        width: 300,
        animation: '3s linear 1s infinite running rotate'
    },
    media: {
        height: 200,
        width: 300,
        objectFit: 'cover',
    }
});
```
- 利用 Devtoolsi 识别 painting 的瓶颈
- 利用 wil-change 创建新的图层

#### requestAnimationFrame
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911155818.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911160230.png)

#### React 时间调度实现
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911160928.png)
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210911161246.png)

### 代码优化
#### Javascript 的开销和如何缩短解析时间
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912094109.png)

#### 解决方案
- ** Code splitting 代码拆分，按需加载 ** 
- ** Tree shaking 代码减重 **

#### 减少主线程工作量
- 避免长任务
- 避免超过 1kB 的行间脚本
- 使用 rAF 和 rIC 进行时间调度

#### Progressive Bootstrapping （渐进式启动）
- 可见不可交互 Vs 最小可交互资源集

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912094954.png)

#### V8编译原理
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912095132.png)

- 源码 => 抽象语法树 => 字节码 Bytecode => 机器码
- 编译过程会进行化
- 运行时可能发生反优化

#### V8优化机制
- 脚本流
- 字节码
- 缓存懒解析

#### 函数优化
函数解析方式
- lazy parsing 懒解析 vs eager parsing 饥饿解析
```js
export default () => {
    //lazy解析
    const add = (a, b) => a*b;
    //饥饿解析
    // const add = ((a, b) => a*b);
    const num1 = 1;
    const num2 = 2;

    add(num1, num2);
}
```
- 利用 Optimize.js 优化初次加载时间

#### 对象优化
- 以相同顺序初始化对象成员，避兔隐藏类的调整
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912101319.png)
- 实例化后避免添加新属性

- 尽量使用 Aray 代替 array-like 对象
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912102307.png)
- 避免读取超过数组的长度
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912102617.png)
- 避免元素类型的转换
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912102759.png)

#### HTML优化
- 减小 iframes 使用 
- 避免 table 布局
- 压缩空白符
- 删除注释
- 避免节点深层级嵌套
- CSS& Javascript 尽量外链
- 删除元素默认属性

#### CSS优化
- 降低 CSS 对渲染的阻塞利用 
- GPU 进行完成动画
- content:layout
![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210912103722.png)
- 使用 font-display 属性