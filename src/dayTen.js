export function lookAndSay (number, iterations) {
  let numberGroups = generateNewNumberGroup(number)

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
      let groupValue = group[0]
      newNum += (groupLength + groupValue)
    })
    return newNum
  }

  for (let i = 0; i < iterations; i++) {
    let newNumber = generateNewNumber(numberGroups)
    numberGroups = generateNewNumberGroup(newNumber)
  }

  return numberGroups.join('').length
}