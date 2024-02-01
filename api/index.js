const express = require('express')
const models = require('../models/index.js')

const app = express()

// 解析JSON格式的请求体
// app.use(express.json())

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
require('./user/retrieve')
require('./user/add')

// 加载问卷模版 api


// 加载问卷（期） api
require('./questionnaire/retrieve')


module.exports = app

