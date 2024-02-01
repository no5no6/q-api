
import bcrypt from 'bcryptjs'

import User from '../../models/user/index'
import { sendSuccess, sendError } from '../../utils/responseHandler'
import { encryptPassword, validateEmailExists } from './middleware/encryptPassword'


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