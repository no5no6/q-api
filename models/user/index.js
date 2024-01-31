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


userSchema.statics.retrieve = function() {
  return this.find()
}

userSchema.statics.add = function(user) {
  return this.create(user)
}

userSchema.statics.retrieveUserByLoginInfo = function(user) {
  const query = this.where({name: user.name, password: user.password})
  return query.findOne()
}

export default mongoose.model('User', userSchema)
