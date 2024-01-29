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

userSchema.statics.retrieve = async function(items) {
  console.log('进入')
  const res = await this.find()
  console.log(res)
  return res
}

module.exports = userSchema