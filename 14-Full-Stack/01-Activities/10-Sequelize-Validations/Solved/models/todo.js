module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    text: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't have a text value
      allowNull: false,
      // "len" is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140],
      },
    },
    complete: {
      type: DataTypes.BOOLEAN,
      // "defaultValue" is a flag that defaults a new todos complete value to false if not supplied one
      defaultValue: false,
    },
  });
  return Todo;
};
