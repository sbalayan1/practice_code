class ListNode:
    def init(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverse_linked_list(self, head=Optional[ListNode]) -> Optional[ListNode]:
        current, previous = head, None
        while current:
            next = current.next
            current.next = previous
            previous = current
            current = next

        
        return previous
