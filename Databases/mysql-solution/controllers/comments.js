//Controller related to comments ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const { comments } = require('../database/models')
module.exports = {
    //method to fetch all comments for a given post from the blog database.
    getAllComments: function(req, res) {
        comments.getAll(req.params.postId, function(err, results) {
            if(err) res.status(500).send('Failed to load resource');
            else res.json(results);
        })
    },
    //method to add a comment to the database via the respective model function.
    addComment: function(req, res) {
        comments.add(req.body, function(err, results) {
            if(err) res.status(409).send(err);
            else res.status(201).send(results);
        })
    }

}