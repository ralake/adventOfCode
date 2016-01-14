import { getAllPermutations } from './helpers'
let _ = require('underscore')

export function findOptimalSeatingArrangement (input) {
  let guestOpinions = generateOpinionMap(input)
  let seatingArrangements = getAllPermutations(generateSeatingArrangement(input))
  let allHappinessScores = _.map(seatingArrangements, (arrangement, index) => {
    let happinessScores = _.map(arrangement, (guest, index) => {
      let opinions = guestOpinions.get(guest)
      let neighbours = getNeighbours(arrangement, index)
      return [opinions.get(neighbours.left), opinions.get(neighbours.right)]
    })
    return _.flatten(happinessScores).reduce((a, b) => a + b)
  })
  return _.last(allHappinessScores.sort((a, b) => a - b ))
}

function getNeighbours (arrangement, index) {
  if (index === 0) {
    return {
      left: _.last(arrangement),
      right: arrangement[index + 1]
    }
  } else if (index === arrangement.length - 1) {
    return {
      left: arrangement[index - 1],
      right: _.first(arrangement)
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
    let guest = _.first(opinionComponents)
    let otherGuest = _.last(opinionComponents)
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
    let guest = _.first(opinion.split(' '))
    if (!_.contains(arrangement, guest)) arrangement.push(guest)
  })
  return arrangement
}
