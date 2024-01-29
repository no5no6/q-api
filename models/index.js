const mongoose = require('mongoose');
const UserSchema = require('./user')


main().then(()=> console.log('连接成功')).catch(err => console.log('errooooooo------------',err));

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@no5no6.6ekwral.mongodb.net/?retryWrites=true&w=majority'`)
  console.log('vercel dev --bug')
}

const User = mongoose.model('User', UserSchema);
