// import { calculateStringLengths } from '../src/dayEight'

let fs = require('fs')

let instructions = fs.readFileSync('./inputs/dayEight.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

let test = instructions.split('\n')[2]

console.log('line: ', test)
console.log(test)
console.log('total character length: ', test.length)
test = test.replace(/\\x([0-9]|[a-fA-F]){2}/g, '1').replace(/^"/, '').replace(/"$/, '')
console.log(test.replace(/\\/g, '1'))

