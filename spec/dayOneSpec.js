import { findFloor, basementIndex } from '../src/dayOne'

var fs = require('fs')
var instructions = fs.readFileSync('./inputs/dayOne.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('FloorChecker', () => { 
  it('knows which floor you are on given some instructions', () => {
    expect(findFloor(instructions)).toEqual(280)
  })

  it('can tell when you are in the basement', () => {
    expect(basementIndex(instructions)).toEqual(1797)
  })
})
