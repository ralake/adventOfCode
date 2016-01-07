let _ = require('underscore')
import { getAllPermutations } from './helpers'

export function getEggNogCombinations (containers, amount) {
  let conatinerVolumes = getContainerVolumes(containers)
  let permutations = getAllPermutations(conatinerVolumes)
  let combinations = []
  for (let i = 0; i < permutations.length; i++) {
    let total = 0
    let currentCombo = []
    let permutation = permutations[i]
    for (let j = 0; j < permutation.length; j++) {
      let container = permutation[j]
      let volume = _.last(container)
      let originalIndex = _.first(container)
      if ((total + volume) < amount || (total + volume) === amount) {
        total = total + volume
        currentCombo.push(originalIndex)
        if ((total + volume) === amount) break
      } else if ((total + volume) > amount) break
    }
    let joined = currentCombo.sort().join('')
    if (joined.length && total === amount && !_.contains(combinations, joined)) {
      combinations.push(joined)
    }
  }
  return combinations.length
}

function getContainerVolumes (containers) {
  return _.map(containers.split('\n'), (container, i) => {
    return [i, parseInt(container, 10)]
  })
}
