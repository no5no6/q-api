
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
 * number 题号
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
  topicId: ObjectIdType,
  number: Number,
  question: String,
  selectContent: String,
  selectMultipleContent: [String],
  selectId: ObjectIdType,
  selectMultipleId: [ObjectIdType],
  type: {type: String, default: '单选', enum: ['单选', '多选', '问答', '评分']},
  additional: String,
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
  options: [optionsSchema],
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
            selectContent: '$answer.selectContent',
            additional: '$answer.additional',
            option: '$answer.option',
            type: '$answer.type',
            selectMultipleContent: '$answer.selectMultipleContent',
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
