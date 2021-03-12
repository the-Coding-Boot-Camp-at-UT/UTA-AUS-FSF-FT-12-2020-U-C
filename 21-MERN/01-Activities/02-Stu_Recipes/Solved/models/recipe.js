const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // url for recipe web page - unique index
  href: {
    type: String,
    default: "",
    unique: true
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  ingredients: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
