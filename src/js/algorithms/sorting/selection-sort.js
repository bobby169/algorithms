import { Compare, defaultCompare, swap } from '../../util'

/**
 * 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推
 * @param array
 * @param compareFn
 * @returns {*}
 */
export const selectionSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++) {
    indexMin = i // 假设本迭代轮次的第一个值为数组最小值
    // console.log('index ' + array[i]);
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        // console.log('new index min ' + array[j]);
        indexMin = j
      }
    }
    if (i !== indexMin) {
      // console.log('swap ' + array[i] + ' with ' + array[indexMin]);
      swap(array, i, indexMin)
    }
  }
  return array
}
