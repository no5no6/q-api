import jwt from 'jsonwebtoken'

import { sendSuccess } from '../../utils/responseHandler'
import { validateLoginParamsIsNull, validatePassword } from '../user/middleware/validate'

app.post('/login', validateLoginParamsIsNull, validatePassword, async (req, res) => {
  const { name } = req.body

  // 生成JWT
  const token = jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn: '1h' })
  
  const data = Object.assign({ token }, req._myselfCacheData)
  
  sendSuccess(res, data)
})