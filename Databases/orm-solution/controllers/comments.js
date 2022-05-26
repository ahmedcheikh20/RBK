//Controller related to comments ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const db = require("../orm");
const Comment = db.comment;
const User = db.user;

module.exports = {
  //method to fetch all comments for a given post from the blog database.
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.findAll({
        where: { postId: req.params.postId },
        order: [["createdAt", "ASC"]],
        include: [{ model: User, as: "commenter", attributes: ["username"] }],
      });
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).send("Failed to load resource");
    }
  },
  //method to add a comment to the database via the respective model function.
  addComment: async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
