const db = require("./orm");

const { users, posts, comments } = require('./data.json');

(async () => {
  try {
    await db.sequelize.sync({ force: true });

    await db.user.bulkCreate(users);
    console.log("users saved");

    await db.post.bulkCreate(posts);
    console.log("posts saved");

    await db.comment.bulkCreate(comments);
    console.log("comments saved");
    await db.sequelize.close();
  } catch (error) {
    console.log("Error while saving data", error);
  }
})();
