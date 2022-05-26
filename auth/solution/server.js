

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

const verify = require('./middlewares/verifyAuth');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './views');

const Port = process.env.port || 3001
app.get('/',verify,(req,res)=>{
res.render("blogs")
})

app.get('/login',function(req,res){
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render("signup")
    })

app.use('/', require('./routes/users'))
app.use('/blogs', verify, require('./routes/blogs'))

app.listen(Port, () => {
    console.log('server running on http://localhost:' + Port);
});
