import { findFloor } from '../src/dayOne'
import { readFromFile } from '../src/helpers'

let instructions = readFromFile('./inputs/dayOne.txt')

describe('findFloor', () => {
  it('can tell you which floor you are on given some instructions', () => {
    expect(findFloor(instructions)).toEqual(280)
  })

  it('can tell when instruction lands you in the basement', () => {
    expect(findFloor(instructions, true)).toEqual(1797)
  })
})
