
const mongoose = require('mongoose')
const event = require('../shared/event')

const Schema   = mongoose.Schema
const ObjectIdType = Schema.ObjectId
const ObjectId = mongoose.Types.ObjectId

/**
 * max 最多几颗星
 * value 当前选择几颗星
 * text 星星对应文本
 */
const grade = {
  max: Number,
  value: Number,
  text: String
}

const gradeSchema = new Schema(grade, {versionKey: false})

/**
 * topicId 对应题目 _id
 * question 题目
 * selectContent 单选选择内容
 * selectMultipleContent 多选选择内容
 * selectId 单选选项 _id
 * selectMultipleId 多选选项 _id
 * type 题目类型
 * additional 附加文字补充
 * grade 打分设置
 * option 全部选项数组（optionsSchema）
 * must 是否必填项
 */
const options = {
  topicId: ObjectIdType, // 问题id
  // number: Number, // 题号
  question: String,    // 问题文字描述
  selectContent: String,
  selectMultipleContent: [String],
  selectId: ObjectIdType,
  selectMultipleId: [ObjectIdType],
  type: {type: String, default: '单选', enum: ['单选', '多选', '问答', '评分']},
  additional: String, // 附加文字补充
  grade: gradeSchema,
  option: Array,
  must: {type: Boolean, default: true},
}

const optionsSchema = new Schema(options, {versionKey: false})

/**
 * templateId 对应问卷模版 _id
 * questionnaireId 对应当期问卷 _id
 * questionnaireTitle 当期问卷标题
 * userName 回答者姓名
 * status
 * options 答题数组
 * createTime 首次提交
 * operation 操作员
 */
const answer = {
  templateId: ObjectIdType,
  questionnaireId: ObjectIdType,
  questionnaireTitle: String,
  userName: String,
  status: {type: Boolean, default: true},
  options: [answerSchema],
  createTime: Number,
  operation: event,
}

const answerSchema = new Schema(answer, {versionKey: false})

answerSchema.statics.retrieve = function() {
  return this.find()
}

answerSchema.statics.retrieveById = function(id) {
  return this.findOne({_id: new ObjectId(id)})
}

