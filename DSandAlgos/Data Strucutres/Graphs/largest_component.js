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
    
    if (visited.has(String(current))) return 0 //got stuck on what to return when we revisit a node. 

    let size = 1 //if the above is not true, then we need to count the node
    visited.add(String(current))

    for (let neighbor of graph[current]) {
        size += recursive_dfs(graph, visited, neighbor)
        //each of our recursive calls will either return 0 or 1. 
    }

    return size
}

console.log(largestComponent(test1))