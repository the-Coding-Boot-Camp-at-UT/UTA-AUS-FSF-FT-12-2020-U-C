# MongoJS Sorting

## Instructions

* Review the two routes provided to you and speak with a partner about what the code is doing.

  * Get `/`: Displays a simple "Hello World" message (no mongo required).
  
  * Get `/all`: Send JSON response with all animals. (Uses the same animals collection created in [05-Ins-Sorting-In-Mongo](../05-Ins-Sorting-In-Mongo/README.md))

* Make two routes that display results from your zoo collection:

  * Name: Send JSON response sorted by name in ascending order.

  * Weight: Send JSON response sorted by weight in descending order.

## 💡 Hint(s)

* Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus

* Create an additional route that returns the heaviest animal.

## Seed Zoo DB
Run the following in the mongo shell if you did not add at least 5 animals in the previous activity:

```js
use zoo;
db.animals.insertMany([
  {"name":"Panda", "numLegs":4, "class":"mammal", "weight": 254, "whatIWouldReallyCallIt":"Captain Fuzzy Face"},
  {"name":"Dog", "numLegs":4, "class":"mammal", "weight": 60, "whatIWouldReallyCallIt":"Captain Fuzzy Face II"},
  {"name":"Ostrich", "numLegs":2, "class":"aves", "weight": 230, "whatIWouldReallyCallIt":"Steve"},
  {"name":"Kangaroo", "numLegs":2, "class":"marsupial", "weight": 200, "whatIWouldReallyCallIt":"Bouncer"},
  {"name":"Chameleon", "numLegs":4, "class":"reptile", "weight": 5, "whatIWouldReallyCallIt":"Scales"}
]);
```
