HashMaps
// A HashMap is like a drawer that stores items in bins and labels them. 
// hash map implementations use a hashtable. Note that a hashtable is a data strucutre that maps keys to values 

Implementing a HashMap
    1. Array: Using a hash function to map a key to the array index value. 
        Worst: O(n), Average: O(1)
    2. Binary Search Tree: using a self-balancing binary search tree to look up values. 
        Worst: O(log n), Average: O(log n).

The most common implementation of Maps is using an array and hash function. 


Differences between HashMap and Array
    1. Search on an array is O(n) while on a HashMap is O(1)
    2. Arrays can have duplicate values, while HashMap cannot have duplicated keys (but they can have identical values.)
    3. The Array has a key (index) that is always a number from 0 to max value, while in a HashMap, you have control of the key, and it can be whatever you want: number, string, or symbol.


   ***** The perfect hash function is the one that for every key, it assigns a unique index. *****
    Ideal hashing algorithms allow constant time access/lookup. However, it’s hard to achieve a perfect hashing function in practice. You might have the case where two different keys yields on the same index, causing a collision.

-> To implement a hash map, the HashMap constructor method will create an empty array that will hold values. A hashing function will return an index in the array where the value will be stored.

Ingredients of a HashMap
    1. Associated data we hope to preserve. 
    2. an array of fixed size to insert data into.
    3. a hash function that translates the keys of our array into indexes into the array 
    note the storage location at the index given by a hash is called the hash bucket

Compression: 
    -> Compression means taking some input and returning an output only within a specific range.

Strategies for resolving hash collisions 
    1. The separate chaining strategy avoids collisions by updating the underlying data structure. Instead of an array of values that are mapped to by hashes, it could be an array of linked lists! 

        -> A hash map with a linked list separate chaining strategy follows a similar flow to the hash maps that have been described so far. The user wants to assign a value to a key in the map. The hash map takes the key and transforms it into a hash code. The hash code is then converted into an index to an array using the modulus operation. If the value of the array at the hash function’s returned index is empty, a new linked list is created with the value as the first element of the linked list. If a linked list already exists at the address, append the value to the linked list given.

    2. A hash collision resolution strategy like separate chaining involves assigning two keys with the same hash to different parts of the underlying data structure. How do we know which values relate back to which keys? If the linked list at the array index given by the hash has multiple elements, they would be indistinguishable to someone with just the key.

    If we save both the key and the value, then we will be able to check against the saved key when we’re accessing data in a hash map. By saving the key with the value, we can avoid situations in which two keys have the same hash code where we might not be able to distinguish which value goes with a given key.


    https://dev.to/wdiep10/what-are-hashmaps-part-2-4eoh