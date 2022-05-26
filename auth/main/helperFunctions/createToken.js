// this helper function will be used when the user logs in 
// it will create a token for him using jwt method jwt.sign()


 module.exports = function (userObject){

 }



//First you have to install the jsonwebtoken library , to do  that please visit this link and spend sometime reading about the usage of jwt and it's features
// https://www.npmjs.com/package/jsonwebtoken<
// Don 't forget to import the library after installing it !!
// Now create your own function that will accept a userObject and creates a jwt token for that user
// Make sure to get the secret that the token will be created with form the authConfig file located in the config folder
// Make sure to export the function created for later usage