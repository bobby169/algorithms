
// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// Set没有get()方法获取元素。且无法像数组用下标方式，（可以用[...new Set(array)]转化为array），但可以用Iterator遍历器接口获取元素
// Set 内置Iterator遍历器接口（同Array一样），有keys()、values()、entries()、forEach()方法

describe('es6 Set', () => {
  let set
  beforeEach(() => {
    set = new Set()
  })

  it('starts empty', () => {
    expect(set.size).toBe(0)
  })

  it('accept parameter array', () => {
    set = new Set([1, 2, 3, 4, 4])
    expect(set.size).toBe(4)
  })

  it('accept parameter iterable Elements', () => {
    for (let i = 0; i < 5; i++) {
      const div = document.createElement('div')
      document.body.append(div)
    }
    set = new Set(document.querySelectorAll('div'))
    expect(set.size).toBe(5)
  })

  it('accept parameter string', () => {
    const str = [...new Set('ababbc')].join('')
    expect(str).toBe('abc')
  })

  it('is like an Array that only stores unique values', () => {
    set.add('dad')
    set.add('mom')
    set.add('dad')
    set.add('dad')
    set.add('dad')
    expect(set.size).toEqual(2)
  })

  it('.add() methods return set', () => {
    for (let i = 1; i < 5; i++) {
      expect(set.add(i)).toBe(set)
    }
  })

  it('deletes elements', () => {
    for (let i = 1; i < 5; i++) {
      set.add(i)
    }

    for (let i = 1; i < 5; i++) {
      expect(set.delete(i)).toBe(true)
    }

    // elements do not exist
    for (let i = 1; i < 5; i++) {
      expect(set.delete(i)).toBe(false)
    }
  })

  it('returns if element exists', () => {
    for (let i = 1; i < 5; i++) {
      set.add(i)
      expect(set.has(i)).toBe(true)
    }

    for (let i = 1; i < 5; i++) {
      expect(set.delete(i)).toBe(true)
      expect(set.has(i)).toBe(false)
    }
  })

  it('returns the correct size', () => {
    expect(set.size).toBe(0)

    for (let i = 1; i < 5; i++) {
      set.add(i)
      expect(set.size).toBe(i)
    }

    const max = 5
    for (let i = 1; i < max; i++) {
      set.delete(i)
      expect(set.size).toBe(max - i - 1)
    }

    expect(set.size).toBe(0)
  })

  it('clears the set', () => {
    set.clear()
    expect(set.size).toBe(0)

    set.add(1)
    set.add(2)
    expect(set.size).toBe(2)

    set.clear()
    expect(set.size).toBe(0)
  })
})
