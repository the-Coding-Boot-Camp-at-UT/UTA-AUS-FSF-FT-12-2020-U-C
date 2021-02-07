// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
const sequelize = new Sequelize('sequelize_library', 'root', 'password', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;
