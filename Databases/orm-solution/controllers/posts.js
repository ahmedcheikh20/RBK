//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const db = require("../orm");
const Post = db.post;
const Comment = db.comment;
const User = db.user;

module.exports = {
  //method to fetch all posts from the blog database.
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
        order: [["createdAt", "DESC"]],
        attributes: { exclude: ['posterId'] },
        include: [
          {
            model: Comment,
            separate: true,
            order: [["createdAt", "ASC"]],
            attributes: { exclude: ['postId', 'commenterId'] },
            include: [
              { model: User, as: "commenter", attributes: ["username"] },
            ],
          },
          { model: User, as: "poster", attributes: [["username", "author"]] },
        ],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");
    }
  },
  //method to get one post by id.
  getOnePost: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.idpost, {
        include: [{ model: User, as: "poster", attributes: ["username"] }],
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).send("Failed to load resource");
    }
  },
  //method to add a post to the database via the respective model function.
  addPost: async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
