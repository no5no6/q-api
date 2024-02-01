import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../../../models/user/index'
import { sendError } from '../../../utils/responseHandler'

/**
 * 验证用户名密码非空
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function validateLoginParamsIsNull(req, res, next) {
  const { name, password} = req.body

  if(!name || !password) {
    return sendError(res, 400, '用户名密码不能为空')
  }

  next()
}

/**
 * 验证用户密码是否正确
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function validatePassword(req, res, next) {
  const user = await User.retrieveUserByName(req.body.name)

  if (!user) {
    sendError(res, 400, '用户不存在')
  }

  // 验证密码
  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

  if (!isPasswordValid) {
    return sendError(res, 400, '用户名密码错误')
  }

  // 特殊处理为了登陆成功后返回该对象
  const {password, operation, ...filterUser} = user.toObject()
  req._myselfCacheData = filterUser

  next()
}

/**
 * 验证用户是否登陆
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function authenticateToken(req, res, next) {
  // 获取请求头中的auth header
  const authHeader = req.headers['authorization']
  
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return sendError(res, 401, '未登陆，请登陆')  // 如果没有token，则未授权
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return sendError(res, 403, '登陆超时，请重新登陆') // 无效的token
    }
 
    // req.user = user // 将解码的payload添加到请求中
    next(); // 继续处理请求
  });
}

module.exports =  { validateLoginParamsIsNull, validatePassword, authenticateToken }