const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
