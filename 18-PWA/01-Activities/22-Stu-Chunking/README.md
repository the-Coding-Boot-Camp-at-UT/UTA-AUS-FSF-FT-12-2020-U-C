# Chunking

In this activity, we will practice using multiple entry points to split up our JavaScript code.

## Instructions

* Run `npm install`.

* In `webpack.config.js`, add entry points for JavaScript files for the three pages, home, detail, and favorites.

* Update `service-worker.js` file so that it caches the new bundles.

* Make sure to update each html file so that it also uses the appropriate bundle.

* Note that the gallery application has been upgraded with the ability to save your favorite images to IndexedDb. 

* Once again, there are many ways that you can separate your JavaScript files. It is recommended that you create somethings similar to the following file structure to avoid chunking unused code:

  * `api.js` Loads images from the api.

  * `cardCreation.js` Responsible for all functions related to the creation of cards.

  * `domMethods.js` Responsible for all functions related to manipulating the DOM.

  * `detail.js` Responsible for the Detail page of the application.

  * `favorites.js` Responsible for the Favorites page of the application.

  * `home.js` Responsible for the Home page of the application.

  * `indexedDb.js` Contains a helper method to interact with IndexedDb.

  * `rating.js` Handles the creation of the ratings form and the update method.

* Run `npm start` and make sure that the application still works as expected.

* Navigate to each page and make sure that the bundle files are all being cached by the service worker.

### Hints

* Try testing out functionality of the application at [http://localhost:3000](http://localhost:3000) every time you make changes. This will help you identify the code that does not work as expected.

* If extracting functionality from a JavaScript file causes any of the pages to stop working, do **not** continue until you understand why it's not working as expected.

* Ask the instructor or a TA for help if you get stuck or are unsure why a function isn't working.
