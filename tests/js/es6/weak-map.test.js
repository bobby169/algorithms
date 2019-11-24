// WeakMap 与 Map 在 API 上的区别主要是两个：
// 一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性，没有clear()方法。
// WeakMap只有四个方法可用：get()、set()、has()、delete()。

describe('WeakMap', () => {
  it('set element key', () => {
    const map = new WeakMap()
    let ele = document.createElement('div')
    document.body.appendChild(ele)

    map.set(ele, { value: 0 })
    expect(map.get(ele)).toStrictEqual({ value: 0 })

    let data = map.get(ele)
    data.value++
    expect(map.get(ele)).toStrictEqual({ value: 1 })

    ele = null
    expect(map.has(ele)).toBe(false)
  })
})
