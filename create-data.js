const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-bwa-test");

// create schema (Struktur collection)
// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String,
// });

const fruitSchema = {
  name: {
    type: String,
    required: true,
  },
  rating: Number,
  review: String,
};

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//   name: "orange",
//   rating: 9,
//   review: "delicious",
// });

// apple.save((err) => {
//   if (err) console.log(err);
//   else console.log("save success");
// });

const apple = new Fruit({
  name: "apple",
  rating: 9,
  review: "delicious",
});
const watermelon = new Fruit({
  name: "watermelon",
  rating: 9,
  review: "delicious",
});
const melon = new Fruit({
  name: "melon",
  rating: 9,
  review: "delicious",
});

Fruit.insertMany([apple, watermelon, melon], (err) => {
  if (err) console.log(err);
  else {
    console.log("save success");
    mongoose.connection.close();
  }
});
