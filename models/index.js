const mongoose = require('mongoose');
// const UserSchema = require('./user')
// console.log(UserSchema, 'UserSchema')

main().catch(err => console.log(err));

async function main() {
  console.log('====11111111')

  mongoose.connect(process.env.MONGODB_URI)


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

  const fluffy = new Kitten({ name: 'f33333' });
  fluffy.speak(); // 

  await fluffy.save();
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);
}



