import collections
# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

    # Example 1:
    # Input: s = "abccccdd"
    # Output: 7
    # Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

    # Example 2:
    # Input: s = "a"
    # Output: 1
    # Explanation: The longest palindrome that can be built is "a", whose length is 1.


#a string is a palindrome when it is all 1 character or when all but one unique character is pairable
class Solution:
    def longest_palindrome_broken_down(self, str):
        if len(str) == 0: return 1
        hash, ans = {}, 0

        # map the string counts to a hash
        for i in str:
            hash[i] = hash[i] + 1 if i in hash else 1
        

        # we add to the answer variable, the number of letters needed to create the max possible pairs for a given letter. In aaa for instance, the max possible pairs is 1. Therefore we add 2 letters to the ans. 
        for v in hash.values():
            ans += v//2 * 2
        
        # if the answer is less than strings length then we can only use 1 extra unique character. if it is not less than the string, we can either return the length of the string or the ans. Either way, the entire string is a palindrome. 
        return ans + 1 if ans < len(str) else ans


    def longest_palindrome_elegant(self, str):
        if len(str) == 0: return 1
        ans = 0

        for v in collections.Counter(str).values():
            ans += v//2 * 2
        
        return ans+1 if ans < len(str) else ans
