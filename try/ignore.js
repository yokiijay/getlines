const ignore = require('ignore')
const path = require('path')

const not = [
  '**/*.js'
]

const ig = ignore().add(not)


console.log( ig.filter([path.relative('.','./src/no/hello.md')]) )
