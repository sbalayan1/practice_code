# Given the head of a singly linked list, return the middle node of the linked list.
# If there are two middle nodes, return the second middle node.


def middle_linked_list_brute(head):
    if not head.next: return head
    current = head
    length = 0
    while current:
        current = current.next
        length += 1

    length //= 2
    current = head
    while length > 0:
        current = current.next
        length -= 1
    return current

def middle_linked_list_two_pointer(head):
    fast = slow = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    return slow