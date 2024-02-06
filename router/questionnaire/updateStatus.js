const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler')
const validateOpenTemplateStatus = require('../../middleware/questionnaireValidate')

app.patch('/questionnaire/:id/status', validateOpenTemplateStatus, async (req, res) => {
  const status = req.body.status
  // 中间件中缓存的值
  const questionnaire = req._myselfCacheData

  try {
    questionnaire.status = status
    const questionnaire = await Questionnaire.add(questionnaire)

    sendSuccess(res, questionnaire)
  } catch (error) {
    sendError(res, 500, error.message)
  }

})