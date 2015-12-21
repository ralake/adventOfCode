import { findFloor, basementIndex } from '../src/dayOne'

let fs = require('fs')
let instructions = fs.readFileSync('./inputs/dayOne.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('findFloor', () => { 
  it('can tell you which floor you are on given some instructions', () => {
    expect(findFloor(instructions)).toEqual(280)
  })
})

describe('basementIndex', () => {
  it('can tell when instruction lands you in the basement', () => {
    expect(basementIndex(instructions)).toEqual(1797)
  })
})
