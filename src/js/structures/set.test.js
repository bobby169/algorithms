const set = require("./set")
// @ponicode
describe("add", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.add({ key3: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.add({ key3: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.add({ key3: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.add({ key3: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.add({ key3: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.add({ key3: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("has", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.has(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.has(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.has(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("values", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.values()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("union", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.union({ key2: ["Foo bar", "Foo bar", "Foo bar", "Foo bar"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.union(["v4.0.0-rc.4", "1.0.0", "4.0.0-beta1\t", "v4.0.0-rc.4", "v1.2.4", "4.0.0-beta1\t", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.union(["1.0.0", "v1.2.4", "v4.0.0-rc.4", "^5.0.0", "^5.0.0", "^5.0.0", "v4.0.0-rc.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.union({ key2: ["Hello, world!", "Hello, world!", "This is a Text", "Hello, world!"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.union({ key2: ["Foo bar", "Hello, world!", "Hello, world!", "This is a Text"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.union(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("intersection", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.intersection(["1.0.0", "^5.0.0", "^5.0.0", "v4.0.0-rc.4", "v4.0.0-rc.4", "v4.0.0-rc.4", "v4.0.0-rc.4", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.intersection(["1.0.0", "v1.2.4", "4.0.0-beta1\t", "1.0.0", "4.0.0-beta1\t", "1.0.0", "^5.0.0", "4.0.0-beta1\t"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.intersection(["1.0.0", "1.0.0", "v1.2.4", "^5.0.0", "v4.0.0-rc.4", "^5.0.0", "v4.0.0-rc.4", "^5.0.0"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.intersection(["4.0.0-beta1\t", "^5.0.0", "^5.0.0", "^5.0.0", "v1.2.4", "4.0.0-beta1\t", "^5.0.0", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.intersection(["4.0.0-beta1\t", "4.0.0-beta1\t", "^5.0.0", "^5.0.0", "v1.2.4", "4.0.0-beta1\t", "4.0.0-beta1\t", "4.0.0-beta1\t"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.intersection(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("difference", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.difference(["v1.2.4", "1.0.0", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.difference(["^5.0.0", "v4.0.0-rc.4", "^5.0.0"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.difference(["4.0.0-beta1\t", "4.0.0-beta1\t", "1.0.0"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.difference(["v1.2.4", "v4.0.0-rc.4", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.difference(["1.0.0", "v1.2.4", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.difference(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isSubsetOf", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.isSubsetOf("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.isSubsetOf("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.isSubsetOf("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.isSubsetOf("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.isSubsetOf("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.isSubsetOf(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isEmpty", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
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
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.size()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("clear", () => {
    let inst

    beforeEach(() => {
        inst = new set.default()
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
        inst = new set.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.toString()
        }
    
        expect(callFunction).not.toThrow()
    })
})
