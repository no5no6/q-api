const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler')

app.get('/questionnaire/:templateId/open', async (req, res) => {
  
  try {
    const questionnaire = await Questionnaire.retrieveOpenByTemplateId(req.params.templateId)
    sendSuccess(res, questionnaire)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})