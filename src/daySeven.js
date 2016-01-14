let _ = require('underscore')

export function calculateSignals (input) {
  const totalBits = 65536
  let wireSignals = {}
  let instructions = []
  let operators = {
    NOT: function not (x) { return ~x },
    AND: function and (x, y) { return x & y },
    OR: function or (x, y) { return x | y },
    LSHIFT: function lshift (x, y) { return x << y },
    RSHIFT: function rshift (x, y) { return x >> y }
  }

  function mapWiresAndInstructions (input) {
    input.split('\n').forEach((line) => {
      let lineSplit = line.trim().split(' -> ')
      let wire = lineSplit[lineSplit.length - 1]
      instructions.push(lineSplit)
      wireSignals[wire] = false
    })
  }

  function assignSignal (wire, commands) {
    if (commands.length === 1 && getValue(_.first(commands)) !== false) wireSignals[wire] = getValue(_.first(commands))
    if (commands.length === 2 && getValue(_.last(commands)) !== false) wireSignals[wire] = totalBits + operators[_.first(commands)](getValue(_.last(commands)))
    if (commands.length === 3 && getValue(_.first(commands)) !== false && getValue(_.last(commands)) !== false) {
      wireSignals[wire] = operators[commands[1]](getValue(_.first(commands)), getValue(_.last(commands)))
    }
  }

  function getValue (input) {
    let output
    try {
      output = parseInt(input, 10)
    } catch (e) {}
    if (isNaN(output)) {
      if (wireSignals[input] !== false) return wireSignals[input]
      return false
    } else {
      return output
    }
  }

  function removeInstructionIfWireHasASignal (wire, index) {
    if (wireSignals[wire] !== false) instructions.splice(index, 1)
  }

  function someWiresDoNotHaveASignal () {
    return _.some(wireSignals, (signal) => !!signal)
  }

  mapWiresAndInstructions(input)

  while (someWiresDoNotHaveASignal()) {
    instructions.forEach((instruction, index) => {
      let commands = _.first(instruction).split(' ')
      let wire = _.last(instruction)
      assignSignal(wire, commands)
      removeInstructionIfWireHasASignal(wire, index)
    })
  }

  return wireSignals
}
