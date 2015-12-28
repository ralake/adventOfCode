export function getAllPermutations (selection) {
  let results = []

  function permute (selection, memo) {
    let currentItem
    memo = memo || []
    for (let i = 0; i < selection.length; i++) {
      currentItem = selection.splice(i, 1)
      if (!selection.length) {
        results.push(memo.concat(currentItem))
      }
      permute(selection.slice(), memo.concat(currentItem))
      selection.splice(i, 0, currentItem[0])
    }
    return results
  }

  return permute(selection)
}
