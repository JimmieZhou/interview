<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-22 10:03:20
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-22 10:34:25
 -->
### 1、扩展运算符

扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```javascript
function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42
```

#### 1.1 替代函数的apply方法

由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。

```javascript
// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2];
f(...args);

// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);
```

### 2、Array.from()

Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

```javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

### 3、Array.of()

Array.of方法用于将一组值，转换为数组。

```javascript
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```

### 4、数组实例的 copyWithin()

数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

```javascript
Array.prototype.copyWithin(target, start = 0, end = this.length)
```

```javascript
// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

### 5、数组实例的 find() 和 findIndex()

数组实例的find方法，用于找出第一个符合条件的数组成员。findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置。

```javascript
[1, 4, -5, 10].find((n) => n < 0)

[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
```

### 6、数组实例的 fill() 

fill方法使用给定值，填充一个数组。

```javascript
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
```

### 7、数组实例的 entries()，keys() 和 values() 

```javascript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

### 8、数组实例的 includes()

```javascript
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
```

### 9、数组实例的 flat()，flatMap()

数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```javascript
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
```

flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。

```javascript
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
```

如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数

```javascript
[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]
```

flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

```javascript
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

### 10.ES5中数组常用方法
- concat，连接两个或更多的数组，并返回结果
```js
var arr1 = ['a', 'b']
var arr2 = ['c', 'd']
var arr3 = ['e', 'f']
var ret1 = arr1.concat(arr2) // ['a', 'b','c', 'd']
var ret2 = arr1.concat(arr2, arr3) // ['a', 'b','c', 'd', 'e', 'f']
```
- join，把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
```js
var ret = [1, 2, 3].join("-") // 1-2-3
```
- pop，删除并返回数组的最后一个元素
```js
var arr = ['a', 'b', 'c']
var ret = arr.pop()
ret // 'c'
arr // ['a', 'b']
```
- push，向数组的末尾添加一个或更多元素，并返回新的长度。
```js
var arr = ['a', 'b', 'c']
var ret = arr.push('d')
ret // 4
arr // ['a', 'b', 'c', 'd']
```
- reverse，颠倒数组中元素的顺序，并返回新数组
```js
var arr = ['a', 'b', 'c']
var ret = arr.reverse() // ['c', 'b', 'a']
```
- shift，删除并返回数组的第一个元素
```js
var arr = ['a', 'b', 'c']
var ret = arr.shift() // 'a'
arr // ['b', 'c']
```
- slice，从某个已有的数组返回选定的元素
```js
var arr = ['a', 'b', 'c', 'd']
var ret = arr.slice(0, 2) // ['a', 'b']
```
- sort，对数组的元素进行排序
- splice，删除元素，并向数组添加新元素。该方法会改变原数组
语法：arrayObject.splice(index,howmany,item1,.....,itemX)
```js
// 添加
var arr = ['a', 'b', 'c', 'd']
arr.splice(1, 0, 'e')
arr // ['a', 'e', 'b', 'c', 'd']
// 删除
var arr = ['a', 'b', 'c', 'd']
arr.splice(1, 1)
arr // ['a', 'c', 'd']
// 修改
var arr = ['a', 'b', 'c', 'd']
arr.splice(1, 1, 'e')
arr // ['a', 'e', 'c', 'd']
```
- unshift，向数组的开头添加一个或更多元素，并返回新的长度。
```js
var arr = ['a', 'b', 'c']
var ret = arr.unshift('d') // 4
arr // ['d', 'a', 'b', 'c']
```
- some，方法用于检测数组中的元素是否满足指定条件（函数提供。如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。
```js
var arr = [1,2,3,4,5]
arr.some((item)=> item > 3)
```
- every，方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。如果所有元素都满足条件，则返回 true。
```js
var arr = [1,2,3,4,5]
arr.every((item)=> item > 0)
```



