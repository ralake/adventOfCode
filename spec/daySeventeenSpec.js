import { getEggNogCombinations } from '../src/daySeventeen'
import { readFromFile } from '../src/helpers'

let testContainers = readFromFile('./inputs/daySeventeenTest.txt')
let containers = readFromFile('./inputs/daySeventeen.txt')

describe('getEggNogCombinations', () => {
  it('tells you how many combinations of the given containers are possible given an amount in the test case', () => {
    expect(getEggNogCombinations(testContainers, 25)).toEqual(4)
  })

  xit('tells you how many combinations of the given containers are possible given an amount in the test case', () => {
    expect(getEggNogCombinations(containers, 150)).toEqual(20)
  })
})
