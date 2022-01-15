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
    required: [true, "name field not found"],
  },
  rating: Number,
  review: String,
};
