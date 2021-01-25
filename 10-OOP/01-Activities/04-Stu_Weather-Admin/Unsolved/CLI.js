const WeatherAdmin = require("./Unsolved/WeatherAdmin.js");

// Hold the value whether someone is an "admin" or "user"
const loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
const userName = process.argv[3];

// And they will need to provide a "location"
const userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
const myAdmin = new WeatherAdmin();

if (loginType === "admin") {
  myAdmin.getData();
}
else if {
  myAdmin.newUserSearch(userName, userLocation);
}
