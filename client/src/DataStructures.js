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


// Hash Table -> https://www.youtube.com/watch?v=UOxTMOCTEZk

// turns string into an integer between 0 and 65535 representing the UTF-16 code unit at the given index. This int is used as the index for our hashTable. 
let hashStringToInt = (s, tableSize) => {
    let hash = 13
    for (let i = 0; i<s.length; s++) {
        hash = (17*hash*s.charCodeAt(i)) % tableSize
    }

    return hash
}

class HashTable {
    table = new Array(3)
    numItems = 0

    resize = () => {
        let newTable = new Array(this.table.length * 2)

        this.table.forEach(i => {
            if(i) {
                i.forEach(([key,value]) => {
                    let index = hashStringToInt(key, newTable.length)
                    if (newTable[index]) {
                        newTable[index].push([key,value])
                    } else {
                        newTable[index] = [[key, value]]
                    }
                })
            }
        })

        this.table = newTable
    }

    setItem = (key, value) => {
        this.numItems ++
        let loadFactor = this.numItems/this.table.length

        if (loadFactor > 0.8) {
            this.resize()
        }
        
        let index = hashStringToInt(key, this.table.length)

        if (this.table[index]) {
            this.table[index].push([key,value])
        } else {
            this.table[index] = [[key,value]]
        }
    }

    getItem = (key) => {
        let index = hashStringToInt(key, this.table.length)
        if (!this.table[index]) {
            return null
        } else {
            return this.table[index].find(x => x[0] === key)[1]
        }
    }
}

Linked lists
    -> sequence of elements where each element links the next element which links the next element
    -> can contain any type of data, sorted/unsorted, duplicates/unique
    -> shares many of the same properties of an array
    -> linear data structure 
    -> ordered collection of data
    -> elements or nodes in a linked list are not stored in sequential memory locations like in an array.
    -> instead the elements are linked together using a pointer 
    -> first element in a linked list is a head 
    -> last element in a linked list is a tail (has a reference to null)

    Each element within a linked list contains the following: 
        -> data
        -> pointer which references the next element or node in the list

Differences from an array 
    -> array elements are indexed ex. a[3]
    -> In a linked list, need to start at head and work your way to the a[3] or the 4th element. 
    -> Linear time and is a lot slower than an array in this regard 

Advantage of a linked list 
    -> insert and delete from the beginning of a linked list can be done in constant time 
    -> O(1) prepend
    -> O(n) append 

Doubly Linked List 
    -> sequence of elements where each element links the next element which links the next element
    -> each element also links to the previous element
    ex. 1 -> 5 -> 9 -> 12 -> 19 && 1 <- 5 <- 9 <- 12 -< 19

Implement Linked List 
Ex. 
    const n1 = {
        data: 100
    }

    const n2 = {
        data: 200
    }

    // reference node 2 from node 1
    n1.next = n2 

// represents each individual node. wen we want to create one of these nodes, we just instantiate the class
class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100)
console.log(n1)

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node

    insertFirst(data) {
        // this.head is passed as the NEXT value so that  if the head value already exists, that value gets pushed forward and the new head is inserted. 
        this.head = new Node(data, this.head)
        this.size ++
    }

    // insert last node

    insertLast(data) {
        let node = new Node(data)
        let current;
        
        // could also do !this.head
        // handles the case where there is no node. basically if empty, make head 
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head

            // current.next ensures that there is a next value and you are not at the end of the list
            while(current.next) {
                // allows us to traverse the list 
                current = current.next
            }

            // adds the end node 
            current.next = node
        }
        this.size ++
    }

    // insert at index

    insertAt(data, index) {
        // handles edge cases where the index doesn't exist or the index is too big. Basically if index is out of range. 
        if (index>0 && index>this.size) {
            return;
        }

        // handles case where the index is the head
        if (index === 0) {
            this.head = new Node(data, this.head)
            return;
            // you could also do this.insertFirst(data)
        }

        // handles all other cases
        const node = new Node(data)
        let current, previous; 

        // set current to first
        current = this.head 
        let count = 0
        
        // basically makes room for new element/node
        while (count < index) {
            previous = current //Node before index that we want to insert
            count ++ 
            current = current.next //Node after index that we want to insert 
        }

        node.next = current 
        previous.next = node;

        this.size ++
    }

    // get at index 
    getAt(index) {
        let current = this.head
        let count = 0

        while (current) {
            if (count == index) {
                console.log(current.data)
            }

            count ++ 
            current = current.next
        }

        return null
    }

    // remove at index
    removeAt(index) {
        if (index > 0 || index > this.size) {
            return 
        }

        let previous
        let count = 0

        if (index === 0) {
            this.head = current.next
        } else if (index === this.size) {
            while (count < index) {
                previous = current
                current = current.next
            }

            previous.next = null

        } else {
            while(count < index) {
                previous = current
                current = current.next
            }

            previous.next = current.next
        }
        this.size --
    }

    // clear list 
    clearList() {
        this.head = null
        this.size = 0
    }

    // print list data
    printListData() {
        let current = this.head

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

// testing
const ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500, 2)
ll.getAt(2)

ll.printListData();

