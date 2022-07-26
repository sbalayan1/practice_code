// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// ex. 
//     Input: l1 = [2,4,3], l2 = [5,6,4]
//     Output: [7,0,8]
//     Explanation: 342 + 465 = 807.


var addTwoNumbers = function(l1, l2) {
    let c1 = l1, c2 = l2
    let combined = new ListNode(), cCombined = combined
    
    while (c1 || c2) {
        let sum = cCombined.val
        if (c1) {
            sum += c1.val
            c1 = c1.next
        }
        
        if (c2) {
            sum += c2.val
            c2 = c2.next
        }
        
        let carryover = Math.floor(sum/10)
        cCombined.val = sum % 10
        if (carryover > 0 || c1 || c2) cCombined.next = new ListNode(carryover)
        cCombined = cCombined.next  
    }
    return combined
};