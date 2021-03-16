// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
  var carry = 1;

  for (var i = digits.length - 1; i >= 0; i--) {
    var plusOne = digits[i] + carry;
    var sum;
    carry = 0;

    if (plusOne > 9) {
      carry = 1;
      sum = 10 - plusOne;
    } else {
      sum = plusOne;
    }

    digits[i] = sum;
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
};
