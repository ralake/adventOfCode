import { getAllPermutations } from './helpers'

export function findDistance (input, shortestDistance) {
  let distances = input.split('\n')
  let destinations = getDestinations()
  let journeyCombinations = getAllPermutations(destinations)

  function getAllPossibleJourneyDistances () {
    let combinationDistances = []
    journeyCombinations.forEach((combination, index) => {
      let combinationDistance = 0
      combination.forEach((destination, index) => {
        if (typeof combination[index + 1] !== 'undefined') {
          combinationDistance += getCombinationDistance(destination, combination[index + 1])
        }
      })
      combinationDistances.push(combinationDistance)
    })
    return combinationDistances
  }

  function getCombinationDistance (destinationOne, destinationTwo) {
    let distanceBetween
    distances.forEach((distance) => {
      if (distance.indexOf(destinationOne) >= 0 && distance.indexOf(destinationTwo) >= 0) {
        distanceBetween = parseInt(distance.split(' = ')[1], 10)
      }
    })
    return distanceBetween
  }

  function getDestinations () {
    let destinations = []
    distances.forEach((distance) => {
      let elements = distance.split(' ')
      if (destinations.indexOf(elements[0]) < 0) destinations.push(elements[0])
      if (destinations.indexOf(elements[2]) < 0) destinations.push(elements[2])
    })
    return destinations
  }

  if (shortestDistance) return Math.min.apply(Math, getAllPossibleJourneyDistances())
  return Math.max.apply(Math, getAllPossibleJourneyDistances())
}
