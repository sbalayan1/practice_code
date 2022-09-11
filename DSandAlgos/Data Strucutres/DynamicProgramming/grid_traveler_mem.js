// Say that you are a traveler on a 2d grid. You begin in the top left corner and your goal is to travel to the bottom right corner. You can only move down or right

// in how many ways can you travel to the goal on a grid with dimensions m*n

// Write a function `gridTraveler(m*n) that calculates this

gridTraveler(2,3) //=> 3

//good practice is to start with really small inputs

gridTraveler(1,1) // => 1 base case scenario
gridTraveler(0,1) // => 0 invalid grid
gridTraveler(1,0) // => 0 invalid grid

gridTraveler(3,3) //=> 3

//**when we make a move in the grid, we shrink the size of the playable area**

//implement using recursion and structure our problem like a tree 


function gridTraveler(m, n) {
    if (!m || !n) return 0
    if (m == 1 && n == 1) return 1
    return gridTraveler(m-1, n) + gridTraveler(m, n-1)
}

// console.log(gridTraveler(2,3)) //=> 3
// console.log(gridTraveler(3,3)) //=> 6
// console.log(gridTraveler(18,18)) 

//there are n + m levels and the number of nodes per level is denoted by its previous level's number of nodes by 2. 
// time: O(2^n+m)
// space: O(h) height of the tree or n+m

function gridTravelerImproved(m, n, memo={}) {
    const key = m + ',' + n
    if (key in memo) return memo[key]
    if (m == 0 || n == 0) return 0
    if (m == 1 && n == 1) return 1
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo)
    return memo[key]
}

console.log(gridTravelerImproved(17,17)) 