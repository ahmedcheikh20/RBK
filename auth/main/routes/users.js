// these are the user routes for sigin Up or  logging in
const express = require("express");
const router = express.Router();


// getting all users

router.get('/', require('../controllers/user').getAllUsers)

// creating new user

router.post('/sign', require('../controllers/user').createNewUser)

// loggin in as a user

router.post('/login', require('../controllers/user').loggingIn)
module.exports = router;