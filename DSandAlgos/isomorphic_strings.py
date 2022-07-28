# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

    # Example 1:

    # Input: s = "egg", t = "add"
    # Output: true

    # Example 2:

    # Input: s = "foo", t = "bar"
    # Output: false

def is_isomorphic(s, t):
    if len(s) != len(t): return False
    hash_s = {}
    hash_t = {}

    for i, j  in zip(s,t):
        if i not in hash_s and j not in hash_t:
            hash_s[i] = j
            hash_t[j] = i
        elif hash_s.get(i) != j or hash_t.get(j) != i:
            return False

    return True