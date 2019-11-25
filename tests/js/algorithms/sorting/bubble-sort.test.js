import { bubbleSort } from '../../../../src/js/algorithms/sorting/bubble-sort'
import { Compare } from '../../../../src/js/util'

describe('Bubble Sort', () => {
  const SIZE = 10

  function createNonSortedArray () {
    const array = []
    for (let i = SIZE; i > 0; i--) {
      array.push(i)
    }
    return array
  }

  function createSortedArray () {
    const array = []
    for (let i = 1; i <= SIZE; i++) {
      array.push(i)
    }
    return array
  }

  function reverseCompare (a, b) {
    if (a === b) {
      return 0
    }
    return a < b ? Compare.BIGGER_THAN : Compare.LESS_THAN
  }

  it('works with empty arrays', () => {
    expect(bubbleSort([])).toStrictEqual([])
  })

  it('works with sorted arrays', () => {
    let array = createSortedArray()
    const sortedArray = createSortedArray()
    array = bubbleSort(array)
    expect(array).toStrictEqual(sortedArray)
  })

  it('works with non-sorted arrays', () => {
    let array = createNonSortedArray()
    const sortedArray = createSortedArray()
    array = bubbleSort(array)

    expect(array).toStrictEqual(sortedArray)

    for (let i = 0; i < array.length - 1; i++) {
      expect(array[i] <= array[i + 1]).toBe(true)
    }
  })

  it('works with reverse comparator - descending order', () => {
    let array = createSortedArray()
    const sortedArray = createNonSortedArray()
    array = bubbleSort(array, reverseCompare)

    expect(array).toStrictEqual(sortedArray)

    for (let i = 0; i < array.length - 1; i++) {
      expect(array[i] >= array[i + 1]).toBe(true)
    }
  })
})
