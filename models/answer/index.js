
const mongoose = require('mongoose')
const event = require('../shared/event')
const optionsSchema = require('../questionnaireTemplate/options')
const gradeSchema = require('../questionnaireTemplate/grade') 

const Schema   = mongoose.Schema
const ObjectIdType = Schema.ObjectId
const ObjectId = mongoose.Types.ObjectId



/**
 * topicId 对应题目 _id
 * number 题号
 * question 题目
 * selectId 选项 _id（单选、多选）
 * gradeValue 评分值
 * type 题目类型
 * additional 附加文字补充
 * text 简答题文字
 * grade 打分设置
 * options 全部选项数组（optionsSchema）
 * must 是否必填项
 */
const topicAnswer = {
  topicId: ObjectIdType,
  number: Number,
  question: String,
  selectId: [ObjectIdType],
  type: {type: String, default: '单选', enum: ['单选', '多选', '问答', '评分']},
  additional: String,
  text: String,
  grade: gradeSchema,
  options: [optionsSchema],
  must: {type: Boolean, default: true},
}

const topicAnswerSchema = new Schema(topicAnswer, {versionKey: false})

/**
 * templateId 对应问卷模版 _id
 * questionnaireId 对应当期问卷 _id
 * questionnaireTitle 当期问卷标题
 * userName 回答者姓名
 * status 答卷状态
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
  options: [topicAnswerSchema],
  createTime: Number,
  operation: event,
}

const answerSchema = new Schema(answer, {versionKey: false})


answerSchema.statics.add = function(answer) {
  return this.create(answer)
}

answerSchema.statics.retrieve = function() {
  return this.find()
}

answerSchema.statics.retrieveById = function(id) {
  return this.findOne({_id: new ObjectId(id)})
}

answerSchema.statics.retrieveFinishedByUserName = function(questionnaireId, userName) {
  return this.find({userName, questionnaireId: new ObjectId(questionnaireId)})
}

answerSchema.statics.retrieveResultsByQuestionnaireIdGroup = function(questionnaireId) {
  return this.aggregate([
    {
      $match: {
        'questionnaireId': new ObjectId(param.questionnaireId)
      }
    },
    {
      $unwind: '$answer'
    },
    {
      $project: {
        _id: 0,
        number: 1,
        userName: 1,
        answer: 1
      }
    },
    {
      $group: {
        _id: '$answer.question',
        result: {
          '$push': {
            number: '$answer.number',
            userName: '$userName',
            selectId: '$answer.selectId',
            additional: '$answer.additional',
            options: '$answer.options',
            text: '$answer.text',
            type: '$answer.type',
            grade: '$answer.grade'
          }
        }
      }
    },
    {
      $sort: {'result.number': 1}
    }
  ])
}

module.exports = mongoose.model('Answer', answerSchema)