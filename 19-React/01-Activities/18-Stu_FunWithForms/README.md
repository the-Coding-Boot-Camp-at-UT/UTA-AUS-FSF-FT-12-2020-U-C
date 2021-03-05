# Fun With Forms

In this activity we will add some new functionality to the previous form example.

## Instructions

* Replace your React application's `src` folder with [Unsolved/src](Unsolved/src). Stop the dev server if it is already running. Start the app in dev mode by running `npm start`.

* Update the `Form` component to add the following:

  1. A new input field that updates `this.state.password`. 
  
     * Set the initial value of `this.state.password` to an empty string.

  2. Whenever a user clicks the "Submit" button, add code to accomplish the following:

     1. If the user hasn't provided a first and last name, throw an alert saying: "Fill out your first and last name please!".

     2. If the user has provided a first and last name, but their password is less than 6 characters, throw an alert saying, "Choose a more secure password," followed by the full name. E.g. "Choose a more secure password, John Smith!"

     3. Else, throw an alert to greet the user. E.g. "Hello, John Smith!".
  
  3. Do not allow the user to type in a password that is longer than 15 characters. i.e. the length of the password state should never go beyond 15 characters.

### Hints 

* You may want to look into using [String.prototype.substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) to prevent the password field from going beyond 15 characters.
