# PWA Mini-Project

In this activity we will take an existing news aggregator application and transform it into a PWA that can be installed on a user's device. We will also utilize webpack's minify and chunking features to help reduce the total size of the application.

## Instructions

* Open the [Unsolved](Unsolved) folder and study the existing contents, specifically in the `package.json` file at the root of the application. 

* We use a library called `if-env` to check what Node environment we're in when we start our app. If we're in development, then we'll execute the `npm run start:dev` script.

* We use another library called `concurrently` in development so we can run two processes at once. One for our Express server and one for Webpack. This way we don't have to start and stop the server every time something changes.

* Install dependencies by running `npm install` at the project root. This will also install the once in the `client` directory.

* Start the app by running `npm start` from the project root.

* Once the app starts open your browser to [localhost:3000](http://localhost:3000).

* Open [index.js](Unsolved/assets/js/index.js).

* There are 3 main sections in this application:

  * A section that allows you to manage a list of topics.

  * A section that displays different articles of a given topic. This page will also allow you to save articles to your favorites.

  * A favorites page to view a list of the user's favorite articles. This page also allows the user to remove articles from their favorites.

### Part 1

* Using the `webpack.config.js` from the previous activities, update the `webpack.config.js` file that uses a babel loader and the necessary plugins to transform the application to a PWA.

* Create an entry point for each file in `assets/js`.

* Create a `service-worker.js` and make sure to cache all of the bundle files.

### Part 2

* Take a moment to study the contents of `index.js`:

  1. `renderTopics()` renders all of the topics to the page using `createTopics`.

  2. `topicData` is an array of predefined topics to populate the page with.

  3. `createElement()` allows you to create a document element using the a string of its type, and object containing its attributes, and children elements.

* Since `createElement` is a general purpose function that we can use throughout our application, we are going to create a separate file to keep it in named `domMethods`. By doing this, we will be able to import `createElement` into any component we would like without duplicating code.

* Take a moment to study the contents of `topic.js`:

  1. Remove the `createElement` function and modify the file to use the `createElement` from `domMethods.js`.

  2. Extract the code necessary for indexedDb into its own file and be sure to import it into `topic.js`.

  3. Extract the `loadArticles` function to a new file called API and be sure to import any of its dependencies.

* Take a moment to study the contents of `favorites.js`:

  1. Remove the all function declarations for utilities, indexedDb, API, and domMethods.

  2. Using ES6 syntax, import all necessary functions.

### Hints

* You will **not** have to modify any files that are not in the `client` folder.

* Ask the instructor or a TA if you're having difficulty understanding any of the activity requirements.