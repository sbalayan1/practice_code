# basics
    # a graph is a collection of nodes and edges and a graph describes/relationships between things

    # edges connect nodes. an edge is a connection between a pair of nodes
    # vertex/nodes are the same thing


#directed graphs and undirected graphs
    #directed: a -> b -> c
    #undirected: a <-> b <-> c

#neighbor nodes are nodes that are accessible through an edge, obeying the direction of an edge. 
    #in the case above. b is a neighbor of a but since b can't travel to, a is not a neighbor of b. 

#adjaceny list
    #is the preferred method for representing graph information in code
    #hash data structures are used to represent an adjacency list

    #constant time data structure with a key value mapping

    #the keys represent the nodes of our graph
    #the values are an array of our node's neighbor
    #even if a node has no neighbors, it should still appear as a key in the adj_list

    # adjaceny_list = {
    #     a: [b, c],
    #     b: [d],
    #     c: [e],
    #     d: [],
    #     e: [b],
    #     f: [d]
    # }

    #depth first traversal
        #dfs uses a STACK

        #travels to the deepest node of a given path before traversing other edges. 

        #for instance if we started at point a in our adjaceny_list above, a true dfs would traverse to b then d BEFORE traversing to c -> e -> b -> d. 

        #DFS explores one direction as much as possible BEFORE switching directions from a given node.

adjacency_list = {
    "a": ['b', 'c'],
    "b": ['d'],
    "c": ['e'],
    "d": ['f'], 
    "f": [],
    "e": []
}

graph = {
        "NY": ["Iceland", "Maine"],
        "Maine": ["London"],
        "London": ["Berlin", "Egypt"],
        "Iceland": ["London"],
        'Berlin': ["Paris"],
        "Paris": ["London", "Amsterdam"],
        "Amsterdam": [],
        "Egypt": []
}

def dfs(graph, start):
    stack = [start] #immediately initialize starting node onto stack

    while stack:
        #because i am using a stack, the only thing i can do is remove the top of my stack. this node variable that we've created is the current node
        node = stack.pop()
        print(node)

        #after printing the node's values, I want to consider the node's neighbors. The order doesn't matter but basically we need to push the node's neighbors into the stack
        for neighbor in graph[node]:
            stack.append(neighbor) #add neighbor to top of stack

print(dfs(graph, "a"))
    #stack = [a]
    #print "a", stack = [b, c]
    #print "c", stack = [b, e] => c has one neighbor, "e", which we push to the top of the stack. 
    #print "e", stack = [b]
    #print "b", stack = [d] 
    #print "d", stack = [f]
    #print "f", stack = []
    #printed = a, c, e, b, d, f


    #breadth first traversal
        #bfs uses a QUEUE

        #depending on starting point, doesn't matter which neighbor you choose, if you choose a -> b, the next node you must traverse to is a -> c. 

        #BFS explores all of the immediate neighbors of a node and explores them evenly.

    #when would i prefer one over the other:
        #both explore the same exact nodes but it would explore them in different orders
    
def bfs(graph, start):
    queue = [start]

    while queue:
        node = queue.pop(0) #remove from front of queue
        print(node)
        
        for neighbor in graph[node]:
            queue.append(neighbor) #add neighbors to back of queue


print(bfs(adjacency_list, "a"))
    #queue = [a]
    #print "a", queue = [b, c]
    #print "b", queue = [c, d] #d is a neighbor of b. It gets pushed to the back of the queue and ends up behind c. 
    #print "c", queue = [d, e] #e is a neighbor of c. It gets pushed to the back of the queue and ends up behind d. 
    #print d, queue = [e, f]
    #print e, queue = [f]
    #print f

    #printed: a, b, c, d, e, f




