const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// Describe how map is working in the example below. What will the value of tripledArray be?
// A map loops through each number in originalArray, multiplies it by 3, and adds it to a new array. The value of tripledArray will be the new array returned by the map.
// [3, 9, 6, 15, 30]
const tripledArray = originalArray.map(data => data * 3);

// Describe how map is working in the example below. What will the value of oddOrEven be?
// A map takes the originalArray, uses a conditional statement to check if a number is even or odd, and returns a new array 
// containing the text "even" if the number is even and the text "odd" if the number is odd
// ["odd", "odd", "even", "odd", "even"]

const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

