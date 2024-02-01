const mongoose = require('mongoose')
const event = require('../shared/event')

const Schema   = mongoose.Schema
const ObjectId = Schema.ObjectId

const Questionnaire = {
  title: String,
  templateId: ObjectId,
  status: {type: Boolean, default: false},
  date: String,  // 首次提交
  operation: event
}

const QuestionnaireSchema = new Schema(Questionnaire, {versionKey: false})

QuestionnaireSchema.statics.retrieve = async function() {
  const questionnaires = await this.find()
  return questionnaires
}

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema)