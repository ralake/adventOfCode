import { setLights } from '../src/daySix'

const size = 1000
let fs = require('fs')
let instructions = fs.readFileSync('./inputs/daySix.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

describe('lightsModule', () => {
  it('can total the number of lights switched on given a set of instructions', () => {
    expect(setLights(instructions, size).lightsOn).toEqual(569999)
  })

  it('can total the brightness of lights given the same instructions', () => {
    expect(setLights(instructions, size).brightness).toEqual(17836115)
  })
})
