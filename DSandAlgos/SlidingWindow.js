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

let lengthOfLongestSubstring = (s) => {
    let hash = {}, windowStart = 0, max = 0
    for (let i = 0; i<s.length; i++) {
        let windowEnd = s[i]
        while (windowEnd in hash) {
            hash[windowEnd] === 0 ? delete hash[windowEnd] : hash[windowEnd] --
            windowStart ++
        }
        
        hash[windowEnd] = 1
        max = Math.max(max, i - windowStart + 1)
    }
    
    return max
}


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