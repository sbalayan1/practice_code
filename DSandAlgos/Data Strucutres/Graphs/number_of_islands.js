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
// Space Complexity
