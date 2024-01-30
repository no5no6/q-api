const mongoose = require('mongoose')

const userSchema = require('./user/index')

main().catch(err => console.log(err));

async function main() {

  mongoose.connect(process.env.MONGODB_URI);

  app.models.User = mongoose.model('User', userSchema);

}