<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 16:54:08
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 16:58:59
 -->
call，apply都是用来改变this的指向的，都会执行函数。唯一区别在于：call的传参是一系列数据，apply需要传一个数组。  
bind也是用来改变this指向的，但bind不会会执行函数，执行结果会返回一个函数

### call的实现

```javascript
Function.prototype.myCall = function(context) {
  var context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
};
```

### apply的实现

```javascript
Function.prototype.myApply = function(context) {
  var context = context || window;
  context.fn = this;
  var result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
```

### bind的实现

```javascript
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  var _this = this;
  var args = [...arguments].slice(1);
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};
```

调用：

```javascript
function Person(...args) {
  console.log(...args, this.value);
}
var obj = {
  value: 28
};
Person.myCall(obj, "zjy");
Person.myApply(obj, ["zjy"]);
Person.myBind(obj, "zjy")();
```