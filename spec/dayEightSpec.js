import { calculateStringLengths, calculateEncodedStringLengths } from '../src/dayEight'

let fs = require('fs')

let testInstructions = fs.readFileSync('./inputs/dayEightTest.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

let instructions = fs.readFileSync('./inputs/dayEight.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('calculateStringLengths', () => {
  it('can calculate the difference between the strings literal length and the length it takes in memory for the test case', () => {
    expect(calculateStringLengths(testInstructions)).toEqual(12)
  })

  it('can calculate the difference between the strings literal length and the length it takes in memory', () => {
    expect(calculateStringLengths(instructions)).toEqual(1350)
  })
})

describe('calculateEncodedStringLengths', () => {
  it('can calculate the difference between encoded string lengths and the original strings in the test case', () => {
    expect(calculateEncodedStringLengths(testInstructions)).toEqual(19)
  })

  it('can calculate the difference between encoded string lengths and the original strings', () => {
    expect(calculateEncodedStringLengths(instructions)).toEqual(2085)
  })
})
