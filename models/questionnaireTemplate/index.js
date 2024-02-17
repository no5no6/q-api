const mongoose = require('mongoose')
const event = require('../shared/event')
const optionsSchema = require('./options')
const gradeSchema = require('./grade')

const ObjectId = mongoose.Types.ObjectId
const Schema = mongoose.Schema




/**
 * 题目
 * option 选项
 * number 题号
 * question 题目
 * type 题目类型
 * grade 打分设置
 * must 是否必填项
 */
const topic = {
  options: [optionsSchema],
  // number: Number,
  question: String,
  type: {type: String, default: '单选', enum: ['单选', '多选', '问答', '打分']},
  grade: gradeSchema,
  must: {type: Boolean, default: true}
}

const topicSchema = new Schema(topic, {versionKey: false});

/**
 * title 问卷名称
 * status 问卷状态
 * operation 操作员
 * topic 问卷题目相关
 * createTime 创建时间
 */
const questionnaireTemplate = {
  title: {
    type: String, 
    required: [true, '标题不能为空'], 
    minlength: 2
  },
  status: {type: Boolean, default: true},
  topic: [topicSchema],
  // date: String,
  createTime: {type: Number, default: Date.now(), immutable: true},
  operation: event
}

const questionnaireTemplateSchema = new Schema(questionnaireTemplate, { versionKey: false })

questionnaireTemplateSchema.pre('save', function(next) {
  // 只在新建时候执行
  if (this.new) this.createTime = Date.now()

  next()
})

questionnaireTemplateSchema.path('topic').validate(function (topics) {
  return topics.length > 0;
}, '问卷模板至少包含一个题目');


questionnaireTemplateSchema.statics.retrieve = function() {
  return this.find({ status: true })
}

questionnaireTemplateSchema.statics.retrieveById = function(id) {
  return this.findOne({ _id: new ObjectId(id) })
}

questionnaireTemplateSchema.statics.retrieveByTitle = function(title) {
  return this.findOne({title})
}

questionnaireTemplateSchema.statics.add = function(template) {
  return this.create(template)
}

questionnaireTemplateSchema.statics.updateById = function(id, questionnaireTemplate) {
  return this.findByIdAndUpdate(id, 
    {
      $set: questionnaireTemplate
    }, 
    {
      new: true, // 返回更新后的文档
      runValidators: true, // 启用验证
    }
  )
}

module.exports = mongoose.model('QuestionnaireTemplate', questionnaireTemplateSchema)