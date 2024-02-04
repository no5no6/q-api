const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler') 
const { authenticateToken } = require('../../middleware/userValidate')

app.post('/questionnaireTemplate', authenticateToken, async (req, res) => {
  console.log(req.body, 'aaaaaaa')
  try {
    console.log('111111111111')
    const questionnaireTemplate = await QuestionnaireTemplate.add(req.body)
    console.log('22222222')
    sendSuccess(res, questionnaireTemplate)
  } catch (error) {
    console.error(`User create error: ${error.message}`)
    sendError(res, 500, error.message)
  } 
})