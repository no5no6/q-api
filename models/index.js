import mongoose from 'mongoose'

export default async function () {

  mongoose.connect(process.env.MONGODB_URI)

  // const User = mongoose.model('User', userSchema)
  // const Questionnaire = mongoose.model('Questionnaire', questionnaireEachSchema)

  // const connection = mongoose.createConnection(process.env.MONGODB_URI)

  // const User = connection.model('User', userSchema)
  // const Questionnaire = connection.model('Questionnaire', questionnaireEachSchema)

  // return { User, Questionnaire }
}