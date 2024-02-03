const _ = require('lodash')

const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler') 

app.patch('/questionnaireTemplate/:id/status', async (req, res) => {
  const id = req.params.id

  const questionnaireTemplate = await QuestionnaireTemplate.retrieveById(req.params.id)

  if (_.isEmpty(questionnaireTemplate)) return sendError(res, 404, '未找到需要删除的问卷模版')
  
  questionnaireTemplate.status = false

  try {
    const template = await questionnaireTemplate.save()
    sendSuccess(res, template)
  } catch (error) {
    sendError(res, 500, '问卷模版删除失败') 
  }
})