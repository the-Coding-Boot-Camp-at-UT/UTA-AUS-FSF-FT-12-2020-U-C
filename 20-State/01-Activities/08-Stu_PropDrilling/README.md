# Prop Drilling

In this activity we will review passing props down the component tree in React.

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

* The `fetchUsers` function in `src/utils/API.js` returns an array of users that follow this format:

  ```js
  [
    {
      login: "username",
      profileUrl: "https://github.com/username",
      image: "https://avatars0.githubusercontent.com/u/00000000?v=4"
    }
  ];
  ```

* Update this application to accomplish the following:

  * The card on the gallery page should contain an image of the user, their programming language, and arrow buttons that allow for navigation through different users.

  * The props should be passed through each component layer in the following manner:

    * title (login): Gallery > CardContainer > Card > CardHeading > CardTitle > CardTitleText

    * image: Gallery > CardContainer > Card > CardImage

    * profileUrl: Gallery > CardContainer > Card > CardBody

    * handleClick: Gallery > CardContainer > Card > CardBtn

  * Each arrow click should _not_ make an additional API call.
