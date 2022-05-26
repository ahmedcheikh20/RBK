# Authentication-Authorization
*** API :

http://localhost:3001/users/         for testing purposes
http://localhost:3001/users/sign
http://localhost:3001/users/login    when you login the token is created and send back in the response

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

http://localhost:3001/blogs/get      You need to send the token along with the request to get access
http://localhost:3001/blogs/create   You need to send the token along with the request to get access

// the schema provided in this repo is made for testing purposes

// to run the server type ========>  npm start ;
// the token is set to be expired in 60 minutes You can change that in helperFunction folder / createToken file>

// An already existing username with a password to test with 

                                      {"username":"Ali","password":"123"}

The goal  of this sprint is to work with bcrypt to hash password and authenticate users and use jwt to authorize user based on their secret special token      


Guidance : 
 First : make yourself familiar with  this repo architecture;
 explore all it's file and try to understand the code in each file.


 Second : Use Thunder extention or postman to play with the request like create a new user login   creating blogs and getting them.

 Third : Now we are going to improve our authentication using the bcrypt library so navigate to helperFunctions folder and in the encrptjs file follow the steps wriiten as comments in that file to create a function that will hash new users passwords
 Also in the same file you will be creating another function that will compare the login pasword with the one hashed and saved in the database.

 Fourth : Now after authenticating our user we will now work on the authorization par.
 Navigate to createToken.js located in the helperFunctions folder 
 create a function that will produce a new token to a specific user everytime it is invoked
 read the comments included in the file for further instructions.

 Fifth : now navigate to the middlewares folder and read the comments in the verifyAuth.js
 You are basically going to make a function that will verify the token sent by the user to check and authorize that user before giving him access to whatever data we have
 This function is a middleware and it should intercept the request and sets a new property in the request that will hold our user.

 Sixth : After finsishing with our helper function go ahead to the controllers folder and figure out the changes that you need to implement to hash the passwords verify it before logging in and creating a token during the login you will be using the helper functions that you already created
 now create new user and try out to login and also  check how the password looks a like now after encrypting it using this route http://localhost:3001/users/
 After that navigate to the server.js file and add the middleware that that you created  to the blogs route 
 //Now try out to log in without sending the token along with the request header and with it also set in the header.

