---
title: Vue 面试题
date: 2021-12-19
tags:
  - Vue
categories:
  - Vue 面经
---

# JavaScript 技巧

## 相关内容知识点
### watch和watchEffect的区别
watch特性：
1. 具有一定的惰性lazy 第一次页面展示的时候不会执行，只有数据变化的时候才会执行
2. 参数可以拿到当前值和原始值
3. 可以侦听多个数据的变化，用一个侦听起承载
```js
setup() {
	const name = ref('leilei')
	watch(name, (curVal, prevVal) => {
    	console.log(curVal, prevVal)
    })
}
template: `Name: <input v-model="name" />





setup() {
	const nameObj = reactive({name: 'leilei', englishName: 'bob'})
    监听一个数据
	watch(() => nameObj.name, (curVal, prevVal) => {
    	console.log(curVal, prevVal)
    })
    监听多个数据 
	watch([() => nameObj.name, () => nameObj.name], ([curName, curEng], [prevName, curEng]) => {
    	console.log(curName, curEng, '----', prevName, curEng)
        setTimeout(() => {
            stop1()
        }, 5000)
    })
    const { name, englishName } = toRefs(nameObj)
}
template: `Name: <input v-model="name" /> englishName: <input v-model="englishName" />`




// watch也可以变为非惰性的 立即执行的 添加第三个参数 immediate: true
watch([() => nameObj.name, () => nameObj.name], ([curName, curEng], [prevName, curEng]) => {
	console.log(curName, curEng, '----', prevName, curEng)
    setTimeout(() => {
        stop1()
    }, 5000)
}, {
	immediate: true
})
```
watchEffect:
1. 没有过多的参数 只有一个回调函数
2. 立即执行，没有惰性，页面的首次加载就会执行。
3. 自动检测内部代码，代码中有依赖 便会执行
4. 不需要传递要侦听的内容 会自动感知代码依赖，不需要传递很多参数，只要传递一个回调函数
5. 不能获取之前数据的值 只能获取当前值
6. 一些异步的操作放在这里会更加合适
```js
watchEffect(() => {
	console.log(nameObj.name) 
})




const stop = watchEffect(() => {
	console.log(nameObj.name) 
    setTimeout(() => {
    	stop()
    }, 5000)
})
const stop1 = watch([() => nameObj.name, () => nameObj.name], ([curName, curEng], [prevName, curEng]) => {
	console.log(curName, curEng, '----', prevName, curEng)
    setTimeout(() => {
        stop1()
    }, 5000)
})
```
