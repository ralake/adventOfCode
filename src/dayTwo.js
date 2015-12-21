export function getWrappingPaperArea(input) {
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
    let smallestSide = Math.min.apply(Math, areaDimensions);
    areaDimensions.forEach((dimension) => {
      area += (dimension * 2)
    })
    totalArea += (area + smallestSide)
  })
  return totalArea
}

export function getRibbonLength(input) {
  let measurements = createMeasurementMap(input)
  let totalLength = 0
  measurements.forEach((set) => {
    let ribbonLengthDimensions = [
      set.get('length'),
      set.get('width'),
      set.get('height')
    ].sort((a, b) => {
      return a - b
    })
    let ribbonLength = (ribbonLengthDimensions[0] * 2) + (ribbonLengthDimensions[1] * 2)
    let bowLength = ribbonLengthDimensions.reduce((a, b) => {
      return a * b
    })
    totalLength += (ribbonLength + bowLength)
  })
  return totalLength
}

function createMeasurementMap(input) {
  let measurements = [];
  let presents = input.split('\n')
  presents.forEach((present) => {
    let dimensions = present.split('x')
    let dimensionMap = new Map([
      ['length', parseInt(dimensions[0], 10)],
      ['width', parseInt(dimensions[1], 10)],
      ['height', parseInt(dimensions[2], 10)]
    ])
    measurements.push(dimensionMap)
  })
  return measurements
}