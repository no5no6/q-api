const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT | 3001;


main().catch(err => console.log(err));

async function main() {
  console.log('11111111');

  mongoose.connect(process.env.MONGODB_URI);

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

  const fluffy = new Kitten({ name: 'tom' });

  await fluffy.save();
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);
}

app.get('/test', (req, res) => {
  res.send('Hello World!');
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app;

