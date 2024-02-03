const dayjs = require('dayjs')

/** 通用时间对象 */
module.exports = { 
  // 毫秒
  dateNumber: {type: Number, default: Date.now},
  
  // 格式 YYYY-MM-DD
  dateString: {type: String, default: (() => dayjs().format('YYYY-MM-DD'))},

  // 用户id
  userId: String,

  // 用户名
  userName: String,
}
