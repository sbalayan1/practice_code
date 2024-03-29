// Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not.

//Solution using a stack
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

let isPalindromeUsingStack = (head) => {
    let current = head, stack = []
    while (current) {
        stack.push(current.val)
        current = current.next
    }

    while (head) {
        let endNode = stack.pop()
        if (endNode !== head.val) return false
        head = head.next
    }

    return true
}

let isNumberPalindrome = (x) => {
    let reversed = 0, copyOfX = x
    while (copyOfX>0) {
        reversed = (reversed*10) + copyOfX%10
        copyOfX = Math.floor(copyOfX/10)
    }

    return reversed === x
}

//Given the head of a singly linked list, return true if it is a palindrome.

var isPalindrome = function(head) {
    let stack = [], current = head
    while (current) {
        stack.push(current)
        current = current.next
    }
    
    while (head) {
        let item = stack.pop()
        if (item.val !== head.val) return false
        head = head.next
    }
    
    return true
};

//recursive way to create a copy of a linkedlist
let createCopy = (node) => {
    if (node === null) return node
    let newNode = new ListNode(node.val)
    newNode.next = createCopy(node.next)
    return newNode
}

