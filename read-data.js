const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-bwa-test");

// create schema (Struktur collection)
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.find((err, res) => {
  if (err) console.log(err);
  else {
    console.log(res);
    mongoose.connection.close();
  }
});
