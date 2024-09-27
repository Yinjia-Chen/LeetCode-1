/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const prevNums = {}; // 设计对象，以属性的形式存入旧元素

  for (let i = 0; i < nums.length; i++) {
    // 遍历数组
    const currentNum = nums[i]; // 声明当前元素变量
    const targetNum = target - currentNum; // 声明目标元素变量
    const targetNumIndex = prevNums[targetNum]; // 求目标元素在旧元素对象中的索引
    if (targetNumIndex !== undefined) {
      // 如果索引存在
      return [targetNumIndex, i]; // 返回目标元素索引与当前元素索引
    } else {
      // 如果索引不存在
      prevNums[currentNum] = i; // 将当前元素作为对象属性，索引作为属性值存入旧元素对象中
    }
  }
};
