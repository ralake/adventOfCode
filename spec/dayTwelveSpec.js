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

let testBookTwo = JSON.stringify({
  d: 'red',
  e: [1, 2, 3, 4],
  f: 5
})

let testBookThree = JSON.stringify([1, { c: 'red', b: 2 }, 3])
let testBookFour = JSON.stringify([1, 'red', 5])

describe('sumTheNumbersIn', () => {
  describe('standard version', () => {
    it('sums all of the numbers in the first test book', () => {
      expect(sumTheNumbersIn(testBookOne)).toEqual(12)
    })

    it('sums all of the numbers in the accounting book', () => {
      expect(sumTheNumbersIn(accountingBook)).toEqual(119433)
    })
  })

  describe('ignore red version', () => {
    it('sums all of the numbers, ignoring any red values, in the second test book', () => {
      expect(sumTheNumbersIn(testBookTwo, true)).toEqual(0)
    })

    it('sums all of the numbers, ignoring any red values, in the third test book', () => {
      expect(sumTheNumbersIn(testBookThree, true)).toEqual(4)
    })

    it('sums all of the numbers, ignoring any red values, in the fourth test book', () => {
      expect(sumTheNumbersIn(testBookFour, true)).toEqual(6)
    })

    it('sums all of the numbers, ignoring any red values, in the accounting book', () => {
      expect(sumTheNumbersIn(accountingBook, true)).toEqual(68466)
    })
  })
})
