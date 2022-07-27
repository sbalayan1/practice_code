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


// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

//this solution takes advantage of the fact that the string will be reversed at the midpoint. So we don't need to iterate over the entire string. just up to the mid point. At each iteration, we save the target element into a variable, switch the current element into the target's place and the saved target into the current element's place.
let reverseStringInPlace = (s) => {
    let end = s.length
    for (let i = 0; i<Math.floor(s.length/2); i++) {
        let target = s[end - (i+1)]
        s[end - (i+1)] = s[i]
        s[i] = target
    }
}



