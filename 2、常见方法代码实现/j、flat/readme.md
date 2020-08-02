```js
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce((acc, value) => {
        return Array.isArray(value)
          ? [...acc, ...flatDeep(value, d - 1)]
          : [...acc, value];
      }, [])
    : arr;
}

var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
flatDeep(arr1, Infinity);
```