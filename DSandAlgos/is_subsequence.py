# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

    # Example 1:
    # Input: s = "abc", t = "ahbgdc"
    # Output: true

    # Example 2:
    # Input: s = "axc", t = "ahbgdc"
    # Output: false

# recursive approach

def is_subsequence_recursive(s, t):
    def recursive(left, right):
        if left == len(s): return True
        if right == len(t): return False
        if s[left] == t[right]:
            left += 1
        right += 1

        return recursive(left, right)
    
    return recursive(0, 0)

# Time Complexity: O(T) => in the worst case, you traverse the entire string T. 
# Space Complexity: O(T) => in the worst case, the recursion happens T times. Recursion incurs some memory in the call stack. 


# iterative approach

def is_subsequence_iterative_two_pointer(s, t):
    left_bound, right_bound = len(s), len(t)
    left = right = 0
    while left<left_bound and right<right_bound:
        if s[left] == t[right]:
            left += 1
        right += 1
    
    return left == len(s)

# Time complexity: O(T) => worst case you need to scan the entire target string
# Space Complexity: O(1) => regardless of the input, constant memory is consumed