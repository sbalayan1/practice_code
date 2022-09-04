# Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.
import math

edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

# graph = {
#     'w': ['x', 'v'], 
#     'x': ['w', 'y'], 
#     'y': ['x', 'z'], 
#     'z': ['y', 'v'], 
#     'v': ['z', 'w']
# }


#stack


def convert_edges(edges):
    graph = {}
    for i,j in edges:
        if i not in graph:
            graph[i] = [j]
        elif j not in graph[i]: 
            graph[i].append(j)

        if j not in graph:
            graph[j] = [i]
        elif i not in graph[j]:
            graph[j].append(i)

    return graph


#bfs is more useful here because in cases where the start and destination are really close, dfs could be unlucky in that it searches in the wrong direction and needs to go through the entire graph before finding the target node

def shortestPath(edges, start, destination):
    graph = convert_edges(edges)
    queue = [(start,0)] #start represents the starting node, 0 represents the number of edges
    visited = set() #issue with where we should put the set

    while queue:
        curr_node, distance = queue.pop(0)

        if curr_node == destination:
            return distance
        
        for neighbor in graph[curr_node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, distance+1))

    return -1
        



print(shortestPath(edges, 'w', 'z'))

# Time complexity: O(e) => don't need to traverse the graph more than once
