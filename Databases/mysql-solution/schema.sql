-- ------------------------------------------------------------------------------------
-- Complete the blog schema and then run the following command to create the database,
-- mysql -u root -p <schema.sql
-- ------------------------------------------------------------------------------------

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
-- Before running the tests change `blog` to `blog_test` and run this file again!
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;
USE `blog` ;

DROP TABLE IF EXISTS `comments`;
DROP TABLE IF EXISTS `posts`;
DROP TABLE IF EXISTS `users`;

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `content` TEXT(20000) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `posterId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId_idx` (`posterId` ASC) VISIBLE,
  CONSTRAINT `posterId`
    FOREIGN KEY (`posterId`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(500) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `commenterId` INT NOT NULL,
  `postId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId_idx` (`commenterId` ASC) VISIBLE,
  INDEX `postId_idx` (`postId` ASC) VISIBLE,
  CONSTRAINT `commenterId`
    FOREIGN KEY (`commenterId`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `postId`
    FOREIGN KEY (`postId`)
    REFERENCES `posts` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Populate database with mock data
-- -----------------------------------------------------
INSERT INTO `users` (`username`) VALUES ('Wala');
INSERT INTO `users` (`username`) VALUES ('Hana');
INSERT INTO `users` (`username`) VALUES ('Houda');

INSERT INTO `posts` (`title`, `content`, `posterId`) VALUES ('Intro', "This is the first post of Wala", '1');
INSERT INTO `posts` (`title`, `content`, `posterId`) VALUES ('Info', "Hana's first post", '2');
INSERT INTO `posts` (`title`, `content`, `posterId`) VALUES ('Begin', "The first post of Houda", '3');
INSERT INTO `posts` (`title`, `content`, `posterId`) VALUES ('Second Try', "Second post from Hana", '2');
INSERT INTO `posts` (`title`, `content`, `posterId`) VALUES ('Again', "Wala's post number 2!", '1');

INSERT INTO `comments` (`text`, `commenterId`, `postId`) VALUES ("Hana's first comment on Intro", '2', '1');
INSERT INTO `comments` (`text`, `commenterId`, `postId`) VALUES ("Houda's first comment on Intro", '3', '1');
INSERT INTO `comments` (`text`, `commenterId`, `postId`) VALUES ("Hana's second comment on Intro", '2', '1');
INSERT INTO `comments` (`text`, `commenterId`, `postId`) VALUES ("Wala commented on her own post", '1', '1');
INSERT INTO `comments` (`text`, `commenterId`, `postId`) VALUES ("Wala commented on Info", '1', '2');
INSERT INTO `comments` (`text`, `commenterId`, `postId`) VALUES ("This is the comment of Hana on Begin", '2', '3');
INSERT INTO `comments` (`text`, `commenterId`, `postId`) VALUES ("Hana commented again on Houda's post Begin", '2', '3');
