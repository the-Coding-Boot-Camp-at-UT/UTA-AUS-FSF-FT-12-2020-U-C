// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

var multiplyInto20 = function(arr) {
  var numMap = {};

  for (var i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    var neededNumber = 20 / currentNum;

    if (numMap[neededNumber]) {
      return true;
    } else {
      numMap[currentNum] = true;
    }
  }

  return false;
};
