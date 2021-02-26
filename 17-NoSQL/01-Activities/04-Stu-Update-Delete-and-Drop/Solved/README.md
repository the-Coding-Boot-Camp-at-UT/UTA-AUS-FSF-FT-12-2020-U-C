# Updating, Deleting and Dropping in MongoDB

## Instructions

* Go back to your classroom database.

```
db
use classroom
```

* You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.

```
db.students.update({name: "Steve"}, {$push: {"hobbies":"Extreme Basketweaving"}})
```

* While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.

```
db.students.update({name: [name of neighbor]}, {$set: {os:[name of another os]}})
```

* Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

```
db.students.remove({name: [name of another neighbor]})
```

* You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.

```
db.students.update({}, {$set: {gavecandy:false}}, {multi:true})
```

* All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.

```
db.students.update({name:'Steve'}, {$set: {gavecandy:true}})
```

## Bonus:

* Insert five more documents with one command.

```
db.students.insertMany([
  {name: 'Jane', row:1, os:'Mac', hobbies:['Coding', 'Sleeping', 'Karate'] },
  {name: 'Mary', row:2, os:'Mac', hobbies:['Baseball', 'Basketball', 'Tai Chi'] },
  {name: 'Alexa', row:3, os:'Lin', hobbies:['Gaming', 'Reading', 'Gardening'] },
  {name: 'Gary', row:4, os:'Mac', hobbies:['Walking', 'Reading', 'Mountain Climbing'] },
  {name: 'Ed', row:5, os:'Win', hobbies:['Coding', 'Karate', 'Scuba Diving'] }
]);
```

* Return all documents of students who have reading as a hobby or a mac operating system.

```
db.students.find(
    {$or:[
        {"hobbies":{"$in":["Reading"]}},
        {"os":{"$in":["mac"]}}
    ]}
)
```
