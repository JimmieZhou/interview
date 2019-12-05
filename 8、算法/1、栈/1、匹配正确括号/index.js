/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(str) {
    var map = {
        "(": -1,
        ")": 1,
        "{": -2,
        "}": 2,
        "[": -3,
        "]": 3
    }
    // () {]
    var stack = []
    for (var i = 0; i < str.length; i++) {
        if (map[str[i]] < 0) {
            stack.push(str[i])
        } else {
            var last = stack.pop()
            if (map[last] + map[str[i]] !== 0) {
                return false
            }
        }
    }
    if (stack.length !== 0) {
        return false
    }
    return true
}