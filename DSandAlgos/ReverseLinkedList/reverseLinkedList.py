class ListNode:
    def init(self, val=0, next=None):
        self.val = val
        self.next = next

[1,2,3,4]

class Solution:

    # want the current node to point to the previous node
    # if the node we're on is None, exit the recursive call and return the node
    # otherwise continue the recursive call
        # in the recursive call, we should be updating the pointer to the previous node
        # and invoking the recursive call on the original list of nodes
    
    [1,2,3,4,None]
    [None, 4, 3, 2, 1]
    def reverse_linked_list_recursive(self, head):
        if not head or not head.next: return head
        previous = self.reverse_linked_list_recursive(head.next)
        head.next.next = head
        head.next = None

        return previous

    def reverse_linked_list_iterative(self, head=Optional[ListNode]) -> Optional[ListNode]:
        current, previous = head, None
        while current:
            next = current.next
            current.next = previous
            previous = current
            current = next

        
        return previous
