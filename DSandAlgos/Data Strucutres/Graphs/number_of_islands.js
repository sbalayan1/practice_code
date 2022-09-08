// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

//think of positions in this graph as nodes

// (r,c)
// top = (r-1, c)
// down = (r+1, c)
// left = (r, c-1)
// right = (r, c+1)

//really this problem asks us to count the number of connected components on this grid

//probably need a nested loop to iterate through every potential island and start some traversal at that island

//our iterative loop will basically just go from left to right, top to bottom

//at each iteration
    //check if current position is land
    //if water => continue
    //if land and unexplored/unvisited => 
        //explore this piece of land using dfs
        //mark each piece as visited
        //increment count to express that you've visited some island fully

// return final count

//r = rows
//c = columns
// Time complexity: 
    //Iterative code will give run in O(r*c). Also assuming our entire grid is an island, our DFS will take O(r*c)

// Space Complexity:
    //O(r*c) in the worst case because you'd need to create a visited set and hold all of the nodes in that set

const islandCount = (grid) => {
    const rows = grid.length, columns = grid[0].length
    let visited = new Set()
    let numIslands = 0
    for (let row = 0; row<rows; row++) {
        for (let column = 0; column<columns; column++) {
            if (explore(row, column, grid, visited) == true) {
                
                numIslands++
            }
        }
    }  
    return numIslands
    };
    
const explore = (r, c, grid, visited) => {
    const rowInbounds = r >= 0 && r < grid.length
    const columnInbounds = c >= 0 && c < grid[0].length
    if (!rowInbounds || !columnInbounds) return false
    if (grid[r][c] == "0") return false
    let pos = r + "," + c
    if (visited.has(pos)) return false
    visited.add(pos)
    
    explore(r-1, c, grid, visited) 
    explore(r+1, c, grid, visited)
    explore(r, c-1, grid, visited)
    explore(r, c+1, grid, visited)
    
    console.log(r, c, true)
    return true
}


let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
    ]
console.log(islandCount(grid))
