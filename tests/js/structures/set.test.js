import MyObj from './my-obj'
import Set from '../../../src/js/structures/set'

describe('Set', () => {
  let set

  beforeEach(() => {
    set = new Set()
  })

  it('starts empty', () => {
    expect(set.size()).toBe(0)
    expect(set.isEmpty()).toBe(true)
  })

  it('adds elements', () => {
    for (let i = 1; i < 5; i++) {
      set.add(i)
      expect(set.size()).toBe(i)
    }

    expect(set.isEmpty()).toBe(false)
  })

  it('does not allow duplicated elements', () => {
    let expected = true
    for (let i = 1; i < 5; i++) {
      expect(set.add(i)).toBe(expected)
    }

    expected = false
    for (let i = 1; i < 5; i++) {
      expect(set.add(i)).toBe(expected)
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

    expect(set.isEmpty()).toBe(true)
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
    expect(set.size()).toBe(0)

    for (let i = 1; i < 5; i++) {
      set.add(i)
      expect(set.size()).toBe(i)
    }

    const max = 5
    for (let i = 1; i < max; i++) {
      set.delete(i)
      expect(set.size()).toBe(max - i - 1)
    }

    expect(set.size()).toBe(0)
    expect(set.isEmpty()).toBe(true)
  })

  it('returns if it is empty', () => {
    expect(set.isEmpty()).toBe(true)

    for (let i = 1; i < 5; i++) {
      set.add(i)
      expect(set.isEmpty()).toBe(false)
    }

    for (let i = 1; i < 5; i++) {
      set.delete(i)
      expect(set.isEmpty()).toBe(!(i < 4))
    }

    expect(set.size()).toBe(0)
    expect(set.isEmpty()).toBe(true)
  })

  it('clears the set', () => {
    set.clear()
    expect(set.isEmpty()).toBe(true)

    set.add(1)
    set.add(2)

    set.clear()
    expect(set.isEmpty()).toBe(true)
  })

  function addValues (min, max) {
    set = new Set()

    for (let i = min; i <= max; i++) {
      set.add(i)
    }

    return set
  }

  it('union between empty sets', () => {
    const set1 = new Set()
    const set2 = new Set()

    let setResult = set1.union(set2)
    expect(setResult.isEmpty()).toBe(true)

    setResult = set2.union(set1)
    expect(setResult.isEmpty()).toBe(true)
  })

  it('union between equal sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(1, 5)

    let setResult = set1.union(set2)
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toBe(true)
    }

    setResult = set2.union(set1)
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toBe(true)
    }
  })

  it('union between different sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(6, 10)

    let setResult = set1.union(set2)
    for (let i = 1; i <= 10; i++) {
      expect(setResult.has(i)).toBe(true)
    }

    setResult = set2.union(set1)
    for (let i = 1; i <= 10; i++) {
      expect(setResult.has(i)).toBe(true)
    }
  })

  it('union between sets with common values', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(3, 6)

    let setResult = set1.union(set2)
    for (let i = 1; i <= 6; i++) {
      expect(setResult.has(i)).toBe(true)
    }

    setResult = set2.union(set1)
    for (let i = 1; i <= 6; i++) {
      expect(setResult.has(i)).toBe(true)
    }
  })

  it('intersection between empty sets', () => {
    const set1 = new Set()
    const set2 = new Set()

    let setResult = set1.intersection(set2)
    expect(setResult.isEmpty()).toBe(true)

    setResult = set2.intersection(set1)
    expect(setResult.isEmpty()).toBe(true)
  })

  it('intersection between equal sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(1, 5)

    let setResult = set1.intersection(set2)
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toBe(true)
    }

    setResult = set2.intersection(set1)
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toBe(true)
    }
  })

  it('intersection different sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(6, 10)

    let setResult = set1.intersection(set2)
    expect(setResult.isEmpty()).toBe(true)

    setResult = set2.intersection(set1)
    expect(setResult.isEmpty()).toBe(true)
  })

  it('intersection between sets with common values', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(3, 6)

    let setResult = set1.intersection(set2)
    for (let i = 3; i <= 5; i++) {
      expect(setResult.has(i)).toBe(true)
    }

    setResult = set2.intersection(set1)
    for (let i = 3; i <= 5; i++) {
      expect(setResult.has(i)).toBe(true)
    }
  })

  it('difference between empty sets', () => {
    const set1 = new Set()
    const set2 = new Set()

    let setResult = set1.difference(set2)
    expect(setResult.isEmpty()).toBe(true)

    setResult = set2.difference(set1)
    expect(setResult.isEmpty()).toBe(true)
  })

  it('difference between equal sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(1, 5)

    let setResult = set1.difference(set2)
    expect(setResult.isEmpty()).toBe(true)

    setResult = set2.difference(set1)
    expect(setResult.isEmpty()).toBe(true)
  })

  it('difference different sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(6, 10)

    let setResult = set1.difference(set2)
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toBe(true)
    }

    setResult = set2.difference(set1)
    for (let i = 6; i <= 10; i++) {
      expect(setResult.has(i)).toBe(true)
    }
  })

  it('difference between sets with common values', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(3, 6)

    let setResult = set1.difference(set2)
    for (let i = 1; i <= 2; i++) {
      expect(setResult.has(i)).toBe(true)
    }

    setResult = set2.difference(set1)
    for (let i = 6; i <= 6; i++) {
      expect(setResult.has(i)).toBe(true)
    }
  })

  it('isSubsetOf between empty sets', () => {
    const set1 = new Set()
    const set2 = new Set()

    expect(set1.isSubsetOf(set2)).toBe(true)
    expect(set2.isSubsetOf(set1)).toBe(true)
  })

  it('isSubsetOf between equal sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(1, 5)

    expect(set1.isSubsetOf(set2)).toBe(true)
    expect(set2.isSubsetOf(set1)).toBe(true)
  })

  it('isSubsetOf different sets', () => {
    const set1 = addValues(1, 5)
    const set2 = addValues(6, 10)

    expect(set1.isSubsetOf(set2)).toBe(false)
    expect(set2.isSubsetOf(set1)).toBe(false)
  })

  it('isSubsetOf between sets with common values', () => {
    const set1 = addValues(1, 8)
    const set2 = addValues(3, 6)
    expect(set1.isSubsetOf(set2)).toBe(false)
    expect(set2.isSubsetOf(set1)).toBe(true)

    const set3 = addValues(1, 5)
    const set4 = addValues(3, 6)
    expect(set3.isSubsetOf(set4)).toBe(false)
    expect(set4.isSubsetOf(set3)).toBe(false)
  })

  it('returns toString primitive types', () => {
    expect(set.toString()).toBe('')

    set.add(1)
    expect(set.toString()).toBe('1')

    set.add(2)
    expect(set.toString()).toBe('1,2')

    set.clear()
    expect(set.toString()).toBe('')
  })

  it('returns toString primitive types: string', () => {
    const ds = new Set()
    ds.add('el1')
    expect(ds.toString()).toBe('el1')

    ds.add('el2')
    expect(ds.toString()).toBe('el1,el2')
  })

  it('returns toString objects', () => {
    const ds = new Set()
    expect(ds.toString()).toBe('')

    ds.add(new MyObj(1, 2))
    expect(ds.toString()).toBe('1|2')

    ds.add(new MyObj(3, 4))
    expect(ds.toString()).toBe('1|2,3|4')
  })
})
