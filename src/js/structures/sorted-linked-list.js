import { Compare, defaultCompare, defaultEquals } from '../util'
import LinkedList from './linked-list'

/**
 * 有序链表是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到
 正确的位置来保证链表的有序性。
 */
export default class SortedLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.equalsFn = equalsFn
    this.compareFn = compareFn
  }

  push (element) {
    if (this.isEmpty()) {
      super.push(element)
    } else {
      const index = this.getIndexNextSortedElement(element)
      super.insert(element, index)
    }
  }

  insert (element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, index === 0 ? index : 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }

  /**
   * 我们需要迭代整个有序链表直至找到需要插入元素的位置，或是迭代完所有的元素
   * @param element
   * @returns {number}
   */
  getIndexNextSortedElement (element) {
    let current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      // TODO:element的比较是数字，如果是Object呢？
      // TODO: 是否要加current = this.head
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}
