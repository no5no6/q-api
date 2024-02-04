const _ = require('lodash')

const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler') 

app.patch('/questionnaireTemplate/:id/status', async (req, res) => {

  try {
    const questionnaireTemplate = await QuestionnaireTemplate.retrieveById(req.params.id)

    if (_.isEmpty(questionnaireTemplate)) return sendError(res, 404, '未找到需要删除的问卷模版')
    
    questionnaireTemplate.status = false
  
    const template = await questionnaireTemplate.save()
    sendSuccess(res, template)
  } catch (error) {
    sendError(res, 500, error.message) 
  }
})