// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Example 1
    // Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
    // Output: 7
    // Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

//Example 2
    // Input: grid = [[1,2,3],[4,5,6]]
    // Output: 12
    // Explanation: Path 1 -> 2 -> 3 -> 6 

//can only move right or down


// [[1,2],
//  [3,4]]

// 1 -> 2 -> 4 //=> 7 => should go right
// 1 -> 3 -> 4 //=> 8



let minPathSum = (grid, memo={}) => {
    if (grid.length == 0) return null //if there's nothing in the grid
    const m = grid.length, n = grid[0].length, pos = m + ',' + n

    if (pos in memo) return memo[pos]
    if (!m || !n) return null
    if (m == 1 && n == 1) return grid[0][0] //in a 1x1 grid, we return its single value

    let down = grid.slice(1) //recreates the grid, shifted down
    let right = grid.map(row => row.slice(1)) //recreate the grid, shifted right

    if (minPathSum(right, memo) == null || minPathSum(down, memo) == null) {
        let availablePath = Math.max(minPathSum(down, memo), minPathSum(right, memo))
        return availablePath + grid[0][0]
    }

    let smallerPath = Math.min(minPathSum(right, memo), minPathSum(down, memo))
    memo[pos] = smallerPath + grid[0][0]
    return smallerPath + grid[0][0]
}

let grid = [[2,3,4,2,2,5,5,6,6,3],[7,5,6,4,1,7,8,1,7,7],[4,0,4,5,4,2,7,8,9,3],[7,3,8,3,5,0,9,1,8,7],[4,5,4,0,9,5,8,0,8,5],[7,4,7,3,0,1,7,9,0,8],[5,9,1,5,3,7,6,4,8,6]]

console.log(minPathSum(grid)) //=> 52