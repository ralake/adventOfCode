import { setLights } from '../src/daySix'
import { readFromFile } from '../src/helpers'

const size = 1000
let instructions = readFromFile('./inputs/daySix.txt')

describe('lightsModule', () => {
  it('can total the number of lights switched on given a set of instructions', () => {
    expect(setLights(instructions, size).lightsOn).toEqual(569999)
  })

  it('can total the brightness of lights given the same instructions', () => {
    expect(setLights(instructions, size).brightness).toEqual(17836115)
  })
})
