// Dynamic Programming (DP) is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.

let calculateFibonacci = (n) => {
    if (n<2) return n
    return calculateFibonacci(n-1) + calculateFibonacci(n-2)   
}





// Tabulation is the opposite of the top-down approach and avoids recursion. In this approach, we solve the problem “bottom-up” (i.e. by solving all the related sub-problems first). This is typically done by filling up an n-dimensional table. Based on the results in the table, the solution to the top/original problem is then computed.

// Let’s apply Tabulation to our example of Fibonacci numbers. Since we know that every Fibonacci number is the sum of the two preceding numbers, we can use this fact to populate our table.

let calculateFibonacci = (n) => {
    let dp = [0,1] 
    for (let i = 2; i<n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
}