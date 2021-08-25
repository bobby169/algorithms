const linked_list = require("./linked-list")
// @ponicode
describe("push", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.push(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.push(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.push(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("insert", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.insert(1, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.insert(1000, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.insert(1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.insert(1000, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.insert(10, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.insert(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("removeAt", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.removeAt(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.removeAt(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.removeAt(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.removeAt(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.removeAt(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("remove", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.remove([true, false, false, true, true, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.remove([false, false, true, true, true, true, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.remove([true, false, false, false, true, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.remove([true, true, false, true, true, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.remove([true, true, true, true, false, true, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.remove(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("indexOf", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.indexOf(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.indexOf(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.indexOf(1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.indexOf(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isEmpty", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.isEmpty()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("size", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.size()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getHead", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getHead()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("clear", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.clear()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("toString", () => {
    let inst

    beforeEach(() => {
        inst = new linked_list.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.toString()
        }
    
        expect(callFunction).not.toThrow()
    })
})
