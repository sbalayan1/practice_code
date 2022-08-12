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
        #travels to the deepest node of a given path before traversing other edges. 

        #for instance if we started at point a in our adjaceny_list above, a true dfs would traverse to b then d BEFORE traversing to c -> e -> b -> d. 

    #breadth first traversal
        #depending on starting point, doesn't matter which neighbor you choose






