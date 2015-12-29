export function getFurthestDistance (input, seconds) {
  let speedData = getSpeedData(input)
  let distances = getDistancesTravelled(speedData, seconds)
  return Math.max.apply(Math, distances)
}

function getDistancesTravelled (speedData, seconds) {
  let distances = []
  Object.keys(speedData).forEach((reindeer) => {
    let data = speedData[reindeer]
    let distancePerCycle = data.kmPerSecond * data.durationAtSpeed
    let completeCycles = Math.floor(seconds / (data.durationAtRest + data.durationAtSpeed))
    let remainingSeconds = seconds % completeCycles
    let distance = completeCycles * distancePerCycle
    if (remainingSeconds && remainingSeconds <= data.durationAtSpeed) {
      distance += (remainingSeconds * data.kmPerSecond)
    } else if (remainingSeconds && remainingSeconds > data.durationAtSpeed) {
      distance += distancePerCycle
    }
    distances.push(distance)
  })
  return distances
}

function getSpeedData (input) {
  let reindeers = input.split('\n')
  let speedData = {}
  reindeers.forEach((reindeer, index) => {
    let data = reindeer.match(/\d+/g)
    speedData[index] = {
      kmPerSecond: parseInt(data[0], 10),
      durationAtSpeed: parseInt(data[1], 10),
      durationAtRest: parseInt(data[2], 10)
    }
  })
  return speedData
}
