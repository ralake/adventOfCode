import { getNiceChildren } from '../src/dayFive'

let fs = require('fs')
let instructions = fs.readFileSync('./inputs/dayFive.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('getNiceChildren', () => {
  it('can count all of the nice children by one version', () => {
    expect(getNiceChildren(instructions, 'versionOne')).toEqual(238)
  })

  it('can count all of the nice children by another version', () => {
    expect(getNiceChildren(instructions, 'versionTwo')).toEqual(69)
  })
})
