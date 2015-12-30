import { findBestCookieScore } from '../src/dayFifteen'
import { readFromFile } from '../src/helpers'

let testIngredients = readFromFile('./inputs/dayFifteenTest.txt')
let ingredients = readFromFile('./inputs/dayFifteen.txt')

describe('findBestCookieScore', () => {
  xit('finds the best score from the test ingredients', () => {
    expect(findBestCookieScore(testIngredients)).toEqual(62842880)
  })

  xit('find the best score from the ingredients', () => {
    expect(findBestCookieScore(ingredients)).toEqual(10000000)
  })
})
