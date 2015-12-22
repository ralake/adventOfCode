export function calculateSignals (input) {
  const totalBits = 65536
  let wireSignals = {}
  let instructions = []
  let operators = {
    NOT: function not (x) {
      return ~x
    },
    AND: function and (x, y) {
      return x & y
    },
    OR: function or (x, y) {
      return x | y
    },
    LSHIFT: function lshift (x, y) {
      return x << y
    },
    RSHIFT: function rshift (x, y) {
      return x >> y
    }
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
    if (commands.length === 1 && getValue(commands[0]) !== false) {
      wireSignals[wire] = getValue(commands[0])
    }
    if (commands.length === 2 && getValue(commands[1]) !== false) {
      wireSignals[wire] = totalBits + operators[commands[0]](getValue(commands[1]))
    }
    if (commands.length === 3 && getValue(commands[0]) !== false && getValue(commands[2]) !== false) {
      wireSignals[wire] = operators[commands[1]](getValue(commands[0]), getValue(commands[2]))
    }
  }

  function getValue (input) {
    let output
    try {
      output = parseInt(input, 10)
    } catch (e) {}
    if (isNaN(output)) {
      if (wireSignals[input] !== false) {
        return wireSignals[input]
      } else {
        return false
      }
    } else {
      return output
    }
  }

  function removeInstructionIfWireHasASignal (wire, index) {
    if (wireSignals[wire] !== false) instructions.splice(index, 1)
  }

  function someWiresDoNotHaveASignal () {
    let someDoNotHaveSignal = false
    Object.keys(wireSignals).forEach((wire) => {
      if (wireSignals[wire] === false) someDoNotHaveSignal = true
    })
    return someDoNotHaveSignal
  }

  mapWiresAndInstructions(input)

  while (someWiresDoNotHaveASignal()) {
    instructions.forEach((instruction, index) => {
      let commands = instruction[0].split(' ')
      let wire = instruction[instruction.length - 1]
      assignSignal(wire, commands)
      removeInstructionIfWireHasASignal(wire, index)
    })
  }

  return wireSignals
}
