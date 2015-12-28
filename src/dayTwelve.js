export function sumTheNumbersIn (input, ignoreRed) {
  let amounts = getNumbersFromObject(JSON.parse(input), ignoreRed)
  if (amounts.length) return amounts.reduce((a, b) => { return a + b })
  return 0
}

function getNumbersFromObject (object, ignoreRed, amountsToSum) {
  amountsToSum = amountsToSum || []
  let canCollect = true

  function collectNumbers () {
    for (let key in object) {
      let value = object[key]
      if (typeof value === 'number') amountsToSum.push(value)
      if (typeof value === 'object') getNumbersFromObject(value, ignoreRed, amountsToSum)
    }
  }

  if (ignoreRed && object.constructor === Object) {
    for (let key in object) {
      if (key === 'red' || object[key] === 'red') {
        canCollect = false
      }
    }
  }

  if (canCollect) collectNumbers()
  return amountsToSum
}
