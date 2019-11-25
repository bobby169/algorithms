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
})
