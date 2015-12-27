import { calculateStringLengths } from '../src/dayEight'

let fs = require('fs')

let testInstructions = fs.readFileSync('./inputs/dayEightTest.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('calculateStringLengths', () => {
  it('can calculate the difference between the strings literal length and the length of its evalutation', () => {
    expect(calculateStringLengths(testInstructions)).toEqual(12)
  })
})
