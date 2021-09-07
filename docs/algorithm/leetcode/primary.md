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

<img src="https://output66.oss-cn-beijing.aliyuncs.com/img/20210908071616.png" style="zoom:40%;" />

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

