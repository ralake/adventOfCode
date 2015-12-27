export function calculateStringLengths (input) {
  let instructions = input.split('\n')
  let characterTotal = 0
  let memoryTotal = 0
  instructions.forEach((instruction) => {
    characterTotal += instruction.length
    instruction = instruction.substring(1, instruction.length - 1)
    instruction = instruction.replace(/\\x([0-9]|[a-fA-F]){2}/g, '1').replace(/\\./g, '2')
    memoryTotal += instruction.length
  })
  return characterTotal - memoryTotal
}
