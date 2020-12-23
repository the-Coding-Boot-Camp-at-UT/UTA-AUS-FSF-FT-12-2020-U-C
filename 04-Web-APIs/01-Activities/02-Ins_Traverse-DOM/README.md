# Demo DOM Traversal

* Explain that every document will have the same root elements: Property (node)

* The document (#document) 

* document.documentElement (html)

* document.head (head)

* document.body (body)

 * We can use these as starting points to begin moving our way down the DOM tree.

* Navigate to the MDN Docs on [The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

 * Open the Chrome Dev Tools and enter the following commands one by one.

  ```js
  console.log(document.body);

  console.log(document.body.children);

  console.log(document.body.children[3]);

  console.log(document.body.children[3].childNodes[7]);

  console.log(document.body.children[3].childNodes[7].style.fontSize = "20px");
  ```

  * When using the style method, properties with two words such as font-size become a single word and camelCased. Font-size becomes fontSize.

* Here is one more example of `.style`.

  ```js
  console.log(document.body.children[3].childNodes[7].parentElement.style.color = "red");
  ```

* Point out the following:

  * `.children` is returned as an Array and to move forward with it, we must specify the index. It returns all children *elements*.

  * `.childNodes` is also returned as an Array and to move forward also requires an index to be given. It returns all children *nodes*.

  * When using the `style` method, properties with two words such as `font-size` become a single word and camelCased. `font-size` becomes `fontSize`.