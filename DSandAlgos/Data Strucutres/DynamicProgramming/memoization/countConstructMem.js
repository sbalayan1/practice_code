// write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.

// the function should return the number of ways that the target can be constructed by cocatenating elements of the wordBank array

// You may reuse elemts of the wordBank as many times as needed

// Example 1
    // countConstruct(abcdef, [ab, abc, cd, def, abcd]) //=> 1


let countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target]
    if (target == '') return 1
    let totalCount = 0

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const suffix = target.slice(word.length)
            totalCount += countConstruct(suffix, wordBank, memo)
        }
    }

    memo[target] = totalCount
    return totalCount
}


console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']))


m = target.length
n = nums.length
time: O(n*m^2)
space: O(m^2)

