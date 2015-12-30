export function getFurthestDistance (input, seconds) {
  let speedData = getSpeedData(input, seconds)
  let distances = getDistancesTravelled(speedData, seconds)
  return Math.max.apply(Math, distances)
}

function getSpeedData (input, seconds) {
  let reindeers = input.split('\n')
  let speedData = {}
  reindeers.forEach((reindeer, index) => {
    let data = reindeer.match(/\d+/g)
    let kmPerSecond = parseInt(data[0], 10)
    let durationAtSpeed = parseInt(data[1], 10)
    let durationAtRest = parseInt(data[2], 10)
    let oneCycle = durationAtSpeed + durationAtRest
    let completeCycles = Math.floor(seconds / oneCycle)
    let remainingSeconds = seconds % oneCycle
    let secondsBreakdown = []
    for (let cycle = 0; cycle < completeCycles; cycle++) {
      for (let speedSecond = 0; speedSecond < durationAtSpeed; speedSecond++) {
        secondsBreakdown.push(kmPerSecond)
      }
      for (let restSecond = 0; restSecond < durationAtRest; restSecond++) {
        secondsBreakdown.push(0)
      }
    }
    if (remainingSeconds && remainingSeconds <= durationAtSpeed) {
      for (let remainingSecond = 0; remainingSecond < remainingSeconds; remainingSecond++) {
        secondsBreakdown.push(kmPerSecond)
      }
    } else if (remainingSeconds && remainingSeconds > durationAtSpeed) {
      let restSeconds = remainingSeconds - durationAtSpeed
      for (let speedSecond = 0; speedSecond < durationAtSpeed; speedSecond++) {
        secondsBreakdown.push(kmPerSecond)
      }
      for (let restSecond = 0; restSecond < restSeconds; restSecond++) {
        secondsBreakdown.push(0)
      }
    }
    speedData[index] = {
      secondsBreakdown: secondsBreakdown,
      distanceTravelled: 0
    }
  })
  return speedData
}

function getDistancesTravelled (speedData, seconds) {
  let distances = []
  for (let second = 0; second < seconds; second++) {
    Object.keys(speedData).forEach((reindeer) => {
      speedData[reindeer].distanceTravelled += speedData[reindeer].secondsBreakdown[second]
    })
  }
  Object.keys(speedData).forEach((reindeer) => {
    distances.push(speedData[reindeer].distanceTravelled)
  })
  return distances
}
