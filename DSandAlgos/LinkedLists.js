// represents each individual node. when we want to create one of these nodes, we just instantiate the class
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

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// ex. 
//     Input: l1 = [2,4,3], l2 = [5,6,4]
//     Output: [7,0,8]
//     Explanation: 342 + 465 = 807.

