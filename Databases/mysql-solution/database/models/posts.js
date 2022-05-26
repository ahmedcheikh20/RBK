// import the database connection
const conn = require('../index');


module.exports = {
    // a function which fetches all the posts
      getAll: function (callback) {
        // const sql = `SELECT p.id, p.title, p.content, p.createdAt, u.username as author 
        // FROM posts p INNER JOIN users u ON p.posterId = u.id ORDER BY p.createdAt DESC`;
        const sql = `select p.id, posters.username as poster, p.title, p.content, c.id as 'comment.id',
        c.text as 'comment.text', commenters.username as 'comment.commenter', 
        p.createdAt, c.createdAt as 'comment.createdAt' from users posters
        inner join posts p on p.posterId = posters.id
        left outer join (comments c inner join users commenters 
        on c.commenterId = commenters.id) on c.postId = p.id
        order by p.createdAt desc, c.createdAt asc;`
        conn.query(sql, function (error, results) {
          callback(error, results);
        })
      },
      //a function that retrieves one post record based on the provided id.
      getOne: function(idpost, callback) {
        const sql = `SELECT p.id, p.title, p.content, p.createdAt, u.username as author 
        FROM posts p INNER JOIN users u ON p.posterId = u.id WHERE p.id = ?`
        conn.query(sql, idpost, function (error, results) {
          callback(error, results);
        });
      },
      // a function that can be used to insert a post into the database
      add: function (post, callback) {
        const sql = 'INSERT INTO `posts` SET ?';
        conn.query(sql, post, function (error, results) {
          callback(error, results);
        });
      } 
    };