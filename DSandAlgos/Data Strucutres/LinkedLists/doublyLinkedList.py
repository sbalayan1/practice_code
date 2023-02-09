class Node:
    def __init__(self, value=None):
        self.value = value 
        self.prev_node = None
        self.next_node = None

class DoublyLinkedList:
    def __init__(self, head = None):
        self.head = head
        self.size = 1 if head is not None else 0

    def append(self, node):
        if self.head is None:
            self.head = node
            self.size += 1
            return
        
        curr = self.head
        while curr.next_node:
            curr = curr.next_node

        node.prev_node = curr
        curr.next_node = node
        self.size += 1

    def print_values(self):
        curr = self.head
        while curr:
            print(curr.value)
            curr = curr.next_node

    def print_in_reverse(self):
        curr = self.head
        while curr.next_node:
            curr = curr.next_node
        
        while curr:
            print(curr.value)
            curr = curr.prev_node

    def size(self):
        return self.size

    def reverse(self):
        if self.size < 2: return self.head
        curr = self.head
        new_head = None

        while curr:
            new_head = curr.prev_node 
            curr.prev_node = curr.next_node
            curr.next_node = new_head
            curr = curr.prev_node

        self.head = new_head.prev_node





# [1 <> 2 <> 3 <> 4]
# [2, 3, 4] <> 1 <> none
# [3,4] <> 2 <> 1
# [4, none] <> 3 <> 2
# none <> 4 <> 3



doublyLinkedList = DoublyLinkedList()
nodes = [Node(1), Node(2), Node(3), Node(4), Node(5)]
for node in nodes: doublyLinkedList.append(node)
# doublyLinkedList.reverse()
doublyLinkedList.print_values()
# doublyLinkedList.print_in_reverse()

