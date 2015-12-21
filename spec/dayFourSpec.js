import { zeroHexDigestGenerator } from '../src/dayFour'

describe('zeroHexDigestGenerator', () => {
  it('generates hex digests with five zeros at the beginning', () => {
    expect(zeroHexDigestGenerator('bgvyzdsv', 5)).toEqual(254575)
  })

  it('generates hex digests with six zeros at the beginning', () => {
    expect(zeroHexDigestGenerator('bgvyzdsv', 6)).toEqual(1038736)
  })
})
