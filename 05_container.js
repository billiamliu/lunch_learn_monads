const { concat, prop } = require('ramda')
const _ = console.log
const ø = function () {}

// how about branching in flow?

class Container {
  constructor(x) {
    this._value = x
  }

  static of(x) {
    return new Container(x)
  }

  inspect() {
    return `Container(${this._value})`
  }
}

ø(
  Container.of(3)
)




Container.prototype.map = function (fn) {
  return Container.of(fn(this._value))
}

// containers can carry different types
ø(
  // Container.of(123).map(n => n * 10)
  Container.of('things')
    .map(concat(' wat things'))
    .map(prop('length'))
)
