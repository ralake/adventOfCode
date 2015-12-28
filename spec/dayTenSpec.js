import { lookAndSay } from '../src/dayTen'

describe('lookAndSay', () => {
  it('replaces each run of digits with the number of digits followed by the digit itself in the test case (x5)', () => {
    expect(lookAndSay('1', 5)).toEqual(6)
  })

  it('replaces each run of digits with the number of digits followed by the digit itself (x40)', () => {
    expect(lookAndSay('1113222113', 40)).toEqual(252594)
  })

  it('replaces each run of digits with the number of digits followed by the digit itself (x50)', () => {
    expect(lookAndSay('1113222113', 50)).toEqual(3579328)
  })
})
