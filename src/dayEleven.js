export function passwordGenerator (currentPassword) {
  let alphabet = 'abcdefghjkmnpqrstuvwxyz'
  let newPassword = incrementPassword(currentPassword)
  while (passwordIsIllegal(newPassword, alphabet)) {
    newPassword = incrementPassword(newPassword)
  }
  return newPassword
}

function incrementPassword (password) {
  let newPassword = replaceAtIndex(password, password.length - 1)
  return newPassword
}

function replaceAtIndex (password, index) {
  if (password[index] === 'z') {
    password = password.substr(0, index) + 'a' + password.substr(index + 1)
    return replaceAtIndex(password, index - 1)
  } else {
    let nextLetter = String.fromCharCode(password[index].charCodeAt() + 1)
    password = password.substr(0, index) + nextLetter + password.substr(index + 1)
  }
  return password
}

function passwordIsIllegal (password, alphabet) {
  return (
    containsIllegalLetters(password) ||
    !hasTwoDifferentLetterPairs(password) ||
    !hasRunOfThreeSequentialLetters(password, alphabet)
  )
}

function containsIllegalLetters (password) {
  /i|o|l/ig.test(password)
}

function hasTwoDifferentLetterPairs (password) {
  let passwordPairs = password.match(/(\w)\1/ig)
  return (passwordPairs && passwordPairs.length === 2 && passwordPairs[0] !== passwordPairs[1])
}

function hasRunOfThreeSequentialLetters (password, alphabet) {
  let letters = password.split('')
  let hasThreeSequentialLetters = false
  for (let i = 0; i < letters.length; i++) {
    if (typeof letters[i + 3] !== 'undefined') {
      let groupOfThree = letters.slice(i, (i + 3)).join('')
      if (alphabet.indexOf(groupOfThree) >= 0) hasThreeSequentialLetters = true
    }
  }
  return hasThreeSequentialLetters
}
