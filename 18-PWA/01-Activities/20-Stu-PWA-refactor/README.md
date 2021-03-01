# PWA Refactor

In this activity we will adjust our Gallery app so that Webpack minifies and bundles our code.

## Instructions

* Run `npm install`.

* Run `npm install -D babel-loader @babel/core @babel/preset-env`.

* Using `19-Ins-Pure-Functions/webpack.config.js` as a reference, update `Unsolved/webpack.config.js` to use babel-loader.

* Using the ES6 import/export syntax, separate functions out into separate JavaScript files to make your application more modular.

* While there are many ways that you can separate your JavaScript files, it is recommended that you create somethings similar to the following file structure:

  * `app.js` Loads images and calls the `createCards` function.

  * `cardCreation.js` Responsible for all functions related to the creation of cards.

  * `domMethods.js` Responsible for all functions related to manipulating the DOM.

  * `rating.js` Handles the creation of the ratings form and the update method.

* Adjust the files in the `FILES_TO_CACHE` array within `public/service-worker.js` so that the Webpack bundle is cached instead.

* Run `npm start` and make sure that the application still works as expected.

### Hints

* Try testing out functionality of the application on [localhost](<http://localhost:3000>) every time you make changes. This will help you identify the code that does not work as expected.

* You can use the [Babel Loader Docs](https://github.com/babel/babel-loader) as an additional reference.
