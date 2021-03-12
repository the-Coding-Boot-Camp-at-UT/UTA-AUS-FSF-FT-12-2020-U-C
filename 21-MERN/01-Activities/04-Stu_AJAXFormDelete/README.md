# AJAX Form Delete

In this activity we will add functionality to the previous books example for submitting and deleting books from the database.

## Instructions

* Open the [Unsolved](Unsolved) folder and install dependencies by running `npm install` at the project root.

* Start the app by running `npm start` from the project root.

* Once the app starts open your browser to [localhost:3000](http://localhost:3000).

* Open [Unsolved](Unsolved/client/src/pages/Books.js).

### Part 1

* Open the `Books.js` file. Add code so that `formObject.title`, `formObject.author`, and `formObject.synopsis` are updated as their corresponding `Input` components are updated (see the `name` properties on each `Input`). Any props you attach to the `Input` components will be passed down to their underlying elements, so there's no need to modify any code other than the code inside of `Books.js`.

* Add code so that when the `FormBtn` is clicked, an AJAX request is performed saving the new book. An object containing the new book's `title`, `author` and `synopsis` should be passed into the `API.saveBook` method.

### Part 2

* Add code to the `Books.js` file so that when the `DeleteBtn` (`✗` button) component is clicked, its book is deleted from the database and the books displayed are updated. To accomplish this you should create a new method (`deleteBook`) on the `Books` component, which calls the `API.deleteBook` method when the `DeleteBtn` is clicked.

#### Hints

* The only file you need to modify is `Books.js`.

* See [React's Documentation on Handling Events](https://facebook.github.io/react/docs/handling-events.html)
