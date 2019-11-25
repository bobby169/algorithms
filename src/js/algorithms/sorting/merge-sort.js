import { Compare, defaultCompare } from '../../util'

function merge (left, right, compareFn) {
  let i = 0
  let j = 0
  const result = []
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++])
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

/**
 * 归并排序是第一个可以实际使用的排序算法。冒泡、选择、插入排序算法性能不好，但归并排序性能不错，其复杂度为 O(nlog(n))。
 * JavaScript 的 Array 类定义了一个 sort 函数(Array.prototype.sort)用以
 * 排序 JavaScript 数组(我们不必自己实现这个算法)。ECMAScript 没有定义用哪个排序算法，所以浏览器厂商可以自行去实现算法。
 * 例如，Mozilla Firefox 使用归并排序作为 Array.prototype.sort 的实现，而 Chrome(V8 引擎)使用了 一个快速排序的变体
 * @param array
 * @param compareFn
 * @returns {*[]}
 */
export function mergeSort (array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle, length), compareFn)
    array = merge(left, right, compareFn)
  }
  return array
}
