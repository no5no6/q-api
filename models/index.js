const mongoose = require('mongoose');
// const UserSchema = require('./user')
// console.log(UserSchema, 'UserSchema')

main().catch(err => console.log(err));

async function main() {
  console.log('====11111111')

  // mongoose.connect(process.env.MONGODB_URI)
  mongoose.connect('mongodb+srv://vercel-admin-user:PT3dc4CLsQpOBfEJ@no5no6.6ekwral.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


  const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name, '111111'); // 'Silence'

  const fluffy = new Kitten({ name: 'tommmmmm' });
  fluffy.speak(); // 

  await fluffy.save();
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);
}



