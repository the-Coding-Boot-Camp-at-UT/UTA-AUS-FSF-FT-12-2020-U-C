# Optimize Gallery App

In this activity you will use the Lazy Loading, GZip Compression, Image Compression, and Lighthouse to improve the performance of the Gallery App.

## Instructions

* First, unzip the uncompressed images zip file found in `public/assets/images`.

* Run the following commands:

  * Start MongoDB (run `mongod` in your terminal)
  * In a new terminal window run `npm install`
  * `npm run seed`
  * `node server.js`

* Now that the application is running, navigate to the [localhost](https://localhost:3000)

* Open your Chrome Dev tools and run a Lighthouse audit on the application. Take note of the `performance` score listed at the top of the audit report and the `opportunities` section under `performance`.

* Now, using the compression npm package, enable gzip compression in the application.

* Restart your server and run a new audit.

* Next, using [Tiny PNG](https://tinypng.com/), compress all of the images found within the `public/assets/images`

* Once you have compressed all of the images, replace the newly compressed images with the original uncompressed found in the applications images directory.

* Restart your server and run a new audit.

* Now that we have compressed our images and enabled gzip compression, our last step is to minify our JavaScript.

* Create a `dist` folder in `/public`.

  * Inside of `public/dist` create a file called `index.js`

  * Link this `index.js` to your application in `public/index.html`.

* Head to [JSCompress](https://jscompress.com/).

* Take the contents of `/public/assets/js/loadImages.js` and paste it into the text area. Check the box labeled `ECMAScript 2019 (via babel-minify)`. Click `Compress JavaScript`.

  * Take the resulting minified code and copy/paste it into your `/public/dist/index.js`

* Finally, restart your server and run a new audit.
