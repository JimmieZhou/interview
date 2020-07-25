<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-15 20:41:59
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-15 21:11:53
 -->
# 解读react中间件原理

Redux 的中间件提供的是位于 action 被发起之后，到达 reducer 之前的扩展点，换而言之，原本 view -> action -> reducer -> store 的数据流加上中间件后变成了 view -> action -> middleware -> reducer -> store ，在这一环节我们可以做一些 “副作用” 的操作，如 异步请求、打印日志等。

# 使用示例

以日志输出 Logger 为例：

```javascript
import { createStore, applyMiddleware } from 'redux'
/** 定义初始 state**/
const initState = {
  score : 0.5
}
/** 定义 reducer**/
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SCORE':
      return { ...state, score:action.score }
    default:
      break
  }
}

/** 定义中间件 **/
const logger = ({ getState, dispatch }) => next => action => {
  console.log('【logger】即将执行:', action)

    // 调用 middleware 链中下一个 middleware 的 dispatch。
  let returnValue = next(action)

  console.log('【logger】执行完成后 state:', getState())
  return returnValue
}

/** 创建 store**/
let store = createStore(reducer, initState, applyMiddleware(logger))

/** 现在尝试发送一个 action**/
store.dispatch({
  type: 'CHANGE_SCORE',
  score: 0.8
})
/** 打印:**/
// 【logger】即将执行: { type: 'CHANGE_SCORE', score: 0.8 }
// 【logger】执行完成后 state: { score: 0.8 }
```

## 解读

要理解上面这段代码，首先要从创建store的createStore函数说起：createStore函数接收参数为(reducer, [preloadedState], enhancer)，其中preloadedState为初始state，那么 enhancer 又是什么呢？从官方文档可以看到，StoreCreator 的函数签名为

```javascript
type StoreCreator = (reducer: Reducer, initialState: ?State) => Store
```

是一个普通的创建 store 的函数，而 enhancer 的签名为

```javascript
type enhancer = (next: StoreCreator) => StoreCreator
```

可知enhancer是一个组合 StoreCreator 的高阶函数, 返回的是一个新的强化过的 StoreCreator，再执行StoreCreator就能得到一个加强版的 store。在本例里形参enhancer即为applyMiddleware，从下面的源码可知，applyMiddleware 改写了 store 的 dispatch 方法，新的 dispatch 即是被所传入的中间件包装过的。

```javascript
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    // 接收 createStore 参数
    var store = createStore(reducer, preloadedState, enhancer)
    var dispatch = store.dispatch
    var chain = []

    // 传递给中间件的参数
    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }

    // 注册中间件调用链，并由此可知，所有的中间件最外层函数接收的参数都是{getState,dispatch}
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    //compose 函数起到代码组合的作用：compose(f, g, h)(...args) 效果等同于 f(g(h(...args)))，具体实现可参见附录。从此也可见：所有的中间件最二层函数接收的参数为 dispatch，一般我们在定义中间件时这个形参不叫 dispatch 而叫 next，是由于此时的 dispatch 不一定是原始 store.dispatch，有可能是被包装过的新的 dispatch。
    dispatch = compose(...chain)(store.dispatch)

    // 返回经 middlewares 增强后的 createStore
    return {
      ...store,
      dispatch
    }
  }
}
```

这样下来，原来执行 dispatch(action) 的地方变成了执行新函数

```javascript
(action)=>{
    console.log('【logger】即将执行:', action)
    dispatch(action)
    console.log('【logger】执行完成后 state:', getState())
}
```

这样就实现了action -> reducer的拦截，所以每次触发 action 都能被 log 出来了，😄。

对于异步中间件的情况也同理 , 以 redux-thunk 为例:

```javascript
// 这是简化后的 redux-thunk
const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
```

这里可以看到，当 dispatch 的收到的 action 为函数时，将试图嵌套执行这个函数。套用这个中间件后的 dispatch 方法就更 “聪明” 了，这就是为什么 redux 中规定 action 必须为纯对象而在 redux-thunk 中传的 action 却是 function 而不会报错的原因。

# 小结
redux 中间件通过改写 store.dispatch 方法实现了action -> reducer的拦截，从上面的描述中可以更加清晰地理解 redux 中间件的洋葱圈模型：
```html
中间件A -> 中间件B-> 中间件C-> 原始 dispatch -> 中间件C -> 中间件B -> 中间件A
```
这也就提醒我们使用中间件时需要注意这个中间件是在什么时候 “搞事情” 的，比如 redux-thunk 在执行 next(action) 前就拦截了类型为 function 的 action，而 redux-saga 就在 next(action) 才会触发监听 sagaEmitter.emit(action), 并不会拦截已有 action 到达 reducer。

# 附：compose 函数的实现

```javascript
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
}
```

精妙之处就在巧妙的利用了 Array.prototype.reduceRight(callback[, initialValue]) 这个我们平时不怎么用到的函数。该方法将数组中每一项从右向左调用callback，本例中的callback即为

```javascript
(composed, f) => f(composed)
```

initialValue初始值是数组中最后一个func。

这里下面是另一种实现：

```javascript
const compose = (...funcs) => (result) => {
    //... 省略边界判断
    for (var i = funcs.length - 1; i > -1; i--) {
      result = funcs[i].call(this, result);
    }
    return result;
}
```

这种写法就更容易理解为什么compose(f, g, h)(...args)效果等同于 f(g(h(...args)))，但是就没有上面那种优雅😂。