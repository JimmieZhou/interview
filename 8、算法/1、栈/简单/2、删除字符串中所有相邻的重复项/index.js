/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-05 12:59:40
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-05 12:59:54
 */
var removeDuplicates = function (S) {
    var stack = []
    // "aababaab"
    for (var i = 0; i < S.length; i++) {
        if (stack[stack.length - 1] == S[i]) {
            stack.pop()
        } else {
            stack.push(S[i])
        }
    }
    return stack.join('')
};