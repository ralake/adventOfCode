import { getAllPermutations } from './helpers'
let _ = require('underscore')

export function findDistance (input, shortestDistance) {
  let distances = input.split('\n')
  let destinations = getDestinations()
  let journeyCombinations = getAllPermutations(destinations)

  function getAllPossibleJourneyDistances () {
    return _.map(journeyCombinations, (combination, index) => {
      let combinationDistance = 0
      combination.forEach((destination, index) => {
        if (!_.isUndefined(combination[index + 1])) combinationDistance += getCombinationDistance(destination, combination[index + 1])
      })
      return combinationDistance
    })
  }

  function getCombinationDistance (destinationOne, destinationTwo) {
    let distanceBetween
    distances.forEach((distance) => {
      if (distance.indexOf(destinationOne) >= 0 && distance.indexOf(destinationTwo) >= 0) distanceBetween = parseInt(distance.split(' = ')[1], 10)
    })
    return distanceBetween
  }

  function getDestinations () {
    let destinations = []
    distances.forEach((distance) => {
      let elements = distance.split(' ')
      if (!_.contains(destinations, _.first(elements))) destinations.push(_.first(elements))
      if (!_.contains(destinations, elements[2])) destinations.push(elements[2])
    })
    return destinations
  }

  if (shortestDistance) return _.min(getAllPossibleJourneyDistances())
  return _.max(getAllPossibleJourneyDistances())
}
