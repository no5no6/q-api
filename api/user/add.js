const bcrypt = require('bcryptjs')
const User = require('../../models/user/index')
const { sendSuccess, sendError } = require('../../utils/responseHandler')
const { encryptPassword } = require('../../middleware/encryptPassword')
const { validateEmailExists } = require('../../middleware/userValidate')

app.post('/user',validateEmailExists, encryptPassword, async (req, res) => {

  try {
    const user = await User.add(req.body)
    const {password, operation, ...filterUser} = user.toObject()

    sendSuccess(res, filterUser)
  } catch (error) {
    console.error(`User create error: ${error.message}`)
    sendError(res, 500, error.message)
  }
})