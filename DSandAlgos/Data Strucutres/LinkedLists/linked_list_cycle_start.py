def get_intersect(head):
    fast = slow = head
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next

        if slow == fast: return slow
    
    return None

def detect_cycle_start(head):
    if head is None: return None
    if get_intersect(head) is None: return None

    p1 = head
    p2 = get_intersect(head)
    while p1 != p2:
        p1 = p1.next
        p2 = p2.next
    
    return p1
