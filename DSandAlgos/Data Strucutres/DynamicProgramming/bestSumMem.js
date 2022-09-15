// Write a function bestSum(target, nums) that takes in a taretSum and an array of numbers as arguments

//The function should return an array containing the shortest combo of nums that add up to exactly the targetSum 

//if there are any ties, you can return any of the shortest

// bestSum(7, [5,3,4,7]) //=> [7]
// bestSum(8, [2,3,5]) //=> [3,5]

let bestSum = (target, nums) => {
    if (target<0) return null
    if (target==0) return []

    let smallest = null

    for (let num of nums) {
        let result = bestSum(target-num, nums)
        if (result) {
            let combo = [...result, num] //needed to think about what our output array is when this result is hit
            if (smallest == null || smallest.length > combo.length) smallest = combo
        }
    }

    return smallest
}


console.log(bestSum(8, [2,3,5])) //=> [3,5]
// console.log(bestSum(100, [1,2,5,25]))

// m = targetsum
// n = nums.length

// Time:O(n^m * m) => branching factor to the height power. We branch for each number in nums and the height will just be the targetSum so m. We also need to spread/do a linear operation in m for each of those n^m calls.

// Space: O(m*m) or O(m^2)


let bestSumImproved = (target, nums, memo={}) => {
    if (target in memo) return memo[target]
    if (target<0) return null //what do we want to return in this case? 
    if (target == 0) return [] //at the bottom of our tree, if we hit a node where target==0, it means we've found a path

    let smallest = null

    for (let num of nums) { //apply each num in nums to the current target
        let result = bestSumImproved(target-num, nums, memo) //will either return 0 or []
        if (result) { //in some cases, our bestSumImproved will return null, check if result is not null
            if (smallest == null || result.length < smallest.length) { 
                smallest = [...result, num]
            }
        }
    }

    memo[target] = smallest 
        //I need to memoize the target before I return it
        //note if we memoize inside of the for loop, we end up changing the stored array at memo[target]
    return smallest
}

console.log(bestSumImproved(100, [1, 5, 10, 15, 20, 25]))
