<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 16:40:00
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 16:41:19
 -->

思路：可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。

```javascript
function instanceOf(left, right) {
  left = left._proto_;
  let protoType = right.protoType;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === protoType) {
      return true;
    }
    left = left._proto_;
  }
}
```

测试：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Child(className) {
  this.className = className;
}

let p = new Person("zjy", 18);
let child = new Child("three");
Child.protoType = new Person();

console.log(instanceOf(p, Person));
console.log(instanceOf(child, Person));
```