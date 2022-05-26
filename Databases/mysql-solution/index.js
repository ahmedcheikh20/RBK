const express = require('express');
const db = require('./database');

//Create an Express App and define the port
const app = express();
const port = 3000;

//Require application Route modules
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const commentsRoute = require('./routes/comments');

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/posts', postsRoute);
app.use('/api/users', usersRoute);
app.use('/api/comments', commentsRoute);

//Listening on port 3000 for connections
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

module.exports = app; // export the express app for testing purpose.