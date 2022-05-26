//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const db = require("../orm");
const User = db.user;

module.exports = {
  //method to fetch all users from the blog database.
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({ order: [["createdAt", "DESC"]] });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send("Failed to load resource");
    }
  },
  //method to add a user to the database via the respective model function.
  addUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  //method to get one user by id.
  getOneUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.iduser);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send("Failed to load resource");
    }
  },
};
