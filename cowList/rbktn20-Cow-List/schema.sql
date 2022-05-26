-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE
CREATE SCHEMA IF NOT EXISTS `cowList` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `cowList` ;

-- -----------------------------------------------------
-- Table `cowList`.`Cows`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cowList`.`Cows` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT(255) NULL,
  INDEX `fk_table1_has_table2_table1_idx` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


