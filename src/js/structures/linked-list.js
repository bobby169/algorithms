import { defaultEquals } from '../util'
import { Node } from './models/linked-list-models'

/**
 * 要存储多个元素，数组(或列表)可能是最常用的数据结构。数组的大小是固定的，从数组的起点或中间插入或移除项的成本很高，因为需要移动元素。
 * 且数组可以用下标访问，在内存中空间是连续放置的。当你需要添加和移除很多元 素时，最好的选择就是链表，而非数组。
 *
 * 链表存储有序的元素集合，但不同于数组，**链表中的元素在内存中并不是连续放置的**。
 * 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成。
 *
 * 相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。
 * 然而，链表需要使用指针，因此实现链表时需要额外注意。在数组中，我们可以直接访问任何位置的任何元素，
 * 而要想访问链表中间的一个元素，则需要从起点(表头)开始迭代链表直到找到所需的元素。
 *
 * 得到链表中间的线索的唯一办法，就是从起点(第一条线索)顺着链表寻找。
 */
export default class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
    this.count = 0
    this.head = undefined // 保存第一个元素的引用
  }

  /**
   * 向链表尾部添加元素
   */
  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) { // 链表为空，添加的是第一个元素
      // catches null && undefined
      this.head = node
    } else {
      current = this.head // 我们只有第一个元素的引用
      while (current.next != null) { // 循环获得最后一项，即next为null或undefined时，即为链表尾部
        current = current.next
      }
      current.next = node // 把元素element放入最后next指针中
    }
    this.count++
  }

  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  /**
   * 在任意位置插入元素
   * @param element
   * @param index
   * @returns {boolean}
   */
  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) { // 在第一个位置添加
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next // 跳过current，指向current的下一个即current.next
        // this.head = this.head.next
      } else {
        // 得到当前元素的前一个元素
        const previous = this.getElementAt(index - 1)
        // 将previous与current的下一项链接起来:跳过current，从而移除它
        current = previous.next
        previous.next = current.next // 把previous.next与current.next连接起来，当前节点就会被丢弃在计算机内存中，等着被垃圾回收器清除
      }
      this.count--
      return current.element
    }
    return undefined
  }

  /**
   * 从链表中移除元素
   * @param element
   */
  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  isEmpty () {
    return this.size() === 0
  }

  size () {
    return this.count
  }

  getHead () {
    return this.head
  }

  clear () {
    this.head = undefined
    this.count = 0
  }

  toString () {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
