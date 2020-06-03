module.exports = (()=>{
  const isZh = process.env.LANG.includes('zh_CN')
  String.prototype.zh = (val)=>{
    if(val) return val
    return this
  }

  return isZh
})()