import User from '../../models/user/index'
import { sendSuccess, sendError } from '../../utils/responseHandler'
import { authenticateToken } from '../user/middleware/validate'

app.get('/users', authenticateToken, async (req, res) => {

  try {
    const users = await User.retrieve()
    sendSuccess(res, users)
  } catch (error) {
    sendError(err, 500, error.message)
  }
})