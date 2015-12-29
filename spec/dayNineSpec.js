import { findDistance } from '../src/dayNine'
import { readFromFile } from '../src/helpers'

let testInstructions = readFromFile('./inputs/dayNineTest.txt')
let instructions = readFromFile('./inputs/dayNine.txt')

describe('findDistance', () => {
  describe('shortest distance...', () => {
    it('can find the shortest distance that is needed to visit all locations in the test case', () => {
      expect(findDistance(testInstructions, true)).toEqual(605)
    })

    it('can find the shortest distance that is needed to visit all locations', () => {
      expect(findDistance(instructions, true)).toEqual(251)
    })
  })

  describe('longest distance...', () => {
    it('can find the longest distance that is needed to visit all locations in the test case', () => {
      expect(findDistance(testInstructions)).toEqual(982)
    })

    it('can find the longest distance that is needed to visit all locations', () => {
      expect(findDistance(instructions)).toEqual(898)
    })
  })
})
