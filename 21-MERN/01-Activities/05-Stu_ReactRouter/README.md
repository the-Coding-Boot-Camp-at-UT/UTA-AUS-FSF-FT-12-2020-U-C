# React Router

In this activity we will add React Router to the Books application in order to render a book details page as well as a no match 404 page.

## Instructions

* Open the [Unsolved](Unsolved) folder and install dependencies by running `npm install` at the project root.

* Start the app by running `npm start` from the project root.

* Once the app starts open your browser to [localhost:3000](http://localhost:3000).

* Open [App.js](Unsolved/client/src/App.js).

### Part 1

* Set up React Router inside of the `client/src/App.js` file.

  * The `/` and `/books` routes should both render the `Books` component page.

### Part 2

* Notice that inside of the `pages` folder we have a `NoMatch` component. This is the component for our 404 page.

* Add a route for the new `NoMatch` component. This should only render if no other routes are matched. e.g. `/sjdfhjsdhfjsa` or `/notarealroute/lalala` should both render the `NoMatch` component page. 

  * You will need to use the `Switch` component from the React Router Dom library to accomplish this. An example can be found [here](https://reacttraining.com/react-router/web/example/no-match).

### Part 3

* Notice that in the `pages` folder we have a `Detail` component. This component displays additional information about a book.

* Add a route for the the new `Detail` component. This should render when the `/books/:id` path is matched. e.g. if a book's `_id` is `59a39cf2549cf482c814333f`, then `/books/59a39cf2549cf482c814333f` should render its book `Detail` page.

* Inside of the `Detail` component, add code so that when the component mounts, we retrieve the book for the rendered route and save it to `book`. e.g. when the route is `/books/59a39cf2549cf482c814333f`, an AJAX request should be made to get the book with an `_id` of `59a39cf2549cf482c814333f`. If completed successfully, you should see the book's synopsis on this page.

  * You may need to look into [URL params with React Router](https://reacttraining.com/react-router/web/example/url-params) to accomplish this.

### Hints

* Parts 1 - 2 will only require you modify the `client/src/App.js` file.

* The React Router DOM library should already be installed.

* The React Router documentation is your friend!

* Ask the instructor or a TA if you're having difficulty understanding any of the activity requirements.
