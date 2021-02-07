module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
  });
  return Author;
};
