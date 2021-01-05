# Local Storage

* You have been provided with a signup form that successfully submits an email and password. You're job is to write code that saves the email and password to localStorage and renders the last submission to the page.

## Instructions

* In your `signUpButton` event listener you will need to:

  * Save the user to localStorage.

* In the `renderLastRegistered()` function you will need to:

  * Fill in code here to retrieve the last registered credentials from local storage.
  
  * If the last registered is null, return early from this function.
  
  * Else set the text of the `userEmailSpan`, `userPasswordSpan` to their corresponding values from local storage.
  
## Hints

* Make sure you call `renderLastRegistered()` after you set your `localStorage`.
