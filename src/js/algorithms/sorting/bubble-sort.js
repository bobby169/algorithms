import { Compare, defaultCompare, swap } from '../../util'

/**
 * 冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。
 * 元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
 * @param array
 * @param compareFn
 * @returns {*}
 */
export function bubbleSort (array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    // console.log('--- ');
    for (let j = 0; j < length - 1; j++) {
      // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
