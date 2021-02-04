const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

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

// Handlebars requires an object to be sent to the dog handlebars file.
// Lucky for us, animals[0] is an object!

// 1. send the dog object from the animals array to the dog handlebars file.
app.get('/dog', (req, res) => res.render('dog', animals[0]));

app.get('/all-pets', (req, res) => {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 2. Loop through the animals, and send those that are pets to the index handlebars file.
  const data = {
    animals: [],
  };

  for (let i = 0; i < animals.length; i += 1) {
    // Get the current animal.
    const currentAnimal = animals[i];

    // Check if this animal is a pet.
    if (currentAnimal.pet) {
      // If so, push it into our data.animals array.
      data.animals.push(currentAnimal);
    }
  }

  res.render('index', data);
});

app.get('/all-non-pets', (req, res) => {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 3. Loop through the animals, and send those that are not pets to the index handlebars file.
  const data = {
    animals: [],
  };

  const filteredArr = animals.filter((animal) => {
    if (!animal.pet) {
      data.animals.push(animal);
    }
  });
  // for (let i = 0; i < animals.length; i += 1) {
  //   // Get the current animal.
  //   const currentAnimal = animals[i];

  //   // Check if this animal is a pet.
  //   if (!currentAnimal.pet) {
  //     // If not, push it into our data.animals array.
  //     data.animals.push(currentAnimal);
  //   }
  // }

  res.render('index', data);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
