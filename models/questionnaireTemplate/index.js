import mongoose from 'mongoose'
import event from '../shared/event'

const Schema = mongoose.Schema

const options = {
  name: String,
  content: String,
  allowAddReasonStatus: {type: Boolean, default: false} // 某一项选择中是否可以用户选择后添加文字说明
}

const optionsSchema = new Schema(options, {versionKey: false})


const grade = {
  step: Number,
  begin: Number,
  end: Number,
  type: String
}

const gradeSchema = new Schema(grade, {versionKey: false})

const topic = {
  options,
  number: Number,
  question: String,
  type: {type: String, default: '单选', enum: ['单选', '多选', '问答', '打分']},
  // allowAddGrade: {type: Boolean, default: false}, // 是否添加打分
  grade: gradeSchema,
  must: {type: Boolean, default: true}, // 是否必填项
}

const topicSchema = new Schema(topic, {versionKey: false});

const questionnaireTemplate = {
  title: String,
  status: {type: Boolean, default: true},
  topic: [topicSchema],
  date: String,
  operation: event
}

const questionnaireTemplateSchema = new Schema(questionnaireTemplate, { versionKey: false });




module.exports = questionnaireTemplateSchema;