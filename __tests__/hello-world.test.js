const { helloWorld } = require("../hello-world")

describe("hello world fn", () => {
  test("returns hello world", () => {
    expect(helloWorld()).toBe("hello world")
  })
  test("does not return asdf", () => {
    expect(helloWorld()).not.toBe("asdf")
  })
})
