# Registering A Service Worker

In this activity you will be registering your first service worker.

## Instructions

* Add the following script just above the `</body>` tag in `index.html`

```html
<script>
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js")
        .then(reg => {
          console.log("We found your service worker file!", reg);
        });
    });
  }
</script>
```

* Create a `service-worker.js` file in the `public` directory and add the following line of code.

```js
console.log("Hi from your service-worker.js file!");
```

* Refresh your Gallery App or launch it with `npm start` if it is not running.

* Open your Chrome Dev Tools > Application and navigate to the Service Worker tab. Check to see if your service worker file was successfully found. You should see two messages, one from the `service-worker.js` file and one from the script tag that you put in your `index.html` file.

