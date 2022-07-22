// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. The array is not sorted

 

// Example 1:
    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

    // Input: nums = [3,2,4], target = 6
    // Output: [1,2]
// Example 3:

    // Input: nums = [3,3], target = 6
    // Output: [0,1]
 

//Constraints:

    // 2 <= nums.length <= 104
    // -109 <= nums[i] <= 109
    // -109 <= target <= 109
    // Only one valid answer exists.

var twoSum = function(nums, target) {
    //create an empty object
    let obj={}

    //iterate over nums array O(n)
    for (let i = 0; i<nums.length; i++) {
        //create a property for each element set to the element's index
        obj[nums[i]] = i
    }

    //iterate over nums array O(n)
    for(let i = 0; i<nums.length; i++) {
        //find the difference between the current element and the target
        let diff = target - nums[i]

        //if the diff exists in obj and is not the same index as the current element. return the two indexes. 
        if (obj[diff] && obj[diff] !== i) {
            return [obj[diff], i]
        }
    }

    return []
};


//twoSum revised
let twoSum2 = (nums, target) => {
    let hash = {}

    //the below improves the speed so that you don't have to iterate through the entire list to create the hash. Instead we create the hash and check for matching pairs at the same time.
    for (let i = 0; i<nums.length; i++) {
        let diff = target - nums[i]
        if (diff in hash && hash[diff] !== i) return [hash[diff], i]
        hash[nums[i]] = i
    }

    return []
}

//twoSum using twoPointer => note this doesn't work in all cases on leetcode. The issue is that the nums array is not sorted. One solution could be utilizing a hash to save the indexes of the original nums array, sorting the array, and when a match is found returning the indexes of the original array by doing [hash[nums[left]], hash[nums[right]]]. This is problematic though because if it's an array of identical values like [3,3,3], the hashing maps to a single key.
let twoSum3 = (nums, target) => {
    let left = nums[0], right = nums.length - 1
    while (left < right) {
        let currentSum = nums[left] + nums[right]
        if (currentSum === target) return [left, right]
        currentSum < target ? left++ : right--
    }
}