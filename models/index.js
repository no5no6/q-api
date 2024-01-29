const mongoose = require('mongoose');
const UserSchema = require('./user')


main().then(()=> console.log('连接成功')).catch(err => console.log('errooooooo------------',err));

async function main() {
  console.log(process.env, '++++++++')
  console.log(process.env.USERNAME, 'process.env.USERNAME')
  await mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@no5no6.6ekwral.mongodb.net/?retryWrites=true&w=majority'`)
  console.log('111111')
}

const User = mongoose.model('User', UserSchema);
