//these are the user routes for creating Posts/blogs or getting blogs/Posts
const express = require("express");
const router = express.Router();


// creting posts
router.post('/create',require('../controllers/blog').createPost)

// getting specific Posts by username

router.get('/get',require('../controllers/blog').getPostsByuserName)
module.exports = router;