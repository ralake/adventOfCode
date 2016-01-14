let _ = require('underscore')

export function getWrappingPaperArea (input) {
  let measurements = createMeasurementMap(input)
  let totalArea = 0
  measurements.forEach((set) => {
    let area = 0
    let length = set.get('length')
    let width = set.get('width')
    let height = set.get('height')
    let areaDimensions = [
      length * width,
      width * height,
      height * length
    ]
    let smallestSide = _.min(areaDimensions)
    areaDimensions.forEach((dimension) => {
      area += (dimension * 2)
    })
    totalArea += (area + smallestSide)
  })
  return totalArea
}

export function getRibbonLength (input) {
  let measurements = createMeasurementMap(input)
  let totalLength = 0
  measurements.forEach((set) => {
    let ribbonLengthDimensions = _.sortBy([
      set.get('length'),
      set.get('width'),
      set.get('height')
    ], (dimension) => { return Math.min(dimension) })
    let ribbonLength = (ribbonLengthDimensions[0] * 2) + (ribbonLengthDimensions[1] * 2)
    let bowLength = ribbonLengthDimensions.reduce((a, b) => a * b)
    totalLength += (ribbonLength + bowLength)
  })
  return totalLength
}

function createMeasurementMap (input) {
  let presents = input.split('\n')
  return _.map(presents, (present) => {
    let dimensions = present.split('x')
    let dimensionMap = new Map([
      ['length', parseInt(_.first(dimensions), 10)],
      ['width', parseInt(dimensions[1], 10)],
      ['height', parseInt(_.last(dimensions), 10)]
    ])
    return dimensionMap
  })
}
