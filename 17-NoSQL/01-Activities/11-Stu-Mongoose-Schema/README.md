# User Schema

In this activity you will create a user schema with mongoose.

## Instructions

* In `userModel.js` add four attributes to your schema.

  * username: A string that will be be required, and also trimmed.

  * password: A string that will be required, trimmed, and at least 6 characters.

  * email: A string that must be a valid email address and unique in our collection.

  * userCreated: A date that will default to the current date.

## 💡 Hint(s)

* The regex for checking if a string is an email is: `/.+\@.+\..+/`
