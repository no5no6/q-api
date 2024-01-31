import User from '../../models/user/index'
const { sendSuccess, sendError } = require('../../utils/responseHandler');

app.post('/user', async function(req, res){
  const data = req.body

  try {
    const result = await User.add(data)
    sendSuccess(res, result)
  } catch (error) {
    console.error(`User create error: ${error.message}`)
    sendError(res, 500, error.message)
  }
})