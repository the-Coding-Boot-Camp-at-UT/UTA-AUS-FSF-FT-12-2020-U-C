* Folder: `09-Sequelize-Update-Delete/Unsolved`.

* INSTRUCTIONS:

  1) Open the Unsolved folder

  2) Run `npm install`

  3) Update the `config.json` file's development object with your own local MYSQL database settings.

  4) Inside the `api-routes.js` file, look for the DELETE route and add a Sequelize method to delete the todo with the id available to us in `req.params.id`.

  5) Inside of the same file, look for the PUT route and add a Sequelize method to update a todo with the new todo data available to us inside req.body.

  6) Again, you won't need to touch the front end HTML or JavaScript to make any of this work.

  7) **HINT**: you will need to pass in an options object with a "where" attribute into both methods in order to filter these queries to target the Todos we want to update or delete.
  <https://sequelize.org/master/manual/model-querying-basics.html#applying-where-clauses>

  8) Navigate to localhost:8080. If you can update and delete todos without errors, you were successful.

  9) If you get stuck or finish early, discuss the documentation for the `update` and `destroy` methods with your partner here:

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-update>

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-destroy>
