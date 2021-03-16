// Write a function that takes in two arrays of non-negative integers
// Each element in the arrays contains a single digit
// Together each array represents a whole number
// Create and return a new array that is the sum of the numbers of the two provided arrays
// Solve this problem without type coercion, ie don't join the array into a string

var sumArrayDigits = function(arr1, arr2) {
  var sum = [];
  var carryOver = 0;
  var idx1 = arr1.length - 1;
  var idx2 = arr2.length - 1;

  while (idx1 >= 0 && idx2 >= 0) {
    var currentSum = arr1[idx1] + arr2[idx2] + carryOver;
    carryOver = 0;

    if (currentSum > 9) {
      currentSum = currentSum - 10;
      carryOver = 1;
    }

    sum.unshift(currentSum);

    idx1--;
    idx2--;
  }

  while (idx1 >= 0) {
    var currentSum = arr1[idx1] + carryOver;
    carryOver = 0;

    if (currentSum > 9) {
      currentSum = currentSum - 10;
      carryOver = 1;
    }

    sum.unshift(currentSum);

    idx1--;
  }

  while (idx2 >= 0) {
    var currentSum = arr2[idx2] + carryOver;
    carryOver = 0;
    
    if (currentSum > 9) {
      currentSum = currentSum - 10;
      carryOver = 1;
    }

    sum.unshift(currentSum);

    idx2--;
  }

  if (carryOver) {
    sum.unshift(1);
  }

  return sum;
};
