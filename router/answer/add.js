
const Answer = require('../../models/answer')
const { sendSuccess, sendError } = require('../../utils/responseHandler')

app.post('/answer', async (req, res) => {
  try {
    const answer = await Answer.add(req.body)
    sendSuccess(res, answer)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})