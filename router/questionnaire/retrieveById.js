const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError} = require('../../utils/responseHandler')

app.get('/questionnaire/:id', async (req, res) => {
  try {
    const questionnaire = await Questionnaire.retrieveById(req.params.id)
    sendSuccess(res, questionnaire)
  } catch (error) {
    sendError(res, 500, error.message)
  }

})