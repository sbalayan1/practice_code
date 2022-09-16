// write a function allConstruct(target, wordBank) that accepts a target string and an array of strings

//The function should return a 2d array containing all the ways that the target can be constructed by cocatenating elements of the wordBank array. Each element should represent one combination that constructs target

// allConstruct(purple, [purp, p, ur, le, purpl])
//=> [[purp, le], [p, ur, p, le]]


// allConstruct(hello, [cat, dog, mouse])
//=> []

// allConstruct('', [cat, dog, mouse])
//=> [[]]


let allConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target]
    if (target == '') return [[]]

    const result = []

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const suffix = target.slice(word.length)
            const suffixCombos = allConstruct(suffix, wordBank, memo) //ask yourself, what should we get back from allConstruct(suffix, wordBank, memo)?
                //either it returns an array of all the ways to make the suffix
                //or it returns an empty array

            //Now that we have the suffix combos, we need to figure out how to make the original target.

            //To do this, we take each suffixCombo and add the current word to the front of the combo

            const targetCombos = suffixCombos.map(combo => [word, ...combo])

            //basically we are taking each subarray and inserting our current word into each subarray and returning the updated array

            //note targetCombos only gives us an array of combos for the given word. We need to store all the combos for the words in our wordBank.
            result.push(...targetCombos)
            //we spread targetCombos before we push into the result array because it prevents us from nesting too deep and creating a 3d array
        }
    }

    memo[target] = result
    return result
}

console.log(allConstruct("purple", ["purp", "p", "ur", 'le', "purpl"])) //=> [[purp, le], [p, ur, p, le]]
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']))

m = target.length
n = wordBank.length
height = m
branchingFactor = n //multiply the number of nodes by n

// time: O(n^m) 
    //this means we have O(n^m) leaves and O(n^m) target combinations. This therefore means that we must need O(n^m) subarrays stored in our output

    //Ultimately, we can't do any better than exponential here

// space: O(m) //height of the recursion tree
    //output is very large. usually we don't include the size of the result into our space complexity. If we did, our space complexity would be exponential as well. 

//note optimizing this doesn't actually affect the true Big O worst case. The reason here is because line 48 is not the worst case scenario.
//The worst case scenario is when you have to create a massive subarray. For example allConstruct('eeeeeeeeeeeeeeeeeeeee', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']) would be the worst case because we have to create every single combination.