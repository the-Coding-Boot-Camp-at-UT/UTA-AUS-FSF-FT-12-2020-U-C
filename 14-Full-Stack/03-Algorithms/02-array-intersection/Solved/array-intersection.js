// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
  var numMap = {};
  var result = [];

  for (var i = 0; i < arr1.length; i++) {
    var num = arr1[i];

    if (numMap[num] === undefined) {
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    var num = arr2[i];

    if (numMap[num]) {
      result.push(num);
      numMap[num]--;
    }
  }

  return result;
};
