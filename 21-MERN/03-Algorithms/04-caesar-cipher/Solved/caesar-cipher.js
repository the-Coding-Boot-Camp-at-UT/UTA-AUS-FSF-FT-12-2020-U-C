// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function(str, offset) {
  var result = "";

  while (offset < 0) {
    offset = 26 + offset;
  }

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var charCode = char.charCodeAt(0);
    var offsetChar = char;

    if (charCode >= 65 && charCode <= 90) {
      offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      offsetChar = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
    }

    result += offsetChar;
  }

  return result;
};
