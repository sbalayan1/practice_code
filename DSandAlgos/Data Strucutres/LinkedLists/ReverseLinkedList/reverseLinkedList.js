// * function ListNode(val, next) {
//     *     this.val = (val===undefined ? 0 : val)
//     *     this.next = (next===undefined ? null : next)
//     * }


class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function reverseLinkedList(head) {
    let current = head, previous = null
    while (current) {
        let next = current.next
        current.next = previous
        previous = current
        current = next
    }

    return previous
}