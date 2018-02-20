const { curry, compose, reduce } = require('ramda')
const _ = console.log
const ø = function () {}  

/*
{
  const upperCase = str => str.toUpperCase()
  const exclaim = str => `${str}!!!`
  const moarExclaim = str => `!!!${str}`

  // old
  const shout = str => exclaim(upperCase(str))
  ø(
    shout('hello')
  )

  // new
  const aaronD = compose(moarExclaim, exclaim, upperCase)
  ø(
    aaronD('distributed systems')
  )

  const reverse = reduce((acc, x) => [x].concat(acc), [])
  const head = x => x[0]
  const last = compose(head, reverse)

  const techs = ['react', 'rails', 'pg', 'phoenix']

  // associativity
  // compose( compose(f, g), h ) === compose( f, compose(g, h) )
  const impl1 = compose(compose(exclaim, upperCase), last)
  const impl2 = compose(exclaim, compose(upperCase, last))
  ø(
    impl1(techs),
    impl2(techs)
  )
}
*/

/*
{
  // POINTFREE

  // util
  const toLowerCase = str => str.toLowerCase()
  const replace = curry((what, replacement, str) => str.replace(what, replacement))

  // not point free
  const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_')

  // pointfree, easily composed
  const rubyCase = compose(replace(/\s+/ig, '_'), toLowerCase)

  _(
    snakeCase('hello world'),
    rubyCase('hello world')
  )
}
*/
