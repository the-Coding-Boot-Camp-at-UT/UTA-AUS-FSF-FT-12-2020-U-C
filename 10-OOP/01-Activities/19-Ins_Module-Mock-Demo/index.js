const MovieSearch = require("./movieSearch");

const movie = new MovieSearch();

movie.search("Spider-Man")
  .then(res => console.log(res.data));
