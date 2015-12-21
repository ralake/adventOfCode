export function findFloor(input) {
  var floors = input.split('')
  var level = 0
  var index = 0
  floors.forEach((floor) => {
    if (floor === '(') {
      level++
    } else {
      level--
    }
  })
  return level
}

export function basementIndex(input) {
  var floors = input.split('')
  var level = 0
  var index = 0
  for (var i = 0; i < floors.length; i++) {
    index++
    if (floors[i] === '(') {
      level++
    } else {
      level --
      if (level === -1) break
    }
  }
  return index
}
