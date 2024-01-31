
import bcrypt from 'bcryptjs'

import User from '../../models/user/index'
import { sendSuccess, sendError } from '../../utils/responseHandler'
import { encryptPassword } from './middleware/encryptPassword'


app.post('/user', encryptPassword, async (req, res) => {
  let data = req.body

  try {
    const user = await User.add(data)
    const {password, operation, __v, ...filterUser} = user.toObject()

    sendSuccess(res, filterUser)
  } catch (error) {
    console.error(`User create error: ${error.message}`)
    sendError(res, 500, error.message)
  }
})