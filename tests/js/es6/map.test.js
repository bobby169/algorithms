
describe('es6 Map', () => {
  it('set object key', () => {
    const map = new Map()
    const obj = { p: 'Hello World' }

    map.set(obj, 'content')
    expect(map.get(obj)).toBe('content')
    expect(map.has(obj)).toBe(true)
    map.delete(obj)
    expect(map.has(obj)).toBe(false)
  })

  it('accept param with array', () => {
    const map = new Map([
      ['name', '张三'],
      ['title', 'Author']
    ])

    expect(map.size).toBe(2)
    expect(map.has('name')).toBe(true)
    expect(map.get('name')).toBe('张三')

    expect(map.has('title')).toBe(true)
    expect(map.get('title')).toBe('Author')
  })

  it('accept param with set', () => {
    const set = new Set([
      ['foo', 1],
      ['bar', 2]
    ])
    const map = new Map(set)
    expect(map.get('foo')).toBe(1)
  })

  it('accept param with map', () => {
    const map1 = new Map([['baz', 3]])
    const map2 = new Map(map1)
    expect(map2.get('baz')).toBe(3)
  })

  it('override key', () => {
    const map = new Map()
    map.set(1, 'aaa')
    map.set(1, 'bbb')
    expect(map.get(1)).toBe('bbb')
  })

  it('return undefined key', () => {
    const map = new Map()
    expect(map.get('a')).toBe(undefined)
  })

  it('set same value for key is different', () => {
    const map = new Map()

    const k1 = ['a']
    const k2 = ['a']

    map
      .set(k1, 111)
      .set(k2, 222)
    expect(map.get(k1)).toBe(111)
    expect(map.get(k2)).toBe(222)
  })

  it('reference key to be override', () => {
    const map = new Map()
    const k1 = ['a']
    const k2 = k1

    map
      .set(k1, 111)
      .set(k2, 222)
    expect(map.get(k1)).toBe(222)
    expect(map.get(k2)).toBe(222)
  })

  it('sets undefined and null keys and values', () => {
    const map = new Map()
    map.set('undefined', undefined)
    expect(map.get('undefined')).toBe(undefined)

    map.set('undefined', 1)
    expect(map.get('undefined')).toBe(1)

    map.set('null', null)
    expect(map.get('null')).toBe(null)

    map.set('null', 1)
    expect(map.get('null')).toBe(1)

    map.clear()
    map.set(undefined, undefined)
    expect(map.get(undefined)).toBe(undefined)

    map.set(undefined, 1)
    expect(map.get(undefined)).toBe(1)

    map.set(null, null)
    expect(map.get(null)).toBe(null)

    map.set(null, 1)
    expect(map.get(null)).toBe(1)

    map.clear()
    map.set(-0, 123)
    expect(map.get(-0)).toBe(123)
    expect(map.get(+0)).toBe(123)

    map.set(true, 1)
    map.set('true', 2)
    expect(map.get(true)).toBe(1)
    expect(map.get('true')).toBe(2)

    map.set(NaN, 3)
    expect(map.get(NaN)).toBe(3)
  })

  it('set value null', () => {
    const map = new Map()
    let key = {}
    let obj = { foo: 1 }

    map.set(key, obj)
    expect(map.get(key)).toBe(obj)

    obj = null
    expect(map.get(key)).toStrictEqual({ foo: 1 })
  })
})
