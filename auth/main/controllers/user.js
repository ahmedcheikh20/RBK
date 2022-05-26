//this controller is responsible of handling user request either signing up or loggin also for administration reasons You can get all users data but this feature should not be allowed to be used by normal users;



const User = require('../database/models/users');

module.exports = {
    getAllUsers: (req, res) => {

        User.getAllUsers((err, results) => {
            if (err) { console.log(err) }
            res.json(results)
        })

    },
    createNewUser: async (req, res) => {
        
        User.getUserByName([req.body.username], (err, result) => {
            if (err) {
                console.log(err)
            }
            else if (result.length > 0) {
                res.status(400).send("User already exists")
            }
            else {
                try {
                   
                    User.createNewUser([req.body.username, req.body.password], (err, results) => {
                        if (err) {
                            console.log(err)
                            res.sendStatus(409);
                        }
                        else {
                        res.status(201).send("user created")
                    }
                    })
                }
                catch (err) {
                    console.log(err)
                    res.status(409).send();
                }
            }
        })

    },
    loggingIn: (req, res) => {
        User.getUserByName([req.body.username], async (err, result) => {

            
            if (err) { console.log(err) }
            else if (!result.length) {
                res.send("wrong user name")
            }
            else {
                try {
                    
                    const match = req.body.password&&result[0].password
                    if (match) {
                        
                        res.status(200).json({ result: "created "})
                    }
                    else {
                        res.send("not allowed")
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
        })
    }

};

// Use the helper functions that you created to encrypt the password when a new user is created
// Use the helper functions that you created to verify the password when the user loggs in 
// Use the helper functions that you created to create a new token when the user loggs in
