/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the wishes_db if it already exists --
DROP DATABASE IF EXISTS wishes_db;

-- Create the database wishes_db and specified it for use.
CREATE DATABASE wishes_db;

USE wishes_db;

-- Create the table wishes.
CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  wish varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Shaan wants to read minds.');
INSERT INTO wishes (wish) VALUES ('John wins the lottery.');
INSERT INTO wishes (wish) VALUES ('Kelly wishes for a room full of kittens.');
