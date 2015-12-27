import { findShotestDistance } from '../src/dayNine'

let fs = require('fs')
let testInstructions = fs.readFileSync('./inputs/dayNineTest.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

let instructions = fs.readFileSync('./inputs/dayNine.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('findShotestDistance', () => {
  it('can find the shortest distance that is needed to visit all locations in the test case', () => {
    expect(findShotestDistance(testInstructions)).toEqual(605)
  })

  it('can find the shortest distance that is needed to visit all locations', () => {
    expect(findShotestDistance(instructions)).toEqual(251)
  })
})
