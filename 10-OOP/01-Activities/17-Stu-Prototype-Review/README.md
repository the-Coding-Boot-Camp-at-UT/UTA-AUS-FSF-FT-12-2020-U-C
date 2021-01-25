# Final TV App

In this activity we will update the TV constructor function to be able to search the TV Maze API for a given actor's name.

## Instructions

* Open [tv.js](Unsolved/tv.js) and update the constructor function's `findActor` method. It should use the `axios` package to search the TV Maze API using the provided URL.

* Once the data has been retrieved from the API,grab only the first result (it should be an array of JSON objects).

* Save the following information to the `log.txt` file using the `fs.appendFile` method:

  * The actor's name
  * The actor's birthday
  * The actor's gender
  * The actor's country
  * The actor's TV Maze URL

* Once the data has been saved to the `log.txt` file, print it to the console.

* Test that your code works properly by running the `cli.js` file with arguments. e.g. `node cli actor Jennifer Aniston`.

### Hints

* Implementing the `findActor` method should be very similar to the `findShow` method, refer to this if stuck.

* Check out this sample output from the TV Maze Actors API: <http://api.tvmaze.com/search/people?q=jennifer%20aniston>
