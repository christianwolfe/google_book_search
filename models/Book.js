const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  authors: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  link: {
      type: String
  }
});

module.exports = Book = mongoose.model("book", BookSchema);
