// import { calculateStringLengths } from '../src/dayEight'

let fs = require('fs')

let instructions = fs.readFileSync('./inputs/dayEight.txt', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

let test = instructions.split('\n')[2]

// console.log('line: ', test)
// console.log('total character length: ', test.length)
// let match = test.match(/\\x([0-9]|[a-fA-F]){2}/g)
// console.log(match)
// console.log(test.replace(/\\x([0-9]|[a-fA-F]){2}/g, 's'))
// console.log(test.replace(/\\x([0-9]|[a-fA-F]){2}/g, 's').length)

// regex for hex stuf /\\x([0-9]|[a-fA-F]){2}/g

