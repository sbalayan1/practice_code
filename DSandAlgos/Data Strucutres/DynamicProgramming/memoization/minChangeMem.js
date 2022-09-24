// Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

//minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible

// minChange(13, [1, 9, 5, 14, 30]); // -> 5

let minChange = (target, coins) => {
    if (target<0) return null
    if (target == 0) return []
    let smallest = null

    for (let coin of coins) {
        const coinCombo = minChange(target-coin, coins) //this will either return null or an array of coins
    
        if (coinCombo) {
            const result = [...coinCombo, coin]
            if (!smallest || smallest.length > result.length) {
                smallest = result 
                //if we change result, to result.length and try to store the length in the smallest variable, our return when we bubble up will become uniterable because we will be returning a number rather than an array of coins.
            }
        }

    }

    return smallest
}

console.log(minChange(8, [1, 5, 4, 12]).length)

//another way to do this more efficiently is by adjusting what we return. Instead of returning an array, we can return the number of elements within the array

let minChangeImproved = (target, coins) => {
    let result = minChangeRecursive(target, coins)
    return result === Infinity ? -1 : result
}

let minChangeRecursive = (target, coins, memo={}) => {
    if (target in memo) return memo[target]
    if (target < 0) return Infinity
    if (target == 0) return 0 //in the above we return an empty array. How many elements are in that array ? => 0

    let smallest = Infinity
    for (let coin of coins) {
        const coinCombo = minChangeRecursive(target-coin, coins, memo) + 1
        smallest = Math.min(smallest, coinCombo)
    }

    memo[target] = smallest
    return smallest
}

console.log(minChangeImproved(100, [1,2,5]))
m = target
n = coins.length
height = m

//brute force big o notation
time: O(n^m)
space: O(m)

//optimization using memoization
time: O(n*m)
space: O(m)


