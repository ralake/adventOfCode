import { FloorChecker } from '../src/dayOne.js'

var fs = require('fs')
var instructions = fs.readFileSync('./inputs/dayOne.txt', 'utf8', (err, data) => {
	if (err) throw err
	instructions = data
})

let floorChecker = new FloorChecker(instructions)

describe('FloorChecker', () => {
	it('knows which floor you are on given some instructions', () => {
		expect(floorChecker.findFloor()).toEqual(280)
	})

	it('can tell when you are in the basement', () => {
		expect(floorChecker.basementIndex()).toEqual(1797)
	})
})