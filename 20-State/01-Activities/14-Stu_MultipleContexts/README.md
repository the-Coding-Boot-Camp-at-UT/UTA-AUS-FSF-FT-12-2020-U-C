# Multiple Contexts

In this activity we will continue to practice using the Context API in React. This activity continues where the last activity left off. To help strengthen your Context API skills, you will introduce another Context Object to your application.

## Instructions

* Replace your React application's src folder with [Unsolved/src](Unsolved/src).

* Install axios by running `npm install axios` in your terminal.

* This activity uses Bootstrap, so make sure you `import 'bootstrap/dist/css/bootstrap.min.css';` in `index.js`

* **Recommended:** Add the Font Awesome CDNs to your application's `index.html` file:

  ```html
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  ```

* Start the application in dev mode by running `npm start` in your terminal.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* Update this application to include the following:

  * Create a separate Context Object for the languages.

  * Update the application so that data pertaining to the user is stored in a nested object within the Gallery state.

  * Add the ability to select a different language.

  * Ensure that data pertaining to the language is stored in a different nested object within the Gallery state.

  * If a new language is selected, the card should be updated with the information of the first user of the selected language.

### Hints

* Try to get the user functionality working before moving on to the language selector.

* Make sure you call `loadUser` whenever the language changes.
