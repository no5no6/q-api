import mongoose from 'mongoose'
import event from '../shared/event.js'

const Schema   = mongoose.Schema

const Questionnaire = {
  title: String,
  // templateId: ObjectId,
  status: {type: Boolean, default: false},
  date: String,  // 首次提交
  operation: event
}

const QuestionnaireSchema = new Schema(Questionnaire)

QuestionnaireSchema.statics.retrieve = async function() {
  const questionnaires = await this.find()
  return questionnaires
}

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema)