# Node + MySQL PopQuiz

## Using the `terminal` or your favorite MySQL GUI
1. Connect to MySQL server
```bash
mysql -uroot
```

2. Create a new Database
```sql
CREATE DATABASE boston;
```

3. Create a new table with a primary key that auto-increments, and a text field
```sql
USE boston;
CREATE TABLE colleges (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
```

4. Insert 3 Rows into your new table
```sql
INSERT INTO colleges (name)
VALUES ("UMass");

INSERT INTO colleges (name)
VALUES ("Boston College");

INSERT INTO colleges (name)
VALUES ("Harvard");
```
or...
```sql
INSERT INTO colleges (name)
VALUES ("Boston College"), ("Harvard");
```

## Using Node / IDE of your choice
See the `package.json` and `colleges.js` files for the full solution.

1. Create a package.json
2. Require `mysql`
3. Connect to MySQL
4. Print the 3 rows of data to the `console`
