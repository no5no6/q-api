const express = require('express')
const models = require('../models/index')

const app = express()

// 解析JSON格式的请求体 (本地 vercel dev 不需要用这句代码解析 body ，线上需要)
if(process.env.VERCEL_ENV !== 'development') app.use(express.json())


// express对象赋给全局
global.app  = app

// 加载模型
models()
  .then(data => {
    console.log('mongodb connect')
  })
  .catch(err => console.log(err))

// 加载登陆 api
require('./login/index')

// 加载用户 api
require('./user/index')

// 加载问卷模版 api
require('./questionnaireTemplate/index')

// 加载问卷（期） api
require('./questionnaire/index')



module.exports = app

