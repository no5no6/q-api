import User from '../../models/user'
const { sendSuccess, sendError } = require('../../utils/responseHandler');

app.get('/users', async (req, res) => {
  try {
    const users = await User.retrieve()
    sendSuccess(res, users)
  } catch (error) {
    sendError(err, 500, error.message)
  }
})