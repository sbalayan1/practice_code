// Find Maximum in sliding window 

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