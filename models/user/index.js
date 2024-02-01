import mongoose from 'mongoose'
import event from '../shared/event'

const Schema   = mongoose.Schema

const userTemplate = {
  name: {
    type: String,
    minlength: 2,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  organization: String,
  operation: event
}

const userSchema = new Schema(userTemplate, {versionKey: false})


userSchema.pre('save', function(next){
  next()
})


userSchema.path('email').validate(function(email) {
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
  return emailRegex.test(email)
}, '邮箱格式不正确')


userSchema.statics.retrieve = function() {
  return this.find()
}

userSchema.statics.add = function(user) {
  return this.create(user)
}

userSchema.statics.retrieveUserByName = function(name) {
  const query = this.where({ name })
  return query.findOne()
}

module.exports = mongoose.model('User', userSchema)
