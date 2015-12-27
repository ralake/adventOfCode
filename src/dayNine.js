export function findDistance (input, shortestDistance) {
  let distances = input.split('\n')
  let destinations = getDestinations()
  let journeyCombinations = getJourneys(destinations)

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

  function getJourneys (destinations) {
    let results = []

    function permute (destinations, memo) {
      let currentDestination
      memo = memo || []
      for (let i = 0; i < destinations.length; i++) {
        currentDestination = destinations.splice(i, 1)
        if (!destinations.length) {
          results.push(memo.concat(currentDestination))
        }
        permute(destinations.slice(), memo.concat(currentDestination))
        destinations.splice(i, 0, currentDestination[0])
      }
      return results
    }

    return permute(destinations)
  }

  if (shortestDistance) return Math.min.apply(Math, getAllPossibleJourneyDistances())
  return Math.max.apply(Math, getAllPossibleJourneyDistances())
}
