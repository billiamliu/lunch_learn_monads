const { curry, map } = require('ramda')
const _ = console.log
const ø = function () {}



// CURRY
// (* → a) → (* → a)



/*
{
  const makeAdder = x => y => x + y
  const inc = makeAdder(1)
  const addTen = makeAdder(10)

  ø( inc(9) )
  ø( addTen(90) )
}
*/

/*
{
  const match = curry((what, str) => str.match(what))
  const replace = curry((what, replacement, str) => str.replace(what, replacement))
  const filter = curry((fil, things) => things.filter(fil))
  const map = curry((fn, things) => things.map(fn))

  const hasLetterR = match(/r/g)
  ø(
    hasLetterR('hello world'),
    hasLetterR('aoeu;qjk')
  )

  const removeStringsWithoutRs = filter(hasLetterR)
  ø(
    removeStringsWithoutRs([
      'foo bar',
      'hello', // <---
      'arrrrr',
      'qux r'
    ])
  )

  const noVowels = replace(/[aoeui]/ig)
  const censored = noVowels('*')
  ø(
    censored('Lendesk_prod_key: the quick fox jumps...')
  )
}
*/


// MAP (curried)
// Functor f => (a → b) → f a → f b

// - partial application
// - function reuse
// - removes boiler plate code
// - enhance existing functions

/*
{
  const applications = [{incomes: [1, 3, 5, 7]}, {incomes: [2, 4, 6, 8]}]

  const getIncomes = app => app.incomes
  const allIncomes = map(getIncomes)
  // vs slightly more boilerplate
  const _allIncomes_ = apps => apps.map(getIncomes)
  _(
    allIncomes(applications),
    _allIncomes_(applications)
  )
}
*/
