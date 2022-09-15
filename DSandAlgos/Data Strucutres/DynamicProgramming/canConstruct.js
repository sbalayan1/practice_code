// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings

// The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array.

// You may reuse elements of the wordBank as many times as needed.


// Example 1
    canConstruct(abcdef, [ab, abc, cd, def, abcd]) //=> True (abc + def)

// Example 2
    canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) //=> False

//Example 3
    //interestingly, the easiest string to create is the empty string
    canConstruct('', [cat, dog, mouse]) //=> True

//Since we know our base case is an empty string and our wordBank doesn't change, we use our targetString as our root and now need to think about how we can transition and shrink our targetString to our base case

//NOTE we don't want to take out characters from the middle of the string because they create new adjacencies. This will impact the moves we take later on

//In the case of EXAMPLE 1, the common factor for branches cdef and def are that ab and abc are prefixes. 

//A prefix is a string that begins some other larger string

//Therefore the only other prefix we can take in our word bank in example 1, [ab, abc, cd, def, abcd] is ABCD

//The overall logic when we build this tree is to only branch to children when we have a matching prefix in our wordbank. The child will be the resulting string after we remove that prefix 

