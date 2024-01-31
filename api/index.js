import express from 'express'

import models from '../models/index.js'


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
  .catch(err => console.log(err));

// 加载用户 api
require('./user/retrieve.js')
require('./user/addUser.js')


// 加载问卷 api
require('./questionnaire/retrieve.js')


export default app;

