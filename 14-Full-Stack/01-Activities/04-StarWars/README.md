# STEPS TO SEQUELIZE THE STAR WARS APP

* Install the sequelize and mysql2 npm packages.
* Delete the orm from config. In your app folder, create a model folder with a character.js file in the model
* In character.js, model out the character table, as detailed in the schema.sql file located in the root of this project directory.
* Remove all references to the old orm file and replace it with character.js
* Use Sequelize methods in place of the orm calls to retrieve and insert data.
* Update connection.js to use sequelize instead of the mysql package.
