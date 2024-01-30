const express = require('express')
const app = express()


// express对象赋给全局
global.app  = app

// 存放模型
app.models = {}

// 加载模型
require('../models/index')

// 加载 api
require('./user/retrieve.js')


module.exports = app;

