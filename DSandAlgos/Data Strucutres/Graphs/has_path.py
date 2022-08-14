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

        for i in graph[node]:
            if i == dst: return True
            stack.append(i)

    return False

# print(has_path_dfs_iterative(graph, 'i', 'h'))

def has_path_dfs_recursive(graph, src, dst):
    if src == dst: return True
    for neighbor in graph[src]:
        return has_path_dfs_recursive(graph, neighbor, dst)

    return False
    

print(has_path_dfs_recursive(graph, 'f', 'h'))