const ignore = require('ignore')
const path = require('path')
const fs = require('fs')

const ig = ignore().add().add(['src'])


console.log( ig.filter([path.relative('.','./src/index.js')]) )
