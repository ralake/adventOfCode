import { findBestCookieScore } from '../src/dayFifteen'
import { readFromFile } from '../src/helpers'

let ingredients = readFromFile('./inputs/dayFifteen.txt')

describe('findBestCookieScore', () => {
  it('finds the best possible score from the ingredients without counting callories', () => {
    expect(findBestCookieScore(ingredients, true)).toEqual(21367368)
  })

  it('finds the best possible score with a limit on 500 calories', () => {
    expect(findBestCookieScore(ingredients)).toEqual(1766400)
  })
})
