//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const { users } = require('../database/models')
module.exports = {
    //method to fetch all users from the blog database.
    getAllUsers: function(req, res) {
        users.getAll(function(err, results) {
            if(err) res.status(500).send('Failed to load resource');
            else res.json(results)
        })
    },
    //method to add a user to the database via the respective model function.
    addUser: function(req, res) {
        users.add(req.body, function(err, results) {
            if(err) res.status(409).send(err);
            else res.status(201).send(results)
        })
    },
    //method to get one user by id.
    getOneUser: function(req, res) {
        users.getOne(req.params.iduser, function(err, results) {
            if(err) res.status(500).send('Failed to load resource');
            else if(results.length) res.status(200).json(results[0])
            else res.status(404).send('Resource not found')
        })
    }

}