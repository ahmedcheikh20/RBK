// this is a middlware function basicly what it does it intercepts requests and checks if the token send with the request is vqlid or not 


const jwt = require("jsonwebtoken")
const secret = require('../config/authConfig')
// Auth middleware

module.exports = (req,res,next)=> {
    const token = req.headers["cookie"].split(' ')
    console.log(token)
    if(!token){
      res.redirect('/signup')
    }
    else{
    jwt.verify(token,secret.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
           res.redirect('/login')
        }
        else{
            console.log("hello")
         req.user = user
         next();
        }
    })}
    } 
    // Create a middleware that accepts a request a response a next and it should verify the token coming from the request located in the authorization header if it s valid or not 


   

