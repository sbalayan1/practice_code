//Linked lists
    // -> sequence of elements where each element links the next element which links the next element
    // -> can contain any type of data, sorted/unsorted, duplicates/unique
    // -> shares many of the same properties of an array
    // -> linear data structure 
    // -> ordered collection of data
    // -> elements or nodes in a linked list are not stored in sequential memory locations like in an array.
    // -> instead the elements are linked together using a pointer 
    // -> first element in a linked list is a head 
    // -> last element in a linked list is a tail (has a reference to null)

    // Each element within a linked list contains the following: 
    //     -> data
    //     -> pointer which references the next element or node in the list

//Differences from an array 
    // -> array elements are indexed ex. a[3]
    // -> In a linked list, need to start at head and work your way to the a[3] or the 4th element. 
    // -> Linear time and is a lot slower than an array in this regard 

// Advantage of a linked list 
    // -> insert and delete from the beginning of a linked list can be done in constant time 
    // -> O(1) prepend
    // -> O(n) append 

//Doubly Linked List 
    // -> sequence of elements where each element links the next element which links the next element
    // -> each element also links to the previous element
    // ex. 1 -> 5 -> 9 -> 12 -> 19 && 1 <- 5 <- 9 <- 12 -< 19

//Implement Linked List 
    // Ex. 
    const n1 = {
        data: 100
    }

    const n2 = {
        data: 200
    }

    // reference node 2 from node 1
    n1.next = n2 



//Practice
    //methods needed:
        //insertFirst()
        //insertLast()
        //insertAt()
        //getAt()
        //removeAt()
        //clear()
        //print()

class ListNode {
    constructor(val=0, next=null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        //need to place a new node in front of the old linkedList, update the head, and increment size
        this.head = new ListNode(data, this.head)
        this.size ++
    }

    insertLast(data) {
        if (this.head == null) {
            this.head = new ListNode(data) //if the head is empty, insert at front
        } else {
            let node = new ListNode(data), current = this.head
            while(current.next) { //iterate to the end of the linkedlist
                current = current.next 
            }
            current.next = node //update the end node
        }
        this.size ++
    }

    //index doesn't exist? index is greater than the length of the linked list or the index is less than 0. 
    insertAt(data, index) {
        if (index === 0) this.insertFirst(data)
        if (index >= this.size) this.insertLast(data)
        let current = this.head, i = 0
        while (i<index - 1) {//iterate to index - 1. If we create a new node at that spot, the inserted node becomes the target index and the node at index becomes index + 1
            current = current.next 
            i++
        }
        current.next = new ListNode(data, current.next)
        this.size++

    }

    //cases => 
        //if index === 0, you are removing the head
        //
    getAt(index) {
        if (index > this.size) return
        let count = 0, current = this.head
        while (count<index) {
            current = current.next
            count ++
        }
        
        return current
    }

    // [1,2,3,4,5]
    // index = 2
        //count iterates to a value of 1. This is a value of 2 in the above linkedList
        //Update the the pointer to the next value 
    removeAt(index) {
        if (index > this.size || !this.head) return
        if (index == 0) {
            this.head = this.head.next
        } else {
            let count = 0, current = this.head
            while (count < index-1) {
                current = current.next
                count ++
            }

            current.next = current.next.next
        }

        this.size --
    }
    clear() {}
    print() {}
}

let linkedList = new LinkedList()
linkedList.insertFirst(10)
linkedList.insertLast(1)
for (let i = 50; i<55; i++) {
    linkedList.insertAt(i,1)
}



