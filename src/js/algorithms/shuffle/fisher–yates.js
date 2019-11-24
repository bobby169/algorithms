import { swap } from '../../util'

/**
 * 从最后一位开始并将当前位置和一个随机位置进行交换。
 * 这个随机位置比当前位置小。这样，这个算法可以保证随机过的位置不会再被随机一次(洗扑克牌的次数越多，随机效果越差)
 */
export function shuffle (array) {
  let currentIndex = array.length
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    swap(array, currentIndex, randomIndex)
  }
  return array
}
