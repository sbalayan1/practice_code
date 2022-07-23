//Given a string s, find the length of the longest substring without repeating characters.

//Example 1:
    // Input: s = "abcabcbb"
    // Output: 3
    // Explanation: The answer is "abc", with the length of 3.
    
// Example 2:
    // Input: s = "bbbbb"
    // Output: 1
    // Explanation: The answer is "b", with the length of 1.

// Example 3:

    // Input: s = "pwwkew"
    // Output: 3
    // Explanation: The answer is "wke", with the length of 3.
    
//Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    //store characters in hash. If the character is a duplicate, reset the hash?
    let hash = {}, max = 0, substr = []
    
    for (let i = 0; i<s.length; i++) {
        if (s[i] in hash) {
            hash = {}
            hash[s[i]] = 1
            substr = [s[i]]
        } else {
            hash[s[i]] = 1
            substr.push(s[i])
        }
        
        console.log(hash, substr)
        max = Math.max(substr.length, max)       
    }
 
    return max
};

var lengthOfLongestSubstring = function(s) {
    //store characters in a hash. if the character is in the hash, add 1. if not, add the key with a value of 1. 
    let hash = {}
    
    //used to keep track of the substr length. initialize at 0 so that we can add to the substr when the str is unique. 
        //when the character is new, add + 1
        //when the character is not new, reset the value to 1
    //at each iteration, check the substr against the max value. 
    let substrLength = 0, max = 0

                                         
    for (let i = 0; i<s.length; i++) {
        if (s[i] in hash) {
            hash[s[i]] += 1
            substrLength = 1
        } else {
            hash[s[i]] = 1
            substrLength += 1
        }
        max = substrLength > max ? substrLength : max
        
    }
    
    return max

};

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

//input: "pwwkew"
//output: 4
//expected: 3


let lengthOfLongestSubStr = (str) => {
    //potential cases
        //abcbac => algorithm finds a duplicate two or more elements away
        //bbbbb => the string is 1 character
        //pwwkew => the current and previous letter are duplicates 
        //dvdf => the duplicates are separated between 1 letter
        //"" => the string has no characters

    //use a hash to store the indexes of the current substr. If a letter is already in the string, shrink the window by moving the window's starting point. 
    let hash = {}, wStart = 0, max = 0

    for (let i; i<str.length; i++) {
        let wEnd = str[i]

        if (wEnd in hash) {
            wStart = Math.max(wStart, hash[wEnd]+1)
        }

        hash[wEnd] = i
        max = Math.max(max, i - wStart + 1)
    }

    return max
}