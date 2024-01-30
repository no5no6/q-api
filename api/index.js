import express from 'express'
import models from '../models/index.js'

const app = express()

// express对象赋给全局
global.app  = app

// 加载模型
models()
  .then(data => {
    console.log('mongodb connect')
  })
  .catch(err => console.log(err));

// 加载 api
require('./user/retrieve.js')

require('./questionnaire/retrieve.js')


module.exports = app;

