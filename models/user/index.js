const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const user = {
  uid: String,
  name: String,
  password: String,
  organization: String
}

const userSchema = new Schema(user)

userSchema.statics.retrieve = async function() {
  const users = await this.find()
  return users
}

module.exports = userSchema
