//LIFO
//Main operations: PUSH and POP
    //push: adds an element to the top of the stack
    //pop: removes an element from the top of the stack
//applications:
    //reverse a word
    //undo mechanisms
    //syntax parsing
    //function call
    //expression conversion

//PUSH => push() method allows you to add one or more elements to the end of the array. The push() method returns the value of the length property that specifies the number of elements in the array.

//POP =>  removes the element at the end of the array and returns the element to the caller. If the array is empty, the pop() method returns undefined.


//Reverse a string using Javascript Stack

//input: "Hello"
let reverseString = (s) => {
    let stack = []
    for (let i = 0; i<s.length; i++) {
        stack.push(s[i])
    }

    //["H", "e", "l", "l", "o"]
    let reversed = ""
    while (stack.length>0) {
        reversed += stack.pop()
    }

    return reversed
}

