let _ = require('underscore')

export function sumTheNumbersIn (input, ignoreRed) {
  let amounts = getNumbersFromObject(JSON.parse(input), ignoreRed)
  if (amounts.length) return amounts.reduce((a, b) => { return a + b })
  return 0
}

function getNumbersFromObject (object, ignoreRed, amountsToSum) {
  amountsToSum = amountsToSum || []
  let canCollect = true

  function collectNumbers () {
    _.each(object, (value, key) => {
      if (_.isNumber(value)) amountsToSum.push(value)
      if (_.isObject(value)) getNumbersFromObject(value, ignoreRed, amountsToSum)
    })
  }

  if (ignoreRed && object.constructor === Object) _.each(object, (value, key) => { if (key === 'red' || value === 'red') canCollect = false })

  if (canCollect) collectNumbers()
  return amountsToSum
}
