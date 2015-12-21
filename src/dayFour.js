let crypto = require('crypto')

export function zeroHexDigestGenerator (secret, limit) {
  let counter = 0
  let valueToCheck = ''
  let md5 = crypto.createHash('md5').update(secret + counter).digest('hex')
  for (let i = 0; i < limit; i++) {
    valueToCheck += '0'
  }
  while (md5.substring(0, limit) !== valueToCheck) {
    counter++
    md5 = crypto.createHash('md5').update(secret + counter).digest('hex')
  }
  return counter
}
