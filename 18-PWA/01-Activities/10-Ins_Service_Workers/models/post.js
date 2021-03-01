var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  likes: Number,
  date: { type: Date, default: Date.now }
});

var Post = mongoose.model("post", postSchema);

module.exports = Post;
