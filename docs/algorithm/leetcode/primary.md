# 基础练习题

## 数组

### 搜索插入位置

#### <img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210908071521.png" style="zoom:45%;" />

#### 解析

` O(log n) `的算法，决定了查找算法是二分查找。其他的就是判断。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //logn的是二分查找
    let low = 0,high = nums.length-1,ans = 0
     while (low <= high) {
          let mid = Math.floor((low + high) / 2);
          ans = mid
          if(target === nums[mid]){
              //查找到的下标
              return mid
          }else if(target < nums[mid]){
               high = mid - 1
          }else if(target > nums[mid]){
               low = mid + 1
          }
     }
     //ans最后一次的中间值
     if(target < nums[ans]){
       	 //未找到的值，值<最后一次中间下标的值，就返回ans
         return ans
     }else {
         //未找到的值，值>最后一次中间下标的值，就返回ans+1
         return ans + 1
     }  
};
```

### 寻找数组的中心索引

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210908071616.png" style="zoom:50%;" />

#### 解析

```md
1、先求出总和
2、sum(总和) - leftSum（左边的和） - nums[i]（当前循环的值） = leftSum（也就是等于rightsum）
3、一找到就返回了
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   const sum = nums.reduce((a,b) => a + b,0)
   let leftnum = 0
   for(let i = 0;i < nums.length ;i++){
       if(leftnum === sum - leftnum - nums[i]){
           return i
       }else {
           leftnum = leftnum + nums[i]
       }
   }
   return -1
};
```

### 旋转矩阵

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210908181929.png" style="zoom:50%;" />

#### 解析

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let size = matrix.length
    //根据主对角线斜对称交换主对角线两边元素 
    for(let i = 0;i < size;i++){
        for(let j = 0;j < i;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    //然后镜像对半交换交换
    for(let i = 0; i < size;i++){
        for(let j = 0;j < Math.floor(size/2);j++){
            [matrix[i][j],matrix[i][size-j-1]]= [matrix[i][size-j-1],matrix[i][j]]
        }
    }
};
```

### 零矩阵

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210908195752.png" style="zoom:50%;" />

#### 解析

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//记住是MxN的矩阵
var setZeroes = function(matrix) {
    let size = matrix.length
    //还有优化的空间
    let rows = new Set()
    let cols = new Set()
    //找到有0的列和行   记录下来
    for(let i = 0;i < size;i++){
        for (let j = 0;j < matrix[i].length;j++){
            if(matrix[i][j] === 0){
                rows.add(i)
                cols.add(j)
            }
        }
    }
  	//分别处理每行每列
    for (let row of rows){
        for (let i = 0;i < matrix[row].length;i++){
            matrix[row][i] = 0
        }
    }
    for (let col of cols){
        for (let i = 0;i < size;i++){
            matrix[i][col] = 0
        }
    }
};
```

## 字符串

### 最长公共前缀

<img src="/Users/cr/Library/Application Support/typora-user-images/image-20210909091858267.png" alt="image-20210909091858267" style="zoom:50%;" />	

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  	//返回最终前缀
    let str = ''
    let flag = 0
    //如果只有一个串的时候 返回当前串
    if(strs.length === 1){
        return strs[0]
    }
  	//从第一个串的第一个字符开始
    for(let i= 0;i < strs[0].length;i++){
        //从总数据中的第二个串开始遍历
        for(let j = 1;j < strs.length;j++){
            //当前查找的串要大于等于第一个串的长度，并且是当前查找串的长度
            if(strs[j].length >= i && strs[j].startsWith(strs[0].slice(0,i+1))){
                flag ++
            }
        }
        //必须是所有串都包含才能保留当前串
        if(flag === strs.length -1){
            str = strs[0].slice(0,i+1)
        }
        flag = 0
    }
    return str
};
```

### 最长回文子串

### 翻转字符串里的单词

![](https://output66.oss-cn-beijing.aliyuncs.com/img/20210909110453.png)

####  解析1

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  	//直接用API写的
  	//使用 split 将字符串按空格分割成字符串数组；
		//使用 reverse 将字符串数组进行反转；
		//使用 join 方法将字符串数组拼成一个字符串。
    return s.trim().split(/\s+/).reverse().join(' ')
};
```

#### 解析2

```js
```



