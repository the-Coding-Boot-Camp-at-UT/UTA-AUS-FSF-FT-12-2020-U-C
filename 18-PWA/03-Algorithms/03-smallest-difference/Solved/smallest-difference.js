// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function(arr1, arr2) {
  var left = 0;
  var right = 0;
  var bestPair = [];
  var bestDiff = Infinity;

  while (left < arr1.length && right < arr2.length) {
    var leftVal = arr1[left];
    var rightVal = arr2[right];
    var currentDiff = Math.abs(rightVal - leftVal);

    if (currentDiff < bestDiff) {
      bestDiff = currentDiff;
      bestPair = [leftVal, rightVal];

      if (bestDiff === 0) {
        return bestPair;
      }
    }

    if (leftVal < rightVal) {
      left++;
    } else if (rightVal < leftVal) {
      right++;
    }
  }

  return bestPair;
};
