const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError } = require('../../utils/responseHandler')

app.get('/questionnaireTemplates/:id', async (req, res) => {
  try {
    const questionnaireTemplate = await QuestionnaireTemplate.retrieveById(req.params.id)
    sendSuccess(res, questionnaireTemplate)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})