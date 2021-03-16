// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function(path) {
  var pathArr = path.split("/");
  var stack = [];

  for (var i = 0; i < pathArr.length; i++) {
    var section = pathArr[i];

    if (!section) {
      continue;
    }

    if (section === ".") {
      continue;
    }

    if (section === "..") {
      stack.pop();
      continue;
    }

    stack.push(section);
  }

  return "/" + stack.join("/");
};
