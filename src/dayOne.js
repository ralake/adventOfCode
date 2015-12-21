export function findFloor (input) {
  let floors = input.split('')
  let level = 0
  floors.forEach((floor) => {
    if (floor === '(') {
      level++
    } else {
      level--
    }
  })
  return level
}

export function basementIndex (input) {
  let floors = input.split('')
  let level = 0
  let index = 0
  for (let i = 0; i < floors.length; i++) {
    index++
    if (floors[i] === '(') {
      level++
    } else {
      level--
      if (level === -1) break
    }
  }
  return index
}
