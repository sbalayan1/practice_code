#note that the graph is undirected

# edge list where every pair represents a connection between two nodes
class Solution:
    edges = [
        ["i", "j"],
        ["k", "i"],
        ["m", "k"],
        ["k", "l"],
        ["o", "n"]
    ]

#for instance in [i, j], this pair of edges shows that theirs a connection between i and j where i can go to j and vice versa

#convert the edge list into an adjacency list

    adj_list = {
        "i": ["j", "k"],
        "j": ["i"],
        "k": ["i", "m", "l"],
        "l": ["k"],
        "m": ["k"],
        "n": ["o"],
        "o": ["n"]
    }

#very common problem in graph problems is for your graphs to have a CYCLE. This is very common in undirected graphs

#for instance if we added an edge between j and k, we would have an infinite traversal where i => j => k => i


# Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

    def dfs(graph, src, dst):
        #in order to avoid infinite traversals, we need to mark the nodes as visited as we travel through them

        stack = [src]
        v = set()
        v.add(src)

        while stack:
            node = stack.pop()
            
            if node == dst: return True
            for neighbor in graph[node]:
                if neighbor not in v:
                    stack.append(neighbor)
                    v.add(neighbor)
        
        return False

    print(dfs(adj_list, "k", "o"))

    #n = nodes
    #n^2 = edges
    #Time: O(n^2) =>  worst case you travel across every edge in the graph. for instance if you travel to a node where the path doesn't exist, our algo would have to traverse every edge before figuring out that there is no path.

    #Space: O(n) => in the worst case you would have to add every single node in the stack
            

