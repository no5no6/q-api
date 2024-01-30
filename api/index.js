const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT | 3001;

let Kitten = null;

main().catch(err => console.log(err));

async function main() {

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

  Kitten = mongoose.model('Kitten', kittySchema);

}

app.get('/test', async (req, res) => {
  const fluffy = new Kitten({ name: 'tom2222' });

  await fluffy.save();
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);

  res.send(kittens);
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app;

