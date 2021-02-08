// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
  var charMap = {};

  for (var i = 0; i < sub.length; i++) {
    var char = sub[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char in charMap) {
      charMap[char] -= 1;
    }
  }

  for (var key in charMap) {
    if (charMap[key] > 0) {
      return false;
    }
  }

  return true;
};
