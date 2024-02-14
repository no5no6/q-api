const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler')
const { validateTitleExists } = require('../../middleware/questionnaireValidate')

app.post('/questionnaire', validateTitleExists, async (req, res) => {

  try {
    const questionnaire = await Questionnaire.add(req.body)
    sendSuccess(res, questionnaire)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})