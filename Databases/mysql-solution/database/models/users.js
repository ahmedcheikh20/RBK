// import the database connection
const conn = require('../index');


module.exports = {
    //a function which fetches all the users.
      getAll: function (callback) {
        const sql = 'SELECT * FROM `users`'
        conn.query(sql, function (error, results) {
          callback(error, results);
        });
      },
      //a function that retrieves one user record based on the provided id.
      getOne: function(iduser, callback) {
        const sql = 'SELECT * FROM `users` WHERE `id` = ?'
        conn.query(sql, iduser, function (error, results) {
          callback(error, results);
        });
      },
      // a function that can be used to add a user to the users table.
      add: function (user, callback) {
        const sql = 'INSERT INTO `users` SET ?';
        conn.query(sql, user, function (error, results) {
          callback(error, results);
        });
      } 
    };