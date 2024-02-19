const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler')
const { validateOpenTemplateStatus }= require('../../middleware/questionnaireValidate')

app.patch('/questionnaires/:id/status', validateOpenTemplateStatus, async (req, res) => {
  const status = req.body.status
  // 中间件中缓存的值
  let questionnaire = req._myselfCacheData

  try {
    questionnaire.status = status
    const new_questionnaire = await Questionnaire.add(questionnaire)

    sendSuccess(res, new_questionnaire)
  } catch (error) {
    sendError(res, 500, error.message)
  }

})