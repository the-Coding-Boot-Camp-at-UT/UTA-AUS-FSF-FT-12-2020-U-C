# Third Party Hooks

In this activity we will practice using third party Hooks. Specifically, we will be creating a survey form using the `react-hanger` package on npm.

## Instructions

* Replace your React application's src folder with [Unsolved/src](Unsolved/src).

* Install react-hanger by running `npm install react-hanger` in your terminal.

* This activity uses Bootstrap, so make sure you `import 'bootstrap/dist/css/bootstrap.min.css';` in `index.js`

* **Recommended:** Add the Font Awesome CDNs to your application's `index.html` file:

  ```html
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  ```

* Start the application in dev mode by running `npm start` in your terminal.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

  * There are a few fields in our survey form. Before writing any code, try thinking about how you would manage the state of this form. 

* Navigate to the [react-hanger docs](https://github.com/kitze/react-hanger) familiarize yourself with the `useInput`, `useBoolean`, and `useNumber` Hooks.

* Update this application to accomplish the following:

  * Each user input should be handled using the `react-hanger` Hooks.

  * When the user clicks an emoji, indicate which type of response they selected by displaying the text: `You responded that you feel FEELING`. `FEELING` should be replaced with the value of the emoji that they clicked.

  * Make your survey form a little more dynamic by displaying a field for additional comments when the user clicks on an emoji.

  * When the form is submitted, `console.log` an object containing all of the values from the form.

### Hints

* There are many ways to satisfy the requirements of this application. It is recommended that you attempt the most straightforward solution first, then refactor your working app.
