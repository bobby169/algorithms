import { Compare, defaultCompare, swap } from '../../util'

/**
 * 改进后的冒泡排序，如果从内循环减去外循环中已跑过的轮数，就可以避免内循环中所有不必要的比较
 * @param array
 * @param compareFn
 * @returns {*}
 */
export function modifiedBubbleSort (array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    // console.log('--- ');
    for (let j = 0; j < length - 1 - i; j++) {
      // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
