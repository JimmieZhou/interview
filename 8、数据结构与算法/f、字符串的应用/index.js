// 一、反转字符串

// 定义被反转的字符串
const str = "juejin";
const ret = str.split("").reverse().join("");

// 二、判断一个字符串是否是回文字符串

// 回文字符串，就是正着读和倒着读都一🐱一样的字符串，比如这样的：'yessey'

// 方法一
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// 方法二
function isPalindrome2(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
