// Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments

// The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, return null

//if there are multiple combos, you may return any single one


// howSum(7, [5,3,4,7]) //=> [7]
// howSum(8, [2,3,5]) //=> [2,2,2,2], [3,5]
// howSum(7, [2,4]) //=> null
// howSum(0, [1,2,3]) //=> null

let howSum = (target, nums) => {
    if (target < 0) return null
    if (target == 0) return []
    let output = []
    for (let num of nums) {
        const result = howSum(target-num, nums)
        if (result) {
            return [...result, num] //this early return is basically what let's us bubble up and add the current num to our result
        } 
    }

    return null
}

// console.log(howSum(300, [7,14]))
// m = targetSum
// n = nums.length
// time: O((n^m)*m)
// space: O(m)


let howSumImproved = (target, nums, memo={}) => {
    if (target in memo) return memo[target]
    if (target < 0) return null
    if (target == 0) return []

    for (let num of nums) {
        let remainder = target-num
        let result = howSumImproved(remainder, nums, memo)
        if (result) {
            memo[target] = [...result, num] //copying over the contents of the array adds to our time complexity. In the worst case, we will need to copy over an array that is m elements long. Thus this operation is O(m)
            return memo[target]
        }  
        
    }

    memo[target] = null
    return null
}

console.log(howSumImproved(300, [7,14]))

time: O(n*m^2) or O(n*m) //polynomial time complexity
space: O(m^2) or O(m*m) //your space is taken up by the memo object. At most, your memo object will have m keys with at worst an array of m elements

