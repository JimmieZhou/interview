<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 14:31:15
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 14:48:21
 -->
总共7种内置类型：6种基本数据类型和1种引用类型  
6种基本类型：
- number
- string
- null
- undefined
- boolean
- symbol
```javascript
typeof NaN // 'number'
NaN === NaN // false
```
对象的引用类型，在运用中会涉及到深拷贝和浅拷贝的问题
```javascript
let obj = {
  a: 1
}
let obj2 = obj
obj2.a = 2
obj.a // 2
```
```javascript
function test(person) {
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }
  return person
}
const p1 = {
  name: 'yck',
  age: 25
}
const p2 = test(p1)
console.log(p1) 
//{name: "yck", age: 26}
console.log(p2)
//{name: "yyy", age: 30}
```
