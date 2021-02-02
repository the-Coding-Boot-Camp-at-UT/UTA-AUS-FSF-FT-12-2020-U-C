const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: '753951',
  database: 'playlistDB',
});

const queryAllSongs = () => {
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    res.forEach(({ id, title, artist, genre }) => {
      console.log(`${id} | ${title} | ${artist} | ${genre}`);
    });
    console.log('-----------------------------------');
  });
};

const queryDanceSongs = () => {
  const query = connection.query(
    'SELECT * FROM songs WHERE genre=?',
    ['Dance'],
    (err, res) => {
      if (err) throw err;
      res.forEach(({ id, title, artist, genre }) => {
        console.log(`${id} | ${title} | ${artist} | ${genre}`);
      });
    }
  );

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  queryAllSongs();
  queryDanceSongs();
});
