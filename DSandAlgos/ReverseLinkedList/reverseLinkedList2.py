from contextlib import nullcontext


class ListNode:
    def init(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverse_linked_list_2(self, head= Optional[ListNode], left= int, right= int)->Optional[ListNode]:
        i, current, previous, start, end = 0, head, None, None, None

        while i<left-1:
            previous = current
            current = current.next
            i+=1

        j = 0
        start = previous
        previous = None
        end = current

        while current and j<right-left+1:
            next = current.next
            current.next = previous
            previous = current
            current = next
            j+=1
        
        if start != None:
            start.next = previous
        else:
            head = previous

        end.next = current
        return head