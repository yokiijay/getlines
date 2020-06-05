module.exports = (()=>{
  const isZh = process.env.LANG.includes('zh_CN')
  String.prototype.zh = function(val){
    if(isZh) return val
    return this.toString()
  }

  return isZh
})()