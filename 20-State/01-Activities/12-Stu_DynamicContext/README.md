# Dynamic Context
In this activity we will continue to practice using the Context API in React. This activity continues where the first activity left off. To help strengthen your Context API skills, you will replace as many instances of prop drilling as you can.

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

  * Add a Context API file to the `utils` folder.

  * Remove prop-drilling from the application and replace it with the Context API.

  * The Context object should include the user information and any methods you might.

  * Use a Context Provider to wrap the components that will need access to the Context.

  * Use Context Consumers to access the properties that are stored in the Context.

### Hints

* The Context object that you will create will need to be the same for both the Provider and the Consumer. How can you ensure that it's the same object without using state?
