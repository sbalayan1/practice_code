// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined? null : next
}

function reverseInnerLinkedList(head, left, right) {
    let current = head, previous = null, start, end, i=0
    while (i<left-1) {
        previous = current
        current = current.next
        i++
    }

    let j = 0
    start = previous
    previous = null
    end = current
    while (current && j<right-left+1) {
        let next = current.next
        current.next = previous
        previous = current
        current = next
        j++
    }

    if (start) {
        start.next = previous
    } else {
        head = previous
    }

    end.next = current
    return head
}