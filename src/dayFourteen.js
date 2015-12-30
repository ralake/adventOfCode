export function getResults (input, seconds) {
  return getDistanceAndPoints(input, seconds)
}

function getraceData (input, seconds) {
  let reindeers = input.split('\n')
  let raceData = {}
  reindeers.forEach((reindeer, index) => {
    let data = reindeer.match(/\d+/g)
    let kmPerSecond = parseInt(data[0], 10)
    let durationAtSpeed = parseInt(data[1], 10)
    let durationAtRest = parseInt(data[2], 10)
    let oneCycle = durationAtSpeed + durationAtRest
    let completeCycles = Math.floor(seconds / oneCycle)
    let remainingSeconds = seconds % oneCycle
    let secondsBreakdown = []

    function getFullCycleBreakdown () {
      for (let cycle = 0; cycle < completeCycles; cycle++) {
        for (let speedSecond = 0; speedSecond < durationAtSpeed; speedSecond++) {
          secondsBreakdown.push(kmPerSecond)
        }
        for (let restSecond = 0; restSecond < durationAtRest; restSecond++) {
          secondsBreakdown.push(0)
        }
      }
    }

    function getRemainingSecondsBreakdown () {
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
    }

    getFullCycleBreakdown()
    getRemainingSecondsBreakdown()

    raceData[index] = {
      secondsBreakdown: secondsBreakdown,
      distanceTravelled: 0,
      pointsWon: 0
    }
  })
  return raceData
}

function getDistanceAndPoints (input, seconds) {
  let raceData = getraceData(input, seconds)
  let distances = []
  let points = []
  for (let second = 0; second < seconds; second++) {
    Object.keys(raceData).forEach((reindeer) => {
      raceData[reindeer].distanceTravelled += raceData[reindeer].secondsBreakdown[second]
    })
    awardPoints(raceData)
  }
  Object.keys(raceData).forEach((reindeer) => {
    distances.push(raceData[reindeer].distanceTravelled)
    points.push(raceData[reindeer].pointsWon)
  })
  return {
    distanceTravelled: Math.max.apply(Math, distances),
    pointsWon: Math.max.apply(Math, points)
  }
}

function awardPoints (raceData) {
  let currentDistances = []
  Object.keys(raceData).forEach((reindeer) => {
    currentDistances.push(raceData[reindeer].distanceTravelled)
  })
  let currentFurthestDistance = Math.max.apply(Math, currentDistances)
  Object.keys(raceData).forEach((reindeer) => {
    if (raceData[reindeer].distanceTravelled === currentFurthestDistance) {
      raceData[reindeer].pointsWon += 1
    }
  })
}
