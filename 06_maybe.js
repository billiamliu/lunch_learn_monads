const { curry, compose, prop } = require('ramda')
const _ = console.log
const ø = function () {}
const add = n => x => n + x

class Maybe {
  static of(x) {
    return new Maybe(x)
  }

  get isNothing() {
    return this._value === null || this._value === undefined
  }

  constructor(x) {
    this._value = x
  }

  map(f) {
    return this.isNothing ? this : Maybe.of(f(this._value))
  }

  inspect() {
    return this.isNothing ? 'Nothing()' : `Just(${this._value})`
  }
}

ø(
  // Maybe.of(11).map(add(99))
  // Maybe.of([][0]).map(add(123))
  //  Maybe.of({ team: 'CTL' }).map(prop('skillLevel')).map(add(5))
   // Maybe.of({ team: 'A-Team', skillLevel: 999 }).map(prop('skillLevel')).map(add(1))
)




// POINT FREE
// map :: Functor f => (a -> b) f a -> f b
const map = curry((f, functor) => functor.map(f))

const safeHead = things => Maybe.of(things[0]) // things can be []!
const streetName = compose(map(prop('street')), safeHead, prop('addresses'))

ø(
  streetName({ addresses: [] }),
  streetName({addresses: [{street: 'Homer'}, {street: 'Helmcken'}]})
)
