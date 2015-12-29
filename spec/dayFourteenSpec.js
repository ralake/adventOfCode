import { getFurthestDistance } from '../src/dayFourteen'
import { readFromFile } from '../src/helpers'

let reindeerSpeeds = readFromFile('./inputs/dayFourteen.txt')
const seconds = 2503

describe('getFurthestDistance', () => {
  it('can find the total distance that the fastest reindeer travelled given a specific time', () => {
    expect(getFurthestDistance(reindeerSpeeds, seconds)).toEqual(2655)
  })
})
