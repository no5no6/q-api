const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * 选项
 * content 内容
 * allowAddReasonStatus 是否可以在用户选择后添加文字说明
 */
const options = {
  content: {
    type: String,
    required: [true, '选择项名称不能为空']
  },
  allowAddReasonStatus: {type: Boolean, default: false}
}


module.exports = new Schema(options, {versionKey: false})