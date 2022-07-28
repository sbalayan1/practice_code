//FIFO
    //A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.
    // [1,2,3,4,5,6] => [2,3,4,5,6,7]

//Applications

//The two main operations of a queue:
    //enqueue => insert element at the end of the queue
    //dequeue => remove element from the front of the queue
    //peek => take a look at the first element in the queue


//Priority Queue
    //special type of queue where each element is associated with a priority and is served according to their priority. If two elements have the same priority, then they will be served by their order in the queue. 

//Deque
    //is a queue where insertion and removal can be performed from the front or rear. 


class Queue1 {

    //initialize the object that stores the elements and two variables to track the head and tail.
    constructor() {
        this.elements = {}
        this.head = 0
        this.tail = 0
    }


    isEmpty() {
        return this.elements[this.head] == null
    }

    peek() {
        return this.elements[this.head]
    }
    
    //add element to the end of the queue
    //cases
    add(data) {
        this.elements[this.tail] = data
        this.tail++
    }

    //remove element from front of the queue and return the item
    //cases
        //there is no head, do nothing
    remove() {
        if (this.elements[this.head]) {
            let item = this.elements[this.head] //save the target in a variable
            delete this.elements[this.head]
            this.head++
            return item
        }

        return "empty"
    }

    get length() {
        return this.tail - this.head
    }
}

//practice implementing Queue
    //methods we need
        //add(data)
        //remove()
        //peek()
        //isEmpty()
        //get length()
class Queue2 {
    constructor() {
        this.elements = {}
        this.head = 0
        this.tail = 0
    }

    add(data) {
        this.elements[this.tail] = data
        this.tail ++
    }

    remove() {
        let item = this.elements[this.head]
        delete this.elements[this.head]
        this.head ++
        return item
    }

    peek() {
        return this.elements[this.head]
    }

    isEmpty() {
        return this.elements[this.head] == null
    }

    get length() {
        return this.tail - this.head
    }
}

//practice 3
class Queue3 {
    constructor() {
        this.elements = {}
        this.head = 0
        this.tail = 0
    }

    add(data) {
        this.elements[this.tail] = data
        this.tail ++
    }
    remove() {
        let item = this.elements[this.head]
        delete this.elements[this.head]
        this.head ++
        return item
    }
    peek() {
        return this.elements[this.head]
    }

    isEmpty() {
        return !this.elements[this.head] 
    }

    get length(){
        return this.tail - this.head
    }
}

let queue = new Queue3()
for (let i = 1; i<10; i++) {
    queue.add(i)
}

for (let i = 0; i<5; i++) {
    queue.remove()
}
console.log(queue.peek()) //=> 6
console.log(queue.length) //=> 4
