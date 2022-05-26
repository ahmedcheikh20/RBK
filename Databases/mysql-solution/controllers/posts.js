//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const { posts } = require('../database/models')
const organizePosts = require('../utils/organizePosts')
module.exports = {
    //method to fetch all posts from the blog database.
    getAllPosts: function(req, res) {
        posts.getAll(function(err, results) {
            if(err) res.status(500).send('Failed to load resource');
            else res.json(organizePosts(results))
        })
    },
    //method to get one post by id.
    getOnePost: function(req, res) {
        posts.getOne(req.params.idpost, function(err, results) {
            if(err) res.status(500).send('Failed to load resource');
            else if(results.length) res.status(200).json(results[0])
            else res.status(404).send('Resource not found')
        })
    },
    //method to add a post to the database via the respective model function.
    addPost: function(req, res) {
        posts.add(req.body, function(err, results) {
            if(err) res.status(409).send(err);
            else res.status(201).send(results)
        })
    }

}