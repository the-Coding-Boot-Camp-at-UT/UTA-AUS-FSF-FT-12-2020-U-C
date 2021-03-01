# Unit 18: Web Performance

## Overview

In this unit we will cover measuring and optimizing the performance of web applications. Today many users around the world access the web from older mobile devices on slower connections. As web applications continue to grow both in size and complexity, so do their load times. In order to ensure all users have a good experience, optimizing performance is an important consideration.

Chrome Devtools and Google Lighthouse will be our primary tools for measuring web application performance. Devtools allows us to monitor network traffic and inspect the size of resources downloaded to the browser such as HTML, CSS, JavaScript and images. Lighthouse provides a performance scoring system based on metrics such as application bundle size, time to interaction, time to first meaningful paint, and more.

In order to deliver smaller application bundle sizes to the client, we'll perform several optimizations that involve compressing assets. This includes minifying JavaScript and CSS files, as well as compressing images. Another technique utilized to improve initial bundle size will be lazy loading, where we will defer loading certain assets until they're needed by the application.

This unit will also focus on Progressive Web Apps (PWAs). Progressive web apps aim to blend the benefits of a traditional browser experience with those of a mobile application. PWAs may utilize the Service Worker and Cache APIs to cache assets and API responses to ensure applications work without an internet connection.

We'll conclude this unit with an overview of webpack, a module bundler for JavaScript. Webpack eases the development of front end web applications by automating many of the optimizations performed earlier in the unit.

## Key Topics

* Lighthouse

* Lazy Loading

* Minification

* Compression

* PWAs

* Service Workers

* Webpack

## Comprehension Check

You will be employer-ready if you can answer the following questions:

1. What tools can be used to measure performance of a web application?

2. What are some metrics that matter when measuring web application performance?

3. What is a PWA?

## Learning Objectives

You will be employer-competitive if you are able to:

* Identify performance bottlenecks in web applications.

* Explain how performance can be measured in web applications.

* Explain the 5 main categories measured in a Lighthouse audit.

* Optimize CSS, JS, and media assets for performance.

* Set up webpack in a new front end project.

* Convert an existing web application to a PWA and add offline functionality.

## Homework: Budget Tracker

* In this assignment, you'll build a budgeting app to keep track of personal finances. You'll utilize IndexedDB, cache API, and Service Workers to provide an offline experience for the application.

## Helpful Links

* [Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)

* [Measure Web Performance With The RAIL Model](https://developers.google.com/web/fundamentals/performance/rail)

* [Audit the Performance of Your Web Application](https://developers.google.com/web/fundamentals/performance/audit/)

* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)

* [Your First Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)
