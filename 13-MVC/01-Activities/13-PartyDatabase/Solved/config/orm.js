const connection = require('./connection.js');

const orm = {
  select(whatToSelect, tableInput) {
    const queryString = 'SELECT ?? FROM ??';
    connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere(tableInput, colToSearch, valOfCol) {
    const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
    console.log(queryString);

    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  leftJoin(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    let queryString = 'SELECT ?? FROM ?? AS tOne';
    queryString += ' LEFT JOIN ?? AS tTwo';
    queryString += ' ON tOne.?? = tTwo.??';

    console.log(queryString);

    connection.query(
      queryString,
      [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

module.exports = orm;
