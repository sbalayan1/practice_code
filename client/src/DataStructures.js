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