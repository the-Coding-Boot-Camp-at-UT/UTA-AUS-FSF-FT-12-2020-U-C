// Write a function that takes in two strings and returns true if they are one edit away, else return false

var oneEditAway = function(str1, str2) {
  if (str1 === str2 || Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  var idx1 = 0;
  var idx2 = 0;
  var hasEdit = false;

  while (idx1 < str1.length && idx2 < str2.length) {
    if (str1[idx1] === str2[idx2]) {
      idx1++;
      idx2++;
      continue;
    }

    if (hasEdit) {
      return false;
    }

    if (str1.length < str2.length) {
      idx1++;
      hasEdit = true;
      continue;
    }

    if (str1.length > str2.length) {
      idx2++;
      hasEdit = true;
      continue;
    }

    idx1++;
    idx2++;
    hasEdit = true;
  }

  return true;
};
