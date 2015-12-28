import { getAllPermutations } from './helpers'

export function findOptimalSeatingArrangement (input) {
  let guestOpinions = generateOpinionMap(input)
  let seatingArrangements = getAllPermutations(generateSeatingArrangement(input))
  let allHappinessScores = []
  seatingArrangements.forEach((arrangement, index) => {
    let happinessScores = []
    arrangement.forEach((guest, index) => {
      let opinions = guestOpinions.get(guest)
      let neighbours = getNeighbours(arrangement, index)
      happinessScores.push(opinions.get(neighbours.left))
      happinessScores.push(opinions.get(neighbours.right))
    })
    allHappinessScores.push(happinessScores.reduce((a, b) => { return a + b }))
  })
  return allHappinessScores.sort((a, b) => { return a - b })[allHappinessScores.length - 1]
}

function getNeighbours (arrangement, index) {
  if (index === 0) {
    return {
      left: arrangement[arrangement.length - 1],
      right: arrangement[index + 1]
    }
  } else if (index === arrangement.length - 1) {
    return {
      left: arrangement[index - 1],
      right: arrangement[0]
    }
  } else {
    return {
      left: arrangement[index - 1],
      right: arrangement[index + 1]
    }
  }
}

function generateOpinionMap (input) {
  let opinionMap = new Map()
  let opinions = input.split('\n')
  opinions.forEach((opinion) => {
    let opinionComponents = opinion.replace('.', '').split(' ')
    let guest = opinionComponents[0]
    let otherGuest = opinionComponents[opinionComponents.length - 1]
    let loseHappiness = /lose/.test(opinionComponents[2])
    let happinessValue = parseInt(opinionComponents[3], 10)
    if (loseHappiness) happinessValue = -happinessValue
    if (!opinionMap.has(guest)) opinionMap.set(guest, new Map())
    let otherGuests = opinionMap.get(guest)
    otherGuests.set(otherGuest, happinessValue)
  })
  return opinionMap
}

function generateSeatingArrangement (input) {
  let arrangement = []
  let opinions = input.split('\n')
  opinions.forEach((opinion) => {
    let guest = opinion.split(' ')[0]
    if (arrangement.indexOf(guest) < 0) {
      arrangement.push(guest)
    }
  })
  return arrangement
}
