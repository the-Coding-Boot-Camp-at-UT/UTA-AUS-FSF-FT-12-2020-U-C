module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
  });

  Author.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: 'cascade',
    });
  };

  return Author;
};
