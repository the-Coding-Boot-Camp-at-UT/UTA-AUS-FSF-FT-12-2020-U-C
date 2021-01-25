// We're incorporating an npm package for doing weather searches.
const weather = require("weather-js");

// Creates a UserSearch Constructor
const UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.Now();

  this.getWeather = () => {
    weather.search({ search: this.location, degreeType: "F" }, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(JSON.stringify(result, null, 2));
    });
  };
};

module.exports = UserSearch;
