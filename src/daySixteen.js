let _ = require('underscore')

export function auntieFinder (list, evidence) {
  let aunties = getAunties(list)
  let evidenceData = getEvidenceData(evidence)
  let scores = _.map(aunties, (auntie) => {
    let matchScore = 0
    _.each(auntie, (value, property) => {
      if (_.has(evidenceData, property) && evidenceData[property] === value) matchScore++
    })
    return matchScore
  })
  let bestMatch = _.max(scores)
  return _.indexOf(scores, bestMatch) + 1
}

function getAunties (list) {
  return _.map(list.split('\n'), (auntie) => {
    auntie = auntie.replace(/Sue\s\d+:\s/g, '')
    let properties = auntie.match(/\b\w+\D\b/g)
    let values = auntie.match(/\b\d+\b/g)
    return _.object(properties, values)
  })
}

function getEvidenceData (evidence) {
  let data = {}
  evidence.split('\n').forEach((attribute) => {
    let propertyAndValue = attribute.match(/\b\w+\b/g)
    data[_.first(propertyAndValue)] = _.last(propertyAndValue)
  })
  return data
}
