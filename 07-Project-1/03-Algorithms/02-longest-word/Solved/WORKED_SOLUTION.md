# Longest Word

In this problem, we're given a string containing multiple space-separated words and need to return the longest word in the string.

So before we code anything, let's list out a few things we know about the problem so far:

1. String contains multiple words separated by a space.

2. We can split a string by a separator into an array using the `.split` method.

3. We can iterate through an array using a loop.

4. The length of a string can be obtained using the `.length` method.

So far we've identified and broken the problem up into 4 smaller parts. When starting a that contains multiple steps, it's helpful to list out the smallest components of the problem you can identify.

Let's start turning this into code:

```js
var longestWord = function(str) {
  var words = str.split(" ");
};
```

Since we need to check each word, we'll first split the string into an array of words.

Now in order to check each word, we'll loop through the `words` array:

```js
var longestWord = function(str) {
  var words = str.split(" ");

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];
  }
};
```

As we're going through the words array, we need to check whether the word is the longest word in the `words` array _so far_. We can initialize a variable which we'll use to store the current longest word, and compare that to the `currentWord` at each iteration of the loop.

```js
var longestWord = function(str) {
  var words = str.split(" ");
  var longestWord;

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
};
```

So if the `currentWord.length` is longer than the `longestWord.length`, the `currentWord` is the new `longestWord`.

But what about at the first iteration of the loop? The `longestWord` variable doesn't have a value yet. We could write a conditional that checks if `longestWord` is `undefined`, and if so assigns the value of `currentWord` to it.

We could also initialize `longestWord` as the first word in the array, and then start the loop index at `1`. This should work because the first word will always be the current longest word.

```js
var longestWord = function(str) {
  var words = str.split(" ");
  var longestWord = words[0];

  for (var i = 1; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
};
```

After the loop completes we can return the result, `longestWord`.
