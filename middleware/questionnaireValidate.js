const Questionnaire = require('../models/questionnaire/index')
const { sendError } = require('../utils/responseHandler')
/**
 * 验证是否有应用此模版打开的问卷
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function validateOpenTemplateStatus(req, res, next) {
  const status = req.body.status

  try {
    const questionnaire = await Questionnaire.retrieveById(req.params.id)

    if(questionnaire) return sendError(res, 404, '未找到该问卷。')

    if(status) {
      const questionnaireByTemplate = await Questionnaire.retrieveOpenByTemplateId(questionnaire.templateId)

      if(questionnaireByTemplate) return sendError(res, 403, '开启新问卷前，请关闭同一模板下的其他问卷。')
    }

    req._myselfCacheData = questionnaire

    next()
  } catch (error) {
    return sendError(res, 500, error.message)
  }
}

/**
 * 验证标题是否存在
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function validateTitleExists(req, res, next) {

  try {
    const questionnaire =  await Questionnaire.retrieveByTitle(req.body.title)

    if(questionnaire) return sendError(res, 400, '问卷名称已存在')

    next()
  } catch (error) {
    return sendError(res, 500, error.message)
  }
 
}

module.exports = { validateOpenTemplateStatus, validateTitleExists }