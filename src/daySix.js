export function setLights (input, size) {
  let grid = buildGrid(size)
  let instructions = input.split('\n')
  instructions.forEach((instruction) => {
    let coords = parseCoords(instruction.match(/\d{1,3},\d{1,3}/g))
    let type = /on|off/.test(instruction) && instruction.match(/on|off/)[0] || 'toggle'
    adjustLights(type, coords)
  })
  return generateTotals()

  function buildGrid (size) {
    let newGrid = []
    for (let i = 0; i < size; i++) {
      let row = []
      for (let j = 0; j < size; j++) {
        let light = {
          isOn: false,
          brightness: 0
        }
        row.push(light)
      }
      newGrid.push(row)
    }
    return newGrid
  }

  function parseCoords (coords) {
    let starts = coords[0].split(',')
    let ends = coords[1].split(',')
    return {
      startRow: parseInt(starts[1], 10),
      startColumn: parseInt(starts[0], 10),
      endRow: parseInt(ends[1], 10) + 1,
      endColumn: parseInt(ends[0], 10) + 1
    }
  }

  function adjustLights (type, coords) {
    grid.slice(coords.startRow, coords.endRow).forEach((row) => {
      row.slice(coords.startColumn, coords.endColumn).forEach((light) => {
        toggleAndAdjustBrightness(light, type)
      })
    })
  }

  function toggleAndAdjustBrightness (light, type) {
    if (type === 'on') turnOn(light)
    if (type === 'off') turnOff(light)
    if (type === 'toggle') toggle(light)
  }

  function turnOn (light) {
    light.isOn = true
    light.brightness += 1
  }

  function turnOff (light) {
    light.isOn = false
    if (light.brightness > 0) light.brightness -= 1
  }

  function toggle (light) {
    if (light.isOn) {
      light.isOn = false
    } else {
      light.isOn = true
    }
    light.brightness += 2
  }

  function generateTotals () {
    let totals = {
      lightsOn: 0,
      brightness: 0
    }
    let lights = Array.prototype.concat.apply([], grid)
    lights.forEach((light) => {
      if (light.isOn) totals.lightsOn += 1
      totals.brightness += light.brightness
    })
    return totals
  }
}
