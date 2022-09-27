// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

    // Example 1:

    // Input: strs = ["flower","flow","flight"]
    // Output: "fl"

    // Example 2:

    // Input: strs = ["dog","racecar","car"]
    // Output: ""
    // Explanation: There is no common prefix among the input strings.

//use the first string in our array
//take the first element in our string and compare to other elements
//if the string is a prefix of all elements, continue,
//if not, return longestPrefix

var longestCommonPrefix = function(strings) {
    let longestPrefix = ""
    
    for (let i = 0; i<=strings[0].length; i++) {
        let prefix = strings[0].slice(0, i+1)
        
        for (let j=1; j<strings.length; j++) {
            let currStr = strings[j]
            if (currStr.indexOf(prefix) !== 0) return longestPrefix
        }
        
        longestPrefix = prefix
    }
    
    return longestPrefix
};
s = length of string[0]
n = length of strings
timeComplexity: O(s*(n-1)) 
=> In the worst case, we're given an array of the same strings. Therefore we need to iterate over every single letter in the first string. For each iteration we will have to do n-1 iterations over our strings array to compare the prefix to each string in strings.
=> slice in the worst case will have to make a copy of s, so technically our worst case time complexity is O(s^2 * (n-1))

spaceComplexity: O(s) => in the worst case we will have to store our entire string in the prefix variable