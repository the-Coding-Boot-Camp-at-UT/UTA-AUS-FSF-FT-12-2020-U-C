* **Instructions**

  * Create an app with Express, MySQL and Handlebars.

    * HINT: this app will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.

  * Create a `schema.sql` file and create the following inside of that file:

    1. Make a database called "wishes_db"

    2. Inside of that database, make a table called "wishes" which will have a wish column and an id column. The id will be automatically incremented while also being the primary key.

    3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

  * In your `server.js` file, you will have to create two routes: a get route for `'/'` and a post route for `'/'`.

    * Render all of the wishes from the wishes table when the `'/'` get route is hit. Additionally show the form that the user can use to create a new wish. The form will POST to the `'/'` route.

    * The `'/'` post route will insert the wish from the form into the wishes table and will redirect the user back to the `'/'` get route.
