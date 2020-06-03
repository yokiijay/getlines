const fs = require('fs-extra')
const path = require('path')
const jschardet = require('jschardet')

let allFilesLines = 0

const getlines = async (dir)=>{
  const files = fs.readdirSync(dir)

  for(file of files){
    const filepath = path.join(dir, file)

    const stats = await fs.stat(filepath)

    if(stats.isFile()){
      const data = await fs.readFile(filepath)
      if(!jschardet.detect(data).encoding) continue
      const fileLines = data.toString().match(/\n/g)&&data.toString().match(/\n/g).length
      allFilesLines+=fileLines+1
      console.log( `${fileLines} 行: ${filepath}` )
    }else if(stats.isDirectory()){
      await getlines(filepath)
    }

  }

  return allFilesLines
}

module.exports = getlines


// {(async ()=>{

//   await getlines(process.argv[2])

//   console.log( `所有文件行数共：${allFilesLines}` )
  
// })()}