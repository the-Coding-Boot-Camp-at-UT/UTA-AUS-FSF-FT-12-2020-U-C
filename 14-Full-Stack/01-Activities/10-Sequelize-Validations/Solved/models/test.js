const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define('test', {
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        genre: Sequelize.STRING,
        pages: Sequelize.INTEGER,
      });
      return Test;
}
