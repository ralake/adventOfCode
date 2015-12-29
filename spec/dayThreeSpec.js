import { getSantaDeliveries, getRoboAndSantaDeliveries } from '../src/dayThree'
import { readFromFile } from '../src/helpers'

let instructions = readFromFile('./inputs/dayThree.txt')

describe('getSantaDeliveries', () => {
  it('tells you the total amount of houses with atleast one present delivered by santa', () => {
    expect(getSantaDeliveries(instructions)).toEqual(2565)
  })
})

describe('getRoboAndSantaDeliveries', () => {
  it('tells you the total amount of houses with atleast one present delivered by santa or robo', () => {
    expect(getRoboAndSantaDeliveries(instructions)).toEqual(2639)
  })
})
