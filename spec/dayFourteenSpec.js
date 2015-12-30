import { getResults } from '../src/dayFourteen'
import { readFromFile } from '../src/helpers'

let reindeerSpeeds = readFromFile('./inputs/dayFourteen.txt')
const seconds = 2503

describe('getResults', () => {
  let winningMetrics
  beforeEach(() => {
    winningMetrics = getResults(reindeerSpeeds, seconds)
  })

  it('can find the total distance that the fastest reindeer travelled given a specific time', () => {
    expect(winningMetrics.distanceTravelled).toEqual(2655)
  })

  it('can find out how many points the winning reindeer won during the race', () => {
    expect(winningMetrics.pointsWon).toEqual(1059)
  })
})
