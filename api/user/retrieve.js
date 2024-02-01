const User = require('../../models/user/index')
const { sendSuccess, sendError } = require('../../utils/responseHandler')
const { authenticateToken } = require('../../middleware/userValidate')

app.get('/users', authenticateToken, async (req, res) => {

  try {
    const users = await User.retrieve()
    sendSuccess(res, users)
  } catch (error) {
    sendError(err, 500, error.message)
  }
})