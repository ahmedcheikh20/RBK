// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return User;
};
