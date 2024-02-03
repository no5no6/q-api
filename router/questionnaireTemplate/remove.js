const _ = require('lodash')
const QuestionnaireTemplate = require('../../models/questionnaireTemplate/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler') 

app.patch('/questionnaireTemplate/:id/status', (req, res) => {
  const id = req.params.id

  const questionnaireTemplate = this.retrieveById(req.params.id)

  if (questionnaireTemplate)

})