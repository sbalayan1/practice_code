#think => DFS at each node/vertex


# Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

    #Example 1
        # connectedComponentsCount({
        #   0: [8, 1, 5],
        #   1: [0],
        #   5: [0, 8],
        #   8: [0, 5],
        #   2: [3, 4],
        #   3: [2, 4],
        #   4: [3, 2]
        # }); // -> 2

    #Example 2
        # connectedComponentsCount({
        # 1: [2],
        # 2: [1,8],
        # 6: [7],
        # 9: [8],
        # 7: [6, 8],
        # 8: [9, 7, 2]
        # }); // -> 1

#if there's 1, then you would have traversed through the all vertices/edges in the graph
#how do you tell when there are other groups? 

#count variable
#set
#iterate through every node in our graph
    #if node not in set, increase count
    # add node to stack
    #perform dfs:
        #pop from stack
        #loop through neighborss
            #if neighbor not in set
                #add neighbor to set
                #append stack
    #Example 2
        # connectedComponentsCount({
        # 1: [2],
        # 2: [1,8],
        # 6: [7],
        # 9: [8],
        # 7: [6, 8],
        # 8: [9, 7, 2]
        # }); // -> 1

# count = 1
# visited = 1,2,8,9,7,6
# stack = []
# current =  
def connected_component_count(graph):
    count = 0
    visited = set()
    stack = []
    for node in graph:
        if node not in visited:
            count += 1
            stack.append(node)
            visited.add(node)
            dfs(graph, visited, stack)

    return count

def dfs(graph, visited, stack):
    while stack:
        node = stack.pop()

        for neighbor in graph[node]:
            if neighbor not in visited:
                stack.append(neighbor)
                visited.add(neighbor)


test1 = {
          0: [8, 1, 5],
          1: [0],
          5: [0, 8],
          8: [0, 5],
          2: [3, 4],
          3: [2, 4],
          4: [3, 2]
        }

test2 = {
        1: [2],
        2: [1,8],
        6: [7],
        9: [8],
        7: [6, 8],
        8: [9, 7, 2]
        }

test3 = {}

test4 = {
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
}
print(connected_component_count(test1))


# n = nodes
# e = edges

# Time Complexity: O(e) => in all cases you traverse all of the edges in the graph

# Space Complexity: O(n) => in all cases, you will need to store all of the nodes in the set. 