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
//[1,2,3,4]
let productExceltSelf2 = (nums) => {
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
        
    }

}