/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-10 11:11:12
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-10 11:11:49
 */

/**
 * 斐波那契数列就是从 0 和 1 开始，后面的数都是前两个数之和

0，1，1，2，3，5，8，13，21，34，55，89....
 */

function fib(n) {
    if (n < 2 && n >= 0) return n
    return fib(n - 1) + fib(n - 2)
}
fib(10)