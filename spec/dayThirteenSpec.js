import { findOptimalSeatingArrangement } from '../src/dayThirteen'

let fs = require('fs')

let testGuestOpinions = fs.readFileSync('./inputs/dayThirteenTest.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

let guestOpinionsOne = fs.readFileSync('./inputs/dayThirteenPartOne.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

let guestOpinionsTwo = fs.readFileSync('./inputs/dayThirteenPartTwo.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('findOptimalSeatingArrangement', () => {
  it('find the arrangement that brings about the most happiness amoungst the guests in the test case', () => {
    expect(findOptimalSeatingArrangement(testGuestOpinions)).toEqual(330)
  })

  it('find the arrangement that brings about the most happiness amoungst the guests', () => {
    expect(findOptimalSeatingArrangement(guestOpinionsOne)).toEqual(733)
  })

  it('find the arrangement that brings about the most happiness amoungst the guests', () => {
    expect(findOptimalSeatingArrangement(guestOpinionsTwo)).toEqual(725)
  })
})
