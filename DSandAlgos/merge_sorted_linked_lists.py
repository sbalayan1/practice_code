# You are given the heads of two sorted linked lists list1 and list2.
# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
# Return the head of the merged linked list.


class ListNode: 
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
# recursive 
# Time Complexity: O(m+n)
# Space Complexity: O(m+n)
def merge_sorted_lists(self, list1, list2):
    if list1 is None: return list2
    if list2 is None: return list1

    # list1.val == list2.val => 
    # list1.val > list2.val
    # list2.val > list1.val

    if list1.val < list2.val:
        list1.next = self.merged_sorted_lists(list1.next, list2) 
        return list1 
        #since list1 is the smaller value, we want to continue with list1. list1 is the smallest value and is therefore our merged head. 
    else: #we can use else here becaue if list1 is not less than list2, we can safely assume that list1 is either greater than or equal to list2. 
        list2.next = self.merged_sorted_lists(list1, list2.next)
        return list2 



def merge_sorted_lists_iterative(list1, list2):
    merged = ListNode(0) #create an empty linkedlist so we can keep track of the merged list
    current = merged #current lets us traverse and update the merged list without losing track of its head

    # iterate over both lists as long as both are not None
    while list1 is not None and list2 is not None:
        if list1.val < list2.val:
            current.next = list1 #need to use current.next to append to the linkedlist and not just update
            list1 = list1.next 
        else:
            current.next = list2
            list2 = list2.next
        current = current.next

    current.next = list1 if list1 is not None else list2
    return merged.next
    