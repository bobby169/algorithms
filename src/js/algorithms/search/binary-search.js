import { Compare, defaultCompare, DOES_NOT_EXIST } from '../../util'
import { quickSort } from '../sorting/quicksort'

/**
 * 二分搜索算法的原理和猜数字游戏类似，就是那个有人说“我正想着一个 1~100 的数”的
 游戏。我们每回应一个数，那个人就会说这个数是高了、低了还是对了。
 这个算法要求被搜索的数据结构已排序。以下是该算法遵循的步骤。
 ** TODO:这里返回的index是sortedArray后的index，是否不准？
 (1) 选择数组的中间值。
 (2) 如果选中值是待搜索值，那么算法执行完毕(值找到了)。
 (3) 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找(较小)。
 (4) 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找(较大)。
 * @param array
 * @param value
 * @param compareFn
 * @returns {number} // 相当于Array.prototype.findIndex返回index
 */
export function binarySearch (array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array)
  let low = 0
  let high = sortedArray.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
    // console.log('mid element is ' + element);
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1
      // console.log('low is ' + low);
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1
      // console.log('high is ' + high);
    } else {
      // console.log('found it');
      return mid
    }
  }
  return DOES_NOT_EXIST
}
