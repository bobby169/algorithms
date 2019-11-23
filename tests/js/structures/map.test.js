import Map from '../../../src/js/structures/map'
import MyObj from './my-obj'

describe('Map', () => {
  let map
  beforeEach(() => {
    map = new Map()
  })

  it('starts empty', () => {
    expect(map.size()).toBe(0)
    expect(map.isEmpty()).toBe(true)
  })

  it('sets undefined and null keys and values', () => {
    const map = new Map()
    expect(map.set('undefined', undefined)).toBe(false)
    expect(map.get('undefined')).toBe(undefined)
    expect(map.set('undefined', 1)).toBe(true)
    expect(map.get('undefined')).toBe(1)
    expect(map.set('null', null)).toBe(false)
    expect(map.get('null')).toBe(undefined)
    expect(map.set('null', 1)).toBe(true)
    expect(map.get('null')).toBe(1)
    map.clear()
    expect(map.set(undefined, undefined)).toBe(false)
    expect(map.get(undefined)).toBe(undefined)
    expect(map.set(undefined, 1)).toBe(false)
    expect(map.get(undefined)).toBe(undefined)
    expect(map.set(null, null)).toBe(false)
    expect(map.get(null)).toBe(undefined)
    expect(map.set(null, 1)).toBe(false)
    expect(map.get(null)).toBe(undefined)
  })

  it('sets values with string key', () => {
    const map = new Map()
    const min = 1
    const max = 5
    const size = (max - min) + 1
    for (let i = min; i <= max; i++) {
      expect(map.set(`${i}`, i)).toBe(true)
    }
    expect(map.size()).toBe(size)
    const keys = map.keys()
    expect(keys.length).toBe(size)
    for (let i = 0; i < keys.length; i++) {
      expect(keys[i]).toBe((i + 1).toString(10))
    }
    map.set('a', 1)
    expect(map.get('a')).toBe(1)
  })

  it('sets values with number key', () => {
    const min = 1
    const max = 5
    const size = (max - min) + 1
    for (let i = min; i <= max; i++) {
      expect(map.set(i, i)).toBe(true)
    }
    expect(map.size()).toBe(size)
    const keys = map.keys()
    expect(keys.length).toBe(size)
    for (let i = 0; i < keys.length; i++) {
      expect(keys[i]).toBe(i + 1)
    }
  })

  it('sets values with object', () => {
    const map = new Map()
    const min = 0
    const max = 5
    const size = max - min
    const myObjList = []
    for (let i = min; i < max; i++) {
      myObjList.push(new MyObj(i, i + 1))
    }
    for (let i = min; i < max; i++) {
      expect(map.set(myObjList[i], myObjList[i])).toBe(true)
    }
    expect(map.size()).toBe(size)
    for (let i = min; i < max; i++) {
      expect(map.get(myObjList[i])).toBe(myObjList[i])
    }
    const keys = map.keys()
    expect(keys.length).toBe(size)
    for (let i = 0; i < keys.length; i++) {
      expect(keys[i]).toBe(myObjList[i])
    }
    const values = map.values()
    expect(values.length).toBe(size)
    for (let i = 0; i < values.length; i++) {
      expect(values[i]).toBe(myObjList[i])
    }
  })

  function customToString (key) {
    return `####${key.toString()}`
  }
  it('sets values with custom toString function', () => {
    const map = new Map(customToString)
    const min = 0
    const max = 5
    const size = max - min
    const myObjList = []
    for (let i = min; i < max; i++) {
      myObjList.push(new MyObj(i, i + 1))
    }
    for (let i = min; i < max; i++) {
      expect(map.set(myObjList[i], myObjList[i])).toBe(true)
    }
    expect(map.size()).toBe(size)
    for (let i = min; i < max; i++) {
      expect(map.get(myObjList[i])).toBe(myObjList[i])
    }
    const keys = map.keys()
    expect(keys.length).toBe(size)
    for (let i = 0; i < keys.length; i++) {
      expect(keys[i]).toBe(myObjList[i])
    }
    const values = map.values()
    expect(values.length).toBe(size)
    for (let i = 0; i < values.length; i++) {
      expect(values[i]).toBe(myObjList[i])
    }
  })

  it('deletes elements', () => {
    const min = 1
    const max = 5
    const size = (max - min) + 1
    for (let i = min; i <= max; i++) {
      expect(map.set(i, i)).toBe(true)
    }
    expect(map.size()).toBe(size)
    for (let i = min; i <= max; i++) {
      expect(map.delete(i)).toBe(true)
    }
    // elements do not exist
    for (let i = min; i <= max; i++) {
      expect(map.delete(i)).toBe(false)
    }
    expect(map.isEmpty()).toBe(true)
  })

  it('returns the correct size', () => {
    expect(map.size()).toBe(0)
    const max = 5
    for (let i = 1; i < max; i++) {
      map.set(i, i)
      expect(map.size()).toBe(i)
    }
    for (let i = 1; i < max; i++) {
      map.delete(i)
      expect(map.size()).toBe(max - i - 1)
    }
    expect(map.size()).toBe(0)
    expect(map.isEmpty()).toBe(true)
  })

  it('returns if element exists', () => {
    const min = 1
    const max = 5
    const size = (max - min) + 1
    for (let i = min; i <= max; i++) {
      expect(map.set(i, i)).toBe(true)
    }
    expect(map.size()).toBe(size)
    for (let i = min; i <= max; i++) {
      expect(map.hasKey(i)).toBe(true)
      expect(map.delete(i)).toBe(true)
      expect(map.hasKey(i)).toBe(false)
    }
  })

  it('returns if it is empty', () => {
    expect(map.isEmpty()).toBe(true)
    for (let i = 1; i < 5; i++) {
      map.set(i, i)
      expect(map.isEmpty()).toBe(false)
    }
    for (let i = 1; i < 5; i++) {
      map.delete(i)
      expect(map.isEmpty()).toBe(!(i < 4))
    }
    expect(map.size()).toBe(0)
    expect(map.isEmpty()).toBe(true)
  })

  it('clears the map', () => {
    map.clear()
    expect(map.isEmpty()).toBe(true)
    map.set(1, 1)
    map.set(2, 2)
    map.clear()
    expect(map.isEmpty()).toBe(true)
  })

  it('returns values, keys and value pairs', () => {
    const min = 1
    const max = 5
    const size = (max - min) + 1
    for (let i = min; i <= max; i++) {
      expect(map.set(i, i)).toBe(true)
    }
    expect(map.size()).toBe(size)
    const keys = map.keys()
    const values = map.values()
    const valuePairs = map.keyValues()
    expect(keys.length).toBe(size)
    expect(values.length).toBe(size)
    expect(valuePairs.length).toBe(size)
    for (let i = 0; i < keys.length; i++) {
      expect(keys[i]).toBe(i + 1)
      expect(values[i]).toBe(i + 1)
      expect(valuePairs[i].key).toBe(i + 1)
      expect(valuePairs[i].value).toBe(i + 1)
    }
  })

  it('allows to iterate with forEach', () => {
    for (let i = 1; i <= 5; i++) {
      expect(map.set(i, i)).toBe(true)
    }
    map.forEach((k, v) => {
      expect(map.hasKey(k)).toBe(true)
      expect(map.get(k)).toBe(v)
    })
  })

  it('allows to iterate with forEach and interrupt', () => {
    for (let i = 1; i <= 5; i++) {
      expect(map.set(i, i)).toBe(true)
    }
    const size = map.keys().length
    let index = 1
    map.forEach((k, v) => {
      expect(map.hasKey(k)).toBe(true)
      expect(map.get(k)).toBe(v)
      index++
    })
    expect(index).toBe(size + 1)
    index = 1
    map.forEach((k, v) => {
      expect(map.hasKey(k)).toBe(true)
      expect(map.get(k)).toBe(v)
      index++
      return !(k % 3 === 0)
    })
    expect(index).toBe(size - 1)
  })

  it('returns toString primitive types', () => {
    expect(map.toString()).toBe('')
    map.set(1, 1)
    expect(map.toString()).toBe('[#1: 1]')
    map.set(2, 2)
    expect(map.toString()).toBe('[#1: 1],[#2: 2]')
    map.clear()
    expect(map.toString()).toBe('')
  })

  it('returns toString primitive types: string', () => {
    const map = new Map()
    map.set('el1', 1)
    expect(map.toString()).toBe('[#el1: 1]')
    map.set('el2', 2)
    expect(map.toString()).toBe('[#el1: 1],[#el2: 2]')
  })

  it('returns toString objects', () => {
    const map = new Map()
    expect(map.toString()).toBe('')
    let myObj = new MyObj(1, 2)
    map.set(myObj, myObj)
    expect(map.toString()).toBe('[#1|2: 1|2]')
    myObj = new MyObj(3, 4)
    map.set(myObj, myObj)
    expect(map.toString()).toBe('[#1|2: 1|2],[#3|4: 3|4]')
  })
})
