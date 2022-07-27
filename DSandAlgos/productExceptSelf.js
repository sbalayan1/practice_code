//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.

//Example 
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

//Brute Force Method

let productExceptSelf = (nums) => {
    let array = []
    for (let i = 0; i<nums.length; i++) {
        let product = 1
        for (let j = 0; j<nums.length; j++) {
            if (j==0) continue
            product *= nums[j]
        }

        array.push(product)
    }
    return array
}

//Solution using extra space
    //input: [1,2,3,4]
    //the below takes advantage of the fact that the products of each number involve all numbers left and right of i. Left is denoted by i-1 and right i+1. 
    //Knowing this, we can write an algorithm that uses three separate loops and three arrays. One loop to calculate all of the products left of the current index and another loop to calculate all of the products right of the current index.
    //After we've iterated found the products of the left and right, we can iterate over the nums list and multiply left[i] by right[i]

    //Time Complexity: O(n)
    //Space Complexity: O(n)
let productExceptSelf2 = (nums) => {
    let left = [], right = [], product = []
    left[0] = 1
    for (let i = 1; i<nums.length; i++) {
        left[i] = left[i-1] * nums[i-1] 
        // => left[1] = 1 * 1 = 1
        // => left[2] = 1 * 2 = 2
        // => left[3] = 2 * 3 = 6
        // left = [1, 1, 2, 6]
    }

    right[nums.length-1] = 1
    for (let i = nums.length-2; i>=0; i--) {
        right[i] = right[i+1] * nums[i+1]
        // => right[2] = 1 * 4 = 4
        // => right[1] = 4 * 3 = 12
        // => right[0] = 12 * 2 = 24
        // right = [24, 12, 4, 1]
    }

    for (let i = 0; i<nums.length; i++) {
        product[i] = left[i] * right[i]
    }

    return product
}

//The below solves the problem in O(n) time and O(1) space complexity by reducing the number of arrays used to 1 and updating the right variable and the answer array as we iterate from right to left. 
let productExceptSelfEfficient = (nums) => {
    let answer = [], right = 1
    answer[0] = 1
    for (let i = 1; i<nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
    }

    for (let i = nums.length-2; i>=0; i--) {
        right *= nums[i+1]
        answer[i] *= right
    }
    return answer
}