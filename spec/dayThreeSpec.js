import { getSantaDeliveries, getRoboAndSantaDeliveries } from '../src/dayThree'

let fs = require('fs')
let instructions = fs.readFileSync('./inputs/dayThree.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

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
