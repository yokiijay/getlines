#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const jschardet = require('jschardet')

let allFilesLines = 0

async function getlines(dir){
  const files = fs.readdirSync(dir)

  for(file of files){
    const filepath = path.join(dir, file)

    const stats = await fs.stat(filepath)

    if(stats.isFile()){
      const data = await fs.readFile(filepath)
      if(!jschardet.detect(data).encoding) continue
      const fileLines = data.toString().match(/\n/g)&&data.toString().match(/\n/g).length
      allFilesLines+=fileLines+1
      console.log( `文件 ${filepath} 行数为：${fileLines}` )
    }else if(stats.isDirectory()){
      await getlines(filepath)
    }

  }
}


{(async ()=>{

  await getlines(process.argv[2])

  console.log( `所有文件行数共：${allFilesLines}` )
  
})()}