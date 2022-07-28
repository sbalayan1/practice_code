class ListNode:
    def init(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverse_linked_list_recursive(self, head):


        return self.reverse_linked_list_recursive(head)

    def reverse_linked_list_iterative(self, head=Optional[ListNode]) -> Optional[ListNode]:
        current, previous = head, None
        while current:
            next = current.next
            current.next = previous
            previous = current
            current = next

        
        return previous
