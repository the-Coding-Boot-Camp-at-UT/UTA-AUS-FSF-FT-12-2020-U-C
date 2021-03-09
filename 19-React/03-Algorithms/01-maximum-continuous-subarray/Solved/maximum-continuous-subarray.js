// Write a function that takes in an array and returns the sum of the maximum continuous subarray

var subSubArray = function(arr) {
  var max = arr[0];
  var currentMax = arr[0];

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];

    currentMax = Math.max(currentMax + num, num);
    max = Math.max(max, currentMax);
  }

  return max;
};
