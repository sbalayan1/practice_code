// 9/7/21

// Big O Notation - https://www.youtube.com/watch?v=__vX2sjlpXU

// - is simplified analysis of an algorithm's efficiency
// - gives us an algorithm's complexity in terms of input size, N 
// - gives us a way to extract the efficiency of our algorithms from the machines they run on. 
// - Do not care about the status of the machine. 
// - Analyzes both time and space 


// - generally measured on a worst case scenario though the others are still important. 


// General Rules

// 1. Ignores constants 
// 2. Certain terms dominate others 

// O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)


Example

Constant Time
1. x = 5 + (15 * 20) -> independent of input size N -> O(1)
2. x = 5 + (15 * 20)
    y = 15 -2 
    print x + y 
    Total time = O(1) + O(1) + O(1) = O(1)

Linear Time 

1. for x in range (0, n) -> N
    print x -> O(1)

    Time = N * O(1) = O(n)

2. y = 5 + (15 * 20)
    for x in range (0, n):
        print x 

    Time = O(1) + O(n) = O(n)


Quadratic time
1. for x in range (0,n): -> N
    for y in range (0,n): -> N
        print x * y -> O(1)

    Time = N * N * O(1) = O(n^2)

2. x = 5 + (15*20) -> O(1)
    for x in range (0,n): -> O(n)
        print x

    for x in range (0, n) -> O(n^2)
        for y in range (0,n)
            print x * y 

Time = O(1) + O(n) + O(n^2) = O(n^2) -> because O(n^2) dominates the lower order terms


What is a permutation? 
- When order DOESN'T matter, it is called a combination 
- When order DOES matter, it is called a permutation
