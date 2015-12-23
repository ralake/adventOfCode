import { findFloor } from '../src/dayOne'

let fs = require('fs')
let instructions = fs.readFileSync('./inputs/dayOne.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('findFloor', () => {
  it('can tell you which floor you are on given some instructions', () => {
    expect(findFloor(instructions)).toEqual(280)
  })

  it('can tell when instruction lands you in the basement', () => {
    expect(findFloor(instructions, true)).toEqual(1797)
  })
})
