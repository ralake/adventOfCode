let _ = require('underscore')

export function findBestCookieScore (ingredients, withoutCalories) {
  const TotalTeaspoons = 100
  const AcceptableCalories = 500
  let properties = getProperties(ingredients, withoutCalories)
  let cookieScores = []
  for (let i = 0; i <= TotalTeaspoons; i++) {
    for (let j = 0; j <= TotalTeaspoons - i; j++) {
      for (let k = 0; k <= (TotalTeaspoons - i - j); k++) {
        let quantities = [i, j, k, (TotalTeaspoons - i - j - k)]
        let propertyGroups = getPropertyGroups(quantities, properties)
        let totals = getTotals(propertyGroups)
        if (withoutCalories) {
          cookieScores.push(_.reduce(totals, (a, b) => { return a * b }))
        } else {
          let calorieCount = _.last(totals)
          if (calorieCount === AcceptableCalories) {
            totals.pop()
            cookieScores.push(_.reduce(totals, (a, b) => { return a * b }))
          }
        }
      }
    }
  }
  return _.max(cookieScores)
}

function getPropertyGroups (quantities, properties) {
  return _.zip.apply(null, _.map(quantities, (quantity, index) => {
    let props = properties[index]
    return _.map(props, (prop) => { return quantity * prop })
  }))
}

function getTotals (propertyGroups) {
  return _.map(propertyGroups, (pair) => {
    let total = _.reduce(pair, (a, b) => { return a + b })
    if (total >= 0) return total
    return 0
  })
}

function getProperties (ingredients, withoutCalories) {
  return _.map(ingredients.split('\n'), (ingredient) => {
    let inner = _.map(ingredient.match(/-?\d+/g), (property) => {
      return parseInt(property, 10)
    })
    if (withoutCalories) inner.pop()
    return inner
  })
}
