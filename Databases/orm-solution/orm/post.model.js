// Define and export the sequelize model that represents the table posts.

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("posts", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      posterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Post;
  };