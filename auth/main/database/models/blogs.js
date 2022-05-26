
// this model assures the interaction with the database ;
// this one is for inserting new blogs or getting blogs

const connection = require("../index");
module.exports = {
    writeBlog: function (params, callback) {
        var syntax = `INSERT into blogs (users_id ,author, blog) VALUES (?,?,?)`
        connection.query(syntax, params, (err, results) => {
            return err ? callback(err, null) : callback(null, results)
        })
    },

    getAllBlogs: function (callback) {
        var syntax = `SELECT * FROM blogs`
        connection.query(syntax, (err, results) => {
            return err ? callback(err, null) : callback(null, results)
        })
    }
}


