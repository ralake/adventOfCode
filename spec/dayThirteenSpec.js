import { findOptimalSeatingArrangement } from '../src/dayThirteen'
import { readFromFile } from '../src/helpers'

let testGuestOpinions = readFromFile('./inputs/dayThirteenTest.txt')
let guestOpinionsOne = readFromFile('./inputs/dayThirteenPartOne.txt')
let guestOpinionsTwo = readFromFile('./inputs/dayThirteenPartTwo.txt')

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
