# Circular Queues
    # in a circular queue the last element points to the first forming a circular link
    
    #Benefits of a circular queue are memory utilization. If the last position is full and the first is empty, we can insert an element in the first position

    #applications:
        #CPU scheduling, memory management, traffic management.
    
    # HOW IT WORKS
        # basically when we increment our pointer and reach the end of the queue, we reset to the beginning

# Variables/Pointers
    # FRONT, REAR
# Methods
    # Enqueue:
        # check if queue is full
        # If the queue is empty, update the head and tail indexes so that they both point to the first element in the queue (self.queue[0]).

        # if the queue is not empty, check that we haven't reached the end of the queue. If we have, update the position to 0 and add the data to the start of the queue. If not, increment and add to the position.
    # Dequeue:
        
    # printQueue:

class CircularQueue():
    def __init__(self, k):
        self.k = k,
        self.queue = [None] * k
        self.head = -1 # refers to the front of the queue
        self.tail = -1 # refers to the end of the queue
    
    # insert an element into the end of the queue
    def enqueue(self, data):
        if ((self.tail + 1) % self.k == self.head):
            print ("Queue is full")

        elif (self.head == -1): #checks that the queue is empty
            self.head = 0
            self.tail = 0
            self.queue[self.tail] = data #adds the data to the end of the queue. 
        else:
            self.tail = (self.tail + 1) % self.k # updates the tail to self.tail + 1 unless self.tail + 1 is equal to self.k. If they are equal, % is 0 and resets the tail to the beginning of the array.
            self.queue[self.tail] = data #adds the data to the end of the queue.



    # delete front element from the queue
    def dequeue(self):
        if (self.head == -1):
            print("Empty")
        elif (self.head == self.tail): 
            # implies the head and tail are pointing at the same element or the head is at the end element.
            temp = self.queue[self.head]

            # the below resets the pointers to an empty queue. 
            self.head = -1 
            self.tail = -1
            return temp
        else: 
            #case assumes head < tail
            temp = self.queue[self.head]
            self.head = (self.head + 1) % self.k
            return temp

    def printQueue(self):
        if (self.head == -1):
            print ('Empty')

        if (self.tail >= self.head):
            for i in range(self.head, self.tail + 1):
                print(self.queue[i], end=" ")


queue = CircularQueue(5)
queue.printQueue()
