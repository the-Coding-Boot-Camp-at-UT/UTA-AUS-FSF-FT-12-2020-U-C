# Unit 13: MVC

## Overview
As our full-stack web applications scale, we will need to address several issues related to that growth: organization of the codebase, ongoing development and maintenance, and continued collaboration. So far, our applications are easily managed as they only consist of a handful of files. We _could_ limit the code base to these few files, but as we add functionality to our application, each of those files would grow in length to hundreds, if not thousands, of lines of code composed of unnecessarily complicated logic. Imagine how difficult it would be to resolve merge conflicts! 

In this unit we will modularize our applications following the MVC paradigm. Short for Model View Controller, MVC is an architectural pattern that structures our codebase in three distinct sections according to a software design philosophy known as the _separation of concerns_.  

Up to this point, we’ve been serving static HTML files to our client based on its requests. This approach is suitable for very small applications, but what happens when our application begins to grow and we need hundreds or even thousands of unique pages? Rather than hard code the HTML for many, many pages, we can dynamically generate the HTML using a template engine. In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application. This is the View layer in the MVC framework. The template engine we will learn and implement in this unit is Handlebars.js.

The Model is the data layer of our application. It is concerned with the structure of our database and the logic used to retrieve that data. We will implement object-relational mapping to create reusable methods for querying our database. 

Last, but not least, is the Controller. We can think of it as the intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update or delete data, and then returns the results of that query to the user via the View layer. We are already familiar with these operations in our Express.js apps, but we will now separate our client-side and server-side routes from one another.

MVC may not be immediately intuitive, or obviously useful on a small scale, but becomes very useful when working collaboratively or adapting an application to changing technical needs. Team members no longer need to work on top of each other as concerns are separated into distinct sections and components of the stack can be swapped in and out without dramatically affecting the codebase. Say, for example, we want to migrate our app from MySQL to PostgreSQL. To do so would simply be a matter of updating the ORM. The same is true for the View layer if we wanted to implement a template engine other than Handlebars or migrate to a front-end framework such as React (which we will do before we’re done!). 

## Key Topics
* Template engines
* Handlebars.js
* Model-View-Controller
* Object-relational mapping

## Comprehension Check

You will be employer-ready if you can answer the following questions:
1. What are the benefits of the MVC framework? 
2. What is an ORM?
3. How does a template engine work?

## Learning Objectives
You will be employer-competitive if you are able to:
* Render dynamic HTML using the Handlebars.js template engine
* Explain and implement MVC modularization in a full-stack web application
* Explain and implement a custom ORM in the Model layer of an MVC framework
* Configure Heroku for deployment of an application using MySQL
* Explain the interaction between the model, view and controller.
* Explain the benefits of object-relational mapping

## Homework: Eat Da Burger
Following the MVC design pattern, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.

## Helpful Links
* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
* [Handlebars.js](https://handlebarsjs.com/)
* [Handlebars Website](http://handlebarsjs.com/)
