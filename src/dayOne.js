export class FloorChecker {
  constructor(input) {
    this.floors = input.split('')
  }
  findFloor(basement) {
    var level = 0
		var index = 0
		this.floors.forEach((floor) => {
			if (floor === '(') {
				level++
			} else {
				level--
			}
		})
		return level
	}
	basementIndex() {
		var level = 0
		var index = 0
		for (var i = 0; i < this.floors.length; i++) {
			index++
			if (this.floors[i] === '(') {
				level++
			} else {
				level --
				if (level === -1) break
			}
		}
		return index
	}
}
