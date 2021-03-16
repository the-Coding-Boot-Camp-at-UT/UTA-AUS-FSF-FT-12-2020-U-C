// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {
  var numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var result = 0;

  for (var i = 0; i < str.length; i++) {
    var currentNumeral = str[i];
    var nextNumeral = str[i + 1];

    var currentValue = numerals[currentNumeral];
    var nextValue = numerals[nextNumeral];

    if (currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
};
