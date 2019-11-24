import { shuffle } from '../../../../src/js/algorithms/shuffle/fisher–yates'

describe('Fisher-Yates Suffle', () => {
  const SIZE = 100

  function createSortedArray () {
    const array = []
    for (let i = 1; i <= SIZE; i++) {
      array.push(i)
    }
    return array
  }

  it('works with empty arrays', () => {
    expect(shuffle([])).toStrictEqual([])
  })

  it('works with arrays with a single value', () => {
    const array = [1]
    expect(shuffle(array)).toStrictEqual(array)
  })

  it('works with sorted arrays', () => {
    let array = createSortedArray()
    const sortedArray = createSortedArray()
    array = shuffle(array)
    expect(array).not.toStrictEqual(sortedArray)
  })
})
