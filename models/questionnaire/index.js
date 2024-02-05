const mongoose = require('mongoose')
const event = require('../shared/event')

const Schema   = mongoose.Schema
const ObjectId = Schema.ObjectId


/**
 * title 当期问卷标题
 * templateId 对应问卷模版 _id
 * status 当期问卷状态 （打开/关闭），关闭的问卷就不能再答题了
 * createTime 创建时间
 * operation 操作员
 */
const Questionnaire = {
  title: String,
  templateId: ObjectId,
  status: {type: Boolean, default: false},
  createTime: {type: Number, default: Date.now, immutable: true},
  operation: event
}

const QuestionnaireSchema = new Schema(Questionnaire, {versionKey: false})

QuestionnaireSchema.statics.retrieve = function() {
  return questionnaires = this.find()
}

QuestionnaireSchema.statics.retrieveById = function(id) {
  return questionnaire = this.findOne({_id: new ObjectId(id)})
}

QuestionnaireSchema.statics.retrieveByTemplateId = function(templateId) {
  return questionnaire = this.find({templateId: new ObjectId(templateId)})
}

QuestionnaireSchema.statics.retrieveByTittle = function(title) {
  return questionnaire = this.findOne({title})
}

QuestionnaireSchema.statics.updateById = function(id, questionnaire) {
  return this.findByIdAndUpdate(id, 
    {
      $set: questionnaire
    }, 
    {
      new: true, // 返回更新后的文档
      runValidators: true, // 启用验证
    }
  )
}

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema)