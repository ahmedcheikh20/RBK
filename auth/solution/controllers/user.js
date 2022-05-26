//this controller is responsible of handling user request either signing up or loggin also for administration reasons You can get all users data but this feature should not be allowed to be used by normal users;


const createToken = require("../helperFunctions/createToken");
const encrypt = require("../helperFunctions/encrypt");
const User = require("../database/models/users");
const saltRounds = 10; // number of characters the password will be hashed with
module.exports = {
  getAllUsers: (req, res) => {
    User.getAllUsers((err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
    res.render("login", { showLogin: true});
  },
  createNewUser: async (req, res) => {
    const hashedPassword = await encrypt.hashPassword(
      req.body.password,
      saltRounds
    );
    User.getUserByName([req.body.username], (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length > 0) {
        res.status(400).send("User already exists");
      } else {
        try {
          User.createNewUser(
            [req.body.username, hashedPassword],
            (err, results) => {
              if (err) {
                console.log(err);
                res.sendStatus(409);
              } else {

                res.redirect('/login')
              }
            }
          );
        } catch (err) {
          console.log(err);
          res.status(409).send();
        }
      }
    });
  },
  loggingIn: (req, res) => {
    User.getUserByName([req.body.username], async (err, result) => {
      if (err) {
        console.log(err);
      } else if (!result.length) {
        console.log(result)
        res.redirect("/signup");
      } else {
        try {
          //compare password from the request body with the saved hashed password
          const match = await encrypt.verifyPassword(
            req.body.password,
            result[0].password
          );
          if (match) {
            const accessToken = createToken({ username: result[0].username });
            await res.set("set-cookie", accessToken)
            res.redirect('/')
          } else {
            res.redirect("/login");
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  }
};
