# Unit 12: MySQL

## Overview

In this unit, we add the final layer to our stack: the database. While it is the last, it is by no means the least. Databases are the foundation of full-stack web applications. Although we began our journey on the client-side, it will be more useful from this point on to approach application development from the bottom up. When using our applications, what is most important to our users is being able to store and retrieve data. Once we determine how we will model that data, we can then set about determining the best way to deliver it to the front-end via our server-side API. 

In simplest terms, a database is a collection of data stored electronically. The database management system (DBMS) we will be using in this unit is MySQL. MySQL is the most popular SQL database. The SQL in MySQL is short for Structured Query Language, and that structure is _relational_. A relational database stores and finds data based on its relationship to other data in the database. Relational databases are tabular, meaning data is stored in tables composed of rows and columns, much like a spreadsheet. 

We will begin the unit using GUI's, such as MySQL Workbench, to interface with our databases, but by the end of the unit you should be proficient using the MySQL command line prompt. We will then connect our Node.js servers to our MySQL databases to perform queries based on client requests and return responses accordingly. 

## Key Topics

* MySQL Workbench

* MySQL command line prompt (MySQL Shell)

* Creating and dropping databases and tables

* schema.sql and seeds.sql files

* CRUD

* Primary and foreign keys

* Prepared statements

* Joins

* ACID

## Comprehension Check

You will be employer-ready if you can answer the following questions:

1. What is CRUD?

2. What is ACID? 

3. How does one join data between tables? 

## Learning Objectives

You will be employer-competitive if you are able to:

* Configure a Node.js application to connect to a MySQL instance

* Create and drop databases and tables 

* Explain and execute CRUD methods

* Use both a GUI and the MySQL command line prompt to interface with a database

* Create schema and seed files for development and production

* Write join statements to establish relations between data in one or more tables

## Homework: Employee Tracker

* Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Heads Up

* Starting this unit, you will use MySQL. Be sure to have the MySQL Server and Workbench installed on your computer and be able to initialize the MySQL Shell **before** attending your classes. You can follow these installation instructions for your [Mac](./04-Important/mysql-mac-guide.md) or [Windows](./04-Important/mysql-windows-guide.md) computers.

## Helpful Links

* [SQL](https://en.wikipedia.org/wiki/SQL)

* [MySQL](https://en.wikipedia.org/wiki/MySQL)

* [MySQL - W3 Schools](http://www.w3schools.com/sql/)

* [MySQL Workbench Documentation](http://dev.mysql.com/doc/workbench/en/)

* [MySQL NPM Package](https://www.npmjs.com/package/mysql)
