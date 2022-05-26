// this helper function will be used when the user logs in 
// it will create a token for him using jwt method jwt.sign()
const jwt = require('jsonwebtoken');
const secret = require('../config/authConfig')
const Timer = '1m'
module.exports = function (userObject){
return jwt.sign(userObject,secret.ACCESS_TOKEN_SECRET,{ expiresIn:Timer })
}
