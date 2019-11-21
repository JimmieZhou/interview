<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 16:42:35
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 16:46:12
 -->

#### 实现浅拷贝

```javascript
function clone(target) {
  if (typeof target === "object") {
    var result = Array.isArray(target) ? [] : {};
    for (key in target) {
      result[key] = target[key];
    }
    return result;
  }
  return target;
}
```

#### 实现深拷贝

思路：递归实现，由于涉及数据类型过多，这里只考虑对象和数组的情况。

解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，  
当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，  
如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。  

```javascript
function deepClone(target, map = new WeakMap()) {
  if (typeof target === "object") {
    var result = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, result);
    for (key in target) {
      result[key] = deepClone(target[key], map);
    }
    return result;
  }
  return target;
}
```

