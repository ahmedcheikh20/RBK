
//this model is for users
// It allows creating new users in the database or getting the users
const connection = require('../index')

module.exports = {
    getUserByName: function (params, callback) {
        var syntax = `SELECT * FROM users where username = ?`
        connection.query(syntax, params, (err, result) => {
            return err ? callback(err, null) : callback(null, result);
        })
    },
    createNewUser: function (params, callback) {
        var syntax = `INSERT into users (username, password) VALUES (?, ?)`
        connection.query(syntax, params, (err, results) => {
            return err ? callback(err, null) : callback(null, results);
        })
    },


    getAllUsers: function (callback) {
        var syntax = `SELECT * FROM users`
        connection.query(syntax, (err, results) => {
            return err ? callback(err, null) : callback(null, results)
        })
    }
}





