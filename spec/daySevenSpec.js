import { calculateSignals } from '../src/daySeven'
import { readFromFile } from '../src/helpers'

let testInstructions = readFromFile('./inputs/daySevenTest.txt')
let instructionsOne = readFromFile('./inputs/daySevenPartOne.txt')
let instructionsTwo = readFromFile('./inputs/daySevenPartTwo.txt')

let partOneResults = {
  d: 72,
  e: 507,
  f: 492,
  g: 114,
  h: 65412,
  i: 65079,
  x: 123,
  y: 456
}

describe('calculateSignals', () => {
  it('can calculate the signal passed to each wire', () => {
    let signals = calculateSignals(testInstructions)
    Object.keys(partOneResults).forEach((wire) => {
      expect(signals[wire]).toEqual(partOneResults[wire])
    })
  })

  it('can calculate the signal ultimately passed to wire "a"', () => {
    let signals = calculateSignals(instructionsOne)
    expect(signals['a']).toEqual(46065)
  })

  it('can calculate the signal ultimately passed to wire "a" after re-assigning wire "b"', () => {
    let signals = calculateSignals(instructionsTwo)
    expect(signals['a']).toEqual(14134) //
  })
})
