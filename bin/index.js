#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')

let allFilesLines = 0

async function getlines(dir){
  const files = fs.readdirSync(dir)

  for(file of files){
    const filepath = path.join(dir, file)

    const stats = await fs.stat(filepath)

    if(stats.isFile()){
      const data = await fs.readFile(filepath)
      const fileLines = data.toString().match(/\n/g)&&data.toString().match(/\n/g).length
      allFilesLines+=fileLines+1
    }else if(stats.isDirectory()){
      await getlines(filepath)
    }

  }
}


{(async ()=>{

  await getlines(process.argv[2])

  console.log( allFilesLines )
  
})()}