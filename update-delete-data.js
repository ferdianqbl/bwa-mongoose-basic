const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-bwa-test");

// create schema (Struktur collection)
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Fruit.updateOne(
//   { _id: "61e23a88825bff2fc35c72d0" },
//   { name: "jeruk" },
//   (err, res) => {
//     if (err) console.log(err);
//     else {
//       console.log(res);
//       mongoose.connection.close();
//     }
//   }
// );

Fruit.deleteOne({ _id: "61e23a88825bff2fc35c72d0" }, (err, res) => {
  if (err) console.log(err);
  else {
    console.log(res);
    mongoose.connection.close();
  }
});
