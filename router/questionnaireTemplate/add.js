const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler') 
const { authenticateToken } = require('../../middleware/userValidate')

app.post('/questionnaireTemplate', async (req, res) => {
  
  try {
    const questionnaireTemplate = await QuestionnaireTemplate.add(req.body)
    sendSuccess(res, questionnaireTemplate)
  } catch (error) {
    console.error(`User create error: ${error.message}`)
    sendError(res, 500, error.message)
  } 
})