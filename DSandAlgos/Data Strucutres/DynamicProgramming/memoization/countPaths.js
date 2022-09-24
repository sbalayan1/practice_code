// Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

let countPaths = (grid) => {
    if (grid.length == 0 || grid[0][0] == "X") return 0
    let m = grid.length
    let n = grid[0].length

    if (!m || !n) return 0
    if (m == 1 && n == 1) return 1

    let right = grid.map(row => row.slice(1))
    let down = grid.slice(1)

    return countPaths(right) + countPaths(down)
}

//branching factor = 2
//height of this grid = n + m
//time: O((2^(m+n))*m^2*n)
//space: O(h)
    //right: each recursive call will need to store a 2d array whose dimensions are m x n-1 because of slice
    //down: each recurisve call will need to store a 2d array whose dimensions are m-1 x n because of slice

const grid1 = [
    ["O", "O"],
    ["O", "O"],
  ];
console.log(countPaths(grid1)); // -> 2

const grid2 = [
    ["O", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];
console.log(countPaths(grid2)); // -> 5

const grid3 = [
    ["O", "O", "O"],
    ["O", "O", "X"],
    ["O", "O", "O"],
  ];
console.log(countPaths(grid3)); // -> 3




let countPathsOptimized = (grid, memo={}) => {
    if (grid.length == 0 || grid[0].length == 0 || grid[0][0] == 'X') return 0
    let m = grid.length, n = grid[0].length, pos = m + ',' + n

    if (pos in memo) return memo[pos]
    if (m == 1 && n == 1) return 1

    let right = grid.map(row => row.slice(1))
    let down = grid.slice(1)

    memo[pos] = countPathsOptimized(right, memo) + countPathsOptimized(down, memo)
    return countPathsOptimized(right, memo) + countPathsOptimized(down, memo)
}

const grid4 = [
    ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
  ];
  console.log(countPathsOptimized(grid4)); // -> 3190434