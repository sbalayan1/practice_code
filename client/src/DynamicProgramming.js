// Dynamic Programming (DP) is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.

let calculateFibonacci = (n) => {
    if (n<2) return n
    return calculateFibonacci(n-1) + calculateFibonacci(n-2)   
}

// In this approach, we try to solve the bigger problem by recursively finding the solution to smaller sub-problems. Whenever we solve a sub-problem, we cache its result so that we don’t end up solving it repeatedly if it’s called multiple times. Instead, we can just return the saved result. This technique of storing the results of already solved subproblems is called Memoization.

let calculateFibonacci = (n) => {
    let memoize = []

    let fib = (n) => {
        if (n<2) return n

        if (memoize[n]) return memoize[n]
        memoize[n] = fib[n-1] + fib[n-2]
        return memoize[n]
    }

    return fib(n)
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

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


    Example 1:

    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

    Example 2:

    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

// Recursive
let climbStairs = (n) => {
    if (n == 0) return 1
    if (n == 1) return 1
    if (n == 2) return 2

    let firstStep = climbStairs(n-1)
    let secondStep = climbStairs(n-2)

    return firstStep + secondStep
}

// DP Top-Down -> Memoization

let climbStairs = (n) => {
    let dp = []

    let count = (n) => {
        if (n == 0) return 1
        if (n == 1) return 1
        if (n == 2) return 2

        if (dp[n]) return dp[n]

        let firstStep = count(n-1)
        let secondStep = count(n-2)

        return firstStep + secondStep 
    }

    return count(n)
}

// DP Bottoms Up -> Tabulation

let climbStairs = (n) => {
    let dp = [0, 1, 2]
    for (let i = 3; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[n]
}