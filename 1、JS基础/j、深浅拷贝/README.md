<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 16:20:00
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 16:28:01
 -->
对象的赋值出现的问题（将一个对象赋值给一个变量，相当于是两者引用的同一个引用地址，其中一个改变，另一个就会改变）

```javascript
let obj = {
  a: 10
};
let obj2 = obj;
obj2.a = 100;
console.log(obj.a); // 100
```

简单来说，有两个对象 A 和 B，B = A，当你修改 A 时，B 的值也跟着发生了变化，这时候就叫浅拷贝。如果不发生变化，就叫深拷贝。

浅拷贝：  
创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。  
如果属性是基本类型，拷贝的就是基本类型的值，  
如果属性是引用类型，拷贝的就是内存地址，  
所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

深拷贝:  
将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

### 浅拷贝实现方法

1、Object.assign

```javascript
let obj3 = {
  name: "hello"
};
let obj4 = Object.assign({}, obj3);
console.log(obj4);
```

2、使用spread(...)实现

```javascript
let obj5 = { ...obj3 };
console.log(obj5);
```

### 深拷贝实现方法

1、JSON.parse(JSON.stringify(obj))

```javascript
let obj6 = {
  name: "world",
  obj: {
    info: "haha"
  }
};
let obj7 = JSON.parse(JSON.stringify(obj6));
console.log(obj7);
```

缺点：对象属性有函数，undefined、symbol、对象循环引用无法拷贝

```javascript
let obj8 = {
  name: undefined,
  age: Symbol(18),
  say: function() {},
  sex: "male"
};
let obj9 = JSON.parse(JSON.stringify(obj8));
console.log(obj9);
```

2、使用开源库lodash的deepClone方法

https://github.com/ljianshu/Blog/issues/5


