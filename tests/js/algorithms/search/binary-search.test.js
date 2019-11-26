import { binarySearch } from '../../../../src/js/algorithms/search/binary-search'
const customEquals = (a, b) => a.key === b.key

describe('Binary Search', () => {
  const SIZE = 10

  function createSortedArray () {
    const array = []
    for (let i = 1; i <= SIZE; i++) {
      array.push(i)
    }
    return array
  }

  it('works with empty arrays', () => {
    expect(binarySearch([], 1)).toEqual(-1)
  })

  it('finds value at the first position', () => {
    const array = createSortedArray()
    expect(binarySearch(array, 1)).toEqual(0)
  })

  it('finds value at the last position', () => {
    const array = createSortedArray()
    expect(binarySearch(array, SIZE)).toEqual(SIZE - 1)
  })

  it('finds value at different positions', () => {
    const array = createSortedArray()

    for (let value = 1; value <= SIZE; value++) {
      expect(binarySearch(array, value)).toEqual(value - 1)
    }
  })

  it('finds value with custom equals function', () => {
    const array = [{ key: 1 }, { key: 2 }, { key: 3 }]
    expect(binarySearch(array, { key: 2 }, customEquals)).toEqual(1)
  })

  it('vs Array.prototype.findIndex', () => {
    const arr1 = [2, 7, 8, 5, 4, 1, 9, 10, 3, 6]
    const arr2 = [...arr1]
    // const fn1 = jest.fn()
    const res1 = binarySearch(arr1, 2) // 已把原数组进行了排序，直接更改了原数组

    const fn2 = jest.fn()
    const res2 = arr2.findIndex((value, index, arr) => {
      fn2()
      return value === 5
    })
    console.info(res1, 'res1')
    console.info(res2, 'res2')
    // expect(fn1).toBeCalledTimes(2)
    expect(fn2).toBeCalledTimes(4)
    // expect(res1).toBeLessThan(res2)
    // expect(res1).toEqual(res2)
  })
})
