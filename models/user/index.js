import mongoose from 'mongoose'
import event from '../shared/event.js'

const Schema   = mongoose.Schema

const user = {
  uid: String,
  name: String,
  password: String,
  organization: String,
  operation: event
}

const userSchema = new Schema(user)

userSchema.statics.retrieve = async function() {
  const users = await this.find()
  return users
}

module.exports = mongoose.model('User', userSchema)
