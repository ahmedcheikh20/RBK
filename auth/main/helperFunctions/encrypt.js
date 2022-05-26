//these function will be used during the sign up and also the log in
// basicly when a user creates a new account we will use the hashPassword function to hash the user password before saving it in the database
// During the log in phase we will use the second function verifyPassword to compare the savedPassword with the login password // it return a boolean



 module.exports = {
  hashPassword: function (password, saltRounds) {
     
  },
  verifyPassword: function (password, hashedPassword) {
     
   }
 };


// First you have to install the bcrypt library to do that please visit this link and spend sometime to read about the bcrypt library and it's features
//https://www.npmjs.com/package/bcrypt
// Don 't forget to import the library after installing it
// Create a function  called hashPassword that zill accept two parameters a password and a number that zill represen the number of salt rounds
// This function should produce a hashed password using the bcrypt library
//Create a function called verifyPassword that will accept two parameters a password that we get when the user loggs in and a the hashedPassword  saved already in he database
//This function will use bcrypt to compare and see if the password sent by the user matches the encrypted one saved in the database
// Make sure to export both functions for later usage