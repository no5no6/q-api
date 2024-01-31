import mongoose from 'mongoose'
import event from '../shared/event.js'

const Schema   = mongoose.Schema

const userTemplate = {
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  organization: String,
  operation: event
}

const userSchema = new Schema(userTemplate)


userSchema.pre('save', function(next){
  next()
})


userSchema.path('email').validate(function(email) {
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
  return emailRegex.test(email)
}, '邮箱格式不正确')


userSchema.statics.retrieve = async function() {
  return await this.find()
}

userSchema.statics.add = async function(user) {
  return await this.create(user)
}

module.exports = mongoose.model('User', userSchema)
