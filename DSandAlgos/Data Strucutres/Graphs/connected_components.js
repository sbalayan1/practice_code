// think => dfs for each node

const connectedComponentsCount = (graph) => {
    let count = 0
    let stack = []
    let visited = new Set()

    for (let node in graph) {
        node = parseInt(node, 10) //node is a string and needs to be converted
      if (!visited.has(node)){
        count ++
        visited.add(node)
        stack.push(node)
        dfs(graph, visited, stack)
      }
    }

    return count
  };
  
let dfs = (graph, visited, stack) => {
    while (stack.length > 0) {
        let current = stack.pop()
        for (let neighbor of graph[current]) { //if we use 'in' instead of 'of', we get the indexes instead of the actual values
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                stack.push(neighbor)
            }
        }
    }
}


function connectedComponentsCount_recursive(graph) {
  let count = 0
  let visited = new Set()
  for (let node in graph) {
    if (explore(graph, visited, node) == true) count ++
  }

  return count
}

function explore(graph, visited, current) {
  if (visited.has(String(current))) return false
  visited.add(String(current))
  for (let child of graph[current]) {
    explore(graph, visited, child)
  }

  return true
}

let test1 = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }

let test2 = {
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
  }

let test3 = {}

let test4 = {
    0: [4,7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
}

console.log(connectedComponentsCount_recursive(test4))