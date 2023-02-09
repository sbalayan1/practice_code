class Node:
    def __init__(self, value):
        self.value = value
        self.next_node = None

class LinkedList:
    def __init__(self, node = None):
        self.head = node

    def append(self, node):
        #adds a new node to the linked list  
        if self.head == None: 
            self.head = node
            return

        curr = self.head
        while curr.next_node:
            curr = curr.next_node
        
        curr.next_node = node

    def print_values(self):
        curr = self.head
        while curr:
            print(curr.value)
            curr = curr.next_node

    def reverse(self):
        if self.head is None: return

        curr = self.head
        prev = None

        while curr:
            nxt = curr.next_node
            curr.next_node = prev
            prev = curr
            curr = nxt
        
        self.head = prev
        self.print_values()


linkedList = LinkedList()
nodes = [Node(1), Node(2), Node(3), Node(4)]
for node in nodes: linkedList.append(node)
linkedList.reverse()