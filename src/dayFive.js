export function getNiceChildren (input, version) {
  let niceChildren = 0
  let list = input.split('\n')
  let isNice = versions[version]
  list.forEach((child) => { if (isNice(child)) niceChildren++ })
  return niceChildren
}

let versions = {
  versionOne: function (child) {
    let hasThreeVowels = child.match(/[aeiou]/ig) && child.match(/[aeiou]/ig).length >= 3
    let hasDoubleLetter = /(\w)\1/ig.test(child)
    let doesNotContainExcludedCombinations = !/ab|cd|pq|xy/.test(child)
    return hasThreeVowels && hasDoubleLetter && doesNotContainExcludedCombinations
  },
  versionTwo: function (child) {
    let hasTwoPairs = false
    let hasLetterWhichRepeatsAfterAnother = false
    child.split('').forEach((letter, index) => {
      let forwardIndex = index + 2
      let pair = child.substring(index, forwardIndex)
      let remaining = child.substring(forwardIndex, child.length) || ''
      if (remaining.indexOf(pair) >= 0) hasTwoPairs = true
      if (letter === child.charAt(forwardIndex)) hasLetterWhichRepeatsAfterAnother = true
    })
    return hasTwoPairs && hasLetterWhichRepeatsAfterAnother
  }
}
