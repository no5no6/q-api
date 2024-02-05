const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler')

app.put('/questionnaireTemplate/:id', async (req, res) => {
  console.log(req.params.id, 'req.params.id')
  try {
    const questionnaireTemplate = await QuestionnaireTemplate.updateById(req.params.id, req.body)
    sendSuccess(res, questionnaireTemplate)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})