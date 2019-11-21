<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-21 16:47:48
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-21 16:51:22
 -->
### 防抖

思路：在某段时间内，不管你触发了多少次回调，我都只认最后一次。

```javascript
function debunce(fn, delay) {
    var timmer = null
    return function () {
        var ctx = this
        var args = arguments
        if (timmer) clearTimeout(timmer)
        timmer = setTimeout(function () {
            fn.apply(ctx, args)
        }, delay);
    }
}
const better_scroll = debunce(() => console.log('触发了滚动事件'), 1000)

window.addEventListener('scroll', better_scroll)
```

### 节流

思路：不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。

```javascript
function throttle(fn, interval) {
    var last = 0
    return function () {
        var ctx = this
        var args = arguments
        var now = +(new Date())
        if (now - last >= interval) {
            last = now
            fn.apply(ctx, args)
        }
    }
}
const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)

window.addEventListener('scroll', better_scroll)
```

### 整合防抖与节流达到最优效果

```javascript
function debunce_finish(fn, delay) {
    var timmer = null
    var last = 0
    return function () {
        var ctx = this
        var args = arguments
        var now = +(new Date())
        if (now - last >= delay) {
            last = now
            fn.apply(ctx, args)
        } else {
            clearTimeout(timmer)
            timmer = setTimeout(function () {
                last = now
                fn.apply(ctx, args)
            }, delay);
        }
    }
}
const better_scroll = debunce_finish(() => console.log('触发了滚动事件'), 1000)

window.addEventListener('scroll', better_scroll)
```