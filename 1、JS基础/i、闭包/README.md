<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 16:16:48
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 16:18:08
 -->
闭包：函数A返回了函数B，函数B中使用到了函数A的变量，那么，称函数B为闭包函数

```javascript
function A() {
  var a = 10
  function B() {
    console.log(a)
  }
  return B
}
```

经典面试题

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(function timmer() {
    // 先打印一个5，然后每隔1s打印一个6，总共打印5次
    console.log(i)
  }, i * 1000)
}

// 需求：每隔1s打印一个数（1~5），总共打印5次

// 解决方法一：使用IIFE（闭包）
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timmer() {
      // 先打印一个undefined，然后打印每隔1s打印1,2,3,4,5
      console.log(j)
    }, j * 1000)
  })(i)
}

// 解决方法二：利用setTimeOut的第三个参数
for (var i = 1; i <= 5; i++) {
  setTimeout(function timmer(j) {
    // 先打印一个5，然后打印每隔1s打印1,2,3,4,5
    console.log(j)
  }, i * 1000, i)
}

// 解决方法三：使用let，利用其块级作用
for (let i = 1; i <= 5; i++) {
  setTimeout(function timmer() {
    // 先打印一个5，然后打印每隔1s打印1,2,3,4,5
    console.log(i)
  }, i * 1000)
}
```
https://github.com/ljianshu/Blog/issues/6