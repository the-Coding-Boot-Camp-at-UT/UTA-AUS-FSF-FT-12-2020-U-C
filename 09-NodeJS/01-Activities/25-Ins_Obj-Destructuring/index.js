const arya = {
  name: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'],
};

const jaime = {
  name: 'Jaime Lannister',
  parents: ['Tywin Lannister', 'Joanna Lannister'],
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:

const aryaName = arya.name;
const aryaParents = arya.parents;

console.log(aryaName); // prints `"Arya Stark"`
console.log(aryaParents); // prints `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:

const { name, parents } = arya;

console.log(name); // prints `"Jaime Lannister"`
console.log(parents); // prints `["Tywin Lannister", "Joanna Lannister"]`

// We can also rename our destructured properties like so:

const { name: jaimeName } = jaime;
console.log(jaimeName); // prints `"Jaime Lannister"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

const logCharacter = (character) =>
  console.log(
    `${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
  );

logCharacter(arya);

// But now we can do this:

const betterLogCharacter = ({ name, parents }) =>
  console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

betterLogCharacter(jaime);
