/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the movie_planner_db if it already exists --
DROP DATABASE IF EXISTS movie_planner_db;

-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE movie_planner_db;

USE movie_planner_db;

-- Create the table plans.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Rush Hour 2');
