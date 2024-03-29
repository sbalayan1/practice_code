

// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

let test1 = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
} // -> 4

// visited = {0, 5, 8}
// stack = [8, 1, 0, 0, 5]
let buildGraph = (edges) => {
    let graph = {}
    for (let edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

// when we find a new/separate component, we should keep track of its size

function largestComponent(graph) {
    let longest = 0
    let visited = new Set()
    for (let node in graph) {
        if (!visited.has(node)) {
            let size = recursive_dfs(graph, visited, node)
            longest = Math.max(longest, size)
        }
    }
    return longest
}

function recursive_dfs(graph, visited, current) {
    
    if (visited.has(current)) return 0 //got stuck on what to return when we revisit a node. 

    let size = 1 
        //if the above is not true, then we need to count the node
        //1 represents the current node that we're at and each recursive call is going to count its own node
    visited.add(current)

    for (let neighbor of graph[current]) {
        size += recursive_dfs(graph, visited, neighbor)
        //each of our recursive calls will either return 0 or 1. 
        //the above accumulates a count of all of the nodes of the fully connected component
    }

    return size
}

console.log(largestComponent(test1))

// timeComplexity: O(e) => on average we iterate over all the edges of our graph
// spaceComplexity: O(n) => need to store all the nodes in our set