# Is Anagram

In this activity you will write code to create a function that takes in two strings and returns `true` if one string is an anagram of another string and otherwise returns `false`.

## Instructions

* Open [Unsolved/is-anagram.js](Unsolved/is-anagram.js) in your code editor&mdash;this is the only file that you will modify in this activity.

  * In this file, you will write code in the body of the `isAnagram()` function to achieve the following:

    * Return `true` if one string is an anagram of the other string. Otherwise return `false`.

      > **Note:** An **anagram** is a word or phrase made by rearranging the letters of another word or phrase. See the [Wikipedia page on anagrams](https://en.wikipedia.org/wiki/Anagram) for more information.

    * You can check whether the strings are anagrams of each other by checking whether any permutation of (combination of letters in) the first string is equal to the second string.

    * For example, see the following strings:

      ```js
      var strA = "nnjjdyus";
      var strB = "njdnsjyu";
      ```

    * Given the preceding strings, the following should be returned:

      ```js
      true
      ```

    * See the following strings for an example:

      ```js
      var strA = "tacocat";
      var strB = "ctatocato";
      ```

    * Given the preceding strings, the following should be returned:

      ```js
      false
      ```

    * You can assume that the string will contain all lowercase letters.

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that pass the tests will be denoted with a green check mark.

  * Functions that fail the tests will be denoted with a red X and an error message.

### Hints

You can approach this problem by trying to find out if both strings are the same length and contain the same letters.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
