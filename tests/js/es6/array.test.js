describe('es array find method', () => {
  it('one item meet the conditions', () => {
    const res = [1, 4, -5, 10].find((n) => n < 0)
    expect(res).toBe(-5)
  })

  it('more item meet the conditions', () => {
    const res = [1, 5, 10, 15].find((value, index, arr) => value > 9)
    expect(res).toBe(10)
  })

  it('searching one by one', () => {
    const fn = jest.fn()
    const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].find((value, index, arr) => {
      fn()
      return value > 5
    })
    expect(res).toBe(6)
    expect(fn).toHaveBeenCalledTimes(6)
  })
})
