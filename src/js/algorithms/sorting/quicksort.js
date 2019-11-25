import { Compare, defaultCompare, swap } from '../../util'

/**
 * 这个过程将使得比主元pivot小的值都排在主元之前，而比主元大的值都排在主元之后。这一步叫作划分(partition)操作
 */
function partition (array, left, right, compareFn) {
  // 从数组中选择一个值作为主元(pivot)，也就是数组中间的那个值
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left // 左边一个指向数组第一个值
  let j = right // 右边一个指向数组最后一个值

  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++ // 动左指针直到我们找到一个比主元大的值
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j-- // 移动右指针直到找到一个比主元小的值
    }
    if (i <= j) {
      swap(array, i, j) // 交换它们
      i++
      j--
    }
  }
  return i
}

function quick (array, left, right, compareFn) {
  let index
  if (array.length > 1) {
    // index变量能帮助我们将子数组分离为较小值数组和较大值数组。 这样就能再次递归地调用 quick 函数了
    index = partition(array, left, right, compareFn)
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }
    if (index < right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}

/**
 * 和归并排序一样，快速排序也使用分而治之的方法，将原始数组分为较小的数组(但它没有像归并排序那样将它们分割开)。
 */
export function quickSort (array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn)
}
