# Webpack Intro

In this activity we will create a bundle.js file with Webpack.

##Instructions

* Run the following command: `npm install webpack webpack-cli -D`

* Create a file called `webpack.config.js`.

* Using the entry point of `src/app.js`, make Webpack output a bundle file in a folder called `dist/`.

* In `index.html`, change the JavaScript file src to be your new bundle file.

* Add the necessary scripts to `package.json`, then run Webpack with the `--watch` option.

* Update this application to accomplish the following:

  * When the user types in a value to the price field and clicks submit, the remaining balance should be updated.

  * Using the `require` module and `module.exports`, move the code that calculates the new budget to a file named `calculations.js`.

  * Update the `reset` function so that when clicked, it sets the current balance back to its original balance and clears the list of expenses.

### Hints

* Make sure that Webpack is working properly before attempting to make adjustments to the app.
