// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
  var result = new Array(arr.length);
    
  var idx1 = 0;
  var idx2 = arr.length - 1;
  var idx3 = result.length - 1;
  
  while (idx1 <= idx2) {
    var left = arr[idx1];
    var right = arr[idx2];
    
    if (Math.abs(left) > Math.abs(right)) {
      result[idx3] = left ** 2;
      idx1++;
    } else {
      result[idx3] = right ** 2;
      idx2--;
    }
    
    idx3--;
  }
  
  return result;
};


// Alternate solution (less efficient)

// var sortedSquares = function(arr) {
//   var squares = arr.map(function(num) {
//     return num ** 2;
//   });

//   var sortedSquares = squares.sort(function(a, b) {
//     return a - b;
//   });

//   return sortedSquares;
// };
