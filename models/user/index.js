var mongoose = require('mongoose')
var Schema   = mongoose.Schema
var ObjectId = Schema.ObjectId

const user = {
  uid: String,
  name: String,
  password: String,
  organization: String
}

const userSchema = new Schema(user)