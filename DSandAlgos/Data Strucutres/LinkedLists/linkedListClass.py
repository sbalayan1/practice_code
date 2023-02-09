class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next_node = next_node

class LinkedList:
    def __init__(self, node = None):
        self.head = node

    def append(self, node):
        #adds a new node to the linked list  
        if self.head == None: 
            self.head = node

        curr = head
        while curr.next_node:
            curr = curr.next_node
        
        curr.next_node = node