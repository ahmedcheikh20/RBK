// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comments", {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      commenterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Comment;
  };