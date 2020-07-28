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

// 回文字符串的衍生问题

// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 示例 1: 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
function validPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    }
  }
  return isPalindrome(i + 1, j) || isPalindrome(i, j - 1);
  function isPalindrome(left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
