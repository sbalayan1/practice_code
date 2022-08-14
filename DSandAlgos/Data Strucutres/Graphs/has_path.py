# Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

graph = {
  "f": ['g', 'i'],
  "g": ['h'],
  "h": [],
  "i": ['g', 'k'],
  "j": ['i'],
  "k": []
}

def has_path_dfs_iterative(graph, src, dst):
    stack = [src]

    while stack:
        node = stack.pop()
        if node == dst: return True 
        for i in graph[node]:
            stack.append(i)

    return False

# print(has_path_dfs_iterative(graph, 'i', 'h'))

def has_path_dfs_recursive(graph, src, dst):
    if src == dst: return True
    for neighbor in graph[src]:
        return has_path_dfs_recursive(graph, neighbor, dst)

    return False
    

# print(has_path_dfs_recursive(graph, 'f', 'h'))

#n = 6 nodes
#e(edges) = 6

#Time Complexity: O(e) => because we have to travel through every edge of our graph

#Space Complexity: O(n) => n because in the worst case (assuming you use a stack), I would have to have every single node on the stack.


#another way to analyze time space
    #n = 6 nodes
    #n^2 = # of edges

    # Time: O(n^2)
    # Space: O(n)

def has_path_bfs(graph, src, dst):
    queue = [src]
    while queue:
        node = queue.pop(0)
        if node == dst: return True

        for neighbor in graph[node]:
            queue.append(neighbor)

    return False