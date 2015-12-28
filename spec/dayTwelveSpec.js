import { sumTheNumbersIn } from '../src/dayTwelve'

let fs = require('fs')
let accountingBook = fs.readFileSync('./inputs/dayTwelve.txt', 'utf8', (err, data) => {
  if (err) throw err
  return '' + data
})

let testBookOne = JSON.stringify({
  a: [1, 2, 3],
  b: {
    'a': 2,
    'b': 4
  }
})

describe('sumTheNumbersIn', () => {
  it('sums all of the umbers in the first test book', () => {
    expect(sumTheNumbersIn(testBookOne)).toEqual(12)
  })

  it('sums all of the numbers in the accounting book', () => {
    expect(sumTheNumbersIn(accountingBook)).toEqual(119433)
  })
})
