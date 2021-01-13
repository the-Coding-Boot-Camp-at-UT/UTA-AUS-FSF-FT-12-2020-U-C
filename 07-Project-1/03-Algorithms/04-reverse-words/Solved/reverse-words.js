// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
  var words = str.split(" ");
  var reversedWords = words.reverse();

  return reversedWords.join(" ");
};
