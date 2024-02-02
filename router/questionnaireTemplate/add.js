const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler') 

app.post('/questionnaireTemplate', (req, res) => {

  try {
    const questionnaireTemplate = QuestionnaireTemplate.add(req.body)
    sendSuccess(res, questionnaireTemplate)
  } catch (error) {
    console.error(`User create error: ${error.message}`)
    sendError(res, 500, '创建问卷模版失败')
  }
  

})