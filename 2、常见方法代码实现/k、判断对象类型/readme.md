```js
const isType = (type) => (obj) =>
  Object.prototype.toString.call(obj) === `[object ${type}]`;

let isArray = isType("Array");
let isFunction = isType("Function");
console.log(isArray([1, 2, 3]), isFunction(Map));

```