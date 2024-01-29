const express = require('express')
const app = express()
const models  = require("../models");
const port = process.env.PORT | 3001

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app

