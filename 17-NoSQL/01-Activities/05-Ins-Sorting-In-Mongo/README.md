# Sorting in MongoDB

* The format of a sort follows `db.COLLECTION_NAME.find().sort({FIELD:1})`

* A value of `1` is for ascending order.

* A value of `-1` is for descending order.

* NOTE: Remember to add `.pretty()` afterwards so the results are readable!

* Create a new db named `zoo` and insert at least 5 animals with the following attributes:

  * `numLegs` - a integer that points to the number of legs.

  * `class` - a string that points to the animal's class ("reptile", "mammal" etc).

  * `weight` - a integer that points to the animals weight.

  * `name` - a string that points to the animal's name.

* Example:

  ```js
  {
    "name": "Panda",
    "numLegs": 4,
    "class": "mammal",
    "weight": 254
  }
  ```

* Using the animals collection that you created:

## Sort by id:

* The id contains a timestamp, so sorting by id will sort by when they were entered to the database.

```js
db.animals.find().sort({ _id:1 });
db.animals.find().sort({ _id:-1 });
```

## Sort by an integer - numLegs:

```js
db.animals.find().sort({ numLegs:1 });
db.animals.find().sort({ numLegs:-1 });
```

## Sort by a string - class:

```js
db.animals.find().sort({ class:1 });
db.animals.find().sort({ class:-1 });
```
