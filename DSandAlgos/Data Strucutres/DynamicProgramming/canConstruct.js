// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings

// The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array.

// You may reuse elements of the wordBank as many times as needed.


// Example 1
    // canConstruct(abcdef, [ab, abc, cd, def, abcd]) //=> True (abc + def)

// Example 2
    // canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) //=> False

//Example 3
    //interestingly, the easiest string to create is the empty string
    // canConstruct('', [cat, dog, mouse]) //=> True

//Since we know our base case is an empty string and our wordBank doesn't change, we use our targetString as our root and now need to think about how we can transition and shrink our targetString to our base case

//NOTE we don't want to take out characters from the middle of the string because they create new adjacencies. This will impact the moves we take later on

//In the case of EXAMPLE 1, the common factor for branches cdef and def are that ab and abc are prefixes. 

//A prefix is a string that begins some other larger string

//Therefore the only other prefix we can take in our word bank in example 1, [ab, abc, cd, def, abcd] is ABCD

//The overall logic when we build this tree is to only branch to children when we have a matching prefix in our wordbank. The child will be the resulting string after we remove that prefix 

let canConstructBruteForce = (target, wordBank) => {
    if (target.length == '') return true

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank) == true) return true //why can't we just return canConstruct(suffix, wordBank) ? If we simply return canConstruct, we're basically letting all branches return.
        }
    }

    return false
}

// m = target.length
// n = wordbank.length
//height of tree = m

// time: O((n^m)*m) => exponential
// space: O(m*m) => quadratic comes from storing each node in the worst case in the call stack as well as the maximal length of slicing the string. Each of your stack frames will need to store a string of length M basically.

//worst case scenario occurs when at each branch, we take a single prefixed character. Basically results in a tall tree with many steps. Therefore height of our tree is m because we'd have to remove m characters, one at a time to create the tree/targetString

//branching factor is dictated by the number of nodes in our wordBank

//slicing targetString can have a maximal length of m. Note this doesn't make it super slow. The exponential O(n^m) makes it slow af



let canConstructImproved = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target]
    if (target == '') return true

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const suffix = target.slice(word.length)

            if (canConstructImproved(suffix, wordBank, memo) == true) {
                memo[target] = true
                return true //whereever we have our recursive returns, store that value in your memo object
            }
        }
    }

    memo[target] = false
    return false
}

console.log(canConstructImproved('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']))

time: O(m^2 * n) //polynomial
space: O(m^2) //quadratic



