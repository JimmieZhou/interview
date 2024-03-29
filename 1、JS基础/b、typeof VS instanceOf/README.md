### typeof
typeof对于基本类型，除了null之外，都会正确返回各自类型
```javascript
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof b // b 没有声明，但是还会显示 undefined
```
typeof对于对象，除了函数（function）之外，都会返回"object"
```javascript
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```
对于null来讲，它是基本数据类型，但是typeof null会返回"object"（历史遗留bug）
```javascript
typeof null // object
```
如果我们想获得一个变量的正确类型，可以通过
```javascript
Object.prototype.toString.call()
// "[object Undefined]"
Object.prototype.toString.call(1)
// "[object Number]"
Object.prototype.toString.call("")
// "[object String]"
Object.prototype.toString.call(true)
// "[object Boolean]"
Object.prototype.toString.call(undefined)
// "[object Undefined]"
Object.prototype.toString.call(null)
// "[object Null]"
Object.prototype.toString.call(Symbol())
// "[object Symbol]"
Object.prototype.toString.call({})
// "[object Object]"
Object.prototype.toString.call([])
// "[object Array]"
```
判断undefined
```javascript
let abc
abc === void 0; // true
```
### instanceOf
如果我们想判断一个对象的正确类型，这时候可以考虑使用 instanceof，因为内部机制是通过原型链来判断的
```javascript
const Person = function() {}
const p1 = new Person()
p1 instanceof Person // true

var str = 'hello world'
str instanceof String // false

var str1 = new String('hello world')
str1 instanceof String // true
```