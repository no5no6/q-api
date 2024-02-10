const mongoose = require('mongoose')
const event = require('../shared/event')

const Schema   = mongoose.Schema
const ObjectIdType = Schema.ObjectId
const ObjectId = mongoose.Types.ObjectId


/**
 * title 当期问卷标题
 * templateId 对应问卷模版 _id
 * status 当期问卷状态 （打开/关闭），关闭的问卷就不能再答题了
 * createTime 创建时间
 * operation 操作员
 */
const Questionnaire = {
  title: {
    type: String, 
    required: [true, '标题不能为空'], 
    minlength: 2
  },
  templateId: ObjectIdType,
  status: {type: Boolean, default: false},
  createTime: {type: Number, default: Date.now(), immutable: true},
  operation: event
}

const QuestionnaireSchema = new Schema(Questionnaire, {versionKey: false})


// findByIdAndUpdate 方法会触发此中间件，限制每个模版下只能打开一个当期问卷
// QuestionnaireSchema.pre('findOneAndUpdate', async (next) => {
//   next()
// })
QuestionnaireSchema.pre('save', function(next) {
  // 只在新建时候执行
  if (this.new) this.createTime = Date.now()

  next()
})


QuestionnaireSchema.statics.retrieve = function() {
  return this.find()
}

QuestionnaireSchema.statics.retrieveById = function(id) {
  console.log(new ObjectId(id), 'ddddddd')
  return this.findOne({_id: new ObjectId(id)})
}

QuestionnaireSchema.statics.retrieveOpenByTemplateId = function(templateId) {
  return this.findOne({templateId: new ObjectId(templateId), status: true})
}

QuestionnaireSchema.statics.retrieveByTitle = function(title) {
  return this.findOne({title})
}

QuestionnaireSchema.statics.add = function(questionnaire) {
  return this.create(questionnaire)
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