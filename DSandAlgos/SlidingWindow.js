// Given a string s, find the length of the longest substring without repeating characters.
    // Example 1:
    //     Input: s = "abcabcbb"
    //     Output: 3
    //     Explanation: The answer is "abc", with the length of 3.

    // Example 2:
    //     Input: s = "bbbbb"
    //     Output: 1
    //     Explanation: The answer is "b", with the length of 1.

    // Example 3:
    //     Input: s = "pwwkew"
    //     Output: 3
    //     Explanation: The answer is "wke", with the length of 3.
    
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


//Utilize a sliding window to keep track of the substring where windowStart denotes the the start of the substring and windowEnd denotes the end of the substring. I will utilize a hash to keep track of the string's characters and count how many times a certain character has appeared. Loop through the string and do the following at each iteration: 
    //If the character is a duplicate, increase the character's count and reset the substring's length to 1. If it's not a duplicate, add the new character to the hash with a value of 1, and increase the substring length by 1. Check whether max or the substring is larger and update max. 
//After we've iterated through the string, return the max variable

//Why this logic is problematic: 
    //Utilize a hash to keep track of the string's characters and count how many times a certain character has appeared.
    //If the character is a duplicate, increase the character's count and reset the substring's length to 1

let lengthOfLongestSubString1 = (s) => {
    let hash = {}, substr = 0, max = 0
    for (let i = 0; i<s.length; i++) {
        let currentStr = s[i]
        if (currentStr in hash) {
            hash[currentStr] += 1
            substr = 1
        } else {
            hash[currentStr] = 1
            substr += 1
        }

        max = Math.max(max, substr)
    }
    return max
}

    //179 / 987 test cases passed
    //Input: "dvdf"
    //Output: 2
    //Expected 3

var lengthOfLongestSubstring = function(s) {
    //store characters in hash. If the character is a duplicate, reset the hash?
    
    //when a duplicate string is found, you need to update the window and eliminate the duplicate string.
    let hash = {}, max = 0, currentWindow, windowStart = 0
    
    for (let i = 0; i<s.length; i++) {
        //set the current element to the windowEnd
        let windowEnd = s[i]
        
        //if the windowEnd is in the hash, move the windowStart. 
        if (windowEnd in hash) {
            windowStart ++
        } else {
            //add the windowEnd to the hash
            hash[windowEnd] = 1
        }
        
        //update the current window
        currentWindow = s.slice(windowStart, i+1)
        console.log(currentWindow)
        max = Math.max(currentWindow.length, max)
    }
 
    return max
};
//91/987 test cases passed
//input: "pwwkew"
//output: 4
//expected: 3


let lengthOfLongestSubStr = (str) => {
    let hash = {}, wStart = 0, max = 0

    for (let i; i<str.length; i++) {
        let wEnd = str[i]
        if (wEnd in hash) wStart = Math.max(wStart, hash[wEnd]+1)
        hash[wEnd] = i
        max = Math.max(max, i - wStart + 1)
    }

    return max
}