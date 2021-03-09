# Store

In this activity you will be creating a store that contains the global state and a reducer. We will also add some functionality to our Todo list.

# Instructions

* Replace your React application's src folder with [Unsolved/src](Unsolved/src).

* This activity uses Bootstrap, so make sure you `import 'bootstrap/dist/css/bootstrap.min.css';` in `index.js`

* Start the application in dev mode by running `npm start` in your terminal.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* Update this application to accomplish the following:

* Separate the Form and List parts of the application into two different components. Place them both in a folder called `components`.

* Create a folder called `utils` and within it, create a single file that will be the application **store**. This file should export a Provider that will be used to wrap the entire application and a `useTodoContext` object that will be used to inject the Context into any component that needs access to the store.

* Add an action handler that will allow users to prioritize a Todo. 

* Make sure your application works properly before moving on.

* Add numbering to the list so that each item has its index next to the Todo title. If items are removed from the array, the index should update to reflect the changed state.

* Change the `List` component so that each Todo has a button next to it that dispatches the `prioritize` action. 

* Make the necessary changes so that the title of the Todo will appear in bold if it is prioritized.
