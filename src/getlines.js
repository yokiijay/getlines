const fs = require('fs-extra')
const path = require('path')
const jschardet = require('jschardet')
const ignore = require('ignore')
const signale = require('signale')

let allFilesLines = 0

const getlines = async (dir, ignoreList)=>{
  const gitignoreExist = fs.existsSync('.gitignore')
  const ig = ignore()
    .add('.git')
    .add(ignoreList)
    .add(gitignoreExist?fs.readFileSync('.gitignore').toString():null)

  const files = fs.readdirSync(dir)
    
  for(file of files){
    const filepath = path.join(dir, file)

    // 排除文件
    if(ig.ignores(filepath)) continue

    const stats = await fs.stat(filepath)

    if(stats.isFile()){
      const data = await fs.readFile(filepath)
      if(!jschardet.detect(data).encoding) continue
      const fileLines = data.toString().match(/\n/g)&&data.toString().match(/\n/g).length
      allFilesLines+=fileLines+1
      signale.star( `${fileLines} linesof: ${filepath}`.zh(`${fileLines} 行: ${filepath}`) )
    }else if(stats.isDirectory()){
      await getlines(filepath, ignoreList)
    }

  }

  return allFilesLines
}

module.exports = getlines


// {(async ()=>{

//   await getlines(process.argv[2])

//   console.log( `所有文件行数共：${allFilesLines}` )
  
// })()}