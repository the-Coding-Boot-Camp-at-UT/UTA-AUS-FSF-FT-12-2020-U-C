# Unit 09: Node.js and ES6+

## Overview

You’ve arrived at another important milestone in your journey. The JavaScript you wrote for your first project was executed entirely on the client side, though it used third-party server-side APIs. In this and later units, you’ll learn how to write your own server-side applications to handle requests and ultimately to build your own APIs.

In a previous era, this would be the point when you’d begin learning a second programming language, like PHP, to write server-side code. Luckily, Node.js&mdash;released in 2009&mdash;makes this unnecessary. Node.js is an implementation of the V8 JavaScript engine without Chrome. It allows you to write server-side code using JavaScript. This means that you no longer need a browser to run JavaScript. You can (and will) do so from the command line!

In this unit, you’ll learn how to initialize a Node.js project, install third-party dependencies, and create interactive command-line applications. Node.js ships with a **standard library**. The standard library contains a number of modules that allow you to extend the functionality of Node.js, like `fs`, which you’ll use to read and write files. You’ll also learn how to add a large and robust ecosystem of third-party modules to applications to extend their functionality.

## Key Topics

The following topics will be covered in this unit:

* [Node.js](https://en.wikipedia.org/wiki/Node.js)

	* [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)

	* [fs](https://node.readthedocs.io/en/latest/api/fs/)

* Modularization

	* [require()](https://nodejs.org/api/modules.html#modules_require_id)

	* [module.exports](https://nodejs.org/api/modules.html#modules_module_exports)

* [npm](https://docs.npmjs.com/about-npm/)

	* [package.json](https://docs.npmjs.com/creating-a-package-json-file)

	* [npm init](https://docs.npmjs.com/cli/init)

	* [node_modules](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)

* [inquirer](https://www.npmjs.com/package/inquirer/v/0.2.3)

* [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015)

	* [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

	* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

	* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

	* Array methods ([map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce))

	* [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and rest

	* [Destructuring arrays and objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

* [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

	* [Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

	* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Learning Objectives

You will be employer-ready if you are able to: 

* Build interactive command-line applications that process user input.

* Explain modularization and how it relates to npm and the standard library.

* Initialize new Node.js projects with npm, and install and import dependencies.

* Explain the importance and usefulness of ES6+ concepts such as `let`, `const`, and arrow functions.

* Handle asynchronicity with callbacks and Promises.

## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews.

* [01: Character Count](./03-Algorithms/01-character-count/README.md)

	* [📹 Let's Code Character Count!](https://2u-20.wistia.com/medias/6ka87l3z21)

* [02: Product of Largest Two](./03-Algorithms/02-product-of-largest-two/README.md)

* [03: Camel Case](./03-Algorithms/03-camel-case/README.md)

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* [Unit 09 Assessment](https://forms.gle/VKfsdSySYgc4Hrih7) 

## Homework

In the homework for this unit, you’ll create a command-line application that uses input from a user to dynamically generate a quality readme for a GitHub project.

## Career Connection

Career Services material for this unit is located in the [Career Connection folder](./04-Career-Connection/README.md). For more information about Career Services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [Career Services website](http://bit.ly/CodingCS).

## Heads-Up

In this unit, you'll begin to use Node.js. Be sure to have it installed on your computer **before** attending your classes. You can follow the [Node.js installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs) to install Node.js on your computer.

## Resources

Here are some additional resources to help solidify the topics covered in this unit:

* 📖 [Node.js installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
