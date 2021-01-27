// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  var numMap = {};

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (numMap[currentNumber] === true) {
      return false;
    }

    numMap[currentNumber] = true;
  }

  return true;
};
