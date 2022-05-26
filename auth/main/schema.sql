DROP DATABASE IF EXISTS Posts;
CREATE DATABASE Posts;
USE posts;


CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(40) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
CREATE TABLE blogs(
    id int NOT NULL AUTO_INCREMENT,
    author varchar(40) NOT NULL,
    blog varchar(220) NOT NULL,
    users_id INT NOT NULL,
    PRIMARY KEY (ID),
    INDEX userId (users_id) ,
     CONSTRAINT userId
    FOREIGN KEY (users_id)
    REFERENCES posts.users (id)
    ON DELETE CASCADE 
);