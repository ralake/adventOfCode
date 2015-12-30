let _ = require('underscore')

export function lookAndSay (number, iterations) {
  let numberGroups = generateNewNumberGroup(number)
  for (let i = 0; i < iterations; i++) {
    let newNumber = generateNewNumber(numberGroups)
    numberGroups = generateNewNumberGroup(newNumber)
  }
  return numberGroups.join('').length
}

function generateNewNumberGroup (string) {
  let groupsOfNumbers = new RegExp(/(\d)\1+|\d?/, 'g')
  let group = string.match(groupsOfNumbers)
  group.pop()
  return group
}

function generateNewNumber (numGroups) {
  let newNum = ''
  numGroups.forEach((group) => {
    let groupLength = group.length
    let groupValue = _.first(group)
    newNum += (groupLength + groupValue)
  })
  return newNum
}
