const cost = [10]
let minCost = (cost, n, memo={}) => {
    if (n in memo) return memo[n]
    if (n<=1) return 0 //base case
    let down_one = cost[n-1] + minCost(cost, n-1, memo)
    let down_two = cost[n-2] + minCost(cost, n-2, memo)
    memo[n] = Math.min(down_one, down_two)
    return memo[n]
}


console.log(minCost(cost, cost.length))

