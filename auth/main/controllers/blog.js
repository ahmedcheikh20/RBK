// this controller is responsible of handling requests related to the blogs either creating new one or getting the blogs
const Blog = require('../database/models/blogs');
module.exports = {

    createPost: (req, res) => {
        
        
        Blog.writeBlog([req.body.id,req.body.username,req.body.blog], (err, results) => {
            if (err) {
                console.log(err)
                res.status(409).send()
            }
            else {
                res.status(201).send("created")
            }
        })
    },

    getPostsByuserName: (req, res) => {
        Blog.getAllBlogs(async (err, result) => {
            if (err) { 
                console.log(err)
                res.status(500).send()
            }
            else {
           
            const Target = await result.filter(post => post.author.toLowerCase() === req.body.username.toLowerCase());
            res.json(Target)
        }
        })
    }


}