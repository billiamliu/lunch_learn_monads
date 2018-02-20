const { curry, reduce, map, compose } = require('ramda')
const _ = console.log
const ø = function () {}
const add = n => x => n + x

class Either{
  static of(x) { return new Right(x) }
  constructor(x) { this._value = x }
}

class Left extends Either {
  map(f) { return this }
  inspect() { return `Left(${this._value})` }
}

class Right extends Either {
  map(f) { return Right.of(f(this._value)) }
  inspect() { return `Right(${this._value})` }
}

// util
const left = x => new Left(x)
const sum = ns => ns.reduce((acc, n) => acc + n, 0)
const formatMoney = n => `CAD$${n}.00`


const totalIncome = curry(user => 
  user.employed
    ? Either.of(sum(user.incomes))
    : left('User is not employed')
)

ø(
  totalIncome({ employed: true, incomes: [1, 3, 5, 7] }),
  totalIncome({ employed: false })
)






const myApp = compose(map(formatMoney), totalIncome)
const kenny = { employed: true, incomes: [2, 4, 6, -1000]}
const andrea = { employed: false }
ø(
  myApp(kenny),
  myApp(andrea)
)
