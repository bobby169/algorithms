// Map 和 Set 与其弱化版本之间仅有的区别是：
// - WeakSet 或 WeakMap 类没有 entries、keys 和 values 等方法和size属性
// - 只能用对象作为键

// 创建和使用这两个类主要是为了性能。WeakSet 和 WeakMap 是弱化的(用对象作为键)，
// 没有强引用的键。这使得 JavaScript 的垃圾回收器可以从中清除整个入口

// 另一个优点是，必须用键才可以取出值。这些类没有 entries、keys 和 values 等迭代器
// 方法，因此，除非你知道键，否则没有办法取出值
describe('es6 WeakSet', () => {
  let set
  beforeEach(() => {
    set = new WeakSet()
  })

  it('no properties size', () => {
    expect(set.size).toBe(undefined)
  })

  it('set week references key null', () => {
    let key = new Array(5 * 1024 * 1024)
    set.add(key)
    expect(set.has(key)).toBe(true)

    // 引用的key设为null，会被垃圾回收机制回收
    key = null
    expect(set.has(key)).toBe(false)
  })

  it('add element and remove element', () => {
    let ele = document.createElement('div')
    document.body.appendChild(ele)
    set.add(ele)
    expect(set.has(ele)).toBe(true)

    document.body.removeChild(ele)
    expect(set.has(ele)).toBe(true)

    ele = null
    expect(set.has(ele)).toBe(false)
  })
})
