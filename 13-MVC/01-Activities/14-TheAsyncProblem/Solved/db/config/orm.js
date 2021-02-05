const connection = require('./connection.js');

const orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectWhere(tableInput, colToSearch, valOfCol, cb) {
    const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
