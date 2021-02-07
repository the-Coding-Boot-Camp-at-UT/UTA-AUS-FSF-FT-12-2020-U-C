* **INSTRUCTIONS:**

  The goal of this exercise is to modify the Post and Author models so that they are associated with eachother.

  1) Open the folder slacked out to you.

  2) Run `npm install`

  3) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  4) Navigate to the `post.js` file.

  5) You will need to set an `associate` property to the `Post` model after it's defined. There's an example of this type of association being done here: 
  <https://github.com/sequelize/express-example/blob/3fca27909b3ec9d72874ebe3317ffd8e5842b17e/models/task.js>

  * This may take a few tries to implement correctly in your own Post model (There's a lot of curly braces there!). You can verify your code works by starting your node server and then checking MySQL Workbench. If the Posts table now has a foreign key of AuthorId, you were successful.

  **Bonus**: If you complete the exercise before time's up, navigate to the author.js file and add a **hasMany** association from the Author model to the Post Model. An example of this type of association can be found here: 
  <https://github.com/sequelize/express-example/blob/3fca27909b3ec9d72874ebe3317ffd8e5842b17e/models/user.js>

  **Note** After this activity we have just one more step to complete the app and get it fully functioning.