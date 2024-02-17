const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * 打分
 * max 最多几颗星
 * value 当前选择几颗星(或默认值)
 * text 不同颗数星星对应文本
 */
const grade = {
  max: {
    type:Number,
    default: 10
  },
  value: Number,
  text: [String]
}

module.exports = new Schema(grade, {versionKey: false})