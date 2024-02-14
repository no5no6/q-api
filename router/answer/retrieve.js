const Answer = require('../../models/answer')
const { sendSuccess, sendError } = require('../../utils/responseHandler')

app.get('/answer', async (req, res) => {
  try {
    const answer = await Answer.retrieve()
    sendSuccess(res, answer)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})