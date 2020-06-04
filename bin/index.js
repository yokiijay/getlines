#!/usr/bin/env node
const yargs = require('yargs')
const getlines = require('../src/getlines')
const isZh = require('../src/isZh')

const usage = 
`
🔍 Count how many lines you wrote.

  Usage: linsof <directory path>

  Example:
  $ linesof .       Count all lines of current directory recursively.
`.zh(
`
🔍看看这些年你写了多少行代码

  使用：linesof <目录路径>

  示例:
  $ linesof .       获取当前目录所有文件的代码行数，包括所有子文件
`
)

const argv = yargs
  .usage(usage)
  .alias('h', 'help')
  .alias('v', 'version')
  .option('i', {
    alias: 'ignore',
    describe: 'ignore other specified files'.zh('排除其他指定文件'),
    type: 'array'
  })
  .argv

console.log( argv )


{(async ()=>{

  // const allLines = await getlines(dir)

})()}