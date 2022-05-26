

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

const verify = require('./middlewares/verifyAuth');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
const Port = process.env.port || 3001

app.use('/users', require('./routes/users'));
// app.use('/blogs', verify, require('./routes/blogs'));

// add the middleware that you created to be used on the request coming form the "/blogs" URL
app.use('/blogs',require('./routes/blogs'));
app.listen(Port, () => {
    console.log('server running on http://localhost:' + Port);
});
