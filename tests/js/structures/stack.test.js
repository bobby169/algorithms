import Stack from '../../../src/js/structures/stack'
describe('Stack', () => {
  let stack
  beforeEach(() => {
    stack = new Stack()
  })

  it('starts empty', () => {
    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)
  })

  it('pushes elements', () => {
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.push(3)
    expect(stack.size()).toBe(3)
    expect(stack.isEmpty()).toBe(false)
  })

  it('pops elements', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
  })

  it('implements LIFO logic', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
  })

  it('allows to peek at the top element in he stack without popping it', () => {
    expect(stack.peek()).toBe(undefined)

    stack.push(1)
    expect(stack.peek()).toBe(1)

    stack.push(2)
    expect(stack.peek()).toBe(2)

    stack.pop()
    expect(stack.peek()).toBe(1)
  })

  it('returns the correct size', () => {
    expect(stack.size()).toBe(0)
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.push(3)
    expect(stack.size()).toBe(3)

    stack.clear()
    expect(stack.isEmpty()).toBe(true)

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop()
    expect(stack.size()).toBe(2)
    stack.pop()
    expect(stack.size()).toBe(1)
    stack.pop()
    expect(stack.size()).toBe(0)
    stack.pop()
    expect(stack.size()).toBe(0)
  })

  it('returns if it is empty', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
    stack.push(2)
    expect(stack.isEmpty()).toBe(false)
    stack.push(3)
    expect(stack.isEmpty()).toBe(false)

    stack.clear()
    expect(stack.isEmpty()).toBe(true)

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop()
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })

  it('clears the stack', () => {
    stack.clear()
    expect(stack.isEmpty()).toBe(true)

    stack.push(1)
    stack.push(2)

    stack.clear()
    expect(stack.isEmpty()).toBe(true)
  })

  it('returns toString primitive types', () => {
    expect(stack.toString()).toBe('')

    stack.push(1)
    expect(stack.toString()).toBe('1')

    stack.push(2)
    expect(stack.toString()).toBe('1,2')

    stack.clear()
    expect(stack.toString()).toBe('')

    stack.push('el1')
    expect(stack.toString()).toBe('el1')

    stack.push('el2')
    expect(stack.toString()).toBe('el1,el2')
  })

  it('returns toString objects', () => {
    class MyObj {
      constructor (el1, el2) {
        this.el1 = el1
        this.el2 = el2
      }

      toString () {
        return `${this.el1.toString()}|${this.el2.toString()}`
      }
    }
    expect(stack.toString()).toBe('')

    stack.push(new MyObj(1, 2))
    expect(stack.toString()).toBe('1|2')

    stack.push(new MyObj(3, 4))
    expect(stack.toString()).toBe('1|2,3|4')
  })
})
