# You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    # Example 1:

    # Input: prices = [7,1,5,3,6,4]
    # Output: 5
    # Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    # Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

    # Input: prices = [7,6,4,3,1]
    # Output: 0
    # Explanation: In this case, no transactions are done and the max profit = 0.


#what is the brute force method? 
    #two loops. one inner and one outer loop that calculates all of the potential buy and sell. find the max
#cases to think about
    #1. if given a single price, return 0 
    #2. if day 1 is greater than day 2 => no sell. compare day 1 to day 3 and so on. return 0 if no sales occur. 
    #3. if i is equal to i+1. 
class Solution:
    def max_profit_brute_force(self, prices: List[int]) -> int:
        max_profit = 0
        for i in range(0, len(prices)):
            for j in range(i+1, len(prices)):
                if prices[i] > prices[j]: continue
                else:
                    max_profit = max(max_profit, prices[j] - prices[i])
        
        return max_profit
    

    def max_profit_one_pass(self, prices):
        max_profit = 0
        if len(prices) == 1: return max_profit
        min_price = float('inf')

        for i in prices:
            if i>min_price:
                max_profit = max(max_profit, i - min_price)
            else:
                min_price = min(min_price, i)

        return max_profit
