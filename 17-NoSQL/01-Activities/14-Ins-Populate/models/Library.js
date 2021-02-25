const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
