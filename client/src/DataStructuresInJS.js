// Find Maximum in sliding window 

import { supported } from "turbolinks"

// The algorithm uses the deque data structure to find the maximum in a window. A deque is a double-ended queue in which push and pop operations work in O(1)O(1) at both ends. 

let findMaxSlidingWindow = (arr, window_size) => {
    let result = []

    if (arr.length === 0 || window_size > arr.length) {
        return result
    }

    // window represents the deque
    // As we can see, the deque stores elements in decreasing order. The front of the deque contains the index for the maximum value in that particular window.

    let window = []

    // find max for first window
    // At the start of the algorithm, we search for the maximum value in the first window. The first element’s index is pushed to the front of the deque
    for (let i = 0; i<window_size; i++) {

        // If an element is smaller than the one at the back of the queue, then the index of this element is pushed in and becomes the new back. If the current element is larger, the back of the queue is popped repeatedly until we can find a higher value, and then we’ll push the index of the current element in as the new back.
        while(window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
            window.pop()
        }

        window.push(i)
    }

    result.push(arr[window[0]])

    for (let i = window_size; i <arr.length; i++) {
        // remove all numbers that are smaller than current number from the tail of list
        while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
            window.pop()
        }

        //remove first number if it doesn't fall in the window anymore
        if (window.length > 0 && window[0] <= i-window_size) {
            window.shift()
        }

        window.push(i)
        result.push(arr[window[0]])
    }

    return result
}

// Time complexity: O(n) -> every elemnt is pushed and popped from the deque in a single traversal. 
// Space complexity: O(1) -> The memory complexity of this solution is linear, O(w)O(w), where ww is the window size in this case.

// practice
let maximumSlidingWindow = (arr, window_size) => {
    let result = []

    if (window_size > arr.length || arr.length === 0 ) {
        return result
    }

    let window = []

    for (let i = 0; i<window_size; i++) {
        while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
            window.pop()
        }

        window.push(i)   
    }

    result.push(arr[window[0]])

    for (let i = window_size; i<arr.length; i++) {
        while (window.length > 0 && arr[i] >= arr[window[window.length-1]]) {
            window.pop()
        }

        if (window.length > 0 && window[0] <= i - window_size) {
            window.shift()
        }

        window.push(i)
        result.push(arr[window[0]])
    }


    return result
}

//Search a Rotated Array
// Search for a given number in a sorted array that has been rotated by some arbitrary number.


    // questions I had before coding? 
    // -> what does the key represent? is it the index of the array or the actual value? 
    // -> are there negative values? 
    // -> Are there duplicates? 
    // -> Any unacceptable solutions? 
    // -> How big can the values within the array get? 
    // -> is one half of the array always sorted? ****THIS IS KEY

    // Recursive Binary Search
    let binarySearch = (arr, start, end, key) => {
        // stops recursion when start > end. 
        if (start > end) {
            return -1
        }
      
        // usually would do Math.floor(arr.length/2), however need to handle case where the start is not at 0 and the end is not the length of the array. 
        let mid = start + Math.floor((end - start)/2)
      
        if (arr[mid] === key) {
            return mid
      
        // handles the case where the left side of the array is sorted and the key is within. 
        } else if (arr[start] <= arr[mid] && arr[start] <= key && arr[mid] >= key) {
      
           // note you need to mid-1 because we know that mid !== key if this is returned
            return binarySearch(arr, start, mid-1, key)
        
        // handles the case where the right side of the array is sorted and the key is within
        } else if (arr[mid] <= arr[end] && arr[mid] <= key && arr[end] >= key) {
      
          // note you need to mid+1 because we know that mid !== key if this is returned
            return binarySearch(arr, mid+1, end, key)
      
        // handles the case when the key is not in the sorted side of the array. 
        } else if (arr[mid] >= arr[end]) {
            return binarySearch(arr, mid + 1, end, key)

        } else if (arr[mid] <= arr[start]) {
            return binarySearch(arr, start, mid-1, end)
        }
      
        return -1
    }
      
    let binarySearchRotated = (arr,key) => {
        return binarySearch(arr, 0, arr.length-1, key)
    }
    
    // Time Complexity: O(log n)
    // Space Complexity: O(log n)



    // iterative Binary Search
    let binarySearchRotated = (arr,key) => {
        let start = 0
        let end = arr.length - 1
        let mid = start + Math.floor((end-start)/2)

        while (start < end) {
            if (arr[mid] === key) {
                return mid
            // set the end variable because we want to look at the left side of the array
            } else if (arr[start] <= arr[mid] && arr[start] <= key && arr[mid] >= key) {
                end = mid - 1
            
            // set start variable because we want to look at the right side of the array
            } else if (arr[mid] <= arr[end] && arr[mid] <= key && arr[end] >= key) {
                start = mid + 1
            } else if (arr[mid] >= arr[end]) {
                start = mid + 1
            } else if (arr[start] >= arr[mid]) {
                end = mid - 1
            } else {
                return -1
            }
        }

        return -1
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(1)

    // Tests
    let v1 = [6, 7, 1, 2, 3, 4, 5];  
    console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
    console.log("Key(6) found at: " + binarySearchRotated(v1, 6));
        
    let v2 = [4, 5, 6, 1, 2, 3];
    console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
    console.log("Key(6) found at: " + binarySearchRotated(v2, 6));  

 
// Find the smallest common number
// Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.
    // In the example below,​ you are given three positive integer arrays which are sorted in ascending order.You have to find the smallest number that is common in all three arrays. Return -1 if the smallest common number is not found.

// Questions: 
// -> Are the arrays different lengths? 
// -> negative integers within the array?
// -> are there cases where one of the arrays is empty? 
// -> in cases where you reach the end of an array, return -1? 


    let findLeastCommonNumber = (a,b,c) => {
        if (a.length === 0 || b.length === 0 || c.length === 0) {
            return -1
        }

        let i = 0
        let j = 0
        let k = 0

        while (i < a.length && j < b.length && k <b.length) {
            let findMinValueArr = [a[i], b[j], c[k]]

            if(a[i] === b[j] && b[j] === c[k]) {
                return a[i]
            } 

            if (Math.min(...findMinValueArr) === a[i]) {
                i++
            } else if (Math.min(...findMinValueArr) === b[j]) {
                j++
            } else if(Math.min(...findMinValueArr) === c[k]) {
                k++
            }
        } 

        return -1
    }

    // Test Cases
    let a1 = [1,2,3,4,5,6,7,8,9,10]
    let b2 = [6,7,8,9,10]
    let c3 = [2,4,6,8,50,10000]

    findSmallestCommonNumber(a1,b2,c3)

    // Time Complexity: O(n)
    // Space Complexity: O(1)


// Cyclic Sort (easy)
// We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

// Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

    let cyclicSort = (nums) => {
        let i = 0
        while (i<nums.length) {
            let j = nums[i] - 1
            if (nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            } else {
                i++
            }

        }

        return nums
    }

    Time Complexity: O(n)

    The time complexity of the above algorithm is O(n)O(n). Although we are not incrementing the index i when swapping the numbers, this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers, and once a number is at its correct index, we will move on to the next number by incrementing i. So overall, our algorithm will take O(n) + O(n-1)O(n)+O(n−1) which is asymptotically equivalent to O(n)O(n).
    
    Space Complexity: O(1)

    // Tests
    console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
    console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
    console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)

//Rotate an Array by N Elements

// Given an array of integers, rotate the array by NN elements where NN is an integer:

// For positive values of NN, perform a right rotation.
// For negative values of NN, perform a left rotation.
// Make sure you make changes to the original array.

// Questions: 
// -> can n be 0? 
// -> are array functions such as pop, shift, unshift, and push allowed? What about reverse? 

let rotateArray = (arr,n) => {
    if (n === 0) {
        return arr
    }

    // rotate left
    if (n<0) {
        while (n<0) {
            // grab first element and put it at the end 
            let firstElement = arr[0]
            arr.push(firstElement)

            // remove first element
            arr.shift()
            n++
        }
    }

    // rotate right 
    if (n>0) {
        while (n>0) {
            let lastElement = arr[arr.length -1]
            arr.pop()
            arr.unshift(lastElement)
            n--
        }
    }
}

// Other Solutions: 
// solution 1
let reverseArray = function(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };
  
  let rotateArray = function(arr, n) {
    let len = arr.length;
  
    // Let's normalize rotations
    // if n > array size or n is negative.
    n = n % len;
    if (n < 0) {
      // calculate the positive rotations needed.
      n = n + len;
    }
    // Let's partition the array based on rotations 'n'.
    // For example: 1, 2, 3, 4, 5 where n = 2.
    // -> 5, 4, 3, 2, 1
    // -> 4, 5, 3, 2, 1
    // -> 4, 5, 1, 2, 3
  
    reverseArray(arr, 0, len - 1);
    reverseArray(arr, 0, n - 1);
    reverseArray(arr, n, len - 1);
  };



//   solution 2
let rotateArray = function(arr, n) {
    let len = arr.length;
  
    // Let's normalize rotations
    // if n > array size or n is negative.
    n = n % len;
    if (n < 0) {
      // calculate the positive rotations needed.
      n = n + len;
    }
  
    let temp = [];
  
    // copy last N elements of array into temp
    for (let i = 0; i < n; i++) {
      temp[i] = arr[len - n + i];
    }
  
    // shift original array
    for (let i = len - 1; i >= n; i--) {
      arr[i] = arr[i - n];
    }
  
    // copy temp into original array
    for (let i = 0; i < n; i++) {
      arr[i] = temp[i];
    }
  };



Time complexity: O(n)
Space Complexity: O(1) - O(n)



// Find Low/High Index of a Key in a Sorted Array
// Given a sorted array of integers, return the low and high index of the given key. You must return -1 if the indexes are not found.

// The array length can be in the millions with many duplicates.

// In the following example, according to the the key, the low and high indices would be:

// key: 1, low = 0 and high = 0

// key: 2, low = 1 and high = 1

// key: 5, low = 2 and high = 9

// key: 20, low = 10 and high = 10

Example Array: [1,2,5,5,5,5,5,5,5,5,20]


Hint: Use Binary Search 

let findLowIndex = (arr, key) => {
    let low = 0
    let high = arr.length - 1
    let mid = Math.floor(high/2)

    while (low <= high) {
        if (arr[mid] >= key) {
            high = mid - 1
        } else {
            low = mid + 1
        }

        mid = low + Math.floor((high - low)/2)
    }

    if (low < arr.length && arr[low] === key) {
        return low
    }

    return -1
}

let findHighIndex = (arr,key) => {
    let low = 0
    let high = arr.length - 1
    let mid = Math.floor(high/2)

    while (low <= high) {
        if (arr[mid] > key) {
            high = mid - 1
        } else {
            low = mid + 1
        }

        mid = low + Math.floor((high - low)/2)
    }


    if (high === -1) {
        return high
    }

    if (high < arr.length && arr[high] === key) {
        return high
    }

    return -1
}

Linear Binary Search
Time Complexity: O(log n)
Space Complexity: O(1)


// Move All Zeros to the Beginning of the Array
    // Move all zeros to the left of an array while maintaining its order.

    // Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-place.
    //Use counting.
    // Use the concept of reader/writer indexes.

    let moveZerosToLeft = (arr) => {
        if (arr.length < 1) {
          return 
        }
      
        let writeIndex = arr.length - 1
        let readIndex = arr.length - 1
      
        while (readIndex >= 0) {
          if (arr[readIndex] !== 0) {
            arr[writeIndex] = arr[readIndex]
            writeIndex --
          }
      
          readIndex --
        }
      
        while (writeIndex >=0) {
          arr[writeIndex] = 0
          writeIndex --
        }
      
        return arr
    }

    let moveZerosToRight = (arr) => {
        if (arr.length < 1) {
            return arr
        }
        
        let readIndex = arr[0]
        let writeIndex = arr[0]
        
        while (readIndex<= arr.length-1) {
            if (arr[readIndex] !== 0) {
                arr[writeIndex] = arr[readIndex]
                writeIndex ++
            }
            
            readIndex ++
        }
        
        while (writeIndex<=arr.length-1) {
            arr[writeIndex] = 0
            writeIndex ++
        }
        
        return arr
    }

    Time Complexity: O(n)
    Space Complexity: O(1)


// Stock Buy Sell to Maximize Profit 
// Given a list of daily stock prices (integers for simplicity), return the buy and sell prices for making the maximum profit.

// We need to maximize the single buy/sell profit. If we can’t make any profit, we’ll try to minimize the loss. For the below examples, buy and sell prices for making a maximum profit are highlighted.

let findBuySellStockPrices = (arr) => {
    let buy = arr[0]
    let sell = arr[1]
    let currentProfit = 0 
    let globalProfit = sell - buy

    for (let i = 1; i<arr.length; i++) {
        currentProfit = arr[i] - buy

        if (currentProfit>globalProfit) {
            globalProfit = currentProfit
            sell = arr[i]
        }

        if (arr[i] < buy) {
            buy = arr[i]
        }
    }

    return [sell - globalProfit, sell]
}

Time Complexity: O(n)
Space Complexity: O(1)

// The values in the array represent the cost of a stock each day. As we can buy and sell the stock only once, we need to find the best buy and sell prices for which our profit is maximized (or loss is minimized) over a given span of time.

// A naive solution, with runtime complexity of O(n^2), is to find the maximum gain between each element and its succeeding elements.

// There is a tricky linear solution to this problem that requires maintaining current_buy_price (which is the smallest number seen so far), current_profit, and global_profit as we iterate through the entire array of stock prices. At each iteration, we will compare the current_profit with the global_profit and update the global_profit accordingly.


// Merge an Array with overlapping intervals
// You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.

// Consider the input array below. Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so they should be merged to one big interval (1, 8). Similarly, intervals (10, 12) and (12, 15) are also overlapping and should be merged to (10, 15).

// Hints: 

// Try the linear scan.
// Use the pair class defined in the exercise to handle pairs of time stamps.

// Solution: 

    class Pair {
        constructor(first, second) {
            this.first = first
            this.second = second
        }
    }

    let mergeIntervals = (arr) => {
        if (!arr || arr.length === 0) {
            return 
        }

        let result = []
        result.push(new Pair(arr[0].first, arr[0].second))

        for (let i = 1; i<arr.length; i++) {
            let input1 = arr[i].first
            let input2 = arr[i].second
            let result2 = result[result.length-1].second

            if (result2 >= input1) {
                result[result.length-1].second = Math.max(result2, input2)
            } else {
                result.push(new Pair(input1, input2))
            }
        }

        return result
    }

    // Alternate Solution (without using Pair class):

    let merge = (arr) => {
    
        if (!arr || arr.length === 0) {
            return
        }
        
        let result = []
        result.push([arr[0][0], arr[0][1]])
            
        for (let i = 1; i<arr.length; i++) {
            let input1 = arr[i][0]
            let input2 = arr[i][1]
            let result2 = result[result.length-1][1]
            
            if (result2 >= input1) {
                result[result.length-1][1] = Math.max(result2, input2)
            } else {
                result.push([input1, input2])
            }
        }
        
        return result
    }



Time Complexity: O(n)
Space Complexity O(n)

// This is the worst case when there are non-overlapping elements in the array.

// This problem can be solved in a simple linear scan algorithm. We know that input is sorted by starting timestamps. Here is the approach we are following:

//     List of input intervals is given, and we’ll keep merged intervals in the output list.
//     For each interval in the input list:
//         If the input interval is overlapping with the last interval in output list then we’ll merge these two intervals and update the last interval of output list with merged interval.
//         Otherwise, we’ll add an input interval to the output list.



// Sort an Array using QuickSort Alogrithm
// Given an integer array, sort it in ascending order using the quicksort algorithm.
    // Hints #
    // Use the divide and conquer strategy.
    // Use Hoare’s algorithm.

let partition = (arr, low, high) => {
    let pivot = arr[low]
    let i = low
    let j = high

    while (i<j) {
        while (i<=high && arr[i]<= pivot) {
            i++
        }

        while (arr[j] > pivot) {
            j--
        }

        if (i<j) {
            let current = arr[i]
            arr[i] = arr[j]
            arr[j] = current
        }
    }

    // note that i and j represent the exact points where the pivot fits. j becomes the low side and i becomes the high side. Since the pivot is greater than arr[j], we need to switch the pivot and arr[j]. Before we can do that, we need to set the low end of the arr to arr[j]. This works because the original value of arr[low] is preserved in the pivot variable. Once arr[low] is set to arr[j], we can change arr[j] to the pivot and return j.  

    arr[low] = arr[j]
    arr[j] = pivot


    return j

    // note that we return J because 
}

let quickSortRec = (arr, low, high) => {
    if (high > low) {
        let pivot = partition(arr, low, high)
        quickSortRec(a, low, pivot - 1)
        quickSortRec(a, pivot + 1, high)
    }
}

let quickSort = (arr) => {
    quickSortRec(arr, 0, arr.length - 1)
}


Time Complexity: O(n logn)
Space Complexity: O(log n)
-> This recursive solution has an O(logn)O(logn) memory complexity since it consumes memory on the stack.

// practice implementing quickSort()

let partition = (arr, low, high) => {
    
    let pivot = arr[low]
    let i = low
    let j = high

    while (j>i) {
        while (high >= i && pivot >= arr[i]) {
            i++
        }

        while (arr[j] > pivot) {
            j--
        }

        if (j>i) {
            let current = arr[i]
            arr[i] = arr[j]
            arr[j] = current
        }
    }

    arr[low] = arr[j]
    arr[j] = pivot

    return j
}

let quickSortRec = (arr, low, high) => {
    if (high > low) {
        let pivot = partition(arr, low, high)
        quickSortRec(arr, low, pivot - 1)
        quickSortRec(arr, pivot + 1, high)
    }
}

let quickSort = (arr) => {
    quickSortRec(arr, 0, arr.length-1)
}

// Here is an overview of how the quicksort algorithm works:

// Select a pivot element from the array to divide the array into two parts based on the pivot.
// We pick the first element as the pivot if we follow Hoare’s algorithm. Another common approach is to select a random element as the pivot.
// Reorder the array by comparing with the pivot element such that smaller values end up at the left side, and larger values end up at the right side of the pivot.
// Now, the pivot element is in its correct sorted position.
// Applying the above steps, we can recursively sort the sublists on the right and left sides of the pivot.


// other algorithms to know 
-> find symmetric difference
-> inventory update
-> no repeats please
-> pairwise
-> bubble sort
-> insertion sort
-> selection sort
-> quick sort
-> merge sort



// Recursion Practice

// Find the greatest common divisor
// Implement a function that takes two numbers, testVariable1 and testVariable2 and returns their greatest common divisor.

Solution: 

let gcd = (var1, var2) => {
    if (var1 === var2) {
        return var1
    }

    if (var1>var2) {
        return gcd(var1-var2, var2)
    } else {
        return gcd(var1, var2 - var1)
    }

    return null
}

let agreed = () => {

    console.log('agreed')
    agreed() 
}

The naive approach to finding GCDGCD of 22 numbers is to list all their divisors. Then pick the common divisors, and then select the greatest out of them.

However, an easy mathematical simplification can make our task easier. The idea behind calculating GCDGCD is: If m>n, GCD(m,n) is the same as GCD(m-n,n).

This is because if m/d and n/d both leave no remainder, then (m-n)/d leaves no remainder, either.


// Pascal's Triangle
// Given a number, return a list containing the values of the Pascal's Triangle of that size.

Solution: 

let printPascal = (row) => {
    let line = []

    // If we reach 0th row, we return a list containing only 11 value: [1][1]. This is our base case.
    if (row === 0) {
        return [1]
    } else {
        // Each row in Pascal’s triangle starts with a 11, and ends with a 11, hence line is initialized with [1] and later 11 is pushed in line variable
        line.push(1)

        // Also, each row is calculated based on the values of the previous row. Thus, the function makes a recursive function call with the previous row number as its argument
        let previousLine = printPascal(row-1)

        // Now, for each recursive call, we use the values of the previous solution.
        for (let i = 0; i<previousLine.length-1; i++) {
            line.push(previousLine[i] + previousLine[i+1])
        }


        line.push(1)
    }

    return line
}


// Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Iterative: O(n) time complexity and O(1) space complexity
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    
    let next = null
    let current = head
    let previous = null
    
    while (current) {    
        next = current.next
        current.next = previous
        previous = current
        current = next
    }
    
    return previous
};

// Recursive
[1 -> 2 -> 3 -> null ]
head = [1 -> 2 -> 3 -> null]
reversedHead = [2 -> 3 -> null] -> reversedHead = [2 -> 3 -> ]



let reverseList = (head) => {
    if (!head || !head.next) {
        return head
    }

    let reversedHead = reverseList(head.next)
    reversedHead.next.next = head
    head.next = null
    return reversedHead



}



// Merge Sorted Linked Lists

// Recursive

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class listNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

 var mergeTwoLists = function(list1, list2) {
    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }

};

// iterative
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new Node(0)
    let tail = dummyNode
    
    while (true) {
        if (list1 == null) {
            tail.next = list2
            break
        }
        
        if (list2 == null) {
            tail.next = list1
            break
        }
        
        if (list1.val <= list2.val) {
            tail.next = list1
            list1 = list1.next
        } else { 
            tail.next = list2
            list2 = list2.next
        }
        
        tail = tail.next
    }
    
    return dummyNode.next
};


// Linked Lists - Push & BuildOneTwoThree

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

// Here's an example of push() usage:

// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
// The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

// The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null

function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
  function push(head, data) {
    return new Node (data, head)
  }
  
  function buildOneTwoThree() {
    let arr = null
    arr = push(arr, 3)
    arr = push(arr, 2)
    arr = push(arr, 1)
    
    return arr
  }

// Remove Duplicates of Linked List
// The runtime complexity of this problem is Linear, O(n)O(n) - where n is the length of the linked list.
// The memory complexity of this problem is Linear, O(n)O(n) - to store visited nodes in the hashset.


// The interviewer might say that we are not allowed to use any extra memory, i.e., the space complexity of our algorithm should be O(1)O(1).
    // We can take these approaches based on the requirements:

        // If we are allowed to change the order of the list, we can just sort the linked list in O(n logn)O(nlogn) time. After sorting, all duplicates must be adjacent and can be removed in a linear scan.

        // For each node in the linked list, do another scan of the preceding nodes to see if it already exists or not. The time complexity of this algorithm is O(n^2) and does not require any extra space.

let removeDuplicates = (head) => {
    if (!head || !head.next) {return head}

    let dupSet = new Set()
    dupSet.add(head.data)
    let curr = head

    while (curr.next) {
        if (dupSet.has(curr.next.data)) {
            curr.next = curr.next.next
        } else {
            dupSet.add(curr.next.data)
            curr = curr.next
        }
    }

    return head
}


// Find Missing Number
    // We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

    // Example 1:

    // Input: [4, 0, 3, 1]
    // Output: 2
    // Example 2:

    // Input: [8, 3, 5, 2, 4, 6, 0, 1]
    // Output: 7

let findMissingNumber = (nums) => {
    let i = 0
    while (i<nums.length) {
        j = nums[i]

        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }

    for (let k = 0; k<=nums.length; k++) {
        if (nums[k] == undefined) {
            return k
        }
    }

    return -1
}

// The time complexity of the above algorithm is O(n)O(n). In the while loop, although we are not incrementing the index i when swapping the numbers, this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers and once a number is at its correct index, we will move on to the next number by incrementing i. In the end, we iterate the input array again to find the first number missing from its index, so overall, our algorithm will take O(n) + O(n-1) + O(n)O(n)+O(n−1)+O(n) which is asymptotically equivalent to O(n)O(n).

// Space Complexity: O(1)

// Sliding Window

K = 5
arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]

let findAverageOfSubArrays = (K, arr) => {
    let result = []
    let windowSum = 0, 
        windowStart = 0
    for (let i = 0; i<arr.length;i++) {
        windowSum += arr[i]

        if (i >= K-1) { //why do we subtract -1

            // add the average to the result
            result.push(windowSum/K)

            // remove the first item from the windowSum. 
            windowSum -= arr[windowStart]

            // move the windowStart forward 
            windowStart ++
        }
    }

    return result
}


// my solution
let findMaxSubArray = (k, arr) => {
    let result = []
    let windowStart = 0, windowSum = 0
    
    for (let i = 0; i<arr.length; i++) {
        windowSum += arr[i]
        
        if (i>= k-1) {
            result.push(windowSum)
            windowSum -= arr[windowStart]
            windowStart ++
        }
    }

    return Math.max(...result)
}

// example solution

let findMaxSubArray = (k,arr) => {
    let maxSum = 0, windowStart = 0, windowSum = 0

    for (let i = 0; i<arr.length; i++) {
        windowSum += arr[i]

        if (i>= k -1) {
            maxSum = Math.max(windowSum, maxSum)
            windowSum -= arr[windowStart]
            windowStart ++
        }
    }

    return maxSum
}

Time Complexity: O(n)
Space Complexity: O(1)

// minSizeSubArray
// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

let smallestSubArray = (s, arr) => {
    let sum = 0, windowStart = 0, minSize = Infinity
    for (let i = 0; i<arr.length; i++) {
        sum += arr[i]

        while (sum>=s) {
            minSize = Math.min(minSize, i - windowStart + 1)
            sum -= arr[windowStart]
            windowStart ++
        }
    }

    if (minSize === Infinity) return minSize
    return minSize
}

// longest substring of nonrepeating characters
// Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

//Notes on what's going inside
    {a: 0, b: 1, c: 2}
    windowSize = 3
    windowStart = 0
    windowEnd = 2

    // iterate to windowEnd = 3
    a exists in hashMap
    windowStart = 0
    // hashMap[right] = {a:0}
    hashMap[right] = 0
    windowStart = Math.max(0, 1) //iterates windowStart to 1


 let lengthOfLongestSubstring = (s) => {
    let hashMap = {}, windowStart = 0, windowSize = 0

    for (let windowEnd = 0; windowEnd<s.length; i++) {
        let right = s[windowEnd]
        if (right in hashMap) {
            // 
            windowStart = Math.max(windowStart, hashMap[right] + 1)
        }

        // keep track of the index of each letter
        // ie. {a: 0, b:1} etc. 
        hashMap[right] = windowEnd
        windowSize = Math.max(windowSize, i - windowStart + 1)
    }
    return windowSize
 }

//  Longest substring with max K distinct subchars

let longestSubstringWithDistinct = (str, k) => {
    // hashMap is used to keep track of character count.

    let hashMap = {}, windowStart = 0, windowSize = 0

    for (let windowEnd = 0; windowEnd<str.length; i++) {
        let right = str[windowEnd]

        // adds characters at the end of the window to the hashmap
        if (!(right in hashMap)) {
            hashMap[right] = 0
        }

        hashMap[right] ++

        // keeps the window sized correctly. if the number of distinct characters is greater than k, we need to remove characters from the front of the sliding window. 
        while (Object.keys(hashMap).length > k) {
            let left = str[windowStart]
            hashMap[left] --
            if (hashMap[left] -- === 0) {
                delete hashMap[left]
            }
            windowStart ++
        }

        // keeps track of the largest windowSize
        windowSize = Math.max(windowSize, windowEnd - windowStart + 1)
    }

    return windowSize

}


//longest substring with same letter replacement

let lengthOfLongestSubstring = (str, k) => {
    let hashMap = {}, windowStart = 0, windowSize = 0, maxLetterCount = 0
    for (let windowEnd = 0; windowEnd<str.length; windowEnd ++) {
        let right = str[windowEnd]
        if (!(right in hashMap)) {
            hashMap[right] = 0
        }

        hashMap[right] ++
        maxLetterCount = Math.max(maxLetterCount, hashMap[right])

        if (windowEnd - windowStart + 1 - maxLetterCount > k) {
            let left = str[windowStart]
            hashMap[left] -- 
            if (hashMap[left] === 0) {
                delete hashMap[left]
            }

            windowStart ++
        }

        windowSize = Math.max(windowSize, windowEnd - windowStart + 1)
    }

    return windowSize
}

// The above algorithm’s time complexity will be O(N)O(N), where ‘N’ is the number of letters in the input string.
// As we expect only the lower case letters in the input string, we can conclude that the space complexity will be O(26)O(26) to store each letter’s frequency in the HashMap, which is asymptotically equal to O(1)O(1).


let lengthOfLongestSubstring = (arr, k) => {
    let windowStart = 0, windowSize = 0, countOnes = 0
    for (let windowEnd = 0; windowEnd<arr.length; windowEnd ++) {
        if (arr[windowEnd === 1]) {countOnes ++}

        if (windowEnd - windowStart + 1 - countOnes > k) {
            if (arr[windowStart] === 1) {
                countOnes --
            }

            windowStart ++
        }

        windowSize = Math.max(windowSize, windowEnd - windowStart + 1)
    }

    return windowSize
}

Time Complexity: O(n)
Space Complexity: O(1)



// Permutation String
// Given a string and a pattern, find out if the string contains any permutation of the pattern.

let findPermutation = (str, pattern) => {
    let hashMap = {}, windowStart = 0, matched = 0

    for (let i = 0; i<pattern.length; i++) {
        let char = pattern[i]
        if (!(char in hashMap)) hashMap[char] = 0
        hashMap[char] ++
    }
    
    for (let windowEnd = 0; windowEnd<str.length; windowEnd++) {
        let right = str[windowEnd]
        if (right in hashMap) {
            hashMap[right] --
            if (hashMap[right] === 0) matched ++
        }

        if (Object.keys(hashMap).length === matched) return true

        if (windowEnd - windowStart + 1 >= pattern.length) {
            let left = str[windowStart]
            if (left in hashMap) {
                if (hashMap[left] == 0) matched --
                hashMap[left] ++
            }

            windowStart ++
        }
    }
    return false
}

Time Complexity: O(N+M) where N and M are the number of characters in the string and pattern respectively
Space Complexity: O(M) in the worst case where the whole pattern can have distinct characters that will go into the HashMap.

// Two Pointer

// two-pointer approach
let pair_with_targetsum = (arr, target_sum) => {
    // note does not work for unsorted arrays
    let start = 0, end = arr.length - 1
    while (left < right) {
        if (arr[start] + arr[end] == target_sum) return [start, end]
      if (arr[start] + arr[end] > target_sum) {
        end--
      } else {
        start ++
      }
    }
  
    return [-1, -1]
  }

Time Complexity: O(n)
Space Complexity: O(1)

//Hash Table
let pair_with_targetsum = (arr, target_sum) => {
    let hashMap = {}
    for (let i = 0; i<arr.length; i++) {
        hashMap[arr[i]] = i
    }

    for (let i = 0; i<arr.length; i++) {
        target = target_sum - arr[i]
        if (hashMap[target] && target !== arr[i]) {
            return [i, hashMap[target]]
        }
    }
}

//alternative solution 
let pair_with_targetsum = (arr, targetSum) => {
    let nums = {}
    for (let i = 0; i<arr.length; i++) {
        let num = arr[i]
        if (targetSum - num in nums) {
            return [nums[targetSum - num], i]
        }

        nums[num] = i
    }
}

Time Complexity; O(N)
Space Complexity: O(N) -> The space complexity will also be O(N)O(N), as, in the worst case, we will be pushing ‘N’ numbers in the HashTable.


// Remove Duplicates (easy)

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

let removeDuplicates = (arr) => {
    let nextNonDuplicates = 1
    let i = 1
    while (i<arr.length) {
        if (arr[nextNonDuplicates - 1] !== arr[i]) {
            arr[nextNonDuplicates] = arr[i]
            nextNonDuplicates ++
        } 

        i++
    }

    return nextNonDuplicates
}

// Similar Questions#
// Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

let remove_element = (arr,key) => {
    let nextNonKey = 0
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] !== key) {
            arr[nextNonKey] = arr[i]
            nextNonKey ++
        }
    }
    return nextNonKey
}

// Squaring a Sorted Array
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const make_squares = function(arr) {
    let start = 0, end = arr.length-1, squares = [], highestSquareIndex = arr.length-1
  
    while (start<=end) {
      let startSquare = arr[start] ** 2, endSquare = arr[end] ** 2
  
      if (startSquare > endSquare) {
        squares[highestSquareIndex] = startSquare
        start ++
      } else {
        squares[highestSquareIndex] = endSquare
        end --
      }
  
      highestSquareIndex --
    }
  
    return squares
  };

Time Complexity: O(n)
Space Complexity: O(n)
  
// Triplet Sum to Zero (medium)
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

let search_triplets = (arr) => {
    let triplets = [] 
    for (let i = 0; i<arr.length; i++) {
        if (i>0 && arr[i] === arr[i-1]) {
            continue
        }

        search_pair(arr, -arr[i], i+1, triplets)
    }

    return triplets

}

let search_pair = (arr, targetSum, left, triplets) => {
    let right = arr.length - 1
    while (left<right) {
        let currentSum = arr[left] + arr[right]
        if (targetSum + currentSum === 0) {
            triplets.push([arr[left], arr[right], -targetSum])
            left ++
            right --

            while (left<right && arr[left] === arr[left-1]) {
                left ++
            }

            while(left<right && arr[right] === arr[right+1]) {
                right --
            }
        }

        if (targetSum>currentSum) {
            left ++
        } else {
            right --
        }
    }
}

Time Complexity: O(n^2)
Space Complexity: O(n) Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.


// Triplet Sum Close to Target (medium)
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function(arr, targetSum) {
    arr.sort((a,b) => a-b)
    let smallestDifference = Infinity
    for (let i = 0; i<arr.length; i++) {
      let left = i + 1, right = arr.length - 1
      while (left < right) {
        let targetDiff = targetSum - arr[i] - arr[left] - arr[right]
        if (targetDiff === 0) return targetSum
  
        if (Math.abs(targetDiff) < Math.abs(smallestDifference) || 
          (Math.abs(targetDiff) === Math.abs(smallestDifference) && targetDiff > smallestDifference)) {
          smallestDifference = targetDiff
        }
  
        if (targetDiff > 0) {
          left ++
        } else {
          right --
        }
      }
    }
  
    return targetSum - smallestDifference
  
  };

  Time Complexity: Sorting the array will take O(N* logN)O(N∗logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).
  Space Complexity: The above algorithm’s space complexity will be O(N)O(N), which is required for sorting.