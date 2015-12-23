export function findFloor (input, getBasementIndex) {
  let floors = input.split('')
  let level = 0
  let basement = 0
  for (let i = 0; i < floors.length; i++) {
    if (floors[i] === '(') {
      level++
    } else {
      level--
    }
    if (getBasementIndex && level === -1) {
      basement = i + 1
      break
    }
  }
  if (basement) return basement
  return level
}
