const Questionnaire = require('../models/questionnaire/index')
const { sendError } = require('../utils/responseHandler')

async function validateOpenTemplateStatus(req, res, next) {
  const status = req.body.status

  try {
    const questionnaire = await Questionnaire.retrieveById(req.params.id)

    if(_.size(questionnaire)) return sendError(res, 404, '未找到该问卷。')

    if(status) {
      const questionnaireByTemplate = Questionnaire.retrieveOpenByTemplateId(questionnaire.templateId)

      if(_.size(questionnaireByTemplate)) return sendError(res, 403, '开启新问卷前，请关闭同一模板下的其他问卷。')
    }

    req._myselfCacheData = questionnaire

    next()
  } catch (error) {
    sendError(req, 500, error.message)
  }
}

// async function validateQuestionnaireExists(req, res, next) {


//   next()
// }