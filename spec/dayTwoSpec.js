import { getWrappingPaperArea, getRibbonLength } from '../src/dayTwo'

let fs = require('fs')
let instructions = fs.readFileSync('./inputs/dayTwo.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('getWrappingPaperArea', () => { 
  it('can tell you the total area of wrapping paper required for all of your presents', () => {
    expect(getWrappingPaperArea(instructions)).toEqual(1606483)
  })
})

describe('getRibbonLength', () => {
  it('can tell you the total length of ribbon required for all of your presents', () => {
    expect(getRibbonLength(instructions)).toEqual(3842356)
  })
})