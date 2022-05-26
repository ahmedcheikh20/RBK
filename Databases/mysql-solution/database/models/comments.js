// import the database connection
const conn = require("../index");

module.exports = {
  // a function which fetches all the comments for a respective post
  getAll: function (postId, callback) {
    const sql = `SELECT c.id, c.text, c.createdAt, u.username as commenter, c.postId
    FROM comments c INNER JOIN users u ON c.commenterId = u.id
    WHERE c.postId = ? ORDER BY c.createdAt DESC`;
    conn.query(sql, postId, function (error, results) {
      callback(error, results);
    });
  },
  // a function that can be used to insert a comment into the database
  add: function (comment, callback) {
    const sql = "INSERT INTO `comments` SET ?";
    conn.query(sql, comment, function (error, results) {
      callback(error, results);
    });
  },
};
