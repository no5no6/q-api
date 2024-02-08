const QuestionnaireTemplate = require('../models/questionnaireTemplate/index')
const { sendError } = require('../utils/responseHandler')

/**
 * 验证标题是否存在
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function validateTitleExists(req, res, next) {

  try {
    const questionnaireTemplate = await QuestionnaireTemplate.retrieveByTitle(req.body.title)
   
    if(questionnaireTemplate) return sendError(res, 400, '问卷模版名称已存在')

    next()
  } catch (error) {
    return sendError(req, 500, error.message)
  }
 
}

module.exports = { validateTitleExists }