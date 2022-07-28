# Priority Queue
    # special type of queue where each element is associated with a priority and is served according to their priority. If two elements have the same priority, then they will be served by their order in the queue. 
    # In short, the element with the highest priority will be removed first
    # Can be implemented using:
        # arrays, linkedlists, heaps, or binary search trees

# Applications:
    # Dijkstra's Algorithm
    # implementing stack
    # load balancing and interrupt handling in an OS

    # https://www.geeksforgeeks.org/priority-queue-set-1-introduction/


# Operations
    # Insert
        # 1. insert element at the end of the tree
        # 2. heapify the tree
        # Algorithm
            # if there is no node => create a new Node
            # else => insert a new node at the end (last node from left to right)
            # heapify the array
    # Remove
        # 1. select the element to delete
        # 2. swap with the last element
        # 3. remove the last element
        # 4. heapify the tree
        # Algorithm
            # if the element to delete is a leaf node => delete the node
            # else swap the element with the last leaf node => delete the node
            # heapify the array

    # Peek => return the rootNode
    # Extract Max/Min => return the max/min node after removing it from the heap
    # changePriority


arr = [5, 10]
# arr refers to the input array
# n refers to the size of the array
# i refers to the current node
def maxHeapify(arr, n, i):
    # find the largest among the root, left, and right children
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[i] < arr[left]:
        largest = left 
    
    if right<n and arr[largest] < arr[right]:
        largest = right
    
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        maxHeapify(arr, n, largest)

def minHeapify(arr, n, i):
    # find the smallest among the root, left, and right children
    smallest = i 
    left = 2 * i + 1 #(why do we multiply by 2)
    right = 2 * i + 2 

    if left < n and arr[left] < arr[i]:
        smallest = left 
    
    if right < n and arr[right] < arr[smallest]:
        smallest = right
    
    if smallest != i:
        arr[i], arr[smallest] = arr[smallest], arr[i]
        minHeapify(arr, n, smallest)
    
def insert(array, data):
    size = len(array)
    if size == 0:
        array.append(data)
    else:
        array.append(data)
        size = len(array)
        for i in range((size // 2) - 1, -1, -1): #why do we decrement instead of increment? because you're starting from the bottom of the heap and you're traversing up
            minHeapify(array, size, i)

def delete(array, target):
    # if the element to delete is a leaf node => delete the node
            # else swap the element with the last leaf node => delete the node
            # heapify the array
    size = len(array)
    i = 0
    while i<size:
        if target == array[i]: break
        i+=1

    array[i], array[size-1] = array[size-1], array[i]
    
    array.pop()
    size = len(array)
    for i in range((size//2)-1, -1, -1):
        maxHeapify(array, size, i)

def peek(array):
    return array[0]

def extract(arr):
    temp = arr.pop(0)
    size = len(arr)
    for i in range((size//2)-1, -1, -1):
        maxHeapify(arr, size, i)
    
    return temp

arr = []

insert(arr, 1)
insert(arr, 2)
insert(arr, 3)
insert(arr, 4)
insert(arr, 5)
insert(arr, -55)
delete(arr, -55)
print(arr)
print(extract(arr))
print(arr)