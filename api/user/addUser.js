import User from '../../models/user/index'
const { sendSuccess, sendError } = require('../../utils/responseHandler');

app.post('/user', async function(req, res){
  const data = req.body

  try {
    const user = await User.add(data)
    sendSuccess(res, user)
  } catch (error) {
    console.error(`User create error: ${error.message}`)
    sendError(res, 500, error.message)
  }
})