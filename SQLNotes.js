const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require("react/cjs/react.production.min")

What is a database? 
    - is a way to organize database
    - large collections of data
    - easily stored and manipulated
    - authorization control
    - persistance
    
Relational Databases
    -> Primary Key
        - a column in a table with an ID that uniquely identifies a specific record or row in a table.

    -> Foreign Key
        - a column in a table that refers to a primary key in another table. 
        - SQL programmatically uses the foreign key in one table to identify a corresponding row in another table

    -> is a database that has tables with related data points 
        - think of an author with a bunch of books they've written. Here we separate the books and authors into separate tables and connect the two using a foreign key

    -> unique keys or primary key
        - every single item created in a database is assigned an ID

    -> foreign keys that relate to other tables
        - to create a relationship between two tables, we take the id from another table and assign it to its related table
        - if we need information from the related table while looking at the authors for instance, we can use the attached id

    -> prevents duplicate data
    -> data is easier to index and query

    -> relational databases like SQLite store data in a table
        - columns refer to datatypes or a CLASS in ruby
        - rows refers to instances of that datatype or instances of a class

    -> schema
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


Relating Tables with Foreign Keys 

    => How do we establish a relationship between two tables? 
        -> One to Many
            - Use a foreign key on the table that belongs to a record in the other table
                - an owner can have many cats but a cat has one and therefore belongs to one owner
    
    => adding foriegn keys to a table 
        -> ALTER TABLE cats ADD COLUMN owner_id INTEGER; 
            - adds the foreign key column
        -> UPDATE cats SET owner_id = 1 WHERE name = 'maru';
            - associates the cat named maru with the owner with the id = 1
        -> SELECT * FROM cats WHERE owner_id = 1;
            1|maru|3|scottish fold|1
            2|hana|1|tabby|1
    
    => JOINS
        -> SQL utilizes foreign keys and primary keys to join tables together. JOINS allows us to create a brand new table by joining two tables together with new column names from each table. 

        -> SELECT albums.title as 'album title', artists.name as 'artist name' FROM albums JOIN artists ON artists.artist_id = albums.artist_id;
            - note artist_id is a foreign key in the albums table.
        -> INNER JOIN
            - returns all rows when there is at least one match in BOTH tables
            - When using an INNER JOIN to return data from multiple tables, you will only see the results from records in the first table (left side of the diagram above) and the second table (right side) when they can be connected via a foreign key;
            - SELECT column_names FROM first_table INNER JOIN second_table ON first_table.column_name = second_table.column_name;


            Example:
                SELECT cats.name, cats.breed, owners.name AS 'owner_name'
                    -> specifies which columns from each table we want to select data from 
                FROM cats INNER JOIN owners 
                    -> joins our cats and owners table using INNER JOIN
                ON cats.owner_id = owners.id; 
                    -> tells our query how to connect or join the two tables by specifying which columns function as foreign and primary keys. Here, we are telling our query that the owner_id column on the Cats table is filled with data that corresponds to data in the id column of the Owners table. We are indicating that a value of 1, for example, in an individual cat's owner_id column refers to the individual owner who has an id of 1. And we are telling our query to return only those cats and owners who share this connection.

                name        breed          owner_name
                ----------  -------------  ----------
                maru        scottish fold  mugumogu
                hana        tabby          mugumogu

        -> LEFT (OUTER) JOIN
            - returns all rows from the left table and the matched rows from the right table
        

        => SELECT customers.name AS 'customers' FROM customers WHERE customerId NOT IN (SELECT customerId FROM orders);
            -> select customerId from orders:  gets us a list of the customers who have made orders
            -> we then use the NOT IN query to get customers who are not in the ^above list.

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

    => SELECT name FROM cats; and SELECT cats.name FROM cats; work the same! why?
        -> SQL lets us use dot notation to select! This lets us select data from different tables!
        Examples
            CREATE TABLE dogs(
                id INTEGER PRIMARY KEY,
                name TEXT
            );

            INSERT INTO dogs (name) VALUES ('clifford');

            SELECT name FROM cats, dogs; -> this won't work
            SELECT cats.name, dogs.name FROM cats, dogs; -> this works because we explicitly follow the tableName.columnName syntax

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

    => Queries the database and gets the DOB of the record from the profiles table whose name column === 'sean' (note casing matters here when using WHERE)
        -> SELECT dob FROM profile WHERE name = 'sean'; (note casing matters here when using WHERE)
        -> SELECT age FROM profile WHERE name LIKE 'arthur'; (note casing does not matter when using LIKE)

    => Query the table and gets all records whose name includes a and retrieves specific columns
        -> SELECT name, age, dob FROM profile WHERE name LIKE 'a';

    => .schema [database] lets you see the schema of the database

    => INSERT
        -> INSERT INTO fans(name, artist_id) VALUES("arthur", 2)
        - note this command also creates a join between the fans table and the artist table

    => UPDATE
        -> UPDATE fans SET artist_id = 169 WHERE name != "ix";
        -> UPDATE profiles SET spouse_id = 1 WHERE name != 'sean';

    => DELETE 
        -> DELETE FROM profiles WHERE name = 'sean';
        -> deletes a row from a table



    SQL Queries;
    => a sql query is where a sql statement retrieves data from the database. Here we learn how to manipulate our sql queries to view and analyze data.

        ORDER BY
            -> SELECT column_name FROM table_name ORDER BY column_name ASC|DESC;
            -> SELECT * FROM cats ORDER BY age ASC
        
        LIMIT
            -> If we want to select extremes from a database table, we can use the ORDER BY in conjunction with LIMIT
            -> SELECT * FROM cats ORDER BY age DESC LIMIT 1;
        
        BETWEEN
            -> say we need to urgently select all cats whose age is between 1 and 3.
            -> SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2;
            -> SELECT * FROM cats WHERE age BETWEEN 1 and 3;
        
        NULL
            -> say we need to add a new record in our database but we don't have all of the information. ie. we have missing values
            -> here we can use the NULL keyword 
            -> INSERT INTO cats (name, age, breed) VALUES (NULL, NULL, "Tabby");
    
        => SQL Aggregate Functions
            -> SQL aggregate functions are statements that operate on GROUPS OF RECORDS rather than INDIVIDUAL RECORDS. 
            COUNT
                -> counts the number of records that meet a certain condition
                -> SELECT COUNT([column name]) FROM [table name] WHERE [column name] = [value]
                -> SELECT COUNT(owner_id) FROM cats WHERE owner_id = 1
                    - the above^ counts the number of owner_ids where the cat's owner_id equals 1 
                    - note COUNT only takes 1 argument
                -> You can also use the Wildcard * in count to count the number of rows in a given column
                    - SELECT COUNT(*) FROM cats WHERE net_worth > 1000000;
            GROUP BY
                -> groups results by a given column. It's a great way for aggregating results and can even group using multiple columns
                -> SELECT breed FROM cats GROUP BY breed; -> groups the cats by breed and returns the unique breeds
                -> SELECT breed, COUNT(breed) FROM cats GROUP BY breed;
                -> SELECT breed, owner_id, COUNT(breed) FROM cats GROUP BY breed, owner_id;
            
            AVERAGE
                -> returns the average value of a column
                -> SELECT AVG(column_name) FROM table_name;
                -> SELECT AVG(net_worth) FROM cats;
                -> To reformat, we can also use aliasing to make the return value more readable
                    SELECT AVG(net_worth) AS average_net_worth FROM cats;

            SUM
                ->  returns the sum of all of the values in a particular column.
                -> SELECT SUM(net_worth) FROM cats;

            MIN/MAX
                -> The minimum and maximum aggregator functions return the minimum and maximum values from a specified column respectively.
                -> SELECT MIN(net_worth) FROM cats;




    OTHER: 
        if syntax => if(employee_id % 2 =1 and name not like 'M%', salary , 0)
                    if (condition, return value if true, return value if false)
        CASE syntax => 
                UPDATE salary SET sex = CASE sex WHEN 'm' THEN 'f' ELSE 'm' END
                // Write an SQL query to swap all 'f' and 'm' values (i.e., change all 'f' values to 'm' and vice versa) with a single update statement and no intermediate temporary tables.

                UPDATE salary SET sex = if(sex='m', 'f', if(sex='f', 'm', 'f'))

        Top-Tip: In sqlite3, you can format the output of your select statements with a few helpful options:
            .headers on      # output the name of each column
            .mode column     # now we are in column mode, enabling us to run the next two .width commands
            .width auto      # adjusts and normalizes column width
            # or
            .width NUM1, NUM2 # customize column width