const Answer = require('../../models/answer')
const { sendSuccess, sendError } = require('../../utils/responseHandler')

app.get('/answer/:id', async (req, res) => {
  try {
    const answer = await Answer.retrieveById(req.params.id)
    sendSuccess(res, answer)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})