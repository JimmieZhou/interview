// 一、Map 的妙用——两数求和问题

// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

// 大家记住一个结论：几乎所有的求和问题，都可以转化为求差问题。 这道题就是一个典型的例子，通过把求和问题转化为求差问题，事情会变得更加简单。
function twoSum(nums, target) {
  const diff = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (diff[target - nums[i]] !== undefined) {
      return [diff[target - nums[i]], i];
    }
    diff[nums[i]] = i;
  }
}
