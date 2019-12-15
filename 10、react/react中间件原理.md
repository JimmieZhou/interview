<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-15 20:41:59
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-15 20:46:10
 -->
# 解读react中间件原理

Redux 的中间件提供的是位于 action 被发起之后，到达 reducer 之前的扩展点，换而言之，原本 view -> action -> reducer -> store 的数据流加上中间件后变成了 view -> action -> middleware -> reducer -> store ，在这一环节我们可以做一些 “副作用” 的操作，如 异步请求、打印日志等。<span style="color:red">红色</span>

