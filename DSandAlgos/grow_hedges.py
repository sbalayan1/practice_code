# Problem statement
#     Create a function that takes in:
#       an integer that represents a number of years,
#       a 2 dimensional matrix filled with 0s and 1s that describes a garden. 1s represent hedges, and 0s represent empty spaces. 

# The function should simulate the growth of hedges over the given number of years, according to the following rules:
#     1. An empty square which is adjacent to a hedge (including diagonally) will be filled in the next year. 
#     2. A square which is filled with a hedge will be empty the following year if it is surrounded on all eight sides by other hedges, which prevents it from getting enough sun. Note that hedges on the edge squares will always get enough sun.

#     3. Any other squares will be left intact.

#     The function should return the number of pairs of adjacent hedges (including diagonally) at the end of this process. We’d like you to focus on writing simple, well-structured code; you will not be graded on optimizing the performance of your solution.
#     Examples:
#     Example 1. If the number of years is 1, and the initial matrix is
#     [[0, 0, 1],
#     [0, 0, 0]]
#     the final matrix will be:
#     [[0, 1, 1],
#     [0, 1, 1]]
#     and the function should output 6. Here are the six pairs of adjacent hedges in this garden:
#     [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],
#     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]

#     Example 2. If the number of years is 2, and the initial matrix is:
#    [[1, 0, 0, 0],
#     [1, 1, 0, 0],
#     [1, 0, 0, 1]]

    #year 1
#    [[1, 1, 1, 1],
#     [1, 1, 1, 1],
#     [1, 1, 1, 1]]

    #year 2
#    [[1, 1, 1, 1],
#     [1, 0, 1, 1],
#     [1, 1, 1, 1]]

    #year 3
#     [[1, 1, 1, 1],
#     [1, 1, 1, 1],
#     [1, 1, 1, 1]]


#     the final matrix will be:
#     [[1, 1, 1, 1],
#     [1, 0, 1, 1],
#     [1, 1, 1, 1]]
#     And the function should output 21.


#clarifying questions:
    #general dimensions of the matrix? 
    #can you receive an empty matrix? 
    #4x4 matrix, does that constitute corners or not?


# inputs: num of years, hedge_matrix
# return a count of the number of pairs of adjacent hedges


# simulate growth hedges
    #year constitutes one bfs
    #bfs
    
    #for n years
        #set() to make sure we don't visit a node twice
        #init queue with 0,0
        #queue
            #pop from front of queue
            #create var missing nodes
            #create var count adjacent hedges
            #create var of adj elem
            #iterate through each adj elem and check if they don't exist. If they don't exist, iterate our missing nodes var
                #remove from adj list to prevent from iterating?
            #if missing nodes > 5 => found corner
                #if it's 1 => do nothing 
            
            #iterate through adjacent hedges
                #if neighbor not in visited
                    #if hedge == 0 and current == 1: => change to 1
                    #if hedge == 1 and current == 0: => change to 1
                    #if hedge == 1 and current == 1: => incremenet adjacent hedges count

                    #if we change a node who's adjacent to a 1 from 0 to 1, does that mean we increment the adjacent nodes?

                    #add hedge to queue and to visited set
            
            #reset adjacent hedge count to 0
            #reset missing nodes to 0
        
        #need to reset set() after each iteration

    #after floodfilling, we can do another bfs to count the number of adjacent pairs? 
        #only need to do one pass
        #don't need a set()

        #init var to count the number of pairs
        #init queue that starts at 0,0
        #while queue:
            #pop from front. 
            #init var for adjacent elements, top, left, right, bottom, diag up, antidiag up, diag down, antidiag down

            # iterate through adjacent elems:
                #if adj element == 1: increment count
                #append adj element to back of queue
        
    # return count/2

        
def grow_hedges(years, hedges):
    for n in range(0, years):
        visited = set()
        visited.add((0,0))
        adjusted = set()
        queue = [(0,0)]

        while queue:
            i, j= queue.pop(0)
            current = hedges[i][j]
            count_missing = 0
            count_adjacent_hedges = 0
            # top, bottom, left, right, diagUp, diagDown, antiDiagUp, antiDiagDown
            adj_list = [(i-1, j), (i+1, j), (i, j-1), (i, j+1), (i-1, j+1), (i+1, j-1), (i-1, j-1), (i+1, j+1)]
            copy_adj = adj_list[:]

            for elem in adj_list:
                a, b = elem
                if a < 0 or a >= len(hedges) or b < 0 or b >= len(hedges[0]): 
                    count_missing += 1
                    copy_adj.remove(elem)

            for elem in copy_adj:
                c, d = elem
                adj_elem = hedges[c][d]

                if current == 1 and adj_elem == 0 and elem not in adjusted:
                    hedges[c][d] = 1
                                        
                elif current == 1 and adj_elem == 1:
                    count_adjacent_hedges += 1


                if elem not in visited:
                    visited.add(elem)
                    queue.append(elem)

            if count_adjacent_hedges == 8: 
                # print('hit', queue, hedges)
                hedges[i][j] = 0
                adjusted.add((i,j))
    
    return hedges
                    

matrix = [[1, 0, 0, 0],
          [1, 1, 0, 0],
          [1, 0, 0, 1]]
print(grow_hedges(2, matrix))

