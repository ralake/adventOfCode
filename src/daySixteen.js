let _ = require('underscore')

export function auntieFinder (list, evidence, useRanges) {
  let aunties = getAunties(list)
  let evidenceData = getEvidenceData(evidence)
  let scores = _.map(aunties, (auntie) => {
    let auntieScore = 0
    _.each(auntie, (value, property) => {
      if (_.has(evidenceData, property)) {
        if (useRanges) {
          let propertyIsTreesOrCats = /trees|cats/i.test(property)
          let propertyIsPomeraniansOrGoldfish = /pomeranians|goldfish/.test(property)
          if (propertyIsTreesOrCats && evidenceData[property] < value) auntieScore++
          else if (propertyIsPomeraniansOrGoldfish && evidenceData[property] > value) auntieScore++
          else if (!propertyIsTreesOrCats && !propertyIsPomeraniansOrGoldfish && evidenceData[property] === value) auntieScore++
        } else {
          if (evidenceData[property] === value) auntieScore++
        }
      }
    })
    return auntieScore
  })
  let bestMatch = _.max(scores)
  return _.indexOf(scores, bestMatch) + 1
}

function getAunties (list) {
  return _.map(list.split('\n'), (auntie) => {
    auntie = auntie.replace(/Sue\s\d+:\s/g, '')
    let properties = auntie.match(/\b\w+\D\b/g)
    let values = _.map(auntie.match(/\b\d+\b/g), (number) => parseInt(number, 10))
    return _.object(properties, values)
  })
}

function getEvidenceData (evidence) {
  let data = {}
  evidence.split('\n').forEach((attribute) => {
    let propertyAndValue = attribute.match(/\b\w+\b/g)
    data[_.first(propertyAndValue)] = parseInt(_.last(propertyAndValue), 10)
  })
  return data
}
