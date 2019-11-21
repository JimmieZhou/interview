<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 17:04:24
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 17:05:49
 -->

思路：利用requestAnimationFrame，循环多次进行插入

```javascript
setTimeout(() => {
  var total = 10000
  var once = 20
  var times = total / once
  var ul = document.querySelector('ul')
  var countOfRender = 0
  function add() {
    var fragment = document.createDocumentFragment()
    for (var i = 0; i < once; i++) {
      var li = document.createElement('li')
      li.innerText = Math.floor(Math.random() * total)
      fragment.append(li)
    }
    ul.append(fragment)
    countOfRender++
  }
  function loop() {
    if (countOfRender < times) {
      requestAnimationFrame(add)
    }
  }
  loop()
}, 0);
```