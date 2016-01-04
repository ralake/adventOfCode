import { auntieFinder } from '../src/daySixteen'
import { readFromFile } from '../src/helpers'

let list = readFromFile('./inputs/daySixteenList.txt')
let evidence = readFromFile('./inputs/daySixteenTickerTape.txt')

describe('auntieList', () => {
  it('can find the correct auntie from a list when given some evidence', () => {
    expect(auntieFinder(list, evidence)).toEqual(373)
  })

  it('can find the correct auntie from a list when given evidence that includes ranges', () => {
    expect(auntieFinder(list, evidence, true)).toEqual(260)
  })
})
