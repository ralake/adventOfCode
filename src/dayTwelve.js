export function sumTheNumbersIn (input) {
  return getNumbersFromObject(JSON.parse(input)).reduce((a, b) => { return a + b })
}

function getNumbersFromObject (object, amountsToSum) {
  amountsToSum = amountsToSum || []
  Object.keys(object).forEach((key) => {
    let value = object[key]
    if (typeof value === 'number') amountsToSum.push(value)
    if (typeof value === 'object') getNumbersFromObject(value, amountsToSum)
  })
  return amountsToSum
}
