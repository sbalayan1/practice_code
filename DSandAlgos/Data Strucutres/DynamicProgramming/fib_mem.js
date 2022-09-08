// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous two numbers.

// Solve this recursively.

// example
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]


const fib = (n) => {
    if (n <= 2) return 1
    return fib(n-1) + fib(n-2) 
    //note the baked in recursive nature of the fib is that the current number is equal to the sum of the previous two numbers in the sequence
}

// console.log(fib(0)); // -> 0
// console.log(fib(2)); // -> 1
// console.log(fib(3)); // -> 2
// console.log(fib(5)); // -> 5
// console.log(fib(35)); // -> 9227465

    //the above doesn't work for larger values of n

    //fib(n-1) => O(2^n)
    //fib(n-2) => O(2^n)

    // time complexity: O(2^n) 
    // space complexity: O(n)

    //bottleneck here is really coming from the number of recursive calls i have to make. 

    //to fix, when we calculate a fib number, we should save it so that if we encounter the same fib number, we don't have to travel down another recursive tree rooted at that number

    //here we will use memoization
        //memoization is like a reminder
        //generally we'll use a hashmap or object

        //keys will be the args of our function
        //value will be the return value

let improved_fib = (n, memo={}) => {
    //check to see if n is in our memo
    if (n in memo) return memo[n]
    if (n==0) return 0
    if (n <= 2) return 1
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
}

console.log(improved_fib(0))
    

const foo = (n) => {
    if (n<=1) return
    foo(n-1)
}

    // time: O(n)
    // space: O(n)

const bar = (n) => {
    if (n<=1) return
    foo(n-2)
}

    //the above moves twice as fast and can be read as O(n/2) and since we remove any constant, our time complexity is O(n)

// time: O(n) 
// space: O(n)

    // Note the above functions both run in O(n) time and space.

const dib = (n) => {
    if (n<=1) return
    dib(n-1)
    dib(n-1)
}

    // height or the distance from the root to the farthest leaf is equal to n

    //to get the number of nodes in a level, I need to multiply the current level's number of nodes by 2
    // ex. 
    //     level 1 => 1 node
    //     level 2 => 2 nodes
    //     level 3 => 4 nodes
    //     level 4 => 8 nodes


    //this ultimately looks like (1*2*2*2...) where the number of times we multiply by 2 is equal to n

    //that being said, to get the number of recursive calls the above function would make, we would just take 2 and multiply it by itself n times over 

    // or in short => (2^n)


    //time complexity: (2^n)
    //space complexity: O(height of tree or n)


const lib = (n) => {
    if (n<=1) return
    lib(n-2)
    lib(n-2)
}

    // lib => creates a tree that has a height of n/2
    //therefore time complexity is O(2^n/2) because from one level to the next, we double the number of nodes. This is done for the number of levels. In this case, the number of levels is n/2. 

    //This gets simplified to O(2^n)

    // time: O(2^n/2)
    // space: O(n/2) => simplified to O(n)
