let _ = require('underscore')

export function getSantaDeliveries (input) {
  let housesVisited = []
  let directions = input.split('')
  return getVisitedHouses(directions, housesVisited)
}

export function getRoboAndSantaDeliveries (input) {
  let housesVisited = []
  let directions = input.split('')
  let santaDirections = []
  let roboDirections = []
  directions.forEach((direction, index) => {
    if (index % 2 === 0) {
      santaDirections.push(direction)
    } else {
      roboDirections.push(direction)
    }
  })
  getVisitedHouses(santaDirections, housesVisited)
  getVisitedHouses(roboDirections, housesVisited)
  return housesVisited.length
}

function getVisitedHouses (directions, housesVisited) {
  let x = 0
  let y = 0
  directions.forEach((direction) => {
    if (direction === '^') y++
    if (direction === 'v') y--
    if (direction === '>') x++
    if (direction === '<') x--
    let currentHouse = x + ', ' + y
    if (!_.contains(housesVisited, currentHouse)) housesVisited.push(currentHouse)
  })
  return housesVisited.length
}
