# Classic way to implement a priority queue is through a binary heap. A binary heap will allow us to enqueue and dequeue items in O(logn) which is better than using arrays or lists that do O(nlogn)


# basic operations
    # BinaryHeap(): creates a new empty binary heap
    # insert(k): adds a new item to the heap
    # peek(): find min/max. don't delete
    # delete(): find min/max. delete
    # is_empty(): check if empty or not
    # size(): returns number of items in heap
    # build_heap(list): builds a new heap from list

# Things to know: 
    # Max/Min Heaps do NOT guarantee that the rest of the tree is sorted
    # To keep logarithmic nature, need to keep the tree balanced. To keep the tree balanced, we create a complete binary tree 

        # balanced binary tree => tree that has the same number of nodes on the left and right subtrees of the root. 

        # Complete binary tree => is a binary tree where each level of the tree has all of its nodes. (except the bottom level whose nodes are input from left to right. )
    
    # Since the tree is complete, we can represent it using a single list.
        # p = parent position
        # left child of parent = 2p
        # right child of parent = 2p + 1 
            # in terms of the single list this means:
                # left = 2p+1 (because lists start at index 0)
                # right = 2p+2

class BinaryHeap(object): 

    def __init__(self):
        # since binary heap can be represented by a single list, all we need to initialize are the list and the current size
        self.items = [0] 
    
    def parent(self, p):
        return p//2
    
    def percolate_up(self):
        i = len(self.items) - 1
        while i//2 > 0:
            if self.items[i] < self.items[i // 2]:
                self.items[i // 2], self.items[i] = self.items[i], self.items[i // 2]
            i = i // 2
            # if self.items[i] < self.items[i//2]: #if the child node is less than the parent
            #     # place the smaller element in the parents place and the larger element in the child's place
            #     self.items[i//2], self.items[i] = self.items[i], self.items[i//2]

            # i //= 2 

    def insert(self, data):
        self.items.append(data) 
        self.percolate_up()

    def percolate_down(self, data):
        while data*2 < len(self.items):
            min = self.min_child(data)
            if self.items[min] > self.items[data]:
                self.items[data], self.items[min] = self.items[min], self.items[data]

            data = min

    def min_child(self, i):
        if 2*i+1 > len(self.items):
            return i*2
        
        if self.items[i*2] < self.items[i*2+1]:
            return i*2
        
        return 2 * i + 1

    def delete_min(self):
        deleted = self.items[1]
        self.items[1] = self.items[len(self.items)-1]
        self.items.pop()
        self.percolate_down(1)
        return deleted
    
heap = BinaryHeap()
heap.insert(8)
heap.insert(7)
heap.insert(10)
heap.insert(9)
print(heap.items)
heap.delete_min()
print(heap.items)