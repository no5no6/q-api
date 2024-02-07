const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler')

app.post('/questionnaire', async (req, res) => {

  try {
    console.log(req.body, 'body')
    const questionnaire = await Questionnaire.add(req.body)
    sendSuccess(res, questionnaire)
  } catch (error) {
    sendError(res, 500, error.message)
  }

})