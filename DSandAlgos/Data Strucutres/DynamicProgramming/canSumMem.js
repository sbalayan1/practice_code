// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.



let sumPossible = (amt, arr) => {
    if (amt < 0) return false
    if (amt == 0) return true

    for (let n of arr) {
        if (sumPossible (amt-n, arr) == 1) return true 
    }

    return false
}

// m = targetSum
// n = array length
// time: O(m^n)
// space: O(m)

console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4
console.log(sumPossible(15, [6, 2, 10, 19])); // -> false
console.log(sumPossible(13, [6, 2, 1])); // -> true
console.log(sumPossible(103, [6, 20, 1])); // -> true

let sumPossibleRecursive = (amt, arr) => {
    if (amt < 0) return false
    if (amt == 0) return true

    for (let n of arr) {
        if (sumPossibleRecursive(amt-n, arr) == 1) return true 
    }

    return false
}


const sumPossible_improved = (amt, nums, memo={}) => {
    if (amt in memo) return memo[amt]
    if (amt<0) return false
    if (amt==0) return true
  
    for (let num of nums) {
      memo[amt] = sumPossible(amt-num, nums, memo)
      if (sumPossible(amt-num, nums, memo) == true) return true
    }
    
    return false
  };

// m = targetSum
// n = array length
// time:O(m*n)
// space:(m)


// console.log(sumPossibleRecursive(8, [5, 12]))
// n = 5
//     sumPossibleRecursive(3, [5,12]) //=> returns 0
//         n = 3
//             sumPossibleRecursive(-2, [5,12]) //=> returns 0
        
//             sumPossibleRecursive(-9, [5,12]) //=> returns 0 

// n = 12
//     sumPossibleRecursive(-4, [5,12]) //=> returns 0

