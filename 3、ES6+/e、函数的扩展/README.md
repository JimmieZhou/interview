<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 18:32:28
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 18:46:50
 -->
### 1、函数参数的默认值

```javascript
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```

#### 1.1 与解构赋值默认值结合使用

参数默认值可以与解构赋值的默认值，结合起来使用。

```javascript
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined
```

### 1.2 函数的 length 属性

指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。

```javascript
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
```

### 1.3 作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

```javascript
var x = 1;

function f(x, y = x) {
  console.log(y);
}

f(2) // 2
```

### 2、rest参数

ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```javascript
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

### 3、name属性

函数的name属性，返回该函数的函数名。

```javascript
function foo() {}
foo.name // "foo"
```

### 4、箭头函数

#### 4.1 基本用法

ES6 允许使用“箭头”（=>）定义函数。

```javascript
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

```javascript
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

```javascript
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
```

#### 4.2 使用注意点

箭头函数有几个使用注意点。

- 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对- 
- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错- 
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代- 
- 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。