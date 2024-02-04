const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler') 

app.get('/questionnaireTemplates',async (req, res) => {
  
  try {
    const questionnaireTemplates = await QuestionnaireTemplate.retrieve()
    sendSuccess(res, questionnaireTemplates)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})