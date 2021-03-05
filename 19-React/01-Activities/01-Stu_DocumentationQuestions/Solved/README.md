# React Quiz

* **Q** What is Create React App?

  * **A**

    * **Create React App:** Create React App is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

* **Q** What are some benefits of using ReactJS?

  * **A**

    * **Fast Learning Curve:** React _is_ more complicated to learn and use than jQuery, but this is an unfair comparison because the two aren't even in the same league. Compared to other competing JavaScript libraries and frameworks such as Angular or Ember, React has much less code that we as developers need to memorize or worry about, making it much faster to learn.

    * **React is Component Based:** With React we can build encapsulated components that manage their own state, then compose them to make complex UIs. Since our components are written in JavaScript instead of HTML, we can easily pass data into our application and keep our state out of the DOM.

    * **With React, you can "Learn Once, Write Anywhere":** React only tries to be the view layer of our application (the V in MVC). Because of this, it makes no assumptions about the rest of our application, and can be rendered on the client, on the server using node, even in native mobile applications with React Native.

* **Q** What is a React component?

  * **A** "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be defined as JavaScript functions or ES6 classes." Essentially components are responsible for rendering some part of an application's UI.

* **Q** What is the significance of the `ReactDOM.render` method?

  * **A** `ReactDOM` is a package separate from the `React` package that provides APIs for DOM specific methods. `ReactDOM.render` takes a React component, or tree of React components and (eventually) renders them to the DOM. For the most part, we generally only run this method once per React app to render a single root component containing all of our other components.

* **Q** What is JSX? Why does Facebook recommend it?

  * **A** JSX is a syntax extension to JavaScript that _looks like_ HTML. Facebook recommends JSX because it's familiar HTML-like syntax makes it easy to describe the UI a component should produce. It is possible to write React applications without using JSX, but the process is less intuitive.

* **Q** What does Facebook recommend as the “best way to start building a new React single page application”?

  * **A** They recommend everyone begin with [Create React App](https://github.com/facebookincubator/create-react-app). Normally, setting up a robust React application from scratch requires a deep understanding of build tools such as [Webpack](https://webpack.js.org/) (used for bundling an application's assets) and [Babel](http://babeljs.io/) (used for transpiling JSX and ES6+ code to plain, widely supported, ES5 JavaScript). Thankfully, we can use Create React App to quickly scaffold  out a React app in seconds with all of the features and configuration we'd need for _most_ applications.

* **Q** What is Babel? And what role does it play in converting JSX into vanilla JavaScript?

  * **A** [Babel](http://babeljs.io/) is a JavaScript compiler. It takes next generation JavaScript (ES6/ES7/ES8) and compiles it down to widely supported ES5 JavaScript code. It also compiles JSX code down to regular JavaScript functions that browsers can understand. Developers can also extend the JavaScript syntax and add on their own features, and share them with others in the form of a Babel plugin.

* **Q** What is the significance of { } curly braces in JSX?

  * **A** The { } single curly braces inside of JSX work similarly to the {{ }} double curly braces in handlebars: they allow us to pass values and expressions into our view.

* **Q** What is a component prop?

  * **A** A prop is essentially a function argument that's passed into our component from outside and can be used inside of it. For example, we could write a component for a button that renders different types of buttons depending on the prop it's passed.
