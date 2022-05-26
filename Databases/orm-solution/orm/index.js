const { Sequelize, DataTypes } = require("sequelize");
const config = require("config");

//Create a Sequelize instance and pass the appropriate parameters separately
//You should modify 'database', 'username' and 'password' to fit your own credentials.
const sequelize = new Sequelize(config.database, config.user, config.password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.model")(sequelize, DataTypes);
db.post = require("./post.model")(sequelize, DataTypes);
db.comment = require("./comment.model")(sequelize, DataTypes);

db.user.hasMany(db.post, {
  foreignKey: "posterId",
});
db.user.hasMany(db.comment, {
  foreignKey: "commenterId",
});

db.post.belongsTo(db.user, {
  as: "poster",
  foreignKey: "posterId",
  onDelete: "CASCADE",
});
db.post.hasMany(db.comment, {
  foreignKey: "postId",
});

db.comment.belongsTo(db.user, {
  as: "commenter",
  foreignKey: "commenterId",
  onDelete: "CASCADE",
});
db.comment.belongsTo(db.post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = db;
