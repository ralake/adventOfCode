import { getNiceChildren } from '../src/dayFive'
import { readFromFile } from '../src/helpers'

let instructions = readFromFile('./inputs/dayFive.txt')

describe('getNiceChildren', () => {
  it('can count all of the nice children by one version', () => {
    expect(getNiceChildren(instructions, 'versionOne')).toEqual(238)
  })

  it('can count all of the nice children by another version', () => {
    expect(getNiceChildren(instructions, 'versionTwo')).toEqual(69)
  })
})
