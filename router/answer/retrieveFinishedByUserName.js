const Answer = require('../../models/answer')
const { sendSuccess, sendError } = require('../../utils/responseHandler')

app.get('/answer/:id/finished/:username', async (req, res) => {
  const { id, username:userName } = req.params

  try {
    const answer = await Answer.retrieveByUserName(id, userName)
    sendSuccess(res, answer)
  } catch (error) {
    sendError(res, 500, error.message)
  }
})