const Answer = require('../../models/answer')
const { sendSuccess, sendError } = require('../../utils/responseHandler')

app.get('/statistics/group/:questionnaireId', async (req, res) => {
  const { questionnaireId } = req.params

  try {
    const results = await Answer.retrieveResultsByQuestionnaireIdGroup(questionnaireId)
    sendSuccess(res, results)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})