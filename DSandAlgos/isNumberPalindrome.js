// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

let isNumberPalindrome = (x) => {
    let reversed = 0, copyOfX = copyOfX
    while (copyOfX>0) {
        reversed = (reversed*10) + copyOfX%10
        copyOfX = Math.floor(x/10)
    }

    return reversed === x
}