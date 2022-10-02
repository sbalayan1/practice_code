const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require("react/cjs/react.production.min")

What is a database? 
    - is a way to organize database
    - large collections of data
    - easily stored and manipulated
    - authorization control
    - persistance
    
Relational Databases
    - is a database that has tables with related data points 
        - think of an author with a bunch of books they've written. Here we separate the books and authors into separate tables and connect the two using a foreign key
        - 
    - unique keys or primary key
        - every single item created in a database is assigned an ID
    - foreign keys that relate to other tables
        - to create a relationship between two tables, we take the id from another table and assign it to its related table
        - if we need information from the related table while looking at the authors for instance, we can use the attached id
    - prevents duplicate data
    - data is easier to index and query

    - relational databases like SQLite store data in a table
        - columns refer to datatypes or a CLASS in ruby
        - rows refers to instances of that datatype or instances of a class

    - schema
        - you can view the structure of our database using .schema
        - the schema represents the structure of your database

    Person Table
        name	age	email
        Bob	    29	bob@flatironschool.com
        Avi	    28	avi@flatironschool.com
        Adam	28	adam@flatironschool.com


    class Person
        attr_accessor :name, :age, :email

        def initialize(name, age, email)
            @name = name
            @age = age
            @email = email
        end
        end

        bob = Person.new("Bob", 29, "bob@flatironschool.com")
        avi = Person.new("Avi", 28, "avi@flatironschool.com")
        adam = Person.new("Adam", 28, "adam@flatironschool.com")




SQL
    -> is the language that lets us QUERY the database. 
    -> allows us to insert, read, update, and destroy data
How we can use SQL?
    -> create a database and use sqlite3.
    -> use db browser
    -> sqlite extension via vscode
    -> To write SQL in our text editor, we can create files with the .sql extension. These files will execute sql code on/against our database

SQL Operations/KEYWORDS
    -> CREATE TABLE
    -> CREATE ROW
    -> INSERT
    -> SELECT
    -> JOIN
    -> ALTER TABLE
    -> UPDATE
    -> DROP TABLE
    -> DELETE
    -> COUNT
    -> ADD
    -> SUM
    -> AVG
    -> WHERE
    -> LIKE

    https://www.sqlite.org/lang_keywords.html

DATA Categories or Storage classes
    - TEXT: alphanumeric characters we want to represent as plain text
    - INTEGER: whole numbers
    - REAL: decimals up to 15 characters long
    - BLOB: holds binary data
    - NULL: no value
    - NUMERIC

Data Types
    - these types are lumped into the 5 data categories above
    - INT: integer
    - BOOL: stored as 0 or 1 and recently, FALSE and TRUE
    - FOR MORE on Typename Afinities. See 3.1.1 Affinity Examples https://www.sqlite.org/datatype3.html

Comparison Expressions
    SQLite version 3 has the usual set of SQL comparison operators including "=", "==", "<", "<=", ">", ">=", "!=", "", "IN", "NOT IN", "BETWEEN", "IS", and "IS NOT".

Mathematical operators
     - Mathematical operators (+, -, *, /, %, <<, >>, &, and |) interpret both operands as if they were numbers. STRING or BLOB operands automatically convert into REAL or INTEGER values.

Syntax Notes
    => * => stands for ALL and is called the wildcard
    => when naming columns in a database, make sure to always use LOWERCASE letters when referring to column names.
    => when linking words together, link them together using snake case. 
    => when we create new tables, we need to specify some column names and their data types. Otherwise the command "create table cats;" will return a syntax error

Command practice
    => all sql commands besides those that start with a . should end with a ;
    => SELECT * FROM artists;
        - gets all of the data from the artists table
        - make sure you include the ;
    
    => .tables
        - retrieves a list of all the tables

    => Create table
        CREATE TABLE cats (
            id INTEGER PRIMARY KEY,
            name TEXT,
            age INTEGER
        );

        - creates a table called cats with an id as a primary key, a name, and an age

    => Add columns
            -> this can be used to create relationships between tables

            ALTER TABLE cats ADD COLUMN breed TEXT

            sqlite> .schema
                CREATE TABLE cats (
                id INTEGER PRIMARY KEY,
                name TEXT,
                age INTEGER,
                breed TEXT
                );

            => Notice that the ALTER statement isn't here, but instead SQLite has updated our original CREATE statement. The schema reflects the current structure of the database, which is reflected as the CREATE statement necessary to create that structure.
    => Remove columns
        ALTER TABLE cats DROP COLUMN breed
        => The DROP COLUMN syntax is used to remove an existing column from a table. The DROP COLUMN command removes the named column from the table, and rewrites its content to purge the data associated with that column. The DROP COLUMN command only works if the column is not referenced by any other parts of the schema and is not a PRIMARY KEY and does not have a UNIQUE constraint. 

        Resources for DROP COLUMN
        https://www.sqlite.org/lang_altertable.html#altertabmvcol
        https://www.sqlitetutorial.net/sqlite-alter-table/

    => Rename table
        -> ALTER TABLE profile RENAME TO profiles;
    => Rename columns
        ALTER TABLE cats RENAME COLUMN breed TO bread
        - If the column name change would result in a semantic ambiguity in a trigger or view, then the RENAME COLUMN fails with an error and no changes are applied.

    
    => Gets black sabbath from artist database and returns all of black sabbath's data
        -> more specific SELECT * FROM artists where name = "Black Sabbath"
        -> less specific SELECT * FROM artists WHERE name LIKE "%Black%" //note casing doesn't matter  

        -> NOTE you can use the DISTINCT keyword to get a list of unique records. 
                    => SELECT DISTINCT name from cats 
                        ^the above will select only the unique names and not retrieve cats with the same name

    => Queries the database and gets a record from the profiles table whose name column == 'Sean'
        -> SELECT * FROM profile WHERE name = 'sean';

    => queries the database and gets the DOB of the record from the profiles table whose name column === 'sean' (note casing matters here when using WHERE)
        -> SELECT dob FROM profile WHERE name = 'sean'; (note casing matters here when using WHERE)
        -> SELECT age FROM profile WHERE name LIKE 'arthur'; (note casing does not matter when using LIKE)

    => query the table and gets all records whose name includes a and retrieves specific columns
        -> SELECT name, age, dob FROM profile WHERE name LIKE 'a';

    => .schema [database] lets you see the schema of the database

    => insert a new row into your table
        -> INSERT INTO fans(name, artist_id) VALUES("arthur", 2)
        - note this command also creates a join between the fans table and the artist table

    => update
        -> UPDATE fans SET artist_id = 169 WHERE name != "ix";
        -> UPDATE profiles SET spouse_id = 1 WHERE name != 'sean';
    => delete 
        -> DELETE FROM profiles WHERE name = 'sean';
        -> deletes a row from a table



    SQL Queries;