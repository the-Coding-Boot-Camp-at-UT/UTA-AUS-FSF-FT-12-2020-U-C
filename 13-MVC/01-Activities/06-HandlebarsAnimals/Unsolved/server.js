const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const animals = [
  {
    animalType: 'dog',
    pet: true,
    fierceness: 4,
  },
  {
    animalType: 'cat',
    pet: true,
    fierceness: 10,
  },
  {
    animalType: 'giraffe',
    pet: false,
    fierceness: 4,
  },
  {
    animalType: 'zebra',
    pet: false,
    fierceness: 8,
  },
  {
    animalType: 'lion',
    pet: false,
    fierceness: 10,
  },
];

app.get('/dog', (req, res) => {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  // 1. Send the dog object from the animals array to the dog.handlebars file.
});

app.get('/all-pets', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
});

app.get('/all-non-pets', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  // 3. Send all the animals that are not pets to the index.handlebars file.
});

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
