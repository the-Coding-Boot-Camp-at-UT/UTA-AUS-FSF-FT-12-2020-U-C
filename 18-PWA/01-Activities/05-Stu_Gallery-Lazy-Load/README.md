# Lazy Loading Images

In this activity you are going to work with the Intersection Observer API to implement lazy loading functionality for our Gallery App.

## Instructions

* In this activity you are going to take the Gallery App and implement Lazy Loading functionality.

  * This will allow for us to load images only as they are needed, saving loading times.

* You will primarily be working within `loadImages.js`, specifically in the initLazyImages() function, and lower where the image tags are dynamically created(hint hint)

* Inside of `public/assets/images` is a `.zip` file containing all the images needed for the app. Unzip this file and make sure the contents end up in your images folder.

* Review the package.json and take note of the "scripts" section, specifically the "seeds" script. Review how to run package.json scripts from the command line at (https://docs.npmjs.com/cli/run-script)

* Read through the MDN Docs provided below. Use the example code provided and adapt it to work with the `Gallery App`

* **Note**: You will need to make some changes to the code to get it working in your application.

* You will need to have your mongod server running in order to complete the activity

[MDN Progressive Loading](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading)

* After you have completed implementing lazy loading, open your Dev Tools and run another Lighthouse Audit.