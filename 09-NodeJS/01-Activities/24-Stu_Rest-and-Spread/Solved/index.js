// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// Which operator is being used here?
// We are using the spread operator to copy the 'songs' array into another array
const newSongs = [...songs];

// What do you expect to be logged in the console?
// ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // What does the reduce() method do?
  // The reduce() method executes the reducer function on each element of the array
  return array.reduce((a, b) => a + b, 0);
};
// What do you expect to be logged in the console?
// 6
console.log(addition(1, 2, 3));

// What is this syntax that is being used as the parameter?
// We are using the rest parameter syntax that allows us to represent an indefinite number of arguments as an array
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// What do you expect to be logged in the console?
// 6
console.log(additionSpread(1, 2, 3));

// What do you expect to be logged in the console?
// 110
console.log(additionSpread(1, 2, 3, 4, 100));
