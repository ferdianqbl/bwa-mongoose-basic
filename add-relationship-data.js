const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-bwa-test");

// create schema (Struktur collection)
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nama harus diisi"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nama harus diisi"],
  },
  age: {
    type: Number,
  },
  favFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const duku = new Fruit({
  name: "duku",
  rating: 9,
  review: "delicious",
});

duku.save((err) => {
  if (err) console.log(err);
  else console.log("save success");
});

const people = new People({
  name: "Ferdi",
  age: 20,
  favFruit: duku,
});

people.save((err) => {
  if (err) console.log(err);
  else console.log("save success");
});
