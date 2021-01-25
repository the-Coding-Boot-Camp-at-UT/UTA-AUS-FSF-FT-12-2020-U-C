// Constructor function called 'Developer' that takes in 'name' and 'tech'
// Includes a method called 'introduction()'
function Developer(name, tech) {
  this.name = name;
  this.tech = tech;
  this.introduction = () => {
    console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
  };
}

// Creates a new object using the 'Developer' constructor
const rita = new Developer('Rita', 'JavaScript');

// Calls the 'introduction()' method on the new object
rita.introduction();
