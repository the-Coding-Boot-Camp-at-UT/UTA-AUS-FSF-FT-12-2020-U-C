// We import the `fs` module to enable interaction with the file system
const fs = require('fs');

// appendFile() takes in 3 arguments: path, data, and callback function
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // Ternary operator takes in a condition followed by a question mark (?)
  // then an expression to execute if the condition is truthy followed by a colon (:)
  // and finally the expression to execute if the condition is falsy.
  // This operator is frequently used as a shortcut for the if statement.
  err ? console.error(err) : console.log('Commit logged!')
);
