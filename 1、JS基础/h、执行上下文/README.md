<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 16:10:56
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 16:15:08
 -->
JS中执行上下文包括：
- 全局上下文
- 函数上下文
- eval上下文

```javascript
b() // call b
console.log(a) // undefined
var a = 'Hello world'
function b() {
  console.log('call b')
}
```

因为函数和变量提升,在生成执行上下文时，会有两个阶段。第一个阶段是创建的阶段（具体步骤是创建 VO），
JS 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，
变量只声明并且赋值为 undefined，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。

在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

```javascript
b() // call b second

function b() {
  console.log('call b fist')
}
function b() {
  console.log('call b second')
}
var b = 'Hello world'
```

https://github.com/ljianshu/Blog/issues/59
https://github.com/ljianshu/Blog/issues/60